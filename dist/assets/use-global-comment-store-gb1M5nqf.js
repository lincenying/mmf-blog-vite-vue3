import{h as x,v as d,f as u}from"./main-PtMshVqr.js";const v=x("globalCommentStore",()=>{const t=d.reactive({lists:{data:[],hasNext:0,hasPrev:0,page:1,path:""}}),l=async(e,s)=>{if(s||(s=u),e.path===t.lists.path&&e.page===1)return;const{code:a,data:i}=await s.get("frontend/comment/list",{...e,path:void 0,cache:!0});if(a===200&&i){const{list:o=[],path:p="",hasNext:h=0,hasPrev:f=0,page:n=1}={...e,...i};t.lists={data:n===1?o:t.lists.data.concat(o),hasNext:h,hasPrev:f,page:n,path:p}}},c=e=>{t.lists.data=[e].concat(t.lists.data)},r=e=>{const s=t.lists.data.findIndex(a=>a._id===e);s>-1&&t.lists.data.splice(s,1,{...t.lists.data[s],is_delete:1})},m=e=>{const s=t.lists.data.findIndex(a=>a._id===e);s>-1&&t.lists.data.splice(s,1,{...t.lists.data[s],is_delete:0})};return{...d.toRefs(t),getCommentList:l,insertCommentItem:c,deleteComment:r,recoverComment:m}}),S=v;export{S as u};
