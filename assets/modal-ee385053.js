import{c6 as L,y as f,B as x,bk as A}from"./index-940df46e.js";import{u as E}from"./site-9b8f5397.js";const M={add:"添加",update:"编辑"},T={cate:"分类",group:"分组",site:"网页"},w=L("modal",()=>{const s=f(!1),l=f("add"),n=f("site"),p=x(()=>M[l.value]+T[n.value]),e=E(),t=A({name:"",url:"",favicon:"",bgColor:""});function r(a,u){const o={};return Object.keys(a).forEach(i=>{const d=i;a[d]!==void 0&&u[d]!==void 0&&(o[d]=u[d])}),o}function v(a,u,o=-1,i=-1){l.value=a,n.value=u,o!==-1&&e.setGroupIndex(o),i!==-1&&e.setSiteIndex(i),s.value=!0,a==="update"&&Object.assign(t,{site:()=>r(t,e.data[e.cateIndex].groupList[o].siteList[i]),group:()=>r(t,e.data[e.cateIndex].groupList[o]),cate:()=>r(t,e.data[e.cateIndex])}[u]())}let c=0;const g={add:{site:()=>e.addSite({id:c,...t}),group:()=>e.addGroup({id:c,name:t.name,siteList:[]}),cate:()=>e.addCate({id:c,name:t.name,groupList:[]})},update:{site:()=>e.updateSite({...t}),group:()=>e.updateGroup({name:t.name}),cate:()=>e.updateCate({name:t.name})}},C={site:()=>e.deleteSite(),group:()=>e.deleteGroup(),cate:()=>e.deleteCate()};function S(){s.value=!1}let m=!1;function h(){m||(m=!0,c=Date.now(),g[l.value][n.value](),s.value=!1,setTimeout(()=>m=!1,1e3))}function G(){C[n.value](),s.value=!1,n.value==="cate"&&e.cateIndex>0&&e.setCateIndex(e.cateIndex-1)}function I(){let a;for(a in t)t[a]=""}return{modalVisible:s,action:l,target:n,title:p,inputValues:t,showModal:v,handleCancel:S,handleCommit:h,handleDelete:G,clearInput:I}});export{w as u};
