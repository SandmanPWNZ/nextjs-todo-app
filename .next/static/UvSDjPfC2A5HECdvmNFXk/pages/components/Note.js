(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{Um3c:function(e,t,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/Note",function(){var e=a("trYd");return{page:e.default||e}}])},trYd:function(e,t,a){"use strict";a.r(t);var n=a("doui"),c=a("q1tI"),o=a.n(c),u=a("9hRF"),d=a("ttZb"),r=function(e,t){!function(e,t){var a=e.readQuery({query:u.c}).todoes;e.writeQuery({query:u.c,data:{todoes:a.filter(function(e){return e.id!==t.deleteTodo.id})}})}(e,t.data)};t.default=function(e){var t,a=e.todo,i=a.id,l=a.completed,s=a.title,f=Object(c.useState)(!1),b=Object(n.default)(f,2),m=b[0],p=b[1],w=Object(c.useState)(s),v=Object(n.default)(w,2),j=v[0],O=v[1],E=Object(d.a)(u.b,{update:r}),N=Object(n.default)(E,1)[0],h=Object(d.a)(u.d),_=Object(n.default)(h,1)[0],k=Object(d.a)(u.e),y=Object(n.default)(k,1)[0];Object(c.useEffect)(function(){m&&t.focus()},[m]);var C=l?"note completed":"note";return o.a.createElement("div",{className:C},o.a.createElement("input",{ref:function(e){return t=e},className:m?"editable":"",type:"text",value:j,onChange:function(e){return O(e.target.value)},disabled:!m}),o.a.createElement("button",{className:"edit",onClick:function(){p(!m),m&&y({variables:{data:{title:j},where:{id:i}}})}},m?"Save":"Edit"),o.a.createElement("button",{className:"done",onClick:function(){return _({variables:{data:{completed:!l},where:{id:i}}})}},l?"Undone":"Done"),o.a.createElement("button",{className:"delete",onClick:function(){return N({variables:{where:{id:i}}})}},"Delete"))}}},[["Um3c",1,0]]]);