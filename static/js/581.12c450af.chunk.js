(self.webpackChunknow_ui_kit_react=self.webpackChunknow_ui_kit_react||[]).push([[581],{6871:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>ce});var s=i(9950),r=i(4705),n=i(8168),o=i(9417),a=i(5540),c=i(1942),d=i.n(c),l=i(8738),p=i.n(l),u=i(8587),h=i(7119),f=i(7152),m=i(4208),g=i(8367);function b(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,s)}return i}function j(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?b(Object(i),!0).forEach((function(t){(0,r.A)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):b(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var v={children:d().oneOfType([d().node,d().func]).isRequired,popperClassName:d().string,placement:d().string,placementPrefix:d().string,arrowClassName:d().string,hideArrow:d().bool,tag:m.Wx,isOpen:d().bool.isRequired,cssModule:d().object,offset:d().oneOfType([d().string,d().number]),fallbackPlacement:d().oneOfType([d().string,d().array]),flip:d().bool,container:m.xQ,target:m.xQ.isRequired,modifiers:d().object,positionFixed:d().bool,boundariesElement:d().oneOfType([d().string,m.to]),onClosed:d().func,fade:d().bool,transition:d().shape(g.A.propTypes)},x={boundariesElement:"scrollParent",placement:"auto",hideArrow:!1,isOpen:!1,offset:0,fallbackPlacement:"flip",flip:!0,container:"body",modifiers:{},onClosed:function(){},fade:!0,transition:j({},g.A.defaultProps)},y=function(e){function t(t){var i;return(i=e.call(this,t)||this).setTargetNode=i.setTargetNode.bind((0,o.A)(i)),i.getTargetNode=i.getTargetNode.bind((0,o.A)(i)),i.getRef=i.getRef.bind((0,o.A)(i)),i.onClosed=i.onClosed.bind((0,o.A)(i)),i.state={isOpen:t.isOpen},i}(0,a.A)(t,e),t.getDerivedStateFromProps=function(e,t){return e.isOpen&&!t.isOpen?{isOpen:e.isOpen}:null};var i=t.prototype;return i.componentDidUpdate=function(){this._element&&this._element.childNodes&&this._element.childNodes[0]&&this._element.childNodes[0].focus&&this._element.childNodes[0].focus()},i.setTargetNode=function(e){this.targetNode="string"===typeof e?(0,m.EW)(e):e},i.getTargetNode=function(){return this.targetNode},i.getContainerNode=function(){return(0,m.EW)(this.props.container)},i.getRef=function(e){this._element=e},i.onClosed=function(){this.props.onClosed(),this.setState({isOpen:!1})},i.renderChildren=function(){var e=this.props,t=e.cssModule,i=e.children,r=e.isOpen,o=e.flip,a=(e.target,e.offset),c=e.fallbackPlacement,d=e.placementPrefix,l=e.arrowClassName,h=e.hideArrow,b=e.popperClassName,v=e.tag,x=(e.container,e.modifiers),y=e.positionFixed,O=e.boundariesElement,w=(e.onClosed,e.fade),T=e.transition,C=e.placement,N=(0,u.A)(e,["cssModule","children","isOpen","flip","target","offset","fallbackPlacement","placementPrefix","arrowClassName","hideArrow","popperClassName","tag","container","modifiers","positionFixed","boundariesElement","onClosed","fade","transition","placement"]),E=(0,m.qO)(p()("arrow",l),t),A=(0,m.qO)(p()(b,d?d+"-auto":""),this.props.cssModule),P=j({offset:{offset:a},flip:{enabled:o,behavior:c},preventOverflow:{boundariesElement:O}},x),D=j(j(j({},g.A.defaultProps),T),{},{baseClass:w?T.baseClass:"",timeout:w?T.timeout:0});return s.createElement(g.A,(0,n.A)({},D,N,{in:r,onExited:this.onClosed,tag:v}),s.createElement(f.Ay,{referenceElement:this.targetNode,modifiers:P,placement:C,positionFixed:y},(function(e){var t=e.ref,r=e.style,n=e.placement,o=e.outOfBoundaries,a=e.arrowProps,c=e.scheduleUpdate;return s.createElement("div",{ref:t,style:r,className:A,"x-placement":n,"x-out-of-boundaries":o?"true":void 0},"function"===typeof i?i({scheduleUpdate:c}):i,!h&&s.createElement("span",{ref:a.ref,className:E,style:a.style}))})))},i.render=function(){return this.setTargetNode(this.props.target),this.state.isOpen?"inline"===this.props.container?this.renderChildren():h.createPortal(s.createElement("div",{ref:this.getRef},this.renderChildren()),this.getContainerNode()):null},t}(s.Component);y.propTypes=v,y.defaultProps=x;const O=y;var w={children:d().oneOfType([d().node,d().func]),placement:d().oneOf(m.$0),target:m.xQ.isRequired,container:m.xQ,isOpen:d().bool,disabled:d().bool,hideArrow:d().bool,boundariesElement:d().oneOfType([d().string,m.to]),className:d().string,innerClassName:d().string,arrowClassName:d().string,popperClassName:d().string,cssModule:d().object,toggle:d().func,autohide:d().bool,placementPrefix:d().string,delay:d().oneOfType([d().shape({show:d().number,hide:d().number}),d().number]),modifiers:d().object,positionFixed:d().bool,offset:d().oneOfType([d().string,d().number]),innerRef:d().oneOfType([d().func,d().string,d().object]),trigger:d().string,fade:d().bool,flip:d().bool},T={show:0,hide:50},C={isOpen:!1,hideArrow:!1,autohide:!1,delay:T,toggle:function(){},trigger:"click",fade:!0};function N(e,t){return t&&(e===t||t.contains(e))}function E(e,t){return void 0===t&&(t=[]),t&&t.length&&t.filter((function(t){return N(e,t)}))[0]}var A=function(e){function t(t){var i;return(i=e.call(this,t)||this)._targets=[],i.currentTargetElement=null,i.addTargetEvents=i.addTargetEvents.bind((0,o.A)(i)),i.handleDocumentClick=i.handleDocumentClick.bind((0,o.A)(i)),i.removeTargetEvents=i.removeTargetEvents.bind((0,o.A)(i)),i.toggle=i.toggle.bind((0,o.A)(i)),i.showWithDelay=i.showWithDelay.bind((0,o.A)(i)),i.hideWithDelay=i.hideWithDelay.bind((0,o.A)(i)),i.onMouseOverTooltipContent=i.onMouseOverTooltipContent.bind((0,o.A)(i)),i.onMouseLeaveTooltipContent=i.onMouseLeaveTooltipContent.bind((0,o.A)(i)),i.show=i.show.bind((0,o.A)(i)),i.hide=i.hide.bind((0,o.A)(i)),i.onEscKeyDown=i.onEscKeyDown.bind((0,o.A)(i)),i.getRef=i.getRef.bind((0,o.A)(i)),i.state={isOpen:t.isOpen},i._isMounted=!1,i}(0,a.A)(t,e);var i=t.prototype;return i.componentDidMount=function(){this._isMounted=!0,this.updateTarget()},i.componentWillUnmount=function(){this._isMounted=!1,this.removeTargetEvents(),this._targets=null,this.clearShowTimeout(),this.clearHideTimeout()},t.getDerivedStateFromProps=function(e,t){return e.isOpen&&!t.isOpen?{isOpen:e.isOpen}:null},i.onMouseOverTooltipContent=function(){this.props.trigger.indexOf("hover")>-1&&!this.props.autohide&&(this._hideTimeout&&this.clearHideTimeout(),this.state.isOpen&&!this.props.isOpen&&this.toggle())},i.onMouseLeaveTooltipContent=function(e){this.props.trigger.indexOf("hover")>-1&&!this.props.autohide&&(this._showTimeout&&this.clearShowTimeout(),e.persist(),this._hideTimeout=setTimeout(this.hide.bind(this,e),this.getDelay("hide")))},i.onEscKeyDown=function(e){"Escape"===e.key&&this.hide(e)},i.getRef=function(e){var t=this.props.innerRef;t&&("function"===typeof t?t(e):"object"===typeof t&&(t.current=e)),this._popover=e},i.getDelay=function(e){var t=this.props.delay;return"object"===typeof t?isNaN(t[e])?T[e]:t[e]:t},i.getCurrentTarget=function(e){if(!e)return null;var t=this._targets.indexOf(e);return t>=0?this._targets[t]:this.getCurrentTarget(e.parentElement)},i.show=function(e){if(!this.props.isOpen){if(this.clearShowTimeout(),this.currentTargetElement=e?e.currentTarget||this.getCurrentTarget(e.target):null,e&&e.composedPath&&"function"===typeof e.composedPath){var t=e.composedPath();this.currentTargetElement=t&&t[0]||this.currentTargetElement}this.toggle(e)}},i.showWithDelay=function(e){this._hideTimeout&&this.clearHideTimeout(),this._showTimeout=setTimeout(this.show.bind(this,e),this.getDelay("show"))},i.hide=function(e){this.props.isOpen&&(this.clearHideTimeout(),this.currentTargetElement=null,this.toggle(e))},i.hideWithDelay=function(e){this._showTimeout&&this.clearShowTimeout(),this._hideTimeout=setTimeout(this.hide.bind(this,e),this.getDelay("hide"))},i.clearShowTimeout=function(){clearTimeout(this._showTimeout),this._showTimeout=void 0},i.clearHideTimeout=function(){clearTimeout(this._hideTimeout),this._hideTimeout=void 0},i.handleDocumentClick=function(e){var t=this.props.trigger.split(" ");t.indexOf("legacy")>-1&&(this.props.isOpen||E(e.target,this._targets))?(this._hideTimeout&&this.clearHideTimeout(),this.props.isOpen&&!N(e.target,this._popover)?this.hideWithDelay(e):this.props.isOpen||this.showWithDelay(e)):t.indexOf("click")>-1&&E(e.target,this._targets)&&(this._hideTimeout&&this.clearHideTimeout(),this.props.isOpen?this.hideWithDelay(e):this.showWithDelay(e))},i.addEventOnTargets=function(e,t,i){this._targets.forEach((function(s){s.addEventListener(e,t,i)}))},i.removeEventOnTargets=function(e,t,i){this._targets.forEach((function(s){s.removeEventListener(e,t,i)}))},i.addTargetEvents=function(){if(this.props.trigger){var e=this.props.trigger.split(" ");-1===e.indexOf("manual")&&((e.indexOf("click")>-1||e.indexOf("legacy")>-1)&&document.addEventListener("click",this.handleDocumentClick,!0),this._targets&&this._targets.length&&(e.indexOf("hover")>-1&&(this.addEventOnTargets("mouseover",this.showWithDelay,!0),this.addEventOnTargets("mouseout",this.hideWithDelay,!0)),e.indexOf("focus")>-1&&(this.addEventOnTargets("focusin",this.show,!0),this.addEventOnTargets("focusout",this.hide,!0)),this.addEventOnTargets("keydown",this.onEscKeyDown,!0)))}},i.removeTargetEvents=function(){this._targets&&(this.removeEventOnTargets("mouseover",this.showWithDelay,!0),this.removeEventOnTargets("mouseout",this.hideWithDelay,!0),this.removeEventOnTargets("keydown",this.onEscKeyDown,!0),this.removeEventOnTargets("focusin",this.show,!0),this.removeEventOnTargets("focusout",this.hide,!0)),document.removeEventListener("click",this.handleDocumentClick,!0)},i.updateTarget=function(){var e=(0,m.EW)(this.props.target,!0);e!==this._targets&&(this.removeTargetEvents(),this._targets=e?Array.from(e):[],this.currentTargetElement=this.currentTargetElement||this._targets[0],this.addTargetEvents())},i.toggle=function(e){return this.props.disabled||!this._isMounted?e&&e.preventDefault():this.props.toggle(e)},i.render=function(){var e=this;this.props.isOpen&&this.updateTarget();var t=this.currentTargetElement||this._targets[0];if(!t)return null;var i=this.props,r=i.className,o=i.cssModule,a=i.innerClassName,c=i.isOpen,d=i.hideArrow,l=i.boundariesElement,p=i.placement,u=i.placementPrefix,h=i.arrowClassName,f=i.popperClassName,g=i.container,b=i.modifiers,j=i.positionFixed,v=i.offset,x=i.fade,y=i.flip,T=i.children,C=(0,m.cJ)(this.props,Object.keys(w)),N=(0,m.qO)(f,o),E=(0,m.qO)(a,o);return s.createElement(O,{className:r,target:t,isOpen:c,hideArrow:d,boundariesElement:l,placement:p,placementPrefix:u,arrowClassName:h,popperClassName:N,container:g,modifiers:b,positionFixed:j,offset:v,cssModule:o,fade:x,flip:y},(function(t){var i=t.scheduleUpdate;return s.createElement("div",(0,n.A)({},C,{ref:e.getRef,className:E,role:"tooltip",onMouseOver:e.onMouseOverTooltipContent,onMouseLeave:e.onMouseLeaveTooltipContent,onKeyDown:e.onEscKeyDown}),"function"===typeof T?T({scheduleUpdate:i}):T)}))},t}(s.Component);A.propTypes=w,A.defaultProps=C;const P=A;var D=function(e){var t=p()("tooltip","show",e.popperClassName),i=p()("tooltip-inner",e.innerClassName);return s.createElement(P,(0,n.A)({},e,{popperClassName:t,innerClassName:i}))};D.propTypes=w,D.defaultProps={placement:"top",autohide:!0,placementPrefix:"bs-tooltip",trigger:"hover focus"};const S=D;function k(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,s)}return i}var _=["defaultOpen"],M=function(e){function t(t){var i;return(i=e.call(this,t)||this).state={isOpen:t.defaultOpen||!1},i.toggle=i.toggle.bind((0,o.A)(i)),i}(0,a.A)(t,e);var i=t.prototype;return i.toggle=function(){this.setState({isOpen:!this.state.isOpen})},i.render=function(){return s.createElement(S,(0,n.A)({isOpen:this.state.isOpen,toggle:this.toggle},(0,m.cJ)(this.props,_)))},t}(s.Component);M.propTypes=function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?k(Object(i),!0).forEach((function(t){(0,r.A)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):k(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}({defaultOpen:d().bool},S.propTypes);var L=i(4414);class W extends s.Component{constructor(e){super(e),this.copyFirstNumber=()=>{navigator.clipboard.writeText(this.state.firstNumber).then((()=>{this.setState({clicked:"Phone number copied to clipboard"})})).catch((e=>{this.setState({clicked:"Failed to copy phone number"}),console.error("Failed to copy first number: ",e)}))},this.copySecondNumber=()=>{navigator.clipboard.writeText(this.state.secondNumber).then((()=>{this.setState({clicked:"Phone number copied to clipboard"})})).catch((e=>{this.setState({clicked:"Failed to copy phone number"}),console.error("Failed to copy second number: ",e)}))},this.resetTooltip=()=>{this.setState({clicked:"Click to Copy Number"})},this.state={firstNumber:"0213803072",secondNumber:"0213500586",clicked:"Click to Copy Number"}}render(){return(0,L.jsxs)(L.Fragment,{children:[(0,L.jsx)("a",{href:"#",onClick:this.copyFirstNumber,id:"tooltipPhoneNumber",onMouseLeave:this.resetTooltip,children:"\xa0(021) 3803072"})," ","-"," ",(0,L.jsx)("a",{href:"#",onClick:this.copySecondNumber,id:"tooltipPhoneNumber",onMouseLeave:this.resetTooltip,children:"3500586"}),(0,L.jsx)(M,{delay:0,placement:"bottom",target:"tooltipPhoneNumber",children:this.state.clicked})]})}}const H=function(){let e=(0,s.createRef)();return(0,s.useEffect)((()=>{if(window.innerWidth>991){const t=()=>{if(e.current){let t=window.pageYOffset/3;e.current.style.transform="translate3d(0,"+t+"px,0)"}};return window.addEventListener("scroll",t),function(){window.removeEventListener("scroll",t)}}}),[]),(0,L.jsx)(L.Fragment,{children:(0,L.jsxs)("div",{className:"page-header clear-filter",id:"header-section",style:{height:"100vh"},children:[(0,L.jsx)("div",{className:"page-header-image home-header-image",ref:e}),(0,L.jsx)("div",{className:"text-center",children:(0,L.jsxs)("h4",{className:"category category-absolute",style:{backgroundColor:"rgba(0, 0, 0, 1)",zIndex:999,bottom:"10vh",top:"auto",fontWeight:"normal"},children:["Call Center",(0,L.jsx)(W,{}),". or Contact Us",(0,L.jsx)("a",{href:"#/contact-us",children:"\xa0Now"}),"."]})})]})})};var F=i(2074),U=i(273),R=i(349),q=i(3931);const z=function(){return(0,s.useEffect)((()=>(document.body.classList.add("index-page"),document.body.classList.add("sidebar-collapse"),document.documentElement.classList.remove("nav-open"),window.scrollTo(0,0),document.body.scrollTop=0,function(){document.body.classList.remove("index-page"),document.body.classList.remove("sidebar-collapse")}))),(0,L.jsx)("div",{className:"section section-about-us",id:"about-us-section",children:(0,L.jsx)(U.A,{children:(0,L.jsx)(R.A,{children:(0,L.jsxs)(q.A,{className:"ml-auto mr-auto text-center",md:"8",children:[(0,L.jsx)("h2",{className:"title",children:"Who We Are?"}),(0,L.jsx)("h5",{className:"description text-justify",children:"Alam Tehnik Semesta is a top customized compliance AHU manufacturer in Indonesia. Established in 1978 as a contractor and started manufacturing in 2008, now has been supplying more than 1000 units across the country."}),(0,L.jsx)("h5",{className:"description text-justify",children:"We supply clean room HVAC, which comply with HVAC regulation based on CPOB (Indonesia BPOM standard), ISO standard, ISPE Standard, PICS and even for Hazardous Facility or Non-Hazardous Facility based on WHO standard Appendix 3."}),(0,L.jsxs)(F.N_,{to:"/about-us",className:"d-flex align-items-center justify-content-center text-info text-bold",children:[(0,L.jsx)("h5",{className:"m-0",children:"Learn More "}),(0,L.jsx)("i",{className:"now-ui-icons arrows-1_minimal-right ml-1"})]})]})})})})};var I=i(8849),K=i(1239),B=(i(1195),i(200)),Q=i(9261),V=i(651),J=i(5490),$={tag:m.Wx,className:d().string,cssModule:d().object},G=function(e){var t=e.className,i=e.cssModule,r=e.tag,o=(0,u.A)(e,["className","cssModule","tag"]),a=(0,m.qO)(p()(t,"card-img-overlay"),i);return s.createElement(r,(0,n.A)({},o,{className:a}))};G.propTypes=$,G.defaultProps={tag:"div"};const Y=G;var Z=i(6631);const X={desktop:{breakpoint:{max:3e3,min:1200},items:3,partialVisibilityGutter:40},tablet:{breakpoint:{max:1200,min:464},items:2},mobile:{breakpoint:{max:464,min:0},items:1}},ee=s.forwardRef(((e,t)=>(0,L.jsx)(B.A,{...e,innerref:t}))),te=s.forwardRef(((e,t)=>(0,L.jsx)(Q.A,{...e,innerref:t})));const ie=function(){const[e,t]=(0,s.useState)(null),[r,n]=(0,s.useState)(null),[o,a]=(0,s.useState)(0),[c,d]=(0,s.useState)(0),l=(0,s.useRef)(null),p=(0,s.useRef)(null),u=()=>{n(null)};return(0,s.useEffect)((()=>{function e(){const e=window.innerWidth;t(e>=1200?"desktop":e>=464?"tablet":"mobile")}return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]),(0,s.useEffect)((()=>{l.current&&a(l.current.clientHeight)}),[r]),(0,s.useEffect)((()=>{l.current&&a(l.current.clientHeight)}),[]),(0,s.useEffect)((()=>{p.current&&d(p.current.clientHeight)}),[r]),(0,s.useEffect)((()=>{p.current&&d(p.current.clientHeight)}),[]),(0,L.jsx)(K.default,{swipeable:!0,draggable:!0,showDots:!0,responsive:X,ssr:!0,infinite:!0,autoPlay:!0,keyBoardControl:!0,transitionDuration:500,containerClass:"carousel-container",removeArrowOnDeviceType:["tablet","mobile"],deviceType:e,dotListClass:"custom-dot-list-style",itemClass:"carousel-item-padding-40-px ".concat("desktop"===e?"mx-2":""),centerMode:!1,partialVisible:!0,children:Z.Z.map(((e,t)=>{const s=r===t;return(0,L.jsx)(F.N_,{to:"/products/".concat(e.productId),children:(0,L.jsx)(V.A,{onMouseEnter:()=>(e=>{n(e)})(t),onMouseLeave:u,style:{overflow:"hidden"},children:(0,L.jsxs)(J.A,{children:[(0,L.jsx)(ee,{src:i(9241)("./".concat(e.imageUrl[0].url)),alt:e.productName,className:"preview-img",ref:p,style:{objectFit:"contain"}}),(0,L.jsxs)(Y,{className:"text-white overlay-product clear-filter "+(r===t?"slide-top":""),style:{backgroundColor:"rgba(0, 0, 0, 0.7)",maxHeight:s?c+"px":o+60+"px",top:s?"0":"auto"},"filter-color":"blue",children:[(0,L.jsx)(te,{className:"product-title ".concat(s?"normal-title":"truncated-title"),ref:l,children:e.productName}),s&&(0,L.jsxs)("div",{children:[e.generalSpecification&&e.generalSpecification.map(((e,t)=>(0,L.jsxs)("div",{children:[e.feature,": ",e.value]},t))),(0,L.jsx)("br",{})]})]})]})})},t)}))})};const se=function(){return(0,L.jsx)("div",{className:"section section-products pt-0",id:"products-section",children:(0,L.jsxs)(U.A,{fluid:!0,className:"p-5 d-inline",children:[(0,L.jsx)("h2",{className:"title text-center text-info",children:"Products"}),(0,L.jsx)(ie,{}),(0,L.jsx)("div",{className:"d-flex",children:(0,L.jsx)(F.N_,{to:"/products",className:"mx-auto",children:(0,L.jsxs)(I.A,{color:"info",children:["View All Products"," ",(0,L.jsx)("i",{className:"now-ui-icons arrows-1_minimal-right"})]})})})]})})};var re=i(4347);const ne={desktop:{breakpoint:{max:3e3,min:1200},items:2,slidesToSlide:1},tablet:{breakpoint:{max:1200,min:464},items:1,slidesToSlide:1},mobile:{breakpoint:{max:464,min:0},items:1,slidesToSlide:1}};const oe=function(){const[e,t]=(0,s.useState)(null);return(0,s.useEffect)((()=>{function e(){const e=window.innerWidth;t(e>=1200?"desktop":e>=464?"tablet":"mobile")}return e(),window.addEventListener("resize",e),()=>window.removeEventListener("resize",e)}),[]),(0,L.jsxs)(K.default,{swipeable:!0,draggable:!0,showDots:!0,responsive:ne,ssr:!0,infinite:!0,autoPlay:!0,keyBoardControl:!0,transitionDuration:500,containerClass:"carousel-container",removeArrowOnDeviceType:["tablet","mobile"],deviceType:e,dotListClass:"custom-dot-list-style",itemClass:"carousel-item-padding-40-px",children:[re.$.map(((e,t)=>{const i=t%2===0?"bg-info":"bg-light",s=t%2===0?"text-dark":"text-info",r=t%2===0?"text-white":"text-black";return(0,L.jsx)(F.N_,{to:"/services/".concat(e.serviceId),children:(0,L.jsxs)(V.A,{className:"px-md-5 ".concat(i),style:{overflow:"hidden",height:"300px"},children:[(0,L.jsx)(Q.A,{className:"h3 font-weight-bold px-5 pt-5 ".concat(s),children:e.serviceName}),(0,L.jsxs)("div",{children:[e.serviceSummary&&(0,L.jsx)("h5",{className:"px-5 text-justify-desktop ".concat(r),children:e.serviceSummary}),(0,L.jsx)("br",{})]})]})},t)})),(0,L.jsx)(F.N_,{to:"/services",children:(0,L.jsxs)(V.A,{className:"px-md-5 bg-light",style:{overflow:"hidden",height:"300px"},children:[(0,L.jsx)(Q.A,{className:"h3 font-weight-bold px-5 pt-5 text-info",children:"Learn More"}),(0,L.jsxs)("div",{children:[(0,L.jsx)("h5",{className:"px-5 text-black",children:"Interested to see more? Click here"}),(0,L.jsx)("br",{})]})]})})]})};const ae=function(){return(0,L.jsx)(L.Fragment,{children:(0,L.jsx)("div",{className:"section section-services pt-0",id:"services-section",children:(0,L.jsxs)(U.A,{fluid:!0,className:"p-5 d-inline",children:[(0,L.jsx)("h2",{className:"title text-center text-info",children:"Services"}),(0,L.jsx)(oe,{})]})})})};const ce=function(){return(0,s.useEffect)((()=>(document.body.classList.add("index-page"),document.body.classList.add("sidebar-collapse"),document.documentElement.classList.remove("nav-open"),window.scrollTo(0,0),document.body.scrollTop=0,function(){document.body.classList.remove("index-page"),document.body.classList.remove("sidebar-collapse")}))),(0,L.jsx)(L.Fragment,{children:(0,L.jsxs)("div",{className:"wrapper",children:[(0,L.jsx)(H,{}),(0,L.jsxs)("div",{className:"main",children:[(0,L.jsx)(z,{}),(0,L.jsx)(ae,{}),(0,L.jsx)(se,{})]})]})})}},9261:(e,t,i)=>{"use strict";i.d(t,{A:()=>h});var s=i(8168),r=i(8587),n=i(9950),o=i(1942),a=i.n(o),c=i(8738),d=i.n(c),l=i(4208),p={tag:l.Wx,className:a().string,cssModule:a().object},u=function(e){var t=e.className,i=e.cssModule,o=e.tag,a=(0,r.A)(e,["className","cssModule","tag"]),c=(0,l.qO)(d()(t,"card-title"),i);return n.createElement(o,(0,s.A)({},a,{className:c}))};u.propTypes=p,u.defaultProps={tag:"div"};const h=u},8367:(e,t,i)=>{"use strict";i.d(t,{A:()=>j});var s=i(8168),r=i(8587),n=i(4705),o=i(9950),a=i(1942),c=i.n(a),d=i(8738),l=i.n(d),p=i(788),u=i(4208);function h(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);t&&(s=s.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,s)}return i}function f(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?h(Object(i),!0).forEach((function(t){(0,n.A)(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):h(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}var m=f(f({},p.Transition.propTypes),{},{children:c().oneOfType([c().arrayOf(c().node),c().node]),tag:u.Wx,baseClass:c().string,baseClassActive:c().string,className:c().string,cssModule:c().object,innerRef:c().oneOfType([c().object,c().string,c().func])}),g=f(f({},p.Transition.defaultProps),{},{tag:"div",baseClass:"fade",baseClassActive:"show",timeout:u.Q6.Fade,appear:!0,enter:!0,exit:!0,in:!0});function b(e){var t=e.tag,i=e.baseClass,n=e.baseClassActive,a=e.className,c=e.cssModule,d=e.children,h=e.innerRef,f=(0,r.A)(e,["tag","baseClass","baseClassActive","className","cssModule","children","innerRef"]),m=(0,u.Up)(f,u.PS),g=(0,u.cJ)(f,u.PS);return o.createElement(p.Transition,m,(function(e){var r="entered"===e,p=(0,u.qO)(l()(a,i,r&&n),c);return o.createElement(t,(0,s.A)({className:p},g,{ref:h}),d)}))}b.propTypes=m,b.defaultProps=g;const j=b},9241:(e,t,i)=>{var s={"./Clean AC Casestte OLShop 01.jpg":8220,"./Clean AC Casestte OLShop 02.jpg":1019,"./Clean AC Casestte OLShop 03.jpg":862,"./OK-Unit.jpg":7380,"./Projects/Boerhinger Ingelheim.jfif":120,"./Projects/Fahrenheit.png":4218,"./Projects/Logo_PT_Sido_Muncul.jpeg":3238,"./Projects/Medion.jpg":8980,"./Projects/Menarini.jfif":2932,"./Projects/PT UltrA Sakti.jpg":2548,"./Projects/ezgif.com-gif-maker.jpg":8444,"./Projects/logo-great-giant-pineapple.jpg":3956,"./Projects/pfizer.png":9866,"./Projects/pharos.png":8047,"./Service/certification/Certification.jpg":6436,"./Service/certification/certification2.jpg":1412,"./Service/certification/certification3.jpg":9457,"./Service/construction/construction1.jpg":6319,"./Service/construction/construction2.jpg":5008,"./Service/construction/construction3.jpg":8461,"./Service/construction/construction4.jpg":5110,"./Service/designing/Designing.jpg":1208,"./Service/manufacture/Manufacturing 3.jpg":8274,"./Service/manufacture/Manufacturing 4.jpg":3505,"./Service/manufacture/manufacture1.jpg":827,"./Service/manufacture/manufacture2.jpg":8028,"./Service/training/training1.jpg":9509,"./Service/training/training2 (2).jpg":2605,"./Service/validation/validation1.jpg":4267,"./Service/validation/validation2.jpg":3644,"./background/air-handling-unit.jpg":2841,"./background/clean-air-conditioner.jpg":2873,"./background/cold-storage.jpg":4656,"./background/precision-humidifier.jpg":9943,"./background/refrigerant-humidifier.jpg":3204,"./dehumidifier.jpg":452,"./header1.jpg":8273,"./header2.jpg":502,"./header3.jpg":9027,"./header4.jpg":7376,"./pharmaceutical production.jpg":7569,"./product/Clean Air Condition.jpg":1337,"./product/Direct Expansion AHU/Direct Expansion  Chiller Air Handling Unit (AHU) Edit.jpg":9465,"./product/Direct Expansion AHU/Direct Expansion AHU (2) edit.jpg":5045,"./product/Direct Expansion AHU/Direct Expansion AHU 1 edit.jpg":2411,"./product/Laminar Air Flow edit.jpg":9967,"./product/Scrubber Dust Collector.jpg":8196,"./product/chiller/chiller1 edit.jpg":4991,"./product/chiller/chiller2 edit.jpg":9714,"./product/chiller/chiller3 edit.jpg":8169,"./product/dehumidifier/Dehumidifier 2 edit.jpg":512,"./product/dehumidifier/Dehumidifier 3 edit.jpg":5823,"./product/dehumidifier/Dehumidifier edit.jpg":2538,"./product/refrigration/refrigeration.png":4955,"./product/stability/Stability Test 5 edit.jpg":3831,"./product/stability/Stability Test 6 edit.jpg":6394,"./product/timber kiln.png":7204,"./products.jpg":2761,"./services.jpg":9865};function r(e){var t=n(e);return i(t)}function n(e){if(!i.o(s,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return s[e]}r.keys=function(){return Object.keys(s)},r.resolve=n,e.exports=r,r.id=9241},8220:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/Clean AC Casestte OLShop 01.057f1265382125e97ff6.jpg"},1019:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/Clean AC Casestte OLShop 02.81f3617168a1e1697250.jpg"},862:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/Clean AC Casestte OLShop 03.745b0c4db8eab39ad8fd.jpg"},7380:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/OK-Unit.d515bc0ac8350f7c5860.jpg"},6436:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/Certification.458f57a830e7ca227150.jpg"},1412:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/certification2.b26e9b48616fe653751d.jpg"},9457:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/certification3.9490755ce760c8aed1e1.jpg"},6319:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/construction1.43aa22e713a5c7cc4a5c.jpg"},5008:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/construction2.4068937cd2464a437d96.jpg"},8461:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/construction3.c18fe718dee69de8e248.jpg"},5110:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/construction4.a5a495b2d9ecfe436f89.jpg"},1208:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/Designing.208e152f756d9486cd5c.jpg"},8274:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/Manufacturing 3.a13a8c57e4383c5a67be.jpg"},3505:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/Manufacturing 4.13296e92d62d42ef3538.jpg"},827:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/manufacture1.c9bb70e3c2b1d424d938.jpg"},8028:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/manufacture2.0529a7765c08a8db880a.jpg"},9509:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/training1.f5d931a42a2347562cef.jpg"},2605:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/training2 (2).1c1428a1a604734b675d.jpg"},4267:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/validation1.7971fb22dc02bd45a5d1.jpg"},3644:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/validation2.db72a47abfab52a18f7d.jpg"},2841:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/air-handling-unit.1f059d5b1764285db98a.jpg"},2873:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/clean-air-conditioner.f8690f19c13ed73bb4f4.jpg"},4656:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/cold-storage.796380522381f8fdf52a.jpg"},9943:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/precision-humidifier.4fb557aa3b488a88cf31.jpg"},3204:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/refrigerant-humidifier.4e0a72099be54d0b110a.jpg"},452:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/dehumidifier.8398b22628102543fa54.jpg"},8273:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/header1.52036424d150811d8fe4.jpg"},502:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/header2.dcc5953f8319298015de.jpg"},9027:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/header3.45a68040f725115f1ebd.jpg"},7376:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/header4.d765462f7e2ca3faf294.jpg"},7569:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/pharmaceutical production.22ce1708a4b10c64c6c1.jpg"},1337:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/Clean Air Condition.e2dad695d2b2d38d2723.jpg"},9465:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/Direct Expansion  Chiller Air Handling Unit (AHU) Edit.348bab7095fd929b7e68.jpg"},5045:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/Direct Expansion AHU (2) edit.3d3656b965496708ad69.jpg"},2411:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/Direct Expansion AHU 1 edit.db5c566a0aa988f70583.jpg"},9967:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/Laminar Air Flow edit.637d94528c9059076795.jpg"},8196:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/Scrubber Dust Collector.191dcd5192c22f9e5598.jpg"},4991:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/chiller1 edit.d883cf7b30a6ecf286a1.jpg"},9714:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/chiller2 edit.e03b4b4a03881d60e673.jpg"},8169:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/chiller3 edit.4a333152ed724d220be6.jpg"},512:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/Dehumidifier 2 edit.191c92657f672afbeee9.jpg"},5823:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/Dehumidifier 3 edit.269321250522ec889236.jpg"},2538:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/Dehumidifier edit.5708474b76ae00996c35.jpg"},4955:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/refrigeration.47ce4f3cf801bcafb1a0.png"},3831:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/Stability Test 5 edit.8f5d544de442162c1ffc.jpg"},6394:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/Stability Test 6 edit.bcc66715429293ea0229.jpg"},7204:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/timber kiln.15df67808d65f7276597.png"},2761:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/products.80bdc7329437eeab3a7d.jpg"},9865:(e,t,i)=>{"use strict";e.exports=i.p+"static/media/services.24be86e9287686bad707.jpg"}}]);