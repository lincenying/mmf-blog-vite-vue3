import{v as t,h,f as l}from"./main-PtMshVqr.js";const f={class:"card card-trending"},k=t.createElementVNode("h2",{class:"card-title"},"热门文章",-1),v={class:"card-content"},N={class:"trending-rank-num"},E={class:"trending-meta"},V={class:"trending-meta-item"},x=t.createElementVNode("i",{class:"icon icon-action-voteup"},null,-1),y={class:"trending-meta-item"},S=t.createElementVNode("i",{class:"icon icon-action-comment"},null,-1),A=t.defineComponent({name:"AsideTrending",__name:"aside-trending",props:{trending:null},setup(e){const c=e,r=t.toRefs(c),d=t.toRef(r,"trending");return(_,i)=>{const n=t.resolveComponent("router-link");return t.openBlock(),t.createElementBlock("div",f,[k,t.createElementVNode("div",v,[(t.openBlock(!0),t.createElementBlock(t.Fragment,null,t.renderList(d.value,(a,s)=>(t.openBlock(),t.createElementBlock("div",{key:a._id,class:"trending-item"},[t.createElementVNode("span",N,t.toDisplayString(s+1),1),t.createVNode(n,{to:`/article/${a._id}`,class:"trending-title"},{default:t.withCtx(()=>[t.createTextVNode(t.toDisplayString(a.title),1)]),_:2},1032,["to"]),t.createElementVNode("div",E,[t.createElementVNode("div",V,[x,t.createTextVNode(t.toDisplayString(a.like),1)]),t.createElementVNode("div",y,[S,t.createTextVNode(t.toDisplayString(a.comment_count),1)])])]))),128))])])}}}),B=h("frontendArticleStore",()=>{const e=t.reactive({lists:{data:[],path:"",hasNext:0,hasPrev:0,page:1},item:{data:null,path:""},trending:[]}),c=async(i,n)=>{if(n||(n=l),e.lists.data.length>0&&i.path===e.lists.path&&i.page===1)return;const{code:a,data:s}=await n.get("frontend/article/list",{...i,path:void 0,cache:!0});if(a===200&&s){const{list:o=[],path:g,hasNext:p=0,hasPrev:u=0,page:m}={...s,path:i.path,page:i.page};e.lists={data:m===1?o:e.lists.data.concat(o),hasNext:p,hasPrev:u,page:(m||1)+1,path:g}}},r=async(i,n)=>{n||(n=l);const{code:a,data:s}=await n.get("frontend/article/item",{...i,path:void 0,markdown:1,cache:!0});a===200&&s&&(e.item={data:s,...i,isLoad:!0})},d=async(i,n)=>{if(n||(n=l),e.trending.length)return;const{code:a,data:s}=await n.get("frontend/trending",{cache:!0});a===200&&s&&(e.trending=s.list)},_=i=>{const{id:n,status:a}=i;e.item.data&&e.item.data._id===n&&(a?e.item.data.like++:e.item.data.like--,e.item.data.like_status=a);const s=e.lists.data.findIndex(o=>o._id===n);if(s>-1){const o=Object.assign({},e.lists.data[s]);a?o.like++:o.like--,o.like_status=a,e.lists.data.splice(s,1,o)}};return{...t.toRefs(e),getArticleList:c,getArticleItem:r,getTrending:d,modifyLikeStatus:_}}),T=B;export{A as _,T as u};
