!function(){function t(t,e,i,n){Object.defineProperty(t,e,{get:i,set:n,enumerable:!0,configurable:!0})}var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},i={},n={},r=e.parcelRequire55a5;null==r&&((r=function(t){if(t in i)return i[t].exports;if(t in n){var e=n[t];delete n[t];var r={id:t,exports:{}};return i[t]=r,e.call(r.exports,r,r.exports),r.exports}var s=new Error("Cannot find module '"+t+"'");throw s.code="MODULE_NOT_FOUND",s}).register=function(t,e){n[t]=e},e.parcelRequire55a5=r),r.register("3ZK2M",(function(e,i){t(e.exports,"initTooltip",(function(){return k}));var n=r("f1evb"),s=r("9Klpk"),o=r("3bWnf"),a=r("eT7f3"),c=r("kb0qF"),l=r("fSF4h"),h=r("bWNdT"),u=r("caQnM"),d=r("gGOO1"),f=r("7OeKL"),v=r("ckL1k"),g="lia-tooltip",p=/(?:https?:)(?:\/\/)liascript\.github\.io\/course\/\?(.+\.md)/i,y=Object(),m=function(t){"use strict";(0,c.default)(i,t);var e=(0,h.default)(i);function i(){var t;return(0,s.default)(this,i),t=e.call(this),(0,a.default)((0,n.default)(t),"sourceUrl",""),(0,a.default)((0,n.default)(t),"cache",null),(0,a.default)((0,n.default)(t),"isFetching",!1),(0,a.default)((0,n.default)(t),"isClicked",!1),(0,a.default)((0,n.default)(t),"isActive",!1),(0,a.default)((0,n.default)(t),"lightMode",!0),t}return(0,o.default)(i,[{key:"connectedCallback",value:function(){this.sourceUrl=this.getAttribute("src")||"",this.sourceUrl&&(this.sourceUrl.endsWith("/")&&(this.sourceUrl=this.sourceUrl.slice(0,-1)),this.container=document.getElementById(g)||void 0,this.container&&this.firstChild&&(this.firstChild.addEventListener("mouseenter",this._onmouseenter),this.firstChild.addEventListener("mouseout",this._onmouseout),this.firstChild.addEventListener("click",this._onclick),this.firstChild.addEventListener("focus",this._onfocus),this.firstChild.addEventListener("focusout",this._onfocusout),this.firstChild.addEventListener("keyup",this._onescape)))}},{key:"disconnectedCallback",value:function(){this.firstChild&&(this.firstChild.removeEventListener("mouseenter",this._onmouseenter),this.firstChild.removeEventListener("mouseout",this._onmouseout),this.firstChild.removeEventListener("click",this._onclick),this.firstChild.removeEventListener("focus",this._onfocus),this.firstChild.removeEventListener("focusout",this._onfocusout),this.firstChild.removeEventListener("keyup",this._onescape))}},{key:"_onclick",value:function(){var t=this.parentElement;t.isActive=!1,t.isClicked=!0}},{key:"_onescape",value:function(t){if("Escape"===t.code){var e=this.parentElement;e.setAttribute("data-active","false"),e.deactivate()}}},{key:"_onmouseenter",value:function(){this.style.cursor="progress";var t=this.getBoundingClientRect();this.parentElement.activate(t.left+t.width/2,t.top+t.height/2)}},{key:"_onmouseout",value:function(){this.parentElement.deactivate()}},{key:"_onfocus",value:function(t){var e=this.getBoundingClientRect();this.parentElement.activate(e.left+e.width/2,e.top+e.height/2)}},{key:"_onfocusout",value:function(){var t=this.parentElement;t.container&&t.container.setAttribute("data-active","false"),t.deactivate()}},{key:"activate",value:function(t,e){var i=this;if(this.container){if(this.isActive=!0,this.isClicked)return void(this.isClicked=!1);if(this.container.style.left="".concat(t-425*t/window.innerWidth,"px"),1.5*e>window.innerHeight?(this.container.style.top="",this.container.style.bottom="".concat(window.innerHeight-e+10,"px")):(this.container.style.top="".concat(e+10,"px"),this.container.style.bottom=""),this.cache)this.show();else if(y[this.sourceUrl])this.cache=y[this.sourceUrl],this.show();else if(!this.isFetching){this.isFetching=!0;var n=this,r=this.sourceUrl.match(p);if(r)d.fetch(r[1],(function(t,e){n.cache=b(n.sourceUrl,e.title,e.description,e.logo,e.logo_alt),n.show()}));else try{u.extract(this.sourceUrl,{}).then((function(t){n.cache=b(n.sourceUrl,t.title,void 0,t.thumbnail_url),n.show()})).catch((function(t){w(i.sourceUrl,(function(t){n.parse(t)}))}))}catch(t){}}}}},{key:"deactivate",value:function(){this.container&&"false"===this.container.getAttribute("data-active")&&(this.isActive=!1,this.container.style.display="none",this.container.style.zIndex="-1000")}},{key:"parse",value:function(t){if(null===this.cache){var e=v.parse(this.sourceUrl,t);if("string"==typeof e.image){var i=e.image.match(/.*?%22(.*)\/%22/);i&&2==i.length&&(e.image=i[1])}this.cache=b(e.url,e.title,e.description,e.image,e.image_alt),""===this.cache&&(this.container=void 0),this.show()}else this.show()}},{key:"show",value:function(){this.container&&this.cache&&this.isActive&&(this.lightMode?(this.container.style.background="white",this.container.style.boxShadow="0 30px 90px -20px rgba(0, 0, 0, 0.3)"):(this.container.style.background="#202020",this.container.style.boxShadow="0 30px 90px -20px rgba(120, 120, 120, 0.3)"),this.container.style.zIndex="20000",this.container.style.display="inline-block",this.container.innerHTML=this.cache),this.firstChild&&(this.firstChild.style.cursor="")}},{key:"light",get:function(){return this.lightMode},set:function(t){this.lightMode!==t&&(this.lightMode=t,this.show())}}]),i}((0,l.default)(HTMLElement));function b(t,e,i,n,r){if(!t)return"";t=t.replace(f.PROXY,"");var s="";if(n)try{f.allowedProtocol(n)||(n=new URL(n,t).toString()),r=r?'alt="'.concat(r,'"'):"",s+='<img src="'.concat(n,'" ').concat(r,' style="background-color:white; margin-bottom: 1.5rem;">')}catch(t){}return e&&(s+="<h4>".concat(e,"</h4>")),i&&(s+=i),""!=s&&(s+='<hr style="border: 0px; height:1px; background:#888;"/><a style="font-size:x-small; display:block" href="'.concat(t,'" target="_blank">').concat(t,"</a>")),y[t]=s,s}function k(){document.getElementById(g)||setTimeout((function(){var t=document.createElement("div");t.id=g,t.style.zIndex="-1000",t.style.width="425px",t.style.padding="15px",t.style.background="white",t.style.boxShadow="0 30px 90px -20px rgba(0, 0, 0, 0.3)",t.style.position="fixed",t.style.display="none",t.style.maxHeight="480px",t.style.overflow="auto",t.setAttribute("data-active","true"),t.addEventListener("mouseenter",(function(){t.style.display="inline-block",t.style.zIndex="20000",t.setAttribute("data-active","true")})),t.addEventListener("mouseleave",(function(){t.style.display="none",t.style.zIndex="-1000",t.setAttribute("data-active","false")})),document.body.appendChild(t)}),0)}function w(t,e){var i=arguments.length>2&&void 0!==arguments[2]?arguments[2]:0;if(0==i&&function(t){return!!t.search(/wikipedia\.org/gi)}(t))w(f.PROXY+t,e,1);else{var n=new XMLHttpRequest;n.open("GET",t,!0),n.onload=function(t){if(4===n.readyState&&200===n.status)try{var i=n.responseText;try{i=JSON.parse(i).contents}catch(t){}e(i)}catch(t){console.warn("fetching",t)}},n.onerror=function(n){0===i&&w(f.PROXY+t,e,1)},n.send()}}customElements.define("preview-link",m)})),r.register("ckL1k",(function(e,i){t(e.exports,"parse",(function(){return u}));var n=r("7OeKL"),s=/href=[\"'](.*?)[\"']/gi,o=/src=[\"'](.*?)[\"']/gi,a=/alt=[\"'](.*?)[\"']/gi,c=/<h1.*?>(.*?)<\/h1>/gi,l=/<h2.*?>(.*?)<\/h2>/gi,h=/<title>(.*?)<\/title>/gi;function u(t,e){var i=function(t){var e=g("og:image",t);if(e)return{url:e,alt:g("og:image:alt",t)};var i=v(/<link.*?rel=[\"']image_src[\"'].*?>/gi,t);if(i)return{url:v(s,i)};var n=g("twitter:image",t);if(n)return{url:n,alt:g("twitter:image:alt",t)};var r=v(/<img .*?>/gi,t);return r?{url:v(o,r),alt:v(a,r)}:{}}(e),n=new URL(function(t){return v(/<base.*?href\s*=\s*[\"'](.*?)[\"']>/gi,t)}(e)||t);return{url:t,title:d(e),description:f(n,e),image:i.url,image_alt:i.alt}}function d(t){var e=g("og:title",t);if(e&&e.length>0)return e;var i=g("twitter:title",t);if(i&&i.length>0)return i;var n=v(h,t);if(n&&n.length>0)return n;var r=v(c,t);if(r&&r.length>0)return r;var s=v(l,t);return s&&s.length>0?s:void 0}function f(t,e){var i=g("og:description",e);if(i&&i.length>0)return i;var r=g("twitter:description",e);if(r&&r.length>0)return r;var s=v(/<meta.*?name=[\"']description[\"'].*?>/gi,e);if(s){var o=v(/content=[\"'](.*?)[\"']/gi,s);if(o&&o.length>0)return o}var a=v(/<p>([\s\S]+?)<\/p>/gi,e);return a?(a=a.replace(/(href|src)\s*=\s*[\"'].*?[\"']/g,(function(e){return function(t,e){var i=e.search(/[\"']/);e.startsWith("href")&&(e+=' target="blank_"');var r=e.slice(0,i+1),s=e.slice(i+1);return n.allowedProtocol(r)||s.startsWith("//")?e:s.startsWith("/")?r+t.origin+s:s.startsWith("#")?r+t.href+s:r+t.origin+"/"+s}(t,e)})),a):void 0}function v(t,e){var i=e.matchAll(t).next();return i.value?i.value[i.value.length-1]:void 0}function g(t,e){var i=v(new RegExp("<meta[^>]+?property=[\"']".concat(t,"[\"'][^>]*?>"),"gi"),e);if(i)return v(/content=[\"'](.*?)[\"']/gi,i)}})),r("3ZK2M")}();
