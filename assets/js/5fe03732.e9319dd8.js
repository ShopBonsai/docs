"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3936],{3905:(e,t,n)=>{n.d(t,{Zo:()=>m,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),p=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},m=function(e){var t=p(e.components);return a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},N=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,d=e.parentName,m=i(e,["components","mdxType","originalType","parentName"]),N=p(n),u=r,k=N["".concat(d,".").concat(u)]||N[u]||s[u]||l;return n?a.createElement(k,o(o({ref:t},m),{},{components:n})):a.createElement(k,o({ref:t},m))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=N;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}N.displayName="MDXCreateElement"},51219:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>o,default:()=>s,frontMatter:()=>l,metadata:()=>i,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={id:"orders-error-responses",title:"Submit Orders: Error Responses",sidebar_label:"Error Responses",hide_title:!0,toc_max_heading_level:3,toc_min_heading_level:2},o="Error Responses",i={unversionedId:"api/orders/orders-error-responses",id:"api/orders/orders-error-responses",title:"Submit Orders: Error Responses",description:"All error responses have HTTP status code 4xx or 5xx. The response body contains errors field.",source:"@site/docs/api/orders/orders-error-responses.md",sourceDirName:"api/orders",slug:"/api/orders/orders-error-responses",permalink:"/docs/api/orders/orders-error-responses",draft:!1,tags:[],version:"current",frontMatter:{id:"orders-error-responses",title:"Submit Orders: Error Responses",sidebar_label:"Error Responses",hide_title:!0,toc_max_heading_level:3,toc_min_heading_level:2},sidebar:"bonsai",previous:{title:"Test Orders",permalink:"/docs/api/orders/orders-live-testing"},next:{title:"Submit Pending Orders",permalink:"/docs/api/orders/submit-pending-orders"}},d={},p=[{value:"Generic Errors",id:"generic-errors",level:2},{value:"<code>INSUFFICIENT_INVENTORY</code>",id:"insufficient_inventory",level:3},{value:"Example",id:"example",level:4},{value:"<code>OUT_OF_STOCK</code>",id:"out_of_stock",level:3},{value:"Example",id:"example-1",level:4},{value:"<code>PAYMENT_REQUIRED</code>",id:"payment_required",level:3},{value:"Example",id:"example-2",level:4},{value:"<code>PAYMENT_METHOD_NOT_SUPPORTED</code>",id:"payment_method_not_supported",level:3},{value:"Example",id:"example-3",level:4},{value:"<code>PROVINCE_NOT_FOUND</code>",id:"province_not_found",level:3},{value:"Example",id:"example-4",level:4},{value:"<code>INTERNATIONAL_SHIPPING_ERROR</code>",id:"international_shipping_error",level:3},{value:"Example",id:"example-5",level:4},{value:"<code>PRODUCT_DOES_NOT_EXIST</code>",id:"product_does_not_exist",level:3},{value:"Example",id:"example-6",level:4},{value:"<code>VARIANT_DOES_NOT_EXIST</code>",id:"variant_does_not_exist",level:3},{value:"Example",id:"example-7",level:4},{value:"<code>PRODUCTS_PRICE_CHANGE</code>",id:"products_price_change",level:3},{value:"Example",id:"example-8",level:4},{value:"<code>PRODUCT_UNAVAILABLE</code>",id:"product_unavailable",level:3},{value:"Example",id:"example-9",level:4},{value:"<code>INVALID_INPUT</code>",id:"invalid_input",level:3},{value:"Example",id:"example-10",level:4},{value:"Stripe Payment Method Errors",id:"stripe-payment-method-errors",level:2},{value:"<code>STRIPE_ERROR</code>",id:"stripe_error",level:3},{value:"Example",id:"example-11",level:4},{value:"External Payment Method Errors",id:"external-payment-method-errors",level:2},{value:"<code>PAYMENT_AMOUNTS_NOT_PROVIDED</code>",id:"payment_amounts_not_provided",level:3},{value:"Example",id:"example-12",level:4},{value:"<code>ACCOUNT_DOES_NOT_SUPPORT_EXTERNAL_PAYMENT</code>",id:"account_does_not_support_external_payment",level:3},{value:"Example",id:"example-13",level:4},{value:"<code>EXTERNAL_PAYMENT_NOT_IMPLEMENTED_YET</code>",id:"external_payment_not_implemented_yet",level:3},{value:"Example",id:"example-14",level:4},{value:"<code>EXTERNAL_PAYMENT_UNKNOWN_ERROR</code>",id:"external_payment_unknown_error",level:3},{value:"Example",id:"example-15",level:4},{value:"<code>EXTERNAL_PAYMENT_TOKEN_VALIDATION_FAILED</code>",id:"external_payment_token_validation_failed",level:3},{value:"Example",id:"example-16",level:4}],m={toc:p};function s(e){let{components:t,...n}=e;return(0,r.kt)("wrapper",(0,a.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"error-responses"},"Error Responses"),(0,r.kt)("p",null,"All error responses have HTTP status code ",(0,r.kt)("inlineCode",{parentName:"p"},"4xx")," or ",(0,r.kt)("inlineCode",{parentName:"p"},"5xx"),". The response body contains ",(0,r.kt)("inlineCode",{parentName:"p"},"errors")," field.\nThe ",(0,r.kt)("inlineCode",{parentName:"p"},"errors")," field contains an array of errors:"),(0,r.kt)("details",null,(0,r.kt)("summary",null,"Error response example"),(0,r.kt)("div",null,(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "errors": [\n    {\n      "id": "5d094f10-8caf-11ed-83bd-2bcc14ba6c4e",\n      "status": 400,\n      "code": "INSUFFICIENT_INVENTORY",\n      "title": "Not enough inventory",\n      "detail": {\n        "productId": "clbj0i7w4041d01z60hv53mcm",\n        "variantId": "13833901"\n      }\n    }\n  ]\n}\n')))),(0,r.kt)("p",null,"We will return multiple errors if multiple errors are encountered. However, most of the time, only\none error will be returned."),(0,r.kt)("p",null,"Payment-related errors will also depend on the ",(0,r.kt)("inlineCode",{parentName:"p"},"paymentMethod")," provided."),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Please reach out to Bonsai if you receive any error not listed within this document.")),(0,r.kt)("h2",{id:"generic-errors"},"Generic Errors"),(0,r.kt)("h3",{id:"insufficient_inventory"},(0,r.kt)("inlineCode",{parentName:"h3"},"INSUFFICIENT_INVENTORY")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Reason"),(0,r.kt)("th",{parentName:"tr",align:null},"Next step"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"INSUFFICIENT_INVENTORY")),(0,r.kt)("td",{parentName:"tr",align:null},"Insufficient inventory for the requested quantity"),(0,r.kt)("td",{parentName:"tr",align:null},"Request that the customer changes quantity")))),(0,r.kt)("h4",{id:"example"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "123e4567-e89b-12d3-a456-426655440000",\n  "status": 400,\n  "code": "INSUFFICIENT_INVENTORY",\n  "title": "Not enough inventory",\n  "detail": {\n    "productId": "clbj0i7w4041d01z60hv53mcm",\n    "variantId": "13833901"\n  }\n}\n')),(0,r.kt)("h3",{id:"out_of_stock"},(0,r.kt)("inlineCode",{parentName:"h3"},"OUT_OF_STOCK")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Reason"),(0,r.kt)("th",{parentName:"tr",align:null},"Next step"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"OUT_OF_STOCK")),(0,r.kt)("td",{parentName:"tr",align:null},"The product is out of stock"),(0,r.kt)("td",{parentName:"tr",align:null},"Request that the customer removes product from cart")))),(0,r.kt)("h4",{id:"example-1"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "123e4567-e89b-12d3-a456-426655440000",\n  "status": 400,\n  "code": "OUT_OF_STOCK",\n  "title": "The product is out of stock",\n  "detail": {\n    "public_id": "clbj0i7w4041d01z60hv53mcm",\n    "variant_id": "13833901"\n  }\n}\n')),(0,r.kt)("h3",{id:"payment_required"},(0,r.kt)("inlineCode",{parentName:"h3"},"PAYMENT_REQUIRED")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Reason"),(0,r.kt)("th",{parentName:"tr",align:null},"Next step"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PAYMENT_REQUIRED")),(0,r.kt)("td",{parentName:"tr",align:null},"Valid payment is required"),(0,r.kt)("td",{parentName:"tr",align:null},"Request that the customer verifies their payment information")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"This error will contain details with more information about what went wrong with the payment.\nIt is safe to show this message to the customer for Payment methods other than ",(0,r.kt)("inlineCode",{parentName:"p"},"external payment"),".")),(0,r.kt)("h4",{id:"example-2"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "123e4567-e89b-12d3-a456-426655440000",\n  "status": 402,\n  "code": "PAYMENT_REQUIRED",\n  "title": "Payment is required for this order",\n  "detail": {\n    "message": "Your card was declined."\n  }\n}\n')),(0,r.kt)("h3",{id:"payment_method_not_supported"},(0,r.kt)("inlineCode",{parentName:"h3"},"PAYMENT_METHOD_NOT_SUPPORTED")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Reason"),(0,r.kt)("th",{parentName:"tr",align:null},"Next step"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PAYMENT_METHOD_NOT_SUPPORTED")),(0,r.kt)("td",{parentName:"tr",align:null},"Payment method is not supported for the requested products"),(0,r.kt)("td",{parentName:"tr",align:null},"Request that the customer chooses a different payment method")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Bonsai supports 2 payment methods:"),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"stripe")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"external payment")))),(0,r.kt)("h4",{id:"example-3"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "123e4567-e89b-12d3-a456-426655440000",\n  "status": 400,\n  "code": "PAYMENT_METHOD_NOT_SUPPORTED",\n  "title": "The selected payment method is not supported for this order type",\n  "detail": {\n    "paymentMethod": "customUnsupportedPayment"\n  }\n}\n')),(0,r.kt)("h3",{id:"province_not_found"},(0,r.kt)("inlineCode",{parentName:"h3"},"PROVINCE_NOT_FOUND")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Reason"),(0,r.kt)("th",{parentName:"tr",align:null},"Next step"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PROVINCE_NOT_FOUND")),(0,r.kt)("td",{parentName:"tr",align:null},"The province was not found"),(0,r.kt)("td",{parentName:"tr",align:null},"Request that the customer verifies their address")))),(0,r.kt)("h4",{id:"example-4"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "123e4567-e89b-12d3-a456-426655440000",\n  "status": 404,\n  "code": "PROVINCE_NOT_FOUND",\n  "title": "Could not find delivery province",\n  "detail": {\n    "province": "non-existent-province"\n  }\n}\n')),(0,r.kt)("h3",{id:"international_shipping_error"},(0,r.kt)("inlineCode",{parentName:"h3"},"INTERNATIONAL_SHIPPING_ERROR")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Reason"),(0,r.kt)("th",{parentName:"tr",align:null},"Next step"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"INTERNATIONAL_SHIPPING_ERROR")),(0,r.kt)("td",{parentName:"tr",align:null},"Merchant does not ship to country"),(0,r.kt)("td",{parentName:"tr",align:null},"Communicate that the product (publicId/variantId) does not ship to the specified country")))),(0,r.kt)("h4",{id:"example-5"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "123e4567-e89b-12d3-a456-426655440000",\n  "status": 400,\n  "code": "INTERNATIONAL_SHIPPING_ERROR",\n  "title": "The merchant does not provide international shipping",\n  "detail": [\n    {\n      "publicId": "clbj0i7w4041d01z60hv53mcm",\n      "variantId": "13833901"\n    }\n  ]\n}\n')),(0,r.kt)("h3",{id:"product_does_not_exist"},(0,r.kt)("inlineCode",{parentName:"h3"},"PRODUCT_DOES_NOT_EXIST")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Reason"),(0,r.kt)("th",{parentName:"tr",align:null},"Next step"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PRODUCT_DOES_NOT_EXIST")),(0,r.kt)("td",{parentName:"tr",align:null},"Product not found"),(0,r.kt)("td",{parentName:"tr",align:null},"Mark the product as unavailable")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If this error happens, we suggest verifying the feed ingestion to make sure you are passing the right ids to the Bonsai API as it might also happen to other products.")),(0,r.kt)("h4",{id:"example-6"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "123e4567-e89b-12d3-a456-426655440000",\n  "status": 404,\n  "code": "PRODUCT_DOES_NOT_EXIST",\n  "title": "Product does not exist",\n  "detail": {\n    "publicId": "clbj0i7w4041d01z60hv53mcm",\n    "variantId": "13833901"\n  }\n}\n')),(0,r.kt)("h3",{id:"variant_does_not_exist"},(0,r.kt)("inlineCode",{parentName:"h3"},"VARIANT_DOES_NOT_EXIST")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Reason"),(0,r.kt)("th",{parentName:"tr",align:null},"Next step"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"VARIANT_DOES_NOT_EXIST")),(0,r.kt)("td",{parentName:"tr",align:null},"Variant not found"),(0,r.kt)("td",{parentName:"tr",align:null},"Mark the variant as unavailable")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If this error happens, we suggest verifying the feed ingestion to make sure you are passing the right ids to the Bonsai API as it might also happen to other products.")),(0,r.kt)("h4",{id:"example-7"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "123e4567-e89b-12d3-a456-426655440000",\n  "status": 404,\n  "code": "VARIANT_DOES_NOT_EXIST",\n  "title": "Variant does not exist",\n  "detail": {\n    "publicId": "clbj0i7w4041d01z60hv53mcm",\n    "variantId": "13833901"\n  }\n}\n')),(0,r.kt)("h3",{id:"products_price_change"},(0,r.kt)("inlineCode",{parentName:"h3"},"PRODUCTS_PRICE_CHANGE")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Reason"),(0,r.kt)("th",{parentName:"tr",align:null},"Next step"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PRODUCTS_PRICE_CHANGE")),(0,r.kt)("td",{parentName:"tr",align:null},"The price of one of the products has changed since the last time it was fetched"),(0,r.kt)("td",{parentName:"tr",align:null},"Request that the customer confirms the new price")))),(0,r.kt)("h4",{id:"example-8"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "123e4567-e89b-12d3-a456-426655440000",\n  "status": 400,\n  "code": "PRODUCTS_PRICE_CHANGE",\n  "title": "The price of one of the products has changed",\n  "detail": {\n    "publicId": "clbj0i7w4041d01z60hv53mcm",\n    "variantId": "13833901"\n  }\n}\n')),(0,r.kt)("h3",{id:"product_unavailable"},(0,r.kt)("inlineCode",{parentName:"h3"},"PRODUCT_UNAVAILABLE")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Reason"),(0,r.kt)("th",{parentName:"tr",align:null},"Next step"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PRODUCT_UNAVAILABLE")),(0,r.kt)("td",{parentName:"tr",align:null},"Product is no longer available for sale"),(0,r.kt)("td",{parentName:"tr",align:null},"Mark the product as unavailable")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"Please check this ",(0,r.kt)("a",{parentName:"p",href:"https://docs.shopbonsai.ca/docs/product-feeds/best-practices/"},"Product feed documentation")," to learn more on product validation and removal.")),(0,r.kt)("h4",{id:"example-9"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "123e4567-e89b-12d3-a456-426655440000",\n  "status": 400,\n  "code": "PRODUCT_UNAVAILABLE",\n  "title": "The product requested is no longer available",\n  "detail": {\n    "publicId": "clbj0i7w4041d01z60hv53mcm",\n    "variantId": "13833901"\n  }\n}\n')),(0,r.kt)("h3",{id:"invalid_input"},(0,r.kt)("inlineCode",{parentName:"h3"},"INVALID_INPUT")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Reason"),(0,r.kt)("th",{parentName:"tr",align:null},"Next step"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"INVALID_INPUT")),(0,r.kt)("td",{parentName:"tr",align:null},"Required fields are missing from the request body"),(0,r.kt)("td",{parentName:"tr",align:null},"Check the format of the requests you're sending to our API")))),(0,r.kt)("h4",{id:"example-10"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "123e4567-e89b-12d3-a456-426655440000",\n  "status": 400,\n  "code": "INVALID_INPUT",\n  "title": "Invalid input provided",\n  "detail": [\n    {\n      "message": "\\"quantity\\" is required",\n      "path": [\n        "products",\n        0,\n        "quantity"\n      ],\n      "type": "any.required",\n      "context": {\n        "key": "quantity",\n        "label": "quantity"\n      }\n    }\n  ]\n}\n')),(0,r.kt)("h2",{id:"stripe-payment-method-errors"},"Stripe Payment Method Errors"),(0,r.kt)("h3",{id:"stripe_error"},(0,r.kt)("inlineCode",{parentName:"h3"},"STRIPE_ERROR")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Reason"),(0,r.kt)("th",{parentName:"tr",align:null},"Next step"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"STRIPE_ERROR")),(0,r.kt)("td",{parentName:"tr",align:null},"An error occurred while communicating with Stripe"),(0,r.kt)("td",{parentName:"tr",align:null},"Provide the customer the error message from Stripe (error title)")))),(0,r.kt)("h4",{id:"example-11"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "123e4567-e89b-12d3-a456-426655440000",\n  "status": 402,\n  "code": "STRIPE_ERROR",\n  "title": "Your card has insufficient funds.",\n  "detail": {\n    "stripeToken": "tok_visa_chargeDeclinedInsufficientFunds",\n    "customer": {\n      "first_name": "Haytham",\n      "last_name": "Labrini",\n      "email": "qa@shopbonsai.ca"\n    }\n  }\n}\n')),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"If you're using Stripe as payment method, please refer to ",(0,r.kt)("a",{parentName:"p",href:"https://stripe.com/docs/error-codes"},"Stripe docs")," for possible Stripe error codes.")),(0,r.kt)("h2",{id:"external-payment-method-errors"},"External Payment Method Errors"),(0,r.kt)("h3",{id:"payment_amounts_not_provided"},(0,r.kt)("inlineCode",{parentName:"h3"},"PAYMENT_AMOUNTS_NOT_PROVIDED")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Reason"),(0,r.kt)("th",{parentName:"tr",align:null},"Next step"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"PAYMENT_AMOUNTS_NOT_PROVIDED")),(0,r.kt)("td",{parentName:"tr",align:null},"Payment amounts are not provided when using ",(0,r.kt)("inlineCode",{parentName:"td"},"external payment")," as payment method"),(0,r.kt)("td",{parentName:"tr",align:null},"Please provide the amounts when submitting an order with payment method ",(0,r.kt)("inlineCode",{parentName:"td"},"external payment"))))),(0,r.kt)("h4",{id:"example-12"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "123e4567-e89b-12d3-a456-426655440000",\n  "status": 400,\n  "code": "PAYMENT_AMOUNTS_NOT_PROVIDED",\n  "title": "Payment amounts not provided"\n}\n')),(0,r.kt)("h3",{id:"account_does_not_support_external_payment"},(0,r.kt)("inlineCode",{parentName:"h3"},"ACCOUNT_DOES_NOT_SUPPORT_EXTERNAL_PAYMENT")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Reason"),(0,r.kt)("th",{parentName:"tr",align:null},"Next step"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"ACCOUNT_DOES_NOT_SUPPORT_EXTERNAL_PAYMENT")),(0,r.kt)("td",{parentName:"tr",align:null},"Account does not support external payment"),(0,r.kt)("td",{parentName:"tr",align:null},"Please reach out to Bonsai to set you up")))),(0,r.kt)("h4",{id:"example-13"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "123e4567-e89b-12d3-a456-426655440000",\n  "status": 400,\n  "code": "ACCOUNT_DOES_NOT_SUPPORT_EXTERNAL_PAYMENT",\n  "title": "Account does not support external payment"\n}\n')),(0,r.kt)("h3",{id:"external_payment_not_implemented_yet"},(0,r.kt)("inlineCode",{parentName:"h3"},"EXTERNAL_PAYMENT_NOT_IMPLEMENTED_YET")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Reason"),(0,r.kt)("th",{parentName:"tr",align:null},"Next step"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"EXTERNAL_PAYMENT_NOT_IMPLEMENTED_YET")),(0,r.kt)("td",{parentName:"tr",align:null},"External payment type is not implemented for the account yet"),(0,r.kt)("td",{parentName:"tr",align:null},"Please reach out to Bonsai to set you up")))),(0,r.kt)("h4",{id:"example-14"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "123e4567-e89b-12d3-a456-426655440000",\n  "status": 402,\n  "code": "EXTERNAL_PAYMENT_NOT_IMPLEMENTED_YET",\n  "title": "External payment not implemented yet",\n  "detail": {\n    "token": "<redacted>",\n    "externalPaymentType": "api"\n  }\n}\n')),(0,r.kt)("h3",{id:"external_payment_unknown_error"},(0,r.kt)("inlineCode",{parentName:"h3"},"EXTERNAL_PAYMENT_UNKNOWN_ERROR")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Reason"),(0,r.kt)("th",{parentName:"tr",align:null},"Next step"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"EXTERNAL_PAYMENT_UNKNOWN_ERROR")),(0,r.kt)("td",{parentName:"tr",align:null},"Unknown error while validating external payment"),(0,r.kt)("td",{parentName:"tr",align:null},"Please reach out to Bonsai")))),(0,r.kt)("h4",{id:"example-15"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "123e4567-e89b-12d3-a456-426655440000",\n  "status": 400,\n  "code": "EXTERNAL_PAYMENT_UNKNOWN_ERROR",\n  "title": "Unknown error while validating external payment",\n}\n')),(0,r.kt)("h3",{id:"external_payment_token_validation_failed"},(0,r.kt)("inlineCode",{parentName:"h3"},"EXTERNAL_PAYMENT_TOKEN_VALIDATION_FAILED")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",{parentName:"tr",align:null},"Code"),(0,r.kt)("th",{parentName:"tr",align:null},"Reason"),(0,r.kt)("th",{parentName:"tr",align:null},"Next step"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",{parentName:"tr",align:null},(0,r.kt)("inlineCode",{parentName:"td"},"EXTERNAL_PAYMENT_TOKEN_VALIDATION_FAILED")),(0,r.kt)("td",{parentName:"tr",align:null},"External payment token validation failed"),(0,r.kt)("td",{parentName:"tr",align:null},"Please reach out to Bonsai for more details")))),(0,r.kt)("admonition",{type:"info"},(0,r.kt)("p",{parentName:"admonition"},"During setup, you provided us with an endpoint to validate that the provided payment token is valid in your system. If that validation fails, this error will be thrown.")),(0,r.kt)("h4",{id:"example-16"},"Example"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-json"},'{\n  "id": "123e4567-e89b-12d3-a456-426655440000",\n  "status": 402,\n  "code": "EXTERNAL_PAYMENT_TOKEN_VALIDATION_FAILED",\n  "title": "External payment token validation failed",\n}\n')))}s.isMDXComponent=!0}}]);