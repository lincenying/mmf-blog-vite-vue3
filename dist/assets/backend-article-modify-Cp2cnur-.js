import{e as S,s as v,c as h,_ as B}from"./main-D8-klkuU.js";import{_ as D}from"./a-input.vue_vue_type_script_setup_true_lang-BF10R7es.js";import{v as e,h as R,k as U,s as b,g as A,z as P,V as T}from"./vendor-DvyKuS15.js";import{u as k}from"./use-global-category-store-D37QDpdv.js";import{u as I}from"./use-backend-article-store-Dn6Nx5de.js";import{u as w}from"./upload-api-B8RxlIE4.js";/* empty css               */const F={class:"settings-main card"},H={class:"settings-main-content"},L=["value"],j={class:"settings-section"},q={id:"modify-content",class:"settings-item-content"},z={class:"settings-footer"},G={"mr-10px":"","inline-flex":"","items-center":""},Z=e.defineComponent({name:"BackendArticleModify",asyncData(f){const{store:m,route:i,api:u}=f;return k(m).getCategoryList({limit:99,path:i.fullPath},u)},__name:"backend-article-modify",setup(f){const{ctx:m}=S(),i=R(),u=U(),g=k(),N=b(g),_=e.toRef(N,"lists"),p=I(),E=b(p),x=e.toRef(E,"item"),[C,y]=A(!1),c=e.ref(!0),o=e.reactive({id:i.params.id,title:"",category:"",category_name:"",category_old:"",content:"",html:""});e.watch(()=>o.category,n=>{const t=_.value.find(l=>l._id===n);t&&(o.category_name=t.cate_name)}),e.watch(()=>x.value,n=>{n.data&&(o.title=n.data.title,o.category_old=n.data.category,o.category=n.data.category,o.content=n.data.content)},{deep:!0}),e.onMounted(async()=>{p.getArticleItem({id:i.params.id})});async function M(){if(!o.title||!o.category||!o.content){v("请将表单填写完整!");return}if(C.value)return;if(y(!0),c.value){const s=T.vMdParser.themeConfig.markdownParser.render(o.content);o.html=s}const{code:n,data:t,message:l}=await h.post("backend/article/modify",o);y(!1),n===200&&(v({type:"success",content:l}),p.updateArticleItem(t),u.push("/backend/article/list"))}async function $(n,t,l){const s=m.$loading.show(),d=new FormData;d.append("file",l[0]);const{data:r}=await h.file(`${w}/api/fetch/upload`,d);r&&r.filepath&&t({url:`${w}/${r.filepath}`,desc:""}),s.hide()}const V=e.ref("编辑文章 - M.M.F 小屋");return P({title:V,meta:[{name:"description",content:V}]}),(n,t)=>{const l=D,s=e.resolveComponent("v-md-editor"),d=B,r=e.resolveComponent("router-link");return e.openBlock(),e.createElementBlock("div",F,[e.createElementVNode("div",H,[e.createVNode(l,{title:"标题"},{default:e.withCtx(()=>[e.withDirectives(e.createElementVNode("input",{"onUpdate:modelValue":t[0]||(t[0]=a=>e.unref(o).title=a),type:"text",placeholder:"标题",class:"base-input",name:"title"},null,512),[[e.vModelText,e.unref(o).title]]),t[4]||(t[4]=e.createElementVNode("span",{class:"input-info error"},"请输入标题",-1))]),_:1}),e.createVNode(l,{title:"分类",classes:"select-item-wrap"},{default:e.withCtx(()=>[t[6]||(t[6]=e.createElementVNode("i",{class:"icon icon-arrow-down"},null,-1)),e.withDirectives(e.createElementVNode("select",{"onUpdate:modelValue":t[1]||(t[1]=a=>e.unref(o).category=a),class:"select-item",name:"category"},[t[5]||(t[5]=e.createElementVNode("option",{value:""},"请选择分类",-1)),(e.openBlock(!0),e.createElementBlock(e.Fragment,null,e.renderList(_.value,a=>(e.openBlock(),e.createElementBlock("option",{key:a._id,value:a._id},e.toDisplayString(a.cate_name),9,L))),128))],512),[[e.vModelSelect,e.unref(o).category]]),t[7]||(t[7]=e.createElementVNode("span",{class:"input-info error"},"请输入分类",-1))]),_:1}),e.createElementVNode("div",j,[e.createElementVNode("div",q,[e.createVNode(d,null,{default:e.withCtx(()=>[e.createVNode(s,{modelValue:e.unref(o).content,"onUpdate:modelValue":t[2]||(t[2]=a=>e.unref(o).content=a),"disabled-menus":[],mode:"edit",height:"500px","left-toolbar":"undo redo clear | h bold italic strikethrough link | ul ol table hr | image quote code tip | save",onUploadImage:$},null,8,["modelValue"])]),_:1})])])]),e.createElementVNode("div",z,[e.createElementVNode("label",G,[e.withDirectives(e.createElementVNode("input",{"onUpdate:modelValue":t[3]||(t[3]=a=>e.isRef(c)?c.value=a:null),type:"checkbox",value:"1"},null,512),[[e.vModelCheckbox,e.unref(c)]]),t[8]||(t[8]=e.createElementVNode("span",{"ml-5px":""},"使用前端生成Html?",-1))]),e.createElementVNode("a",{href:"javascript:;",class:"btn btn-yellow",onClick:M},"编辑文章"),e.createVNode(r,{to:"/backend/article/list",class:"btn btn-blue"},{default:e.withCtx(()=>t[9]||(t[9]=[e.createTextVNode("返回")])),_:1})])])}}});export{Z as default};
