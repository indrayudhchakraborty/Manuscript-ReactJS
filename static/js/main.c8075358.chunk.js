(this.webpackJsonpparchment=this.webpackJsonpparchment||[]).push([[0],{11:function(e,t,a){},12:function(e,t,a){"use strict";a.r(t);var c=a(1),n=a.n(c),l=a(4),s=a.n(l),r=(a(9),a(2)),o=a(0);function i(e){return Object(o.jsx)(o.Fragment,{children:Object(o.jsx)("nav",{className:"navbar navbar-expand-lg navbar-light ".concat(e.mode," sticky-top"),children:Object(o.jsxs)("div",{className:"container-fluid",children:[Object(o.jsx)("div",{className:"navbar-brand ".concat(e.titleColor),children:e.title}),Object(o.jsx)("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavAltMarkup","aria-controls":"navbarNavAltMarkup","aria-expanded":"false","aria-label":"Toggle navigation",children:Object(o.jsx)("span",{className:"navbar-toggler-icon"})}),Object(o.jsx)("div",{className:"collapse navbar-collapse",id:"navbarNavAltMarkup",children:Object(o.jsxs)("div",{className:"navbar-nav ml-auto",children:[Object(o.jsx)("a",{className:"nav-link ".concat(e.titleColor),href:"#",children:"Home"}),Object(o.jsxs)("div",{class:"form-check form-switch nav-link",style:{marginLeft:"40px"},children:[Object(o.jsx)("input",{class:"form-check-input",type:"checkbox",id:"flexSwitchCheckDefault",onClick:e.toggleMode}),Object(o.jsx)("label",{class:"form-check-label ".concat(e.titleColor),for:"flexSwitchCheckDefault",children:"Enable Dark Mode"})]})]})})]})})})}function b(e){var t=Object(c.useState)(""),a=Object(r.a)(t,2),n=a[0],l=a[1];return Object(o.jsxs)(o.Fragment,{children:[Object(o.jsxs)("div",{className:"form-floating",children:[Object(o.jsx)("textarea",{className:"form-control ".concat(e.colorTxt),value:n,onChange:function(e){console.log("change"),l(e.target.value)},placeholder:"Make a Note",id:"floatingTextarea"}),Object(o.jsx)("label",{htmlFor:"floatingTextarea",id:"labelfornote",children:"Make a Note"})]}),Object(o.jsxs)("ul",{className:"text-opers",children:[Object(o.jsx)("li",{className:"text-oper",children:Object(o.jsx)("button",{className:"btn btn-manu",onClick:function(){l(n.toUpperCase())},children:"Uppercase"})}),Object(o.jsx)("li",{className:"text-oper",children:Object(o.jsx)("button",{className:"btn btn-manu",onClick:function(){l(n.toLowerCase())},children:"Lowercase"})}),Object(o.jsx)("li",{className:"text-oper",children:Object(o.jsx)("button",{className:"btn btn-manu",onClick:function(e){l("")},children:"Clear text"})}),Object(o.jsx)("li",{className:"text-oper",children:Object(o.jsx)("button",{className:"btn btn-manu",onClick:function(){var e=document.getElementById("floatingTextarea");e.select(),navigator.clipboard.writeText(e.value)},children:"Copy to clipboard"})}),Object(o.jsx)("li",{className:"text-oper",children:Object(o.jsx)("button",{className:"btn btn-manu",onClick:function(){var e,t=n.toString().split(" ");for(e=0;e<t.length;e++){var a=t[e].charAt(0).toUpperCase()+t[e].slice(1);t[e]=a}var c=t.toString().replace(/,/g," ");l(c)},children:"Camel"})}),Object(o.jsx)("li",{className:"text-oper",children:Object(o.jsx)("button",{className:"btn btn-manu",onClick:function(){var e=n.split("").reverse("").join("");l(e)},children:"Reverse"})}),Object(o.jsx)("li",{className:"text-oper",children:Object(o.jsx)("button",{className:"btn btn-manu",onClick:function(){var e=n.split(/[ ]+/);l(e.join(" "))},children:"Trim text"})})]}),Object(o.jsxs)("div",{className:"contain",children:[Object(o.jsx)("h1",{class:"".concat(e.color),children:"Your Text Summary"}),Object(o.jsxs)("p",{class:"".concat(e.color),children:[n.split(" ").length," words, ",n.length," characters"]}),Object(o.jsxs)("p",{class:"".concat(e.color),children:[.008*n.split(" ").length," mins to read (0.008 mins/word)"]}),Object(o.jsx)("p",{style:{color:"grey !important",marginLeft:"50rem"},className:"disabled",children:"by indrayudhchakraborty"})]})]})}a(11);var j=function(){var e=Object(c.useState)("bg-white"),t=Object(r.a)(e,2),a=t[0],n=t[1],l=Object(c.useState)("lighty"),s=Object(r.a)(l,2),j=s[0],d=s[1],h=Object(c.useState)("lightyNote"),x=Object(r.a)(h,2),m=x[0],u=x[1],g=Object(c.useState)("lightyTxt"),p=Object(r.a)(g,2),O=p[0],v=p[1];return Object(o.jsx)(o.Fragment,{children:Object(o.jsxs)("div",{className:"App",children:[Object(o.jsx)(i,{title:"ManuScript",mode:a,titleColor:j,toggleMode:function(){"bg-white"===a?(n("bg-darky"),d("darky"),u("darkyNote"),document.body.style.backgroundColor="#18191A",v("darkyTxt")):(n("bg-white"),d("lighty"),u("lightyNote"),document.body.style.backgroundColor="#fff",v("lightyTxt"))}}),Object(o.jsx)("div",{className:"container",children:Object(o.jsx)(b,{color:m,colorTxt:O})})]})})},d=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,13)).then((function(t){var a=t.getCLS,c=t.getFID,n=t.getFCP,l=t.getLCP,s=t.getTTFB;a(e),c(e),n(e),l(e),s(e)}))};s.a.render(Object(o.jsx)(n.a.StrictMode,{children:Object(o.jsx)(j,{})}),document.getElementById("root")),d()},9:function(e,t,a){}},[[12,1,2]]]);
//# sourceMappingURL=main.c8075358.chunk.js.map