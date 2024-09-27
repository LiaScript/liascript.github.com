!function(){function e(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0,configurable:!0})}var t=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire55a5;t.register("2V9sH",(function(n,r){e(n.exports,"Sync",(function(){return v}));var o=t("f1evb"),i=t("hnmIs"),s=t("9Klpk"),c=t("3bWnf"),u=t("eT7f3"),a=t("9WzNc"),l=t("div3d"),d=t("kb0qF"),f=t("5ENmm"),p=t("bWNdT"),h=t("32Euv"),y=t("auvHb"),m=t("i4ll7"),v=function(e){"use strict";(0,d.default)(r,e);var n=(0,p.default)(r);function r(){var e;return(0,s.default)(this,r),e=n.apply(this,arguments),(0,u.default)((0,o.default)(e),"trackersAnnounceURLs",[]),(0,u.default)((0,o.default)(e),"peers",{}),(0,u.default)((0,o.default)(e),"tokens",{}),(0,u.default)((0,o.default)(e),"is_connected",!1),e}return(0,c.default)(r,[{key:"destroy",value:function(){var e;this.trackersAnnounceURLs=[],null===(e=this.p2pt)||void 0===e||e.destroy(),(0,a.default)((0,l.default)(r.prototype),"destroy",this).call(this)}},{key:"connect",value:function(e){var n=this,o=this;return(0,i.default)((function(){var i;return(0,h.__generator)(this,(function(s){switch(s.label){case 0:return(0,a.default)((0,l.default)(r.prototype),"connect",n).call(o,e),o.trackersAnnounceURLs=e.config||[],window.P2PT?(o.init(!0),[3,3]):[3,1];case 1:return i="P2PT",[4,t("4x2an")];case 2:window[i]=s.sent(),o.load([m.Crypto.url],o),s.label=3;case 3:return[2]}}))}))()}},{key:"init",value:function(e,t){if(0==this.trackersAnnounceURLs.length)return this.sendDisconnectError("You have to provide at least one WebTorrent tracker.");var n=this.uniqueID();if(e&&window.P2PT&&n){this.p2pt=new window.P2PT(this.trackersAnnounceURLs,n),m.Crypto.init(this.password);var r=this;this.p2pt.on("trackerconnect",(function(e,t){console.log("Connected to tracker : "+e.announceUrl),console.log("Tracker stats : "+JSON.stringify(t)),r.is_connected||(r.is_connected=!0,r.sendConnect())})),this.p2pt.on("trackerwarning",(function(e,t){console.log("Connected to tracker : ",e),console.log("Tracker stats : "+JSON.stringify(t))})),this.p2pt.on("peerconnect",(function(e){console.warn("Peer connected : "+e.id,e),r.peers[e.id]=e})),this.p2pt.on("peerclose",(function(e){console.warn("Peer disconnected : "+e);var t=r.tokens[e.id];t&&(r.db.removePeer(t),delete r.tokens[e.id]),delete r.peers[e.id]})),this.p2pt.on("msg",(function(e,t){if(t)try{var n=(0,f.default)(m.Crypto.decode(t),4),o=n[0],i=n[1],s=n[2],c=n[3];o!=r.token&&(i?c==r.db.timestamp?r.applyUpdate(y.base64_to_unit8(s)):c>r.db.timestamp?r.broadcast(!0,r.db.encode()):(r.db.timestamp=c,r.applyUpdate(y.base64_to_unit8(s),!0)):r.pubsubReceive(y.base64_to_unit8(s)),r.tokens[e.id]||(r.tokens[e.id]=o))}catch(e){console.warn("P2PT",e.message)}})),this.p2pt.start()}else{var o="P2PT unknown error";t?o="Could not load resource: "+t:window.P2PT||(o="Could not load P2PT interface"),this.sendDisconnectError(o)}}},{key:"broadcast",value:function(e,t){if(this.p2pt){var n=null==t?null:y.uint8_to_base64(t),r=m.Crypto.encode([this.token,e,n,this.db.timestamp]);for(var o in this.peers)this.p2pt.send(this.peers[o],r)}}}]),r}(y.Sync)})),t.register("i4ll7",(function(t,n){e(t.exports,"Crypto",(function(){return r}));var r={url:"https://cdn.jsdelivr.net/npm/simple-crypto-js@2.5.0/dist/SimpleCrypto.min.js",crypt:null,check:function(){return!!window.SimpleCrypto},init:function(e){try{"string"==typeof e&&e.length>0?this.crypt=new SimpleCrypto(e):this.crypt=null}catch(e){console.warn("Crypto: ",e),this.crypt=null}},encode:function(e){return this.crypt?this.crypt.encrypt(btoa(encodeURIComponent(JSON.stringify(e)))):JSON.stringify(e)},decode:function(e){return this.crypt?JSON.parse(decodeURIComponent(atob(this.crypt.decrypt(e)))):JSON.parse(e)}}})),t.register("4x2an",(function(e,n){e.exports=t("3OMJO")(t("5B9gS").getBundleURL("5e9O4")+t("b9xd4").resolve("2xrMD")).then((function(){return t("9U0AO")}))})),t.register("84cK9",(function(e,t){var n,r,o=e.exports={};function i(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===i||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:i}catch(e){n=i}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var u,a=[],l=!1,d=-1;function f(){l&&u&&(l=!1,u.length?a=u.concat(a):d=-1,a.length&&p())}function p(){if(!l){var e=c(f);l=!0;for(var t=a.length;t;){for(u=a,a=[];++d<t;)u&&u[d].run();d=-1,t=a.length}u=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{return r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function y(){}o.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];a.push(new h(e,t)),1!==a.length||l||c(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},o.title="browser",o.browser=!0,o.env={},o.argv=[],o.version="",o.versions={},o.on=y,o.addListener=y,o.once=y,o.off=y,o.removeListener=y,o.removeAllListeners=y,o.emit=y,o.prependListener=y,o.prependOnceListener=y,o.listeners=function(e){return[]},o.binding=function(e){throw new Error("process.binding is not supported")},o.cwd=function(){return"/"},o.chdir=function(e){throw new Error("process.chdir is not supported")},o.umask=function(){return 0}}))}();