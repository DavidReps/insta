(this.webpackJsonpinsta=this.webpackJsonpinsta||[]).push([[0],{17:function(e,t,s){},19:function(e,t,s){"use strict";s.r(t);var n=s(1),c=s.n(n),a=s(8),r=s.n(a),i=(s(17),s(9)),o=s(10),j=s(4),u=s(12),l=s(11),d=s(6),b=s.n(d),x=function(e){return"/insta"+e},v=s(3),m=s.n(v),h=s(0);var O=function(){return Object(h.jsxs)("nav",{className:m.a.head,children:[Object(h.jsx)("div",{className:m.a.headItem,children:Object(h.jsx)("button",{children:Object(h.jsx)("img",{src:x("/assets/camera.svg"),alt:"Camera"})})}),Object(h.jsx)("div",{className:m.a.headItem,children:Object(h.jsx)("button",{children:Object(h.jsx)("img",{src:x("/assets/logo.png"),alt:"Home"})})}),Object(h.jsx)("div",{className:m.a.headItem,children:Object(h.jsx)("button",{children:Object(h.jsx)("img",{src:x("/assets/message.svg"),alt:"Messages"})})})]})},p=s(7),g=s.n(p);var f=function(e){return Object(h.jsxs)("view",{children:[Object(h.jsx)("img",{className:g.a.user,src:x("/assets/user1.png"),alt:e.user.id}),e.user.id,Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:g.a.post,src:x("/assets/post1.png"),alt:e.post.id})}),Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{src:x("/assets/activity.svg"),alt:"Likes"}),Object(h.jsx)("img",{src:x("/assets/comment.svg"),alt:"Comments"})]}),e.likes.count," likes",Object(h.jsx)("div",{children:e.post.desc}),Object(h.jsx)("div",{children:k(e.comments)})]})};function k(e){return Object(h.jsx)("div",{children:e.map((function(e){return Object(h.jsxs)("p",{children:[Object(h.jsx)("strong",{children:e.userId})," ",e.text]})}))})}var N=function(){var e={user:{id:"judy",photo:"/assets/user1.png"},post:{id:"post-1",userId:"judy",photo:"/assets/post1.png",desc:"#zootopia #excited",datetime:"2020-02-09T22:45:28Z"},likes:{self:!0,count:1},comments:[{userId:"nick",text:"Welcome to Zootopia!"},{userId:"judy",text:"Thanks!\ud83d\ude01Looking forward to meeting you!"}]};return Object(h.jsx)(f,{user:e.user,post:e.post,likes:e.likes,comments:e.comments})},_=s(2),y=s.n(_);var C=function(e){function t(t){e.onNavChange&&e.onNavChange(t)}return Object(h.jsxs)("nav",{className:y.a.navbar,children:[Object(h.jsx)("div",{className:y.a.navItem,children:Object(h.jsx)("button",{onClick:function(e){return t("home")},children:Object(h.jsx)("img",{src:x("/assets/home.svg"),alt:"Home"})})}),Object(h.jsx)("div",{className:y.a.navItem,children:Object(h.jsx)("button",{onClick:function(e){return t("explore")},children:Object(h.jsx)("img",{src:x("/assets/explore.svg"),alt:"Explore"})})}),Object(h.jsx)("div",{className:y.a.navItem,children:Object(h.jsx)("button",{onClick:function(e){return t("newpost")},children:Object(h.jsx)("img",{src:x("/assets/newpost.svg"),alt:"Newpost"})})}),Object(h.jsx)("div",{className:y.a.navItem,children:Object(h.jsx)("button",{onClick:function(e){return t("activity")},children:Object(h.jsx)("img",{src:x("/assets/activity.svg"),alt:"Activity"})})}),Object(h.jsx)("div",{className:y.a.navItem,children:Object(h.jsx)("button",{onClick:function(e){return t("profile")},children:Object(h.jsx)("img",{src:x("/assets/profile.svg"),alt:"Profile"})})})]})};var I=function(){return Object(h.jsx)("div",{children:"Profile"})};var P=function(){return Object(h.jsx)("div",{children:"Activity"})};var w=function(){return Object(h.jsx)("div",{children:"NewPost"})};var F=function(){return Object(h.jsx)("div",{children:"Explore"})},L=function(e){Object(u.a)(s,e);var t=Object(l.a)(s);function s(e){var n;return Object(i.a)(this,s),(n=t.call(this,e)).state={page:"home"},n.setPage=n.setPage.bind(Object(j.a)(n)),n}return Object(o.a)(s,[{key:"setPage",value:function(e){this.setState({page:e})}},{key:"render",value:function(){return Object(h.jsxs)("div",{className:b.a.container,children:[Object(h.jsx)(O,{}),Object(h.jsx)("main",{className:b.a.content,children:this.renderMain(this.state.page)}),Object(h.jsx)(C,{onNavChange:this.setPage})]})}},{key:"renderMain",value:function(e){switch(e){case"home":return Object(h.jsx)(N,{});case"explore":return Object(h.jsx)(F,{});case"newpost":return Object(h.jsx)(w,{});case"activity":return Object(h.jsx)(P,{});case"profile":return Object(h.jsx)(I,{});default:return Object(h.jsx)(N,{})}}}]),s}(c.a.Component),A=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,20)).then((function(t){var s=t.getCLS,n=t.getFID,c=t.getFCP,a=t.getLCP,r=t.getTTFB;s(e),n(e),c(e),a(e),r(e)}))};r.a.render(Object(h.jsx)(c.a.StrictMode,{children:Object(h.jsx)(L,{})}),document.getElementById("root")),A()},2:function(e,t,s){e.exports={navbar:"Navbar_navbar__QyW4k"}},3:function(e,t,s){e.exports={head:"Header_head__3yKbZ"}},6:function(e,t,s){e.exports={container:"App_container__1b4Rg",content:"App_content__2vu8q"}},7:function(e,t,s){e.exports={user:"Post_user__2hLiU",post:"Post_post__1GDFv"}}},[[19,1,2]]]);
//# sourceMappingURL=main.306744ff.chunk.js.map