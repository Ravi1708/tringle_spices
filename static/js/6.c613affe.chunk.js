(this["webpackJsonpflone-react"]=this["webpackJsonpflone-react"]||[]).push([[6],{516:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};n.get||n.set?Object.defineProperty(t,a,n):t[a]=e[a]}return t.default=e,t}(a(0)),r=o(a(22)),l=o(a(39)),c=a(530);function o(e){return e&&e.__esModule?e:{default:e}}function i(e){return(i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function m(e,t){return!t||"object"!==i(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function d(e){return(d=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var p,b,E,g=function(e){function t(){return s(this,t),m(this,d(t).apply(this,arguments))}var a,r,o;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),a=t,(r=[{key:"componentDidMount",value:function(){this.temporaryElement=document.createElement("div"),this.handleChildrens()}},{key:"componentDidUpdate",value:function(e){e.children!==this.props.children&&this.handleChildrens()}},{key:"componentWillUnmount",value:function(){this.temporaryElement&&l.default.unmountComponentAtNode(this.temporaryElement)}},{key:"extractChildren",value:function(){var e=this.context.extract,t=this.props.children;t&&e&&e(t)}},{key:"handleChildrens",value:function(){var e=this,t=this.props.children;if(!this.context.extract&&t){var a=n.default.createElement("div",{className:"react-head-temp"},t);l.default.render(a,this.temporaryElement,(function(){var t=e.temporaryElement.innerHTML;if(e.lastChildStr!==t){e.lastChildStr=t;var a=e.temporaryElement.querySelector(".react-head-temp");if(null!==a){var n=Array.prototype.slice.call(a.children),r=document.head,l=r.innerHTML;(n=(n=n.filter((function(e){return-1===l.indexOf(e.outerHTML)}))).map((function(e){return e.cloneNode(!0)}))).forEach((function(e){var t=e.tagName.toLowerCase();if("title"===t){var a=(0,c.getDuplicateTitle)();a&&(0,c.removeChild)(r,a)}else if("meta"===t){var n=(0,c.getDuplicateMeta)(e);n&&(0,c.removeChild)(r,n)}else if("link"===t&&"canonical"===e.rel){var l=(0,c.getDuplicateCanonical)(e);l&&(0,c.removeChild)(r,l)}})),(0,c.appendChild)(document.head,n)}}}))}}},{key:"render",value:function(){return this.extractChildren(),null}}])&&u(a.prototype,r),o&&u(a,o),t}(n.Component);p=g,b="contextTypes",E={extract:r.default.func},b in p?Object.defineProperty(p,b,{value:E,enumerable:!0,configurable:!0,writable:!0}):p[b]=E;var v=g;t.default=v,e.exports=t.default},519:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(124);t.a=function(e){var t=e.imageUrl,a=e.logoClass;return r.a.createElement("div",{className:"".concat(a||"")},r.a.createElement(l.b,{to:"/"},r.a.createElement("img",{alt:"",src:""+t})))}},520:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(75);t.a=function(e){var t=e.currency,a=e.setCurrency,n=e.currentLanguageCode,c=e.dispatch,o=function(e){var t=e.target.value;c(Object(l.changeLanguage)(t))},i=function(e){var t=e.target.value;a(t)};return r.a.createElement("div",{className:"language-currency-wrap"},r.a.createElement("div",{className:"same-language-currency language-style"},r.a.createElement("span",null,"en"===n?"English":"fn"===n?"French":"de"===n?"Germany":""," ",r.a.createElement("i",{className:"fa fa-angle-down"})),r.a.createElement("div",{className:"lang-car-dropdown"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("button",{value:"en",onClick:function(e){return o(e)}},"English")),r.a.createElement("li",null,r.a.createElement("button",{value:"fn",onClick:function(e){return o(e)}},"French")),r.a.createElement("li",null,r.a.createElement("button",{value:"de",onClick:function(e){return o(e)}},"Germany"))))),r.a.createElement("div",{className:"same-language-currency use-style"},r.a.createElement("span",null,t.currencyName," ",r.a.createElement("i",{className:"fa fa-angle-down"})),r.a.createElement("div",{className:"lang-car-dropdown"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("button",{value:"USD",onClick:function(e){return i(e)}},"USD")),r.a.createElement("li",null,r.a.createElement("button",{value:"EUR",onClick:function(e){return i(e)}},"EUR")),r.a.createElement("li",null,r.a.createElement("button",{value:"GBP",onClick:function(e){return i(e)}},"GBP"))))),r.a.createElement("div",{className:"same-language-currency"},r.a.createElement("p",null,"Call Us 3965410")))}},521:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"MetaTagsContext",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"MetaTags",{enumerable:!0,get:function(){return r.default}}),Object.defineProperty(t,"ReactTitle",{enumerable:!0,get:function(){return l.default}}),t.default=void 0;var n=c(a(529)),r=c(a(516)),l=c(a(531));function c(e){return e&&e.__esModule?e:{default:e}}var o=r.default;t.default=o},522:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(124);t.a=function(e){var t=e.footerLogo,a=e.spaceBottomClass,n=e.colorClass;return r.a.createElement("div",{className:"copyright ".concat(a||""," ").concat(n||"")},r.a.createElement("div",{className:"footer-logo"},r.a.createElement(l.b,{to:"/"},r.a.createElement("img",{alt:"",src:""+t}))),r.a.createElement("p",null,"\xa9 2020"," ",r.a.createElement("a",{href:"//hasthemes.com",rel:"noopener noreferrer",target:"_blank"},"Flone"),".",r.a.createElement("br",null)," All Rights Reserved"))}},523:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(535),c=function(e){var t,a=e.status,n=e.message,l=e.onValidated;return r.a.createElement("div",{className:"subscribe-form"},r.a.createElement("div",{className:"mc-form"},r.a.createElement("div",null,r.a.createElement("input",{id:"mc-form-email",className:"email",ref:function(e){return t=e},type:"email",placeholder:"Enter your email address..."})),r.a.createElement("div",{className:"clear"},r.a.createElement("button",{className:"button",onClick:function(){t&&t.value.indexOf("@")>-1&&l({EMAIL:t.value}),document.getElementById("mc-form-email").value=""}},"SUBSCRIBE"))),"sending"===a&&r.a.createElement("div",{style:{color:"#3498db",fontSize:"12px"}},"sending..."),"error"===a&&r.a.createElement("div",{style:{color:"#e74c3c",fontSize:"12px"},dangerouslySetInnerHTML:{__html:n}}),"success"===a&&r.a.createElement("div",{style:{color:"#2ecc71",fontSize:"12px"},dangerouslySetInnerHTML:{__html:n}}))},o=function(e){var t=e.mailchimpUrl;return r.a.createElement("div",null,r.a.createElement(l.a,{url:t,render:function(e){var t=e.subscribe,a=e.status,n=e.message;return r.a.createElement(c,{status:a,message:n,onValidated:function(e){return t(e)}})}}))};t.a=function(e){var t=e.spaceBottomClass,a=e.spaceLeftClass,n=e.sideMenu,l=e.colorClass,c=e.widgetColorClass;return r.a.createElement("div",{className:"footer-widget ".concat(t||""," ").concat(n?"ml-ntv5":a||""," ").concat(c||"")},r.a.createElement("div",{className:"footer-title"},r.a.createElement("h3",null,"SUBSCRIBE")),r.a.createElement("div",{className:"subscribe-style ".concat(l||"")},r.a.createElement("p",null,"Get E-mail updates about our latest shop and special offers."),r.a.createElement(o,{mailchimpUrl:"//devitems.us11.list-manage.com/subscribe/post?u=6bbb9b6f5827bd842d9640c82&id=05d85f18ef"})))}},524:function(e,t,a){"use strict";var n=a(515),r=a(532),l=a(0),c=a.n(l);a(536),a(522),a(523);t.a=function(e){Object(r.a)(e);var t=Object(l.useState)(0),a=Object(n.a)(t,2),o=(a[0],a[1]),i=Object(l.useState)(0),s=Object(n.a)(i,2),u=(s[0],s[1]);Object(l.useEffect)((function(){return u(100),window.addEventListener("scroll",m),function(){window.removeEventListener("scroll",m)}}),[]);var m=function(){o(window.scrollY)};return c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"footer-area"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-3 col-md-6"},c.a.createElement("div",{className:"footer-box about-widget"},c.a.createElement("h2",{className:"widget-title"},"About us"),c.a.createElement("p",null,"Ut enim ad minim veniam perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae."))),c.a.createElement("div",{className:"col-lg-3 col-md-6"},c.a.createElement("div",{className:"footer-box get-in-touch"},c.a.createElement("h2",{className:"widget-title"},"Get in Touch"),c.a.createElement("ul",null,c.a.createElement("li",null,"Tringle Spices"),c.a.createElement("li",null,"support@tringlespices.com"),c.a.createElement("li",null,"+91 9876543210")))),c.a.createElement("div",{className:"col-lg-3 col-md-6"},c.a.createElement("div",{className:"footer-box pages"},c.a.createElement("h2",{className:"widget-title"},"Pages"),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("a",{href:"index.html"},"Home")),c.a.createElement("li",null,c.a.createElement("a",{href:"about.html"},"About")),c.a.createElement("li",null,c.a.createElement("a",{href:"services.html"},"Shop")),c.a.createElement("li",null,c.a.createElement("a",{href:"news.html"},"News")),c.a.createElement("li",null,c.a.createElement("a",{href:"contact.html"},"Contact"))))),c.a.createElement("div",{className:"col-lg-3 col-md-6"},c.a.createElement("div",{className:"footer-box subscribe"},c.a.createElement("h2",{className:"widget-title"},"Subscribe"),c.a.createElement("p",null,"Subscribe to our mailing list to get the latest updates."),c.a.createElement("form",{action:"index.html"},c.a.createElement("input",{type:"email",placeholder:"Email"}),c.a.createElement("button",{type:"submit"},c.a.createElement("i",{className:"fas fa-paper-plane"})))))))),c.a.createElement("div",{className:"copyright"},c.a.createElement("div",{className:"container"},c.a.createElement("div",{className:"row"},c.a.createElement("div",{className:"col-lg-6 col-md-12"},c.a.createElement("p",null,"Copyrights \xa9 2022 -"," ",c.a.createElement("a",{href:"https://makinfratek.com/"},"Tringle Spices")," - All Rights Reserved.",c.a.createElement("br",null),"Powered By - ",c.a.createElement("a",{href:"https://makinfratek.com/"},"MakinfraTek"))),c.a.createElement("div",{className:"col-lg-6 text-right col-md-12"},c.a.createElement("div",{className:"social-icons"},c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement("a",{href:"#",target:"_blank"},c.a.createElement("i",{className:"fab fa-facebook-f"}))),c.a.createElement("li",null,c.a.createElement("a",{href:"#",target:"_blank"},c.a.createElement("i",{className:"fab fa-twitter"}))),c.a.createElement("li",null,c.a.createElement("a",{href:"#",target:"_blank"},c.a.createElement("i",{className:"fab fa-instagram"}))),c.a.createElement("li",null,c.a.createElement("a",{href:"#",target:"_blank"},c.a.createElement("i",{className:"fab fa-linkedin"}))),c.a.createElement("li",null,c.a.createElement("a",{href:"#",target:"_blank"},c.a.createElement("i",{className:"fab fa-dribbble"}))))))))))}},528:function(e,t,a){"use strict";var n=a(515),r=a(0),l=a.n(r),c=(a(519),a(525)),o=a(527),i=a(526),s=a(75),u=a(74),m=a(167),d=a(520),f=Object(u.connect)((function(e){return{currency:e.currencyData}}),(function(e){return{setCurrency:function(t){e(Object(m.b)(t))}}}))(Object(s.multilanguage)((function(e){var t=e.currency,a=e.setCurrency,n=e.currentLanguageCode,r=e.dispatch,c=e.borderStyle;return l.a.createElement("div",{className:"header-top-wap ".concat("fluid-border"===c?"border-bottom":"")},l.a.createElement(d.a,{currency:t,setCurrency:a,currentLanguageCode:n,dispatch:r}),l.a.createElement("div",{className:"header-offer"},l.a.createElement("p",null,"Free delivery on order over"," ",l.a.createElement("span",null,t.currencySymbol+(200*t.currencyRate).toFixed(2)))))})));t.a=function(e){var t=e.layout,a=e.top,s=e.borderStyle,u=e.headerPaddingClass,m=e.headerPositionClass,d=e.headerBgClass,p=Object(r.useState)(0),b=Object(n.a)(p,2),E=b[0],g=b[1],v=Object(r.useState)(0),h=Object(n.a)(v,2),y=h[0],N=h[1];Object(r.useEffect)((function(){var e=document.querySelector(".sticky-bar");return N(e.offsetTop),window.addEventListener("scroll",w),function(){window.removeEventListener("scroll",w)}}),[]);var w=function(){g(window.scrollY)};return l.a.createElement("header",{className:"header-area clearfix ".concat(d||""," ").concat(m||"")},l.a.createElement("div",{className:"".concat(u||""," ").concat("visible"===a?"d-none d-lg-block":"d-none"," header-top-area ").concat("fluid-border"===s?"border-none":"")},l.a.createElement("div",{className:"container-fluid"===t?t:"container"},l.a.createElement(f,{borderStyle:s}))),l.a.createElement("div",{className:" ".concat(u||""," sticky-bar header-res-padding clearfix ").concat(E>y?"stick":"")},l.a.createElement("div",{className:"container-fluid"===t?t:"container"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-xl-4 col-lg-2 col-md-6 col-4",style:{height:"100%",margin:"auto"}},l.a.createElement("h4",{style:{color:"#f28123",fontWeight:"bold",fontSize:"2rem",textAlign:"center",display:"flex",alignItems:"center",justifyContent:"center"}},"Tringle Spices")),l.a.createElement("div",{className:"col-xl-6 col-lg-8 d-none d-lg-block"},l.a.createElement(c.a,null)),l.a.createElement("div",{className:"col-xl-2 col-lg-2 col-md-6 col-8"},l.a.createElement(o.a,null)))),l.a.createElement(i.a,null)))}},529:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,r=a(0),l=(n=a(22))&&n.__esModule?n:{default:n};function c(e){return(c="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function i(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==c(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function u(e){return(u=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function m(e,t){return(m=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d=function(e){function t(){return o(this,t),s(this,u(t).apply(this,arguments))}var a,n,l;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&m(e,t)}(t,e),a=t,(n=[{key:"getChildContext",value:function(){return{extract:this.props.extract}}},{key:"render",value:function(){return r.Children.only(this.props.children)}}])&&i(a.prototype,n),l&&i(a,l),t}(r.Component);!function(e,t,a){t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a}(d,"childContextTypes",{extract:l.default.func});var f=d;t.default=f,e.exports=t.default},530:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.filterAndArrangeTags=function(e){var t=null,a=null,n=[],c=[];return e.forEach((function(e){var r=e.type,l=e.props;"title"===r?t=e:"link"===r&&"canonical"===l.rel?a=e:"meta"===r?n.push(e):c.push(e)})),[t].concat(function(e){return function(e){if(Array.isArray(e)){for(var t=0,a=new Array(e.length);t<e.length;t++)a[t]=e[t];return a}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}(function(e){var t={};l.forEach((function(e){t[e]=[]}));for(var a=[],n=function(n){var c=e[n],o=c.props.id;(o?!t.id[o]:0===r.filter((function(e){var a=c.props[e],n=t[e][a];return n&&!n.props.id})).length)&&(a.unshift(c),l.forEach((function(e){var a=c.props[e];a&&(t[e][a]=c)})))},c=e.length-1;c>=0;c--)n(c);return a}(n)),[a],c)},t.getDuplicateTitle=function(){return document.head.querySelectorAll("title")},t.getDuplicateCanonical=function(){return document.head.querySelectorAll('link[rel="canonical"]')},t.getDuplicateMeta=function(e){var t=document.head,a=e.id;if(a)return a&&t.querySelector("#".concat(a));return n.reduce((function(a,n){var r,l=e.getAttribute(n);return l?a.concat((r=t.querySelectorAll("[".concat(n,' = "').concat(l,'"]')),(r=Array.prototype.slice.call(r||[])).filter((function(e){return!e.id})))):a}),[])},t.appendChild=function(e,t){void 0===t.length&&(t=[t]);for(var a=document.createDocumentFragment(),n=0,r=t.length;n<r;n++)a.appendChild(t[n]);e.appendChild(a)},t.removeChild=function(e,t){void 0===t.length&&(t=[t]);for(var a=0,n=t.length;a<n;a++)e.removeChild(t[a])};var n=["property","name","itemprop"],r=n.concat(["itemProp"]),l=r.concat(["id"])},531:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var a in e)if(Object.prototype.hasOwnProperty.call(e,a)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,a):{};n.get||n.set?Object.defineProperty(t,a,n):t[a]=e[a]}return t.default=e,t}(a(0)),r=c(a(22)),l=c(a(516));function c(e){return e&&e.__esModule?e:{default:e}}function o(e){return(o="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function s(e,t){for(var a=0;a<t.length;a++){var n=t[a];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){return!t||"object"!==o(t)&&"function"!==typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f,p,b,E=function(e){function t(){return i(this,t),u(this,m(t).apply(this,arguments))}var a,r,c;return function(e,t){if("function"!==typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),a=t,(r=[{key:"render",value:function(){return n.default.createElement(l.default,null,n.default.createElement("title",null,this.props.title))}}])&&s(a.prototype,r),c&&s(a,c),t}(n.Component);f=E,p="propTypes",b={title:r.default.string},p in f?Object.defineProperty(f,p,{value:b,enumerable:!0,configurable:!0,writable:!0}):f[p]=b;var g=E;t.default=g,e.exports=t.default},532:function(e,t,a){"use strict";function n(e){if(null==e)throw new TypeError("Cannot destructure undefined")}a.d(t,"a",(function(){return n}))},534:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(528),c=a(524);t.a=function(e){var t=e.children,a=e.headerContainerClass,o=e.headerTop,i=e.headerPaddingClass,s=e.headerPositionClass;return r.a.createElement(n.Fragment,null,r.a.createElement(l.a,{layout:a,top:o,headerPaddingClass:i,headerPositionClass:s}),t,r.a.createElement(c.a,{backgroundColorClass:"bg-gray",spaceTopClass:"pt-100",spaceBottomClass:"pb-70"}))}},538:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(124),c=a(168);t.a=function(){return r.a.createElement("div",{className:"breadcrumb-area pt-35 pb-35 bg-gray-3"},r.a.createElement("div",{className:"container"},r.a.createElement("div",{className:"breadcrumb-content text-center"},r.a.createElement(c.Breadcrumbs,{separator:r.a.createElement("span",null,"/"),item:l.c,finalItem:"span"}))))}},656:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(124);t.a=function(){return r.a.createElement("div",{className:"sidebar-style"},r.a.createElement("div",{className:"sidebar-widget"},r.a.createElement("h4",{className:"pro-sidebar-title"},"Search "),r.a.createElement("div",{className:"pro-sidebar-search mb-55 mt-25"},r.a.createElement("form",{className:"pro-sidebar-search-form",action:"#"},r.a.createElement("input",{type:"text",placeholder:"Search here..."}),r.a.createElement("button",null,r.a.createElement("i",{className:"pe-7s-search"}))))),r.a.createElement("div",{className:"sidebar-widget"},r.a.createElement("h4",{className:"pro-sidebar-title"},"Recent Projects "),r.a.createElement("div",{className:"sidebar-project-wrap mt-30"},r.a.createElement("div",{className:"single-sidebar-blog"},r.a.createElement("div",{className:"sidebar-blog-img"},r.a.createElement(l.b,{to:"/blog-details-standard"},r.a.createElement("img",{src:"/assets/img/blog/sidebar-1.jpg",alt:""}))),r.a.createElement("div",{className:"sidebar-blog-content"},r.a.createElement("span",null,"Photography"),r.a.createElement("h4",null,r.a.createElement(l.b,{to:"/blog-details-standard"},"T- Shart And Jeans")))),r.a.createElement("div",{className:"single-sidebar-blog"},r.a.createElement("div",{className:"sidebar-blog-img"},r.a.createElement(l.b,{to:"/blog-details-standard"},r.a.createElement("img",{src:"/assets/img/blog/sidebar-2.jpg",alt:""}))),r.a.createElement("div",{className:"sidebar-blog-content"},r.a.createElement("span",null,"Branding"),r.a.createElement("h4",null,r.a.createElement(l.b,{to:"/blog-details-standard"},"T- Shart And Jeans")))),r.a.createElement("div",{className:"single-sidebar-blog"},r.a.createElement("div",{className:"sidebar-blog-img"},r.a.createElement(l.b,{to:"/blog-details-standard"},r.a.createElement("img",{src:"/assets/img/blog/sidebar-3.jpg",alt:""}))),r.a.createElement("div",{className:"sidebar-blog-content"},r.a.createElement("span",null,"Design"),r.a.createElement("h4",null,r.a.createElement(l.b,{to:"/blog-details-standard"},"T- Shart And Jeans")))),r.a.createElement("div",{className:"single-sidebar-blog"},r.a.createElement("div",{className:"sidebar-blog-img"},r.a.createElement(l.b,{to:"/blog-details-standard"},r.a.createElement("img",{src:"/assets/img/blog/sidebar-2.jpg",alt:""}))),r.a.createElement("div",{className:"sidebar-blog-content"},r.a.createElement("span",null,"Photography"),r.a.createElement("h4",null,r.a.createElement(l.b,{to:"/blog-details-standard"},"T- Shart And Jeans")))))),r.a.createElement("div",{className:"sidebar-widget mt-35"},r.a.createElement("h4",{className:"pro-sidebar-title"},"Categories"),r.a.createElement("div",{className:"sidebar-widget-list sidebar-widget-list--blog mt-20"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement("div",{className:"sidebar-widget-list-left"},r.a.createElement("input",{type:"checkbox",defaultValue:!0})," ",r.a.createElement(l.b,{to:"/blog-standard"},"Women ",r.a.createElement("span",null,"4")," "),r.a.createElement("span",{className:"checkmark"}))),r.a.createElement("li",null,r.a.createElement("div",{className:"sidebar-widget-list-left"},r.a.createElement("input",{type:"checkbox",defaultValue:!0})," ",r.a.createElement(l.b,{to:"/blog-standard"},"Men ",r.a.createElement("span",null,"4")," "),r.a.createElement("span",{className:"checkmark"}))),r.a.createElement("li",null,r.a.createElement("div",{className:"sidebar-widget-list-left"},r.a.createElement("input",{type:"checkbox",defaultValue:!0})," ",r.a.createElement(l.b,{to:"/blog-standard"},"Bags ",r.a.createElement("span",null,"4")," "),r.a.createElement("span",{className:"checkmark"}))),r.a.createElement("li",null,r.a.createElement("div",{className:"sidebar-widget-list-left"},r.a.createElement("input",{type:"checkbox",defaultValue:!0})," ",r.a.createElement(l.b,{to:"/blog-standard"},"Accessories ",r.a.createElement("span",null,"4")," "),r.a.createElement("span",{className:"checkmark"})))))),r.a.createElement("div",{className:"sidebar-widget mt-50"},r.a.createElement("h4",{className:"pro-sidebar-title"},"Tag "),r.a.createElement("div",{className:"sidebar-widget-tag mt-25"},r.a.createElement("ul",null,r.a.createElement("li",null,r.a.createElement(l.b,{to:"/blog-standard"},"Clothing")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/blog-standard"},"Accessories")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/blog-standard"},"For Men")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/blog-standard"},"Women")),r.a.createElement("li",null,r.a.createElement(l.b,{to:"/blog-standard"},"Fashion"))))))}}}]);
//# sourceMappingURL=6.c613affe.chunk.js.map