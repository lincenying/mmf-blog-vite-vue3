import{_ as f}from"./a-input.vue_vue_type_script_setup_true_lang-BUhBMixC.js";import{v as e,j as g,s as v,b as y,e as l,f as V}from"./main-DHVneRVO.js";import{u as b}from"./use-global-category-store-C_niZOU-.js";import{u as x}from"./vue.8fc199ce-DvlLJjsU.js";const E={class:"settings-main card"},N={class:"settings-main-content"},T=e.defineComponent({name:"BackendCategoryInsert",__name:"backend-category-insert",setup(w){const m=g(),c=b(),u=v(c),o=e.toRef(u,"item"),[p,i]=y(!1),t=e.reactive({cate_name:"",cate_order:""});e.watch(o.value,n=>{n.data&&(t.cate_name=n.data.cate_name,t.cate_order=n.data.cate_order)}),e.onMounted(()=>{o.value&&o.value.data&&(t.cate_name=o.value.data.cate_name,t.cate_order=o.value.data.cate_order)});async function _(){if(!t.cate_name||!t.cate_order){l("请将表单填写完整!");return}if(p.value)return;i(!0);const{code:n,data:a,message:r}=await V.post("backend/category/insert",t);i(!1),n===200&&(l({type:"success",content:r}),c.insertCategoryItem({...t,...a}),m.push("/backend/category/list"))}const d=e.ref("添加分类 - M.M.F 小屋");return x({title:d,meta:[{name:"description",content:d}]}),(n,a)=>{const r=f;return e.openBlock(),e.createElementBlock("div",E,[e.createElementVNode("div",N,[e.createVNode(r,{title:"分类名称"},{default:e.withCtx(()=>[e.withDirectives(e.createElementVNode("input",{"onUpdate:modelValue":a[0]||(a[0]=s=>e.unref(t).cate_name=s),type:"text",placeholder:"分类名称",class:"base-input",name:"cate_name"},null,512),[[e.vModelText,e.unref(t).cate_name]]),a[2]||(a[2]=e.createElementVNode("span",{class:"input-info error"},"请输入分类名称",-1))]),_:1}),e.createVNode(r,{title:"分类排序"},{default:e.withCtx(()=>[e.withDirectives(e.createElementVNode("input",{"onUpdate:modelValue":a[1]||(a[1]=s=>e.unref(t).cate_order=s),type:"text",placeholder:"分类排序",class:"base-input",name:"cate_order"},null,512),[[e.vModelText,e.unref(t).cate_order]]),a[3]||(a[3]=e.createElementVNode("span",{class:"input-info error"},"请输入分类排序",-1))]),_:1})]),e.createElementVNode("div",{class:"settings-footer"},[e.createElementVNode("a",{href:"javascript:;",class:"btn btn-yellow",onClick:_},"添加分类")])])}}});export{T as default};
