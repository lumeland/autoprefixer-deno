import {
  assert,
  assertEquals,
  assertMatch,
  assertThrows,
  postcss,
} from "./deps.js";
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
let autofiller = autoprefixer({
  overrideBrowserslist: ["Chrome > 90", "Firefox >= 82"],
});
let content = autoprefixer({
  overrideBrowserslist: [
    "> 2%",
    "last 2 years",
    "ie 11",
    "not ie_mob > 0",
    "not dead",
  ],
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
  } else if (name === "selectors" || name === "file-selector-button") {
    return fileSelectorButtoner;
  } else if (
    name === "selectors" ||
    name === "autofill" ||
    name === "print-color-adjust"
  ) {
    return autofiller;
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
  } else if (name === "content") {
    return content;
  } else {
    return compiler;
  }
}

function read(name) {
  const file = new URL(`../test/cases/${name}.css`, import.meta.url).pathname;
  try {
    return Deno.readTextFileSync(file);
  } catch {
    console.error({ file });
  }
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

const COMMONS = [
  "transition",
  "values",
  "keyframes",
  "gradient",
  "flex-rewrite",
  "flexbox",
  "filter",
  "border-image",
  "border-radius",
  "notes",
  "selectors",
  "placeholder",
  "placeholder-shown",
  "fullscreen",
  "intrinsic",
  "mistakes",
  "custom-prefix",
  "cascade",
  "double",
  "multicolumn",
  "3d-transform",
  "background-size",
  "supports",
  "viewport",
  "resolution",
  "logical",
  "appearance",
  "advanced-filter",
  "element",
  "image-set",
  "image-rendering",
  "mask-border",
  "writing-mode",
  "cross-fade",
  "gradient-fix",
  "text-emphasis-position",
  "grid",
  "grid-area",
  "grid-template",
  "grid-template-areas",
  "grid-gap",
  "print-color-adjust",
];

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

Deno.test("has default browsers", () => {
  assert(autoprefixer.defaults.length > 0);
});

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

Deno.test("ignore content property", () => {
  let input = read("content");
  let result = postcss([prefixer("scope")]).process(input);
  assertEquals(result.css, input);
});

Deno.test("uses control comments to whole scope", () => {
  let input = read("scope");
  let output = read("scope.out");
  let result = postcss([prefixer("scope")]).process(input);

  assertEquals(result.css, output);
  assertEquals(result.warnings().map((i) => i.toString()), [
    "autoprefixer: <css input>:5:3: Second Autoprefixer control comment " +
    "was ignored. Autoprefixer applies control comment to whole block, " +
    "not to next rules.",
  ]);
});

Deno.test("sets grid option via comment", () => {
  let input = read("grid-status");
  let output = read("grid-status.out");
  let ap = autoprefixer({ overrideBrowserslist: ["last 2 versions", "IE 11"] });
  let result = postcss([ap]).process(input);

  assertEquals(result.css, output);
  assertEquals(result.warnings().map((i) => i.toString()), [
    "autoprefixer: <css input>:2:1: Second Autoprefixer grid control " +
    "comment was ignored. Autoprefixer applies control comments " +
    "to the whole block, not to the next rules.",
    "autoprefixer: <css input>:20:3: Second Autoprefixer grid control " +
    "comment was ignored. Autoprefixer applies control comments " +
    "to the whole block, not to the next rules.",
    "autoprefixer: <css input>:47:3: Second Autoprefixer grid control " +
    "comment was ignored. Autoprefixer applies control comments " +
    "to the whole block, not to the next rules.",
  ]);
});

Deno.test("prefixes transition", () => {
  let input = read("transition");
  let output = read("transition.out");
  let result = postcss([prefixer("transition")]).process(input);

  assertEquals(result.css, output);
  assertEquals(result.warnings().map((i) => i.toString()), [
    "autoprefixer: <css input>:23:3: Replace transition-property " +
    "to transition, because Autoprefixer could not support any cases " +
    "of transition-property and other transition-*",
  ]);
});

Deno.test("does not raise unnecessary warnings when prefixing transition", () => {
  check("transition-no-warning");
});

Deno.test("works with broken transition", () => {
  let input = "a{transition:,,}";
  let output = "a{-webkit-transition:;-o-transition:;transition:}";
  let result = postcss([prefixer("transition")]).process(input);
  assertEquals(result.css, output);
});

Deno.test("should ignore spaces inside values", () => {
  let css = read("trim");
  assertEquals(postcss([flexboxer]).process(css).css, css);
});

Deno.test("removes unnecessary prefixes", () => {
  let processor = postcss([cleaner]);
  for (let type of COMMONS) {
    if (type === "gradient-fix") continue;
    if (type === "cascade") continue;
    if (type === "mistakes") continue;
    if (type === "flex-rewrite") continue;
    if (type === "grid") continue;
    if (type === "grid-gap") continue;
    if (type === "grid-area") continue;
    if (type === "grid-template") continue;
    if (type === "grid-template-areas") continue;
    let input = read(type + ".out");
    let output = read(type);
    assertEquals(processor.process(input).css, output);
  }
});

Deno.test("media does not should nested", () => {
  let processor = postcss([grider]);
  let input = read("grid-media-rules");
  let output = read("grid-media-rules.out");
  assertEquals(processor.process(input).css, output);
});

Deno.test("does not remove unnecessary prefixes on request", () => {
  for (let type of ["transition", "values", "fullscreen"]) {
    let keeper = autoprefixer({ overrideBrowserslist: [], remove: false });
    let css = read(type + ".out");
    assertEquals(postcss([keeper]).process(css).css, css);
  }
});

Deno.test("does not add prefixes on request", () => {
  for (let type of ["transition", "values", "fullscreen"]) {
    let remover = autoprefixer({
      overrideBrowserslist: ["Opera 12"],
      add: false,
    });
    let unprefixed = read(type);
    assertEquals(postcss([remover]).process(unprefixed).css, unprefixed);
  }
});

Deno.test("prevents doubling prefixes", () => {
  for (let type of COMMONS) {
    let processor = postcss([prefixer(type)]);
    let input = read(type);
    let output = read(type + ".out");
    let result = processor.process(processor.process(input)).css;
    assertEquals(universalizer(result), universalizer(output));
  }
});

const isContainerNode = (node) => {
  return "nodes" in node;
};

Deno.test("does not broke AST", () => {
  function checkParent(node) {
    node.walk((child) => {
      assert(child.parent);
      if (isContainerNode(child)) checkParent(child);
    });
  }
  for (let type of COMMONS) {
    let processor = postcss([prefixer(type)]);
    let input = read(type);
    checkParent(processor.process(input).root);
  }
});

Deno.test("parses difficult files", () => {
  let input = read("syntax");
  let result = postcss([cleaner]).process(input);
  assertEquals(result.css, input);
});

Deno.test("marks parsing errors", () => {
  assertThrows(
    () => {
      postcss([cleaner]).process("a {").css;
    },
    Error,
    "<css input>:1:1: Unclosed block",
  );
});

Deno.test("shows file name in parse error", () => {
  assertThrows(
    () => {
      postcss([cleaner]).process("a {", { from: "a.css" }).css;
    },
    Error,
    "a.css:1:1: ",
  );
});

// Deno.test('uses browserslist config', () => {
//   let from = new URL("../cases/config/test.css", import.meta.url).pathname;
//   let input = read('config/test')
//   let output = read('config/test.out')
//   let processor = postcss([autoprefixer])
//   assertEquals(processor.process(input, { from }).css, output)
// })

// Deno.test('sets browserslist environment', () => {
//   let from = new URL("../cases/config/test.css", import.meta.url).pathname;
//   let input = read('config/test')
//   let output = read('config/test.production')
//   let processor = postcss([autoprefixer({ env: 'production' })])
//   assertEquals(processor.process(input, { from }).css, output)
// })

Deno.test("takes values from other PostCSS plugins", () => {
  function plugin(root) {
    root.walkDecls((i) => {
      i.value = "calc(0)";
    });
  }
  let result = postcss([plugin, compiler]).process("a{width:0/**/0}");
  assertEquals(result.css, "a{width:-webkit-calc(0);width:calc(0)}");
});

Deno.test("has option to disable @supports support", () => {
  let css = "@supports (cursor: grab) {}";
  let instance = autoprefixer({
    overrideBrowserslist: ["Chrome 28"],
    supports: false,
  });
  let result = postcss([instance]).process(css);
  assertEquals(result.css, css);
});

Deno.test("has disabled grid options by default", () => {
  let ap = autoprefixer({ overrideBrowserslist: ["Edge 12", "IE 10"] });
  let input = read("grid");
  let output = read("grid.disabled");
  let result = postcss([ap]).process(input);
  assertEquals(result.css, output);
});

Deno.test("has different outputs for different grid options", () => {
  function ap(gridValue) {
    return autoprefixer({
      overrideBrowserslist: ["Edge 12", "IE 10"],
      grid: gridValue,
    });
  }
  let input = read("grid-options");
  let outputAutoplace = read("grid-options.autoplace.out");
  let outputNoAutoplace = read("grid-options.no-autoplace.out");
  let outputDisabled = read("grid-options.disabled.out");

  let resultAutoplace = postcss([ap("autoplace")]).process(input).css;
  let resultNoAutoplace = postcss([ap("no-autoplace")]).process(input).css;
  let resultEnabled = postcss([ap(true)]).process(input).css;
  let resultDisabled = postcss([ap(false)]).process(input).css;

  // output for grid: 'autoplace'
  assertEquals(resultAutoplace, outputAutoplace);
  // output for grid: 'no-autoplace'
  assertEquals(resultNoAutoplace, outputNoAutoplace);
  // output for grid: true is the same as for 'no-autoplace'
  assertEquals(resultEnabled, outputNoAutoplace);
  // output for grid: false
  assertEquals(resultDisabled, outputDisabled);
});

// Deno.test('has different outputs for different grid environment variables', () => {
//   function ap(gridValue) {
//     Deno.env.set("AUTOPREFIXER_GRID", gridValue);
//     return autoprefixer({ overrideBrowserslist: ['Edge 12', 'IE 10'] })
//   }
//   let input = read('grid-options')
//   let outputAutoplace = read('grid-options.autoplace.out')
//   let outputNoAutoplace = read('grid-options.no-autoplace.out')

//   let resultAutoplace = postcss([ap('autoplace')]).process(input).css
//   assertEquals(resultAutoplace, outputAutoplace)

//   let resultNoAutoplace = postcss([ap('no-autoplace')]).process(input).css
//   assertEquals(resultNoAutoplace, outputNoAutoplace)
// })

Deno.test("has option to disable flexbox support", () => {
  let css = read("flexbox");
  let instance = autoprefixer({
    overrideBrowserslist: ["IE 10"],
    flexbox: false,
  });
  let result = postcss([instance]).process(css);
  assertEquals(result.css, css);
});

Deno.test("has option to disable 2009 flexbox support", () => {
  let ap = autoprefixer({
    overrideBrowserslist: ["Chrome > 19"],
    flexbox: "no-2009",
  });
  let css = "a{flex:1;transition:flex}";
  let result = postcss([ap]).process(css);
  assertEquals(
    result.css,
    "a{" +
      "-webkit-flex:1;flex:1;" +
      "-webkit-transition:-webkit-flex;transition:-webkit-flex;" +
      "transition:flex;transition:flex, -webkit-flex" +
      "}",
  );
});

Deno.test("returns inspect string", () => {
  assertMatch(
    autoprefixer({ overrideBrowserslist: ["chrome 25"] }).info(),
    /Browsers:\s+Chrome: 25/,
  );
});

// Deno.test('uses browserslist config in inspect', () => {
//   let from = new URL("../cases/config", import.meta.url).pathname;
//   assertMatch(autoprefixer().info({ from }), /Browsers:\s+IE: 10/)
// })

Deno.test("ignores unknown versions on request", () => {
  assertThrows(
    () => {
      autoprefixer({ overrideBrowserslist: ["ie 100"] }).info();
    },
    Error,
    "Unknown version 100 of ie",
  );

  autoprefixer({
    overrideBrowserslist: ["ie 100"],
    ignoreUnknownVersions: true,
  }).info();
});

Deno.test("works with CSS Modules", () => {
  postcss([autoprefixer()]).process(":export { selectors: _1q6ho_2 }").css;
});

/* Hacks */

Deno.test("ignores prefix IE filter", () => {
  check("filter");
});
Deno.test("supports webkit filters", () => {
  check("advanced-filter");
});
Deno.test("changes border image syntax", () => {
  check("border-image");
});
Deno.test("supports old Mozilla prefixes", () => {
  check("border-radius");
});
Deno.test("supports all flexbox syntaxes", () => {
  check("flexbox");
});
Deno.test("supports map flexbox props", () => {
  check("flex-rewrite");
});
Deno.test("supports all fullscreens", () => {
  check("fullscreen");
});
Deno.test("supports custom prefixes", () => {
  check("custom-prefix");
});
Deno.test("fixes break properties", () => {
  check("multicolumn");
});
Deno.test("ignores some 3D transforms", () => {
  check("3d-transform");
});
Deno.test("supports background-size", () => {
  check("background-size");
});
Deno.test("supports background-clip", () => {
  check("background-clip");
});
Deno.test("supports logical properties", () => {
  check("logical");
});
Deno.test("supports appearance", () => {
  check("appearance");
});
Deno.test("supports all placeholders", () => {
  check("placeholder");
});
Deno.test("supports placeholder-shown", () => {
  check("placeholder-shown");
});
Deno.test("supports image-rendering", () => {
  check("image-rendering");
});
Deno.test("supports border-box mask", () => {
  check("mask-border");
});
Deno.test("supports mask-composite", () => {
  check("mask-composite");
});
Deno.test("supports image-set()", () => {
  check("image-set");
});
Deno.test("supports writing-mode", () => {
  check("writing-mode");
});
Deno.test("supports cross-fade()", () => {
  check("cross-fade");
});
Deno.test("ignores modern direction", () => {
  check("animation");
});
Deno.test("supports overscroll-behavior", () => {
  check("overscroll-behavior");
});
Deno.test("supports print-color-adjust", () => {
  let input = read("print-color-adjust");
  let output = read("print-color-adjust.out");
  let result = postcss([prefixer("print-color-adjust")]).process(input);

  assertEquals(result.css, output);
  assertEquals(
    result.warnings().map((i) => i.toString()),
    [
      "autoprefixer: <css input>:2:3: Replace color-adjust " +
      "to print-color-adjust. The color-adjust shorthand " +
      "is currently deprecated.",
    ],
  );
});
Deno.test("supports backdrop-filter", () => {
  check("backdrop-filter");
});
Deno.test("supports user-select hack for IE", () => {
  check("user-select");
});

Deno.test("supports appearance for IE", () => {
  let instance = autoprefixer({ overrideBrowserslist: "Edge 15" });
  let result = postcss([instance]).process("a { appearance: none }");
  assertEquals(result.css, "a { -webkit-appearance: none; appearance: none }");
});

Deno.test("changes angle in gradient", () => {
  let input = read("gradient");
  let output = read("gradient.out");
  let result = postcss([prefixer("gradient")]).process(input);

  assertEquals(result.css, output);
  assertEquals(result.warnings().map((i) => i.toString()), [
    "autoprefixer: <css input>:18:3: Gradient has outdated direction " +
    "syntax. New syntax is like `closest-side at 0 0` instead of " +
    "`0 0, closest-side`.",
    "autoprefixer: <css input>:38:3: Gradient has outdated direction " +
    "syntax. New syntax is like `to left` instead of `right`.",
    "autoprefixer: <css input>:100:3: Gradient has outdated " +
    "direction syntax. Replace `cover` to `farthest-corner`.",
    "autoprefixer: <css input>:104:3: Gradient has outdated " +
    "direction syntax. Replace `contain` to `closest-side`.",
  ]);

  check("gradient-fix");
});

Deno.test("warns on old flexbox display", () => {
  let result = postcss([flexboxer]).process("a{ display: box; }");
  assertEquals(result.css, "a{ display: box; }");
  assertEquals(result.warnings().map((i) => i.toString()), [
    "autoprefixer: <css input>:1:4: You should write display: flex " +
    "by final spec instead of display: box",
  ]);
});

Deno.test("warns on mixed support usage", () => {
  let css = "a { display: flex; align-content: start; justify-content: end; }";
  let result = postcss([
    autoprefixer({
      overrideBrowserslist: ["IE 11"],
    }),
  ]).process(css);
  assertEquals(result.css, css);
  assertEquals(result.warnings().map((i) => i.toString()), [
    "autoprefixer: <css input>:1:20: start value has mixed support, " +
    "consider using flex-start instead",
    "autoprefixer: <css input>:1:42: end value has mixed support, " +
    "consider using flex-end instead",
  ]);
});

Deno.test("supports intrinsic sizing", () => {
  let input = read("intrinsic");
  let output = read("intrinsic.out");
  let result = postcss([prefixer("intrinsic")]).process(input);

  assertEquals(result.css, output);
  assertEquals(result.warnings().map((i) => i.toString()), [
    "autoprefixer: <css input>:15:3: Replace fill to stretch, " +
    "because spec had been changed",
    "autoprefixer: <css input>:19:3: Replace fill-available " +
    "to stretch, because spec had been changed",
  ]);
});

Deno.test("supports text-emphasis", () => {
  let input = read("text-emphasis-position");
  let output = read("text-emphasis-position.out");
  let instance = prefixer("text-emphasis-position");
  let result = postcss([instance]).process(input);

  assertEquals(result.css, output);
  assertEquals(result.warnings().map((i) => i.toString()), [
    "autoprefixer: <css input>:14:3: You should use 2 values " +
    "for text-emphasis-position For example, `under left` " +
    "instead of just `under`.",
  ]);
});

Deno.test("supports grid layout", () => {
  let input = read("grid");
  let output = read("grid.out");
  let instance = prefixer("grid");
  let result = postcss([instance]).process(input);

  assertEquals(result.css, output);
  assertEquals(result.warnings().map((i) => i.toString()), [
    "autoprefixer: <css input>:3:3: Autoplacement does not work " +
    "without grid-template-rows property",
    "autoprefixer: <css input>:12:3: Autoplacement does not work " +
    "without grid-template-columns property",
    "autoprefixer: <css input>:36:3: Can not prefix grid-column-end " +
    "(grid-column-start is not found)",
    "autoprefixer: <css input>:37:3: IE does not support subgrid",
    "autoprefixer: <css input>:39:3: Can not implement grid-gap " +
    "without grid-template-columns",
    "autoprefixer: <css input>:39:3: Can not find grid areas: " +
    "head, nav, main, foot",
    "autoprefixer: <css input>:57:3: Can not implement grid-gap " +
    "without grid-template-columns",
    "autoprefixer: <css input>:57:3: Can not find grid areas: a",
    "autoprefixer: <css input>:65:3: Can not implement grid-gap " +
    "without grid-template-columns",
    "autoprefixer: <css input>:65:3: Can not find grid areas: b",
    "autoprefixer: <css input>:73:3: Can not find grid areas: c",
    "autoprefixer: <css input>:81:3: Can not find grid areas: d",
    "autoprefixer: <css input>:116:3: grid-column-span is not part " +
    "of final Grid Layout. Use grid-column.",
    "autoprefixer: <css input>:117:3: grid-row-span is not part " +
    "of final Grid Layout. Use grid-row.",
    "autoprefixer: <css input>:118:3: grid-auto-columns is not " +
    "supported by IE",
    "autoprefixer: <css input>:119:3: grid-auto-rows is not " +
    "supported by IE",
    "autoprefixer: <css input>:121:33: auto-fill value is not " +
    "supported by IE",
    "autoprefixer: <css input>:122:30: auto-fit value is not " +
    "supported by IE",
    "autoprefixer: <css input>:138:3: Please do not use " +
    "display: contents; if you have grid setting enabled",
    "autoprefixer: <css input>:142:3: IE does not support align-items " +
    "on grid containers. Try using align-self on child elements instead: " +
    ".warn_ie_align > * { align-self: center }",
    "autoprefixer: <css input>:147:3: IE does not support justify-items " +
    "on grid containers. Try using justify-self on child elements " +
    "instead: .warn_ie_justify > * { justify-self: center }",
    "autoprefixer: <css input>:152:3: IE does not support justify-content " +
    "on grid containers",
    "autoprefixer: <css input>:157:3: IE does not support place-items " +
    "on grid containers. Try using place-self on child elements " +
    "instead: .warn_place_items > * { place-self: start end }",
    "autoprefixer: <css input>:181:3: grid-auto-flow is not supported by IE",
    "autoprefixer: <css input>:203:26: Autoprefixer currently does not " +
    "support line names. Try using grid-template-areas instead.",
  ]);

  let input2 = read("grid-template");
  let output2 = read("grid-template.out");
  let instance2 = prefixer("grid-template");
  let result2 = postcss([instance2]).process(input2);
  assertEquals(result2.css, output2);
});

Deno.test("supports grid autoplacement", () => {
  let input = read("grid-autoplacement");
  let output = read("grid-autoplacement.out");
  let instance = prefixer("grid");
  let result = postcss([instance]).process(input);
  assertEquals(result.css, output);

  assertEquals(result.warnings().map((i) => i.toString()), [
    "autoprefixer: <css input>:47:3: grid-auto-flow: dense " +
    "is not supported by IE",
    "autoprefixer: <css input>:48:3: Autoplacement does not work " +
    "without grid-template-rows property",
    "autoprefixer: <css input>:53:3: grid-auto-flow works only if grid-temp" +
    "late-rows and grid-template-columns are present in the same rule",
    "autoprefixer: <css input>:60:3: grid-gap only works if grid-temp" +
    "late(-areas) is being used",
    "autoprefixer: <css input>:64:3: Autoplacement does not work " +
    "without grid-template-rows property",
    "autoprefixer: <css input>:65:3: grid-gap only works if grid-temp" +
    "late(-areas) is being used or both rows and columns have been " +
    "declared and cells have not been " +
    "manually placed inside the explicit grid",
  ]);
});

Deno.test("shows Grid warnings only for IE", () => {
  let input = "a { grid-template-rows: repeat(auto-fit, 1px) }";
  let instance = autoprefixer({
    overrideBrowserslist: "chrome 27",
    grid: true,
  });
  let result = postcss([instance]).process(input);
  assertEquals(result.warnings(), []);
});

Deno.test("warns if rule has both grid-area and grid-(row|column) decls", () => {
  let input = read("grid-area");
  let instance = prefixer("grid-area");
  let result = postcss([instance]).process(input);
  assertEquals(result.warnings().map((i) => i.toString()), [
    "autoprefixer: <css input>:28:3: You already have a grid-area " +
    "declaration present in the rule. You should use either " +
    "grid-area or grid-row, not both",
    "autoprefixer: <css input>:29:3: You already have a grid-area " +
    "declaration present in the rule. You should use either " +
    "grid-area or grid-column, not both",
    "autoprefixer: <css input>:34:3: You already have a grid-area " +
    "declaration present in the rule. You should use either " +
    "grid-area or grid-column, not both",
  ]);
});

Deno.test("warns if rule with grid-area has no parent with grid-template", () => {
  let input = read("grid-template-areas");
  let instance = prefixer("grid-area");
  let result = postcss([instance]).process(input);

  assertEquals(
    result
      .warnings()
      .map((i) => i.toString())
      .filter((str) => str.includes("grid-template")),
    [
      "autoprefixer: <css input>:144:3: Autoprefixer cannot find " +
      "a grid-template containing the duplicate grid-area " +
      '"child" with full selector matching: .uncle',
      "autoprefixer: <css input>:149:3: Autoprefixer cannot find " +
      "a grid-template containing the duplicate grid-area " +
      '"child" with full selector matching: .uncle',
      "autoprefixer: <css input>:154:3: Autoprefixer cannot find " +
      "a grid-template containing the duplicate grid-area " +
      '"child" with full selector matching: .grand-parent .uncle-second',
      "autoprefixer: <css input>:159:3: Autoprefixer cannot find " +
      "a grid-template containing the duplicate grid-area " +
      '"child" with full selector matching: .grand-parent .uncle-second',
      "autoprefixer: <css input>:164:3: Autoprefixer cannot find " +
      "a grid-template containing the duplicate grid-area " +
      '"child" with full selector matching: .grand-parent .father.uncle',
      "autoprefixer: <css input>:169:3: Autoprefixer cannot find " +
      "a grid-template containing the duplicate grid-area " +
      '"child" with full selector matching: .grand-parent.uncle .father',
    ],
  );
});

Deno.test("should preserve @media rules with grid-area", () => {
  let input = read("grid-area-media-sequence");
  let output = read("grid-area-media-sequence.out");
  let instance = prefixer("grid-area");
  let result = postcss([instance]).process(input);
  assertEquals(result.css, output);
});

Deno.test("should merge complex duplicate grid-area rules successfully", () => {
  let input = read("grid-areas-duplicate-complex");
  let output = read("grid-areas-duplicate-complex.out");
  let instance = prefixer("grid-area");
  let result = postcss([instance]).process(input);
  assertEquals(result.css, output);
});

Deno.test("ignores values for CSS3PIE props", () => {
  let css = read("pie");
  assertEquals(postcss([compiler]).process(css).css, css);
});

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

Deno.test("supports text-decoration", () => {
  let input = read("text-decoration");
  let instance = prefixer("text-decoration");
  let result = postcss([instance]).process(input);
  assertEquals(result.warnings().map((i) => i.toString()), [
    "autoprefixer: <css input>:26:3: Replace text-decoration-skip: ink " +
    "to text-decoration-skip-ink: auto, because spec had been changed",
  ]);
});

Deno.test("supports -webkit-line-clamp", () => {
  let input = read("webkit-line-clamp");
  let result = postcss([cleaner]).process(input);
  assertEquals(result.css, input);
  assert(result.warnings().length === 0);
});
