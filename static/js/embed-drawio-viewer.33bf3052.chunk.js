(this["webpackJsonpdoc-editor-light"]=this["webpackJsonpdoc-editor-light"]||[]).push([[2],{374:function(n,t){},375:function(n,t){},387:function(n,t){},390:function(n,t){},423:function(n,t){},477:function(n,t,e){"use strict";e.r(t),e.d(t,"stringToXml",(function(){return r.h})),e.d(t,"xmlToString",(function(){return r.i})),e.d(t,"DiagramViewer",(function(){return c})),e.d(t,"convertSVGToBase64",(function(){return l})),e.d(t,"downloadSVG",(function(){return a})),e.d(t,"stringToSvg",(function(){return o})),e.d(t,"svgToString",(function(){return i}));var r=e(361),i=function(n){if(!n)return null;try{return(new XMLSerializer).serializeToString(n)}catch(n){return null}},o=function(n){try{return(new DOMParser).parseFromString(n,"image/svg+xml").firstChild}catch(n){return null}},u={},c=(u[r.c.prototype.defaultThemeName]=Object(r.h)(r.a).documentElement,function(n){var t=this;this.xml=n,this.renderSVG=function(n,e,i){void 0===e&&(e=1),void 0===i&&(i=1);var o=t.graph.getModel();return t.xml&&new r.d(t.xml).decode(t.xml.documentElement,o),t.graph.getSvg(n,e,i)},n=document.createElement("div");this.graph=new r.c(n,null,null,null,u)}),l=function(n){return n="string"==typeof n?Object(r.h)(n):n,n=new c(n).renderSVG(null,1,1),(n=i(n))?"data:image/svg+xml;base64,"+btoa(n):null},a=function(n,t){return void 0===t&&(t="image.jpg"),new Promise((function(e){var r,i=l(n);i?((r=new Image).crossOrigin="anonymous",r.onload=function(){var n=document.createElement("canvas"),i=window.devicePixelRatio||1,o=(n.width=r.width*i,n.height=r.height*i,n.getContext("2d"));o.scale(i,i),o.fillStyle="#fff",o.fillRect(0,0,n.width,n.height),o.drawImage(r,0,0),e((function(){var e=document.createElement("a");e.download=t,e.href=n.toDataURL("image/jpeg"),e.click()}))},r.src=i):e(null)}))};e(378),e(379)}}]);