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
})({"5tpqD":[function(require,module,exports) {
var HMR_HOST = null;var HMR_PORT = 1234;var HMR_SECURE = false;var HMR_ENV_HASH = "d751713988987e9331980363e24189ce";module.bundle.HMR_BUNDLE_ID = "79dff8fdf99cd0f2f131269ea03bec00";/* global HMR_HOST, HMR_PORT, HMR_ENV_HASH, HMR_SECURE */

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

},{}],"6kmua":[function(require,module,exports) {
var Format;
(function (Format) {
  Format["DateTime"] = "datetime";
  Format["List"] = "list";
  Format["Number"] = "number";
  Format["PluralRules"] = "pluralrules";
  Format["RelativeTime"] = "relativetime";
})(Format || (Format = {}));
customElements.define('lia-format', class extends HTMLElement {
  constructor() {
    super();
    this.span = document.createElement('span');
    this.option = {};
    this.value_ = '';
    // this.unit
    this.format;
    this.locale;
  }
  connectedCallback() {
    const shadowRoot = this.attachShadow({
      mode: 'open'
    });
    shadowRoot.appendChild(this.span);
    this.locale = this.get('locale') || undefined;
    this.format = this.get('format') || undefined;
    switch (this.format) {
      case 'number':
        this.option = {
          compactDisplay: this.get('compactDisplay'),
          currency: this.get('currency'),
          currencyDisplay: this.get('currencyDisplay'),
          currencySign: this.get('currencySign'),
          localeMatcher: this.get('localeMatcher'),
          maximumFractionDigits: this.get('maximumFractionDigits'),
          maximumSignificantDigits: this.get('maximumSignificantDigits'),
          minimumFractionDigits: this.get('minimumFractionDigits'),
          minimumIntegerDigits: this.get('minimumIntegerDigits'),
          minimumSignificantDigits: this.get('minimumSignificantDigits'),
          notation: this.get('notation'),
          numberingSystem: this.get('numberingSystem'),
          signDisplay: this.get('signDisplay'),
          style: this.get('localeStyle'),
          unit: this.get('unit'),
          unitDisplay: this.get('unitDisplay'),
          useGrouping: this.get('useGrouping')
        };
        break;
      case 'datetime':
        this.option = {
          calendar: this.get('calendar'),
          dateStyle: this.get('dateStyle'),
          day: this.get('day'),
          dayPeriod: this.get('dayPeriod'),
          era: this.get('era'),
          formatMatcher: this.get('formatMatcher'),
          fractionalSecondDigits: this.get('fractionalSecondDigits'),
          hour: this.get('hour'),
          hour12: this.get('hour12'),
          hourCycle: this.get('hourCycle'),
          localeMatcher: this.get('localeMatcher'),
          minute: this.get('minute'),
          month: this.get('month'),
          numberingSystem: this.get('numberingSystem'),
          second: this.get('second'),
          timeStyle: this.get('timeStyle'),
          timeZone: this.get('timeZone'),
          timeZoneName: this.get('timeZoneName'),
          weekday: this.get('weekday'),
          year: this.get('year')
        };
        break;
      case 'relativetime':
        this.unit = this.get('unit') || undefined;
        this.option = {
          localeMatcher: this.get('localeMatcher'),
          numeric: this.get('numeric'),
          style: this.get('localeStyle')
        };
        break;
      case 'list':
        this.option = {
          localeMatcher: this.get('localeMatcher'),
          style: this.get('localeStyle'),
          type: this.get('type')
        };
        break;
      case 'pluralrules':
        this.option = {
          localeMatcher: this.get('localeMatcher'),
          maximumFractionDigits: this.get('maximumFractionDigits'),
          maximumSignificantDigits: this.get('maximumSignificantDigits'),
          minimumFractionDigits: this.get('minimumFractionDigits'),
          minimumIntegerDigits: this.get('minimumIntegerDigits'),
          minimumSignificantDigits: this.get('minimumSignificantDigits'),
          type: this.get('type')
        };
        break;
      default:
        this.option = {};
    }
    this.value_ = this.textContent || '';
    this.view();
  }
  view() {
    let value = '';
    try {
      switch (this.format) {
        case Format.Number:
          value = new Intl.NumberFormat(this.locale, this.option).format(parseFloat(this.value_));
          break;
        case Format.DateTime:
          value = new Intl.DateTimeFormat(this.locale, this.option).format(Date.parse(this.value_));
          break;
        case Format.RelativeTime:
          value = new Intl.RelativeTimeFormat(this.locale, this.option).format(this.value_, this.unit);
          break;
        case Format.List:
          value = new Intl.ListFormat(this.locale, this.option).format(JSON.parse(this.value_));
          break;
        case Format.PluralRules:
          value = new Intl.PluralRules(this.locale, this.option).select(parseFloat(this.value_));
          break;
      }
    } catch (e) {
      console.warn('intl-format: ', e.message);
    }
    this.span.innerText = value || this.value_;
  }
  get(name) {
    return this.getAttribute(name);
  }
  get value() {
    return this.value_;
  }
  getFormat() {
    switch (this.get('format')) {
      case Format.DateTime:
        return Format.DateTime;
      case Format.List:
        return Format.List;
      case Format.Number:
        return Format.Number;
      case Format.PluralRules:
        return Format.PluralRules;
      case Format.RelativeTime:
        return Format.RelativeTime;
    }
    return null;
  }
  set value(value) {
    if (this.value_ !== value) {
      this.value_ = value;
      this.view();
    }
  }
  disconnectedCallback() {}
});

},{}]},["5tpqD","6kmua"], "6kmua", "parcelRequirebcba")

//# sourceMappingURL=index.a03bec00.js.map
