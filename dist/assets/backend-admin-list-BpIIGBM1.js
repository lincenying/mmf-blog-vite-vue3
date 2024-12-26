import{v as e,h as C,s as k,g as N,z as b,U as T}from"./vendor-DvyKuS15.js";import{u as _}from"./use-backend-admin-store-DKbYvDkM.js";import{f as V,u as A,c as f,s as g}from"./main-D8-klkuU.js";/* empty css               */const w={class:"card settings-main"},x={class:"settings-main-content"},$={class:"list-email"},D={class:"list-date"},P={class:"list-action"},L=["onClick"],M=["onClick"],R={key:0,class:"settings-footer"},j={key:1,class:"admin-load-more",href:"javascript:;"},q=e.defineComponent({name:"BackendAdminList",asyncData(r){const{store:i,route:c,api:a}=r;return _(i).getAdminList({page:1,path:c.fullPath},a)},__name:"backend-admin-list",setup(r){const i=C(),c=V(),a=_(),d=k(a),l=e.toRef(d,"lists"),h=k(c),y=e.toRef(h,"historyPageScrollTop");A();const[m,u]=N(!1);async function p(t=l.value.page){m.value||(u(!0),await a.getAdminList({page:t,path:i.fullPath}),u(!1))}async function B(t){const{code:s,message:n}=await f.get("backend/admin/recover",{id:t});s===200&&(g({type:"success",content:n}),a.recoverAdmin(t))}async function S(t){const{code:s,message:n}=await f.get("backend/admin/delete",{id:t});s===200&&(g({type:"success",content:n}),a.deleteAdmin(t))}e.onMounted(()=>{if(l.value.path==="")p(1);else{const t=y.value[i.path]||0;window.scrollTo(0,t)}});const v=e.ref("管理员列表 - M.M.F 小屋");return b({title:v,meta:[{name:"description",content:v}]}),(t,s)=>{const n=e.resolveComponent("router-link");return e.openBlock(),e.createElementBlock("div",w,[e.createElementVNode("div",x,[s[2]||(s[2]=e.createStaticVNode('<div class="list-section list-header"><div class="list-username">用户名</div><div class="list-email">邮箱</div><div class="list-date">时间</div><div class="list-action">操作</div></div>',1)),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(l.value.data,o=>(e.openBlock(),e.createElementBlock("div",{key:o._id,class:"list-section"},[e.createElementVNode("div",{class:e.normalizeClass(["list-username",o.is_delete?"text-red-500 line-through":""])},e.toDisplayString(o.username),3),e.createElementVNode("div",$,e.toDisplayString(o.email),1),e.createElementVNode("div",D,e.toDisplayString(e.unref(T)(o.update_date)),1),e.createElementVNode("div",P,[e.createVNode(n,{to:`/backend/admin/modify/${o._id}`,class:"badge badge-success"},{default:e.withCtx(()=>s[1]||(s[1]=[e.createTextVNode("编辑")])),_:2},1032,["to"]),o.is_delete?(e.openBlock(),e.createElementBlock("a",{key:0,href:"javascript:;",onClick:E=>B(o._id)},"恢复",8,L)):(e.openBlock(),e.createElementBlock("a",{key:1,href:"javascript:;",onClick:E=>S(o._id)},"删除",8,M))])]))),128))]),l.value.hasNext?(e.openBlock(),e.createElementBlock("div",R,[e.unref(m)?(e.openBlock(),e.createElementBlock("a",j,"加载中...")):(e.openBlock(),e.createElementBlock("a",{key:0,class:"admin-load-more",href:"javascript:;",onClick:s[0]||(s[0]=o=>p())},"加载更多"))])):e.createCommentVNode("",!0)])}}});export{q as default};