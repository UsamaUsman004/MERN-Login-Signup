(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{188:function(e,a,t){},189:function(e,a,t){},312:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),i=t(53),s=t.n(i),c=(t(188),t(189),t(46)),l=t(83),o=t.n(l),d=t(89),j=t(392),u=t(385),b=t(367),h=t(374),m=t(386),x=t(41),O="localhost"===window.location.hostname.split(":")[0]?"http://localhost:5000":"",p=t(18),v=t(1),f=c.a({email:c.b("Enter your email").email("Enter a valid email").required("Email is required"),password:c.b("Enter your password").min(8,"Password should be of minimum 8 characters length").max(10,"No more then 10").required("Password is required"),name:c.b("Enter your name").required("Name is required")});function g(){var e=Object(p.f)(),a=Object(d.a)({validationSchema:f,initialValues:{name:"",email:"",password:""},onSubmit:function(a,t){t.resetForm;o.a.post("".concat(O,"/api/v1/signup"),{name:a.name,email:a.email,password:a.password}).then((function(a){console.log("res: ",a.data),a.data&&e.push("/login")}))}});return Object(v.jsx)("div",{className:"SignUpMain",children:Object(v.jsx)(j.a,{sx:{marginTop:"5%"},children:Object(v.jsxs)(u.a,{sx:{p:5,margin:"auto",maxWidth:500,flexGrow:1},children:[Object(v.jsx)("h1",{children:" Sign Up"}),Object(v.jsx)("form",{onSubmit:a.handleSubmit,children:Object(v.jsxs)(b.a,{spacing:2,children:[Object(v.jsx)(h.a,{fullWidth:!0,color:"primary",id:"outlined-basic",label:"Name",variant:"outlined",name:"name",value:a.values.name,onChange:a.handleChange,error:a.touched.name&&Boolean(a.errors.name),helperText:a.touched.name&&a.errors.name}),Object(v.jsx)(h.a,{fullWidth:!0,color:"primary",id:"outlined-basic",label:"Email",variant:"outlined",name:"email",value:a.values.email,onChange:a.handleChange,error:a.touched.email&&Boolean(a.errors.email),helperText:a.touched.email&&a.errors.email}),Object(v.jsx)(h.a,{fullWidth:!0,color:"primary",id:"filled-basic",label:"Password",variant:"outlined",type:"password",name:"password",value:a.values.password,onChange:a.handleChange,error:a.touched.password&&Boolean(a.errors.password),helperText:a.touched.password&&a.errors.password}),Object(v.jsx)(m.a,{fullWidth:!0,variant:"contained",color:"primary",type:"submit",children:"Sign Up"}),Object(v.jsx)(x.b,{to:"/login",children:"Already Have an Account? Login"})]})})]})})})}var w=t(12),y=t(377);function C(e){return Object(v.jsx)(b.a,{sx:{width:"100%",position:"absolute"},spacing:2,children:Object(v.jsx)(y.a,{severity:e.type,children:e.message})})}var S=t(54),T=function(e,a){switch(a.type){case"USER_LOGIN":return a.payload.name&&a.payload.email&&a.payload.password&&a.payload.created?(console.log(a.payload),Object(S.a)(Object(S.a)({},e),{},{user:a.payload})):(console.log("invalid data in USER_LOGIN reducer "),e);case"USER_LOGOUT":return Object(S.a)(Object(S.a)({},e),{},{user:null});default:return e}},E=Object(r.createContext)("Initial Value"),I={user:{}};function k(e){var a=e.children,t=Object(r.useReducer)(T,I),n=Object(w.a)(t,2),i=n[0],s=n[1];return Object(v.jsx)(E.Provider,{value:{state:i,dispatch:s},children:a})}var P=c.a({email:c.b("Enter your email").email("Enter a valid email").required("Email is required"),password:c.b("Enter your password").min(8,"Password should be of minimum 8 characters length").max(10,"No more then 10").required("Password is required")});function U(){var e=Object(r.useContext)(E).dispatch,a=Object(p.f)(),t=Object(r.useState)(""),n=Object(w.a)(t,2),i=n[0],s=n[1],c=Object(d.a)({validationSchema:P,initialValues:{email:"",password:""},onSubmit:function(t){o.a.post("".concat(O,"/api/v1/login"),{email:t.email,password:t.password}).then((function(t){console.log("res: ",t.data),"error"!==t.data?(e({type:"USER_LOGIN",payload:{name:t.data.name,email:t.data.email,password:t.data.password,created:t.data.created}}),s(!0),setTimeout((function(){a.push("/profile"),s([])}),1e3)):(s(!1),setTimeout((function(){s([])}),1e3))}))}});return Object(v.jsxs)("div",{className:"LoginMain",children:[!0===i?Object(v.jsx)(C,{type:"success",message:"Welcome"}):"",!1===i?Object(v.jsx)(C,{type:"error",message:"Invalid email or password"}):"",Object(v.jsx)(j.a,{sx:{marginTop:"5%"},children:Object(v.jsxs)(u.a,{sx:{p:5,margin:"auto",maxWidth:500,flexGrow:1},children:[Object(v.jsx)("h1",{children:" Log In"}),Object(v.jsx)("form",{onSubmit:c.handleSubmit,children:Object(v.jsxs)(b.a,{spacing:2,children:[Object(v.jsx)(h.a,{fullWidth:!0,color:"primary",id:"outlined-basic",label:"Email",variant:"outlined",name:"email",value:c.values.email,onChange:c.handleChange,error:c.touched.email&&Boolean(c.errors.email),helperText:c.touched.email&&c.errors.email}),Object(v.jsx)(h.a,{fullWidth:!0,color:"primary",id:"filled-basic",label:"Password",variant:"outlined",type:"password",name:"password",value:c.values.password,onChange:c.handleChange,error:c.touched.password&&Boolean(c.errors.password),helperText:c.touched.password&&c.errors.password}),Object(v.jsx)(m.a,{fullWidth:!0,variant:"contained",color:"primary",type:"submit",children:"Log In"}),Object(v.jsx)(x.b,{to:"/",children:"Don't Have an Account? SignUp"})]})})]})})]})}var L=t(390),W=t(389),q=t(391),G=t(388),A=t(387),F=t(5),N=t(379),B=t(393),_=t(381),D=t(400),M=t(401),R=t(165),z=t.n(R),V=t(164),H=t.n(V),J=t(166),K=t.n(J),X=t(399),Q=t(384),Y=t(394),Z=t(398),$=t(396),ee=t(397),ae=t(395);var te=function(){var e=r.useState(!1),a=Object(w.a)(e,2),t=a[0],n=a[1],i=function(){n(!1)};return Object(v.jsxs)("div",{children:[Object(v.jsx)(m.a,{variant:"outlined",onClick:function(){n(!0)},children:"Open form dialog"}),Object(v.jsxs)(Y.a,{open:t,onClose:i,children:[Object(v.jsx)(ae.a,{children:"Update Profile"}),Object(v.jsxs)($.a,{children:[Object(v.jsx)(ee.a,{children:"Update your profile , and make sure you remember your new credentials."}),Object(v.jsx)(h.a,{autoFocus:!0,margin:"dense",id:"email",label:"Email Address",type:"email",fullWidth:!0,variant:"standard"}),Object(v.jsx)(h.a,{autoFocus:!0,margin:"dense",id:"name",label:"name",type:"text",fullWidth:!0,variant:"standard"}),Object(v.jsx)(h.a,{autoFocus:!0,margin:"dense",id:"password",label:"Password",type:"password",fullWidth:!0,variant:"standard"})]}),Object(v.jsxs)(Z.a,{children:[Object(v.jsx)(m.a,{onClick:i,children:"Cancel"}),Object(v.jsx)(m.a,{onClick:i,children:"Update"})]})]})]})};function re(){var e,a=Object(r.useContext)(E),t=a.state,i=(a.dispatch,n.a.useState({left:!1})),s=Object(w.a)(i,2),c=s[0],l=s[1],o=function(e,a){return function(t){(!t||"keydown"!==t.type||"Tab"!==t.key&&"Shift"!==t.key)&&l(Object(S.a)(Object(S.a)({},c),{},Object(F.a)({},e,a)))}};return Object(v.jsx)("div",{children:Object(v.jsxs)(n.a.Fragment,{children:[Object(v.jsx)(m.a,{color:"inherit",onClick:o("left",!0),children:"Profile"}),Object(v.jsx)(N.a,{anchor:"left",open:c.left,onClose:o("left",!1),onOpen:o("left",!0),children:(e="left",Object(v.jsxs)(W.a,{sx:{width:300},role:"presentation",onClick:o(e,!1),onKeyDown:o(e,!1),children:[Object(v.jsx)(B.a,{children:Object(v.jsxs)(_.a,{children:[Object(v.jsx)(Q.a,{alt:"User",sx:{width:56,height:56},src:"https://media-exp1.licdn.com/dms/image/C5103AQGAb_GYoLFM7A/profile-displayphoto-shrink_200_200/0/1564347397659?e=1639612800&v=beta&t=1zAw1iPqsETqK7DUN2nXvydn8wnz8n26I1pMPXUP0_c"}),Object(v.jsx)(G.a,{variant:"h6",gutterBottom:!0,component:"div",sx:{marginLeft:3,marginTop:1},children:t.user.name})]})}),Object(v.jsx)(X.a,{}),Object(v.jsxs)(B.a,{children:[Object(v.jsxs)(_.a,{button:!0,children:[Object(v.jsx)(D.a,{children:Object(v.jsx)(H.a,{})}),Object(v.jsx)(M.a,{primary:t.user.name})]},t.user.name),Object(v.jsxs)(_.a,{button:!0,children:[Object(v.jsx)(D.a,{children:Object(v.jsx)(z.a,{})}),Object(v.jsx)(M.a,{primary:t.user.email})]},t.user.email),Object(v.jsxs)(_.a,{button:!0,children:[Object(v.jsx)(D.a,{children:Object(v.jsx)(K.a,{})}),Object(v.jsx)(M.a,{primary:t.user.created})]},t.user.created)]}),Object(v.jsx)(X.a,{}),Object(v.jsx)(B.a,{children:Object(v.jsx)(_.a,{children:Object(v.jsx)(te,{})})})]}))})]},"left")})}var ne=t(402),ie=t(373),se=t(375),ce=t(380);var le=function(){var e=r.useState("1"),a=Object(w.a)(e,2),t=a[0],n=a[1];return Object(v.jsx)(W.a,{sx:{width:"100%",typography:"body1"},children:Object(v.jsxs)(ie.a,{value:t,children:[Object(v.jsx)(W.a,{sx:{borderBottom:1,borderColor:"divider"},children:Object(v.jsxs)(se.a,{onChange:function(e,a){n(a)},"aria-label":"lab API tabs example",centered:!0,children:[Object(v.jsx)(ne.a,{label:"Item One",value:"1"}),Object(v.jsx)(ne.a,{label:"Item Two",value:"2"}),Object(v.jsx)(ne.a,{label:"Item Three",value:"3"})]})}),Object(v.jsx)(ce.a,{value:"1",children:"Item One"}),Object(v.jsx)(ce.a,{value:"2",children:"Item Two"}),Object(v.jsx)(ce.a,{value:"3",children:"Item Three"})]})})};function oe(){var e=Object(r.useContext)(E),a=e.state;e.dispatch;return console.log(a),Object(v.jsxs)("div",{children:[Object(v.jsx)(W.a,{sx:{flexGrow:1},children:Object(v.jsx)(L.a,{position:"static",children:Object(v.jsxs)(q.a,{children:[Object(v.jsx)(A.a,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2}}),Object(v.jsx)(G.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:"Dashboard"}),Object(v.jsx)(re,{}),Object(v.jsx)(m.a,{color:"inherit",children:"Logout"})]})})}),Object(v.jsx)(u.a,{variant:"outlined",children:Object(v.jsx)(le,{})})]})}function de(){var e=Object(p.f)();return Object(v.jsx)("div",{children:Object(v.jsx)(W.a,{sx:{flexGrow:1},children:Object(v.jsx)(L.a,{position:"static",children:Object(v.jsxs)(q.a,{children:[Object(v.jsx)(A.a,{size:"large",edge:"start",color:"inherit","aria-label":"menu",sx:{mr:2}}),Object(v.jsx)(G.a,{variant:"h6",component:"div",sx:{flexGrow:1},children:Object(v.jsx)("span",{onClick:function(){return e.push("/")},style:{cursor:"pointer"},children:"Task Application"})}),Object(v.jsx)(m.a,{color:"inherit",onClick:function(){return e.push("/login")},children:"Login"}),Object(v.jsx)(m.a,{color:"inherit",onClick:function(){return e.push("/signup")},children:"Signup"})]})})})})}var je=function(){return Object(v.jsx)("div",{children:Object(v.jsxs)(p.c,{children:[Object(v.jsx)(p.a,{path:"/login",children:Object(v.jsx)(U,{})}),Object(v.jsx)(p.a,{path:"/profile",children:Object(v.jsx)(oe,{})}),Object(v.jsx)(p.a,{exact:!0,path:"/signup",children:Object(v.jsx)(g,{})}),Object(v.jsx)(p.a,{exact:!0,path:"/",children:Object(v.jsx)(de,{})})]})})},ue=function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,403)).then((function(a){var t=a.getCLS,r=a.getFID,n=a.getFCP,i=a.getLCP,s=a.getTTFB;t(e),r(e),n(e),i(e),s(e)}))};s.a.render(Object(v.jsx)(n.a.StrictMode,{children:Object(v.jsx)(k,{children:Object(v.jsx)(x.a,{children:Object(v.jsx)(je,{})})})}),document.getElementById("root")),ue()}},[[312,1,2]]]);
//# sourceMappingURL=main.7fa16004.chunk.js.map