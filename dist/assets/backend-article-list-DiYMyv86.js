import{v as e,u as b,l as C,s as _,a as N,b as V,m as x,f as v,e as f}from"./main-DHVneRVO.js";import{u as g}from"./use-backend-article-store-C3W3HA7N.js";import{u as T}from"./vue.8fc199ce-DvlLJjsU.js";const w={class:"settings-main card"},A={class:"settings-main-content"},$={class:"list-category"},D={class:"list-date"},P={class:"list-action"},L=["onClick"],M=["onClick"],R={key:0,class:"settings-footer"},j={key:1,class:"admin-load-more",href:"javascript:;"},q=e.defineComponent({name:"BackendArticleList",asyncData(r){const{store:l,route:i,api:a}=r;return g(l).getArticleList({page:1,path:i.fullPath},a)},__name:"backend-article-list",setup(r){const l=b(),i=C(),a=g(),d=_(a),n=e.toRef(d,"lists"),h=_(i),y=e.toRef(h,"historyPageScrollTop");N();const[u,p]=V(!1);async function k(s=n.value.page){u.value||(p(!0),await a.getArticleList({page:s,path:l.fullPath}),p(!1))}async function B(s){const{code:t,message:c}=await v.get("backend/article/recover",{id:s});t===200&&(f({type:"success",content:c}),a.recoverArticle(s))}async function S(s){const{code:t,message:c}=await v.get("backend/article/delete",{id:s});t===200&&(f({type:"success",content:c}),a.deleteArticle(s))}e.onMounted(()=>{if(n.value.path==="")k(1);else{const s=y.value[l.path]||0;window.scrollTo(0,s)}});const m=e.ref("文章列表 - M.M.F 小屋");return T({title:m,meta:[{name:"description",content:m}]}),(s,t)=>{const c=e.resolveComponent("router-link");return e.openBlock(),e.createElementBlock("div",w,[e.createElementVNode("div",A,[t[3]||(t[3]=e.createStaticVNode('<div class="list-section list-header"><div class="list-title">标题</div><div class="list-category">分类</div><div class="list-date">最后更新</div><div class="list-action">操作</div></div>',1)),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(n.value.data,o=>(e.openBlock(),e.createElementBlock("div",{key:o._id,class:"list-section"},[e.createElementVNode("div",{class:e.normalizeClass(["list-title",o.is_delete?"text-red-500 line-through":""])},e.toDisplayString(o.title),3),e.createElementVNode("div",$,e.toDisplayString(o.category_name),1),e.createElementVNode("div",D,e.toDisplayString(e.unref(x)(o.update_date)),1),e.createElementVNode("div",P,[e.createVNode(c,{to:`/backend/article/modify/${o._id}`,class:"badge badge-success"},{default:e.withCtx(()=>t[1]||(t[1]=[e.createTextVNode("编辑")])),_:2},1032,["to"]),o.is_delete?(e.openBlock(),e.createElementBlock("a",{key:0,href:"javascript:;",onClick:E=>B(o._id)},"恢复",8,L)):(e.openBlock(),e.createElementBlock("a",{key:1,href:"javascript:;",onClick:E=>S(o._id)},"删除",8,M)),o.comment_count>0?(e.openBlock(),e.createBlock(c,{key:2,to:`/backend/article/comment/${o._id}`,class:"badge badge-success"},{default:e.withCtx(()=>t[2]||(t[2]=[e.createTextVNode(" 评论 ")])),_:2},1032,["to"])):e.createCommentVNode("",!0)])]))),128))]),n.value.hasNext?(e.openBlock(),e.createElementBlock("div",R,[e.unref(u)?(e.openBlock(),e.createElementBlock("a",j,"加载中...")):(e.openBlock(),e.createElementBlock("a",{key:0,class:"admin-load-more",href:"javascript:;",onClick:t[0]||(t[0]=o=>k())},"加载更多"))])):e.createCommentVNode("",!0)])}}});export{q as default};
