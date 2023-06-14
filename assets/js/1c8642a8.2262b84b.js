"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7055],{28031:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>b,contentTitle:()=>u,default:()=>v,frontMatter:()=>c,metadata:()=>y,toc:()=>k});var i=a(87462),s=(a(67294),a(3905)),l=a(26389),r=a(94891),n=a(75190),o=a(47507),p=a(24310),m=a(63303),d=(a(75035),a(85162));const c={id:"delete-a-cart-by-id",title:"Delete a cart by ID",description:"Delete a cart by ID.",sidebar_label:"Delete a cart by ID",hide_title:!0,hide_table_of_contents:!0,api:{tags:["cart"],parameters:[{in:"path",name:"id",required:!0,description:"Cart ID",example:"9597879817",schema:{type:"string"}}],responses:{400:{description:"400 - Bad request",content:{"application/json":{schema:{type:"object",properties:{errors:{type:"array",items:{type:"object",required:["status","detail","title"],properties:{status:{type:"number",format:"float",example:500},detail:{type:"string",nullable:!0,example:"Fatal issue"},title:{type:"string",example:"Unknown error"}},example:{status:400,detail:"",title:"Bad input request"}}}},description:"Provided input is invalid"}}}},401:{description:"401 - Unauthorized",content:{"application/json":{schema:{type:"object",properties:{errors:{type:"array",items:{type:"object",required:["status","detail","title"],properties:{status:{type:"number",format:"float",example:500},detail:{type:"string",nullable:!0,example:"Fatal issue"},title:{type:"string",example:"Unknown error"}},example:{status:401,detail:"",title:"Authentication information is missing or invalid"}}}},description:"Authentication information is missing or invalid"}}}},404:{description:"404 - Not found",content:{"application/json":{schema:{type:"object",properties:{errors:{type:"array",items:{type:"object",required:["status","detail","title"],properties:{status:{type:"number",format:"float",example:500},detail:{type:"string",nullable:!0,example:"Fatal issue"},title:{type:"string",example:"Unknown error"}},example:{status:404,detail:"",title:"Not Found"}}}},description:"Not Found"}}}},"5XX":{description:"500 - Unknown error",content:{"application/json":{schema:{type:"object",properties:{errors:{type:"array",items:{type:"object",required:["status","detail","title"],properties:{status:{type:"number",format:"float",example:500},detail:{type:"string",nullable:!0,example:"Fatal issue"},title:{type:"string",example:"Unknown error"}},example:{status:500,detail:"",title:"Unknown error"}}}},description:"Unknown error"}}}}},description:"Delete a cart by ID.",method:"delete",path:"/v1/{id}",servers:[{url:"https://api.shopbonsai.ca/carts"}],security:[{APIKeyHeader:[]}],securitySchemes:{APIKeyHeader:{type:"apiKey",name:"API-Key",in:"header"}},info:{title:"Carts API",description:"API for creating, reading, updating, and deleting carts.",version:"0.8.30",contact:{email:"developers@shopbonsai.ca"}},postman:{name:"Delete a cart by ID",description:{content:"Delete a cart by ID.",type:"text/plain"},url:{path:["v1",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Cart ID",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"DELETE"}},sidebar_class_name:"delete api-method",info_path:"docs/api/carts/carts-api",custom_edit_url:null},u=void 0,y={unversionedId:"api/carts/delete-a-cart-by-id",id:"api/carts/delete-a-cart-by-id",title:"Delete a cart by ID",description:"Delete a cart by ID.",source:"@site/docs/api/carts/delete-a-cart-by-id.api.mdx",sourceDirName:"api/carts",slug:"/api/carts/delete-a-cart-by-id",permalink:"/docs/api/carts/delete-a-cart-by-id",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"delete-a-cart-by-id",title:"Delete a cart by ID",description:"Delete a cart by ID.",sidebar_label:"Delete a cart by ID",hide_title:!0,hide_table_of_contents:!0,api:{tags:["cart"],parameters:[{in:"path",name:"id",required:!0,description:"Cart ID",example:"9597879817",schema:{type:"string"}}],responses:{400:{description:"400 - Bad request",content:{"application/json":{schema:{type:"object",properties:{errors:{type:"array",items:{type:"object",required:["status","detail","title"],properties:{status:{type:"number",format:"float",example:500},detail:{type:"string",nullable:!0,example:"Fatal issue"},title:{type:"string",example:"Unknown error"}},example:{status:400,detail:"",title:"Bad input request"}}}},description:"Provided input is invalid"}}}},401:{description:"401 - Unauthorized",content:{"application/json":{schema:{type:"object",properties:{errors:{type:"array",items:{type:"object",required:["status","detail","title"],properties:{status:{type:"number",format:"float",example:500},detail:{type:"string",nullable:!0,example:"Fatal issue"},title:{type:"string",example:"Unknown error"}},example:{status:401,detail:"",title:"Authentication information is missing or invalid"}}}},description:"Authentication information is missing or invalid"}}}},404:{description:"404 - Not found",content:{"application/json":{schema:{type:"object",properties:{errors:{type:"array",items:{type:"object",required:["status","detail","title"],properties:{status:{type:"number",format:"float",example:500},detail:{type:"string",nullable:!0,example:"Fatal issue"},title:{type:"string",example:"Unknown error"}},example:{status:404,detail:"",title:"Not Found"}}}},description:"Not Found"}}}},"5XX":{description:"500 - Unknown error",content:{"application/json":{schema:{type:"object",properties:{errors:{type:"array",items:{type:"object",required:["status","detail","title"],properties:{status:{type:"number",format:"float",example:500},detail:{type:"string",nullable:!0,example:"Fatal issue"},title:{type:"string",example:"Unknown error"}},example:{status:500,detail:"",title:"Unknown error"}}}},description:"Unknown error"}}}}},description:"Delete a cart by ID.",method:"delete",path:"/v1/{id}",servers:[{url:"https://api.shopbonsai.ca/carts"}],security:[{APIKeyHeader:[]}],securitySchemes:{APIKeyHeader:{type:"apiKey",name:"API-Key",in:"header"}},info:{title:"Carts API",description:"API for creating, reading, updating, and deleting carts.",version:"0.8.30",contact:{email:"developers@shopbonsai.ca"}},postman:{name:"Delete a cart by ID",description:{content:"Delete a cart by ID.",type:"text/plain"},url:{path:["v1",":id"],host:["{{baseUrl}}"],query:[],variable:[{disabled:!1,description:{content:"(Required) Cart ID",type:"text/plain"},type:"any",value:"",key:"id"}]},header:[{key:"Accept",value:"application/json"}],method:"DELETE"}},sidebar_class_name:"delete api-method",info_path:"docs/api/carts/carts-api",custom_edit_url:null},sidebar:"bonsai",previous:{title:"Submit cart",permalink:"/docs/api/carts/submit-cart"},next:{title:"Orders API",permalink:"/docs/api/orders/orders-api"}},b={},k=[{value:"Delete a cart by ID",id:"delete-a-cart-by-id",level:2}],h={toc:k};function v(e){let{components:t,...a}=e;return(0,s.kt)("wrapper",(0,i.Z)({},h,a,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("h2",{id:"delete-a-cart-by-id"},"Delete a cart by ID"),(0,s.kt)("p",null,"Delete a cart by ID."),(0,s.kt)("details",{style:{marginBottom:"1rem"},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"Path Parameters")),(0,s.kt)("div",null,(0,s.kt)("ul",null,(0,s.kt)(n.Z,{className:"paramsItem",param:{in:"path",name:"id",required:!0,description:"Cart ID",example:"9597879817",schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,s.kt)("div",null,(0,s.kt)(l.Z,{mdxType:"ApiTabs"},(0,s.kt)(d.Z,{label:"400",value:"400",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"400 - Bad request")),(0,s.kt)("div",null,(0,s.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(m.Z,{mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"errors"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!1,name:"status",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"float",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"detail",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"title",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(o.Z,{responseExample:'{\n  "errors": [\n    {\n      "status": 400,\n      "detail": "",\n      "title": "Bad input request"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.Z,{label:"401",value:"401",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"401 - Unauthorized")),(0,s.kt)("div",null,(0,s.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(m.Z,{mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"errors"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!1,name:"status",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"float",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"detail",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"title",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(o.Z,{responseExample:'{\n  "errors": [\n    {\n      "status": 401,\n      "detail": "",\n      "title": "Authentication information is missing or invalid"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.Z,{label:"404",value:"404",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"404 - Not found")),(0,s.kt)("div",null,(0,s.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(m.Z,{mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"errors"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!1,name:"status",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"float",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"detail",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"title",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(o.Z,{responseExample:'{\n  "errors": [\n    {\n      "status": 404,\n      "detail": "",\n      "title": "Not Found"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,s.kt)(d.Z,{label:"5XX",value:"5XX",mdxType:"TabItem"},(0,s.kt)("div",null,(0,s.kt)("p",null,"500 - Unknown error")),(0,s.kt)("div",null,(0,s.kt)(r.Z,{schemaType:"response",mdxType:"MimeTabs"},(0,s.kt)(d.Z,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,s.kt)(m.Z,{mdxType:"SchemaTabs"},(0,s.kt)(d.Z,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,s.kt)("details",{style:{},"data-collapsed":!1,open:!0},(0,s.kt)("summary",{style:{textAlign:"left"}},(0,s.kt)("strong",null,"Schema")),(0,s.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,s.kt)("ul",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,s.kt)("details",{style:{}},(0,s.kt)("summary",{style:{}},(0,s.kt)("strong",null,"errors"),(0,s.kt)("span",{style:{opacity:"0.6"}}," object[]")),(0,s.kt)("div",{style:{marginLeft:"1rem"}},(0,s.kt)(p.Z,{collapsible:!1,name:"status",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"float",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"detail",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}),(0,s.kt)(p.Z,{collapsible:!1,name:"title",required:!1,deprecated:void 0,schemaDescription:void 0,schemaName:"string",qualifierMessage:void 0,defaultValue:void 0,mdxType:"SchemaItem"}))))))),(0,s.kt)(d.Z,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,s.kt)(o.Z,{responseExample:'{\n  "errors": [\n    {\n      "status": 500,\n      "detail": "",\n      "title": "Unknown error"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))))))}v.isMDXComponent=!0}}]);