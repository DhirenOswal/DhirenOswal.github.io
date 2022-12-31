"use strict";(self.webpackChunkorbiz=self.webpackChunkorbiz||[]).push([[767],{1413:function(e,n,t){t.d(n,{Z:function(){return o}});var r=t(4942);function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){(0,r.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}},9767:function(e,n,t){t.d(n,{O:function(){return xe}});var r=t(181);function a(e,n){var t="undefined"!==typeof Symbol&&e[Symbol.iterator]||e["@@iterator"];if(!t){if(Array.isArray(e)||(t=(0,r.Z)(e))||n&&e&&"number"===typeof e.length){t&&(e=t);var a=0,o=function(){};return{s:o,n:function(){return a>=e.length?{done:!0}:{done:!1,value:e[a++]}},e:function(e){throw e},f:o}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var u,i=!0,c=!1;return{s:function(){t=t.call(e)},n:function(){var e=t.next();return i=e.done,e},e:function(e){c=!0,u=e},f:function(){try{i||null==t.return||t.return()}finally{if(c)throw u}}}}var o=t(885),u=t(3366);function i(e,n){if(null==e)return{};var t,r,a=(0,u.Z)(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=t(4942),l=t(2982),s=t(1413),f=t(2791);function d(e,n){if(e in n){for(var t=n[e],r=arguments.length,a=new Array(r>2?r-2:0),o=2;o<r;o++)a[o-2]=arguments[o];return"function"==typeof t?t.apply(void 0,a):t}var u=new Error('Tried to handle "'.concat(e,'" but there is no handler defined. Only defined handlers are: ').concat(Object.keys(n).map((function(e){return'"'.concat(e,'"')})).join(", "),"."));throw Error.captureStackTrace&&Error.captureStackTrace(u,d),u}var v=["static"],p=["unmount"],b=["as","children","refName"],m=function(e){return e[e.None=0]="None",e[e.RenderStrategy=1]="RenderStrategy",e[e.Static=2]="Static",e}(m||{}),h=function(e){return e[e.Unmount=0]="Unmount",e[e.Hidden=1]="Hidden",e}(h||{});function y(e){var n=e.ourProps,t=e.theirProps,r=e.slot,a=e.defaultTag,o=e.features,u=e.visible,l=void 0===u||u,f=e.name,b=x(t,n);if(l)return g(b,r,a,f);var m=null!=o?o:0;if(2&m){var h=b.static,y=void 0!==h&&h,w=i(b,v);if(y)return g(w,r,a,f)}if(1&m){var P,E=b.unmount,O=void 0===E||E,T=i(b,p);return d(O?0:1,(P={},(0,c.Z)(P,0,(function(){return null})),(0,c.Z)(P,1,(function(){return g((0,s.Z)((0,s.Z)({},T),{},{hidden:!0,style:{display:"none"}}),r,a,f)})),P))}return g(b,r,a,f)}function g(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},t=arguments.length>2?arguments[2]:void 0,r=arguments.length>3?arguments[3]:void 0,a=O(e,["unmount","static"]),u=a.as,l=void 0===u?t:u,s=a.children,d=a.refName,v=void 0===d?"ref":d,p=i(a,b),m=void 0!==e.ref?(0,c.Z)({},v,e.ref):{},h="function"==typeof s?s(n):s;p.className&&"function"==typeof p.className&&(p.className=p.className(n));var y={};if(n){for(var g=!1,P=[],T=0,S=Object.entries(n);T<S.length;T++){var A=(0,o.Z)(S[T],2),I=A[0],Z=A[1];"boolean"==typeof Z&&(g=!0),!0===Z&&P.push(I)}g&&(y["data-headlessui-state"]=P.join(" "))}if(l===f.Fragment&&Object.keys(E(p)).length>0){if(!(0,f.isValidElement)(h)||Array.isArray(h)&&h.length>1)throw new Error(['Passing props on "Fragment"!',"","The current component <".concat(r,' /> is rendering a "Fragment".'),"However we need to passthrough the following props:",Object.keys(p).map((function(e){return"  - ".concat(e)})).join("\n"),"","You can apply a few solutions:",['Add an `as="..."` prop, to ensure that we render an actual element instead of a "Fragment".',"Render a single element as the child so that we can forward the props onto that element."].map((function(e){return"  - ".concat(e)})).join("\n")].join("\n"));return(0,f.cloneElement)(h,Object.assign({},x(h.props,E(O(p,["ref"]))),y,m,w(h.ref,m.ref)))}return(0,f.createElement)(l,Object.assign({},O(p,["ref"]),l!==f.Fragment&&m,l!==f.Fragment&&y),h)}function w(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];return{ref:n.every((function(e){return null==e}))?void 0:function(e){var t,r=a(n);try{for(r.s();!(t=r.n()).done;){var o=t.value;null!=o&&("function"==typeof o?o(e):o.current=e)}}catch(u){r.e(u)}finally{r.f()}}}}function x(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];if(0===n.length)return{};if(1===n.length)return n[0];for(var r={},o={},u=0,i=n;u<i.length;u++){var l=i[u];for(var s in l)s.startsWith("on")&&"function"==typeof l[s]?(null!=o[s]||(o[s]=[]),o[s].push(l[s])):r[s]=l[s]}if(r.disabled||r["aria-disabled"])return Object.assign(r,Object.fromEntries(Object.keys(o).map((function(e){return[e,void 0]}))));var f=function(e){Object.assign(r,(0,c.Z)({},e,(function(n){for(var t=o[e],r=arguments.length,u=new Array(r>1?r-1:0),i=1;i<r;i++)u[i-1]=arguments[i];var c,l=a(t);try{for(l.s();!(c=l.n()).done;){var s=c.value;if((n instanceof Event||(null==n?void 0:n.nativeEvent)instanceof Event)&&n.defaultPrevented)return;s.apply(void 0,[n].concat(u))}}catch(f){l.e(f)}finally{l.f()}})))};for(var d in o)f(d);return r}function P(e){var n;return Object.assign((0,f.forwardRef)(e),{displayName:null!=(n=e.displayName)?n:e.name})}function E(e){var n=Object.assign({},e);for(var t in n)void 0===n[t]&&delete n[t];return n}function O(e){var n,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],r=Object.assign({},e),o=a(t);try{for(o.s();!(n=o.n()).done;){var u=n.value;u in r&&delete r[u]}}catch(i){o.e(i)}finally{o.f()}return r}var T,S="undefined"==typeof window||"undefined"==typeof document,A=S?f.useEffect:f.useLayoutEffect,I={serverHandoffComplete:!1};var Z=0;function N(){return++Z}var j,F,k=null!=(T=f.useId)?T:function(){var e=function(){var e=(0,f.useState)(I.serverHandoffComplete),n=(0,o.Z)(e,2),t=n[0],r=n[1];return(0,f.useEffect)((function(){!0!==t&&r(!0)}),[t]),(0,f.useEffect)((function(){!1===I.serverHandoffComplete&&(I.serverHandoffComplete=!0)}),[]),t}(),n=f.useState(e?N:null),t=(0,o.Z)(n,2),r=t[0],a=t[1];return A((function(){null===r&&a(N())}),[r]),null!=r?""+r:void 0},D=function(e){return e.Space=" ",e.Enter="Enter",e.Escape="Escape",e.Backspace="Backspace",e.Delete="Delete",e.ArrowLeft="ArrowLeft",e.ArrowUp="ArrowUp",e.ArrowRight="ArrowRight",e.ArrowDown="ArrowDown",e.Home="Home",e.End="End",e.PageUp="PageUp",e.PageDown="PageDown",e.Tab="Tab",e}(D||{}),C=["[contentEditable=true]","[tabindex]","a[href]","area[href]","button:not([disabled])","iframe","input:not([disabled])","select:not([disabled])","textarea:not([disabled])"].map((function(e){return"".concat(e,":not([tabindex='-1'])")})).join(","),R=((F=R||{})[F.First=1]="First",F[F.Previous=2]="Previous",F[F.Next=4]="Next",F[F.Last=8]="Last",F[F.WrapAround=16]="WrapAround",F[F.NoScroll=32]="NoScroll",F),M=((j=M||{})[j.Error=0]="Error",j[j.Overflow=1]="Overflow",j[j.Success=2]="Success",j[j.Underflow=3]="Underflow",j),L=function(e){return e[e.Previous=-1]="Previous",e[e.Next=1]="Next",e}(L||{});function U(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:document.body;return null==e?[]:Array.from(e.querySelectorAll(C)).sort((function(e,n){return Math.sign((e.tabIndex||Number.MAX_SAFE_INTEGER)-(n.tabIndex||Number.MAX_SAFE_INTEGER))}))}var H=function(e){return e[e.Strict=0]="Strict",e[e.Loose=1]="Loose",e}(H||{});var W=["textarea","input"].join(",");function G(e){var n,t;return null!=(t=null==(n=null==e?void 0:e.matches)?void 0:n.call(e,W))&&t}function _(e){var n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:function(e){return e};return e.slice().sort((function(e,t){var r=n(e),a=n(t);if(null===r||null===a)return 0;var o=r.compareDocumentPosition(a);return o&Node.DOCUMENT_POSITION_FOLLOWING?-1:o&Node.DOCUMENT_POSITION_PRECEDING?1:0}))}function q(e,n){var t=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{},r=t.sorted,a=void 0===r||r,o=t.relativeTo,u=void 0===o?null:o,i=t.skipElements,c=void 0===i?[]:i,l=Array.isArray(e)?e.length>0?e[0].ownerDocument:document:e.ownerDocument,s=Array.isArray(e)?a?_(e):e:U(e);c.length>0&&(s=s.filter((function(e){return!c.includes(e)}))),u=null!=u?u:l.activeElement;var f,d=function(){if(5&n)return 1;if(10&n)return-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")}(),v=function(){if(1&n)return 0;if(2&n)return Math.max(0,s.indexOf(u))-1;if(4&n)return Math.max(0,s.indexOf(u))+1;if(8&n)return s.length-1;throw new Error("Missing Focus.First, Focus.Previous, Focus.Next or Focus.Last")}(),p=32&n?{preventScroll:!0}:{},b=0,m=s.length;do{if(b>=m||b+m<=0)return 0;var h=v+b;if(16&n)h=(h+m)%m;else{if(h<0)return 3;if(h>=m)return 1}null==(f=s[h])||f.focus(p),b+=d}while(f!==l.activeElement);return 6&n&&G(f)&&f.select(),f.hasAttribute("tabindex")||f.setAttribute("tabindex","0"),2}function z(e){var n=(0,f.useRef)(e);return A((function(){n.current=e}),[e]),n}var B=function(e){var n=z(e);return f.useCallback((function(){return n.current.apply(n,arguments)}),[n])},X=Symbol();function K(){for(var e=arguments.length,n=new Array(e),t=0;t<e;t++)n[t]=arguments[t];var r=(0,f.useRef)(n);(0,f.useEffect)((function(){r.current=n}),[n]);var o=B((function(e){var n,t=a(r.current);try{for(t.s();!(n=t.n()).done;){var o=n.value;null!=o&&("function"==typeof o?o(e):o.current=e)}}catch(u){t.e(u)}finally{t.f()}}));return n.every((function(e){return null==e||(null==e?void 0:e[X])}))?void 0:o}function V(e){var n;if(e.type)return e.type;var t=null!=(n=e.as)?n:"button";return"string"==typeof t&&"button"===t.toLowerCase()?"button":void 0}function Y(e,n){var t=(0,f.useState)((function(){return V(e)})),r=(0,o.Z)(t,2),a=r[0],u=r[1];return A((function(){u(V(e))}),[e.type,e.as]),A((function(){a||!n.current||n.current instanceof HTMLButtonElement&&!n.current.hasAttribute("type")&&u("button")}),[a,n]),a}var J=["features"],Q=function(e){return e[e.None=1]="None",e[e.Focusable=2]="Focusable",e[e.Hidden=4]="Hidden",e}(Q||{}),$=P((function(e,n){var t=e.features,r=void 0===t?1:t,a=i(e,J);return y({ourProps:{ref:n,"aria-hidden":2===(2&r)||void 0,style:(0,s.Z)({position:"fixed",top:1,left:1,width:1,height:0,padding:0,margin:-1,overflow:"hidden",clip:"rect(0, 0, 0, 0)",whiteSpace:"nowrap",borderWidth:"0"},4===(4&r)&&2!==(2&r)&&{display:"none"})},theirProps:a,slot:{},defaultTag:"div",name:"Hidden"})}));function ee(e){var n=e.onFocus,t=(0,f.useState)(!0),r=(0,o.Z)(t,2),a=r[0],u=r[1];return a?f.createElement($,{as:"button",type:"button",features:Q.Focusable,onFocus:function(e){e.preventDefault();var t,r=50;t=requestAnimationFrame((function e(){if(!(r--<=0))return n()?(u(!1),void cancelAnimationFrame(t)):void(t=requestAnimationFrame(e));t&&cancelAnimationFrame(t)}))}}):null}var ne,te=["defaultIndex","vertical","manual","onChange","selectedIndex"],re=["id"],ae=["id"],oe=function(e){return e[e.SetSelectedIndex=0]="SetSelectedIndex",e[e.RegisterTab=1]="RegisterTab",e[e.UnregisterTab=2]="UnregisterTab",e[e.RegisterPanel=3]="RegisterPanel",e[e.UnregisterPanel=4]="UnregisterPanel",e}(oe||{}),ue=(ne={},(0,c.Z)(ne,0,(function(e,n){var t=e.tabs.filter((function(e){var n;return!(null!=(n=e.current)&&n.hasAttribute("disabled"))}));if(n.index<0)return(0,s.Z)((0,s.Z)({},e),{},{selectedIndex:e.tabs.indexOf(t[0])});if(n.index>e.tabs.length)return(0,s.Z)((0,s.Z)({},e),{},{selectedIndex:e.tabs.indexOf(t[t.length-1])});var r=e.tabs.slice(0,n.index),a=[].concat((0,l.Z)(e.tabs.slice(n.index)),(0,l.Z)(r)).find((function(e){return t.includes(e)}));return a?(0,s.Z)((0,s.Z)({},e),{},{selectedIndex:e.tabs.indexOf(a)}):e})),(0,c.Z)(ne,1,(function(e,n){var t;if(e.tabs.includes(n.tab))return e;var r=e.tabs[e.selectedIndex],a=_([].concat((0,l.Z)(e.tabs),[n.tab]),(function(e){return e.current})),o=null!=(t=a.indexOf(r))?t:e.selectedIndex;return-1===o&&(o=e.selectedIndex),(0,s.Z)((0,s.Z)({},e),{},{tabs:a,selectedIndex:o})})),(0,c.Z)(ne,2,(function(e,n){return(0,s.Z)((0,s.Z)({},e),{},{tabs:e.tabs.filter((function(e){return e!==n.tab}))})})),(0,c.Z)(ne,3,(function(e,n){return e.panels.includes(n.panel)?e:(0,s.Z)((0,s.Z)({},e),{},{panels:_([].concat((0,l.Z)(e.panels),[n.panel]),(function(e){return e.current}))})})),(0,c.Z)(ne,4,(function(e,n){return(0,s.Z)((0,s.Z)({},e),{},{panels:e.panels.filter((function(e){return e!==n.panel}))})})),ne),ie=(0,f.createContext)(null);function ce(e){var n=(0,f.useContext)(ie);if(null===n){var t=new Error("<".concat(e," /> is missing a parent <Tab.Group /> component."));throw Error.captureStackTrace&&Error.captureStackTrace(t,ce),t}return n}ie.displayName="TabsSSRContext";var le=(0,f.createContext)(null);function se(e){var n=(0,f.useContext)(le);if(null===n){var t=new Error("<".concat(e," /> is missing a parent <Tab.Group /> component."));throw Error.captureStackTrace&&Error.captureStackTrace(t,se),t}return n}le.displayName="TabsDataContext";var fe=(0,f.createContext)(null);function de(e){var n=(0,f.useContext)(fe);if(null===n){var t=new Error("<".concat(e," /> is missing a parent <Tab.Group /> component."));throw Error.captureStackTrace&&Error.captureStackTrace(t,de),t}return n}function ve(e,n){return d(n.type,ue,e,n)}fe.displayName="TabsActionsContext";var pe=f.Fragment,be=P((function(e,n){var t=e.defaultIndex,r=void 0===t?0:t,u=e.vertical,c=void 0!==u&&u,l=e.manual,d=void 0!==l&&l,v=e.onChange,p=e.selectedIndex,b=void 0===p?null:p,m=i(e,te),h=c?"vertical":"horizontal",g=d?"manual":"auto",w=null!==b,x=K(n),P=(0,f.useReducer)(ve,{selectedIndex:null!=b?b:r,tabs:[],panels:[]}),E=(0,o.Z)(P,2),O=E[0],T=E[1],S=(0,f.useMemo)((function(){return{selectedIndex:O.selectedIndex}}),[O.selectedIndex]),I=z(v||function(){}),Z=z(O.tabs),N=(0,f.useMemo)((function(){return(0,s.Z)({orientation:h,activation:g},O)}),[h,g,O]),j=B((function(e){return T({type:1,tab:e}),function(){return T({type:2,tab:e})}})),F=B((function(e){return T({type:3,panel:e}),function(){return T({type:4,panel:e})}})),k=B((function(e){D.current!==e&&I.current(e),w||T({type:0,index:e})})),D=z(w?e.selectedIndex:O.selectedIndex),C=(0,f.useMemo)((function(){return{registerTab:j,registerPanel:F,change:k}}),[]);A((function(){T({type:0,index:null!=b?b:r})}),[b]);var R=(0,f.useRef)({tabs:[],panels:[]}),M={ref:x};return f.createElement(ie.Provider,{value:R},f.createElement(fe.Provider,{value:C},f.createElement(le.Provider,{value:N},N.tabs.length<=0&&f.createElement(ee,{onFocus:function(){var e,n,t,r=a(Z.current);try{for(r.s();!(t=r.n()).done;){var o=t.value;if(0===(null==(e=o.current)?void 0:e.tabIndex))return null==(n=o.current)||n.focus(),!0}}catch(u){r.e(u)}finally{r.f()}return!1}}),y({ourProps:M,theirProps:m,slot:S,defaultTag:pe,name:"Tabs"}))))})),me=P((function(e,n){var t=se("Tab.List"),r=t.orientation,a=t.selectedIndex;return y({ourProps:{ref:K(n),role:"tablist","aria-orientation":r},theirProps:e,slot:{selectedIndex:a},defaultTag:"div",name:"Tabs.List"})})),he=P((function(e,n){var t,r,a=k(),o=e.id,u=void 0===o?"headlessui-tabs-tab-".concat(a):o,c=i(e,re),l=se("Tab"),s=l.orientation,v=l.activation,p=l.selectedIndex,b=l.tabs,m=l.panels,h=de("Tab"),g=se("Tab"),w=ce("Tab"),x=(0,f.useRef)(null),P=K(x,n);A((function(){return h.registerTab(x)}),[h,x]);var E=w.current.tabs.indexOf(u);-1===E&&(E=w.current.tabs.push(u)-1);var O=b.indexOf(x);-1===O&&(O=E);var T=O===p,I=B((function(e){var n,t=e();if(t===M.Success&&"auto"===v){var r=null==(n=function(e){return S?null:e instanceof Node?e.ownerDocument:null!=e&&e.hasOwnProperty("current")&&e.current instanceof Node?e.current.ownerDocument:document}(x))?void 0:n.activeElement,a=g.tabs.findIndex((function(e){return e.current===r}));-1!==a&&h.change(a)}return t})),Z=B((function(e){var n=b.map((function(e){return e.current})).filter(Boolean);if(e.key===D.Space||e.key===D.Enter)return e.preventDefault(),e.stopPropagation(),void h.change(O);switch(e.key){case D.Home:case D.PageUp:return e.preventDefault(),e.stopPropagation(),I((function(){return q(n,R.First)}));case D.End:case D.PageDown:return e.preventDefault(),e.stopPropagation(),I((function(){return q(n,R.Last)}))}return I((function(){return d(s,{vertical:function(){return e.key===D.ArrowUp?q(n,R.Previous|R.WrapAround):e.key===D.ArrowDown?q(n,R.Next|R.WrapAround):M.Error},horizontal:function(){return e.key===D.ArrowLeft?q(n,R.Previous|R.WrapAround):e.key===D.ArrowRight?q(n,R.Next|R.WrapAround):M.Error}})}))===M.Success?e.preventDefault():void 0})),N=(0,f.useRef)(!1),j=B((function(){var e;N.current||(N.current=!0,null==(e=x.current)||e.focus(),h.change(O),function(e){"function"==typeof queueMicrotask?queueMicrotask(e):Promise.resolve().then(e).catch((function(e){return setTimeout((function(){throw e}))}))}((function(){N.current=!1})))})),F=B((function(e){e.preventDefault()})),C=(0,f.useMemo)((function(){return{selected:T}}),[T]);return y({ourProps:{ref:P,onKeyDown:Z,onMouseDown:F,onClick:j,id:u,role:"tab",type:Y(e,x),"aria-controls":null==(r=null==(t=m[O])?void 0:t.current)?void 0:r.id,"aria-selected":T,tabIndex:T?0:-1},theirProps:c,slot:C,defaultTag:"button",name:"Tabs.Tab"})})),ye=P((function(e,n){var t=se("Tab.Panels").selectedIndex;return y({ourProps:{ref:K(n)},theirProps:e,slot:(0,f.useMemo)((function(){return{selectedIndex:t}}),[t]),defaultTag:"div",name:"Tabs.Panels"})})),ge=m.RenderStrategy|m.Static,we=P((function(e,n){var t,r,a,o,u=k(),c=e.id,l=void 0===c?"headlessui-tabs-panel-".concat(u):c,d=i(e,ae),v=se("Tab.Panel"),p=v.selectedIndex,b=v.tabs,m=v.panels,h=de("Tab.Panel"),g=ce("Tab.Panel"),w=(0,f.useRef)(null),x=K(w,n);A((function(){return h.registerPanel(w)}),[h,w]);var P=g.current.panels.indexOf(l);-1===P&&(P=g.current.panels.push(l)-1);var E=m.indexOf(w);-1===E&&(E=P);var O=E===p,T=(0,f.useMemo)((function(){return{selected:O}}),[O]),S={ref:x,id:l,role:"tabpanel","aria-labelledby":null==(r=null==(t=b[E])?void 0:t.current)?void 0:r.id,tabIndex:O?0:-1};return O||null!=(a=d.unmount)&&!a||null!=(o=d.static)&&o?y({ourProps:S,theirProps:d,slot:T,defaultTag:"div",features:ge,visible:O,name:"Tabs.Panel"}):f.createElement($,(0,s.Z)({as:"span"},S))})),xe=Object.assign(he,{Group:be,List:me,Panels:ye,Panel:we})}}]);
//# sourceMappingURL=767.6f036093.chunk.js.map