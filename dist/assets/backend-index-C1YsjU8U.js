import{v as e,h as l}from"./vendor-DvyKuS15.js";const r={class:"main-right"},d={class:"card card-me"},m={class:"card card-me"},u=e.defineComponent({name:"BackendMenu",__name:"backend-menu",setup(o){return(c,t)=>{const n=e.resolveComponent("router-link");return e.openBlock(),e.createElementBlock("div",r,[e.createElementVNode("div",d,[e.createVNode(n,{to:"/backend/admin/list","active-class":"active",class:"side-entry"},{default:e.withCtx(()=>t[0]||(t[0]=[e.createElementVNode("i",{class:"icon icon-arrow-right"},null,-1),e.createElementVNode("i",{class:"icon icon-menu-articles"},null,-1),e.createTextVNode("管理帐号 ")])),_:1}),e.createVNode(n,{to:"/backend/user/list","active-class":"active",class:"side-entry"},{default:e.withCtx(()=>t[1]||(t[1]=[e.createElementVNode("i",{class:"icon icon-arrow-right"},null,-1),e.createElementVNode("i",{class:"icon icon-menu-articles"},null,-1),e.createTextVNode("用户列表 ")])),_:1})]),e.createElementVNode("div",m,[e.createVNode(n,{to:"/backend/category/insert","active-class":"active",class:"side-entry"},{default:e.withCtx(()=>t[2]||(t[2]=[e.createElementVNode("i",{class:"icon icon-arrow-right"},null,-1),e.createElementVNode("i",{class:"icon icon-menu-articles"},null,-1),e.createTextVNode("添加分类 ")])),_:1}),e.createVNode(n,{to:"/backend/category/list","active-class":"active",class:"side-entry"},{default:e.withCtx(()=>t[3]||(t[3]=[e.createElementVNode("i",{class:"icon icon-arrow-right"},null,-1),e.createElementVNode("i",{class:"icon icon-menu-articles"},null,-1),e.createTextVNode("管理分类 ")])),_:1}),e.createVNode(n,{to:"/backend/article/insert","active-class":"active",class:"side-entry"},{default:e.withCtx(()=>t[4]||(t[4]=[e.createElementVNode("i",{class:"icon icon-arrow-right"},null,-1),e.createElementVNode("i",{class:"icon icon-menu-articles"},null,-1),e.createTextVNode("发布文章 ")])),_:1}),e.createVNode(n,{to:"/backend/article/list","active-class":"active",class:"side-entry"},{default:e.withCtx(()=>t[5]||(t[5]=[e.createElementVNode("i",{class:"icon icon-arrow-right"},null,-1),e.createElementVNode("i",{class:"icon icon-menu-articles"},null,-1),e.createTextVNode("管理文章 ")])),_:1})])])}}}),_={class:"wrap main"},p={class:"main-left"},N={class:"cards-wrap home-feeds"},x=e.defineComponent({name:"BackendIndex",__name:"backend-index",setup(o){const c=l(),t=e.computed(()=>c.path.replace(/\//g,"_")),n=e.computed(()=>["/backend/login","/backend/login/"].includes(c.path));return(V,k)=>{const a=e.resolveComponent("router-view"),s=u;return e.openBlock(),e.createElementBlock("div",_,[e.createElementVNode("div",p,[e.createElementVNode("div",N,[e.createVNode(a,{class:"app-view"},{default:e.withCtx(({Component:i})=>[(e.openBlock(),e.createBlock(e.Suspense,null,{default:e.withCtx(()=>[(e.openBlock(),e.createBlock(e.resolveDynamicComponent(i),{key:e.unref(t)}))]),_:2},1024))]),_:1})])]),e.unref(n)?e.createCommentVNode("",!0):(e.openBlock(),e.createBlock(s,{key:0}))])}}});export{x as default};
