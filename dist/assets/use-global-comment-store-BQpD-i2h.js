import{h as x,v as d,f as u}from"./main-CmsYZlsc.js";const v=x("globalCommentStore",()=>{const t=d.reactive({lists:{data:[],hasNext:0,hasPrev:0,page:1,path:""}}),l=async(s,e=u)=>{if(s.path===t.lists.path&&s.page===1)return;const{code:a,data:i}=await e.get("frontend/comment/list",{...s,path:void 0,cache:!0});if(a===200&&i){const{list:o=[],path:p="",hasNext:h=0,hasPrev:f=0,page:n=1}={...s,...i};t.lists={data:n===1?o:t.lists.data.concat(o),hasNext:h,hasPrev:f,page:n,path:p}}},c=s=>{t.lists.data=[s].concat(t.lists.data)},r=s=>{const e=t.lists.data.findIndex(a=>a._id===s);e>-1&&t.lists.data.splice(e,1,{...t.lists.data[e],is_delete:1})},m=s=>{const e=t.lists.data.findIndex(a=>a._id===s);e>-1&&t.lists.data.splice(e,1,{...t.lists.data[e],is_delete:0})};return{...d.toRefs(t),getCommentList:l,insertCommentItem:c,deleteComment:r,recoverComment:m}}),S=v;export{S as u};
