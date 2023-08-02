"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[1973],{29299:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>h,contentTitle:()=>u,default:()=>b,frontMatter:()=>c,metadata:()=>y,toc:()=>f});var i=a(87462),r=(a(67294),a(3905)),s=a(26389),n=a(94891),o=a(75190),l=a(47507),d=a(24310),p=a(63303),m=(a(75035),a(85162));const c={id:"order-status-by-id",title:"Order Status by id",description:"Shows information about an existing order and its products by Bonsai order id. This endpoint",sidebar_label:"Order Status by id",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Order Status"],parameters:[{in:"path",name:"id",required:!0,description:"Public ID of the order.",example:"cldbvy7gt0006hpzo9nyw72ks",schema:{type:"string"}}],responses:{200:{description:"Success",content:{"application/json":{schema:{properties:{data:{type:"object",required:["id","fulfillmentStatus","customer"],properties:{id:{type:"string",description:"Public ID of the order.",example:"cldbvy7gt0006hpzo9nyw72ks"},externalId:{type:"string",description:"ID of the order provided to Bonsai by the party who placed the order - should be unique per order if passed.",example:"51cf91c1-da4a-42c4-81d3-3ec3e3268655"},fulfillmentStatus:{type:"string",enum:["pending","fulfilled","Partially Fulfilled","cancelled","sent to merchant","failed (merchant)","failed (unknown)","failed (payment)","cancelled (payment)","failed (payment validation)","payment successful","failed (inventory)","failed (inventory - related)"],description:"Fulfillment status of the order",example:"fulfilled"},products:{type:"array",items:{type:"object",required:["id","variantId","quantity","merchantOrderId","fulfillmentStatus","paymentStatus"],properties:{id:{type:"string",description:"Product ID.",example:"clad6pg5z00eu012gfz7hfm92"},variantId:{type:"string",description:"The ID of the product variant.",example:"M00679529706740"},quantity:{type:"number",format:"float",minimum:1,description:"Quantity of the product variant.",example:1},merchantOrderId:{type:"string",nullable:!0,description:"The merchant order ID. External to Bonsai. Empty if the order has not yet been placed on external merchant system.",example:"T8745295"},fulfillmentStatus:{type:"string",enum:["pending","fulfilled","Partially Fulfilled","cancelled","sent to merchant","failed (merchant)","failed (unknown)","failed (payment)","cancelled (payment)","failed (payment validation)","payment successful","failed (inventory)","failed (inventory - related)"],description:"Fulfillment status of the individual product variant in the order.",example:"fulfilled"},paymentStatus:{type:"string",enum:["unpaid","paid","refunded","partially refunded"],description:"Payment status for the related order.",example:"paid"}}}},shippingTracking:{type:"array",items:{type:"object",required:["carrier","trackingNumber","trackingUrl"],properties:{carrier:{type:"string",description:"The name of the shipping carrier.",example:"USPS"},trackingNumber:{type:"string",description:"The tracking number for the shipment.",example:"9400100000000000069420"},trackingUrl:{type:"string",description:"The URL to track the shipment.",example:"https://tools.usps.com/go/TrackConfirmAction_input?qtc_tLabels1=9400100000000000069420"},products:{type:"array",items:{type:"object",required:["id","variantId","quantity"],properties:{id:{type:"string",description:"Product ID.",example:"clad6pg5z00eu012gfz7hfm92"},variantId:{type:"string",description:"The ID of the product variant.",example:"M00679529706740"},quantity:{type:"number",format:"float",minimum:1,description:"Quantity of the product variant.",example:1}}}}}}},customer:{type:"object",required:["email"],properties:{email:{type:"string",format:"email",description:"Customer email",example:"qa@shopbonsai.ca"},firstName:{type:"string",description:"Customer's first name"},lastName:{type:"string",description:"Customer's last name"}}},note:{type:"string",description:"Note containing extra information for our team",example:"Fulfil only if white colour was selected. Or reach out to our support"}}}},type:"object"}}}},400:{description:"400 - Bad request",content:{"application/json":{schema:{type:"object",properties:{errors:{type:"array",items:{type:"object",required:["status","detail","title"],properties:{status:{type:"number",format:"float",example:500},detail:{type:"string",nullable:!0,example:"Fatal issue"},title:{type:"string",example:"Unknown error"}},example:{status:400,detail:"",title:"Bad input request"}}}},description:"Provided input is invalid"}}}},401:{description:"401 - Unauthorized",content:{"application/json":{schema:{type:"object",properties:{errors:{type:"array",items:{type:"object",required:["id","status","code","title","detail"],properties:{id:{type:"string",description:"Unique identifier for error. Can be used for tracing across services.",example:"123e4567-e89b-12d3-a456-426655440000"},status:{type:"number",format:"float",description:"HTTP status code.",example:401},code:{type:"string",description:"Unique code for specific error.",example:"AUTHENTICATION_FAILED"},title:{type:"string",description:"Short description what the error entails.",example:"Authentication failed"},detail:{type:"object",properties:{authentication_expected:{type:"string",example:"Authorization header"}},description:"Useful details related to the error"}}}}}}}}},404:{description:"404 - Not found",content:{"application/json":{schema:{type:"object",properties:{errors:{type:"array",items:{type:"object",required:["id","status","code","title","detail"],properties:{id:{type:"string",description:"Unique identifier for error. Can be used for tracing across services.",example:"123e4567-e89b-12d3-a456-426655440000"},status:{type:"number",format:"float",description:"HTTP status code.",example:404},code:{type:"string",description:"Unique code for specific error.",example:"CUSTOMER_ORDER_NOT_FOUND"},title:{type:"string",description:"Short description what the error entails.",example:"Customer order has not been found"},detail:{type:"object",properties:{customer_order_id:{type:"string",example:"cldbvy7gt0006hpzo9nyw72ks"}},description:"Useful details related to the error"}}}}}}}}},"5XX":{description:"500 - Unknown error",content:{"application/json":{schema:{type:"object",properties:{errors:{type:"array",items:{type:"object",required:["status","detail","title"],properties:{status:{type:"number",format:"float",example:500},detail:{type:"string",nullable:!0,example:"Fatal issue"},title:{type:"string",example:"Unknown error"}},example:{status:500,detail:"",title:"Unknown error"}}}},description:"Unknown error"}}}}},description:"Shows information about an existing order and its products by Bonsai order id. This endpoint\n        allows API users to get current information on the fulfillment status of their orders.",security:[{AuthorizationHeader:[]}],method:"get",path:"/v2/{id}",servers:[{url:"https://api.shopbonsai.ca/orders"}],securitySchemes:{APIKeyHeader:{type:"apiKey",name:"API-Key",in:"header"},AuthorizationHeader:{type:"apiKey",name:"Authorization",in:"header"}},info:{title:"Orders API",description:"\n  APIs used for interacting with orders.\n\n  There are a few types of integration with the Bonsai Order API depending on who owns the payments.\n\n  ## Bonsai owns the payment\n\n  ### Native Checkout experience\n\n  If during the checkout process, the customer is redirected to Bonsai's checkout page to complete payment and order processing.\n\n  ### API integrated checkout experience\n\n  If you are hosting your own checkout experience and leveraging our endpoints to collect payment and complete order processing.\n  Please contact our team to provide you with all you need to get started.\n\n  ## Account owns the payment\n\n  If you are owning payment. Orders will need to be submitted with the payment method `external payment`.\n  Once the order is submitted, our team will handle fulfillment and Bonsai will invoice you for the order amount based on our agreement.\n  ",version:"7.2.0",contact:{email:"developers@shopbonsai.ca"}},postman:{name:"Order Status by id",description:{content:"Shows information about an existing order and its products by Bonsai order id. This endpoint\n        allows API users to get current information on the fulfillment status of their orders.",type:"text/plain"},url:{path:["v2",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Public ID of the order.",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"Authorization",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"get api-method",info_path:"docs/api/orders/orders-api"},u=void 0,y={unversionedId:"api/orders/order-status-by-id",id:"api/orders/order-status-by-id",title:"Order Status by id",description:"Shows information about an existing order and its products by Bonsai order id. This endpoint",source:"@site/docs/api/orders/order-status-by-id.api.mdx",sourceDirName:"api/orders",slug:"/api/orders/order-status-by-id",permalink:"/docs/api/orders/order-status-by-id",draft:!1,tags:[],version:"current",frontMatter:{id:"order-status-by-id",title:"Order Status by id",description:"Shows information about an existing order and its products by Bonsai order id. This endpoint",sidebar_label:"Order Status by id",hide_title:!0,hide_table_of_contents:!0,api:{tags:["Order Status"],parameters:[{in:"path",name:"id",required:!0,description:"Public ID of the order.",example:"cldbvy7gt0006hpzo9nyw72ks",schema:{type:"string"}}],responses:{200:{description:"Success",content:{"application/json":{schema:{properties:{data:{type:"object",required:["id","fulfillmentStatus","customer"],properties:{id:{type:"string",description:"Public ID of the order.",example:"cldbvy7gt0006hpzo9nyw72ks"},externalId:{type:"string",description:"ID of the order provided to Bonsai by the party who placed the order - should be unique per order if passed.",example:"51cf91c1-da4a-42c4-81d3-3ec3e3268655"},fulfillmentStatus:{type:"string",enum:["pending","fulfilled","Partially Fulfilled","cancelled","sent to merchant","failed (merchant)","failed (unknown)","failed (payment)","cancelled (payment)","failed (payment validation)","payment successful","failed (inventory)","failed (inventory - related)"],description:"Fulfillment status of the order",example:"fulfilled"},products:{type:"array",items:{type:"object",required:["id","variantId","quantity","merchantOrderId","fulfillmentStatus","paymentStatus"],properties:{id:{type:"string",description:"Product ID.",example:"clad6pg5z00eu012gfz7hfm92"},variantId:{type:"string",description:"The ID of the product variant.",example:"M00679529706740"},quantity:{type:"number",format:"float",minimum:1,description:"Quantity of the product variant.",example:1},merchantOrderId:{type:"string",nullable:!0,description:"The merchant order ID. External to Bonsai. Empty if the order has not yet been placed on external merchant system.",example:"T8745295"},fulfillmentStatus:{type:"string",enum:["pending","fulfilled","Partially Fulfilled","cancelled","sent to merchant","failed (merchant)","failed (unknown)","failed (payment)","cancelled (payment)","failed (payment validation)","payment successful","failed (inventory)","failed (inventory - related)"],description:"Fulfillment status of the individual product variant in the order.",example:"fulfilled"},paymentStatus:{type:"string",enum:["unpaid","paid","refunded","partially refunded"],description:"Payment status for the related order.",example:"paid"}}}},shippingTracking:{type:"array",items:{type:"object",required:["carrier","trackingNumber","trackingUrl"],properties:{carrier:{type:"string",description:"The name of the shipping carrier.",example:"USPS"},trackingNumber:{type:"string",description:"The tracking number for the shipment.",example:"9400100000000000069420"},trackingUrl:{type:"string",description:"The URL to track the shipment.",example:"https://tools.usps.com/go/TrackConfirmAction_input?qtc_tLabels1=9400100000000000069420"},products:{type:"array",items:{type:"object",required:["id","variantId","quantity"],properties:{id:{type:"string",description:"Product ID.",example:"clad6pg5z00eu012gfz7hfm92"},variantId:{type:"string",description:"The ID of the product variant.",example:"M00679529706740"},quantity:{type:"number",format:"float",minimum:1,description:"Quantity of the product variant.",example:1}}}}}}},customer:{type:"object",required:["email"],properties:{email:{type:"string",format:"email",description:"Customer email",example:"qa@shopbonsai.ca"},firstName:{type:"string",description:"Customer's first name"},lastName:{type:"string",description:"Customer's last name"}}},note:{type:"string",description:"Note containing extra information for our team",example:"Fulfil only if white colour was selected. Or reach out to our support"}}}},type:"object"}}}},400:{description:"400 - Bad request",content:{"application/json":{schema:{type:"object",properties:{errors:{type:"array",items:{type:"object",required:["status","detail","title"],properties:{status:{type:"number",format:"float",example:500},detail:{type:"string",nullable:!0,example:"Fatal issue"},title:{type:"string",example:"Unknown error"}},example:{status:400,detail:"",title:"Bad input request"}}}},description:"Provided input is invalid"}}}},401:{description:"401 - Unauthorized",content:{"application/json":{schema:{type:"object",properties:{errors:{type:"array",items:{type:"object",required:["id","status","code","title","detail"],properties:{id:{type:"string",description:"Unique identifier for error. Can be used for tracing across services.",example:"123e4567-e89b-12d3-a456-426655440000"},status:{type:"number",format:"float",description:"HTTP status code.",example:401},code:{type:"string",description:"Unique code for specific error.",example:"AUTHENTICATION_FAILED"},title:{type:"string",description:"Short description what the error entails.",example:"Authentication failed"},detail:{type:"object",properties:{authentication_expected:{type:"string",example:"Authorization header"}},description:"Useful details related to the error"}}}}}}}}},404:{description:"404 - Not found",content:{"application/json":{schema:{type:"object",properties:{errors:{type:"array",items:{type:"object",required:["id","status","code","title","detail"],properties:{id:{type:"string",description:"Unique identifier for error. Can be used for tracing across services.",example:"123e4567-e89b-12d3-a456-426655440000"},status:{type:"number",format:"float",description:"HTTP status code.",example:404},code:{type:"string",description:"Unique code for specific error.",example:"CUSTOMER_ORDER_NOT_FOUND"},title:{type:"string",description:"Short description what the error entails.",example:"Customer order has not been found"},detail:{type:"object",properties:{customer_order_id:{type:"string",example:"cldbvy7gt0006hpzo9nyw72ks"}},description:"Useful details related to the error"}}}}}}}}},"5XX":{description:"500 - Unknown error",content:{"application/json":{schema:{type:"object",properties:{errors:{type:"array",items:{type:"object",required:["status","detail","title"],properties:{status:{type:"number",format:"float",example:500},detail:{type:"string",nullable:!0,example:"Fatal issue"},title:{type:"string",example:"Unknown error"}},example:{status:500,detail:"",title:"Unknown error"}}}},description:"Unknown error"}}}}},description:"Shows information about an existing order and its products by Bonsai order id. This endpoint\n        allows API users to get current information on the fulfillment status of their orders.",security:[{AuthorizationHeader:[]}],method:"get",path:"/v2/{id}",servers:[{url:"https://api.shopbonsai.ca/orders"}],securitySchemes:{APIKeyHeader:{type:"apiKey",name:"API-Key",in:"header"},AuthorizationHeader:{type:"apiKey",name:"Authorization",in:"header"}},info:{title:"Orders API",description:"\n  APIs used for interacting with orders.\n\n  There are a few types of integration with the Bonsai Order API depending on who owns the payments.\n\n  ## Bonsai owns the payment\n\n  ### Native Checkout experience\n\n  If during the checkout process, the customer is redirected to Bonsai's checkout page to complete payment and order processing.\n\n  ### API integrated checkout experience\n\n  If you are hosting your own checkout experience and leveraging our endpoints to collect payment and complete order processing.\n  Please contact our team to provide you with all you need to get started.\n\n  ## Account owns the payment\n\n  If you are owning payment. Orders will need to be submitted with the payment method `external payment`.\n  Once the order is submitted, our team will handle fulfillment and Bonsai will invoice you for the order amount based on our agreement.\n  ",version:"7.2.0",contact:{email:"developers@shopbonsai.ca"}},postman:{name:"Order Status by id",description:{content:"Shows information about an existing order and its products by Bonsai order id. This endpoint\n        allows API users to get current information on the fulfillment status of their orders.",type:"text/plain"},url:{path:["v2",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Public ID of the order.",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"GET",auth:{type:"apikey",apikey:[{type:"any",value:"Authorization",key:"key"},{type:"any",value:"<API Key>",key:"value"},{type:"any",value:"header",key:"in"}]}}},sidebar_class_name:"get api-method",info_path:"docs/api/orders/orders-api"},sidebar:"bonsai",previous:{title:"Error Responses",permalink:"/docs/api/orders/orders-error-responses"},next:{title:"Order Status By External Order Id",permalink:"/docs/api/orders/order-status-by-external-order-id"}},h={},f=[{value:"Order Status by id",id:"order-status-by-id",level:2}],g={toc:f};function b(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,i.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"order-status-by-id"},"Order Status by id"),(0,r.kt)("p",null,"Shows information about an existing order and its products by Bonsai order id. This endpoint\nallows API users to get current information on the fulfillment status of their orders."),(0,r.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"Path Parameters")),(0,r.kt)("div",null,(0,r.kt)("ul",null,(0,r.kt)(o.Z,{className:"paramsItem",param:{in:"path",name:"id",required:!0,description:"Public ID of the order.",example:"cldbvy7gt0006hpzo9nyw72ks",schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,r.kt)("div",null,(0,r.kt)(s.Z,{mdxType:"ApiTabs"},(0,r.kt)(m.Z,{label:"200",value:"200",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"Success")),(0,r.kt)("div",null,(0,r.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(p.Z,{mdxType:"SchemaTabs"},(0,r.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"data"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(d.Z,{collapsible:!1,name:"id",required:!1,schemaDescription:"Public ID of the order.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"externalId",required:!1,schemaDescription:"ID of the order provided to Bonsai by the party who placed the order - should be unique per order if passed.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"fulfillmentStatus",required:!1,schemaDescription:"Fulfillment status of the order",schemaName:"string",qualifierMessage:"**Possible values:** [`pending`, `fulfilled`, `Partially Fulfilled`, `cancelled`, `sent to merchant`, `failed (merchant)`, `failed (unknown)`, `failed (payment)`, `cancelled (payment)`, `failed (payment validation)`, `payment successful`, `failed (inventory)`, `failed (inventory - related)`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"products"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(d.Z,{collapsible:!1,name:"id",required:!1,schemaDescription:"Product ID.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"variantId",required:!1,schemaDescription:"The ID of the product variant.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"quantity",required:!1,schemaDescription:"Quantity of the product variant.",schemaName:"float",qualifierMessage:"**Possible values:** `>= 1`",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"merchantOrderId",required:!1,schemaDescription:"The merchant order ID. External to Bonsai. Empty if the order has not yet been placed on external merchant system.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"fulfillmentStatus",required:!1,schemaDescription:"Fulfillment status of the individual product variant in the order.",schemaName:"string",qualifierMessage:"**Possible values:** [`pending`, `fulfilled`, `Partially Fulfilled`, `cancelled`, `sent to merchant`, `failed (merchant)`, `failed (unknown)`, `failed (payment)`, `cancelled (payment)`, `failed (payment validation)`, `payment successful`, `failed (inventory)`, `failed (inventory - related)`]",defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"paymentStatus",required:!1,schemaDescription:"Payment status for the related order.",schemaName:"string",qualifierMessage:"**Possible values:** [`unpaid`, `paid`, `refunded`, `partially refunded`]",defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"shippingTracking"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(d.Z,{collapsible:!1,name:"carrier",required:!1,schemaDescription:"The name of the shipping carrier.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"trackingNumber",required:!1,schemaDescription:"The tracking number for the shipment.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"trackingUrl",required:!1,schemaDescription:"The URL to track the shipment.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"products"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(d.Z,{collapsible:!1,name:"id",required:!1,schemaDescription:"Product ID.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"variantId",required:!1,schemaDescription:"The ID of the product variant.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"quantity",required:!1,schemaDescription:"Quantity of the product variant.",schemaName:"float",qualifierMessage:"**Possible values:** `>= 1`",defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,r.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"customer"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(d.Z,{collapsible:!1,name:"email",required:!1,schemaDescription:"Customer email",schemaName:"email",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"firstName",required:!1,schemaDescription:"Customer's first name",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"lastName",required:!1,schemaDescription:"Customer's last name",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))),(0,r.kt)(d.Z,{collapsible:!1,name:"note",required:!1,schemaDescription:"Note containing extra information for our team",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,r.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(l.Z,{responseExample:'{\n  "data": {\n    "id": "cldbvy7gt0006hpzo9nyw72ks",\n    "externalId": "51cf91c1-da4a-42c4-81d3-3ec3e3268655",\n    "fulfillmentStatus": "fulfilled",\n    "products": [\n      {\n        "id": "clad6pg5z00eu012gfz7hfm92",\n        "variantId": "M00679529706740",\n        "quantity": 1,\n        "merchantOrderId": "T8745295",\n        "fulfillmentStatus": "fulfilled",\n        "paymentStatus": "paid"\n      }\n    ],\n    "shippingTracking": [\n      {\n        "carrier": "USPS",\n        "trackingNumber": "9400100000000000069420",\n        "trackingUrl": "https://tools.usps.com/go/TrackConfirmAction_input?qtc_tLabels1=9400100000000000069420",\n        "products": [\n          {\n            "id": "clad6pg5z00eu012gfz7hfm92",\n            "variantId": "M00679529706740",\n            "quantity": 1\n          }\n        ]\n      }\n    ],\n    "customer": {\n      "email": "qa@shopbonsai.ca",\n      "firstName": "string",\n      "lastName": "string"\n    },\n    "note": "Fulfil only if white colour was selected. Or reach out to our support"\n  }\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(m.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"400 - Bad request")),(0,r.kt)("div",null,(0,r.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(p.Z,{mdxType:"SchemaTabs"},(0,r.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"errors"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(d.Z,{collapsible:!1,name:"status",required:!1,schemaDescription:void 0,schemaName:"float",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"detail",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"title",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,r.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(l.Z,{responseExample:'{\n  "errors": [\n    {\n      "status": 400,\n      "detail": "",\n      "title": "Bad input request"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(m.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"401 - Unauthorized")),(0,r.kt)("div",null,(0,r.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(p.Z,{mdxType:"SchemaTabs"},(0,r.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"errors"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(d.Z,{collapsible:!1,name:"id",required:!1,schemaDescription:"Unique identifier for error. Can be used for tracing across services.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"status",required:!1,schemaDescription:"HTTP status code.",schemaName:"float",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"code",required:!1,schemaDescription:"Unique code for specific error.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"title",required:!1,schemaDescription:"Short description what the error entails.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"detail"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"Useful details related to the error")),(0,r.kt)(d.Z,{collapsible:!1,name:"authentication_expected",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))))))))),(0,r.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(l.Z,{responseExample:'{\n  "errors": [\n    {\n      "id": "123e4567-e89b-12d3-a456-426655440000",\n      "status": 401,\n      "code": "AUTHENTICATION_FAILED",\n      "title": "Authentication failed",\n      "detail": {\n        "authentication_expected": "Authorization header"\n      }\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(m.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"404 - Not found")),(0,r.kt)("div",null,(0,r.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(p.Z,{mdxType:"SchemaTabs"},(0,r.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"errors"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(d.Z,{collapsible:!1,name:"id",required:!1,schemaDescription:"Unique identifier for error. Can be used for tracing across services.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"status",required:!1,schemaDescription:"HTTP status code.",schemaName:"float",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"code",required:!1,schemaDescription:"Unique code for specific error.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"title",required:!1,schemaDescription:"Short description what the error entails.",schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"detail"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)("div",{style:{marginTop:".5rem",marginBottom:".5rem"}},(0,r.kt)("p",null,"Useful details related to the error")),(0,r.kt)(d.Z,{collapsible:!1,name:"customer_order_id",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"})))))))))),(0,r.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(l.Z,{responseExample:'{\n  "errors": [\n    {\n      "id": "123e4567-e89b-12d3-a456-426655440000",\n      "status": 404,\n      "code": "CUSTOMER_ORDER_NOT_FOUND",\n      "title": "Customer order has not been found",\n      "detail": {\n        "customer_order_id": "cldbvy7gt0006hpzo9nyw72ks"\n      }\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,r.kt)(m.Z,{label:"5XX",value:"5XX",mdxType:"TabItem"},(0,r.kt)("div",null,(0,r.kt)("p",null,"500 - Unknown error")),(0,r.kt)("div",null,(0,r.kt)(n.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,r.kt)(m.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,r.kt)(p.Z,{mdxType:"SchemaTabs"},(0,r.kt)(m.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,r.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,r.kt)("summary",{style:{textAlign:"left"}},(0,r.kt)("strong",null,"Schema")),(0,r.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,r.kt)("ul",{style:{marginLeft:"1rem"}},(0,r.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,r.kt)("details",{style:{}},(0,r.kt)("summary",{style:{}},(0,r.kt)("strong",null,"errors"),(0,r.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,r.kt)("div",{style:{marginLeft:"1rem"}},(0,r.kt)(d.Z,{collapsible:!1,name:"status",required:!1,schemaDescription:void 0,schemaName:"float",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"detail",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,r.kt)(d.Z,{collapsible:!1,name:"title",required:!1,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,r.kt)(m.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,r.kt)(l.Z,{responseExample:'{\n  "errors": [\n    {\n      "status": 500,\n      "detail": "",\n      "title": "Unknown error"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}b.isMDXComponent=!0}}]);