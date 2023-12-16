import{$ as A,E as s,G as L,I as o,J as i,K as P,P as p,R as a,S as _,V as f,W as g,da as C,ea as M,ga as m,j as x,m as b,n as u,v as y,y as r,z as d}from"./chunk-XA7DQXR2.js";var v=(()=>{let t=class t{constructor(e){this.http=e,this.url=""}info(){return this.http.get(this.url+"/info")}cources(){return this.http.get(this.url+"/cources")}experience(){return this.http.get(this.url+"/experience")}education(){return this.http.get(this.url+"/education")}languages(){return this.http.get(this.url+"/languages")}sendMessage(e){return this.http.post(this.url+"/message",e)}};t.\u0275fac=function(n){return new(n||t)(b(A))},t.\u0275prov=x({token:t,factory:t.\u0275fac,providedIn:"root"});let c=t;return c})();var h=()=>["active"],F=(()=>{let t=class t{constructor(e){this.api=e,this.toggleNav=!1,this.info={website_title:"",job_title:"",name:"",bio:"",aim:"",education_sum:"",specialization:"",experience_years:"",cert_numbers:"",last_name:"",about:"",mail:"",phone:"",location:"",linkedin:"",facebook:"",insta:"",whatsapp_link:"",img:""}}ngOnInit(){this.api.info().subscribe(e=>{e.forEach(n=>{this.info[n.name]=n.value})})}};t.\u0275fac=function(n){return new(n||t)(d(v))},t.\u0275cmp=u({type:t,selectors:[["app-nav"]],standalone:!0,features:[f],decls:21,vars:11,consts:[["data-aos","fade"],[1,"start"],["routerLink","/home",1,"logo"],["routerLink","/home",3,"routerLinkActive","click"],["routerLink","/about",3,"routerLinkActive","click"],["routerLink","/contact",3,"routerLinkActive","click"],["data-aos","fade","data-aos-delay","200",1,"end"],[1,"toggle",3,"click"],[1,"fa-solid","fa-bars"],[1,"talk",3,"href"],[1,"fa-brands","fa-whatsapp"]],template:function(n,l){n&1&&(o(0,"nav",0)(1,"div",1)(2,"a",2),a(3),i(),o(4,"ul")(5,"li")(6,"a",3),p("click",function(){return l.toggleNav=!1}),a(7,"Home"),i()(),o(8,"li")(9,"a",4),p("click",function(){return l.toggleNav=!1}),a(10,"About"),i()(),o(11,"li")(12,"a",5),p("click",function(){return l.toggleNav=!1}),a(13,"Contact"),i()()()(),o(14,"div",6)(15,"button",7),p("click",function(){return l.toggleNav=!l.toggleNav}),P(16,"i",8),i(),o(17,"a",9)(18,"span"),a(19,"Let's talk"),i(),P(20,"i",10),i()()()),n&2&&(r(3),_(l.info.website_title),r(1),L(l.toggleNav?"":"display-none"),r(2),s("routerLinkActive",g(8,h)),r(3),s("routerLinkActive",g(9,h)),r(3),s("routerLinkActive",g(10,h)),r(5),s("href",l.info.whatsapp_link,y))},dependencies:[m,C,M],styles:["nav[_ngcontent-%COMP%]{margin-top:20px;display:flex;justify-content:space-around;align-items:center;padding:0 50px;gap:10px}nav[_ngcontent-%COMP%]   .start[_ngcontent-%COMP%]{display:flex;justify-content:space-around;width:65%}nav[_ngcontent-%COMP%]   .start[_ngcontent-%COMP%]   .logo[_ngcontent-%COMP%]{font-family:Whisper,cursive;text-decoration:none;font-size:35px;color:var(--foundation4)}nav[_ngcontent-%COMP%]   .start[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;gap:40px;list-style:none}nav[_ngcontent-%COMP%]   .start[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{cursor:pointer}nav[_ngcontent-%COMP%]   .start[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--foundation5);text-decoration:none}nav[_ngcontent-%COMP%]   .start[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{color:var(--foundation4)}nav[_ngcontent-%COMP%]   .start[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--foundation4)}nav[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]{display:flex;align-self:flex-start;gap:10px}nav[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]   .talk[_ngcontent-%COMP%]{background-color:var(--foundation2);font-size:14px;text-decoration:none;cursor:pointer;border:none;color:var(--foundation4);padding:15px 30px;border-radius:20px}nav[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]   .talk[_ngcontent-%COMP%]:hover{background-color:var(--foundation3)}nav[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]   .talk[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{display:none}nav[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]   .toggle[_ngcontent-%COMP%]{cursor:pointer;display:none;font-size:25px;border:none;padding:10px;background-color:transparent;color:#fff}@media only screen and (max-width: 992px){nav[_ngcontent-%COMP%]{justify-content:space-between}nav[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]   .toggle[_ngcontent-%COMP%]{display:block}nav[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]   .talk[_ngcontent-%COMP%]{background:transparent;padding:10px 0;border:none}nav[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]   .talk[_ngcontent-%COMP%]:hover{background-color:transparent}nav[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]   .talk[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{display:none}nav[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]   .talk[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{display:block;font-size:25px;color:#25d366}nav[_ngcontent-%COMP%]   .end[_ngcontent-%COMP%]   .talk[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{color:var(--foundation3)}nav[_ngcontent-%COMP%]   .start[_ngcontent-%COMP%]{flex-direction:column;width:fit-content}nav[_ngcontent-%COMP%]   .start[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{flex-direction:column}nav[_ngcontent-%COMP%]   .start[_ngcontent-%COMP%]   ul.display-none[_ngcontent-%COMP%]{display:none}}"]});let c=t;return c})();var k=()=>["active"],R=(()=>{let t=class t{constructor(e){this.api=e,this.toggleNav=!1,this.info={website_title:"",job_title:"",name:"",bio:"",aim:"",education_sum:"",specialization:"",experience_years:"",cert_numbers:"",last_name:"",about:"",mail:"",phone:"",location:"",linkedin:"",facebook:"",insta:"",whatsapp_link:"",img:""}}ngOnInit(){this.api.info().subscribe(e=>{e.forEach(n=>{this.info[n.name]=n.value})})}};t.\u0275fac=function(n){return new(n||t)(d(v))},t.\u0275cmp=u({type:t,selectors:[["app-footer"]],standalone:!0,features:[f],decls:17,vars:7,consts:[["routerLink","/home",3,"routerLinkActive"],["routerLink","/about",3,"routerLinkActive"],["routerLink","/contact",3,"routerLinkActive"],[1,"rights"],["href","https://abuelkhair.info/","target","_blank"]],template:function(n,l){n&1&&(o(0,"footer")(1,"h2"),a(2),i(),o(3,"ul")(4,"li")(5,"a",0),a(6,"Home"),i()(),o(7,"li")(8,"a",1),a(9,"About"),i()(),o(10,"li")(11,"a",2),a(12,"Contact"),i()()(),o(13,"span",3),a(14,"All rights reserved by "),o(15,"a",4),a(16,"Abuelkhair"),i()()()),n&2&&(r(2),_(l.info.website_title),r(3),s("routerLinkActive",g(4,k)),r(3),s("routerLinkActive",g(5,k)),r(3),s("routerLinkActive",g(6,k)))},dependencies:[m,C,M],styles:["footer[_ngcontent-%COMP%]{display:flex;flex-direction:column;justify-content:center;align-items:center}footer[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{margin-top:0;font-family:Whisper,cursive;font-size:35px}footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]{display:flex;font-size:14px;margin:0;padding:0;gap:20px;list-style:none}footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]{cursor:pointer}footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--foundation5);text-decoration:none}footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{color:var(--foundation4)}footer[_ngcontent-%COMP%]   ul[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]:hover{color:var(--foundation4)}footer[_ngcontent-%COMP%]   .rights[_ngcontent-%COMP%]{margin-top:15px;font-size:12px;color:var(--foundation5)}footer[_ngcontent-%COMP%]   .rights[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{text-decoration:none;color:var(--foundation3)}"]});let c=t;return c})();export{v as a,F as b,R as c};