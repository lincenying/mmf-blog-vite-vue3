import{v as e}from"./vendor-DvyKuS15.js";const c={class:"settings-section"},l={class:"settings-item with-input"},r={class:"settings-title"},p={class:"settings-input-wrap"},m=e.defineComponent({name:"AInput",__name:"a-input",props:{title:{},classes:{}},setup(s){const n=s,t=e.toRefs(n),o=e.toRef(t,"title"),i=e.toRef(t,"classes");return(a,_)=>(e.openBlock(),e.createElementBlock("div",c,[e.createElementVNode("div",l,[e.createElementVNode("h4",r,e.toDisplayString(o.value),1),e.createElementVNode("div",{class:e.normalizeClass(["settings-item-content",i.value])},[e.createElementVNode("div",p,[e.renderSlot(a.$slots,"default")])],2)])]))}});export{m as _};