// modules are defined as an array
// [ module function, map of requires ]
//
// map of requires is short require name -> numeric require
//
// anything defined in a previous bundle is accessed via the
// orig method which is the require for previous bundles

(function(modules, entry, mainEntry, parcelRequireName, globalName) {
  /* eslint-disable no-undef */
  var globalObject =
    typeof globalThis !== 'undefined'
      ? globalThis
      : typeof self !== 'undefined'
      ? self
      : typeof window !== 'undefined'
      ? window
      : typeof global !== 'undefined'
      ? global
      : {};
  /* eslint-enable no-undef */

  // Save the require from previous bundle to this closure if any
  var previousRequire =
    typeof globalObject[parcelRequireName] === 'function' &&
    globalObject[parcelRequireName];

  var cache = previousRequire.cache || {};
  // Do not use `require` to prevent Webpack from trying to bundle this call
  var nodeRequire =
    typeof module !== 'undefined' &&
    typeof module.require === 'function' &&
    module.require.bind(module);

  function newRequire(name, jumped) {
    if (!cache[name]) {
      if (!modules[name]) {
        // if we cannot find the module within our internal map or
        // cache jump to the current global require ie. the last bundle
        // that was added to the page.
        var currentRequire =
          typeof globalObject[parcelRequireName] === 'function' &&
          globalObject[parcelRequireName];
        if (!jumped && currentRequire) {
          return currentRequire(name, true);
        }

        // If there are other bundles on this page the require from the
        // previous one is saved to 'previousRequire'. Repeat this as
        // many times as there are bundles until the module is found or
        // we exhaust the require chain.
        if (previousRequire) {
          return previousRequire(name, true);
        }

        // Try the node require function if it exists.
        if (nodeRequire && typeof name === 'string') {
          return nodeRequire(name);
        }

        var err = new Error("Cannot find module '" + name + "'");
        err.code = 'MODULE_NOT_FOUND';
        throw err;
      }

      localRequire.resolve = resolve;
      localRequire.cache = {};

      var module = (cache[name] = new newRequire.Module(name));

      modules[name][0].call(
        module.exports,
        localRequire,
        module,
        module.exports,
        this
      );
    }

    return cache[name].exports;

    function localRequire(x) {
      return newRequire(localRequire.resolve(x));
    }

    function resolve(x) {
      return modules[name][1][x] || x;
    }
  }

  function Module(moduleName) {
    this.id = moduleName;
    this.bundle = newRequire;
    this.exports = {};
  }

  newRequire.isParcelRequire = true;
  newRequire.Module = Module;
  newRequire.modules = modules;
  newRequire.cache = cache;
  newRequire.parent = previousRequire;
  newRequire.register = function(id, exports) {
    modules[id] = [
      function(require, module) {
        module.exports = exports;
      },
      {},
    ];
  };

  Object.defineProperty(newRequire, 'root', {
    get: function() {
      return globalObject[parcelRequireName];
    },
  });

  globalObject[parcelRequireName] = newRequire;

  for (var i = 0; i < entry.length; i++) {
    newRequire(entry[i]);
  }

  if (mainEntry) {
    // Expose entry point to Node, AMD or browser globals
    // Based on https://github.com/ForbesLindesay/umd/blob/master/template.js
    var mainExports = newRequire(mainEntry);

    // CommonJS
    if (typeof exports === 'object' && typeof module !== 'undefined') {
      module.exports = mainExports;

      // RequireJS
    } else if (typeof define === 'function' && define.amd) {
      define(function() {
        return mainExports;
      });

      // <script>
    } else if (globalName) {
      this[globalName] = mainExports;
    }
  }
})({"3OlHM":[function(require,module,exports) {
var HMR_HOST = null;var HMR_PORT = 1234;var HMR_SECURE = false;var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";module.bundle.HMR_BUNDLE_ID = "2081aeaab0b79253176a1b386024a6fd";/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */

var OVERLAY_ID = '__parcel__error__overlay__';

var OldModule = module.bundle.Module;

function Module(moduleName) {
  OldModule.call(this, moduleName);
  this.hot = {
    data: module.bundle.hotData,
    _acceptCallbacks: [],
    _disposeCallbacks: [],
    accept: function(fn) {
      this._acceptCallbacks.push(fn || function() {});
    },
    dispose: function(fn) {
      this._disposeCallbacks.push(fn);
    },
  };

  module.bundle.hotData = null;
}

module.bundle.Module = Module;
var checkedAssets, assetsToAccept, acceptedAssets;

function getHostname() {
  return (
    HMR_HOST ||
    (location.protocol.indexOf('http') === 0 ? location.hostname : 'localhost')
  );
}

function getPort() {
  return HMR_PORT || location.port;
}

// eslint-disable-next-line no-redeclare
var parent = module.bundle.parent;
if ((!parent || !parent.isParcelRequire) && typeof WebSocket !== 'undefined') {
  var hostname = getHostname();
  var port = getPort();
  var protocol =
    HMR_SECURE ||
    (location.protocol == 'https:' &&
      !/localhost|127.0.0.1|0.0.0.0/.test(hostname))
      ? 'wss'
      : 'ws';
  var ws = new WebSocket(
    protocol + '://' + hostname + (port ? ':' + port : '') + '/',
  );
  ws.onmessage = function(event) {
    checkedAssets = {};
    assetsToAccept = [];
    acceptedAssets = {};

    var data = JSON.parse(event.data);

    if (data.type === 'update') {
      // Remove error overlay if there is one
      removeErrorOverlay();

      let assets = data.assets.filter(asset => asset.envHash === HMR_ENV_HASH);

      // Handle HMR Update
      var handled = false;
      assets.forEach(asset => {
        var didAccept =
          asset.type === 'css' || hmrAcceptCheck(module.bundle.root, asset.id);
        if (didAccept) {
          handled = true;
        }
      });

      if (handled) {
        console.clear();

        assets.forEach(function(asset) {
          hmrApply(module.bundle.root, asset);
        });

        for (var i = 0; i < assetsToAccept.length; i++) {
          var id = assetsToAccept[i][1];
          if (!acceptedAssets[id]) {
            hmrAcceptRun(assetsToAccept[i][0], id);
          }
        }
      } else {
        window.location.reload();
      }
    }

    if (data.type === 'error') {
      // Log parcel errors to console
      for (let ansiDiagnostic of data.diagnostics.ansi) {
        let stack = ansiDiagnostic.codeframe
          ? ansiDiagnostic.codeframe
          : ansiDiagnostic.stack;

        console.error(
          '🚨 [parcel]: ' +
            ansiDiagnostic.message +
            '\n' +
            stack +
            '\n\n' +
            ansiDiagnostic.hints.join('\n'),
        );
      }

      // Render the fancy html overlay
      removeErrorOverlay();
      var overlay = createErrorOverlay(data.diagnostics.html);
      document.body.appendChild(overlay);
    }
  };
  ws.onerror = function(e) {
    console.error(e.message);
  };
  ws.onclose = function(e) {
    console.warn('[parcel] 🚨 Connection to the HMR server was lost');
  };
}

function removeErrorOverlay() {
  var overlay = document.getElementById(OVERLAY_ID);
  if (overlay) {
    overlay.remove();
    console.log('[parcel] ✨ Error resolved');
  }
}

function createErrorOverlay(diagnostics) {
  var overlay = document.createElement('div');
  overlay.id = OVERLAY_ID;

  let errorHTML =
    '<div style="background: black; opacity: 0.85; font-size: 16px; color: white; position: fixed; height: 100%; width: 100%; top: 0px; left: 0px; padding: 30px; font-family: Menlo, Consolas, monospace; z-index: 9999;">';

  for (let diagnostic of diagnostics) {
    let stack = diagnostic.codeframe ? diagnostic.codeframe : diagnostic.stack;

    errorHTML += `
      <div>
        <div style="font-size: 18px; font-weight: bold; margin-top: 20px;">
          🚨 ${diagnostic.message}
        </div>
        <pre>
          ${stack}
        </pre>
        <div>
          ${diagnostic.hints.map(hint => '<div>' + hint + '</div>').join('')}
        </div>
      </div>
    `;
  }

  errorHTML += '</div>';

  overlay.innerHTML = errorHTML;

  return overlay;
}

function getParents(bundle, id) {
  var modules = bundle.modules;
  if (!modules) {
    return [];
  }

  var parents = [];
  var k, d, dep;

  for (k in modules) {
    for (d in modules[k][1]) {
      dep = modules[k][1][d];

      if (dep === id || (Array.isArray(dep) && dep[dep.length - 1] === id)) {
        parents.push([bundle, k]);
      }
    }
  }

  if (bundle.parent) {
    parents = parents.concat(getParents(bundle.parent, id));
  }

  return parents;
}

function updateLink(link) {
  var newLink = link.cloneNode();
  newLink.onload = function() {
    if (link.parentNode !== null) {
      link.parentNode.removeChild(link);
    }
  };
  newLink.setAttribute(
    'href',
    link.getAttribute('href').split('?')[0] + '?' + Date.now(),
  );
  link.parentNode.insertBefore(newLink, link.nextSibling);
}

var cssTimeout = null;
function reloadCSS() {
  if (cssTimeout) {
    return;
  }

  cssTimeout = setTimeout(function() {
    var links = document.querySelectorAll('link[rel="stylesheet"]');
    for (var i = 0; i < links.length; i++) {
      var href = links[i].getAttribute('href');
      var hostname = getHostname();
      var servedFromHMRServer =
        hostname === 'localhost'
          ? new RegExp(
              '^(https?:\\/\\/(0.0.0.0|127.0.0.1)|localhost):' + getPort(),
            ).test(href)
          : href.indexOf(hostname + ':' + getPort());
      var absolute =
        /^https?:\/\//i.test(href) &&
        href.indexOf(window.location.origin) !== 0 &&
        !servedFromHMRServer;
      if (!absolute) {
        updateLink(links[i]);
      }
    }

    cssTimeout = null;
  }, 50);
}

function hmrApply(bundle, asset) {
  var modules = bundle.modules;
  if (!modules) {
    return;
  }

  if (modules[asset.id] || !bundle.parent) {
    if (asset.type === 'css') {
      reloadCSS();
    } else {
      var fn = new Function('require', 'module', 'exports', asset.output);
      modules[asset.id] = [fn, asset.depsByBundle[bundle.HMR_BUNDLE_ID]];
    }
  } else if (bundle.parent) {
    hmrApply(bundle.parent, asset);
  }
}

function hmrAcceptCheck(bundle, id) {
  var modules = bundle.modules;

  if (!modules) {
    return;
  }

  if (!modules[id] && bundle.parent) {
    return hmrAcceptCheck(bundle.parent, id);
  }

  if (checkedAssets[id]) {
    return;
  }

  checkedAssets[id] = true;

  var cached = bundle.cache[id];

  assetsToAccept.push([bundle, id]);

  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    return true;
  }

  return getParents(module.bundle.root, id).some(function(v) {
    return hmrAcceptCheck(v[0], v[1]);
  });
}

function hmrAcceptRun(bundle, id) {
  var cached = bundle.cache[id];
  bundle.hotData = {};
  if (cached && cached.hot) {
    cached.hot.data = bundle.hotData;
  }

  if (cached && cached.hot && cached.hot._disposeCallbacks.length) {
    cached.hot._disposeCallbacks.forEach(function(cb) {
      cb(bundle.hotData);
    });
  }

  delete bundle.cache[id];
  bundle(id);

  cached = bundle.cache[id];
  if (cached && cached.hot && cached.hot._acceptCallbacks.length) {
    cached.hot._acceptCallbacks.forEach(function(cb) {
      var assetsToAlsoAccept = cb(function() {
        return getParents(module.bundle.root, id);
      });
      if (assetsToAlsoAccept && assetsToAccept.length) {
        assetsToAccept.push.apply(assetsToAccept, assetsToAlsoAccept);
      }
    });
  }
  acceptedAssets[id] = true;
}

},{}],"I4B5U":[function(require,module,exports) {
function fetch(self, trial = 0) {
  if (self.sourceUrl) {
    let http = new XMLHttpRequest();
    http.open('GET', self.sourceUrl, true);
    // http.setRequestHeader('User-Agent', 'bla')
    http.onload = function (_e) {
      if (http.readyState === 4 && http.status === 200) {
        try {
          self.parse(http.responseText);
        } catch (e) {
          console.warn('fetching', e);
        }
      }
    };
    http.onerror = function (_e) {
      if (self.sourceUrl && trial === 0) {
        self.sourceUrl = `https://cors-anywhere.herokuapp.com/${self.sourceUrl}`;
        fetch(self, 1);
      }
    };
    http.send();
  }
}
function getTitle(doc) {
  if (doc === null) return;
  const ogTitle = doc.querySelector('meta[property="og:title"]');
  if (ogTitle && ogTitle.content.length > 0) {
    return ogTitle.content;
  }
  const twitterTitle = doc.querySelector('meta[name="twitter:title"]');
  if (twitterTitle && twitterTitle.content.length > 0) {
    return twitterTitle.content;
  }
  const docTitle = doc.title;
  if (docTitle && docTitle.length > 0) {
    return docTitle;
  }
  const h1 = doc.querySelector('h1');
  if (h1 && h1.innerHTML) {
    return h1.innerHTML;
  }
  const h2 = doc.querySelector('h2');
  if (h2 && h2.innerHTML) {
    return h2.innerHTML;
  }
}
function getDescription(doc) {
  if (doc === null) return;
  const ogDescription = doc.querySelector('meta[property="og:description"]');
  if (ogDescription && ogDescription.content.length > 0) {
    return ogDescription.content;
  }
  const twitterDescription = doc.querySelector('meta[name="twitter:description"]');
  if (twitterDescription && twitterDescription.content.length > 0) {
    return twitterDescription.content;
  }
  const metaDescription = doc.querySelector('meta[name="description"]');
  if (metaDescription && metaDescription.content.length > 0) {
    return metaDescription.content;
  }
  const paragraphs = doc.querySelectorAll('p');
  for (let i = 0; i < paragraphs.length; i++) {
    const par = paragraphs[i];
    if (// if object is visible in dom
    par.offsetParent !== null && par.childElementCount !== 0 && par.textContent) {
      return par.textContent;
    }
  }
}
function getDomainName(doc, uri) {
  let domainName = null;
  if (doc) {
    const canonicalLink = doc.querySelector('link[rel=canonical]');
    if (canonicalLink && canonicalLink.href.length > 0) {
      domainName = canonicalLink.href;
    } else {
      const ogUrlMeta = doc.querySelector('meta[property="og:url"]');
      if (ogUrlMeta && ogUrlMeta.content.length > 0) {
        domainName = ogUrlMeta.content;
      }
    }
  }
  return domainName != null ? new URL(domainName).hostname.replace('www.', '') : new URL(uri).hostname.replace('www.', '');
}
function getImage(doc) {
  if (doc === null) return;
  const ogImg = doc.querySelector('meta[property="og:image"]');
  if (ogImg != null && ogImg.content.length > 0) {
    return ogImg.content;
  }
  const imgRelLink = doc.querySelector('link[rel="image_src"]');
  if (imgRelLink != null && imgRelLink.href.length > 0) {
    return imgRelLink.href;
  }
  const twitterImg = doc.querySelector('meta[name="twitter:image"]');
  if (twitterImg != null && twitterImg.content.length > 0) {
    return twitterImg.content;
  }
  try {
    return Array.from(doc.getElementsByTagName('img'))[0].src;
  } catch (e) {}
}
class PreviewLink extends HTMLElement {
  constructor() {
    super();
    this.container = this.attachShadow({
      mode: 'closed'
    });
    this.sourceUrl = null;
    this.baseUrl = null;
  }
  connectedCallback() {
    this.sourceUrl = this.getAttribute('src');
    this.baseUrl = this.sourceUrl;
    if (this.sourceUrl) {
      const template = document.createElement('template');
      template.innerHTML = `
      <style></style>
      <a href="${this.sourceUrl}" id="container_" style="display: inline-block;">preview-link</a>
      <iframe id="iframe" style="display: none;"></iframe>`;
      this.container.appendChild(template.content.cloneNode(true));
      let self = this;
      fetch(self);
    }
  }
  disconnectedCallback() {}
  parse(index) {
    let iframe = this.container.getElementById('iframe');
    if (iframe) {
      let self = this;
      iframe.onload = function () {
        self._title = getTitle(iframe.contentDocument);
        self._description = getDescription(iframe.contentDocument);
        self._domain = self.baseUrl ? getDomainName(iframe.contentDocument, self.baseUrl) : undefined;
        self._image = getImage(iframe.contentDocument);
        self.show();
      };
      iframe.srcdoc = index;
    }
  }
  show() {
    const div = this.container.getElementById('container_');
    if (div) div.innerHTML = `<div style="float: left">
                        <h4>${this._title}</h4>
                        <p style="max-width: 400px">${this._description}</p>
                      </div>
                      <img src="${this._image}" style="height:100%; float: right;">`;
  }
}
customElements.define('preview-link', PreviewLink);

},{}]},["3OlHM","I4B5U"], "I4B5U", "parcelRequirebcba")

//# sourceMappingURL=index.6024a6fd.js.map
