(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[311],{4777:function(e,t,s){(window.__NEXT_P=window.__NEXT_P||[]).push(["/blog/[year]/[month]/[day]/[slug]",function(){return s(2580)}])},4132:function(e,t,s){"use strict";s.d(t,{m:function(){return r}});var _=s(5893),o=s(512),i=s(9849),a=s.n(i);let r=e=>{let{name:t,title:s,image:i,bio:r,social:n=[],className:l,size:c=120,small:m=!1}=e;return(0,_.jsxs)("aside",{className:(0,o.Z)(a().bio,m&&a()["bio--small"],l),children:[(0,_.jsx)("img",{src:i,alt:"Avatar",width:c,height:c,className:a().bio__image}),(0,_.jsxs)("div",{className:(0,o.Z)(a().bio__content),children:[(0,_.jsxs)("header",{className:a().bio__header,children:[(0,_.jsx)("h2",{className:a().bio__title,children:t}),(0,_.jsx)("h3",{className:a().bio__subtitle,children:s})]}),(0,_.jsx)("div",{className:"typography",children:r}),n&&(0,_.jsx)("ul",{className:a().bio__social,children:n.map(e=>(0,_.jsx)("li",{className:a().bio__social_link,children:e.network},e.network))})]})]})}},9138:function(e,t,s){"use strict";s.d(t,{m:function(){return c}});var _=s(5893),o=s(1664),i=s.n(o),a=s(795),r=s.n(a);let n=e=>{let{author:t}=e;return(0,_.jsxs)(_.Fragment,{children:["by"," ",(0,_.jsx)("span",{itemProp:"author",itemScope:!0,itemType:"http://schema.org/Person",children:(0,_.jsx)("span",{itemProp:"name",children:t})})]})},l=e=>{let{post:t}=e;return(0,_.jsxs)("footer",{className:r().post__meta,children:["Posted on"," ",(0,_.jsx)("time",{dateTime:t.date,itemProp:"datePublished",children:t.date})," ",t.person&&t.author?(0,_.jsx)(n,{author:"".concat(t.person.name,", ").concat(t.person.title)}):(0,_.jsx)(n,{author:t.author})]})},c=e=>{let{post:t,as:s="h2"}=e;return(0,_.jsxs)("header",{className:r().post__header,children:[(0,_.jsxs)("div",{children:[(0,_.jsx)(s,{className:r().post__title,children:(0,_.jsx)(i(),{href:t.href,passHref:!0,children:t.title})}),(0,_.jsx)(l,{post:t})]}),t.image&&(0,_.jsxs)(_.Fragment,{children:[(0,_.jsx)("div",{className:r()["post__image-wrapper"],children:(0,_.jsx)("img",{src:t.image,alt:t.title,className:r().post__image,"data-action":"zoom"})}),t.credit&&(0,_.jsxs)("small",{className:r()["post__photo-credit"],children:["Image by ",t.credit]})]})]})}},2580:function(e,t,s){"use strict";s.r(t),s.d(t,{PostPage:function(){return u},__N_SSG:function(){return b},default:function(){return g}});var _=s(5893),o=s(512),i=s(4132),a=s(795),r=s.n(a),n=s(9138);let l=e=>{var t;let{post:s}=e;return(0,_.jsx)("div",{className:(0,o.Z)(r()["post-wrapper"],r()["post-wrapper--single"]),children:(0,_.jsxs)("article",{className:(0,o.Z)(r().post),itemType:"http://schema.org/BlogPosting",children:[(0,_.jsx)(n.m,{as:"h1",post:s}),(0,_.jsx)("div",{className:r().post__content,dangerouslySetInnerHTML:{__html:null!==(t=s.contentHtml)&&void 0!==t?t:""}}),s.person&&(0,_.jsxs)("div",{className:"stack",children:[(0,_.jsx)("hr",{className:"divider"}),(0,_.jsx)(i.m,{small:!0,name:s.person.name,bio:s.person.bio_short,title:s.person.title,image:s.person.image,size:60})]})]})})};var c=s(5301),m=s(9886),p=s(2186),d=s(9008),h=s.n(d),b=!0;let u=e=>{var t;let{postData:s,cta:o}=e;return(0,_.jsxs)(_.Fragment,{children:[(0,_.jsxs)(h(),{children:[(0,_.jsx)("title",{children:(0,p.n)(s.title?"Apsis Blog: ".concat(s.title):"Blog")}),(0,_.jsx)(c.V,{title:s.title?"Blog: ".concat(s.title):"Blog",description:null!==(t=s.excerpt)&&void 0!==t?t:"A blog post from Apsis Labs, an agency dedicated to building secure, scalable web and mobile applications."})]}),(0,_.jsx)(m.I,{contained:!0,cta:o,children:(0,_.jsx)(l,{post:s})})]})};var g=u},9849:function(e){e.exports={bio:"TeamMember_bio__Y5I_b","bio--small":"TeamMember_bio--small__yU2KA",bio__title:"TeamMember_bio__title__GN4dr",bio__subtitle:"TeamMember_bio__subtitle__tNr_z",bio__image:"TeamMember_bio__image__JrzJn",bio__header:"TeamMember_bio__header__i2syF",bio__content:"TeamMember_bio__content__x_RYN",bio__social:"TeamMember_bio__social___oEgL",bio__social_link:"TeamMember_bio__social_link__oIAzy"}},795:function(e){e.exports={"text-primary":"Post_text-primary__kt_VD","text-accent":"Post_text-accent__hqp2f","text-muted":"Post_text-muted__5_JFW",link:"Post_link__jDItc",typography:"Post_typography__25gYC",post__header:"Post_post__header__pEZ4C",post__content:"Post_post__content__SHRW1",inline_list:"Post_inline_list__dFP1w",divider:"Post_divider__aygdO",stack:"Post_stack__rOubu","gap-md":"Post_gap-md__KkkX3","gap-lg":"Post_gap-lg__8MaHJ","gap-sm":"Post_gap-sm__CimNn",lead:"Post_lead__BDHWO","post-wrapper":"Post_post-wrapper__s850H",post:"Post_post__m_Xor",post__title:"Post_post__title__eUeKR","post__image-wrapper":"Post_post__image-wrapper__mjNlP","zoom-overlay-open":"Post_zoom-overlay-open__ILE8w",post__image:"Post_post__image__Dbjks","post__photo-credit":"Post_post__photo-credit__XuOL7",post__meta:"Post_post__meta__j55Gy"}}},function(e){e.O(0,[975,439,888,774,179],function(){return e(e.s=4777)}),_N_E=e.O()}]);