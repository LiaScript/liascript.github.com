!function(){var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire55a5;e.register("aYnRb",(function(t,n){var r,i;r=t.exports,i=function(){return v},Object.defineProperty(r,"Sync",{get:i,set:undefined,enumerable:!0,configurable:!0});var u=e("f1evb"),o=e("hnmIs"),s=e("9Klpk"),a=e("3bWnf"),c=e("eT7f3"),l=e("9WzNc"),f=e("div3d"),b=e("kb0qF"),h=e("5ENmm"),d=e("bWNdT"),p=e("32Euv"),y=e("auvHb"),m=e("frnPj"),v=function(e){"use strict";(0,b.default)(n,e);var t=(0,d.default)(n);function n(){var e;return(0,s.default)(this,n),e=t.apply(this,arguments),(0,c.default)((0,u.default)(e),"channel",""),e}return(0,a.default)(n,[{key:"destroy",value:function(){this.pubnub&&(this.pubnub.unsubscribeAll(),this.pubnub.stop()),(0,l.default)((0,f.default)(n.prototype),"destroy",this).call(this)}},{key:"connect",value:function(e){var t=this,r=this;return(0,o.default)((function(){return(0,p.__generator)(this,(function(i){return(0,l.default)((0,f.default)(n.prototype),"connect",t).call(r,e),r.publishKey=e.config.publishKey,r.subscribeKey=e.config.subscribeKey,window.PubNub?r.init(!0):r.load(["//cdn.pubnub.com/sdk/javascript/pubnub.4.33.1.min.js"],r),[2]}))}))()}},{key:"init",value:function(e,t){if(!this.publishKey||!this.subscribeKey)return this.sendDisconnectError("You have to provide a valid pair of keys");var n=this.uniqueID();if(e&&window.PubNub&&n){this.channel=btoa(n),this.pubnub=new PubNub({publishKey:this.publishKey,subscribeKey:this.subscribeKey,uuid:this.token,heartbeatInterval:30,cipherKey:this.password}),this.pubnub.subscribe({channels:[this.channel],withPresence:!0,restore:!1});var r=this;this.pubnub.addListener({status:function(e){m.default.info("PUBNUB status:",e),"PNConnectedCategory"===e.category?r.sendConnect():"PNBadRequestCategory"===e.category&&r.sendDisconnectError(e.errorData.message)},message:function(e){if(e.publisher!==r.token){var t=(0,h.default)(e.message,3),n=t[0],i=t[1],u=t[2];n?u==r.db.timestamp?r.applyUpdate(y.base64_to_unit8(i)):u>r.db.timestamp?r.broadcast(!0,r.db.encode()):(r.db.timestamp=u,r.applyUpdate(y.base64_to_unit8(i),!0)):r.pubsubReceive(y.base64_to_unit8(i))}},presence:function(e){"leave"===e.action&&r.db.removePeer(e.uuid)}})}}},{key:"broadcast",value:function(e,t){this.pubnub&&this.pubnub.publish({channel:this.channel,message:[e,y.uint8_to_base64(t),this.db.timestamp],storeInHistory:!1},(function(e,t){}))}}]),n}(y.Sync)})),e.register("84cK9",(function(e,t){var n,r,i=e.exports={};function u(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function s(e){if(n===setTimeout)return setTimeout(e,0);if((n===u||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:u}catch(e){n=u}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(e){r=o}}();var a,c=[],l=!1,f=-1;function b(){l&&a&&(l=!1,a.length?c=a.concat(c):f=-1,c.length&&h())}function h(){if(!l){var e=s(b);l=!0;for(var t=c.length;t;){for(a=c,c=[];++f<t;)a&&a[f].run();f=-1,t=c.length}a=null,l=!1,function(e){if(r===clearTimeout)return clearTimeout(e);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(e);try{return r(e)}catch(t){try{return r.call(null,e)}catch(t){return r.call(this,e)}}}(e)}}function d(e,t){this.fun=e,this.array=t}function p(){}i.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];c.push(new d(e,t)),1!==c.length||l||s(h)},d.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=p,i.addListener=p,i.once=p,i.off=p,i.removeListener=p,i.removeAllListeners=p,i.emit=p,i.prependListener=p,i.prependOnceListener=p,i.listeners=function(e){return[]},i.binding=function(e){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(e){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}}))}();
