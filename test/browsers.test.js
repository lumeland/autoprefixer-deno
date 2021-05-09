import { assert, assertEquals } from "./deps.js";

import Browsers from "../lib/browsers.js";
import { agents as data } from "../lib/deps.js";

Deno.test("returns prefixes by default data", () => {
  assertEquals(Browsers.prefixes(), ["-webkit-", "-moz-", "-ms-", "-o-"]);
});

Deno.test("finds possible prefix", () => {
  assert(Browsers.withPrefix("1 -o-calc(1)") === true);
  assert(Browsers.withPrefix("1 calc(1)") === false);
});

Deno.test("allows to select no browsers", () => {
  let browsers = new Browsers(data, []);
  assert(browsers.selected.length === 0);
});

Deno.test("selects by older version", () => {
  let browsers = new Browsers(data, ["ie < 7"]);
  assertEquals(browsers.selected, ["ie 6", "ie 5.5"]);
});

Deno.test("combines requirements", () => {
  let browsers = new Browsers(data, ["ie 10", "ie < 6"]);
  assertEquals(browsers.selected, ["ie 10", "ie 5.5"]);
});

Deno.test("has aliases", () => {
  assertEquals(new Browsers(data, ["fx 10"]).selected, ["firefox 10"]);
  assertEquals(new Browsers(data, ["ff 10"]).selected, ["firefox 10"]);
});

Deno.test("ignores case", () => {
  assertEquals(new Browsers(data, ["Firefox 10"]).selected, ["firefox 10"]);
});

// Deno.test('uses browserslist config', () => {
//   let css = new URL('../cases/config/test.css', import.meta.url);
//   assertEquals(new Browsers(data, undefined, { from: css }).selected, [
//     'ie 10'
//   ])
// })

Deno.test("returns browser prefix", () => {
  let browsers = new Browsers(data, ["chrome 30"]);
  assertEquals(browsers.prefix("chrome 30"), "-webkit-");
});

Deno.test("returns right prefix for Operas", () => {
  let browsers = new Browsers(data, ["last 1 opera version"]);
  assertEquals(browsers.prefix("opera 12"), "-o-");
  assertEquals(browsers.prefix(browsers.selected[0]), "-webkit-");
  assertEquals(browsers.prefix("op_mob 12"), "-o-");
  assertEquals(browsers.prefix(browsers.selected[0]), "-webkit-");
});

Deno.test("return true for selected browsers", () => {
  let browsers = new Browsers(data, ["chrome 30", "chrome 31"]);
  assert(browsers.isSelected("chrome 30") === true);
  assert(browsers.isSelected("ie 6") === false);
});
