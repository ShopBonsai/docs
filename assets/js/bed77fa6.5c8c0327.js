"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[3393],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>f});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)a=i[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var d=r.createContext({}),s=function(e){var t=r.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return r.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,d=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=s(a),f=n,k=u["".concat(d,".").concat(f)]||u[f]||m[f]||i;return a?r.createElement(k,l(l({ref:t},p),{},{components:a})):r.createElement(k,l({ref:t},p))}));function f(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=u;var o={};for(var d in t)hasOwnProperty.call(t,d)&&(o[d]=t[d]);o.originalType=e,o.mdxType="string"==typeof e?e:n,l[1]=o;for(var s=2;s<i;s++)l[s]=a[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,a)}u.displayName="MDXCreateElement"},43970:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>m,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var r=a(87462),n=(a(67294),a(3905));const i={title:"Data"},l="Data Exports",o={unversionedId:"data/index",id:"data/index",title:"Data",description:"Bonsai offers various CSV data exports to help you keep track of events, orders, line items, and refunds. This document provides a comprehensive overview of what data you can expect to receive.",source:"@site/docs/data/index.md",sourceDirName:"data",slug:"/data/",permalink:"/docs/data/",draft:!1,tags:[],version:"current",frontMatter:{title:"Data"},sidebar:"bonsai",previous:{title:"Express Checkout",permalink:"/docs/bonsai-ui/express-checkout/"}},d={},s=[{value:"How to Access Data Exports",id:"how-to-access-data-exports",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Cadence",id:"cadence",level:2},{value:"Destination",id:"destination",level:2},{value:"Authorization",id:"authorization",level:3},{value:"Access",id:"access",level:3},{value:"Data Retention",id:"data-retention",level:2},{value:"Versioning",id:"versioning",level:2},{value:"Current Version",id:"current-version",level:3},{value:"Available Exports",id:"available-exports",level:2},{value:"Events Export",id:"events-export",level:3},{value:"Event Types and Descriptions",id:"event-types-and-descriptions",level:4},{value:"Event Fields",id:"event-fields",level:4},{value:"Line Items Export",id:"line-items-export",level:3},{value:"Line Item Fields",id:"line-item-fields",level:4},{value:"Orders Export",id:"orders-export",level:3},{value:"Order Fields",id:"order-fields",level:4},{value:"Refunds Export",id:"refunds-export",level:3},{value:"Refund Fields",id:"refund-fields",level:4},{value:"Refund Reasons",id:"refund-reasons",level:4},{value:"Changelog",id:"changelog",level:2}],p={toc:s};function m(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"data-exports"},"Data Exports"),(0,n.kt)("p",null,"Bonsai offers various CSV data exports to help you keep track of events, orders, line items, and refunds. This document provides a comprehensive overview of what data you can expect to receive."),(0,n.kt)("h2",{id:"how-to-access-data-exports"},"How to Access Data Exports"),(0,n.kt)("p",null,"To access these data exports, you need to reach out to your point of contact at Bonsai. Depending on your integration type with Bonsai, not all export types may be available. For more details on which exports are applicable for you, see the ",(0,n.kt)("a",{parentName:"p",href:"#available-exports"},"Available Exports")," section."),(0,n.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,n.kt)("p",null,"To benefit from Bonsai's data exports, ensure you're either using ",(0,n.kt)("a",{parentName:"p",href:"/docs/bonsai-ui/introduction"},"Bonsai UI")," or processing orders through ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/orders/orders-api"},"the Orders API")," and are using your live API keys. However, ",(0,n.kt)("a",{parentName:"p",href:"/docs/api/orders/orders-live-testing"},"test orders and refunds")," are filtered out from orders, line items, and refunds exports even if placed with live API keys."),(0,n.kt)("h2",{id:"cadence"},"Cadence"),(0,n.kt)("p",null,"Exports are available either once every 24 hours (default) or every 8 hours. To select a cadence, please specify your preference to your point of contact at Bonsai. In either case, data is lagged by 8 hours, i.e., data made available at 16:00 UTC will cover the period from 00:00 to 08:00 UTC for the same day."),(0,n.kt)("h2",{id:"destination"},"Destination"),(0,n.kt)("p",null,"The destination for these exports is an AWS S3 data bucket. The bucket name will be supplied to you after you request data exports."),(0,n.kt)("h3",{id:"authorization"},"Authorization"),(0,n.kt)("p",null,"You should use the same AWS keys as described ",(0,n.kt)("a",{parentName:"p",href:"/docs/product-feeds/getting-started"},"here"),"."),(0,n.kt)("h3",{id:"access"},"Access"),(0,n.kt)("p",null,"To access the data in the bucket, you can use the AWS CLI or any SDK of your choice. Here is an example command for how to access your bucket data using the CLI:"),(0,n.kt)("pre",null,(0,n.kt)("code",{parentName:"pre",className:"language-zsh"},"aws s3 cp 's3://prod-data-export-myaccount/v5/orders/orders_2023-10-26T00-08-28.csv' ./my-orders.csv\n")),(0,n.kt)("h2",{id:"data-retention"},"Data Retention"),(0,n.kt)("p",null,"Data in the S3 bucket is retained for 3 months. Contractual exceptions may apply. For longer-term storage, pull the data into your own systems."),(0,n.kt)("h2",{id:"versioning"},"Versioning"),(0,n.kt)("p",null,"Versioning of data exports is implemented to protect your integration from breaking changes. Breaking changes are defined as one of the following:"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"A change in the definition or format for an existing export field"),(0,n.kt)("li",{parentName:"ul"},"A change in the ordering of export fields"),(0,n.kt)("li",{parentName:"ul"},"The removal of an export field"),(0,n.kt)("li",{parentName:"ul"},"A change in the grain associated with an export (i.e. the definition of what each line in the export represents)")),(0,n.kt)("p",null,"Please note that a new field could be appended as a new column in existing exports without this being considered a breaking change. As such, please be sure that your integration does not break if there are unexpected fields available in the export that were not previously there."),(0,n.kt)("p",null,"Breaking and non-breaking changes will be updated in the ",(0,n.kt)("a",{parentName:"p",href:"#changelog"},"changelog"),"."),(0,n.kt)("h3",{id:"current-version"},"Current Version"),(0,n.kt)("p",null,"The latest version of exports is ",(0,n.kt)("inlineCode",{parentName:"p"},"v5"),". This version is reflected in the file path associated with the exports. If a new version is released, the path will change. For example: orders may continue to be exported in the path with the prefix ",(0,n.kt)("inlineCode",{parentName:"p"},"v5/orders")," with the old ",(0,n.kt)("inlineCode",{parentName:"p"},"v5")," format, while new ",(0,n.kt)("inlineCode",{parentName:"p"},"v6")," orders will be exported with the prefix ",(0,n.kt)("inlineCode",{parentName:"p"},"v6/orders"),"."),(0,n.kt)("h2",{id:"available-exports"},"Available Exports"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Export Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Applicable To"),(0,n.kt)("th",{parentName:"tr",align:"left"},"File Path (latest version)"),(0,n.kt)("th",{parentName:"tr",align:"left"},"File Name (example)"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Events"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Bonsai UI clients"),(0,n.kt)("td",{parentName:"tr",align:"left"},"v5/events/events_YYYY-MM-DDTHH-mm-ss.csv"),(0,n.kt)("td",{parentName:"tr",align:"left"},"events_2023-10-26T00-08-21.csv")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Line Items"),(0,n.kt)("td",{parentName:"tr",align:"left"},"API and Bonsai UI clients"),(0,n.kt)("td",{parentName:"tr",align:"left"},"v5/line-items/line-items_YYYY-MM-DDTHH-mm-ss.csv"),(0,n.kt)("td",{parentName:"tr",align:"left"},"line-items_2023-10-26T00-08-24.csv")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Orders"),(0,n.kt)("td",{parentName:"tr",align:"left"},"API and Bonsai UI clients"),(0,n.kt)("td",{parentName:"tr",align:"left"},"v5/orders/orders_YYYY-MM-DDTHH-mm-ss.csv"),(0,n.kt)("td",{parentName:"tr",align:"left"},"orders_2023-10-26T00-08-28.csv")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Refunds"),(0,n.kt)("td",{parentName:"tr",align:"left"},"API and Bonsai UI clients"),(0,n.kt)("td",{parentName:"tr",align:"left"},"v5/refunds/refunds_YYYY-MM-DDTHH-mm-ss.csv"),(0,n.kt)("td",{parentName:"tr",align:"left"},"refunds_2023-10-26T00-08-31.csv")))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Note: Catalog-only accounts will not have access to any exports.")),(0,n.kt)("h3",{id:"events-export"},"Events Export"),(0,n.kt)("p",null,"The Events export provides basic insights into specific user interactions within the Bonsai UI. Below are the event types you can expect in this export and their respective fields."),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Events export example"),(0,n.kt)("div",null,(0,n.kt)("pre",null,(0,n.kt)("code",null,"Event Time,Event,Cart ID",(0,n.kt)("br",null),"2023-10-25T14:31:21.000Z,Initiate Checkout,3aasunj099y9",(0,n.kt)("br",null),"2023-10-25T14:23:44.000Z,Add to Cart,3aasunj099y9",(0,n.kt)("br",null),"2023-10-25T14:20:27.000Z,Cart View,3aasunj099y9",(0,n.kt)("br",null),"2023-10-25T14:18:44.000Z,Place Order,3aasunj099y9",(0,n.kt)("br",null),"2023-10-25T14:17:33.000Z,Order Success,3aasunj099y9")))),(0,n.kt)("h4",{id:"event-types-and-descriptions"},"Event Types and Descriptions"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Event Type"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Add to Cart"),(0,n.kt)("td",{parentName:"tr",align:"left"},"User adds a product to their cart. Not available in all versions of Bonsai UI")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Cart View"),(0,n.kt)("td",{parentName:"tr",align:"left"},"User views their cart or single product")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Initiate Checkout"),(0,n.kt)("td",{parentName:"tr",align:"left"},"User begins checkout with a cart or single product")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Submit Shipping Info"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Shipping information is successfully submitted; user moves forward to the payment information step")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Place Order"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Payment information is successfully sent")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Order Success"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Order is completed successfully")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Order Error"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Something goes wrong after successfully submitting payment information")))),(0,n.kt)("h4",{id:"event-fields"},"Event Fields"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Event Timestamp"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Time when the event occurred in UTC, in ISO 8601 format")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Event"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Type of the event (e.g., Add to Cart, Initiate Checkout)")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Cart ID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Unique identifier for the cart")))),(0,n.kt)("h3",{id:"line-items-export"},"Line Items Export"),(0,n.kt)("p",null,"The Line Items export offers a detailed view of individual products sold in each order."),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Line Items export example"),(0,n.kt)("div",null,(0,n.kt)("pre",null,(0,n.kt)("code",null,"Order ID,Order Number,External Order ID,Cart ID,Product ID,Variant ID,Quantity Sold,Product Name,Merchant Name,Order Timestamp,Goods Without Tax",(0,n.kt)("br",null),'clo925si20000azzodbeggfv7,1001,EXT1001,3aasunj099y9,cks0fz5eo00001sr269h63310,0400151858640,2,"Widget A, Size: L",MerchantX,2023-10-25T14:31:21.000Z,$40.00',(0,n.kt)("br",null),"clo925si20000azzodbeggfv7,1001,EXT1001,3aasunj099y9,clbdx2e2l0383011h2kzx8cjp,40427980980431,1,Widget B,MerchantX,2023-10-25T14:31:21.000Z,$50.00")))),(0,n.kt)("h4",{id:"line-item-fields"},"Line Item Fields"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Order ID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Unique identifier for the order")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Order Number"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Human-readable order number")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"External Order ID"),(0,n.kt)("td",{parentName:"tr",align:"left"},'External reference ID for the order, if provided, otherwise "empty"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Cart ID"),(0,n.kt)("td",{parentName:"tr",align:"left"},'Unique identifier for the cart, or "empty"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Product ID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Unique identifier for the product")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Variant ID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Unique identifier for the product variant")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Quantity Sold"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Number of units sold")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Product Name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Name of the product")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Merchant Name"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Name of the merchant")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Order Timestamp"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Time when the order was placed in UTC, in ISO 8601 format")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Goods Without Tax"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Cost of goods sold without tax")))),(0,n.kt)("h3",{id:"orders-export"},"Orders Export"),(0,n.kt)("p",null,"The Orders export provides an overview of all orders processed."),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Orders export example"),(0,n.kt)("div",null,(0,n.kt)("pre",null,(0,n.kt)("code",null,"Order ID,Order Number,External Order ID,Cart ID,Order Timestamp,Total Customer Charge,Goods Without Tax,Goods Tax,Shipping Without Tax,Shipping Tax,Duties",(0,n.kt)("br",null),"clo925si20000azzodbeggfv7,1001,EXT1001,3aasunj099y9,2023-10-25T14:31:21.000Z,$100.00,$90.00,$10.00,$0.00,$0.00,$0.00")))),(0,n.kt)("h4",{id:"order-fields"},"Order Fields"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Order ID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Unique identifier for the order, generated by Bonsai")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Order Number"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Human-readable order number")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"External Order ID"),(0,n.kt)("td",{parentName:"tr",align:"left"},'Identifier from an external system, if provided, otherwise "empty"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Cart ID"),(0,n.kt)("td",{parentName:"tr",align:"left"},'Unique identifier for the cart related to this order, or "empty"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Order Timestamp"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Time the order was placed in UTC, in ISO 8601 format")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Total Customer Charge"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Total amount charged to the customer")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Goods Without Tax"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Total price of the goods sold without tax")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Goods Tax"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Tax charged on the goods")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Shipping Without Tax"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Cost of shipping, not including tax")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Shipping Tax"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Tax on the shipping cost")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Duties"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Import duties or tariffs applied to the order")))),(0,n.kt)("h3",{id:"refunds-export"},"Refunds Export"),(0,n.kt)("p",null,"The Refunds export provides individual refunds granted on individual orders and the reasons stated for these refunds. It is possible to have multiple refunds granted for a single order."),(0,n.kt)("details",null,(0,n.kt)("summary",null,"Refunds export example"),(0,n.kt)("div",null,(0,n.kt)("pre",null,(0,n.kt)("code",null,"Order ID,Order Number,External Order ID,Cart ID,Refund ID,Refund Reason,Refund Timestamp,Refunded Goods Without Tax",(0,n.kt)("br",null),"clo925si20000azzodbeggfv7,1001,EXT1001,3aasunj099y9,R123,Customer Canceled,2023-10-26T10:00:00.000Z,$40.00")))),(0,n.kt)("h4",{id:"refund-fields"},"Refund Fields"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Field"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Order ID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Unique identifier for the original order, generated by Bonsai")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Order Number"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Human-readable order number for the original order")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"External Order ID"),(0,n.kt)("td",{parentName:"tr",align:"left"},'Identifier from an external system for the original order, if provided, otherwise "empty"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Cart ID"),(0,n.kt)("td",{parentName:"tr",align:"left"},'Unique identifier for the cart related to the original order, or "empty"')),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Refund ID"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Unique identifier for the refund transaction")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Refund Reason"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Classification for the refund reason")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Refund Timestamp"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Time the refund was processed in UTC, in ISO 8601 format")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Refunded Goods Without Tax"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Total amount of goods refunded, not including tax")))),(0,n.kt)("h4",{id:"refund-reasons"},"Refund Reasons"),(0,n.kt)("p",null,"Here are the common reasons for refunds:"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",{parentName:"tr",align:"left"},"Reason"),(0,n.kt)("th",{parentName:"tr",align:"left"},"Description"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Item Unavailable"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Item out of stock or not available for purchase")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Customer Returned"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Customer returned the item and received a refund.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Customer Canceled"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Customer canceled the order before shipment.")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",{parentName:"tr",align:"left"},"Reimbursement"),(0,n.kt)("td",{parentName:"tr",align:"left"},"Money returned for an approved claim or payment")))),(0,n.kt)("h2",{id:"changelog"},"Changelog"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"November 1, 2023",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Initial documentation for ",(0,n.kt)("inlineCode",{parentName:"li"},"v5")," exports.")))))}m.isMDXComponent=!0}}]);