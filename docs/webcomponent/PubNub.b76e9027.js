!function(){var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire55a5;e.register("aYnRb",(function(t,n){var u,i,s,a;u=t.exports,i="Sync",s=function(){return m},Object.defineProperty(u,i,{get:s,set:a,enumerable:!0,configurable:!0});var r=e("f1evb"),o=e("hnmIs"),b=e("9Klpk"),c=e("3bWnf"),l=e("eT7f3"),f=e("9WzNc"),d=e("div3d"),h=e("kb0qF"),p=e("5ENmm"),y=e("bWNdT"),v=e("32Euv"),g=e("auvHb"),K=e("frnPj"),m=function(e){"use strict";(0,h.default)(n,e);var t=(0,y.default)(n);function n(){var e;return(0,b.default)(this,n),e=t.apply(this,arguments),(0,l.default)((0,r.default)(e),"channel",""),e}return(0,c.default)(n,[{key:"destroy",value:function(){this.pubnub&&(this.pubnub.unsubscribeAll(),this.pubnub.stop()),(0,f.default)((0,d.default)(n.prototype),"destroy",this).call(this)}},{key:"connect",value:function(e){var t=this,u=this;return(0,o.default)((function(){return(0,v.__generator)(this,(function(i){return(0,f.default)((0,d.default)(n.prototype),"connect",t).call(u,e),u.publishKey=e.config.publishKey,u.subscribeKey=e.config.subscribeKey,window.PubNub?u.init(!0):u.load(["//cdn.pubnub.com/sdk/javascript/pubnub.4.33.1.min.js"],u),[2]}))}))()}},{key:"init",value:function(e,t){if(!this.publishKey||!this.subscribeKey)return this.sendDisconnectError("You have to provide a valid pair of keys");var n=this.uniqueID();if(e&&window.PubNub&&n){this.channel=btoa(n),this.pubnub=new PubNub({publishKey:this.publishKey,subscribeKey:this.subscribeKey,uuid:this.token,heartbeatInterval:30,cipherKey:this.password}),this.pubnub.subscribe({channels:[this.channel],withPresence:!0,restore:!1});var u=this;this.pubnub.addListener({status:function(e){K.default.info("PUBNUB status:",e),"PNConnectedCategory"===e.category?u.sendConnect():"PNBadRequestCategory"===e.category&&u.sendDisconnectError(e.errorData.message)},message:function(e){if(e.publisher!==u.token){var t=(0,p.default)(e.message,2),n=t[0],i=t[1];n?u.applyUpdate(g.base64_to_unit8(i)):u.pubsubReceive(g.base64_to_unit8(i))}},presence:function(e){if("leave"===e.action)u.db.removePeer(e.uuid)}})}}},{key:"broadcast",value:function(e,t){this.pubnub&&this.pubnub.publish({channel:this.channel,message:[e,g.uint8_to_base64(t)],storeInHistory:!1},(function(e,t){}))}}]),n}(g.Sync)}))}();