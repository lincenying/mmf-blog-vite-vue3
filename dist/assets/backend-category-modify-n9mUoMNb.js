import{_ as b}from"./a-input.vue_vue_type_script_setup_true_lang-3O2YdUpH.js";import{v as e,u as C,j as V,s as v,b as x,e as _,f as N}from"./main-PtMshVqr.js";import{u as p}from"./use-global-category-store-DhEVIJUU.js";import{u as k}from"./vue.f36acd1f-RP9DK0Wl.js";const w={class:"settings-main card"},E={class:"settings-main-content"},M=e.createElementVNode("span",{class:"input-info error"},"请输入分类名称",-1),T=e.createElementVNode("span",{class:"input-info error"},"请输入分类排序",-1),R={class:"settings-footer"},I=e.defineComponent({name:"BackendCategoryModify",asyncData(d){const{store:c,route:n,api:r}=d;return p(c).getCategoryItem({path:n.fullPath,id:n.params.id},r)},__name:"backend-category-modify",setup(d){const c=C(),n=V(),r=p(),l=v(r),f=e.toRef(l,"item"),[g,u]=x(!1),t=e.reactive({id:c.params.id,cate_name:"",cate_order:""});e.watch(f.value,a=>{a.data&&(t.cate_name=a.data.cate_name,t.cate_order=a.data.cate_order)}),e.onMounted(async()=>{});async function y(){if(!t.cate_name||!t.cate_order){_("请将表单填写完整!");return}if(g.value)return;u(!0);const{code:a,data:o,message:s}=await N.post("backend/category/modify",t);u(!1),a===200&&(_({type:"success",content:s}),r.updateCategoryItem(o),n.push("/backend/category/list"))}const m=e.ref("编辑分类 - M.M.F 小屋");return k({title:m,meta:[{name:"description",content:m}]}),(a,o)=>{const s=b,h=e.resolveComponent("router-link");return e.openBlock(),e.createElementBlock("div",w,[e.createElementVNode("div",E,[e.createVNode(s,{title:"分类名称"},{default:e.withCtx(()=>[e.withDirectives(e.createElementVNode("input",{"onUpdate:modelValue":o[0]||(o[0]=i=>e.unref(t).cate_name=i),type:"text",placeholder:"分类名称",class:"base-input",name:"cate_name"},null,512),[[e.vModelText,e.unref(t).cate_name]]),M]),_:1}),e.createVNode(s,{title:"分类排序"},{default:e.withCtx(()=>[e.withDirectives(e.createElementVNode("input",{"onUpdate:modelValue":o[1]||(o[1]=i=>e.unref(t).cate_order=i),type:"text",placeholder:"分类排序",class:"base-input",name:"cate_order"},null,512),[[e.vModelText,e.unref(t).cate_order]]),T]),_:1})]),e.createElementVNode("div",R,[e.createElementVNode("a",{href:"javascript:;",class:"btn btn-yellow",onClick:y},"编辑分类"),e.createVNode(h,{to:"/backend/category/list",class:"btn btn-blue"},{default:e.withCtx(()=>[e.createTextVNode("返回")]),_:1})])])}}});export{I as default};
