import{_}from"./a-input.vue_vue_type_script_setup_true_lang-BF10R7es.js";import{v as e,z as v}from"./vendor-DvyKuS15.js";import{a as V,b as w,s as l,c as m}from"./main-D8-klkuU.js";/* empty css               */const E={class:"cards-wrap home-feeds"},N={class:"card settings-main"},g={class:"settings-main-content"},h=["value"],x={class:"settings-footer"},F=e.defineComponent({name:"FrontendUserAccount",__name:"frontend-user-account",setup(b){const i=V(),f=e.toRefs(i),c=e.toRef(f,"cookies");let r=e.ref(""),n=e.ref("");async function p(){const{code:s,data:t}=await m.get("frontend/user/account",{});s===200&&(r.value=t.username,n.value=t.email)}e.onMounted(()=>{p()});const u=w(async()=>{const s=/^[\w\-.]+@[\w-]+\.[\w-]+$/;if(n.value){if(!s.test(n.value)){l("邮箱格式错误!");return}}else{l("请填写邮箱地址!");return}const{code:t,message:o}=await m.post("frontend/user/account",{email:n.value,username:r.value,id:c.value.userid});t===200&&(i.setCookies({...c.value,useremail:n.value}),l({type:"success",content:o}))}),d=e.ref("帐号 - M.M.F 小屋");return v({title:d,meta:[{name:"description",content:d}]}),(s,t)=>{const o=_;return e.openBlock(),e.createElementBlock("div",E,[e.createElementVNode("div",N,[e.createElementVNode("div",g,[e.createElementVNode("form",null,[e.createVNode(o,{title:"昵称"},{default:e.withCtx(()=>[e.createElementVNode("input",{type:"text",value:e.unref(r),placeholder:"昵称",class:"base-input",name:"username",readonly:""},null,8,h),t[2]||(t[2]=e.createElementVNode("span",{class:"input-info error"},"请输入昵称",-1))]),_:1}),e.createVNode(o,{title:"邮箱"},{default:e.withCtx(()=>[e.withDirectives(e.createElementVNode("input",{"onUpdate:modelValue":t[0]||(t[0]=a=>e.isRef(n)?n.value=a:n=a),type:"text",placeholder:"邮箱",class:"base-input",name:"email"},null,512),[[e.vModelText,e.unref(n)]]),t[3]||(t[3]=e.createElementVNode("span",{class:"input-info error"},"请输入邮箱",-1))]),_:1})])]),e.createElementVNode("div",x,[e.createElementVNode("a",{href:"javascript:;",class:"btn btn-yellow",onClick:t[1]||(t[1]=(...a)=>e.unref(u)&&e.unref(u)(...a))},"保存设置")])])])}}});export{F as default};
