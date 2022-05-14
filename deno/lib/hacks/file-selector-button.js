import Selector from "../selector.js";
import * as utils from "../utils.js";

class FileSelectorButton extends Selector {
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
      return "::-webkit-file-upload-button";
    }
    return `::${prefix}file-selector-button`;
  }
}

FileSelectorButton.names = ["::file-selector-button"];

export default FileSelectorButton;
