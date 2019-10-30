/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 139);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports, __webpack_require__) {

var store = __webpack_require__(22)('wks');

var uid = __webpack_require__(14);

var _Symbol = __webpack_require__(1).Symbol;

var USE_SYMBOL = typeof _Symbol == 'function';

var $exports = module.exports = function (name) {
  return store[name] || (store[name] = USE_SYMBOL && _Symbol[name] || (USE_SYMBOL ? _Symbol : uid)('Symbol.' + name));
};

$exports.store = store;

/***/ }),
/* 1 */
/***/ (function(module, exports) {

// https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
var global = module.exports = typeof window != 'undefined' && window.Math == Math ? window : typeof self != 'undefined' && self.Math == Math ? self // eslint-disable-next-line no-new-func
: Function('return this')();
if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef

/***/ }),
/* 2 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);

var core = __webpack_require__(13);

var hide = __webpack_require__(11);

var redefine = __webpack_require__(8);

var ctx = __webpack_require__(15);

var PROTOTYPE = 'prototype';

var $export = function $export(type, name, source) {
  var IS_FORCED = type & $export.F;
  var IS_GLOBAL = type & $export.G;
  var IS_STATIC = type & $export.S;
  var IS_PROTO = type & $export.P;
  var IS_BIND = type & $export.B;
  var target = IS_GLOBAL ? global : IS_STATIC ? global[name] || (global[name] = {}) : (global[name] || {})[PROTOTYPE];
  var exports = IS_GLOBAL ? core : core[name] || (core[name] = {});
  var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
  var key, own, out, exp;
  if (IS_GLOBAL) source = name;

  for (key in source) {
    // contains in native
    own = !IS_FORCED && target && target[key] !== undefined; // export native or passed

    out = (own ? target : source)[key]; // bind timers to global for call from export context

    exp = IS_BIND && own ? ctx(out, global) : IS_PROTO && typeof out == 'function' ? ctx(Function.call, out) : out; // extend global

    if (target) redefine(target, key, out, type & $export.U); // export

    if (exports[key] != out) hide(exports, key, exp);
    if (IS_PROTO && expProto[key] != out) expProto[key] = out;
  }
};

global.core = core; // type bitmap

$export.F = 1; // forced

$export.G = 2; // global

$export.S = 4; // static

$export.P = 8; // proto

$export.B = 16; // bind

$export.W = 32; // wrap

$export.U = 64; // safe

$export.R = 128; // real proto method for `library`

module.exports = $export;

/***/ }),
/* 3 */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

module.exports = function (it) {
  return _typeof(it) === 'object' ? it !== null : typeof it === 'function';
};

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

// Thank's IE8 for his funny defineProperty
module.exports = !__webpack_require__(9)(function () {
  return Object.defineProperty({}, 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3);

module.exports = function (it) {
  if (!isObject(it)) throw TypeError(it + ' is not an object!');
  return it;
};

/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(5);

var IE8_DOM_DEFINE = __webpack_require__(48);

var toPrimitive = __webpack_require__(27);

var dP = Object.defineProperty;
exports.f = __webpack_require__(4) ? Object.defineProperty : function defineProperty(O, P, Attributes) {
  anObject(O);
  P = toPrimitive(P, true);
  anObject(Attributes);
  if (IE8_DOM_DEFINE) try {
    return dP(O, P, Attributes);
  } catch (e) {
    /* empty */
  }
  if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
  if ('value' in Attributes) O[P] = Attributes.value;
  return O;
};

/***/ }),
/* 7 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return lia; });


var lia = {
  log: function log() {
    var _console;

    if (window.debug__) (_console = console).log.apply(_console, ['LiaLog: '].concat(Array.prototype.slice.call(arguments)));
  },
  warn: function warn() {
    var _console2;

    if (window.debug__) (_console2 = console).warn.apply(_console2, ['LiaWarn: '].concat(Array.prototype.slice.call(arguments)));
  },
  error: function error() {
    var _console3;

    (_console3 = console).error.apply(_console3, ['LiaError: '].concat(Array.prototype.slice.call(arguments)));
  }
};


/***/ }),
/* 8 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);

var hide = __webpack_require__(11);

var has = __webpack_require__(10);

var SRC = __webpack_require__(14)('src');

var $toString = __webpack_require__(72);

var TO_STRING = 'toString';
var TPL = ('' + $toString).split(TO_STRING);

__webpack_require__(13).inspectSource = function (it) {
  return $toString.call(it);
};

(module.exports = function (O, key, val, safe) {
  var isFunction = typeof val == 'function';
  if (isFunction) has(val, 'name') || hide(val, 'name', key);
  if (O[key] === val) return;
  if (isFunction) has(val, SRC) || hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));

  if (O === global) {
    O[key] = val;
  } else if (!safe) {
    delete O[key];
    hide(O, key, val);
  } else if (O[key]) {
    O[key] = val;
  } else {
    hide(O, key, val);
  } // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative

})(Function.prototype, TO_STRING, function toString() {
  return typeof this == 'function' && this[SRC] || $toString.call(this);
});

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return !!exec();
  } catch (e) {
    return true;
  }
};

/***/ }),
/* 10 */
/***/ (function(module, exports) {

var hasOwnProperty = {}.hasOwnProperty;

module.exports = function (it, key) {
  return hasOwnProperty.call(it, key);
};

/***/ }),
/* 11 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(6);

var createDesc = __webpack_require__(19);

module.exports = __webpack_require__(4) ? function (object, key, value) {
  return dP.f(object, key, createDesc(1, value));
} : function (object, key, value) {
  object[key] = value;
  return object;
};

/***/ }),
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

// to indexed object, toObject with fallback for non-array-like ES3 strings
var IObject = __webpack_require__(60);

var defined = __webpack_require__(26);

module.exports = function (it) {
  return IObject(defined(it));
};

/***/ }),
/* 13 */
/***/ (function(module, exports) {

var core = module.exports = {
  version: '2.6.10'
};
if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef

/***/ }),
/* 14 */
/***/ (function(module, exports) {

var id = 0;
var px = Math.random();

module.exports = function (key) {
  return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
};

/***/ }),
/* 15 */
/***/ (function(module, exports, __webpack_require__) {

// optional / simple context binding
var aFunction = __webpack_require__(23);

module.exports = function (fn, that, length) {
  aFunction(fn);
  if (that === undefined) return fn;

  switch (length) {
    case 1:
      return function (a) {
        return fn.call(that, a);
      };

    case 2:
      return function (a, b) {
        return fn.call(that, a, b);
      };

    case 3:
      return function (a, b, c) {
        return fn.call(that, a, b, c);
      };
  }

  return function ()
  /* ...args */
  {
    return fn.apply(that, arguments);
  };
};

/***/ }),
/* 16 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 / 15.2.3.14 Object.keys(O)
var $keys = __webpack_require__(49);

var enumBugKeys = __webpack_require__(30);

module.exports = Object.keys || function keys(O) {
  return $keys(O, enumBugKeys);
};

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = {};

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])
var anObject = __webpack_require__(5);

var dPs = __webpack_require__(70);

var enumBugKeys = __webpack_require__(30);

var IE_PROTO = __webpack_require__(29)('IE_PROTO');

var Empty = function Empty() {
  /* empty */
};

var PROTOTYPE = 'prototype'; // Create object with fake `null` prototype: use iframe Object with cleared prototype

var _createDict = function createDict() {
  // Thrash, waste and sodomy: IE GC bug
  var iframe = __webpack_require__(39)('iframe');

  var i = enumBugKeys.length;
  var lt = '<';
  var gt = '>';
  var iframeDocument;
  iframe.style.display = 'none';

  __webpack_require__(67).appendChild(iframe);

  iframe.src = 'javascript:'; // eslint-disable-line no-script-url
  // createDict = iframe.contentWindow.Object;
  // html.removeChild(iframe);

  iframeDocument = iframe.contentWindow.document;
  iframeDocument.open();
  iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
  iframeDocument.close();
  _createDict = iframeDocument.F;

  while (i--) {
    delete _createDict[PROTOTYPE][enumBugKeys[i]];
  }

  return _createDict();
};

module.exports = Object.create || function create(O, Properties) {
  var result;

  if (O !== null) {
    Empty[PROTOTYPE] = anObject(O);
    result = new Empty();
    Empty[PROTOTYPE] = null; // add "__proto__" for Object.getPrototypeOf polyfill

    result[IE_PROTO] = O;
  } else result = _createDict();

  return Properties === undefined ? result : dPs(result, Properties);
};

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = function (bitmap, value) {
  return {
    enumerable: !(bitmap & 1),
    configurable: !(bitmap & 2),
    writable: !(bitmap & 4),
    value: value
  };
};

/***/ }),
/* 20 */
/***/ (function(module, exports) {

module.exports = false;

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

var def = __webpack_require__(6).f;

var has = __webpack_require__(10);

var TAG = __webpack_require__(0)('toStringTag');

module.exports = function (it, tag, stat) {
  if (it && !has(it = stat ? it : it.prototype, TAG)) def(it, TAG, {
    configurable: true,
    value: tag
  });
};

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

var core = __webpack_require__(13);

var global = __webpack_require__(1);

var SHARED = '__core-js_shared__';
var store = global[SHARED] || (global[SHARED] = {});
(module.exports = function (key, value) {
  return store[key] || (store[key] = value !== undefined ? value : {});
})('versions', []).push({
  version: core.version,
  mode: __webpack_require__(20) ? 'pure' : 'global',
  copyright: '© 2019 Denis Pushkarev (zloirock.ru)'
});

/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = function (it) {
  if (typeof it != 'function') throw TypeError(it + ' is not a function!');
  return it;
};

/***/ }),
/* 24 */
/***/ (function(module, exports) {

var toString = {}.toString;

module.exports = function (it) {
  return toString.call(it).slice(8, -1);
};

/***/ }),
/* 25 */
/***/ (function(module, exports) {

exports.f = {}.propertyIsEnumerable;

/***/ }),
/* 26 */
/***/ (function(module, exports) {

// 7.2.1 RequireObjectCoercible(argument)
module.exports = function (it) {
  if (it == undefined) throw TypeError("Can't call method on  " + it);
  return it;
};

/***/ }),
/* 27 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.1 ToPrimitive(input [, PreferredType])
var isObject = __webpack_require__(3); // instead of the ES6 spec version, we didn't implement @@toPrimitive case
// and the second argument - flag - preferred type is a string


module.exports = function (it, S) {
  if (!isObject(it)) return it;
  var fn, val;
  if (S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  if (typeof (fn = it.valueOf) == 'function' && !isObject(val = fn.call(it))) return val;
  if (!S && typeof (fn = it.toString) == 'function' && !isObject(val = fn.call(it))) return val;
  throw TypeError("Can't convert object to primitive value");
};

/***/ }),
/* 28 */
/***/ (function(module, exports) {

// 7.1.4 ToInteger
var ceil = Math.ceil;
var floor = Math.floor;

module.exports = function (it) {
  return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
};

/***/ }),
/* 29 */
/***/ (function(module, exports, __webpack_require__) {

var shared = __webpack_require__(22)('keys');

var uid = __webpack_require__(14);

module.exports = function (key) {
  return shared[key] || (shared[key] = uid(key));
};

/***/ }),
/* 30 */
/***/ (function(module, exports) {

// IE 8- don't enum bug keys
module.exports = 'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'.split(',');

/***/ }),
/* 31 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.13 ToObject(argument)
var defined = __webpack_require__(26);

module.exports = function (it) {
  return Object(defined(it));
};

/***/ }),
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var META = __webpack_require__(14)('meta');

var isObject = __webpack_require__(3);

var has = __webpack_require__(10);

var setDesc = __webpack_require__(6).f;

var id = 0;

var isExtensible = Object.isExtensible || function () {
  return true;
};

var FREEZE = !__webpack_require__(9)(function () {
  return isExtensible(Object.preventExtensions({}));
});

var setMeta = function setMeta(it) {
  setDesc(it, META, {
    value: {
      i: 'O' + ++id,
      // object ID
      w: {} // weak collections IDs

    }
  });
};

var fastKey = function fastKey(it, create) {
  // return primitive with prefix
  if (!isObject(it)) return _typeof(it) == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;

  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return 'F'; // not necessary to add metadata

    if (!create) return 'E'; // add missing metadata

    setMeta(it); // return object ID
  }

  return it[META].i;
};

var getWeak = function getWeak(it, create) {
  if (!has(it, META)) {
    // can't set metadata to uncaught frozen object
    if (!isExtensible(it)) return true; // not necessary to add metadata

    if (!create) return false; // add missing metadata

    setMeta(it); // return hash weak collections IDs
  }

  return it[META].w;
}; // add metadata on freeze-family methods calling


var onFreeze = function onFreeze(it) {
  if (FREEZE && meta.NEED && isExtensible(it) && !has(it, META)) setMeta(it);
  return it;
};

var meta = module.exports = {
  KEY: META,
  NEED: false,
  fastKey: fastKey,
  getWeak: getWeak,
  onFreeze: onFreeze
};

/***/ }),
/* 33 */
/***/ (function(module, exports, __webpack_require__) {

var pIE = __webpack_require__(25);

var createDesc = __webpack_require__(19);

var toIObject = __webpack_require__(12);

var toPrimitive = __webpack_require__(27);

var has = __webpack_require__(10);

var IE8_DOM_DEFINE = __webpack_require__(48);

var gOPD = Object.getOwnPropertyDescriptor;
exports.f = __webpack_require__(4) ? gOPD : function getOwnPropertyDescriptor(O, P) {
  O = toIObject(O);
  P = toPrimitive(P, true);
  if (IE8_DOM_DEFINE) try {
    return gOPD(O, P);
  } catch (e) {
    /* empty */
  }
  if (has(O, P)) return createDesc(!pIE.f.call(O, P), O[P]);
};

/***/ }),
/* 34 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LIBRARY = __webpack_require__(20);

var $export = __webpack_require__(2);

var redefine = __webpack_require__(8);

var hide = __webpack_require__(11);

var Iterators = __webpack_require__(17);

var $iterCreate = __webpack_require__(81);

var setToStringTag = __webpack_require__(21);

var getPrototypeOf = __webpack_require__(64);

var ITERATOR = __webpack_require__(0)('iterator');

var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`

var FF_ITERATOR = '@@iterator';
var KEYS = 'keys';
var VALUES = 'values';

var returnThis = function returnThis() {
  return this;
};

module.exports = function (Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
  $iterCreate(Constructor, NAME, next);

  var getMethod = function getMethod(kind) {
    if (!BUGGY && kind in proto) return proto[kind];

    switch (kind) {
      case KEYS:
        return function keys() {
          return new Constructor(this, kind);
        };

      case VALUES:
        return function values() {
          return new Constructor(this, kind);
        };
    }

    return function entries() {
      return new Constructor(this, kind);
    };
  };

  var TAG = NAME + ' Iterator';
  var DEF_VALUES = DEFAULT == VALUES;
  var VALUES_BUG = false;
  var proto = Base.prototype;
  var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
  var $default = $native || getMethod(DEFAULT);
  var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
  var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
  var methods, key, IteratorPrototype; // Fix native

  if ($anyNative) {
    IteratorPrototype = getPrototypeOf($anyNative.call(new Base()));

    if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
      // Set @@toStringTag to native iterators
      setToStringTag(IteratorPrototype, TAG, true); // fix for some old engines

      if (!LIBRARY && typeof IteratorPrototype[ITERATOR] != 'function') hide(IteratorPrototype, ITERATOR, returnThis);
    }
  } // fix Array#{values, @@iterator}.name in V8 / FF


  if (DEF_VALUES && $native && $native.name !== VALUES) {
    VALUES_BUG = true;

    $default = function values() {
      return $native.call(this);
    };
  } // Define iterator


  if ((!LIBRARY || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
    hide(proto, ITERATOR, $default);
  } // Plug for library


  Iterators[NAME] = $default;
  Iterators[TAG] = returnThis;

  if (DEFAULT) {
    methods = {
      values: DEF_VALUES ? $default : getMethod(VALUES),
      keys: IS_SET ? $default : getMethod(KEYS),
      entries: $entries
    };
    if (FORCED) for (key in methods) {
      if (!(key in proto)) redefine(proto, key, methods[key]);
    } else $export($export.P + $export.F * (BUGGY || VALUES_BUG), NAME, methods);
  }

  return methods;
};

/***/ }),
/* 35 */
/***/ (function(module, exports, __webpack_require__) {

// 7.1.15 ToLength
var toInteger = __webpack_require__(28);

var min = Math.min;

module.exports = function (it) {
  return it > 0 ? min(toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
};

/***/ }),
/* 36 */
/***/ (function(module, exports) {

exports.f = Object.getOwnPropertySymbols;

/***/ }),
/* 37 */
/***/ (function(module, exports, __webpack_require__) {

// getting tag from 19.1.3.6 Object.prototype.toString()
var cof = __webpack_require__(24);

var TAG = __webpack_require__(0)('toStringTag'); // ES3 wrong here


var ARG = cof(function () {
  return arguments;
}()) == 'Arguments'; // fallback for IE11 Script Access Denied error

var tryGet = function tryGet(it, key) {
  try {
    return it[key];
  } catch (e) {
    /* empty */
  }
};

module.exports = function (it) {
  var O, T, B;
  return it === undefined ? 'Undefined' : it === null ? 'Null' // @@toStringTag case
  : typeof (T = tryGet(O = Object(it), TAG)) == 'string' ? T // builtinTag case
  : ARG ? cof(O) // ES3 arguments fallback
  : (B = cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
};

/***/ }),
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var addToUnscopables = __webpack_require__(80);

var step = __webpack_require__(55);

var Iterators = __webpack_require__(17);

var toIObject = __webpack_require__(12); // 22.1.3.4 Array.prototype.entries()
// 22.1.3.13 Array.prototype.keys()
// 22.1.3.29 Array.prototype.values()
// 22.1.3.30 Array.prototype[@@iterator]()


module.exports = __webpack_require__(34)(Array, 'Array', function (iterated, kind) {
  this._t = toIObject(iterated); // target

  this._i = 0; // next index

  this._k = kind; // kind
  // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var kind = this._k;
  var index = this._i++;

  if (!O || index >= O.length) {
    this._t = undefined;
    return step(1);
  }

  if (kind == 'keys') return step(0, index);
  if (kind == 'values') return step(0, O[index]);
  return step(0, [index, O[index]]);
}, 'values'); // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)

Iterators.Arguments = Iterators.Array;
addToUnscopables('keys');
addToUnscopables('values');
addToUnscopables('entries');

/***/ }),
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3);

var document = __webpack_require__(1).document; // typeof document.createElement is 'object' in old IE


var is = isObject(document) && isObject(document.createElement);

module.exports = function (it) {
  return is ? document.createElement(it) : {};
};

/***/ }),
/* 40 */
/***/ (function(module, exports) {

module.exports = function (it, Constructor, name, forbiddenField) {
  if (!(it instanceof Constructor) || forbiddenField !== undefined && forbiddenField in it) {
    throw TypeError(name + ': incorrect invocation!');
  }

  return it;
};

/***/ }),
/* 41 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(15);

var call = __webpack_require__(74);

var isArrayIter = __webpack_require__(75);

var anObject = __webpack_require__(5);

var toLength = __webpack_require__(35);

var getIterFn = __webpack_require__(76);

var BREAK = {};
var RETURN = {};

var exports = module.exports = function (iterable, entries, fn, that, ITERATOR) {
  var iterFn = ITERATOR ? function () {
    return iterable;
  } : getIterFn(iterable);
  var f = ctx(fn, that, entries ? 2 : 1);
  var index = 0;
  var length, step, iterator, result;
  if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!'); // fast case for arrays with default iterator

  if (isArrayIter(iterFn)) for (length = toLength(iterable.length); length > index; index++) {
    result = entries ? f(anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
    if (result === BREAK || result === RETURN) return result;
  } else for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
    result = call(iterator, f, step.value, entries);
    if (result === BREAK || result === RETURN) return result;
  }
};

exports.BREAK = BREAK;
exports.RETURN = RETURN;

/***/ }),
/* 42 */
/***/ (function(module, exports, __webpack_require__) {

var redefine = __webpack_require__(8);

module.exports = function (target, src, safe) {
  for (var key in src) {
    redefine(target, key, src[key], safe);
  }

  return target;
};

/***/ }),
/* 43 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 19.1.3.6 Object.prototype.toString()

var classof = __webpack_require__(37);

var test = {};
test[__webpack_require__(0)('toStringTag')] = 'z';

if (test + '' != '[object z]') {
  __webpack_require__(8)(Object.prototype, 'toString', function toString() {
    return '[object ' + classof(this) + ']';
  }, true);
}

/***/ }),
/* 44 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 21.2.5.3 get RegExp.prototype.flags

var anObject = __webpack_require__(5);

module.exports = function () {
  var that = anObject(this);
  var result = '';
  if (that.global) result += 'g';
  if (that.ignoreCase) result += 'i';
  if (that.multiline) result += 'm';
  if (that.unicode) result += 'u';
  if (that.sticky) result += 'y';
  return result;
};

/***/ }),
/* 45 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // ECMAScript 6 symbols shim

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var global = __webpack_require__(1);

var has = __webpack_require__(10);

var DESCRIPTORS = __webpack_require__(4);

var $export = __webpack_require__(2);

var redefine = __webpack_require__(8);

var META = __webpack_require__(32).KEY;

var $fails = __webpack_require__(9);

var shared = __webpack_require__(22);

var setToStringTag = __webpack_require__(21);

var uid = __webpack_require__(14);

var wks = __webpack_require__(0);

var wksExt = __webpack_require__(54);

var wksDefine = __webpack_require__(53);

var enumKeys = __webpack_require__(78);

var isArray = __webpack_require__(61);

var anObject = __webpack_require__(5);

var isObject = __webpack_require__(3);

var toObject = __webpack_require__(31);

var toIObject = __webpack_require__(12);

var toPrimitive = __webpack_require__(27);

var createDesc = __webpack_require__(19);

var _create = __webpack_require__(18);

var gOPNExt = __webpack_require__(79);

var $GOPD = __webpack_require__(33);

var $GOPS = __webpack_require__(36);

var $DP = __webpack_require__(6);

var $keys = __webpack_require__(16);

var gOPD = $GOPD.f;
var dP = $DP.f;
var gOPN = gOPNExt.f;
var $Symbol = global.Symbol;
var $JSON = global.JSON;

var _stringify = $JSON && $JSON.stringify;

var PROTOTYPE = 'prototype';
var HIDDEN = wks('_hidden');
var TO_PRIMITIVE = wks('toPrimitive');
var isEnum = {}.propertyIsEnumerable;
var SymbolRegistry = shared('symbol-registry');
var AllSymbols = shared('symbols');
var OPSymbols = shared('op-symbols');
var ObjectProto = Object[PROTOTYPE];
var USE_NATIVE = typeof $Symbol == 'function' && !!$GOPS.f;
var QObject = global.QObject; // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173

var setter = !QObject || !QObject[PROTOTYPE] || !QObject[PROTOTYPE].findChild; // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687

var setSymbolDesc = DESCRIPTORS && $fails(function () {
  return _create(dP({}, 'a', {
    get: function get() {
      return dP(this, 'a', {
        value: 7
      }).a;
    }
  })).a != 7;
}) ? function (it, key, D) {
  var protoDesc = gOPD(ObjectProto, key);
  if (protoDesc) delete ObjectProto[key];
  dP(it, key, D);
  if (protoDesc && it !== ObjectProto) dP(ObjectProto, key, protoDesc);
} : dP;

var wrap = function wrap(tag) {
  var sym = AllSymbols[tag] = _create($Symbol[PROTOTYPE]);

  sym._k = tag;
  return sym;
};

var isSymbol = USE_NATIVE && _typeof($Symbol.iterator) == 'symbol' ? function (it) {
  return _typeof(it) == 'symbol';
} : function (it) {
  return it instanceof $Symbol;
};

var $defineProperty = function defineProperty(it, key, D) {
  if (it === ObjectProto) $defineProperty(OPSymbols, key, D);
  anObject(it);
  key = toPrimitive(key, true);
  anObject(D);

  if (has(AllSymbols, key)) {
    if (!D.enumerable) {
      if (!has(it, HIDDEN)) dP(it, HIDDEN, createDesc(1, {}));
      it[HIDDEN][key] = true;
    } else {
      if (has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
      D = _create(D, {
        enumerable: createDesc(0, false)
      });
    }

    return setSymbolDesc(it, key, D);
  }

  return dP(it, key, D);
};

var $defineProperties = function defineProperties(it, P) {
  anObject(it);
  var keys = enumKeys(P = toIObject(P));
  var i = 0;
  var l = keys.length;
  var key;

  while (l > i) {
    $defineProperty(it, key = keys[i++], P[key]);
  }

  return it;
};

var $create = function create(it, P) {
  return P === undefined ? _create(it) : $defineProperties(_create(it), P);
};

var $propertyIsEnumerable = function propertyIsEnumerable(key) {
  var E = isEnum.call(this, key = toPrimitive(key, true));
  if (this === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return false;
  return E || !has(this, key) || !has(AllSymbols, key) || has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
};

var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
  it = toIObject(it);
  key = toPrimitive(key, true);
  if (it === ObjectProto && has(AllSymbols, key) && !has(OPSymbols, key)) return;
  var D = gOPD(it, key);
  if (D && has(AllSymbols, key) && !(has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
  return D;
};

var $getOwnPropertyNames = function getOwnPropertyNames(it) {
  var names = gOPN(toIObject(it));
  var result = [];
  var i = 0;
  var key;

  while (names.length > i) {
    if (!has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
  }

  return result;
};

var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
  var IS_OP = it === ObjectProto;
  var names = gOPN(IS_OP ? OPSymbols : toIObject(it));
  var result = [];
  var i = 0;
  var key;

  while (names.length > i) {
    if (has(AllSymbols, key = names[i++]) && (IS_OP ? has(ObjectProto, key) : true)) result.push(AllSymbols[key]);
  }

  return result;
}; // 19.4.1.1 Symbol([description])


if (!USE_NATIVE) {
  $Symbol = function _Symbol() {
    if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
    var tag = uid(arguments.length > 0 ? arguments[0] : undefined);

    var $set = function $set(value) {
      if (this === ObjectProto) $set.call(OPSymbols, value);
      if (has(this, HIDDEN) && has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
      setSymbolDesc(this, tag, createDesc(1, value));
    };

    if (DESCRIPTORS && setter) setSymbolDesc(ObjectProto, tag, {
      configurable: true,
      set: $set
    });
    return wrap(tag);
  };

  redefine($Symbol[PROTOTYPE], 'toString', function toString() {
    return this._k;
  });
  $GOPD.f = $getOwnPropertyDescriptor;
  $DP.f = $defineProperty;
  __webpack_require__(46).f = gOPNExt.f = $getOwnPropertyNames;
  __webpack_require__(25).f = $propertyIsEnumerable;
  $GOPS.f = $getOwnPropertySymbols;

  if (DESCRIPTORS && !__webpack_require__(20)) {
    redefine(ObjectProto, 'propertyIsEnumerable', $propertyIsEnumerable, true);
  }

  wksExt.f = function (name) {
    return wrap(wks(name));
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {
  Symbol: $Symbol
});

for (var es6Symbols = // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'.split(','), j = 0; es6Symbols.length > j;) {
  wks(es6Symbols[j++]);
}

for (var wellKnownSymbols = $keys(wks.store), k = 0; wellKnownSymbols.length > k;) {
  wksDefine(wellKnownSymbols[k++]);
}

$export($export.S + $export.F * !USE_NATIVE, 'Symbol', {
  // 19.4.2.1 Symbol.for(key)
  'for': function _for(key) {
    return has(SymbolRegistry, key += '') ? SymbolRegistry[key] : SymbolRegistry[key] = $Symbol(key);
  },
  // 19.4.2.5 Symbol.keyFor(sym)
  keyFor: function keyFor(sym) {
    if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');

    for (var key in SymbolRegistry) {
      if (SymbolRegistry[key] === sym) return key;
    }
  },
  useSetter: function useSetter() {
    setter = true;
  },
  useSimple: function useSimple() {
    setter = false;
  }
});
$export($export.S + $export.F * !USE_NATIVE, 'Object', {
  // 19.1.2.2 Object.create(O [, Properties])
  create: $create,
  // 19.1.2.4 Object.defineProperty(O, P, Attributes)
  defineProperty: $defineProperty,
  // 19.1.2.3 Object.defineProperties(O, Properties)
  defineProperties: $defineProperties,
  // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
  getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
  // 19.1.2.7 Object.getOwnPropertyNames(O)
  getOwnPropertyNames: $getOwnPropertyNames,
  // 19.1.2.8 Object.getOwnPropertySymbols(O)
  getOwnPropertySymbols: $getOwnPropertySymbols
}); // Chrome 38 and 39 `Object.getOwnPropertySymbols` fails on primitives
// https://bugs.chromium.org/p/v8/issues/detail?id=3443

var FAILS_ON_PRIMITIVES = $fails(function () {
  $GOPS.f(1);
});
$export($export.S + $export.F * FAILS_ON_PRIMITIVES, 'Object', {
  getOwnPropertySymbols: function getOwnPropertySymbols(it) {
    return $GOPS.f(toObject(it));
  }
}); // 24.3.2 JSON.stringify(value [, replacer [, space]])

$JSON && $export($export.S + $export.F * (!USE_NATIVE || $fails(function () {
  var S = $Symbol(); // MS Edge converts symbol values to JSON as {}
  // WebKit converts symbol values to JSON as null
  // V8 throws on boxed symbols

  return _stringify([S]) != '[null]' || _stringify({
    a: S
  }) != '{}' || _stringify(Object(S)) != '{}';
})), 'JSON', {
  stringify: function stringify(it) {
    var args = [it];
    var i = 1;
    var replacer, $replacer;

    while (arguments.length > i) {
      args.push(arguments[i++]);
    }

    $replacer = replacer = args[1];
    if (!isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined

    if (!isArray(replacer)) replacer = function replacer(key, value) {
      if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
      if (!isSymbol(value)) return value;
    };
    args[1] = replacer;
    return _stringify.apply($JSON, args);
  }
}); // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)

$Symbol[PROTOTYPE][TO_PRIMITIVE] || __webpack_require__(11)($Symbol[PROTOTYPE], TO_PRIMITIVE, $Symbol[PROTOTYPE].valueOf); // 19.4.3.5 Symbol.prototype[@@toStringTag]

setToStringTag($Symbol, 'Symbol'); // 20.2.1.9 Math[@@toStringTag]

setToStringTag(Math, 'Math', true); // 24.3.3 JSON[@@toStringTag]

setToStringTag(global.JSON, 'JSON', true);

/***/ }),
/* 46 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)
var $keys = __webpack_require__(49);

var hiddenKeys = __webpack_require__(30).concat('length', 'prototype');

exports.f = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
  return $keys(O, hiddenKeys);
};

/***/ }),
/* 47 */
/***/ (function(module, exports, __webpack_require__) {

var $iterators = __webpack_require__(38);

var getKeys = __webpack_require__(16);

var redefine = __webpack_require__(8);

var global = __webpack_require__(1);

var hide = __webpack_require__(11);

var Iterators = __webpack_require__(17);

var wks = __webpack_require__(0);

var ITERATOR = wks('iterator');
var TO_STRING_TAG = wks('toStringTag');
var ArrayValues = Iterators.Array;
var DOMIterables = {
  CSSRuleList: true,
  // TODO: Not spec compliant, should be false.
  CSSStyleDeclaration: false,
  CSSValueList: false,
  ClientRectList: false,
  DOMRectList: false,
  DOMStringList: false,
  DOMTokenList: true,
  DataTransferItemList: false,
  FileList: false,
  HTMLAllCollection: false,
  HTMLCollection: false,
  HTMLFormElement: false,
  HTMLSelectElement: false,
  MediaList: true,
  // TODO: Not spec compliant, should be false.
  MimeTypeArray: false,
  NamedNodeMap: false,
  NodeList: true,
  PaintRequestList: false,
  Plugin: false,
  PluginArray: false,
  SVGLengthList: false,
  SVGNumberList: false,
  SVGPathSegList: false,
  SVGPointList: false,
  SVGStringList: false,
  SVGTransformList: false,
  SourceBufferList: false,
  StyleSheetList: true,
  // TODO: Not spec compliant, should be false.
  TextTrackCueList: false,
  TextTrackList: false,
  TouchList: false
};

for (var collections = getKeys(DOMIterables), i = 0; i < collections.length; i++) {
  var NAME = collections[i];
  var explicit = DOMIterables[NAME];
  var Collection = global[NAME];
  var proto = Collection && Collection.prototype;
  var key;

  if (proto) {
    if (!proto[ITERATOR]) hide(proto, ITERATOR, ArrayValues);
    if (!proto[TO_STRING_TAG]) hide(proto, TO_STRING_TAG, NAME);
    Iterators[NAME] = ArrayValues;
    if (explicit) for (key in $iterators) {
      if (!proto[key]) redefine(proto, key, $iterators[key], true);
    }
  }
}

/***/ }),
/* 48 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = !__webpack_require__(4) && !__webpack_require__(9)(function () {
  return Object.defineProperty(__webpack_require__(39)('div'), 'a', {
    get: function get() {
      return 7;
    }
  }).a != 7;
});

/***/ }),
/* 49 */
/***/ (function(module, exports, __webpack_require__) {

var has = __webpack_require__(10);

var toIObject = __webpack_require__(12);

var arrayIndexOf = __webpack_require__(50)(false);

var IE_PROTO = __webpack_require__(29)('IE_PROTO');

module.exports = function (object, names) {
  var O = toIObject(object);
  var i = 0;
  var result = [];
  var key;

  for (key in O) {
    if (key != IE_PROTO) has(O, key) && result.push(key);
  } // Don't enum bug & hidden keys


  while (names.length > i) {
    if (has(O, key = names[i++])) {
      ~arrayIndexOf(result, key) || result.push(key);
    }
  }

  return result;
};

/***/ }),
/* 50 */
/***/ (function(module, exports, __webpack_require__) {

// false -> Array#indexOf
// true  -> Array#includes
var toIObject = __webpack_require__(12);

var toLength = __webpack_require__(35);

var toAbsoluteIndex = __webpack_require__(73);

module.exports = function (IS_INCLUDES) {
  return function ($this, el, fromIndex) {
    var O = toIObject($this);
    var length = toLength(O.length);
    var index = toAbsoluteIndex(fromIndex, length);
    var value; // Array#includes uses SameValueZero equality algorithm
    // eslint-disable-next-line no-self-compare

    if (IS_INCLUDES && el != el) while (length > index) {
      value = O[index++]; // eslint-disable-next-line no-self-compare

      if (value != value) return true; // Array#indexOf ignores holes, Array#includes - not
    } else for (; length > index; index++) {
      if (IS_INCLUDES || index in O) {
        if (O[index] === el) return IS_INCLUDES || index || 0;
      }
    }
    return !IS_INCLUDES && -1;
  };
};

/***/ }),
/* 51 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(2); // 19.1.2.4 / 15.2.3.6 Object.defineProperty(O, P, Attributes)


$export($export.S + $export.F * !__webpack_require__(4), 'Object', {
  defineProperty: __webpack_require__(6).f
});

/***/ }),
/* 52 */
/***/ (function(module, exports, __webpack_require__) {

__webpack_require__(53)('asyncIterator');

/***/ }),
/* 53 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);

var core = __webpack_require__(13);

var LIBRARY = __webpack_require__(20);

var wksExt = __webpack_require__(54);

var defineProperty = __webpack_require__(6).f;

module.exports = function (name) {
  var $Symbol = core.Symbol || (core.Symbol = LIBRARY ? {} : global.Symbol || {});
  if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, {
    value: wksExt.f(name)
  });
};

/***/ }),
/* 54 */
/***/ (function(module, exports, __webpack_require__) {

exports.f = __webpack_require__(0);

/***/ }),
/* 55 */
/***/ (function(module, exports) {

module.exports = function (done, value) {
  return {
    value: value,
    done: !!done
  };
};

/***/ }),
/* 56 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var fails = __webpack_require__(9);

module.exports = function (method, arg) {
  return !!method && fails(function () {
    // eslint-disable-next-line no-useless-call
    arg ? method.call(null, function () {
      /* empty */
    }, 1) : method.call(null);
  });
};

/***/ }),
/* 57 */
/***/ (function(module, exports, __webpack_require__) {

// Works with __proto__ only. Old v8 can't work with null proto objects.

/* eslint-disable no-proto */
var isObject = __webpack_require__(3);

var anObject = __webpack_require__(5);

var check = function check(O, proto) {
  anObject(O);
  if (!isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
};

module.exports = {
  set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
  function (test, buggy, set) {
    try {
      set = __webpack_require__(15)(Function.call, __webpack_require__(33).f(Object.prototype, '__proto__').set, 2);
      set(test, []);
      buggy = !(test instanceof Array);
    } catch (e) {
      buggy = true;
    }

    return function setPrototypeOf(O, proto) {
      check(O, proto);
      if (buggy) O.__proto__ = proto;else set(O, proto);
      return O;
    };
  }({}, false) : undefined),
  check: check
};

/***/ }),
/* 58 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var aFunction = __webpack_require__(23);

var isObject = __webpack_require__(3);

var invoke = __webpack_require__(66);

var arraySlice = [].slice;
var factories = {};

var construct = function construct(F, len, args) {
  if (!(len in factories)) {
    for (var n = [], i = 0; i < len; i++) {
      n[i] = 'a[' + i + ']';
    } // eslint-disable-next-line no-new-func


    factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
  }

  return factories[len](F, args);
};

module.exports = Function.bind || function bind(that
/* , ...args */
) {
  var fn = aFunction(this);
  var partArgs = arraySlice.call(arguments, 1);

  var bound = function bound()
  /* args... */
  {
    var args = partArgs.concat(arraySlice.call(arguments));
    return this instanceof bound ? construct(fn, args.length, args) : invoke(fn, args, that);
  };

  if (isObject(fn.prototype)) bound.prototype = fn.prototype;
  return bound;
};

/***/ }),
/* 59 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3);

module.exports = function (it, TYPE) {
  if (!isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
  return it;
};

/***/ }),
/* 60 */
/***/ (function(module, exports, __webpack_require__) {

// fallback for non-array-like ES3 and non-enumerable old V8 strings
var cof = __webpack_require__(24); // eslint-disable-next-line no-prototype-builtins


module.exports = Object('z').propertyIsEnumerable(0) ? Object : function (it) {
  return cof(it) == 'String' ? it.split('') : Object(it);
};

/***/ }),
/* 61 */
/***/ (function(module, exports, __webpack_require__) {

// 7.2.2 IsArray(argument)
var cof = __webpack_require__(24);

module.exports = Array.isArray || function isArray(arg) {
  return cof(arg) == 'Array';
};

/***/ }),
/* 62 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(77);

var anObject = __webpack_require__(5);

var $flags = __webpack_require__(44);

var DESCRIPTORS = __webpack_require__(4);

var TO_STRING = 'toString';
var $toString = /./[TO_STRING];

var define = function define(fn) {
  __webpack_require__(8)(RegExp.prototype, TO_STRING, fn, true);
}; // 21.2.5.14 RegExp.prototype.toString()


if (__webpack_require__(9)(function () {
  return $toString.call({
    source: 'a',
    flags: 'b'
  }) != '/a/b';
})) {
  define(function toString() {
    var R = anObject(this);
    return '/'.concat(R.source, '/', 'flags' in R ? R.flags : !DESCRIPTORS && R instanceof RegExp ? $flags.call(R) : undefined);
  }); // FF44- RegExp#toString has a wrong name
} else if ($toString.name != TO_STRING) {
  define(function toString() {
    return $toString.call(this);
  });
}

/***/ }),
/* 63 */
/***/ (function(module, exports, __webpack_require__) {

var DateProto = Date.prototype;
var INVALID_DATE = 'Invalid Date';
var TO_STRING = 'toString';
var $toString = DateProto[TO_STRING];
var getTime = DateProto.getTime;

if (new Date(NaN) + '' != INVALID_DATE) {
  __webpack_require__(8)(DateProto, TO_STRING, function toString() {
    var value = getTime.call(this); // eslint-disable-next-line no-self-compare

    return value === value ? $toString.call(this) : INVALID_DATE;
  });
}

/***/ }),
/* 64 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)
var has = __webpack_require__(10);

var toObject = __webpack_require__(31);

var IE_PROTO = __webpack_require__(29)('IE_PROTO');

var ObjectProto = Object.prototype;

module.exports = Object.getPrototypeOf || function (O) {
  O = toObject(O);
  if (has(O, IE_PROTO)) return O[IE_PROTO];

  if (typeof O.constructor == 'function' && O instanceof O.constructor) {
    return O.constructor.prototype;
  }

  return O instanceof Object ? ObjectProto : null;
};

/***/ }),
/* 65 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return LiaEvents; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "c", function() { return lia_execute_event; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return lia_eval_event; });
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(132);
/* harmony import */ var core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_match__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(137);
/* harmony import */ var core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_map__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(82);
/* harmony import */ var core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_set_prototype_of__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(83);
/* harmony import */ var core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_index_of__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var core_js_modules_es6_function_bind__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(84);
/* harmony import */ var core_js_modules_es6_function_bind__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_function_bind__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(62);
/* harmony import */ var core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_regexp_to_string__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(63);
/* harmony import */ var core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_date_to_string__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var core_js_modules_es6_reflect_construct__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(85);
/* harmony import */ var core_js_modules_es6_reflect_construct__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_reflect_construct__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(47);
/* harmony import */ var core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_web_dom_iterable__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(38);
/* harmony import */ var core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_array_iterator__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(43);
/* harmony import */ var core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_to_string__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(86);
/* harmony import */ var core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_string_iterator__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(87);
/* harmony import */ var core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_12___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_map__WEBPACK_IMPORTED_MODULE_12__);
/* harmony import */ var core_js_modules_es6_object_create__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(91);
/* harmony import */ var core_js_modules_es6_object_create__WEBPACK_IMPORTED_MODULE_13___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_create__WEBPACK_IMPORTED_MODULE_13__);
/* harmony import */ var core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(51);
/* harmony import */ var core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_14___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_object_define_property__WEBPACK_IMPORTED_MODULE_14__);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(52);
/* harmony import */ var core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_15___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es7_symbol_async_iterator__WEBPACK_IMPORTED_MODULE_15__);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(45);
/* harmony import */ var core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_16___default = /*#__PURE__*/__webpack_require__.n(core_js_modules_es6_symbol__WEBPACK_IMPORTED_MODULE_16__);
/* harmony import */ var _logger__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(7);




















function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}

function _possibleConstructorReturn(self, call) {
  if (call && (_typeof(call) === "object" || typeof call === "function")) {
    return call;
  }

  return _assertThisInitialized(self);
}

function _assertThisInitialized(self) {
  if (self === void 0) {
    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
  }

  return self;
}

function _inherits(subClass, superClass) {
  if (typeof superClass !== "function" && superClass !== null) {
    throw new TypeError("Super expression must either be null or a function");
  }

  subClass.prototype = Object.create(superClass && superClass.prototype, {
    constructor: {
      value: subClass,
      writable: true,
      configurable: true
    }
  });
  if (superClass) _setPrototypeOf(subClass, superClass);
}

function _wrapNativeSuper(Class) {
  var _cache = typeof Map === "function" ? new Map() : undefined;

  _wrapNativeSuper = function _wrapNativeSuper(Class) {
    if (Class === null || !_isNativeFunction(Class)) return Class;

    if (typeof Class !== "function") {
      throw new TypeError("Super expression must either be null or a function");
    }

    if (typeof _cache !== "undefined") {
      if (_cache.has(Class)) return _cache.get(Class);

      _cache.set(Class, Wrapper);
    }

    function Wrapper() {
      return _construct(Class, arguments, _getPrototypeOf(this).constructor);
    }

    Wrapper.prototype = Object.create(Class.prototype, {
      constructor: {
        value: Wrapper,
        enumerable: false,
        writable: true,
        configurable: true
      }
    });
    return _setPrototypeOf(Wrapper, Class);
  };

  return _wrapNativeSuper(Class);
}

function isNativeReflectConstruct() {
  if (typeof Reflect === "undefined" || !Reflect.construct) return false;
  if (Reflect.construct.sham) return false;
  if (typeof Proxy === "function") return true;

  try {
    Date.prototype.toString.call(Reflect.construct(Date, [], function () {}));
    return true;
  } catch (e) {
    return false;
  }
}

function _construct(Parent, args, Class) {
  if (isNativeReflectConstruct()) {
    _construct = Reflect.construct;
  } else {
    _construct = function _construct(Parent, args, Class) {
      var a = [null];
      a.push.apply(a, args);
      var Constructor = Function.bind.apply(Parent, a);
      var instance = new Constructor();
      if (Class) _setPrototypeOf(instance, Class.prototype);
      return instance;
    };
  }

  return _construct.apply(null, arguments);
}

function _isNativeFunction(fn) {
  return Function.toString.call(fn).indexOf("[native code]") !== -1;
}

function _setPrototypeOf(o, p) {
  _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) {
    o.__proto__ = p;
    return o;
  };

  return _setPrototypeOf(o, p);
}

function _getPrototypeOf(o) {
  _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) {
    return o.__proto__ || Object.getPrototypeOf(o);
  };
  return _getPrototypeOf(o);
}

 // Basic class for handline Code-Errors

var LiaError =
/*#__PURE__*/
function (_Error) {
  _inherits(LiaError, _Error);

  function LiaError(message, files) {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, LiaError);

    for (var _len = arguments.length, params = new Array(_len > 2 ? _len - 2 : 0), _key = 2; _key < _len; _key++) {
      params[_key - 2] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(LiaError)).call.apply(_getPrototypeOf2, [this].concat(params)));

    if (Error.captureStackTrace) {
      Error.captureStackTrace(_assertThisInitialized(_this), LiaError);
    }

    _this.message = message;
    _this.details = [];

    for (var i = 0; i < files; i++) {
      _this.details.push([]);
    }

    return _this;
  }

  _createClass(LiaError, [{
    key: "add_detail",
    value: function add_detail(fileId, msg, type, line, column) {
      this.details[fileId].push({
        row: line,
        column: column,
        text: msg,
        type: type
      });
    }
  }, {
    key: "get_detail",
    value: function get_detail(msg, type, line) {
      var column = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
      return {
        row: line,
        column: column,
        text: msg,
        type: type
      };
    } // sometimes you need to adjust the compile messages to fit into the
    // editor ... use this function to adapt the row parameters ...
    // file_id with 0 will apply the correction value to all files

  }, {
    key: "correct_lines",
    value: function correct_lines(fileId, by) {
      if (fileId == null) {
        for (var i = 0; i < this.details.length; i++) {
          this.correct_lines(i, by);
        }
      } else {
        this.details[fileId] = this.details[fileId].map(function (e) {
          e.line = e.line + by;
        });
      }
    }
  }]);

  return LiaError;
}(_wrapNativeSuper(Error));

;

var LiaEvents =
/*#__PURE__*/
function () {
  function LiaEvents() {
    _classCallCheck(this, LiaEvents);

    this.event = {};
    this.input = {};
  }

  _createClass(LiaEvents, [{
    key: "register",
    value: function register(name, fn) {
      this.event[name] = fn;
    }
  }, {
    key: "register_input",
    value: function register_input(id1, id2, name, fn) {
      if (this.input[id1] === undefined) {
        this.input[id1] = {};
      }

      if (this.input[id1][id2] === undefined) {
        this.input[id1][id2] = {};
      }

      this.input[id1][id2][name] = fn;
    }
  }, {
    key: "dispatch_input",
    value: function dispatch_input(event) {
      // id1, id2, name, msg) {
      try {
        this.input[event.section][event.message.section][event.message.topic](event.message.message);
      } catch (e) {
        _logger__WEBPACK_IMPORTED_MODULE_17__[/* lia */ "a"].error('unable to dispatch message', event.message);
      }
    }
  }, {
    key: "dispatch",
    value: function dispatch(name, data) {
      if (this.event.hasOwnProperty(name)) {
        this.event[name](data);
      }
    }
  }, {
    key: "remove",
    value: function remove(name) {
      delete this.event[name];
    }
  }]);

  return LiaEvents;
}();

;

function getLineNumber(error) {
  try {
    // firefox
    var firefoxRegex = /<anonymous>:(\d+):\d+/;

    if (error.stack.match(firefoxRegex)) {
      var res = error.stack.match(firefoxRegex);
      return parseInt(res[1], 10);
    } // chrome


    var chromeRegex = /<anonymous>.+:(\d+):\d+/;

    if (error.stack.match(chromeRegex)) {
      var _res = error.stack.match(chromeRegex);

      return parseInt(_res[1], 10);
    }
  } catch (e) {}
}

;

function lia_eval(code, send) {
  try {
    var console = {
      debug: function debug() {
        for (var _len2 = arguments.length, args = new Array(_len2), _key2 = 0; _key2 < _len2; _key2++) {
          args[_key2] = arguments[_key2];
        }

        return send.log('debug', '\n', args);
      },
      log: function log() {
        for (var _len3 = arguments.length, args = new Array(_len3), _key3 = 0; _key3 < _len3; _key3++) {
          args[_key3] = arguments[_key3];
        }

        return send.log('info', '\n', args);
      },
      warn: function warn() {
        for (var _len4 = arguments.length, args = new Array(_len4), _key4 = 0; _key4 < _len4; _key4++) {
          args[_key4] = arguments[_key4];
        }

        return send.log('warn', '\n', args);
      },
      error: function error() {
        for (var _len5 = arguments.length, args = new Array(_len5), _key5 = 0; _key5 < _len5; _key5++) {
          args[_key5] = arguments[_key5];
        }

        return send.log('error', '\n', args);
      },
      clear: function clear() {
        return send.lia('LIA: clear');
      }
    };
    console.clear();
    send.lia(String(eval(code + '\n', send, console)));
  } catch (e) {
    if (e instanceof LiaError) {
      send.lia(e.message, e.details, false);
    } else {
      send.lia(e.message, [], false);
    }
  }
}

;

function lia_eval_event(send, channel, handler, event) {
  lia_eval(event.message.message, {
    lia: function lia(result) {
      var details = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];
      var ok = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : true;
      event.message.topic = 'eval';
      event.message.message = {
        result: result,
        details: details,
        ok: ok
      };
      send(event);
    },
    log: function log(topic, sep) {
      event.message.topic = topic;

      for (var _len6 = arguments.length, args = new Array(_len6 > 2 ? _len6 - 2 : 0), _key6 = 2; _key6 < _len6; _key6++) {
        args[_key6 - 2] = arguments[_key6];
      }

      event.message.message = list_to_string(sep, args);
      send(event);
    },
    service: websocket(channel),
    handle: function handle(name, fn) {
      var e1 = event.section;
      var e2 = event.message.section;
      handler.register_input(e1, e2, name, fn);
    },
    register: function register(name, fn) {
      handler.register(name, fn);
    }
  });
}

;

function list_to_string(sep, list) {
  var str = '';

  for (var i = 0; i < list[0].length; i++) {
    str += list[0][i].toString() + ' ';
  }

  return str + sep;
}

;

function lia_execute_event(event) {
  try {
    setTimeout(function () {
      eval(event.code);
    }, event.delay);
  } catch (e) {
    _logger__WEBPACK_IMPORTED_MODULE_17__[/* lia */ "a"].error('exec => ', e);
  }
}

;

function websocket() {
  var channel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

  if (channel) {
    return function (eventID, message) {
      return channel.push('lia', {
        event_id: eventID,
        message: message
      });
    };
  }
}

;


/***/ }),
/* 66 */
/***/ (function(module, exports) {

// fast apply, http://jsperf.lnkit.com/fast-apply/5
module.exports = function (fn, args, that) {
  var un = that === undefined;

  switch (args.length) {
    case 0:
      return un ? fn() : fn.call(that);

    case 1:
      return un ? fn(args[0]) : fn.call(that, args[0]);

    case 2:
      return un ? fn(args[0], args[1]) : fn.call(that, args[0], args[1]);

    case 3:
      return un ? fn(args[0], args[1], args[2]) : fn.call(that, args[0], args[1], args[2]);

    case 4:
      return un ? fn(args[0], args[1], args[2], args[3]) : fn.call(that, args[0], args[1], args[2], args[3]);
  }

  return fn.apply(that, args);
};

/***/ }),
/* 67 */
/***/ (function(module, exports, __webpack_require__) {

var document = __webpack_require__(1).document;

module.exports = document && document.documentElement;

/***/ }),
/* 68 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(1);

var dP = __webpack_require__(6);

var DESCRIPTORS = __webpack_require__(4);

var SPECIES = __webpack_require__(0)('species');

module.exports = function (KEY) {
  var C = global[KEY];
  if (DESCRIPTORS && C && !C[SPECIES]) dP.f(C, SPECIES, {
    configurable: true,
    get: function get() {
      return this;
    }
  });
};

/***/ }),
/* 69 */
/***/ (function(module, exports, __webpack_require__) {

var ITERATOR = __webpack_require__(0)('iterator');

var SAFE_CLOSING = false;

try {
  var riter = [7][ITERATOR]();

  riter['return'] = function () {
    SAFE_CLOSING = true;
  }; // eslint-disable-next-line no-throw-literal


  Array.from(riter, function () {
    throw 2;
  });
} catch (e) {
  /* empty */
}

module.exports = function (exec, skipClosing) {
  if (!skipClosing && !SAFE_CLOSING) return false;
  var safe = false;

  try {
    var arr = [7];
    var iter = arr[ITERATOR]();

    iter.next = function () {
      return {
        done: safe = true
      };
    };

    arr[ITERATOR] = function () {
      return iter;
    };

    exec(arr);
  } catch (e) {
    /* empty */
  }

  return safe;
};

/***/ }),
/* 70 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(6);

var anObject = __webpack_require__(5);

var getKeys = __webpack_require__(16);

module.exports = __webpack_require__(4) ? Object.defineProperties : function defineProperties(O, Properties) {
  anObject(O);
  var keys = getKeys(Properties);
  var length = keys.length;
  var i = 0;
  var P;

  while (length > i) {
    dP.f(O, P = keys[i++], Properties[P]);
  }

  return O;
};

/***/ }),
/* 71 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(28);

var defined = __webpack_require__(26); // true  -> String#at
// false -> String#codePointAt


module.exports = function (TO_STRING) {
  return function (that, pos) {
    var s = String(defined(that));
    var i = toInteger(pos);
    var l = s.length;
    var a, b;
    if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
    a = s.charCodeAt(i);
    return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ? TO_STRING ? s.charAt(i) : a : TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
  };
};

/***/ }),
/* 72 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(22)('native-function-to-string', Function.toString);

/***/ }),
/* 73 */
/***/ (function(module, exports, __webpack_require__) {

var toInteger = __webpack_require__(28);

var max = Math.max;
var min = Math.min;

module.exports = function (index, length) {
  index = toInteger(index);
  return index < 0 ? max(index + length, 0) : min(index, length);
};

/***/ }),
/* 74 */
/***/ (function(module, exports, __webpack_require__) {

// call something on iterator step with safe closing on error
var anObject = __webpack_require__(5);

module.exports = function (iterator, fn, value, entries) {
  try {
    return entries ? fn(anObject(value)[0], value[1]) : fn(value); // 7.4.6 IteratorClose(iterator, completion)
  } catch (e) {
    var ret = iterator['return'];
    if (ret !== undefined) anObject(ret.call(iterator));
    throw e;
  }
};

/***/ }),
/* 75 */
/***/ (function(module, exports, __webpack_require__) {

// check on default Array iterator
var Iterators = __webpack_require__(17);

var ITERATOR = __webpack_require__(0)('iterator');

var ArrayProto = Array.prototype;

module.exports = function (it) {
  return it !== undefined && (Iterators.Array === it || ArrayProto[ITERATOR] === it);
};

/***/ }),
/* 76 */
/***/ (function(module, exports, __webpack_require__) {

var classof = __webpack_require__(37);

var ITERATOR = __webpack_require__(0)('iterator');

var Iterators = __webpack_require__(17);

module.exports = __webpack_require__(13).getIteratorMethod = function (it) {
  if (it != undefined) return it[ITERATOR] || it['@@iterator'] || Iterators[classof(it)];
};

/***/ }),
/* 77 */
/***/ (function(module, exports, __webpack_require__) {

// 21.2.5.3 get RegExp.prototype.flags()
if (__webpack_require__(4) && /./g.flags != 'g') __webpack_require__(6).f(RegExp.prototype, 'flags', {
  configurable: true,
  get: __webpack_require__(44)
});

/***/ }),
/* 78 */
/***/ (function(module, exports, __webpack_require__) {

// all enumerable object keys, includes symbols
var getKeys = __webpack_require__(16);

var gOPS = __webpack_require__(36);

var pIE = __webpack_require__(25);

module.exports = function (it) {
  var result = getKeys(it);
  var getSymbols = gOPS.f;

  if (getSymbols) {
    var symbols = getSymbols(it);
    var isEnum = pIE.f;
    var i = 0;
    var key;

    while (symbols.length > i) {
      if (isEnum.call(it, key = symbols[i++])) result.push(key);
    }
  }

  return result;
};

/***/ }),
/* 79 */
/***/ (function(module, exports, __webpack_require__) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

// fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window
var toIObject = __webpack_require__(12);

var gOPN = __webpack_require__(46).f;

var toString = {}.toString;
var windowNames = (typeof window === "undefined" ? "undefined" : _typeof(window)) == 'object' && window && Object.getOwnPropertyNames ? Object.getOwnPropertyNames(window) : [];

var getWindowNames = function getWindowNames(it) {
  try {
    return gOPN(it);
  } catch (e) {
    return windowNames.slice();
  }
};

module.exports.f = function getOwnPropertyNames(it) {
  return windowNames && toString.call(it) == '[object Window]' ? getWindowNames(it) : gOPN(toIObject(it));
};

/***/ }),
/* 80 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.3.31 Array.prototype[@@unscopables]
var UNSCOPABLES = __webpack_require__(0)('unscopables');

var ArrayProto = Array.prototype;
if (ArrayProto[UNSCOPABLES] == undefined) __webpack_require__(11)(ArrayProto, UNSCOPABLES, {});

module.exports = function (key) {
  ArrayProto[UNSCOPABLES][key] = true;
};

/***/ }),
/* 81 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var create = __webpack_require__(18);

var descriptor = __webpack_require__(19);

var setToStringTag = __webpack_require__(21);

var IteratorPrototype = {}; // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()

__webpack_require__(11)(IteratorPrototype, __webpack_require__(0)('iterator'), function () {
  return this;
});

module.exports = function (Constructor, NAME, next) {
  Constructor.prototype = create(IteratorPrototype, {
    next: descriptor(1, next)
  });
  setToStringTag(Constructor, NAME + ' Iterator');
};

/***/ }),
/* 82 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.19 Object.setPrototypeOf(O, proto)
var $export = __webpack_require__(2);

$export($export.S, 'Object', {
  setPrototypeOf: __webpack_require__(57).set
});

/***/ }),
/* 83 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(2);

var $indexOf = __webpack_require__(50)(false);

var $native = [].indexOf;
var NEGATIVE_ZERO = !!$native && 1 / [1].indexOf(1, -0) < 0;
$export($export.P + $export.F * (NEGATIVE_ZERO || !__webpack_require__(56)($native)), 'Array', {
  // 22.1.3.11 / 15.4.4.14 Array.prototype.indexOf(searchElement [, fromIndex])
  indexOf: function indexOf(searchElement
  /* , fromIndex = 0 */
  ) {
    return NEGATIVE_ZERO // convert -0 to +0
    ? $native.apply(this, arguments) || 0 : $indexOf(this, searchElement, arguments[1]);
  }
});

/***/ }),
/* 84 */
/***/ (function(module, exports, __webpack_require__) {

// 19.2.3.2 / 15.3.4.5 Function.prototype.bind(thisArg, args...)
var $export = __webpack_require__(2);

$export($export.P, 'Function', {
  bind: __webpack_require__(58)
});

/***/ }),
/* 85 */
/***/ (function(module, exports, __webpack_require__) {

// 26.1.2 Reflect.construct(target, argumentsList [, newTarget])
var $export = __webpack_require__(2);

var create = __webpack_require__(18);

var aFunction = __webpack_require__(23);

var anObject = __webpack_require__(5);

var isObject = __webpack_require__(3);

var fails = __webpack_require__(9);

var bind = __webpack_require__(58);

var rConstruct = (__webpack_require__(1).Reflect || {}).construct; // MS Edge supports only 2 arguments and argumentsList argument is optional
// FF Nightly sets third argument as `new.target`, but does not create `this` from it

var NEW_TARGET_BUG = fails(function () {
  function F() {
    /* empty */
  }

  return !(rConstruct(function () {
    /* empty */
  }, [], F) instanceof F);
});
var ARGS_BUG = !fails(function () {
  rConstruct(function () {
    /* empty */
  });
});
$export($export.S + $export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
  construct: function construct(Target, args
  /* , newTarget */
  ) {
    aFunction(Target);
    anObject(args);
    var newTarget = arguments.length < 3 ? Target : aFunction(arguments[2]);
    if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);

    if (Target == newTarget) {
      // w/o altered newTarget, optimization for 0-4 arguments
      switch (args.length) {
        case 0:
          return new Target();

        case 1:
          return new Target(args[0]);

        case 2:
          return new Target(args[0], args[1]);

        case 3:
          return new Target(args[0], args[1], args[2]);

        case 4:
          return new Target(args[0], args[1], args[2], args[3]);
      } // w/o altered newTarget, lot of arguments case


      var $args = [null];
      $args.push.apply($args, args);
      return new (bind.apply(Target, $args))();
    } // with altered newTarget, not support built-in constructors


    var proto = newTarget.prototype;
    var instance = create(isObject(proto) ? proto : Object.prototype);
    var result = Function.apply.call(Target, instance, args);
    return isObject(result) ? result : instance;
  }
});

/***/ }),
/* 86 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $at = __webpack_require__(71)(true); // 21.1.3.27 String.prototype[@@iterator]()


__webpack_require__(34)(String, 'String', function (iterated) {
  this._t = String(iterated); // target

  this._i = 0; // next index
  // 21.1.5.2.1 %StringIteratorPrototype%.next()
}, function () {
  var O = this._t;
  var index = this._i;
  var point;
  if (index >= O.length) return {
    value: undefined,
    done: true
  };
  point = $at(O, index);
  this._i += point.length;
  return {
    value: point,
    done: false
  };
});

/***/ }),
/* 87 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var strong = __webpack_require__(88);

var validate = __webpack_require__(59);

var MAP = 'Map'; // 23.1 Map Objects

module.exports = __webpack_require__(89)(MAP, function (get) {
  return function Map() {
    return get(this, arguments.length > 0 ? arguments[0] : undefined);
  };
}, {
  // 23.1.3.6 Map.prototype.get(key)
  get: function get(key) {
    var entry = strong.getEntry(validate(this, MAP), key);
    return entry && entry.v;
  },
  // 23.1.3.9 Map.prototype.set(key, value)
  set: function set(key, value) {
    return strong.def(validate(this, MAP), key === 0 ? 0 : key, value);
  }
}, strong, true);

/***/ }),
/* 88 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var dP = __webpack_require__(6).f;

var create = __webpack_require__(18);

var redefineAll = __webpack_require__(42);

var ctx = __webpack_require__(15);

var anInstance = __webpack_require__(40);

var forOf = __webpack_require__(41);

var $iterDefine = __webpack_require__(34);

var step = __webpack_require__(55);

var setSpecies = __webpack_require__(68);

var DESCRIPTORS = __webpack_require__(4);

var fastKey = __webpack_require__(32).fastKey;

var validate = __webpack_require__(59);

var SIZE = DESCRIPTORS ? '_s' : 'size';

var getEntry = function getEntry(that, key) {
  // fast case
  var index = fastKey(key);
  var entry;
  if (index !== 'F') return that._i[index]; // frozen object case

  for (entry = that._f; entry; entry = entry.n) {
    if (entry.k == key) return entry;
  }
};

module.exports = {
  getConstructor: function getConstructor(wrapper, NAME, IS_MAP, ADDER) {
    var C = wrapper(function (that, iterable) {
      anInstance(that, C, NAME, '_i');
      that._t = NAME; // collection type

      that._i = create(null); // index

      that._f = undefined; // first entry

      that._l = undefined; // last entry

      that[SIZE] = 0; // size

      if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
    });
    redefineAll(C.prototype, {
      // 23.1.3.1 Map.prototype.clear()
      // 23.2.3.2 Set.prototype.clear()
      clear: function clear() {
        for (var that = validate(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
          entry.r = true;
          if (entry.p) entry.p = entry.p.n = undefined;
          delete data[entry.i];
        }

        that._f = that._l = undefined;
        that[SIZE] = 0;
      },
      // 23.1.3.3 Map.prototype.delete(key)
      // 23.2.3.4 Set.prototype.delete(value)
      'delete': function _delete(key) {
        var that = validate(this, NAME);
        var entry = getEntry(that, key);

        if (entry) {
          var next = entry.n;
          var prev = entry.p;
          delete that._i[entry.i];
          entry.r = true;
          if (prev) prev.n = next;
          if (next) next.p = prev;
          if (that._f == entry) that._f = next;
          if (that._l == entry) that._l = prev;
          that[SIZE]--;
        }

        return !!entry;
      },
      // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
      // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
      forEach: function forEach(callbackfn
      /* , that = undefined */
      ) {
        validate(this, NAME);
        var f = ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
        var entry;

        while (entry = entry ? entry.n : this._f) {
          f(entry.v, entry.k, this); // revert to the last existing entry

          while (entry && entry.r) {
            entry = entry.p;
          }
        }
      },
      // 23.1.3.7 Map.prototype.has(key)
      // 23.2.3.7 Set.prototype.has(value)
      has: function has(key) {
        return !!getEntry(validate(this, NAME), key);
      }
    });
    if (DESCRIPTORS) dP(C.prototype, 'size', {
      get: function get() {
        return validate(this, NAME)[SIZE];
      }
    });
    return C;
  },
  def: function def(that, key, value) {
    var entry = getEntry(that, key);
    var prev, index; // change existing entry

    if (entry) {
      entry.v = value; // create new entry
    } else {
      that._l = entry = {
        i: index = fastKey(key, true),
        // <- index
        k: key,
        // <- key
        v: value,
        // <- value
        p: prev = that._l,
        // <- previous entry
        n: undefined,
        // <- next entry
        r: false // <- removed

      };
      if (!that._f) that._f = entry;
      if (prev) prev.n = entry;
      that[SIZE]++; // add to index

      if (index !== 'F') that._i[index] = entry;
    }

    return that;
  },
  getEntry: getEntry,
  setStrong: function setStrong(C, NAME, IS_MAP) {
    // add .keys, .values, .entries, [@@iterator]
    // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
    $iterDefine(C, NAME, function (iterated, kind) {
      this._t = validate(iterated, NAME); // target

      this._k = kind; // kind

      this._l = undefined; // previous
    }, function () {
      var that = this;
      var kind = that._k;
      var entry = that._l; // revert to the last existing entry

      while (entry && entry.r) {
        entry = entry.p;
      } // get next entry


      if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
        // or finish the iteration
        that._t = undefined;
        return step(1);
      } // return step by kind


      if (kind == 'keys') return step(0, entry.k);
      if (kind == 'values') return step(0, entry.v);
      return step(0, [entry.k, entry.v]);
    }, IS_MAP ? 'entries' : 'values', !IS_MAP, true); // add [@@species], 23.1.2.2, 23.2.2.2

    setSpecies(NAME);
  }
};

/***/ }),
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var global = __webpack_require__(1);

var $export = __webpack_require__(2);

var redefine = __webpack_require__(8);

var redefineAll = __webpack_require__(42);

var meta = __webpack_require__(32);

var forOf = __webpack_require__(41);

var anInstance = __webpack_require__(40);

var isObject = __webpack_require__(3);

var fails = __webpack_require__(9);

var $iterDetect = __webpack_require__(69);

var setToStringTag = __webpack_require__(21);

var inheritIfRequired = __webpack_require__(90);

module.exports = function (NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
  var Base = global[NAME];
  var C = Base;
  var ADDER = IS_MAP ? 'set' : 'add';
  var proto = C && C.prototype;
  var O = {};

  var fixMethod = function fixMethod(KEY) {
    var fn = proto[KEY];
    redefine(proto, KEY, KEY == 'delete' ? function (a) {
      return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
    } : KEY == 'has' ? function has(a) {
      return IS_WEAK && !isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
    } : KEY == 'get' ? function get(a) {
      return IS_WEAK && !isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
    } : KEY == 'add' ? function add(a) {
      fn.call(this, a === 0 ? 0 : a);
      return this;
    } : function set(a, b) {
      fn.call(this, a === 0 ? 0 : a, b);
      return this;
    });
  };

  if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !fails(function () {
    new C().entries().next();
  }))) {
    // create collection constructor
    C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
    redefineAll(C.prototype, methods);
    meta.NEED = true;
  } else {
    var instance = new C(); // early implementations not supports chaining

    var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance; // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false

    var THROWS_ON_PRIMITIVES = fails(function () {
      instance.has(1);
    }); // most early implementations doesn't supports iterables, most modern - not close it correctly

    var ACCEPT_ITERABLES = $iterDetect(function (iter) {
      new C(iter);
    }); // eslint-disable-line no-new
    // for early implementations -0 and +0 not the same

    var BUGGY_ZERO = !IS_WEAK && fails(function () {
      // V8 ~ Chromium 42- fails only with 5+ elements
      var $instance = new C();
      var index = 5;

      while (index--) {
        $instance[ADDER](index, index);
      }

      return !$instance.has(-0);
    });

    if (!ACCEPT_ITERABLES) {
      C = wrapper(function (target, iterable) {
        anInstance(target, C, NAME);
        var that = inheritIfRequired(new Base(), target, C);
        if (iterable != undefined) forOf(iterable, IS_MAP, that[ADDER], that);
        return that;
      });
      C.prototype = proto;
      proto.constructor = C;
    }

    if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
      fixMethod('delete');
      fixMethod('has');
      IS_MAP && fixMethod('get');
    }

    if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER); // weak collections should not contains .clear method

    if (IS_WEAK && proto.clear) delete proto.clear;
  }

  setToStringTag(C, NAME);
  O[NAME] = C;
  $export($export.G + $export.W + $export.F * (C != Base), O);
  if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);
  return C;
};

/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3);

var setPrototypeOf = __webpack_require__(57).set;

module.exports = function (that, target, C) {
  var S = target.constructor;
  var P;

  if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && isObject(P) && setPrototypeOf) {
    setPrototypeOf(that, P);
  }

  return that;
};

/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(2); // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])


$export($export.S, 'Object', {
  create: __webpack_require__(18)
});

/***/ }),
/* 92 */,
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

// 0 -> Array#forEach
// 1 -> Array#map
// 2 -> Array#filter
// 3 -> Array#some
// 4 -> Array#every
// 5 -> Array#find
// 6 -> Array#findIndex
var ctx = __webpack_require__(15);

var IObject = __webpack_require__(60);

var toObject = __webpack_require__(31);

var toLength = __webpack_require__(35);

var asc = __webpack_require__(125);

module.exports = function (TYPE, $create) {
  var IS_MAP = TYPE == 1;
  var IS_FILTER = TYPE == 2;
  var IS_SOME = TYPE == 3;
  var IS_EVERY = TYPE == 4;
  var IS_FIND_INDEX = TYPE == 6;
  var NO_HOLES = TYPE == 5 || IS_FIND_INDEX;
  var create = $create || asc;
  return function ($this, callbackfn, that) {
    var O = toObject($this);
    var self = IObject(O);
    var f = ctx(callbackfn, that, 3);
    var length = toLength(self.length);
    var index = 0;
    var result = IS_MAP ? create($this, length) : IS_FILTER ? create($this, 0) : undefined;
    var val, res;

    for (; length > index; index++) {
      if (NO_HOLES || index in self) {
        val = self[index];
        res = f(val, index, O);

        if (TYPE) {
          if (IS_MAP) result[index] = res; // map
          else if (res) switch (TYPE) {
              case 3:
                return true;
              // some

              case 5:
                return val;
              // find

              case 6:
                return index;
              // findIndex

              case 2:
                result.push(val);
              // filter
            } else if (IS_EVERY) return false; // every
        }
      }
    }

    return IS_FIND_INDEX ? -1 : IS_SOME || IS_EVERY ? IS_EVERY : result;
  };
};

/***/ }),
/* 94 */,
/* 95 */,
/* 96 */
/***/ (function(module, exports, __webpack_require__) {

var ctx = __webpack_require__(15);

var invoke = __webpack_require__(66);

var html = __webpack_require__(67);

var cel = __webpack_require__(39);

var global = __webpack_require__(1);

var process = global.process;
var setTask = global.setImmediate;
var clearTask = global.clearImmediate;
var MessageChannel = global.MessageChannel;
var Dispatch = global.Dispatch;
var counter = 0;
var queue = {};
var ONREADYSTATECHANGE = 'onreadystatechange';
var defer, channel, port;

var run = function run() {
  var id = +this; // eslint-disable-next-line no-prototype-builtins

  if (queue.hasOwnProperty(id)) {
    var fn = queue[id];
    delete queue[id];
    fn();
  }
};

var listener = function listener(event) {
  run.call(event.data);
}; // Node.js 0.9+ & IE10+ has setImmediate, otherwise:


if (!setTask || !clearTask) {
  setTask = function setImmediate(fn) {
    var args = [];
    var i = 1;

    while (arguments.length > i) {
      args.push(arguments[i++]);
    }

    queue[++counter] = function () {
      // eslint-disable-next-line no-new-func
      invoke(typeof fn == 'function' ? fn : Function(fn), args);
    };

    defer(counter);
    return counter;
  };

  clearTask = function clearImmediate(id) {
    delete queue[id];
  }; // Node.js 0.8-


  if (__webpack_require__(24)(process) == 'process') {
    defer = function defer(id) {
      process.nextTick(ctx(run, id, 1));
    }; // Sphere (JS game engine) Dispatch API

  } else if (Dispatch && Dispatch.now) {
    defer = function defer(id) {
      Dispatch.now(ctx(run, id, 1));
    }; // Browsers with MessageChannel, includes WebWorkers

  } else if (MessageChannel) {
    channel = new MessageChannel();
    port = channel.port2;
    channel.port1.onmessage = listener;
    defer = ctx(port.postMessage, port, 1); // Browsers with postMessage, skip WebWorkers
    // IE8 has postMessage, but it's sync & typeof its postMessage is 'object'
  } else if (global.addEventListener && typeof postMessage == 'function' && !global.importScripts) {
    defer = function defer(id) {
      global.postMessage(id + '', '*');
    };

    global.addEventListener('message', listener, false); // IE8-
  } else if (ONREADYSTATECHANGE in cel('script')) {
    defer = function defer(id) {
      html.appendChild(cel('script'))[ONREADYSTATECHANGE] = function () {
        html.removeChild(this);
        run.call(id);
      };
    }; // Rest old browsers

  } else {
    defer = function defer(id) {
      setTimeout(ctx(run, id, 1), 0);
    };
  }
}

module.exports = {
  set: setTask,
  clear: clearTask
};

/***/ }),
/* 97 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 25.4.1.5 NewPromiseCapability(C)

var aFunction = __webpack_require__(23);

function PromiseCapability(C) {
  var resolve, reject;
  this.promise = new C(function ($$resolve, $$reject) {
    if (resolve !== undefined || reject !== undefined) throw TypeError('Bad Promise constructor');
    resolve = $$resolve;
    reject = $$reject;
  });
  this.resolve = aFunction(resolve);
  this.reject = aFunction(reject);
}

module.exports.f = function (C) {
  return new PromiseCapability(C);
};

/***/ }),
/* 98 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var asap = __webpack_require__(114);

function noop() {} // States:
//
// 0 - pending
// 1 - fulfilled with _value
// 2 - rejected with _value
// 3 - adopted the state of another promise, _value
//
// once the state is no longer pending (0) it is immutable
// All `_` prefixed properties will be reduced to `_{random number}`
// at build time to obfuscate them and discourage their use.
// We don't use symbols or Object.defineProperty to fully hide them
// because the performance isn't good enough.
// to avoid using try/catch inside critical functions, we
// extract them to here.


var LAST_ERROR = null;
var IS_ERROR = {};

function getThen(obj) {
  try {
    return obj.then;
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}

function tryCallOne(fn, a) {
  try {
    return fn(a);
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}

function tryCallTwo(fn, a, b) {
  try {
    fn(a, b);
  } catch (ex) {
    LAST_ERROR = ex;
    return IS_ERROR;
  }
}

module.exports = Promise;

function Promise(fn) {
  if (_typeof(this) !== 'object') {
    throw new TypeError('Promises must be constructed via new');
  }

  if (typeof fn !== 'function') {
    throw new TypeError('Promise constructor\'s argument is not a function');
  }

  this._h = 0;
  this._i = 0;
  this._j = null;
  this._k = null;
  if (fn === noop) return;
  doResolve(fn, this);
}

Promise._l = null;
Promise._m = null;
Promise._n = noop;

Promise.prototype.then = function (onFulfilled, onRejected) {
  if (this.constructor !== Promise) {
    return safeThen(this, onFulfilled, onRejected);
  }

  var res = new Promise(noop);
  handle(this, new Handler(onFulfilled, onRejected, res));
  return res;
};

function safeThen(self, onFulfilled, onRejected) {
  return new self.constructor(function (resolve, reject) {
    var res = new Promise(noop);
    res.then(resolve, reject);
    handle(self, new Handler(onFulfilled, onRejected, res));
  });
}

function handle(self, deferred) {
  while (self._i === 3) {
    self = self._j;
  }

  if (Promise._l) {
    Promise._l(self);
  }

  if (self._i === 0) {
    if (self._h === 0) {
      self._h = 1;
      self._k = deferred;
      return;
    }

    if (self._h === 1) {
      self._h = 2;
      self._k = [self._k, deferred];
      return;
    }

    self._k.push(deferred);

    return;
  }

  handleResolved(self, deferred);
}

function handleResolved(self, deferred) {
  asap(function () {
    var cb = self._i === 1 ? deferred.onFulfilled : deferred.onRejected;

    if (cb === null) {
      if (self._i === 1) {
        resolve(deferred.promise, self._j);
      } else {
        reject(deferred.promise, self._j);
      }

      return;
    }

    var ret = tryCallOne(cb, self._j);

    if (ret === IS_ERROR) {
      reject(deferred.promise, LAST_ERROR);
    } else {
      resolve(deferred.promise, ret);
    }
  });
}

function resolve(self, newValue) {
  // Promise Resolution Procedure: https://github.com/promises-aplus/promises-spec#the-promise-resolution-procedure
  if (newValue === self) {
    return reject(self, new TypeError('A promise cannot be resolved with itself.'));
  }

  if (newValue && (_typeof(newValue) === 'object' || typeof newValue === 'function')) {
    var then = getThen(newValue);

    if (then === IS_ERROR) {
      return reject(self, LAST_ERROR);
    }

    if (then === self.then && newValue instanceof Promise) {
      self._i = 3;
      self._j = newValue;
      finale(self);
      return;
    } else if (typeof then === 'function') {
      doResolve(then.bind(newValue), self);
      return;
    }
  }

  self._i = 1;
  self._j = newValue;
  finale(self);
}

function reject(self, newValue) {
  self._i = 2;
  self._j = newValue;

  if (Promise._m) {
    Promise._m(self, newValue);
  }

  finale(self);
}

function finale(self) {
  if (self._h === 1) {
    handle(self, self._k);
    self._k = null;
  }

  if (self._h === 2) {
    for (var i = 0; i < self._k.length; i++) {
      handle(self, self._k[i]);
    }

    self._k = null;
  }
}

function Handler(onFulfilled, onRejected, promise) {
  this.onFulfilled = typeof onFulfilled === 'function' ? onFulfilled : null;
  this.onRejected = typeof onRejected === 'function' ? onRejected : null;
  this.promise = promise;
}
/**
 * Take a potentially misbehaving resolver function and make sure
 * onFulfilled and onRejected are only called once.
 *
 * Makes no guarantees about asynchrony.
 */


function doResolve(fn, promise) {
  var done = false;
  var res = tryCallTwo(fn, function (value) {
    if (done) return;
    done = true;
    resolve(promise, value);
  }, function (reason) {
    if (done) return;
    done = true;
    reject(promise, reason);
  });

  if (!done && res === IS_ERROR) {
    done = true;
    reject(promise, LAST_ERROR);
  }
}

/***/ }),
/* 99 */
/***/ (function(module, exports, __webpack_require__) {

// 22.1.2.2 / 15.4.3.2 Array.isArray(arg)
var $export = __webpack_require__(2);

$export($export.S, 'Array', {
  isArray: __webpack_require__(61)
});

/***/ }),
/* 100 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpFlags = __webpack_require__(44);

var nativeExec = RegExp.prototype.exec; // This always refers to the native implementation, because the
// String#replace polyfill uses ./fix-regexp-well-known-symbol-logic.js,
// which loads this file before patching the method.

var nativeReplace = String.prototype.replace;
var patchedExec = nativeExec;
var LAST_INDEX = 'lastIndex';

var UPDATES_LAST_INDEX_WRONG = function () {
  var re1 = /a/,
      re2 = /b*/g;
  nativeExec.call(re1, 'a');
  nativeExec.call(re2, 'a');
  return re1[LAST_INDEX] !== 0 || re2[LAST_INDEX] !== 0;
}(); // nonparticipating capturing group, copied from es5-shim's String#split patch.


var NPCG_INCLUDED = /()??/.exec('')[1] !== undefined;
var PATCH = UPDATES_LAST_INDEX_WRONG || NPCG_INCLUDED;

if (PATCH) {
  patchedExec = function exec(str) {
    var re = this;
    var lastIndex, reCopy, match, i;

    if (NPCG_INCLUDED) {
      reCopy = new RegExp('^' + re.source + '$(?!\\s)', regexpFlags.call(re));
    }

    if (UPDATES_LAST_INDEX_WRONG) lastIndex = re[LAST_INDEX];
    match = nativeExec.call(re, str);

    if (UPDATES_LAST_INDEX_WRONG && match) {
      re[LAST_INDEX] = re.global ? match.index + match[0].length : lastIndex;
    }

    if (NPCG_INCLUDED && match && match.length > 1) {
      // Fix browsers whose `exec` methods don't consistently return `undefined`
      // for NPCG, like IE8. NOTE: This doesn' work for /(.?)?/
      // eslint-disable-next-line no-loop-func
      nativeReplace.call(match[0], reCopy, function () {
        for (i = 1; i < arguments.length - 2; i++) {
          if (arguments[i] === undefined) match[i] = undefined;
        }
      });
    }

    return match;
  };
}

module.exports = patchedExec;

/***/ }),
/* 101 */,
/* 102 */
/***/ (function(module, exports) {

!function(r){"use strict";function n(r,n,t){return t.a=r,t.f=n,t}function t(r){return n(2,r,function(n){return function(t){return r(n,t)}})}function e(r){return n(3,r,function(n){return function(t){return function(e){return r(n,t,e)}}})}function u(r){return n(4,r,function(n){return function(t){return function(e){return function(u){return r(n,t,e,u)}}}})}function a(r){return n(5,r,function(n){return function(t){return function(e){return function(u){return function(a){return r(n,t,e,u,a)}}}}})}function c(r){return n(6,r,function(n){return function(t){return function(e){return function(u){return function(a){return function(c){return r(n,t,e,u,a,c)}}}}}})}function i(r){return n(7,r,function(n){return function(t){return function(e){return function(u){return function(a){return function(c){return function(i){return r(n,t,e,u,a,c,i)}}}}}}})}function o(r){return n(8,r,function(n){return function(t){return function(e){return function(u){return function(a){return function(c){return function(i){return function(o){return r(n,t,e,u,a,c,i,o)}}}}}}}})}function f(r){return n(9,r,function(n){return function(t){return function(e){return function(u){return function(a){return function(c){return function(i){return function(o){return function(f){return r(n,t,e,u,a,c,i,o,f)}}}}}}}}})}function s(r,n,t){return 2===r.a?r.f(n,t):r(n)(t)}function l(r,n,t,e){return 3===r.a?r.f(n,t,e):r(n)(t)(e)}function b(r,n,t,e,u){return 4===r.a?r.f(n,t,e,u):r(n)(t)(e)(u)}function d(r,n,t,e,u,a){return 5===r.a?r.f(n,t,e,u,a):r(n)(t)(e)(u)(a)}function v(r,n,t,e,u,a,c){return 6===r.a?r.f(n,t,e,u,a,c):r(n)(t)(e)(u)(a)(c)}function p(r,n,t,e,u,a,c,i){return 7===r.a?r.f(n,t,e,u,a,c,i):r(n)(t)(e)(u)(a)(c)(i)}function h(r,n,t,e,u,a,c,i,o){return 8===r.a?r.f(n,t,e,u,a,c,i,o):r(n)(t)(e)(u)(a)(c)(i)(o)}function g(r,n,t,e,u,a,c,i,o,f){return 9===r.a?r.f(n,t,e,u,a,c,i,o,f):r(n)(t)(e)(u)(a)(c)(i)(o)(f)}var m=e(function(r,n,t){for(var e=Array(r),u=0;r>u;u++)e[u]=t(n+u);return e}),$=t(function(r,n){for(var t=Array(r),e=0;r>e&&n.b;e++)t[e]=n.a,n=n.b;return t.length=e,H(t,n)}),w=t(function(r,n){return n[r]}),x=e(function(r,n,t){for(var e=t.length,u=Array(e),a=0;e>a;a++)u[a]=t[a];return u[r]=n,u}),k=t(function(r,n){for(var t=n.length,e=Array(t+1),u=0;t>u;u++)e[u]=n[u];return e[t]=r,e}),y=e(function(r,n,t){for(var e=t.length,u=0;e>u;u++)n=s(r,t[u],n);return n}),q=e(function(r,n,t){for(var e=t.length-1;e>=0;e--)n=s(r,t[e],n);return n}),A=t(function(r,n){for(var t=n.length,e=Array(t),u=0;t>u;u++)e[u]=r(n[u]);return e}),S=e(function(r,n,t){for(var e=t.length,u=Array(e),a=0;e>a;a++)u[a]=s(r,n+a,t[a]);return u}),j=e(function(r,n,t){return t.slice(r,n)}),L=e(function(r,n,t){var e=n.length,u=r-e;u>t.length&&(u=t.length);for(var a=Array(e+u),c=0;e>c;c++)a[c]=n[c];for(c=0;u>c;c++)a[c+e]=t[c];return a});function _(r){throw Error("https://github.com/elm/core/blob/1.0.0/hints/"+r+".md")}function R(r,n){for(var t,e=[],u=T(r,n,0,e);u&&(t=e.pop());u=T(t.a,t.b,0,e));return u}function T(r,n,t,e){if(t>100)return e.push(H(r,n)),!0;if(r===n)return!0;if("object"!=typeof r||null===r||null===n)return"function"==typeof r&&_(5),!1;for(var u in 0>r.$&&(r=Vt(r),n=Vt(n)),r)if(!T(r[u],n[u],t+1,e))return!1;return!0}var E=t(R),D=t(function(r,n){return!R(r,n)});function C(r,n,t){if("object"!=typeof r)return r===n?0:n>r?-1:1;if(void 0===r.$)return(t=C(r.a,n.a))?t:(t=C(r.b,n.b))?t:C(r.c,n.c);for(;r.b&&n.b&&!(t=C(r.a,n.a));r=r.b,n=n.b);return t||(r.b?1:n.b?-1:0)}var N=t(function(r,n){return 1>C(r,n)}),V=t(function(r,n){var t=C(r,n);return 0>t?Bt:t?Ht:zt}),z=0;function H(r,n){return{a:r,b:n}}function B(r,n,t){return{a:r,b:n,c:t}}function U(r){return r}function P(r,n){var t={};for(var e in r)t[e]=r[e];for(var e in n)t[e]=n[e];return t}var G=t(I);function I(r,n){if("string"==typeof r)return r+n;if(!r.b)return n;var t=O(r.a,n);r=r.b;for(var e=t;r.b;r=r.b)e=e.b=O(r.a,n);return t}var J={$:0};function O(r,n){return{$:1,a:r,b:n}}var M=t(O);function F(r){for(var n=J,t=r.length;t--;)n=O(r[t],n);return n}function Q(r){for(var n=[];r.b;r=r.b)n.push(r.a);return n}var X=e(function(r,n,t){for(var e=[];n.b&&t.b;n=n.b,t=t.b)e.push(s(r,n.a,t.a));return F(e)}),Z=u(function(r,n,t,e){for(var u=[];n.b&&t.b&&e.b;n=n.b,t=t.b,e=e.b)u.push(l(r,n.a,t.a,e.a));return F(u)}),K=t(function(r,n){return F(Q(n).sort(function(n,t){return C(r(n),r(t))}))}),Y=t(function(r,n){return r+n}),W=t(Math.pow),rr=t(function(r,n){var t=n%r;return 0===r?_(11):t>0&&0>r||0>t&&r>0?t+r:t}),nr=Math.tan,tr=Math.ceil,er=Math.floor,ur=Math.round,ar=Math.sqrt,cr=Math.log,ir=isNaN,or=t(function(r,n){return r+n}),fr=e(function(r,n,t){for(var e=t.length,u=0;e>u;){var a=t[u],c=t.charCodeAt(u);u++,55296>c||c>56319||(a+=t[u],u++),n=s(r,U(a),n)}return n}),sr=e(function(r,n,t){for(var e=t.length;e--;){var u=t[e],a=t.charCodeAt(e);56320>a||a>57343||(u=t[--e]+u),n=s(r,U(u),n)}return n}),lr=t(function(r,n){return n.split(r)}),br=t(function(r,n){return n.join(r)}),dr=e(function(r,n,t){return t.slice(r,n)}),vr=t(function(r,n){for(var t=n.length;t--;){var e=n[t],u=n.charCodeAt(t);if(56320>u||u>57343||(e=n[--t]+e),!r(U(e)))return!1}return!0}),pr=t(function(r,n){return n.indexOf(r)>-1}),hr=t(function(r,n){return 0===n.indexOf(r)}),gr=t(function(r,n){return n.length>=r.length&&n.lastIndexOf(r)===n.length-r.length}),mr=t(function(r,n){var t=r.length;if(1>t)return J;for(var e=0,u=[];(e=n.indexOf(r,e))>-1;)u.push(e),e+=t;return F(u)});function $r(r){return r+""}function wr(r){return{$:2,b:r}}var xr=wr(function(r){return"number"!=typeof r?Br("an INT",r):r>-2147483647&&2147483647>r&&(0|r)===r?Jt(r):!isFinite(r)||r%1?Br("an INT",r):Jt(r)}),kr=wr(function(r){return"boolean"==typeof r?Jt(r):Br("a BOOL",r)}),yr=(wr(function(r){return"number"==typeof r?Jt(r):Br("a FLOAT",r)}),wr(function(r){return Jt(Ir(r))})),qr=wr(function(r){return"string"==typeof r?Jt(r):r instanceof String?Jt(r+""):Br("a STRING",r)}),Ar=t(function(r,n){return{$:6,d:r,b:n}});function Sr(r,n){return{$:9,f:r,g:n}}var jr=t(function(r,n){return{$:10,b:n,h:r}}),Lr=t(function(r,n){return Sr(r,[n])}),_r=e(function(r,n,t){return Sr(r,[n,t])}),Rr=u(function(r,n,t,e){return Sr(r,[n,t,e])}),Tr=c(function(r,n,t,e,u,a){return Sr(r,[n,t,e,u,a])}),Er=i(function(r,n,t,e,u,a,c){return Sr(r,[n,t,e,u,a,c])}),Dr=f(function(r,n,t,e,u,a,c,i,o){return Sr(r,[n,t,e,u,a,c,i,o])}),Cr=t(function(r,n){return Nr(r,Jr(n))});function Nr(r,n){switch(r.$){case 2:return r.b(n);case 5:return null===n?Jt(r.c):Br("null",n);case 3:return zr(n)?Vr(r.b,n,F):Br("a LIST",n);case 4:return zr(n)?Vr(r.b,n,Hr):Br("an ARRAY",n);case 6:var t=r.d;if("object"!=typeof n||null===n||!(t in n))return Br("an OBJECT with a field named `"+t+"`",n);var e=Nr(r.b,n[t]);return Be(e)?e:Ut(s(Gt,t,e.a));case 7:var u=r.e;return zr(n)?n.length>u?(e=Nr(r.b,n[u]),Be(e)?e:Ut(s(It,u,e.a))):Br("a LONGER array. Need index "+u+" but only see "+n.length+" entries",n):Br("an ARRAY",n);case 8:if("object"!=typeof n||null===n||zr(n))return Br("an OBJECT",n);var a=J;for(var c in n)if(n.hasOwnProperty(c)){if(e=Nr(r.b,n[c]),!Be(e))return Ut(s(Gt,c,e.a));a=O(H(c,e.a),a)}return Jt(be(a));case 9:for(var i=r.f,o=r.g,f=0;o.length>f;f++){if(e=Nr(o[f],n),!Be(e))return e;i=i(e.a)}return Jt(i);case 10:return e=Nr(r.b,n),Be(e)?Nr(r.h(e.a),n):e;case 11:for(var l=J,b=r.g;b.b;b=b.b){if(e=Nr(b.a,n),Be(e))return e;l=O(e.a,l)}return Ut(Ot(be(l)));case 1:return Ut(s(Pt,r.a,Ir(n)));case 0:return Jt(r.a)}}function Vr(r,n,t){for(var e=n.length,u=Array(e),a=0;e>a;a++){var c=Nr(r,n[a]);if(!Be(c))return Ut(s(It,a,c.a));u[a]=c.a}return Jt(t(u))}function zr(r){return Array.isArray(r)||"undefined"!=typeof FileList&&r instanceof FileList}function Hr(r){return s(He,r.length,function(n){return r[n]})}function Br(r,n){return Ut(s(Pt,"Expecting "+r,Ir(n)))}function Ur(r,n){if(r===n)return!0;if(r.$!==n.$)return!1;switch(r.$){case 0:case 1:return r.a===n.a;case 2:return r.b===n.b;case 5:return r.c===n.c;case 3:case 4:case 8:return Ur(r.b,n.b);case 6:return r.d===n.d&&Ur(r.b,n.b);case 7:return r.e===n.e&&Ur(r.b,n.b);case 9:return r.f===n.f&&Pr(r.g,n.g);case 10:return r.h===n.h&&Ur(r.b,n.b);case 11:return Pr(r.g,n.g)}}function Pr(r,n){var t=r.length;if(t!==n.length)return!1;for(var e=0;t>e;e++)if(!Ur(r[e],n[e]))return!1;return!0}var Gr=t(function(r,n){return JSON.stringify(Jr(n),null,r)+""});function Ir(r){return r}function Jr(r){return r}var Or=e(function(r,n,t){return t[r]=Jr(n),t});function Mr(r){return t(function(n,t){return t.push(Jr(r(n))),t})}var Fr=Ir(null);function Qr(r){return{$:0,a:r}}function Xr(r){return{$:2,b:r,c:null}}var Zr=t(function(r,n){return{$:3,b:r,d:n}}),Kr=0;function Yr(r){var n={$:0,e:Kr++,f:r,g:null,h:[]};return un(n),n}function Wr(r){return Xr(function(n){n(Qr(Yr(r)))})}function rn(r,n){r.h.push(n),un(r)}var nn=t(function(r,n){return Xr(function(t){rn(r,n),t(Qr(z))})}),tn=!1,en=[];function un(r){if(en.push(r),!tn){for(tn=!0;r=en.shift();)an(r);tn=!1}}function an(r){for(;r.f;){var n=r.f.$;if(0===n||1===n){for(;r.g&&r.g.$!==n;)r.g=r.g.i;if(!r.g)return;r.f=r.g.b(r.f.a),r.g=r.g.i}else{if(2===n)return void(r.f.c=r.f.b(function(n){r.f=n,un(r)}));if(5===n){if(0===r.h.length)return;r.f=r.f.b(r.h.shift())}else r.g={$:3===n?0:1,b:r.f.b,i:r.g},r.f=r.f.d}}}function cn(r){return Xr(function(n){var t=setTimeout(function(){n(Qr(z))},r);return function(){clearTimeout(t)}})}var on={};function fn(r,n,t,e,u){return{b:r,c:n,d:t,e:e,f:u}}function sn(r,n){var t={g:n,h:void 0},e=r.c,u=r.d,a=r.e,c=r.f;function i(r){return s(Zr,i,{$:5,b:function(n){var i=n.a;return 0===n.$?l(u,t,i,r):a&&c?b(e,t,i.i,i.j,r):l(e,t,a?i.i:i.j,r)}})}return t.h=Yr(s(Zr,i,r.b))}var ln=t(function(r,n){return Xr(function(t){r.g(n),t(Qr(z))})}),bn=t(function(r,n){return s(nn,r.h,{$:0,a:n})});function dn(r){return function(n){return{$:1,k:r,l:n}}}function vn(r){return{$:2,m:r}}var pn=t(function(r,n){return{$:3,n:r,o:n}});function hn(r,n,t){var e={};for(var u in gn(!0,n,e,null),gn(!1,t,e,null),r)rn(r[u],{$:"fx",a:e[u]||{i:J,j:J}})}function gn(r,n,t,e){switch(n.$){case 1:var u=n.k,a=function(r,t,e){function u(r){for(var n=e;n;n=n.q)r=n.p(r);return r}return s(r?on[t].e:on[t].f,u,n.l)}(r,u,e);return void(t[u]=function(r,n,t){return t=t||{i:J,j:J},r?t.i=O(n,t.i):t.j=O(n,t.j),t}(r,a,t[u]));case 2:for(var c=n.m;c.b;c=c.b)gn(r,c.a,t,e);return;case 3:return void gn(r,n.o,t,{p:n.n,q:e})}}function mn(r){on[r]&&_(3)}var $n=t(function(r,n){return n});function wn(r,n){return mn(r),on[r]={f:kn,r:n,a:yn},dn(r)}var xn,kn=t(function(r,n){return function(t){return r(n(t))}});function yn(r,n){var t=J,u=on[r].r,a=Qr(null);return on[r].b=a,on[r].c=e(function(r,n){return t=n,a}),{send:function(r){var e=s(Cr,u,Ir(r));Be(e)||_(4);for(var a=e.a,c=t;c.b;c=c.b)n(c.a(a))}}}var qn="undefined"!=typeof document?document:{};function An(r,n){r.appendChild(n)}function Sn(r){return{$:0,a:r}}var jn=t(function(r,n){return t(function(t,e){for(var u=[],a=0;e.b;e=e.b){var c=e.a;a+=c.b||0,u.push(c)}return a+=u.length,{$:1,c:n,d:Un(t),e:u,f:r,b:a}})}),Ln=jn(void 0);t(function(r,n){return t(function(t,e){for(var u=[],a=0;e.b;e=e.b){var c=e.a;a+=c.b.b||0,u.push(c)}return a+=u.length,{$:2,c:n,d:Un(t),e:u,f:r,b:a}})})(void 0);var _n=t(function(r,n){return{$:4,j:r,k:n,b:1+(n.b||0)}});function Rn(r,n){return{$:5,l:r,m:n,k:void 0}}var Tn,En=e(function(r,n,t){return Rn([r,n,t],function(){return s(r,n,t)})}),Dn=u(function(r,n,t,e){return Rn([r,n,t,e],function(){return l(r,n,t,e)})}),Cn=t(function(r,n){return{$:"a0",n:r,o:n}}),Nn=t(function(r,n){return{$:"a1",n:r,o:n}}),Vn=t(function(r,n){return{$:"a2",n:r,o:n}}),zn=t(function(r,n){return{$:"a3",n:r,o:n}});function Hn(r){return"script"==r?"p":r}function Bn(r){return/^\s*(javascript:|data:text\/html)/i.test(r)?"":r}function Un(r){for(var n={};r.b;r=r.b){var t=r.a,e=t.$,u=t.n,a=t.o;if("a2"!==e){var c=n[e]||(n[e]={});"a3"===e&&"class"===u?Pn(c,u,a):c[u]=a}else"className"===u?Pn(n,u,Jr(a)):n[u]=Jr(a)}return n}function Pn(r,n,t){var e=r[n];r[n]=e?e+" "+t:t}function Gn(r,n){var t=r.$;if(5===t)return Gn(r.k||(r.k=r.m()),n);if(0===t)return qn.createTextNode(r.a);if(4===t){for(var e=r.k,u=r.j;4===e.$;)"object"!=typeof u?u=[u,e.j]:u.push(e.j),e=e.k;var a={j:u,p:n};return(c=Gn(e,a)).elm_event_node_ref=a,c}if(3===t)return In(c=r.h(r.g),n,r.d),c;var c=r.f?qn.createElementNS(r.f,r.c):qn.createElement(r.c);xn&&"a"==r.c&&c.addEventListener("click",xn(c)),In(c,n,r.d);for(var i=r.e,o=0;i.length>o;o++)An(c,Gn(1===t?i[o]:i[o].b,n));return c}function In(r,n,t){for(var e in t){var u=t[e];"a1"===e?Jn(r,u):"a0"===e?Fn(r,n,u):"a3"===e?On(r,u):"a4"===e?Mn(r,u):("value"!==e&&"checked"!==e||r[e]!==u)&&(r[e]=u)}}function Jn(r,n){var t=r.style;for(var e in n)t[e]=n[e]}function On(r,n){for(var t in n){var e=n[t];void 0!==e?r.setAttribute(t,e):r.removeAttribute(t)}}function Mn(r,n){for(var t in n){var e=n[t],u=e.f,a=e.o;void 0!==a?r.setAttributeNS(u,t,a):r.removeAttributeNS(u,t)}}function Fn(r,n,t){var e=r.elmFs||(r.elmFs={});for(var u in t){var a=t[u],c=e[u];if(a){if(c){if(c.q.$===a.$){c.q=a;continue}r.removeEventListener(u,c)}c=Qn(n,a),r.addEventListener(u,c,Tn&&{passive:2>Je(a)}),e[u]=c}else r.removeEventListener(u,c),e[u]=void 0}}try{window.addEventListener("t",null,Object.defineProperty({},"passive",{get:function(){Tn=!0}}))}catch(r){}function Qn(r,n){function t(n){var e=t.q,u=Nr(e.a,n);if(Be(u)){for(var a,c=Je(e),i=u.a,o=c?3>c?i.a:i.eu:i,f=1==c?i.b:3==c&&i.bs,s=(f&&n.stopPropagation(),(2==c?i.b:3==c&&i.bd)&&n.preventDefault(),r);a=s.j;){if("function"==typeof a)o=a(o);else for(var l=a.length;l--;)o=a[l](o);s=s.p}s(o,f)}}return t.q=n,t}function Xn(r,n){return r.$==n.$&&Ur(r.a,n.a)}function Zn(r,n,t,e){var u={$:n,r:t,s:e,t:void 0,u:void 0};return r.push(u),u}function Kn(r,n,t,e){if(r!==n){var u=r.$,a=n.$;if(u!==a){if(1!==u||2!==a)return void Zn(t,0,e,n);n=function(r){for(var n=r.e,t=n.length,e=Array(t),u=0;t>u;u++)e[u]=n[u].b;return{$:1,c:r.c,d:r.d,e:e,f:r.f,b:r.b}}(n),a=1}switch(a){case 5:for(var c=r.l,i=n.l,o=c.length,f=o===i.length;f&&o--;)f=c[o]===i[o];if(f)return void(n.k=r.k);n.k=n.m();var s=[];return Kn(r.k,n.k,s,0),void(s.length>0&&Zn(t,1,e,s));case 4:for(var l=r.j,b=n.j,d=!1,v=r.k;4===v.$;)d=!0,"object"!=typeof l?l=[l,v.j]:l.push(v.j),v=v.k;for(var p=n.k;4===p.$;)d=!0,"object"!=typeof b?b=[b,p.j]:b.push(p.j),p=p.k;return d&&l.length!==b.length?void Zn(t,0,e,n):((d?function(r,n){for(var t=0;r.length>t;t++)if(r[t]!==n[t])return!1;return!0}(l,b):l===b)||Zn(t,2,e,b),void Kn(v,p,t,e+1));case 0:return void(r.a!==n.a&&Zn(t,3,e,n.a));case 1:return void Yn(r,n,t,e,rt);case 2:return void Yn(r,n,t,e,nt);case 3:if(r.h!==n.h)return void Zn(t,0,e,n);var h=Wn(r.d,n.d);h&&Zn(t,4,e,h);var g=n.i(r.g,n.g);return void(g&&Zn(t,5,e,g))}}}function Yn(r,n,t,e,u){if(r.c===n.c&&r.f===n.f){var a=Wn(r.d,n.d);a&&Zn(t,4,e,a),u(r,n,t,e)}else Zn(t,0,e,n)}function Wn(r,n,t){var e;for(var u in r)if("a1"!==u&&"a0"!==u&&"a3"!==u&&"a4"!==u)if(u in n){var a=r[u],c=n[u];a===c&&"value"!==u&&"checked"!==u||"a0"===t&&Xn(a,c)||((e=e||{})[u]=c)}else(e=e||{})[u]=t?"a1"===t?"":"a0"===t||"a3"===t?void 0:{f:r[u].f,o:void 0}:"string"==typeof r[u]?"":null;else{var i=Wn(r[u],n[u]||{},u);i&&((e=e||{})[u]=i)}for(var o in n)o in r||((e=e||{})[o]=n[o]);return e}function rt(r,n,t,e){var u=r.e,a=n.e,c=u.length,i=a.length;c>i?Zn(t,6,e,{v:i,i:c-i}):i>c&&Zn(t,7,e,{v:c,e:a});for(var o=i>c?c:i,f=0;o>f;f++){var s=u[f];Kn(s,a[f],t,++e),e+=s.b||0}}function nt(r,n,t,e){for(var u=[],a={},c=[],i=r.e,o=n.e,f=i.length,s=o.length,l=0,b=0,d=e;f>l&&s>b;){var v=(S=i[l]).a,p=(j=o[b]).a,h=S.b,g=j.b,m=void 0,$=void 0;if(v!==p){var w=i[l+1],x=o[b+1];if(w){var k=w.a,y=w.b;$=p===k}if(x){var q=x.a,A=x.b;m=v===q}if(m&&$)Kn(h,A,u,++d),et(a,u,v,g,b,c),d+=h.b||0,ut(a,u,v,y,++d),d+=y.b||0,l+=2,b+=2;else if(m)d++,et(a,u,p,g,b,c),Kn(h,A,u,d),d+=h.b||0,l+=1,b+=2;else if($)ut(a,u,v,h,++d),d+=h.b||0,Kn(y,g,u,++d),d+=y.b||0,l+=2,b+=1;else{if(!w||k!==q)break;ut(a,u,v,h,++d),et(a,u,p,g,b,c),d+=h.b||0,Kn(y,A,u,++d),d+=y.b||0,l+=2,b+=2}}else Kn(h,g,u,++d),d+=h.b||0,l++,b++}for(;f>l;){var S;ut(a,u,(S=i[l]).a,h=S.b,++d),d+=h.b||0,l++}for(;s>b;){var j,L=L||[];et(a,u,(j=o[b]).a,j.b,void 0,L),b++}(u.length>0||c.length>0||L)&&Zn(t,8,e,{w:u,x:c,y:L})}var tt="_elmW6BL";function et(r,n,t,e,u,a){var c=r[t];if(!c)return a.push({r:u,A:c={c:0,z:e,r:u,s:void 0}}),void(r[t]=c);if(1===c.c){a.push({r:u,A:c}),c.c=2;var i=[];return Kn(c.z,e,i,c.r),c.r=u,void(c.s.s={w:i,A:c})}et(r,n,t+tt,e,u,a)}function ut(r,n,t,e,u){var a=r[t];if(a){if(0===a.c){a.c=2;var c=[];return Kn(e,a.z,c,u),void Zn(n,9,u,{w:c,A:a})}ut(r,n,t+tt,e,u)}else{var i=Zn(n,9,u,void 0);r[t]={c:1,z:e,r:u,s:i}}}function at(r,n,t,e){return 0===t.length?r:(function r(n,t,e,u){!function n(t,e,u,a,c,i,o){for(var f=u[a],s=f.r;s===c;){var l=f.$;if(1===l)r(t,e.k,f.s,o);else if(8===l)f.t=t,f.u=o,(b=f.s.w).length>0&&n(t,e,b,0,c,i,o);else if(9===l){f.t=t,f.u=o;var b,d=f.s;d&&(d.A.s=t,(b=d.w).length>0&&n(t,e,b,0,c,i,o))}else f.t=t,f.u=o;if(!(f=u[++a])||(s=f.r)>i)return a}var v=e.$;if(4===v){for(var p=e.k;4===p.$;)p=p.k;return n(t,p,u,a,c+1,i,t.elm_event_node_ref)}for(var h=e.e,g=t.childNodes,m=0;h.length>m;m++){var $=1===v?h[m]:h[m].b,w=++c+($.b||0);if(!(c>s||s>w||(f=u[a=n(g[m],$,u,a,c,w,o)])&&(s=f.r)<=i))return a;c=w}return a}(n,t,e,0,0,t.b,u)}(r,n,t,e),ct(r,t))}function ct(r,n){for(var t=0;n.length>t;t++){var e=n[t],u=e.t,a=it(u,e);u===r&&(r=a)}return r}function it(r,n){switch(n.$){case 0:return function(r){var t=r.parentNode,e=Gn(n.s,n.u);return e.elm_event_node_ref||(e.elm_event_node_ref=r.elm_event_node_ref),t&&e!==r&&t.replaceChild(e,r),e}(r);case 4:return In(r,n.u,n.s),r;case 3:return r.replaceData(0,r.length,n.s),r;case 1:return ct(r,n.s);case 2:return r.elm_event_node_ref?r.elm_event_node_ref.j=n.s:r.elm_event_node_ref={j:n.s,p:n.u},r;case 6:for(var t=n.s,e=0;t.i>e;e++)r.removeChild(r.childNodes[t.v]);return r;case 7:for(var u=(t=n.s).e,a=r.childNodes[e=t.v];u.length>e;e++)r.insertBefore(Gn(u[e],n.u),a);return r;case 9:if(!(t=n.s))return r.parentNode.removeChild(r),r;var c=t.A;return void 0!==c.r&&r.parentNode.removeChild(r),c.s=ct(r,t.w),r;case 8:return function(r,n){var t=n.s,e=function(r,n){if(r){for(var t=qn.createDocumentFragment(),e=0;r.length>e;e++){var u=r[e].A;An(t,2===u.c?u.s:Gn(u.z,n.u))}return t}}(t.y,n);r=ct(r,t.w);for(var u=t.x,a=0;u.length>a;a++){var c=u[a],i=c.A,o=2===i.c?i.s:Gn(i.z,n.u);r.insertBefore(o,r.childNodes[c.r])}return e&&An(r,e),r}(r,n);case 5:return n.s(r);default:_(10)}}var ot=u(function(r,n,t,e){return function(r,n,t,e,u,a){var c=s(Cr,r,Ir(n?n.flags:void 0));Be(c)||_(2);var i={},o=(c=t(c.a)).a,f=a(b,o),l=function(r,n){var t;for(var e in on){var u=on[e];u.a&&((t=t||{})[e]=u.a(e,n)),r[e]=sn(u,n)}return t}(i,b);function b(r,n){f(o=(c=s(e,r,o)).a,n),hn(i,c.b,u(o))}return hn(i,c.b,u(o)),l?{ports:l}:{}}(n,e,r.ee,r.fk,r.e4,function(n,t){var e=r.bk&&r.bk(n),u=r.fn,a=qn.title,c=qn.body,i=function r(n){if(3===n.nodeType)return Sn(n.textContent);if(1!==n.nodeType)return Sn("");for(var t=J,e=n.attributes,u=e.length;u--;){var a=e[u];t=O(s(zn,a.name,a.value),t)}var c=n.tagName.toLowerCase(),i=J,o=n.childNodes;for(u=o.length;u--;)i=O(r(o[u]),i);return l(Ln,c,t,i)}(c);return function(r,n){n(r);var t=0;function e(){t=1===t?0:(ft(e),n(r),1)}return function(u,a){r=u,a?(n(r),2===t&&(t=1)):(0===t&&ft(e),t=2)}}(t,function(r){xn=e;var t=u(r),o=Ln("body")(J)(t.dx),f=function(r,n){var t=[];return Kn(r,n,t,0),t}(i,o);c=at(c,i,f,n),i=o,xn=0,a!==t.c8&&(qn.title=a=t.c8)})})}),ft=("undefined"!=typeof cancelAnimationFrame&&cancelAnimationFrame,"undefined"!=typeof requestAnimationFrame?requestAnimationFrame:function(r){return setTimeout(r,1e3/60)});function st(){return cu(qn.location.href).a||_(1)}var lt=t(function(r,n){return s(wu,iu,Xr(function(){history.pushState({},"",n),r()}))}),bt=t(function(r,n){return s(wu,iu,Xr(function(){history.replaceState({},"",n),r()}))}),dt={addEventListener:function(){},removeEventListener:function(){}},vt="undefined"!=typeof document?document:dt,pt="undefined"!=typeof window?window:dt;var ht=e(function(r,n,t){return Xr(function(e){function u(r){e(n(t.dV.a(r)))}var a=new XMLHttpRequest;a.addEventListener("error",function(){u(Tu)}),a.addEventListener("timeout",function(){u(Cu)}),a.addEventListener("load",function(){u(function(r,n){return s(n.status>=200&&300>n.status?Ru:Lu,function(r){return{bw:r.responseURL,e1:r.status,e2:r.statusText,d2:gt(r.getAllResponseHeaders())}}(n),r(n.response))}(t.dV.b,a))}),zu(t.db)&&function(r,n,t){n.upload.addEventListener("progress",function(e){n.c||Yr(s(Hu,r,H(t,Du({eZ:e.loaded,aP:e.total}))))}),n.addEventListener("progress",function(e){n.c||Yr(s(Hu,r,H(t,Eu({eS:e.loaded,aP:e.lengthComputable?_t(e.total):Rt}))))})}(r,a,t.db.a);try{a.open(t.ev,t.bw,!0)}catch(r){return u(_u(t.bw))}return function(r,n){for(var t=n.d2;t.b;t=t.b)r.setRequestHeader(t.a.a,t.a.b);r.timeout=n.fa.a||0,r.responseType=n.dV.d,r.withCredentials=n.$7}(a,t),t.dx.a&&a.setRequestHeader("Content-Type",t.dx.a),a.send(t.dx.b),function(){a.c=!0,a.abort()}})});function gt(r){if(!r)return Vu;for(var n=Vu,t=r.split("\r\n"),e=t.length;e--;){var u=t[e],a=u.indexOf(": ");if(a>0){var c=u.substring(0,a),i=u.substring(a+2);n=l(Yu,c,function(r){return _t(zu(r)?i+", "+r.a:i)},n)}}return n}var mt=e(function(r,n,t){return{$:0,d:r,b:n,a:t}}),$t=t(function(r,n){return{$:0,d:n.d,b:n.b,a:function(t){return r(n.a(t))}}}),wt=t(function(r,n){var t="g";r.cr&&(t+="m"),r.bI&&(t+="i");try{return _t(RegExp(n,t))}catch(r){return Rt}}),xt=e(function(r,n,t){for(var e,u=[],a=0,c=t,i=n.lastIndex,o=-1;a++<r&&(e=n.exec(c))&&o!=n.lastIndex;){for(var f=e.length-1,s=Array(f);f>0;){var l=e[f];s[--f]=l?_t(l):Rt}u.push(b(ni,e[0],e.index,a,F(s))),o=n.lastIndex}return n.lastIndex=i,F(u)}),kt=a(function(r,n,t,e,u){for(var a=r.length,c=u.length>=n+a,i=0;c&&a>i;){var o=u.charCodeAt(n);c=r[i++]===u[n++]&&(10===o?(t++,e=1):(e++,55296==(63488&o)?r[i++]===u[n++]:1))}return B(c?n:-1,t,e)}),yt=e(function(r,n,t){return t.length>n?55296==(63488&t.charCodeAt(n))?r(U(t.substr(n,2)))?n+2:-1:r(U(t[n]))?"\n"===t[n]?-2:n+1:-1:-1}),qt=e(function(r,n,t){return t.charCodeAt(n)===r}),At=t(function(r,n){for(;n.length>r;r++){var t=n.charCodeAt(r);if(48>t||t>57)return r}return r}),St=e(function(r,n,t){for(var e=0;t.length>n;n++){var u=t.charCodeAt(n)-48;if(0>u||u>=r)break;e=r*e+u}return H(n,e)}),jt=t(function(r,n){for(var t=0;n.length>r;r++){var e=n.charCodeAt(r);if(48>e||e>57)if(65>e||e>70){if(97>e||e>102)break;t=16*t+e-87}else t=16*t+e-55;else t=16*t+e-48}return H(r,t)}),Lt=a(function(r,n,t,e,u){for(var a=u.indexOf(r,n),c=0>a?u.length:a+r.length;c>n;){var i=u.charCodeAt(n++);10===i?(e=1,t++):(e++,55296==(63488&i)&&n++)}return B(a,t,e)}),_t=function(r){return{$:0,a:r}},Rt={$:1},Tt=M,Et=q,Dt=e(function(r,n,e){var u=e.c,a=e.d,c=t(function(n,t){return l(Et,n.$?r:c,t,n.a)});return l(Et,c,l(Et,r,n,a),u)}),Ct=function(r){return l(Dt,Tt,J,r)},Nt=e(function(r,n,t){for(;;){if(-2===t.$)return n;var e=t.d,u=r,a=l(r,t.b,t.c,l(Nt,r,n,t.e));r=u,n=a,t=e}}),Vt=function(r){return l(Nt,e(function(r,n,t){return s(Tt,H(r,n),t)}),J,r)},zt=1,Ht=2,Bt=0,Ut=function(r){return{$:1,a:r}},Pt=t(function(r,n){return{$:3,a:r,b:n}}),Gt=t(function(r,n){return{$:0,a:r,b:n}}),It=t(function(r,n){return{$:1,a:r,b:n}}),Jt=function(r){return{$:0,a:r}},Ot=function(r){return{$:2,a:r}},Mt=Y,Ft=vr,Qt=G,Xt=Gr,Zt=$r,Kt=t(function(r,n){return s(br,r,Q(n))}),Yt=t(function(r,n){return F(s(lr,r,n))}),Wt=function(r){return s(Kt,"\n    ",s(Yt,"\n",r))},re=e(function(r,n,t){for(;;){if(!t.b)return n;var e=t.b,u=r,a=s(r,t.a,n);r=u,n=a,t=e}}),ne=function(r){return l(re,t(function(r,n){return n+1}),0,r)},te=X,ee=N,ue=e(function(r,n,t){for(;;){if(C(r,n)>=1)return t;var e=r,u=n-1,a=s(Tt,n,t);r=e,n=u,t=a}}),ae=t(function(r,n){return l(ue,r,n,J)}),ce=t(function(r,n){return l(te,r,s(ae,0,ne(n)-1),n)}),ie=function(r){var n=r.charCodeAt(0);return 55296>n||n>56319?n:1024*(n-55296)+r.charCodeAt(1)-56320+65536},oe=function(r){var n=ie(r);return n>=97&&122>=n},fe=function(r){var n=ie(r);return 90>=n&&n>=65},se=function(r){return oe(r)||fe(r)},le=function(r){return oe(r)||fe(r)||function(r){var n=ie(r);return 57>=n&&n>=48}(r)},be=function(r){return l(re,Tt,J,r)},de=function(r){var n=r.charCodeAt(0);return n?_t(55296>n||n>56319?H(U(r[0]),r.slice(1)):H(U(r[0]+r[1]),r.slice(2))):Rt},ve=t(function(r,n){return"\n\n("+Zt(r+1)+") "+Wt(pe(n))}),pe=function(r){return s(he,r,J)},he=t(function(r,n){r:for(;;)switch(r.$){case 0:var t=r.a,e=r.b,u=function(){var r=de(t);if(1===r.$)return!1;var n=r.a,e=n.b;return se(n.a)&&s(Ft,le,e)}();r=e,n=s(Tt,u?"."+t:"['"+t+"']",n);continue r;case 1:e=r.b;var a="["+Zt(r.a)+"]";r=e,n=s(Tt,a,n);continue r;case 2:var c=r.a;if(c.b){if(c.b.b){var i=(n.b?"The Json.Decode.oneOf at json"+s(Kt,"",be(n)):"Json.Decode.oneOf")+" failed in the following "+Zt(ne(c))+" ways:";return s(Kt,"\n\n",s(Tt,i,s(ce,ve,c)))}r=e=c.a,n=n;continue r}return"Ran into a Json.Decode.oneOf with no possibilities"+(n.b?" at json"+s(Kt,"",be(n)):"!");default:var o=r.a,f=r.b;return(i=n.b?"Problem with the value at json"+s(Kt,"",be(n))+":\n\n    ":"Problem with the given value:\n\n")+Wt(s(Xt,4,f))+"\n\n"+o}}),ge=u(function(r,n,t,e){return{$:0,a:r,b:n,c:t,d:e}}),me=[],$e=tr,we=t(function(r,n){return cr(n)/cr(r)}),xe=function(r){return r},ke=$e(s(we,2,32)),ye=b(ge,0,ke,me,me),qe=m,Ae=function(r){return{$:1,a:r}},Se=t(function(r,n){return r(n)}),je=E,Le=er,_e=function(r){return r.length},Re=t(function(r,n){return C(r,n)>0?r:n}),Te=function(r){return{$:0,a:r}},Ee=$,De=t(function(r,n){for(;;){var t=s(Ee,32,r),e=t.b,u=s(Tt,Te(t.a),n);if(!e.b)return be(u);r=e,n=u}}),Ce=function(r){return r.a},Ne=t(function(r,n){for(;;){var t=$e(n/32);if(1===t)return s(Ee,32,r).a;r=s(De,r,J),n=t}}),Ve=t(function(r,n){if(n.k){var t=32*n.k,e=Le(s(we,32,t-1)),u=r?be(n.m):n.m,a=s(Ne,u,n.k);return b(ge,_e(n.l)+t,s(Re,5,e*ke),a,n.l)}return b(ge,_e(n.l),ke,me,n.l)}),ze=a(function(r,n,t,e,u){for(;;){if(0>n)return s(Ve,!1,{m:e,k:t/32|0,l:u});var a=Ae(l(qe,32,n,r));r=r,n-=32,t=t,e=s(Tt,a,e),u=u}}),He=t(function(r,n){if(r>0){var t=r%32;return d(ze,n,r-t-32,r,J,l(qe,t,r-t,n))}return ye}),Be=function(r){return!r.$},Ue=jr,Pe=Lr,Ge=_r,Ie=function(r){return{$:0,a:r}},Je=function(r){switch(r.$){case 0:return 0;case 1:return 1;case 2:return 2;default:return 3}},Oe=function(r){return r},Me=c(function(r,n,t,e,u,a){return{aX:a,b6:n,cv:e,cx:t,cB:r,ac:u}}),Fe=pr,Qe=function(r){return r.length},Xe=dr,Ze=t(function(r,n){return 1>r?n:l(Xe,r,Qe(n),n)}),Ke=mr,Ye=function(r){return""===r},We=t(function(r,n){return 1>r?"":l(Xe,0,r,n)}),ru=function(r){for(var n=0,t=r.charCodeAt(0),e=43==t||45==t?1:0,u=e;r.length>u;++u){var a=r.charCodeAt(u);if(48>a||a>57)return Rt;n=10*n+a-48}return u==e?Rt:_t(45==t?-n:n)},nu=a(function(r,n,t,e,u){if(Ye(u)||s(Fe,"@",u))return Rt;var a=s(Ke,":",u);if(a.b){if(a.b.b){if(a.b.b.b)return Rt;var c=ru(s(Ze,(i=a.b.a)+1,u));return 1===c.$?_t(v(Me,r,u,Rt,n,t,e)):(f=c,_t(v(Me,r,s(We,i,u),f,n,t,e)))}var i,o=ru(s(Ze,(i=a.a)+1,u));if(1===o.$)return _t(v(Me,r,u,Rt,n,t,e));var f=o;return _t(v(Me,r,s(We,i,u),f,n,t,e))}return _t(v(Me,r,u,Rt,n,t,e))}),tu=u(function(r,n,t,e){if(Ye(e))return Rt;var u=s(Ke,"/",e);if(u.b){var a=u.a;return d(nu,r,s(Ze,a,e),n,t,s(We,a,e))}return d(nu,r,"/",n,t,e)}),eu=e(function(r,n,t){if(Ye(t))return Rt;var e=s(Ke,"?",t);if(e.b){var u=e.a;return b(tu,r,_t(s(Ze,u+1,t)),n,s(We,u,t))}return b(tu,r,Rt,n,t)}),uu=t(function(r,n){if(Ye(n))return Rt;var t=s(Ke,"#",n);if(t.b){var e=t.a;return l(eu,r,_t(s(Ze,e+1,n)),s(We,e,n))}return l(eu,r,Rt,n)}),au=hr,cu=function(r){return s(au,"http://",r)?s(uu,0,s(Ze,7,r)):s(au,"https://",r)?s(uu,1,s(Ze,8,r)):s(au,"file:///",r)?s(uu,3,s(Ze,8,r)):s(au,"file://",r)?s(uu,2,s(Ze,7,r)):Rt},iu=function(r){for(;;)r=r},ou=Qr,fu=ou(0),su=u(function(r,n,t,e){if(e.b){var u=e.a,a=e.b;if(a.b){var c=a.a,i=a.b;if(i.b){var o=i.a,f=i.b;if(f.b){var d=f.b;return s(r,u,s(r,c,s(r,o,s(r,f.a,t>500?l(re,r,n,be(d)):b(su,r,n,t+1,d)))))}return s(r,u,s(r,c,s(r,o,n)))}return s(r,u,s(r,c,n))}return s(r,u,n)}return n}),lu=e(function(r,n,t){return b(su,r,n,0,t)}),bu=t(function(r,n){return l(lu,t(function(n,t){return s(Tt,r(n),t)}),J,n)}),du=Zr,vu=t(function(r,n){return s(du,function(n){return ou(r(n))},n)}),pu=e(function(r,n,t){return s(du,function(n){return s(du,function(t){return ou(s(r,n,t))},t)},n)}),hu=function(r){return l(lu,pu(Tt),ou(J),r)},gu=ln,mu=t(function(r,n){var t=n;return Wr(s(du,gu(r),t))});on.Task=fn(fu,e(function(r,n){return s(vu,function(){return 0},hu(s(bu,mu(r),n)))}),e(function(){return ou(0)}),t(function(r,n){return s(vu,r,n)}));var $u=dn("Task"),wu=t(function(r,n){return $u(s(vu,r,n))}),xu=kr,ku=Ar,yu={$:0},qu=function(r){return{$:7,a:r}},Au={$:1},Su=c(function(r,n,t,e,u,a){return{S:u,aj:r,e:e,aP:a,t:t,bw:n}}),ju=t(function(r,n){return n.$?Rt:r(n.a)}),Lu=t(function(r,n){return{$:3,a:r,b:n}}),_u=function(r){return{$:0,a:r}},Ru=t(function(r,n){return{$:4,a:r,b:n}}),Tu={$:2},Eu=function(r){return{$:1,a:r}},Du=function(r){return{$:0,a:r}},Cu={$:1},Nu={$:-2},Vu=Nu,zu=function(r){return!r.$},Hu=bn,Bu=V,Uu=t(function(r,n){r:for(;;){if(-2===n.$)return Rt;var t=n.c,e=n.d,u=n.e;switch(s(Bu,r,n.b)){case 0:r=r,n=e;continue r;case 1:return _t(t);default:r=r,n=u;continue r}}}),Pu=a(function(r,n,t,e,u){return{$:-1,a:r,b:n,c:t,d:e,e:u}}),Gu=a(function(r,n,t,e,u){if(-1!==u.$||u.a){if(-1!==e.$||e.a||-1!==e.d.$||e.d.a)return d(Pu,r,n,t,e,u);var a=e.d;return c=e.e,d(Pu,0,e.b,e.c,d(Pu,1,a.b,a.c,a.d,a.e),d(Pu,1,n,t,c,u))}var c,i=u.b,o=u.c,f=u.d,s=u.e;return-1!==e.$||e.a?d(Pu,r,i,o,d(Pu,0,n,t,e,f),s):d(Pu,0,n,t,d(Pu,1,e.b,e.c,e.d,c=e.e),d(Pu,1,i,o,f,s))}),Iu=e(function(r,n,t){if(-2===t.$)return d(Pu,0,r,n,Nu,Nu);var e=t.a,u=t.b,a=t.c,c=t.d,i=t.e;switch(s(Bu,r,u)){case 0:return d(Gu,e,u,a,l(Iu,r,n,c),i);case 1:return d(Pu,e,u,n,c,i);default:return d(Gu,e,u,a,c,l(Iu,r,n,i))}}),Ju=e(function(r,n,t){var e=l(Iu,r,n,t);return-1!==e.$||e.a?e:d(Pu,1,e.b,e.c,e.d,e.e)}),Ou=function(r){if(-1===r.$&&-1===r.d.$&&-1===r.e.$){if(-1!==r.e.d.$||r.e.d.a){var n=r.d,t=r.e;return c=t.b,i=t.c,e=t.d,s=t.e,d(Pu,1,r.b,r.c,d(Pu,0,n.b,n.c,n.d,n.e),d(Pu,0,c,i,e,s))}var e,u=r.d,a=r.e,c=a.b,i=a.c,o=(e=a.d).d,f=e.e,s=a.e;return d(Pu,0,e.b,e.c,d(Pu,1,r.b,r.c,d(Pu,0,u.b,u.c,u.d,u.e),o),d(Pu,1,c,i,f,s))}return r},Mu=function(r){if(-1===r.$&&-1===r.d.$&&-1===r.e.$){if(-1!==r.d.d.$||r.d.d.a){var n=r.d,t=r.e;return f=t.b,s=t.c,l=t.d,b=t.e,d(Pu,1,e=r.b,u=r.c,d(Pu,0,n.b,n.c,n.d,i=n.e),d(Pu,0,f,s,l,b))}var e=r.b,u=r.c,a=r.d,c=a.d,i=a.e,o=r.e,f=o.b,s=o.c,l=o.d,b=o.e;return d(Pu,0,a.b,a.c,d(Pu,1,c.b,c.c,c.d,c.e),d(Pu,1,e,u,i,d(Pu,0,f,s,l,b)))}return r},Fu=i(function(r,n,t,e,u,a,c){if(-1!==a.$||a.a){r:for(;;){if(-1===c.$&&1===c.a){if(-1===c.d.$){if(1===c.d.a)return Mu(n);break r}return Mu(n)}break r}return n}return d(Pu,t,a.b,a.c,a.d,d(Pu,0,e,u,a.e,c))}),Qu=function(r){if(-1===r.$&&-1===r.d.$){var n=r.a,t=r.b,e=r.c,u=r.d,a=u.d,c=r.e;if(1===u.a){if(-1!==a.$||a.a){var i=Ou(r);if(-1===i.$){var o=i.e;return d(Gu,i.a,i.b,i.c,Qu(i.d),o)}return Nu}return d(Pu,n,t,e,Qu(u),c)}return d(Pu,n,t,e,Qu(u),c)}return Nu},Xu=t(function(r,n){if(-2===n.$)return Nu;var t=n.a,e=n.b,u=n.c,a=n.d,c=n.e;if(0>C(r,e)){if(-1===a.$&&1===a.a){var i=a.d;if(-1!==i.$||i.a){var o=Ou(n);if(-1===o.$){var f=o.e;return d(Gu,o.a,o.b,o.c,s(Xu,r,o.d),f)}return Nu}return d(Pu,t,e,u,s(Xu,r,a),c)}return d(Pu,t,e,u,s(Xu,r,a),c)}return s(Zu,r,p(Fu,r,n,t,e,u,a,c))}),Zu=t(function(r,n){if(-1===n.$){var t=n.a,e=n.b,u=n.c,a=n.d,c=n.e;if(R(r,e)){var i=function(r){for(;;){if(-1!==r.$||-1!==r.d.$)return r;r=r.d}}(c);return-1===i.$?d(Gu,t,i.b,i.c,a,Qu(c)):Nu}return d(Gu,t,e,u,a,s(Xu,r,c))}return Nu}),Ku=t(function(r,n){var t=s(Xu,r,n);return-1!==t.$||t.a?t:d(Pu,1,t.b,t.c,t.d,t.e)}),Yu=e(function(r,n,t){var e=n(s(Uu,r,t));return e.$?s(Ku,r,t):l(Ju,r,e.a,t)}),Wu=e(function(r,n,t){return n(r(t))}),ra=t(function(r,n){return l(mt,"",Oe,s(Wu,n,r))}),na=function(r){return{$:4,a:r}},ta={$:2},ea={$:1},ua=t(function(r,n){return n.$?Ut(r(n.a)):Jt(n.a)}),aa=t(function(r,n){switch(n.$){case 0:return Ut({$:0,a:n.a});case 1:return Ut(ea);case 2:return Ut(ta);case 3:return Ut({$:3,a:n.a.e1});default:return s(ua,na,r(n.b))}}),ca={$:0},ia=function(r){return{$:1,a:r}},oa=t(function(r,n){return{cD:r,c2:n}}),fa=ou(s(oa,Vu,J)),sa=function(r){return Xr(function(n){var t=r.f;2===t.$&&t.c&&t.c(),r.f=null,n(Qr(z))})},la=Wr,ba=e(function(r,n,t){r:for(;;){if(n.b){var e=n.a,u=n.b;if(e.$){var a=e.a;return s(du,function(n){var e=a.db;return l(ba,r,u,1===e.$?t:l(Ju,e.a,n,t))},la(l(ht,r,gu(r),a)))}var c=e.a,i=s(Uu,c,t);if(1===i.$){r=r,n=u,t=t;continue r}return s(du,function(){return l(ba,r,u,s(Ku,c,t))},sa(i.a))}return ou(t)}}),da=u(function(r,n,t,e){return s(du,function(r){return ou(s(oa,r,t))},l(ba,r,n,e.cD))}),va=e(function(r,n,t){var e=r(n);return e.$?t:s(Tt,e.a,t)}),pa=t(function(r,n){return l(lu,va(r),J,n)}),ha=u(function(r,n,t,e){var u=e.b;return R(n,e.a)?_t(s(gu,r,u(t))):Rt}),ga=e(function(r,n,t){return s(du,function(){return ou(t)},hu(s(pa,l(ha,r,n.a,n.b),t.c2)))}),ma=t(function(r,n){if(n.$){var t=n.a;return ia({$7:t.$7,dx:t.dx,dV:s($t,r,t.dV),d2:t.d2,ev:t.ev,fa:t.fa,db:t.db,bw:t.bw})}return{$:0,a:n.a}}),$a=t(function(r,n){return{$:0,a:r,b:n}});on.Http=fn(fa,da,ga,ma,t(function(r,n){return s($a,n.a,s(Wu,n.b,r))}));var wa,xa=dn("Http"),ka=(dn("Http"),function(r){return function(r){return xa(ia({$7:!1,dx:r.dx,dV:r.dV,d2:r.d2,ev:r.ev,fa:r.fa,db:r.db,bw:r.bw}))}({dx:ca,dV:r.dV,d2:J,ev:"GET",fa:Rt,db:Rt,bw:r.bw})}),ya=t(function(r,n){return ka({dV:(t=r,s(ra,t,aa(Jt))),bw:n});var t}),qa=t(function(r,n){return 1===r.$?n:n+":"+Zt(r.a)}),Aa=e(function(r,n,t){return 1===n.$?t:I(t,I(r,n.a))}),Sa=function(r){var n=function(){switch(r.cB){case 0:return"http://";case 1:return"https://";case 2:return"file://";default:return"file:///"}}();return l(Aa,"#",r.aX,l(Aa,"?",r.ac,I(s(qa,r.cx,I(n,r.b6)),r.cv)))},ja=function(r){return Sa(P(r,{aX:Rt}))},La=t(function(r,n){r:for(;;){if(r>0){if(n.b){r-=1,n=n.b;continue r}return n}return n}}),_a=function(r){return r.$?"":s(Kt,"/",be(s(La,1,be(s(Yt,"/",r.a)))))+"/"},Ra=function(r){return-r},Ta=function(r){return{bE:J,dt:"",du:r,dF:"",dJ:"",bQ:!1,dQ:"",aH:J,en:"en",eq:Rt,et:"",ak:Vu,ex:Rt,eB:"US English Male",eM:"",aN:J,cR:-1,at:Vu,dd:-1,fm:""}},Ea=b(u(function(r,n,t,e){return{ed:n,ae:r,e_:e,fi:t}}),!1,!1,!1,!1),Da=Cr,Ca=xr,Na=Dr,Va=f(function(r,n,t,e,u,a,c,i,o){return P(r,{bV:a,b0:c,em:o,a4:u,ex:t,cY:i,c4:n,c7:e})}),za=qr,Ha=function(r){switch(r){case"Textbook":return Ie(2);case"Presentation":return Ie(1);case"Slides":return Ie(0);default:return{$:1,a:"unknown presentation mode"}}},Ba=t(function(r,n){return s(Da,g(Na,Va(r),s(ku,"table_of_contents",xu),s(Ue,Ha,s(ku,"mode",za)),s(ku,"theme",za),s(ku,"light",xu),s(ku,"editor",za),s(ku,"font_size",Ca),s(ku,"sound",xu),s(ku,"lang",za)),n)}),Ua=t(function(r,n){return n.$?r:n.a}),Pa=a(function(r,n,t,e,u){var a={bH:Ea,bV:"dreamweaver",b0:100,cd:!1,em:"default",a4:!0,ex:1,cY:!0,c$:!1,c4:!0,c7:"default"};return{bT:Ta(n),dR:Rt,cb:"",cu:e,ap:t,cH:J,cP:Oe,cS:function(){if(1===u.$)return 0;var r=u.a;return r-1>0?r-1:0}(),cT:ye,ae:s(Ua,a,s(Ba,a,r)),c8:"Lia",c9:J,at:2,bw:n}}),Ga=function(r){return{$:4,a:r}},Ia={$:2},Ja=function(r){return{$:8,a:r}},Oa=t(function(r,n){return{$:2,a:r,b:n}}),Ma=vn,Fa=t(function(r,n){return n.b?l(lu,Tt,n,r):r}),Qa=function(r){return r.trim()},Xa=e(function(r,n,t){for(;;){if(-2===t.$)return n;var e=t.e,u=r,a=l(r,t.b,t.c,l(Xa,r,n,t.d));r=u,n=a,t=e}}),Za=t(function(r,n){return l(Xa,Ju,n,r)}),Ka=t(function(r,n){return P(r,{bE:s(Fa,r.bE,n.bE),ak:s(Za,r.ak,n.ak),eM:Qa(r.eM+"\n"+n.eM)})}),Ya=e(function(r,n,t){return{eu:t,cR:n,fh:r}}),Wa=t(function(r,n){return l(lu,t(function(n,t){return r(n)?s(Tt,n,t):t}),J,n)}),rc=t(function(r,n){return Ir(l(re,Mr(r),[],n))}),nc=t(function(r,n){for(;;){if(!n.b)return!1;var t=n.b;if(r(n.a))return!0;r=r,n=t}}),tc=t(function(r,n){return s(nc,function(n){return R(n,r)},n)}),ec=function(r){return!r},uc=Ir,ac=t(function(r,n){var t=s(Wa,function(n){return!s(tc,n,r)},n);return H(s(Fa,r,t),s(bu,function(r){return l(Ya,"resource",0,s(rc,uc,F(1===r.$?["script",r.a]:["link",r.a])))},t))}),cc=t(function(r,n){var t=s(ac,n.cH,r.aN),e=t.a,u=t.b;return P(n,{bT:s(Ka,n.bT,r),cH:e,c9:s(Fa,n.c9,be(u))})}),ic=function(r){switch(r){case"bg":return 0;case"de":return 1;case"en":return 2;case"fa":return 3;case"hy":return 4;case"ua":return 5;default:return 2}},oc=e(function(r,n,t){return{dD:t,er:n,e0:r}}),fc=function(r){return l(e(function(r,n,t){r:for(;;){if(t.b){var e=t.a,u=t.b,a=Qe(e),c=a+1;if(R(r,a))return l(oc,e,n,r);if(C(r,a)>0){r-=c,n+=1,t=u;continue r}return l(oc,e,n,r)}return l(oc,"",n,r)}}),r.H,0,s(Yt,"\n",r.bN))},sc=or,lc=function(r){return s(sc,r,"")},bc=e(function(r,n,t){return r>0?l(bc,r>>1,I(n,n),1&r?I(t,n):t):t}),dc=t(function(r,n){return l(bc,r,n,"")}),vc=e(function(r,n,t){return I(s(dc,r-Qe(t),lc(n)),t)}),pc=t(function(r,n){var t=Qe("|> "),e=fc(n),u=e.dD+t+2;return"Parse error around line:\\n\\n"+Zt(e.er)+"|> "+e.e0+"\\n"+l(vc,u," ","^")+"\\nI expected one of the following:\\n\n  * "+s(Kt,"\n  * ",r)}),hc=b(u(function(r,n,t,e){return{aB:t,dO:n,X:e,df:r}}),0,0,Vu,Vu),gc=Vu,mc=t(function(r,n){return{aR:ye,bS:n,dL:!1,J:hc,aF:F([0]),b2:gc,b9:J,W:!1,be:ye,cP:r,bt:ye}}),$c=function(r){return{$:0,a:r}},wc=function(r){return{$:1,a:r}},xc=t(function(r,n){return P(n,{ak:l(Ju,r.a,r.b,n.ak)})}),kc=t(function(r,n){return s(au,"http",n)?n:I(r,n)}),yc=u(function(r,n,t,e){return s(Fa,e,s(bu,s(Wu,kc(n),r),s(Yt,"\n",t)))}),qc=e(function(r,n,t){return P(t,{aN:b(yc,r,t.du,n,t.aN)})}),Ac=t(function(r,n){return P(n,{aH:s(Fa,n.aH,s(bu,kc(n.du),s(Yt,"\n",r)))})}),Sc=t(function(r,n){var t=function(r){return F(r.trim().split(/\s+/g))}(r);return t.b&&t.b.b&&!t.b.b.b?P(n,{at:l(Ju,t.a,s(kc,n.du,t.b.a),n.at)}):n}),jc=function(r){return r},Lc=t(function(r,n){return t(function(t,e){var u=l(jc,n,t,e);if(u.c.$)return B(u.a,u.b,Ut(u.c.a));var a=u.a,c=u.b;return l(jc,r(u.c.a),a,c)})}),_c=e(function(r,n,t){return s(r,t,n)}),Rc=e(function(r,n,e){return t(function(t,u){var a=l(jc,e,t,u);return B(a.a,a.b,a.c.$?Ut(n(a.c.a)):Jt(r(a.c.a)))})}),Tc=t(function(r,n){return l(Rc,r,Oe,n)}),Ec=t(function(r,n){return s(Lc,s(_c,Tc,r),n)}),Dc=t(function(r,n){return B(r,n,Ut(J))}),Cc=t(function(r,n){return t(function(t,e){var u=l(jc,r,t,e);if(u.c.$){var a=u.c.a,c=l(jc,n,t,e);return c.c.$?B(t,e,Ut(I(a,c.c.a))):c}return u})}),Nc=function(r){return l(lu,Cc,Dc,r)},Vc=t(function(r){return r}),zc=t(function(r,n){return s(Ec,r,s(Tc,_c(Vc),n))}),Hc=t(function(r,n){return e(function(t,e,u){for(;;){var a=l(jc,n,e,u);if(!a.c.$)return B(b=a.a,d=a.b,Jt(be(t)));var c=a.a,i=a.b,o=a.c.a,f=l(jc,r,e,u);if(f.c.$)return B(c,i,Ut(o));var b=f.a,d=f.b;t=s(Tt,f.c.a,t),e=b,u=d}})(J)}),Bc=function(r){return t(function(n,t){if(s(au,r,t.A)){var e=Qe(r),u=t.H+e;return B(n,P(t,{A:s(Ze,e,t.A),H:u}),Jt(r))}return B(n,t,Ut(F(['expected "'+r+'"'])))})},Uc=function(r){return s(zc,s(Hc,r,Bc("--\x3e")),Bc("\x3c!--"))},Pc=t(function(r,n){return s(Ec,r,s(Tc,Vc,n))}),Gc=e(function(r,n,t){return{$:3,a:r,b:n,c:t}}),Ic=t(function(r,n){return{$:2,a:r,b:n}}),Jc=t(function(r,n){return{$:0,a:r,b:n}}),Oc=e(function(r,n,t){return{$:2,a:r,b:n,c:t}}),Mc=t(function(r,n){return{$:3,a:r,b:n}}),Fc=e(function(r,n,t){return{$:0,a:r,b:n,c:t}}),Qc=e(function(r,n,t){return{$:1,a:r,b:n,c:t}}),Xc=e(function(r,n,t){return{$:4,a:r,b:n,c:t}}),Zc=t(function(r,n){return{$:9,a:r,b:n}}),Kc=t(function(r,n){return{$:4,a:r,b:n}}),Yc=t(function(r,n){return{$:6,a:r,b:n}}),Wc=t(function(r,n){return{$:5,a:r,b:n}}),ri=function(r){return l(Ju,"style",(n=s(Uu,"style",r)).$?"display: inline-block;":"display: inline-block;"+n.a,r);var n},ni=u(function(r,n,t,e){return{eb:n,al:r,eJ:t,e3:e}}),ti=wt,ei=function(r){return s(ti,{bI:!1,cr:!1},r)},ui=xt,ai=/.^/,ci=t(function(r,n){return n.$?r:n.a}),ii=a(function(r,n,t,e,u){var a=s(au,"^",t)?t:"^"+t,c=l(ui,1,s(ci,ai,r(a)),u.A);if(c.b&&!c.b.b){var i=c.a,o=Qe(i.al),f=u.H+o;return B(e,P(u,{A:s(Ze,o,u.A),H:f}),Jt(n(i)))}return B(e,u,Ut(F(["expected input matching Regexp /"+a+"/"])))}),oi=s(Wu,s(ii,ei,function(r){return r.al}),Oe),fi=Rc(Oe),si=t(function(r,n){return s(fi,Vc(F([r])),n)}),li=Oe,bi=s(si,"expected any character",(wa=Vc(!0),li(t(function(r,n){var t="could not satisfy predicate",e=de(n.A);if(e.$)return B(r,n,Ut(F([t])));var u=e.a,a=u.a,c=u.b;return wa(a)?B(r,P(n,{A:c,H:n.H+1}),Jt(a)):B(r,n,Ut(F([t])))})))),di=function(r){return Q(r).join("")},vi=function(r){return s(Tc,di,s(Hc,bi,r))},pi=function(r){return r.toLowerCase()},hi=s(si,"optional whitespace",oi("\\s*")),gi=s(Ec,vi(oi('"[ \t\n]*')),s(Tc,t(function(r,n){return H(pi(r),n)}),s(Pc,oi('[ \t\n]*=[ \t\n]*"'),s(zc,oi("\\w+"),hi)))),mi=e(function(r,n,t){return{dF:n,eB:r,_:t}}),$i=e(function(r,n,t){for(;;){var e=s(Ee,32,r),u=e.a,a=e.b;if(0>C(_e(u),32))return s(Ve,!0,{m:n,k:t,l:u});r=a,n=s(Tt,Ae(u),n),t+=1}}),wi=function(r){return r.b?l($i,r,J,0):ye},xi=function(r){return r.a},ki=function(r){return t(function(n,t){return B(n,t,Jt(r))})},yi=function(r){return t(function(n,t){return l(jc,r(n),n,t)})},qi=t(function(r,n){return n.$?Rt:_t(r(n.a))}),Ai=function(r){return t(function(n,t){return l(jc,ki(0),r(n),t)})},Si=k,ji=4294967295>>>32-ke,Li=function(r){return[r]},_i=w,Ri=x,Ti=u(function(r,n,t,e){var u=ji&n>>>r;if(C(u,_e(e))>-1){if(5===r)return s(Si,Ae(t),e);var a=Te(b(Ti,r-ke,n,t,me));return s(Si,a,e)}var c=s(_i,u,e);if(c.$)return a=Te(b(Ti,r-ke,n,t,Li(c))),l(Ri,u,a,e);a=Te(b(Ti,r-ke,n,t,c.a));return l(Ri,u,a,e)}),Ei=t(function(r,n){var t=n.a,e=n.b,u=n.c,a=_e(n.d),c=_e(r),i=t+(c-a);if(R(c,32)){if(C(i>>>ke,1<<e)>0){var o=e+ke,f=b(Ti,o,t,r,Li(Te(u)));return b(ge,i,o,f,me)}return b(ge,i,e,b(Ti,e,t,r,u),me)}return b(ge,i,e,u,r)}),Di=t(function(r,n){return s(Ei,s(Si,r,n.d),n)}),Ci=function(r){return s(Kt,"",r)},Ni=function(r){r:for(;;)switch(r.$){case 0:return r.a;case 2:case 3:case 4:case 5:case 6:r=r.a;continue r;case 7:return r.a;case 8:return r.b;case 9:return Vi(r.a);case 12:return zi(r.c);case 13:return zi(r.a);default:return""}},Vi=function(r){switch(r.$){case 4:case 2:case 3:case 0:default:return zi(r.a)}},zi=function(r){return Ci(s(bu,Ni,r))},Hi=t(function(r,n){var t=n.a,e=n.b,u=n.c;return s(Lc,function(r){return ki(H(t,r))},s(zc,function(r){return yi(function(n){return ki((t=s(Uu,r,n.J.aB)).$?0:xi(t.a._)-1);var t})}(t),Ai(function(n){var a,c=s(ci,n.bS.eB,s(qi,Qa,e));return P(n,{J:(a=n.J,P(a,{aB:function(){var n=s(Uu,t,a.aB);if(n.$)return l(Ju,t,l(mi,c,zi(u),wi(r?F([H(Rt,u)]):J)),a.aB);var e=n.a;return l(Ju,t,P(e,r?{dF:e.dF+"\n"+zi(u),_:s(Di,H(Rt,u),e._)}:{dF:e.dF+"\n"+zi(u)}),a.aB)}()}))})})))}),Bi=function(r){return t(function(n,t){return B(n,t,Ut(F([r])))})},Ui=function(r){return r.$?Bi("impossible state in Combine.Num.unwrap"):ki(r.a)},Pi=s(si,"expected an int",s(Lc,Ui,s(Tc,ru,oi("-?(?:0|[1-9]\\d*)")))),Gi=s(Lc,function(r){return s(zc,ki(r),Ai(function(n){return P(n,{J:C(r,n.J.dO)>0?P(n.J,{dO:r}):n.J,aF:s(Tt,r,n.aF)})}))},Pi),Ii=s(Tc,Qe,oi("`{3,}")),Ji=function(r){return Tc(Vc(r))},Oi=function(r){return s(Ji,0,r)},Mi=t(function(r,n){return P(n,{W:r})}),Fi=s(Pc,Ai(Mi(!1)),yi(function(r){return R(r.b9,J)?ki(0):Oi(r.W?ki(0):oi(Ci(r.b9)))})),Qi=function(r){return t(function(n,t){var e=l(jc,r,n,t);return e.c.$?B(n,t,Jt(Rt)):B(e.a,e.b,Jt(_t(e.c.a)))})},Xi=function(r){return F([r])},Zi=s(Tc,s(Wu,Ci,Xi),s(Hc,s(zc,oi("(.(?!```))*\\n?"),Qi(Fi)),s(zc,Ii,Qi(Fi)))),Ki=t(function(r,n){switch(r){case"@author":return _t(n.dt);case"@date":return _t(n.dJ);case"@email":return _t(n.dQ);case"@version":return _t(n.fm);case"@section":return _t(Zt(n.cR));case"@uid":return _t(Zt(n.cR)+"_"+Zt(n.dd));default:return s(Uu,r,n.ak)}}),Yi=function(r){return F(r.split(/\r\n|\r|\n/g))},Wi=function(r){var n=e(function(n,t,e){for(;;){var u=l(jc,r,t,e);if(u.c.$)return B(t,e,be(n));var a=u.a,c=u.b,i=u.c.a;if(R(e,c))return B(a,c,be(n));n=s(Tt,i,n),t=a,e=c}});return t(function(r,t){var e=l(n,J,r,t);return B(e.a,e.b,Jt(e.c))})},ro=function(r){return s(Ec,Wi(r),s(Tc,Tt,r))},no=t(function(r,n){return s(Cc,n,ki(r))}),to=s(Wu,Yt("\\"),Kt("\\\\")),eo=s(Tc,to,Nc(F([s(Pc,Ii,s(zc,oi("(([^`]+|(`[^`]+)|(``[^`]+))|\\n)+"),Ii)),s(Pc,Bc("`"),s(zc,oi("[^`\n]+"),Bc("`"))),oi("[^),]+")]))),uo=e(function(r,n,t){return s(Pc,n,s(zc,t,r))}),ao=s(uo,Bc("("),Bc(")")),co=t(function(r,n){return s(Ec,Wi(s(zc,n,r)),s(Tc,Tt,n))}),io=s(no,J,ao(s(t(function(r,n){return s(Cc,s(co,r,n),ki(J))}),Bc(","),eo))),oo=oi("[\t ]*"),fo=s(zc,oi("@[\\w.]+"),oo),so=e(function(r,n,t){return s(Kt,n,s(Yt,r,t))}),lo=e(function(r,n,t){return{bN:r,A:n,H:t}}),bo=e(function(r,n,t){var e=l(jc,r,n,function(r){return l(lo,r,r,0)}(t));return e.c.$?Ut(B(e.a,e.b,e.c.a)):Jt(B(e.a,e.b,e.c.a))}),vo=t(function(r,n){return H(r,n)}),po=s(Ec,io,s(Tc,vo,fo)),ho=s(Ji,H("@uid",J),s(zc,Ai(function(r){var n=r.bS;return P(r,{bS:P(n,{dd:n.dd+1})})}),Bc("@uid"))),go=t(function(r,n){var t=n.b,e=n.c,u=s($o,n.a,r),a=u.b;return B(u.a,t+1,l(so,"@"+Zt(t),a,e))}),mo=function(r){var n=r.a,e=r.b;return yi(function(r){var u=s(Ki,n,r.bS);if(u.$)return Bi("macro definition not found");var a,c=u.a,i=R(r.b9,J)?c:s(Kt,"\n"+Ci(r.b9),Yi(c)),o=l(re,go,B(r,0,i),e),f=o.a,b=o.c;return s(zc,ki(0),s(zc,function(r){return t(function(n,t){return l(jc,ki(0),r,t)})}(f),(a=Qt(b),t(function(r,n){return l(jc,ki(0),r,P(n,{A:a(n.A)}))}))))})},$o=t(function(r,n){var t=l(bo,s(Tc,Ci,ro(s(Cc,oi("@input[^@]+"),s(zc,oi("[^@]+"),wo())))),r,n);if(t.$)return H(r,n);var e=t.a;return H(e.a,e.c)});function wo(){return Oi(Qi(ro(Nc(F([s(Lc,mo,ho),s(Lc,mo,po),xo()])))))}function xo(){return s(Lc,function(r){return s(Lc,function(n){return s(Lc,function(n){return mo(H(r,n))},s(Tc,Fa(n),Zi))},s(Pc,oi("[\t ]*\\n"),io))},s(zc,fo,s(zc,oi("[\t ]*[a-zA-Z0-9_]*[\t ]*"),Ii)))}var ko=wo();wo=function(){return ko};var yo=xo();xo=function(){return yo};var qo,Ao=Ai(function(r){return P(r,{aF:s(La,1,r.aF)})}),So=oi("[\t ]+"),jo=Oi(s(Lc,Hi(!1),s(Pc,Ao,s(Ec,s(Hc,bi,Bc("--\x3e")),s(Pc,oi("}}--[\t ]*"),s(Ec,Qi(s(zc,oi("[A-Za-z0-9 ]+"),s(zc,ko,So))),s(Tc,e(function(r,n,t){return B(r,n,F([s(Jc,Qa(di(t)),Rt)]))}),s(zc,Gi,oi("\x3c!--[\t ]*--{{"))))))))),Lo=Oi(Wi(s(Cc,Oi(Uc(bi)),jo))),_o=function(r){return l(re,t(function(r,n){return l(Ju,r.a,r.b,n)}),Vu,r)},Ro=s(Pc,Lo,Qi(s(Tc,s(Wu,_o,ri),s(zc,Uc(gi),oo)))),To=t(function(r,n){return{$:1,a:r,b:n}}),Eo=s(Tc,To,Nc(F([s(Ji,"⟷",Bc("<--\x3e")),s(Ji,"⟵",Bc("<--")),s(Ji,"⟶",Bc("--\x3e")),s(Ji,"↞",Bc("<<-")),s(Ji,"↠",Bc("->>")),s(Ji,"↔",Bc("<->")),s(Ji,"↣",Bc(">->")),s(Ji,"↢",Bc("<-<")),s(Ji,"→",Bc("->")),s(Ji,"←",Bc("<-")),s(Ji,"↜",Bc("<~")),s(Ji,"↝",Bc("~>")),s(Ji,"⟺",Bc("<==>")),s(Ji,"⟹",Bc("==>")),s(Ji,"⟸",Bc("<==")),s(Ji,"⇔",Bc("<=>")),s(Ji,"⇒",Bc("=>")),s(Ji,"⇐",Bc("<="))]))),Do=function(r){return s(ci,ai,ei(r))},Co=function(r){return r.b?_t(r.a):Rt},No=t(function(r,n){var t=l(ui,1,r,n);return t.b&&!t.b.b?s(ci,Rt,Co(t.a.e3)):Rt}),Vo=t(function(r,n){r:for(;;){if(r.b){var t=r.a,e=r.b,u=s(No,t.aa,n);if(u.$){r=e,n=n;continue r}return H(!0,t.U(u.a))}return H(!1,n)}}),zo=Vo(F([{U:function(r){return"https://w.soundcloud.com/player/?url=https://soundcloud.com/"+r},aa:Do("https?:\\/\\/(?:w\\.|www\\.|)(?:soundcloud\\.com\\/)(?:(?:player\\/\\?url=https\\%3A\\/\\/api.soundcloud.com\\/tracks\\/)|)(((\\w|-)[^A-z]{7})|([A-Za-z0-9]+(?:[-_][A-Za-z0-9]+)*(?!\\/sets(?:\\/|$))(?:\\/[A-Za-z0-9]+(?:[-_][A-Za-z0-9]+)*){1,2}))")}])),Ho=s(Tc,t(function(r,n){return{$:7,a:r,b:n}}),s(Pc,Bc("`"),s(zc,oi("[^`\\n]+"),Bc("`")))),Bo=s(Tc,Qt("mailto:"),s(zc,oi("[a-zA-Z0-9_.\\-]+@[a-zA-Z0-9_.\\-]+"),Qi(Bc("mailto:")))),Uo=e(function(r,n,t){return{$:8,a:r,b:n,c:t}}),Po=s(Tc,Uo("true"),s(zc,vi(Bc("$$")),Bc("$$"))),Go=s(Tc,Uo("false"),s(Pc,Bc("$"),s(zc,oi("[^\\n$]+"),Bc("$")))),Io=s(Cc,Po,Go),Jo=e(function(r,n,t){return P(t,{X:l(Ju,r,(e=s(Uu,r,t.X),e.$?F([n]):s(Fa,e.a,F([n]))),t.X)});var e}),Oo=function(r){return{$:11,a:r}},Mo=e(function(r,n,t){return{$:1,a:r,b:n,c:t}}),Fo=t(function(r,n){return{$:1,a:r,b:n}}),Qo=e(function(r,n,t){return{$:0,a:r,b:n,c:t}}),Xo=t(function(r,n){var t=n;return function(n){var e=t(n);if(1===e.$)return s(Fo,e.a,e.b);var u=e.a,a=e.c,c=r(e.b)(a);if(1===c.$){var i=c.a;return s(Fo,u||i,c.b)}return i=c.a,l(Qo,u||i,c.b,c.c)}}),Zo=function(r){var n=r;return function(r){var t=n(r);return 1===t.$?s(Fo,!1,t.b):l(Qo,!1,t.b,t.c)}},Ko={$:11},Yo=t(function(r,n){return{$:1,a:r,b:n}}),Wo=u(function(r,n,t,e){return{bL:n,dI:e,cy:t,cJ:r}}),rf={$:0},nf=t(function(r,n){return s(Yo,rf,b(Wo,r.cJ,r.bL,n,r.c))}),tf=yt,ef=t(function(r,n){return function(t){var e=l(tf,r,t.b,t.a);return R(e,-1)?s(Fo,!1,s(nf,t,n)):R(e,-2)?l(Qo,!0,0,{bL:1,c:t.c,d:t.d,b:t.b+1,cJ:t.cJ+1,a:t.a}):l(Qo,!0,0,{bL:t.bL+1,c:t.c,d:t.d,b:e,cJ:t.cJ,a:t.a})}}),uf=function(r){return s(ef,r,Ko)},af=a(function(r,n,t,e,u){for(;;){var a=l(tf,r,n,u.a);if(R(a,-1))return l(Qo,0>C(u.b,n),0,{bL:e,c:u.c,d:u.d,b:n,cJ:t,a:u.a});R(a,-2)?(r=r,n+=1,t+=1,e=1,u=u):(r=r,n=a,t=t,e+=1,u=u)}}),cf=function(r){return function(n){return d(af,r,n.b,n.cJ,n.bL,n)}},of=e(function(r,n,t){var e=n,u=t;return function(n){var t=e(n);if(1===t.$)return s(Fo,t.a,t.b);var a=t.a,c=t.b,i=u(t.c);if(1===i.$){var o=i.a;return s(Fo,a||o,i.b)}o=i.a;var f=i.c;return l(Qo,a||o,s(r,c,i.b),f)}}),ff=t(function(r,n){return l(of,Vc,r,n)}),sf=function(r){return s(ff,uf(r),cf(r))},lf=t(function(r,n){var t=n;return function(n){var e=t(n);if(1===e.$)return s(Fo,e.a,e.b);var u=e.b,a=e.c;return l(Qo,e.a,s(r,l(Xe,n.b,a.b,n.a),u),a)}}),bf=function(r){return s(lf,Vc,r)},df=function(r){return" "===r||"\t"===r||"\n"===r||"\r"===r||"\f"===r||" "===r},vf=D,pf=function(r){return n={$:12,a:r},function(r){return s(Fo,!1,s(nf,r,n))};var n},hf=function(r){return function(n){return l(Qo,!1,r,n)}},gf=function(r){var n=s(Xo,function(n){return R(pi(n),r)?hf(0):pf("closing tag does not match opening tag: "+r)},bf(sf(function(r){return!df(r)&&">"!==r})));return s(ff,s(ff,s(ff,s(ff,uf(je("<")),uf(je("/"))),n),cf(df)),uf(je(">")))},mf=Lt,$f=u(function(r,n,t,e){return s(Yo,rf,b(Wo,r,n,t,e))}),wf=t(function(r,n){return{$:0,a:r,b:n}}),xf=function(r){return s(wf,r,{$:0,a:r})},kf=t(function(r,n){return l(of,Se,r,n)}),yf=kt,qf=function(r){return function(r){var n=r.a,t=r.b,e=!Ye(n);return function(r){var u=d(yf,n,r.b,r.cJ,r.bL,r.a),a=u.a,c=u.b,i=u.c;return R(a,-1)?s(Fo,!1,s(nf,r,t)):l(Qo,e,0,{bL:i,c:r.c,d:r.d,b:a,cJ:c,a:r.a})}}(xf(r))},Af=s(kf,s(ff,s(ff,hf(function(r){return{$:2,a:r}}),qf("<!")),qf("--")),s(ff,bf(function(r){var n=r.a,t=r.b;return function(r){var e=d(mf,n,r.b,r.cJ,r.bL,r.a),u=e.a,a=e.b,c=e.c;return R(u,-1)?s(Fo,!1,b($f,a,c,t,r.c)):l(Qo,0>C(r.b,u),0,{bL:c,c:r.c,d:r.d,b:u,cJ:a,a:r.a})}}(xf("--\x3e"))),qf("--\x3e"))),Sf=F(["area","base","br","col","embed","hr","img","input","link","meta","param","source","track","wbr"]),jf=function(r){return s(tc,r,Sf)},Lf=function(r){return{$:1,a:r}},_f=function(r){return{$:0,a:r}},Rf=u(function(r,n,t,e){for(;;){var u=t(n)(e);if(u.$)return a=u.a,s(Fo,r||a,u.b);var a=u.a,c=u.b,i=u.c;if(c.$)return l(Qo,r||a,c.a,i);r=r||a,n=c.a,t=t,e=i}}),Tf=t(function(r,n){return function(t){return b(Rf,!1,r,n,t)}}),Ef=t(function(r,n){var t=n;return function(n){var e=t(n);if(e.$)return s(Fo,e.a,e.b);var u=e.c;return l(Qo,e.a,r(e.b),u)}}),Df=function(r){return r.$?{$:1,a:r.a}:{$:0,a:r.a}},Cf=t(function(r,n){return s(Tf,r,function(r){return s(Ef,Df,n(r))})}),Nf=t(function(r,n){return{$:2,a:r,b:n}}),Vf=e(function(r,n,t){r:for(;;){if(t.b){var e=t.b,u=(0,t.a)(r);if(u.$){var a;if((a=u).a)return a;r=r,n=s(Nf,n,a.b),t=e;continue r}return u}return s(Fo,!1,n)}}),zf=function(r){return function(n){return l(Vf,n,rf,r)}},Hf=function(r){return s(Cf,J,function(n){return zf(F([s(Ef,function(r){return _f(s(Tt,r,n))},r),hf(Lf(be(n)))]))})},Bf=s(Ef,pi,bf(sf(function(r){return!df(r)&&'"'!==r&&"'"!==r&&">"!==r&&"/"!==r&&"="!==r}))),Uf=uf(je(";")),Pf=_o(F([H("Aacute","Á"),H("aacute","á"),H("Abreve","Ă"),H("abreve","ă"),H("ac","∾"),H("acd","∿"),H("acE","∾̳"),H("Acirc","Â"),H("acirc","â"),H("acute","´"),H("Acy","А"),H("acy","а"),H("AElig","Æ"),H("aelig","æ"),H("af","⁡"),H("Afr","𝔄"),H("afr","𝔞"),H("Agrave","À"),H("agrave","à"),H("alefsym","ℵ"),H("aleph","ℵ"),H("Alpha","Α"),H("alpha","α"),H("Amacr","Ā"),H("amacr","ā"),H("amalg","⨿"),H("amp","&"),H("AMP","&"),H("andand","⩕"),H("And","⩓"),H("and","∧"),H("andd","⩜"),H("andslope","⩘"),H("andv","⩚"),H("ang","∠"),H("ange","⦤"),H("angle","∠"),H("angmsdaa","⦨"),H("angmsdab","⦩"),H("angmsdac","⦪"),H("angmsdad","⦫"),H("angmsdae","⦬"),H("angmsdaf","⦭"),H("angmsdag","⦮"),H("angmsdah","⦯"),H("angmsd","∡"),H("angrt","∟"),H("angrtvb","⊾"),H("angrtvbd","⦝"),H("angsph","∢"),H("angst","Å"),H("angzarr","⍼"),H("Aogon","Ą"),H("aogon","ą"),H("Aopf","𝔸"),H("aopf","𝕒"),H("apacir","⩯"),H("ap","≈"),H("apE","⩰"),H("ape","≊"),H("apid","≋"),H("apos","'"),H("ApplyFunction","⁡"),H("approx","≈"),H("approxeq","≊"),H("Aring","Å"),H("aring","å"),H("Ascr","𝒜"),H("ascr","𝒶"),H("Assign","≔"),H("ast","*"),H("asymp","≈"),H("asympeq","≍"),H("Atilde","Ã"),H("atilde","ã"),H("Auml","Ä"),H("auml","ä"),H("awconint","∳"),H("awint","⨑"),H("backcong","≌"),H("backepsilon","϶"),H("backprime","‵"),H("backsim","∽"),H("backsimeq","⋍"),H("Backslash","∖"),H("Barv","⫧"),H("barvee","⊽"),H("barwed","⌅"),H("Barwed","⌆"),H("barwedge","⌅"),H("bbrk","⎵"),H("bbrktbrk","⎶"),H("bcong","≌"),H("Bcy","Б"),H("bcy","б"),H("bdquo","„"),H("becaus","∵"),H("because","∵"),H("Because","∵"),H("bemptyv","⦰"),H("bepsi","϶"),H("bernou","ℬ"),H("Bernoullis","ℬ"),H("Beta","Β"),H("beta","β"),H("beth","ℶ"),H("between","≬"),H("Bfr","𝔅"),H("bfr","𝔟"),H("bigcap","⋂"),H("bigcirc","◯"),H("bigcup","⋃"),H("bigodot","⨀"),H("bigoplus","⨁"),H("bigotimes","⨂"),H("bigsqcup","⨆"),H("bigstar","★"),H("bigtriangledown","▽"),H("bigtriangleup","△"),H("biguplus","⨄"),H("bigvee","⋁"),H("bigwedge","⋀"),H("bkarow","⤍"),H("blacklozenge","⧫"),H("blacksquare","▪"),H("blacktriangle","▴"),H("blacktriangledown","▾"),H("blacktriangleleft","◂"),H("blacktriangleright","▸"),H("blank","␣"),H("blk12","▒"),H("blk14","░"),H("blk34","▓"),H("block","█"),H("bne","=⃥"),H("bnequiv","≡⃥"),H("bNot","⫭"),H("bnot","⌐"),H("Bopf","𝔹"),H("bopf","𝕓"),H("bot","⊥"),H("bottom","⊥"),H("bowtie","⋈"),H("boxbox","⧉"),H("boxdl","┐"),H("boxdL","╕"),H("boxDl","╖"),H("boxDL","╗"),H("boxdr","┌"),H("boxdR","╒"),H("boxDr","╓"),H("boxDR","╔"),H("boxh","─"),H("boxH","═"),H("boxhd","┬"),H("boxHd","╤"),H("boxhD","╥"),H("boxHD","╦"),H("boxhu","┴"),H("boxHu","╧"),H("boxhU","╨"),H("boxHU","╩"),H("boxminus","⊟"),H("boxplus","⊞"),H("boxtimes","⊠"),H("boxul","┘"),H("boxuL","╛"),H("boxUl","╜"),H("boxUL","╝"),H("boxur","└"),H("boxuR","╘"),H("boxUr","╙"),H("boxUR","╚"),H("boxv","│"),H("boxV","║"),H("boxvh","┼"),H("boxvH","╪"),H("boxVh","╫"),H("boxVH","╬"),H("boxvl","┤"),H("boxvL","╡"),H("boxVl","╢"),H("boxVL","╣"),H("boxvr","├"),H("boxvR","╞"),H("boxVr","╟"),H("boxVR","╠"),H("bprime","‵"),H("breve","˘"),H("Breve","˘"),H("brvbar","¦"),H("bscr","𝒷"),H("Bscr","ℬ"),H("bsemi","⁏"),H("bsim","∽"),H("bsime","⋍"),H("bsolb","⧅"),H("bsol","\\"),H("bsolhsub","⟈"),H("bull","•"),H("bullet","•"),H("bump","≎"),H("bumpE","⪮"),H("bumpe","≏"),H("Bumpeq","≎"),H("bumpeq","≏"),H("Cacute","Ć"),H("cacute","ć"),H("capand","⩄"),H("capbrcup","⩉"),H("capcap","⩋"),H("cap","∩"),H("Cap","⋒"),H("capcup","⩇"),H("capdot","⩀"),H("CapitalDifferentialD","ⅅ"),H("caps","∩︀"),H("caret","⁁"),H("caron","ˇ"),H("Cayleys","ℭ"),H("ccaps","⩍"),H("Ccaron","Č"),H("ccaron","č"),H("Ccedil","Ç"),H("ccedil","ç"),H("Ccirc","Ĉ"),H("ccirc","ĉ"),H("Cconint","∰"),H("ccups","⩌"),H("ccupssm","⩐"),H("Cdot","Ċ"),H("cdot","ċ"),H("cedil","¸"),H("Cedilla","¸"),H("cemptyv","⦲"),H("cent","¢"),H("centerdot","·"),H("CenterDot","·"),H("cfr","𝔠"),H("Cfr","ℭ"),H("CHcy","Ч"),H("chcy","ч"),H("check","✓"),H("checkmark","✓"),H("Chi","Χ"),H("chi","χ"),H("circ","ˆ"),H("circeq","≗"),H("circlearrowleft","↺"),H("circlearrowright","↻"),H("circledast","⊛"),H("circledcirc","⊚"),H("circleddash","⊝"),H("CircleDot","⊙"),H("circledR","®"),H("circledS","Ⓢ"),H("CircleMinus","⊖"),H("CirclePlus","⊕"),H("CircleTimes","⊗"),H("cir","○"),H("cirE","⧃"),H("cire","≗"),H("cirfnint","⨐"),H("cirmid","⫯"),H("cirscir","⧂"),H("ClockwiseContourIntegral","∲"),H("CloseCurlyDoubleQuote","”"),H("CloseCurlyQuote","’"),H("clubs","♣"),H("clubsuit","♣"),H("colon",":"),H("Colon","∷"),H("Colone","⩴"),H("colone","≔"),H("coloneq","≔"),H("comma",","),H("commat","@"),H("comp","∁"),H("compfn","∘"),H("complement","∁"),H("complexes","ℂ"),H("cong","≅"),H("congdot","⩭"),H("Congruent","≡"),H("conint","∮"),H("Conint","∯"),H("ContourIntegral","∮"),H("copf","𝕔"),H("Copf","ℂ"),H("coprod","∐"),H("Coproduct","∐"),H("copy","©"),H("COPY","©"),H("copysr","℗"),H("CounterClockwiseContourIntegral","∳"),H("crarr","↵"),H("cross","✗"),H("Cross","⨯"),H("Cscr","𝒞"),H("cscr","𝒸"),H("csub","⫏"),H("csube","⫑"),H("csup","⫐"),H("csupe","⫒"),H("ctdot","⋯"),H("cudarrl","⤸"),H("cudarrr","⤵"),H("cuepr","⋞"),H("cuesc","⋟"),H("cularr","↶"),H("cularrp","⤽"),H("cupbrcap","⩈"),H("cupcap","⩆"),H("CupCap","≍"),H("cup","∪"),H("Cup","⋓"),H("cupcup","⩊"),H("cupdot","⊍"),H("cupor","⩅"),H("cups","∪︀"),H("curarr","↷"),H("curarrm","⤼"),H("curlyeqprec","⋞"),H("curlyeqsucc","⋟"),H("curlyvee","⋎"),H("curlywedge","⋏"),H("curren","¤"),H("curvearrowleft","↶"),H("curvearrowright","↷"),H("cuvee","⋎"),H("cuwed","⋏"),H("cwconint","∲"),H("cwint","∱"),H("cylcty","⌭"),H("dagger","†"),H("Dagger","‡"),H("daleth","ℸ"),H("darr","↓"),H("Darr","↡"),H("dArr","⇓"),H("dash","‐"),H("Dashv","⫤"),H("dashv","⊣"),H("dbkarow","⤏"),H("dblac","˝"),H("Dcaron","Ď"),H("dcaron","ď"),H("Dcy","Д"),H("dcy","д"),H("ddagger","‡"),H("ddarr","⇊"),H("DD","ⅅ"),H("dd","ⅆ"),H("DDotrahd","⤑"),H("ddotseq","⩷"),H("deg","°"),H("Del","∇"),H("Delta","Δ"),H("delta","δ"),H("demptyv","⦱"),H("dfisht","⥿"),H("Dfr","𝔇"),H("dfr","𝔡"),H("dHar","⥥"),H("dharl","⇃"),H("dharr","⇂"),H("DiacriticalAcute","´"),H("DiacriticalDot","˙"),H("DiacriticalDoubleAcute","˝"),H("DiacriticalGrave","`"),H("DiacriticalTilde","˜"),H("diam","⋄"),H("diamond","⋄"),H("Diamond","⋄"),H("diamondsuit","♦"),H("diams","♦"),H("die","¨"),H("DifferentialD","ⅆ"),H("digamma","ϝ"),H("disin","⋲"),H("div","÷"),H("divide","÷"),H("divideontimes","⋇"),H("divonx","⋇"),H("DJcy","Ђ"),H("djcy","ђ"),H("dlcorn","⌞"),H("dlcrop","⌍"),H("dollar","$"),H("Dopf","𝔻"),H("dopf","𝕕"),H("Dot","¨"),H("dot","˙"),H("DotDot","⃜"),H("doteq","≐"),H("doteqdot","≑"),H("DotEqual","≐"),H("dotminus","∸"),H("dotplus","∔"),H("dotsquare","⊡"),H("doublebarwedge","⌆"),H("DoubleContourIntegral","∯"),H("DoubleDot","¨"),H("DoubleDownArrow","⇓"),H("DoubleLeftArrow","⇐"),H("DoubleLeftRightArrow","⇔"),H("DoubleLeftTee","⫤"),H("DoubleLongLeftArrow","⟸"),H("DoubleLongLeftRightArrow","⟺"),H("DoubleLongRightArrow","⟹"),H("DoubleRightArrow","⇒"),H("DoubleRightTee","⊨"),H("DoubleUpArrow","⇑"),H("DoubleUpDownArrow","⇕"),H("DoubleVerticalBar","∥"),H("DownArrowBar","⤓"),H("downarrow","↓"),H("DownArrow","↓"),H("Downarrow","⇓"),H("DownArrowUpArrow","⇵"),H("DownBreve","̑"),H("downdownarrows","⇊"),H("downharpoonleft","⇃"),H("downharpoonright","⇂"),H("DownLeftRightVector","⥐"),H("DownLeftTeeVector","⥞"),H("DownLeftVectorBar","⥖"),H("DownLeftVector","↽"),H("DownRightTeeVector","⥟"),H("DownRightVectorBar","⥗"),H("DownRightVector","⇁"),H("DownTeeArrow","↧"),H("DownTee","⊤"),H("drbkarow","⤐"),H("drcorn","⌟"),H("drcrop","⌌"),H("Dscr","𝒟"),H("dscr","𝒹"),H("DScy","Ѕ"),H("dscy","ѕ"),H("dsol","⧶"),H("Dstrok","Đ"),H("dstrok","đ"),H("dtdot","⋱"),H("dtri","▿"),H("dtrif","▾"),H("duarr","⇵"),H("duhar","⥯"),H("dwangle","⦦"),H("DZcy","Џ"),H("dzcy","џ"),H("dzigrarr","⟿"),H("Eacute","É"),H("eacute","é"),H("easter","⩮"),H("Ecaron","Ě"),H("ecaron","ě"),H("Ecirc","Ê"),H("ecirc","ê"),H("ecir","≖"),H("ecolon","≕"),H("Ecy","Э"),H("ecy","э"),H("eDDot","⩷"),H("Edot","Ė"),H("edot","ė"),H("eDot","≑"),H("ee","ⅇ"),H("efDot","≒"),H("Efr","𝔈"),H("efr","𝔢"),H("eg","⪚"),H("Egrave","È"),H("egrave","è"),H("egs","⪖"),H("egsdot","⪘"),H("el","⪙"),H("Element","∈"),H("elinters","⏧"),H("ell","ℓ"),H("els","⪕"),H("elsdot","⪗"),H("Emacr","Ē"),H("emacr","ē"),H("empty","∅"),H("emptyset","∅"),H("EmptySmallSquare","◻"),H("emptyv","∅"),H("EmptyVerySmallSquare","▫"),H("emsp13"," "),H("emsp14"," "),H("emsp"," "),H("ENG","Ŋ"),H("eng","ŋ"),H("ensp"," "),H("Eogon","Ę"),H("eogon","ę"),H("Eopf","𝔼"),H("eopf","𝕖"),H("epar","⋕"),H("eparsl","⧣"),H("eplus","⩱"),H("epsi","ε"),H("Epsilon","Ε"),H("epsilon","ε"),H("epsiv","ϵ"),H("eqcirc","≖"),H("eqcolon","≕"),H("eqsim","≂"),H("eqslantgtr","⪖"),H("eqslantless","⪕"),H("Equal","⩵"),H("equals","="),H("EqualTilde","≂"),H("equest","≟"),H("Equilibrium","⇌"),H("equiv","≡"),H("equivDD","⩸"),H("eqvparsl","⧥"),H("erarr","⥱"),H("erDot","≓"),H("escr","ℯ"),H("Escr","ℰ"),H("esdot","≐"),H("Esim","⩳"),H("esim","≂"),H("Eta","Η"),H("eta","η"),H("ETH","Ð"),H("eth","ð"),H("Euml","Ë"),H("euml","ë"),H("euro","€"),H("excl","!"),H("exist","∃"),H("Exists","∃"),H("expectation","ℰ"),H("exponentiale","ⅇ"),H("ExponentialE","ⅇ"),H("fallingdotseq","≒"),H("Fcy","Ф"),H("fcy","ф"),H("female","♀"),H("ffilig","ﬃ"),H("fflig","ﬀ"),H("ffllig","ﬄ"),H("Ffr","𝔉"),H("ffr","𝔣"),H("filig","ﬁ"),H("FilledSmallSquare","◼"),H("FilledVerySmallSquare","▪"),H("fjlig","fj"),H("flat","♭"),H("fllig","ﬂ"),H("fltns","▱"),H("fnof","ƒ"),H("Fopf","𝔽"),H("fopf","𝕗"),H("forall","∀"),H("ForAll","∀"),H("fork","⋔"),H("forkv","⫙"),H("Fouriertrf","ℱ"),H("fpartint","⨍"),H("frac12","½"),H("frac13","⅓"),H("frac14","¼"),H("frac15","⅕"),H("frac16","⅙"),H("frac18","⅛"),H("frac23","⅔"),H("frac25","⅖"),H("frac34","¾"),H("frac35","⅗"),H("frac38","⅜"),H("frac45","⅘"),H("frac56","⅚"),H("frac58","⅝"),H("frac78","⅞"),H("frasl","⁄"),H("frown","⌢"),H("fscr","𝒻"),H("Fscr","ℱ"),H("gacute","ǵ"),H("Gamma","Γ"),H("gamma","γ"),H("Gammad","Ϝ"),H("gammad","ϝ"),H("gap","⪆"),H("Gbreve","Ğ"),H("gbreve","ğ"),H("Gcedil","Ģ"),H("Gcirc","Ĝ"),H("gcirc","ĝ"),H("Gcy","Г"),H("gcy","г"),H("Gdot","Ġ"),H("gdot","ġ"),H("ge","≥"),H("gE","≧"),H("gEl","⪌"),H("gel","⋛"),H("geq","≥"),H("geqq","≧"),H("geqslant","⩾"),H("gescc","⪩"),H("ges","⩾"),H("gesdot","⪀"),H("gesdoto","⪂"),H("gesdotol","⪄"),H("gesl","⋛︀"),H("gesles","⪔"),H("Gfr","𝔊"),H("gfr","𝔤"),H("gg","≫"),H("Gg","⋙"),H("ggg","⋙"),H("gimel","ℷ"),H("GJcy","Ѓ"),H("gjcy","ѓ"),H("gla","⪥"),H("gl","≷"),H("glE","⪒"),H("glj","⪤"),H("gnap","⪊"),H("gnapprox","⪊"),H("gne","⪈"),H("gnE","≩"),H("gneq","⪈"),H("gneqq","≩"),H("gnsim","⋧"),H("Gopf","𝔾"),H("gopf","𝕘"),H("grave","`"),H("GreaterEqual","≥"),H("GreaterEqualLess","⋛"),H("GreaterFullEqual","≧"),H("GreaterGreater","⪢"),H("GreaterLess","≷"),H("GreaterSlantEqual","⩾"),H("GreaterTilde","≳"),H("Gscr","𝒢"),H("gscr","ℊ"),H("gsim","≳"),H("gsime","⪎"),H("gsiml","⪐"),H("gtcc","⪧"),H("gtcir","⩺"),H("gt",">"),H("GT",">"),H("Gt","≫"),H("gtdot","⋗"),H("gtlPar","⦕"),H("gtquest","⩼"),H("gtrapprox","⪆"),H("gtrarr","⥸"),H("gtrdot","⋗"),H("gtreqless","⋛"),H("gtreqqless","⪌"),H("gtrless","≷"),H("gtrsim","≳"),H("gvertneqq","≩︀"),H("gvnE","≩︀"),H("Hacek","ˇ"),H("hairsp"," "),H("half","½"),H("hamilt","ℋ"),H("HARDcy","Ъ"),H("hardcy","ъ"),H("harrcir","⥈"),H("harr","↔"),H("hArr","⇔"),H("harrw","↭"),H("Hat","^"),H("hbar","ℏ"),H("Hcirc","Ĥ"),H("hcirc","ĥ"),H("hearts","♥"),H("heartsuit","♥"),H("hellip","…"),H("hercon","⊹"),H("hfr","𝔥"),H("Hfr","ℌ"),H("HilbertSpace","ℋ"),H("hksearow","⤥"),H("hkswarow","⤦"),H("hoarr","⇿"),H("homtht","∻"),H("hookleftarrow","↩"),H("hookrightarrow","↪"),H("hopf","𝕙"),H("Hopf","ℍ"),H("horbar","―"),H("HorizontalLine","─"),H("hscr","𝒽"),H("Hscr","ℋ"),H("hslash","ℏ"),H("Hstrok","Ħ"),H("hstrok","ħ"),H("HumpDownHump","≎"),H("HumpEqual","≏"),H("hybull","⁃"),H("hyphen","‐"),H("Iacute","Í"),H("iacute","í"),H("ic","⁣"),H("Icirc","Î"),H("icirc","î"),H("Icy","И"),H("icy","и"),H("Idot","İ"),H("IEcy","Е"),H("iecy","е"),H("iexcl","¡"),H("iff","⇔"),H("ifr","𝔦"),H("Ifr","ℑ"),H("Igrave","Ì"),H("igrave","ì"),H("ii","ⅈ"),H("iiiint","⨌"),H("iiint","∭"),H("iinfin","⧜"),H("iiota","℩"),H("IJlig","Ĳ"),H("ijlig","ĳ"),H("Imacr","Ī"),H("imacr","ī"),H("image","ℑ"),H("ImaginaryI","ⅈ"),H("imagline","ℐ"),H("imagpart","ℑ"),H("imath","ı"),H("Im","ℑ"),H("imof","⊷"),H("imped","Ƶ"),H("Implies","⇒"),H("incare","℅"),H("in","∈"),H("infin","∞"),H("infintie","⧝"),H("inodot","ı"),H("intcal","⊺"),H("int","∫"),H("Int","∬"),H("integers","ℤ"),H("Integral","∫"),H("intercal","⊺"),H("Intersection","⋂"),H("intlarhk","⨗"),H("intprod","⨼"),H("InvisibleComma","⁣"),H("InvisibleTimes","⁢"),H("IOcy","Ё"),H("iocy","ё"),H("Iogon","Į"),H("iogon","į"),H("Iopf","𝕀"),H("iopf","𝕚"),H("Iota","Ι"),H("iota","ι"),H("iprod","⨼"),H("iquest","¿"),H("iscr","𝒾"),H("Iscr","ℐ"),H("isin","∈"),H("isindot","⋵"),H("isinE","⋹"),H("isins","⋴"),H("isinsv","⋳"),H("isinv","∈"),H("it","⁢"),H("Itilde","Ĩ"),H("itilde","ĩ"),H("Iukcy","І"),H("iukcy","і"),H("Iuml","Ï"),H("iuml","ï"),H("Jcirc","Ĵ"),H("jcirc","ĵ"),H("Jcy","Й"),H("jcy","й"),H("Jfr","𝔍"),H("jfr","𝔧"),H("jmath","ȷ"),H("Jopf","𝕁"),H("jopf","𝕛"),H("Jscr","𝒥"),H("jscr","𝒿"),H("Jsercy","Ј"),H("jsercy","ј"),H("Jukcy","Є"),H("jukcy","є"),H("Kappa","Κ"),H("kappa","κ"),H("kappav","ϰ"),H("Kcedil","Ķ"),H("kcedil","ķ"),H("Kcy","К"),H("kcy","к"),H("Kfr","𝔎"),H("kfr","𝔨"),H("kgreen","ĸ"),H("KHcy","Х"),H("khcy","х"),H("KJcy","Ќ"),H("kjcy","ќ"),H("Kopf","𝕂"),H("kopf","𝕜"),H("Kscr","𝒦"),H("kscr","𝓀"),H("lAarr","⇚"),H("Lacute","Ĺ"),H("lacute","ĺ"),H("laemptyv","⦴"),H("lagran","ℒ"),H("Lambda","Λ"),H("lambda","λ"),H("lang","⟨"),H("Lang","⟪"),H("langd","⦑"),H("langle","⟨"),H("lap","⪅"),H("Laplacetrf","ℒ"),H("laquo","«"),H("larrb","⇤"),H("larrbfs","⤟"),H("larr","←"),H("Larr","↞"),H("lArr","⇐"),H("larrfs","⤝"),H("larrhk","↩"),H("larrlp","↫"),H("larrpl","⤹"),H("larrsim","⥳"),H("larrtl","↢"),H("latail","⤙"),H("lAtail","⤛"),H("lat","⪫"),H("late","⪭"),H("lates","⪭︀"),H("lbarr","⤌"),H("lBarr","⤎"),H("lbbrk","❲"),H("lbrace","{"),H("lbrack","["),H("lbrke","⦋"),H("lbrksld","⦏"),H("lbrkslu","⦍"),H("Lcaron","Ľ"),H("lcaron","ľ"),H("Lcedil","Ļ"),H("lcedil","ļ"),H("lceil","⌈"),H("lcub","{"),H("Lcy","Л"),H("lcy","л"),H("ldca","⤶"),H("ldquo","“"),H("ldquor","„"),H("ldrdhar","⥧"),H("ldrushar","⥋"),H("ldsh","↲"),H("le","≤"),H("lE","≦"),H("LeftAngleBracket","⟨"),H("LeftArrowBar","⇤"),H("leftarrow","←"),H("LeftArrow","←"),H("Leftarrow","⇐"),H("LeftArrowRightArrow","⇆"),H("leftarrowtail","↢"),H("LeftCeiling","⌈"),H("LeftDoubleBracket","⟦"),H("LeftDownTeeVector","⥡"),H("LeftDownVectorBar","⥙"),H("LeftDownVector","⇃"),H("LeftFloor","⌊"),H("leftharpoondown","↽"),H("leftharpoonup","↼"),H("leftleftarrows","⇇"),H("leftrightarrow","↔"),H("LeftRightArrow","↔"),H("Leftrightarrow","⇔"),H("leftrightarrows","⇆"),H("leftrightharpoons","⇋"),H("leftrightsquigarrow","↭"),H("LeftRightVector","⥎"),H("LeftTeeArrow","↤"),H("LeftTee","⊣"),H("LeftTeeVector","⥚"),H("leftthreetimes","⋋"),H("LeftTriangleBar","⧏"),H("LeftTriangle","⊲"),H("LeftTriangleEqual","⊴"),H("LeftUpDownVector","⥑"),H("LeftUpTeeVector","⥠"),H("LeftUpVectorBar","⥘"),H("LeftUpVector","↿"),H("LeftVectorBar","⥒"),H("LeftVector","↼"),H("lEg","⪋"),H("leg","⋚"),H("leq","≤"),H("leqq","≦"),H("leqslant","⩽"),H("lescc","⪨"),H("les","⩽"),H("lesdot","⩿"),H("lesdoto","⪁"),H("lesdotor","⪃"),H("lesg","⋚︀"),H("lesges","⪓"),H("lessapprox","⪅"),H("lessdot","⋖"),H("lesseqgtr","⋚"),H("lesseqqgtr","⪋"),H("LessEqualGreater","⋚"),H("LessFullEqual","≦"),H("LessGreater","≶"),H("lessgtr","≶"),H("LessLess","⪡"),H("lesssim","≲"),H("LessSlantEqual","⩽"),H("LessTilde","≲"),H("lfisht","⥼"),H("lfloor","⌊"),H("Lfr","𝔏"),H("lfr","𝔩"),H("lg","≶"),H("lgE","⪑"),H("lHar","⥢"),H("lhard","↽"),H("lharu","↼"),H("lharul","⥪"),H("lhblk","▄"),H("LJcy","Љ"),H("ljcy","љ"),H("llarr","⇇"),H("ll","≪"),H("Ll","⋘"),H("llcorner","⌞"),H("Lleftarrow","⇚"),H("llhard","⥫"),H("lltri","◺"),H("Lmidot","Ŀ"),H("lmidot","ŀ"),H("lmoustache","⎰"),H("lmoust","⎰"),H("lnap","⪉"),H("lnapprox","⪉"),H("lne","⪇"),H("lnE","≨"),H("lneq","⪇"),H("lneqq","≨"),H("lnsim","⋦"),H("loang","⟬"),H("loarr","⇽"),H("lobrk","⟦"),H("longleftarrow","⟵"),H("LongLeftArrow","⟵"),H("Longleftarrow","⟸"),H("longleftrightarrow","⟷"),H("LongLeftRightArrow","⟷"),H("Longleftrightarrow","⟺"),H("longmapsto","⟼"),H("longrightarrow","⟶"),H("LongRightArrow","⟶"),H("Longrightarrow","⟹"),H("looparrowleft","↫"),H("looparrowright","↬"),H("lopar","⦅"),H("Lopf","𝕃"),H("lopf","𝕝"),H("loplus","⨭"),H("lotimes","⨴"),H("lowast","∗"),H("lowbar","_"),H("LowerLeftArrow","↙"),H("LowerRightArrow","↘"),H("loz","◊"),H("lozenge","◊"),H("lozf","⧫"),H("lpar","("),H("lparlt","⦓"),H("lrarr","⇆"),H("lrcorner","⌟"),H("lrhar","⇋"),H("lrhard","⥭"),H("lrm","‎"),H("lrtri","⊿"),H("lsaquo","‹"),H("lscr","𝓁"),H("Lscr","ℒ"),H("lsh","↰"),H("Lsh","↰"),H("lsim","≲"),H("lsime","⪍"),H("lsimg","⪏"),H("lsqb","["),H("lsquo","‘"),H("lsquor","‚"),H("Lstrok","Ł"),H("lstrok","ł"),H("ltcc","⪦"),H("ltcir","⩹"),H("lt","<"),H("LT","<"),H("Lt","≪"),H("ltdot","⋖"),H("lthree","⋋"),H("ltimes","⋉"),H("ltlarr","⥶"),H("ltquest","⩻"),H("ltri","◃"),H("ltrie","⊴"),H("ltrif","◂"),H("ltrPar","⦖"),H("lurdshar","⥊"),H("luruhar","⥦"),H("lvertneqq","≨︀"),H("lvnE","≨︀"),H("macr","¯"),H("male","♂"),H("malt","✠"),H("maltese","✠"),H("Map","⤅"),H("map","↦"),H("mapsto","↦"),H("mapstodown","↧"),H("mapstoleft","↤"),H("mapstoup","↥"),H("marker","▮"),H("mcomma","⨩"),H("Mcy","М"),H("mcy","м"),H("mdash","—"),H("mDDot","∺"),H("measuredangle","∡"),H("MediumSpace"," "),H("Mellintrf","ℳ"),H("Mfr","𝔐"),H("mfr","𝔪"),H("mho","℧"),H("micro","µ"),H("midast","*"),H("midcir","⫰"),H("mid","∣"),H("middot","·"),H("minusb","⊟"),H("minus","−"),H("minusd","∸"),H("minusdu","⨪"),H("MinusPlus","∓"),H("mlcp","⫛"),H("mldr","…"),H("mnplus","∓"),H("models","⊧"),H("Mopf","𝕄"),H("mopf","𝕞"),H("mp","∓"),H("mscr","𝓂"),H("Mscr","ℳ"),H("mstpos","∾"),H("Mu","Μ"),H("mu","μ"),H("multimap","⊸"),H("mumap","⊸"),H("nabla","∇"),H("Nacute","Ń"),H("nacute","ń"),H("nang","∠⃒"),H("nap","≉"),H("napE","⩰̸"),H("napid","≋̸"),H("napos","ŉ"),H("napprox","≉"),H("natural","♮"),H("naturals","ℕ"),H("natur","♮"),H("nbsp"," "),H("nbump","≎̸"),H("nbumpe","≏̸"),H("ncap","⩃"),H("Ncaron","Ň"),H("ncaron","ň"),H("Ncedil","Ņ"),H("ncedil","ņ"),H("ncong","≇"),H("ncongdot","⩭̸"),H("ncup","⩂"),H("Ncy","Н"),H("ncy","н"),H("ndash","–"),H("nearhk","⤤"),H("nearr","↗"),H("neArr","⇗"),H("nearrow","↗"),H("ne","≠"),H("nedot","≐̸"),H("NegativeMediumSpace","​"),H("NegativeThickSpace","​"),H("NegativeThinSpace","​"),H("NegativeVeryThinSpace","​"),H("nequiv","≢"),H("nesear","⤨"),H("nesim","≂̸"),H("NestedGreaterGreater","≫"),H("NestedLessLess","≪"),H("NewLine","\n"),H("nexist","∄"),H("nexists","∄"),H("Nfr","𝔑"),H("nfr","𝔫"),H("ngE","≧̸"),H("nge","≱"),H("ngeq","≱"),H("ngeqq","≧̸"),H("ngeqslant","⩾̸"),H("nges","⩾̸"),H("nGg","⋙̸"),H("ngsim","≵"),H("nGt","≫⃒"),H("ngt","≯"),H("ngtr","≯"),H("nGtv","≫̸"),H("nharr","↮"),H("nhArr","⇎"),H("nhpar","⫲"),H("ni","∋"),H("nis","⋼"),H("nisd","⋺"),H("niv","∋"),H("NJcy","Њ"),H("njcy","њ"),H("nlarr","↚"),H("nlArr","⇍"),H("nldr","‥"),H("nlE","≦̸"),H("nle","≰"),H("nleftarrow","↚"),H("nLeftarrow","⇍"),H("nleftrightarrow","↮"),H("nLeftrightarrow","⇎"),H("nleq","≰"),H("nleqq","≦̸"),H("nleqslant","⩽̸"),H("nles","⩽̸"),H("nless","≮"),H("nLl","⋘̸"),H("nlsim","≴"),H("nLt","≪⃒"),H("nlt","≮"),H("nltri","⋪"),H("nltrie","⋬"),H("nLtv","≪̸"),H("nmid","∤"),H("NoBreak","⁠"),H("NonBreakingSpace"," "),H("nopf","𝕟"),H("Nopf","ℕ"),H("Not","⫬"),H("not","¬"),H("NotCongruent","≢"),H("NotCupCap","≭"),H("NotDoubleVerticalBar","∦"),H("NotElement","∉"),H("NotEqual","≠"),H("NotEqualTilde","≂̸"),H("NotExists","∄"),H("NotGreater","≯"),H("NotGreaterEqual","≱"),H("NotGreaterFullEqual","≧̸"),H("NotGreaterGreater","≫̸"),H("NotGreaterLess","≹"),H("NotGreaterSlantEqual","⩾̸"),H("NotGreaterTilde","≵"),H("NotHumpDownHump","≎̸"),H("NotHumpEqual","≏̸"),H("notin","∉"),H("notindot","⋵̸"),H("notinE","⋹̸"),H("notinva","∉"),H("notinvb","⋷"),H("notinvc","⋶"),H("NotLeftTriangleBar","⧏̸"),H("NotLeftTriangle","⋪"),H("NotLeftTriangleEqual","⋬"),H("NotLess","≮"),H("NotLessEqual","≰"),H("NotLessGreater","≸"),H("NotLessLess","≪̸"),H("NotLessSlantEqual","⩽̸"),H("NotLessTilde","≴"),H("NotNestedGreaterGreater","⪢̸"),H("NotNestedLessLess","⪡̸"),H("notni","∌"),H("notniva","∌"),H("notnivb","⋾"),H("notnivc","⋽"),H("NotPrecedes","⊀"),H("NotPrecedesEqual","⪯̸"),H("NotPrecedesSlantEqual","⋠"),H("NotReverseElement","∌"),H("NotRightTriangleBar","⧐̸"),H("NotRightTriangle","⋫"),H("NotRightTriangleEqual","⋭"),H("NotSquareSubset","⊏̸"),H("NotSquareSubsetEqual","⋢"),H("NotSquareSuperset","⊐̸"),H("NotSquareSupersetEqual","⋣"),H("NotSubset","⊂⃒"),H("NotSubsetEqual","⊈"),H("NotSucceeds","⊁"),H("NotSucceedsEqual","⪰̸"),H("NotSucceedsSlantEqual","⋡"),H("NotSucceedsTilde","≿̸"),H("NotSuperset","⊃⃒"),H("NotSupersetEqual","⊉"),H("NotTilde","≁"),H("NotTildeEqual","≄"),H("NotTildeFullEqual","≇"),H("NotTildeTilde","≉"),H("NotVerticalBar","∤"),H("nparallel","∦"),H("npar","∦"),H("nparsl","⫽⃥"),H("npart","∂̸"),H("npolint","⨔"),H("npr","⊀"),H("nprcue","⋠"),H("nprec","⊀"),H("npreceq","⪯̸"),H("npre","⪯̸"),H("nrarrc","⤳̸"),H("nrarr","↛"),H("nrArr","⇏"),H("nrarrw","↝̸"),H("nrightarrow","↛"),H("nRightarrow","⇏"),H("nrtri","⋫"),H("nrtrie","⋭"),H("nsc","⊁"),H("nsccue","⋡"),H("nsce","⪰̸"),H("Nscr","𝒩"),H("nscr","𝓃"),H("nshortmid","∤"),H("nshortparallel","∦"),H("nsim","≁"),H("nsime","≄"),H("nsimeq","≄"),H("nsmid","∤"),H("nspar","∦"),H("nsqsube","⋢"),H("nsqsupe","⋣"),H("nsub","⊄"),H("nsubE","⫅̸"),H("nsube","⊈"),H("nsubset","⊂⃒"),H("nsubseteq","⊈"),H("nsubseteqq","⫅̸"),H("nsucc","⊁"),H("nsucceq","⪰̸"),H("nsup","⊅"),H("nsupE","⫆̸"),H("nsupe","⊉"),H("nsupset","⊃⃒"),H("nsupseteq","⊉"),H("nsupseteqq","⫆̸"),H("ntgl","≹"),H("Ntilde","Ñ"),H("ntilde","ñ"),H("ntlg","≸"),H("ntriangleleft","⋪"),H("ntrianglelefteq","⋬"),H("ntriangleright","⋫"),H("ntrianglerighteq","⋭"),H("Nu","Ν"),H("nu","ν"),H("num","#"),H("numero","№"),H("numsp"," "),H("nvap","≍⃒"),H("nvdash","⊬"),H("nvDash","⊭"),H("nVdash","⊮"),H("nVDash","⊯"),H("nvge","≥⃒"),H("nvgt",">⃒"),H("nvHarr","⤄"),H("nvinfin","⧞"),H("nvlArr","⤂"),H("nvle","≤⃒"),H("nvlt","<⃒"),H("nvltrie","⊴⃒"),H("nvrArr","⤃"),H("nvrtrie","⊵⃒"),H("nvsim","∼⃒"),H("nwarhk","⤣"),H("nwarr","↖"),H("nwArr","⇖"),H("nwarrow","↖"),H("nwnear","⤧"),H("Oacute","Ó"),H("oacute","ó"),H("oast","⊛"),H("Ocirc","Ô"),H("ocirc","ô"),H("ocir","⊚"),H("Ocy","О"),H("ocy","о"),H("odash","⊝"),H("Odblac","Ő"),H("odblac","ő"),H("odiv","⨸"),H("odot","⊙"),H("odsold","⦼"),H("OElig","Œ"),H("oelig","œ"),H("ofcir","⦿"),H("Ofr","𝔒"),H("ofr","𝔬"),H("ogon","˛"),H("Ograve","Ò"),H("ograve","ò"),H("ogt","⧁"),H("ohbar","⦵"),H("ohm","Ω"),H("oint","∮"),H("olarr","↺"),H("olcir","⦾"),H("olcross","⦻"),H("oline","‾"),H("olt","⧀"),H("Omacr","Ō"),H("omacr","ō"),H("Omega","Ω"),H("omega","ω"),H("Omicron","Ο"),H("omicron","ο"),H("omid","⦶"),H("ominus","⊖"),H("Oopf","𝕆"),H("oopf","𝕠"),H("opar","⦷"),H("OpenCurlyDoubleQuote","“"),H("OpenCurlyQuote","‘"),H("operp","⦹"),H("oplus","⊕"),H("orarr","↻"),H("Or","⩔"),H("or","∨"),H("ord","⩝"),H("order","ℴ"),H("orderof","ℴ"),H("ordf","ª"),H("ordm","º"),H("origof","⊶"),H("oror","⩖"),H("orslope","⩗"),H("orv","⩛"),H("oS","Ⓢ"),H("Oscr","𝒪"),H("oscr","ℴ"),H("Oslash","Ø"),H("oslash","ø"),H("osol","⊘"),H("Otilde","Õ"),H("otilde","õ"),H("otimesas","⨶"),H("Otimes","⨷"),H("otimes","⊗"),H("Ouml","Ö"),H("ouml","ö"),H("ovbar","⌽"),H("OverBar","‾"),H("OverBrace","⏞"),H("OverBracket","⎴"),H("OverParenthesis","⏜"),H("para","¶"),H("parallel","∥"),H("par","∥"),H("parsim","⫳"),H("parsl","⫽"),H("part","∂"),H("PartialD","∂"),H("Pcy","П"),H("pcy","п"),H("percnt","%"),H("period","."),H("permil","‰"),H("perp","⊥"),H("pertenk","‱"),H("Pfr","𝔓"),H("pfr","𝔭"),H("Phi","Φ"),H("phi","φ"),H("phiv","ϕ"),H("phmmat","ℳ"),H("phone","☎"),H("Pi","Π"),H("pi","π"),H("pitchfork","⋔"),H("piv","ϖ"),H("planck","ℏ"),H("planckh","ℎ"),H("plankv","ℏ"),H("plusacir","⨣"),H("plusb","⊞"),H("pluscir","⨢"),H("plus","+"),H("plusdo","∔"),H("plusdu","⨥"),H("pluse","⩲"),H("PlusMinus","±"),H("plusmn","±"),H("plussim","⨦"),H("plustwo","⨧"),H("pm","±"),H("Poincareplane","ℌ"),H("pointint","⨕"),H("popf","𝕡"),H("Popf","ℙ"),H("pound","£"),H("prap","⪷"),H("Pr","⪻"),H("pr","≺"),H("prcue","≼"),H("precapprox","⪷"),H("prec","≺"),H("preccurlyeq","≼"),H("Precedes","≺"),H("PrecedesEqual","⪯"),H("PrecedesSlantEqual","≼"),H("PrecedesTilde","≾"),H("preceq","⪯"),H("precnapprox","⪹"),H("precneqq","⪵"),H("precnsim","⋨"),H("pre","⪯"),H("prE","⪳"),H("precsim","≾"),H("prime","′"),H("Prime","″"),H("primes","ℙ"),H("prnap","⪹"),H("prnE","⪵"),H("prnsim","⋨"),H("prod","∏"),H("Product","∏"),H("profalar","⌮"),H("profline","⌒"),H("profsurf","⌓"),H("prop","∝"),H("Proportional","∝"),H("Proportion","∷"),H("propto","∝"),H("prsim","≾"),H("prurel","⊰"),H("Pscr","𝒫"),H("pscr","𝓅"),H("Psi","Ψ"),H("psi","ψ"),H("puncsp"," "),H("Qfr","𝔔"),H("qfr","𝔮"),H("qint","⨌"),H("qopf","𝕢"),H("Qopf","ℚ"),H("qprime","⁗"),H("Qscr","𝒬"),H("qscr","𝓆"),H("quaternions","ℍ"),H("quatint","⨖"),H("quest","?"),H("questeq","≟"),H("quot",'"'),H("QUOT",'"'),H("rAarr","⇛"),H("race","∽̱"),H("Racute","Ŕ"),H("racute","ŕ"),H("radic","√"),H("raemptyv","⦳"),H("rang","⟩"),H("Rang","⟫"),H("rangd","⦒"),H("range","⦥"),H("rangle","⟩"),H("raquo","»"),H("rarrap","⥵"),H("rarrb","⇥"),H("rarrbfs","⤠"),H("rarrc","⤳"),H("rarr","→"),H("Rarr","↠"),H("rArr","⇒"),H("rarrfs","⤞"),H("rarrhk","↪"),H("rarrlp","↬"),H("rarrpl","⥅"),H("rarrsim","⥴"),H("Rarrtl","⤖"),H("rarrtl","↣"),H("rarrw","↝"),H("ratail","⤚"),H("rAtail","⤜"),H("ratio","∶"),H("rationals","ℚ"),H("rbarr","⤍"),H("rBarr","⤏"),H("RBarr","⤐"),H("rbbrk","❳"),H("rbrace","}"),H("rbrack","]"),H("rbrke","⦌"),H("rbrksld","⦎"),H("rbrkslu","⦐"),H("Rcaron","Ř"),H("rcaron","ř"),H("Rcedil","Ŗ"),H("rcedil","ŗ"),H("rceil","⌉"),H("rcub","}"),H("Rcy","Р"),H("rcy","р"),H("rdca","⤷"),H("rdldhar","⥩"),H("rdquo","”"),H("rdquor","”"),H("rdsh","↳"),H("real","ℜ"),H("realine","ℛ"),H("realpart","ℜ"),H("reals","ℝ"),H("Re","ℜ"),H("rect","▭"),H("reg","®"),H("REG","®"),H("ReverseElement","∋"),H("ReverseEquilibrium","⇋"),H("ReverseUpEquilibrium","⥯"),H("rfisht","⥽"),H("rfloor","⌋"),H("rfr","𝔯"),H("Rfr","ℜ"),H("rHar","⥤"),H("rhard","⇁"),H("rharu","⇀"),H("rharul","⥬"),H("Rho","Ρ"),H("rho","ρ"),H("rhov","ϱ"),H("RightAngleBracket","⟩"),H("RightArrowBar","⇥"),H("rightarrow","→"),H("RightArrow","→"),H("Rightarrow","⇒"),H("RightArrowLeftArrow","⇄"),H("rightarrowtail","↣"),H("RightCeiling","⌉"),H("RightDoubleBracket","⟧"),H("RightDownTeeVector","⥝"),H("RightDownVectorBar","⥕"),H("RightDownVector","⇂"),H("RightFloor","⌋"),H("rightharpoondown","⇁"),H("rightharpoonup","⇀"),H("rightleftarrows","⇄"),H("rightleftharpoons","⇌"),H("rightrightarrows","⇉"),H("rightsquigarrow","↝"),H("RightTeeArrow","↦"),H("RightTee","⊢"),H("RightTeeVector","⥛"),H("rightthreetimes","⋌"),H("RightTriangleBar","⧐"),H("RightTriangle","⊳"),H("RightTriangleEqual","⊵"),H("RightUpDownVector","⥏"),H("RightUpTeeVector","⥜"),H("RightUpVectorBar","⥔"),H("RightUpVector","↾"),H("RightVectorBar","⥓"),H("RightVector","⇀"),H("ring","˚"),H("risingdotseq","≓"),H("rlarr","⇄"),H("rlhar","⇌"),H("rlm","‏"),H("rmoustache","⎱"),H("rmoust","⎱"),H("rnmid","⫮"),H("roang","⟭"),H("roarr","⇾"),H("robrk","⟧"),H("ropar","⦆"),H("ropf","𝕣"),H("Ropf","ℝ"),H("roplus","⨮"),H("rotimes","⨵"),H("RoundImplies","⥰"),H("rpar",")"),H("rpargt","⦔"),H("rppolint","⨒"),H("rrarr","⇉"),H("Rrightarrow","⇛"),H("rsaquo","›"),H("rscr","𝓇"),H("Rscr","ℛ"),H("rsh","↱"),H("Rsh","↱"),H("rsqb","]"),H("rsquo","’"),H("rsquor","’"),H("rthree","⋌"),H("rtimes","⋊"),H("rtri","▹"),H("rtrie","⊵"),H("rtrif","▸"),H("rtriltri","⧎"),H("RuleDelayed","⧴"),H("ruluhar","⥨"),H("rx","℞"),H("Sacute","Ś"),H("sacute","ś"),H("sbquo","‚"),H("scap","⪸"),H("Scaron","Š"),H("scaron","š"),H("Sc","⪼"),H("sc","≻"),H("sccue","≽"),H("sce","⪰"),H("scE","⪴"),H("Scedil","Ş"),H("scedil","ş"),H("Scirc","Ŝ"),H("scirc","ŝ"),H("scnap","⪺"),H("scnE","⪶"),H("scnsim","⋩"),H("scpolint","⨓"),H("scsim","≿"),H("Scy","С"),H("scy","с"),H("sdotb","⊡"),H("sdot","⋅"),H("sdote","⩦"),H("searhk","⤥"),H("searr","↘"),H("seArr","⇘"),H("searrow","↘"),H("sect","§"),H("semi",";"),H("seswar","⤩"),H("setminus","∖"),H("setmn","∖"),H("sext","✶"),H("Sfr","𝔖"),H("sfr","𝔰"),H("sfrown","⌢"),H("sharp","♯"),H("SHCHcy","Щ"),H("shchcy","щ"),H("SHcy","Ш"),H("shcy","ш"),H("ShortDownArrow","↓"),H("ShortLeftArrow","←"),H("shortmid","∣"),H("shortparallel","∥"),H("ShortRightArrow","→"),H("ShortUpArrow","↑"),H("shy","­"),H("Sigma","Σ"),H("sigma","σ"),H("sigmaf","ς"),H("sigmav","ς"),H("sim","∼"),H("simdot","⩪"),H("sime","≃"),H("simeq","≃"),H("simg","⪞"),H("simgE","⪠"),H("siml","⪝"),H("simlE","⪟"),H("simne","≆"),H("simplus","⨤"),H("simrarr","⥲"),H("slarr","←"),H("SmallCircle","∘"),H("smallsetminus","∖"),H("smashp","⨳"),H("smeparsl","⧤"),H("smid","∣"),H("smile","⌣"),H("smt","⪪"),H("smte","⪬"),H("smtes","⪬︀"),H("SOFTcy","Ь"),H("softcy","ь"),H("solbar","⌿"),H("solb","⧄"),H("sol","/"),H("Sopf","𝕊"),H("sopf","𝕤"),H("spades","♠"),H("spadesuit","♠"),H("spar","∥"),H("sqcap","⊓"),H("sqcaps","⊓︀"),H("sqcup","⊔"),H("sqcups","⊔︀"),H("Sqrt","√"),H("sqsub","⊏"),H("sqsube","⊑"),H("sqsubset","⊏"),H("sqsubseteq","⊑"),H("sqsup","⊐"),H("sqsupe","⊒"),H("sqsupset","⊐"),H("sqsupseteq","⊒"),H("square","□"),H("Square","□"),H("SquareIntersection","⊓"),H("SquareSubset","⊏"),H("SquareSubsetEqual","⊑"),H("SquareSuperset","⊐"),H("SquareSupersetEqual","⊒"),H("SquareUnion","⊔"),H("squarf","▪"),H("squ","□"),H("squf","▪"),H("srarr","→"),H("Sscr","𝒮"),H("sscr","𝓈"),H("ssetmn","∖"),H("ssmile","⌣"),H("sstarf","⋆"),H("Star","⋆"),H("star","☆"),H("starf","★"),H("straightepsilon","ϵ"),H("straightphi","ϕ"),H("strns","¯"),H("sub","⊂"),H("Sub","⋐"),H("subdot","⪽"),H("subE","⫅"),H("sube","⊆"),H("subedot","⫃"),H("submult","⫁"),H("subnE","⫋"),H("subne","⊊"),H("subplus","⪿"),H("subrarr","⥹"),H("subset","⊂"),H("Subset","⋐"),H("subseteq","⊆"),H("subseteqq","⫅"),H("SubsetEqual","⊆"),H("subsetneq","⊊"),H("subsetneqq","⫋"),H("subsim","⫇"),H("subsub","⫕"),H("subsup","⫓"),H("succapprox","⪸"),H("succ","≻"),H("succcurlyeq","≽"),H("Succeeds","≻"),H("SucceedsEqual","⪰"),H("SucceedsSlantEqual","≽"),H("SucceedsTilde","≿"),H("succeq","⪰"),H("succnapprox","⪺"),H("succneqq","⪶"),H("succnsim","⋩"),H("succsim","≿"),H("SuchThat","∋"),H("sum","∑"),H("Sum","∑"),H("sung","♪"),H("sup1","¹"),H("sup2","²"),H("sup3","³"),H("sup","⊃"),H("Sup","⋑"),H("supdot","⪾"),H("supdsub","⫘"),H("supE","⫆"),H("supe","⊇"),H("supedot","⫄"),H("Superset","⊃"),H("SupersetEqual","⊇"),H("suphsol","⟉"),H("suphsub","⫗"),H("suplarr","⥻"),H("supmult","⫂"),H("supnE","⫌"),H("supne","⊋"),H("supplus","⫀"),H("supset","⊃"),H("Supset","⋑"),H("supseteq","⊇"),H("supseteqq","⫆"),H("supsetneq","⊋"),H("supsetneqq","⫌"),H("supsim","⫈"),H("supsub","⫔"),H("supsup","⫖"),H("swarhk","⤦"),H("swarr","↙"),H("swArr","⇙"),H("swarrow","↙"),H("swnwar","⤪"),H("szlig","ß"),H("Tab","\t"),H("target","⌖"),H("Tau","Τ"),H("tau","τ"),H("tbrk","⎴"),H("Tcaron","Ť"),H("tcaron","ť"),H("Tcedil","Ţ"),H("tcedil","ţ"),H("Tcy","Т"),H("tcy","т"),H("tdot","⃛"),H("telrec","⌕"),H("Tfr","𝔗"),H("tfr","𝔱"),H("there4","∴"),H("therefore","∴"),H("Therefore","∴"),H("Theta","Θ"),H("theta","θ"),H("thetasym","ϑ"),H("thetav","ϑ"),H("thickapprox","≈"),H("thicksim","∼"),H("ThickSpace","  "),H("ThinSpace"," "),H("thinsp"," "),H("thkap","≈"),H("thksim","∼"),H("THORN","Þ"),H("thorn","þ"),H("tilde","˜"),H("Tilde","∼"),H("TildeEqual","≃"),H("TildeFullEqual","≅"),H("TildeTilde","≈"),H("timesbar","⨱"),H("timesb","⊠"),H("times","×"),H("timesd","⨰"),H("tint","∭"),H("toea","⤨"),H("topbot","⌶"),H("topcir","⫱"),H("top","⊤"),H("Topf","𝕋"),H("topf","𝕥"),H("topfork","⫚"),H("tosa","⤩"),H("tprime","‴"),H("trade","™"),H("TRADE","™"),H("triangle","▵"),H("triangledown","▿"),H("triangleleft","◃"),H("trianglelefteq","⊴"),H("triangleq","≜"),H("triangleright","▹"),H("trianglerighteq","⊵"),H("tridot","◬"),H("trie","≜"),H("triminus","⨺"),H("TripleDot","⃛"),H("triplus","⨹"),H("trisb","⧍"),H("tritime","⨻"),H("trpezium","⏢"),H("Tscr","𝒯"),H("tscr","𝓉"),H("TScy","Ц"),H("tscy","ц"),H("TSHcy","Ћ"),H("tshcy","ћ"),H("Tstrok","Ŧ"),H("tstrok","ŧ"),H("twixt","≬"),H("twoheadleftarrow","↞"),H("twoheadrightarrow","↠"),H("Uacute","Ú"),H("uacute","ú"),H("uarr","↑"),H("Uarr","↟"),H("uArr","⇑"),H("Uarrocir","⥉"),H("Ubrcy","Ў"),H("ubrcy","ў"),H("Ubreve","Ŭ"),H("ubreve","ŭ"),H("Ucirc","Û"),H("ucirc","û"),H("Ucy","У"),H("ucy","у"),H("udarr","⇅"),H("Udblac","Ű"),H("udblac","ű"),H("udhar","⥮"),H("ufisht","⥾"),H("Ufr","𝔘"),H("ufr","𝔲"),H("Ugrave","Ù"),H("ugrave","ù"),H("uHar","⥣"),H("uharl","↿"),H("uharr","↾"),H("uhblk","▀"),H("ulcorn","⌜"),H("ulcorner","⌜"),H("ulcrop","⌏"),H("ultri","◸"),H("Umacr","Ū"),H("umacr","ū"),H("uml","¨"),H("UnderBar","_"),H("UnderBrace","⏟"),H("UnderBracket","⎵"),H("UnderParenthesis","⏝"),H("Union","⋃"),H("UnionPlus","⊎"),H("Uogon","Ų"),H("uogon","ų"),H("Uopf","𝕌"),H("uopf","𝕦"),H("UpArrowBar","⤒"),H("uparrow","↑"),H("UpArrow","↑"),H("Uparrow","⇑"),H("UpArrowDownArrow","⇅"),H("updownarrow","↕"),H("UpDownArrow","↕"),H("Updownarrow","⇕"),H("UpEquilibrium","⥮"),H("upharpoonleft","↿"),H("upharpoonright","↾"),H("uplus","⊎"),H("UpperLeftArrow","↖"),H("UpperRightArrow","↗"),H("upsi","υ"),H("Upsi","ϒ"),H("upsih","ϒ"),H("Upsilon","Υ"),H("upsilon","υ"),H("UpTeeArrow","↥"),H("UpTee","⊥"),H("upuparrows","⇈"),H("urcorn","⌝"),H("urcorner","⌝"),H("urcrop","⌎"),H("Uring","Ů"),H("uring","ů"),H("urtri","◹"),H("Uscr","𝒰"),H("uscr","𝓊"),H("utdot","⋰"),H("Utilde","Ũ"),H("utilde","ũ"),H("utri","▵"),H("utrif","▴"),H("uuarr","⇈"),H("Uuml","Ü"),H("uuml","ü"),H("uwangle","⦧"),H("vangrt","⦜"),H("varepsilon","ϵ"),H("varkappa","ϰ"),H("varnothing","∅"),H("varphi","ϕ"),H("varpi","ϖ"),H("varpropto","∝"),H("varr","↕"),H("vArr","⇕"),H("varrho","ϱ"),H("varsigma","ς"),H("varsubsetneq","⊊︀"),H("varsubsetneqq","⫋︀"),H("varsupsetneq","⊋︀"),H("varsupsetneqq","⫌︀"),H("vartheta","ϑ"),H("vartriangleleft","⊲"),H("vartriangleright","⊳"),H("vBar","⫨"),H("Vbar","⫫"),H("vBarv","⫩"),H("Vcy","В"),H("vcy","в"),H("vdash","⊢"),H("vDash","⊨"),H("Vdash","⊩"),H("VDash","⊫"),H("Vdashl","⫦"),H("veebar","⊻"),H("vee","∨"),H("Vee","⋁"),H("veeeq","≚"),H("vellip","⋮"),H("verbar","|"),H("Verbar","‖"),H("vert","|"),H("Vert","‖"),H("VerticalBar","∣"),H("VerticalLine","|"),H("VerticalSeparator","❘"),H("VerticalTilde","≀"),H("VeryThinSpace"," "),H("Vfr","𝔙"),H("vfr","𝔳"),H("vltri","⊲"),H("vnsub","⊂⃒"),H("vnsup","⊃⃒"),H("Vopf","𝕍"),H("vopf","𝕧"),H("vprop","∝"),H("vrtri","⊳"),H("Vscr","𝒱"),H("vscr","𝓋"),H("vsubnE","⫋︀"),H("vsubne","⊊︀"),H("vsupnE","⫌︀"),H("vsupne","⊋︀"),H("Vvdash","⊪"),H("vzigzag","⦚"),H("Wcirc","Ŵ"),H("wcirc","ŵ"),H("wedbar","⩟"),H("wedge","∧"),H("Wedge","⋀"),H("wedgeq","≙"),H("weierp","℘"),H("Wfr","𝔚"),H("wfr","𝔴"),H("Wopf","𝕎"),H("wopf","𝕨"),H("wp","℘"),H("wr","≀"),H("wreath","≀"),H("Wscr","𝒲"),H("wscr","𝓌"),H("xcap","⋂"),H("xcirc","◯"),H("xcup","⋃"),H("xdtri","▽"),H("Xfr","𝔛"),H("xfr","𝔵"),H("xharr","⟷"),H("xhArr","⟺"),H("Xi","Ξ"),H("xi","ξ"),H("xlarr","⟵"),H("xlArr","⟸"),H("xmap","⟼"),H("xnis","⋻"),H("xodot","⨀"),H("Xopf","𝕏"),H("xopf","𝕩"),H("xoplus","⨁"),H("xotime","⨂"),H("xrarr","⟶"),H("xrArr","⟹"),H("Xscr","𝒳"),H("xscr","𝓍"),H("xsqcup","⨆"),H("xuplus","⨄"),H("xutri","△"),H("xvee","⋁"),H("xwedge","⋀"),H("Yacute","Ý"),H("yacute","ý"),H("YAcy","Я"),H("yacy","я"),H("Ycirc","Ŷ"),H("ycirc","ŷ"),H("Ycy","Ы"),H("ycy","ы"),H("yen","¥"),H("Yfr","𝔜"),H("yfr","𝔶"),H("YIcy","Ї"),H("yicy","ї"),H("Yopf","𝕐"),H("yopf","𝕪"),H("Yscr","𝒴"),H("yscr","𝓎"),H("YUcy","Ю"),H("yucy","ю"),H("yuml","ÿ"),H("Yuml","Ÿ"),H("Zacute","Ź"),H("zacute","ź"),H("Zcaron","Ž"),H("zcaron","ž"),H("Zcy","З"),H("zcy","з"),H("Zdot","Ż"),H("zdot","ż"),H("zeetrf","ℨ"),H("ZeroWidthSpace","​"),H("Zeta","Ζ"),H("zeta","ζ"),H("zfr","𝔷"),H("Zfr","ℨ"),H("ZHcy","Ж"),H("zhcy","ж"),H("zigrarr","⇝"),H("zopf","𝕫"),H("Zopf","ℤ"),H("Zscr","𝒵"),H("zscr","𝓏"),H("zwj","‍"),H("zwnj","‌")])),Gf=s(Ef,function(r){return s(ci,"&"+r+";",s(Uu,r,Pf))},bf(sf(se))),If=function(r){return U(0>r||r>1114111?"�":r>65535?String.fromCharCode(Math.floor((r-=65536)/1024)+55296,r%1024+56320):String.fromCharCode(r))},Jf=W,Of=e(function(r,n,t){r:for(;;){if(!n.b)return Jt(t);var e=n.a,u=n.b;switch(e){case"0":r=a=r-1,n=c=u,t=i=t;continue r;case"1":var a=r-1,c=u,i=t+s(Jf,16,r);r=a,n=c,t=i;continue r;case"2":a=r-1,c=u,i=t+2*s(Jf,16,r),r=a,n=c,t=i;continue r;case"3":a=r-1,c=u,i=t+3*s(Jf,16,r),r=a,n=c,t=i;continue r;case"4":a=r-1,c=u,i=t+4*s(Jf,16,r),r=a,n=c,t=i;continue r;case"5":a=r-1,c=u,i=t+5*s(Jf,16,r),r=a,n=c,t=i;continue r;case"6":a=r-1,c=u,i=t+6*s(Jf,16,r),r=a,n=c,t=i;continue r;case"7":a=r-1,c=u,i=t+7*s(Jf,16,r),r=a,n=c,t=i;continue r;case"8":a=r-1,c=u,i=t+8*s(Jf,16,r),r=a,n=c,t=i;continue r;case"9":a=r-1,c=u,i=t+9*s(Jf,16,r),r=a,n=c,t=i;continue r;case"a":a=r-1,c=u,i=t+10*s(Jf,16,r),r=a,n=c,t=i;continue r;case"b":a=r-1,c=u,i=t+11*s(Jf,16,r),r=a,n=c,t=i;continue r;case"c":a=r-1,c=u,i=t+12*s(Jf,16,r),r=a,n=c,t=i;continue r;case"d":a=r-1,c=u,i=t+13*s(Jf,16,r),r=a,n=c,t=i;continue r;case"e":a=r-1,c=u,i=t+14*s(Jf,16,r),r=a,n=c,t=i;continue r;case"f":a=r-1,c=u,i=t+15*s(Jf,16,r),r=a,n=c,t=i;continue r;default:return Ut(lc(e)+" is not a valid hexadecimal character.")}}}),Mf=t(function(r,n){return n.$?Ut(n.a):Jt(r(n.a))}),Ff=sr,Qf=function(r){return l(Ff,Tt,J,r)},Xf=s(Xo,function(r){var n=function(r){if(Ye(r))return Ut("Empty strings are not valid hexadecimal strings.");var n=function(){if(s(au,"-",r)){var n=s(ci,J,function(r){return r.b?_t(r.b):Rt}(Qf(r)));return s(Mf,Ra,l(Of,ne(n)-1,n,0))}return l(Of,Qe(r)-1,Qf(r),0)}();return s(ua,function(n){return s(Kt," ",F(['"'+r+'"',"is not a valid hexadecimal string because",n]))},n)}(pi(r));return n.$?pf(n.a):hf(n.a)},bf(sf(function(r){var n=ie(r);return n>=48&&57>=n||n>=65&&70>=n||n>=97&&102>=n}))),Zf={$:1},Kf=St,Yf=jt,Wf=t(function(r,n){return{bL:n.bL+(r-n.b),c:n.c,d:n.d,b:r,cJ:n.cJ,a:n.a}}),rs=At,ns=qt,ts=t(function(r,n){if(l(ns,101,r,n)||l(ns,69,r,n)){var t=r+1,e=l(ns,43,t,n)||l(ns,45,t,n)?t+1:t,u=s(rs,e,n);return R(e,u)?-u:u}return r}),es=t(function(r,n){return s(ts,l(ns,46,r,n)?s(rs,r+1,n):r,n)}),us=a(function(r,n,t,e,u){var a=e.a,c=e.b;if(1===n.$)return s(Fo,!0,s(nf,u,n.a));var i=n.a;return R(t,a)?s(Fo,0>C(u.b,t),s(nf,u,r)):l(Qo,!0,i(c),s(Wf,a,u))}),as=function(r){if(0===r.length||/[\sxbo]/.test(r))return Rt;var n=+r;return n==n?_t(n):Rt},cs=c(function(r,n,t,e,u,a){var c=u.a,i=s(es,c,a.a);if(0>i)return s(Fo,!0,b($f,a.cJ,a.bL-(i+a.b),r,a.c));if(R(a.b,i))return s(Fo,!1,s(nf,a,n));if(R(c,i))return d(us,r,t,a.b,u,a);if(1===e.$)return s(Fo,!0,s(nf,a,r));var o=e.a,f=as(l(Xe,a.b,i,a.a));return 1===f.$?s(Fo,!0,s(nf,a,r)):l(Qo,!0,o(f.a),s(Wf,i,a))}),is=s(t(function(r,n){return t={bF:Ut(n),bZ:r,b_:Ut(n),d3:Ut(n),cf:Jt(Oe),ei:n,ct:Ut(n)},function(r){if(l(ns,48,r.b,r.a)){var n=r.b+1,e=n+1;return l(ns,120,n,r.a)?d(us,t.ei,t.d3,e,s(Yf,e,r.a),r):l(ns,111,n,r.a)?d(us,t.ei,t.ct,e,l(Kf,8,e,r.a),r):l(ns,98,n,r.a)?d(us,t.ei,t.bF,e,l(Kf,2,e,r.a),r):v(cs,t.ei,t.bZ,t.cf,t.b_,H(n,0),r)}return v(cs,t.ei,t.bZ,t.cf,t.b_,l(Kf,10,r.b,r.a),r)};var t}),Zf,Zf),os=(qo=zf(F([s(kf,s(ff,hf(Oe),uf(function(r){return"x"===r||"X"===r})),Xf),s(kf,s(ff,hf(Oe),cf(je("0"))),is)])),s(kf,s(ff,hf(Oe),uf(je("#"))),s(Ef,s(Wu,If,lc),qo))),fs=s(kf,s(ff,hf(Oe),uf(je("&"))),zf(F([s(ff,Zo(Gf),Uf),s(ff,Zo(os),Uf),hf("&")]))),ss=function(r){return s(kf,s(ff,hf(Oe),uf(je(r))),s(ff,s(Ef,Kt(""),Hf(zf(F([bf(sf(function(n){return!R(n,r)&&"&"!==n})),fs])))),uf(je(r))))},ls=function(r){return!r.b},bs=t(function(r,n){return s(Cf,J,function(t){return zf(F([s(Ef,function(r){return _f(s(Tt,r,t))},n),ls(t)?pf("expecting at least one "+r):hf(Lf(be(t)))]))})}),ds=s(Ef,Kt(""),s(bs,"attribute value",zf(F([bf(sf(function(r){return!df(r)&&'"'!==r&&"'"!==r&&"="!==r&&"<"!==r&&">"!==r&&"`"!==r&&"&"!==r})),fs])))),vs=zf(F([s(kf,s(ff,s(ff,hf(Oe),uf(je("="))),cf(df)),zf(F([ds,ss('"'),ss("'")]))),hf("")])),ps=s(kf,s(kf,hf(vo),s(ff,Bf,cf(df))),s(ff,vs,cf(df))),hs=Hf(ps),gs=s(Ef,pi,bf(s(ff,uf(le),cf(function(r){return le(r)||"-"===r})))),ms=function(r){return{$:0,a:r}},$s=s(Ef,s(Wu,Kt(""),ms),s(bs,"text element",zf(F([bf(sf(function(r){return"<"!==r&&"&"!==r})),fs]))));function ws(){return zf(F([$s,Af,xs()]))}function xs(){return s(Xo,function(r){var n=r.a,t=r.b;return jf(n)?s(ff,s(ff,hf(l(Mo,n,t,J)),zf(F([uf(je("/")),hf(0)]))),uf(je(">"))):s(kf,s(ff,hf(s(Mo,n,t)),uf(je(">"))),s(ff,Hf(Zo(ws())),gf(n)))},s(kf,s(kf,s(ff,hf(vo),uf(je("<"))),s(ff,gs,cf(df))),hs))}var ks=ws();ws=function(){return ks};var ys=xs();xs=function(){return ys};var qs,As=e(function(r,n,t){return{bL:n,cy:t,cJ:r}}),Ss=function(r){return l(As,r.cJ,r.bL,r.cy)},js=t(function(r,n){r:for(;;)switch(r.$){case 0:return n;case 1:var t=r.b;r=r.a,n=s(Tt,t,n);continue r;default:var e=r.b;r=r.a,n=s(js,e,n);continue r}}),Ls=t(function(r,n){var t=r({bL:1,c:J,d:1,b:0,cJ:1,a:n});return t.$?Ut(s(js,t.b,J)):Jt(t.b)}),_s=t(function(r,n){var t=s(Ls,r,n);return t.$?Ut(s(bu,Ss,t.a)):Jt(t.a)}),Rs=function(r){var n=function(r){return Ye(r)?Jt(J):s(_s,s(bs,"node",ks),r)}(r);return n.$?Bi("html parser failed"):ki(n.a)},Ts=s(Tc,Oo,s(Lc,Rs,oi("<((\\w+|-)+)[\\s\\S]*?</\\1>"))),Es=s(Tc,Oo,s(Lc,Rs,oi("<[^>\\n]*>"))),Ds=s(zc,vi(Bc("<\/script>")),Bc("<script>")),Cs=(qs=function(r){return Ai(function(n){return P(n,{J:l(Jo,s(ci,0,Co(n.aF)),r,n.J)})})},Nc(F([s(zc,ki(s(Jc,"",Rt)),s(Lc,qs,Ds)),Es,Ts]))),Ns=u(function(r,n,t,e){return{$:12,a:r,b:n,c:t,d:e}}),Vs=function(r){return s(Pc,Ao,s(Ec,s(Hc,r,Bc("}")),s(Pc,Bc("}{"),s(Ec,s(no,99999,s(zc,Pi,oi("[\t ]*-[\t ]*"))),s(Tc,Ns,s(zc,Gi,Bc("{")))))))},zs=t(function(r,n){return{$:10,a:r,b:n}}),Hs=t(function(r,n){return{$:2,a:r,b:n}}),Bs=e(function(r,n,t){return l(Ju,r,n,t)}),Us=function(r){var n=r.a,t=r.b;return Ai(function(r){return P(r,{b2:l(Bs,n,t,r.b2)})})},Ps=s(Lc,function(r){var n=r.a,t=r.b;if(t.$)return ki(zs(n));var e=t.a;return s(zc,ki(zs(n)),Us(H(n,F([s(Hs,Rt,F([s(Jc,e,Rt)]))]))))},s(Ec,Qi(s(zc,vi(Bc(")")),Bc("("))),s(Tc,vo,s(zc,vi(Bc("]")),Bc("[^"))))),Gs=oi("[a-zA-Z]+://(/)?[a-zA-Z0-9\\.\\-\\_]+\\.([a-z\\.]{2,6})[^ \\]\\)\t\n]*"),Is=s(Tc,function(r){return Zc(l(Fc,F([s(Jc,r,Rt)]),r,""))},Gs),Js=function(r){return s(Lc,r,ki(0))},Os=Vo(F([{U:function(r){return"https://www.youtube.com/embed/"+r},aa:Do("(?:http(?:s)?://)?(?:www\\.)?(?:youtu\\.be/|youtube\\.com/(?:(?:watch)?\\?(?:.*&)?v(?:i)?=|(?:v|vi|user)/))([^\\?&\"'<> #]+)")},{U:function(r){return"https://player.vimeo.com/video/"+r},aa:Do("(?:http(?:s)?://)?(?:www\\.)?(?:player.)?(?:vimeo\\.com).*?(\\d+)")},{U:function(r){return"https://www.teachertube.com/embed/video/"+r},aa:Do("(?:http(?:s)?://)?(?:www\\.)?(?:teachertube\\.com).*?(\\d+)")}])),Ms=u(function(r,n,t,e){return l(r,n,t,Ye(e)?t:e)}),Fs=s(no,"",s(Pc,oo,s(zc,vi(Bc('"')),s(Pc,Bc('"'),oo)))),Qs=e(function(r,n,t){return s(Pc,Bc(")"),s(Ec,Fs,s(Ec,t,s(Pc,Bc("("),s(Tc,Ms(r),n)))))}),Xs=yi(function(r){return ki(r.cP)}),Zs=Nc(F([Gs,s(Ec,oi("#[\\w-]+"),Xs),s(Ec,oi("#\\S+"),Xs),oi('[^\\)\n "]*')])),Ks=s(Cc,Gs,s(Ec,oi('[^\\)\n "]*'),s(Tc,Qt,yi(function(r){return ki(r.bS.du)})))),Ys=s(Tc,To,Nc(F([s(Ji,"🙂",Bc(":-)")),s(Ji,"😉",Bc(";-)")),s(Ji,"😀",Bc(":-D")),s(Ji,"😮",Bc(":-O")),s(Ji,"🙁",Bc(":-(")),s(Ji,"😐",Bc(":-|")),s(Ji,"😕",Bc(":-/")),s(Ji,"😕",Bc(":-\\")),s(Ji,"😛",Bc(":-P")),s(Ji,"😛",Bc(":-p")),s(Ji,"😜",Bc(";-P")),s(Ji,"😜",Bc(";-p")),s(Ji,"😗",Bc(":-*")),s(Ji,"😘",Bc(";-*")),s(Ji,"😂",Bc(":')")),s(Ji,"😢",Bc(":'(")),s(Ji,"😭",Bc(":'[")),s(Ji,"😠",Bc(":-[")),s(Ji,"😷",Bc(":-#")),s(Ji,"😷",Bc(":-X")),s(Ji,"😖",Bc(":-§"))]))),Ws=t(function(r,n){return{$:13,a:r,b:n}}),rl=function(r){r:for(;;){if(r.b){if(r.b.b){var n=r.a,t=r.b,e=t.a,u=(a=t.b,H(n,e));if(u.a.$||1!==u.a.b.$||u.b.$||1!==u.b.b.$)return s(Tt,n,rl(s(Tt,e,a)));r=s(Tt,s(Jc,I(u.a.a,u.b.a),Rt),a);continue r}var a;return F([a=r.a])}return J}},nl=function(r){var n=rl(r);return n.b&&!n.b.b?n.a:s(Ws,n,Rt)},tl=function(r){return s(Tc,nl,s(zc,s(Hc,cl(),Bc(r)),Bc(r)))};function el(){return s(Pc,Bc(")"),s(Ec,Fs,s(Ec,s(Tc,Os,Ks),s(Pc,Bc("("),s(Tc,Xc,al())))))}function ul(){return s(Pc,Bc(")"),s(Ec,Fs,s(Ec,s(Tc,zo,Ks),s(Pc,Bc("("),s(Tc,Gc,al())))))}function al(){return s(zc,s(Hc,cl(),Bc("]")),Bc("["))}function cl(){return Js(function(){return s(zc,s(Cc,Cs,s(Ec,s(zc,Ro,ko),Nc(F([Ho,Ps,il(),Io,Vs(cl()),ol()])))),ko)})}function il(){return Js(function(){var r=s(zc,el(),Bc("!?")),n=l(Qs,Qc,al(),Bo),t=l(Qs,Fc,al(),Zs),e=s(zc,l(Qs,Oc,al(),Ks),Bc("!")),u=s(zc,ul(),Bc("?"));return s(Tc,Zc,Nc(F([r,u,e,n,t])))})}function ol(){return Js(function(){var r=s(Tc,Wc,tl("~~")),n=s(Tc,Yc,tl("^")),t=s(Tc,Kc,tl("~")),e=s(Tc,Mc,s(Cc,tl("*"),tl("_"))),u=s(Tc,Jc,s(zc,oi("[\\^*_+-~`\\\\${}\\[\\]|#]"),Bc("\\"))),a=s(Tc,Jc,oi("[~:_;\\-<>=${}\\[\\]\\(\\) ]")),c=s(Tc,Ic,s(Cc,tl("**"),tl("__"))),i=s(Tc,Jc,oi("[^\n|*|+]+")),o=s(Tc,Jc,oi("[^*_~:;`!\\^\\[\\]\\(\\)|{}\\\\\\n\\-<>=$ ]+"));return Nc(F([Is,o,Eo,Ys,u,c,e,r,t,n,a,i]))})}var fl=el();el=function(){return fl};var sl=ul();ul=function(){return sl};var ll=al();al=function(){return ll};var bl=cl();cl=function(){return bl};var dl=il();il=function(){return dl};var vl=ol();ol=function(){return vl};var pl,hl,gl,ml,$l,wl=t(function(r,n){var t=l(bo,ro(bl),s(mc,Oe,r),l(so,"\n"," ",n));return t.$?J:t.a.c}),xl=Bc("\n"),kl=function(r){return Ai(function(n){return P(n,{bS:r(n.bS)})})},yl=function(r){return Ai(function(n){return P(n,{b9:s(Fa,n.b9,F([r])),W:!0})})},ql=Ai(function(r){return P(r,{b9:be(s(La,1,be(r.b9))),W:!1})}),Al=Ai(Mi(!0)),Sl=function(r){return r.replace(/^\s+/,"")},jl=function(r){return r.replace(/\s+$/,"")},Ll=s(Tc,function(r){return jl(Ci(s(bu,Sl,r)))},s(Pc,ql,s(zc,ro(s(zc,oi(".+\\n"),Fi)),s(Pc,Al,yl("  "))))),_l=t(function(r,n){return s(Wu,s(ii,ti({bI:r,cr:n}),function(r){return r.al}),Oe)}),Rl=t(function(r,n){return s(zc,s(Lc,s(Wu,n,kl),Ll),l(_l,!0,!1,r))}),Tl=Js(function(){var r=Nc(F([s(Rl,"author:",t(function(r,n){return P(n,{dt:r})})),s(Rl,"base:",t(function(r,n){return P(n,{du:r})})),s(Rl,"comment:",t(function(r,n){return P(n,{dF:l(so,"\n"," ",r)})})),s(Rl,"attribute:",t(function(r,n){return P(n,{bE:s(Fa,n.bE,F([s(wl,n,r)]))})})),s(Rl,"date:",t(function(r,n){return P(n,{dJ:r})})),s(Rl,"email:",t(function(r,n){return P(n,{dQ:r})})),s(Rl,"language:",t(function(r,n){return P(n,{en:r})})),s(Rl,"logo:",t(function(r,n){return P(n,{et:r})})),s(Rl,"narrator:",t(function(r,n){return P(n,{eB:r})})),s(Rl,"script:",qc(wc)),s(Rl,"import:",Ac),s(Rl,"link:",qc($c)),s(Rl,"translation:",Sc),s(Rl,"version:",t(function(r,n){return P(n,{fm:r})})),s(Rl,"dark:",t(function(r,n){return P(n,{eq:function(){switch(pi(r)){case"true":return _t(!1);case"false":return _t(!0);default:return Rt}}()})})),s(Rl,"mode:",t(function(r,n){return P(n,{ex:function(){switch(pi(r)){case"textbook":return _t(2);case"presentation":return _t(1);case"slides":return _t(0);default:return Rt}}()})})),s(Rl,"debug:",t(function(r,n){return P(n,{bQ:"true"===r})})),s(Lc,function(r){return kl(function(n){return P(n,{eM:Qa(r)})})},s(zc,vi(Bc("\n@end")),oi("@onload[\t ]*\\n"))),s(Lc,function(r){return kl(xc(r))},s(Pc,xl,s(Ec,oi(".+"),s(Tc,vo,s(Pc,oi("[\t ]*:[\t ]*"),fo))))),s(Lc,function(r){return kl(xc(r))},s(Ec,vi(Bc("\n@end")),s(Tc,vo,s(Pc,oi("[\t ]*\\n"),fo))))]));return Oi(Uc(s(Pc,hi,ro(s(zc,r,hi)))))}),El=Js(function(){return Oi(s(Pc,hi,Qi(s(zc,Ai(function(r){return P(r,{dL:!0})}),Tl))))}),Dl=t(function(r,n){var t=l(bo,El,s(mc,Oe,Ta(r)),n);if(t.$){var e=t.a;return Ut(s(pc,e.c,e.b))}var u=t.a;return Jt(H(u.a.bS,u.b.A))}),Cl=t(function(r,n){var t=s(Dl,r.cu,n);if(t.$)return B(P(r,{dR:_t(t.a)}),Rt,J);var e=t.a,u=e.a,a=e.b,c=r.ae;return B(s(cc,u,P(r,{bT:P(u,{bE:J,aH:J,aN:J}),ae:P(c,{a4:s(ci,c.a4,u.eq),ex:s(ci,c.ex,u.ex)}),at:ic(u.en)})),_t(a),u.aH)}),Nl=cn,Vl=function(r){return s(wu,Oe,s(du,Vc(ou(r)),Nl(0)))},zl=Ma(J),Hl=t(function(r,n){var t=s(Cl,r.e,l(so,"\r","",n));if(t.b.$)return H(P(r,{t:Ga(s(ci,"",(e=t.a).dR))}),zl);if(t.c.b){var e=t.a,u=t.c;return H(P(r,{S:_t(a=t.b.a),e:e,aP:Qe(a),t:s(Oa,!0,ne(u))}),Ma(s(Tt,Vl(Ia),s(bu,ya(Ja),u))))}var a;e=t.a;return H(P(r,{S:_t(a=t.b.a),e:e,aP:Qe(a),t:s(Oa,!0,0)}),Vl(Ia))}),Bl=e(function(r,n,t){var e=s(ju,ru,n.aX),u=B(n.ac,r.aS,r.bi);if(u.a.$){if(u.b.$){if(u.c.$)return H(v(Su,t,n,yu,d(Pa,r.ae,"","","",e),Rt,0),zl);var a=u.c.a;return s(Hl,v(Su,t,n,yu,d(Pa,r.ae,"","","",e),Rt,0),a)}return H(v(Su,t,P(n,{ac:_t(c=u.b.a)}),Au,d(Pa,r.ae,ja(n),c,_a(n.ac),e),Rt,0),s(ya,qu,c))}var c=u.a.a;return H(v(Su,t,n,Au,d(Pa,r.ae,ja(n),c,_a(n.ac),e),Rt,0),s(ya,qu,c))}),Ul=function(r){return{$:5,c:r}},Pl=function(r){return{$:11,g:r}},Gl=function(r){return{$:0,a:r}},Il=pn,Jl=function(r){return{$:7,a:r}},Ol=function(r){return{$:6,a:r}},Ml=vn,Fl=yr,Ql=wn("event2elm",s(Ue,function(r){return s(Ue,function(n){return s(Ue,function(t){return Ie({eu:t,cR:n,fh:r})},s(ku,"message",Fl))},s(ku,"section",Ca))},s(ku,"topic",za))),Xl=e(function(r,n,t){for(;;){var e=s(_i,ji&n>>>r,t);if(e.$)return s(_i,ji&n,e.a);r-=ke,n=n,t=e.a}}),Zl=function(r){return r>>>5<<5},Kl=t(function(r,n){var t=n.a,e=n.b,u=n.c,a=n.d;return 0>r||C(r,t)>-1?Rt:C(r,Zl(t))>-1?_t(s(_i,ji&r,a)):_t(l(Xl,e,r,u))}),Yl=function(r){return s(Kl,r.cS,r.cT)},Wl=function(r){return{$:5,a:r}},rb=wn("footnote",za),nb={$:1},tb=t(function(r,n){var t=s(Dl,r.bw,n);return t.$?r:s(cc,t.a.a,r)}),eb=function(r){return s(wu,iu,Xr(function(){try{pt.location=r}catch(r){qn.location.reload(!1)}}))},ub=function(r){return{$:0,a:r}},ab={$:1},cb=function(r){return{$:5,a:r}},ib=Rr,ob=function(r){return s(Da,b(ib,Ya,s(ku,"topic",za),s(ku,"section",Ca),s(ku,"message",Fl)),r)},fb=Ir,sb=function(r){return Ir(l(re,t(function(r,n){return l(Or,r.a,r.b,n)}),{},r))},lb=(hl=function(r){return sb(F([H("message",Oe(r.eu)),H("section",fb(r.cR)),H("topic",uc(r.fh))]))},mn(pl="event2js"),on[pl]={e:$n,r:hl,a:function(r){var n=[],t=on[r].r,u=cn(0);return on[r].b=u,on[r].c=e(function(r,e){for(;e.b;e=e.b)for(var a=n,c=Jr(t(e.a)),i=0;a.length>i;i++)a[i](c);return u}),{subscribe:function(r){n.push(r)},unsubscribe:function(r){var t=(n=n.slice()).indexOf(r);0>t||n.splice(t,1)}}}},dn(pl)),bb=u(function(r,n,t,e){return r?s(Tt,l(Ya,"load",n,uc(t)),e):e}),db=t(function(r,n){return{$:3,a:r,b:n}}),vb=t(function(r,n){return{$:10,a:r,b:n}}),pb=t(function(r,n){return{$:11,a:r,b:n}}),hb=t(function(r,n){return{$:7,a:r,b:n}}),gb=t(function(r,n){return{$:4,a:r,b:n}}),mb=e(function(r,n,t){return{$:6,a:r,b:n,c:t}}),$b=t(function(r,n){return{$:1,a:r,b:n}}),wb=t(function(r,n){return{$:9,a:r,b:n}}),xb=oi("\\n+"),kb=function(r){return s(Pc,Ao,s(Lc,Hi(!0),s(Ec,s(zc,r,Fi),s(Pc,Qi(s(Pc,Al,xb)),s(Pc,oi("}}--[\t ]*"),s(Ec,Qi(s(zc,oi("[A-Za-z0-9 ]+"),s(zc,ko,So))),s(Tc,e(function(r,n,t){return B(r,n,t)}),s(zc,Gi,oi("[\t ]*--{{")))))))))},yb=function(r){return l(lu,Fa,J,r)},qb=u(function(r,n,t,e){return{$:5,a:r,b:n,c:t,d:e}}),Ab=Qi(s(Pc,Qi(s(Pc,Fi,oi("[\t ]*\\n"))),s(Tc,_o,s(zc,Uc(gi),s(zc,ko,oo))))),Sb=t(function(r,n){return s(Pc,Qi(r),s(co,r,n))}),jb=t(function(r,n){return s(Cc,s(Sb,r,n),ki(J))}),Lb=s(Tc,s(Wu,function(r){return s(Fa,r,F([s(Jc," ",Rt)]))},rl),ro(bl)),_b=s(zc,s(Hc,s(zc,Lb,Bc("|")),oi("\\|[\t ]*\\n")),Fi),Rb=(gl=s(Pc,oi("[\t ]*\\n"),s(zc,s(jb,Bc("|"),Nc(F([s(Ji,"center",oi("[\t ]*:-{3,}:[\t ]*")),s(Ji,"left",oi("[\t ]*:-{3,}[\t ]*")),s(Ji,"right",oi("[\t ]*-{3,}:[\t ]*")),s(Ji,"left",oi("[\t ]*-{3,}[\t ]*"))]))),s(Pc,Bc("|"),Fi))),s(Ec,Wi(_b),s(Ec,gl,s(Ec,_b,s(Tc,qb,s(zc,Ab,Al)))))),Tb=s(Tc,function(r){return{$:0,a:r}},s(Pc,oi("-{3,}"),Ab)),Eb=oi("\\n*"),Db=function(r){return s(Pc,Ao,s(Ec,s(Cc,function(r){return s(zc,s(Hc,s(Pc,Eb,r),oi("[\t ]*\\*{3,}")),s(Pc,oi("[\t ]*\\*{3,}\\n+"),Fi))}(r),function(r){return s(Tc,Xi,r)}(r)),s(Pc,s(Cc,Oi(Bc("\n")),Al),s(Pc,oi("}}[\t ]*"),s(Ec,s(no,99999,s(zc,Pi,oi("[\t ]*-[\t ]*"))),s(Tc,e(function(r,n,t){return B(r,n,t)}),s(zc,Gi,oi("[\t ]*{{"))))))))},Cb=s(Tc,s(Wu,yb,rl),s(zc,ro(s(Pc,xl,s(zc,Lb,Fi))),Al)),Nb=u(function(r,n,t,e){return{dM:e,c8:r,fr:t,ft:n}}),Vb=t(function(r,n){return{dj:r,fs:n}}),zb=c(function(r,n,u,a,c,i){var o=l(Xa,e(function(t,e,a){r:for(;;){var c=a.a,i=a.b;if(c.b){var o=c.a,f=o.a,s=o.b,d=c.b;if(0>C(f,t)){t=t,e=e,a=H(d,l(r,f,s,i));continue r}return C(f,t)>0?H(c,l(u,t,e,i)):H(d,b(n,f,s,e,i))}return H(c,l(u,t,e,i))}}),H(Vt(a),i),c),f=o.a,s=o.b;return l(re,t(function(n,t){return l(r,n.a,n.b,t)}),s,f)}),Hb=t(function(r,n){return v(zb,Ju,u(function(r,n,t,e){return l(Ju,r,I(n,t),e)}),Ju,r,n,Vu)}),Bb=t(function(r,n){if(-2===n.$)return Nu;var t=n.b,e=n.d,u=n.e;return d(Pu,n.a,t,s(r,t,n.c),s(Bb,r,e),s(Bb,r,u))}),Ub=s(si,"expected a float",s(Lc,Ui,s(Tc,as,oi("-?(?:0|[1-9]\\d*)\\.\\d+")))),Pb=s(Cc,Ub,s(Tc,xe,s(Pc,s(no,".",Bc(".")),Pi))),Gb=Vu,Ib=t(function(r,n){return l(Ju,r,0,n)}),Jb=t(function(r,n){return s(Ku,r,n)}),Ob=(ml=t(function(r,n){return H(""===(c=Qa(r))?" ":c,_o(s(bu,function(r){return H(r,s(Ke,lc(r),n))},(t=s(Jb," ",(a=Qf(n),l(re,Ib,Gb,a))),u=t,l(Nt,e(function(r,n,t){return s(Tt,r,t)}),J,u)))));var t,u,a,c}),s(Ec,s(Pc,oi("[\t ]*\\n"),oi("[ \\*a-zA-Z\\+#]*")),s(Tc,ml,s(Pc,Bc("|"),oi("[^\n|]*"))))),Mb=e(function(r,n,t){return H(n,(t-n)/r)}),Fb=K,Qb=t(function(r,n){for(;;){var t=H(n,r);if(!t.a.b)return!0;if(1!==t.b.$){var e=t.a;if(c=e.b,R(u=e.a,t.b.a))return!1;r=_t(u),n=c}else{var u,a=t.a,c=a.b;r=_t(u=a.a),n=c}}}),Xb=function(r){return l(lu,t(function(r,n){var t=r.b,e=n.b;return H(s(Tt,r.a,n.a),s(Tt,t,e))}),H(J,J),r)},Zb=s(Ec,s(no,1,s(Pc,oi("[\t ]*\\n"),s(zc,Pb,oi("[\t ]*")))),s(Ec,s(no,"",oi("[a-zA-Z_ .\\\\()\\-]+")),s(Ec,s(no,0,Pb),s(Tc,u(function(r,n,t,e){return H(Qa(t),l(Mb,Qe(r),n,e))}),s(Pc,oi("[\t ]*\\n[\t ]*"),s(zc,oi("\\-+"),oi("[\t ]*\\+"))))))),Kb=($l=a(function(r,n,e,u,a){var c=a.a,i=a.b,o=i.a,f=i.b,d=l(Mb,ne(e),u,n),v=d.a,p=d.b,h=Xb(e),g=h.b;return b(Nb,r,Qa(Ci(h.a)),c,s(Bb,t(function(r,n){return s(Qb,Rt,s(bu,function(r){return r.dj},n))?{$:0,a:n}:{$:1,a:n}}),s(Bb,t(function(r,n){return s(Fb,function(r){return r.dj},n)}),l(lu,Hb,Vu,s(bu,function(r){var n=r.a,e=r.b;return s(Bb,t(function(r,t){return s(bu,function(r){return s(Vb,r*f+o,n*p+v)},t)}),e)},s(ce,vo,be(g)))))))}),s(Ec,Zb,s(Ec,s(no,0,s(zc,Pb,oi("[\t ]*"))),s(Ec,ro(Ob),s(Ec,s(no,1,s(zc,Pb,oi("[\t ]*"))),s(Tc,$l,s(no,"",oi("[\t ]*[a-zA-Z0-9 .\\\\()\\-]+\\n")))))))),Yb=e(function(r,n,t){return{S:t,em:r,ez:n}}),Wb=t(function(r,n){return 1>r?n:l(Xe,0,-r,n)}),rd=s(Tc,pi,s(zc,oi("\\w*"),oo)),nd=s(Pc,xl,s(Ec,oi(".*"),s(Tc,vo,s(no,!0,s(zc,Nc(F([s(Ji,!0,Bc("+")),s(Ji,!1,Bc("-"))])),oo))))),td=s(Lc,function(r){return s(Ec,function(r){var n="`{"+Zt(r)+"}";return s(Tc,s(Wu,Ci,Wb(1)),s(Hc,s(zc,oi("(?:.(?!"+n+"))*\\n"),Qi(Fi)),s(zc,oi(n),Fi)))}(r),s(Ec,nd,s(Tc,e(function(r,n,t){var e=n.a;return H(l(Yb,r,Qa(n.b),t),e)}),rd)))},Ii),ed=e(function(r,n,t){return{aD:t,am:r,cI:n}}),ud=t(function(r,n){return{Y:r,ar:n}}),ad=e(function(r,n,t){var e=ne(Yi(n)),u=t.L;if(u.b){var a=u.a,c=u.b;return P(t,{Z:t.Z+e-1,L:R(a.Y,r)?s(Tt,P(a,{ar:I(a.ar,n)}),c):s(Tt,s(ud,r,n),s(Tt,a,c))})}return P(t,{Z:e,L:F([s(ud,r,n)])})}),cd=ad(3),id=ad(1),od=t(function(r,n){return(r.am?id(r.cI):cd(r.cI))(P(n,{aD:r.aD,am:r.am}))}),fd=a(function(r,n,t,e,u){return{aD:u,Y:n,Z:e,L:t,am:r}}),sd=d(fd,!0,0,J,0,J),ld=t(function(r,n){return s(He,r,function(){return n})}),bd=s(ld,16,0),dd=t(function(r,n){return 4294967295&r+n}),vd=t(function(r,n){return n<<r|n>>>32-r}),pd=o(function(r,n,t,e,u,a,c,i){return s(dd,t,s(vd,c,s(dd,n,s(dd,i,s(dd,l(r,t,e,u),a)))))}),hd=e(function(r,n,t){return t^r&(n^t)}),gd=i(function(r,n,t,e,u,a,c){return h(pd,hd,r,n,t,e,u,a,c)}),md=e(function(r,n,t){return n^t&(r^n)}),$d=i(function(r,n,t,e,u,a,c){return h(pd,md,r,n,t,e,u,a,c)}),wd=e(function(r,n,t){return t^r^n}),xd=i(function(r,n,t,e,u,a,c){return h(pd,wd,r,n,t,e,u,a,c)}),kd=e(function(r,n,t){return n^(r|~t)}),yd=i(function(r,n,t,e,u,a,c){return h(pd,kd,r,n,t,e,u,a,c)}),qd=t(function(r,n){if(r.b&&r.b.b&&r.b.b.b&&r.b.b.b.b&&r.b.b.b.b.b&&r.b.b.b.b.b.b&&r.b.b.b.b.b.b.b&&r.b.b.b.b.b.b.b.b&&r.b.b.b.b.b.b.b.b.b&&r.b.b.b.b.b.b.b.b.b.b&&r.b.b.b.b.b.b.b.b.b.b.b&&r.b.b.b.b.b.b.b.b.b.b.b.b&&r.b.b.b.b.b.b.b.b.b.b.b.b.b&&r.b.b.b.b.b.b.b.b.b.b.b.b.b.b&&r.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b&&r.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b&&!r.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b.b){var t=r.a,e=r.b,u=e.a,a=e.b,c=a.a,i=a.b,o=i.a,f=i.b,l=f.a,b=f.b,d=b.a,v=b.b,h=v.a,g=v.b,m=g.a,$=g.b,w=$.a,x=$.b,k=x.a,y=x.b,q=y.a,A=y.b,S=A.a,j=A.b,L=j.a,_=j.b,R=_.a,T=_.b,E=T.a,D=T.b.a,C=n.aC,N=n.aA,V=n.az,z=n.aw,H=p(gd,z,V,N,C,t,7,3614090360),B=p(gd,C,H,V,N,u,12,3905402710),U=p(gd,N,B,H,V,c,17,606105819),P=p(gd,V,U,B,H,o,22,3250441966),G=p(gd,H,P,U,B,l,7,4118548399),I=p(gd,B,G,P,U,d,12,1200080426),J=p(gd,U,I,G,P,h,17,2821735955),O=p(gd,P,J,I,G,m,22,4249261313),M=p(gd,G,O,J,I,w,7,1770035416),F=p(gd,I,M,O,J,k,12,2336552879),Q=p(gd,J,F,M,O,q,17,4294925233),X=p(gd,O,Q,F,M,S,22,2304563134),Z=p(gd,M,X,Q,F,L,7,1804603682),K=p(gd,F,Z,X,Q,R,12,4254626195),Y=p(gd,Q,K,Z,X,E,17,2792965006),W=p(gd,X,Y,K,Z,D,22,1236535329),rr=p($d,Z,W,Y,K,u,5,4129170786),nr=p($d,K,rr,W,Y,h,9,3225465664),tr=p($d,Y,nr,rr,W,S,14,643717713),er=p($d,W,tr,nr,rr,t,20,3921069994),ur=p($d,rr,er,tr,nr,d,5,3593408605),ar=p($d,nr,ur,er,tr,q,9,38016083),cr=p($d,tr,ar,ur,er,D,14,3634488961),ir=p($d,er,cr,ar,ur,l,20,3889429448),or=p($d,ur,ir,cr,ar,k,5,568446438),fr=p($d,ar,or,ir,cr,E,9,3275163606),sr=p($d,cr,fr,or,ir,o,14,4107603335),lr=p($d,ir,sr,fr,or,w,20,1163531501),br=p($d,or,lr,sr,fr,R,5,2850285829),dr=p($d,fr,br,lr,sr,c,9,4243563512),vr=p($d,sr,dr,br,lr,m,14,1735328473),pr=p($d,lr,vr,dr,br,L,20,2368359562),hr=p(xd,br,pr,vr,dr,d,4,4294588738),gr=p(xd,dr,hr,pr,vr,w,11,2272392833),mr=p(xd,vr,gr,hr,pr,S,16,1839030562),$r=p(xd,pr,mr,gr,hr,E,23,4259657740),wr=p(xd,hr,$r,mr,gr,u,4,2763975236),xr=p(xd,gr,wr,$r,mr,l,11,1272893353),kr=p(xd,mr,xr,wr,$r,m,16,4139469664),yr=p(xd,$r,kr,xr,wr,q,23,3200236656),qr=p(xd,wr,yr,kr,xr,R,4,681279174),Ar=p(xd,xr,qr,yr,kr,t,11,3936430074),Sr=p(xd,kr,Ar,qr,yr,o,16,3572445317),jr=p(xd,yr,Sr,Ar,qr,h,23,76029189),Lr=p(xd,qr,jr,Sr,Ar,k,4,3654602809),_r=p(xd,Ar,Lr,jr,Sr,L,11,3873151461),Rr=p(xd,Sr,_r,Lr,jr,D,16,530742520),Tr=p(xd,jr,Rr,_r,Lr,c,23,3299628645),Er=p(yd,Lr,Tr,Rr,_r,t,6,4096336452),Dr=p(yd,_r,Er,Tr,Rr,m,10,1126891415),Cr=p(yd,Rr,Dr,Er,Tr,E,15,2878612391),Nr=p(yd,Tr,Cr,Dr,Er,d,21,4237533241),Vr=p(yd,Er,Nr,Cr,Dr,L,6,1700485571),zr=p(yd,Dr,Vr,Nr,Cr,o,10,2399980690),Hr=p(yd,Cr,zr,Vr,Nr,q,15,4293915773),Br=p(yd,Nr,Hr,zr,Vr,u,21,2240044497),Ur=p(yd,Vr,Br,Hr,zr,w,6,1873313359),Pr=p(yd,zr,Ur,Br,Hr,D,10,4264355552),Gr=p(yd,Hr,Pr,Ur,Br,h,15,2734768916),Ir=p(yd,Br,Gr,Pr,Ur,R,21,1309151649),Jr=p(yd,Ur,Ir,Gr,Pr,l,6,4149444226),Or=p(yd,Pr,Jr,Ir,Gr,S,10,3174756917),Mr=p(yd,Gr,Or,Jr,Ir,c,15,718787259),Fr=s(dd,V,p(yd,Ir,Mr,Or,Jr,k,21,3951481745)),Qr=s(dd,N,Mr),Xr=s(dd,C,Or);return{aw:s(dd,z,Jr),az:Fr,aA:Qr,aC:Xr}}return n}),Ad=t(function(r,n){return s(ci,0,s(Kl,r,n))}),Sd=u(function(r,n,t,e){var u=ji&n>>>r,a=s(_i,u,e);return l(Ri,u,a.$?Ae(l(Ri,ji&n,t,a.a)):Te(b(Sd,r-ke,n,t,a.a)),e)}),jd=e(function(r,n,t){var e=t.a,u=t.b,a=t.c,c=t.d;return 0>r||C(r,e)>-1?t:C(r,Zl(e))>-1?b(ge,e,u,a,l(Ri,ji&r,n,c)):b(ge,e,u,b(Sd,u,r,n,a),c)}),Ld=t(function(r,n){var t=n.a,e=n.b,u=e.a,a=e.b,c=n.c,i=u/4|0,o=l(jd,i,s(Ad,i,a)|r<<u%4*8,a);return 63===u?B(s(qd,Ct(o),t),H(0,bd),c+1):B(t,H(u+1,o),c+1)}),_d=fr,Rd=e(function(r,n,t){return 128>n?s(r,n,t):s(r,128|63&n,2048>n?s(r,192|n>>>6,t):s(r,128|63&n>>>6,65536>n?s(r,224|n>>>12,t):s(r,128|63&n>>>12,s(r,240|n>>>18,t))))}),Td=e(function(r,n,e){return l(_d,t(function(n,t){return l(Rd,r,ie(n),t)}),n,e)}),Ed=b(u(function(r,n,t,e){return{aw:r,az:n,aA:t,aC:e}}),1732584193,4023233417,2562383102,271733878),Dd=function(r){switch(r){case 0:return"0";case 1:return"1";case 2:return"2";case 3:return"3";case 4:return"4";case 5:return"5";case 6:return"6";case 7:return"7";case 8:return"8";case 9:return"9";case 10:return"a";case 11:return"b";case 12:return"c";case 13:return"d";case 14:return"e";case 15:return"f";default:return I(Dd(r/16|0),Dd(r%16))}},Cd=function(r){return l(re,t(function(r,n){return I(n,l(vc,2,"0",Dd(r)))}),"",F([255&(e=(n=function(r){return n=l(Td,Ld,B(Ed,H(0,bd),0),r),e=n.a,i=n.c,f=l(jd,o=(a=(u=n.b).a)/4|0,s(Ad,o,c=u.b)|128<<a%4*8,c),14>o?(t=Ct(l(jd,15,i>>>29,l(jd,14,i<<3,f))),s(qd,t,e)):function(r){return s(qd,r,s(qd,Ct(f),e))}(Ct(l(jd,15,i>>>29,l(jd,14,i<<3,bd))));var n,t,e,u,a,c,i,o,f}(r)).aw),e>>>8&255,e>>>16&255,e>>>24&255,255&(u=n.az),u>>>8&255,u>>>16&255,u>>>24&255,255&(a=n.aA),a>>>8&255,a>>>16&255,a>>>24&255,255&(c=n.aC),c>>>8&255,c>>>16&255,c>>>24&255]));var n,e,u,a,c},Nd=function(r){return H(Cd(r.S),r.S)},Vd=A,zd=t(function(r,n){var t=n.d,e=function(n){return n.$?Ae(s(Vd,r,n.a)):Te(s(Vd,e,n.a))};return b(ge,n.a,n.b,s(Vd,e,n.c),s(Vd,r,t))}),Hd=a(function(r,n,t,e,u){return{S:t,d$:u,em:r,ez:n,df:e}}),Bd=function(r){return d(Hd,r.a.em,r.a.ez,r.a.S,r.b,!1)},Ud=e(function(r,n,t){var e=s(zd,Bd,r),u=Ct(s(zd,Nd,e));return{dG:!1,dT:n,aW:e,b$:-1,a5:t,eV:_o(u),cL:!1,c6:Rt,fm:wi(F([H(s(bu,Ce,u),sd)])),aQ:0}}),Pd=L,Gd=j,Id=t(function(r,n){var t=_e(r),e=32-_e(n.l)-t,u=l(Pd,32,n.l,r);return 0>e?{m:s(Tt,Ae(u),n.m),k:n.k+1,l:l(Gd,e,t,r)}:e?{m:n.m,k:n.k,l:u}:{m:s(Tt,Ae(u),n.m),k:n.k+1,l:me}}),Jd=t(function(r,n){var e=n.a,u=n.c,a=n.d;if(r){if(C(r,Zl(e))>-1)return b(ge,e-r,ke,me,l(Gd,r-Zl(e),_e(a),a));var c=r/32|0,i=t(function(r,n){return r.$?s(Tt,r.a,n):l(Et,i,n,r.a)}),o=l(Et,i,F([a]),u),f=s(La,c,o);if(f.b){var d=f.a,v=f.b,p={m:J,k:0,l:l(Gd,r-32*c,_e(d),d)};return s(Ve,!0,l(re,Id,p,v))}return ye}return n}),Od=u(function(r,n,t,e){for(;;){var u=s(_i,ji&t>>>r,e);if(u.$)return l(Gd,0,ji&n,u.a);r-=ke,n=n,t=t,e=u.a}}),Md=e(function(r,n,t){for(;;){if(1>C(r,n)||!_e(t))return t;var e=s(_i,0,t);if(e.$)return t;r-=ke,n=n,t=e.a}}),Fd=e(function(r,n,t){var e=ji&n>>>r,u=s(_i,e,t);if(u.$)return l(Gd,0,e,t);var a=l(Fd,r-ke,n,u.a);return _e(a)?l(Ri,e,Te(a),l(Gd,0,e+1,t)):l(Gd,0,e,t)}),Qd=t(function(r,n){var t=n.a,e=n.b,u=n.c,a=n.d;if(R(r,t))return n;if(C(r,Zl(t))>-1)return b(ge,r,e,u,l(Gd,0,ji&r,a));var c=Zl(r),i=Le(s(we,32,s(Re,1,c-1))),o=s(Re,5,i*ke);return b(ge,r,o,l(Md,e,o,l(Fd,e,c,u)),b(Od,e,r,c,u))}),Xd=t(function(r,n){var t=n.a,e=0>r?t+r:r;return 0>e?0:C(e,t)>0?t:e}),Zd=e(function(r,n,t){var e=s(Xd,n,t),u=s(Xd,r,t);return C(u,e)>0?ye:s(Jd,u,s(Qd,e,t))}),Kd=t(function(r,n){var t=wi(r),e=function(){var r=s(Kl,xi(t)-1,t);if(r.$)return H(sd,t);var n=r.a,e=n.a,u=n.b;return"@output"===pi(e.ez)?H(s(od,l(ed,u,e.S,J),sd),l(Zd,0,-1,t)):H(sd,t)}(),u=e.a,a=e.b;return s(Pc,Ai(function(r){return P(r,{aR:s(Di,l(Ud,a,n,u),r.aR)})}),yi(function(r){return ki({$:1,a:xi(r.aR)})}))}),Yd=s(Lc,function(r){var n=r.a,t=r.b;return t.$?ki({$:0,a:s(bu,Ce,n)}):s(Kd,n,t.a)},s(Ec,Qi(s(zc,Ds,s(zc,ko,s(Pc,Qi(Fi),oi("[ \n]?"))))),s(Tc,vo,s(co,xl,td)))),Wd=function(r){return{$:1,a:r}},rv={$:0},nv=function(r){return{$:3,a:r}},tv=function(r){return{$:2,a:r}},ev=u(function(r,n,t,e){return{d6:t,d8:n,X:e,eR:r}}),uv=yi(function(r){return ki(xi(r.be))}),av=Wi(s(Pc,xl,s(zc,Lb,s(Pc,Bc("[[?]]"),s(Pc,oo,Qi(Fi)))))),cv=s(zc,Qi(s(Pc,xl,s(zc,Ds,oo))),s(Pc,Qi(Fi),ko)),iv=function(r){return s(Ec,cv,s(Ec,av,s(Tc,ev(r),uv)))},ov=Oi(s(Pc,xl,s(Pc,Bc("[[!]]"),s(Pc,oo,Qi(Fi))))),fv=a(function(r,n,t,e,u){return{dS:u,d5:e,e$:r,t:n,fj:t}}),sv=function(r){return{$:1,a:r}},lv={$:0},bv=function(r){return{$:3,a:r}},dv=function(r){return{$:2,a:r}},vv=t(function(r,n){return{$:1,a:r,b:n}}),pv=function(r){return{$:0,a:r}},hv=function(r){return{$:1,a:r}},gv=function(r){return{$:0,a:r}},mv=function(r){return r.$?hv(s(bu,function(){return!1},r.a)):gv(s(bu,function(){return!1},r.a))},$v=zd(mv),wv=function(r){var n=t(function(r,n){return P(n,{be:s(Di,d(fv,0,r,0,0,""),n.be)})});return s(zc,ki(r),Ai(n(function(r){switch(r.$){case 0:return lv;case 1:return sv(r.a.cX.$?s(vv,!1,F([-1])):pv(""));case 2:return dv(mv(r.a.cX));default:return bv($v(r.a.cX))}}(r.eR))))},xv=t(function(r,n){return{eO:r,cX:n}}),kv=gr,yv=t(function(r,n){var t=l(bo,Lb,r,l(so,"\n"," ",n));return t.$?J:t.a.c}),qv=e(function(r,n,t){var e=Qa(t),u=yv(r);return s(au,"(",e)&&s(kv,")",e)?H(n,u(Qa(l(Xe,1,-1,e)))):H(-1,u(e))}),Av=function(r){return r.b},Sv=s(Lc,yi,s(Tc,t(function(r,n){var t=s(Yt,"|",r);if(t.b&&!t.b.b){var e=t.a;return Ye(Qa(l(so,"_"," ",e)))?Bi(""):ki(s(xv,J,pv(e)))}var u,a=t;return u=s(ce,qv(n),a),ki(s(xv,s(bu,Av,u),s(vv,!1,s(bu,Ce,s(Wa,s(Wu,Ce,ee(0)),u)))))}),s(Pc,xl,s(Pc,Bc("]]"),s(zc,oi("[^\\]]+"),oi("[\t ]*\\[\\[")))))),jv=s(zc,s(Hc,bl,oi("[ \\t]*\\][ \\t]*")),oi("[ \\t]*\\[[ \\t]*")),Lv=s(zc,s(Hc,bl,oi("[ \\t]*\\)[ \\t]*")),oi("[ \\t]*\\([ \\t]*")),_v=s(Cc,Lv,jv),Rv=s(Pc,xl,s(Pc,Bc("]"),s(zc,ro(_v),s(Pc,Bc("["),s(Pc,oo,Qi(Fi)))))),Tv=e(function(r,n,t){return{d2:r,eO:n,cX:t}}),Ev=t(function(r,n){return l(Tv,r,n.b,wi(n.a))}),Dv=function(r){return s(Tc,Xb,ro(s(Pc,xl,s(Ec,Lb,s(Pc,Bc("]"),s(Tc,vo,s(zc,r,s(Pc,Bc("["),s(Pc,oo,Qi(Fi))))))))))},Cv=t(function(r,n){return s(Cc,s(Ji,!0,Bc(r)),s(Ji,!1,Bc(n)))}),Nv=s(Cv,"[X]","[ ]"),Vv=s(Tc,hv,ro(s(Pc,oo,s(zc,Nv,oo)))),zv=s(Cv,"(X)","( )"),Hv=s(Tc,gv,ro(s(Pc,oo,s(zc,zv,oo)))),Bv=Dv(s(Cc,Hv,Vv)),Uv=s(Ec,Bv,s(Tc,Ev,Rv)),Pv=t(function(r,n){return{eO:r,cX:n}}),Gv=t(function(r,n){return s(Pv,n.b,r(n.a))}),Iv=s(Cc,s(Tc,Gv(gv),Dv(zv)),s(Tc,Gv(hv),Dv(Nv))),Jv=s(Lc,wv,s(Lc,iv,Nc(F([s(Tc,nv,Uv),s(Tc,tv,Iv),s(Ji,rv,ov),s(Tc,Wd,Sv)])))),Ov=t(function(r,n){return{$:3,a:r,b:n}}),Mv=t(function(r,n){return{$:1,a:r,b:n}}),Fv=function(r){return{$:0,a:r}},Qv=t(function(r,n){return{$:2,a:r,b:n}}),Xv=t(function(r,n){return P(n,{bt:s(Di,H(!1,r),n.bt)})}),Zv=function(r){var n=function(){var n=t(function(r,n){return _o(s(bu,r,n))}),e=r.e5;switch(e.$){case 0:return Fv("");case 1:return s(Mv,!1,-1);case 2:return s(Qv,e.a,s(n,function(r){return H(r.a,!1)},u=e.b));default:var u=e.c;return s(Ov,e.a,s(ld,ne(e.d),s(n,function(r){return H(r,!1)},u)))}}();return s(zc,ki(r),Ai(Xv(n)))},Kv=e(function(r,n,t){return{d8:n,X:t,e5:r}}),Yv=function(r){return{$:0,a:r}},Wv=t(function(r,n){return{$:2,a:r,b:n}}),rp=s(uo,Bc("["),Bc("]")),np=function(r){return s(Pc,oi("][\t ]*"),s(zc,r,s(Pc,oi("[\t ]*\\["),Qi(Fi))))},tp=t(function(r,n){return s(Pc,xl,np(ro(s(zc,s(Hc,bl,Bc(n)),Bc(r)))))}),ep=ro(s(Pc,xl,s(zc,Lb,s(Pc,oi("[\t ]*\\[[\t ]+\\]"),Qi(Fi))))),up=s(Pc,xl,s(Tc,ne,np(s(Pc,Bc("]"),s(zc,ro(oi("_{3,}[\t ]*")),s(Pc,Bc("["),s(Pc,oo,Qi(Fi)))))))),ap=u(function(r,n,t,e){return{$:3,a:r,b:n,c:t,d:e}}),cp=t(function(r,n){return l(ap,r,n,s(bu,zi,n))}),ip=function(r){var n=r.cX;return 1!==n.$||n.b.b?Bi(""):ki({$:1,a:r.eO})},op=oi("\\w(\\w+| )*"),fp=function(r){return ro(function(r){return s(Pc,xl,s(Ec,Lb,s(Tc,vo,r)))}(np(r(op))))},sp=s(Ec,cv,s(Ec,yi(s(Wu,function(r){return r.bt},s(Wu,xi,ki))),s(Tc,Kv,Nc(F([s(Tc,Yv,up),s(Lc,ip,Sv),s(Tc,Wv(!1),fp(ao)),s(Tc,Wv(!0),fp(rp)),s(Ec,ep,s(Tc,cp(!1),s(tp,"(",")"))),s(Ec,ep,s(Tc,cp(!0),s(tp,"[","]")))]))))),lp=s(Lc,Zv,sp),bp=s(Ec,ro(_b),s(Tc,t(function(r,n){return b(qb,r,J,J,n)}),s(zc,Ab,Al))),dp=t(function(r,n){return{$:12,a:r,b:n}}),vp=s(Ec,s(Lc,function(r){var n="`{"+Zt(r)+(r>8?",}":"}"),t=oi(r>8?"([\t ]*(ascii|art))?[\t ]*\\n":"[\t ]*(ascii|art)[\t ]*\\n");return s(zc,s(Tc,s(Wu,Ci,Wb(1)),s(Hc,s(zc,oi("(?:.(?!"+n+"))*\\n"),Qi(Fi)),s(zc,oi(n),Fi))),t)},Ii),s(Tc,dp,Ab)),pp=u(function(r,n,t,e){var u=s(Uu,r,t);if(u.$)return t;var a=u.a,c=s(Kl,n,a._);return c.$?t:l(Ju,r,P(a,{_:l(jd,n,H(e,c.a.b),a._)}),t)}),hp=function(r){var n=r.a,t=r.b,e=t.a,u=t.b;return s(Ji,{$:8,a:H(e,u)},n.$?ki(0):Ai(function(r){var t=r.J;return P(r,{J:P(t,{aB:b(pp,e,u,t.aB,n)})})}))};function gp(){return s(Tc,yb,ro(s(Pc,ql,s(zc,ro(s(zc,s(co,oi("\\n?"),xp()),oi("[*+-] "))),yl("  ")))))}function mp(){var r=e(function(r,n,t){return H(n,t-r)});return Qi(s(Ec,yi(function(r){return ki(r.J.dO)}),s(Ec,s(Hc,s(Pc,Eb,xp()),oi("[\t ]*\\*{3,}[\t ]*")),s(Tc,r,s(zc,yi(function(r){return ki(r.J.dO)}),oi("[\t ]*\\*{3,}[\t ]*\\n+"))))))}function $p(){return s(Pc,ql,s(Ec,s(zc,ro(s(Pc,oi("\\n?"),s(Pc,Qi(Fi),xp()))),s(Pc,yl("> ?"),Bc("> "))),s(Tc,$b,Ab)))}function wp(){return s(Tc,yb,ro(s(Pc,ql,s(zc,ro(s(Ec,s(co,oi("\\n?"),xp()),s(Pc,Bc(". "),s(Tc,vo,oi("-?\\d+"))))),yl("   ")))))}function xp(){return Js(function(){var r=Nc(F([s(Ec,Db(xp()),s(Tc,hb,Ab)),s(Lc,hp,s(Ec,kb(Cb),s(Tc,vo,Ab))),s(Ec,Kb,s(Tc,vb,Ab)),Rb,bp,vp,s(Ec,Yd,s(Tc,pb,Ab)),$p(),Tb,s(Ec,mp(),s(Ec,Jv,s(Tc,mb,Ab))),s(Ec,lp,s(Tc,wb,Ab)),s(Ec,wp(),s(Tc,gb,Ab)),s(Ec,gp(),s(Tc,db,Ab)),s(Ec,Cb,s(Tc,Hs,Ab))]));return s(Pc,Qi(s(zc,jo,hi)),s(zc,r,s(zc,ko,Fi)))})}var kp=gp();gp=function(){return kp};var yp=mp();mp=function(){return yp};var qp=$p();$p=function(){return qp};var Ap=wp();wp=function(){return Ap};var Sp=xp();xp=function(){return Sp};var jp,Lp,_p,Rp,Tp,Ep,Dp,Cp,Np=s(Pc,ql,ro(s(Pc,oi("\\n?"),Sp))),Vp=Oi(Wi(s(Pc,Eb,(jp=Np,s(Lc,Us,s(Ec,jp,s(Pc,yl("   "),s(Tc,vo,s(zc,vi(Bc("]:")),Bc("[^")))))))))),zp=s(Pc,Vp,Wi(s(Pc,Eb,s(zc,Sp,Vp)))),Hp=e(function(r,n,t){var e=l(bo,s(zc,zp,El),s(mc,r,P(n,{cR:t.ca})),t.S);if(e.$){var u=e.a;return Ut(s(pc,u.c,u.b))}var a=e.a,c=a.a;return Jt(P(t,{dx:a.c,aR:c.aR,bT:c.dL?_t(c.bS):Rt,J:c.J,dR:Rt,b2:c.b2,eP:!0,be:c.be,bt:c.bt,fo:!0}))}),Bp=t(function(r,n){return P(r,{cT:l(jd,r.cS,n,r.cT)})}),Up=function(r){var n=Yl(r);if(n.$)return r;var t=n.a,e=function(){if(t.eP)return P(t,{J:P(t.J,{df:0})});var n=l(Hp,r.cP,r.bT,t);return n.$?P(t,{dx:J,dR:_t(n.a)}):n.a}(),u=s(ac,r.cH,s(ci,J,s(qi,function(r){return r.aN},e.bT))),a=u.b;return s(Bp,P(r,{cH:u.a,c9:b(bb,xi(e.bt),r.cS,"survey",b(bb,xi(e.aR),r.cS,"code",b(bb,xi(e.be),r.cS,"quiz",s(Fa,a,r.c9))))}),e)},Pp=function(r){return{$:1,a:r}},Gp=function(r){return{$:2,a:r}},Ip=function(r){return{$:3,a:r}},Jp=t(function(r,n){return{$:0,a:r,b:n}}),Op=function(r){var n=r.cR,t=r.eu;return sb(F([H("topic",uc(r.fh)),H("section",fb(n)),H("message",t)]))},Mp=pn,Fp=t(function(r,n){return s(bu,vo(r),n)}),Qp=ad(0),Xp=ad(2),Zp=function(r){var n=s(Kl,r.aQ,r.fm);return n.$?r:P(r,{a5:sd,fm:l(jd,r.aQ,H(n.a.a,sd),r.fm)})},Kp=t(function(r,n){var t=r.b;return l(so,"@input("+Zt(r.a)+")",t,n)}),Yp=e(function(r,n,e){var u=to(s(ci,"",Co(e)));return l(Ya,"eval",r,uc(l(so,"@input",u,l(re,Kp,n,s(ce,t(function(r,n){return H(r,to(n))}),e)))))}),Wp=t(function(r,n){return F([l(Yp,r,n.dT,Ct(s(zd,function(r){return r.S},n.aW)))])}),rh=t(function(r,n){return H(P(n,{cL:!0}),s(Wp,r,n))}),nh=function(r){return{$:3,b:r}},th=b(ib,ed,s(ku,"ok",xu),s(ku,"result",za),s(ku,"details",nh(Fl))),eh=function(r){var n=s(Da,th,r);return n.$?l(ed,!1,pe(n.a),J):n.a},uh=Ir,ah=u(function(r,n,t,e){return F([l(Ya,"flip",n,Op(l(Ya,r,t,uh(e))))])}),ch=e(function(r,n,t){return b(ah,"view",r,n,t.df)}),ih=e(function(r,n,t){return b(ah,"fullscreen",r,n,t.d$)}),oh=e(function(r,n,t){return{V:n,F:t,A:r}}),fh=l(oh,"",ye,0),sh=t(function(r,n){return l(Ya,"input",r,uc(n))}),lh=t(function(r,n){return l(Xa,e(function(r,n,t){return s(Ku,r,t)}),r,n)}),bh=y,dh=e(function(r,n,e){var u=e.c,a=e.d,c=t(function(n,t){return l(bh,n.$?r:c,t,n.a)});return l(bh,r,l(bh,c,n,u),a)}),vh=t(function(r,n){return Ir(l(dh,Mr(r),[],n))}),ph=e(function(r,n,t){return Ir(l(Xa,e(function(t,e,u){return l(Or,r(t),n(e),u)}),{},t))}),hh=function(r){return fb(function(){switch(r){case 0:return-1;case 1:return 0;case 2:return 1;default:return 2}}())},gh=function(r){var n=r.ar;return sb(F([H("level",hh(r.Y)),H("text",uc(n))]))},mh=function(r){return sb(F([H("ok",uh(r.am)),H("level",hh(r.Y)),H("messages",s(rc,gh,r.L)),H("lines",fb(r.Z)),H("details",s(rc,Oe,r.aD))]))},$h=function(r){return sb(F([H("lang",uc(r.em)),H("name",uc(r.ez)),H("code",uc(r.S)),H("visible",uh(r.df)),H("fullscreen",uh(r.d$))]))},wh=function(r){var n=r.b;return sb(F([H("hashes",s(rc,uc,r.a)),H("log",mh(n))]))},xh=Fr,kh=e(function(r,n,t){return l(Ya,"version_append",r,sb(F([H("version_active",fb(n.aQ)),H("log",mh(n.a5)),H("file",s(vh,$h,n.aW)),H("version",(e=s(Kl,xi(n.fm)-1,n.fm),e.$?xh:wh(e.a))),H("repository",l(ph,Oe,uc,t))])));var e}),yh=t(function(r,n){var t=n.a,e=n.b,u=function(r){var n=s(zd,function(r){return r.S},r.aW),t=Ct(s(zd,Cd,n));if(s(ci,!1,s(qi,vf(t),s(qi,Ce,s(Kl,r.aQ,r.fm))))){var e=s(Za,r.eV,_o(l(te,vo,t,Ct(n))));return _t(H(P(r,{a5:sd,eV:e,fm:s(Di,H(t,sd),r.fm),aQ:xi(r.fm)}),s(lh,e,r.eV)))}return Rt}(t);if(u.$)return H(t,e);var a=u.a,c=a.a;return H(c,s(Tt,l(kh,r,c,a.b),e))}),qh=t(function(r,n){return H(n,F([l(Ya,"load",r,sb(F([H("file",s(vh,$h,n.aW)),H("version_active",fb(n.aQ)),H("log",mh(n.a5))])))]))}),Ah=S,Sh=t(function(r,n){var e=n.c,u=n.d,a={m:J,k:0,l:l(Ah,r,Zl(n.a),u)},c=t(function(n,t){if(n.$){var e=Ae(l(Ah,r,32*t.k,n.a));return{m:s(Tt,e,t.m),k:t.k+1,l:t.l}}return l(bh,c,t,n.a)});return s(Ve,!0,l(bh,c,a,e))}),jh=t(function(r,n){var e=s(Kl,r,n.fm);if(e.$)return n;var u=e.a,a=u.b,c=wi(s(bu,function(r){return s(Uu,r,n.eV)},u.a));return P(n,{aW:s(Sh,t(function(r,n){return P(n,{S:(t=s(Kl,r,c),t.$||t.a.$?n.S:t.a.a)});var t}),n.aW),a5:a,aQ:r})}),Lh=e(function(r,n,t){var e=H(s(Kl,t.aQ,t.fm),s(Da,za,n));if(e.a.$||e.b.$)return t;var u=e.a.a.a,a=e.b.a;return P(t,{a5:s(r,a,t.a5),fm:l(jd,t.aQ,H(u,s(r,a,t.a5)),t.fm)})}),_h=e(function(r,n,t){return s(qi,n,s(Kl,r,t))}),Rh=e(function(r,n,t){if(t.$)return H(n,J);var e=t.a,u=e.b;return H(l(jd,r,e.a,n),R(u,J)?J:u)}),Th=t(function(r,n){return P(n,{dT:r.dT})}),Eh=t(function(r,n){return wi(l(te,Th,Ct(r),Ct(n)))}),Dh=function(r){return sb(F([H("file",s(vh,$h,r.aW)),H("version",s(vh,wh,r.fm)),H("version_active",fb(r.aQ)),H("log",mh(r.a5)),H("repository",l(ph,Oe,uc,r.eV)),H("compact_view",uh(r.dG))]))},Ch=function(r){return l(Ya,"store",-1,r)},Nh=function(r){return Ch(s(vh,Dh,r))},Vh=function(r){return{$:4,b:r}},zh=s(Ue,function(r){return Ie(function(){switch(r){case 0:return 1;case 1:return 2;case 2:return 3;default:return 0}}())},Ca),Hh=l(Ge,ud,s(ku,"level",zh),s(ku,"text",za)),Bh=Tr,Uh=v(Bh,fd,s(ku,"ok",xu),s(ku,"level",zh),s(ku,"messages",nh(Hh)),s(ku,"lines",Ca),s(ku,"details",nh(Fl))),Ph=function(r){return s(Pe,_o,function(r){return{$:8,b:r}}(r))},Gh=Er,Ih=c(function(r,n,t,e,u,a){return(c=r,function(r){return function(n){return function(t){return function(e){return function(u){return function(a){return function(i){return function(o){return function(f){return{dG:f,dT:u,aW:c,b$:r,a5:a,eV:e,cL:i,c6:o,fm:n,aQ:t}}}}}}}}}})(-1)(n)(t)(u)("")(e)(!1)(Rt)(a);var c}),Jh=v(Bh,Hd,s(ku,"lang",za),s(ku,"name",za),s(ku,"code",za),s(ku,"visible",xu),s(ku,"fullscreen",xu)),Oh=l(Ge,vo,s(ku,"hashes",nh(za)),s(ku,"log",Uh)),Mh=p(Gh,Ih,s(ku,"file",Vh(Jh)),s(ku,"version",Vh(Oh)),s(ku,"version_active",Ca),s(ku,"log",Uh),s(ku,"repository",Ph(za)),s(ku,"compact_view",xu)),Fh=t(function(r,n){var t=function(r){return s(Da,(n=Vh(Mh),Pl(F([Ul(Rt),s(Pe,_t,n)]))),r);var n}(r);return t.$?H(n,J):t.a.$?H(n,xi(n)?F([Nh(n)]):J):H(s(Eh,n,t.a.a),J)}),Qh=e(function(r,n,t){var e=s(Kl,t.aQ,t.fm);if(e.$)return t;var u=e.a.a;return P(t,{a5:s(od,n,t.a5),cL:!!r&&t.cL,fm:l(jd,t.aQ,H(u,s(od,n,t.a5)),t.fm)})}),Xh=function(r){var n=s(Kl,r.aQ,r.fm);return n.$?r:P(r,{cL:!1,c6:Rt,fm:l(jd,r.aQ,H(n.a.a,r.a5),r.fm)})},Zh=a(function(r,n,t,e,u){var a=s(Kl,r,t);if(a.$)return H(t,J);var c=a.a,i=s(qi,e,s(Kl,n,c.aW));if(i.$)return H(t,J);var o=i.a;return H(l(jd,r,P(c,{aW:l(jd,n,o,c.aW)}),t),u(o))}),Kh=t(function(r,n){var t=r?n.F-1:n.F+1,e=s(Kl,t,n.V);return e.$?n:P(n,{F:t,A:e.a})}),Yh=t(function(r,n){if(r.$)return H(P(n,{A:r.a}),Rt);var t=r.a;return 13===t?H(function(r){return P(r,s(ci,!0,s(qi,function(n){return!R(n,r.A)},s(Kl,r.F,r.V)))&&""!==r.A?{V:s(Di,r.A,r.V),F:xi(r.V)+1,A:""}:{F:r.F+1,A:""})}(n),_t(n.A+"\n")):H(38===t?s(Kh,!0,n):40===t?s(Kh,!1,n):n,Rt)}),Wh=e(function(r,n,t){var e=s(qi,Yh(n),t.c6);if(e.$)return H(t,J);if(1===e.a.b.$)return H(P(t,{c6:_t(a=e.a.a)}),J);var u=e.a,a=u.a,c=u.b.a;return H(P(t,{a5:s(id,c,t.a5),c6:_t(a)}),F([r(c)]))}),rg=t(function(r,n){return H(n,F([l(Ya,"version_update",r,sb(F([H("version_active",fb(n.aQ)),H("log",mh(n.a5)),H("version",(t=s(Kl,n.aQ,n.fm),t.$?xh:wh(t.a)))])))]));var t}),ng=t(function(r,n){switch(r.$){case 0:return l(Rh,o=r.a,n,s(qi,yh(o),l(_h,o,rh(o),n)));case 2:var t=r.c;return d(Zh,e=r.a,u=r.b,n,function(r){return P(r,{S:t})},function(){return J});case 3:return d(Zh,e=r.a,u=r.b,n,function(r){return P(r,{df:!r.df})},s(ch,e,u));case 4:var e,u;return d(Zh,e=r.a,u=r.b,n,function(r){return P(r,{d$:!r.d$})},s(ih,e,u));case 5:var a=r.b;return l(Rh,o=r.a,n,s(qi,qh(o),l(_h,o,jh(a),n)));case 6:return l(Rh,o=r.a,n,s(qi,qh(o),l(_h,o,jh(0),n)));case 7:return a=s(ci,0,l(_h,o=r.a,s(Wu,function(r){return r.fm},s(Wu,xi,Mt(-1))),n)),l(Rh,o,n,s(qi,qh(o),l(_h,o,jh(a),n)));case 9:var c=r.a;switch(c.fh){case"eval":var i=function(r){return eh(r.eu)}(c);switch(i.cI){case"LIA: wait":return l(Rh,c.cR,n,s(qi,function(r){return H(r,J)},l(_h,c.cR,function(r){return P(r,{a5:sd})},n)));case"LIA: stop":return l(Rh,c.cR,n,s(qi,rg(c.cR),l(_h,c.cR,Xh,n)));case"LIA: clear":return l(Rh,c.cR,n,s(qi,function(r){return H(r,J)},l(_h,c.cR,Zp,n)));case"LIA: terminal":return l(Rh,c.cR,n,s(qi,function(r){return H(r,J)},l(_h,c.cR,function(r){return P(r,{a5:i.am?sd:r.a5,c6:_t(fh)})},n)));default:return l(Rh,c.cR,n,s(qi,rg(c.cR),l(_h,c.cR,s(Qh,!1,i),n)))}case"restore":return s(Fh,c.eu,n);case"debug":return l(Rh,c.cR,n,s(qi,function(r){return H(r,J)},l(_h,c.cR,s(Lh,Qp,c.eu),n)));case"info":return l(Rh,c.cR,n,s(qi,function(r){return H(r,J)},l(_h,c.cR,s(Lh,id,c.eu),n)));case"warn":return l(Rh,c.cR,n,s(qi,function(r){return H(r,J)},l(_h,c.cR,s(Lh,Xp,c.eu),n)));case"error":return l(Rh,c.cR,n,s(qi,function(r){return H(r,J)},l(_h,c.cR,s(Lh,cd,c.eu),n)));default:return H(n,J)}case 1:return l(Rh,o=r.a,n,s(qi,function(r){return H(r,function(r){return F([l(Ya,"stop",r,xh)])}(o))},l(_h,o,function(r){return P(r,{cL:!1,c6:Rt})},n)));default:var o,f=r.b;return l(Rh,o=r.a,n,l(_h,o,s(Wh,sh(o),f),n))}}),tg=t(function(r,n){return{$:4,a:r,b:n}}),eg=l(Ya,"speak",-1,uc("cancel")),ug=t(function(r,n){return l(Ya,"execute",-1,sb(F([H("delay",fb(r)),H("code",uc(n))])))}),ag=(Cp=function(){return{cO:(r=vt.body,n=vt.documentElement,{di:Math.max(r.scrollWidth,r.offsetWidth,n.scrollWidth,n.offsetWidth,n.clientWidth),b5:Math.max(r.scrollHeight,r.offsetHeight,n.scrollHeight,n.offsetHeight,n.clientHeight)}),de:{dj:pt.pageXOffset,fs:pt.pageYOffset,di:vt.documentElement.clientWidth,b5:vt.documentElement.clientHeight}};var r,n},Xr(function(r){ft(function(){r(Qr(Cp()))})})),cg=function(r){return 0>C(r.df,r.dO)},ig=function(r){return r.df>0},og=e(function(r,n,t){return l(Ya,"speak",-1,s(rc,uc,F([n,t,r?"true":"false"])))}),fg=u(function(r,n,t,e){var u=n?function(r){return yb(s(bu,function(r){return r.b},(n=Vt(r.X),s(Fb,Oe,n))));var n}(e):function(r){var n=s(Uu,r.df,r.X);return n.$?J:n.a}(e);return l(sg,r,{$:3,a:s(Tt,l(Ya,"persistent",-1,uc("load")),s(bu,ug(t),u))},e)}),sg=e(function(r,n,t){switch(n.$){case 0:return B(t,s(wu,tg(n.a),ag),J);case 1:return cg(t)?b(fg,r,!1,0,P(t,{df:t.df+1})):B(t,zl,J);case 2:return ig(t)?b(fg,r,!1,0,P(t,{df:t.df-1})):B(t,zl,J);case 3:var e=n.a,u=s(Tt,l(Ya,"scrollTo",-1,uc("focused")),e);return B(t,zl,function(){var n=function(r){return s(qi,function(r){return H(r.dF,r.eB)},s(Uu,r.df,r.aB))}(t);if(n.$)return s(Tt,eg,u);var e=n.a;return s(Tt,l(og,r,e.b,e.a),u)}());default:return b(fg,r,n.a,0,t)}}),lg=t(function(r,n){var t=H(r.cX,n);r:for(;;){if(t.a.$){if(1===t.b.$&&t.b.b.b&&!t.b.b.b.b){var e=t.a.b;return!ls(s(Wa,je(t.b.b.a),e))}break r}if(t.b.$)break r;return R(t.a.a,t.b.a)}return!1}),bg=e(function(r,n,t){return r(n(t))}),dg=t(function(r,n){return!s(nc,s(bg,ec,r),n)}),vg=t(function(r,n){var e=H(r.cX,n);r:for(;;){if(e.a.$){if(1===e.b.$)return R(u=e.a.a,a=e.b.a);break r}if(e.b.$)break r;var u=e.a.a,a=e.b.a;return s(nc,Oe,l(te,t(function(r,n){return r&&n}),u,a))}return!1}),pg=t(function(r,n){var t=Ct(n),e=s(bu,Pv(J),Ct(r.cX));return s(dg,Oe,l(te,vg,e,t))}),hg=t(function(r,n){return function(){var t=H(r,n);r:for(;;)switch(t.a.$){case 1:if(1===t.b.$)return s(lg,t.a.a,t.b.a);break r;case 2:if(2===t.b.$)return s(vg,t.a.a,t.b.a);break r;case 3:if(3===t.b.$)return s(pg,t.a.a,t.b.a);break r;default:break r}return!1}()?1:0}),gg=t(function(r,n){return P(n,{e$:s(hg,r,n.t),fj:n.fj+1})}),mg=t(function(r,n){var t=H(r,n);r:for(;;){if(1!==t.b.$){if(2===t.a.$)return pv(t.a.a);break r}switch(t.a.$){case 1:return s(vv,!1,F([t.a.a]));case 0:var e=t.b;return s(vv,!e.a,e.b);default:break r}}return n}),$g=t(function(r,n){if(n.b){var t=n.a;return s(Tt,r?t:!t,s($g,r-1,n.b))}return J}),wg=t(function(r,n){return n.b?s(Tt,!r,s(wg,r-1,n.b)):J}),xg=t(function(r,n){return n.$?hv(s($g,r,n.a)):gv(s(wg,r,n.a))}),kg=t(function(r,n){var t=r.a,e=s(qi,xg(r.b),s(Kl,t,n));return e.$?n:l(jd,t,e.a,n)}),yg=t(function(r,n){return s(xg,r,n)}),qg=t(function(r,n){return P(n,{t:function(){var t=H(r,n.t);r:for(;;)switch(t.a.$){case 0:if(1===t.b.$)return sv(s(mg,t.a.b,t.b.a));break r;case 1:if(2===t.b.$)return dv(s(yg,t.a.b,t.b.a));break r;case 2:if(3===t.b.$)return bv(s(kg,t.a.b,t.b.a));break r;default:break r}return n.t}()})}),Ag=function(r){return sb(F(r.$?[H("MultipleChoice",s(rc,uh,r.a))]:[H("SingleChoice",s(rc,uh,r.a))]))},Sg=function(r){switch(r.$){case 0:return sb(F([H("Empty",xh)]));case 1:return function(r){return sb(F(r.$?r.b.b&&!r.b.b.b?[H("Select",fb(r.b.a))]:[H("Select",fb(-1))]:[H("Text",uc(r.a))]))}(r.a);case 2:return Ag(r.a);default:return function(r){return sb(F([H("Matrix",s(vh,Ag,r))]))}(r.a)}},jg=function(r){return sb(F([H("solved",fb(function(){switch(r.e$){case 0:return 0;case 1:return 1;default:return-1}}())),H("state",Sg(r.t)),H("trial",fb(r.fj)),H("hint",fb(r.d5)),H("error_msg",uc(r.dS))]))},Lg=function(r){return H(r,Xi(Ch(function(r){return s(vh,jg,r)}(r))))},_g=function(r){switch(r.$){case 0:return lv;case 1:return sv(r.a.cX);case 2:return dv(r.a.cX);default:return bv(r.a.cX)}},Rg=t(function(r,n){if(n.b){var e=n.b;return s(Tt,n.a,l(lu,t(function(n,t){return s(Tt,r,s(Tt,n,t))}),J,e))}return J}),Tg=function(r){return r.$?"["+Ci(s(Rg,",",s(bu,function(r){return r?"1":"0"},r.a)))+"]":Zt(s(ci,-1,s(qi,Ce,Co(s(Wa,Av,s(ce,vo,r.a))))))},Eg=function(r){return"["+Ci(s(Rg,",",s(bu,Tg,Ct(r))))+"]"},Dg=Pl(F([s(Pe,pv,s(ku,"Text",za)),s(Pe,s(Wu,Xi,vv(!1)),s(ku,"Select",Ca))])),Cg=Pl(F([s(Pe,gv,s(ku,"SingleChoice",nh(xu))),s(Pe,hv,s(ku,"MultipleChoice",nh(xu)))])),Ng=s(ku,"Matrix",Vh(Cg)),Vg=Pl(F([s(Pe,sv,Dg),s(Pe,dv,Cg),s(Pe,bv,Ng),s(Ue,function(){return Ie(lv)},s(ku,"Empty",Fl))])),zg=v(Bh,fv,s(Ue,function(r){switch(r){case 0:return Ie(0);case 1:return Ie(1);default:return Ie(2)}},s(ku,"solved",Ca)),s(ku,"state",Vg),s(ku,"trial",Ca),s(ku,"hint",Ca),s(ku,"error_msg",za)),Hg=t(function(r,n){var t=s(Kl,r,n);if(t.$)return Rt;var e=t.a;return 1===e.e$||2===e.e$?Rt:_t(e)}),Bg=e(function(r,n,t){var e=s(Hg,r,n);return e.$?n:l(jd,r,t(e.a),n)}),Ug=t(function(r,n){switch(r.$){case 0:case 1:case 2:return H(l(Bg,r.a,n,qg(r)),J);case 3:if(1===r.c.$)return Lg(l(Bg,r.a,n,gg(a=r.b)));var t=r.a,e=r.c.a,u=function(){var r,e=s(qi,function(r){return r.t},s(Kl,t,n));r:for(;!e.$;)switch(e.a.$){case 1:return(r=e.a.a).$?r.b.b&&!r.b.b.b?Zt(r.b.a):"":r.a;case 2:return Tg(e.a.a);case 3:return Eg(e.a.a);default:break r}return""}();return H(n,F([l(Yp,t,e,F([u]))]));case 4:return Lg(l(Bg,t=r.a,n,function(r){return P(r,{d5:r.d5+1})}));case 5:var a=r.b;return Lg(l(Bg,t=r.a,n,function(r){return P(r,{dS:"",e$:2,t:_g(a)})}));default:var c=r.a;switch(c.fh){case"eval":return Lg(l(Bg,c.cR,n,(i=eh(c.eu)).am?"true"===i.cI?function(r){return P(r,{dS:"",e$:1,fj:r.fj+1})}:function(r){return P(r,{dS:"",e$:0,fj:r.fj+1})}:function(r){return P(r,{dS:i.cI})}));case"restore":return H(s(Ua,n,function(r){return s(Da,Vh(zg),r)}(c.eu)),J);default:return H(n,J)}}var i}),Pg=t(function(r,n){return{$:5,a:r,b:n}}),Gg=function(r){return sb(s(bu,function(r){return H(r.a,uh(r.b))},Vt(r)))},Ig=function(r){return sb(function(){switch(r.$){case 0:return F([H("Text",uc(r.a))]);case 1:return F([H("Select",fb(r.b))]);case 2:return F([H(r.a?"SingleChoice":"MultipleChoice",Gg(r.b))]);default:return F([H(r.a?"SingleChoiceMatrix":"MultipleChoiceMatrix",s(vh,Gg,r.b))])}}())},Jg=function(r){var n=r.b;return sb(F([H("submitted",uh(r.a)),H("state",Ig(n))]))},Og=function(r){return s(vh,Jg,r)},Mg=t(function(r,n){var t=s(Kl,n,r);return t.$||t.a.a?r:l(jd,n,H(!0,t.a.b),r)}),Fg=function(r){return l(Nt,e(function(r,n,t){return s(Tt,n,t)}),J,r)},Qg=t(function(r,n){var t=s(Kl,n,r);if(t.$||t.a.a)return!1;switch(t.a.b.$){case 0:return""!==t.a.b.a;case 1:return!R(t.a.b.b,-1);case 2:return ne(s(Wa,function(r){return r},Fg(t.a.b.b)))>0;default:return s(dg,function(r){return ne(r)>0},s(bu,function(r){return s(Wa,function(r){return r},r)},s(bu,Fg,Ct(t.a.b.b))))}}),Xg=function(r){return'"'+r.a+'": '+(r.b?"1":"0")},Zg=function(r){switch(r.$){case 0:return r.a;case 1:return Zt(r.b);case 2:return"{"+Ci(s(Rg,", ",s(bu,Xg,Vt(r.b))))+"}";default:var n=r.b;return"["+Ci(s(Rg,",\n",s(bu,s(Wu,Qv(!1),Zg),Ct(n))))+"]"}},Kg=Pl(F([s(Pe,Fv,s(ku,"Text",za)),s(Pe,Mv(!1),s(ku,"Select",Ca)),s(Pe,Qv(!0),s(ku,"SingleChoice",Ph(xu))),s(Pe,Qv(!1),s(ku,"MultipleChoice",Ph(xu))),s(Pe,Ov(!1),s(ku,"SingleChoiceMatrix",Vh(Ph(xu)))),s(Pe,Ov(!0),s(ku,"MultipleChoiceMatrix",Vh(Ph(xu))))])),Yg=l(Ge,vo,s(ku,"submitted",xu),s(ku,"state",Kg)),Wg=e(function(r,n,t){return l(jd,n,H(!1,t),r)}),rm=u(function(r,n,e,u){var a,c=s(Kl,n,r);return c.$||c.a.a||3!==c.a.b.$?r:l(Wg,r,n,c.a.b.a?s(Ov,!0,s(ci,a=c.a.b.b,s(qi,function(r){return l(jd,e,r,a)},s(qi,function(r){return l(Yu,u,function(r){return s(qi,ec,r)},r)},s(Kl,e,a))))):s(Ov,!1,s(ci,a=c.a.b.b,s(qi,function(r){return l(jd,e,r,a)},s(qi,function(r){return l(Yu,u,function(){return _t(!0)},r)},s(qi,function(r){return s(Bb,t(function(){return!1}),r)},s(Kl,e,a)))))))}),nm=e(function(r,n,t){var e=s(Kl,n,r);return e.$||e.a.a||1!==e.a.b.$?r:l(Wg,r,n,s(Mv,!1,t))}),tm=t(function(r,n){var t=s(Kl,n,r);if(t.$||t.a.a||1!==t.a.b.$)return r;var e=t.a.b;return l(Wg,r,n,s(Mv,!e.a,e.b))}),em=e(function(r,n,t){var e=s(Kl,n,r);return e.$||e.a.a||e.a.b.$?r:l(Wg,r,n,Fv(t))}),um=e(function(r,n,e){var u=s(Kl,n,r);if(u.$||u.a.a||2!==u.a.b.$)return r;if(u.a.b.a)return l(Wg,r,n,s(Qv,!0,l(Yu,e,function(r){return s(qi,ec,r)},a=u.a.b.b)));var a=u.a.b.b;return l(Wg,r,n,s(Qv,!1,l(Yu,e,function(){return _t(!0)},s(Bb,t(function(){return!1}),a))))}),am=t(function(r,n){r:for(;;)switch(r.$){case 0:return H(l(em,n,r.a,r.b),J);case 1:return H(l(nm,n,e=r.a,r.b),J);case 2:return H(s(tm,n,e=r.a),J);case 3:return H(l(um,n,r.a,r.b),J);case 4:return H(b(rm,n,r.a,r.b,r.c),J);case 5:if(1===r.b.$){if(s(Qg,n,e=r.a)){var t=s(Mg,n,e);return H(t,Xi(Ch(Og(t))))}return H(n,J)}var e,u=r.b.a,a=s(Kl,e=r.a,n);return H(n,a.$||a.a.a?J:F([l(Yp,e,u,F([Zg(a.a.b)]))]));default:var c=r.a;switch(c.fh){case"eval":if("true"===eh(c.eu).cI){r=s(Pg,c.cR,Rt),n=n;continue r}return H(n,J);case"restore":return H(s(Ua,n,(i=c.eu,s(Da,Vh(Yg),i))),J);default:return H(n,J)}}var i}),cm=t(function(r,n){switch(r.$){case 0:var t=r.a,e=l(sg,t,r.b,n.J),u=e.b,a=e.c;return B(P(n,{J:e.a}),s(Mp,Jp(t),u),s(Fp,"effect",s(bu,Op,a)));case 1:var c=s(ng,r.a,n.aR);if(c.b.b){var i=c.b;return B(P(n,{aR:c.a}),zl,s(Fp,"code",s(bu,Op,i)))}return B(P(n,{aR:c.a}),zl,J);case 2:var o=s(Ug,r.a,n.be);return a=o.b,B(P(n,{be:o.a}),zl,s(Fp,"quiz",s(bu,Op,a)));case 3:var f=s(am,r.a,n.bt);return a=f.b,B(P(n,{bt:f.a}),zl,s(Fp,"survey",s(bu,Op,a)));case 5:return B(P(n,{b1:_t(r.a)}),zl,J);default:return B(P(n,{b1:Rt}),zl,J)}}),im=e(function(r,n,t){switch(r){case"code":return s(cm,Pp({$:9,a:n}),t);case"quiz":return s(cm,Gp(function(r){return{$:6,a:r}}(n)),t);case"survey":return s(cm,Ip(function(r){return{$:6,a:r}}(n)),t);default:return B(t,zl,J)}}),om=t(function(r,n){return cm(s(Jp,n,function(r){return{$:0,a:r}}(r)))}),fm={$:1},sm=function(r){return cm(s(Jp,r,fm))},lm={$:2},bm=function(r){return cm(s(Jp,r,lm))},dm=e(function(r,n,t){if(n.b){var e=n;return Ma(s(Tt,s(Mp,Ol,t),s(bu,function(n){return lb(l(Ya,n.a,r,n.b))},e)))}return s(Mp,Ol,t)}),vm=function(r){return P(r,{df:!0})},pm=t(function(r,n){return P(n,{df:s(Fe,r,pi(n.S))})}),hm=t(function(r,n){var t=""===n?vm:pm(pi(n));return s(zd,t,r)}),gm=t(function(r,n){return H(r,s(hm,n,r))}),mm={$:0},$m=function(r){return{$:2,a:r}},wm={$:1},xm=function(r){var n=s(Da,za,r);if(n.$)return $m(pe(n.a));switch(n.a){case"start":return mm;case"stop":return wm;default:return $m(n.a)}},km=function(r){return l(Ya,"effect",-1,Op(l(Ya,"speak",-1,uc(r?"repeat":"cancel"))))},ym=t(function(r,n){return s(Ua,r,s(Ba,r,n))}),qm=function(r){return sb(F([H("table_of_contents",uh(r.c4)),H("mode",(n=r.ex,uc(function(){switch(n){case 2:return"Textbook";case 1:return"Presentation";default:return"Slides"}}()))),H("theme",uc(r.c7)),H("light",uh(r.a4)),H("editor",uc(r.bV)),H("font_size",fb(r.b0)),H("sound",uh(r.cY)),H("lang",uc(r.em))]));var n},Am=function(r){return H(r,F([l(Ya,"settings",-1,qm(r))]))},Sm=function(r){return H(r,J)},jm=t(function(r,n){var t=Ea;switch(r){case 0:return P(t,{ae:!n.ae});case 1:return P(t,{fi:!n.fi});case 2:return P(t,{ed:!n.ed});default:return P(t,{e_:!n.e_})}}),Lm=t(function(r,n){switch(r.$){case 7:var t=r.a;return Sm(function(){switch(t.fh){case"init":return s(ym,P(n,{cd:!0}),t.eu);case"speak":return P(n,{c$:R(xm(t.eu),mm)});default:return n}}());case 0:switch(r.a.$){case 0:return Am(P(n,{bH:Ea,c4:!n.c4}));case 1:var e=Am(P(n,{cY:!n.cY})),u=e.b;return H(c=e.a,s(Tt,km(c.cY),u));case 2:return Am(P(n,{a4:!n.a4}));default:return Sm(P(n,{bH:s(jm,r.a.a,n.bH)}))}case 5:switch(n.ex){case 1:return Am(P(n,{ex:0}));case 0:var a=Am(P(n,{ex:2,cY:!1}));return u=a.b,H(c=a.a,s(Tt,km(c.cY),u));default:var c,i=Am(P(n,{ex:1,cY:!0}));return u=i.b,H(c=i.a,s(Tt,km(c.cY),u))}case 1:return Am(P(n,{c7:r.a}));case 2:return Am(P(n,{bV:r.a}));case 4:return Am(P(n,{b0:r.a?n.b0+10:n.b0>10?n.b0-10:n.b0}));case 3:return Am(P(n,{em:r.a}));default:return H(n,F([l(Ya,"reset",-1,xh)]))}}),_m=t(function(r,n){r:for(;;)switch(r.$){case 0:var t=r.a;return 0>C(-1,t)&&0>C(t,xi(n.cT))?B(P(n,{cS:t}),lb(l(Ya,"persistent",t,uc("store"))),t+1):B(n,zl,-1);case 5:var e=s(Lm,r.a,n.ae);if(e.b.b){var u=e.b;return B(P(n,{ae:e.a}),Ma(s(bu,lb,u)),-1)}return B(P(n,{ae:e.a}),zl,-1);case 4:var a=s(gm,r.a,n.cT);return B(P(n,{cb:a.a,cT:a.b}),zl,-1);case 7:var c=r.a;switch(c.fh){case"settings":var i=ob(c.eu);if(i.$)return B(n,zl,-1);r=o=cb({$:7,a:i.a}),n=f=n;continue r;case"load":var o=ab,f=Up(n);r=o,n=f;continue r;case"reset":return B(n,lb(l(Ya,"reset",-1,xh)),-1);default:var b=H(s(Kl,c.cR,n.cT),ob(c.eu));if(b.a.$||b.b.$)return B(n,zl,-1);var d=l(im,c.fh,b.b.a,$=b.a.a),v=d.b;return u=d.c,B(P(n,{cT:l(jd,c.cR,y=d.a,n.cT)}),l(dm,c.cR,u,v),-1)}default:var p=H(r,Yl(n));n:for(;!p.b.$;)switch(p.a.$){case 6:var h=s(cm,p.a.a,$=p.b.a),g=h.b,m=h.c;return B(s(Bp,n,h.a),l(dm,n.cS,m,g),-1);case 3:var $=p.b.a;if(2!==n.ae.ex&&cg($.J)){var w=s(sm,n.ae.cY,$);return v=w.b,m=w.c,B(s(Bp,n,y=w.a),l(dm,n.cS,m,v),-1)}r=o=ub(n.cS+1),n=f=n;continue r;case 2:if($=p.b.a,2!==n.ae.ex&&ig($.J)){var x=s(bm,n.ae.cY,$);return v=x.b,m=x.c,B(s(Bp,n,y=x.a),l(dm,n.cS,m,v),-1)}r=o=ub(n.cS-1),n=f=n;continue r;case 1:$=p.b.a;var k=2===n.ae.ex?l(om,!0,!1,$):l(om,!1,n.ae.cY,$),y=k.a;return v=k.b,m=k.c,B(s(Bp,P(n,{c9:J}),y),Ma(s(Fa,F([lb(l(Ya,"slide",n.cS,xh)),l(dm,n.cS,m,v)]),s(bu,lb,n.c9))),-1);default:break n}return B(n,zl,-1)}}),Rm=t(function(r,n){return s(_m,ub(r),n)}),Tm=rr,Em=s(Wu,function(r){return r.cT},xi),Dm=function(r){switch(r.$){case 0:return"Bad Url "+r.a;case 1:return"Network timeout";case 3:return"Bad status "+Zt(r.a);case 2:return"Network error";default:return"Bad body "+r.a}},Cm=t(function(r,n){return{dx:J,S:n.S,aR:ye,bT:Rt,J:hc,dR:Rt,b1:Rt,b2:gc,ca:r,ea:n.b9,eP:!1,be:ye,bt:ye,c8:n.c8,df:!0,fo:!0}}),Nm=e(function(r,n,t){return{S:t,b9:r,c8:n}}),Vm=s(Wu,fc,function(r){return r.dD}),zm=s(Tc,Ci,Wi(Nc(F([oi("(?:[^#`<]+|[\\x0D\n]+|\x3c!--[\\S\\s]*?--\x3e)"),oi("(`{3,})[\\S\\s]*?\\1"),oi("`.+?`"),oi("(?:<([\\w+\\-]+)[\\S\\s]*?</\\2>|`|<)"),s(zc,Bc("#"),(Lp=function(r){return r?ki(0):Bi("")},t(function(r,n){return l(jc,Lp(Vm(n)),r,n)})))])))),Hm=s(Pc,xl,Lb),Bm=s(Tc,Qe,oi("#+")),Um=s(Ec,zm,s(Ec,Hm,s(Tc,Nm,Bm))),Pm=t(function(r,n){var t=l(bo,Um,s(mc,Oe,r),n);if(t.$){var e=t.a;return Ut(s(pc,e.c,e.b))}var u=t.a;return Jt(H(u.c,u.b.A))}),Gm=t(function(r,n){var t=s(Pm,r.bT,n);if(t.$)return H(P(r,{dR:_t(t.a)}),Rt);var e=t.a,u=e.a,a=e.b;return H(P(r,{cT:s(Di,s(Cm,Em(r),u),r.cT)}),Ye(a)?Rt:_t(a))}),Im=lt,Jm=bt,Om={$:3},Mm=t(function(r,n){return H("#"+l(so," ","-",pi(n)),"#"+Zt(r+1))}),Fm=t(function(r,n){return R(r,n.a)}),Qm=t(function(r,n){var t=Fm(pi(n)),e=Co(s(Wa,t,r));return e.$?n:e.a.b}),Xm=_m,Zm=function(r){r:for(;;){var n=r.t;n:for(;;){if(2===n.$){if(n.a){var t=r.S;if(1===t.$){r=P(r,{t:s(Oa,!1,n.b)});continue r}var e=s(Gm,r.e,t.a),u=e.a,a=P(r,{S:e.b,e:u});if(s(Tm,4,Em(u))){r=a;continue r}return H(a,Vl(Ia))}if(n.b)break n;return s(Km,nb,r)}break n}return H(r,zl)}},Km=t(function(r,n){switch(r.$){case 0:var t=s(Xm,r.a,n.e),e=t.b,u=t.c;return H(P(n,{e:t.a}),0>u?s(Mp,Gl,e):Ma(F([s(Im,n.aj,"#"+Zt(u)),s(Mp,Gl,e)])));case 3:var a=r.a;return H(n,a.$?eb(a.a):R((o=a.a).ac,n.bw.ac)?s(Im,n.aj,Sa(o)):eb(Sa(o)));case 4:var c=s(ju,ru,(o=r.a).aX);if(c.$)return H(n,zl);var i=s(Rm,c.a-1,n.e);return e=i.b,H(P(n,{e:i.a}),s(Mp,Gl,e));case 1:return function(r){var n=function(r){return s(Rm,C(r.cS,Em(r))>0?0:r.cS,P(r,{cP:Qm(s(ce,Mm,Ct(s(zd,s(Wu,function(r){return r.c8},s(Wu,zi,Qa)),r.cT)))),c9:s(Tt,l(Ya,"init",r.cS,s(rc,uc,F([(n=r.cT,"Lia: "+Qa(s(ci,"Lia",s(qi,zi,s(qi,function(r){return r.c8},s(Kl,0,n)))))),r.ap,Zt(s(ci,0,ru(s(ci,"0",Co(s(Yt,".",r.bT.fm)))))),r.bT.eM,r.bT.dt,r.bT.dF,r.bT.et]))),r.c9)}));var n}(r.e),t=n.b,e=n.c;return H(P(r,{e:n.a,t:Om}),0>e?s(Mp,Gl,t):Ma(F([s(Jm,r.aj,"#"+Zt(e)),s(Mp,Gl,t)])))}(n);case 2:return Zm(n);case 5:var o;return H(P(n,{e:P(n.e,{ap:o=r.a})}),zl);case 6:return H(P(n,{t:Au}),Ma(F([s(Jm,n.aj,"?"+n.e.ap),s(ya,qu,n.e.ap)])));case 7:return r.a.$?H(P(n,{t:Ga(Dm(r.a.a))}),zl):s(Hl,n,r.a.a);default:return r.a.$?H(P(n,{t:Ga(Dm(r.a.a))}),zl):Zm(P(n,{e:s(tb,n.e,l(so,"\r","",r.a.a)),t:(f=n.t,2===f.$?s(Oa,f.a,f.b-1):n.t)}))}var f}),Ym=Ln("div"),Wm=Nn,r$=Wm,n$=Ym(F([s(r$,"width","100%"),s(r$,"text-align","center"),s(r$,"top","25%"),s(r$,"position","absolute")])),t$=Ln("br"),e$=t(function(r,n){return s(Vn,r,uc(n))}),u$=e$("className"),a$=$r,c$=Ln("h1"),i$=Ln("h6"),o$=_n,f$=o$,s$=Ln("p"),l$=Sn,b$=l$,d$=Ln("article"),v$=function(r){return Vt(r.at)},p$=function(r){return r.dO?" ("+Zt(r.df+1)+"/"+Zt(r.dO+1)+")":""},h$=c(function(r,n,t,e,u,a){return{bB:e,em:u,a4:a,ex:r,cR:t,fn:n}}),g$=En,m$=g$,$$=Ln("section"),w$=e$("align"),x$=t(function(r,n){return s(zn,function(r){return/^(formAction$)/i.test(r)?"data-"+r:r}(r),Bn(n))}),k$=x$,y$=function(r){return b$("["+r+"]")},q$=Ln("td"),A$=Ln("tr"),S$=t(function(r,n){var t=n.a,e=n.b;return s(A$,J,F([s(q$,F([s(k$,"valign","top"),s(r$,"padding-right","10px")]),F([s(s$,J,F([y$(t)]))])),s(q$,F([s(k$,"valign","top")]),s(bu,r,e))]))}),j$=Ln("table"),L$=Vt,_$=t(function(r,n){if(-2===n.$)return b$("");var t=S$(r);return s(j$,F([s(r$,"padding","-10px"),s(r$,"border-top","2px solid black"),s(r$,"-ms-transform","scale(0.8, 0.8)"),s(r$,"-ms-transform-origin","0 50%"),s(r$,"-webkit-transform","scale(0.8, 0.8)"),s(r$,"-webkit-transform-origin-x","0"),s(r$,"transform","scale(0.8, 0.8)"),s(r$,"transform-origin","0 50%"),w$("left")]),s(bu,t,L$(n)))}),R$=t(function(r,n){if(n.$)return F([u$("lia-inline "+r)]);var t,e=n.a;return s(bu,function(r){return s(k$,r.a,r.b)},Vt(l(Ju,"class",(t=s(Uu,"class",e)).$?"lia-inline "+r:"lia-inline "+r+" "+t.a,e)))}),T$=function(r){return r.$?J:s(bu,function(r){return s(k$,r.a,r.b)},Vt(r.a))},E$=Ln("blockquote"),D$=u(function(r,n,t,e){return{$:0,a:r,b:n,c:t,d:e}}),C$=e(function(r,n,t){return b(D$,r,n,t,1)}),N$={dq:4,dC:l(C$,0,0,0),d_:14,es:1,e8:16,e9:8},V$=zn("d"),z$=zn("id"),H$=jn("http://www.w3.org/2000/svg"),B$=H$("marker"),U$=zn("markerHeight"),P$=zn("markerUnits"),G$=zn("markerWidth"),I$=zn("orient"),J$=H$("path"),O$=zn("refX"),M$=zn("refY"),F$=s(k$,"vector-effect","none"),Q$=zn("viewBox"),X$=s(B$,F([z$("triangle"),Q$("0 0 14 14"),O$("0"),M$("5"),P$("strokeWidth"),G$("10"),U$("10"),I$("auto")]),F([s(J$,F([V$("M 0 0 L 10 5 L 0 10 z"),F$]),J)])),Z$=H$("defs"),K$=t(function(r,n){return{dj:r,fs:n}}),Y$=H$("circle"),W$=zn("cx"),rw=zn("cy"),nw=zn("fill"),tw={$:0},ew=function(r){return{$:2,a:r}},uw=t(function(r,n){return{$:9,a:r,b:n}}),aw=function(r){return{$:6,a:r}},cw=function(r){return{$:4,a:r}},iw=function(r){return{$:8,a:r}},ow=t(function(r,n){switch(n.$){case 3:return cw(r);case 4:return cw(r*(e=n.a));case 5:return aw(r);case 6:return aw(r*(e=n.a));case 1:return ew(r);case 2:return ew(r*(e=n.a));case 7:return iw(r);case 8:return iw(r*(e=n.a));case 9:var t=n.b;return s(uw,s(ow,r,n.a),s(ow,r,t));case 10:var e;return t=n.c,s(uw,s(ow,r*(e=n.a),n.b),s(ow,r*e,t));default:return tw}}),fw=t(function(r,n){switch(r.$){case 3:return P(n,{fs:n.fs+8});case 4:return P(n,{fs:n.fs+8*(t=r.a)});case 5:return P(n,{fs:n.fs-8});case 6:return P(n,{fs:n.fs-8*(t=r.a)});case 1:return P(n,{dj:n.dj+4});case 2:return P(n,{dj:n.dj+4*(t=r.a)});case 7:return P(n,{dj:n.dj-4});case 8:return P(n,{dj:n.dj-4*(t=r.a)});case 9:return s(fw,r.b,s(fw,e=r.a,n));case 10:var t,e=r.b;return s(fw,s(ow,t=r.a,r.c),s(fw,s(ow,t,e),n));default:return n}}),sw=zn("stroke"),lw=zn("stroke-width"),bw=u(function(r,n,t,e){var u=r.dq*n,a=s(fw,e,t);return s(J$,F([V$(s(Kt," ",F(["M",a$(t.dj),a$(t.fs),"A",a$(u),a$(u),"0","0","0",a$(a.dj),a$(a.fs)]))),sw("black"),lw(a$(r.es)),nw("transparent"),F$]),J)}),dw=function(r){var n={dp:r.d,dw:r.c,d0:r.b,eT:r.a},t=n.d0,e=n.dw;return"rgb("+a$(n.eT)+","+a$(t)+","+a$(e)+")"},vw=zn("marker-end"),pw={$:1},hw=e(function(r,n,t){return{$:10,a:r,b:n,c:t}}),gw={$:5},mw={$:3},$w={$:7},ww=function(r){switch(r.$){case 1:return $w;case 2:return iw(r.a);case 7:return pw;case 8:return ew(r.a);case 5:return mw;case 6:return cw(r.a);case 3:return gw;case 4:return aw(r.a);case 9:var n=r.b;return s(uw,ww(r.a),ww(n));case 10:return n=r.c,l(hw,r.a,ww(r.b),ww(n));default:return r}},xw=zn("style"),kw=H$("line"),yw=zn("x1"),qw=zn("x2"),Aw=zn("y1"),Sw=zn("y2"),jw=e(function(r,n,t){var e=s(fw,t,n);return s(kw,s(Fa,r,F([yw(a$(n.dj)),qw(a$(e.dj)),Aw(a$(n.fs)),Sw(a$(e.fs))])),J)}),Lw=e(function(r,n,t){return l(jw,F([xw("stroke: "+dw(r.dC)+";stroke-width:"+a$(r.es)),vw("url(#triangle)"),F$]),s(fw,t,n),ww(t))}),_w=zn("stroke-linecap"),Rw=zn("stroke-linejoin"),Tw=function(r){return jw(F([sw(dw(r.dC)),lw(a$(r.es)),_w("round"),Rw("mitter"),F$]))},Ew=zn("height"),Dw=H$("rect"),Cw=zn("width"),Nw=zn("x"),Vw=zn("y"),zw=t(function(r,n){return s(Dw,F([Nw(a$(n.dj-4)),Vw(a$(n.fs-4)),Cw("8"),Ew("8")]),J)}),Hw=("http://www.w3.org/2000/svg",jn(Hn("http://www.w3.org/2000/svg"))),Bw=l$,Uw=e(function(r,n,t){var e=s(fw,s(uw,cw(.5),$w),n);return l(Hw,"text",F([Nw(a$(e.dj)),Vw(a$(e.fs)),xw("font-size:"+a$(r.d_)+"px;font-family:monospace")]),F([Bw(t)]))}),Pw=zn("r"),Gw=e(function(r,n,t){switch(t.$){case 3:return F([l(Lw,r,n,t.a)]);case 1:return F([l(Uw,r,n,t.a)]);case 2:var e=t.b;return F([l(Tw,r,s(fw,t.a,n),e)]);case 4:return e=t.c,F([b(bw,r,t.a,s(fw,t.b,n),e)]);case 5:var u=t.a;return yb(s(bu,s(Gw,r,n),u));case 6:return F([s(zw,r,n)]);case 7:var a=t.a;return F([s(Y$,F([W$(a$(n.dj)),rw(a$(n.fs)),Pw(a$(r.dq)),nw(a?"black":"white"),sw("black"),lw(a$(r.es))]),J)]);default:return J}}),Iw={$:3},Jw={$:6},Ow=t(function(r,n){return{$:2,a:r,b:n}}),Mw=function(r){return{$:5,a:r}},Fw={$:10},Qw={$:9},Xw=function(r){return{$:1,a:r}},Zw=function(r){return{$:3,a:r}},Kw={$:2},Yw={$:7},Ww={$:4},rx={$:6},nx=t(function(r,n){for(;;){if(!n.b)return J;var t=n.a,e=t.b,u=n.b;if((0,t.a)(r))return s(Tt,e,s(nx,r,u));r=r,n=u}}),tx=t(function(r,n){return R(n,J)?Xw(r):Mw(n)}),ex=t(function(r,n){return s(tx,r,s(nx,n,F([H(function(r){var n=r.h;return R(n,Kw)||R(n,rx)||R(n,Yw)},s(Ow,tw,gw)),H(function(r){return R(r.i,Kw)||R(r.i,rx)||R(r.i,Yw)},s(Ow,tw,mw)),H(s(Wu,function(r){return r.g},je(Ww)),s(Ow,tw,pw)),H(s(Wu,function(r){return r.j},je(Ww)),s(Ow,tw,$w)),H(s(Wu,function(r){return r.p},je(Fw)),s(Ow,tw,s(uw,gw,$w))),H(s(Wu,function(r){return r.o},je(Qw)),s(Ow,tw,s(uw,gw,pw))),H(s(Wu,function(r){return r.s},je(Qw)),s(Ow,tw,s(uw,mw,$w))),H(s(Wu,function(r){return r.r},je(Fw)),s(Ow,tw,s(uw,mw,pw)))])))}),ux=e(function(r,n,t){if(R(Iw,t.j)||R(Iw,t.g))return Xw(n);var e,u=s(ex,n,t);return 5===u.$?Mw(s(Fa,u.a,F([(e=r,{$:7,a:e})]))):Xw(n)}),ax=e(function(r,n,t){return{$:4,a:r,b:n,c:t}}),cx=t(function(r,n){return s(tx,r,s(nx,n,F([H(function(r){return R(Yw,r.p)&&R(Yw,r.s)},l(ax,4,mw,s(uw,gw,gw))),H(function(r){return R(Fw,r.p)&&R(Qw,r.s)},l(ax,4,s(uw,mw,$w),s(uw,gw,gw)))])))}),ix={$:1},ox={$:5},fx={$:0},sx=t(function(r,n){return s(tx,r,s(nx,n,F([H(function(r){return R(Ww,r.j)&&R(Ww,r.g)},s(Ow,$w,ew(2))),H(function(r){return R(Kw,r.h)&&R(Kw,r.i)},s(Ow,gw,cw(2))),H(function(r){return R(Yw,r.o)&&R(Yw,r.s)},s(Ow,tw,s(uw,gw,ew(2)))),H(function(r){return R(Qw,r.o)&&R(Qw,r.s)},s(Ow,s(uw,gw,pw),l(hw,2,mw,$w))),H(function(r){return R(Fw,r.p)&&R(Fw,r.r)},s(Ow,s(uw,gw,$w),l(hw,2,mw,pw))),H(function(r){return(R(Kw,r.h)||R(Yw,r.h)||R(rx,r.h))&&R(Ww,r.j)},Mw(F([l(ax,1,$w,s(uw,aw(.5),pw)),s(Ow,gw,cw(.5))]))),H(function(r){return(R(Kw,r.h)||R(Yw,r.h)||R(rx,r.h))&&R(Ww,r.g)},Mw(F([l(ax,1,aw(.5),s(uw,cw(.5),pw)),s(Ow,gw,cw(.5))]))),H(function(r){return(R(Kw,r.i)||R(Yw,r.i)||R(rx,r.i))&&R(Ww,r.j)},Mw(F([l(ax,1,cw(.5),s(uw,aw(.5),$w)),s(Ow,mw,aw(.5))]))),H(function(r){return(R(Kw,r.h)||R(Yw,r.h)||R(rx,r.h))&&R(ox,r.j)},Mw(F([l(ax,1,s(uw,mw,$w),s(uw,aw(.5),pw)),s(Ow,gw,cw(1.5))]))),H(function(r){return(R(Kw,r.i)||R(Yw,r.i)||R(rx,r.i))&&R(ox,r.j)},l(ax,1,cw(1.5),s(uw,aw(.5),$w))),H(function(r){return(R(Kw,r.i)||R(Yw,r.i)||R(rx,r.i))&&R(ox,r.g)},l(ax,1,s(uw,mw,pw),s(uw,cw(.5),$w))),H(function(r){return(R(Kw,r.h)||R(Yw,r.h)||R(rx,r.h))&&R(ox,r.g)},Mw(F([l(ax,1,cw(.5),s(uw,cw(.5),pw)),s(Ow,gw,cw(1.5))]))),H(function(r){return(R(Kw,r.i)||R(Yw,r.i)||R(rx,r.i))&&R(Ww,r.g)},Mw(F([l(ax,1,pw,s(uw,cw(.5),$w)),s(Ow,mw,aw(.5))]))),H(function(r){return R(Fw,r.r)&&R(Ww,r.j)},l(ax,3,s(uw,mw,pw),l(hw,2,aw(.5),$w))),H(function(r){return R(Qw,r.o)&&R(Ww,r.j)},l(ax,3,$w,s(uw,gw,ew(2)))),H(function(r){return R(Fw,r.p)&&R(Ww,r.g)},l(ax,3,s(uw,gw,$w),s(uw,mw,ew(2)))),H(function(r){return R(Qw,r.p)&&R(Ww,r.g)},l(ax,3,s(uw,gw,$w),s(uw,mw,ew(20)))),H(function(r){return R(Qw,r.s)&&R(Ww,r.g)},l(ax,3,pw,s(uw,mw,iw(2)))),H(function(r){return R(Kw,r.h)&&R(Qw,r.s)},l(ax,8,s(uw,mw,$w),l(hw,2,gw,ew(.5)))),H(function(r){return R(Kw,r.h)&&R(Fw,r.r)},l(ax,8,gw,l(hw,2,mw,ew(.5)))),H(function(r){return R(Kw,r.i)&&R(Qw,r.o)},l(ax,8,s(uw,gw,pw),l(hw,2,mw,iw(.5)))),H(function(r){return R(Kw,r.i)&&R(Fw,r.p)},l(ax,8,mw,l(hw,2,gw,iw(.5)))),H(function(r){return R(Ww,r.g)&&R(Qw,r.o)},l(ax,2,s(uw,gw,pw),mw)),H(function(r){return R(Ww,r.j)&&R(Fw,r.p)},l(ax,2,$w,gw)),H(function(r){return R(Ww,r.j)&&R(Qw,r.s)},l(ax,2,s(uw,mw,$w),gw)),H(function(r){return R(Ww,r.g)&&R(Fw,r.r)},l(ax,2,pw,mw)),H(function(r){return R(ox,r.g)&&R(Qw,r.o)},l(ax,4,s(uw,gw,pw),cw(2))),H(function(r){return R(ox,r.j)&&R(Fw,r.p)},l(ax,4,s(uw,mw,$w),aw(2))),H(function(r){return R(Ww,r.j)&&R(ix,r.r)},l(ax,4,s(uw,mw,ew(2)),s(uw,gw,iw(3)))),H(function(r){return R(fx,r.s)},l(ax,4,pw,s(uw,mw,iw(3)))),H(function(r){return R(ix,r.r)},l(ax,4,s(uw,mw,ew(2)),s(uw,gw,iw(3)))),H(function(r){return R(fx,r.p)},l(ax,4,s(uw,gw,iw(2)),s(uw,mw,ew(3)))),H(function(r){return R(ix,r.o)},l(ax,4,$w,s(uw,gw,ew(3)))),H(function(r){return R(Kw,r.h)&&R(Qw,r.o)},Mw(F([s(Ow,tw,gw),s(Ow,tw,s(uw,gw,pw))]))),H(function(r){return R(Kw,r.h)&&R(Fw,r.p)},Mw(F([s(Ow,tw,gw),s(Ow,tw,s(uw,gw,$w))]))),H(function(r){return R(Qw,r.o)&&R(Fw,r.p)},Mw(F([s(Ow,tw,s(uw,gw,pw)),s(Ow,tw,s(uw,gw,$w))])))])))}),lx=t(function(r,n){return s(tx,r,s(nx,n,F([H(function(r){return!R(Iw,r.j)||!R(Iw,r.g)},s(Ow,pw,iw(2)))])))}),bx=t(function(r,n){return s(tx,r,s(nx,n,F([H(s(Wu,function(r){return r.j},je(Qw)),s(Ow,s(uw,mw,pw),iw(4))),H(s(Wu,function(r){return r.j},je(Kw)),s(Ow,s(uw,mw,pw),iw(3))),H(s(Wu,function(r){return r.g},je(Fw)),s(Ow,s(uw,mw,$w),ew(4))),H(s(Wu,function(r){return r.g},je(Fw)),s(Ow,s(uw,mw,$w),ew(4))),H(s(Wu,function(r){return r.g},je(Kw)),s(Ow,s(uw,mw,$w),ew(3))),H(s(Wu,function(r){return r.s},je(Kw)),s(Ow,s(uw,mw,iw(2)),ew(3))),H(s(Wu,function(r){return r.r},je(Kw)),s(Ow,s(uw,mw,$w),ew(3))),H(function(r){return!R(Iw,r.j)&&!R(Iw,r.g)},s(Ow,s(uw,mw,pw),iw(2))),H(function(r){return R(fx,r.s)},l(ax,1,s(uw,mw,$w),l(hw,.15,mw,iw(4)))),H(function(r){return R(fx,r.j)},l(ax,1,s(uw,cw(.75),iw(1.6)),l(hw,.2,mw,ew(4)))),H(function(r){return R(ix,r.r)},l(ax,1,s(uw,cw(1.15),ew(1.7)),l(hw,.15,gw,iw(4)))),H(function(r){return R(ix,r.g)},l(ax,1,s(uw,mw,ew(1)),l(hw,.2,aw(2),ew(4))))])))}),dx=t(function(r,n){return s(tx,r,s(nx,n,F([H(function(r){return R(Yw,r.o)&&R(Yw,r.r)},l(ax,4,gw,s(uw,mw,mw))),H(function(r){return R(Qw,r.o)&&R(Fw,r.r)},l(ax,4,s(uw,gw,pw),s(uw,mw,mw)))])))}),vx=t(function(r,n){var t=n.a,e=n.b;switch(e.$){case 2:return R(Iw,r.j)&&R(Iw,r.g)?Xw(t):s(Ow,mw,s(uw,gw,gw));case 4:return s(lx,t,r);case 5:return s(bx,t,r);case 6:return s(ex,t,r);case 8:switch(e.a.$){case 3:return R(Kw,r.h)?Zw(gw):R(Qw,r.o)?Zw(s(uw,gw,pw)):R(Fw,r.p)?Zw(s(uw,gw,$w)):Xw(t);case 5:return R(Kw,r.i)?Zw(mw):R(Qw,r.s)?Zw(s(uw,mw,$w)):R(Fw,r.r)?Zw(s(uw,mw,pw)):Xw(t);default:return Zw(e.a)}case 7:return s(sx,t,r);case 9:return s(Ow,s(uw,gw,pw),l(hw,2,mw,$w));case 10:return s(Ow,s(uw,mw,pw),l(hw,2,gw,$w));case 0:return s(dx,t,r);case 1:return s(cx,t,r);case 11:var u=s(ex,t,r);return 5===u.$?Mw(s(Tt,Jw,u.a)):Xw(t);case 13:return l(ux,e.a,t,r);default:return Xw(t)}}),px={$:12},hx=t(function(r,n){return s(ci,px,s(qi,Av,s(Uu,r,n)))}),gx=e(function(r,n,t){return{g:s(hx,H(r+1,n),t),h:s(hx,H(r,n-1),t),o:s(hx,H(r+1,n-1),t),p:s(hx,H(r-1,n-1),t),i:s(hx,H(r,n+1),t),r:s(hx,H(r+1,n+1),t),s:s(hx,H(r-1,n+1),t),j:s(hx,H(r-1,n),t)}}),mx=function(r){return 8*r},$x=function(r){return 16*r},wx=e(function(r,n,t){var e=t.a,u=e.a,a=e.b,c=t.b,i=c.a,o=c.b,f=s(K$,mx(u)+4,$x(a)+8);return l(Gw,n,f,s(vx,l(gx,u,a,r),H(i,o)))}),xx=function(r){return{$:8,a:r}},kx=function(r){return{$:13,a:r}},yx={$:11},qx=e(function(r,n,t){var e=t.a,u=t.b,a=function(r){switch(r){case" ":return Rt;case"-":return _t(Ww);case"_":return _t(ox);case"+":return _t(rx);case".":case"'":case",":case"`":case"´":return _t(Yw);case">":return _t(xx($w));case"<":return _t(xx(pw));case"V":case"v":return _t(xx(mw));case"^":case"î":return _t(xx(gw));case"/":return _t(Qw);case"\\":return _t(Fw);case"(":return _t(fx);case")":return _t(ix);case"|":return _t(Kw);case"#":return _t(yx);case"O":case"o":return _t(kx(!1));case"*":return _t(kx(!0));default:return _t(Iw)}}(n);if(1===a.$)return H(e,u+1);var c=a.a;return H(s(Tt,H(H(u,r),H(n,c)),e),u+1)}),Ax=function(r){return s(Wu,jl,s(Wu,Yt(""),s(Wu,s(re,qx(r),H(J,0)),Ce)))},Sx=H$("svg"),jx=t(function(r,n){var t=a$(mx(n.dE)+10),e=a$($x(n.eY)+10);return s(Sx,s(Tt,Q$("0 0 "+t+" "+e),r),s(Tt,s(Z$,J,F([X$])),function(r){var n=yb(s(ce,Ax,r.Z)),t=_o(n);return yb(s(bu,s(wx,t,r.ae),n))}(n)))}),Lx=jx,_x=e(function(r,n,t){var e=s(qi,Kl(n),s(qi,function(r){return r._},s(Uu,r,t.aB)));return e.$?Rt:e.a}),Rx=t(function(r,n){return s(Vn,r,uh(n))}),Tx=Rx("hidden"),Ex=Ln("hr"),Dx=e$("id"),Cx=function(r){return r.b?_t(l(re,Re,r.a,r.b)):Rt},Nx=t(function(r,n){var t=Yi(n),e=Cx(s(bu,Qe,t));return{dE:s(ci,0,e),Z:t,eY:ne(t),ae:r}}),Vx=Nx,zx=Ln("li"),Hx=Ln("ol"),Bx=Ln("ul"),Ux=e$("value"),Px=Oe,Gx=Px,Ix={$:3},Jx=t(function(r,n){return{bf:r,bx:n}}),Ox=function(r){return s(Jx,r,Ix)},Mx=Gx({ec:function(r){return Ox(r.b?5:12)},eo:function(){return Ox(7)}}),Fx={$:0},Qx=u(function(r,n,t,e){return{b:H(n,t),H:r,fn:e}}),Xx=H$("text"),Zx=H$("tspan"),Kx=t(function(r,n){return s(Xx,F([nw(r),xw("pointer-events: none;")]),F([s(Zx,J,F([Bw(n)]))]))}),Yx=e(function(r,n,t){return s(bg,l(Qx,r,n,t),Kx("inherit"))}),Wx=t(function(r,n){return 0>C(r,n)?r:n}),rk=Yx(t(function(r,n){return s(Wx,r.cn,n.cn)})),nk=Oe,tk=Oe,ek=t(function(r,n){return r*$e(n/r)}),uk=ur,ak=t(function(r,n){var t=r/n;return R(t,uk(t))?r:s(ek,n,r)}),ck=function(r){return 0>r?-r:r},ik=t(function(r,n){var t=s(nc,function(r){return"0"!==r&&"."!==r},Qf(n));return I(r&&t?"-":"",n)}),ok=function(r){var n=r.a,t=r.b;if("9"===n){var e=de(t);return 1===e.$?"01":s(sc,"0",ok(e.a))}var u=ie(n);return u>=48&&57>u?s(sc,If(u+1),t):"0"},fk=ir,sk=e(function(r,n,t){return I(t,s(dc,r-Qe(t),lc(n)))}),lk=function(r){for(var n=r.length,t=Array(n),e=0;n>e;){var u=r.charCodeAt(e);55296>u||u>56319?(t[n-e]=r[e],e++):(t[n-e]=r[e+1],t[n-++e]=r[e-1],e++)}return t.join("")},bk=function(r){var n=s(Yt,".",r);return n.b?H(n.a,n.b.b?n.b.a:"0"):H("0","0")},dk=t(function(r,n){var t=n.b;return H(r(n.a),t)}),vk=e(function(r,n,t){if((e=t)===1/0||e===-1/0||fk(t))return a$(t);var e,u=0>t,a=bk(function(r){var n=s(Yt,"e",a$(ck(r)));if(n.b){if(n.b.b){var t=n.a,e=n.b.a,u=s(ci,0,ru(s(au,"+",e)?s(Ze,1,e):e)),a=bk(t),c=I(a.a,a.b),i=0>u?s(ci,"0",s(qi,function(r){return r.a+"."+r.b},s(qi,dk(lc),de(I(s(dc,ck(u),"0"),c))))):l(sk,u+1,"0",c);return I(0>r?"-":"",i)}return I(0>r?"-":"",t=n.a)}return""}(ck(t))),c=a.a,i=a.b,o=Qe(c)+n,f=I(s(dc,1-o,"0"),l(sk,o,"0",I(c,i))),b=Qe(f),d=s(Re,1,o),v=s(r,u,l(Xe,d,b,f)),p=l(Xe,0,d,f),h=v?lk(s(ci,"1",s(qi,ok,de(lk(p))))):p,g=Qe(h),m="0"===h?h:n>0?0>C(n,Qe(i))?l(Xe,0,g-n,h)+"."+l(Xe,g-n,g,h):I(c+".",l(sk,n,"0",i)):I(h,s(dc,ck(n),"0"));return s(ik,u,m)}),pk=vk(t(function(r,n){var t,e=de(n);return 1!==e.$&&("5"===e.a.a?""!==e.a.b||!r:(t=ie(e.a.a))>53&&r||t>=53&&!r)})),hk=function(r){return s(Wu,pk(r),s(Wu,as,ci(0)))},gk=e(function(r,n,t){var e=F(t?[1,1.2,1.5,2,2.5,3,4,5,6,8,10]:[1,2,2.5,5,10]);return n?e:1===r?s(Wa,function(r){return R(uk(r),r)},e):r>.1?e:F([1/r])}),mk=function(r){var n=s(Yt,"e",a$(r));if(n.b&&n.b.b&&!n.b.b.b)return ck(s(ci,0,ru(n.b.a)));var t=s(Yt,".",a$(r));return t.b&&t.b.b&&!t.b.b.b?Qe(t.b.a):0},$k=e(function(r,n,t){var e=s(Jf,10,Le(s(we,2.718281828459045,r)/s(we,2.718281828459045,10))),u=l(gk,e,n,t),a=r/e,c=t?function(n){for(;;){if(!n.b)return 1;var t=n.a,u=n.b;if(C(t*e,r)>-1)return t;n=u}}(u):function(r){for(;;){if(!r.b)return 1;if(r.b.b){var n=r.b,t=n.a,e=n.b;if(1>C(a,((u=r.a)+t)/2))return u;r=s(Tt,t,e)}else{var u;if(e=r.b,1>C(a,u=r.a))return u;r=e}}}(u),i=mk(e)+mk(c);return s(hk,i,c*e)}),wk=a(function(r,n,t,e,u){for(;;){var a=s(hk,mk(t),n+e*t);if(C(a,r.cn)>0)return u;r=r,n=n,t=t,e+=1,u=I(u,F([a]))}}),xk=u(function(r,n,t,e){var u=l($k,(e.cn-e.aK)/t,r,n)||1;return d(wk,e,s(ak,e.aK,u),u,0,J)}),kk=function(r){return l(xk,!0,!r.$,r.a)},yk=Oe,qk=function(r){return r/255},Ak=e(function(r,n,t){return b(D$,qk(r),qk(n),qk(t),1)}),Sk=l(Ak,163,163,163),jk=function(r){return yk({dC:Sk,aV:0,d1:!0,ci:_t(s(Kx,"inherit",a$(r))),a3:5,H:r,di:1})},Lk=t(function(r,n){return{$:0,a:r,b:n}}),_k=Lk,Rk=Oe,Tk=t(function(r,n){return{cn:s(Wx,r.cn,n.cn),aK:s(Re,r.aK,n.aK)}}),Ek=e(function(r,n,e){return nk({E:(u=Sk,Rk(t(function(r,n){var t=s(Tk,r,n);return{dC:u,bX:t.cn,dU:J,br:t.aK,di:1}}))),O:r,P:s(_k,20,20),u:tk(t(function(n,t){var e=s(Tk,n,t),u=t.cn-t.aK,a=uk((1-(u-(e.cn-e.aK))/u)*r/90);return s(bu,jk,s(kk,{$:1,a:a},e))})),c8:l(rk,0,0,n),Q:s(bg,_t,e)});var u}),Dk=Ek,Ck=t(function(r,n){return{dj:r,fs:n}}),Nk=t(function(r,n){return function(t){var e=t.fs;return s(Ck,r(t.dj),n(e))}}),Vk=s(Nk,function(r){return r.aK},function(r){return r.aK}),zk=Vk,Hk=Oe,Bk=Hk(J),Uk=Bk,Pk=l(Ak,243,243,243),Gk=t(function(r,n){return{$:1,a:r,b:n}}),Ik=Gk,Jk=s(Ik,1,Pk),Ok=Jk,Mk=t(function(r,n){return{dC:n,di:r}}),Fk=function(){return s(Mk,1,Oe)},Qk={$:0},Xk=a(function(r,n,t,e,u){return{dC:r,bM:t,bN:u,ci:e,cV:n}}),Zk=a(function(r,n,t,e,u){return d(Xk,r,n,e,t,u)}),Kk=Zk,Yk=t(function(r,n){var t=oe(r);return s(bu,function(r){return H(r,t)},n)}),Wk=function(r){switch(r){case"t":case"T":case"A":case"v":case"V":return 2;case"#":case"H":case"B":case"N":return 3;case"+":return 6;case"x":case"X":return 5;default:return 1}},ry=b(D$,0,0,0,1),ny=b(D$,52/255,101/255,164/255,1),ty=b(D$,193/255,125/255,17/255,1),ey=l(Ak,0,229,255),uy=b(D$,164/255,0,0,1),ay=b(D$,115/255,210/255,22/255,1),cy=b(D$,211/255,215/255,207/255,1),iy=b(D$,245/255,121/255,0,1),oy=l(Ak,245,105,215),fy=l(Ak,156,39,176),sy=l(Ak,216,27,96),ly=l(Ak,205,102,51),by=l(Ak,89,51,204),dy=l(Ak,29,233,182),vy=b(D$,1,1,1,1),py=b(D$,237/255,212/255,0,1),hy=_o(F([H("*",ry),H("+",ry),H("x",ry),H("a",l(Ak,127,255,212)),H("b",ny),H("c",ey),H("d",uy),H("e",cy),H("f",l(Ak,230,230,250)),H("g",ay),H("h",l(Ak,240,255,240)),H("i",l(Ak,75,0,130)),H("j",ry),H("k",l(Ak,240,230,140)),H("l",l(Ak,230,230,250)),H("m",l(Ak,255,0,255)),H("n",ty),H("o",iy),H("p",oy),H("q",l(Ak,0,255,255)),H("r",sy),H("s",by),H("t",dy),H("u",ly),H("v",fy),H("w",vy),H("y",py),H("z",l(Ak,240,255,255))])),gy=function(r){return s(ci,ry,s(Uu,U(r.toLowerCase()),hy))},my=u(function(r,n,t,e){return d(Xk,r,n,J,t,e)}),$y=my,wy=function(r){if(r.b.$)return t=r.b.a,d(Kk,gy(n=r.a),Wk(n),"",F([0,50]),s(Yk,n,t));var n,t=r.b.a;return b($y,gy(n=r.a),Wk(n),"",s(Yk,n,t))},xy=u(function(r,n,t,e){return{dy:t,ck:e,eX:n,da:r}}),ky=Oe,yy=t(function(r,n){return ky({ax:s(bu,function(r){return s(r$,r.a,r.b)},n),ay:J,d8:r,aI:b(xy,60,140,60,80),aP:0})}),qy=yy,Ay=H$("g"),Sy=function(r){var n,t=r.b,e=r.c,u=r.d,a=function(r){return uk(1e4*r)/100};return Ci(F(["rgba(",a$(a(r.a)),"%,",a$(a(t)),"%,",a$(a(e)),"%,",a$((n=u,uk(1e3*n)/1e3)),")"]))},jy=function(r){return Kx(Sy(r))},Ly=t(function(r,n){return{$:0,a:r,b:n}}),_y=function(r){return s(Re,1,r.aG.aP.di-r.aG.aI.ck-r.aG.aI.eX)},Ry=function(r){var n=r.dj.cn-r.dj.aK;return n>0?n:1},Ty=t(function(r,n){return n*_y(r)/Ry(r)}),Ey=t(function(r,n){return s(Ty,r,n-r.dj.aK)+r.aG.aI.ck}),Dy=function(r){return s(Re,1,r.aG.aP.b5-r.aG.aI.dy-r.aG.aI.da)},Cy=function(r){var n=r.fs.cn-r.fs.aK;return n>0?n:1},Ny=t(function(r,n){return n*Dy(r)/Cy(r)}),Vy=t(function(r,n){return s(Ny,r,r.fs.cn-n)+r.aG.aI.da}),zy=e(function(r,n,t){return s(Ly,s(Ey,r,n),s(Vy,r,t))}),Hy=zy,By=t(function(r,n){return s(Ly,r,n)}),Uy=By,Py=t(function(r,n){return s(Ly,n.a+r.a,n.b+r.b)}),Gy=s(lu,Py,s(Ly,0,0)),Iy=zn("transform"),Jy=function(r){var n=Gy(r),t=n.b;return Iy("translate("+a$(n.a)+", "+a$(t)+")")},Oy=Jy,My=o(function(r,n,t,e,u,a,c,i){return s(Ay,F([Oy(F([l(Hy,r,n,t),s(Uy,e,u)])),xw("text-anchor: "+a+";")]),F([s(jy,c,i)]))}),Fy=e(function(r,n,t){return{dm:F([h(My,t,t.dj.cn/2,t.fs.cn,0,-5,"middle",ry,n)]),dv:J,d7:J}}),Qy=t(function(r,n){return P(n,{dv:I(r,n.dv)})}),Xy=function(r){return F([Nw(a$(r.aG.aI.ck)),Vw(a$(r.aG.aI.da)),Cw(a$(_y(r))),Ew(a$(Dy(r)))])},Zy=e(function(r,n,t){return s(pa,function(t){return t.a?Rt:_t(s(t.b,r,n))},t)}),Ky=e(function(r,n,t){var e=yb(F([F([nw("transparent")]),Xy(t),l(Zy,n,t,r.dU)]));return s(Dw,e,J)}),Yy=zn("class"),Wy=H$("clipPath"),rq=function(r){return"chart__chart-area--"+r},nq=function(r){return s(Wy,F([z$(rq(r.d8))]),F([s(Dw,Xy(r),J)]))},tq=e(function(r,n,t){var e=n;return r(s(bu,function(r){return r.fl},t)).dC(e.dC)}),eq=t(function(r,n){return r(n)}),uq=e(function(r,n,t){return r.aP?J:F([s(r$,"height",a$(t)+"px"),s(r$,"width",a$(n)+"px")])}),aq=u(function(r,n,t,e){var u=n.aG,a=s(eq,function(r){return r.ax},r.dH),c=l(uq,r.dH,u.aP.di,u.aP.b5);return s(Ym,I(s(Tt,s(r$,"position","relative"),c),a),s(Tt,e,t))}),cq=function(r){return r.bN},iq=a(function(r,n,t,e,u){return b(u,r,n,t,e)}),oq=function(r){return r.ci},fq=e(function(r,n,t){return s(pa,function(t){return t.a?_t(s(t.b,r,n)):Rt},t)}),sq=e(function(r,n,t){return{ek:t,eQ:n,fl:r}}),lq=t(function(r,n){return l(sq,r.fl,s(Ck,r.eQ.dj,n),r.ek)}),bq=t(function(r,n){return r.b?_t(s(n,r.a,r.b)):Rt}),dq=t(function(r,n){var e=t(function(r,n){return s(lq,r,r.eQ.fs+n.eQ.fs)}),a=u(function(r,n,t,u){r:for(;;){var a=H(n,t);if(a.a.b){if(a.b.b){var c=a.a,i=c.b,o=a.b,f=o.b;if(C((h=c.a).eQ.dj,(g=o.a).eQ.dj)>0){if(g.ek){var l=r,b=s(Tt,h,i),d=f,v=s(Tt,s(e,g,r),u);r=l,n=b,t=d,u=v;continue r}P(r,{ek:!1});l=r,b=s(Tt,h,i),d=f,v=s(Tt,s(e,g,r),u);r=l,n=b,t=d,u=v;continue r}r=l=h,n=b=i,t=d=s(Tt,g,f),u=v=u;continue r}var p=a.a,h=p.a;return i=p.b,u}if(!a.b.b)return u;var g,m=a.b;f=m.b,1>C(r.eQ.dj,(g=m.a).eQ.dj)?(l=r,b=J,d=f,v=s(Tt,s(e,g,r),u),r=l,n=b,t=d,u=v):(r=l=r,n=b=J,t=d=f,u=v=s(Tt,g,u))}});return be(s(ci,J,s(bq,r,t(function(r,t){return b(a,r,t,n,J)}))))}),vq=function(r){var n=t(function(r,t){if(r.b){var e=r.b;return s(n,e,s(Tt,l(re,dq,r.a,e),t))}return t});return be(s(n,r,J))},pq=function(r){return r.Q},hq=t(function(r,n){var e=pq(r.fs),u=pq(r.dj),a=s(bu,s(Wu,cq,pa(function(r){var n=H(u(r),e(r));return n.a.$?Rt:_t(n.b.$?l(sq,r,s(Ck,n.a.a,0),!1):l(sq,r,s(Ck,n.a.a,n.b.a),!0))})),n);switch(r.dr.$){case 0:case 1:return a;case 2:return vq(a);default:return function(r){if(r.b){var n=r.a,e=r.b;return s(bu,s(te,t(function(r,n){return s(lq,n,100*n.eQ.fs/r.eQ.fs)}),n),s(Tt,n,e))}return r}(vq(a))}}),gq=t(function(r,n){return{aI:r,aP:n}}),mq=t(function(r,n){return{b5:n,di:r}}),$q=t(function(r,n){return{cn:n,aK:r}}),wq=t(function(r,n){return n*Ry(r)/_y(r)}),xq=t(function(r,n){switch(r.$){case 0:var t=r.a,e=r.b,u=n.aG,a=u.aP,c=P(n,{aG:P(u,{aP:P(a,{di:s(Re,1,a.di-t-e)})})}),i=wq(c);return s($q,n.dj.aK-i(t),n.dj.cn+i(e));case 1:return s($q,r.a,r.b);default:return(0,r.a)(n.dj)}}),kq=t(function(r,n){return n*Cy(r)/Dy(r)}),yq=t(function(r,n){switch(r.$){case 0:var t=r.a,e=r.b,u=n.aG,a=u.aP,c=P(n,{aG:P(u,{aP:P(a,{b5:s(Re,1,a.b5-t-e)})})}),i=kq(c);return s($q,n.fs.aK-i(t),n.fs.cn+i(e));case 1:return s($q,r.a,r.b);default:return(0,r.a)(n.fs)}}),qq=function(r){switch(r.$){case 0:return!1;case 1:case 2:default:return!0}},Aq=function(r){return r.O},Sq=function(r){return r.P},jq=function(r){return s(Wu,bu(r),s(Wu,Cx,ci(1)))},Lq=function(r){return r.b?_t(l(re,Wx,r.a,r.b)):Rt},_q=function(r){return s(Wu,bu(r),s(Wu,Lq,ci(0)))},Rq=t(function(r,n){var t={cn:s(jq,r,n),aK:s(_q,r,n)};return R(t.aK,t.cn)?P(t,{cn:t.cn+1}):t}),Tq=t(function(r,n){var t,e,u=s(Rq,s(Wu,function(r){return r.eQ},function(r){return r.fs}),n),a=s(Rq,s(Wu,function(r){return r.eQ},function(r){return r.dj}),n),c=s(mq,Aq(r.dj),Aq(r.fs)),i=qq(r.dr),o=s(eq,Oe,r.dH),f={aG:s(gq,o.aI,c),d8:o.d8,dj:a,bz:a,fs:(t=u,i?P(e=t,{aK:s(Wx,e.aK,0)}):t),bA:u};return P(f,{dj:s(xq,Sq(r.dj),f),fs:s(yq,Sq(r.fs),f)})}),Eq=function(r){return r.u},Dq=function(r){return r},Cq=e(function(r,n,t){return s(bu,Dq,s(t,r,n))}),Nq=t(function(r,n){return{dj:r,fs:n}}),Vq=t(function(r,n){return yb(s(bu,r,n))}),zq=e(function(r,n,t){return s(Y$,F([W$(a$(t.dj)),rw(a$(t.fs)),Pw(a$(r)),nw(Sy(n))]),J)}),Hq=t(function(r,n){return{dj:s(Ey,r,n.dj),fs:s(Vy,r,n.fs)}}),Bq=a(function(r,n,e,u,a){var c=t(function(n,t){return s(Hq,r,s(Nq,n,t))}),i=s(Vq,function(r){return s(bu,c(r),e)},n);return s(bu,s(zq,u,a),i)}),Uq=e(function(r,n,t){return I(r,I(n,t))}),Pq=function(r){return{$:1,a:r}},Gq=function(r){return{$:0,a:r}},Iq=function(r){return s(Kt," ",r)},Jq=function(r){return r?"1":"0"},Oq=function(r){return a$(r.dj)+" "+a$(r.fs)},Mq=function(r){return s(Kt,",",s(bu,Oq,r))},Fq=function(r){switch(r.$){case 9:return"Z";case 0:return"M"+Oq(a=r.a);case 1:return"L"+Oq(a=r.a);case 2:return"H"+a$(r.a);case 3:return"V"+a$(r.a);case 4:return"C"+Mq(F([r.a,r.b,a=r.c]));case 5:case 6:return"Q"+Mq(F([r.a,a=r.b]));case 7:return"T"+Oq(a=r.a);default:var n=r.b,t=r.c,e=r.d,u=r.e,a=r.f;return"A"+Iq(F([a$(r.a),a$(n),Zt(t),Jq(e),Jq(u),Oq(a)]))}},Qq=c(function(r,n,t,e,u,a){return{$:8,a:r,b:n,c:t,d:e,e:u,f:a}}),Xq={$:9},Zq=e(function(r,n,t){return{$:4,a:r,b:n,c:t}}),Kq=t(function(r,n){return{$:5,a:r,b:n}}),Yq=t(function(r,n){return{$:6,a:r,b:n}}),Wq=t(function(r,n){switch(n.$){case 0:return Gq(s(Hq,r,e=n.a));case 1:return Pq(s(Hq,r,e=n.a));case 2:return{$:2,a:s(Ey,r,n.a)};case 3:return{$:3,a:s(Vy,r,n.a)};case 4:var t=n.b,e=n.c;return l(Zq,s(Hq,r,n.a),s(Hq,r,t),s(Hq,r,e));case 5:return e=n.b,s(Kq,s(Hq,r,n.a),s(Hq,r,e));case 6:return e=n.b,s(Yq,s(Hq,r,n.a),s(Hq,r,e));case 7:return{$:7,a:s(Hq,r,e=n.a)};case 8:return v(Qq,n.a,n.b,n.c,n.d,n.e,s(Hq,r,e=n.f));default:return Xq}}),rA=t(function(r,n){return Iq(s(bu,s(Wu,Wq(r),Fq),n))}),nA=e(function(r,n,t){return function(r){return s(J$,r,J)}(I(n,F([V$(s(rA,r,t))])))}),tA=a(function(r,n,t,e,u){var a=l(Uq,F([sw(Sy(Sk)),xw("pointer-events: none;")]),n,J);return l(nA,r,a,F([Gq({dj:e,fs:t}),Pq({dj:e,fs:t}),Pq({dj:u,fs:t})]))}),eA=e(function(r,n,t){var e=l(Uq,F([sw(Sy(Sk)),xw("pointer-events: none;")]),n,J);return d(tA,r,e,t,r.dj.aK,r.dj.cn)}),uA=a(function(r,n,t,e,u){var a=l(Uq,F([sw(Sy(Sk)),xw("pointer-events: none;")]),n,J);return l(nA,r,a,F([Gq({dj:t,fs:e}),Pq({dj:t,fs:e}),Pq({dj:t,fs:u})]))}),aA=e(function(r,n,t){var e=l(Uq,F([sw(Sy(Sk)),xw("pointer-events: none;")]),n,J);return d(uA,r,e,t,r.fs.aK,r.fs.cn)}),cA=a(function(r,n,t,e,u){var a=F([lw(a$(e)),sw(Sy(u))]);return I(s(bu,s(eA,r,a),t),s(bu,s(aA,r,a),n))}),iA=u(function(r,n,t,e){var u=function(r){return r.d1?_t(r.H):Rt},a=s(pa,u,l(Cq,r.bA,r.fs,Eq(t))),c=s(pa,u,l(Cq,r.bz,r.dj,Eq(n)));return d(e.$?cA:Bq,r,c,a,e.a,e.b)}),oA=function(r){var n=function(){switch(r){case 0:return"start";case 1:return"middle";default:return"end"}}();return xw("text-anchor: "+n+";")},fA=t(function(r,n){return s(ci,Bw(""),s(qi,n,r))}),sA=a(function(r,n,t,e,u){var a=n?B(be(u),0,10):B(u,2,-10),c=a.b,i=a.c,o=function(n){var u;return s(Ay,F([(u=n.eQ,Jy(F([l(zy,r,u.dj,u.fs),s(By,i,3)]))),oA(c)]),F([t(oq(e))]))};return s(fA,Co(a.a),o)}),lA=e(function(r,n,t){var e=r.c3,u=r.Z,a=r.bN;return s(Ay,F([Yy("chart__legends")]),l(te,l(sA,e,n,t),u,a))}),bA=t(function(r,n){return r.dj.aK+s(wq,r,n-r.aG.aI.ck)}),dA=t(function(r,n){return r.fs.cn-s(kq,r,n-r.aG.aI.da)}),vA=t(function(r,n){return{dj:s(bA,r,n.dj),fs:s(dA,r,n.fs)}}),pA=ar,hA=zn("stroke-opacity"),gA=t(function(r,n){switch(n.$){case 0:var t=n.a;return F([sw(Sy(r)),lw(Zt(t)),nw("white")]);case 2:t=n.a;var e=n.b;return F([sw(Sy(r)),lw(Zt(t)),hA(a$(e)),nw(Sy(r))]);case 1:return t=n.a,F([sw("white"),lw(Zt(t)),nw(Sy(r))]);default:return F([nw(Sy(r))])}}),mA=a(function(r,n,t,e,u){var a=pA(e/3.141592653589793),c=F([W$(a$(u.dj)),rw(a$(u.fs)),Pw(a$(a))]);return s(Y$,I(r,I(c,s(gA,t,n))),J)}),$A=t(function(r,n){var t=pA(r/5),e=t/2,u=t,a=F(["M"+a$(n.dj-e)+" "+a$(n.fs-u-e),"v"+a$(u),"h"+a$(-u),"v"+a$(u),"h"+a$(u),"v"+a$(u),"h"+a$(u),"v"+a$(-u),"h"+a$(u),"v"+a$(-u),"h"+a$(-u),"v"+a$(-u),"h"+a$(-u),"v"+a$(u)]);return s(Kt," ",a)}),wA=a(function(r,n,t,e,u){var a="rotate(45 "+a$(u.dj)+" "+a$(u.fs)+")",c=F([V$(s($A,e,u)),Iy(a)]);return s(J$,I(r,I(c,s(gA,t,n))),J)}),xA=a(function(r,n,t,e,u){var a=pA(e),c="rotate(45 "+a$(u.dj)+" "+a$(u.fs)+")",i=F([Nw(a$(u.dj-a/2)),Vw(a$(u.fs-a/2)),Cw(a$(a)),Ew(a$(a)),Iy(c)]);return s(Dw,I(r,I(i,s(gA,t,n))),J)}),kA=a(function(r,n,t,e,u){var a=F([V$(s($A,e,u))]);return s(J$,I(r,I(a,s(gA,t,n))),J)}),yA=a(function(r,n,t,e,u){var a=pA(e),c=F([Nw(a$(u.dj-a/2)),Vw(a$(u.fs-a/2)),Cw(a$(a)),Ew(a$(a))]);return s(Dw,I(r,I(c,s(gA,t,n))),J)}),qA=nr,AA=t(function(r,n){var t=pA(4*r/pA(3)),e=pA(3)*t/2,u=e-qA(.5235987755982988)*t/2,a=F(["M"+a$(n.dj)+" "+a$(n.fs-u),"l"+a$(-t/2)+" "+a$(e),"h"+a$(t),"z"]);return s(Kt," ",a)}),SA=a(function(r,n,t,e,u){var a=F([V$(s(AA,e,u))]);return s(J$,I(r,I(a,s(gA,t,n))),J)}),jA=a(function(r,n,t,e,u){var c=n.bf,i=n.bx;return d(function(){switch(t){case 1:return mA;case 2:return SA;case 3:return yA;case 4:return xA;case 5:return wA;case 6:return kA;default:return a(function(){return Bw("")})}}(),J,i,e,6.283185307179586*c,s(Hq,r,u))}),LA=a(function(r,n,t,e,u){var a=r.eo(s(bu,function(r){return r.fl},u));return b(jA,e,a,n,t)}),_A=zn("fill-opacity"),RA=e(function(r,n){var t=r,e=n;return F([Yy("chart__interpolation__area__fragment"),nw(Sy(e.dC(t.dC)))])}),TA=zn("stroke-dasharray"),EA=t(function(r,n){var t=r,e=n;return F([xw("pointer-events: none;"),Yy("chart__interpolation__line__fragment"),sw(Sy(e.dC(t.dC))),lw(a$(e.di)),TA(s(Kt," ",s(bu,a$,t.bM))),nw("transparent")])}),DA=t(function(r,n){return r?n(0):Bw("")}),CA=a(function(r,n,t,e,u){var a=r(s(bu,function(r){return r.fl},e)),c=F([yw("0"),Aw("0"),qw(a$(u)),Sw("0")]),i=F([Nw("0"),Vw("0"),Ew("9"),Cw(a$(u))]),o=s(EA,n,a),f=s(Tt,_A(a$(function(r){switch(r.$){case 0:return 0;case 1:case 2:default:return r.a}}(t))),l(RA,n,a,t)),b=function(){return s(Dw,I(f,i),J)};return s(Ay,J,F([s(kw,I(o,c),J),s(DA,qq(t),b)]))}),NA=u(function(r,n,t,e){var u=r.c3,a=r.cm,c=r.bU,i=r.dr,o=t.cV,f=s(vA,u,s(Ck,n/2,0)),b=l(tq,a,t,e);return s(Ay,F([Yy("chart__sample")]),F([d(CA,a,t,i,e,n),v(LA,c,o,b,u,e,f)]))}),VA=e(function(r,n,e){return s(e,r.c3,l(te,t(function(t,e){return{ci:oq(t),bh:b(NA,r,n,t,e)}}),r.Z,r.bN))}),zA=function(r){switch(r.$){case 0:case 1:return 1;case 2:default:return r.a}},HA=Z,BA=e(function(r,n,t){return 0>C(t,r)?r:C(t,n)>0?n:t}),UA=t(function(r,n){return R(l(BA,r.dj.aK,r.dj.cn,n.dj),n.dj)&&R(l(BA,r.fs.aK,r.fs.cn,n.fs),n.fs)}),PA=u(function(r,n,t,e){for(;;){if(!n.b)return s(Tt,H(t,Rt),e);var u=n.a,a=n.b;if(r(u))r=c=r,n=i=a,t=o=I(t,F([u])),e=f=e;else{var c=r,i=a,o=J,f=s(Tt,H(t,_t(u)),e);r=c,n=i,t=o,e=f}}}),GA=bu(bu(Pq)),IA=t(function(r,n){return H(n.a,r(n.b))}),JA={$:0},OA=function(r){return{$:1,a:r}},MA=u(function(r,n,t,e){var u=(n.dj-r.dj)/3;return l(Zq,{dj:r.dj+u,fs:r.fs+u*t},{dj:n.dj-u,fs:n.fs-u*e},n)}),FA=e(function(r,n,t){var e=n.dj-r.dj;return e?(3*(n.fs-r.fs)/e-t)/2:t}),QA=function(r){return 0>r?-1:1},XA=t(function(r,n){return r||(0>n?-0:n)}),ZA=e(function(r,n,t){var e=t.dj-n.dj,u=n.dj-r.dj,a=(n.fs-r.fs)/s(XA,u,e),c=(t.fs-n.fs)/s(XA,e,u),i=(a*e+c*u)/(u+e),o=(QA(a)+QA(c))*s(Wx,s(Wx,ck(a),ck(c)),.5*ck(i));return fk(o)?0:o}),KA=t(function(r,n){var t=n.a,e=n.b,u=H(t,r);r:for(;;){if(u.a.$){if(u.b.b&&u.b.b.b){if(u.b.b.b.b){g=u.a.a;var a=u.b,c=a.b,i=c.b;return h=i.b,w=l(ZA,m=a.a,$=c.a,f=i.a),s(KA,s(Tt,$,s(Tt,f,h)),H(OA(w),I(e,F([b(MA,m,$,g,w)]))))}g=u.a.a;var o=u.b;return H(OA(w=l(ZA,m=o.a,$=o.b.a,$)),I(e,F([b(MA,m,$,g,w),Pq($)])))}break r}if(u.b.b&&u.b.b.b){if(u.b.b.b.b){var f,d=u.b,v=d.b,p=v.b,h=p.b,g=l(FA,m=d.a,$=v.a,w=l(ZA,m,$,f=p.a));return s(KA,s(Tt,$,s(Tt,f,h)),H(OA(w),I(e,F([b(MA,m,$,g,w)]))))}var m,$,w,x=u.b;return H(OA(w=l(ZA,m=x.a,$=x.b.a,$)),I(e,F([b(MA,m,$,w,w),Pq($)])))}break r}return H(t,e)}),YA=t(function(r,n){var t=n.a,e=n.b,u=function(){if(r.b){var n=r.a;return s(KA,s(Tt,n,r.b),H(t,F([Pq(n)])))}return H(t,J)}();return H(u.a,s(Tt,u.b,e))}),WA=t(function(r,n){return F([r,s(Ck,n.dj,r.fs),n])}),rS=t(function(r,n){var e,u=bu(s(Wu,dk(bu(function(r){return r.eQ})),IA(qi(function(r){return r.eQ})))),a=bu(s(Wu,Ce,bu(function(r){return r.eQ})));switch(r){case 0:return GA(a(n));case 1:return e=a(n),l(lu,YA,H(JA,J),e).b;default:return function(r){return s(bu,s(Wu,t(function(r,n){r:for(;;){if(n.a.b){if(n.a.b.b){var t=n.a,e=t.b,u=e.a,a=e.b,c=n.b;r=I(r,s(WA,t.a,u)),n=H(s(Tt,u,a),c);continue r}return n.b.$?r:I(r,F([s(Ck,(c=n.b.a).dj,n.a.a.fs)]))}return r}})(J),bu(Pq)),r)}(u(n))}}),nS=function(r){switch(r.$){case 9:return s(Nq,0,0);case 0:case 1:return r.a;case 2:return s(Nq,r.a,0);case 3:return s(Nq,0,r.a);case 4:return r.c;case 5:case 6:return r.b;case 7:return r.a;default:return r.f}},tS=t(function(r,n){return s(ci,r,Co(s(La,ne(t=n)-1,t)));var t}),eS=t(function(r,n){if(r.b){var t=r.a,e=r.b;return l(n,t,e,s(tS,t,e))}return Bw("")}),uS=zn("clip-path"),aS=function(r){return uS("url(#"+rq(r.d8)+")")},cS=aS,iS=a(function(r,n,t,u){var a=r.c3,c=r.dr,i=function(r){return s(Ck,r.dj,l(BA,(n=a.fs).aK,n.cn,0));var n},o=e(function(r,n,t){return l(Uq,F([Gq(i(nS(r))),Pq(nS(r))]),u,F([Pq(i(nS(t)))]))}),f=s(Tt,cS(a),s(Tt,_A(a$(function(r){switch(r.$){case 0:return 0;case 1:return r.a;case 2:default:return 1}}(c))),l(RA,n,t,c)));return s(eS,u,e(function(r,n,t){return l(nA,a,f,l(o,r,n,t))}))}),oS=t(function(r,n){var t=r.c3,e=r.cV,u=r.dC,a=r.bU.ec(n.fl);return d(jA,t,a,e,u,n.eQ)}),fS=e(function(r,n,t){var e=n;return oS({dC:t.dC(e.dC),bU:r.bU,cV:e.cV,c3:r.c3})}),sS=t(function(r,n){return r.b?s(n,r.a,r.b):Bw("")}),lS=a(function(r,n,e,u,a){var c=r.c3,i=s(Tt,cS(c),s(EA,n,e));return s(sS,a,t(function(r){return l(nA,c,i,s(Tt,Gq(r.eQ),u))}))}),bS=e(function(r,n,t){var e=(0,r.cm)(s(bu,function(r){return r.fl},t)),u=b(PA,function(r){return r.ek},t,J,J),a=s(bu,Ce,u),c=s(Ay,F([Yy("chart__dots")]),s(bu,l(fS,r,n,e),s(Wa,s(bg,UA(r.c3),function(r){return r.eQ}),yb(a)))),i=s(rS,r.ef,u),o=function(){return s(Ay,F([Yy("chart__interpolation__area")]),l(te,l(iS,r,n,e),i,a))},f=s(Ay,F([Yy("chart__interpolation__line")]),l(te,l(lS,r,n,e),i,a));return B(s(DA,qq(r.dr),o),f,c)}),dS=t(function(r,n){var e=n.a,u=n.b,a=n.c,c=t(function(r,n){return F([r,n])}),i="opacity: "+a$(zA(r)),o=yb(l(te,c,u,a));return F([s(Ay,F([Yy("chart__bottoms"),xw(i)]),e),s(Ay,F([Yy("chart__tops")]),o)])}),vS=e(function(r,n,u){var a;return Ay(F([Yy("chart__lines")]))((1>zA(r.dr)?dS(r.dr):function(r){var n=r.a,t=r.b,u=r.c;return b(HA,e(function(r,n,t){return s(Ay,F([Yy("chart__line")]),F([r,n,t]))}),n,t,u)})((a=l(te,bS(r),n,u),l(lu,t(function(r,n){var t=r.b,e=r.c,u=n.b,a=n.c;return B(s(Tt,r.a,n.a),s(Tt,t,u),s(Tt,e,a))}),B(J,J,J),a))))}),pS=function(r){return r},hS=function(r){return r},gS=function(r){return s(bg,function(r){return r.fs},r)},mS=t(function(r,n){var t=n.dC;return I(n.dU,F([lw(a$(n.di)),sw(Sy(t)),aS(r)]))}),$S=e(function(r,n,t){return d(tA,r,s(mS,r,t),n,t.br,t.bX)}),wS=function(r){var n=r.dC;return F([lw(a$(r.di)),sw(Sy(n))])},xS=function(r){return 1===r},kS=function(r){var n=r.a3;return xS(r.aV)?-n:n},yS=u(function(r,n,t,e){var u=n.a3,a=xS(n.aV)?-5-u:15+u;return s(Ay,F([Jy(F([l(zy,r,t.dj,t.fs),s(By,0,a)])),oA(1)]),F([e]))}),qS=a(function(r,n,t,e,u){var a=l(Uq,F([sw(Sy(Sk))]),t,F([yw(a$(s(Ey,r,u))),qw(a$(s(Ey,r,u))),Aw(a$(s(Vy,r,e))),Sw(a$(s(Vy,r,e)+n))]));return s(kw,a,J)}),AS=e(function(r,n,t){var e=n.dj,u=n.fs;return s(Ay,F([Yy("chart__tick")]),F([d(qS,r,kS(t),wS(t),u,e),s(fA,t.ci,l(yS,r,t,n))]))}),SS=e(function(r,n,t){var e=t.c8,u=n(s(e.H,r.bz,r.dj)),a=e.b,c=a.a,i=a.b;return s(Ay,F([Yy("chart__title"),Jy(F([l(zy,r,u.dj,u.fs),s(By,c+15,i+5)])),oA(0)]),F([e.fn]))}),jS=e(function(r,n,t){var e=t,u={eg:s(gS,n,r),er:l(pS,e.E,r.bz,r.dj),u:l(Cq,r.bz,r.dj,e.u),c8:hS(e.c8)},a=s($S,r,u.eg),c=function(r){return{dj:r,fs:u.eg}},i=function(n){return l(AS,r,c(n.H),n)};return s(Ay,F([Yy("chart__axis--horizontal")]),F([l(SS,r,c,u),a(u.er),s(Ay,F([Yy("chart__ticks")]),s(bu,i,u.u))]))}),LS=function(r){return s(bg,function(r){return r.dj},r)},_S=e(function(r,n,t){return d(uA,r,s(mS,r,t),n,t.br,t.bX)}),RS=u(function(r,n,t,e){var u=n.aV,a=n.a3,c=xS(u)?5+a:-5-a,i=xS(u)?0:2;return s(Ay,F([Jy(F([l(zy,r,t.dj,t.fs),s(By,c,5)])),oA(i)]),F([e]))}),TS=a(function(r,n,t,e,u){var a=l(Uq,F([Yy("chart__tick"),sw(Sy(Sk))]),t,F([yw(a$(s(Ey,r,e))),qw(a$(s(Ey,r,e)-n)),Aw(a$(s(Vy,r,u))),Sw(a$(s(Vy,r,u)))]));return s(kw,a,J)}),ES=e(function(r,n,t){var e=n.dj,u=n.fs;return s(Ay,F([Yy("chart__tick")]),F([d(TS,r,kS(t),wS(t),e,u),s(fA,t.ci,l(RS,r,t,n))]))}),DS=e(function(r,n,t){var e=t.c8,u=n(s(e.H,r.bA,r.fs)),a=e.b,c=a.a,i=a.b;return s(Ay,F([Yy("chart__title"),Jy(F([l(zy,r,u.dj,u.fs),s(By,c+2,i-10)])),oA(2)]),F([e.fn]))}),CS=e(function(r,n,t){var e=t,u={eg:s(LS,n,r),er:l(pS,e.E,r.bA,r.fs),u:l(Cq,r.bA,r.fs,e.u),c8:hS(e.c8)},a=s(_S,r,u.eg),c=function(r){return{dj:u.eg,fs:r}},i=function(n){return l(ES,r,c(n.H),n)};return s(Ay,F([Yy("chart__axis--vertical")]),F([l(DS,r,c,u),a(u.er),s(Ay,F([Yy("chart__ticks")]),s(bu,i,u.u))]))}),NS=t(function(r,n){var t,e,u=l(iq,s(bu,function(n){return B(l(tq,r.er,n,J),oq(n),cq(n))},n),pq(r.dj),pq(r.fs)),a=s(hq,r,n),c=yb(a),i=s(bu,Wa(function(r){return r.ek}),a),o=yb(i),f=s(Tq,r,o),d=vS({dr:r.dr,bU:r.dN,ef:r.ef,cm:r.er,c3:f}),v=function(r){var n=r.ep;switch(n.$){case 1:return l(lA,r,n.a,n.b);case 2:return l(VA,r,n.a,(0,n.b)(r));default:return Bw("")}}({dr:r.dr,bN:i,bU:r.dN,ep:r.ep,cm:r.er,Z:n,c3:f,dj:pq(r.dj),fs:pq(r.fs)}),p=yb(F([s(eq,function(r){return r.ay},r.dH),l(fq,c,f,r.dU),F([(t=f,e=t.aG,Q$("0 0 "+a$(e.aP.di)+" "+a$(e.aP.b5)))])])),h=Qy(b(iA,f,r.dj,r.fs,r.d1))(s(u,f,r.el));return b(aq,r,f,h.d7,s(Sx,p,F([s(Z$,J,F([nq(f)])),s(Ay,F([Yy("chart__junk--below")]),h.dv),s(d,n,a),l(Ky,r,c,f),l(jS,f,r.eg,r.dj),l(CS,f,r.eg,r.fs),v,s(Ay,F([Yy("chart__junk--above")]),h.dm)])))}),VS=e(function(r,n,t){var u,a=s(bu,wy,Vt(t.dM));return s(Ym,s(R$,"lia-svg",n),F([s(NS,{dr:Fx,dH:s(qy,"lia-diagram",F([H("width","100%"),H("display","inline"),H("font-family","monospace")])),dN:Mx,dU:Uk,d1:Ok,ef:1,eg:zk,el:(u=s(Fy,r,t.c8),e(function(){return u})),ep:Qk,er:Fk,dj:l(Dk,600,t.fr,s(Wu,Ce,function(r){return r.dj})),fs:l(Dk,450,t.ft,s(Wu,Ce,function(r){return r.fs}))},a)]))}),zS=t(function(r,n){return{$:8,a:r,b:n}}),HS=Ym(F([s(r$,"margin-top","16px"),s(r$,"margin-bottom","16px")])),BS=t(function(r,n){r:for(;;){if(n.b){var t=n.a;if(r){r-=1,n=n.b;continue r}return _t(t)}return Rt}}),US=t(function(r,n){return s(ci,xh,s(BS,n,r.aD))}),PS=function(r){return{$:1,a:r}},GS=function(r){return{$:0,a:r}},IS=Ln("code"),JS=Ln("input"),OS=function(r){return H(r,!0)},MS=Cn,FS=t(function(r,n){return s(MS,r,{$:1,a:n})}),QS=t(function(r,n){return l(lu,ku,n,r)}),XS=s(QS,F(["target","value"]),za),ZS=function(r){return s(FS,"input",s(Pe,OS,s(Pe,r,XS)))},KS=s(ku,"keyCode",Ca),YS=t(function(r,n){return s(MS,r,{$:0,a:n})}),WS=Ln("button"),rj=function(r){return Ln(Hn(r))},nj=function(r){return s(rj,"code-editor",s(Tt,s(r$,"display","block"),r))},tj=t(function(r,n){return s(Vn,function(r){return"formAction"==r?"data-"+r:r}(r),Bn(n))}),ej=tj,uj=function(r){return s(Wu,uh,ej(r))},aj=uj("highlightActiveLine"),cj=s(Wu,uc,ej("mode")),ij=uj("readOnly"),oj=uj("showCursor"),fj=uj("showGutter"),sj=uj("showPrintMargin"),lj=s(Wu,fb,ej("tabSize")),bj=s(Wu,uc,ej("theme")),dj=uj("useSoftTabs"),vj=s(Wu,uc,ej("value")),pj=a(function(r,n,t,e,u){var a=u?"4px":"0px";return s(nj,s(Fa,F([s(r$,"border-bottom-left-radius","4px"),s(r$,"border-bottom-right-radius","4px"),s(r$,"border-top-left-radius",a),s(r$,"border-top-right-radius",a),s(r$,"border","1px solid gray"),vj(e),cj(t),bj(r),lj(2),dj(!1),ij(!0),oj(!1),aj(!1),fj(!1),sj(!1)]),T$(n)),J)}),hj=e(function(r,n,t){var e=""===t.ez;return s(Ym,J,F([e?b$(""):s(WS,F([u$("lia-accordion-dummy")]),F([b$(t.ez)])),d(pj,r,n,t.em,t.S,e)]))}),gj=function(r){return{$:0,a:r}},mj=function(r){return{$:6,a:r}},$j=function(r){return{$:7,a:r}},wj=t(function(r,n){return{$:5,a:r,b:n}}),xj=function(r){switch(r){case 0:return"Изпълни";case 1:return"Ausführen";case 2:return"Execute";case 3:return"اجرا";case 4:return"իրականացնել";default:return"запустити"}},kj=function(r){switch(r){case 0:return"Първа версия";case 1:return"erste Version";case 2:return"first version";case 3:return"نسخه اولیه";case 4:return"առաջին տարբերակը";default:return"перша версія"}},yj=function(r){switch(r){case 0:return"Последна версия";case 1:return"letzte Version";case 2:return"last version";case 3:return"آخرین نسخه";case 4:return"վերջին տարբերակը";default:return"остання версія"}},qj=function(r){switch(r){case 0:return"следваща версия";case 1:return"eine Version vor";case 2:return"next version";case 3:return"نسخه بعدی";case 4:return"հաջորդ տարբերակը";default:return"наступна версія"}},Aj=function(r){switch(r){case 0:return"Предишна версия";case 1:return"eine Version zurück";case 2:return"previous version";case 3:return"نسخه قبلی";case 4:return"նախորդ տարբերակը";default:return"попередня версія"}},Sj=function(r){switch(r){case 0:return"Работещ";case 1:return"wird ausgeführt";case 2:return"is running";case 3:return"در حال اجرا";case 4:return"ընթանում է";default:return"виконується"}},jj=F([s(r$,"padding-left","5px"),s(r$,"padding-right","5px"),s(r$,"float","right"),s(r$,"margin-right","2px"),s(r$,"margin-left","2px")]),Lj=Rx("disabled"),_j=function(r){return s(YS,"click",Ie(r))},Rj=Ln("span"),Tj=e$("title"),Ej=c(function(r,n,t,e,u,a){var c,i,o=u||!t,f=u||R(t,e-1);return s(Ym,F([s(r$,"padding","0px"),s(r$,"width","100%")]),F([(i=H(u,a),i.a?i.b?s(Rj,F([u$("lia-btn lia-icon"),s(r$,"margin-left","0px"),Tj(Sj(r)),_j((c=n,{$:1,a:c}))]),F([b$("stop")])):s(Rj,F([u$("lia-btn lia-icon"),s(r$,"margin-left","0px"),Tj(Sj(r)),Lj(!0)]),F([s(Rj,F([u$("lia-icon rotating")]),F([b$("sync")]))])):s(Rj,F([u$("lia-btn lia-icon"),_j(gj(n)),s(r$,"margin-left","0px"),Tj(xj(r))]),F([b$("play_circle_filled")]))),s(WS,s(Fa,jj,F([_j($j(n)),u$("lia-btn lia-icon"),Tj(yj(r)),Lj(f)])),F([b$("last_page")])),s(WS,s(Fa,jj,F([_j(s(wj,n,t+1)),u$("lia-btn lia-icon"),Tj(qj(r)),Lj(f)])),F([b$("navigate_next")])),s(Rj,F([u$("lia-label"),s(r$,"float","right"),s(r$,"margin-top","11px")]),F([b$(Zt(t))])),s(WS,s(Fa,jj,F([_j(s(wj,n,t-1)),u$("lia-btn lia-icon"),Tj(Aj(r)),Lj(o)])),F([b$("navigate_before")])),s(WS,s(Fa,jj,F([_j(mj(n)),u$("lia-btn lia-icon"),Tj(kj(r)),Lj(o)])),F([b$("first_page")]))]))}),Dj=t(function(r,n){return{$:4,a:r,b:n}}),Cj=t(function(r,n){return{$:3,a:r,b:n}}),Nj=Ln("b"),Vj=function(r){switch(r){case 0:return"Максимизиране";case 1:return"Darstellung maximieren";case 2:return"maximize view";case 3:return"بزرگ کردن پنجره";case 4:return"բարձրագունել տեսքը";default:return"зображення збільшити"}},zj=function(r){switch(r){case 0:return"Минимизиране";case 1:return"Darstellung minimieren";case 2:return"minimize view";case 3:return"کوچک کردن پنجره";case 4:return"նվազեցնել տեսքը";default:return"зображення зменшити"}},Hj=e(function(r,n,t){return{$:2,a:r,b:n,c:t}}),Bj=ej("annotations"),Uj=uj("enableBasicAutocompletion"),Pj=uj("enableLiveAutocompletion"),Gj=uj("enableSnippets"),Ij=s(Wu,rc(uc),ej("extensions")),Jj=s(Wu,fb,ej("maxLines")),Oj=e(function(r,n,t){var e=n?"4px":"0px";return F([s(r$,"max-height",r?Zt(t)+"px":"0px"),s(r$,"transition","max-height 0.25s ease-out"),s(r$,"border-bottom-left-radius","4px"),s(r$,"border-bottom-right-radius","4px"),s(r$,"border-top-left-radius",e),s(r$,"border-top-right-radius",e),s(r$,"border","1px solid gray")])}),Mj=i(function(r,n,t,e,u,a,c){var i,o=e.a,f=e.b,b=ne(Yi(u.S)),d=u.d$?b:b>16?16:b;return s(nj,s(Fa,F([(i=s(Hj,o,f),s(YS,"editorChanged",s(Pe,i,s(QS,F(["target","value"]),za)))),vj(u.S),cj(u.em),bj(r),Jj(d>16?-1:d),ij(t),lj(2),dj(!1),Bj(c),Uj(!0),Pj(!0),Gj(!0),Ij(F(["language_tools"]))]),s(Fa,l(Oj,u.df,a,21*d+16),T$(n))),J)}),Fj=o(function(r,n,t,e,u,a,c,i){var o,f=""===i.ez;return s(Ym,s(R$,"",t),F([f?b$(""):s(Ym,F([(o=F([H("lia-accordion",!0),H("active",i.df)]),u$(s(Kt," ",s(bu,Ce,s(Wa,Av,o)))))]),F([s(Rj,F([_j(s(Cj,a,c)),s(r$,"width","calc(100% - 20px)"),s(r$,"display","inline-block")]),F([s(Nj,J,F([b$(i.df?" + ":" - ")])),b$(i.ez)])),i.df?s(Rj,F([u$("lia-accordion-min-max"),_j(s(Dj,a,c)),Tj(i.d$?zj(r):Vj(r))]),F([s(Nj,J,F([b$(i.d$?"↥":"↧")]))])):b$("")])),p(Mj,n,t,e,H(a,c),i,f,u(c))]))}),Qj=Ln("pre"),Xj=function(r){return s(r$,"color",function(){switch(r){case 0:return"lightblue";case 1:return"white";case 2:return"yellow";default:return"red"}}())},Zj=function(r){var n=r.ar;return s(Rj,F([Xj(r.Y)]),F([b$(n)]))},Kj=a(function(r,n,t,e,u){if(u.$){var a=u.a,c=s(Kl,a,e);if(c.$)return b$("");var i=c.a,o=US(i.a5);return HS(F([s(Ym,J,Ct(s(Sh,v(Fj,r,n,t,i.cL,o,a),i.aW))),v(Ej,r,a,i.aQ,xi(i.fm),i.cL,!R(i.c6,Rt)),(f=i.a5,f.Z?s(Qj,F([u$("lia-code-stdout"),(l=f.Z,s(ej,"scrollTop",uc(Zt(14+14*l))))]),function(r){return s(bu,Zj,be(r.L))}(f)):s(Ym,F([s(r$,"margin-top","8px")]),J)),function(){var r=i.c6;if(1===r.$)return b$("");var n,t,e=r.a;return s(f$,zS(a),(n=e,s(Ym,F([u$("lia-code-stdout"),s(r$,"margin-top","-10px")]),F([s(IS,J,F([b$(">> ")])),s(JS,F([ZS(PS),(t=GS,s(YS,"keydown",s(Pe,t,KS))),Ux(n.A),s(r$,"background-color","black"),s(r$,"color","white"),s(r$,"border","0"),s(r$,"width","calc(100% - 30px)")]),J)]))))}()]))}var f,l,b=u.a;return HS(s(bu,s(hj,n,t),b))}),Yj=t(function(r,n){return s(Kl,n,r)}),Wj=function(r){return!!r.e$},rL=t(function(r,n){return{$:0,a:r,b:n}}),nL=t(function(r,n){return{$:2,a:r,b:n}}),tL=t(function(r,n){return{$:1,a:r,b:n}}),eL={$:0},uL=Ln("a"),aL=Ln("audio"),cL=Rx("controls"),iL=Ln("em"),oL=function(r){return s(e$,"href",/^javascript:/i.test((n=r).replace(/\s/g,""))?"":n);var n},fL=Ln("iframe"),sL=Ln("img"),lL=Ln("sup"),bL=t(function(r,n){return s(lL,s(Tt,s(k$,"onclick",'showFootnote("'+r+'");'),s(Tt,s(r$,"cursor","pointer"),n)),F([y$(r)]))}),dL=Ln("s"),vL=Ln("source"),pL=function(r){return s(e$,"src",Bn(r))},hL=function(r){return s(k$,r.a,r.b)},gL=function(r){return s(bu,mL,r)},mL=function(r){switch(r.$){case 1:var n=r.c;return l(rj,r.a,s(bu,hL,r.b),gL(n));case 0:return b$(r.a);default:return b$("")}},$L=Ln("u"),wL=Ln("video"),xL=e(function(r,n,t){return s(Tt,s(Rj,F([u$("lia-effect-circle-inline")]),Xi(b$(Zt(n)))),s(Tt,b$(" "),r(t)))}),kL=u(function(r,n,t,e){switch(t.$){case 0:case 1:return v(qL,r,n,a=t.a,i=t.b,o=t.c,e);case 2:return a=t.a,o=t.c,s(sL,s(Tt,pL(i=t.b),s(Tt,Tj(o),s(R$,"lia-image",e))),l(AL,r,n,a));case 3:a=t.a;var u=t.b;return i=u.b,o=t.c,u.a?s(fL,s(Tt,pL(i),s(Tt,s(k$,"allowfullscreen",""),s(Tt,s(k$,"allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"),s(Tt,Tj(o),s(Tt,s(r$,"width","100%"),s(R$,"lia-audio",e)))))),l(AL,r,n,a)):s(aL,s(Tt,cL(!0),s(Tt,Tj(o),s(R$,"lia-audio",e))),F([s(vL,F([pL(i)]),J),s(Rj,J,l(AL,r,n,a))]));default:var a=t.a,c=t.b,i=c.b,o=t.c;return c.a?s(fL,s(Tt,pL(i),s(Tt,s(k$,"allowfullscreen",""),s(Tt,s(k$,"allow","accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"),s(Tt,Tj(o),s(R$,"lia-movie",e))))),l(AL,r,n,a)):s(wL,s(Tt,cL(!0),s(Tt,Tj(o),s(R$,"lia-movie",e))),F([s(vL,F([pL(i)]),J),s(Rj,J,l(AL,r,n,a))]))}}),yL=e(function(r,n,t){r:for(;;)switch(t.$){case 2:var e=t.a;return s(Nj,s(R$,"lia-bold",i=t.b),F([l(yL,r,n,e)]));case 3:return e=t.a,s(iL,s(R$,"lia-italic",i=t.b),F([l(yL,r,n,e)]));case 4:return e=t.a,s(dL,s(R$,"lia-strike",i=t.b),F([l(yL,r,n,e)]));case 5:return e=t.a,s($L,s(R$,"lia-underline",i=t.b),F([l(yL,r,n,e)]));case 6:return e=t.a,s(lL,s(R$,"lia-superscript",i=t.b),F([l(yL,r,n,e)]));case 7:return e=t.a,s(IS,s(R$,"lia-code",i=t.b),F([b$(e)]));case 9:return b(kL,r,n,e=t.a,i=t.b);case 10:return s(bL,e=t.a,T$(i=t.b));case 13:var u=t.a;return s(Rj,s(R$,"lia-container",i=t.b),s(bu,function(t){return l(yL,r,n,t)},u));case 11:return s(Rj,J,gL(u=t.a));case 12:var a=t.a,c=t.b,i=(e=t.c,t.d);return 2===r?s(Rj,s(Tt,Dx(Zt(a)),s(R$,"",Rt)),l(xL,s(AL,r,n),a,e)):s(Rj,F([1>C(a,n)&&C(c,n)>0?Tx(!1):Tx(!0)]),F([s(Rj,s(Tt,Dx(Zt(a)),s(R$,R(i,Rt)?"lia-effect":"",i)),l(xL,s(AL,r,n),a,e))]));case 1:if(1===t.b.$)return b$(e=t.a);i=t.b;var o=r,f=n,d=s(Ws,F([s(To,e=t.a,Rt)]),i);r=o,n=f,t=d;continue r;case 0:if(1===t.b.$)return b$(e=t.a);i=t.b,o=r,f=n,d=s(Ws,F([s(Jc,e=t.a,Rt)]),i),r=o,n=f,t=d;continue r;default:if(1===t.c.$)return e=t.b,l(rj,"katex-formula",F([s(k$,"displayMode",t.a)]),F([b$(e)]));i=t.c,o=r,f=n,d=s(Ws,F([l(Uo,t.a,e=t.b,Rt)]),i),r=o,n=f,t=d;continue r}}),qL=c(function(r,n,t,e,u,a){return uL(s(Fa,s(R$,"lia-link",a),F([oL(e),Tj(u)])))(l(AL,r,n,t))}),AL=e(function(r,n,t){return s(bu,s(yL,r,n),t)}),SL=function(r){return s(yL,r,99999)},jL=e(function(r,n,t){var e=H(n,t);if(e.b.b){if(e.a)return l(jL,r,e.a-1,e.b.b);var u=e.b.a;return s(Rj,J,s(bu,SL(r),u))}return b$("choose")}),LL=e(function(r,n,t){return s(Ym,F([u$("lia-dropdown-option"),_j((e=n,{$:1,a:e}))]),s(bu,SL(r),t));var e}),_L=a(function(r,n,t,e,u){return s(Rj,J,F([s(Rj,F([u$("lia-dropdown"),n?Lj(!0):_j(eL)]),F([l(jL,r,u,e),s(Rj,F([u$("lia-icon"),s(r$,"float","right")]),F([b$(t?"arrow_drop_down":"arrow_drop_up")]))])),s(Ym,F([u$("lia-dropdown-options"),s(r$,"max-height",t?"2000px":"0px")]),s(ce,LL(r),e))]))}),RL=function(r){return{$:2,a:r}},TL=e$("type"),EL=t(function(r,n){return s(JS,F([TL("input"),u$("lia-input"),Ux(n),Lj(r),ZS(RL)]),J)}),DL=u(function(r,n,t,e){return e.$?d(_L,r,n,e.a,t.eO,s(ci,-1,Co(e.b))):s(EL,n,e.a)}),CL=e(function(r,n,t){return s(A$,J,s(Fa,t,Xi(s(q$,J,s(bu,SL(r),n)))))}),NL=Ln("th"),VL=t(function(r,n){return s(NL,F([w$("center")]),s(bu,SL(r),n))}),zL=t(function(r,n){return s(A$,F([u$("lia-label")]),s(bu,VL(r),n))}),HL=t(function(r,n){return{$:0,a:r,b:n}}),BL=Rx("checked"),UL=u(function(r,n,t,e){return s(q$,F([w$("center")]),F([s(Rj,F([u$("lia-check-item")]),F([s(JS,F([TL("checkbox"),BL(e),r?Lj(!0):_j(s(HL,n,t))]),J),s(Rj,F([u$("lia-check-btn")]),F([b$("check")]))]))]))}),PL=u(function(r,n,t,e){return s(q$,F([w$("center")]),F([s(Rj,F([u$("lia-radio-item")]),F([s(JS,F([TL("radio"),BL(e),r?Lj(!0):_j(s(HL,n,t))]),J),s(Rj,F([u$("lia-radio-btn")]),F([b$("")]))]))]))}),GL=e(function(r,n,t){if(t.$)return e=t.a,s(ce,s(UL,r,n),e);var e=t.a;return s(ce,s(PL,r,n),e)}),IL=u(function(r,n,t,e){return s(j$,F([u$("lia-survey-matrix")]),s(Tt,s(zL,r,t.d2),l(te,CL(r),t.eO,s(ce,GL(n),Ct(e)))))}),JL=u(function(r,n,t,e){var u=e.a,a=e.b;return s(A$,F([u$("lia-check-item")]),F([s(q$,F([s(k$,"valign","top"),u$("lia-label")]),F([s(JS,F([TL("checkbox"),BL(t),n?Lj(!0):_j(u)]),J),s(Rj,F([u$("lia-check-btn")]),F([b$("check")]))])),s(q$,F([u$("lia-label")]),s(bu,SL(r),a))]))}),OL=u(function(r,n,t,e){var u=e.a,a=e.b;return s(A$,F([u$("lia-radio-item")]),F([s(q$,F([s(k$,"valign","top"),u$("lia-label")]),F([s(JS,F([TL("radio"),BL(t),n?Lj(!0):_j(u)]),J),s(Rj,F([u$("lia-radio-btn")]),J)])),s(q$,F([u$("lia-label")]),s(bu,SL(r),a))]))}),ML=e(function(r,n,t){return s(j$,F([s(k$,"cellspacing","8")]),l(te,r,t,s(ce,vo,n)))}),FL=u(function(r,n,t,e){var u=H(t.cX,e);r:for(;;){if(u.a.$){if(1===u.b.$)return a=u.b.a,l(ML,s(JL,r,n),t.eO,a);break r}if(u.b.$)break r;var a=u.b.a;return l(ML,s(OL,r,n),t.eO,a)}return b$("")}),QL=u(function(r,n,t,e){var u=H(t,e.eR);r:for(;;)switch(u.a.$){case 1:if(1===u.b.$){var a=u.a.a,c=u.b.a;return s(f$,rL(e.d8),b(DL,r,n,c,a))}break r;case 2:if(2===u.b.$)return a=u.a.a,c=u.b.a,s(f$,tL(e.d8),b(FL,r,n,c,a));break r;case 3:if(3===u.b.$)return a=u.a.a,c=u.b.a,s(f$,nL(e.d8),b(IL,r,n,c,a));break r;default:break r}return b$("")}),XL=e(function(r,n,t){return{$:3,a:r,b:n,c:t}}),ZL=t(function(r,n){return{$:5,a:r,b:n}}),KL=function(r){switch(r){case 0:return"Проверка";case 1:return"Prüfen";case 2:return"Check";case 3:return"بررسی";case 4:return"ստուգել";default:return"перевірити"}},YL=function(r){switch(r){case 0:return"Проверено";case 1:return"Gelöst";case 2:return"Checked";case 3:return"بررسی شده";case 4:return"ստուգված";default:return"перевірено"}},WL=function(r){switch(r){case 0:return"Решено";case 1:return"Aufgelöst";case 2:return"Resolved";case 3:return"حل شده";case 4:return"լուծված է ";default:return"розв'язано"}},r_=u(function(r,n,t,e){switch(t){case 0:return n?s(WS,F([u$("lia-btn"),u$("lia-failure"),_j(e)]),F([b$(KL(r)+" "+Zt(n))])):s(WS,F([u$("lia-btn"),_j(e)]),F([b$(KL(r))]));case 1:return s(WS,F([u$("lia-btn"),u$("lia-success"),Lj(!0)]),F([b$(YL(r)+" "+Zt(n))]));default:return s(WS,F([u$("lia-btn"),u$("lia-warning"),Lj(!0)]),F([b$(WL(r))]))}}),n_=function(r){switch(r){case 0:return"Отговор";case 1:return"zeige Lösung";case 2:return"show solution";case 3:return"نمایش راهکار";case 4:return"ցույց տալ լուծումը";default:return"показати розв'язок"}},t_=e(function(r,n,t){return n?b$(""):s(Rj,F([u$("lia-hint-btn"),_j(t),Tj(n_(r)),s(r$,"cursor","pointer")]),F([b$("info")]))}),e_=u(function(r,n,e,u){var a,c=t(function(n,t){var e=H(n,t);if(e.a.b){if(e.b){var u=e.a,a=u.a,i=u.b;return s(Tt,s(s$,J,s(Tt,s(Rj,F([u$("lia-icon")]),F([b$("lightbulb_outline")])),s(bu,SL(r),a))),s(c,i,t-1))}return J}return J});return 0>C(e,ne(u))?s(Rj,J,F([b$(" "),s(Rj,F([u$("lia-hint-btn"),_j((a=n,{$:4,a:a})),Tj("show hint"),s(r$,"cursor","pointer")]),F([b$("help")])),s(Ym,F([u$("lia-hints")]),s(c,u,e))])):s(Ym,F([u$("lia-hints")]),s(c,u,e))}),u_=a(function(r,n,t,e,u){return s(s$,J,F([""===t.dS?b$(""):s(t$,J,J),b$(""===t.dS?"":t.dS),u,b(r_,n,t.fj,t.e$,l(XL,e.d8,e.eR,e.X)),R(e.eR,rv)?b$(""):l(t_,n,t.e$,s(ZL,e.d8,e.eR)),b(e_,r,e.d8,t.d5,e.d6)]))}),a_=u(function(r,n,t,e){var u=s(Yj,e,t.d8);if(u.$)return b$("");var a=u.a;return d(u_,r,n,a,t,b(QL,r,Wj(a),a.t,t))}),c_=e(function(r,n,t){return{$:4,a:r,b:n,c:t}}),i_=t(function(r,n){return{$:3,a:r,b:n}}),o_=u(function(r,n,t,e){var u=s(Kl,n,r);return!u.$&&3===u.a.b.$&&s(ci,!1,s(ju,function(r){return s(Uu,e,r)},s(Kl,t,u.a.b.b)))}),f_=t(function(r,n){var t=s(Kl,n,r);if(t.$||1!==t.a.b.$)return H(!1,-1);var e=t.a.b;return H(e.a,e.b)}),s_=t(function(r,n){var t=s(Kl,n,r);return t.$||t.a.b.$?"":t.a.b.a}),l_=e(function(r,n,t){var e=s(Kl,n,r);return!e.$&&2===e.a.b.$&&s(ci,!1,s(Uu,t,e.a.b.b))}),b_=t(function(r,n){return s(Rj,J,s(bu,SL(r),n))}),d_=u(function(r,n,t,e){return s(Rj,F([u$(r?"lia-check-item":"lia-radio-item")]),F([s(JS,F([TL(r?"checkbox":"radio"),BL(t),e?Lj(!0):_j(n)]),J),s(Rj,F([u$(r?"lia-check-btn":"lia-radio-btn")]),F([b$(r?"check":"")]))]))}),v_=i(function(r,n,t,e,u,a,c){var i=c.a,o=c.b,f=t(i),l=e(i);return s(A$,J,s(Fa,s(bu,function(r){return s(q$,F([w$("center")]),F([b(d_,n,f(r),l(r),a)]))},u),F([s(q$,J,F([s(b_,r,o)]))])))}),p_=c(function(r,n,t,e,u,a){var c=a.a,i=a.b;return s(j$,F([s(k$,"cellspacing","8")]),F([s(q$,F([s(k$,"valign","top"),u$("lia-label")]),F([b(d_,n,t(c),e(c),u)])),s(q$,F([u$("lia-label")]),F([s(b_,r,i)]))]))}),h_=Ln("thead"),g_=c(function(r,n,t,e,u,a){var c=s(h_,J,s(bu,s(Wu,bu(SL(r)),NL(F([w$("center")]))),n)),i=u(a);return s(j$,F([u$("lia-survey-matrix")]),s(Tt,c,s(bu,i,s(ce,vo,e))))}),m_=e(function(r,n,t){r:for(;;){var e=H(n,t);if(e.b.b){if(e.a){r=r,n=e.a-1,t=e.b.b;continue r}var u=e.b.a;return s(Rj,J,s(bu,SL(r),u))}return b$("choose")}}),$_=t(function(r,n){return{$:1,a:r,b:n}}),w_=u(function(r,n,t,e){return s(Ym,F([u$("lia-dropdown-option"),_j(s($_,n,t))]),s(bu,SL(r),e))}),x_=c(function(r,n,t,e,u,a){var c,i=e.a,o=e.b;return s(Rj,J,F([s(Rj,F([u$("lia-dropdown"),a?Lj(!0):_j((c=u,{$:2,a:c}))]),F([l(m_,r,o,t),s(Rj,F([u$("lia-icon"),s(r$,"float","right")]),F([b$(i?"arrow_drop_down":"arrow_drop_up")]))])),s(Ym,F([u$("lia-dropdown-options"),s(r$,"max-height",i?"2000px":"0px")]),s(ce,s(w_,r,u),t))]))}),k_=t(function(r,n){var t=s(Kl,n,r);return!(t.$||!t.a.a)}),y_=function(r){switch(r){case 0:return"Изпрати";case 1:return"Abschicken";case 2:return"Submit";case 3:return"ارسال";case 4:return"ներկայացնել";default:return"відіслати"}},q_=function(r){switch(r){case 0:return"Благодаря";case 1:return"Dankeshön";case 2:return"Thanks";case 3:return"تشکر";case 4:return"շնորհակալություն";default:return"дякую"}},A_=u(function(r,n,t,e){return s(Ym,J,F([n?s(WS,F([u$("lia-btn"),Lj(!0)]),F([b$(q_(r))])):s(WS,F([u$("lia-btn"),_j(s(Pg,t,e))]),F([b$(y_(r))]))]))}),S_=a(function(r,n,t,e,u){var a=s(k_,n,t);return F([u(a),b(A_,r,a,t,e)])}),j_=t(function(r,n){return{$:0,a:r,b:n}}),L_=e$("placeholder"),__=function(r){switch(r){case 0:return"Въведете текст...";case 1:return"Texteingabe ...";case 2:return"Enter some text...";case 3:return"لطفا متن وارد کنید";case 4:return"Մուտքագրեք որոշ տեքստ";default:return"Ввід тексту ..."}},R_=Ln("textarea"),T_=a(function(r,n,t,e,u){var a=F([ZS(j_(e)),u$("lia-textarea"),L_(__(r)),Ux(n),Lj(u)]);return 1===t?s(JS,a,J):s(R_,s(Tt,s(zn,"rows",Zt(t)),a),J)}),E_=e(function(r,n,t){var e=n(t);return s(Ym,J,s(bu,e,r))}),D_=a(function(r,n,t,e,u){return s(s$,s(R$,"lia-quiz lia-card",t),function(){var t=e.e5;switch(t.$){case 0:var a=t.a;return d(S_,n,u,e.d8,e.X,b(T_,n,s(s_,u,e.d8),a,e.d8));case 1:return d(S_,n,u,e.d8,e.X,d(x_,r,n,t.a,s(f_,u,e.d8),e.d8));case 2:return d(S_,n,u,e.d8,e.X,s(E_,t.b,b(p_,r,t.a,i_(e.d8),s(l_,u,e.d8))));default:var c=t.c;return d(S_,n,u,e.d8,e.X,d(g_,r,t.b,c,t.d,d(v_,r,t.a,c_(e.d8),s(o_,u,e.d8),c)))}}())}),C_=function(r){return s(Rj,F([u$("lia-effect-circle")]),F([b$(Zt(r))]))},N_=t(function(r,n){return s(vo,R(n.eR,rv),s(ci,!1,s(qi,Wj,s(Yj,r,n.d8))))}),V_=a(function(r,n,e,u,a){var c=t(function(n,a){return(R(e,J)?bu(function(t){return s(n,F([w$("left")]),r.fn(t))}):s(te,t(function(t,e){return s(n,F([w$(t)]),r.fn(e))}),u))(a)});return s(j$,s(R$,"lia-table",n),s(Tt,s(h_,F([u$("lia-inline lia-table-head")]),s(c,NL,e)),s(bu,function(r){return s(A$,F([u$("lia-inline lia-table-row")]),s(c,q$,r))},a)))}),z_=t(function(r,n){switch(n.$){case 0:return s(Ex,s(R$,"lia-horiz-line",e=n.a),J);case 2:var t=n.b;return s(s$,s(R$,"lia-paragraph",e=n.a),r.fn(t));case 7:var e=n.a,u=n.b,a=u.a,c=u.b,i=u.c;if(2===r.ex)return s(Ym,J,F([C_(a),s(Ym,s(R$,"",Rt),s(bu,z_(r),i))]));var o=1>C(a,r.cR.J.df)&&C(c,r.cR.J.df)>0;return s(Ym,F([Tx(!o)]),F([C_(a),s(Ym,s(Tt,Dx(R(a,r.cR.J.df)?"focused":Zt(a)),s(R$,"lia-effect",e)),s(bu,z_(r),i))]));case 3:var f=n.b;return s(Bx,s(R$,"lia-list lia-unordered",e=n.a),s(H_,r,f));case 4:return f=n.b,s(Hx,s(R$,"lia-list lia-ordered",e=n.a),s(B_,r,f));case 5:return d(V_,r,e=n.a,n.b,n.c,n.d);case 1:return t=n.b,s(E$,s(R$,"lia-quote",e=n.a),s(bu,function(n){return s(z_,r,n)},t));case 11:return s(f$,Pp,d(Kj,r.em,r.bB,e=n.a,r.cR.aR,n.b));case 6:if(1===n.c.$){var v=n.b;return s(Ym,s(R$,"lia-quiz lia-card",e=n.a),F([s(f$,Gp,b(a_,r.ex,r.em,v,r.cR.be))]))}v=n.b;var p=n.c.a.a;return s(Ym,s(R$,"lia-quiz lia-card",e=n.a),function(){var n=s(N_,r.cR.be,v);if(n.b){var t=n.a;return s(Fa,F([s(f$,Gp,b(a_,r.ex,r.em,v,r.cR.be))]),s(Tt,t?b$(""):s(Ex,J,J),s(bu,z_(r),p)))}return F([s(f$,Gp,b(a_,r.ex,r.em,v,r.cR.be))])}());case 9:return s(f$,Ip,d(D_,r.ex,r.em,e=n.a,n.b,r.cR.bt));case 8:var h=n.a,g=h.a,m=h.b,$=B(r.ex,R(g,r.cR.J.df),l(_x,g,m,r.cR.J));if(2!==$.a||$.c.$)return b$("");var w=$.c.a;return s(z_,r,s(Hs,e=w.a,w.b));case 10:return l(VS,!r.a4,e=n.a,n.b);default:var x=n.b;return k=s(Lx,T$(e=n.a),s(Vx,N$,x)),r.a4?k:s(Ym,F([s(r$,"-webkit-filter","invert(100%)"),s(r$,"filter","invert(100%)")]),F([k]))}var k}),H_=t(function(r,n){var t=s(Wu,bu(z_(r)),zx(J));return s(bu,t,n)}),B_=t(function(r,n){return s(bu,function(n){var t=n.b;return s(zx,F([Ux(n.a)]),s(bu,z_(r),t))},n)}),U_={$:4},P_=t(function(r,n){return s(Uu,n,r)}),G_=e(function(r,n,t){var e=s(ju,P_(t),n);if(e.$)return b$("");var u=e.a;return s(Ym,F([_j(U_),s(r$,"position","fixed"),s(r$,"display","block"),s(r$,"width","100%"),s(r$,"height","100%"),s(r$,"top","0"),s(r$,"left","0"),s(r$,"right","0"),s(r$,"bottom","0"),s(r$,"background-color","rgba(0,0,0,0.6)"),s(r$,"z-index","2"),s(r$,"cursor","pointer"),s(r$,"overflow","auto")]),F([s(Ym,F([s(r$,"position","absolute"),s(r$,"top","50%"),s(r$,"left","50%"),s(r$,"font-size","20px"),s(r$,"color","white"),s(r$,"transform","translate(-50%,-50%)"),s(r$,"-ms-transform","translate(-50%,-50%)")]),s(bu,r,u))]))}),I_=Ln("h2"),J_=Ln("h3"),O_=Ln("h4"),M_=Ln("h5"),F_=Ln("header"),Q_=function(r){return s(F_,J,Xi(function(){switch(r.cR.ea){case 1:return c$(F([u$("lia-inline lia-h1")]));case 2:return I_(F([u$("lia-inline lia-h2")]));case 3:return J_(F([u$("lia-inline lia-h3")]));case 4:return O_(F([u$("lia-inline lia-h4")]));case 5:return M_(F([u$("lia-inline lia-h5")]));default:return i$(F([u$("lia-inline lia-h6")]))}}()(r.fn(r.cR.c8))))},X_=t(function(r,n){var t,e=r.a,u=r.b,a=r.c;return s($$,F([u$("lia-content")]),(t=s(Tt,Q_(e),s(Tt,l(G_,z_(e),u,a),s(bu,z_(e),n))),2===e.ex?s(Fa,t,F([s(_$,z_(e),a)])):t))}),Z_=a(function(r,n,t,e,u){var a=v(h$,n,s(AL,n,2===n?9999:t.J.df),t,e,r,u),c=t.dR;if(c.$)return l(m$,X_,B(a,t.b1,t.b2),t.dx);var i=c.a;return s($$,F([u$("lia-content")]),F([Q_(a),b$(i)]))}),K_=Ln("footer"),Y_=e$("alt"),W_=function(r){return s(zn,"height",Zt(r))},rR=function(r){switch(r){case 0:return"Звук вкл.";case 1:return"Sprecher aus";case 2:return"Sound off";case 3:return"صدا خاموش";case 4:return"առանց ձայն";default:return"вимкнений"}},nR=function(r){switch(r){case 0:return"Звук изкл.";case 1:return"Sprecher an";case 2:return"Sound on";case 3:return"صدا روشن";case 4:return"ձայնով";default:return"увімкнений"}},tR=e(function(r,n,t){return s(Rj,J,F([s(WS,F([u$("lia-btn lia-icon"),_j(t),Tj(n?nR(r):rR(r))]),F([b$(n?"volume_up":"volume_off")])),s(uL,F([oL("https://responsivevoice.org")]),F([b$("ResponsiveVoice-NonCommercial")])),b$(" licensed under "),s(uL,F([oL("https://creativecommons.org/licenses/by-nc-nd/4.0/")]),F([s(sL,F([Tj("ResponsiveVoice Text To Speech"),pL("https://responsivevoice.org/wp-content/uploads/2014/08/95x15.png"),Y_("95x15"),(95,s(zn,"width",Zt(95))),W_(15)]),J)]))]))}),eR=function(r){return{$:0,a:r}},uR=eR({$:1}),aR=u(function(r,n,t,e){switch(t){case 0:return s(K_,F([u$("lia-footer")]),l(_c,Fa,F([l(tR,r,n,cb(uR))]),s(bu,function(r){return s(s$,J,l(AL,t,9999,r.b))},(a=s(Uu,(u=e).df,u.aB)).$?J:Ct(a.a._))));case 1:return s(K_,F([u$("lia-footer")]),F([l(tR,r,n,cb(uR))]));default:return b$("")}var u,a}),cR={$:3},iR={$:2},oR=function(r){switch(r){case 0:return"Следващ";case 1:return"weiter";case 2:return"next";case 3:return"بعدی";case 4:return"հաջորդը";default:return"далі"}},fR=function(r){switch(r){case 0:return"Предишен";case 1:return"zurück";case 2:return"previous";case 3:return"قبلی";case 4:return"նախորդը";default:return"назад"}},sR=Ln("nav"),lR=e(function(r,n,t){return s(WS,F([_j(t),Tj(n),u$("lia-btn lia-slide-control lia-left")]),F([b$(r)]))}),bR={$:5},dR=t(function(r,n){return s(WS,F([u$("lia-btn lia-right"),_j(bR),Tj(function(){switch(n){case 0:return function(r){switch(r){case 0:return"Режим: Слайдове";case 1:return"Modus: Folien";case 2:return"Mode: Slides";case 3:return"سبک: اسلایدها";case 4:return"կերպ: սլայդներ";default:return"режим: слайди"}}(r);case 1:return function(r){switch(r){case 0:return"Режим: Презентация";case 1:return"Modus: Präsentation";case 2:return"Mode: Presentation";case 3:return"سبک: ارائه";case 4:return"կերպ: ներկայացում";default:return"режим: презентація"}}(r);default:return function(r){switch(r){case 0:return"Режим: Текст";case 1:return"Modus: Lehrbuch";case 2:return"Mode: Textbook";case 3:return"سبک: کتاب";case 4:return"կերպ: գիրք";default:return"режим: навчальна книга"}}(r)}}())]),F([b$(function(){switch(n){case 0:return"visibility";case 1:return"hearing";default:return"book"}}())]))}),vR={$:0},pR=function(r){switch(r){case 0:return"Съдържание (показване/скриване)";case 1:return"Inhaltsverzeichnis (zeigen/verbergen)";case 2:return"Table of Contents (show/hide)";case 3:return"فهرست مطالب) نمایش/عدم نمایش)";case 4:return"բովանդակություն (ցույց տալ / թաքցնել)";default:return"зміст (показати/приховати)"}},hR=function(r){return s(WS,F([_j(eR(vR)),Tj(pR(r)),u$("lia-btn lia-toc-control lia-left")]),F([b$("toc")]))},gR=i(function(r,n,t,e,u,a,c){return s(sR,F([u$("lia-toolbar")]),F([s(f$,cb,hR(t)),s(Rj,F([u$("lia-spacer")]),J),l(lR,"navigate_before",fR(t),iR),s(Rj,F([u$("lia-labeled lia-left")]),F([s(Rj,F([u$("lia-label"),a?s(r$,"text-decoration","underline"):s(r$,"","")]),F([b$(Zt(r+1)),b$(2===n?"":c)]))])),l(lR,"navigate_next",oR(t),cR),s(Rj,F([u$("lia-spacer")]),J),s(f$,cb,s(dR,t,n))]))}),mR=function(r){return s(d$,F([u$("lia-slide")]),function(){var n=Yl(r);if(n.$)return F([b$("")]);var t=n.a;return F([p(gR,r.cS,r.ae.ex,r.at,r.bw,v$(r.bT),r.ae.c$,p$(t.J)),s(f$,Ol,d(Z_,r.at,r.ae.ex,t,r.ae.bV,r.ae.a4)),b(aR,r.at,r.ae.cY,r.ae.ex,t.J)])}())},$R=function(r){return{$:4,a:r}},wR=Ln("aside"),xR=t(function(r,n){return n.df?s(uL,F([u$("lia-toc-l"+Zt(n.ea)+(R(n.dR,Rt)?R(r,n.ca)?" lia-active":n.fo?"":" lia-not-visited":" lia-error")),oL("#"+Zt(n.ca+1))]),l(AL,1,9999,n.c8)):b$("")}),kR=t(function(r,n){var t=xR(r);return s(Ym,F([u$("lia-content")]),s(bu,t,Ct(n)))}),yR=function(r){return{$:3,a:r}},qR=function(r){switch(r){case 0:return"Информация";case 1:return"Informationen";case 2:return"Informations";case 3:return"اطلاعات";case 4:return"ինֆորմացիա";default:return"інформація"}},AR=function(r){switch(r){case 0:return"Настройки";case 1:return"Einstellungen";case 2:return"Settings";case 3:return"تنظیمات";case 4:return"կարգավորումներ";default:return"налаштування"}},SR=function(r){switch(r){case 0:return"Споделяне";case 1:return"Teilen";case 2:return"Share";case 3:return"اشتراک";case 4:return"կիսվել";default:return"поділитися"}},jR=function(r){switch(r){case 0:return"Транслации";case 1:return"Übersetzungen";case 2:return"Translations";case 3:return"ترجمه ها";case 4:return"թարգմանություններ";default:return"переклади"}},LR=u(function(r,n,t,e){return s(WS,F([_j(e),u$("lia-btn lia-icon"+(r?" lia-selected":"")),Tj(t),s(r$,"width","42px"),s(r$,"padding","0px")]),F([b$(n)]))}),_R=Dn,RR=function(r){return F([u$("lia-slide-animation"+(r?" lia-settings":"")),s(r$,"max-height",r?"256px":"0px")])},TR=t(function(r,n){return s(Ym,RR(r),F([s(s$,J,F([s(sL,F([pL("https://api.qrserver.com/v1/create-qr-code/?size=222x222&data="+n),s(r$,"width","99%")]),J)]))]))}),ER=s(Wu,b$,s(Wu,Xi,Nj(J))),DR=function(r){switch(r){case 0:return"Автор: ";case 1:return"Autor: ";case 2:return"Author: ";case 3:return"نویسنده: ";case 4:return"հեղինակ: ";default:return"автор: "}},CR=function(r){switch(r){case 0:return"Дата: ";case 1:return"Datum: ";case 2:return"Date: ";case 3:return"تاریخ: ";case 4:return"ամսաթիվ: ";default:return"дата: "}},NR=function(r){switch(r){case 0:return"eMail: ";case 1:return"e-Mail: ";case 2:return"eMail: ";case 3:return"ایمیل: ";case 4:return"էլ․ փոստ: ";default:return"електронна пошта: "}},VR=function(r){switch(r){case 0:return"Версия: ";case 1:case 2:return"Version: ";case 3:return"نسخه: ";case 4:return"տարբերակ: ";default:return"версія: "}},zR=Rj(F([s(r$,"display","block")])),HR=function(r){return s(Rj,J,F([s(Ex,J,J),zR(s(bu,SL(2),r))]))},BR=e(function(r,n,t){return s(Ym,RR(n),F([Ye(t.dt)?b$(""):zR(F([ER(DR(r)),b$(t.dt)])),Ye(t.dQ)?b$(""):zR(F([ER(NR(r)),s(uL,F([oL(t.dQ)]),F([b$(t.dQ)]))])),Ye(t.fm)?b$(""):zR(F([ER(VR(r)),b$(t.fm)])),Ye(t.dJ)?b$(""):zR(F([ER(CR(r)),b$(t.dJ)])),ls(t.bE)?b$(""):zR(F([ER("Attributes:"),s(t$,J,J),(e=t.bE,s(Rj,J,s(bu,HR,e)))]))]));var e}),UR=function(r){switch(r){case 0:return"Цвят";case 1:return"Farbe";case 2:return"Color";case 3:return"رنگ";case 4:return"գույն";default:return"колір"}},PR=function(r){switch(r){case 0:return"Кехлибар";case 1:return"Bernstein";case 2:return"Amber";case 3:return"کهربایی";case 4:return"սաթագույն";default:return"бурштиновий"}},GR=function(r){switch(r){case 0:return"Синьо";case 1:return"Blau";case 2:return"Blue";case 3:return"آبی";case 4:return"կապույտ";default:return"синій"}},IR=function(r){switch(r){case 0:return"Подразбиране";case 1:return"Standard";case 2:return"Default";case 3:return"پیشفرض";case 4:return"կանխադրված";default:return"стандартний"}},JR=function(r){switch(r){case 0:return"Сиво";case 1:return"Grau";case 2:return"Gray";case 3:return"خاکستری";case 4:return"մոխրագույն";default:return"сірий"}},OR=function(r){switch(r){case 0:return"Зелено";case 1:return"Grün";case 2:return"Green";case 3:return"سبز";case 4:return"կանաչ";default:return"зелений"}},MR=function(r){switch(r){case 0:return"Лилаво";case 1:return"Violett";case 2:return"Purple";case 3:return"بنفش";case 4:return"մանուշակագույն";default:return"фіолетовий"}},FR=Ln("label"),QR=e$("name"),XR=u(function(r,n,t,e){return s(FR,F([u$(n),s(r$,"float",e)]),F([s(JS,F([TL("radio"),QR("toggle"),BL(r),_j((u=n,{$:1,a:u}))]),J),s(Rj,J,F([b$(t)]))]));var u}),ZR=t(function(r,n){return s(Ym,F([u$("lia-color")]),s(bu,function(r){var t=r.a,e=r.b,u=r.c;return b(XR,R(t,n),t,u,e)},F([B("default","left",IR(r)),B("amber","right",PR(r)),B("blue","left",GR(r)),B("green","right",OR(r)),B("grey","left",JR(r)),B("purple","right",MR(r))])))}),KR=function(r){return{$:4,a:r}},YR=function(r){switch(r){case 0:return"Увеличаване";case 1:return"verkleinern";case 2:return"decrease";case 3:return"افزودن";case 4:return"նվազել";default:return"зменшити"}},WR=function(r){switch(r){case 0:return"Шрифт";case 1:return"Schrift";case 2:return"Font";case 3:return"فونت";case 4:return"տառատեսակ";default:return"шрифт"}},rT=function(r){switch(r){case 0:return"Намаляване";case 1:return"vergrößern";case 2:return"increase";case 3:return"کاستن";case 4:return"աճել";default:return"збільшити"}},nT=e(function(r,n,t){return s(WS,F([_j(t),Tj(n),u$("lia-btn lia-slide-control lia-left")]),F([b$(r)]))}),tT=t(function(r,n){return s(Ym,J,F([b$(WR(r)+":"),l(nT,"-",YR(r),KR(!1)),b$(Zt(n)+"%"),l(nT,"+",rT(r),KR(!0))]))}),eT=s(WS,F([_j({$:6})]),F([b$("reset course")])),uT=function(r){return{$:2,a:r}},aT=function(r){switch(r){case 0:return"Светло";case 1:return"Hell";case 2:return"Bright";case 3:return"روشن";case 4:return"բաց";default:return"світлий"}},cT=function(r){switch(r){case 0:return"Тъмно";case 1:return"Dunkel";case 2:return"Dark";case 3:return"تیره";case 4:return"մուգ";default:return"темний"}},iT=Ln("optgroup"),oT=Ln("option"),fT=Rx("selected"),sT=t(function(r,n){var t=n.a,e=n.b;return s(oT,F([Ux(t),fT(R(t,r))]),F([b$(e)]))}),lT=Ln("select"),bT=t(function(r,n){var t=sT(n);return s(Ym,F([s(r$,"display","inline-flex"),s(r$,"width","99%")]),F([s(lT,F([ZS(uT)]),F([s(iT,F([s(k$,"label",aT(r))]),s(bu,t,F([H("chrome","Chrome"),H("clouds","Clouds"),H("crimson_editor","Crimson Editor"),H("dawn","Dawn"),H("dreamweaver","Dreamweaver"),H("eclipse","Eclipse"),H("github","Github"),H("iplastic","IPlastic"),H("katzenmilch","KatzenMilch"),H("kuroir","Kuroir"),H("solarized_light","Solarized Light"),H("sqlserver","SQL Server"),H("textmate","TextMate"),H("tomorrow","Tomorrow"),H("xcode","XCode")]))),s(iT,F([s(k$,"label",cT(r))]),s(bu,t,F([H("ambiance","Ambiance"),H("chaos","Chaos"),H("clouds_midnight","Clouds Midnight"),H("cobalt","Cobalt"),H("dracula","Dracula"),H("gob","Green on Black"),H("gruvbox","Gruvbox"),H("idle_fingers","idle Fingers"),H("kr_theme","krTheme"),H("merbivore","Merbivore"),H("merbivore_soft","Merbivore Soft"),H("mono_industrial","Mono Industrial"),H("monokai","Monokai"),H("pastel_on_dark","Pastel on dark"),H("solarized_dark","Solarized Dark"),H("terminal","Terminal"),H("tomorrow_night","Tomorrow Night"),H("tomorrow_night_blue","Tomorrow Night Blue"),H("tomorrow_night_bright","Tomorrow Night Bright"),H("tomorrow_night_eighties","Tomorrow Night 80s"),H("twilight","Twilight"),H("vibrant_ink","Vibrant Ink")])))]))]))}),dT={$:2},vT=t(function(r,n){return s(Ym,RR(r.bH.ae),F([s(s$,J,F([b$(UR(n)),(t=r.a4,s(Rj,F([u$("lia-btn"),_j(eR(dT)),s(r$,"text-align","right")]),F([b$(t?"🌞":"🌝")]))),s(ZR,n,r.c7),s(bT,n,r.bV),s(tT,n,r.b0),eT]))]));var t}),pT=function(r){switch(r){case 0:return"Без превод";case 1:return"noch keine Übersetzungen vorhanden";case 2:return"no translation yet";case 3:return"در دست ترجمه";case 4:return"դեռ թագմանություն չկա";default:return"переклад відсутній"}},hT=u(function(r,n,t,e){return s(Ym,RR(n),ls(e)?F([b$(pT(r))]):s(bu,function(r){var n=r.a;return s(uL,F([oL(I(t,r.b))]),F([b$(n),s(t$,J,J)]))},e))}),gT=a(function(r,n,t,e,u){return s(Ym,J,F([l(m$,vT,r,u),b(_R,BR,u,r.bH.ed,n),b(hT,u,r.bH.fi,e+"?",v$(n)),l(m$,TR,r.bH.e_,t),s(Ym,F([u$("lia-settings"),s(r$,"display","inline-flex"),s(r$,"width","99%")]),F([b(LR,r.bH.ae,"settings",AR(u),eR(yR(0))),b(LR,r.bH.ed,"info",qR(u),eR(yR(2))),b(LR,r.bH.fi,"translate",jR(u),eR(yR(1))),b(LR,r.bH.e_,"share",SR(u),eR(yR(3)))]))]))}),mT=function(r){switch(r){case 0:return"Търсене";case 1:return"Suche";case 2:return"Search";case 3:return"جستجو";case 4:return"փնտրել";default:return"пошук"}},$T=t(function(r,n){return s(Rj,F([u$("lia-toolbar")]),F([s(JS,F([TL("input"),Ux(n),u$("lia-input"),L_(mT(r)),s(r$,"max-width","100%"),ZS(Oe)]),J)]))}),wT=function(r){return s(wR,F([u$("lia-toc"),s(r$,"max-width",r.ae.c4?"256px":"0px")]),F([s(f$,$R,s($T,r.at,r.cb)),s(kR,r.cS,r.cT),s(f$,cb,d(gT,r.ae,s(ci,r.bT,s(ju,function(r){return r.bT},Yl(r))),r.bw,r.cu,r.at))]))},xT=function(r){return function(r){return s(Ym,function(r){return F([u$("lia-canvas lia-theme-"+r.c7+" lia-variant-"+(r.a4?"light":"dark")),s(r$,"font-size",Zt(r.b0)+"%")])}(r.ae),F([wT(r),mR(r)]))}(r)},kT=function(r){return{$:5,a:r}},yT={$:6};_p={App:{init:(Tp=(Rp={ee:Bl,eK:function(r){return{$:4,a:r}},eL:function(r){return{$:3,a:r}},e4:function(r){return s(Il,Gl,function(r){return function(r){return Yl(r).$?Ql(Jl):Ml(F([Ql(Jl),s(Il,Ol,rb(Wl))]))}(r)}(r.e))},fk:Km,fn:function(r){return{dx:function(){var n,t=r.t;switch(t.$){case 3:return F([s(f$,Gl,xT(r.e))]);case 0:return F([(n=r.e.ap,n$(F([s(c$,J,F([b$("Lia")])),s(t$,J,J),s(t$,J,J),s(JS,F([L_("enter course URL"),Ux(n),ZS(kT)]),J),s(WS,F([u$("lia-btn"),_j(yT)]),F([b$("load URL")])),s(t$,J,J),s(t$,J,J),s(t$,J,J),s(uL,F([oL("https://gitlab.com/Freinet/LiaScript")]),F([b$("https://gitlab.com/Freinet/LiaScript")]))])))]);case 1:return F([n$(F([s(c$,J,F([b$("Loading")])),s(t$,J,J),s(Ym,F([u$("lds-dual-ring")]),J)]))]);case 2:var e=Qe(s(ci,"",r.S));return F([n$(F([s(c$,J,F([b$("Parsing : "+l(Xe,0,5,a$(100-e/r.aP*100))+"%")])),s(t$,J,J),s(Ym,F([u$("lds-dual-ring")]),J)]))]);default:var u=t.a;return F([n$(F([s(c$,J,F([b$("Load failed")])),s(i$,J,F([b$(r.e.ap)])),s(s$,F([s(r$,"margin-left","20%"),s(r$,"margin-right","20%")]),F([b$(u)]))]))])}}(),c8:r.e.c8}}}).eK,Ep=Rp.eL,Dp=function(){Dp.a(Tp(st()))},ot({bk:function(r){return Dp.a=r,pt.addEventListener("popstate",Dp),0>pt.navigator.userAgent.indexOf("Trident")||pt.addEventListener("hashchange",Dp),t(function(n,t){if(!(t.ctrlKey||t.metaKey||t.shiftKey||t.button>=1||n.target||n.hasAttribute("download"))){t.preventDefault();var e=n.href,u=st(),a=cu(e).a;r(Ep(a&&u.cB===a.cB&&u.b6===a.b6&&u.cx.a===a.cx.a?{$:0,a:a}:function(r){return{$:1,a:r}}(e)))}})},ee:function(r){return l(Rp.ee,r,st(),Dp)},fn:Rp.fn,fk:Rp.fk,e4:Rp.e4}))(s(Ue,function(r){return s(Ue,function(n){return s(Ue,function(t){return s(Ue,function(e){return s(Ue,function(u){return Ie({aS:u,bQ:e,bi:t,ae:n,cZ:r})},s(ku,"course",Pl(F([Ul(Rt),s(Pe,_t,za)]))))},s(ku,"debug",xu))},s(ku,"script",Pl(F([Ul(Rt),s(Pe,_t,za)]))))},s(ku,"settings",Fl))},s(ku,"spa",xu)))(0)}},r.Elm?function r(n,t){for(var e in t)e in n?"init"==e?_(6):r(n[e],t[e]):n[e]=t[e]}(r.Elm,_p):r.Elm=_p}(this);

/***/ }),
/* 103 */,
/* 104 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.3.1 Object.assign(target, source)
var $export = __webpack_require__(2);

$export($export.S + $export.F, 'Object', {
  assign: __webpack_require__(105)
});

/***/ }),
/* 105 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 // 19.1.2.1 Object.assign(target, source, ...)

var DESCRIPTORS = __webpack_require__(4);

var getKeys = __webpack_require__(16);

var gOPS = __webpack_require__(36);

var pIE = __webpack_require__(25);

var toObject = __webpack_require__(31);

var IObject = __webpack_require__(60);

var $assign = Object.assign; // should work with symbols and should have deterministic property order (V8 bug)

module.exports = !$assign || __webpack_require__(9)(function () {
  var A = {};
  var B = {}; // eslint-disable-next-line no-undef

  var S = Symbol();
  var K = 'abcdefghijklmnopqrst';
  A[S] = 7;
  K.split('').forEach(function (k) {
    B[k] = k;
  });
  return $assign({}, A)[S] != 7 || Object.keys($assign({}, B)).join('') != K;
}) ? function assign(target, source) {
  // eslint-disable-line no-unused-vars
  var T = toObject(target);
  var aLen = arguments.length;
  var index = 1;
  var getSymbols = gOPS.f;
  var isEnum = pIE.f;

  while (aLen > index) {
    var S = IObject(arguments[index++]);
    var keys = getSymbols ? getKeys(S).concat(getSymbols(S)) : getKeys(S);
    var length = keys.length;
    var j = 0;
    var key;

    while (length > j) {
      key = keys[j++];
      if (!DESCRIPTORS || isEnum.call(S, key)) T[key] = S[key];
    }
  }

  return T;
} : $assign;

/***/ }),
/* 106 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var LIBRARY = __webpack_require__(20);

var global = __webpack_require__(1);

var ctx = __webpack_require__(15);

var classof = __webpack_require__(37);

var $export = __webpack_require__(2);

var isObject = __webpack_require__(3);

var aFunction = __webpack_require__(23);

var anInstance = __webpack_require__(40);

var forOf = __webpack_require__(41);

var speciesConstructor = __webpack_require__(107);

var task = __webpack_require__(96).set;

var microtask = __webpack_require__(108)();

var newPromiseCapabilityModule = __webpack_require__(97);

var perform = __webpack_require__(109);

var userAgent = __webpack_require__(110);

var promiseResolve = __webpack_require__(111);

var PROMISE = 'Promise';
var TypeError = global.TypeError;
var process = global.process;
var versions = process && process.versions;
var v8 = versions && versions.v8 || '';
var $Promise = global[PROMISE];
var isNode = classof(process) == 'process';

var empty = function empty() {
  /* empty */
};

var Internal, newGenericPromiseCapability, OwnPromiseCapability, Wrapper;
var newPromiseCapability = newGenericPromiseCapability = newPromiseCapabilityModule.f;
var USE_NATIVE = !!function () {
  try {
    // correct subclassing with @@species support
    var promise = $Promise.resolve(1);

    var FakePromise = (promise.constructor = {})[__webpack_require__(0)('species')] = function (exec) {
      exec(empty, empty);
    }; // unhandled rejections tracking support, NodeJS Promise without it fails @@species test


    return (isNode || typeof PromiseRejectionEvent == 'function') && promise.then(empty) instanceof FakePromise // v8 6.6 (Node 10 and Chrome 66) have a bug with resolving custom thenables
    // https://bugs.chromium.org/p/chromium/issues/detail?id=830565
    // we can't detect it synchronously, so just check versions
    && v8.indexOf('6.6') !== 0 && userAgent.indexOf('Chrome/66') === -1;
  } catch (e) {
    /* empty */
  }
}(); // helpers

var isThenable = function isThenable(it) {
  var then;
  return isObject(it) && typeof (then = it.then) == 'function' ? then : false;
};

var notify = function notify(promise, isReject) {
  if (promise._n) return;
  promise._n = true;
  var chain = promise._c;
  microtask(function () {
    var value = promise._v;
    var ok = promise._s == 1;
    var i = 0;

    var run = function run(reaction) {
      var handler = ok ? reaction.ok : reaction.fail;
      var resolve = reaction.resolve;
      var reject = reaction.reject;
      var domain = reaction.domain;
      var result, then, exited;

      try {
        if (handler) {
          if (!ok) {
            if (promise._h == 2) onHandleUnhandled(promise);
            promise._h = 1;
          }

          if (handler === true) result = value;else {
            if (domain) domain.enter();
            result = handler(value); // may throw

            if (domain) {
              domain.exit();
              exited = true;
            }
          }

          if (result === reaction.promise) {
            reject(TypeError('Promise-chain cycle'));
          } else if (then = isThenable(result)) {
            then.call(result, resolve, reject);
          } else resolve(result);
        } else reject(value);
      } catch (e) {
        if (domain && !exited) domain.exit();
        reject(e);
      }
    };

    while (chain.length > i) {
      run(chain[i++]);
    } // variable length - can't use forEach


    promise._c = [];
    promise._n = false;
    if (isReject && !promise._h) onUnhandled(promise);
  });
};

var onUnhandled = function onUnhandled(promise) {
  task.call(global, function () {
    var value = promise._v;
    var unhandled = isUnhandled(promise);
    var result, handler, console;

    if (unhandled) {
      result = perform(function () {
        if (isNode) {
          process.emit('unhandledRejection', value, promise);
        } else if (handler = global.onunhandledrejection) {
          handler({
            promise: promise,
            reason: value
          });
        } else if ((console = global.console) && console.error) {
          console.error('Unhandled promise rejection', value);
        }
      }); // Browsers should not trigger `rejectionHandled` event if it was handled here, NodeJS - should

      promise._h = isNode || isUnhandled(promise) ? 2 : 1;
    }

    promise._a = undefined;
    if (unhandled && result.e) throw result.v;
  });
};

var isUnhandled = function isUnhandled(promise) {
  return promise._h !== 1 && (promise._a || promise._c).length === 0;
};

var onHandleUnhandled = function onHandleUnhandled(promise) {
  task.call(global, function () {
    var handler;

    if (isNode) {
      process.emit('rejectionHandled', promise);
    } else if (handler = global.onrejectionhandled) {
      handler({
        promise: promise,
        reason: promise._v
      });
    }
  });
};

var $reject = function $reject(value) {
  var promise = this;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap

  promise._v = value;
  promise._s = 2;
  if (!promise._a) promise._a = promise._c.slice();
  notify(promise, true);
};

var $resolve = function $resolve(value) {
  var promise = this;
  var then;
  if (promise._d) return;
  promise._d = true;
  promise = promise._w || promise; // unwrap

  try {
    if (promise === value) throw TypeError("Promise can't be resolved itself");

    if (then = isThenable(value)) {
      microtask(function () {
        var wrapper = {
          _w: promise,
          _d: false
        }; // wrap

        try {
          then.call(value, ctx($resolve, wrapper, 1), ctx($reject, wrapper, 1));
        } catch (e) {
          $reject.call(wrapper, e);
        }
      });
    } else {
      promise._v = value;
      promise._s = 1;
      notify(promise, false);
    }
  } catch (e) {
    $reject.call({
      _w: promise,
      _d: false
    }, e); // wrap
  }
}; // constructor polyfill


if (!USE_NATIVE) {
  // 25.4.3.1 Promise(executor)
  $Promise = function Promise(executor) {
    anInstance(this, $Promise, PROMISE, '_h');
    aFunction(executor);
    Internal.call(this);

    try {
      executor(ctx($resolve, this, 1), ctx($reject, this, 1));
    } catch (err) {
      $reject.call(this, err);
    }
  }; // eslint-disable-next-line no-unused-vars


  Internal = function Promise(executor) {
    this._c = []; // <- awaiting reactions

    this._a = undefined; // <- checked in isUnhandled reactions

    this._s = 0; // <- state

    this._d = false; // <- done

    this._v = undefined; // <- value

    this._h = 0; // <- rejection state, 0 - default, 1 - handled, 2 - unhandled

    this._n = false; // <- notify
  };

  Internal.prototype = __webpack_require__(42)($Promise.prototype, {
    // 25.4.5.3 Promise.prototype.then(onFulfilled, onRejected)
    then: function then(onFulfilled, onRejected) {
      var reaction = newPromiseCapability(speciesConstructor(this, $Promise));
      reaction.ok = typeof onFulfilled == 'function' ? onFulfilled : true;
      reaction.fail = typeof onRejected == 'function' && onRejected;
      reaction.domain = isNode ? process.domain : undefined;

      this._c.push(reaction);

      if (this._a) this._a.push(reaction);
      if (this._s) notify(this, false);
      return reaction.promise;
    },
    // 25.4.5.1 Promise.prototype.catch(onRejected)
    'catch': function _catch(onRejected) {
      return this.then(undefined, onRejected);
    }
  });

  OwnPromiseCapability = function OwnPromiseCapability() {
    var promise = new Internal();
    this.promise = promise;
    this.resolve = ctx($resolve, promise, 1);
    this.reject = ctx($reject, promise, 1);
  };

  newPromiseCapabilityModule.f = newPromiseCapability = function newPromiseCapability(C) {
    return C === $Promise || C === Wrapper ? new OwnPromiseCapability(C) : newGenericPromiseCapability(C);
  };
}

$export($export.G + $export.W + $export.F * !USE_NATIVE, {
  Promise: $Promise
});

__webpack_require__(21)($Promise, PROMISE);

__webpack_require__(68)(PROMISE);

Wrapper = __webpack_require__(13)[PROMISE]; // statics

$export($export.S + $export.F * !USE_NATIVE, PROMISE, {
  // 25.4.4.5 Promise.reject(r)
  reject: function reject(r) {
    var capability = newPromiseCapability(this);
    var $$reject = capability.reject;
    $$reject(r);
    return capability.promise;
  }
});
$export($export.S + $export.F * (LIBRARY || !USE_NATIVE), PROMISE, {
  // 25.4.4.6 Promise.resolve(x)
  resolve: function resolve(x) {
    return promiseResolve(LIBRARY && this === Wrapper ? $Promise : this, x);
  }
});
$export($export.S + $export.F * !(USE_NATIVE && __webpack_require__(69)(function (iter) {
  $Promise.all(iter)['catch'](empty);
})), PROMISE, {
  // 25.4.4.1 Promise.all(iterable)
  all: function all(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var resolve = capability.resolve;
    var reject = capability.reject;
    var result = perform(function () {
      var values = [];
      var index = 0;
      var remaining = 1;
      forOf(iterable, false, function (promise) {
        var $index = index++;
        var alreadyCalled = false;
        values.push(undefined);
        remaining++;
        C.resolve(promise).then(function (value) {
          if (alreadyCalled) return;
          alreadyCalled = true;
          values[$index] = value;
          --remaining || resolve(values);
        }, reject);
      });
      --remaining || resolve(values);
    });
    if (result.e) reject(result.v);
    return capability.promise;
  },
  // 25.4.4.4 Promise.race(iterable)
  race: function race(iterable) {
    var C = this;
    var capability = newPromiseCapability(C);
    var reject = capability.reject;
    var result = perform(function () {
      forOf(iterable, false, function (promise) {
        C.resolve(promise).then(capability.resolve, reject);
      });
    });
    if (result.e) reject(result.v);
    return capability.promise;
  }
});

/***/ }),
/* 107 */
/***/ (function(module, exports, __webpack_require__) {

// 7.3.20 SpeciesConstructor(O, defaultConstructor)
var anObject = __webpack_require__(5);

var aFunction = __webpack_require__(23);

var SPECIES = __webpack_require__(0)('species');

module.exports = function (O, D) {
  var C = anObject(O).constructor;
  var S;
  return C === undefined || (S = anObject(C)[SPECIES]) == undefined ? D : aFunction(S);
};

/***/ }),
/* 108 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);

var macrotask = __webpack_require__(96).set;

var Observer = global.MutationObserver || global.WebKitMutationObserver;
var process = global.process;
var Promise = global.Promise;
var isNode = __webpack_require__(24)(process) == 'process';

module.exports = function () {
  var head, last, notify;

  var flush = function flush() {
    var parent, fn;
    if (isNode && (parent = process.domain)) parent.exit();

    while (head) {
      fn = head.fn;
      head = head.next;

      try {
        fn();
      } catch (e) {
        if (head) notify();else last = undefined;
        throw e;
      }
    }

    last = undefined;
    if (parent) parent.enter();
  }; // Node.js


  if (isNode) {
    notify = function notify() {
      process.nextTick(flush);
    }; // browsers with MutationObserver, except iOS Safari - https://github.com/zloirock/core-js/issues/339

  } else if (Observer && !(global.navigator && global.navigator.standalone)) {
    var toggle = true;
    var node = document.createTextNode('');
    new Observer(flush).observe(node, {
      characterData: true
    }); // eslint-disable-line no-new

    notify = function notify() {
      node.data = toggle = !toggle;
    }; // environments with maybe non-completely correct, but existent Promise

  } else if (Promise && Promise.resolve) {
    // Promise.resolve without an argument throws an error in LG WebOS 2
    var promise = Promise.resolve(undefined);

    notify = function notify() {
      promise.then(flush);
    }; // for other environments - macrotask based on:
    // - setImmediate
    // - MessageChannel
    // - window.postMessag
    // - onreadystatechange
    // - setTimeout

  } else {
    notify = function notify() {
      // strange IE + webpack dev server bug - use .call(global)
      macrotask.call(global, flush);
    };
  }

  return function (fn) {
    var task = {
      fn: fn,
      next: undefined
    };
    if (last) last.next = task;

    if (!head) {
      head = task;
      notify();
    }

    last = task;
  };
};

/***/ }),
/* 109 */
/***/ (function(module, exports) {

module.exports = function (exec) {
  try {
    return {
      e: false,
      v: exec()
    };
  } catch (e) {
    return {
      e: true,
      v: e
    };
  }
};

/***/ }),
/* 110 */
/***/ (function(module, exports, __webpack_require__) {

var global = __webpack_require__(1);

var navigator = global.navigator;
module.exports = navigator && navigator.userAgent || '';

/***/ }),
/* 111 */
/***/ (function(module, exports, __webpack_require__) {

var anObject = __webpack_require__(5);

var isObject = __webpack_require__(3);

var newPromiseCapability = __webpack_require__(97);

module.exports = function (C, x) {
  anObject(C);
  if (isObject(x) && x.constructor === C) return x;
  var promiseCapability = newPromiseCapability.f(C);
  var resolve = promiseCapability.resolve;
  resolve(x);
  return promiseCapability.promise;
};

/***/ }),
/* 112 */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin

/***/ }),
/* 113 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var Promise = __webpack_require__(98);

var DEFAULT_WHITELIST = [ReferenceError, TypeError, RangeError];
var enabled = false;
exports.disable = disable;

function disable() {
  enabled = false;
  Promise._l = null;
  Promise._m = null;
}

exports.enable = enable;

function enable(options) {
  options = options || {};
  if (enabled) disable();
  enabled = true;
  var id = 0;
  var displayId = 0;
  var rejections = {};

  Promise._l = function (promise) {
    if (promise._i === 2 && // IS REJECTED
    rejections[promise._o]) {
      if (rejections[promise._o].logged) {
        onHandled(promise._o);
      } else {
        clearTimeout(rejections[promise._o].timeout);
      }

      delete rejections[promise._o];
    }
  };

  Promise._m = function (promise, err) {
    if (promise._h === 0) {
      // not yet handled
      promise._o = id++;
      rejections[promise._o] = {
        displayId: null,
        error: err,
        timeout: setTimeout(onUnhandled.bind(null, promise._o), // For reference errors and type errors, this almost always
        // means the programmer made a mistake, so log them after just
        // 100ms
        // otherwise, wait 2 seconds to see if they get handled
        matchWhitelist(err, DEFAULT_WHITELIST) ? 100 : 2000),
        logged: false
      };
    }
  };

  function onUnhandled(id) {
    if (options.allRejections || matchWhitelist(rejections[id].error, options.whitelist || DEFAULT_WHITELIST)) {
      rejections[id].displayId = displayId++;

      if (options.onUnhandled) {
        rejections[id].logged = true;
        options.onUnhandled(rejections[id].displayId, rejections[id].error);
      } else {
        rejections[id].logged = true;
        logError(rejections[id].displayId, rejections[id].error);
      }
    }
  }

  function onHandled(id) {
    if (rejections[id].logged) {
      if (options.onHandled) {
        options.onHandled(rejections[id].displayId, rejections[id].error);
      } else if (!rejections[id].onUnhandled) {
        console.warn('Promise Rejection Handled (id: ' + rejections[id].displayId + '):');
        console.warn('  This means you can ignore any previous messages of the form "Possible Unhandled Promise Rejection" with id ' + rejections[id].displayId + '.');
      }
    }
  }
}

function logError(id, error) {
  console.warn('Possible Unhandled Promise Rejection (id: ' + id + '):');
  var errStr = (error && (error.stack || error)) + '';
  errStr.split('\n').forEach(function (line) {
    console.warn('  ' + line);
  });
}

function matchWhitelist(error, list) {
  return list.some(function (cls) {
    return error instanceof cls;
  });
}

/***/ }),
/* 114 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(global) { // Use the fastest means possible to execute a task in its own turn, with
// priority over other events including IO, animation, reflow, and redraw
// events in browsers.
//
// An exception thrown by a task will permanently interrupt the processing of
// subsequent tasks. The higher level `asap` function ensures that if an
// exception is thrown by a task, that the task queue will continue flushing as
// soon as possible, but if you use `rawAsap` directly, you are responsible to
// either ensure that no exceptions are thrown from your task, or to manually
// call `rawAsap.requestFlush` if an exception is thrown.

module.exports = rawAsap;

function rawAsap(task) {
  if (!queue.length) {
    requestFlush();
    flushing = true;
  } // Equivalent to push, but avoids a function call.


  queue[queue.length] = task;
}

var queue = []; // Once a flush has been requested, no further calls to `requestFlush` are
// necessary until the next `flush` completes.

var flushing = false; // `requestFlush` is an implementation-specific method that attempts to kick
// off a `flush` event as quickly as possible. `flush` will attempt to exhaust
// the event queue before yielding to the browser's own event loop.

var requestFlush; // The position of the next task to execute in the task queue. This is
// preserved between calls to `flush` so that it can be resumed if
// a task throws an exception.

var index = 0; // If a task schedules additional tasks recursively, the task queue can grow
// unbounded. To prevent memory exhaustion, the task queue will periodically
// truncate already-completed tasks.

var capacity = 1024; // The flush function processes all tasks that have been scheduled with
// `rawAsap` unless and until one of those tasks throws an exception.
// If a task throws an exception, `flush` ensures that its state will remain
// consistent and will resume where it left off when called again.
// However, `flush` does not make any arrangements to be called again if an
// exception is thrown.

function flush() {
  while (index < queue.length) {
    var currentIndex = index; // Advance the index before calling the task. This ensures that we will
    // begin flushing on the next task the task throws an error.

    index = index + 1;
    queue[currentIndex].call(); // Prevent leaking memory for long chains of recursive calls to `asap`.
    // If we call `asap` within tasks scheduled by `asap`, the queue will
    // grow, but to avoid an O(n) walk for every task we execute, we don't
    // shift tasks off the queue after they have been executed.
    // Instead, we periodically shift 1024 tasks off the queue.

    if (index > capacity) {
      // Manually shift all values starting at the index back to the
      // beginning of the queue.
      for (var scan = 0, newLength = queue.length - index; scan < newLength; scan++) {
        queue[scan] = queue[scan + index];
      }

      queue.length -= index;
      index = 0;
    }
  }

  queue.length = 0;
  index = 0;
  flushing = false;
} // `requestFlush` is implemented using a strategy based on data collected from
// every available SauceLabs Selenium web driver worker at time of writing.
// https://docs.google.com/spreadsheets/d/1mG-5UYGup5qxGdEMWkhP6BWCz053NUb2E1QoUTU16uA/edit#gid=783724593
// Safari 6 and 6.1 for desktop, iPad, and iPhone are the only browsers that
// have WebKitMutationObserver but not un-prefixed MutationObserver.
// Must use `global` or `self` instead of `window` to work in both frames and web
// workers. `global` is a provision of Browserify, Mr, Mrs, or Mop.

/* globals self */


var scope = typeof global !== "undefined" ? global : self;
var BrowserMutationObserver = scope.MutationObserver || scope.WebKitMutationObserver; // MutationObservers are desirable because they have high priority and work
// reliably everywhere they are implemented.
// They are implemented in all modern browsers.
//
// - Android 4-4.3
// - Chrome 26-34
// - Firefox 14-29
// - Internet Explorer 11
// - iPad Safari 6-7.1
// - iPhone Safari 7-7.1
// - Safari 6-7

if (typeof BrowserMutationObserver === "function") {
  requestFlush = makeRequestCallFromMutationObserver(flush); // MessageChannels are desirable because they give direct access to the HTML
  // task queue, are implemented in Internet Explorer 10, Safari 5.0-1, and Opera
  // 11-12, and in web workers in many engines.
  // Although message channels yield to any queued rendering and IO tasks, they
  // would be better than imposing the 4ms delay of timers.
  // However, they do not work reliably in Internet Explorer or Safari.
  // Internet Explorer 10 is the only browser that has setImmediate but does
  // not have MutationObservers.
  // Although setImmediate yields to the browser's renderer, it would be
  // preferrable to falling back to setTimeout since it does not have
  // the minimum 4ms penalty.
  // Unfortunately there appears to be a bug in Internet Explorer 10 Mobile (and
  // Desktop to a lesser extent) that renders both setImmediate and
  // MessageChannel useless for the purposes of ASAP.
  // https://github.com/kriskowal/q/issues/396
  // Timers are implemented universally.
  // We fall back to timers in workers in most engines, and in foreground
  // contexts in the following browsers.
  // However, note that even this simple case requires nuances to operate in a
  // broad spectrum of browsers.
  //
  // - Firefox 3-13
  // - Internet Explorer 6-9
  // - iPad Safari 4.3
  // - Lynx 2.8.7
} else {
  requestFlush = makeRequestCallFromTimer(flush);
} // `requestFlush` requests that the high priority event queue be flushed as
// soon as possible.
// This is useful to prevent an error thrown in a task from stalling the event
// queue if the exception handled by Node.js’s
// `process.on("uncaughtException")` or by a domain.


rawAsap.requestFlush = requestFlush; // To request a high priority event, we induce a mutation observer by toggling
// the text of a text node between "1" and "-1".

function makeRequestCallFromMutationObserver(callback) {
  var toggle = 1;
  var observer = new BrowserMutationObserver(callback);
  var node = document.createTextNode("");
  observer.observe(node, {
    characterData: true
  });
  return function requestCall() {
    toggle = -toggle;
    node.data = toggle;
  };
} // The message channel technique was discovered by Malte Ubl and was the
// original foundation for this library.
// http://www.nonblocking.io/2011/06/windownexttick.html
// Safari 6.0.5 (at least) intermittently fails to create message ports on a
// page's first load. Thankfully, this version of Safari supports
// MutationObservers, so we don't need to fall back in that case.
// function makeRequestCallFromMessageChannel(callback) {
//     var channel = new MessageChannel();
//     channel.port1.onmessage = callback;
//     return function requestCall() {
//         channel.port2.postMessage(0);
//     };
// }
// For reasons explained above, we are also unable to use `setImmediate`
// under any circumstances.
// Even if we were, there is another bug in Internet Explorer 10.
// It is not sufficient to assign `setImmediate` to `requestFlush` because
// `setImmediate` must be called *by name* and therefore must be wrapped in a
// closure.
// Never forget.
// function makeRequestCallFromSetImmediate(callback) {
//     return function requestCall() {
//         setImmediate(callback);
//     };
// }
// Safari 6.0 has a problem where timers will get lost while the user is
// scrolling. This problem does not impact ASAP because Safari 6.0 supports
// mutation observers, so that implementation is used instead.
// However, if we ever elect to use timers in Safari, the prevalent work-around
// is to add a scroll event listener that calls for a flush.
// `setTimeout` does not call the passed callback if the delay is less than
// approximately 7 in web workers in Firefox 8 through 18, and sometimes not
// even then.


function makeRequestCallFromTimer(callback) {
  return function requestCall() {
    // We dispatch a timeout with a specified delay of 0 for engines that
    // can reliably accommodate that request. This will usually be snapped
    // to a 4 milisecond delay, but once we're flushing, there's no delay
    // between events.
    var timeoutHandle = setTimeout(handleTimer, 0); // However, since this timer gets frequently dropped in Firefox
    // workers, we enlist an interval handle that will try to fire
    // an event 20 times per second until it succeeds.

    var intervalHandle = setInterval(handleTimer, 50);

    function handleTimer() {
      // Whichever timer succeeds will cancel both timers and
      // execute the callback.
      clearTimeout(timeoutHandle);
      clearInterval(intervalHandle);
      callback();
    }
  };
} // This is for `asap.js` only.
// Its name will be periodically randomized to break any code that depends on
// its existence.


rawAsap.makeRequestCallFromTimer = makeRequestCallFromTimer; // ASAP was originally a nextTick shim included in Q. This was factored out
// into this ASAP package. It was later adapted to RSVP which made further
// amendments. These decisions, particularly to marginalize MessageChannel and
// to capture the MutationObserver implementation in a closure, were integrated
// back into ASAP proper.
// https://github.com/tildeio/rsvp.js/blob/cddf7232546a9cf858524b75cde6f9edf72620a7/lib/rsvp/asap.js
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(115)))

/***/ }),
/* 115 */
/***/ (function(module, exports) {

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var g; // This works in non-strict mode

g = function () {
  return this;
}();

try {
  // This works if eval is allowed (see CSP)
  g = g || new Function("return this")();
} catch (e) {
  // This works if the window reference is available
  if ((typeof window === "undefined" ? "undefined" : _typeof(window)) === "object") g = window;
} // g can still be undefined, but nothing to do about it...
// We return undefined, instead of nothing here, so it's
// easier to handle this case. if(!global) { ...}


module.exports = g;

/***/ }),
/* 116 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
 //This file contains the ES6 extensions to the core Promises/A+ API

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var Promise = __webpack_require__(98);

module.exports = Promise;
/* Static Functions */

var TRUE = valuePromise(true);
var FALSE = valuePromise(false);
var NULL = valuePromise(null);
var UNDEFINED = valuePromise(undefined);
var ZERO = valuePromise(0);
var EMPTYSTRING = valuePromise('');

function valuePromise(value) {
  var p = new Promise(Promise._n);
  p._i = 1;
  p._j = value;
  return p;
}

Promise.resolve = function (value) {
  if (value instanceof Promise) return value;
  if (value === null) return NULL;
  if (value === undefined) return UNDEFINED;
  if (value === true) return TRUE;
  if (value === false) return FALSE;
  if (value === 0) return ZERO;
  if (value === '') return EMPTYSTRING;

  if (_typeof(value) === 'object' || typeof value === 'function') {
    try {
      var then = value.then;

      if (typeof then === 'function') {
        return new Promise(then.bind(value));
      }
    } catch (ex) {
      return new Promise(function (resolve, reject) {
        reject(ex);
      });
    }
  }

  return valuePromise(value);
};

Promise.all = function (arr) {
  var args = Array.prototype.slice.call(arr);
  return new Promise(function (resolve, reject) {
    if (args.length === 0) return resolve([]);
    var remaining = args.length;

    function res(i, val) {
      if (val && (_typeof(val) === 'object' || typeof val === 'function')) {
        if (val instanceof Promise && val.then === Promise.prototype.then) {
          while (val._i === 3) {
            val = val._j;
          }

          if (val._i === 1) return res(i, val._j);
          if (val._i === 2) reject(val._j);
          val.then(function (val) {
            res(i, val);
          }, reject);
          return;
        } else {
          var then = val.then;

          if (typeof then === 'function') {
            var p = new Promise(then.bind(val));
            p.then(function (val) {
              res(i, val);
            }, reject);
            return;
          }
        }
      }

      args[i] = val;

      if (--remaining === 0) {
        resolve(args);
      }
    }

    for (var i = 0; i < args.length; i++) {
      res(i, args[i]);
    }
  });
};

Promise.reject = function (value) {
  return new Promise(function (resolve, reject) {
    reject(value);
  });
};

Promise.race = function (values) {
  return new Promise(function (resolve, reject) {
    values.forEach(function (value) {
      Promise.resolve(value).then(resolve, reject);
    });
  });
};
/* Prototype Methods */


Promise.prototype['catch'] = function (onRejected) {
  return this.then(null, onRejected);
};

/***/ }),
/* 117 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Headers", function() { return Headers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Request", function() { return Request; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Response", function() { return Response; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DOMException", function() { return DOMException; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "fetch", function() { return fetch; });
var support = {
  searchParams: 'URLSearchParams' in self,
  iterable: 'Symbol' in self && 'iterator' in Symbol,
  blob: 'FileReader' in self && 'Blob' in self && function () {
    try {
      new Blob();
      return true;
    } catch (e) {
      return false;
    }
  }(),
  formData: 'FormData' in self,
  arrayBuffer: 'ArrayBuffer' in self
};

function isDataView(obj) {
  return obj && DataView.prototype.isPrototypeOf(obj);
}

if (support.arrayBuffer) {
  var viewClasses = ['[object Int8Array]', '[object Uint8Array]', '[object Uint8ClampedArray]', '[object Int16Array]', '[object Uint16Array]', '[object Int32Array]', '[object Uint32Array]', '[object Float32Array]', '[object Float64Array]'];

  var isArrayBufferView = ArrayBuffer.isView || function (obj) {
    return obj && viewClasses.indexOf(Object.prototype.toString.call(obj)) > -1;
  };
}

function normalizeName(name) {
  if (typeof name !== 'string') {
    name = String(name);
  }

  if (/[^a-z0-9\-#$%&'*+.^_`|~]/i.test(name)) {
    throw new TypeError('Invalid character in header field name');
  }

  return name.toLowerCase();
}

function normalizeValue(value) {
  if (typeof value !== 'string') {
    value = String(value);
  }

  return value;
} // Build a destructive iterator for the value list


function iteratorFor(items) {
  var iterator = {
    next: function next() {
      var value = items.shift();
      return {
        done: value === undefined,
        value: value
      };
    }
  };

  if (support.iterable) {
    iterator[Symbol.iterator] = function () {
      return iterator;
    };
  }

  return iterator;
}

function Headers(headers) {
  this.map = {};

  if (headers instanceof Headers) {
    headers.forEach(function (value, name) {
      this.append(name, value);
    }, this);
  } else if (Array.isArray(headers)) {
    headers.forEach(function (header) {
      this.append(header[0], header[1]);
    }, this);
  } else if (headers) {
    Object.getOwnPropertyNames(headers).forEach(function (name) {
      this.append(name, headers[name]);
    }, this);
  }
}

Headers.prototype.append = function (name, value) {
  name = normalizeName(name);
  value = normalizeValue(value);
  var oldValue = this.map[name];
  this.map[name] = oldValue ? oldValue + ', ' + value : value;
};

Headers.prototype['delete'] = function (name) {
  delete this.map[normalizeName(name)];
};

Headers.prototype.get = function (name) {
  name = normalizeName(name);
  return this.has(name) ? this.map[name] : null;
};

Headers.prototype.has = function (name) {
  return this.map.hasOwnProperty(normalizeName(name));
};

Headers.prototype.set = function (name, value) {
  this.map[normalizeName(name)] = normalizeValue(value);
};

Headers.prototype.forEach = function (callback, thisArg) {
  for (var name in this.map) {
    if (this.map.hasOwnProperty(name)) {
      callback.call(thisArg, this.map[name], name, this);
    }
  }
};

Headers.prototype.keys = function () {
  var items = [];
  this.forEach(function (value, name) {
    items.push(name);
  });
  return iteratorFor(items);
};

Headers.prototype.values = function () {
  var items = [];
  this.forEach(function (value) {
    items.push(value);
  });
  return iteratorFor(items);
};

Headers.prototype.entries = function () {
  var items = [];
  this.forEach(function (value, name) {
    items.push([name, value]);
  });
  return iteratorFor(items);
};

if (support.iterable) {
  Headers.prototype[Symbol.iterator] = Headers.prototype.entries;
}

function consumed(body) {
  if (body.bodyUsed) {
    return Promise.reject(new TypeError('Already read'));
  }

  body.bodyUsed = true;
}

function fileReaderReady(reader) {
  return new Promise(function (resolve, reject) {
    reader.onload = function () {
      resolve(reader.result);
    };

    reader.onerror = function () {
      reject(reader.error);
    };
  });
}

function readBlobAsArrayBuffer(blob) {
  var reader = new FileReader();
  var promise = fileReaderReady(reader);
  reader.readAsArrayBuffer(blob);
  return promise;
}

function readBlobAsText(blob) {
  var reader = new FileReader();
  var promise = fileReaderReady(reader);
  reader.readAsText(blob);
  return promise;
}

function readArrayBufferAsText(buf) {
  var view = new Uint8Array(buf);
  var chars = new Array(view.length);

  for (var i = 0; i < view.length; i++) {
    chars[i] = String.fromCharCode(view[i]);
  }

  return chars.join('');
}

function bufferClone(buf) {
  if (buf.slice) {
    return buf.slice(0);
  } else {
    var view = new Uint8Array(buf.byteLength);
    view.set(new Uint8Array(buf));
    return view.buffer;
  }
}

function Body() {
  this.bodyUsed = false;

  this._initBody = function (body) {
    this._bodyInit = body;

    if (!body) {
      this._bodyText = '';
    } else if (typeof body === 'string') {
      this._bodyText = body;
    } else if (support.blob && Blob.prototype.isPrototypeOf(body)) {
      this._bodyBlob = body;
    } else if (support.formData && FormData.prototype.isPrototypeOf(body)) {
      this._bodyFormData = body;
    } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
      this._bodyText = body.toString();
    } else if (support.arrayBuffer && support.blob && isDataView(body)) {
      this._bodyArrayBuffer = bufferClone(body.buffer); // IE 10-11 can't handle a DataView body.

      this._bodyInit = new Blob([this._bodyArrayBuffer]);
    } else if (support.arrayBuffer && (ArrayBuffer.prototype.isPrototypeOf(body) || isArrayBufferView(body))) {
      this._bodyArrayBuffer = bufferClone(body);
    } else {
      this._bodyText = body = Object.prototype.toString.call(body);
    }

    if (!this.headers.get('content-type')) {
      if (typeof body === 'string') {
        this.headers.set('content-type', 'text/plain;charset=UTF-8');
      } else if (this._bodyBlob && this._bodyBlob.type) {
        this.headers.set('content-type', this._bodyBlob.type);
      } else if (support.searchParams && URLSearchParams.prototype.isPrototypeOf(body)) {
        this.headers.set('content-type', 'application/x-www-form-urlencoded;charset=UTF-8');
      }
    }
  };

  if (support.blob) {
    this.blob = function () {
      var rejected = consumed(this);

      if (rejected) {
        return rejected;
      }

      if (this._bodyBlob) {
        return Promise.resolve(this._bodyBlob);
      } else if (this._bodyArrayBuffer) {
        return Promise.resolve(new Blob([this._bodyArrayBuffer]));
      } else if (this._bodyFormData) {
        throw new Error('could not read FormData body as blob');
      } else {
        return Promise.resolve(new Blob([this._bodyText]));
      }
    };

    this.arrayBuffer = function () {
      if (this._bodyArrayBuffer) {
        return consumed(this) || Promise.resolve(this._bodyArrayBuffer);
      } else {
        return this.blob().then(readBlobAsArrayBuffer);
      }
    };
  }

  this.text = function () {
    var rejected = consumed(this);

    if (rejected) {
      return rejected;
    }

    if (this._bodyBlob) {
      return readBlobAsText(this._bodyBlob);
    } else if (this._bodyArrayBuffer) {
      return Promise.resolve(readArrayBufferAsText(this._bodyArrayBuffer));
    } else if (this._bodyFormData) {
      throw new Error('could not read FormData body as text');
    } else {
      return Promise.resolve(this._bodyText);
    }
  };

  if (support.formData) {
    this.formData = function () {
      return this.text().then(decode);
    };
  }

  this.json = function () {
    return this.text().then(JSON.parse);
  };

  return this;
} // HTTP methods whose capitalization should be normalized


var methods = ['DELETE', 'GET', 'HEAD', 'OPTIONS', 'POST', 'PUT'];

function normalizeMethod(method) {
  var upcased = method.toUpperCase();
  return methods.indexOf(upcased) > -1 ? upcased : method;
}

function Request(input, options) {
  options = options || {};
  var body = options.body;

  if (input instanceof Request) {
    if (input.bodyUsed) {
      throw new TypeError('Already read');
    }

    this.url = input.url;
    this.credentials = input.credentials;

    if (!options.headers) {
      this.headers = new Headers(input.headers);
    }

    this.method = input.method;
    this.mode = input.mode;
    this.signal = input.signal;

    if (!body && input._bodyInit != null) {
      body = input._bodyInit;
      input.bodyUsed = true;
    }
  } else {
    this.url = String(input);
  }

  this.credentials = options.credentials || this.credentials || 'same-origin';

  if (options.headers || !this.headers) {
    this.headers = new Headers(options.headers);
  }

  this.method = normalizeMethod(options.method || this.method || 'GET');
  this.mode = options.mode || this.mode || null;
  this.signal = options.signal || this.signal;
  this.referrer = null;

  if ((this.method === 'GET' || this.method === 'HEAD') && body) {
    throw new TypeError('Body not allowed for GET or HEAD requests');
  }

  this._initBody(body);
}

Request.prototype.clone = function () {
  return new Request(this, {
    body: this._bodyInit
  });
};

function decode(body) {
  var form = new FormData();
  body.trim().split('&').forEach(function (bytes) {
    if (bytes) {
      var split = bytes.split('=');
      var name = split.shift().replace(/\+/g, ' ');
      var value = split.join('=').replace(/\+/g, ' ');
      form.append(decodeURIComponent(name), decodeURIComponent(value));
    }
  });
  return form;
}

function parseHeaders(rawHeaders) {
  var headers = new Headers(); // Replace instances of \r\n and \n followed by at least one space or horizontal tab with a space
  // https://tools.ietf.org/html/rfc7230#section-3.2

  var preProcessedHeaders = rawHeaders.replace(/\r?\n[\t ]+/g, ' ');
  preProcessedHeaders.split(/\r?\n/).forEach(function (line) {
    var parts = line.split(':');
    var key = parts.shift().trim();

    if (key) {
      var value = parts.join(':').trim();
      headers.append(key, value);
    }
  });
  return headers;
}

Body.call(Request.prototype);
function Response(bodyInit, options) {
  if (!options) {
    options = {};
  }

  this.type = 'default';
  this.status = options.status === undefined ? 200 : options.status;
  this.ok = this.status >= 200 && this.status < 300;
  this.statusText = 'statusText' in options ? options.statusText : 'OK';
  this.headers = new Headers(options.headers);
  this.url = options.url || '';

  this._initBody(bodyInit);
}
Body.call(Response.prototype);

Response.prototype.clone = function () {
  return new Response(this._bodyInit, {
    status: this.status,
    statusText: this.statusText,
    headers: new Headers(this.headers),
    url: this.url
  });
};

Response.error = function () {
  var response = new Response(null, {
    status: 0,
    statusText: ''
  });
  response.type = 'error';
  return response;
};

var redirectStatuses = [301, 302, 303, 307, 308];

Response.redirect = function (url, status) {
  if (redirectStatuses.indexOf(status) === -1) {
    throw new RangeError('Invalid status code');
  }

  return new Response(null, {
    status: status,
    headers: {
      location: url
    }
  });
};

var DOMException = self.DOMException;

try {
  new DOMException();
} catch (err) {
  DOMException = function DOMException(message, name) {
    this.message = message;
    this.name = name;
    var error = Error(message);
    this.stack = error.stack;
  };

  DOMException.prototype = Object.create(Error.prototype);
  DOMException.prototype.constructor = DOMException;
}

function fetch(input, init) {
  return new Promise(function (resolve, reject) {
    var request = new Request(input, init);

    if (request.signal && request.signal.aborted) {
      return reject(new DOMException('Aborted', 'AbortError'));
    }

    var xhr = new XMLHttpRequest();

    function abortXhr() {
      xhr.abort();
    }

    xhr.onload = function () {
      var options = {
        status: xhr.status,
        statusText: xhr.statusText,
        headers: parseHeaders(xhr.getAllResponseHeaders() || '')
      };
      options.url = 'responseURL' in xhr ? xhr.responseURL : options.headers.get('X-Request-URL');
      var body = 'response' in xhr ? xhr.response : xhr.responseText;
      resolve(new Response(body, options));
    };

    xhr.onerror = function () {
      reject(new TypeError('Network request failed'));
    };

    xhr.ontimeout = function () {
      reject(new TypeError('Network request failed'));
    };

    xhr.onabort = function () {
      reject(new DOMException('Aborted', 'AbortError'));
    };

    xhr.open(request.method, request.url, true);

    if (request.credentials === 'include') {
      xhr.withCredentials = true;
    } else if (request.credentials === 'omit') {
      xhr.withCredentials = false;
    }

    if ('responseType' in xhr && support.blob) {
      xhr.responseType = 'blob';
    }

    request.headers.forEach(function (value, name) {
      xhr.setRequestHeader(name, value);
    });

    if (request.signal) {
      request.signal.addEventListener('abort', abortXhr);

      xhr.onreadystatechange = function () {
        // DONE (success or failure)
        if (xhr.readyState === 4) {
          request.signal.removeEventListener('abort', abortXhr);
        }
      };
    }

    xhr.send(typeof request._bodyInit === 'undefined' ? null : request._bodyInit);
  });
}
fetch.polyfill = true;

if (!self.fetch) {
  self.fetch = fetch;
  self.Headers = Headers;
  self.Request = Request;
  self.Response = Response;
}

/***/ }),
/* 118 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/

/* eslint-disable no-unused-vars */

var getOwnPropertySymbols = Object.getOwnPropertySymbols;
var hasOwnProperty = Object.prototype.hasOwnProperty;
var propIsEnumerable = Object.prototype.propertyIsEnumerable;

function toObject(val) {
  if (val === null || val === undefined) {
    throw new TypeError('Object.assign cannot be called with null or undefined');
  }

  return Object(val);
}

function shouldUseNative() {
  try {
    if (!Object.assign) {
      return false;
    } // Detect buggy property enumeration order in older V8 versions.
    // https://bugs.chromium.org/p/v8/issues/detail?id=4118


    var test1 = new String('abc'); // eslint-disable-line no-new-wrappers

    test1[5] = 'de';

    if (Object.getOwnPropertyNames(test1)[0] === '5') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test2 = {};

    for (var i = 0; i < 10; i++) {
      test2['_' + String.fromCharCode(i)] = i;
    }

    var order2 = Object.getOwnPropertyNames(test2).map(function (n) {
      return test2[n];
    });

    if (order2.join('') !== '0123456789') {
      return false;
    } // https://bugs.chromium.org/p/v8/issues/detail?id=3056


    var test3 = {};
    'abcdefghijklmnopqrst'.split('').forEach(function (letter) {
      test3[letter] = letter;
    });

    if (Object.keys(Object.assign({}, test3)).join('') !== 'abcdefghijklmnopqrst') {
      return false;
    }

    return true;
  } catch (err) {
    // We don't expect any of the above to throw, but better to be safe.
    return false;
  }
}

module.exports = shouldUseNative() ? Object.assign : function (target, source) {
  var from;
  var to = toObject(target);
  var symbols;

  for (var s = 1; s < arguments.length; s++) {
    from = Object(arguments[s]);

    for (var key in from) {
      if (hasOwnProperty.call(from, key)) {
        to[key] = from[key];
      }
    }

    if (getOwnPropertySymbols) {
      symbols = getOwnPropertySymbols(from);

      for (var i = 0; i < symbols.length; i++) {
        if (propIsEnumerable.call(from, symbols[i])) {
          to[symbols[i]] = from[symbols[i]];
        }
      }
    }
  }

  return to;
};

/***/ }),
/* 119 */
/***/ (function(module, exports, __webpack_require__) {

var dP = __webpack_require__(6).f;

var FProto = Function.prototype;
var nameRE = /^\s*function ([^ (]*)/;
var NAME = 'name'; // 19.2.4.2 name

NAME in FProto || __webpack_require__(4) && dP(FProto, NAME, {
  configurable: true,
  get: function get() {
    try {
      return ('' + this).match(nameRE)[1];
    } catch (e) {
      return '';
    }
  }
});

/***/ }),
/* 120 */
/***/ (function(module, exports, __webpack_require__) {

var $export = __webpack_require__(2); // 19.1.2.3 / 15.2.3.7 Object.defineProperties(O, Properties)


$export($export.S + $export.F * !__webpack_require__(4), 'Object', {
  defineProperties: __webpack_require__(70)
});

/***/ }),
/* 121 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-getownpropertydescriptors
var $export = __webpack_require__(2);

var ownKeys = __webpack_require__(122);

var toIObject = __webpack_require__(12);

var gOPD = __webpack_require__(33);

var createProperty = __webpack_require__(123);

$export($export.S, 'Object', {
  getOwnPropertyDescriptors: function getOwnPropertyDescriptors(object) {
    var O = toIObject(object);
    var getDesc = gOPD.f;
    var keys = ownKeys(O);
    var result = {};
    var i = 0;
    var key, desc;

    while (keys.length > i) {
      desc = getDesc(O, key = keys[i++]);
      if (desc !== undefined) createProperty(result, key, desc);
    }

    return result;
  }
});

/***/ }),
/* 122 */
/***/ (function(module, exports, __webpack_require__) {

// all object keys, includes non-enumerable and symbols
var gOPN = __webpack_require__(46);

var gOPS = __webpack_require__(36);

var anObject = __webpack_require__(5);

var Reflect = __webpack_require__(1).Reflect;

module.exports = Reflect && Reflect.ownKeys || function ownKeys(it) {
  var keys = gOPN.f(anObject(it));
  var getSymbols = gOPS.f;
  return getSymbols ? keys.concat(getSymbols(it)) : keys;
};

/***/ }),
/* 123 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $defineProperty = __webpack_require__(6);

var createDesc = __webpack_require__(19);

module.exports = function (object, index, value) {
  if (index in object) $defineProperty.f(object, index, createDesc(0, value));else object[index] = value;
};

/***/ }),
/* 124 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(2);

var $forEach = __webpack_require__(93)(0);

var STRICT = __webpack_require__(56)([].forEach, true);

$export($export.P + $export.F * !STRICT, 'Array', {
  // 22.1.3.10 / 15.4.4.18 Array.prototype.forEach(callbackfn [, thisArg])
  forEach: function forEach(callbackfn
  /* , thisArg */
  ) {
    return $forEach(this, callbackfn, arguments[1]);
  }
});

/***/ }),
/* 125 */
/***/ (function(module, exports, __webpack_require__) {

// 9.4.2.3 ArraySpeciesCreate(originalArray, length)
var speciesConstructor = __webpack_require__(126);

module.exports = function (original, length) {
  return new (speciesConstructor(original))(length);
};

/***/ }),
/* 126 */
/***/ (function(module, exports, __webpack_require__) {

var isObject = __webpack_require__(3);

var isArray = __webpack_require__(61);

var SPECIES = __webpack_require__(0)('species');

module.exports = function (original) {
  var C;

  if (isArray(original)) {
    C = original.constructor; // cross-realm fallback

    if (typeof C == 'function' && (C === Array || isArray(C.prototype))) C = undefined;

    if (isObject(C)) {
      C = C[SPECIES];
      if (C === null) C = undefined;
    }
  }

  return C === undefined ? Array : C;
};

/***/ }),
/* 127 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(2);

var $filter = __webpack_require__(93)(2);

$export($export.P + $export.F * !__webpack_require__(56)([].filter, true), 'Array', {
  // 22.1.3.7 / 15.4.4.20 Array.prototype.filter(callbackfn [, thisArg])
  filter: function filter(callbackfn
  /* , thisArg */
  ) {
    return $filter(this, callbackfn, arguments[1]);
  }
});

/***/ }),
/* 128 */
/***/ (function(module, exports, __webpack_require__) {

// 19.1.2.14 Object.keys(O)
var toObject = __webpack_require__(31);

var $keys = __webpack_require__(16);

__webpack_require__(129)('keys', function () {
  return function keys(it) {
    return $keys(toObject(it));
  };
});

/***/ }),
/* 129 */
/***/ (function(module, exports, __webpack_require__) {

// most Object methods by ES6 should accept primitives
var $export = __webpack_require__(2);

var core = __webpack_require__(13);

var fails = __webpack_require__(9);

module.exports = function (KEY, exec) {
  var fn = (core.Object || {})[KEY] || Object[KEY];
  var exp = {};
  exp[KEY] = exec(fn);
  $export($export.S + $export.F * fails(function () {
    fn(1);
  }), 'Object', exp);
};

/***/ }),
/* 130 */
/***/ (function(module, exports, __webpack_require__) {

// https://github.com/tc39/proposal-object-values-entries
var $export = __webpack_require__(2);

var $entries = __webpack_require__(131)(true);

$export($export.S, 'Object', {
  entries: function entries(it) {
    return $entries(it);
  }
});

/***/ }),
/* 131 */
/***/ (function(module, exports, __webpack_require__) {

var DESCRIPTORS = __webpack_require__(4);

var getKeys = __webpack_require__(16);

var toIObject = __webpack_require__(12);

var isEnum = __webpack_require__(25).f;

module.exports = function (isEntries) {
  return function (it) {
    var O = toIObject(it);
    var keys = getKeys(O);
    var length = keys.length;
    var i = 0;
    var result = [];
    var key;

    while (length > i) {
      key = keys[i++];

      if (!DESCRIPTORS || isEnum.call(O, key)) {
        result.push(isEntries ? [key, O[key]] : O[key]);
      }
    }

    return result;
  };
};

/***/ }),
/* 132 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var anObject = __webpack_require__(5);

var toLength = __webpack_require__(35);

var advanceStringIndex = __webpack_require__(133);

var regExpExec = __webpack_require__(134); // @@match logic


__webpack_require__(135)('match', 1, function (defined, MATCH, $match, maybeCallNative) {
  return [// `String.prototype.match` method
  // https://tc39.github.io/ecma262/#sec-string.prototype.match
  function match(regexp) {
    var O = defined(this);
    var fn = regexp == undefined ? undefined : regexp[MATCH];
    return fn !== undefined ? fn.call(regexp, O) : new RegExp(regexp)[MATCH](String(O));
  }, // `RegExp.prototype[@@match]` method
  // https://tc39.github.io/ecma262/#sec-regexp.prototype-@@match
  function (regexp) {
    var res = maybeCallNative($match, regexp, this);
    if (res.done) return res.value;
    var rx = anObject(regexp);
    var S = String(this);
    if (!rx.global) return regExpExec(rx, S);
    var fullUnicode = rx.unicode;
    rx.lastIndex = 0;
    var A = [];
    var n = 0;
    var result;

    while ((result = regExpExec(rx, S)) !== null) {
      var matchStr = String(result[0]);
      A[n] = matchStr;
      if (matchStr === '') rx.lastIndex = advanceStringIndex(S, toLength(rx.lastIndex), fullUnicode);
      n++;
    }

    return n === 0 ? null : A;
  }];
});

/***/ }),
/* 133 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var at = __webpack_require__(71)(true); // `AdvanceStringIndex` abstract operation
// https://tc39.github.io/ecma262/#sec-advancestringindex


module.exports = function (S, index, unicode) {
  return index + (unicode ? at(S, index).length : 1);
};

/***/ }),
/* 134 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var classof = __webpack_require__(37);

var builtinExec = RegExp.prototype.exec; // `RegExpExec` abstract operation
// https://tc39.github.io/ecma262/#sec-regexpexec

module.exports = function (R, S) {
  var exec = R.exec;

  if (typeof exec === 'function') {
    var result = exec.call(R, S);

    if (_typeof(result) !== 'object') {
      throw new TypeError('RegExp exec method returned something other than an Object or null');
    }

    return result;
  }

  if (classof(R) !== 'RegExp') {
    throw new TypeError('RegExp#exec called on incompatible receiver');
  }

  return builtinExec.call(R, S);
};

/***/ }),
/* 135 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


__webpack_require__(136);

var redefine = __webpack_require__(8);

var hide = __webpack_require__(11);

var fails = __webpack_require__(9);

var defined = __webpack_require__(26);

var wks = __webpack_require__(0);

var regexpExec = __webpack_require__(100);

var SPECIES = wks('species');
var REPLACE_SUPPORTS_NAMED_GROUPS = !fails(function () {
  // #replace needs built-in support for named groups.
  // #match works fine because it just return the exec results, even if it has
  // a "grops" property.
  var re = /./;

  re.exec = function () {
    var result = [];
    result.groups = {
      a: '7'
    };
    return result;
  };

  return ''.replace(re, '$<a>') !== '7';
});

var SPLIT_WORKS_WITH_OVERWRITTEN_EXEC = function () {
  // Chrome 51 has a buggy "split" implementation when RegExp#exec !== nativeExec
  var re = /(?:)/;
  var originalExec = re.exec;

  re.exec = function () {
    return originalExec.apply(this, arguments);
  };

  var result = 'ab'.split(re);
  return result.length === 2 && result[0] === 'a' && result[1] === 'b';
}();

module.exports = function (KEY, length, exec) {
  var SYMBOL = wks(KEY);
  var DELEGATES_TO_SYMBOL = !fails(function () {
    // String methods call symbol-named RegEp methods
    var O = {};

    O[SYMBOL] = function () {
      return 7;
    };

    return ''[KEY](O) != 7;
  });
  var DELEGATES_TO_EXEC = DELEGATES_TO_SYMBOL ? !fails(function () {
    // Symbol-named RegExp methods call .exec
    var execCalled = false;
    var re = /a/;

    re.exec = function () {
      execCalled = true;
      return null;
    };

    if (KEY === 'split') {
      // RegExp[@@split] doesn't call the regex's exec method, but first creates
      // a new one. We need to return the patched regex when creating the new one.
      re.constructor = {};

      re.constructor[SPECIES] = function () {
        return re;
      };
    }

    re[SYMBOL]('');
    return !execCalled;
  }) : undefined;

  if (!DELEGATES_TO_SYMBOL || !DELEGATES_TO_EXEC || KEY === 'replace' && !REPLACE_SUPPORTS_NAMED_GROUPS || KEY === 'split' && !SPLIT_WORKS_WITH_OVERWRITTEN_EXEC) {
    var nativeRegExpMethod = /./[SYMBOL];
    var fns = exec(defined, SYMBOL, ''[KEY], function maybeCallNative(nativeMethod, regexp, str, arg2, forceStringMethod) {
      if (regexp.exec === regexpExec) {
        if (DELEGATES_TO_SYMBOL && !forceStringMethod) {
          // The native String method already delegates to @@method (this
          // polyfilled function), leasing to infinite recursion.
          // We avoid it by directly calling the native @@method method.
          return {
            done: true,
            value: nativeRegExpMethod.call(regexp, str, arg2)
          };
        }

        return {
          done: true,
          value: nativeMethod.call(str, regexp, arg2)
        };
      }

      return {
        done: false
      };
    });
    var strfn = fns[0];
    var rxfn = fns[1];
    redefine(String.prototype, KEY, strfn);
    hide(RegExp.prototype, SYMBOL, length == 2 // 21.2.5.8 RegExp.prototype[@@replace](string, replaceValue)
    // 21.2.5.11 RegExp.prototype[@@split](string, limit)
    ? function (string, arg) {
      return rxfn.call(string, this, arg);
    } // 21.2.5.6 RegExp.prototype[@@match](string)
    // 21.2.5.9 RegExp.prototype[@@search](string)
    : function (string) {
      return rxfn.call(string, this);
    });
  }
};

/***/ }),
/* 136 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var regexpExec = __webpack_require__(100);

__webpack_require__(2)({
  target: 'RegExp',
  proto: true,
  forced: regexpExec !== /./.exec
}, {
  exec: regexpExec
});

/***/ }),
/* 137 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var $export = __webpack_require__(2);

var $map = __webpack_require__(93)(1);

$export($export.P + $export.F * !__webpack_require__(56)([].map, true), 'Array', {
  // 22.1.3.15 / 15.4.4.19 Array.prototype.map(callbackfn [, thisArg])
  map: function map(callbackfn
  /* , thisArg */
  ) {
    return $map(this, callbackfn, arguments[1]);
  }
});

/***/ }),
/* 138 */,
/* 139 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.assign.js
var es6_object_assign = __webpack_require__(104);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.promise.js
var es6_promise = __webpack_require__(106);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.to-string.js
var es6_object_to_string = __webpack_require__(43);

// EXTERNAL MODULE: ./src/scss/main.scss
var main = __webpack_require__(112);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.function.name.js
var es6_function_name = __webpack_require__(119);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.define-property.js
var es6_object_define_property = __webpack_require__(51);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.is-array.js
var es6_array_is_array = __webpack_require__(99);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.regexp.to-string.js
var es6_regexp_to_string = __webpack_require__(62);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.date.to-string.js
var es6_date_to_string = __webpack_require__(63);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.symbol.async-iterator.js
var es7_symbol_async_iterator = __webpack_require__(52);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.symbol.js
var es6_symbol = __webpack_require__(45);

// EXTERNAL MODULE: ./node_modules/core-js/modules/web.dom.iterable.js
var web_dom_iterable = __webpack_require__(47);

// EXTERNAL MODULE: ./src/elm/App.elm
var App = __webpack_require__(102);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.define-properties.js
var es6_object_define_properties = __webpack_require__(120);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.object.get-own-property-descriptors.js
var es7_object_get_own_property_descriptors = __webpack_require__(121);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.for-each.js
var es6_array_for_each = __webpack_require__(124);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.filter.js
var es6_array_filter = __webpack_require__(127);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.array.iterator.js
var es6_array_iterator = __webpack_require__(38);

// EXTERNAL MODULE: ./node_modules/core-js/modules/es6.object.keys.js
var es6_object_keys = __webpack_require__(128);

// EXTERNAL MODULE: ./src/javascript/liascript/logger.js
var logger = __webpack_require__(7);

// CONCATENATED MODULE: ./src/javascript/liascript/database.js













function ownKeys(object, enumerableOnly) {
  var keys = Object.keys(object);

  if (Object.getOwnPropertySymbols) {
    var symbols = Object.getOwnPropertySymbols(object);
    if (enumerableOnly) symbols = symbols.filter(function (sym) {
      return Object.getOwnPropertyDescriptor(object, sym).enumerable;
    });
    keys.push.apply(keys, symbols);
  }

  return keys;
}

function _objectSpread(target) {
  for (var i = 1; i < arguments.length; i++) {
    var source = arguments[i] != null ? arguments[i] : {};

    if (i % 2) {
      ownKeys(source, true).forEach(function (key) {
        _defineProperty(target, key, source[key]);
      });
    } else if (Object.getOwnPropertyDescriptors) {
      Object.defineProperties(target, Object.getOwnPropertyDescriptors(source));
    } else {
      ownKeys(source).forEach(function (key) {
        Object.defineProperty(target, key, Object.getOwnPropertyDescriptor(source, key));
      });
    }
  }

  return target;
}

function _defineProperty(obj, key, value) {
  if (key in obj) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
  } else {
    obj[key] = value;
  }

  return obj;
}

function _classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function _defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function _createClass(Constructor, protoProps, staticProps) {
  if (protoProps) _defineProperties(Constructor.prototype, protoProps);
  if (staticProps) _defineProperties(Constructor, staticProps);
  return Constructor;
}



var database_LiaDB =
/*#__PURE__*/
function () {
  function LiaDB(uidDB, versionDB) {
    var send = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var channel = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var init = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : null;

    _classCallCheck(this, LiaDB);

    this.channel = channel;
    this.send = send;
    this.versionDB = parseInt(versionDB);
    if (!this.versionDB || channel) return;
    this.indexedDB = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB || window.shimIndexedDB;

    if (!this.indexedDB) {
      logger["a" /* lia */].warn('your browser does not support indexedDB');
      return;
    }

    this.uidDB = uidDB;
    this.versionDB = versionDB;
    var request = this.indexedDB.open(this.uidDB, this.versionDB);

    request.onupgradeneeded = function (event) {
      logger["a" /* lia */].log('creating tables'); // The database did not previously exist, so create object stores and indexes.

      var settings = {
        keyPath: 'id',
        autoIncrement: false
      };
      var db = request.result;
      db.createObjectStore('quiz', settings);
      db.createObjectStore('code', settings);
      db.createObjectStore('survey', settings);

      if (init) {
        send(init);
      }
    };

    request.onsuccess = function (e) {
      if (init) {
        var db = request.result;
        var tx = db.transaction(init.topic, 'readonly');
        var store = tx.objectStore(init.topic);
        var item = store.get(init.section);

        item.onsuccess = function () {
          logger["a" /* lia */].log('table', init.table, item.result);

          if (item.result) {
            init.message.message = item.result.data;
          }

          send(init);
        };

        item.onerror = function () {
          send(init);
        };
      }
    };
  }

  _createClass(LiaDB, [{
    key: "store",
    value: function store(event) {
      if (!this.versionDB) return;

      if (this.channel) {
        this.channel.push('lia', {
          store: event.topic,
          slide: event.section,
          data: event.message
        }).receive('ok', function (e) {
          logger["a" /* lia */].log('ok', e);
        }).receive('error', function (e) {
          logger["a" /* lia */].log('error', e);
        });
        return;
      }

      logger["a" /* lia */].log("liaDB: event(store), table(".concat(event.topic, "), id(").concat(event.section, "), data(").concat(event.message, ")"));
      if (!this.indexedDB) return;
      var request = this.indexedDB.open(this.uidDB, this.versionDB);

      request.onsuccess = function (e) {
        var db = request.result;
        var tx = db.transaction(event.topic, 'readwrite');
        var store = tx.objectStore(event.topic);
        var item = {
          id: event.section,
          data: event.message,
          created: new Date().getTime()
        };
        store.put(item);

        tx.oncomplete = function () {
          // All requests have succeeded and the transaction has committed.
          logger["a" /* lia */].log('stored data ...');
        };
      };
    }
  }, {
    key: "load",
    value: function load(event) {
      if (!this.versionDB) return;
      var send = this.send;

      if (this.channel) {
        this.channel.push('lia', {
          load: event.topic,
          slide: event.section
        }).receive('ok', function (e) {
          event.message = {
            topic: 'restore',
            section: -1,
            message: e.date
          };
          send(event);
        }).receive('error', function (e) {
          logger["a" /* lia */].error(e);
        });
        return;
      }

      if (!this.indexedDB) return;
      logger["a" /* lia */].log('loading => ', event.topic, event.section);
      var request = this.indexedDB.open(this.uidDB, this.versionDB);

      request.onsuccess = function (e) {
        try {
          var db = request.result;
          var tx = db.transaction(event.topic, 'readonly');
          var store = tx.objectStore(event.topic);
          var item = store.get(event.section);

          item.onsuccess = function () {
            logger["a" /* lia */].log('restore table', event.topic, item.result);

            if (item.result) {
              event.message = {
                topic: 'restore',
                section: -1,
                message: item.result.data
              };
              send(event);
            }
          };

          item.onerror = function () {
            logger["a" /* lia */].warn('data not found ...');

            if (event.topic === 'code') {
              event.message = {
                topic: 'restore',
                section: -1,
                message: null
              };
              send(event);
            }
          };
        } catch (e) {
          logger["a" /* lia */].error(e);
        }
      };
    }
  }, {
    key: "del",
    value: function del() {
      if (!this.versionDB) return;
      if (this.channel) return;
      if (!this.indexedDB) return;
      var request = this.indexedDB.deleteDatabase(this.uidDB);

      request.onerror = function (e) {
        logger["a" /* lia */].error('error deleting database:', this.uidDB);
      };

      request.onsuccess = function (e) {
        logger["a" /* lia */].log('database deleted: ', this.uidDB);
        logger["a" /* lia */].log(e.result); // should be undefined
      };
    }
  }, {
    key: "update",
    value: function update(event, slide) {
      if (!this.versionDB) return;

      if (this.channel) {
        this.channel.push('lia', {
          update: event,
          slide: slide
        });
        return;
      }

      if (!this.indexedDB) return;
      var request = this.indexedDB.open(this.uidDB, this.versionDB);

      request.onsuccess = function (e) {
        try {
          var db = request.result;
          var tx = db.transaction('code', 'readwrite');
          var store = tx.objectStore('code');
          var item = store.get(slide);

          item.onsuccess = function () {
            var vector = item.result;

            if (vector) {
              var project = vector.data[event.section];

              switch (event.topic) {
                case 'flip':
                  {
                    if (event.message.topic === 'view') {
                      project.file[event.message.section].visible = event.message.message;
                    } else if (event.message.topic === 'fullscreen') {
                      project.file[event.message.section].fullscreen = event.message.message;
                    }

                    break;
                  }

                case 'load':
                  {
                    var e_ = event.message;
                    project.version_active = e_.version_active;
                    project.log = e_.log;
                    project.file = e_.file;
                    break;
                  }

                case 'version_update':
                  {
                    var _e_ = event.message;
                    project.version_active = _e_.version_active;
                    project.log = _e_.log;
                    project.version[_e_.version_active] = _e_.version;
                    break;
                  }

                case 'version_append':
                  {
                    var _e_2 = event.message;
                    project.version_active = _e_2.version_active;
                    project.log = _e_2.log;
                    project.file = _e_2.file;
                    project.version.push(_e_2.version);
                    project.repository = _objectSpread({}, project.repository, {}, _e_2.repository);
                    break;
                  }

                default:
                  {
                    logger["a" /* lia */].warn('unknown update cmd: ', event);
                  }
              }

              vector.data[event[1]] = project;
              store.put(vector);
            }
          };

          item.onerror = function () {
            logger["a" /* lia */].error('data not found ...');
          };
        } catch (e) {
          logger["a" /* lia */].error(e);
        }
      };
    }
  }]);

  return LiaDB;
}();

;

// EXTERNAL MODULE: ./node_modules/core-js/modules/es7.object.entries.js
var es7_object_entries = __webpack_require__(130);

// CONCATENATED MODULE: ./src/javascript/liascript/storage.js













function _typeof2(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof2 = function _typeof2(obj) { return typeof obj; }; } else { _typeof2 = function _typeof2(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof2(obj); }

function _slicedToArray(arr, i) {
  return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest();
}

function _nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function _iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function _arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function _typeof(obj) {
  if (typeof Symbol === "function" && _typeof2(Symbol.iterator) === "symbol") {
    _typeof = function _typeof(obj) {
      return _typeof2(obj);
    };
  } else {
    _typeof = function _typeof(obj) {
      return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : _typeof2(obj);
    };
  }

  return _typeof(obj);
}

function storage_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function storage_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function storage_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) storage_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) storage_defineProperties(Constructor, staticProps);
  return Constructor;
}



var storage_LiaStorage =
/*#__PURE__*/
function () {
  function LiaStorage() {
    var channel = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : null;

    storage_classCallCheck(this, LiaStorage);

    if (!channel) return;
    this.channel = channel;

    this._init();
  }

  storage_createClass(LiaStorage, [{
    key: "_init",
    value: function _init() {
      if (!this.channel) return;
      var store = this._setLocal;
      this.channel.push('lia', {
        get_local_storage: []
      }).receive('ok', function (e) {
        store(e);
      }).receive('error', function (e) {
        logger["a" /* lia */].error('storing => ', e);
      });
    }
  }, {
    key: "getItems",
    value: function getItems() {
      var key = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : [];
      if (typeof key === 'string') key = [key];
      var rslt = {};

      for (var i = 0; i < key.length; i++) {
        var value = localStorage.getItem(key[i]);
        rslt[key[i]] = value ? JSON.parse(value) : value;
      }

      return rslt;
    }
  }, {
    key: "setItems",
    value: function setItems(dict) {
      if (this.channel) {
        this.channel.push('lia', {
          set_local_storage: dict
        });
      }

      this._setLocal(dict);
    }
  }, {
    key: "_setLocal",
    value: function _setLocal(dict) {
      if (_typeof(dict) === 'object') {
        for (var _i = 0, _Object$entries = Object.entries(dict); _i < _Object$entries.length; _i++) {
          var _Object$entries$_i = _slicedToArray(_Object$entries[_i], 2),
              key = _Object$entries$_i[0],
              value = _Object$entries$_i[1];

          localStorage.setItem(key, JSON.stringify(value));
        }
      }
    }
  }]);

  return LiaStorage;
}();

;

// EXTERNAL MODULE: ./src/javascript/liascript/events.js
var events = __webpack_require__(65);

// CONCATENATED MODULE: ./src/javascript/liascript/settings.js


var SETTINGS = 'settings';

function initSettings(send, data) {
  var local = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;

  if (data == null) {
    data = {
      table_of_contents: true,
      mode: 'Slides',
      theme: 'default',
      light: true,
      editor: 'dreamweaver',
      font_size: 100,
      sound: true,
      land: 'en'
    };
  }

  if (local) {
    localStorage.setItem(SETTINGS, JSON.stringify(data));
  }

  send({
    topic: SETTINGS,
    section: -1,
    message: {
      topic: 'init',
      section: -1,
      message: data
    }
  });
}

;

// CONCATENATED MODULE: ./src/javascript/liascript/persistent.js






function swapElements(obj1, obj2) {
  // create marker element and insert it where obj1 is
  var temp = document.createElement('div');
  obj1.parentNode.insertBefore(temp, obj1); // move obj1 to right before obj2

  obj2.parentNode.insertBefore(obj1, obj2); // move obj2 to right before where obj1 used to be

  temp.parentNode.insertBefore(obj2, temp); // remove temporary marker node

  temp.parentNode.removeChild(temp);
}

var persistent = {
  bag: document.createElement('div'),
  section: -1,
  store: function store(section) {
    if (section === this.section) return;
    this.section = section;
    var elements = document.getElementsByClassName('persistent');
    var _iteratorNormalCompletion = true;
    var _didIteratorError = false;
    var _iteratorError = undefined;

    try {
      for (var _iterator = elements[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
        var e = _step.value;
        var temp = document.createElement('span');
        this.bag.appendChild(temp);
        swapElements(temp, e);
      }
    } catch (err) {
      _didIteratorError = true;
      _iteratorError = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion && _iterator["return"] != null) {
          _iterator["return"]();
        }
      } finally {
        if (_didIteratorError) {
          throw _iteratorError;
        }
      }
    }
  },
  load: function load(section) {
    var elements = document.getElementsByClassName('persistent');
    var _iteratorNormalCompletion2 = true;
    var _didIteratorError2 = false;
    var _iteratorError2 = undefined;

    try {
      for (var _iterator2 = elements[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
        var e = _step2.value;
        var _iteratorNormalCompletion3 = true;
        var _didIteratorError3 = false;
        var _iteratorError3 = undefined;

        try {
          for (var _iterator3 = this.bag.childNodes[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
            var b = _step3.value;

            if (b.id === e.id) {
              e.replaceWith(b);
              break;
            }
          }
        } catch (err) {
          _didIteratorError3 = true;
          _iteratorError3 = err;
        } finally {
          try {
            if (!_iteratorNormalCompletion3 && _iterator3["return"] != null) {
              _iterator3["return"]();
            }
          } finally {
            if (_didIteratorError3) {
              throw _iteratorError3;
            }
          }
        }
      }
    } catch (err) {
      _didIteratorError2 = true;
      _iteratorError2 = err;
    } finally {
      try {
        if (!_iteratorNormalCompletion2 && _iterator2["return"] != null) {
          _iterator2["return"]();
        }
      } finally {
        if (_didIteratorError2) {
          throw _iteratorError2;
        }
      }
    }
  }
};

// CONCATENATED MODULE: ./src/javascript/liascript/index.js












function liascript_slicedToArray(arr, i) {
  return liascript_arrayWithHoles(arr) || liascript_iterableToArrayLimit(arr, i) || liascript_nonIterableRest();
}

function liascript_nonIterableRest() {
  throw new TypeError("Invalid attempt to destructure non-iterable instance");
}

function liascript_iterableToArrayLimit(arr, i) {
  if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) {
    return;
  }

  var _arr = [];
  var _n = true;
  var _d = false;
  var _e = undefined;

  try {
    for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) {
      _arr.push(_s.value);

      if (i && _arr.length === i) break;
    }
  } catch (err) {
    _d = true;
    _e = err;
  } finally {
    try {
      if (!_n && _i["return"] != null) _i["return"]();
    } finally {
      if (_d) throw _e;
    }
  }

  return _arr;
}

function liascript_arrayWithHoles(arr) {
  if (Array.isArray(arr)) return arr;
}

function liascript_classCallCheck(instance, Constructor) {
  if (!(instance instanceof Constructor)) {
    throw new TypeError("Cannot call a class as a function");
  }
}

function liascript_defineProperties(target, props) {
  for (var i = 0; i < props.length; i++) {
    var descriptor = props[i];
    descriptor.enumerable = descriptor.enumerable || false;
    descriptor.configurable = true;
    if ("value" in descriptor) descriptor.writable = true;
    Object.defineProperty(target, descriptor.key, descriptor);
  }
}

function liascript_createClass(Constructor, protoProps, staticProps) {
  if (protoProps) liascript_defineProperties(Constructor.prototype, protoProps);
  if (staticProps) liascript_defineProperties(Constructor, staticProps);
  return Constructor;
}









function scrollIntoView(id, delay) {
  setTimeout(function (e) {
    try {
      document.getElementById(id).scrollIntoView({
        behavior: 'smooth'
      });
    } catch (e) {}
  }, delay);
}

;

function handleEffects(event, elmSend) {
  switch (event.topic) {
    case 'scrollTo':
      scrollIntoView(event.message, 350);
      break;

    case 'persistent':
      setTimeout(function (e) {
        persistent.load(event.section);
      }, 10);
      break;

    case 'execute':
      Object(events["c" /* lia_execute_event */])(event.message);
      break;

    case 'speak':
      {
        var msg = {
          topic: 'settings',
          section: -1,
          message: {
            topic: 'speak',
            section: -1,
            message: 'stop'
          }
        };

        try {
          if (event.message === 'cancel') {
            responsiveVoice.cancel();
            msg.message.message = 'stop';
            elmSend(msg);
          } else if (event.message === 'repeat') {
            event.message = [ttsBackup[0], ttsBackup[1], 'true'];
            handleEffects(event, elmSend);
          } else {
            ttsBackup = event.message;

            if (event.message[2] === 'true') {
              responsiveVoice.speak(event.message[1], event.message[0], {
                onstart: function onstart(e) {
                  msg.message.message = 'start';
                  elmSend(msg);
                },
                onend: function onend(e) {
                  msg.message.message = 'stop';
                  elmSend(msg);
                },
                onerror: function onerror(e) {
                  msg.message.message = e.toString();
                  elmSend(msg);
                }
              });
            }
          }
        } catch (e) {
          msg.message.message = e.toString();
          elmSend(msg);
        }

        break;
      }

    default:
      logger["a" /* lia */].warn('effect missed', event);
  }
}

;

function meta(name, content) {
  if (content !== '') {
    var _meta = document.createElement('meta');

    _meta.name = name;
    _meta.content = content;
    document.getElementsByTagName('head')[0].appendChild(_meta);
  }
} // -----------------------------------------------------------------------------


var eventHandler = undefined;
var liaStorage = undefined;
var ttsBackup = undefined;

var liascript_LiaScript =
/*#__PURE__*/
function () {
  function LiaScript(elem) {
    var debug = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var course = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : null;
    var script = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : null;
    var url = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : '';
    var slide = arguments.length > 5 && arguments[5] !== undefined ? arguments[5] : 0;
    var spa = arguments.length > 6 && arguments[6] !== undefined ? arguments[6] : true;
    var channel = arguments.length > 7 && arguments[7] !== undefined ? arguments[7] : null;

    liascript_classCallCheck(this, LiaScript);

    if (debug) window.debug__ = true;
    eventHandler = new events["a" /* LiaEvents */]();
    var settings = localStorage.getItem(SETTINGS);
    this.app = App["Elm"].App.init({
      node: elem,
      flags: {
        course: course,
        script: script,
        debug: debug,
        spa: spa,
        settings: settings ? JSON.parse(settings) : settings
      }
    });
    var sendTo = this.app.ports.event2elm.send;

    var sender = function sender(msg) {
      logger["a" /* lia */].log('event2elm => ', msg);
      sendTo(msg);
    };

    this.initChannel(channel, sender);
    this.initEventSystem(this.app.ports.event2js.subscribe, sender);
    liaStorage = new storage_LiaStorage(channel);
  }

  liascript_createClass(LiaScript, [{
    key: "initChannel",
    value: function initChannel(channel, send) {
      if (!channel) return;
      this.channel = channel;
      channel.on('service', function (e) {
        eventHandler.dispatch(e.event_id, e.message);
      });
      channel.join().receive('ok', function (e) {
        logger["a" /* lia */].log('joined to channel', e);
      }) // initSettings(send, e); })
      .receive('error', function (e) {
        logger["a" /* lia */].error('channel join => ', e);
      });
    }
  }, {
    key: "reset",
    value: function reset() {
      this.app.ports.event2elm.send({
        topic: 'reset',
        section: -1,
        message: null
      });
    }
  }, {
    key: "initEventSystem",
    value: function initEventSystem(jsSubscribe, elmSend) {
      logger["a" /* lia */].log('initEventSystem');
      var self = this;
      jsSubscribe(function (event) {
        logger["a" /* lia */].log('elm2js => ', event);

        switch (event.topic) {
          case 'slide':
            {
              // if(self.channel)
              //    self.channel.push('lia', { slide: event.section + 1 });
              var sec = document.getElementsByTagName('section')[0];

              if (sec) {
                sec.scrollTo(0, 0);
              }

              break;
            }

          case 'load':
            {
              self.db.load({
                topic: event.message,
                section: event.section,
                message: null
              });
              break;
            }

          case 'code':
            {
              switch (event.message.topic) {
                case 'eval':
                  Object(events["b" /* lia_eval_event */])(elmSend, self.channel, eventHandler, event);
                  break;

                case 'store':
                  event.message = event.message.message;
                  self.db.store(event);
                  break;

                case 'input':
                  eventHandler.dispatch_input(event);
                  break;

                case 'stop':
                  eventHandler.dispatch_input(event);
                  break;

                default:
                  {
                    self.db.update(event.message, event.section);
                  }
              }

              break;
            }

          case 'quiz':
            {
              if (event.message.topic === 'store') {
                event.message = event.message.message;
                self.db.store(event);
              } else if (event.message.topic === 'eval') {
                Object(events["b" /* lia_eval_event */])(elmSend, self.channel, eventHandler, event);
              }

              break;
            }

          case 'survey':
            {
              if (event.message.topic === 'store') {
                event.message = event.message.message;
                self.db.store(event);
              } else if (event.message.topic === 'eval') {
                Object(events["b" /* lia_eval_event */])(elmSend, self.channel, eventHandler, event);
              }

              break;
            }

          case 'effect':
            handleEffects(event.message, elmSend);
            break;

          case SETTINGS:
            {
              // if (self.channel) {
              //  self.channel.push('lia', {settings: event.message});
              // } else {
              localStorage.setItem(SETTINGS, JSON.stringify(event.message)); // }

              break;
            }

          case 'resource':
            {
              var elem = event.message[0];
              var url = event.message[1];
              logger["a" /* lia */].log('loading resource => ', elem, ':', url);

              try {
                var tag = document.createElement(elem);

                if (elem === 'link') {
                  tag.href = url;
                  tag.rel = 'stylesheet';
                } else {
                  tag.src = url;
                  tag.async = false;
                }

                document.head.appendChild(tag);
              } catch (e) {
                logger["a" /* lia */].error('loading resource => ', e.msg);
              }

              break;
            }

          case 'persistent':
            {
              if (event.message === 'store') {
                persistent.store(event.section);
                elmSend({
                  topic: 'load',
                  section: -1,
                  message: null
                });
              }

              break;
            }

          case 'init':
            {
              var _event$message = liascript_slicedToArray(event.message, 7),
                  title = _event$message[0],
                  readme = _event$message[1],
                  version = _event$message[2],
                  onload = _event$message[3],
                  author = _event$message[4],
                  comment = _event$message[5],
                  logo = _event$message[6];

              self.db = new database_LiaDB(readme, version, elmSend, null, // self.channel,
              {
                topic: 'code',
                section: event.section,
                message: {
                  topic: 'restore',
                  section: -1,
                  message: null
                }
              });

              if (onload !== '') {
                Object(events["c" /* lia_execute_event */])({
                  code: onload,
                  delay: 350
                });
              }

              meta('author', author);
              meta('og:description', comment);
              meta('og:title', title);
              meta('og:type', 'website');
              meta('og:url', '');
              meta('og:image', logo);
              break;
            }

          case 'reset':
            {
              self.db.del();

              if (!self.channel) {
                initSettings(elmSend, null, true);
              }

              window.location.reload();
              break;
            }

          default:
            logger["a" /* lia */].error('Command not found => ', event);
        }
      });
    }
  }]);

  return LiaScript;
}();

;

// CONCATENATED MODULE: ./src/index.js





if (typeof Promise === 'undefined') {
  // Rejection tracking prevents a common issue where React gets into an
  // inconsistent state due to an error, but it gets swallowed by a Promise,
  // and the user has no idea what causes React's erratic future behavior.
  __webpack_require__(113).enable();

  window.Promise = __webpack_require__(116);
} // fetch() polyfill for making API calls.


__webpack_require__(117); // Object.assign() is commonly used with React.
// It will use the native implementation if it's present and isn't buggy.


Object.assign = __webpack_require__(118);


if (document.getElementById('lia')) {
  if (false) { var app; } else {
    var app = new liascript_LiaScript(document.getElementById('lia'), false);
  }
}

/***/ })
/******/ ]);