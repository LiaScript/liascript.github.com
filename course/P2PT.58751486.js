function t(t,e,n,o){Object.defineProperty(t,e,{get:n,set:o,enumerable:!0,configurable:!0})}var e=("undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{}).parcelRequire55a5;e.register("iyAFm",(function(n,o){t(n.exports,"Sync",(function(){return c}));var s=e("2Xs1f"),r=e("5Owdb"),i=e("2O3kG");class c extends r.Sync{destroy(){var t;this.trackersAnnounceURLs=[],null===(t=this.p2pt)||void 0===t||t.destroy(),super.destroy()}async connect(t){super.connect(t),this.trackersAnnounceURLs=t.config||[],window.P2PT?this.init(!0):(window.P2PT=await e("7gUjV"),this.load([i.Crypto.url],this))}init(t,e){if(0==this.trackersAnnounceURLs.length)return this.sendDisconnectError("You have to provide at least one WebTorrent tracker.");const n=this.uniqueID();if(t&&window.P2PT&&n){this.p2pt=new window.P2PT(this.trackersAnnounceURLs,n),i.Crypto.init(this.password);const t=this;this.p2pt.on("trackerconnect",((e,n)=>{console.log("Connected to tracker : "+e.announceUrl),console.log("Tracker stats : "+JSON.stringify(n)),t.is_connected||(t.is_connected=!0,t.sendConnect())})),this.p2pt.on("trackerwarning",((t,e)=>{console.log("Connected to tracker : ",t),console.log("Tracker stats : "+JSON.stringify(e))})),this.p2pt.on("peerconnect",(e=>{console.warn("Peer connected : "+e.id,e),t.peers[e.id]=e})),this.p2pt.on("peerclose",(e=>{console.warn("Peer disconnected : "+e);const n=t.tokens[e.id];n&&(t.db.removePeer(n),delete t.tokens[e.id]),delete t.peers[e.id]})),this.p2pt.on("msg",((e,n)=>{if(n)try{const[o,s,c,p]=i.Crypto.decode(n);o!=t.token&&(s?p==t.db.timestamp?t.applyUpdate(r.base64_to_unit8(c)):p>t.db.timestamp?t.broadcast(!0,t.db.encode()):(t.db.timestamp=p,t.applyUpdate(r.base64_to_unit8(c),!0)):t.pubsubReceive(r.base64_to_unit8(c)),t.tokens[e.id]||(t.tokens[e.id]=o))}catch(t){console.warn("P2PT",t.message)}})),this.p2pt.start()}else{let t="P2PT unknown error";e?t="Could not load resource: "+e:window.P2PT||(t="Could not load P2PT interface"),this.sendDisconnectError(t)}}broadcast(t,e){if(!this.p2pt)return;const n=null==e?null:r.uint8_to_base64(e),o=i.Crypto.encode([this.token,t,n,this.db.timestamp]);for(const t in this.peers)this.p2pt.send(this.peers[t],o)}constructor(...t){super(...t),(0,s.default)(this,"trackersAnnounceURLs",[]),(0,s.default)(this,"peers",{}),(0,s.default)(this,"tokens",{}),(0,s.default)(this,"is_connected",!1)}}})),e.register("2O3kG",(function(e,n){t(e.exports,"Crypto",(function(){return o}));const o={url:"https://cdn.jsdelivr.net/npm/simple-crypto-js@2.5.0/dist/SimpleCrypto.min.js",crypt:null,check:function(){return!!window.SimpleCrypto},init:function(t){try{"string"==typeof t&&t.length>0?this.crypt=new SimpleCrypto(t):this.crypt=null}catch(t){console.warn("Crypto: ",t),this.crypt=null}},encode:function(t){return this.crypt?this.crypt.encrypt(btoa(encodeURIComponent(JSON.stringify(t)))):JSON.stringify(t)},decode:function(t){return this.crypt?JSON.parse(decodeURIComponent(atob(this.crypt.decrypt(t)))):JSON.parse(t)}}})),e.register("7gUjV",(function(t,n){t.exports=import("./"+e("abmWv").resolve("4lXxH")).then((()=>e("9P9uR")))}));