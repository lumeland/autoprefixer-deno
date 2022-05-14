import Selector from "../selector.js";
import * as utils from "../utils.js";

class Autofill extends Selector {
  constructor(name, prefixes, all) {
    super(name, prefixes, all);

    if (this.prefixes) {
      this.prefixes = utils.uniq(this.prefixes.map(() => "-webkit-"));
    }
  }

  /**
   * Return different selectors depend on prefix
   */
  prefixed(prefix) {
    if (prefix === "-webkit-") {
      return ":-webkit-autofill";
    }
    return `:${prefix}autofill`;
  }
}

Autofill.names = [":autofill"];

export default Autofill;
