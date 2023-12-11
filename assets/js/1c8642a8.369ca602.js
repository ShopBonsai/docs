"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[7055],{28031:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>b,contentTitle:()=>k,default:()=>x,frontMatter:()=>y,metadata:()=>f,toc:()=>h});var s=t(87462),l=(t(67294),t(3905)),m=t(58219),i=(t(62316),t(51039)),n=t.n(i),r=(t(82723),t(9487)),p=t(41429),o=t(5397),d=t(4667),c=t(9472),u=t(85162);const y={id:"delete-a-cart-by-id",title:"Delete a cart by ID",description:"Delete a cart by ID.",sidebar_label:"Delete a cart by ID",hide_title:!0,hide_table_of_contents:!0,api:"eJztlt9P2zAQx/8Vy0+bVPpDagXkaWyAhjZNaBsSUtWHa+ISQ2J7ttPRRfnfuXPSpm3Cy154QULCtb93Pt/n7FzJPTw4Hs15DNbzxYAbsJALLyzNllwqHuGcT/mAK1zAXzLBsRV/CmlFwiNvCzHgiXCxlcZLTQZf0Bm7uUSdeIbcZGR2Pjs/PTs9P5uc4rSLU5EDj0ruN4ZWnbdSPfCqWpBvZ7RywtH6dDymf4f+cZKdsM+QMIpDOI8uY628UJ7EYEwmYyDx6NGRRdndUS8fRUyGxmojrJf1fsJabd2eDqyFDcqkF7nrs29TMcdjgC8cp3x4kBkOvPR4/MXxNo2wdaeKfCksGqy0zQGPwVeZBr+fwtl4XO08d1KHfIosgyUpayZt7q/BQ8akc4Xg1TamHg+txZ16UvqvYiEdiGVvrQ0eMbTx8N1hI05kpDKF3/Gpqqo6rpJbq9cyEVupdDhYQ4b1Vaun40kf+gmiv1NQ+FRb+U8k7+zfhv2kn/0FgkEWDQNEWh8qjB3LMRDcj2l7BPuQ8n86mY6nfRUzxYr5oT1b6UK9l8sblcu0v1yIy3Xg0lcHx6uz+/su4Fn4GhyG8Q75DSDPXvseHFt3QXcVHcmlyLAvYcCoVWHLDTYYQ9wDm5VUY7JRTesEkNqViI/Wk1Epk4raDWHX246msBRc6r1x0WgERg5dqs0SGw6QwxhG5N1x6kOciAsr/SaYXdzefBObrwISpBLNF/uCX1RLNcdDWVs0RuJ020Oh7KSeCA1WWuvpzPTUBcMmddRKOYZ63nkjb2/wRbMstgJLWz0M8GMLSRgUJmmmQCUsJIbey3A0yhklo3YyHk7wr7kuEIfrgvciAEzEWmRUpO7TQYpCnEY7n0O4Ss2Zevgcx1y2t/I1nE3CvHj2I5MBpgc3C8zKBuycryngCF99ZJBiHDRXlktw4s5mVUXT2HVYAofDNVhZXwPEmEhHY6yXFWTuuHHdj+/Dz+Yef2RtO9sb3ZaxIp74OSpEXf1PCDi0y9UCVem2dMpm4SKOhfF7Jp1nimpsV96XV9+vfl9h7l8Acm/2NQ==",sidebar_class_name:"delete api-method",info_path:"docs/api/carts/carts-api",custom_edit_url:null},k=void 0,f={unversionedId:"api/carts/delete-a-cart-by-id",id:"api/carts/delete-a-cart-by-id",title:"Delete a cart by ID",description:"Delete a cart by ID.",source:"@site/docs/api/carts/delete-a-cart-by-id.api.mdx",sourceDirName:"api/carts",slug:"/api/carts/delete-a-cart-by-id",permalink:"/docs/api/carts/delete-a-cart-by-id",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"delete-a-cart-by-id",title:"Delete a cart by ID",description:"Delete a cart by ID.",sidebar_label:"Delete a cart by ID",hide_title:!0,hide_table_of_contents:!0,api:"eJztlt9P2zAQx/8Vy0+bVPpDagXkaWyAhjZNaBsSUtWHa+ISQ2J7ttPRRfnfuXPSpm3Cy154QULCtb93Pt/n7FzJPTw4Hs15DNbzxYAbsJALLyzNllwqHuGcT/mAK1zAXzLBsRV/CmlFwiNvCzHgiXCxlcZLTQZf0Bm7uUSdeIbcZGR2Pjs/PTs9P5uc4rSLU5EDj0ruN4ZWnbdSPfCqWpBvZ7RywtH6dDymf4f+cZKdsM+QMIpDOI8uY628UJ7EYEwmYyDx6NGRRdndUS8fRUyGxmojrJf1fsJabd2eDqyFDcqkF7nrs29TMcdjgC8cp3x4kBkOvPR4/MXxNo2wdaeKfCksGqy0zQGPwVeZBr+fwtl4XO08d1KHfIosgyUpayZt7q/BQ8akc4Xg1TamHg+txZ16UvqvYiEdiGVvrQ0eMbTx8N1hI05kpDKF3/Gpqqo6rpJbq9cyEVupdDhYQ4b1Vaun40kf+gmiv1NQ+FRb+U8k7+zfhv2kn/0FgkEWDQNEWh8qjB3LMRDcj2l7BPuQ8n86mY6nfRUzxYr5oT1b6UK9l8sblcu0v1yIy3Xg0lcHx6uz+/su4Fn4GhyG8Q75DSDPXvseHFt3QXcVHcmlyLAvYcCoVWHLDTYYQ9wDm5VUY7JRTesEkNqViI/Wk1Epk4raDWHX246msBRc6r1x0WgERg5dqs0SGw6QwxhG5N1x6kOciAsr/SaYXdzefBObrwISpBLNF/uCX1RLNcdDWVs0RuJ020Oh7KSeCA1WWuvpzPTUBcMmddRKOYZ63nkjb2/wRbMstgJLWz0M8GMLSRgUJmmmQCUsJIbey3A0yhklo3YyHk7wr7kuEIfrgvciAEzEWmRUpO7TQYpCnEY7n0O4Ss2Zevgcx1y2t/I1nE3CvHj2I5MBpgc3C8zKBuycryngCF99ZJBiHDRXlktw4s5mVUXT2HVYAofDNVhZXwPEmEhHY6yXFWTuuHHdj+/Dz+Yef2RtO9sb3ZaxIp74OSpEXf1PCDi0y9UCVem2dMpm4SKOhfF7Jp1nimpsV96XV9+vfl9h7l8Acm/2NQ==",sidebar_class_name:"delete api-method",info_path:"docs/api/carts/carts-api",custom_edit_url:null},sidebar:"bonsai",previous:{title:"Submit cart",permalink:"/docs/api/carts/submit-cart"},next:{title:"Orders API",permalink:"/docs/api/orders/orders-api"}},b={},h=[{value:"Request",id:"request",level:2}],g={toc:h};function x(e){let{components:a,...t}=e;return(0,l.kt)("wrapper",(0,s.Z)({},g,t,{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",{className:"openapi__heading"},"Delete a cart by ID"),(0,l.kt)(n(),{method:"delete",path:"/v1/{id}",mdxType:"MethodEndpoint"}),(0,l.kt)("p",null,"Delete a cart by ID."),(0,l.kt)("h2",{id:"request"},"Request"),(0,l.kt)("details",{style:{marginBottom:"1rem"},className:"openapi-markdown__details","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{}},(0,l.kt)("h3",{className:"openapi-markdown__details-summary-header-params"},"Path Parameters")),(0,l.kt)("div",null,(0,l.kt)("ul",null,(0,l.kt)(p.Z,{className:"paramsItem",param:{in:"path",name:"id",required:!0,description:"Cart ID",example:"9597879817",schema:{type:"string"}},mdxType:"ParamsItem"})))),(0,l.kt)("div",null,(0,l.kt)("div",null,(0,l.kt)(m.Z,{mdxType:"ApiTabs"},(0,l.kt)(u.default,{label:"400",value:"400",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"400 - Bad request")),(0,l.kt)("div",null,(0,l.kt)(r.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(u.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(c.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(u.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details"},(0,l.kt)("summary",{style:{}},(0,l.kt)("span",{className:"openapi-schema__container"},(0,l.kt)("strong",{className:"openapi-schema__property"},"errors"),(0,l.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(d.Z,{collapsible:!1,name:"status",required:!0,schemaName:"float",qualifierMessage:void 0,schema:{type:"number",format:"float",example:500},mdxType:"SchemaItem"}),(0,l.kt)(d.Z,{collapsible:!1,name:"detail",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0,example:"Fatal issue"},mdxType:"SchemaItem"}),(0,l.kt)(d.Z,{collapsible:!1,name:"title",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Unknown error"},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,l.kt)(u.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(o.Z,{responseExample:'{\n  "errors": [\n    {\n      "status": 400,\n      "detail": "",\n      "title": "Bad input request"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(u.default,{label:"401",value:"401",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"401 - Unauthorized")),(0,l.kt)("div",null,(0,l.kt)(r.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(u.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(c.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(u.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details"},(0,l.kt)("summary",{style:{}},(0,l.kt)("span",{className:"openapi-schema__container"},(0,l.kt)("strong",{className:"openapi-schema__property"},"errors"),(0,l.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(d.Z,{collapsible:!1,name:"status",required:!0,schemaName:"float",qualifierMessage:void 0,schema:{type:"number",format:"float",example:500},mdxType:"SchemaItem"}),(0,l.kt)(d.Z,{collapsible:!1,name:"detail",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0,example:"Fatal issue"},mdxType:"SchemaItem"}),(0,l.kt)(d.Z,{collapsible:!1,name:"title",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Unknown error"},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,l.kt)(u.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(o.Z,{responseExample:'{\n  "errors": [\n    {\n      "status": 401,\n      "detail": "",\n      "title": "Authentication information is missing or invalid"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(u.default,{label:"404",value:"404",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"404 - Not found")),(0,l.kt)("div",null,(0,l.kt)(r.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(u.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(c.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(u.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details"},(0,l.kt)("summary",{style:{}},(0,l.kt)("span",{className:"openapi-schema__container"},(0,l.kt)("strong",{className:"openapi-schema__property"},"errors"),(0,l.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(d.Z,{collapsible:!1,name:"status",required:!0,schemaName:"float",qualifierMessage:void 0,schema:{type:"number",format:"float",example:500},mdxType:"SchemaItem"}),(0,l.kt)(d.Z,{collapsible:!1,name:"detail",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0,example:"Fatal issue"},mdxType:"SchemaItem"}),(0,l.kt)(d.Z,{collapsible:!1,name:"title",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Unknown error"},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,l.kt)(u.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(o.Z,{responseExample:'{\n  "errors": [\n    {\n      "status": 404,\n      "detail": "",\n      "title": "Not Found"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"}))))))),(0,l.kt)(u.default,{label:"5XX",value:"5XX",mdxType:"TabItem"},(0,l.kt)("div",null,(0,l.kt)("p",null,"500 - Unknown error")),(0,l.kt)("div",null,(0,l.kt)(r.Z,{className:"openapi-tabs__mime",schemaType:"response",mdxType:"MimeTabs"},(0,l.kt)(u.default,{label:"application/json",value:"application/json",mdxType:"TabItem"},(0,l.kt)(c.default,{className:"openapi-tabs__schema",mdxType:"SchemaTabs"},(0,l.kt)(u.default,{label:"Schema",value:"Schema",mdxType:"TabItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details response","data-collapsed":!1,open:!0},(0,l.kt)("summary",{style:{},className:"openapi-markdown__details-summary-response"},(0,l.kt)("strong",null,"Schema")),(0,l.kt)("div",{style:{textAlign:"left",marginLeft:"1rem"}}),(0,l.kt)("ul",{style:{marginLeft:"1rem"}},(0,l.kt)(d.Z,{collapsible:!0,className:"schemaItem",mdxType:"SchemaItem"},(0,l.kt)("details",{style:{},className:"openapi-markdown__details"},(0,l.kt)("summary",{style:{}},(0,l.kt)("span",{className:"openapi-schema__container"},(0,l.kt)("strong",{className:"openapi-schema__property"},"errors"),(0,l.kt)("span",{className:"openapi-schema__name"}," object[]"))),(0,l.kt)("div",{style:{marginLeft:"1rem"}},(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem",paddingBottom:".5rem"}},"Array [")),(0,l.kt)(d.Z,{collapsible:!1,name:"status",required:!0,schemaName:"float",qualifierMessage:void 0,schema:{type:"number",format:"float",example:500},mdxType:"SchemaItem"}),(0,l.kt)(d.Z,{collapsible:!1,name:"detail",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",nullable:!0,example:"Fatal issue"},mdxType:"SchemaItem"}),(0,l.kt)(d.Z,{collapsible:!1,name:"title",required:!0,schemaName:"string",qualifierMessage:void 0,schema:{type:"string",example:"Unknown error"},mdxType:"SchemaItem"}),(0,l.kt)("li",null,(0,l.kt)("div",{style:{fontSize:"var(--ifm-code-font-size)",opacity:"0.6",marginLeft:"-.5rem"}},"]")))))))),(0,l.kt)(u.default,{label:"Example (from schema)",value:"Example (from schema)",mdxType:"TabItem"},(0,l.kt)(o.Z,{responseExample:'{\n  "errors": [\n    {\n      "status": 500,\n      "detail": "",\n      "title": "Unknown error"\n    }\n  ]\n}',language:"json",mdxType:"ResponseSamples"})))))))))))}x.isMDXComponent=!0}}]);