"use strict";(self.webpackChunkonecloudx_ui=self.webpackChunkonecloudx_ui||[]).push([[4813],{47713:(e,t,a)=>{a.d(t,{A:()=>r});a(96540);var n=a(21312),s=a(39022),i=a(74848);function r(e){const{metadata:t}=e,{previousPage:a,nextPage:r}=t;return(0,i.jsxs)("nav",{className:"pagination-nav","aria-label":(0,n.translate)({id:"theme.blog.paginator.navAriaLabel",message:"Blog list page navigation",description:"The ARIA label for the blog pagination"}),children:[a&&(0,i.jsx)(s.A,{permalink:a,title:(0,i.jsx)(n.default,{id:"theme.blog.paginator.newerEntries",description:"The label used to navigate to the newer blog posts page (previous page)",children:"Newer entries"})}),r&&(0,i.jsx)(s.A,{permalink:r,title:(0,i.jsx)(n.default,{id:"theme.blog.paginator.olderEntries",description:"The label used to navigate to the older blog posts page (next page)",children:"Older entries"}),isNext:!0})]})}},82907:(e,t,a)=>{a.d(t,{A:()=>B});a(96540);var n=a(34164),s=a(44096),i=a(74848);function r(e){let{children:t,className:a}=e;return(0,i.jsx)("article",{className:a,children:t})}var l=a(28774);const o={title:"title_f1Hy"};function c(e){let{className:t}=e;const{metadata:a,isBlogPostPage:r}=(0,s.e7)(),{permalink:c,title:d}=a,u=r?"h1":"h2";return(0,i.jsx)(u,{className:(0,n.A)(o.title,t),children:r?d:(0,i.jsx)(l.default,{to:c,children:d})})}var d=a(21312),u=a(53465),g=a(36266);const h={container:"container_mt6G"};function m(e){let{readingTime:t}=e;const a=function(){const{selectMessage:e}=(0,u.W)();return t=>{const a=Math.ceil(t);return e(a,(0,d.translate)({id:"theme.blog.post.readingTime.plurals",description:'Pluralized label for "{readingTime} min read". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One min read|{readingTime} min read"},{readingTime:a}))}}();return(0,i.jsx)(i.Fragment,{children:a(t)})}function p(e){let{date:t,formattedDate:a}=e;return(0,i.jsx)("time",{dateTime:t,children:a})}function x(){return(0,i.jsx)(i.Fragment,{children:" \xb7 "})}function f(e){let{className:t}=e;const{metadata:a}=(0,s.e7)(),{date:r,readingTime:l}=a,o=(0,g.i)({day:"numeric",month:"long",year:"numeric",timeZone:"UTC"});return(0,i.jsxs)("div",{className:(0,n.A)(h.container,"margin-vert--md",t),children:[(0,i.jsx)(p,{date:r,formattedDate:(c=r,o.format(new Date(c)))}),void 0!==l&&(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(x,{}),(0,i.jsx)(m,{readingTime:l})]})]});var c}var j=a(56913);const b={authorCol:"authorCol_Hf19",imageOnlyAuthorRow:"imageOnlyAuthorRow_pa_O",imageOnlyAuthorCol:"imageOnlyAuthorCol_G86a"};function A(e){let{className:t}=e;const{metadata:{authors:a},assets:r}=(0,s.e7)();if(0===a.length)return null;const l=a.every((e=>{let{name:t}=e;return!t})),o=1===a.length;return(0,i.jsx)("div",{className:(0,n.A)("margin-top--md margin-bottom--sm",l?b.imageOnlyAuthorRow:"row",t),children:a.map(((e,t)=>(0,i.jsx)("div",{className:(0,n.A)(!l&&(o?"col col--12":"col col--6"),l?b.imageOnlyAuthorCol:b.authorCol),children:(0,i.jsx)(j.A,{author:{...e,imageURL:r.authorsImageUrls[t]??e.imageURL}})},t)))})}function v(){return(0,i.jsxs)("header",{children:[(0,i.jsx)(c,{}),(0,i.jsx)(f,{}),(0,i.jsx)(A,{})]})}var T=a(70440),N=a(72857);function w(e){let{children:t,className:a}=e;const{isBlogPostPage:r}=(0,s.e7)();return(0,i.jsx)("div",{id:r?T.LU:void 0,className:(0,n.A)("markdown",a),children:(0,i.jsx)(N.A,{children:t})})}var _=a(17559),y=a(4336),k=a(62053);function P(){return(0,i.jsx)("b",{children:(0,i.jsx)(d.default,{id:"theme.blog.post.readMore",description:"The label used in blog post item excerpts to link to full blog posts",children:"Read more"})})}function R(e){const{blogPostTitle:t,...a}=e;return(0,i.jsx)(l.default,{"aria-label":(0,d.translate)({message:"Read more about {title}",id:"theme.blog.post.readMoreLabel",description:"The ARIA label for the link to full blog posts from excerpts"},{title:t}),...a,children:(0,i.jsx)(P,{})})}function U(){const{metadata:e,isBlogPostPage:t}=(0,s.e7)(),{tags:a,title:r,editUrl:l,hasTruncateMarker:o,lastUpdatedBy:c,lastUpdatedAt:d}=e,u=!t&&o,g=a.length>0;if(!(g||u||l))return null;if(t){const e=!!(l||d||c);return(0,i.jsxs)("footer",{className:"docusaurus-mt-lg",children:[g&&(0,i.jsx)("div",{className:(0,n.A)("row","margin-top--sm",_.G.blog.blogFooterEditMetaRow),children:(0,i.jsx)("div",{className:"col",children:(0,i.jsx)(k.A,{tags:a})})}),e&&(0,i.jsx)(y.A,{className:(0,n.A)("margin-top--sm",_.G.blog.blogFooterEditMetaRow),editUrl:l,lastUpdatedAt:d,lastUpdatedBy:c})]})}return(0,i.jsxs)("footer",{className:"row docusaurus-mt-lg",children:[g&&(0,i.jsx)("div",{className:(0,n.A)("col",{"col--9":u}),children:(0,i.jsx)(k.A,{tags:a})}),u&&(0,i.jsx)("div",{className:(0,n.A)("col text--right",{"col--3":g}),children:(0,i.jsx)(R,{blogPostTitle:r,to:e.permalink})})]})}function B(e){let{children:t,className:a}=e;const l=function(){const{isBlogPostPage:e}=(0,s.e7)();return e?void 0:"margin-bottom--xl"}();return(0,i.jsxs)(r,{className:(0,n.A)(l,a),children:[(0,i.jsx)(v,{}),(0,i.jsx)(w,{children:t}),(0,i.jsx)(U,{})]})}},33892:(e,t,a)=>{a.d(t,{A:()=>r});a(96540);var n=a(44096),s=a(82907),i=a(74848);function r(e){let{items:t,component:a=s.A}=e;return(0,i.jsx)(i.Fragment,{children:t.map((e=>{let{content:t}=e;return(0,i.jsx)(n.in,{content:t,children:(0,i.jsx)(a,{children:(0,i.jsx)(t,{})})},t.metadata.permalink)}))})}},33069:(e,t,a)=>{a.r(t),a.d(t,{default:()=>j});a(96540);var n=a(34164),s=a(21312),i=a(45500),r=a(17559),l=a(96461),o=a(28774),c=a(28027),d=a(47713),u=a(41463),g=a(33892),h=a(32234),m=a(51107),p=a(74848);function x(e){let{tag:t}=e;const a=(0,l.ZD)(t);return(0,p.jsxs)(p.Fragment,{children:[(0,p.jsx)(i.be,{title:a,description:t.description}),(0,p.jsx)(u.A,{tag:"blog_tags_posts"})]})}function f(e){let{tag:t,items:a,sidebar:n,listMetadata:i}=e;const r=(0,l.ZD)(t);return(0,p.jsxs)(c.A,{sidebar:n,children:[t.unlisted&&(0,p.jsx)(h.A,{}),(0,p.jsxs)("header",{className:"margin-bottom--xl",children:[(0,p.jsx)(m.A,{as:"h1",children:r}),t.description&&(0,p.jsx)("p",{children:t.description}),(0,p.jsx)(o.default,{href:t.allTagsPath,children:(0,p.jsx)(s.default,{id:"theme.tags.tagsPageLink",description:"The label of the link targeting the tag list page",children:"View All Tags"})})]}),(0,p.jsx)(g.A,{items:a}),(0,p.jsx)(d.A,{metadata:i})]})}function j(e){return(0,p.jsxs)(i.e3,{className:(0,n.A)(r.G.wrapper.blogPages,r.G.page.blogTagPostListPage),children:[(0,p.jsx)(x,{...e}),(0,p.jsx)(f,{...e})]})}},32234:(e,t,a)=>{a.d(t,{A:()=>c});a(96540);var n=a(34164),s=a(44084),i=a(17559),r=a(13472),l=a(74848);function o(e){let{className:t}=e;return(0,l.jsx)(r.A,{type:"caution",title:(0,l.jsx)(s.Rc,{}),className:(0,n.A)(t,i.G.common.unlistedBanner),children:(0,l.jsx)(s.Uh,{})})}function c(e){return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(s.AE,{}),(0,l.jsx)(o,{...e})]})}},39022:(e,t,a)=>{a.d(t,{A:()=>r});a(96540);var n=a(34164),s=a(28774),i=a(74848);function r(e){const{permalink:t,title:a,subLabel:r,isNext:l}=e;return(0,i.jsxs)(s.default,{className:(0,n.A)("pagination-nav__link",l?"pagination-nav__link--next":"pagination-nav__link--prev"),to:t,children:[r&&(0,i.jsx)("div",{className:"pagination-nav__sublabel",children:r}),(0,i.jsx)("div",{className:"pagination-nav__label",children:a})]})}},56133:(e,t,a)=>{a.d(t,{A:()=>l});a(96540);var n=a(34164),s=a(28774);const i={tag:"tag_zVej",tagRegular:"tagRegular_sFm0",tagWithCount:"tagWithCount_h2kH"};var r=a(74848);function l(e){let{permalink:t,label:a,count:l,description:o}=e;return(0,r.jsxs)(s.default,{href:t,title:o,className:(0,n.A)(i.tag,l?i.tagWithCount:i.tagRegular),children:[a,l&&(0,r.jsx)("span",{children:l})]})}},62053:(e,t,a)=>{a.d(t,{A:()=>o});a(96540);var n=a(34164),s=a(21312),i=a(56133);const r={tags:"tags_jXut",tag:"tag_QGVx"};var l=a(74848);function o(e){let{tags:t}=e;return(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("b",{children:(0,l.jsx)(s.default,{id:"theme.tags.tagsListLabel",description:"The label alongside a tag list",children:"Tags:"})}),(0,l.jsx)("ul",{className:(0,n.A)(r.tags,"padding--none","margin-left--sm"),children:t.map((e=>(0,l.jsx)("li",{className:r.tag,children:(0,l.jsx)(i.A,{...e})},e.permalink)))})]})}},96461:(e,t,a)=>{a.d(t,{Y4:()=>u,ZD:()=>l,np:()=>d,uz:()=>c,wI:()=>o});a(96540);var n=a(21312),s=a(53465),i=a(74848);function r(){const{selectMessage:e}=(0,s.W)();return t=>e(t,(0,n.translate)({id:"theme.blog.post.plurals",description:'Pluralized label for "{count} posts". Use as much plural forms (separated by "|") as your language support (see https://www.unicode.org/cldr/cldr-aux/charts/34/supplemental/language_plural_rules.html)',message:"One post|{count} posts"},{count:t}))}function l(e){const t=r();return(0,n.translate)({id:"theme.blog.tagTitle",description:"The title of the page for a blog tag",message:'{nPosts} tagged with "{tagName}"'},{nPosts:t(e.count),tagName:e.label})}function o(e){const t=r();return(0,n.translate)({id:"theme.blog.author.pageTitle",description:"The title of the page for a blog author",message:"{authorName} - {nPosts}"},{nPosts:t(e.count),authorName:e.name||e.key})}const c=()=>(0,n.translate)({id:"theme.blog.authorsList.pageTitle",message:"Authors",description:"The title of the authors page"});function d(){return(0,i.jsx)(n.default,{id:"theme.blog.authorsList.viewAll",description:"The label of the link targeting the blog authors page",children:"View all authors"})}function u(){return(0,i.jsx)(n.default,{id:"theme.blog.author.noPosts",description:"The text for authors with 0 blog post",children:"This author has not written any posts yet."})}},44084:(e,t,a)=>{a.d(t,{AE:()=>o,Rc:()=>r,TT:()=>d,Uh:()=>l,Yh:()=>c});a(96540);var n=a(21312),s=a(5260),i=a(74848);function r(){return(0,i.jsx)(n.default,{id:"theme.contentVisibility.unlistedBanner.title",description:"The unlisted content banner title",children:"Unlisted page"})}function l(){return(0,i.jsx)(n.default,{id:"theme.contentVisibility.unlistedBanner.message",description:"The unlisted content banner message",children:"This page is unlisted. Search engines will not index it, and only users having a direct link can access it."})}function o(){return(0,i.jsx)(s.A,{children:(0,i.jsx)("meta",{name:"robots",content:"noindex, nofollow"})})}function c(){return(0,i.jsx)(n.default,{id:"theme.contentVisibility.draftBanner.title",description:"The draft content banner title",children:"Draft page"})}function d(){return(0,i.jsx)(n.default,{id:"theme.contentVisibility.draftBanner.message",description:"The draft content banner message",children:"This page is a draft. It will only be visible in dev and be excluded from the production build."})}}}]);