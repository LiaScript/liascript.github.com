// Only used to build css/style-legacy.css (see layouts/partials/essentials/style.html),
// a fallback for old browsers without cascade-layer support, e.g. the PocketBook
// e-reader browser (QtWebKit 534). Modern browsers never load this output.
import postcssPresetEnv from "postcss-preset-env";

// Old engines drop a whole rule if any selector of its list is unknown to them
// (e.g. Tailwind's preflight "*, ::after, ::before, ::backdrop, ::file-selector-button").
// Splitting every selector list into separate rules keeps the valid parts alive.
const splitSelectorLists = () => ({
  postcssPlugin: "split-selector-lists",
  OnceExit(root) {
    root.walkRules((rule) => {
      if (rule.parent?.type === "atrule" && /keyframes$/.test(rule.parent.name)) return;
      const selectors = rule.selectors;
      if (selectors.length < 2) return;
      for (const selector of selectors) {
        rule.cloneBefore({ selector });
      }
      rule.remove();
    });
  },
});
splitSelectorLists.postcss = true;

// Old engines do not know :where(), which the typography plugin (.content/.prose)
// uses for nearly every rule, e.g. ".content :where(p):not(:where([class~=not-prose],...))".
// Unwrap these for text elements so blog posts keep paragraph/list spacing. Unwrapping
// raises specificity, so links and headings are left out: the site's own .btn and
// heading styles must keep winning over prose, as they do in modern browsers.
const READING_ELEMENTS = new Set(["p", "ul", "ol", "li", "blockquote", "pre", "code", "table", "thead", "tbody", "tfoot", "tr", "th", "td", "hr", "img", "figure", "figcaption", "strong", "em"]);
const PROSE_WHERE = /(^|[\s>+~,]):where\(([^(),]+)\)(:not\(:where\(\[class~="?not-prose"?\],\s*\[class~="?not-prose"?\] \*\)\))?/g;
const unwrapWhere = () => ({
  postcssPlugin: "unwrap-where",
  OnceExit(root) {
    root.walkRules((rule) => {
      if (!rule.selector.includes(":where(")) return;
      rule.selector = rule.selector.replace(PROSE_WHERE, (match, before, inner) => {
        const parts = inner.split(/\s*[\s>+~]\s*/);
        // spacing resets such as ":where(h2 + *)" only target the following element
        const resetsNext = parts.at(-1) === "*";
        const unwrap = parts.every(
          (part) => READING_ELEMENTS.has(part) || (resetsNext && (part === "*" || /^h[1-6]$/.test(part))),
        );
        return unwrap ? before + inner : match;
      });
    });
  },
});
unwrapWhere.postcss = true;

// Tailwind v4 writes rounded-full as "calc(infinity * 1px)", unknown to old engines.
const replaceCalcInfinity = () => ({
  postcssPlugin: "replace-calc-infinity",
  Declaration(decl) {
    if (decl.value.includes("infinity")) {
      decl.value = decl.value.replace(/calc\(\s*infinity\s*\*\s*1px\s*\)/g, "9999px");
    }
  },
});
replaceCalcInfinity.postcss = true;

export default {
  plugins: [
    postcssPresetEnv({
      stage: 2,
      browsers: ["safari >= 5.1", "chrome >= 30", "firefox >= 52"],
    }),
    unwrapWhere(),
    splitSelectorLists(),
    replaceCalcInfinity(),
  ],
};
