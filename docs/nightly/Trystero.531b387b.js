var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire55a5;e.register("aYlFN",(function(t,n){var s,i,r,o;s=t.exports,i="Sync",r=function(){return d},Object.defineProperty(s,i,{get:r,set:o,enumerable:!0,configurable:!0});var a=e("5Owdb"),c={nostr:null,mqtt:null,torrent:null};class d extends a.Sync{destroy(){this.connection&&this.connection.leave(),super.destroy()}async connect(t){if(super.connect(t),c[this.backend])this.init(!0);else switch(this.backend){case"nostr":e("2Alpu").then((e=>{c.nostr=e.joinRoom,this.init(!0)})).catch((e=>{this.init(!1,e.message)}));break;case"mqtt":e("8VwUG").then((e=>{c.mqtt=e.joinRoom,this.init(!0)})).catch((e=>{this.init(!1,e.message)}));break;case"torrent":e("bSCfm").then((e=>{c.torrent=e.joinRoom,this.init(!0)})).catch((e=>{this.init(!1,e.message)}))}}init(e,t){const n=this.uniqueID();if(e&&n){const e={appId:"liascript"};this.password&&(e.password=this.password);const t=JSON.parse('{"iceServers":[{"urls":"stun:stun.relay.metered.ca:80"},{"urls":"turn:standard.relay.metered.ca:80","username":"1d901429597d3b1332b481d2","credential":"9eGxvnGUtRfCt6/N"},{"urls":"turn:standard.relay.metered.ca:80?transport=tcp","username":"1d901429597d3b1332b481d2","credential":"9eGxvnGUtRfCt6/N"},{"urls":"turn:standard.relay.metered.ca:443","username":"1d901429597d3b1332b481d2","credential":"9eGxvnGUtRfCt6/N"},{"urls":"turns:standard.relay.metered.ca:443?transport=tcp","username":"1d901429597d3b1332b481d2","credential":"9eGxvnGUtRfCt6/N"}]}');t&&(e.rtcConfig=t),this.connection=c[this.backend](e,n),this.connection.onPeerJoin((e=>console.log(`${e} joined`))),this.connection.onPeerLeave((e=>console.log(`${e} left`)));const[s,i]=this.connection.makeAction("message");this.pub=s,this.sub=i;const r=this;this.sub(((e,t)=>{if(e)try{const[t,n,s]=e;if(t){if(null===n)return;s==r.db.timestamp?r.applyUpdate(a.base64_to_unit8(n)):s>r.db.timestamp?r.broadcast(!0,r.db.encode()):(r.db.timestamp=s,r.applyUpdate(a.base64_to_unit8(n),!0))}else r.pubsubReceive(a.base64_to_unit8(n))}catch(e){console.warn(r.backend,e.message)}})),this.sendConnect()}else{let e=this.backend+" unknown error";t&&(e="Could not load resource: "+t),this.sendDisconnectError(e)}}broadcast(e,t){if(!this.publish)return;const n=null==t?null:a.uint8_to_base64(t);this.pub([e,n,this.db.timestamp])}constructor(e,t,n,s,i,r=!1,o=!0){super(t,n,s,i,r,o),this.backend=e}}})),e.register("2Alpu",(function(t,n){t.exports=e("ebDiK")(e("ey3S0").getBundleURL("17irQ")+e("abmWv").resolve("lYuyw")).then((()=>e("g9MJ9")))})),e.register("8VwUG",(function(t,n){t.exports=e("ebDiK")(e("ey3S0").getBundleURL("17irQ")+e("abmWv").resolve("7bLGf")).then((()=>e("i0BT1")))})),e.register("bSCfm",(function(t,n){t.exports=e("ebDiK")(e("ey3S0").getBundleURL("17irQ")+e("abmWv").resolve("1lfZ9")).then((()=>e("hsMrW")))}));