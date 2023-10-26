"use strict";(self.webpackChunkdocs=self.webpackChunkdocs||[]).push([[2414],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>s});var n=a(67294);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var p=n.createContext({}),d=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},u=function(e){var t=d(e.components);return n.createElement(p.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,i=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),k=d(a),s=i,m=k["".concat(p,".").concat(s)]||k[s]||c[s]||o;return a?n.createElement(m,r(r({ref:t},u),{},{components:a})):n.createElement(m,r({ref:t},u))}));function s(e,t){var a=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=a.length,r=new Array(o);r[0]=k;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var d=2;d<o;d++)r[d]=a[d];return n.createElement.apply(null,r)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},39419:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var n=a(87462),i=(a(67294),a(3905));const o={title:"Feed Format Reference",description:"Learn how product feeds are formatted at Bonsai.",sidebar_position:4},r="Feed Format Reference",l={unversionedId:"product-feeds/format",id:"product-feeds/format",title:"Feed Format Reference",description:"Learn how product feeds are formatted at Bonsai.",source:"@site/docs/product-feeds/format.md",sourceDirName:"product-feeds",slug:"/product-feeds/format",permalink:"/docs/product-feeds/format",draft:!1,tags:[],version:"current",sidebarPosition:4,frontMatter:{title:"Feed Format Reference",description:"Learn how product feeds are formatted at Bonsai.",sidebar_position:4},sidebar:"bonsai",previous:{title:"Product Validation",permalink:"/docs/product-feeds/product-validation"},next:{title:"Bonsai API",permalink:"/docs/api/"}},p={},d=[{value:"<code>id</code>",id:"id",level:2},{value:"<code>item_group_id</code>",id:"item_group_id",level:2},{value:"<code>affiliate_item_group_id</code>",id:"affiliate_item_group_id",level:2},{value:"<code>title</code>",id:"title",level:2},{value:"<code>link</code>",id:"link",level:2},{value:"<code>description</code>",id:"description",level:2},{value:"<code>image_link</code>",id:"image_link",level:2},{value:"<code>additional_image_link</code>",id:"additional_image_link",level:2},{value:"<code>availability</code>",id:"availability",level:2},{value:"<code>quantity</code>",id:"quantity",level:2},{value:"<code>price</code>",id:"price",level:2},{value:"<code>sale_price</code>",id:"sale_price",level:2},{value:"<code>google_product_category</code>",id:"google_product_category",level:2},{value:"<code>brand</code>",id:"brand",level:2},{value:"<code>color</code>",id:"color",level:2},{value:"<code>gender</code>",id:"gender",level:2},{value:"<code>size</code>",id:"size",level:2},{value:"<code>size_type</code>",id:"size_type",level:2},{value:"<code>option&lt;1...9&gt;</code>",id:"option19",level:2},{value:"<code>total_ratings</code>",id:"total_ratings",level:2},{value:"<code>star_rating</code>",id:"star_rating",level:2},{value:"<code>created_at</code>",id:"created_at",level:2},{value:"<code>updated_at</code>",id:"updated_at",level:2},{value:"<code>gtin</code>",id:"gtin",level:2},{value:"<code>sku</code>",id:"sku",level:2},{value:"<code>is_final_sale</code>",id:"is_final_sale",level:2},{value:"<code>are_taxes_included_in_price</code>",id:"are_taxes_included_in_price",level:2},{value:"<code>product_slug</code>",id:"product_slug",level:2},{value:"<code>age_group</code>",id:"age_group",level:2}],u={toc:d};function c(e){let{components:t,...a}=e;return(0,i.kt)("wrapper",(0,n.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"feed-format-reference"},"Feed Format Reference"),(0,i.kt)("h2",{id:"id"},(0,i.kt)("inlineCode",{parentName:"h2"},"id")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"required"))),(0,i.kt)("p",null,"Variant ID. Each variant within a feed has a unique ID. This ID is used to identify the variant in\nthe feed and in the API."),(0,i.kt)("h2",{id:"item_group_id"},(0,i.kt)("inlineCode",{parentName:"h2"},"item_group_id")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"required"))),(0,i.kt)("p",null,"Product ID. Variants belonging to the same product have the same ",(0,i.kt)("inlineCode",{parentName:"p"},"item_group_id"),". This ID is used to\nidentify the product in the feed and in the API."),(0,i.kt)("h2",{id:"affiliate_item_group_id"},(0,i.kt)("inlineCode",{parentName:"h2"},"affiliate_item_group_id")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"required"))),(0,i.kt)("p",null,"Affiliate product ID. Variants belonging to the same product have the same ",(0,i.kt)("inlineCode",{parentName:"p"},"affiliate_item_group_id"),".\nThis field is unique to each product per feed. And it is assigned by the merchant. You can use\nthis field to map products from our feeds to the same products from your own database."),(0,i.kt)("h2",{id:"title"},(0,i.kt)("inlineCode",{parentName:"h2"},"title")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"required"))),(0,i.kt)("p",null,"Title of the product. Each variant of a product has the same title."),(0,i.kt)("h2",{id:"link"},(0,i.kt)("inlineCode",{parentName:"h2"},"link")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"required"))),(0,i.kt)("p",null,"Link to the product on the merchant\u2019s website. Each variant of a product has the same link."),(0,i.kt)("h2",{id:"description"},(0,i.kt)("inlineCode",{parentName:"h2"},"description")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"required"))),(0,i.kt)("p",null,"Product description. Each variant of a product has the same description."),(0,i.kt)("h2",{id:"image_link"},(0,i.kt)("inlineCode",{parentName:"h2"},"image_link")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"required"))),(0,i.kt)("p",null,"A single image URL representing the product or variant. Different variants with the same\n",(0,i.kt)("inlineCode",{parentName:"p"},"item_group_id")," may have the same ",(0,i.kt)("inlineCode",{parentName:"p"},"image_link")," value."),(0,i.kt)("h2",{id:"additional_image_link"},(0,i.kt)("inlineCode",{parentName:"h2"},"additional_image_link")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"optional"))),(0,i.kt)("p",null,"Either a single image URL, or a comma-separated list of image URLs."),(0,i.kt)("h2",{id:"availability"},(0,i.kt)("inlineCode",{parentName:"h2"},"availability")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"required"))),(0,i.kt)("p",null,"Availability of a variant - can either be ",(0,i.kt)("inlineCode",{parentName:"p"},"in_stock")," or ",(0,i.kt)("inlineCode",{parentName:"p"},"out_of_stock"),". If a variant is out of stock,\nthe ",(0,i.kt)("inlineCode",{parentName:"p"},"quantity")," field will always be ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),". If a variant is in stock, the ",(0,i.kt)("inlineCode",{parentName:"p"},"quantity")," field will be greater\nthan ",(0,i.kt)("inlineCode",{parentName:"p"},"0"),"."),(0,i.kt)("h2",{id:"quantity"},(0,i.kt)("inlineCode",{parentName:"h2"},"quantity")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"required"))),(0,i.kt)("p",null,"Number of the inventory available to sell. This number is an estimate and may not be accurate. To get\nthe most accurate inventory, use the ",(0,i.kt)("a",{parentName:"p",href:"/docs/api/orders/checkout-totals"},"Checkout API"),"."),(0,i.kt)("h2",{id:"price"},(0,i.kt)("inlineCode",{parentName:"h2"},"price")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"required"))),(0,i.kt)("p",null,"Variant\u2019s regular price, including currency. Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"125 USD"),"."),(0,i.kt)("h2",{id:"sale_price"},(0,i.kt)("inlineCode",{parentName:"h2"},"sale_price")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"optional"))),(0,i.kt)("p",null,"Variant\u2019s price before discount, if the variant is on sale. Includes currency. Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"150 USD"),"."),(0,i.kt)("admonition",{title:"Example",type:"note"},(0,i.kt)("p",{parentName:"admonition"},"If a product is currently being sold for $100, but its previous price was $150, then in the feed it will be displayed as:"),(0,i.kt)("ul",{parentName:"admonition"},(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"price: 100 USD")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("inlineCode",{parentName:"li"},"sale_price: 150 USD")))),(0,i.kt)("h2",{id:"google_product_category"},(0,i.kt)("inlineCode",{parentName:"h2"},"google_product_category")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"required"))),(0,i.kt)("p",null,"Google Product Category. You can find the list of categories ",(0,i.kt)("a",{parentName:"p",href:"https://support.google.com/merchants/answer/6324436?hl=en"},"here"),". Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"Apparel & Accessories > Clothing > Shirts & Tops > T-Shirts"),"."),(0,i.kt)("h2",{id:"brand"},(0,i.kt)("inlineCode",{parentName:"h2"},"brand")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"optional"))),(0,i.kt)("p",null,"Brand of the product. Each variant of a product has the same brand. Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"Nike"),"."),(0,i.kt)("h2",{id:"color"},(0,i.kt)("inlineCode",{parentName:"h2"},"color")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"optional"))),(0,i.kt)("p",null,"Color of the variant. Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"Black"),"."),(0,i.kt)("h2",{id:"gender"},(0,i.kt)("inlineCode",{parentName:"h2"},"gender")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"required"))),(0,i.kt)("p",null,"Product gender. One of ",(0,i.kt)("inlineCode",{parentName:"p"},"male"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"female"),", ",(0,i.kt)("inlineCode",{parentName:"p"},"unisex"),", and ",(0,i.kt)("inlineCode",{parentName:"p"},"kids & babies"),"."),(0,i.kt)("h2",{id:"size"},(0,i.kt)("inlineCode",{parentName:"h2"},"size")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"optional"))),(0,i.kt)("p",null,"Size of the variant. Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"XL"),"."),(0,i.kt)("h2",{id:"size_type"},(0,i.kt)("inlineCode",{parentName:"h2"},"size_type")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"optional"))),(0,i.kt)("p",null,"Size type of the variant. Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"slim fit"),"."),(0,i.kt)("h2",{id:"option19"},(0,i.kt)("inlineCode",{parentName:"h2"},"option<1...9>")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"optional"))),(0,i.kt)("p",null,"Arbitrary variant option information apart from color, size, and size type, in the form of ",(0,i.kt)("inlineCode",{parentName:"p"},"<optionName>:<optionValue>"),". Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"material:cotton"),". It can have up to 9 options."),(0,i.kt)("h2",{id:"total_ratings"},(0,i.kt)("inlineCode",{parentName:"h2"},"total_ratings")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"optional"))),(0,i.kt)("p",null,"Total number of ratings for the product. Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"10"),"."),(0,i.kt)("h2",{id:"star_rating"},(0,i.kt)("inlineCode",{parentName:"h2"},"star_rating")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"optional"))),(0,i.kt)("p",null,"Average star rating for the product. Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"4.5"),". The value must be between ",(0,i.kt)("inlineCode",{parentName:"p"},"0")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"5"),"."),(0,i.kt)("h2",{id:"created_at"},(0,i.kt)("inlineCode",{parentName:"h2"},"created_at")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"required"))),(0,i.kt)("p",null,"ISO 8601 string of product\u2019s creation date. Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"2022-12-14T18:30:00Z"),"."),(0,i.kt)("h2",{id:"updated_at"},(0,i.kt)("inlineCode",{parentName:"h2"},"updated_at")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"required"))),(0,i.kt)("p",null,"ISO 8601 string of the product\u2019s update date. Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"2022-12-14T18:31:00Z"),"."),(0,i.kt)("h2",{id:"gtin"},(0,i.kt)("inlineCode",{parentName:"h2"},"gtin")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"optional"))),(0,i.kt)("p",null,"Global Trade Item Number (GTIN) is ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," unless provided by the merchant."),(0,i.kt)("h2",{id:"sku"},(0,i.kt)("inlineCode",{parentName:"h2"},"sku")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"optional"))),(0,i.kt)("p",null,"stock keeping unit (sku) is ",(0,i.kt)("inlineCode",{parentName:"p"},"null")," unless provided by the merchant."),(0,i.kt)("h2",{id:"is_final_sale"},(0,i.kt)("inlineCode",{parentName:"h2"},"is_final_sale")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"optional"))),(0,i.kt)("p",null,"Some items are final sale (i.e. highly discounted products); we set it to true whenever this information is provided by the merchant."),(0,i.kt)("h2",{id:"are_taxes_included_in_price"},(0,i.kt)("inlineCode",{parentName:"h2"},"are_taxes_included_in_price")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"optional"))),(0,i.kt)("p",null,"If the price of the product is inclusive of taxes."),(0,i.kt)("h2",{id:"product_slug"},(0,i.kt)("inlineCode",{parentName:"h2"},"product_slug")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"optional"))),(0,i.kt)("p",null,"URL-friendly value based on the product\u2019s name. It\u2019s guaranteed to be unique per merchant, and it will never change. It can be used as a slug in the URL for a specific PDP, instead of ids. Limited to 255 characters. Example: ",(0,i.kt)("inlineCode",{parentName:"p"},"gwen-lace-trim-silk-camisole-ac3cb58d")),(0,i.kt)("h2",{id:"age_group"},(0,i.kt)("inlineCode",{parentName:"h2"},"age_group")),(0,i.kt)("blockquote",null,(0,i.kt)("p",{parentName:"blockquote"},(0,i.kt)("strong",{parentName:"p"},"optional"))),(0,i.kt)("p",null,"Categorizes product by age.\nThese are the supported values for this attribute:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"newborn")),(0,i.kt)("p",{parentName:"li"},"0-3 months old. Newborn sizes are often identified by the age range in months (0\u20133) or just \u201cnewborn.\u201d")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"infant")),(0,i.kt)("p",{parentName:"li"},"3\u201312 months old. Infant sizes are often identified by the age range in months (3\u201312).")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"toddler")),(0,i.kt)("p",{parentName:"li"},"1\u20135 years old. Toddler sizes are often identified by the age range in months (12\u201324) or years (1\u20135).")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"kids")),(0,i.kt)("p",{parentName:"li"},"5\u201313 years old. Children's sizes are often identified by the age range in years (5-13).")),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("p",{parentName:"li"},(0,i.kt)("inlineCode",{parentName:"p"},"adult")),(0,i.kt)("p",{parentName:"li"},"Typically teens or older (13 years old or more). All sizes within this age group have been manufactured to fit an adult or teen."))))}c.isMDXComponent=!0}}]);