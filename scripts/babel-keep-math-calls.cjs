// Babel plugin, see .babelrc: rewrites Math.pow(a, b) / Math.sqrt(x) as
// Math["pow"](a, b) / Math["sqrt"](x).
//
// Hugo's JS minifier (tdewolff/minify) turns Math.pow(a, b) into a**b and
// Math.sqrt(x) into x**.5, ignoring minify.tdewolff.js.version. The **
// operator is a SyntaxError in old engines such as KaiOS 2.x (Gecko 48) and
// takes the whole bundle down. The bracket form is not matched by that
// optimization, the minifier still prints it as Math.pow(...) / Math.sqrt(...).
const NAMES = new Set(["pow", "sqrt"]);

module.exports = function ({ types: t }) {
  return {
    name: "keep-math-calls",
    visitor: {
      CallExpression(path) {
        const callee = path.node.callee;
        if (
          t.isMemberExpression(callee) &&
          !callee.computed &&
          t.isIdentifier(callee.object, { name: "Math" }) &&
          t.isIdentifier(callee.property) &&
          NAMES.has(callee.property.name) &&
          !path.scope.getBinding("Math")
        ) {
          callee.property = t.stringLiteral(callee.property.name);
          callee.computed = true;
        }
      },
    },
  };
};
