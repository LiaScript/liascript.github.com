!function(){var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire55a5;e.register("jktW8",(function(t,n){var i,o;i=t.exports,o=function(){return v},Object.defineProperty(i,"Sync",{get:o,set:undefined,enumerable:!0,configurable:!0});var s=e("aPYZr"),a=e("3mpD3"),r=e("4JAgF"),u=e("9HoHC"),d=e("8WkQI"),c=e("aPvD2"),l=e("aBvOn"),f=e("gNsil"),y=e("8rJSp"),h=e("cDTRq"),b=e("bhxid"),p=e("6GUoL"),v=function(e){"use strict";(0,f.default)(n,e);var t=(0,y.default)(n);function n(){var e;return(0,r.default)(this,n),e=t.apply(this,arguments),(0,d.default)((0,s.default)(e),"subject","liasync"),(0,d.default)((0,s.default)(e),"connected",!1),e}return(0,u.default)(n,[{key:"connect",value:function(e){var t=this,i=this;return(0,a.default)((function(){return(0,h.__generator)(this,(function(o){return(0,c.default)((0,l.default)(n.prototype),"connect",t).call(i,e),i.init(!0),[2]}))}))()}},{key:"destroy",value:function(){this.listener&&window.removeEventListener("message",this.listener),(0,c.default)((0,l.default)(n.prototype),"destroy",this).call(this)}},{key:"init",value:function(e,t){if(e){this.subject=this.room||"liasync";var n=this;this.listener=function(e){try{var t=e.data;"init"===t.subject?t.body&&(n.connected=!0,n.sendConnect()):t.body&&n.applyUpdate((0,p.decode)(t.body))}catch(e){console.warn("Edrys",e.message)}},window.addEventListener("message",this.listener),this.broadcast(null,"init"),setTimeout((function(){n.connected||n.sendDisconnectError("This seems not to be an Edrys classroom")}),2e3)}}},{key:"broadcast",value:function(e,t){window.parent.postMessage({subject:t||this.subject,body:e?(0,p.encode)(e):null},"*")}}]),n}(b.Sync)}))}();