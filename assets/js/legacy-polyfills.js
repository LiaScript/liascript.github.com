// Polyfills for old browsers such as KaiOS 2.x (Gecko 48). Loaded first in the
// main bundle (see hugo.toml), modern browsers skip them.

// NodeList.forEach (Firefox 50+), used e.g. by search.js and tab.js
if (window.NodeList && !NodeList.prototype.forEach) {
  NodeList.prototype.forEach = Array.prototype.forEach;
}
