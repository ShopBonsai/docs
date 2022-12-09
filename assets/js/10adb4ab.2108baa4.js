"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[8486],{3905:(e,t,r)=>{r.d(t,{Zo:()=>s,kt:()=>f});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var d=n.createContext({}),u=function(e){var t=n.useContext(d),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=u(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,d=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=u(r),f=a,m=p["".concat(d,".").concat(f)]||p[f]||c[f]||o;return r?n.createElement(m,i(i({ref:t},s),{},{components:r})):n.createElement(m,i({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=p;var l={};for(var d in t)hasOwnProperty.call(t,d)&&(l[d]=t[d]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},30749:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=r(87462),a=(r(67294),r(3905));const o={title:"Product Validation",description:"Learn what products are included in our feeds.",sidebar_position:3},i="Product Validation",l={unversionedId:"product-feeds/product-validation",id:"product-feeds/product-validation",title:"Product Validation",description:"Learn what products are included in our feeds.",source:"@site/docs/product-feeds/product-validation.md",sourceDirName:"product-feeds",slug:"/product-feeds/product-validation",permalink:"/docs/product-feeds/product-validation",draft:!1,editUrl:"https://github.com/ShopBonsai/docs/tree/main/docs/product-feeds/product-validation.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{title:"Product Validation",description:"Learn what products are included in our feeds.",sidebar_position:3},sidebar:"bonsai",previous:{title:"Best Practices",permalink:"/docs/product-feeds/best-practices"},next:{title:"Feed Format Reference",permalink:"/docs/product-feeds/format"}},d={},u=[{value:"Validation rules",id:"validation-rules",level:2}],s={toc:u};function c(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"product-validation"},"Product Validation"),(0,a.kt)("p",null,"We gather products from various merchants and validate them before they are exported to our product\nfeeds. Validation process makes sure that the data follows our requirements. We omit products from\nfeeds if they do not meet our requirements."),(0,a.kt)("h2",{id:"validation-rules"},"Validation rules"),(0,a.kt)("p",null,"All of the following rules must equate to ",(0,a.kt)("inlineCode",{parentName:"p"},"false")," for a product to be included in our feeds:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Merchant didn't publish the product"),(0,a.kt)("li",{parentName:"ul"},"Merchant doesn't wish to have a specific product in the feed"),(0,a.kt)("li",{parentName:"ul"},"Merchant doesn't wish to have a specific brand in the feed"),(0,a.kt)("li",{parentName:"ul"},"Product doesn't have a Google category"),(0,a.kt)("li",{parentName:"ul"},"Product has duplicate variants"),(0,a.kt)("li",{parentName:"ul"},"Variants have different set of options (e.g. some have color and size, whilst others have only color)"),(0,a.kt)("li",{parentName:"ul"},"Merchant webhooks are not working. Applies only to Shopify merchants"),(0,a.kt)("li",{parentName:"ul"},"Bonsai manually marked product as unavailable"),(0,a.kt)("li",{parentName:"ul"},"Bonsai didn't publish the brand"),(0,a.kt)("li",{parentName:"ul"},"Bonsai didn't publish the merchant"),(0,a.kt)("li",{parentName:"ul"},"Bonsai couldn't parse the product correctly")),(0,a.kt)("p",null,"There are also a few rules that we follow when validating variants:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Variant has negative or ",(0,a.kt)("inlineCode",{parentName:"li"},"null")," price"),(0,a.kt)("li",{parentName:"ul"},"Variant price is lower than its sale price"),(0,a.kt)("li",{parentName:"ul"},"Variant has 0 or only 1 image"),(0,a.kt)("li",{parentName:"ul"},"Merchant deleted the variant")),(0,a.kt)("p",null,"If ",(0,a.kt)("strong",{parentName:"p"},"any of the above rules")," equate to ",(0,a.kt)("inlineCode",{parentName:"p"},"true"),", the product or variant is ",(0,a.kt)("strong",{parentName:"p"},"omitted")," from the feed."),(0,a.kt)("admonition",{type:"caution"},(0,a.kt)("p",{parentName:"admonition"},"We currently do not remove out of stock products from the feeds. However, there's a possibility that\nwe will do so in the future to avoid growing feed sizes infinitely.")))}c.isMDXComponent=!0}}]);