import{a as f,b as u,c as x}from"./chunk-PW2P4VZS.js";import{E as s,I as e,J as t,K as a,R as n,S as l,T as p,V as M,da as O,ga as P,n as m,v as d,y as i,z as C}from"./chunk-XA7DQXR2.js";var S=(()=>{let c=class c{constructor(g){this.api=g,this.info={website_title:"",job_title:"",name:"",bio:"",aim:"",education_sum:"",specialization:"",experience_years:"",cert_numbers:"",last_name:"",about:"",mail:"",phone:"",location:"",linkedin:"",facebook:"",insta:"",whatsapp_link:"",img:""}}ngOnInit(){this.api.info().subscribe(g=>{g.forEach(r=>{this.info[r.name]=r.value})})}};c.\u0275fac=function(r){return new(r||c)(C(f))},c.\u0275cmp=m({type:c,selectors:[["app-home"]],standalone:!0,features:[M],decls:52,vars:12,consts:[[1,"grid"],["data-aos","fade-right",1,"title"],["alt","",3,"src"],["routerLink","/about",1,"fa-regular","fa-circle-right"],["data-aos","fade-left","data-aos-delay","100",1,"aim"],["data-aos","fade-left","data-aos-delay","100",1,"social"],["target","_blank",3,"href"],[1,"fa-brands","fa-linkedin-in"],[1,"fa-brands","fa-facebook-f"],[1,"fa-brands","fa-instagram"],["data-aos","fade-up-right","data-aos-delay","400",1,"skills"],["data-aos","fade-up-right","data-aos-delay","300",1,"education"],["data-aos","fade-up","data-aos-delay","600",1,"let"],["routerLink","/contact",1,"fa-regular","fa-circle-right"],["data-aos","fade-up","data-aos-delay","500",1,"experience"],["data-aos","fade-up","data-aos-delay","600",1,"cources"]],template:function(r,o){r&1&&(a(0,"app-nav"),e(1,"section",0)(2,"article",1),a(3,"img",2),e(4,"div")(5,"h1"),n(6),t(),e(7,"h2"),n(8),t(),e(9,"h3"),n(10),t()(),a(11,"i",3),t(),e(12,"article",4)(13,"h2"),n(14),t()(),e(15,"article",5)(16,"a",6),a(17,"i",7),t(),e(18,"a",6),a(19,"i",8),t(),e(20,"a",6),a(21,"i",9),t()(),e(22,"article",10)(23,"h2"),n(24,"Specialization"),t(),e(25,"p"),n(26),t()(),e(27,"article",11)(28,"h2"),n(29,"Education"),t(),e(30,"p"),n(31),t()(),e(32,"article",12)(33,"p"),n(34," Let's "),a(35,"br"),n(36," work "),e(37,"span"),n(38,"together"),t(),n(39,". "),t(),a(40,"i",13),t(),e(41,"article",14)(42,"h2"),n(43),t(),e(44,"p"),n(45,"Years Experience"),t()(),e(46,"article",15)(47,"h2"),n(48),t(),e(49,"p"),n(50,"Trainings and certificates"),t()()(),a(51,"app-footer")),r&2&&(i(3),s("src",o.info.img,d),i(3),l(o.info.job_title),i(2),l(o.info.name),i(2),l(o.info.bio),i(4),p(" ",o.info.aim," "),i(2),s("href",o.info.linkedin,d),i(2),s("href",o.info.facebook,d),i(2),s("href",o.info.insta,d),i(6),p(" ",o.info.specialization," "),i(5),p(" ",o.info.education_sum," "),i(12),l(o.info.experience_years),i(5),l(o.info.cert_numbers))},dependencies:[u,x,P,O],styles:['.grid[_ngcontent-%COMP%]{padding:80px 18%;display:grid;grid-template-columns:1fr 1fr 1fr 1fr 1fr;grid-template-areas:"title title title aim aim" "title title title social social" "education education skills skills skills" "experience let let let cources";gap:20px}.grid[_ngcontent-%COMP%]   article[_ngcontent-%COMP%]{padding:15px;border-radius:20px;background:linear-gradient(90deg,#202020 0%,#151515 100%);outline:solid .5px rgba(255,255,255,.137);display:flex;align-items:center}.grid[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{display:flex;gap:15px;grid-area:title;justify-content:space-around}.grid[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:40%;max-width:300px;object-fit:cover;object-position:30% 0%;border-radius:20px 0}.grid[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h1[_ngcontent-%COMP%], .grid[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h3[_ngcontent-%COMP%]{font-size:14px;color:var(--foundation5)}.grid[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:22px}.grid[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{align-self:flex-end;font-size:25px;cursor:pointer}.grid[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{color:var(--foundation3)}.grid[_ngcontent-%COMP%]   .aim[_ngcontent-%COMP%]{grid-area:aim;font-size:8px;text-align:center;justify-content:center}.grid[_ngcontent-%COMP%]   .skills[_ngcontent-%COMP%]{grid-area:skills;line-height:25px;flex-direction:column}.grid[_ngcontent-%COMP%]   .skills[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px;align-self:flex-start;margin-bottom:0}.grid[_ngcontent-%COMP%]   .skills[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--foundation5)}.grid[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]{grid-area:social;display:flex;justify-content:space-around;padding:30px}.grid[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{color:var(--foundation4)}.grid[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{font-size:35px;cursor:pointer;padding:14px 20px;border-radius:50%}.grid[_ngcontent-%COMP%]   .social[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{color:var(--foundation3)}.grid[_ngcontent-%COMP%]   .education[_ngcontent-%COMP%], .grid[_ngcontent-%COMP%]   .work[_ngcontent-%COMP%]{grid-area:education;flex-direction:column}.grid[_ngcontent-%COMP%]   .education[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .grid[_ngcontent-%COMP%]   .work[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:20px;align-self:flex-start;margin-bottom:0}.grid[_ngcontent-%COMP%]   .education[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .grid[_ngcontent-%COMP%]   .work[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{color:var(--foundation5)}.grid[_ngcontent-%COMP%]   .work[_ngcontent-%COMP%]{grid-area:work;display:none}.grid[_ngcontent-%COMP%]   .experience[_ngcontent-%COMP%]{grid-area:experience}.grid[_ngcontent-%COMP%]   .cources[_ngcontent-%COMP%]{grid-area:cources}.grid[_ngcontent-%COMP%]   .experience[_ngcontent-%COMP%], .grid[_ngcontent-%COMP%]   .cources[_ngcontent-%COMP%]{flex-direction:column}.grid[_ngcontent-%COMP%]   .experience[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%], .grid[_ngcontent-%COMP%]   .cources[_ngcontent-%COMP%]   h2[_ngcontent-%COMP%]{font-size:35px;margin-bottom:0}.grid[_ngcontent-%COMP%]   .experience[_ngcontent-%COMP%]   p[_ngcontent-%COMP%], .grid[_ngcontent-%COMP%]   .cources[_ngcontent-%COMP%]   p[_ngcontent-%COMP%]{text-align:center;color:var(--foundation5)}.grid[_ngcontent-%COMP%]   .let[_ngcontent-%COMP%]{padding-left:35px;grid-area:let;font-size:35px;letter-spacing:8px;justify-content:space-around}.grid[_ngcontent-%COMP%]   .let[_ngcontent-%COMP%]   span[_ngcontent-%COMP%]{color:var(--foundation3)}.grid[_ngcontent-%COMP%]   .let[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{cursor:pointer}.grid[_ngcontent-%COMP%]   .let[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]:hover{color:var(--foundation3)}@media only screen and (max-width: 1200px){.grid[_ngcontent-%COMP%]{padding:80px 5%;grid-template-columns:1fr 1fr;grid-template-areas:"title title" "aim aim" "social social" "education education" "skills skills" "experience cources" "let let";gap:20px}}@media only screen and (max-width: 600px){.grid[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]{flex-direction:column}.grid[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   img[_ngcontent-%COMP%]{width:250px}.grid[_ngcontent-%COMP%]   .title[_ngcontent-%COMP%]   div[_ngcontent-%COMP%]{text-align:center}.grid[_ngcontent-%COMP%]   .let[_ngcontent-%COMP%]{flex-direction:column}.grid[_ngcontent-%COMP%]   .let[_ngcontent-%COMP%]   i[_ngcontent-%COMP%]{align-self:flex-end}}']});let _=c;return _})();export{S as HomeComponent};
