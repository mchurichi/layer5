(self.webpackChunkLayer5=self.webpackChunkLayer5||[]).push([[958],{26775:function(e,n,t){"use strict";t.d(n,{Z:function(){return c}});var i=t(67294),a=t(69730),r=t(22626),l=t(70456).ZP.div.withConfig({displayName:"TocPaginationstyle__TocPaginationWrapper",componentId:"zco2fp-0"})(["\n  display: flex;\n  gap: 1rem;\n  justify-content: center;\n  margin: 3rem 2rem 4rem 2rem;\n\n  @media screen and (max-width: 540px) {\n    margin: 0 0 2rem 0;\n    flex-flow: row wrap;\n    gap: 0.3rem;\n  }\n"]),c=function(){var e,n,t=(0,i.useState)(0),c=t[0],o=t[1];return(0,i.useEffect)((function(){var e=window.location.pathname,n=a.k.findIndex((function(n){return n.link===e}));o(n)}),[]),i.createElement(l,null,c>0?i.createElement(r.Z,{secondary:!0,url:null===(e=a.k[c-1])||void 0===e?void 0:e.link},"← Previous"):null,c<a.k.length-1?i.createElement(r.Z,{primary:!0,url:null===(n=a.k[c+1])||void 0===n?void 0:n.link},"Next →"):null)}},69730:function(e,n,t){"use strict";t.d(n,{k:function(){return i}});var i=[{id:0,link:"/community/handbook/about",text:"About"},{id:1,link:"/community/handbook/community",text:"Community"},{id:2,link:"/community/handbook/contributor-journey",text:"Contributor Journey"},{id:3,link:"/community/handbook/contribution",text:"Contribution"},{id:4,link:"/community/handbook/repository-overview",text:"Repository Overview"},{id:5,link:"/community/handbook/projects",text:"Projects"},{id:6,link:"/community/handbook/mentorship-programs",text:"Mentorship Programs"},{id:7,link:"/community/handbook/learn-layer5",text:"Learn Layer5"},{id:8,link:"/community/handbook/connect-with-us",text:"Connect with us"},{id:9,link:"/community/handbook/code-of-conduct",text:"Code of Conduct"},{id:10,link:"/community/handbook/faq",text:"FAQs"}]},52455:function(e,n,t){"use strict";t.d(n,{Z:function(){return M}});var i=t(67294),a=t(11521),r=t(25444),l=t(61424),c=t(70456).ZP.div.withConfig({displayName:"tocstyle__TOCWrapper",componentId:"y1xb32-0"})(["\n\n  position: sticky;\n  top: 10rem;\n  left: 0rem;\n  margin-left: 3rem;\n  margin-top: 3rem;\n  width:15rem;\n  padding-bottom: 2rem;\n\n  .go-back {\n    margin-left: 1rem;\n    display:flex;\n    justify-content:space-between;\n    align-items:center;   \n    a {\n      display: inline-flex;\n      svg {\n        align-self: center;\n        font-size: 1.5rem;\n        color: rgb(177, 182, 184);\n        width: 100%;\n        max-width: 1.5rem;\n      }\n      h4 {\n        font-weight: 500;\n        text-transform: capitalize;\n        font-size: 1.25rem;\n        white-space: nowrap;\n      }\n      &:hover {\n        svg,\n        h4 {\n          color: #3c494f;\n        }\n      }\n    }\n    margin-bottom: 1rem;\n  }\n\n  .toc-sub-heading {\n    color:#000000;\n    margin-top: 1rem;\n    font-weight: 300;\n    font-size: 1.15rem;\n  }\n  \n  .toc-sub-inline{\n    display: inline-block;\n  }\n\n  .active{\n    font-weight:500;\n    color: ",";\n  }\n\n  ul{\n    display:flex;\n    flex-direction:column;\n    white-space: nowrap;\n  }\n\n  .toc-ul{\n    display: flex;\n    flex-direction: column;\n    margin-top: 0rem;\n    list-style: none;\n  }\n\n  .toc-toggle-btn{\n    display:none;\n  }\n \n   .toc-ul-open{\n    display: flex;\n    flex-direction: column;\n    margin-top: 0rem;\n    list-style: none;\n    height:auto !important;\n    opacity:1 !important;\n    margin-bottom: 2rem;\n    transition:all .4s !important;\n   }\n\n  .toc-menu-icon{\n    width: 1.5rem; \n    height: 1.5rem; \n    cursor: pointer;\n    fill: ",";\n  }\n\n  .toc-sub-heading:hover {\n    color: ",";\n  }\n\n  @media only screen and (max-width: 750px){\n   position: initial;\n   margin-right: 3rem;\n   width: auto;\n   .toc-toggle-btn{\n    display:inline-block;\n   }\n   .go-back{\n      margin-left:0;\n   }\n\n   .toc-ul{\n    opacity:0;\n    height:0;\n    transition:none;\n    visibility:hidden;\n   }\n\n   .toc-ul-open{\n    visibility:visible;\n   }\n  }\n"],(function(e){return e.theme.secondaryColor}),(function(e){return e.theme.menuColor}),(function(e){return e.theme.secondaryColor})),o=t(69730),M=function(){var e=(0,i.useState)(!1),n=e[0],t=e[1];return i.createElement(c,null,i.createElement("div",{className:"go-back"},i.createElement(r.Link,{to:"/community/handbook"},i.createElement(a.PSe,null),i.createElement("h4",null,"Table of Content")),i.createElement("div",{className:"toc-toggle-btn"},n?i.createElement(l.QAE,{className:"toc-menu-icon",onClick:function(){t(!n)}}):i.createElement(l.Ejh,{className:"toc-menu-icon",onClick:function(){t(!n)}}))),i.createElement("div",{className:"toc-list"},i.createElement("ul",{className:"toc-ul "+(n?"toc-ul-open":"")},o.k.map((function(e){return i.createElement("li",{key:e.id},i.createElement(r.Link,{to:e.link,key:e.id,className:"toc-sub-heading toc-sub-inline",activeClassName:"active"},e.text))})))))}},52069:function(e,n,t){"use strict";var i=t(67294),a=t(25444),r=t(70456).ZP.div.withConfig({displayName:"intra-page__JoinCommunityWrapper",componentId:"sc-42m33g-0"})(["\n  .intra-page {\n    position: sticky;\n    top: 10rem;\n    right: 0rem;\n    margin-right: 1rem;\n    padding-bottom: 5rem;\n    padding-right: 2rem;\n    align-items: left;\n    justify-content: space-around;\n    display: flex;\n    flex-direction: column;\n    overflow: hidden;\n\n    .list {\n      color: #000000;\n    }\n    .active {\n      font-weight: 5000;\n      color: #000000;\n    }\n\n    ul {\n      list-style: none;\n      top: 3rem;\n\n      li {\n        padding-bottom: 0.5rem;\n        padding-top: 0.5rem;\n      }\n    }\n    @media only screen and (max-width: 950px) {\n      width: 0;\n      opacity: 0;\n      height: 0;\n      transition: none;\n      visibility: hidden;\n    }\n  }\n\n  .learn {\n    width: 10rem;\n  }\n"]);n.Z=function(e){var n=e.contents,t=(0,i.useState)(null),l=t[0],c=t[1];return(0,i.useEffect)((function(){var e=window.location.pathname;c(e)}),[]),i.createElement(r,null,i.createElement("div",{className:"intra-page"},i.createElement("ul",null,n.map((function(e){return i.createElement("li",{key:e.id,className:"list"},i.createElement(a.Link,{to:""+l+e.link,key:e.id,activeClassName:"active"},e.text))})))))}},64357:function(e,n,t){"use strict";t.r(n),t.d(n,{default:function(){return T}});var i=t(67294),a=t(70456),r=t(98460),l=t(36179),c=t(57067),o=t(21101),M=(t(25444),t(52455)),m=t(69536),s=t(9996),u=t(2204),y=t(53364),d=t(26775),g=t(52069),N=[{id:0,link:"#Newsletter",text:"Newsletter"},{id:1,link:"#Mailing Lists",text:"Mailing Lists"},{id:2,link:"#Calendar",text:"Calendar"},{id:3,link:"#Slack Community",text:"Slack Community"},{id:4,link:"#Discussion Forum",text:"Discussion Forum"},{id:5,link:"#Social Media",text:"Social Media"}],j=function(){return i.createElement(o.U,null,i.createElement("div",{className:"page-header-section"},i.createElement("h1",null,"Connect with Us")),i.createElement(M.Z,null),i.createElement("div",{className:"page-section"},i.createElement(c.W2,null,i.createElement("div",{className:"content"},i.createElement("a",{id:"Newsletter"}," ",i.createElement("h2",null,"Subscribe to Newsletter")," "),i.createElement("p",null,"Don’t miss out on anything, sign up to receive updates on our newest releases, latest blog posts and any relevant information."),i.createElement("ul",null,i.createElement("li",null,i.createElement("a",{href:"https://meshery.io/subscribe"},"Meshery mailing")),i.createElement("li",null,i.createElement("a",{href:"https://calcotestudios.us15.list-manage.com/subscribe/post?u=6b50be5aea3dfe1fd4c041d80&id=6bb65defeb"},"Layer5 mailing")),i.createElement("li",null,i.createElement("a",{href:"https://calcotestudios.us15.list-manage.com/subscribe/post?u=6b50be5aea3dfe1fd4c041d80&id=6bb65defeb"},"SMP(Service Mesh Performance) mailing"))),i.createElement("a",{id:"Mailing Lists"}," ",i.createElement("h2",null,"Mailing Lists")," "),i.createElement("ul",null,i.createElement("li",null,i.createElement("a",{href:"mailto:maintainers@layer5.io"},"Layer5 Maintainers")),i.createElement("li",null,i.createElement("a",{href:"mailto:discuss-admins@layer5.io"},"Administrators of discuss.layer5.io")),i.createElement("li",null,i.createElement("a",{href:"mailto:discuss-moderators@layer5.io"},"Moderators of discuss.layer5.io")),i.createElement("li",null,i.createElement("a",{href:"mailto:dev-group@meshery.io"},"Meshery Developers")),i.createElement("li",null,i.createElement("a",{href:"mailto:user-group@meshery.io"},"Meshery Users")),i.createElement("li",null,i.createElement("a",{href:"http://meshery-dev@meshery.dev"},"Meshery Contributors")),i.createElement("li",null,i.createElement("a",{href:"mailto:maintainers@meshery.io"},"Meshery Maintainers")),i.createElement("li",null,i.createElement("a",{href:"http://meshery-security-vulns-reports@meshery.dev"},"Meshery Security and Vulnerability Reports")),i.createElement("li",null,i.createElement("a",{href:"mailto:community@meshery.io"},"Meshery Community")),i.createElement("li",null,i.createElement("a",{href:"mailto:katacoda@layer5.io"},"Katacoda-Managers")),i.createElement("li",null,i.createElement("a",{href:"http://developers@nighthawk.dev"},"Nighthawk Developers")),i.createElement("li",null,i.createElement("a",{href:"http://maintainers@nighthawk.dev"},"Nighthawk Maintainers")),i.createElement("li",null,i.createElement("a",{href:"http://users@nighthawk.dev"},"Nighthawk Users")),i.createElement("li",null,i.createElement("a",{href:"mailto:community@smp-spec.io"},"Service Mesh Performance Community")),i.createElement("li",null,i.createElement("a",{href:"mailto:maintainers@smp-spec.io"},"Service Mesh Performance Maintainers")),i.createElement("li",null,i.createElement("a",{href:"mailto:user-group@smp-spec.io"},"Service Mesh Performance Users")),i.createElement("li",null,i.createElement("a",{href:"mailto:community@layer5.io"},"Layer5 Community")),i.createElement("li",null,i.createElement("a",{href:"mailto:community-members@layer5.io"},"Layer5 Community Members"))),i.createElement("a",{id:"Calendar"}," ",i.createElement("h2",null,"Calendar")," "),i.createElement("p",null,"Don’t miss out on any of the activities in the community. Join any or all of the weekly meetings subscribing to the"," ",i.createElement("a",{href:"https://layer5.io/community/calendar#meetings"},"community calendar ."))," ",i.createElement("a",{id:"Slack Community"}," ",i.createElement("h2",null,"Slack Community")," "),i.createElement("p",null,"We are a community of like-minded people with over a thousand members."),i.createElement("p",null,"Join our ",i.createElement("a",{href:"http://slack.layer5.io/"},"Slack Workspace")," ","“introduce yourself” and interact with the community. There are different channels in the workspace, to engage in, just search for:"),i.createElement("div",{className:"channels-list"},i.createElement("p",null,i.createElement("a",{href:"https://layer5io.slack.com/archives/CDM0ACDM5"},"#general")," ","- For workspace-wide communication and announcements."),i.createElement("p",null,i.createElement("a",{href:"https://layer5io.slack.com/archives/CFGG6U10E"},"#meshery")," ","- For discussion on topics in and around Meshery."),i.createElement("p",null,i.createElement("a",{href:"https://layer5io.slack.com/archives/C017NA80S66"},"#meshery-adapters")," ","- Discuss topics related to meshery-adapters."),i.createElement("p",null,i.createElement("a",{href:"https://layer5io.slack.com/archives/C011VPREG2Z"},"#meshery-ci")," ","- For discussion on topics related to meshery-ci."),i.createElement("p",null,i.createElement("a",{href:"https://layer5io.slack.com/archives/C010LFFGFFA"},"#meshery-meshsync")," ","- For discussions on issues related to mesh sync."),i.createElement("p",null,i.createElement("a",{href:"https://layer5io.slack.com/archives/C0130BQ4L3T"},"#mesheryctl")," ","- For discussions on Meshery’s CLI"),i.createElement("p",null,i.createElement("a",{href:"https://layer5io.slack.com/archives/C019426UBNY"},"#newcomers")," ","- For welcoming first-time contributors and community newcomers."),i.createElement("p",null,i.createElement("a",{href:"https://layer5io.slack.com/archives/CVBGPTFJN"},"#performance")," ","- For discussions related to measuring and evaluating Service Mesh Performance."),i.createElement("p",null,i.createElement("a",{href:"https://layer5io.slack.com/archives/C010H0HE2E6"},"#smi")," ","- For discussions related to Meshery and Service Mesh Interface (SMI)."),i.createElement("p",null,i.createElement("a",{href:"https://layer5io.slack.com/archives/C012UMS2MCM"},"#wasm")," ","- For discussions on web assembly, rust, data plane filters."),i.createElement("p",null,i.createElement("a",{href:"https://layer5io.slack.com/archives/C015QJKUMPU"},"#websites")," ","- For discussions related to the UI/UX of"," ",i.createElement("a",{href:"http://layer5.io/"},"Layer 5")," project sites.")),i.createElement("a",{id:"Discussion Forum"}," ",i.createElement("h2",null,"Discussion Forum")," "),i.createElement("p",null,"Join us on our service mesh community's"," ",i.createElement("a",{href:"https://discuss.layer5.io"},"Discussion Forum")),i.createElement("a",{id:"Social Media"}," ",i.createElement("h2",null,"Social Media")," "),i.createElement("p",null,"Layer5 is dedicated to providing the most efficient Service mesh management tool while growing a healthy open-source community. To know more about layer5 and connect with the community, follow and engage with us on our social media accounts."),i.createElement("div",{className:"channels-list"},i.createElement("p",{className:"channels-para"},i.createElement("img",{className:"channels-img",src:m.Z,alt:"twitter"}),"  ",i.createElement("a",{href:"https://twitter.com/layer5"},"@layer5"),", ",i.createElement("a",{href:"https://twitter.com/mesheryio"},"@mesheryio")," and ",i.createElement("a",{href:"https://twitter.com/smp_spec"},"@smp_spec")),i.createElement("p",{className:"channels-para"},i.createElement("img",{className:"channels-img",src:s.Z,alt:"mail"}),"  ",i.createElement("a",{href:"mailto:community@layer5.io"},"community@layer5.io")),i.createElement("p",{className:"channels-para"},i.createElement("img",{className:"channels-img",src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI1MTJwdCIgaGVpZ2h0PSI1MTJwdCIgdmlld0JveD0iMCAtNzcgNTEyLjAwMiA1MTIiPjxwYXRoIGZpbGw9InJlZCIgZD0ibTUwMS40NTMxMjUgNTYuMDkzNzVjLTUuOTAyMzQ0LTIxLjkzMzU5NC0yMy4xOTUzMTMtMzkuMjIyNjU2LTQ1LjEyNS00NS4xMjg5MDYtNDAuMDY2NDA2LTEwLjk2NDg0NC0yMDAuMzMyMDMxLTEwLjk2NDg0NC0yMDAuMzMyMDMxLTEwLjk2NDg0NHMtMTYwLjI2MTcxOSAwLTIwMC4zMjgxMjUgMTAuNTQ2ODc1Yy0yMS41MDc4MTMgNS45MDIzNDQtMzkuMjIyNjU3IDIzLjYxNzE4Ny00NS4xMjUgNDUuNTQ2ODc1LTEwLjU0Mjk2OSA0MC4wNjI1LTEwLjU0Mjk2OSAxMjMuMTQ4NDM4LTEwLjU0Mjk2OSAxMjMuMTQ4NDM4czAgODMuNTAzOTA2IDEwLjU0Mjk2OSAxMjMuMTQ4NDM3YzUuOTA2MjUgMjEuOTI5Njg3IDIzLjE5NTMxMiAzOS4yMjI2NTYgNDUuMTI4OTA2IDQ1LjEyODkwNiA0MC40ODQzNzUgMTAuOTY0ODQ0IDIwMC4zMjgxMjUgMTAuOTY0ODQ0IDIwMC4zMjgxMjUgMTAuOTY0ODQ0czE2MC4yNjE3MTkgMCAyMDAuMzI4MTI1LTEwLjU0Njg3NWMyMS45MzM1OTQtNS45MDIzNDQgMzkuMjIyNjU2LTIzLjE5NTMxMiA0NS4xMjg5MDYtNDUuMTI1IDEwLjU0Mjk2OS00MC4wNjY0MDYgMTAuNTQyOTY5LTEyMy4xNDg0MzggMTAuNTQyOTY5LTEyMy4xNDg0MzhzLjQyMTg3NS04My41MDc4MTItMTAuNTQ2ODc1LTEyMy41NzAzMTJ6bTAgMCIvPjxwYXRoIGZpbGw9IiNmZmYiIGQ9Im0yMDQuOTY4NzUgMjU2IDEzMy4yNjk1MzEtNzYuNzU3ODEyLTEzMy4yNjk1MzEtNzYuNzU3ODEzem0wIDAiLz48L3N2Zz4=",alt:"youtube"}),"  ",i.createElement("a",{href:"https://www.youtube.com/c/Layer5io?sub_confirmation=1"},"Subscribe on Youtube")),i.createElement("p",{className:"channels-para"},i.createElement("img",{className:"channels-img",src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB4bWxuczp4bGluaz0iaHR0cDovL3d3dy53My5vcmcvMTk5OS94bGluayIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgd2lkdGg9IjUxMiIgaGVpZ2h0PSI1MTIiIHg9IjAiIHk9IjAiIHZlcnNpb249IjEuMSIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiPjxnPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbD0iIzAwMCIgZD0ibTUxMiAyNTdjMCAxMjAtODQuMTAxNTYyIDIyMC41LTE5NiAyNDcuNWwtMzAuNjAxNTYyLTk3LjE5OTIxOWgtNTguNzk2ODc2bC0yOS42MDE1NjIgOTcuMTk5MjE5Yy0xMTEuODk4NDM4LTI3LTE5Ny0xMjcuNS0xOTctMjQ3LjUgMC0xNDAuNjk5MjE5IDExNS4zMDA3ODEtMjU3IDI1Ni0yNTdzMjU2IDExNi4zMDA3ODEgMjU2IDI1N3ptMCAwIiBkYXRhLW9yaWdpbmFsPSIjMzg0OTQ5Ii8+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjMDAwIiBkPSJtNTEyIDI1N2MwIDEyMC04NC4xMDE1NjIgMjIwLjUtMTk2IDI0Ny41bC0zMC42MDE1NjItOTcuMTk5MjE5aC0yOS4zOTg0Mzh2LTQwNy4zMDA3ODFjMTQwLjY5OTIxOSAwIDI1NiAxMTYuMzAwNzgxIDI1NiAyNTd6bTAgMCIgZGF0YS1vcmlnaW5hbD0iIzI5MzkzOSIvPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbD0iI2ZmZiIgZD0ibTE4MS4yNzczNDQgNDMwLjA1ODU5NGMtNi4wNzgxMjUgMC0xMi4wMTE3MTktLjg2NzE4OC0xNy44MjgxMjUtMi41NzgxMjUtMTUuMTI4OTA3LTQuNDY4NzUtMjcuNDIxODc1LTE0LjU0Njg3NS0zNi41NDY4NzUtMjkuOTE0MDYzLTQuMTYwMTU2LTcuMDE1NjI1LTguNDk2MDk0LTExLjg3ODkwNi0xMy42MDU0NjktMTUuMzA4NTk0LTUuMDI3MzQ0LTMuMzgyODEyLTkuMDM5MDYzLTQuNjcxODc0LTEzLjI3MzQzNy00LjM2MzI4MWwtMi42MzY3MTktMjkuODgyODEyYzExLjExNzE4Ny0uOTUzMTI1IDIxLjc1MzkwNiAyLjA2MjUgMzIuNTkzNzUgOS4zMTY0MDYgOC44MzIwMzEgNS45MDIzNDQgMTYuMjU3ODEyIDE0LjA2MjUgMjIuNzE4NzUgMjQuOTE0MDYzIDUuMzA0Njg3IDguOTIxODc0IDExLjQxMDE1NiAxNC4xNTIzNDMgMTkuMjUgMTYuNDY4NzUgOC44MDQ2ODcgMi41ODk4NDMgMTcuOTQxNDA2IDEuNTA3ODEyIDI5LjYzMjgxMi0zLjQ3MjY1N2wxMS44MDg1OTQgMjcuNTY2NDA3Yy0xMS4yOTY4NzUgNC44MzU5MzctMjEuOTI5Njg3IDcuMjUzOTA2LTMyLjExMzI4MSA3LjI1MzkwNnptMCAwIiBkYXRhLW9yaWdpbmFsPSIjZWNlY2YxIi8+PHBhdGggeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIiBmaWxsPSIjZmZmIiBkPSJtNDAwLjkwMjM0NCAyODcuMzAwNzgxYy0xMC41MDM5MDYgMjcuODk4NDM4LTM2LjkwMjM0NCA2My4zMDA3ODEtMTAzLjgwMDc4MiA3My4xOTkyMTkgOC42OTkyMTkgMTIuODk4NDM4IDE5LjE5OTIxOSAxOS44MDA3ODEgMTguODk4NDM4IDQ2LjgwMDc4MXY5Ny4xOTkyMTljLTE5LjE5OTIxOSA0LjgwMDc4MS0zOS4zMDA3ODEgNy41LTYwIDcuNXMtMzkuODAwNzgxLTIuNjk5MjE5LTU5LTcuNXYtOTguNDAyMzQ0YzAtMjYuNjk5MjE4IDEwLjEwMTU2Mi0zNC4xOTkyMTggMTcuODk4NDM4LTQ1LjU5NzY1Ni02Ni44OTg0MzgtOS45MDIzNDQtOTMuMjk2ODc2LTQ1LjMwMDc4MS0xMDMuODAwNzgyLTczLjE5OTIxOS0xNC4wOTc2NTYtMzcuMjAzMTI1LTYuNTk3NjU2LTgzLjQwMjM0MyAxOC4wMDM5MDYtMTEyLjgwMDc4MS41OTc2NTctLjYwMTU2MiAxLjUtMi4xMDE1NjIgMS4xOTkyMTktMy0xMS40MDIzNDMtMzQuMTk5MjE5IDIuMzk4NDM4LTYyLjY5OTIxOSAzLTY1LjY5OTIxOSAxMi44OTg0MzggMy44OTg0MzggMTUtMy45MDIzNDMgNTYuNjk5MjE5IDIxLjU5NzY1N2w3LjE5OTIxOSA0LjIwMzEyNGMzIDEuNzk2ODc2IDIuMTAxNTYyLjU5NzY1NyA1LjEwMTU2Mi41OTc2NTcgMTcuMzk4NDM4LTQuODAwNzgxIDM1LjY5OTIxOS03LjUgNTMuNjk5MjE5LTcuNSAxOC4zMDA3ODEgMCAzNi4zMDA3ODEgMi42OTkyMTkgNTQuNTk3NjU2IDcuNWwyLjEwMTU2My4zMDA3ODFzLjU5NzY1NiAwIDIuMTAxNTYyLS44OTg0MzhjNTEuODk4NDM4LTMxLjUwMzkwNiA1MC4wOTc2NTctMjEuMzAwNzgxIDY0LjE5NTMxMy0yNS44MDA3ODEuMzAwNzgxIDMgMTQuMTAxNTYyIDMxLjc5Njg3NSAyLjcwMzEyNSA2NS42OTkyMTktMS41IDQuNSA0NSA0Ny4wOTc2NTYgMTkuMjAzMTI1IDExNS44MDA3ODF6bTAgMCIgZGF0YS1vcmlnaW5hbD0iI2VjZWNmMSIvPjxwYXRoIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbD0iI2ZmZiIgZD0ibTQwMC45MDIzNDQgMjg3LjMwMDc4MWMtMTAuNTAzOTA2IDI3Ljg5ODQzOC0zNi45MDIzNDQgNjMuMzAwNzgxLTEwMy44MDA3ODIgNzMuMTk5MjE5IDguNjk5MjE5IDEyLjg5ODQzOCAxOS4xOTkyMTkgMTkuODAwNzgxIDE4Ljg5ODQzOCA0Ni44MDA3ODF2OTcuMTk5MjE5Yy0xOS4xOTkyMTkgNC44MDA3ODEtMzkuMzAwNzgxIDcuNS02MCA3LjV2LTM4Ny4zMDA3ODFjMTguMzAwNzgxIDAgMzYuMzAwNzgxIDIuNjk5MjE5IDU0LjYwMTU2MiA3LjVsMi4wOTc2NTcuMzAwNzgxcy42MDE1NjIgMCAyLjEwMTU2Mi0uODk4NDM4YzUxLjg5ODQzOC0zMS41MDM5MDYgNTAuMDk3NjU3LTIxLjMwMDc4MSA2NC4xOTkyMTktMjUuODAwNzgxLjMwMDc4MSAzIDE0LjEwMTU2MiAzMS43OTY4NzUgMi42OTkyMTkgNjUuNjk5MjE5LTEuNSA0LjUgNDUgNDcuMDk3NjU2IDE5LjIwMzEyNSAxMTUuODAwNzgxem0wIDAiIGRhdGEtb3JpZ2luYWw9IiNlMmUyZTciLz48L2c+PC9zdmc+",alt:"github"}),"  ",i.createElement("a",{href:"https://github.com/layer5io"},"Layer5io")),i.createElement("p",{className:"channels-para"},i.createElement("img",{className:"channels-img",src:u.Z,alt:"linkedin"}),"  ",i.createElement("a",{href:"https://www.linkedin.com/company/layer5"},"Layer5")),i.createElement("p",{className:"channels-para"},i.createElement("img",{className:"channels-img",src:"data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBpZD0iTGF5ZXJfMSIgeD0iMCIgeT0iMCIgdmVyc2lvbj0iMS4xIiB2aWV3Qm94PSIwIDAgMjQgMjQiIHhtbDpzcGFjZT0icHJlc2VydmUiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDI0IDI0Ij48Zz48cGF0aCBzdHlsZT0iZmlsbDojMzAzYzQyIiBkPSJNMjMuNzcsMTEuMDc5Yy0wLjA2OS0wLjA0NS0xLjQ5OC0wLjk0Ny0yLjg0OS0wLjczMmMtMC4zMjctMS4zNjktMS41ODMtMi4yMjItMS42NDUtMi4yNjMgYy0wLjIwMy0wLjEzNS0wLjQ3LTAuMTA2LTAuNjM4LDAuMDY5Yy0wLjEsMC4xMDQtMC45NjcsMS4wNzQtMC43MjIsMy4yODJjMC4wMTgsMC4xNTItMC4wMjgsMC4zMDMtMC4xMjYsMC40MTEgQzE3LjcwNCwxMS45NDUsMTcuNTgyLDEyLDE3LjQ0OCwxMkgxN1Y5LjVDMTcsOS4yMjQsMTYuNzc2LDksMTYuNSw5SDE0VjYuNXYtM0MxNCwzLjIyNCwxMy43NzYsMywxMy41LDNoLTMgQzEwLjIyMywzLDEwLDMuMjI0LDEwLDMuNVY2SDcuNWgtM0M0LjIyMyw2LDQsNi4yMjQsNCw2LjVWOUgxLjVDMS4yMjMsOSwxLDkuMjI0LDEsOS41VjEySDAuNUMwLjIyMywxMiwwLDEyLjIyNCwwLDEyLjUgQzAsMjAuMTcyLDUuNTk1LDIxLDgsMjFjNi4xOTMsMCwxMC40OTgtMy43NjIsMTIuMzc3LTcuMDc3YzIuNDc2LTAuMzk1LDMuNTA5LTIuMDk0LDMuNTU0LTIuMTY4IEMyNC4wNjcsMTEuNTIzLDIzLjk5NywxMS4yMjUsMjMuNzcsMTEuMDc5eiIvPjxyZWN0IHN0eWxlPSJmaWxsOiM0MmE1ZjUiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIHg9IjE0IiB5PSIxMCIvPjxyZWN0IHN0eWxlPSJmaWxsOiM0MmE1ZjUiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIHg9IjExIiB5PSIxMCIvPjxyZWN0IHN0eWxlPSJmaWxsOiM0MmE1ZjUiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIHg9IjgiIHk9IjEwIi8+PHJlY3Qgc3R5bGU9ImZpbGw6IzQyYTVmNSIgd2lkdGg9IjIiIGhlaWdodD0iMiIgeD0iNSIgeT0iMTAiLz48cmVjdCBzdHlsZT0iZmlsbDojNDJhNWY1IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiB4PSIxMSIgeT0iNyIvPjxyZWN0IHN0eWxlPSJmaWxsOiM0MmE1ZjUiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIHg9IjExIiB5PSI0Ii8+PHJlY3Qgc3R5bGU9ImZpbGw6IzQyYTVmNSIgd2lkdGg9IjIiIGhlaWdodD0iMiIgeD0iOCIgeT0iNyIvPjxyZWN0IHN0eWxlPSJmaWxsOiM0MmE1ZjUiIHdpZHRoPSIyIiBoZWlnaHQ9IjIiIHg9IjUiIHk9IjciLz48cmVjdCBzdHlsZT0iZmlsbDojNDJhNWY1IiB3aWR0aD0iMiIgaGVpZ2h0PSIyIiB4PSIyIiB5PSIxMCIvPjxwYXRoIHN0eWxlPSJmaWxsOiM0MmE1ZjUiIGQ9Ik0yMC4wMDIsMTIuOTY1Yy0wLjE2MiwwLjAyLTAuMzA1LDAuMTE2LTAuMzgyLDAuMjYxQzE3Ljk0MiwxNi4zNTEsMTMuODkxLDIwLDgsMjAgYy0yLjU0NiwwLTYuNzcyLTAuOTI0LTYuOTkxLTdoMTYuNDM5YzAuNDIyLDAsMC44MDktMC4xNzMsMS4wODktMC40ODZjMC4yODctMC4zMjEsMC40MjQtMC43NTQsMC4zNzUtMS4xODkgYy0wLjExMy0xLjAyLDAuMDUzLTEuNjg3LDAuMjE0LTIuMDY5QzE5LjUwMSw5LjYxNywyMCwxMC4yNDEsMjAsMTFjMCwwLjE3MywwLjA5LDAuMzM0LDAuMjM3LDAuNDI2IGMwLjE0NiwwLjA4OSwwLjMzMSwwLjA5OSwwLjQ4NiwwLjAyMWMwLjU5NS0wLjMsMS40NC0wLjA0OCwyLjAxNSwwLjIxMkMyMi4zMDYsMTIuMTE0LDIxLjQzNywxMi43OTcsMjAuMDAyLDEyLjk2NXoiLz48cGF0aCBzdHlsZT0ib3BhY2l0eTouMSIgZD0iTTIwLjAwMiwxMi40NjVjLTAuMTYyLDAuMDItMC4zMDUsMC4xMTYtMC4zODIsMC4yNjFDMTcuOTQyLDE1Ljg1MSwxMy44OTEsMTkuNSw4LDE5LjUgYy0yLjQ3MiwwLTYuNTE4LTAuODg2LTYuOTUxLTYuNWgtMC4wNEMxLjIyNywxOS4wNzYsNS40NTQsMjAsOCwyMGM1Ljg5MiwwLDkuOTQyLTMuNjQ5LDExLjYyLTYuNzc0IGMwLjA3Ny0wLjE0NSwwLjIyLTAuMjQxLDAuMzgyLTAuMjYxYzEuNDM2LTAuMTY4LDIuMzA1LTAuODUxLDIuNzM2LTEuMzA2Yy0wLjExNi0wLjA1My0wLjI0OS0wLjEwMi0wLjM4NC0wLjE1IEMyMS44NjIsMTEuOTA4LDIxLjEsMTIuMzM2LDIwLjAwMiwxMi40NjV6Ii8+PGNpcmNsZSBzdHlsZT0iZmlsbDojMzAzYzQyIiBjeD0iNS4wNDEiIGN5PSIxNiIgcj0iMSIvPjxjaXJjbGUgc3R5bGU9ImZpbGw6I2ZmZiIgY3g9IjUuNDY5IiBjeT0iMTUuNzI5IiByPSIuMzIzIi8+PGxpbmVhckdyYWRpZW50IGlkPSJTVkdJRF8xXyIgeDE9IjEuNTU2IiB4Mj0iMjEuMyIgeTE9IjguMTk1IiB5Mj0iMTcuNDAxIiBncmFkaWVudFVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHN0b3Agb2Zmc2V0PSIwIiBzdHlsZT0ic3RvcC1jb2xvcjojZmZmO3N0b3Atb3BhY2l0eTouMiIvPjxzdG9wIG9mZnNldD0iMSIgc3R5bGU9InN0b3AtY29sb3I6I2ZmZjtzdG9wLW9wYWNpdHk6MCIvPjwvbGluZWFyR3JhZGllbnQ+PHBhdGggc3R5bGU9ImZpbGw6dXJsKCNTVkdJRF8xXykiIGQ9Ik0yMy43NywxMS4wNzljLTAuMDY5LTAuMDQ1LTEuNDk4LTAuOTQ3LTIuODQ5LTAuNzMyYy0wLjMyNy0xLjM2OS0xLjU4My0yLjIyMi0xLjY0NS0yLjI2MyBjLTAuMjAzLTAuMTM1LTAuNDctMC4xMDYtMC42MzgsMC4wNjljLTAuMSwwLjEwNC0wLjk2NywxLjA3NC0wLjcyMiwzLjI4MmMwLjAxOCwwLjE1Mi0wLjAyOCwwLjMwMy0wLjEyNiwwLjQxMSBDMTcuNzA0LDExLjk0NSwxNy41ODIsMTIsMTcuNDQ4LDEySDE3VjkuNUMxNyw5LjIyNCwxNi43NzYsOSwxNi41LDlIMTRWNi41di0zQzE0LDMuMjI0LDEzLjc3NiwzLDEzLjUsM2gtMyBDMTAuMjIzLDMsMTAsMy4yMjQsMTAsMy41VjZINy41aC0zQzQuMjIzLDYsNCw2LjIyNCw0LDYuNVY5SDEuNUMxLjIyMyw5LDEsOS4yMjQsMSw5LjVWMTJIMC41QzAuMjIzLDEyLDAsMTIuMjI0LDAsMTIuNSBDMCwyMC4xNzIsNS41OTUsMjEsOCwyMWM2LjE5MywwLDEwLjQ5OC0zLjc2MiwxMi4zNzctNy4wNzdjMi40NzYtMC4zOTUsMy41MDktMi4wOTQsMy41NTQtMi4xNjggQzI0LjA2NywxMS41MjMsMjMuOTk3LDExLjIyNSwyMy43NywxMS4wNzl6Ii8+PC9nPjxtZXRhZGF0YT48cmRmOlJERiB4bWxuczpkYz0iaHR0cDovL3B1cmwub3JnL2RjL2VsZW1lbnRzLzEuMS8iIHhtbG5zOnJkZj0iaHR0cDovL3d3dy53My5vcmcvMTk5OS8wMi8yMi1yZGYtc3ludGF4LW5zIyIgeG1sbnM6cmRmcz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC8wMS9yZGYtc2NoZW1hIyI+PHJkZjpEZXNjcmlwdGlvbiBhYm91dD0iaHR0cHM6Ly9pY29uc2NvdXQuY29tL2xlZ2FsI2xpY2Vuc2VzIiBkYzpkYXRlPSIyMDE3LTAzLTIyIiBkYzpkZXNjcmlwdGlvbj0ic29jaWFsOyBtZWRpYTsgc29jaWFsIG1lZGlhOyBsb2dvOyBkb2NrZXIiIGRjOmZvcm1hdD0iaW1hZ2Uvc3ZnK3htbCIgZGM6bGFuZ3VhZ2U9ImVuIiBkYzpwdWJsaXNoZXI9Ikljb25zY291dCIgZGM6dGl0bGU9InNvY2lhbDsgbWVkaWE7IHNvY2lhbCBtZWRpYTsgbG9nbzsgZG9ja2VyIj48ZGM6Y3JlYXRvcj48cmRmOkJhZz48cmRmOmxpPkFscMOhciAtIEV0ZWxlIE3DqWRlcjwvcmRmOmxpPjwvcmRmOkJhZz48L2RjOmNyZWF0b3I+PC9yZGY6RGVzY3JpcHRpb24+PC9yZGY6UkRGPjwvbWV0YWRhdGE+PC9zdmc+",alt:"docker"}),"  ",i.createElement("a",{href:"https://hub.docker.com/u/layer5/"},"Layer5")),i.createElement("p",{className:"channels-para"},i.createElement("img",{className:"channels-img",src:y.Z,alt:"slack"}),"  ",i.createElement("a",{href:"https://bit.ly/3fXwYPk"},"Layer5")))),i.createElement(d.Z,null)),i.createElement(g.Z,{contents:N})))},I=t(45027),h=t(34967),w=t(97956),D=t(38155),T=function(){return i.createElement(a.f6,{theme:D.Z},i.createElement(r.Z,null,i.createElement(w.Z,null),i.createElement(l.Z,{title:"Connect With Us",description:"The purpose of the handbook is to provide an overview of the Layer5 community"}),i.createElement(I.Z,null),i.createElement(j,null),i.createElement(h.Z,null)))}},21101:function(e,n,t){"use strict";t.d(n,{U:function(){return a}});var i=t(70456),a=(t(25444),i.ZP.div.withConfig({displayName:"Handbookstyle__HandbookWrapper",componentId:"l1w5w5-0"})(["\n    \n    .highlight{\n      font-weight: 600;\n    }\n\n    .content{\n      width:100%;\n      padding-bottom: 2rem;\n      ul > li {\n        color: ",";\n      }\n      ol > li {\n        color: ",";\n      }\n      ul > li > span {\n        color: ",";\n      }\n      ol > li > span {\n        color: ",";\n      }\n    }\n\n    h2 h3{\n      margin: 0.5rem 0;\n      color: ",";\n    }\n\n    .page-section{\n      margin-top: -36rem;\n      margin-left: 20rem;\n      display: flex;\n    }\n\n    .sidebar {\n        margin: 0;\n        padding: 0;\n        width: 250px;\n        background-color:",";\n        position: absolute;\n        height: 150rem;\n        overflow: auto;\n    }\n\n    .sidebar a {\n        display: block;\n        color: black;\n        padding: 16px;\n        text-decoration: none;\n    }\n\n    .sidebar a.active {\n        background-color: ",";\n        color: white;\n    }\n\n    .sidebar a:hover:not(.active) {\n        background-color:",";\n        color: white;\n    }\n    \n    .page-header-section {\n        height: 10rem;\n        text-align: center;\n        background: rgb(71,126,150);\n        background: linear-gradient(250deg, rgba(71,126,150,1) 0%, rgba(0,179,159,1) 35%, rgba(60,73,79,1) 100%);\n        h1 {\n            line-height: 10rem;\n            color: white;\n        }\n    }\n\n    .community-home-subtitle {\n        text-align: center;\n        padding-top: 3rem;\n        padding-bottom: 1.5rem;\n    }\n\n    #sign-off{\n      padding-bottom: 4rem;\n    }\n    \n    table {\n      border-collapse: collapse;\n      width: 98%;\n      margin: 1rem 0 2rem 0;\n      .github-icon{\n        height: 1.7rem;\n        width:auto;\n        display: block;\n        margin-left: auto;\n        margin-right: auto;\n      }\n      .site-icon{\n        height: 1.6rem;\n        width:auto;\n        display: block;\n        margin-left: auto;\n        margin-right: auto;\n      }\n    }\n\n    td, th {\n      border: 0.05rem solid ",";\n      text-align: left;\n      padding: 0.5rem;\n    }\n\n    .linkscol{\n      text-align: center;\n      width:8%;\n    }\n\n    tbody:nth-child(even) {\n      background-color: ",';\n    }\n\n    .codes{\n      width:75%\n      margin-top:-2rem;\n    }\n\n    .community-home-container{\n        padding: 1rem 0;\n        padding-bottom: 4rem;\n        display: flex;\n        flex-wrap : wrap;\n        align-items : center;\n        justify-content: center;\n    }\n\n    p{\n      margin-top: 10px;\n    }\n    input[type=checkbox] + label {\n      display: block;\n      margin: 0.2em;\n      cursor: pointer;\n      padding: 0.2em;\n    }\n\n    input[type=checkbox] {\n      display: none;\n    }\n\n    input[type=checkbox] + label:before {\n      content: url(\'data:image/svg+xml; utf8, <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" fill="white" viewBox="0 4 24 24"><path d="M20.285 2l-11.285 11.567-5.286-5.011-3.714 3.716 9 8.728 15-15.285z"/></svg>\');;\n      border: 0.1em solid #000;\n      border-radius: 0.2em;\n      display: inline-block;\n      width: 1.3em;\n      height: 1.3em;\n      padding-left: 0.2em;\n      padding-bottom: 0.3em;\n      margin-right: 0.5em;\n      margin-bottom: 0.15em;\n      vertical-align: bottom;\n      color: transparent;\n    }\n\n    input[type=checkbox] + label:active:before {\n      transform: scale(0);\n    }\n\n    input[type=checkbox]:checked + label:before {\n      background-color: ',";\n      border-color: ",";\n      color: #fff;\n    }\n\n    input[type=checkbox]:disabled + label:before {\n      transform: scale(1);\n      border-color: #aaa;\n    }\n\n    input[type=checkbox]:checked:disabled + label:before {\n      transform: scale(1);\n      background-color: ",";\n      border-color: ",';\n    }\n    \n    .project-description-icon{\n      width: 3%;\n      transform : translate(0,25%);\n      margin: 0 0.3%;\n    }\n\n    .project-title-icon{\n      margin-left:"10%";\n      width: 4%;\n      align: left;\n      transform : translate(0,28%);\n    }\n\n    \n\n    @media only screen and (max-width: 750px){\n      .page-section{\n        margin-top: -2rem;\n        margin-left: 0;\n        padding: 1rem 2.5rem;\n      }\n      .codes{\n      width:100%\n      margin-top:-2rem;\n      }  \n    }\n\n    @media only screen and (max-width: 475px){\n\n      .page-header-section h1{\n        padding: 0 1rem;\n        line-height: 3rem;\n        padding-top: 4rem;\n      }\n      .page-section{\n        margin-top: -2rem;\n        margin-left: 0rem;\n      }\n      table{\n        margin-left: -1.5rem;\n      }\n      .frontendTable{\n        margin-left: -2.8rem;\n      }\n      \n    }\n   \n    @media only screen and (max-width: 1024px){\n      .project-title-icon{\n        width:5.5%;\n        transform : translate(0,23%);\n      }\n      .project-description-icon{\n        width:4%;\n      }\n      \n    }\n    @media only screen and (max-width: 768px){\n      .project-title-icon{\n        width:8.5%;\n      }\n      .project-description-icon{\n        width:7%;\n      }\n      \n    }\n    @media only screen and (max-width: 425px){\n      .project-title-icon{\n        width:11%;\n        transform: translate(0,25%)\n      }\n      .project-description-icon{\n        width:8%;\n      }\n    }\n    @media only screen and (max-width: 375px){\n      .project-title-icon{\n        width:13%;\n        transform : translate(0,20%)\n      }\n      .project-description-icon{\n        width:10%;\n      }\n\n    }\n\n    .channels-list {\n      padding-left: 40px;\n    }\n\n    .channels-img {\n      width: 40px;\n      height: 30px;\n    }\n\n    .channels-para {\n      display: flex;\n      align-items: flex-end;\n    }\n\n    .newcomers-journey{\n      text-align: center;\n      display: flex;\n      align-items: center;\n      margin: 2.5rem 5rem 3rem 0rem;\n\n      @media only screen and (max-width: 992px){\n        width: 100%;\n      }\n\n    \n   h2{\n        margin-bottom: 2rem;\n      }\n    }\n\n    .heading{\n      display: flex;\n      flex-direction: column;\n      align-items: center;\n    }\n\n    .heading-start{\n      display: flex;\n      flex-direction: row;\n      align-items: center;\n      justify-content: center;\n      align-self: flex-end;\n      margin-right: 2rem;\n      margin-top: -2rem;\n      h5{\n      font-size: 1.125rem;\n      font-weight: 400;\n      margin-right: 1rem;\n      }\n      img{\n      height: 3rem;\n      width: 4rem;\n      transition: .5s;\n      }\n      img:hover{\n      padding-left: 1rem;\n      transition: .5s;\n      }\n    }\n\n  .intra-page{\n    position: sticky;\n    top: 10rem;\n    right:0rem;\n    margin-right: 1rem;\n    padding-bottom: 5rem;\n    align-items:left;\n    justify-content:space-around;\n    display: flex;\n    flex-direction: column;\n    overflow:hidden;\n    \n\n\n    \n    .active{\n      font-weight:5000;\n      color: ',";\n    }\n    \n    ul{\n      list-style: none;\n      top: 3rem;\n    }\n    li{\n      padding-bottom:0.5rem;\n      padding-top:0.5rem;\n    }\n    @media only screen and (max-width: 900px){\n      width: 0;\n      opacity:0;\n    height:0;\n      transition:none;\n      visibility:hidden;\n    }\n  }\n  \n  .learn{\n    width: 10rem;\n  }\n\n"],(function(e){return e.theme.menuColor}),(function(e){return e.theme.menuColor}),(function(e){return e.theme.black}),(function(e){return e.theme.black}),(function(e){return e.theme.tertiaryColor}),(function(e){return e.theme.secondaryLightColor}),(function(e){return e.theme.primaryLightColorTwo}),(function(e){return e.theme.secondaryLightColor}),(function(e){return e.theme.primaryLightColor}),(function(e){return e.theme.secondaryLightColorTwo}),(function(e){return e.theme.primaryLightColorTwo}),(function(e){return e.theme.primaryLightColorTwo}),(function(e){return e.theme.secondaryLightColor}),(function(e){return e.theme.secondaryLightColor}),(function(e){return e.theme.secondaryColor})))}}]);
//# sourceMappingURL=component---src-pages-community-handbook-connect-with-us-js-b3aa2453e7965080a53c.js.map