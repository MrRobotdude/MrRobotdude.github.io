(self.webpackChunknow_ui_kit_react=self.webpackChunknow_ui_kit_react||[]).push([[516],{5003:(e,t,i)=>{"use strict";i.d(t,{A:()=>l});var c=i(9950),a=i(4127),s=i(5249),r=i(7956),d=i(4414);const n={imageUrl:[{url:"pharmaceutical production.jpg",caption:null}]};const o=function(e){let{item:t}=e;const[o,p]=(0,c.useState)(0),[l,u]=(0,c.useState)(!1),m=t?t.imageUrl:n.imageUrl,g=()=>{u(!0)},j=()=>{u(!1)},h=()=>{if(l)return;const e=o===m.length-1?0:o+1;p(e)},x=()=>{if(l)return;const e=0===o?m.length-1:o-1;p(e)},f=m.map(((e,t)=>({src:e.url,altText:e.caption,key:t})));return m[o]||p(0),(0,d.jsxs)(a.A,{activeIndex:o,next:h,previous:x,className:"carousel-height",children:[(0,d.jsx)(s.A,{items:f,activeIndex:o,onClickHandler:e=>{l||p(e)}}),m.map(((e,t)=>(0,d.jsx)(r.A,{onExiting:g,onExited:j,className:"header-image",children:(0,d.jsxs)("div",{className:"gradient-wrapper",children:[(0,d.jsx)("img",{src:i(9241)("./".concat(e.url)),alt:e.caption,className:"gradient-image"}),(0,d.jsx)("div",{className:"gradient-overlay"})]})},t))),(0,d.jsx)("a",{className:"carousel-control-prev","data-slide":"prev",href:"#pablo",onClick:e=>{e.preventDefault(),x()},role:"button",children:(0,d.jsx)("i",{className:"now-ui-icons arrows-1_minimal-left"})}),(0,d.jsx)("a",{className:"carousel-control-next","data-slide":"next",href:"#pablo",onClick:e=>{e.preventDefault(),h()},role:"button",children:(0,d.jsx)("i",{className:"now-ui-icons arrows-1_minimal-right"})})]})};var p=i(273);const l=function(e){let{activeItem:t,itemType:i}=e;return(0,d.jsxs)("div",{className:"page-header page-header-small",id:"header-section",children:[(0,d.jsx)(o,{item:t}),(0,d.jsx)("div",{className:"content-center",children:(0,d.jsx)(p.A,{className:"p-5 slide-in-bottom",children:(0,d.jsx)("h1",{className:"title",children:i&&("products"===i?t?t.productName:"All Products":t?t.serviceName:"All Services")})})})]})}},9620:(e,t,i)=>{"use strict";i.d(t,{A:()=>x});i(9950);var c=i(1445),a=i(2088),s=i(651),r=i(9261),d=i(3824),n=i(349),o=i(200),p=i(7851),l=i(3931),u=i(5490),m=i(6991),g=i(2074),j=i(4414);const h=function(e){let{itemType:t,items:c}=e;return(0,j.jsx)(n.A,{children:c&&c.map(((e,c)=>(0,j.jsx)(l.A,{md:"4",sm:"12",className:"mb-4",children:(0,j.jsx)(g.N_,{className:"h6 text-dark",to:"/".concat(t,"/").concat("products"===t?e.productId:e.serviceId),children:(0,j.jsxs)(s.A,{className:"h-100",children:[(0,j.jsx)(u.A,{className:"p-0",style:{height:"200px"},children:(0,j.jsx)("div",{className:"image-container",children:(0,j.jsx)("div",{className:"image-wrapper",children:(0,j.jsx)(o.A,{alt:"Sample",src:i(9241)("./".concat(e.imageUrl[0].url)),className:"custom-card-img"})})})}),(0,j.jsx)(m.A,{className:"d-flex flex-column",children:(0,j.jsx)(r.A,{tag:"h6",className:"m-0",children:"products"===t?e.productName:e.serviceName})})]})})},c)))})};const x=function(e){let{activeItem:t,items:l,itemType:u}=e;return(0,j.jsxs)(j.Fragment,{children:["products"===u&&(0,j.jsx)(c.A,{activeTab:t?t.productId:"0",children:t?(0,j.jsx)(a.A,{tabId:t.productId,children:(0,j.jsxs)(s.A,{body:!0,className:"p-5",children:[(0,j.jsx)(r.A,{tag:"h3",className:"font-weight-bold",children:t.productName}),t.productDesc.map(((e,t)=>(0,j.jsx)(d.A,{tag:"h5",className:"text-justify-desktop",children:e},t))),t.generalSpecification&&(0,j.jsxs)(j.Fragment,{children:[(0,j.jsx)(r.A,{tag:"h3",className:"font-weight-bold",children:"General Specification"}),t.generalSpecification.map(((e,t)=>(0,j.jsxs)(d.A,{tag:"h5",className:"m-0",children:[e.feature,": ",e.value]},t)))]}),(0,j.jsx)(r.A,{tag:"h3",className:"font-weight-bold mt-3",children:"Photo of Products"}),(0,j.jsx)(n.A,{children:t.imageUrl.map(((e,t)=>(0,j.jsx)(o.A,{src:i(9241)("./".concat(e.url)),className:"mb-4",style:{height:"200px",width:"auto",margin:"auto"}},t)))}),(0,j.jsx)(r.A,{tag:"h3",className:"font-weight-bold",children:"For detailed information"}),(0,j.jsxs)(d.A,{tag:"h5",children:["Please check our documentation:",(0,j.jsx)("br",{}),(0,j.jsx)(p.A,{href:t.pdfUrl,download:t.pdfUrl.split("/").pop(),children:"Download PDF"})]})]})}):(0,j.jsx)(a.A,{tabId:"0",children:(0,j.jsx)(h,{itemType:"products",items:l})})}),"services"===u&&(0,j.jsx)(c.A,{activeTab:t?t.serviceId:"0",children:t?(0,j.jsx)(a.A,{tabId:t.serviceId,children:(0,j.jsxs)(s.A,{body:!0,className:"p-5",children:[(0,j.jsx)(r.A,{tag:"h3",className:"font-weight-bold",children:t.serviceName}),t.serviceDesc.map(((e,t)=>(0,j.jsx)(d.A,{tag:"h5",className:"text-justify-desktop",children:e},t))),(0,j.jsx)(n.A,{children:t.imageUrl.map(((e,t)=>(0,j.jsx)(o.A,{src:i(9241)("./".concat(e.url)),className:"mb-4",style:{height:"200px",width:"auto",margin:"auto"}})))})]})}):(0,j.jsx)(a.A,{tabId:"0",children:(0,j.jsx)(h,{itemType:"services",items:l})})})]})}},4253:(e,t,i)=>{"use strict";i.d(t,{A:()=>o});i(9950);var c=i(2308),a=i(8743),s=i(6640),r=i(8429),d=i(2074),n=i(4414);const o=function(e){let{items:t,handleItemClick:i,itemType:o}=e;const p=(0,r.zy)(),l=e=>{i(e)};return(0,n.jsx)(c.A,{vertical:!0,tabs:!0,children:(0,n.jsxs)(a.A,{className:"mx-auto mt-3",children:[(0,n.jsxs)(s.A,{tag:d.N_,to:"/".concat(o),className:"text-white h6 ".concat(!p.pathname.split("/")[2]&&"active"),onClick:()=>l(null),children:["All ",o]}),"products"===o&&t.map((e=>(0,n.jsx)(s.A,{tag:d.N_,to:"/".concat(o,"/").concat(e.productId),className:"text-white h6 ".concat(p.pathname.split("/")[2]===e.productId.toString()&&"active"),onClick:()=>l(e),children:e.productName},e.productId))),"services"===o&&t.map((e=>(0,n.jsx)(s.A,{tag:d.N_,to:"/".concat(o,"/").concat(e.serviceId),className:"text-white h6 ".concat(p.pathname.split("/")[2]===e.serviceId.toString()&&"active"),onClick:()=>l(e),children:e.serviceName},e.serviceId)))]})})}},1516:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>u});var c=i(9950),a=i(8429),s=i(349),r=i(3931),d=i(5003),n=i(4253),o=i(9620),p=i(6631),l=i(4414);const u=function(){const{activeId:e}=(0,a.g)(),[t,u]=(0,c.useState)(null);(0,c.useEffect)((()=>(document.body.classList.add("index-page"),document.body.classList.add("sidebar-collapse"),document.documentElement.classList.remove("nav-open"),window.scrollTo(0,0),document.body.scrollTop=0,function(){document.body.classList.remove("index-page"),document.body.classList.remove("sidebar-collapse")})),[]),(0,c.useEffect)((()=>{const t=p.Z.find((t=>t.productId===Number(e)));u(t)}),[e]);const m=t&&t.bgImage?{backgroundImage:"url(".concat(i(9241)("./".concat(t.bgImage)),")"),backgroundSize:"cover"}:{};return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)("div",{className:"wrapper",children:[(0,l.jsx)(d.A,{activeItem:t,itemType:"products"}),(0,l.jsx)("div",{className:"main",style:{backgroundColor:"#eee"},children:(0,l.jsxs)(s.A,{children:[(0,l.jsx)(r.A,{lg:3,style:{minHeight:"100%"},className:"bg-dark text-white d-none d-lg-block",children:(0,l.jsx)(n.A,{items:p.Z,activeItem:t,handleItemClick:e=>{u(e)},itemType:"products"})}),(0,l.jsx)(r.A,{lg:9,xs:12,className:"p-5",style:m,children:(0,l.jsx)(o.A,{activeItem:t,items:p.Z,itemType:"products"})})]})})]})})}},9241:(e,t,i)=>{var c={"./Clean AC Casestte OLShop 01.jpg":8220,"./Clean AC Casestte OLShop 02.jpg":1019,"./Clean AC Casestte OLShop 03.jpg":862,"./OK-Unit.jpg":7380,"./Projects/Boerhinger Ingelheim.jfif":120,"./Projects/Fahrenheit.png":4218,"./Projects/Logo_PT_Sido_Muncul.jpeg":3238,"./Projects/Medion.jpg":8980,"./Projects/Menarini.jfif":2932,"./Projects/PT UltrA Sakti.jpg":2548,"./Projects/ezgif.com-gif-maker.jpg":8444,"./Projects/logo-great-giant-pineapple.jpg":3956,"./Projects/pfizer.png":9866,"./Projects/pharos.png":8047,"./Service/certification/Certification.jpg":6436,"./Service/certification/certification2.jpg":1412,"./Service/certification/certification3.jpg":9457,"./Service/construction/construction1.jpg":6319,"./Service/construction/construction2.jpg":5008,"./Service/construction/construction3.jpg":8461,"./Service/construction/construction4.jpg":5110,"./Service/designing/Designing.jpg":1208,"./Service/manufacture/Manufacturing 3.jpg":8274,"./Service/manufacture/Manufacturing 4.jpg":3505,"./Service/manufacture/manufacture1.jpg":827,"./Service/manufacture/manufacture2.jpg":8028,"./Service/training/training1.jpg":9509,"./Service/training/training2 (2).jpg":2605,"./Service/validation/validation1.jpg":4267,"./Service/validation/validation2.jpg":3644,"./background/air-handling-unit.jpg":2841,"./background/clean-air-conditioner.jpg":2873,"./background/cold-storage.jpg":4656,"./background/precision-humidifier.jpg":9943,"./background/refrigerant-humidifier.jpg":3204,"./dehumidifier.jpg":452,"./header1.jpg":8273,"./header2.jpg":502,"./header3.jpg":9027,"./header4.jpg":7376,"./pharmaceutical production.jpg":7569,"./product/Clean Air Condition.jpg":1337,"./product/Direct Expansion AHU/Direct Expansion  Chiller Air Handling Unit (AHU) Edit.jpg":9465,"./product/Direct Expansion AHU/Direct Expansion AHU (2) edit.jpg":5045,"./product/Direct Expansion AHU/Direct Expansion AHU 1 edit.jpg":2411,"./product/Laminar Air Flow edit.jpg":9967,"./product/Scrubber Dust Collector.jpg":8196,"./product/chiller/chiller1 edit.jpg":4991,"./product/chiller/chiller2 edit.jpg":9714,"./product/chiller/chiller3 edit.jpg":8169,"./product/dehumidifier/Dehumidifier 2 edit.jpg":512,"./product/dehumidifier/Dehumidifier 3 edit.jpg":5823,"./product/dehumidifier/Dehumidifier edit.jpg":2538,"./product/refrigration/refrigeration.png":4955,"./product/stability/Stability Test 5 edit.jpg":3831,"./product/stability/Stability Test 6 edit.jpg":6394,"./product/timber kiln.png":7204,"./products.jpg":2761,"./services.jpg":9865};function a(e){var t=s(e);return i(t)}function s(e){if(!i.o(c,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return c[e]}a.keys=function(){return Object.keys(c)},a.resolve=s,e.exports=a,a.id=9241},8220:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/Clean AC Casestte OLShop 01.057f1265382125e97ff6.jpg"},1019:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/Clean AC Casestte OLShop 02.81f3617168a1e1697250.jpg"},862:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/Clean AC Casestte OLShop 03.745b0c4db8eab39ad8fd.jpg"},7380:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/OK-Unit.d515bc0ac8350f7c5860.jpg"},6436:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/Certification.458f57a830e7ca227150.jpg"},1412:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/certification2.b26e9b48616fe653751d.jpg"},9457:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/certification3.9490755ce760c8aed1e1.jpg"},6319:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/construction1.43aa22e713a5c7cc4a5c.jpg"},5008:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/construction2.4068937cd2464a437d96.jpg"},8461:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/construction3.c18fe718dee69de8e248.jpg"},5110:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/construction4.a5a495b2d9ecfe436f89.jpg"},1208:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/Designing.208e152f756d9486cd5c.jpg"},8274:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/Manufacturing 3.a13a8c57e4383c5a67be.jpg"},3505:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/Manufacturing 4.13296e92d62d42ef3538.jpg"},827:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/manufacture1.c9bb70e3c2b1d424d938.jpg"},8028:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/manufacture2.0529a7765c08a8db880a.jpg"},9509:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/training1.f5d931a42a2347562cef.jpg"},2605:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/training2 (2).1c1428a1a604734b675d.jpg"},4267:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/validation1.7971fb22dc02bd45a5d1.jpg"},3644:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/validation2.db72a47abfab52a18f7d.jpg"},2841:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/air-handling-unit.1f059d5b1764285db98a.jpg"},2873:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/clean-air-conditioner.f8690f19c13ed73bb4f4.jpg"},4656:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/cold-storage.796380522381f8fdf52a.jpg"},9943:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/precision-humidifier.4fb557aa3b488a88cf31.jpg"},3204:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/refrigerant-humidifier.4e0a72099be54d0b110a.jpg"},452:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/dehumidifier.8398b22628102543fa54.jpg"},8273:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/header1.52036424d150811d8fe4.jpg"},502:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/header2.dcc5953f8319298015de.jpg"},9027:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/header3.45a68040f725115f1ebd.jpg"},7376:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/header4.d765462f7e2ca3faf294.jpg"},7569:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/pharmaceutical production.22ce1708a4b10c64c6c1.jpg"},1337:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/Clean Air Condition.e2dad695d2b2d38d2723.jpg"},9465:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/Direct Expansion  Chiller Air Handling Unit (AHU) Edit.348bab7095fd929b7e68.jpg"},5045:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/Direct Expansion AHU (2) edit.3d3656b965496708ad69.jpg"},2411:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/Direct Expansion AHU 1 edit.db5c566a0aa988f70583.jpg"},9967:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/Laminar Air Flow edit.637d94528c9059076795.jpg"},8196:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/Scrubber Dust Collector.191dcd5192c22f9e5598.jpg"},4991:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/chiller1 edit.d883cf7b30a6ecf286a1.jpg"},9714:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/chiller2 edit.e03b4b4a03881d60e673.jpg"},8169:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/chiller3 edit.4a333152ed724d220be6.jpg"},512:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/Dehumidifier 2 edit.191c92657f672afbeee9.jpg"},5823:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/Dehumidifier 3 edit.269321250522ec889236.jpg"},2538:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/Dehumidifier edit.5708474b76ae00996c35.jpg"},4955:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/refrigeration.47ce4f3cf801bcafb1a0.png"},3831:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/Stability Test 5 edit.8f5d544de442162c1ffc.jpg"},6394:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/Stability Test 6 edit.bcc66715429293ea0229.jpg"},7204:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/timber kiln.15df67808d65f7276597.png"},2761:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/products.80bdc7329437eeab3a7d.jpg"},9865:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/services.24be86e9287686bad707.jpg"}}]);