(()=>{var e={};e.id=520,e.ids=[520],e.modules={846:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},9121:e=>{"use strict";e.exports=require("next/dist/server/app-render/action-async-storage.external.js")},3295:e=>{"use strict";e.exports=require("next/dist/server/app-render/after-task-async-storage.external.js")},9294:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-async-storage.external.js")},3033:e=>{"use strict";e.exports=require("next/dist/server/app-render/work-unit-async-storage.external.js")},2412:e=>{"use strict";e.exports=require("assert")},4735:e=>{"use strict";e.exports=require("events")},9021:e=>{"use strict";e.exports=require("fs")},1630:e=>{"use strict";e.exports=require("http")},5591:e=>{"use strict";e.exports=require("https")},1820:e=>{"use strict";e.exports=require("os")},3873:e=>{"use strict";e.exports=require("path")},7910:e=>{"use strict";e.exports=require("stream")},3997:e=>{"use strict";e.exports=require("tty")},9551:e=>{"use strict";e.exports=require("url")},8354:e=>{"use strict";e.exports=require("util")},4075:e=>{"use strict";e.exports=require("zlib")},8355:(e,t,r)=>{"use strict";r.r(t),r.d(t,{GlobalError:()=>i.a,__next_app__:()=>u,pages:()=>d,routeModule:()=>p,tree:()=>c});var o=r(260),s=r(8203),n=r(5155),i=r.n(n),a=r(7292),l={};for(let e in a)0>["default","tree","pages","GlobalError","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);r.d(t,l);let c=["",{children:["login",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(r.bind(r,3751)),"C:\\Users\\Iryanto\\Documents\\Projects\\bcaptest\\chatbot-frontend\\src\\app\\login\\page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(r.bind(r,1354)),"C:\\Users\\Iryanto\\Documents\\Projects\\bcaptest\\chatbot-frontend\\src\\app\\layout.tsx"],"not-found":[()=>Promise.resolve().then(r.t.bind(r,9937,23)),"next/dist/client/components/not-found-error"],forbidden:[()=>Promise.resolve().then(r.t.bind(r,9116,23)),"next/dist/client/components/forbidden-error"],unauthorized:[()=>Promise.resolve().then(r.t.bind(r,1485,23)),"next/dist/client/components/unauthorized-error"],metadata:{icon:[async e=>(await Promise.resolve().then(r.bind(r,440))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],d=["C:\\Users\\Iryanto\\Documents\\Projects\\bcaptest\\chatbot-frontend\\src\\app\\login\\page.tsx"],u={require:r,loadChunk:()=>Promise.resolve()},p=new o.AppPageRouteModule({definition:{kind:s.RouteKind.APP_PAGE,page:"/login/page",pathname:"/login",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:c}})},6362:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,3219,23)),Promise.resolve().then(r.t.bind(r,4863,23)),Promise.resolve().then(r.t.bind(r,5155,23)),Promise.resolve().then(r.t.bind(r,802,23)),Promise.resolve().then(r.t.bind(r,9350,23)),Promise.resolve().then(r.t.bind(r,8530,23)),Promise.resolve().then(r.t.bind(r,8921,23))},6530:(e,t,r)=>{Promise.resolve().then(r.t.bind(r,6959,23)),Promise.resolve().then(r.t.bind(r,3875,23)),Promise.resolve().then(r.t.bind(r,8903,23)),Promise.resolve().then(r.t.bind(r,7174,23)),Promise.resolve().then(r.t.bind(r,4178,23)),Promise.resolve().then(r.t.bind(r,7190,23)),Promise.resolve().then(r.t.bind(r,1365,23))},6778:()=>{},6946:()=>{},4543:(e,t,r)=>{Promise.resolve().then(r.bind(r,5983))},2791:(e,t,r)=>{Promise.resolve().then(r.bind(r,8178))},8178:(e,t,r)=>{"use strict";r.d(t,{default:()=>W});var o=r(5512),s=r(8009),n=r(9334),i=r(5668),a=r(1323),l=r(4477),c=r(5669),d=r(4361),u=r(2281),p=r(3881),m=r(8613),h=r(9107),x=r(2447),b=r(4587),v=r(9188),g=r(4180),f=r(6171),y=r(8029);let A=(0,g.A)(),P=(0,x.A)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root});function j(e){return(0,b.A)({props:e,name:"MuiStack",defaultTheme:A})}let k=e=>({row:"Left","row-reverse":"Right",column:"Top","column-reverse":"Bottom"})[e],w=({ownerState:e,theme:t})=>{let r={display:"flex",flexDirection:"column",...(0,f.NI)({theme:t},(0,f.kW)({values:e.direction,breakpoints:t.breakpoints.values}),e=>({flexDirection:e}))};if(e.spacing){let o=(0,y.LX)(t),s=Object.keys(t.breakpoints.values).reduce((t,r)=>(("object"==typeof e.spacing&&null!=e.spacing[r]||"object"==typeof e.direction&&null!=e.direction[r])&&(t[r]=!0),t),{}),n=(0,f.kW)({values:e.direction,base:s}),i=(0,f.kW)({values:e.spacing,base:s});"object"==typeof n&&Object.keys(n).forEach((e,t,r)=>{if(!n[e]){let o=t>0?n[r[t-1]]:"column";n[e]=o}}),r=(0,p.A)(r,(0,f.NI)({theme:t},i,(t,r)=>e.useFlexGap?{gap:(0,y._W)(o,t)}:{"& > :not(style):not(style)":{margin:0},"& > :not(style) ~ :not(style)":{[`margin${k(r?n[r]:e.direction)}`]:(0,y._W)(o,t)}}))}return(0,f.iZ)(t.breakpoints,r)};var C=r(5884),q=r(6935);let S=function(e={}){let{createStyledComponent:t=P,useThemeProps:r=j,componentName:n="MuiStack"}=e,i=()=>(0,h.A)({root:["root"]},e=>(0,m.Ay)(n,e),{}),a=t(w);return s.forwardRef(function(e,t){let n=r(e),{component:l="div",direction:c="column",spacing:d=0,divider:p,children:m,className:h,useFlexGap:x=!1,...b}=(0,v.A)(n),g=i();return(0,o.jsx)(a,{as:l,ownerState:{direction:c,spacing:d,useFlexGap:x},ref:t,className:(0,u.A)(g.root,h),...b,children:p?function(e,t){let r=s.Children.toArray(e).filter(Boolean);return r.reduce((e,o,n)=>(e.push(o),n<r.length-1&&e.push(s.cloneElement(t,{key:`separator-${n}`})),e),[])}(m,p):m})})}({createStyledComponent:(0,C.Ay)("div",{name:"MuiStack",slot:"Root",overridesResolver:(e,t)=>t.root}),useThemeProps:e=>(0,q.b)({props:e,name:"MuiStack"})});var _=r(5503);function R(e){return(0,m.Ay)("MuiCardActions",e)}(0,r(1137).A)("MuiCardActions",["root","spacing"]);let M=e=>{let{classes:t,disableSpacing:r}=e;return(0,h.A)({root:["root",!r&&"spacing"]},R,t)},I=(0,C.Ay)("div",{name:"MuiCardActions",slot:"Root",overridesResolver:(e,t)=>{let{ownerState:r}=e;return[t.root,!r.disableSpacing&&t.spacing]}})({display:"flex",alignItems:"center",padding:8,variants:[{props:{disableSpacing:!1},style:{"& > :not(style) ~ :not(style)":{marginLeft:8}}}]}),E=s.forwardRef(function(e,t){let r=(0,q.b)({props:e,name:"MuiCardActions"}),{disableSpacing:s=!1,className:n,...i}=r,a={...r,disableSpacing:s},l=M(a);return(0,o.jsx)(I,{className:(0,u.A)(l.root,n),ownerState:a,ref:t,...i})});var L=r(510);let W=()=>{let[e,t]=(0,s.useState)(!0),[r,u]=(0,s.useState)({email:"",password:""}),p=(0,n.useRouter)(),m=e=>/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(e),h=async()=>{if(!m(r?.email))return alert("Invalid email");if(r?.password?.length===0)return alert("Password cannot be empty");try{console.log("ping",await i.A.get("http://13.250.107.66:4000/ping"));let t=await i.A.post(`http://13.250.107.66:4000/user${e?"/login":"/signup"}`,r,{withCredentials:!0});t?.data?.token?p.push("/chat"):t?.data?.error?alert(t?.data?.error):alert("Sucessfully signed up")}catch(e){i.A.isAxiosError(e)?console.error("Authentication failed:",e.message):console.error("Unexpected error:",e)}};return(0,o.jsx)(a.A,{children:(0,o.jsx)(l.A,{sx:{maxWidth:"500px",margin:"0 auto",marginTop:"64px",border:"1px solid white",backgroundColor:"rgba(255,255,255,0.55)",backdropFilter:"blur(50px)",boxShadow:"4px 4px 4px rgba(30,30,30,0.1)",borderRadius:"10px"},children:(0,o.jsxs)(c.A,{sx:{color:"#777"},children:[(0,o.jsx)(d.A,{variant:"h4",children:e?"Login":"Signup"}),(0,o.jsxs)(S,{spacing:1,sx:{margin:"16px 0 16px 0"},children:[(0,o.jsx)(_.A,{fullWidth:!0,label:"Email",value:r.email,onChange:e=>u({...r,email:e.target.value})}),(0,o.jsx)(_.A,{fullWidth:!0,label:"Password",type:"password",value:r.password,onChange:e=>u({...r,password:e.target.value})})]}),(0,o.jsx)(E,{children:(0,o.jsx)(L.A,{fullWidth:!0,variant:"contained",sx:{backgroundColor:"rgb(100,150,255)",boxShadow:"4px 4px 4px rgba(30,30,30,0.1)"},onClick:h,children:e?"Login":"Create an account"})}),(0,o.jsx)(d.A,{sx:{display:"inline-block",marginRight:"2px"},children:e?"Don't have an account?":"Already have an account?"}),(0,o.jsx)(d.A,{sx:{display:"inline-block",color:"rgb(100,150,255)",cursor:"pointer"},onClick:()=>t(!e),children:e?"Sign up":"Login"})]})})})}},1354:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>l});var o=r(2740),s=r(2376),n=r.n(s),i=r(8726),a=r.n(i);function l({children:e}){return(0,o.jsx)("html",{lang:"en",children:(0,o.jsx)("body",{className:`${n().variable} ${a().variable}`,children:e})})}r(1135)},5983:(e,t,r)=>{"use strict";r.d(t,{default:()=>o});let o=(0,r(6760).registerClientReference)(function(){throw Error("Attempted to call the default export of \"C:\\\\Users\\\\Iryanto\\\\Documents\\\\Projects\\\\bcaptest\\\\chatbot-frontend\\\\src\\\\app\\\\login\\\\Login.tsx\" from the server, but it's on the client. It's not possible to invoke a client function from the server, it can only be rendered as a Component or passed to props of a Client Component.")},"C:\\Users\\Iryanto\\Documents\\Projects\\bcaptest\\chatbot-frontend\\src\\app\\login\\Login.tsx","default")},3751:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>i,metadata:()=>n});var o=r(2740),s=r(5983);let n={title:"Chatmon | Login"};function i(){return(0,o.jsx)(s.default,{})}},440:(e,t,r)=>{"use strict";r.r(t),r.d(t,{default:()=>s});var o=r(8077);let s=async e=>[{type:"image/x-icon",sizes:"16x16",url:(0,o.fillMetadataSegment)(".",await e.params,"favicon.ico")+""}]},1135:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var r=e=>t(t.s=e),o=t.X(0,[638,779,77,306],()=>r(8355));module.exports=o})();