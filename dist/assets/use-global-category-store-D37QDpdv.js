import{f as m,v as a}from"./vendor-DvyKuS15.js";import{c as n}from"./main-D8-klkuU.js";const u=m("globalCategoryStore",()=>{const t=a.reactive({lists:[],item:{data:null}}),c=async(e,s=n)=>{if(t.lists.length)return;const{code:i,data:o}=await s.get("backend/category/list",{...e,path:void 0,cache:!0});i===200&&o&&(t.lists=o.list)},r=async(e,s=n)=>{const{code:i,data:o}=await s.get("backend/category/item",{...e,path:void 0});i===200&&o&&(t.item={data:o,...e})},d=e=>{t.lists=[e].concat(t.lists)},l=e=>{t.item.data=e;const s=t.lists.findIndex(i=>i._id===e._id);s>-1&&t.lists.splice(s,1,e)},g=e=>{const s=t.lists.findIndex(i=>i._id===e);s>-1&&t.lists.splice(s,1,{...t.lists[s],is_delete:1})},f=e=>{const s=t.lists.findIndex(i=>i._id===e);s>-1&&t.lists.splice(s,1,{...t.lists[s],is_delete:0})};return{...a.toRefs(t),getCategoryList:c,getCategoryItem:r,insertCategoryItem:d,updateCategoryItem:l,deleteCategory:g,recoverCategory:f}});export{u};
