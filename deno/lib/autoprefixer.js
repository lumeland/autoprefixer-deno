import { browserslist } from "./deps.js";
import { agents } from "./deps.js";
import { colorette } from "./deps.js";
import Browsers from "./browsers.js";
import Prefixes from "./prefixes.js";
import dataPrefixes from "../data/prefixes.js";
import getInfo from "./info.js";

let autoprefixerData = { browsers: agents, prefixes: dataPrefixes };

const WARNING = "\n" +
  "  Replace Autoprefixer `browsers` option to Browserslist config.\n" +
  "  Use `browserslist` key in `package.json` or `.browserslistrc` file.\n" +
  "\n" +
  "  Using `browsers` option can cause errors. Browserslist config can\n" +
  "  be used for Babel, Autoprefixer, postcss-normalize and other tools.\n" +
  "\n" +
  "  If you really need to use option, rename it to `overrideBrowserslist`.\n" +
  "\n" +
  "  Learn more at:\n" +
  "  https://github.com/browserslist/browserslist#readme\n" +
  "  https://twitter.com/browserslist\n" +
  "\n";

function isPlainObject(obj) {
  return Object.prototype.toString.apply(obj) === "[object Object]";
}

let cache = new Map();

function timeCapsule(result, prefixes) {
  if (prefixes.browsers.selected.length === 0) {
    return;
  }
  if (prefixes.add.selectors.length > 0) {
    return;
  }
  if (Object.keys(prefixes.add).length > 2) {
    return;
  }

  /* istanbul ignore next */
  result.warn(
    "Greetings, time traveller. " +
      "We are in the golden age of prefix-less CSS, " +
      "where Autoprefixer is no longer needed for your stylesheet.",
  );
}

export default plugin;

function plugin(...reqs) {
  let options;
  if (reqs.length === 1 && isPlainObject(reqs[0])) {
    options = reqs[0];
    reqs = undefined;
  } else if (reqs.length === 0 || (reqs.length === 1 && !reqs[0])) {
    reqs = undefined;
  } else if (reqs.length <= 2 && (Array.isArray(reqs[0]) || !reqs[0])) {
    options = reqs[1];
    reqs = reqs[0];
  } else if (typeof reqs[reqs.length - 1] === "object") {
    options = reqs.pop();
  }

  if (!options) {
    options = {};
  }

  if (options.browser) {
    throw new Error(
      "Change `browser` option to `overrideBrowserslist` in Autoprefixer",
    );
  } else if (options.browserslist) {
    throw new Error(
      "Change `browserslist` option to `overrideBrowserslist` in Autoprefixer",
    );
  }

  if (options.overrideBrowserslist) {
    reqs = options.overrideBrowserslist;
  } else if (options.browsers) {
    if (typeof console !== "undefined" && console.warn) {
      if (colorette.red) {
        console.warn(
          colorette.red(
            WARNING.replace(
              /`[^`]+`/g,
              (i) => colorette.yellow(i.slice(1, -1)),
            ),
          ),
        );
      } else {
        console.warn(WARNING);
      }
    }
    reqs = options.browsers;
  }

  let brwlstOpts = {
    ignoreUnknownVersions: options.ignoreUnknownVersions,
    stats: options.stats,
    env: options.env,
  };

  function loadPrefixes(opts) {
    let d = autoprefixerData;
    let browsers = new Browsers(d.browsers, reqs, opts, brwlstOpts);
    let key = browsers.selected.join(", ") + JSON.stringify(options);

    if (!cache.has(key)) {
      cache.set(key, new Prefixes(d.prefixes, browsers, options));
    }

    return cache.get(key);
  }

  return {
    postcssPlugin: "autoprefixer",

    prepare(result) {
      let prefixes = loadPrefixes({
        from: result.opts.from,
        env: options.env,
      });

      return {
        OnceExit(root) {
          timeCapsule(result, prefixes);
          if (options.remove !== false) {
            prefixes.processor.remove(root, result);
          }
          if (options.add !== false) {
            prefixes.processor.add(root, result);
          }
        },
      };
    },

    info(opts) {
      opts = opts || {};
      opts.from = opts.from || Deno.cwd();
      return getInfo(loadPrefixes(opts));
    },

    options,
    browsers: reqs,
  };
}

plugin.postcss = true;

/**
 * Autoprefixer data
 */
plugin.data = autoprefixerData;

/**
 * Autoprefixer default browsers
 */
plugin.defaults = browserslist.defaults;

/**
 * Inspect with default Autoprefixer
 */
plugin.info = () => plugin().info();
