(this.webpackJsonpreact_tabs=this.webpackJsonpreact_tabs||[]).push([[0],{12:function(t,e,c){},14:function(t,e,c){"use strict";c.r(e);var a=c(3),n=c.n(a),i=c(5),s=c(1),b=(c(10),c(11),c(12),c(4)),d=c.n(b),r=c(0),o=function(t){var e=t.tabs,c=t.activeTab,a=t.onTabSelected,n=function(t){t.currentTarget.id!==c.id&&a(e.find((function(e){return e.id===t.currentTarget.id}))||e[0])};return Object(r.jsxs)("div",{"data-cy":"TabsComponent",children:[Object(r.jsx)("div",{className:"tabs is-boxed",children:Object(r.jsx)("ul",{children:e.map((function(t){return Object(r.jsx)("li",{className:d()({"is-active":c===t}),"data-cy":"Tab",children:Object(r.jsx)("a",{href:"#".concat(t.id),onClick:n,"data-cy":"TabLink",id:t.id,children:t.title})},t.title)}))})}),Object(r.jsx)("div",{className:"block","data-cy":"TabContent",children:c.content})]})},l=[{id:"tab-1",title:"Tab 1",content:"Some text 1"},{id:"tab-2",title:"Tab 2",content:"Some text 2"},{id:"tab-3",title:"Tab 3",content:"Some text 3"}],j=function(){var t=Object(s.useState)(l[0]),e=Object(i.a)(t,2),c=e[0],a=e[1];return Object(r.jsxs)("div",{className:"section",children:[Object(r.jsx)("h1",{className:"title",children:"Selected tab is ".concat(c.title)}),Object(r.jsx)(o,{tabs:l,activeTab:c,onTabSelected:function(t){a(t)}})]})};n.a.render(Object(r.jsx)(j,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.e0dfbb77.chunk.js.map