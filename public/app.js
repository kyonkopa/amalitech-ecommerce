!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=6)}([function(t,e,n){"use strict";function r(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,e){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var n=[],r=!0,o=!1,i=void 0;try{for(var a,A=t[Symbol.iterator]();!(r=(a=A.next()).done)&&(n.push(a.value),!e||n.length!==e);r=!0);}catch(t){o=!0,i=t}finally{try{r||null==A.return||A.return()}finally{if(o)throw i}}return n}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return o(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return o(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}t.exports=function(t){var e=r(t,4),n=e[1],o=e[3];if("function"==typeof btoa){var i=btoa(unescape(encodeURIComponent(JSON.stringify(o)))),a="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(i),A="/*# ".concat(a," */"),d=o.sources.map((function(t){return"/*# sourceURL=".concat(o.sourceRoot||"").concat(t," */")}));return[n].concat(d).concat([A]).join("\n")}return[n].join("\n")}},function(t,e,n){"use strict";t.exports=function(t){var e=[];return e.toString=function(){return this.map((function(e){var n=t(e);return e[2]?"@media ".concat(e[2]," {").concat(n,"}"):n})).join("")},e.i=function(t,n,r){"string"==typeof t&&(t=[[null,t,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var A=0;A<t.length;A++){var d=[].concat(t[A]);r&&o[d[0]]||(n&&(d[2]?d[2]="".concat(n," and ").concat(d[2]):d[2]=n),e.push(d))}},e}},function(t,e,n){var r=n(3),o=n(4);"string"==typeof(o=o.__esModule?o.default:o)&&(o=[[t.i,o,""]]);var i={insert:"head",singleton:!1};r(o,i);t.exports=o.locals||{}},function(t,e,n){"use strict";var r,o=function(){return void 0===r&&(r=Boolean(window&&document&&document.all&&!window.atob)),r},i=function(){var t={};return function(e){if(void 0===t[e]){var n=document.querySelector(e);if(window.HTMLIFrameElement&&n instanceof window.HTMLIFrameElement)try{n=n.contentDocument.head}catch(t){n=null}t[e]=n}return t[e]}}(),a=[];function A(t){for(var e=-1,n=0;n<a.length;n++)if(a[n].identifier===t){e=n;break}return e}function d(t,e){for(var n={},r=[],o=0;o<t.length;o++){var i=t[o],d=e.base?i[0]+e.base:i[0],s=n[d]||0,c="".concat(d," ").concat(s);n[d]=s+1;var p=A(c),l={css:i[1],media:i[2],sourceMap:i[3]};-1!==p?(a[p].references++,a[p].updater(l)):a.push({identifier:c,updater:g(l,e),references:1}),r.push(c)}return r}function s(t){var e=document.createElement("style"),r=t.attributes||{};if(void 0===r.nonce){var o=n.nc;o&&(r.nonce=o)}if(Object.keys(r).forEach((function(t){e.setAttribute(t,r[t])})),"function"==typeof t.insert)t.insert(e);else{var a=i(t.insert||"head");if(!a)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");a.appendChild(e)}return e}var c,p=(c=[],function(t,e){return c[t]=e,c.filter(Boolean).join("\n")});function l(t,e,n,r){var o=n?"":r.media?"@media ".concat(r.media," {").concat(r.css,"}"):r.css;if(t.styleSheet)t.styleSheet.cssText=p(e,o);else{var i=document.createTextNode(o),a=t.childNodes;a[e]&&t.removeChild(a[e]),a.length?t.insertBefore(i,a[e]):t.appendChild(i)}}function C(t,e,n){var r=n.css,o=n.media,i=n.sourceMap;if(o?t.setAttribute("media",o):t.removeAttribute("media"),i&&"undefined"!=typeof btoa&&(r+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(i))))," */")),t.styleSheet)t.styleSheet.cssText=r;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(r))}}var u=null,b=0;function g(t,e){var n,r,o;if(e.singleton){var i=b++;n=u||(u=s(e)),r=l.bind(null,n,i,!1),o=l.bind(null,n,i,!0)}else n=s(e),r=C.bind(null,n,e),o=function(){!function(t){if(null===t.parentNode)return!1;t.parentNode.removeChild(t)}(n)};return r(t),function(e){if(e){if(e.css===t.css&&e.media===t.media&&e.sourceMap===t.sourceMap)return;r(t=e)}else o()}}t.exports=function(t,e){(e=e||{}).singleton||"boolean"==typeof e.singleton||(e.singleton=o());var n=d(t=t||[],e);return function(t){if(t=t||[],"[object Array]"===Object.prototype.toString.call(t)){for(var r=0;r<n.length;r++){var o=A(n[r]);a[o].references--}for(var i=d(t,e),s=0;s<n.length;s++){var c=A(n[s]);0===a[c].references&&(a[c].updater(),a.splice(c,1))}n=i}}}},function(t,e,n){"use strict";n.r(e);var r=n(0),o=n.n(r),i=n(1),a=n.n(i)()(o.a);a.push([t.i,'body{margin:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif !important;text-rendering:optimizeLegibility}input,select,textarea{outline:none;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif !important}input:-webkit-autofill,input:-webkit-autofill:hover,input:-webkit-autofill:focus,input:-webkit-autofill:active textarea:-webkit-autofill,textarea:-webkit-autofill:hover,textarea:-webkit-autofill:focus,textarea:-webkit-autofill:active{-webkit-box-shadow:0 0 0 30px white inset !important;box-shadow:0 0 0 30px white inset !important}button::-moz-focus-inner{border:0}button:focus{outline:0}button:active{outline:none;border:none}button{cursor:pointer;border:none;font-size:1em;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif !important}select{cursor:pointer}fieldset{border:none}a{text-decoration:none;font-family:inherit;color:inherit;cursor:pointer}ul{list-style:none;margin:0}strong,b{font-weight:600}hr{border:0.5px solid #e6e6e6;margin:1em 0}body{font-size:16px}body .d-flex{display:flex}body .d-flex .spacer{flex-grow:1}body a:hover{text-decoration:underline}body .block{display:block}body .notification{width:300px;position:fixed;top:10px;background:black;border-radius:5px;right:-340px;color:#fff;padding:18px;box-shadow:0 3px 5px -1px rgba(0,0,0,0.2),0 6px 10px 0 rgba(0,0,0,0.14),0 1px 18px 0 rgba(0,0,0,0.12);background-color:#333;margin:0 auto;font-size:0.9em;transition:right ease-out 300ms}body .notification.show{right:20px}body .button-set{margin:10px 0}body .button-set button,body .button-set a{font-size:0.9rem;padding:18px;background:#002b5c;color:#fff;border-radius:5px;text-transform:uppercase;font-weight:bold;border:none;display:block;width:100%;cursor:pointer;margin-top:8px;box-sizing:border-box;text-align:center;font-weight:400}body .button-set button.outlined,body .button-set a.outlined{border:1px solid #002b5c;background:#fff;color:#002b5c}body .info{margin-top:5px;font-size:0.9rem;color:#002b5c}body .primary--text{color:#002b5c}body .template{display:none !important}body .input-field{font-size:0.75rem;padding:10px;border-radius:5px;border:1px solid #d7d7d7;height:40px;box-sizing:border-box}body .input-field.error{border-color:red}header{padding:20px;position:relative;border-bottom:1px solid #d0d0d0;margin-bottom:30px;text-align:right}header .cart{display:inline-block;height:100%}header .cart #cart-count{font-weight:bold}main{padding:10px;width:80%;margin:0 auto;max-width:1400px;box-sizing:border-box}.overlay{width:100%;height:100%;position:fixed;background:rgba(0,0,0,0.68);display:none;top:0}.overlay.show{display:block}.prod-details-wrap{display:flex;flex-wrap:wrap;max-width:1300px}.prod-details-wrap .prod-img-wrap{flex-basis:50%;margin:0 2.5em}.prod-details-wrap .prod-img-wrap .img{width:100%;height:100%;background-size:cover;background-position:center;border:4px solid #f2f2f2;border-radius:10px}.prod-details-wrap .color-picker{cursor:default}.prod-details-wrap .color-picker .cl{width:30px;height:30px;border-radius:50%;border:2px solid transparent;display:inline-block;cursor:pointer;transition:box-shadow ease-out 200ms;margin-right:5px}.prod-details-wrap .color-picker .cl:hover{border-color:wheat}.prod-details-wrap .color-picker .cl.active{border-color:#002b5c}.prod-details-wrap .size-picker{margin-top:2rem}.prod-details-wrap .size-picker>span{padding:15px 10px;display:inline-block;background:#f2f2f2;color:#676767;font-weight:bold;margin:0 3px 3px 0;cursor:pointer;transition:all ease-out 200ms;min-width:40px;box-sizing:border-box;text-align:center;border:2px solid transparent;border-radius:5px}.prod-details-wrap .size-picker>span:hover{border-color:#002b5c}.prod-details-wrap .size-picker>span.active{background:#002b5c;color:#fff}.prod-details-wrap .quantity-selector{margin-top:2rem}.prod-details-wrap .quantity-selector input#quantity-field{width:2.5em;height:2.5em;text-align:center;font-size:1rem;margin:0 5px;border:1px solid silver;border-radius:5px}.prod-details-wrap .quantity-selector>button{width:2.4rem;height:2.4rem;border-radius:50%;font-size:1.2rem;border:none;color:#002b5c;cursor:pointer;text-align:center;box-shadow:0 3px 1px -2px rgba(0,0,0,0.2),0 2px 2px 0 rgba(0,0,0,0.14),0 1px 5px 0 rgba(0,0,0,0.12) !important}.prod-details-wrap aside.prod-desc{max-width:500px}.prod-details-wrap aside.prod-desc .desc{color:#717171}.prod-details-wrap aside.prod-desc #add-to-cart-btn{margin-top:10%}aside.mini-cart{right:-400px;position:fixed;top:0;width:400px;background:#fff;height:100%;box-shadow:0 0 10px rgba(0,0,0,0.3);transition:right ease-out 300ms;z-index:10}aside.mini-cart.show{right:0}aside.mini-cart .head{padding:20px;text-align:center;color:#fff;background:#002b5c;font-weight:600}aside.mini-cart .body{padding:20px}aside.mini-cart .body .item-wrap{display:flex;border-bottom:1px solid silver;padding-bottom:15px;margin-bottom:10px}aside.mini-cart .body .item-wrap .img{width:200px;height:180px;background-color:#e3e3e3;border-radius:5px;margin-right:10px;background-size:cover}aside.mini-cart .body .item-wrap .item-name{margin-top:0}main.cart-page h1,main.cart-page h2,main.cart-page h3{margin-top:0}main.cart-page .table-wrap{width:69%;display:inline-block;padding:0 3% 0 0;box-sizing:border-box;vertical-align:top}main.cart-page .table-wrap table{border:1px solid #e9e9e9;width:100%;border-radius:10px;box-shadow:0 0 16px 1px rgba(0,0,0,0.05);border-collapse:collapse;overflow:hidden}main.cart-page .table-wrap table thead{background:#ededed}main.cart-page .table-wrap table th,main.cart-page .table-wrap table td{text-align:left;padding:15px;font-weight:normal}main.cart-page .table-wrap table tr{border-bottom:1px solid #e8e8e8}main.cart-page .table-wrap table tr .row-info{font-size:0.85em;color:#717171}main.cart-page .table-wrap table .img{width:70px;height:70px;display:inline-block;background-size:cover;border-radius:5px;margin-right:10px}main.cart-page .table-wrap table .actions a{font-size:0.8em;background-repeat:no-repeat;width:20px;height:20px;display:inline-block}main.cart-page .table-wrap table .actions a:hover{opacity:0.3}main.cart-page .table-wrap table .actions a.del{opacity:0.5}main.cart-page .table-wrap table .quantity-selector{display:inline-block;display:inline-block;border:1px solid #ededed;border-radius:5px;padding:8px 5px}main.cart-page .table-wrap table .quantity-selector input{width:1em;height:1em;text-align:center;margin:0 2px;padding:5px;border:none}main.cart-page .table-wrap table .quantity-selector input:disabled{background:transparent}main.cart-page .table-wrap table .quantity-selector>button{background:none}main.cart-page aside.order-summary{display:inline-block;width:30%;box-shadow:0 0 16px 1px rgba(0,0,0,0.05);border-radius:10px;overflow:hidden}main.cart-page aside.order-summary .head{background:#002b5c;color:#fff;padding:20px}main.cart-page aside.order-summary .head h3{margin:0}main.cart-page aside.order-summary .body{padding:20px}main.cart-page aside.order-summary .body .d-flex{padding:10px 0;color:#333}main.cart-page aside.order-summary .body .button-set{margin-top:3em}main.cart-page aside.order-summary .btn{height:40px;padding:5px 30px;border-radius:5px;background:#002b5c;color:#fff;font-size:0.9em;margin-left:8px}main.cart-page .cart-chip{background:black;color:#fff;font-size:0.6em;padding:8px 12px;border-radius:50%;margin-left:10px;height:40px;width:40px;box-sizing:border-box;text-align:center}main.cart-page table.summary td{padding:10px}\n',"",{version:3,sources:["webpack://./src/normalize.scss","webpack://./src/styles.scss"],names:[],mappings:"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",sourcesContent:['$font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen-Sans,\n\tUbuntu, Cantarell, "Helvetica Neue", sans-serif !important;\n\nbody {\n\tmargin: 0;\n\tfont-family: $font-family;\n\ttext-rendering: optimizeLegibility;\n}\n\ninput,\nselect,\ntextarea {\n\toutline: none;\n\tfont-family: $font-family;\n}\n\ninput:-webkit-autofill,\ninput:-webkit-autofill:hover,\ninput:-webkit-autofill:focus,\ninput:-webkit-autofill:active textarea:-webkit-autofill,\ntextarea:-webkit-autofill:hover,\ntextarea:-webkit-autofill:focus,\ntextarea:-webkit-autofill:active {\n\t-webkit-box-shadow: 0 0 0 30px white inset !important;\n\tbox-shadow: 0 0 0 30px white inset !important;\n}\n\nbutton::-moz-focus-inner {\n\tborder: 0;\n}\n\nbutton:focus {\n\toutline: 0;\n}\n\nbutton:active {\n\toutline: none;\n\tborder: none;\n}\n\nbutton {\n\tcursor: pointer;\n\tborder: none;\n\tfont-size: 1em;\n\tfont-family: $font-family;\n}\n\nselect {\n\tcursor: pointer;\n}\n\nfieldset {\n\tborder: none;\n}\n\na {\n\ttext-decoration: none;\n\tfont-family: inherit;\n\tcolor: inherit;\n\tcursor: pointer;\n}\n\nul {\n\tlist-style: none;\n\tmargin: 0;\n}\n\nstrong,\nb {\n\tfont-weight: 600;\n}\n\nhr {\n\tborder: 0.5px solid #e6e6e6;\n\tmargin: 1em 0;\n}\n','@import "normalize";\n\n$primary: #002b5c;\n$box-shadow: 0 3px 1px -2px rgba(0, 0, 0, 0.2), 0 2px 2px 0 rgba(0, 0, 0, 0.14),\n\t0 1px 5px 0 rgba(0, 0, 0, 0.12) !important;\n\nbody {\n\tfont-size: 16px;\n\n\t.d-flex {\n\t\tdisplay: flex;\n\n\t\t.spacer {\n\t\t\tflex-grow: 1;\n\t\t}\n\t}\n\n\ta:hover {\n\t\ttext-decoration: underline;\n\t}\n\n\t.block {\n\t\tdisplay: block;\n\t}\n\n\t.notification {\n\t\twidth: 300px;\n\t\tposition: fixed;\n\t\ttop: 10px;\n\t\tbackground: black;\n\t\tborder-radius: 5px;\n\t\tright: -340px;\n\t\tcolor: #fff;\n\t\tpadding: 18px;\n\t\tbox-shadow: 0 3px 5px -1px rgba(0, 0, 0, 0.2),\n\t\t\t0 6px 10px 0 rgba(0, 0, 0, 0.14), 0 1px 18px 0 rgba(0, 0, 0, 0.12);\n\t\tbackground-color: #333;\n\t\tmargin: 0 auto;\n\t\tfont-size: 0.9em;\n\t\ttransition: right ease-out 300ms;\n\n\t\t&.show {\n\t\t\tright: 20px;\n\t\t}\n\t}\n\n\t.button-set {\n\t\tmargin: 10px 0;\n\n\t\tbutton,\n\t\ta {\n\t\t\tfont-size: 0.9rem;\n\t\t\tpadding: 18px;\n\t\t\tbackground: $primary;\n\t\t\tcolor: #fff;\n\t\t\tborder-radius: 5px;\n\t\t\ttext-transform: uppercase;\n\t\t\tfont-weight: bold;\n\t\t\tborder: none;\n\t\t\tdisplay: block;\n\t\t\twidth: 100%;\n\t\t\tcursor: pointer;\n\t\t\tmargin-top: 8px;\n\t\t\tbox-sizing: border-box;\n\t\t\ttext-align: center;\n\t\t\tfont-weight: 400;\n\n\t\t\t&.outlined {\n\t\t\t\tborder: 1px solid $primary;\n\t\t\t\tbackground: #fff;\n\t\t\t\tcolor: $primary;\n\t\t\t}\n\t\t}\n\t}\n\n\t.info {\n\t\tmargin-top: 5px;\n\t\tfont-size: 0.9rem;\n\t\tcolor: $primary;\n\t}\n\n\t.primary--text {\n\t\tcolor: $primary;\n\t}\n\n\t.template {\n\t\tdisplay: none !important;\n\t}\n\n\t.input-field {\n\t\tfont-size: 0.75rem;\n\t\tpadding: 10px;\n\t\tborder-radius: 5px;\n\t\tborder: 1px solid #d7d7d7;\n\t\theight: 40px;\n\t\tbox-sizing: border-box;\n\n\t\t&.error {\n\t\t\tborder-color: red;\n\t\t}\n\t}\n}\n\nheader {\n\tpadding: 20px;\n\tposition: relative;\n\tborder-bottom: 1px solid rgb(208, 208, 208);\n\tmargin-bottom: 30px;\n\ttext-align: right;\n\n\t.cart {\n\t\tdisplay: inline-block;\n\t\theight: 100%;\n\n\t\t#cart-count {\n\t\t\tfont-weight: bold;\n\t\t}\n\t}\n}\n\nmain {\n\tpadding: 10px;\n\twidth: 80%;\n\tmargin: 0 auto;\n\tmax-width: 1400px;\n\tbox-sizing: border-box;\n}\n\n.overlay {\n\twidth: 100%;\n\theight: 100%;\n\tposition: fixed;\n\tbackground: rgba(0, 0, 0, 0.68);\n\tdisplay: none;\n\ttop: 0;\n\n\t&.show {\n\t\tdisplay: block;\n\t}\n}\n\n.prod-details-wrap {\n\tdisplay: flex;\n\tflex-wrap: wrap;\n\tmax-width: 1300px;\n\n\t.prod-img-wrap {\n\t\tflex-basis: 50%;\n\t\tmargin: 0 2.5em;\n\t\t// image\n\t\t.img {\n\t\t\twidth: 100%;\n\t\t\theight: 100%;\n\t\t\tbackground-size: cover;\n\t\t\tbackground-position: center;\n\t\t\tborder: 4px solid #f2f2f2;\n\t\t\tborder-radius: 10px;\n\t\t}\n\t}\n\n\t.color-picker {\n\t\tcursor: default;\n\t\t.cl {\n\t\t\twidth: 30px;\n\t\t\theight: 30px;\n\t\t\tborder-radius: 50%;\n\t\t\tborder: 2px solid transparent;\n\t\t\tdisplay: inline-block;\n\t\t\tcursor: pointer;\n\t\t\ttransition: box-shadow ease-out 200ms;\n\t\t\tmargin-right: 5px;\n\n\t\t\t&:hover {\n\t\t\t\tborder-color: wheat;\n\t\t\t}\n\n\t\t\t&.active {\n\t\t\t\tborder-color: $primary;\n\t\t\t}\n\t\t}\n\t}\n\n\t.size-picker {\n\t\tmargin-top: 2rem;\n\t\t& > span {\n\t\t\tpadding: 15px 10px;\n\t\t\tdisplay: inline-block;\n\t\t\tbackground: #f2f2f2;\n\t\t\tcolor: #676767;\n\t\t\tfont-weight: bold;\n\t\t\tmargin: 0 3px 3px 0;\n\t\t\tcursor: pointer;\n\t\t\ttransition: all ease-out 200ms;\n\t\t\tmin-width: 40px;\n\t\t\tbox-sizing: border-box;\n\t\t\ttext-align: center;\n\t\t\tborder: 2px solid transparent;\n\t\t\tborder-radius: 5px;\n\n\t\t\t&:hover {\n\t\t\t\tborder-color: $primary;\n\t\t\t}\n\n\t\t\t&.active {\n\t\t\t\tbackground: $primary;\n\t\t\t\tcolor: #fff;\n\t\t\t}\n\t\t}\n\t}\n\n\t.quantity-selector {\n\t\tmargin-top: 2rem;\n\n\t\tinput#quantity-field {\n\t\t\twidth: 2.5em;\n\t\t\theight: 2.5em;\n\t\t\ttext-align: center;\n\t\t\tfont-size: 1rem;\n\t\t\tmargin: 0 5px;\n\t\t\tborder: 1px solid silver;\n\t\t\tborder-radius: 5px;\n\t\t}\n\n\t\t& > button {\n\t\t\twidth: 2.4rem;\n\t\t\theight: 2.4rem;\n\t\t\tborder-radius: 50%;\n\t\t\tfont-size: 1.2rem;\n\t\t\tborder: none;\n\t\t\tcolor: $primary;\n\t\t\tcursor: pointer;\n\t\t\ttext-align: center;\n\t\t\tbox-shadow: $box-shadow;\n\t\t}\n\t}\n\n\taside.prod-desc {\n\t\tmax-width: 500px;\n\t\t.desc {\n\t\t\tcolor: #717171;\n\t\t}\n\n\t\t#add-to-cart-btn {\n\t\t\tmargin-top: 10%;\n\t\t}\n\t}\n}\n\naside.mini-cart {\n\tright: -400px;\n\tposition: fixed;\n\ttop: 0;\n\twidth: 400px;\n\tbackground: #fff;\n\theight: 100%;\n\tbox-shadow: 0 0 10px rgba(0, 0, 0, 0.3);\n\ttransition: right ease-out 300ms;\n\tz-index: 10;\n\n\t&.show {\n\t\tright: 0;\n\t}\n\n\t.head {\n\t\tpadding: 20px;\n\t\ttext-align: center;\n\t\tcolor: #fff;\n\t\tbackground: $primary;\n\t\tfont-weight: 600;\n\t}\n\n\t.body {\n\t\tpadding: 20px;\n\t\t.item-wrap {\n\t\t\tdisplay: flex;\n\t\t\tborder-bottom: 1px solid silver;\n\t\t\tpadding-bottom: 15px;\n\t\t\tmargin-bottom: 10px;\n\n\t\t\t.img {\n\t\t\t\twidth: 200px;\n\t\t\t\theight: 180px;\n\t\t\t\tbackground-color: #e3e3e3;\n\t\t\t\tborder-radius: 5px;\n\t\t\t\tmargin-right: 10px;\n\t\t\t\tbackground-size: cover;\n\t\t\t}\n\n\t\t\t.item-name {\n\t\t\t\tmargin-top: 0;\n\t\t\t}\n\t\t}\n\t}\n}\n\nmain.cart-page {\n\th1,\n\th2,\n\th3 {\n\t\tmargin-top: 0;\n\t}\n\t.table-wrap {\n\t\twidth: 69%;\n\t\tdisplay: inline-block;\n\t\tpadding: 0 3% 0 0;\n\t\tbox-sizing: border-box;\n\t\tvertical-align: top;\n\n\t\ttable {\n\t\t\tborder: 1px solid #e9e9e9;\n\t\t\twidth: 100%;\n\t\t\tborder-radius: 10px;\n\t\t\tbox-shadow: 0 0 16px 1px rgba(0, 0, 0, 0.05);\n\t\t\tborder-collapse: collapse;\n\t\t\toverflow: hidden;\n\n\t\t\tthead {\n\t\t\t\tbackground: #ededed;\n\t\t\t}\n\t\t\tth,\n\t\t\ttd {\n\t\t\t\ttext-align: left;\n\t\t\t\tpadding: 15px;\n\t\t\t\tfont-weight: normal;\n\t\t\t}\n\t\t\ttr {\n\t\t\t\tborder-bottom: 1px solid #e8e8e8;\n\n\t\t\t\t.row-info {\n\t\t\t\t\tfont-size: 0.85em;\n\t\t\t\t\tcolor: #717171;\n\t\t\t\t}\n\t\t\t}\n\n\t\t\t.img {\n\t\t\t\twidth: 70px;\n\t\t\t\theight: 70px;\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tbackground-size: cover;\n\t\t\t\tborder-radius: 5px;\n\t\t\t\tmargin-right: 10px;\n\t\t\t}\n\n\t\t\t.actions {\n\t\t\t\ta {\n\t\t\t\t\tfont-size: 0.8em;\n\t\t\t\t\tbackground-repeat: no-repeat;\n\t\t\t\t\twidth: 20px;\n\t\t\t\t\theight: 20px;\n\t\t\t\t\tdisplay: inline-block;\n\n\t\t\t\t\t&:hover {\n\t\t\t\t\t\topacity: 0.3;\n\t\t\t\t\t}\n\n\t\t\t\t\t&.del {\n\t\t\t\t\t\topacity: 0.5;\n\t\t\t\t\t}\n\t\t\t\t}\n\t\t\t}\n\t\t\t.quantity-selector {\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tdisplay: inline-block;\n\t\t\t\tborder: 1px solid #ededed;\n\t\t\t\tborder-radius: 5px;\n\t\t\t\tpadding: 8px 5px;\n\n\t\t\t\tinput {\n\t\t\t\t\twidth: 1em;\n\t\t\t\t\theight: 1em;\n\t\t\t\t\ttext-align: center;\n\t\t\t\t\tmargin: 0 2px;\n\t\t\t\t\tpadding: 5px;\n\t\t\t\t\tborder: none;\n\t\t\t\t\t&:disabled {\n\t\t\t\t\t\tbackground: transparent;\n\t\t\t\t\t}\n\t\t\t\t}\n\n\t\t\t\t& > button {\n\t\t\t\t\tbackground: none;\n\t\t\t\t}\n\t\t\t}\n\t\t}\n\t}\n\n\taside.order-summary {\n\t\tdisplay: inline-block;\n\t\twidth: 30%;\n\t\tbox-shadow: 0 0 16px 1px rgba(0, 0, 0, 0.05);\n\t\tborder-radius: 10px;\n\t\toverflow: hidden;\n\n\t\t.head {\n\t\t\tbackground: $primary;\n\t\t\tcolor: #fff;\n\t\t\tpadding: 20px;\n\t\t\th3 {\n\t\t\t\tmargin: 0;\n\t\t\t}\n\t\t}\n\n\t\t.body {\n\t\t\tpadding: 20px;\n\n\t\t\t.d-flex {\n\t\t\t\tpadding: 10px 0;\n\t\t\t\tcolor: #333;\n\t\t\t}\n\n\t\t\t.button-set {\n\t\t\t\tmargin-top: 3em;\n\t\t\t}\n\t\t}\n\n\t\t.btn {\n\t\t\theight: 40px;\n\t\t\tpadding: 5px 30px;\n\t\t\tborder-radius: 5px;\n\t\t\tbackground: $primary;\n\t\t\tcolor: #fff;\n\t\t\tfont-size: 0.9em;\n\t\t\tmargin-left: 8px;\n\t\t}\n\t}\n\n\t.cart-chip {\n\t\tbackground: black;\n\t\tcolor: #fff;\n\t\tfont-size: 0.6em;\n\t\tpadding: 8px 12px;\n\t\tborder-radius: 50%;\n\t\tmargin-left: 10px;\n\t\theight: 40px;\n\t\twidth: 40px;\n\t\tbox-sizing: border-box;\n\t\ttext-align: center;\n\t}\n\n\ttable.summary {\n\t\ttd {\n\t\t\tpadding: 10px;\n\t\t}\n\t}\n}\n'],sourceRoot:""}]),e.default=a},function(t){t.exports=JSON.parse('[{"id":"PROD-1","name":"Boys\' Stillwater Sherpa 1/4-Zip","description":"Lorem ipsum, dolor sit amet consectetur adipisicing elit.","rating":4,"image":"prod-img-1.jpg","price":{"amount":"98.50","currency":"$"},"sizes":[{"text":"2T"},{"text":"3T"},{"text":"4T"},{"text":"5"},{"text":"6"},{"text":"7"}],"colors":[{"text":"Orange","hex":"#f39c12"},{"text":"Nectarine","hex":"#ffbe76"},{"text":"Purple","hex":"#8e44ad"}]}]')},function(t,e,n){"use strict";n.r(e);n(2);function r(t){return document.querySelector(t)}function o(t){return document.querySelectorAll(t)}function i(t){return new Promise((e,n)=>{window.setTimeout((function(){e()}),t)})}function a(t,e,n,r=null){var o=function t(e,n){var r=e.parentNode;return null==n||r.matches(n)?r:r.matches("body")?null:t(r,n)}(t,r).querySelector(e+"."+(n||"active"));o&&o.classList.remove(n||"active"),t.classList.add(n||"active")}const A={render(t,e){return new Promise(n=>{e.querySelectorAll("[data-var]").forEach(n=>{const r=(o=t,n.dataset.var.split(".").reduce((function(t,e){return t?t[e]:""}),o));var o;this.insertContentIntoDOM(e,[n],r)}),n(t)})},async renderList(t,e,n){return n=Object.assign({onDataAttr:!1},n),new Promise(r=>{t.forEach((t,r)=>{let o=e.cloneNode(!0);if(o.classList.remove("template"),n.assignDataAttr)for(const e in t)if(t.hasOwnProperty(e)){const n=t[e];o.setAttribute("data-"+e,n)}this.render(t,o).then(()=>{e.parentNode.insertAdjacentElement("beforeend",o),n.mounted&&"function"==typeof n.mounted&&n.mounted.call(o,t,r)})}),r(t)})},insertContentIntoDOM(t,e,n){e.forEach(t=>{t.matches("input, textarea, select")?t.value=n:t.innerText=n})},update(t,e,n){let r=n.querySelectorAll(`[data-var=${t}]`);this.insertContentIntoDOM(n,r,e)},getVar(t,e=null){const n=(e=e||r("body")).querySelector(`[data-var=${t}]`);return n?n.matches("input, textarea, select")?n.value:n.innerText:n},getRef:(t,e=null)=>e?e.querySelector(`[data-var=${t}]`):r(`[data-var=${t}]`)},d={setup(){!r(".notification")&&document.body.insertAdjacentHTML("beforeend","<div class='notification'></div>")},send(t){const e=r(".notification");e.innerText=t,e.classList.add("show"),i(3500).then(()=>{e.classList.remove("show")})}},s={setup(){this.updateCount(),this.mini.setup();const t=r(".order-summary");o("table.cart .cart-item:not(.template)").forEach(t=>{t.parentNode.removeChild(t)}),r("table.cart .cart-item")&&A.renderList(this.getCart(),r("table.cart .cart-item"),{mounted(e,n){A.getRef("name",this).href="/?productId="+e.id,this.querySelector(".img").style.backgroundImage=`url(${e.image})`,this.querySelector(".actions .del").addEventListener("click",t=>{t.preventDefault();confirm("Are you sure you want to remove this item from cart ?")&&s.removeItem(n)});const r=this.querySelector(".quantity-field");this.querySelectorAll(".quantity-selector .ctrl").forEach(e=>{e.addEventListener("click",()=>{let o=parseInt(r.value);switch(e.dataset.function){case"add":r.value=++o;break;case"sub":o>1&&(r.value=--o)}s.updateItem(n,{quantity:r.value}),s.appliedPromoCode&&i(800).then(()=>{A.update("discount",A.getVar("sub-total")/2,t),A.update("total-checkout",A.getVar("sub-total")/2,t)})})})}}).then(e=>{console.log("after list render"),A.update("sub-total",e.length?e.map(t=>t.total).reduce((t,e)=>t+e):0,t),A.update("total-checkout",parseFloat(A.getVar("sub-total",t)),t)}),r(".apply-code-btn")&&r(".apply-code-btn").addEventListener("click",e=>{e.preventDefault(),s.applyPromoCode(A.getVar("promo-code")).then(()=>{d.send("Promo code applied succefully, you have 50% discount on all products!"),A.update("promo-code","",t),A.update("discount",A.getVar("sub-total")/2,t)}).catch(()=>{A.getRef("promo-code").classList.add("error"),d.send("Invalid code")})})},updateCount(){let t=JSON.parse(localStorage.getItem("products"));r("#cart-count").innerText=t?t.length:0,r(".cart-page")&&A.update("cart-count",t?t.length:0,r(".cart-page"))},mini:{component:r(".mini-cart"),setup(){this.component&&this.component.querySelector(".close-cart").addEventListener("click",()=>{this.component.classList.remove("show"),r(".overlay").classList.remove("show")})},async show(t){await A.render(t,this.component),A.update("prod-total",t.total,this.component),this.component.querySelector(".img").style.backgroundImage=`url(${t.image})`,this.component.classList.add("show"),r(".overlay").classList.add("show")}},getCart(){let t=[];const e=localStorage.getItem("products");return e&&(t=JSON.parse(e)),t},removeItem(t){let e=JSON.parse(localStorage.getItem("products"));e.splice(t,1),localStorage.setItem("products",JSON.stringify(e)),this.setup()},appliedPromoCode:!1,async applyPromoCode(t){const e=(t=t.trim()).match(/^[a-z0-9]+$/i);return new Promise((n,o)=>{this.appliedPromoCode?o(t):5===t.length&&e?(this.appliedPromoCode=!0,A.update("total-checkout",A.getVar("total-checkout")/2,r(".order-summary")),n(t)):o(t)})},async updateItem(t,e={}){const n=this.getCart();n[t].customization.quantity=e.quantity,n[t].total=parseFloat(n[t].price.amount)*parseInt(n[t].customization.quantity),localStorage.setItem("products",JSON.stringify(n)),this.setup()}};var c=s;const p=n(5);var l={product:null,async setup(t){this.product=this.fetch(t),await A.render(this.product,r(".prod-details-wrap .prod-desc")),await A.renderList(this.product.colors,r(".prod-details-wrap .color-picker .cl"),{assignDataAttr:!0,mounted(t){this.style.backgroundColor=t.hex}}),await A.renderList(this.product.sizes,r(".prod-details-wrap .size-picker .sz"),{assignDataAttr:!0});o(".size-picker .sz").forEach(t=>{t.addEventListener("click",()=>{a(t,".sz")})});const e=r("#quantity-field");o(".quantity-selector .ctrl").forEach(t=>{t.addEventListener("click",()=>{let n=new Number(e.value);switch(t.dataset.function){case"add":e.value=++n;break;case"sub":n>1&&(e.value=--n)}})});o(".color-picker .cl").forEach(t=>{t.addEventListener("click",()=>{a(t,".cl"),r("#prod-color-text").innerText=t.dataset.text})}),r("#add-to-cart-btn").addEventListener("click",()=>{this.addToCart()})},fetch:t=>(p||[]).find(e=>e.id===t),addToCart(){const t=r(".size-picker > .sz.active");if(!r(".color-picker .cl.active"))return void d.send("Please select color");if(!t)return void d.send("Please select size");let e=[];const n=localStorage.getItem("products");n&&(e=JSON.parse(n)),e.find(t=>t.id===this.product.id),this.product.customization={size:r(".size-picker > .sz.active").dataset.text,quantity:r("#quantity-field").value,color:r(".color-picker .cl.active").dataset.text},this.product.total=parseFloat(this.product.price.amount)*parseInt(this.product.customization.quantity),e.push(this.product),localStorage.setItem("products",JSON.stringify(e)),c.updateCount(),c.mini.show(this.product)}};({init(){r("main.product-page")&&l.setup("PROD-1"),d.setup(),c.setup()}}).init()}]);
//# sourceMappingURL=app.js.map