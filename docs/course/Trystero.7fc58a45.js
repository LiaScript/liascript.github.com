!function(){var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire55a5;e.register("lCGwp",(function(t,n){var r,a,i,o;r=t.exports,a="Sync",i=function(){return v},Object.defineProperty(r,a,{get:i,set:o,enumerable:!0,configurable:!0});var s=e("hnmIs"),c=e("9Klpk"),u=e("3bWnf"),d=e("9WzNc"),l=e("div3d"),f=e("kb0qF"),b=e("5ENmm"),h=e("bWNdT"),p=e("32Euv"),m=e("auvHb"),g={nostr:null,mqtt:null,torrent:null},v=function(t){"use strict";(0,f.default)(r,t);var n=(0,h.default)(r);function r(e,t,a,i,o){var s,u=arguments.length>5&&void 0!==arguments[5]&&arguments[5],d=!(arguments.length>6&&void 0!==arguments[6])||arguments[6];return(0,c.default)(this,r),(s=n.call(this,t,a,i,o,u,d)).backend=e,s}return(0,u.default)(r,[{key:"destroy",value:function(){this.connection&&this.connection.leave(),(0,d.default)((0,l.default)(r.prototype),"destroy",this).call(this)}},{key:"connect",value:function(t){var n=this,a=this;return(0,s.default)((function(){return(0,p.__generator)(this,(function(i){if((0,d.default)((0,l.default)(r.prototype),"connect",n).call(a,t),g[a.backend])return a.init(!0),[2];switch(a.backend){case"nostr":e("5ZdQa").then((function(e){g.nostr=e.joinRoom,a.init(!0)})).catch((function(e){a.init(!1,e.message)}));break;case"mqtt":e("8G6Vu").then((function(e){g.mqtt=e.joinRoom,a.init(!0)})).catch((function(e){a.init(!1,e.message)}));break;case"torrent":e("kEbLv").then((function(e){g.torrent=e.joinRoom,a.init(!0)})).catch((function(e){a.init(!1,e.message)}))}return[2]}))}))()}},{key:"init",value:function(e,t){var n=this.uniqueID();if(e&&n){var r={appId:"liascript"};this.password&&(r.password=this.password);var a=JSON.parse('{"iceServers":[{"urls":"stun:stun.relay.metered.ca:80"},{"urls":"turn:standard.relay.metered.ca:80","username":"5cedc2adff8a8f714555bd79","credential":"azL7pmqh8DkgS50Y"},{"urls":"turn:standard.relay.metered.ca:80?transport=tcp","username":"5cedc2adff8a8f714555bd79","credential":"azL7pmqh8DkgS50Y"},{"urls":"turn:standard.relay.metered.ca:443","username":"5cedc2adff8a8f714555bd79","credential":"azL7pmqh8DkgS50Y"},{"urls":"turns:standard.relay.metered.ca:443?transport=tcp","username":"5cedc2adff8a8f714555bd79","credential":"azL7pmqh8DkgS50Y"}]}');a&&(r.rtcConfig=a),this.connection=g[this.backend](r,n),this.connection.onPeerJoin((function(e){return console.log("".concat(e," joined"))})),this.connection.onPeerLeave((function(e){return console.log("".concat(e," left"))}));var i=(0,b.default)(this.connection.makeAction("message"),2),o=i[0],s=i[1];this.pub=o,this.sub=s;var c=this;this.sub((function(e,t){if(e)try{var n=(0,b.default)(e,3),r=n[0],a=n[1],i=n[2];if(r){if(null===a)return;i==c.db.timestamp?c.applyUpdate(m.base64_to_unit8(a)):i>c.db.timestamp?c.broadcast(!0,c.db.encode()):(c.db.timestamp=i,c.applyUpdate(m.base64_to_unit8(a),!0))}else c.pubsubReceive(m.base64_to_unit8(a))}catch(e){console.warn(c.backend,e.message)}})),this.sendConnect()}else{var u=this.backend+" unknown error";t&&(u="Could not load resource: "+t),this.sendDisconnectError(u)}}},{key:"broadcast",value:function(e,t){if(this.publish){var n=null==t?null:m.uint8_to_base64(t);this.pub([e,n,this.db.timestamp])}}}]),r}(m.Sync)})),e.register("5ZdQa",(function(t,n){t.exports=e("3OMJO")(e("5B9gS").getBundleURL("bFNS0")+e("b9xd4").resolve("6gAOH")).then((function(){return e("1UDrq")}))})),e.register("8G6Vu",(function(t,n){t.exports=e("3OMJO")(e("5B9gS").getBundleURL("bFNS0")+e("b9xd4").resolve("7U1md")).then((function(){return e("aB40U")}))})),e.register("kEbLv",(function(t,n){t.exports=e("3OMJO")(e("5B9gS").getBundleURL("bFNS0")+e("b9xd4").resolve("jnhCd")).then((function(){return e("E0fFs")}))}))}();