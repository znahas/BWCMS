!function(){var t={},n={},e={},r={},o={},i={},u={},s={};t=function(t){var n;!function(t){t[t.blT=0]="blT",t[t.ngS=1]="ngS",t[t.IQl=2]="IQl"}(n=t.qsy||(t.qsy={}));var e=function(){function t(t,n,e,r){this.HvA={},this.Qak=null,this.Ykq={},this.HBT=t,this.Qak=n,window.jsplus_default_parameters||(window.jsplus_default_parameters={}),window.jsplus_default_parameters[n]=e,this.Ykq=r}return t.bsB=function(n){for(var e=0,r=t.phJ;e<r.length;e++){var o=r[e];if(o.bsB()===n)return o}return null},t.prototype.bsB=function(){return this.HBT},t.prototype.mjd=function(t){return t in this.Ykq?this.Ykq[t]:(console.log("Warning: string `"+t+"` is not defined"),"")},t.prototype.Ycf=function(t){if(window.jsplus_framework)return window.jsplus_framework;var n=this.hTE("framework");if(null!=n)return n;var e=this.Gig("jsplus_bootstrap_include","version");return null!=e?"b"+e:(e=this.Gig("jsplus_foundation_include","framework"),null!=e?"f"+e:(e=this.Ovc("jsplus_bootstrap_include_version"),null!=e?"b"+e:(e=this.Ovc("jsplus_foundation_include_version"),null!=e?"f"+e:t)))},t}();return e.phJ=[],t.nZI=e,t}(t),n=function(t){function n(t){var n=e(t.tagName);n.innerHTML=t.innerHTML;for(var r=0;r<t.attributes.length;r++)n.setAttribute(t.attributes[r].name,t.attributes[r].value);return n}function e(t,n){return void 0===t&&(t="div"),void 0===n&&(n=window.document),n.createElement(t)}function r(t,n,r){void 0===r&&(r="div");var i=e(r);return null!=t&&o(i,t),n.appendChild(i),i}function o(t,n){a(t,n)||(t.className=0===t.className.length?n:t.className+" "+n)}function i(t,n){for(var e=s(t);e.indexOf(n)>-1;)e.splice(e.indexOf(n),1);f(t,e)}function u(t,n,e){e?o(t,n):i(t,n)}function s(t){return"undefined"==typeof t.className||null==t.className?[]:l(t.className)}function l(t){var n=t.split(/\s+/);return 1===n.length&&""===n[0]&&(n=[]),n}function f(t,n){if(0===n.length)t.removeAttribute("class");else{for(var e="",r=0;r<n.length;r++){var o=n[r].trim();o.length>0&&(e.length>0&&(e+=" "),e+=o)}t.setAttribute("class",e)}}function a(t,n){for(var e=s(t),r=0;r<e.length;r++)if(e[r].toLowerCase()===n.toLowerCase())return!0;return!1}function c(t,n){for(var e=s(t),r=0;r<e.length;r++)if(0===e[r].indexOf(n))return!0;return!1}function d(t){if("undefined"==typeof t.getAttribute("style")||null==t.getAttribute("style")||0===t.getAttribute("style").trim().length)return{};for(var n={},e=t.getAttribute("style").split(/;/),r=0;r<e.length;r++){var o=e[r].trim();if(o.length>0){var i=o.indexOf(":");i>-1?n[o.substr(0,i).trim()]=o.substr(i+1):n[o]=""}}return n}function h(t,n,e){void 0===e&&(e=null);var r=m(t,n);return null==r?e:(r=r.substring(0,r.length-2),parseInt(r))}function m(t,n){var e=d(t);for(var r in e){var o=e[r].trim();if(r===n)return o}return null}function p(t,n,e){var r=d(t);for(var o in r){var i=r[o];if(o===n&&i===e)return!0}return!1}function v(t,n,e,r){r?g(t,n,e):i(t,n)}function g(t,n,e){if(null==e)w(t,n);else{var r=d(t);r[n]=e,b(t,r)}}function w(t,n){var e=d(t);delete e[n],b(t,e)}function b(t,n){var e=[];for(var r in n)r.trim().length>0&&e.push(r+":"+n[r.trim()]);e.length>0?t.setAttribute("style",e.join(";")):t.hasAttribute("style")&&t.removeAttribute("style")}function y(t){return t.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#039;")}function x(t){var n=document.createElement("div");return n.innerHTML=t,n.childNodes[0]}function O(t){return void 0===t&&(t=document),t.getElementsByTagName("html")[0]}function T(t){return void 0===t&&(t=document),t.getElementsByTagName("head")[0]}function _(t){return void 0===t&&(t=document),t.getElementsByTagName("body")[0]}function E(t,n){void 0===n&&(n=document);for(var e=n.getElementsByTagName("link"),r=0;r<e.length;r++){var o=e[r].getAttribute("href");if(o.indexOf(t)!==-1)return e[r]}var i=n.createElement("link");return i.href=t,i.type="text/css",i.rel="stylesheet",T(n).appendChild(i),i}function j(t,n){void 0===n&&(n=document);for(var e=n.getElementsByTagName("script"),r=!1,o=0;o<e.length;o++){var i=e[o].getAttribute("src");null!=i&&i.indexOf(t)!==-1&&(r=!0)}if(!r){var u=n.createElement("script");u.src=t,u.type="text/javascript",T(n).appendChild(u)}}function k(t,n){void 0===n&&(n=document);var e=n.createElement("style");T(n).appendChild(e),e.innerHTML=t}function W(t,n){void 0===n&&(n=[]);for(var e=t.attributes,r={},o=0;o<e.length;o++){for(var i=!1,u=e[o].nodeName,s=0;s<n.length&&!i;s++)n[s]===u&&(i=!0);i||(r[u]=e[o].nodeValue)}return r}function I(t,n,e){void 0===e&&(e=[]);for(var r=t.attributes,o=0;o<r.length;o++){for(var i=!1,u=r[o].nodeName,s=0;s<e.length&&!i;s++)e[s]===u&&(i=!0);if(!i){for(var l=!1,s=0;s<r.length&&!l;s++)r[s].nodeName===u&&(l=!0);l||t.removeAttribute(u)}}for(var o=0;o<n.length;o++){for(var i=!1,u=n[o][0],f=n[o][1],s=0;s<e.length&&!i;s++)e[s]===u&&(i=!0);i||q(t,u,f)}}function q(t,n,e){var r=n.trim();if(""!==r)try{null==e?t.removeAttribute(r):t.setAttribute(r,e)}catch(t){}}function N(t,n,e){if(!t.hasAttribute(n))return e;var r=t.getAttribute(n),o=parseInt(r);return isNaN(o)?e:o}function C(t,n,e){var r=N(t,n,e);return r<0?e:r}function Q(){var t=0;return"number"==typeof window.innerWidth?t=window.innerWidth:document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight)?t=document.documentElement.clientWidth:document.body&&(document.body.clientWidth||document.body.clientHeight)&&(t=document.body.clientWidth),t}function B(){var t=0;return"number"==typeof window.innerWidth?t=window.innerHeight:document.documentElement&&(document.documentElement.clientWidth||document.documentElement.clientHeight)?t=document.documentElement.clientHeight:document.body&&(document.body.clientWidth||document.body.clientHeight)&&(t=document.body.clientHeight),t}function A(t,n){for(var e=["propertychange","change","click","keyup","input","paste"],r=0,o=e;r<o.length;r++){var i=o[r];t.addEventListener(i,function(){var e=t,r=n;return function(t){r(e.value)}}())}}return t.JYs=n,t.eQO=e,t.xKW=r,t.ROQ=o,t.qdM=i,t.nfX=u,t.Ous=s,t.waN=l,t.NrX=f,t.UKv=a,t.LAt=c,t.cQB=d,t.RjL=h,t.SMK=m,t.cJc=p,t.Rvv=v,t.okc=g,t.yyf=w,t.hOD=b,t.mkm=y,t.SEi=x,t.bJv=O,t.YQu=T,t.unz=_,t.iKz=E,t.jMm=j,t.Yrb=k,t.Wpd=W,t.EJK=I,t.lYQ=q,t.QTj=N,t.Zbt=C,t.aJs=Q,t.hto=B,t.AXS=A,t}(n),e=function(t){function n(){return!1}function e(t){}return t.KUJ=n,t.fbV=e,t}(e),r=function(t){function n(){if(document.currentScript)return document.currentScript.getAttribute("src");for(var t=document.getElementsByTagName("script"),n=t.length-1;n>=0;n--)if(t[n].src&&t[n].src.length>0)return t[n].src;return console.log("Warning: current URL of script not found"),""}function e(){return t.qIa}t.nNy="",t.qIa="";var r=n(),o=r.lastIndexOf("/");return t.nNy=r,o>-1?t.qIa=r.substr(0,o+1):t.qIa=r,t.Ljg=n,t.toH=e,t}(r);var l=this&&this.__extends||function(t,n){function e(){this.constructor=t}for(var r in n)n.hasOwnProperty(r)&&(t[r]=n[r]);t.prototype=null===n?Object.create(n):(e.prototype=n.prototype,new e)};o=function(t,n,e,r,o){var i=function(t){function i(){return null!==t&&t.apply(this,arguments)||this}return l(i,t),i.QwZ=function(t){if(!r.KUJ()){if(t.hJy)for(var n=0,e=t.hJy;n<e.length;n++){var u=e[n];window.tinymce.PluginManager.load(u,o.nNy)}window.tinymce.PluginManager.add(t.plF,function(){var n=t;return function(t,e){if(n.hJy)for(var r=0,u=n.hJy;r<u.length;r++){var s=u[r];window.tinymce.PluginManager.get(s)(t,o.toH())}var l=i.sib(t,n.plF,n.JtH,n.Ykq);n.miT(l)}}())}},i.sib=function(t,e,r,o){var u=new i(t,e,r,o);return n.nZI.phJ.push(u),u},i.DhD=function(){return"tinymce"},i.prototype.INl=function(){return"4"==window.tinymce.majorVersion?4:3},i.prototype.xcP=function(){return window.tinymce.minorVersion},i.prototype.Csy=function(){return!0},i.prototype.xWK=function(){return this.INl()>3&&this.HBT.inline},i.prototype.yoE=function(){return this.HBT.id.replace(/\[/,"_").replace(/\]/,"_")},i.prototype.ZQq=function(){if(3==this.INl()||!this.xWK())return this.HBT.getContainer();var t=window.document.getElementById(this.HBT.theme.panel._id);return t},i.prototype.zpq=function(){return this.HBT.getDoc()},i.prototype.UNn=function(){return this.HBT.getContent()},i.prototype.EFF=function(t){this.HBT.setContent(t)},i.prototype.QIl=function(){var t=this.kvx();return null!=t&&"IMG"==t.tagName?t:null},i.prototype.kvx=function(){return null==window.tinymce.activeEditor||null==window.tinymce.activeEditor.selection?null:window.tinymce.activeEditor.selection.getNode()},i.prototype.toH=function(){return window.tinymce.baseURL},i.prototype.wrw=function(){return this.egL(this.Qak)},i.prototype.egL=function(t){for(var n=0;n<window.tinymce.editors.length;n++){var e=(window.tinymce.editors[n],this.Ovc("external_plugins"));if(e&&t in e){var r=e[t].replace("\\","/"),o=r.lastIndexOf("/");return r=o==-1?"":r.substr(0,o)+"/"}}return this.toH()+"/plugins/"+t+"/"},i.prototype.Gig=function(t,n){var e=this.Tud();return n in e?e[n]:window.jsplus_default_parameters&&t in window.jsplus_default_parameters&&n in window.jsplus_default_parameters[t]?window.jsplus_default_parameters[t][n]:null},i.prototype.vcO=function(t){var n=this.HBT.getParam(this.Qak,{}),e=window.jsplus_default_parameters[t];for(var r in e)r in n||(n[r]=e[r]);return n},i.prototype.Ovc=function(t,n){return void 0===n&&(n=null),this.HBT.getParam(t,n)},i.prototype.oIe=function(t,n){},i.prototype.Tud=function(){return this.vcO(this.Qak)},i.prototype.hTE=function(t){return this.Gig(this.Qak,t)},i.prototype.dLM=function(t){3===this.INl()?this.HBT.execCommand("mceInsertContent",!1,t):this.HBT.insertContent(t)},i.prototype.LiO=function(t,e){if(e===n.qsy.blT||e===n.qsy.ngS||e===n.qsy.IQl)if(3===this.INl())this.HBT.controlManager.setDisabled(t,e===n.qsy.blT),this.HBT.controlManager.setActive(t,e===n.qsy.IQl);else if(this.yoE()in i.Cac&&t in i.Cac[this.yoE()]){var r=i.Cac[this.yoE()][t];r.disabled(e==n.qsy.blT),r.active(e==n.qsy.IQl)}},i.prototype.Adq=function(t,n){var e=this;if("mode"!=t){if("beforeGetOutputHTML"==t)return void this.HBT.on("SaveContent",function(t){r.fbV(e.Qak),t.content=n(e,t.content)});if("contentDom"==t)return void(4===this.INl()?this.HBT.on("init",function(t){r.fbV(e.Qak),n(e)}):this.HBT.onInit.add(function(t){r.fbV(e.Qak),n(e)}));if("elementsPathUpdate"==t)return void r.fbV(this.Qak);"selectionChange"==t&&(3===this.INl()?this.HBT.onNodeChange.add(function(t,o,i){r.fbV(e.Qak),n(e)}):this.HBT.on("NodeChange",function(t){r.fbV(e.Qak),n(e)})),"keyDown"==t&&this.HBT.on("keydown",function(){var t=n;return function(n){r.fbV(this.pluginName),t(this,n.keyCode,n)}})}},i.prototype.cMo=function(t){t.preventDefault()},i.prototype.WgC=function(t){var n=this,e=this.mjd(t.MVi.replace(/^jsplus_/,"").replace(/^jsplus_/,"")),r=this.wrw()+"mce_icons/"+t.GXv+".png";this.pKn(this.HBT,t.plF,r,e,!1,function(){t.oZx(n)}),t.CEk&&this.INl()>3&&this.HBT.addMenuItem(t.plF,{text:e,context:t.CEk,icon:!0,image:r})},i.prototype.pKn=function(t,n,r,o,u,s,l){var f=this,a=function(){var n=t;return function(t){s(n)}}(),c=t,d=function(t,e){f.yoE()in i.Cac||(i.Cac[f.yoE()]={}),i.Cac[f.yoE()][n]=e,u&&window.tinymce.DOM.remove(e.getEl("preview")),null!=s&&e.on("click",a),l&&l(t)},h={text:"",type:"button",icon:!0,classes:"widget btn "+i.DhD()+" btn-"+i.DhD()+"-"+this.yoE(),image:r,label:o,tooltip:o,title:o,id:"btn-"+n+"-"+this.yoE(),onPostRender:function(){d(c,this)}};u&&(h.type=3===this.INl()?"ColorSplitButton":"colorbutton",h.color="#FFFFFF",h.panel={}),3===this.INl()&&u&&!function(){var r=!1;t.onNodeChange.add(function(t,o,i){if(!r){r=!0;var u=this.getElement(),s=u.getElementsByClassName("mce_"+n);if(s.length>0){var l=s[0],f=l.parentNode,c=(f.nextSibling,e.SEi('<div id="content_forecolor" role="button" tabindex="-1" aria-labelledby="content_forecolor_voice" aria-haspopup="true"><table role="presentation" class="mceSplitButton mceSplitButtonEnabled mce_forecolor" cellpadding="0" cellspacing="0" title="Select Text Color"><tbody><tr><td class="mceFirst"></td><td class="mceLast"><a role="button" style="width:10px" tabindex="-1" href="javascript:;" class="mceOpen mce_forecolor" onclick="return false;" onmousedown="return false;" title="Select Text Color"><span class="mceOpen mce_forecolor"><span style="display:none;" class="mceIconOnly" aria-hidden="true">▼</span></span></a></td></tr></tbody></table></div>')),d=c.getElementsByClassName("mceFirst")[0];f.appendChild(c),d.appendChild(l),l.style.marginRight="-1px",l.className=l.className+" mceAction mce_forecolor",c.getElementsByClassName("mceOpen")[0].addEventListener("click",a)}}})}(),t.addButton(n,h)},i}(n.nZI);return i.Cac={},i.Rrq={},t.SWi=i,t}(o,t,n,e,r),i=function(t){function n(t){var n=t.lastIndexOf(".");if(n>-1&&n<t.length-1){var e=t.substr(n+1).toLowerCase();return"jpeg"===e||"jpg"===e||"png"===e||"gif"===e||"bmp"===e}return!1}function e(t,n,e){void 0===n&&(n=!0),void 0===e&&(e=" ");var r=1e3;if(t<r)return t+e+(n?"b":"");var o=["K","M","G","T","P","E","Z","Y"],i=-1;do t/=r,++i;while(t>=r);return t.toFixed(1)+e+o[i]+(n?"b":"")}function r(n,e){void 0===e&&(e=" ");var r=Math.round(n/1e3),o=Math.floor(r/60);r-=60*o;var i=Math.floor(o/60);o-=60*i;var u=r+" "+t.Ykq.sec;return o>0&&(u=o+" "+t.Ykq.min+e+u),i>0&&(u=i+" "+t.Ykq.hour+e+u),u}function o(t){return t.replace(/[\-\[\]\/\{\}\(\)\*\+\?\.\\\^\$\|]/g,"\\$&")}function i(t){for(var n=[],e=1;e<arguments.length;e++)n[e-1]=arguments[e];for(var r=0;r<n.length;r++){var o=n[r];"string"!=typeof o&&(o=o.toString()),t=t.replace("%"+(r+1),o)}return t}function u(t){var n=t.lastIndexOf(".");return n===-1?null:t.substr(n+1)}function s(t){return t.charAt(0).toUpperCase()+t.slice(1)}return t.wbS=n,t.WZq=e,t.GHP=r,t.ClO=o,t.lom=i,t.hNA=u,t.YPz=s,t.Ykq={sec:"sec",min:"min",hours:"hours"},t}(i),u=function(t,n){function e(e,r,o){if(void 0===r&&(r={}),void 0===o&&(o=window.document),r.url||(e===t.mQb&&(r.url="//maxcdn.bootstrapcdn.com/bootstrap/3.2.0/"),e===t.naf&&(r.url="//cdn.rawgit.com/twbs/bootstrap/v4-dev/dist/"),e===t.qTh&&(r.url="//cdnjs.cloudflare.com/ajax/libs/foundation/6.3.0/"),e===t.bLK&&(r.url="//cdnjs.cloudflare.com/ajax/libs/foundation/5.5.0/")),r.url.match(/\/$/)||(r.url+="/"),"undefined"!=typeof r.includeJQuery&&null!==r.includeJQuery||(r.includeJQuery=!0),"undefined"!=typeof r.includeCss&&null!==r.includeCss||(r.includeCss=!0),"undefined"!=typeof r.includeJs&&null!==r.includeJs||(r.includeJs=!1),"undefined"!=typeof r.useWet&&null!==r.useWet||(r.useWet=!1),"undefined"!=typeof r.includeIeFix&&null!==r.includeIeFix||(r.includeIeFix=!0),"undefined"!=typeof r.includeTheme&&null!==r.includeTheme||(r.includeTheme=!0),"undefined"!=typeof r.includeIcons&&null!==r.includeIcons||(r.includeIcons=!0),"undefined"!=typeof r.urlIcons&&null!==r.urlIcons||(r.urlIcons="//cdnjs.cloudflare.com/ajax/libs/foundicons/3.0.0/foundation-icons.css"),window.jsplus_framework=e,e===t.mQb||e===t.naf)e===t.mQb&&r.useWet?(r.includeCss&&n.iKz(r.url+"css/theme.css",o),r.includeJs&&n.jMm(r.url+"js/wet-boew.js",o),r.includeIeFix&&r.includeCss&&n.iKz(r.url+"css/ie8-theme.css",o),r.includeIeFix&&r.includeJs&&n.jMm(r.url+"js/ie8-wet-boew2.js",o)):(r.includeCss&&n.iKz(r.url+"css/bootstrap.min.css",o),r.includeJs&&n.jMm(r.url+"js/bootstrap.min.js",o),e===t.mQb&&(r.includeTheme&&n.iKz(r.url+"css/bootstrap-theme.min.css",o),r.includeIeFix&&r.includeJs&&(n.jMm("//oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js",o),n.jMm("//oss.maxcdn.com/respond/1.4.2/respond.min.js",o))));else if(e===t.qTh)r.includeJs&&r.includeJQuery&&n.jMm("//code.jquery.com/jquery-1.10.1.min.js",o),r.includeCss&&n.iKz(r.url+"css/foundation.min.css",o),r.includeJs&&(n.jMm(r.url+"js/foundation.min.js",o),n.jMm(r.url+"js/vendor/modernizr.js",o));else{if(e!==t.bLK)throw new Error("Framework is not supported: "+e);r.includeJs&&r.includeJQuery&&n.jMm("//cdn.jsdelivr.net/jquery/2.2.2/jquery.min.js",o),r.includeCss&&n.iKz(r.url+"css/foundation.min.css",o),r.includeJs&&n.jMm(r.url+"js/foundation.min.js",o),r.includeCss&&r.includeIcons&&n.iKz(r.urlIcons,o)}}function r(n){for(var e=q(n),r=[],o=0,i=e;o<i.length;o++){for(var u=i[o],s=0;s<=12;s++)n===t.mQb||n===t.naf?(n===t.mQb?r.push("col-"+u+"-offset-"+s):r.push("offset-"+u+"-"+s),s>0&&r.push("col-"+u+"-"+s)):n!==t.qTh&&n!==t.bLK||r.push(u+"-offset-"+s);n===t.naf||(n===t.mQb?(r.push("visible-"+u),r.push("hidden-"+u)):n!==t.qTh&&n!==t.bLK||(r.push("show-for-"+u+"-only"),r.push("show-for-"+u+"-up"),r.push("hide-for-"+u+"-only"),r.push("hide-for-"+u+"-up")))}return r}function o(){return[t.mQb,t.naf,t.naf,t.bLK]}function i(n){return n===t.qTh||n===t.bLK}function u(n){return n===t.mQb||n===t.naf}function s(e,r){if(r===t.mQb||r===t.naf)return null!=e&&1===e.nodeType&&"DIV"===e.nodeName&&(n.UKv(e,"container")||n.UKv(e,"container-fluid"));if(r===t.qTh||t.bLK)return!1;throw new Error("Framework is not supported: "+r)}function l(t){return null!=t&&1===t.nodeType&&"DIV"===t.nodeName&&n.UKv(t,f())}function f(){return"row"}function a(t,n){for(var e=t;0!==n;)if(n<0){if(e=e.previousSibling,null==e)return null;l(e)&&n++}else{if(e=e.nextSibling,null==e)return null;l(e)&&n--}return e}function c(t){return null==h(t)}function d(t){return null==m(t)}function h(t,n){if(void 0===n&&(n=1),n<0)throw new Error("Incorrect `numberBack` parameter value:"+n);return a(t,-n)}function m(t,n){if(void 0===n&&(n=1),n<0)throw new Error("Incorrect `numberNext` parameter value: "+n);return a(t,n)}function p(t,n){if(null!=n&&0!==n){var e=a(t,n);null!=e&&(n<0?t.parentNode.insertBefore(t,e):t.parentNode.insertBefore(t,e.nextSibling))}}function v(t,n){if(void 0===n&&(n=1),n<0)throw new Error("Incorrect `upCount` parameter value: "+n);p(t,n)}function g(t,n){if(void 0===n&&(n=1),n<0)throw new Error("Incorrect `downCount` parameter value: "+n);p(t,n)}function w(t,n){for(var e=t.children,r=[],o=0;o<e.length;o++)if(y(e[o],n))r.push(e[o]);else if(!s(e[o],n)&&!l(e[o]))for(var i=w(e[o],n),u=0,f=i;u<f.length;u++){var a=f[u];r.push(a)}return r}function b(t,n){for(var e=t;null!=e;){if(e=e.parentNode,l(e))return e;if(y(e,n)||s(e,n))return null}return null}function y(e,r){if(null==e||1!==e.nodeType||"DIV"!==e.nodeName)return!1;if(r===t.naf){for(var o=n.Ous(e),i=0,u=o;i<u.length;i++){var s=u[i],l=s.match(/^col-(\d{1,2})$/i);return null!=l&&(1===l[1].length||"1"===l[1].substr(0,1))||(l=s.match(/^col-(sm|md|lg|xl)-(\d{1,2})$/i),null!=l&&(1===l[2].length||"1"===l[2].substr(0,1)))}return!1}if(r===t.mQb){for(var o=n.Ous(e),f=0,a=o;f<a.length;f++){var s=a[f],l=s.match(/^col-(xs|sm|md|lg|xl)-(\d{1,2})$/i);return null!=l&&(1===l[2].length||"1"===l[2].substr(0,1))}return!1}if(r===t.qTh||r===t.bLK)return n.UKv(e,"columns");throw new Error("Framework is not supported: "+r)}function x(t,n,e){for(var r=t;0!==n;)if(n<0){if(r=r.previousSibling,null==r)return null;y(r,e)&&n++}else{if(r=r.nextSibling,null==r)return null;y(r,e)&&n--}return r}function O(t,n){return null==_(t,n)}function T(t,n){return null==E(t,n)}function _(t,n,e){if(void 0===e&&(e=1),e<0)throw new Error("Incorrect `numberBack` parameter value: "+e);return x(t,-e,n)}function E(t,n,e){if(void 0===e&&(e=1),e<0)throw new Error("Incorrect `numberNext` parameter value: "+e);return x(t,e,n)}function j(t,n,e){if(null!=n&&0!==n){var r=x(t,n,e);null!=r&&(n<0?t.parentNode.insertBefore(t,r):t.parentNode.insertBefore(t,r.nextSibling))}}function k(t,n,e){if(void 0===e&&(e=1),e<0)throw new Error("Incorrect `leftCount` parameter value:"+e);j(t,-e,n)}function W(t,n,e){if(void 0===e&&(e=1),e<0)throw new Error("Incorrect `rightCount` parameter value:"+e);j(t,e,n)}function I(t,e,r,o){for(var i=n.Ous(t),u=0,s=i;u<s.length;u++){var l=s[u];if(l.indexOf(e)>-1){var f=l.substr(l.indexOf(e)+e.length),a=parseInt(f);if(NaN!==a&&a>=r&&a<=o)return a}}return-1}function q(n){if(n===t.naf)return["","sm","md","lg","xl"];if(n===t.mQb)return["xs","sm","md","lg"];if(n===t.qTh||n===t.bLK)return["small","medium","large","xlarge","xxlarge"];throw new Error("Framework is not supported: "+n)}function N(n){if(n===t.naf||n===t.mQb)return"col-FORMAT-XX";if(n===t.qTh||n===t.bLK)return"FORMAT-XX";throw new Error("Framework is not supported: "+n)}function C(n,e,r){var o=null==e?"":e.toString();return r===t.naf&&""===n?"col-"+o:N(r).replace("FORMAT",n).replace("XX",o)}function Q(t,n){return C(t,null,n)}function B(t,n,e){if(q(e).indexOf(n)<0)throw new Error("Incorrect framework format: "+n);return I(t,Q(n,e),1,12)}function A(n){if(n===t.naf)return"offset-FORMAT-XX";if(n===t.mQb)return"col-FORMAT-offset-XX";if(n===t.qTh||n===t.bLK)return"FORMAT-offset-XX";throw new Error("Framework is not supported: "+n)}function H(n,e,r){return r===t.naf&&""===n?"offset-"+e:A(r).replace("FORMAT",n).replace("XX",null==e?"":e.toString())}function F(t,n){return H(t,null,n)}function M(t,n,e){if(q(e).indexOf(n)<0)throw new Error("Incorrect framework format: "+n);return I(t,F(n,e),0,12)}function S(n){if(n===t.naf)return"col-12";if(n===t.mQb)return"col-xs-12";if(n===t.qTh||n===t.bLK)return"small-12 columns";throw new Error("Framework is not supported: "+n)}function L(n){if(n===t.naf||n===t.mQb)return"";if(n===t.qTh||n===t.bLK)return"columns";throw new Error("Framework is not supported: "+n)}function K(e,r){if(r===t.naf)return[!0,!0,!0,!0,!0];if(r===t.mQb){for(var o=[!0,!0,!0,!0],i=n.Ous(e),u=0,s=i;u<s.length;u++){var l=s[u];l.indexOf("hidden-xs")>=0&&(o[0]=!1),l.indexOf("hidden-sm")>=0&&(o[1]=!1),l.indexOf("hidden-md")>=0&&(o[2]=!1),l.indexOf("hidden-lg")>=0&&(o[3]=!1),l.indexOf("visible-xs")>=0&&(o[1]=!1,o[2]=!1,o[3]=!1),l.indexOf("visible-sm")>=0&&(o[0]=!1,o[2]=!1,o[3]=!1),l.indexOf("visible-md")>=0&&(o[0]=!1,o[1]=!1,o[3]=!1),l.indexOf("visible-lg")>=0&&(o[0]=!1,o[1]=!1,o[2]=!1)}return o}if(r===t.qTh||r===t.bLK){var o=[!0,!0,!0,!0,!0],i=n.Ous(e);return i.indexOf("show-for-small-only")>=0&&(o[1]=!1,o[2]=!1,o[3]=!1,o[4]=!1),i.indexOf("show-for-medium-only")>=0&&(o[0]=!1,o[2]=!1,o[3]=!1,o[4]=!1),i.indexOf("show-for-large-only")>=0&&(o[0]=!1,o[1]=!1,o[3]=!1,o[4]=!1),i.indexOf("show-for-xlarge-only")>=0&&(o[0]=!1,o[1]=!1,o[2]=!1,o[4]=!1),i.indexOf("show-for-xxlarge-only")>=0&&(o[0]=!1,o[1]=!1,o[2]=!1,o[3]=!1),i.indexOf("show-for-medium-up")>=0&&(o[0]=!1),i.indexOf("show-for-large-up")>=0&&(o[0]=!1,o[1]=!1),i.indexOf("show-for-xlarge-up")>=0&&(o[0]=!1,o[1]=!1,o[2]=!1),i.indexOf("show-for-xxlarge-up")>=0&&(o[0]=!1,o[1]=!1,o[2]=!1,o[3]=!1),i.indexOf("hide-for-small-only")>=0&&(o[0]=!1),i.indexOf("hide-for-medium-only")>=0&&(o[1]=!1),i.indexOf("hide-for-large-only")>=0&&(o[2]=!1),i.indexOf("hide-for-xlarge-only")>=0&&(o[3]=!1),i.indexOf("hide-for-xxlarge-only")>=0&&(o[4]=!1),i.indexOf("hide-for-medium-up")>=0&&(o[1]=!1,o[2]=!1,o[3]=!1,o[4]=!1),i.indexOf("hide-for-large-up")>=0&&(o[2]=!1,o[3]=!1,o[4]=!1),i.indexOf("hide-for-xlarge-up")>=0&&(o[3]=!1,o[4]=!1),i.indexOf("hide-for-xxlarge-up")>=0&&(o[4]=!1),o}throw new Error("Framework is not supported: "+r)}function z(n){return t.Ykq["format_"+n]}t.SMm="",t.naf="b4",t.mQb="b3",t.qTh="f5",t.bLK="f6";var J=function(){function t(t,n){this.QPS=null,this.dfF=t,this.zur=n}return t.prototype.AjO=function(){if(null==this.QPS){this.QPS=[];for(var t=w(this.dfF,this.zur),n=0,e=t;n<e.length;n++){var r=e[n];this.QPS.push(new D(r,this.zur))}}return this.QPS},t.prototype.JLa=function(t){for(var n=this.AjO(),e=0,r=0,o=n;r<o.length;r++){var i=o[r];i.nJL(t)&&(e+=i.ZkP(t)+i.qNA(t))}return e},t}();t.EPW=J;var D=function(){function e(t,n){this.KTB=null,this.dfF=t,this.zur=n,this.OVD=q(this.zur),this.WWm=[[],[]];for(var e=0,r=this.OVD;e<r.length;e++){var o=r[e];this.WWm[0].push(B(t,o,n))}for(var i=0,u=this.OVD;i<u.length;i++){var o=u[i];this.WWm[1].push(M(t,o,n))}this.WWm.push(K(t,this.zur)),this.Ebg()}return e.prototype.Ycf=function(){return this.zur},e.prototype.FCh=function(){if(null==this.KTB){var t=b(this.dfF,this.zur);null!=t&&(this.KTB=new J(t,this.zur))}return this.KTB},e.prototype.Ebg=function(){this.CwI=[];for(var t=0;t<this.WWm.length;t++){for(var n=[],e=0;e<this.WWm[0].length;e++)n.push(this.WWm[t][e]);this.CwI.push(n)}},e.prototype.ujU=function(){for(var e=n.Ous(this.dfF),o=r(this.zur),i=e.length-1;i>=0;i--)o.indexOf(e[i])>-1&&e.splice(i,1);for(var u=0,s=q(this.zur);u<s.length;u++){var l=s[u],f=this.bBS(l);f>-1&&(this.zur===t.naf&&""===l?e.push("col-"+f):e.push("col-"+l+"-"+f));var a=this.OtZ(l);a>-1&&(this.zur===t.naf?""===l?e.push("offset-"+f):e.push("offset-"+l+"-"+a):this.zur===t.mQb?e.push("col-"+l+"-offset-"+a):this.zur!==t.qTh&&this.zur!==t.bLK||e.push(l+"-offset-"+a)),this.zur===t.naf||this.nJL(l)||e.push("hidden-"+l)}n.NrX(this.dfF,e),this.Ebg()},e.prototype.RfR=function(n,e){if(this.zur!==t.naf){var r=q(this.zur).indexOf(n);if(r<0)throw new Error("Incorrect framework format: "+n);this.WWm[2][r]=e}},e.prototype.iag=function(){for(var t=0;t<this.WWm.length;t++)for(var n=0;n<this.WWm[t].length;n++)if(this.WWm[t][n]!==this.CwI[t][n])return!0;return!1},e.prototype.hfy=function(){for(var t=void 0;t<=this.WWm[2].length;t++)if(this.WWm[2][t]!==this.CwI[2][t])return!0;return!1},e.prototype.VEn=function(t,n){var e=q(this.zur).indexOf(t);if(e<0)throw new Error("Incorrect framework format: "+t);this.WWm[0][e]=n},e.prototype.bBS=function(t){var n=q(this.zur).indexOf(t);if(n<0)throw new Error("Incorrect framework format: "+t);return this.WWm[0][n]},e.prototype.SfA=function(){return this.WWm[0]},e.prototype.Qmc=function(t,n){var e=q(this.zur).indexOf(t);if(e<0)throw new Error("Incorrect framework format: "+t);this.WWm[1][e]=n},e.prototype.OtZ=function(t){var n=q(this.zur).indexOf(t);if(n<0)throw new Error("Incorrect framework format: "+t);return this.WWm[1][n]},e.prototype.ZkP=function(t){var n=q(this.zur).indexOf(t);if(n<0)throw new Error("Incorrect framework format: "+t);var e=this.WWm[1][n];if(e>-1)return e;for(var r=n-1;r>=0;r--)if(this.WWm[1][r]!==-1)return this.WWm[1][r];return 0},e.prototype.qNA=function(t){var n=q(this.zur).indexOf(t);if(n<0)throw new Error("Incorrect framework format: "+t);var e=this.WWm[0][n];if(e>-1)return e;for(var r=n-1;r>=0;r--)if(this.WWm[0][r]!==-1)return this.WWm[0][r];return 12},e.prototype.nJL=function(t){var n=q(this.zur).indexOf(t);if(n<0)throw new Error("Incorrect framework format: "+t);return this.WWm[2][n]},e}();return t.wsq=D,t.pFh=e,t.Uub=r,t.vit=o,t.JPT=i,t.SDS=u,t.ols=s,t.rtl=l,t.pME=f,t.zdZ=a,t.yiy=c,t.wJN=d,t.hWM=h,t.Glt=m,t.hSL=p,t.Zjy=v,t.xZF=g,t.DTu=w,t.sSf=b,t.pFG=y,t.NOd=x,t.ebj=O,t.qSN=T,t.BlO=_,t.Mqd=E,t.qTp=j,t.fPp=k,t.Ajm=W,t.lHd=q,t.nUt=N,t.vEB=C,t.lUG=Q,t.VVH=B,t.PbD=A,t.VAD=H,t.AOW=F,t.JWc=M,t.nRI=S,t.vwo=L,t.FmT=K,t.nVR=z,t.Ykq={format_:"Default",format_xs:"X-Small",format_sm:"Small",format_md:"Medium",format_lg:"Large",format_xl:"X-Large",format_small:"Small",format_medium:"Medium",format_large:"Large",format_xlarge:"X-Large",format_xxlarge:"XX-Large"},t}(u,n),s=function(t,n,e,r,o,i){function u(t){return t.Ycf(i.SMm)}function s(t){t.WgC({plF:"jsplus_show_blocks",GXv:"jsplus_show_blocks",MVi:"tooltip",oZx:a,QJn:u(t)!==i.SMm}),t.Adq("mode",p),t.Adq("contentDom",l),t.Adq("beforeGetOutputHTML",g)}function l(t){r.iKz(f(t),t.zpq()),t.hTE("enabled_by_default")===!0&&h(t)}function f(t){return t.wrw()+"plugin-show-blocks-style"+(t.hTE("add_paddings")===!0?"":"-no-paddings")+".css"}function a(t){t.Csy()&&(c(t)?m(t):h(t))}function c(t){return"jsplus_show_blocks_enabled"in t.HvA||(t.HvA.jsplus_show_blocks_enabled=t.hTE("enabled_by_default")),t.HvA.jsplus_show_blocks_enabled}function d(t){return r.unz(t.zpq())}function h(t){t.xWK()||d(t).setAttribute("data-show-blocks-enabled",u(t)),v(t,e.qsy.IQl),t.HvA.jsplus_show_blocks_enabled=!0}function m(t){t.xWK()||d(t).removeAttribute("data-show-blocks-enabled"),v(t,e.qsy.ngS),t.HvA.jsplus_show_blocks_enabled=!1}function p(t){var n;n=t.Csy()?c(t)?e.qsy.IQl:e.qsy.ngS:e.qsy.blT,v(t,n)}function v(t,n){t.LiO("jsplus_show_blocks",n)}function g(t,n){return n.replace(RegExp('data-show-blocks-enabled=".*?"',"g"),"").replace(RegExp('<style type="text/css">'+o.ClO(f(t))+"</style>","g"),"")}var w={tooltip:"Show blocks"};return n.SWi.QwZ({plF:"jsplus_show_blocks",hJy:[],Ykq:w,miT:s,JtH:{enabled_by_default:!0,add_paddings:!0}}),t}(s,o,t,n,i,u)}();