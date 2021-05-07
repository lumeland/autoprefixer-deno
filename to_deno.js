import { convert } from "https://deno.land/x/nodedeno@v0.2.7/mod.js";

//Convert the code
await convert({
  src: "autoprefixer",
  input: ["lib", "data"],
  output: "deno",
  transpile: true,
  modules: {
    "": "mod.js",
    "deps.js": "lib/deps.js",
    // Or an object with options
    "lib/utils.js": {
      default: false,
    },
    "lib/hacks/grid-utils.js": {
      default: false,
    },
  },
  copy: {
    "deps.js": "lib/deps.js",
    "test": "test",
    "autoprefixer/test/cases": "test/cases",
  },
  beforeConvert(src, { replaceAll, rename }) {
  },
  afterConvert(src, { replaceAll }) {
  },
});
