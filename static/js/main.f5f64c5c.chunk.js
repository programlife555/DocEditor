(this["webpackJsonpdoc-editor-light"]=this["webpackJsonpdoc-editor-light"]||[]).push([[0],{114:function(e,t,n){},140:function(e,t,n){},153:function(e,t,n){},166:function(e,t,n){},176:function(e,t,n){},177:function(e,t,n){},178:function(e,t,n){},179:function(e,t,n){},275:function(e,t,n){},276:function(e,t,n){},277:function(e,t,n){},278:function(e,t,n){},279:function(e,t,n){},280:function(e,t,n){"use strict";function r(){var e=this;Object(m.a)(this,r),this.plugins=void 0,this.commands=void 0,this.add=function(){var t;(t=e.plugins).push.apply(t,arguments)},this.getCommands=function(){return e.commands},this.apply=function(){var t=[],n=[],r=[],i=[];return e.plugins.sort((function(e,t){return(t.priority||0)-(e.priority||0)})),e.plugins.forEach((function(c){c.type===v.BLOCK?t.push(c):c.type===v.INLINE&&n.push(c),c.command&&j(c.key,c.command,e.commands),c.isVoid&&r.push(c.key),c.onKeyDown&&i.push(c)})),{renderElement:function(e){var n,r={props:e,classList:[],element:e.element,children:e.children},i=Object(f.a)(t);try{for(i.s();!(n=i.n()).done;){var c=n.value;if(c.match(e)&&c.render){r.children=Object(x.jsxs)(x.Fragment,{children:[e.children,Object(x.jsx)("div",{contentEditable:!1,children:c.render(r)})]});break}}}catch(e){i.e(e)}finally{i.f()}for(var o=t.length-1;0<=o;o--){var a=t[o];a.match(e)&&a.renderLine&&(r.children=a.renderLine(r))}return Object(x.jsx)("div",Object(b.a)(Object(b.a)({},e.attributes),{},{className:r.classList.join(" "),children:r.children}))},renderLeaf:function(e){var t,r={props:e,element:e.text,classList:[],children:e.children},i=Object(f.a)(n);try{for(i.s();!(t=i.n()).done;){var c=t.value;c.match(e)&&c.render&&(r.children=c.render(r))}}catch(e){i.e(e)}finally{i.f()}return Object(x.jsx)("span",Object(b.a)(Object(b.a)({},e.attributes),{},{className:r.classList.join(" "),children:r.children}))},onKeyDown:function(e){if(!e.nativeEvent.isComposing){var t,n=Object(f.a)(i);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(r.onKeyDown&&r.onKeyDown(e)===O.STOP)break}}catch(e){n.e(e)}finally{n.f()}}},withVoidElements:function(e){return e.isVoid=function(e){var t,n=Object(f.a)(r);try{for(n.s();!(t=n.n()).done;)if(e[t.value])return!0}catch(e){n.e(e)}finally{n.f()}return!1},e},commands:e.commands}};for(var t=arguments.length,n=new Array(t),i=0;i<t;i++)n[i]=arguments[i];this.plugins=n,this.commands={}}function i(e){return null==e}n.r(t);t=n(14);var c=n.n(t),o=n(2),a=(n(153),n(91),n(281),n(282),n(161),n(163),n(0)),l=n(1),d=n(20),s=n(305),u=n(146),h=n(141),b=n(25),f=n(9),m=n(40),j=function(e,t,n){n[e]=t},p=function(e,t,n,r){return t[n]&&t[n](e,n,r)},x=n(3),v={BLOCK:"BLOCK",INLINE:"INLINE"},O={STOP:!0},g=n(21),y=(n(166),Object.prototype.toString);function k(e){return"[object Object]"===y.call(e)}function N(e,t){return l.a.isBlock(e,t)}function w(e){return l.h.isText(e)}var K=n(142),C=function(e){return(e=R(e))&&2<=e.path.length},I=function(e,t,n,r){t=t.split(".");var c=(t=Object(K.a)(t))[0],o=t.slice(1);if(!(t=R(e,{at:r,key:c})))return!1;for(var a=t.block[c],l=0,d=o.length;l<d;++l){if(!k(a))return!1;a=a[o[l]]}return!!i(n)||a===n},E=function(e){return!l.a.isEditor(e)&&l.b.isElement(e)},L=function(e){return!(e=1<arguments.length&&void 0!==arguments[1]?arguments[1]:e.selection)||l.g.isCollapsed(e)},D=function(e,t){return t=l.a.start(e,t),L(e,e.selection)&&l.f.equals(t,e.selection.anchor)},S=function(e){e=e.key;for(var t=arguments.length,n=new Array(1<t?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];return-1<n.indexOf(e)};function B(e,t,n){t=1<arguments.length&&void 0!==t?t:"last";var r=(n=2<arguments.length?n:void 0).at,i=n.wrapKey,c=n.itemKey;i=n.wrapNode||R(e,{at:r,key:i}),n=n.itemNode||R(e,{at:r,key:c});if(i&&n&&i.block.children.length)return e=i.block.children,"last"===t?e[e.length-1]===n.block:"first"===t?e[0]===n.block:e[0]===n.block||e[e.length-1]===n.block}function P(e,t){var n=t.at,r=t.wrapKey,i=t.itemKey;r=t.wrapNode||R(e,{at:n,key:r}),t=t.itemNode||R(e,{at:n,key:i});return r&&t&&r.block.children.length&&-1<r.block.children.indexOf(t.block)}function T(){return{key:"paragraph",type:v.BLOCK,priority:11,match:function(){return!0},renderLine:function(e){return Object(x.jsx)("div",{className:"doc-line",children:e.children})},command:function(e){if(e.selection){for(var t=[],n=l.a.fragment(e,e.selection),r=[Object(o.a)(n,1)[0]];r.length;){var i=r.shift();i&&(c=i.children,"[object Array]"===y.call(c)&&r.push.apply(r,Object(g.a)(i.children)),i.text&&(c=Object.keys(i),t.push.apply(t,Object(g.a)(q(c,["text"]).list))))}H(e,t)}var c}}}function M(e){var t=Object(d.f)(),n=Object(d.d)(),r=Object(a.useRef)(!1),i=Object(a.useRef)(null),c=Object(a.useState)(!1),u=(c=Object(o.a)(c,2))[0],h=c[1],b=(c=Object(a.useState)(!1),(c=Object(o.a)(c,2))[0]),f=c[1],m=(Object(a.useEffect)((function(){var e,t=i.current;t&&(b&&!u?(e=Le())&&(t.style.opacity="1",t.style.top="".concat(e.top+window.pageYOffset-t.offsetHeight-10,"px"),t.style.left="".concat(e.left+window.pageXOffset-t.offsetWidth/2+e.width/2,"px")):Ee(t))}),[u,b,t]),Object(a.useEffect)((function(){var e,t;if(i.current)return e=function(){r.current||h(!1)},t=function(){r.current||h(!0)},document.addEventListener("mouseup",e),document.addEventListener("mousedown",t),function(){document.removeEventListener("mouseup",e),document.removeEventListener("mousedown",t)}}),[]),Object(a.useEffect)((function(){t.selection&&n&&!L(t)&&""!==l.a.string(t,t.selection)?f(!0):f(!1)}),[t,t.selection,n]),Object(s.a)((function(n,c){function a(){i.current&&Ee(i.current),W(t)}n=n.split(".");var l=(n=Object(o.a)(n,2))[0],d=(n=n[1],{left:0,top:0});(l=(i.current&&(d.top=i.current.offsetTop+i.current.offsetHeight/2,d.left=i.current.offsetLeft+i.current.offsetWidth/2),p(t,e.commands,l,{extraKey:n,event:c,position:d})))?(r.current=!0,l.then((function(){r.current=!1,a()}))):a()})));c=Object(a.useMemo)((function(){return Object(x.jsx)(ie.a,{className:"menu-toolbar-menu-container",onClickMenuItem:m,selectable:!1,onMouseDown:function(e){e.preventDefault(),e.stopPropagation()},mode:"vertical",children:Se})}),[m]);return e.isRender?null:Object(x.jsx)(De,{children:Object(x.jsx)("div",{ref:i,className:"hover-menu-container",children:c})})}function A(e){var t=Object(Je.a)(),n=(t=Object(o.a)(t,1)[0],i(e.top)?0:e.top+30),r=i(e.left)?0:e.left-150,c=e.top||e.left?"absolute":void 0;return Object(x.jsx)("div",{className:"hyper-link-menu",style:{left:r,top:n,position:c},children:Object(x.jsxs)(Re.a,{initialValues:e.config,form:t,size:"small",labelCol:{span:7,offset:0},wrapperCol:{span:17,offset:0},labelAlign:"left",onSubmit:function(t){return e.onConfirm&&e.onConfirm(t)},children:[Object(x.jsx)(Re.a.Item,{label:"\u94fe\u63a5\u5730\u5740",field:"href",children:Object(x.jsx)(qe.a,{placeholder:"Enter href"})}),Object(x.jsxs)(Re.a.Item,{className:"hyper-link-menu-row",wrapperCol:{span:24,offset:0},children:[Object(x.jsx)(Re.a.Item,{label:"\u65b0\u9875\u9762\u6253\u5f00",field:"blank",children:Object(x.jsx)(Ve.a,{defaultChecked:e.config.blank})}),Object(x.jsx)(Re.a.Item,{className:"hyper-link-menu-submit",children:Object(x.jsx)(We.a,{htmlType:"submit",type:"primary",children:"\u786e\u5b9a"})})]})]})})}var R=function(e){var t=(r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}).at,n=r.key,r=r.above;return(t=l.a.above(e,{match:function(t){return l.a.isBlock(e,t)&&(!n||V(t,n))},at:t,mode:r?"highest":"lowest"}))?{block:(r=Object(o.a)(t,2))[0],path:r[1]}:null},q=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:[],n={};return e.forEach((function(e){return-1===t.indexOf(e)&&(n[e]=void 0)})),{record:n,list:Object.keys(n)}},V=function(e,t){return E(e)&&!!e[t]},W=function(e,t,n){d.b.focus(e),t?(l.i.select(e,t),l.i.collapse(e,{edge:n||"end"})):l.i.collapse(e,{edge:"focus"})},J=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},r=n.at,i=n.node,c=n.key;i?l.i.setNodes(e,t,{match:function(e){return e===i}}):l.i.setNodes(e,t,{at:r,match:function(t){return N(e,t)&&(!c||V(t,c))}})},F=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},r=n.at,i=n.node,c=n.key;i?l.i.unsetNodes(e,t,{match:function(e){return e===i}}):l.i.unsetNodes(e,t,{at:r,match:function(t){return N(e,t)&&(!c||V(t,c))}})},G=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},r=n.at,i=n.node;i?l.i.setNodes(e,t,{match:function(e){return e===i},split:!0}):l.i.setNodes(e,t,{match:w,split:!0,at:r})},H=function(e,t){var n=2<arguments.length&&void 0!==arguments[2]?arguments[2]:{},r=n.at,i=n.node;i?l.i.unsetNodes(e,t,{match:function(e){return e===i}}):l.i.unsetNodes(e,t,{match:w,split:!0,at:r})},Z=function(e,t,n){var r=(3<arguments.length&&void 0!==arguments[3]?arguments[3]:{}).at;t=Object(b.a)(Object(b.a)({},t),{},{children:[]});l.i.wrapNodes(e,t,{match:function(t){return N(e,t)},at:r}),J(e,n,{at:r})},z=function(e,t){F(e,[t.itemKey],{key:t.itemKey}),l.i.unwrapNodes(e,{match:function(e){return V(e,t.wrapKey)},split:!0})},X=function(e,t,n,r){t&&!n?l.i.unwrapNodes(e,{match:function(e){return e===t.block},split:!0}):!t&&n&&F(e,[r],{node:n.block})},Y=(n(114),n(285)),$=n(286),_=n(287),Q=n(288),U=n(289),ee=n(290),te=n(291),ne=n(292),re=n(293),ie=n(310),ce=n(53),oe=function(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];return t.filter((function(e){return"[object String]"===y.call(e)})).join(" ")},ae=function(e){var t=Object(a.useState)(!1),n=(t=Object(o.a)(t,2))[0],r=t[1],i=Object(x.jsxs)(ie.a,{onClickMenuItem:function(t){r(!1);t=t.split(".");var n=(t=Object(o.a)(t,2))[0],i=(t=t[1],d.b.findPath(e.editor,e.element));W(e.editor,i),p(e.editor,e.commands,n,{extraKey:t,path:i})},className:"doc-menu-popup",children:[Object(x.jsxs)(ie.a.Item,{children:[Object(x.jsx)(Y.a,{}),"\u4e00\u7ea7\u6807\u9898"]},"heading.h1"),Object(x.jsxs)(ie.a.Item,{children:[Object(x.jsx)($.a,{}),"\u4e8c\u7ea7\u6807\u9898"]},"heading.h2"),Object(x.jsxs)(ie.a.Item,{children:[Object(x.jsx)(_.a,{}),"\u4e09\u7ea7\u6807\u9898"]},"heading.h3"),Object(x.jsxs)(ie.a.Item,{children:[Object(x.jsx)(Q.a,{}),"\u5757\u7ea7\u5f15\u7528"]},"quote-block"),Object(x.jsxs)(ie.a.Item,{children:[Object(x.jsx)(U.a,{}),"\u9ad8\u4eae\u5757"]},"highlight-block"),Object(x.jsxs)(ie.a.Item,{children:[Object(x.jsx)(ee.a,{}),"\u6709\u5e8f\u5217\u8868"]},"ordered-list"),Object(x.jsxs)(ie.a.Item,{children:[Object(x.jsx)(te.a,{}),"\u65e0\u5e8f\u5217\u8868"]},"unordered-list"),Object(x.jsxs)(ie.a.Item,{children:[Object(x.jsx)(ne.a,{}),"\u5206\u5272\u7ebf"]},"dividing-line")]});return Object(x.jsx)(ce.b,{popup:function(){return Object(x.jsx)(ce.b,{popup:function(){return i},position:"left",popupVisible:n,onVisibleChange:r,children:Object(x.jsx)("span",{className:"doc-icon-plus",onMouseDown:function(e){return e.preventDefault()},children:Object(x.jsx)(re.a,{})})})},position:"left",popupAlign:{left:e.offset},mouseLeaveDelay:200,mouseEnterDelay:200,children:Object(x.jsx)("div",{className:oe(n&&"doc-line-hover"),children:e.children})})},le=["quote-block","ordered-list","unordered-list","dividing-line","highlight-block"],de={"quote-block-item":12,"highlight-block-item":8},se=n(10),ue=(n(176),n(313)),he="Backspace",be="Enter",fe=" ",me="Tab",je="heading",pe=function(e,t,n){k(n)&&n.path&&(I(e,"".concat(je,".type"),n.extraKey)?F(e,[je],{at:n.path}):J(e,Object(se.a)({},t,{type:n.extraKey,id:Object(ue.a)().slice(0,8)}),{at:n.path}))},xe="bold",ve=(t=n(294),n(295)),Oe=n(296),ge=n(297),ye=n(298),ke=n(299),Ne=n(300),we=n(301),Ke=n(302),Ce=n(303),Ie=n(304),Ee=function(e){e.style.opacity="0",e.style.left="-1000px",e.style.top="-1000px"},Le=function(){var e=window.getSelection();return e&&0<e.rangeCount?e.getRangeAt(0).getBoundingClientRect():null},De=function(e){return e=e.children,"object"==typeof document?c.a.createPortal(e,document.body):null},Se=Object(x.jsxs)(x.Fragment,{children:[Object(x.jsx)(ie.a.Item,{children:Object(x.jsx)(t.a,{})},"paragraph"),Object(x.jsx)(ie.a.Item,{children:Object(x.jsx)(ve.a,{})},"bold"),Object(x.jsx)(ie.a.Item,{children:Object(x.jsx)(Oe.a,{})},"italic"),Object(x.jsx)(ie.a.Item,{children:Object(x.jsx)(ge.a,{})},"under-line"),Object(x.jsx)(ie.a.Item,{children:Object(x.jsx)(ye.a,{})},"strike-through"),Object(x.jsx)(ie.a.Item,{children:Object(x.jsx)(ke.a,{})},"inline-code"),Object(x.jsx)(ie.a.Item,{children:Object(x.jsx)(Ne.a,{})},"link"),Object(x.jsxs)(ie.a.SubMenu,{title:Object(x.jsx)(we.a,{}),popup:!0,triggerProps:{trigger:"click",position:"bottom"},children:[Object(x.jsx)(ie.a.Item,{children:Object(x.jsx)("div",{className:"align-menu-center",children:Object(x.jsx)(we.a,{})})},"align.left"),Object(x.jsx)(ie.a.Item,{children:Object(x.jsx)("div",{className:"align-menu-center",children:Object(x.jsx)(Ke.a,{})})},"align.center"),Object(x.jsx)(ie.a.Item,{children:Object(x.jsx)("div",{className:"align-menu-center",children:Object(x.jsx)(Ce.a,{})})},"align.right"),Object(x.jsx)(ie.a.Item,{children:Object(x.jsx)("div",{className:"align-menu-center",children:Object(x.jsx)(Ie.a,{})})},"align.justify")]},"align")]}),Be=(n(177),"quote-block"),Pe="quote-block-item",Te=function(e,t,n){k(n)&&n.path&&(I(e,Be,!0,n.path)?z(e,{wrapKey:Be,itemKey:Pe}):C(e)||Z(e,Object(se.a)({},Be,!0),Object(se.a)({},Pe,!0)))},Me=n(143),Ae=(n(178),function(){function e(){Object(m.a)(this,e),this.id=void 0,this.container=void 0,this.mask=void 0,this.node=void 0,this.id=Object(ue.a)(),this.container=document.createElement("div"),this.container.id=this.id,this.container.className="popup-container",this.mask=document.createElement("div"),this.container.appendChild(this.mask),this.mask.className="popup-container-mask",this.node=document.createElement("div"),this.container.appendChild(this.node),this.node.className="popup-container-node",document.body.appendChild(this.container)}return Object(Me.a)(e,[{key:"mount",value:function(e){this.node&&c.a.render(e,this.node)}},{key:"onMaskClick",value:function(e){var t=this;this.mask&&(this.mask.onclick=function(){e(),t.destroy()})}},{key:"close",value:function(){this.node&&c.a.unmountComponentAtNode(this.node)}},{key:"destroy",value:function(){this.close(),this.node&&this.container&&this.mask&&(this.container.removeChild(this.mask),this.container.removeChild(this.node),document.body.removeChild(this.container)),this.container=this.mask=this.node=null}}]),e}()),Re=(n(179),n(311)),qe=n(312),Ve=n(315),We=n(54),Je=n(52),Fe=(A.defaultProps={},A);function Ge(e){if(i(e))throw new Error("assert value is empty");return e}function He(e,t,n){var r=[],i={};V(t,nt)&&(t.children.forEach((function(t,c){var o,a;!N(e,t)||(t=t[rt])&&(o=t.level,t=t.start,i[o]=(i[o]||0)+1,(a=i[o])!==t&&r.push((function(){J(e,Object(se.a)({},rt,{level:o,start:a}),{at:[].concat(Object(g.a)(n),[c])})})))})),r.forEach((function(e){return e()})))}function Ze(e){var t=Object(a.useMemo)((function(){return Object(u.a)(Object(d.h)(Object(l.j)()))}),[]),n=ft,i=Object(s.a)(Object(h.debounce)((function(e){}),500)),c=(y=Object(a.useMemo)((function(){var n,i,c,a,d,s,u,h,m,j,g,y,N=new r(T(),(u=t,{key:je,type:v.BLOCK,command:pe,match:function(e){return!!e.element[je]},renderLine:function(e){var t=e.props.element[je];if(!t)return e.children;var n=t.id;switch(t.type){case"h1":return Object(x.jsx)("h1",{className:"doc-heading",id:n,children:e.children});case"h2":return Object(x.jsx)("h2",{className:"doc-heading",id:n,children:e.children});case"h3":return Object(x.jsx)("h3",{className:"doc-heading",id:n,children:e.children});default:return e.children}},onKeyDown:function(e){if(S(e,he,be)&&L(u,u.selection)){if(n=R(u)){var t=n.block,n=n.path;if(!t[je])return;E(t)&&(e.key===he&&D(u,n)&&(F(u,[je],{at:n}),e.preventDefault()),e.key===be&&function(e,t){return t=l.a.end(e,t),L(e,e.selection)&&l.f.equals(t,e.selection.anchor)}(u,n)&&(n=function(e,t){if(!e)return{};var n=t||[],r=(n.push("children"),{});return Object.keys(e).filter((function(e){return-1===n.indexOf(e)})).forEach((function(t){return r[t]=e[t]})),r}(t,[je]),C(u)?(l.i.insertNodes(u,Object(b.a)(Object(b.a)({},n),{},{children:[{text:" "}]}),{at:u.selection.focus,select:!1}),l.i.move(u,{distance:1}),Promise.resolve().then((function(){return u.deleteForward("character")}))):l.i.insertNodes(u,Object(b.a)(Object(b.a)({},n),{},{children:[{text:""}]})),e.preventDefault()))}return O.STOP}}}),{key:xe,type:v.INLINE,match:function(e){return!!e.leaf[xe]},command:function(e,t){l.i.setNodes(e,Object(se.a)({},t,!0),{match:function(e){return l.h.isText(e)},split:!0})},render:function(e){return Object(x.jsx)("strong",{children:e.children})}},(s=t,{key:Be,type:v.BLOCK,match:function(e){return!!e.element[Be]},renderLine:function(e){return Object(x.jsx)("blockquote",{className:"doc-quote-block",children:e.children})},command:Te,onKeyDown:function(e){if(S(e,he,be)&&L(s,s.selection)){var t=R(s,{key:Be}),n=R(s,{key:Pe});if(X(s,t,n,Pe),n&&t&&P(s,{wrapNode:t,itemNode:n}))return D(s,n.path)&&B(s,"or",{wrapNode:t,itemNode:n})&&(z(s,{wrapKey:Be,itemKey:Pe}),e.preventDefault()),O.STOP}}}),(d=e.isRender,{key:Ye,type:v.INLINE,match:function(e){return!!e.leaf[Ye]},command:function(e,t,n){var r,i={href:"",blank:!0};if(n&&n.position)return r=n.position,new Promise((function(n){var c=new Ae;c.onMaskClick((function(){return n()})),c.mount(Object(x.jsx)(Fe,{config:i,left:r.left,top:r.top,onConfirm:function(r){i.href=r.href,i.blank=r.blank,G(e,Object(se.a)({},t,i)),c.destroy(),n()}}))})).catch((function(){}))},render:function(e){var t=Ge(e.props.leaf[Ye]);return d?Object(x.jsx)("a",{className:"hyper-link",href:t.href,target:t.blank?"_blank":void 0,children:e.children}):Object(x.jsx)($e,{config:t,element:e.element,children:e.children})}}),{key:_e,type:v.INLINE,match:function(e){return!!e.leaf[_e]},command:function(e,t){G(e,Object(se.a)({},t,!0))},render:function(e){return Object(x.jsx)("u",{children:e.children})}},{key:Qe,type:v.INLINE,match:function(e){return!!e.leaf[Qe]},command:function(e,t){G(e,Object(se.a)({},t,!0))},render:function(e){return Object(x.jsx)("del",{children:e.children})}},{key:Ue,type:v.INLINE,match:function(e){return!!e.leaf[Ue]},command:function(e,t){G(e,Object(se.a)({},t,!0))},render:function(e){return Object(x.jsx)("em",{children:e.children})}},{key:et,type:v.INLINE,match:function(e){return!!e.leaf[et]},command:function(e,t){G(e,Object(se.a)({},t,!0))},render:function(e){return Object(x.jsx)("code",{className:"slate-inline-code",children:e.children})}},(a=t,{key:ot,type:v.BLOCK,match:function(e){return V(e.element,ot)||V(e.element,at)},renderLine:function(e){var t;return V(e.element,ot)?Object(x.jsx)("ol",{className:"doc-ordered-list",children:e.children}):(t=Ge(e.element[at]),Object(x.jsx)("li",{className:"doc-ordered-item ordered-li-".concat(t.level),value:t.start,children:e.children}))},command:lt,onKeyDown:function(e){if(S(e,he,be,me)&&L(a,a.selection)){var t=R(a,{key:ot}),n=R(a,{key:at});if(X(a,t,n,at),n&&t&&P(a,{wrapNode:t,itemNode:n})){var r=(i=Ge(n.block[at])).level,i=i.start;if(e.key===me)return r<3&&J(a,Object(se.a)({},at,{start:i,level:r+1}),{node:n.block}),it(a),e.preventDefault(),O.STOP;if(D(a,n.path)){if(1<r)return J(a,Object(se.a)({},at,{start:i,level:r-1}),{node:n.block}),it(a),e.preventDefault(),O.STOP;if(B(a,"or",{wrapNode:t,itemNode:n}))return z(a,{wrapKey:ot,itemKey:at}),ct(a),e.preventDefault(),O.STOP;if(S(e,he))return a.deleteBackward("block"),it(a),e.preventDefault(),O.STOP}return e.key===be&&(l.i.splitNodes(a,{always:!0}),it(a),e.preventDefault()),O.STOP}}}}),(c=t,{key:dt,type:v.BLOCK,match:function(e){return V(e.element,dt)||V(e.element,st)},renderLine:function(e){var t;return V(e.element,dt)?Object(x.jsx)("ul",{className:"doc-unordered-list",children:e.children}):(t=Ge(e.element[st]),Object(x.jsx)("li",{className:"doc-unordered-item unordered-li-".concat(t.level),children:e.children}))},command:ut,onKeyDown:function(e){if(S(e,he,be,me)&&L(c,c.selection)){var t,n=R(c,{key:dt}),r=R(c,{key:st});if(X(c,n,r,st),r&&n&&P(c,{wrapNode:n,itemNode:r}))return t=Ge(r.block[st]).level,e.key===me?(t<3&&J(c,Object(se.a)({},st,{level:t+1}),{node:r.block}),e.preventDefault()):D(c,r.path)&&(1<t?(J(c,Object(se.a)({},st,{level:t-1}),{node:r.block}),e.preventDefault()):B(c,"or",{wrapNode:n,itemNode:r})&&(z(c,{wrapKey:dt,itemKey:st}),e.preventDefault())),O.STOP}}}),{key:ht,isVoid:!0,type:v.BLOCK,command:function(e,t){var n;l.i.insertNodes(e,(n={},Object(se.a)(n,t,!0),Object(se.a)(n,"children",[{text:""}]),n)),l.i.insertNodes(e,{children:[{text:""}]})},match:function(e){return V(e.element,ht)},render:function(){return Object(x.jsx)(bt,{})}},{key:mt,type:v.BLOCK,command:jt,match:function(e){return!!e.element[mt]},renderLine:function(e){var t=e.props.element[mt];return t&&"left"!==t&&e.classList.push("align-"+t),e.children}},(n=t,i=e.isRender,{key:Ot,type:v.BLOCK,match:function(e){return!!e.element[Ot]},renderLine:function(e){var t=Ge(e.props.element[Ot]);return Object(x.jsx)(vt,{editor:n,element:e.element,config:t,isRender:i,children:e.children})},command:function(e,t,n){k(n)&&n.path&&(I(e,Ot,null,n.path)?z(e,{wrapKey:Ot,itemKey:gt}):C(e)||Z(e,Object(se.a)({},Ot,{border:xt[0].border,background:xt[0].background}),Object(se.a)({},gt,!0)))},onKeyDown:function(e){if(S(e,he,be)&&L(n,n.selection)){var t=R(n,{key:Ot}),r=R(n,{key:gt});if(X(n,t,r,gt),r&&t&&P(n,{wrapNode:t,itemNode:r}))return D(n,r.path)&&B(n,"or",{wrapNode:t,itemNode:r})&&(z(n,{wrapKey:Ot,itemKey:gt}),e.preventDefault()),O.STOP}}})),w=N.getCommands();return N.add((j=t,g=e.isRender,y=w,{key:"doc-toolbar",priority:13,type:v.BLOCK,match:function(){return!0},renderLine:function(e){if(g)return e.children;var t,n=Object(f.a)(le);try{for(n.s();!(t=n.n()).done;){var r=t.value;if(e.element[r])return e.children}}catch(e){n.e(e)}finally{n.f()}for(var i=0,c=0,o=Object.keys(de);c<o.length;c++){var a=o[c];if(e.element[a]){i=de[a]||0;break}}return Object(x.jsx)(ae,{editor:j,commands:y,element:e.element,offset:i,children:e.children})}}),(h=t,m=w,{key:"shortcut",type:v.BLOCK,priority:50,match:function(){return!1},onKeyDown:function(e){var t,n,r;S(e,fe)&&L(h,h.selection)&&(t=R(h))&&(n=h.selection.anchor,t=t.path,n={anchor:n,focus:l.a.start(h,t)},r=l.a.string(h,n),(r=tt[r.trim()])&&(l.i.select(h,n),l.i.delete(h),n=r.split("."),n=(r=Object(o.a)(n,2))[0],r=r[1],p(h,m,n,{extraKey:r,path:t}),e.preventDefault()))}})),N.apply()}),[t,e.isRender])).renderElement,m=y.renderLeaf,j=y.onKeyDown,g=y.withVoidElements,y=y.commands,N=Object(a.useMemo)((function(){return g(t)}),[t,g]);return Object(x.jsxs)(d.c,{editor:N,value:n,onChange:i,children:[Object(x.jsx)(M,{isRender:e.isRender,commands:y}),Object(x.jsx)(d.a,{renderElement:c,renderLeaf:m,readOnly:e.isRender,placeholder:"Enter text ...",onKeyDown:j})]})}function ze(e){return String(e).replace(/-storage$/g,"")+"-storage"}function Xe(){var e=Object(a.useState)(kt().get(Nt)||0),t=(e=Object(o.a)(e,2))[0],n=e[1];return Object(a.useEffect)((function(){switch(t){case 0:wt.matches?document.body.setAttribute("arco-theme","dark"):document.body.removeAttribute("arco-theme"),wt.onchange=Ct;break;case 1:wt.onchange=null,document.body.removeAttribute("arco-theme");break;case 2:wt.onchange=null,document.body.setAttribute("arco-theme","dark")}}),[t]),Object(x.jsx)("div",{onClick:function(){var e=(t+1)%Kt.length;n(e),kt().set(Nt,e)},children:Kt[t]})}var Ye="link",$e=function(e){function t(t){l(!1);var n=d.b.findPath(r,e.element);G(r,Object(se.a)({},Ye,t),{at:n})}var n=e.config,r=Object(d.g)(),i=Object(a.useState)(!1),c=(i=Object(o.a)(i,2))[0],l=i[1];return Object(x.jsx)(ce.b,{popup:function(){return Object(x.jsx)(Fe,{config:n,onConfirm:t})},position:"bottom",trigger:"click",popupVisible:c,onVisibleChange:l,children:Object(x.jsx)("span",{className:"hyper-link",onClick:function(e){e.preventDefault()},children:e.children})})},_e="under-line",Qe="strike-through",Ue="italic",et=(n(275),"inline-code"),tt={"1.":"ordered-list","-":"unordered-list","*":"unordered-list",">":"quote-block","#":"heading.h1","##":"heading.h2","###":"heading.h3","---":"dividing-line"},nt=(n(276),"ordered-list"),rt="ordered-list-item",it=function(e){var t=1<arguments.length&&void 0!==arguments[1]?arguments[1]:e.selection;L(e,t)&&(t=R(e,{key:nt}))&&He(e,t.block,t=t.path)},ct=function(e){var t;L(e,e.selection)&&(t=R(e,{at:e.selection}))&&(t=function(e){var t=(r=1<arguments.length&&void 0!==arguments[1]?arguments[1]:{}).at,n=r.key,r=r.above;return(t=l.a.next(e,{match:function(t){return l.a.isBlock(e,t)&&(!n||V(t,n))},at:t,mode:r?"highest":"lowest"}))?{block:(r=Object(o.a)(t,2))[0],path:r[1]}:null}(e,{at:t.path,key:nt}))&&He(e,t.block,t.path)},ot="ordered-list",at="ordered-list-item",lt=function(e,t,n){k(n)&&n.path&&(I(e,ot,!0,n.path)?(z(e,{wrapKey:ot,itemKey:at}),ct(e)):Z(e,Object(se.a)({},ot,!0),Object(se.a)({},at,{start:1,level:1})))},dt=(n(277),"unordered-list"),st="unordered-list-item",ut=function(e,t,n){k(n)&&n.path&&(I(e,dt,!0,n.path)?z(e,{wrapKey:dt,itemKey:st}):Z(e,Object(se.a)({},dt,!0),Object(se.a)({},st,{level:1})))},ht=(n(278),"dividing-line"),bt=function(){var e=Object(d.e)(),t=Object(d.d)();return Object(x.jsx)("div",{className:oe("dividing-line",t&&e&&"selected")})},ft=[{children:[{text:"\u6587\u6863\u7f16\u8f91\u5668"}],heading:{id:"01f0de8f",type:"h1"},align:"center"},{children:[{text:"Github",link:{href:"https://github.com/WindrunnerMax/DocEditor",blank:!0}},{text:" \uff5c "},{text:"Editor DEMO",link:{href:"https://windrunnermax.github.io/DocEditor/",blank:!0}},{text:" \uff5c "},{text:"BLOG",link:{href:"https://github.com/WindrunnerMax/EveryDay/blob/master/Plugin/\u57fa\u4e8eslate\u6784\u5efa\u6587\u6863\u7f16\u8f91\u5668.md",blank:!0}}],align:"center"},{children:[{text:"\u57fa\u4e8e"},{text:"slate.js","inline-code":!0},{text:"\u6784\u5efa\u7684\u6587\u6863\u7f16\u8f91\u5668\uff0c\u6240\u6709\u529f\u80fd\u90fd\u662f\u57fa\u4e8e\u63d2\u4ef6\u5b9a\u4e49\u5b9e\u73b0\uff0c\u901a\u8fc7\u53f3\u4e0a\u89d2\u6309\u94ae\u5207\u6362\u7f16\u8f91\u6a21\u5f0f\u4e0e\u9884\u89c8\u6a21\u5f0f\uff0c\u6240\u89c1\u5373\u6240\u5f97\uff0c\u5f53\u524d\u9875\u9762\u4e5f\u5b9e\u73b0\u4e86\u4eae\u8272\u4e0e\u6697\u8272\u6a21\u5f0f\u7684\u9002\u914d\u3002"}]},{children:[{text:"\u884c\u5185\u5143\u7d20"}],heading:{type:"h2",id:"83ddface"}},{children:[{text:"\u652f\u6301"},{text:"\u52a0\u7c97",bold:!0},{text:"\u3001"},{text:"\u659c\u4f53",italic:!0},{text:"\u3001"},{text:"\u4e0b\u5212\u7ebf","under-line":!0},{text:"\u3001"},{text:"\u5220\u9664\u7ebf","strike-through":!0},{text:"\u3001"},{text:"\u884c\u5185\u4ee3\u7801\u5757","inline-code":!0},{text:"\u3001"},{text:"\u8d85\u94fe\u63a5",link:{href:"https://github.com/WindrunnerMax/DocEditor",blank:!0}},{text:"\u3001\u6587\u5b57\u5bf9\u9f50\u3002"}],align:"center"},{children:[{text:"\u5757\u7ea7\u5143\u7d20"}],heading:{id:"4644b757",type:"h2"}},{children:[{text:"\u6807\u9898"}],heading:{type:"h3",id:"213e6703"}},{children:[{text:"\u652f\u6301"},{text:"h1~h3","inline-code":!0},{text:"\u7684\u4e09\u7ea7\u6807\u9898\uff0c\u5feb\u6377\u952e\u5524\u8d77 \u4e00\u7ea7\u6807\u9898"},{text:"# ","inline-code":!0},{text:"\u3001\u4e8c\u7ea7\u6807\u9898"},{text:"## ","inline-code":!0},{text:"\u3001\u4e09\u7ea7\u6807\u9898"},{text:"### ","inline-code":!0},{text:"\u3002"}]},{children:[{text:"\u5f15\u7528\u5757"}],heading:{type:"h3",id:"8426a51b"}},{"quote-block":!0,children:[{children:[{text:"\u652f\u6301\u5f15\u7528\u5757\u3002"}],"quote-block-item":!0},{"unordered-list":!0,children:[{"quote-block-item":!0,children:[{text:"\u53ef\u4ee5\u5d4c\u5957\u5176\u4ed6\u683c\u5f0f\u3002"}],"unordered-list-item":{level:1}},{"quote-block-item":!0,"unordered-list-item":{level:1},children:[{text:"\u652f\u6301\u5feb\u6377\u952e"},{text:"> ","inline-code":!0},{text:"\u3002"}]}]}]},{children:[{text:"\u65e0\u5e8f\u5217\u8868"}],heading:{type:"h3",id:"a764a9a0"}},{children:[{text:"\u652f\u6301"},{text:"3","inline-code":!0},{text:"\u7ea7\u65e0\u5e8f\u5217\u8868\uff0c\u5feb\u6377\u952e\u5524\u8d77\u65e0\u5e8f\u5217\u8868"},{text:"* ","inline-code":!0},{text:"\u3001"},{text:"- ","inline-code":!0},{text:"\uff0c\u4e0b\u4e00\u7ea7\u65e0\u5e8f\u5217\u8868"},{text:"tab","inline-code":!0},{text:"\u3002"}]},{"unordered-list":!0,children:[{children:[{text:"\u4e00\u7ea7\u65e0\u5e8f\u5217\u8868\u3002"}],"unordered-list-item":{level:1}},{"unordered-list-item":{level:2},children:[{text:"\u4e8c\u7ea7\u65e0\u5e8f\u5217\u8868\u3002"}]},{"unordered-list-item":{level:3},children:[{text:"\u4e09\u7ea7\u65e0\u5e8f\u5217\u8868\u3002"}]}]},{children:[{text:"\u6709\u5e8f\u5217\u8868"}],heading:{type:"h3",id:"400aa7e1"}},{children:[{text:"\u652f\u6301"},{text:"3","inline-code":!0},{text:"\u7ea7\u6709\u5e8f\u5217\u8868\uff0c\u6709\u5e8f\u5217\u8868\u5404\u7ea7\u5355\u72ec\u8ba1\u6570\uff0c\u5feb\u6377\u952e\u5524\u8d77\u6709\u5e8f\u5217\u8868"},{text:"1. ","inline-code":!0},{text:"\uff0c\u4e0b\u4e00\u7ea7\u6709\u5e8f\u5217\u8868"},{text:"tab","inline-code":!0},{text:"\u3002"}]},{"ordered-list":!0,children:[{children:[{text:"\u4e00\u7ea7\u6709\u5e8f\u5217\u8868\u3002"}],"ordered-list-item":{start:1,level:1}},{"ordered-list-item":{level:2,start:1},children:[{text:"\u4e8c\u7ea7\u6709\u5e8f\u5217\u8868\u3002"}]},{"ordered-list-item":{level:3,start:1},children:[{text:"\u4e09\u7ea7\u6709\u5e8f\u5217\u8868\u3002"}]}]},{children:[{text:"\u5206\u5272\u7ebf"}],heading:{type:"h3",id:"5ab77ffb"}},{children:[{text:"\u652f\u6301\u5206\u5272\u7ebf\uff0c\u5feb\u6377\u952e"},{text:"--- ","inline-code":!0},{text:"\u3002"}]},{"dividing-line":!0,children:[{text:""}]},{children:[{text:"\u9ad8\u4eae\u5757"}],heading:{type:"h3",id:"af869b51"}},{"highlight-block":{border:"var(--blue-6)",background:"var(--blue-3)"},children:[{children:[{text:"\ud83c\udf30 "},{text:"\u4e3e\u4e2a\u6817\u5b50",bold:!0}],"highlight-block-item":!0},{"highlight-block-item":!0,children:[{text:"\u652f\u6301\u9ad8\u4eae\u5757 \u53ef\u4ee5\u7528\u4e8e\u63d0\u793a\u6587\u6863\u4e2d\u7684\u91cd\u8981\u5185\u5bb9\u3002"}]}]},{"highlight-block":{background:"var(--green-3)",border:"var(--green-6)"},children:[{children:[{text:"\ud83c\udfdd \u53ef\u4ee5\u4e3a\u9ad8\u4eae\u5757\u66f4\u6362\u4e3b\u9898\u3002"}],"highlight-block-item":!0}]},{heading:{type:"h2",id:"82651426"},children:[{text:"\u5feb\u6377\u529f\u80fd"}]},{children:[{text:"\u5feb\u6377\u952e"}],heading:{type:"h3",id:"614d6a4c"}},{children:[{text:"\u652f\u6301\u5feb\u6377\u952e: "}]},{"unordered-list":!0,children:[{children:[{text:"\u4e00\u7ea7\u6807\u9898"},{text:"# ","inline-code":!0},{text:"\u3001\u4e8c\u7ea7\u6807\u9898"},{text:"## ","inline-code":!0},{text:"\u3001\u4e09\u7ea7\u6807\u9898"},{text:"### ","inline-code":!0},{text:"\u3002"}],"unordered-list-item":{level:1}},{"unordered-list":!0,children:[{"unordered-list-item":{level:1},children:[{text:"\u5f15\u7528\u5757"},{text:"> ","inline-code":!0},{text:"\u3002"}]}]},{"unordered-list-item":{level:1},children:[{text:"\u591a\u7ea7\u65e0\u5e8f\u5217\u8868"},{text:"* ","inline-code":!0},{text:"\u3001"},{text:"- ","inline-code":!0},{text:"\uff0c\u4e0b\u7ea7\u65e0\u5e8f\u5217\u8868"},{text:"tab","inline-code":!0},{text:"\u3002"}]},{"unordered-list-item":{level:1},children:[{text:"\u591a\u7ea7\u6709\u5e8f\u5217\u8868"},{text:"1. ","inline-code":!0},{text:"\uff0c\u4e0b\u7ea7\u6709\u5e8f\u5217\u8868"},{text:"tab","inline-code":!0},{text:"\u3002"}]},{"unordered-list-item":{level:1},children:[{text:"\u5206\u5272\u7ebf"},{text:"--- ","inline-code":!0},{text:"\u3002"}]},{"unordered-list-item":{level:1},children:[{text:"\u64a4\u9500"},{text:"Ctrl + Z","inline-code":!0},{text:"\uff0c\u524d\u8fdb"},{text:"Ctrl + Shift + Z","inline-code":!0},{text:"\u3002"}]}]},{children:[{text:"\u5de5\u5177\u680f"}],heading:{type:"h3",id:"0f8a5d9e"}},{children:[{text:"\u5de6\u4fa7\u5de5\u5177\u680f\u53ef\u4ee5\u5524\u8d77\u5feb\u6377\u64cd\u4f5c\uff0c\u9009\u4e2d\u6587\u5b57\u540e\u53ef\u4ee5\u5f39\u51fa\u9876\u90e8\u5de5\u5177\u680f\u3002"}]},{children:[{text:"\u5176\u4ed6"}],heading:{type:"h2",id:"3e92c207"}},{children:[{text:"\u540e\u7eed\u652f\u6301\u5b8c\u5584\u4e2d..."}]}],mt=(n(279),"align"),jt=function(e,t,n){!k(n)||I(e,mt,n.extraKey)||J(e,Object(se.a)({},t,n.extraKey))},pt=(n(140),"highlight-block"),xt=[{background:"var(--blue-3)",border:"var(--blue-6)"},{background:"var(--green-3)",border:"var(--green-6)"},{background:"var(--orange-3)",border:"var(--orange-6)"},{background:"var(--red-3)",border:"var(--red-6)"},{background:"var(--purple-3)",border:"var(--purple-6)"},{background:"var(--gray-3)",border:"var(--gray-6)"},{background:"var(--magenta-3)",border:"var(--magenta-6)"},{background:"var(--pinkpurple-3)",border:"var(--pinkpurple-6)"},{background:"var(--orangered-3)",border:"var(--orangered-6)"},{background:"var(--cyan-3)",border:"var(--cyan-6)"},{background:"var(--lime-3)",border:"var(--lime-6)"},{background:"var(--gold-3)",border:"var(--gold-6)"},{background:"var(--yellow-3)",border:"var(--yellow-6)"}],vt=function(e){var t=e.editor,n=e.element,r=e.config,i=e.isRender,c=Object(s.a)((function(e){var r=d.b.findPath(t,n);J(t,Object(se.a)({},pt,xt[e]),{at:r,key:pt})})),o=Object(a.useMemo)((function(){return Object(x.jsx)("div",{className:"highlight-block-selector",children:xt.map((function(e,t){return Object(x.jsx)("div",{className:"selector-item",onClick:function(){return c(t)},style:{borderColor:"rgb(".concat(e.border,")"),backgroundColor:"rgb(".concat(e.background,", 0.4)")}},t)}))})}),[c]);r=Object(x.jsx)("div",{className:"doc-highlight-block",style:{backgroundColor:"rgb(".concat(r.background,", 0.4)"),borderColor:"rgb(".concat(r.border,")")},children:e.children});return i?r:Object(x.jsx)(ce.b,{position:"top",popup:function(){return o},popupAlign:{top:3},children:r})},Ot="highlight-block",gt="highlight-block-item",yt=n(309),kt=(t=n(306),ve=n(307),Oe=n(308),function(){var e=0<arguments.length&&void 0!==arguments[0]?arguments[0]:"local",t="local"===e||"l"===e?window.localStorage:window.sessionStorage;return{has:function(e){return e=ze(e),!!t.getItem(e)},get:function(e){e=ze(e);var n=t.getItem(e);return null===n?null:(n=function(e){try{var t=JSON.parse(e);return Number.isNaN(t.expire)||t.expire&&(new Date).getTime()>t.expire?null:t.origin}catch(e){return null}}(n),null===n&&this.remove(e),n)},set:function(e,n){var r=2<arguments.length&&void 0!==arguments[2]?arguments[2]:null;e=ze(e),n=function(e,t){return e={origin:e,expire:null},t&&(e.expire=t.getTime()),JSON.stringify(e)}(n,r);return t.setItem(e,n)},remove:function(e){return e=ze(e),t.removeItem(e)},clear:function(){return t.clear()}}}),Nt="theme-index",wt=window.matchMedia("(prefers-color-scheme: dark)"),Kt=[Object(x.jsx)(t.a,{}),Object(x.jsx)(ve.a,{}),Object(x.jsx)(Oe.a,{})],Ct=function(e){e.matches?document.body.setAttribute("arco-theme","dark"):document.body.removeAttribute("arco-theme")};c.a.render(Object(x.jsx)((function(){var e=Object(a.useState)(!1),t=(e=Object(o.a)(e,2))[0],n=e[1];return Object(x.jsxs)("div",{className:"doc-editor-container",children:[Object(x.jsxs)("div",{className:"header",children:[Object(x.jsx)("span",{className:"left",children:"Editor"}),Object(x.jsxs)("div",{className:"right",children:[Object(x.jsx)("div",{onClick:function(){return n(!t)},children:t?Object(x.jsx)(ne.a,{}):Object(x.jsx)(yt.a,{})}),Object(x.jsx)(Xe,{})]})]}),Object(x.jsx)("div",{className:"gap"}),Object(x.jsx)("div",{className:oe("editor",t&&"render"),children:Object(x.jsx)("div",{className:"slate-editor",children:Object(x.jsx)(Ze,{isRender:t})})})]})}),{}),document.getElementById("root"))}},[[280,1,2]]]);