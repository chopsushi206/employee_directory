(this.webpackJsonpemployee_directory=this.webpackJsonpemployee_directory||[]).push([[0],{35:function(e,t,s){},37:function(e,t,s){},38:function(e,t,s){},62:function(e,t,s){},64:function(e,t,s){"use strict";s.r(t);var n=s(0),r=s(23),c=s.n(r),o=s(27),a=s(2),i=(s(35),s(1));var l=function(){return Object(i.jsxs)("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark",children:[Object(i.jsx)("span",{className:"navbar-brand",children:" Employee Directory"}),Object(i.jsx)("div",{})]})},d=s(24),j=s(25),u=s(30),m=s(29);s(37);var h=function(e){return Object(i.jsx)("div",{children:Object(i.jsxs)("table",{class:"table",children:[Object(i.jsx)("thead",{class:"thead-dark",children:Object(i.jsxs)("tr",{children:[Object(i.jsx)("th",{scope:"col",style:{width:"20%"},children:"Image"}),Object(i.jsx)("th",{scope:"col",style:{width:"20%"},onClick:function(){e.sortEmployees()},children:"Name"}),Object(i.jsx)("th",{scope:"col",style:{width:"20%"},children:"Email"}),Object(i.jsx)("th",{scope:"col",style:{width:"20%"},children:"Phone"}),Object(i.jsx)("th",{scope:"col",style:{width:"20%"},children:"Age"})]})}),Object(i.jsx)("tbody",{children:e.Employees.map((function(e){return Object(i.jsxs)("tr",{children:[Object(i.jsx)("td",{children:Object(i.jsx)("img",{src:e.picture.thumbnail,alt:""})}),Object(i.jsxs)("th",{scope:"row",children:[e.name.first," ",e.name.last]}),Object(i.jsx)("td",{children:Object(i.jsx)("a",{href:"mailto:"+e.email,children:e.email})}),Object(i.jsx)("td",{children:e.phone}),Object(i.jsx)("td",{children:e.dob.age})]},e.login.uuid)}))})]})})};s(38);var p=function(e){return Object(i.jsxs)("div",{className:"form-group",children:[Object(i.jsx)("label",{children:"Employee Name:"}),Object(i.jsx)("input",{type:"search",onChange:function(t){return e.getFilterEmployees(t)}})]})},b=s(26),y=s.n(b),f=function(){return y.a.get("https://randomuser.me/api/?results=50&nat=us")},O=function(e){Object(u.a)(s,e);var t=Object(m.a)(s);function s(){var e;Object(d.a)(this,s);for(var n=arguments.length,r=new Array(n),c=0;c<n;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).state={Employees:[],FilterEmployees:[],SortedEmployees:[],order:"descend"},e.getEmployeeList=function(){f().then((function(t){return e.setState({Employees:t.data.results,FilterEmployees:t.data.results})})).catch((function(e){return console.log(e)}))},e.getFilterEmployees=function(t){var s=t.target.value,n=e.state.Employees.filter((function(e){return-1!==Object.values(e).join("").toLowerCase().indexOf(s.toLowerCase())}));e.setState({FilterEmployees:n})},e.sortEmployees=function(){var t;"descend"===e.state.order?e.setState({order:"ascend"}):e.setState({order:"descend"}),console.log(e.state.order),t="ascend"===e.state.order?e.state.FilterEmployees.sort((function(e,t){return e.name.first<t.name.first?-1:e.name.first>t.name.first?1:0})):e.state.FilterEmployees.sort((function(e,t){return e.name.first<t.name.first?1:e.name.first>t.name.first?-1:0})),e.setState({SortedEmployees:t})},e}return Object(j.a)(s,[{key:"componentDidMount",value:function(){this.getEmployeeList()}},{key:"render",value:function(){return Object(i.jsxs)("div",{children:[Object(i.jsx)(p,{getFilterEmployees:this.getFilterEmployees}),Object(i.jsx)(h,{Employees:this.state.FilterEmployees,sortEmployees:this.sortEmployees})]})}}]),s}(n.Component);var x=function(){return Object(i.jsx)(o.a,{children:Object(i.jsxs)("div",{children:[Object(i.jsx)(l,{}),Object(i.jsx)(a.a,{path:"/",component:O})]})})};s(62),s(63);c.a.render(Object(i.jsx)(x,{}),document.getElementById("root"))}},[[64,1,2]]]);
//# sourceMappingURL=main.671b45d7.chunk.js.map