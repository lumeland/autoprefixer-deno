import { assert, assertEquals, postcss } from "./deps.js";
import autoprefixer from "../mod.js";

let grider = autoprefixer({
  overrideBrowserslist: ["Chrome 25", "Edge 12", "IE 10"],
  cascade: false,
  grid: "autoplace",
});

let cleaner = autoprefixer({
  overrideBrowserslist: [],
});
let compiler = autoprefixer({
  overrideBrowserslist: ["Chrome 25", "Opera 12"],
});
let filterer = autoprefixer({
  overrideBrowserslist: ["Chrome 25", "Safari 9", "Firefox 39"],
});
let borderer = autoprefixer({
  overrideBrowserslist: ["Safari 4", "Firefox 3.6"],
});
let cascader = autoprefixer({
  overrideBrowserslist: ["Chrome > 19", "Firefox 21", "IE 10"],
  cascade: true,
});
let keyframer = autoprefixer({
  overrideBrowserslist: ["Chrome > 19", "Opera 12"],
});
let flexboxer = autoprefixer({
  overrideBrowserslist: ["Chrome > 19", "Firefox 21", "IE 10"],
});
let without3d = autoprefixer({
  overrideBrowserslist: ["Opera 12", "IE > 0"],
});
let supporter = autoprefixer({
  overrideBrowserslist: ["Chrome 25", "Chrome 28", "IE > 0"],
});
let uncascader = autoprefixer({
  overrideBrowserslist: ["Firefox 15"],
});
let gradienter = autoprefixer({
  overrideBrowserslist: ["Chrome 25", "Opera 12", "Android 2.3"],
});
let grouping = autoprefixer({
  overrideBrowserslist: ["Chrome 25", "Firefox > 17", "IE 10", "Edge 12"],
  grid: "autoplace",
});
let ffgradienter = autoprefixer({
  overrideBrowserslist: ["Chrome 25", "Opera 12", "Firefox 6"],
});
let selectorer = autoprefixer({
  overrideBrowserslist: ["Chrome 25", "Firefox > 17", "IE 10", "Edge 12"],
});
let placeholderShowner = autoprefixer({
  overrideBrowserslist: ["IE >= 10"],
});
let transitionSpec = autoprefixer({
  overrideBrowserslist: ["Chrome > 19", "Firefox 14", "IE 10", "Opera 12"],
});
let intrinsicer = autoprefixer({
  overrideBrowserslist: ["Chrome 25", "Firefox 22", "Safari 10"],
});
let imagerender = autoprefixer({
  overrideBrowserslist: ["iOS 8", "iOS 6.1", "FF 22", "IE 11", "Opera 12"],
});
let backgrounder = autoprefixer({
  overrideBrowserslist: ["Firefox 3.6", "Android 2.3"],
});
let resolutioner = autoprefixer({
  overrideBrowserslist: ["Safari 7", "Opera 12", "Firefox 15"],
});
let overscroller = autoprefixer({
  overrideBrowserslist: ["Edge 17"],
});
let clipper = autoprefixer({
  overrideBrowserslist: ["Safari 7", "Edge 14"],
});
let example = autoprefixer({
  overrideBrowserslist: ["defaults"],
});

function prefixer(name) {
  if (
    name === "grid" ||
    name === "grid-gap" ||
    name === "grid-area" ||
    name === "grid-template" ||
    name === "grid-template-areas"
  ) {
    return grider;
  } else if (
    name === "filter" ||
    name === "advanced-filter" ||
    name === "element"
  ) {
    return filterer;
  } else if (
    name === "vendor-hack" ||
    name === "value-hack" ||
    name === "mistakes"
  ) {
    return cleaner;
  } else if (
    name === "flexbox" ||
    name === "flex-rewrite" ||
    name === "double" ||
    name === "viewport" ||
    name === "appearance"
  ) {
    return flexboxer;
  } else if (
    name === "intrinsic" ||
    name === "multicolumn" ||
    name === "logical" ||
    name === "text-decoration" ||
    name === "at-rules"
  ) {
    return intrinsicer;
  } else if (name === "selectors" || name === "placeholder") {
    return selectorer;
  } else if (name === "placeholder-shown") {
    return placeholderShowner;
  } else if (name === "backdrop-filter" || name === "overscroll-behavior") {
    return overscroller;
  } else if (name === "background-clip" || name === "user-select") {
    return clipper;
  } else if (name === "image-rendering" || name === "writing-mode") {
    return imagerender;
  } else if (name === "keyframes") {
    return keyframer;
  } else if (name === "border-radius") {
    return borderer;
  } else if (name === "gradient") {
    return gradienter;
  } else if (name === "gradient-fix") {
    return ffgradienter;
  } else if (name === "grouping-rule") {
    return grouping;
  } else if (name === "cascade") {
    return cascader;
  } else if (name === "3d-transform") {
    return without3d;
  } else if (name === "background-size") {
    return backgrounder;
  } else if (name === "uncascade") {
    return uncascader;
  } else if (name === "example") {
    return example;
  } else if (name === "resolution") {
    return resolutioner;
  } else if (name === "supports") {
    return supporter;
  } else if (name === "transition-spec") {
    return transitionSpec;
  } else {
    return compiler;
  }
}

