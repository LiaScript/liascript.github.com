!function(){function t(t,e,n,r){Object.defineProperty(t,e,{get:n,set:r,enumerable:!0,configurable:!0})}var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire55a5;e.register("izF7z",(function(n,r){t(n.exports,"Sync",(function(){return v}));var i=e("f1evb"),o=e("hnmIs"),u=e("9Klpk"),s=e("3bWnf"),l=e("eT7f3"),a=e("9WzNc"),c=e("div3d"),d=e("kb0qF"),p=e("5ENmm"),f=e("bWNdT"),h=e("32Euv"),y=e("auvHb"),g=e("i4ll7");Object.defineProperty(Array.prototype,"flat",{value:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1;return this.reduce((function(e,n){return e.concat(Array.isArray(n)&&t>1?n.flat(t-1):n)}),[])}});var v=function(t){"use strict";(0,d.default)(n,t);var e=(0,f.default)(n);function n(){var t;return(0,u.default)(this,n),t=e.apply(this,arguments),(0,l.default)((0,i.default)(t),"store",""),(0,l.default)((0,i.default)(t),"gunServer",[]),(0,l.default)((0,i.default)(t),"persistent",!1),t}return(0,s.default)(n,[{key:"destroy",value:function(){this.gunServer=[],delete this.gun,(0,a.default)((0,c.default)(n.prototype),"destroy",this).call(this)}},{key:"uniqueID",value:function(){var t=(0,a.default)((0,c.default)(n.prototype),"uniqueID",this).call(this);return t?btoa(t+(this.persistent?"p":"")):null}},{key:"connect",value:function(t){var e=this,r=this;return(0,o.default)((function(){var i,o;return(0,h.__generator)(this,(function(u){return(0,a.default)((0,c.default)(n.prototype),"connect",e).call(r,t),r.gunServer=(null===(i=t.config)||void 0===i?void 0:i.urls)||[],r.persistent=(null===(o=t.config)||void 0===o?void 0:o.persistent)||!1,window.Gun?r.init(!0):r.load(["https://cdn.jsdelivr.net/npm/gun/gun.js",g.Crypto.url],r),[2]}))}))()}},{key:"init",value:function(t,e){if(0==this.gunServer.length)return this.sendDisconnectError("You have to provide at least one relay server.");var n=this.uniqueID();if(t&&window.Gun&&n){this.gun=window.Gun({peers:this.gunServer}),this.store=n,g.Crypto.init(this.password);var r=this;this.persistent&&this.gun.get(this.store).once((function(t){if(t&&t.msg)try{var e=(0,p.default)(g.Crypto.decode(t.msg),2),n=(e[0],e[1]);setTimeout((function(){var t;null===(t=r.gun)||void 0===t||t.get(r.store).put({msg:g.Crypto.encode(["",n])})}),1e3)}catch(t){console.warn("GunDB:",t.message)}})),this.gun.get(this.store).on((function(t,e){try{var n=(0,p.default)(g.Crypto.decode(t.msg),2),i=n[0],o=n[1];i!=r.token&&null!=o&&r.applyUpdate(y.base64_to_unit8(o))}catch(t){console.warn("GunDB",t.message)}})),this.gun.get(this.store+"pubsub").on((function(t,e){try{var n=(0,p.default)(g.Crypto.decode(t.msg),2),i=n[0],o=n[1];i!=r.token&&null!=o&&r.pubsubReceive(y.base64_to_unit8(o))}catch(t){console.warn("GunDB",t.message)}})),this.persistent||(this.broadcast(!0,null),this.broadcast(!1,null)),this.sendConnect()}else{var i="GunDB unknown error";e?i="Could not load resource: "+e:window.Gun||(i="Could not load GunDB interface"),this.sendDisconnectError(i)}}},{key:"broadcast",value:function(t,e){if(this.gun){var n=null==e?null:y.uint8_to_base64(e);this.gun.get(this.store+(t?"":"pubsub")).put({msg:g.Crypto.encode(["",n])})}}}]),n}(y.Sync)})),e.register("i4ll7",(function(e,n){t(e.exports,"Crypto",(function(){return r}));var r={url:"https://cdn.jsdelivr.net/npm/simple-crypto-js@2.5.0/dist/SimpleCrypto.min.js",crypt:null,check:function(){return!!window.SimpleCrypto},init:function(t){try{"string"==typeof t&&t.length>0?this.crypt=new SimpleCrypto(t):this.crypt=null}catch(t){console.warn("Crypto: ",t),this.crypt=null}},encode:function(t){return this.crypt?this.crypt.encrypt(btoa(encodeURIComponent(JSON.stringify(t)))):JSON.stringify(t)},decode:function(t){return this.crypt?JSON.parse(decodeURIComponent(atob(this.crypt.decrypt(t)))):JSON.parse(t)}}}))}();