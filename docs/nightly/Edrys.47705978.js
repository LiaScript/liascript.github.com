var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire55a5;e.register("apbN5",(function(t,n){var r,i,o,s;r=t.exports,i="Sync",o=function(){return l},Object.defineProperty(r,i,{get:o,set:s,enumerable:!0,configurable:!0});var c=e("2Xs1f"),u=e("5Owdb"),a=e("dOAsX");class l extends u.Sync{async connect(e){super.connect(e),this.init(!0)}destroy(){this.listener&&window.removeEventListener("message",this.listener),super.destroy()}init(e,t){if(e){this.subject=this.room||"liasync";let e=this;this.listener=function(t){try{let n=t.data;switch(n.subject){case"init":n.body&&(e.connected=!0,e.sendConnect());break;case"publish":n.body&&e.pubsubReceive(n.body);break;default:n.body&&e.applyUpdate((0,a.decode)(n.body))}}catch(e){console.warn("Edrys",e.message)}},window.addEventListener("message",this.listener),this.broadcast(!0,null,"init"),setTimeout((function(){e.connected||e.sendDisconnectError("This seems not to be an Edrys classroom")}),2e3)}}broadcast(e,t,n){let r=e?n||this.subject:"publish";window.parent.postMessage({subject:r,body:t?(0,a.encode)(t):null},"*")}constructor(...e){super(...e),(0,c.default)(this,"subject","liasync"),(0,c.default)(this,"connected",!1)}}})),e.register("jhEmn",(function(e,t){var n,r,i=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function s(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===o||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:o}catch(e){n=o}try{r="function"==typeof clearTimeout?clearTimeout:s}catch(e){r=s}}();var u,a=[],l=!1,d=-1;function f(){l&&u&&(l=!1,u.length?a=u.concat(a):d=-1,a.length&&h())}function h(){if(!l){var e=c(f);l=!0;for(var t=a.length;t;){for(u=a,a=[];++d<t;)u&&u[d].run();d=-1,t=a.length}u=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===s||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{return r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function p(e,t){this.fun=e,this.array=t}function b(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];a.push(new p(e,t)),1!==a.length||l||c(h)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=b,i.addListener=b,i.once=b,i.off=b,i.removeListener=b,i.removeAllListeners=b,i.emit=b,i.prependListener=b,i.prependOnceListener=b,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}}));