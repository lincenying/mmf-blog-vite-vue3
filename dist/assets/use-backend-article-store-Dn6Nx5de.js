import{f as A,v as l}from"./vendor-DvyKuS15.js";import{c as n}from"./main-D8-klkuU.js";const _=A("backendArticleStore",()=>{const t=l.reactive({lists:{data:[],path:"",hasNext:0,hasPrev:0,page:1},item:{data:null,path:""}}),r=async(a,e=n)=>{if(t.lists.data.length>0&&a.path===t.lists.path&&a.page===1)return;const{code:s,data:i}=await e.get("backend/article/list",{...a,path:void 0});if(s===200&&i){const{list:d=[],path:x,hasNext:v=0,hasPrev:u=0,page:c}={...i,path:a.path,page:a.page};t.lists={data:c===1?d:t.lists.data.concat(d),hasNext:v,hasPrev:u,page:(c||1)+1,path:x}}},o=async(a,e=n)=>{const{code:s,data:i}=await e.get("backend/article/item",{...a,path:void 0});s===200&&i&&(t.item={data:i,...a})},p=async a=>{const e=t.lists.data.findIndex(s=>s._id===a);e>-1&&t.lists.data.splice(e,1,{...t.lists.data[e],is_delete:1})},h=async a=>{const e=t.lists.data.findIndex(s=>s._id===a);e>-1&&t.lists.data.splice(e,1,{...t.lists.data[e],is_delete:0})},f=a=>{t.lists.path&&(t.lists.data=[a].concat(t.lists.data))},m=a=>{const e=t.lists.data.findIndex(s=>s._id===a._id);e>-1&&t.lists.data.splice(e,1,a)};return{...l.toRefs(t),getArticleList:r,getArticleItem:o,deleteArticle:p,recoverArticle:h,insertArticleItem:f,updateArticleItem:m}});export{_ as u};
