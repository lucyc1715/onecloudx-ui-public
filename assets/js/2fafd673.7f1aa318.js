"use strict";(self.webpackChunkonecloudx_ui=self.webpackChunkonecloudx_ui||[]).push([[8026],{32531:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>o,contentTitle:()=>l,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>d});const r=JSON.parse('{"id":"services/cross-platform-app","title":"\u8de8\u5e73\u53f0 APP","description":"\u6253\u9020\u517c\u5bb9 iOS \u8207 Android \u7684\u8de8\u5e73\u53f0 APP\uff0c\u8b93\u60a8\u4e00\u6b21\u958b\u767c\uff0c\u5373\u53ef\u89f8\u53ca\u5ee3\u5927\u7528\u6236\u7fa4\u9ad4\u3002","source":"@site/docs/services/cross-platform-app.md","sourceDirName":"services","slug":"/services/cross-platform-app","permalink":"/onecloudx-ui-public/docs/services/cross-platform-app","draft":false,"unlisted":false,"editUrl":"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/services/cross-platform-app.md","tags":[],"version":"current","frontMatter":{},"sidebar":"tutorialSidebar","previous":{"title":"\u61c9\u7528\u7cfb\u7d71\u5ba2\u88fd\u5316","permalink":"/onecloudx-ui-public/docs/services/customize-website-app"},"next":{"title":"\u96f2\u670d\u52d9\u4ee3\u64cd","permalink":"/onecloudx-ui-public/docs/services/cloud-implement"}}');var i=s(74848),t=s(28453);const c={},l="\u8de8\u5e73\u53f0 APP",o={},d=[{value:"<strong>\u670d\u52d9\u985e\u578b</strong>",id:"\u670d\u52d9\u985e\u578b",level:3},{value:"<strong>Native \u61c9\u7528\u7a0b\u5f0f</strong>",id:"native-\u61c9\u7528\u7a0b\u5f0f",level:4},{value:"<strong>PWA\uff08\u9032\u968e\u7db2\u9801\u61c9\u7528\u7a0b\u5f0f\uff09</strong>",id:"pwa\u9032\u968e\u7db2\u9801\u61c9\u7528\u7a0b\u5f0f",level:4}];function a(e){const n={a:"a",h1:"h1",h3:"h3",h4:"h4",header:"header",hr:"hr",li:"li",p:"p",strong:"strong",ul:"ul",...(0,t.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.header,{children:(0,i.jsx)(n.h1,{id:"\u8de8\u5e73\u53f0-app",children:"\u8de8\u5e73\u53f0 APP"})}),"\n",(0,i.jsxs)(n.p,{children:["\u6253\u9020",(0,i.jsx)(n.strong,{children:"\u517c\u5bb9 iOS \u8207 Android"})," \u7684\u8de8\u5e73\u53f0 APP\uff0c\u8b93\u60a8\u4e00\u6b21\u958b\u767c\uff0c\u5373\u53ef\u89f8\u53ca\u5ee3\u5927\u7528\u6236\u7fa4\u9ad4\u3002"]}),"\n",(0,i.jsx)(n.p,{children:"\u5f9e\u8a2d\u8a08\u3001\u958b\u767c\u5230\u6e2c\u8a66\uff0c\u6211\u5011\u63d0\u4f9b\u9ad8\u6548\u7a69\u5b9a\u7684\u89e3\u6c7a\u65b9\u6848\uff0c\u6eff\u8db3\u591a\u6a23\u5316\u7684\u61c9\u7528\u9700\u6c42\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u6bcf\u4e00\u6b3e APP \u90fd\u662f\u70ba\u60a8\u7684\u54c1\u724c\u91cf\u8eab\u5b9a\u5236\uff0c\u529b\u6c42\u5448\u73fe\u5353\u8d8a\u7684\u4f7f\u7528\u9ad4\u9a57\u8207\u50f9\u503c\u3002"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"\u670d\u52d9\u985e\u578b",children:(0,i.jsx)(n.strong,{children:"\u670d\u52d9\u985e\u578b"})}),"\n",(0,i.jsx)(n.h4,{id:"native-\u61c9\u7528\u7a0b\u5f0f",children:(0,i.jsx)(n.strong,{children:"Native \u61c9\u7528\u7a0b\u5f0f"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u7279\u9ede"}),"\uff1a\u63d0\u4f9b\u6d41\u66a2\u3001\u539f\u751f\u7684\u64cd\u4f5c\u9ad4\u9a57\uff0c\u5168\u9762\u767c\u63ee\u624b\u6a5f\u786c\u9ad4\u6027\u80fd\uff0c\u9069\u7528\u65bc\u9ad8\u4e92\u52d5\u6027\u8207\u8907\u96dc\u529f\u80fd\u7684\u61c9\u7528\u7a0b\u5f0f\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u512a\u52e2"}),"\uff1a\u6027\u80fd\u5353\u8d8a\u3001\u4f7f\u7528\u8005\u9ad4\u9a57\u7d30\u81a9\uff0c\u4e26\u53ef\u5b8c\u6574\u6574\u5408\u624b\u6a5f\u529f\u80fd\uff08\u5982\u76f8\u6a5f\u3001GPS\u3001\u6307\u7d0b\u8fa8\u8b58\uff09\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.h4,{id:"pwa\u9032\u968e\u7db2\u9801\u61c9\u7528\u7a0b\u5f0f",children:(0,i.jsx)(n.strong,{children:"PWA\uff08\u9032\u968e\u7db2\u9801\u61c9\u7528\u7a0b\u5f0f\uff09"})}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u7279\u9ede"}),"\uff1a\u900f\u904e Web View \u6280\u8853\uff0c\u517c\u5177\u7db2\u9801\u8207 APP \u7684\u7279\u6027\uff0c\u652f\u63f4\u591a\u88dd\u7f6e\u4e14\u7121\u9700\u900f\u904e\u61c9\u7528\u5546\u5e97\u4e0b\u8f09\u3002"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"\u512a\u52e2"}),"\uff1a\u958b\u767c\u6210\u672c\u76f8\u5c0d\u8f03\u4f4e\u3001\u66f4\u65b0\u65b9\u4fbf\u3001\u8de8\u5e73\u53f0\u652f\u63f4\u6027\u4f73\uff0c\u7279\u5225\u9069\u5408\u5c0f\u578b\u4f01\u696d\u8207\u521d\u5275\u5718\u968a\u3002"]}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsxs)(n.p,{children:["\ud83c\udf1f ",(0,i.jsx)(n.strong,{children:"\u7acb\u5373\u8207\u6211\u5011\u5408\u4f5c\uff0c\u958b\u555f\u6578\u4f4d\u5347\u7d1a\u7684\u65b0\u7bc7\u7ae0\uff01"})]}),"\n",(0,i.jsx)(n.p,{children:"\u7121\u8ad6\u60a8\u9700\u8981\u6253\u9020\u7cbe\u7dfb\u7684 Native APP\uff0c\u9084\u662f\u9748\u6d3b\u9ad8\u6548\u7684 PWA\u3002"}),"\n",(0,i.jsx)(n.p,{children:"\u6211\u5011\u90fd\u80fd\u63d0\u4f9b\u5c08\u696d\u5efa\u8b70\u8207\u5f48\u6027\u65b9\u6848\uff0c\u5e6b\u52a9\u60a8\u5feb\u901f\u9032\u5165\u5e02\u5834\uff0c\u6436\u5360\u6578\u4f4d\u5148\u6a5f\u3002"}),"\n",(0,i.jsxs)(n.p,{children:["\ud83d\udce9 ",(0,i.jsx)(n.strong,{children:"\u806f\u7d61\u65b9\u5f0f"}),"\uff1a"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["\u96fb\u5b50\u90f5\u4ef6\uff1a",(0,i.jsx)(n.a,{href:"mailto:lucychen.biz@gmail.com",children:"lucychen.biz@gmail.com"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["\ud83d\udc49 ",(0,i.jsx)(n.strong,{children:"\u73fe\u5728\u5c31\u806f\u7e6b\u6211\u5011\uff0c\u8b93\u6280\u8853\u70ba\u60a8\u7684\u9858\u666f\u52a9\u529b\uff01"})]})]})}function h(e={}){const{wrapper:n}={...(0,t.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},28453:(e,n,s)=>{s.d(n,{R:()=>c,x:()=>l});var r=s(96540);const i={},t=r.createContext(i);function c(e){const n=r.useContext(t);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),r.createElement(t.Provider,{value:n},e.children)}}}]);