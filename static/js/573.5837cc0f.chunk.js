"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[573],{8184:function(n,e,t){t.d(e,{Z:function(){return g}});var i=t(4165),a=t(5861),r=t(1243),o=t(9113);r.Z.defaults.baseURL=o.F;var c=function(){var n=(0,a.Z)((0,i.Z)().mark((function n(){var e;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.Z.get("api/recipes/category-list");case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),d=c;r.Z.defaults.baseURL=o.F;var s=function(){var n=(0,a.Z)((0,i.Z)().mark((function n(e){var t,a,o,c=arguments;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return t=c.length>1&&void 0!==c[1]?c[1]:1,a=c.length>2&&void 0!==c[2]?c[2]:8,n.next=4,r.Z.get("api/recipes/category/".concat(e,"?page=").concat(t,"&limit=").concat(a));case 4:return o=n.sent,n.abrupt("return",o.data);case 6:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),l=s;r.Z.defaults.baseURL=o.F;var p=function(){var n=(0,a.Z)((0,i.Z)().mark((function n(e){var t;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.Z.get("api/recipes/".concat(e));case 2:return t=n.sent,n.abrupt("return",t.data);case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),u=p;r.Z.defaults.baseURL=o.F;var x=function(){var n=(0,a.Z)((0,i.Z)().mark((function n(){var e;return(0,i.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,r.Z.get("api/recipes/main-page");case 2:return e=n.sent,n.abrupt("return",e.data);case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),g={fetchCategories:d,fetchRecipies:l,getRecipeById:u,fetchRecipesMainPage:x}},1978:function(n,e,t){t.d(e,{Z:function(){return s}});var i,a=t(168),r=t(6487),o=t(4374),c=r.zo.h1(i||(i=(0,a.Z)(["\n\tcolor: #001833;\n    font-size: 28px;\n    font-weight: 600;\n\tline-height: 1;\n\tletter-spacing: -0.56px;\n\n    @media screen and (min-width: ",") {\n        font-size: 32px;\n\t\tletter-spacing: -0.64px;\n    }\n\n    @media screen and (min-width: ",") {\n        font-size: 44px;\n\t\tletter-spacing: -0.88px;\n    }\n"])),o.Mq,o.gv),d=t(184),s=function(n){var e=n.title,t=n.color;return(0,d.jsx)(c,{style:{color:t},children:e})}},1454:function(n,e,t){t.d(e,{Z:function(){return R}});var i=t(4942),a=t(3366),r=t(7462),o=t(2791),c=t(8182),d=t(5735),s=t(4419),l=t(2065),p=t(7630),u=t(1046),x=t(527),g=t(4036),h=t(5878),m=t(1217);function f(n){return(0,m.Z)("MuiButton",n)}var v=(0,h.Z)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);var b=o.createContext({}),Z=t(184),w=["children","color","component","className","disabled","disableElevation","disableFocusRipple","endIcon","focusVisibleClassName","fullWidth","size","startIcon","type","variant"],y=function(n){return(0,r.Z)({},"small"===n.size&&{"& > *:nth-of-type(1)":{fontSize:18}},"medium"===n.size&&{"& > *:nth-of-type(1)":{fontSize:20}},"large"===n.size&&{"& > *:nth-of-type(1)":{fontSize:22}})},S=(0,p.ZP)(x.Z,{shouldForwardProp:function(n){return(0,p.FO)(n)||"classes"===n},name:"MuiButton",slot:"Root",overridesResolver:function(n,e){var t=n.ownerState;return[e.root,e[t.variant],e["".concat(t.variant).concat((0,g.Z)(t.color))],e["size".concat((0,g.Z)(t.size))],e["".concat(t.variant,"Size").concat((0,g.Z)(t.size))],"inherit"===t.color&&e.colorInherit,t.disableElevation&&e.disableElevation,t.fullWidth&&e.fullWidth]}})((function(n){var e,t,a,o=n.theme,c=n.ownerState,d="light"===o.palette.mode?o.palette.grey[300]:o.palette.grey[800],s="light"===o.palette.mode?o.palette.grey.A100:o.palette.grey[700];return(0,r.Z)({},o.typography.button,(e={minWidth:64,padding:"6px 16px",borderRadius:(o.vars||o).shape.borderRadius,transition:o.transitions.create(["background-color","box-shadow","border-color","color"],{duration:o.transitions.duration.short}),"&:hover":(0,r.Z)({textDecoration:"none",backgroundColor:o.vars?"rgba(".concat(o.vars.palette.text.primaryChannel," / ").concat(o.vars.palette.action.hoverOpacity,")"):(0,l.Fq)(o.palette.text.primary,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"text"===c.variant&&"inherit"!==c.color&&{backgroundColor:o.vars?"rgba(".concat(o.vars.palette[c.color].mainChannel," / ").concat(o.vars.palette.action.hoverOpacity,")"):(0,l.Fq)(o.palette[c.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"outlined"===c.variant&&"inherit"!==c.color&&{border:"1px solid ".concat((o.vars||o).palette[c.color].main),backgroundColor:o.vars?"rgba(".concat(o.vars.palette[c.color].mainChannel," / ").concat(o.vars.palette.action.hoverOpacity,")"):(0,l.Fq)(o.palette[c.color].main,o.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:"transparent"}},"contained"===c.variant&&{backgroundColor:o.vars?o.vars.palette.Button.inheritContainedHoverBg:s,boxShadow:(o.vars||o).shadows[4],"@media (hover: none)":{boxShadow:(o.vars||o).shadows[2],backgroundColor:(o.vars||o).palette.grey[300]}},"contained"===c.variant&&"inherit"!==c.color&&{backgroundColor:(o.vars||o).palette[c.color].dark,"@media (hover: none)":{backgroundColor:(o.vars||o).palette[c.color].main}}),"&:active":(0,r.Z)({},"contained"===c.variant&&{boxShadow:(o.vars||o).shadows[8]})},(0,i.Z)(e,"&.".concat(v.focusVisible),(0,r.Z)({},"contained"===c.variant&&{boxShadow:(o.vars||o).shadows[6]})),(0,i.Z)(e,"&.".concat(v.disabled),(0,r.Z)({color:(o.vars||o).palette.action.disabled},"outlined"===c.variant&&{border:"1px solid ".concat((o.vars||o).palette.action.disabledBackground)},"contained"===c.variant&&{color:(o.vars||o).palette.action.disabled,boxShadow:(o.vars||o).shadows[0],backgroundColor:(o.vars||o).palette.action.disabledBackground})),e),"text"===c.variant&&{padding:"6px 8px"},"text"===c.variant&&"inherit"!==c.color&&{color:(o.vars||o).palette[c.color].main},"outlined"===c.variant&&{padding:"5px 15px",border:"1px solid currentColor"},"outlined"===c.variant&&"inherit"!==c.color&&{color:(o.vars||o).palette[c.color].main,border:o.vars?"1px solid rgba(".concat(o.vars.palette[c.color].mainChannel," / 0.5)"):"1px solid ".concat((0,l.Fq)(o.palette[c.color].main,.5))},"contained"===c.variant&&{color:o.vars?o.vars.palette.text.primary:null==(t=(a=o.palette).getContrastText)?void 0:t.call(a,o.palette.grey[300]),backgroundColor:o.vars?o.vars.palette.Button.inheritContainedBg:d,boxShadow:(o.vars||o).shadows[2]},"contained"===c.variant&&"inherit"!==c.color&&{color:(o.vars||o).palette[c.color].contrastText,backgroundColor:(o.vars||o).palette[c.color].main},"inherit"===c.color&&{color:"inherit",borderColor:"currentColor"},"small"===c.size&&"text"===c.variant&&{padding:"4px 5px",fontSize:o.typography.pxToRem(13)},"large"===c.size&&"text"===c.variant&&{padding:"8px 11px",fontSize:o.typography.pxToRem(15)},"small"===c.size&&"outlined"===c.variant&&{padding:"3px 9px",fontSize:o.typography.pxToRem(13)},"large"===c.size&&"outlined"===c.variant&&{padding:"7px 21px",fontSize:o.typography.pxToRem(15)},"small"===c.size&&"contained"===c.variant&&{padding:"4px 10px",fontSize:o.typography.pxToRem(13)},"large"===c.size&&"contained"===c.variant&&{padding:"8px 22px",fontSize:o.typography.pxToRem(15)},c.fullWidth&&{width:"100%"})}),(function(n){var e;return n.ownerState.disableElevation&&(e={boxShadow:"none","&:hover":{boxShadow:"none"}},(0,i.Z)(e,"&.".concat(v.focusVisible),{boxShadow:"none"}),(0,i.Z)(e,"&:active",{boxShadow:"none"}),(0,i.Z)(e,"&.".concat(v.disabled),{boxShadow:"none"}),e)})),z=(0,p.ZP)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:function(n,e){var t=n.ownerState;return[e.startIcon,e["iconSize".concat((0,g.Z)(t.size))]]}})((function(n){var e=n.ownerState;return(0,r.Z)({display:"inherit",marginRight:8,marginLeft:-4},"small"===e.size&&{marginLeft:-2},y(e))})),k=(0,p.ZP)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:function(n,e){var t=n.ownerState;return[e.endIcon,e["iconSize".concat((0,g.Z)(t.size))]]}})((function(n){var e=n.ownerState;return(0,r.Z)({display:"inherit",marginRight:-4,marginLeft:8},"small"===e.size&&{marginRight:-2},y(e))})),j=o.forwardRef((function(n,e){var t=o.useContext(b),i=(0,d.Z)(t,n),l=(0,u.Z)({props:i,name:"MuiButton"}),p=l.children,x=l.color,h=void 0===x?"primary":x,m=l.component,v=void 0===m?"button":m,y=l.className,j=l.disabled,C=void 0!==j&&j,R=l.disableElevation,I=void 0!==R&&R,M=l.disableFocusRipple,P=void 0!==M&&M,W=l.endIcon,q=l.focusVisibleClassName,F=l.fullWidth,E=void 0!==F&&F,B=l.size,L=void 0===B?"medium":B,N=l.startIcon,H=l.type,T=l.variant,O=void 0===T?"text":T,V=(0,a.Z)(l,w),U=(0,r.Z)({},l,{color:h,component:v,disabled:C,disableElevation:I,disableFocusRipple:P,fullWidth:E,size:L,type:H,variant:O}),_=function(n){var e=n.color,t=n.disableElevation,i=n.fullWidth,a=n.size,o=n.variant,c=n.classes,d={root:["root",o,"".concat(o).concat((0,g.Z)(e)),"size".concat((0,g.Z)(a)),"".concat(o,"Size").concat((0,g.Z)(a)),"inherit"===e&&"colorInherit",t&&"disableElevation",i&&"fullWidth"],label:["label"],startIcon:["startIcon","iconSize".concat((0,g.Z)(a))],endIcon:["endIcon","iconSize".concat((0,g.Z)(a))]},l=(0,s.Z)(d,f,c);return(0,r.Z)({},c,l)}(U),A=N&&(0,Z.jsx)(z,{className:_.startIcon,ownerState:U,children:N}),D=W&&(0,Z.jsx)(k,{className:_.endIcon,ownerState:U,children:W});return(0,Z.jsxs)(S,(0,r.Z)({ownerState:U,className:(0,c.Z)(t.className,_.root,y),component:v,disabled:C,focusRipple:!P,focusVisibleClassName:(0,c.Z)(_.focusVisible,q),ref:e,type:H},V,{classes:_,children:[A,p,D]}))})),C=t(7770),R=function(n){var e=n.children,t=n.bgColor,i=n.paddingHxs,a=n.paddingHmd,r=n.paddingHlg,o=n.paddingWxs,c=n.paddingWmd,d=n.paddingWlg,s=t,l="inherit",p="none";return"transparent"===t?(l=C.DH,p="1px solid"):"dark"===t?(t=C._4,s=C.DH):(t=t||C.DH,s=C._4),(0,Z.jsx)(j,{sx:{color:"inherit",backgroundColor:t,transform:"skew(30deg)",border:p,borderRadius:{xs:"".concat(1.4*i,"px"),md:"".concat(1.4*a,"px"),lg:"".concat(1.4*r,"px")},padding:{xs:"".concat(i,"px ").concat(o,"px"),md:"".concat(a,"px ").concat(c,"px"),lg:"".concat(r,"px ").concat(d,"px")},"&:hover":{color:l,backgroundColor:s}},children:(0,Z.jsx)("span",{className:"text",style:{transform:"skew(-30deg)"},children:e})})}},6843:function(n,e,t){t.r(e),t.d(e,{default:function(){return Q}});var i,a,r,o=t(4165),c=t(5861),d=t(9439),s=t(2791),l=t(7689),p=t(8184),u=t(168),x=t(6487),g=t.p+"static/media/heroMob.a3c32aa11ce76775737e.jpg",h=t.p+"static/media/heroMob@2x.f9d2e02d90e1a8601765.jpg",m=t.p+"static/media/heroTab.57e54600e065829c7da1.jpg",f=t.p+"static/media/heroTab@2x.3acf8c18f977f87b4a48.jpg",v=t(4374),b=x.ZP.section(i||(i=(0,u.Z)(["\n  width: 100vw;\n  height: 455px;\n  background-image: url('","');\n  background-position: center;\n  background-repeat: no-repeat;\n  background-size: cover;\n  display: flex;\n  flex-direction: column;\n  justify-content: center;\n  align-items: center;\n\n  @media (min-device-pixel-ratio: 2),\n    (min-resolution: 192dpi),\n    (min-resolution: 2dppx) {\n    background-image: url('","');\n  }\n\n  @media screen and (min-width: ",") {\n    background-image: url('","');\n    height: 495px;\n\n    @media (min-device-pixel-ratio: 2),\n      (min-resolution: 192dpi),\n      (min-resolution: 2dppx) {\n      background-image: url('","');\n    }\n  }\n\n  @media screen and (min-width: ",") {\n    background-image: url('","');\n    height: 493px;\n\n    @media (min-device-pixel-ratio: 2),\n      (min-resolution: 192dpi),\n      (min-resolution: 2dppx) {\n      background-image: url('","');\n    }\n  }\n"])),g,h,v.ai,m,f,v.Mq,m,f),Z=x.ZP.p(a||(a=(0,u.Z)(["\n  color: #22252a;\n  font-family: Poppins;\n  font-size: 12px;\n  font-weight: 400;\n  line-height: 1.3;\n  letter-spacing: -0.24px;\n  margin: 24px 0 24px 0;\n  max-width: 299px;\n  text-align: center;\n\n  @media screen and (min-width: ",") {\n    font-size: 18px;\n    letter-spacing: -0.36px;\n    max-width: 509px;\n  }\n\n  @media screen and (min-width: ",") {\n    max-width: 656px;\n    margin-bottom: 30px;\n  }\n"])),v.ai,v.Mq),w=x.ZP.div(r||(r=(0,u.Z)(["\n  display: flex;\n  justify-content: center;\n  align-items: center;\n  gap: 4px;\n  margin: 42px 0 0 0;\n\n  @media screen and (min-width: ",") {\n    gap: 8px;\n    margin-top: 60px;\n  }\n\n  @media screen and (min-width: ",") {\n    margin-top: 48px;\n  }\n\n  p {\n    font-family: Poppins;\n    font-size: 10px;\n    font-weight: 500;\n    line-height: 1.4;\n    letter-spacing: -0.24px;\n    color: #23262a;\n\n    @media screen and (min-width: ",") {\n      font-size: 14px;\n      line-height: 1.4;\n    }\n  }\n"])),v.ai,v.Mq,v.ai),y=t(1454),S=t(1978),z=t(184),k=function(n){var e=n.title,i=n.descr,a=n.time,r=n.isFavorite,o=Math.floor(+a/60),c=+a-60*o;return console.log(e),(0,z.jsxs)(b,{children:[(0,z.jsx)(S.Z,{title:e,color:"#8baa36"}),(0,z.jsx)(Z,{children:i}),(0,z.jsx)(y.Z,{bgColor:"transparent",paddingHxs:12,paddingHmd:22,paddingHlg:22,paddingWxs:24,paddingWmd:44,paddingWlg:44,style:{border:"1px solid #8baa36",color:"#23262a"},children:r?"Remove from favorite":"Add to favorite recipes"}),(0,z.jsxs)(w,{children:[(0,z.jsx)("img",{src:t(4191).Z,alt:"clock"}),(0,z.jsx)("p",{children:0!==o?"".concat(o," h ").concat(c," min"):"".concat(c)})]})]})},j=t(7770);var C=t.p+"static/media/checked.5a8f78fd687661d5ad12116ae4980927.svg";var R,I,M,P,W,q,F,E,B,L,N=t.p+"static/media/unchecked.58e566e28794ee7de21be8977f32d095.svg",H=x.ZP.section(R||(R=(0,u.Z)(["\n  padding: 50px 100px;\n"]))),T=x.ZP.div(I||(I=(0,u.Z)(["\n  background-color: #8baa36;\n  border-radius: 8px;\n  display: flex;\n  justify-content: space-between;\n  align-items: center;\n  margin: 0;\n  height: 42px;\n  padding: 12px 14px;\n  position: relative;\n\n  @media screen and (min-width: ",") {\n    height: 60px;\n    padding: 21px 32px;\n  }\n\n  @media screen and (min-width: ",") {\n    padding: 21px 40px;\n  }\n\n  p {\n    font-family: Poppins;\n    color: #fafafa;\n    font-size: 10px;\n    font-weight: 600;\n    letter-spacing: 0.3px;\n\n    @media screen and (min-width: ",") {\n      font-size: 18px;\n      letter-spacing: 0.54px;\n    }\n  }\n"])),v.ai,v.Mq,v.ai),O=x.ZP.p(M||(M=(0,u.Z)(["\n  position: absolute;\n  right: 25%;\n\n  @media screen and (min-width: ",") {\n    right: 20%;\n  }\n"])),v.Mq),V=x.ZP.ul(P||(P=(0,u.Z)(["\n  margin: 24px 0 0 0;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  gap: 16px;\n\n  @media screen and (min-width: ",") {\n    margin-top: 32px;\n    gap: 24px;\n  }\n\n  @media screen and (min-width: ",") {\n    margin-top: 50px;\n  }\n"])),v.ai,v.Mq),U=x.ZP.li(W||(W=(0,u.Z)(["\n  background-color: #ebf3d4;\n  padding: 0 10px;\n  border-radius: 8px;\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n\n  @media screen and (min-width: ",") {\n    padding: 0 24px;\n  }\n\n  @media screen and (min-width: ",") {\n    padding: 0 32px;\n  }\n"])),v.ai,v.Mq),_=x.ZP.div(q||(q=(0,u.Z)(["\n  margin: 0;\n  display: flex;\n  gap: 8px;\n  justify-content: space-between;\n  align-items: center;\n\n  img {\n    padding: 4px;\n  }\n\n  p {\n    color: ",";\n    font-family: Poppins;\n    font-size: 12px;\n    font-weight: 500;\n    line-height: 1.2;\n    letter-spacing: -0.24px;\n  }\n\n  @media screen and (min-width: ",") {\n    gap: 24px;\n\n    img {\n      padding: 17px 16px;\n    }\n\n    p {\n      font-family: 24px;\n      line-height: 1;\n    }\n  }\n\n  @media screen and (min-width: ",") {\n    gap: 40px;\n\n    img {\n      padding: 26px;\n    }\n  }\n"])),j.cL,v.ai,v.Mq),A=x.ZP.div(F||(F=(0,u.Z)(["\n  display: flex;\n  justify-content: flex-end;\n  align-items: center;\n  gap: 28px;\n\n  div:first-child {\n    background-color: ",";\n    border-radius: 4px;\n    padding: 4px;\n\n    p {\n      color: ",";\n      text-align: right;\n      font-family: Poppins;\n      font-size: 10px;\n      font-weight: 600;\n    }\n  }\n\n  @media screen and (min-width: ",") {\n    gap: 78px;\n\n    div:first-child {\n      padding: 4px 8px;\n\n      p {\n        font-size: 18px;\n      }\n    }\n  }\n\n  @media screen and (min-width: ",") {\n    gap: 150px;\n  }\n"])),j.Mr,j.E0,v.ai,v.Mq),D=(x.ZP.div(E||(E=(0,u.Z)(["\n  width: 18px;\n  height: 18px;\n  background-image: url('","');\n  border-radius: 4px;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n\n  @media screen and (min-width: ",") {\n    width: 35px;\n    height: 35px;\n  }\n"])),C,v.ai),x.ZP.div(B||(B=(0,u.Z)(["\n  width: 18px;\n  height: 18px;\n  background-image: url('","');\n  border-radius: 4px;\n  background-repeat: no-repeat;\n  background-position: center;\n  background-size: cover;\n\n  @media screen and (min-width: ",") {\n    width: 35px;\n    height: 35px;\n  }\n"])),N,v.ai)),G=function(n){var e=n.ingredients;return(0,z.jsxs)(H,{children:[(0,z.jsxs)(T,{children:[(0,z.jsx)("p",{children:"Ingredients"}),(0,z.jsx)(O,{children:"Number"}),(0,z.jsx)("p",{children:"Add to list"})]}),(0,z.jsx)(V,{children:e.map((function(n){return(0,z.jsxs)(U,{children:[(0,z.jsxs)(_,{children:[(0,z.jsx)("img",{alt:"ingredient"}),(0,z.jsx)("p",{})]}),(0,z.jsxs)(A,{children:[(0,z.jsx)("div",{children:(0,z.jsx)("p",{children:n.measure})}),(0,z.jsx)(D,{})]})]},n.id)}))})]})},J=x.ZP.section(L||(L=(0,u.Z)(["\n  padding: 18px 21px;\n  display: flex;\n  flex-direction: column;\n  justify-content: flex-start;\n  align-items: left;\n\n  @media screen and (min-width: ",") {\n    flex-direction: row;\n  }\n\n  h2 {\n    color: #3e4462;\n    font-family: Poppins;\n    font-size: 24px;\n    font-weight: 600;\n    line-height: 1;\n    letter-spacing: -0.48px;\n\n    @media screen and (min-width: ",") {\n      letter-spacing: -0.24px;\n    }\n\n    ul {\n      margin: 31.5px 0 0 0;\n\n      @media screen and (min-width: ",") {\n        margin: 33.5px 0 0 0;\n      }\n    }\n\n    img {\n      margin: 40px 0 0 0;\n      border-radius: 8px;\n      width: 100%;\n      height: 250px;\n\n      @media screen and (min-width: ",") {\n        margin-top: 53px;\n        max-width: 433px;\n        height: 332px;\n      }\n\n      @media screen and (min-width: ",") {\n        margin: 0;\n      }\n    }\n  }\n"])),v.Mq,v.ai,v.ai,v.ai,v.Mq),K=function(n){var e=n.instructions,t=n.photo,i=e.split("\r\n");return console.log(i),console.log(i),(0,z.jsxs)(J,{children:[(0,z.jsxs)("div",{children:[(0,z.jsx)("h2",{children:"Recipe Preparation"}),(0,z.jsx)("ul",{children:i.map((function(n,e){return(0,z.jsxs)("li",{children:[(0,z.jsx)("span",{children:e+1}),(0,z.jsx)("p",{children:n})]},function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21;return crypto.getRandomValues(new Uint8Array(n)).reduce((function(n,e){return n+((e&=63)<36?e.toString(36):e<62?(e-26).toString(36).toUpperCase():e>62?"-":"_")}),"")}())}))})]}),(0,z.jsx)("div",{children:(0,z.jsx)("img",{src:t,alt:"dish"})})]})},Q=function(){var n=(0,l.UO)().recipeId,e=(0,s.useState)([]),t=(0,d.Z)(e,2),i=t[0],a=t[1],r=(0,s.useState)(""),u=(0,d.Z)(r,2),x=u[0],g=u[1],h=(0,s.useState)(""),m=(0,d.Z)(h,2),f=m[0],v=m[1],b=(0,s.useState)(""),Z=(0,d.Z)(b,2),w=Z[0],y=Z[1],S=(0,s.useState)(""),j=(0,d.Z)(S,2),C=j[0],R=j[1],I=(0,s.useState)(!1),M=(0,d.Z)(I,2),P=M[0],W=M[1],q=(0,s.useState)(""),F=(0,d.Z)(q,2),E=F[0],B=F[1];return(0,s.useEffect)((function(){var e=function(){var n=(0,c.Z)((0,o.Z)().mark((function n(e){var t;return(0,o.Z)().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,p.Z.getRecipeById(e);case 3:t=n.sent,console.log(t),v(t.title),y(t.description),R(t.time),W(!!t.favorite),a(t.ingredients),g(t.instructions),B(t.thumb),n.next=17;break;case 14:n.prev=14,n.t0=n.catch(0),console.log(n.t0,e);case 17:case"end":return n.stop()}}),n,null,[[0,14]])})));return function(e){return n.apply(this,arguments)}}();e(n)}),[n]),(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(k,{title:f,descr:w,time:C,isFavorite:P}),(0,z.jsx)(G,{ingredients:i}),(0,z.jsx)(K,{instructions:x,photo:E})]})}},4191:function(n,e,t){t(2791);e.Z=t.p+"static/media/clock.5146b559adfd629e728ba916dba25f35.svg"}}]);
//# sourceMappingURL=573.5837cc0f.chunk.js.map