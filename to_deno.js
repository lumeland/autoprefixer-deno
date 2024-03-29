import { convert } from "https://deno.land/x/nodedeno@v0.2.12/mod.js";

const features = [
  "aac",
  "border-radius",
  "css-boxshadow",
  "css-animation",
  "css-transitions",
  "transforms2d",
  "transforms3d",
  "css-gradients",
  "css3-boxsizing",
  "css-filters",
  "css-filter-function",
  "css-backdrop-filter",
  "css-element-function",
  "multicolumn",
  "user-select-none",
  "flexbox",
  "calc",
  "background-img-opts",
  "background-clip-text",
  "font-feature",
  "font-kerning",
  "border-image",
  "css-selection",
  "css-placeholder",
  "css-placeholder-shown",
  "css-hyphens",
  "fullscreen",
  "css3-tabsize",
  "intrinsic-width",
  "css3-cursors-newer",
  "css3-cursors-grab",
  "css-sticky",
  "pointer",
  "text-decoration",
  "text-size-adjust",
  "css-masks",
  "css-clip-path",
  "css-boxdecorationbreak",
  "object-fit",
  "css-shapes",
  "text-overflow",
  "css-deviceadaptation",
  "css-media-resolution",
  "css-text-align-last",
  "css-crisp-edges",
  "css-logical-props",
  "css-appearance",
  "css-snappoints",
  "css-regions",
  "css-image-set",
  "css-writing-mode",
  "css-cross-fade",
  "css-read-only-write",
  "text-emphasis",
  "css-grid",
  "css-text-spacing",
  "css-any-link",
  "css-overscroll-behavior",
  "css-color-adjust",
  "css-text-orientation",
  "css-autofill",
  "css-file-selector-button",
  "css-width-stretch",
  "css-print-color-adjust",
  "css-featurequeries",
  "mdn-text-decoration-shorthand",
  "mdn-text-decoration-color",
  "mdn-text-decoration-line",
  "mdn-text-decoration-style",
  "mdn-css-unicode-bidi-isolate",
  "mdn-css-unicode-bidi-plaintext",
  "mdn-css-unicode-bidi-isolate-override",
];

const download = {
  "https://esm.sh/v92/caniuse-lite@1.0.30001399/es2022/caniuse-lite.js":
    "data/caniuse-lite.js",
};

features.forEach((feature) => {
  const url =
    `https://esm.sh/v92/caniuse-lite@1.0.30001399/es2022/data/features/${feature}.js`;
  const dest = `data/features/${feature}.js`;
  download[url] = dest;
});

//Convert the code
await convert({
  src: "autoprefixer",
  input: ["lib", "data"],
  output: "deno",
  transpile: true,
  modules: {
    "": "mod.js",
    "deps.js": "lib/deps.js",
    "lib/utils.js": {
      default: false,
    },
    "lib/hacks/grid-utils.js": {
      default: false,
    },
  },
  copy: {
    "mod.js": "mod.js",
    "deps.js": "lib/deps.js",
    "test": "test",
    "autoprefixer/test/cases": "test/cases",
  },
  download,
});