function read(name) {
  const file = new URL(`../test/cases/${name}.css`, import.meta.url).pathname;
  return Deno.readTextFileSync(file);
}

function universalizer(string) {
  return string.replace(/\r/g, "");
}

function check(from, instance = prefixer(from)) {
  let input = read(from);
  let output = read(from + ".out");
  let result = postcss([instance]).process(input);
  assert(result.warnings().length === 0);
  assertEquals(universalizer(result.css), universalizer(output));
}

let options = {
  cascade: false,
  grid: false,
};

let browsers = ["chrome 25", "opera 12"];

Deno.test("sets options via options object", () => {
  let allOptions = Object.assign(options, { overrideBrowserslist: browsers });
  let instance = autoprefixer(allOptions);
  assertEquals(instance.options, allOptions);
  assertEquals(instance.browsers, browsers);
});

Deno.test("sets options via array of browsers as first argument and object", () => {
  let instance = autoprefixer(browsers, options);
  assertEquals(instance.options, options);
  assertEquals(instance.browsers, browsers);
});

Deno.test("sets options via browsers as arguments and options object", () => {
  let instance = autoprefixer(...browsers, options);
  assertEquals(instance.options, options);
  assertEquals(instance.browsers, browsers);
});

Deno.test('has default browsers', () => {
  assert(autoprefixer.defaults.length > 0);
})

Deno.test("add prefix for backface-visibility for Safari 9", () => {
  let input = "a{ " + "backface-visibility: hidden; " +
    "transform-style: preserve-3d }";
  let ap = autoprefixer({
    overrideBrowserslist: ["Safari 9"],
    flexbox: false,
  });
  assertEquals(
    postcss([ap]).process(input).css,
    "a{ " +
      "-webkit-backface-visibility: hidden; " +
      "backface-visibility: hidden; " +
      "transform-style: preserve-3d }",
  );
});

Deno.test("prefixes values", () => {
  check("values");
});
Deno.test("prefixes @keyframes", () => {
  check("keyframes");
});
Deno.test("prefixes @viewport", () => {
  check("viewport");
});
Deno.test("prefixes selectors", () => {
  check("selectors");
});
Deno.test("prefixes resolution query", () => {
  check("resolution");
});
Deno.test("removes common mistakes", () => {
  check("mistakes");
});
Deno.test("reads notes for prefixes", () => {
  check("notes");
});
Deno.test("keeps vendor-specific hacks", () => {
  check("vendor-hack");
});
Deno.test("keeps values with vendor hacks", () => {
  check("value-hack");
});
Deno.test("works with comments", () => {
  check("comments");
});
Deno.test("uses visual cascade", () => {
  check("cascade");
});
Deno.test("works with properties near", () => {
  check("double");
});
Deno.test("checks prefixed in hacks", () => {
  check("check-down");
});
Deno.test("normalize cascade after remove", () => {
  check("uncascade");
});
Deno.test("prefix decls in @supports", () => {
  check("supports");
});
Deno.test("saves declaration style", () => {
  check("style");
});
Deno.test("uses ignore next control comments", () => {
  check("ignore-next");
});
Deno.test("uses block control comments", () => {
  check("disabled");
});
Deno.test("has actual example in docs", () => {
  check("example");
});
Deno.test("process grouping rules correctly", () => {
  check("grouping-rule");
});
Deno.test("transition on vendor specific rule", () => {
  check("transition-spec");
});
Deno.test("ignore prefix in vendor at rules", () => {
  check("at-rules");
});
