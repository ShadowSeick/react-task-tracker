(this["webpackJsonpreact-task-tracker"]=this["webpackJsonpreact-task-tracker"]||[]).push([[0],{116:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n.n(a),r=n(24),s=n.n(r),o=(n(62),n(18)),i=n(28),l=n(7),u=n.n(l),d=n(16),j=n(6),b=n(23),h=n(5),O=n(3),f=function(e){var t=e.color,n=e.text,a=e.onClick,c=e.showFutureTasks,r=e.showPastTasks;return Object(O.jsx)("div",{children:Object(O.jsx)("button",{onClick:a,style:{backgroundColor:t},className:"btn text-uppercase ".concat(c||r?"active":""),children:n})})};f.defaultProps={color:"steelBlue"};var x=f,p=function(e){var t=e.title,n=e.onAdd,a=e.showAdd,c=Object(h.e)();return Object(O.jsxs)("header",{className:"header",children:[Object(O.jsx)("h1",{children:t}),"/"===c.pathname&&Object(O.jsx)(x,{color:a?"red":"green",text:a?"Close":"Add",onClick:n})]})},v=function(){return Object(O.jsxs)("footer",{children:[Object(O.jsx)("p",{children:"Copyright \xa9 2021"}),Object(O.jsx)(b.b,{to:"/about",children:"About"})]})},m=n(49),g=n(124),k=function(e){var t=e.task,n=e.onDelete,a=e.onToggle,c=e.onEdit,r=e.showEditTask;return Object(O.jsxs)(g.a.div,{className:"task ".concat(t.reminder?"reminder":""," ").concat(r?"highlighted":""),onDoubleClick:function(){return a(t.id)},initial:"hidden",animate:"visible",exit:"exit",variants:{hidden:{x:-50,opacity:0},visible:{x:0,opacity:1},exit:{x:50,opacity:0}},transition:{duration:"0.5"},children:[Object(O.jsxs)("h3",{children:[Object(O.jsx)("div",{children:t.text}),Object(O.jsxs)("div",{children:[Object(O.jsx)(m.a,{style:{color:"steelblue",cursor:"pointer"},onClick:function(){return c(t.id)},className:"me-1 click-button"}),Object(O.jsx)(m.b,{style:{color:"red",cursor:"pointer"},onClick:function(){return n(t.id)},className:"click-button"})]})]}),Object(O.jsx)("p",{children:t.date})]})},y=function(e){return e.sort((function(e,t){var n=new Date(e.objectDate),a=new Date(t.objectDate);n=[n.getFullYear(),n.getMonth(),n.getDate(),n.getTime()],a=[a.getFullYear(),a.getMonth(),a.getDate(),a.getTime()];for(var c=0;c<n.length;c++)if(n[c]-a[c]!==0)return n[c]-a[c];return n[0]-a[0]}))},T=function(e){var t=e.tasks,n=e.onDelete,a=e.onToggle,c=e.onEdit,r=(new Date).toDateString();return Object(O.jsx)("div",{className:"col",children:y(t).filter((function(e){return r!==new Date(e.objectDate).toDateString()})).map((function(e){return Object(O.jsx)(k,{task:e,onDelete:n,onToggle:a,onEdit:c},e.id)}))})},D=n(31),w=n.n(D),S=(n(51),function(e){var t=e.alertText;return Object(O.jsx)(g.a.div,{initial:"hidden",animate:"visible",variants:{hidden:{opacity:0,x:30},visible:{opacity:1,translateX:-30}},transition:{duration:.2},className:"text-warning",children:t})}),N=function(e){var t=e.onAdd,n=Object(a.useState)(""),c=Object(j.a)(n,2),r=c[0],s=c[1],o=Object(a.useState)(new Date),i=Object(j.a)(o,2),l=i[0],u=i[1],d=Object(a.useState)(!1),b=Object(j.a)(d,2),h=b[0],f=b[1],x=Object(a.useState)(!1),p=Object(j.a)(x,2),v=p[0],m=p[1],k=Object(a.useState)(""),y=Object(j.a)(k,2),T=y[0],D=y[1];return Object(O.jsxs)(g.a.div,{initial:"hidden",animate:"visible",variants:{hidden:{opacity:.2,y:-25},visible:{opacity:1,translateY:25}},transition:{duration:.2},children:[Object(O.jsx)("h2",{children:"Add Task"}),v&&Object(O.jsx)(S,{alertText:T}),Object(O.jsxs)("form",{className:"add-form",onSubmit:function(e){if(e.preventDefault(),!r)return m(!0),void D("Please add a task");if(r.length>40)return m(!0),void D("The name task is too long. Only 25 characters long");var n="".concat(l.toLocaleDateString("es-ES")," ").concat(l.toLocaleTimeString("en-US"));t({text:r,date:n,objectDate:l,reminder:h}),s(""),u(new Date),f(!1),m(!1)},children:[Object(O.jsxs)("div",{className:"form-control",children:[Object(O.jsx)("label",{children:"Task"}),Object(O.jsx)("input",{type:"text",placeholder:"Add Task",value:r,onChange:function(e){return s(e.target.value)}})]}),Object(O.jsxs)("div",{className:"form-control",children:[Object(O.jsx)("label",{children:"Day & Time"}),Object(O.jsx)(w.a,{dateFormat:"MMM d, yyyy h:mmaa",showTimeSelect:!0,selected:l,onChange:function(e){return u(e)}})]}),Object(O.jsxs)("div",{className:"form-control form-control-check",children:[Object(O.jsx)("label",{children:"Set Reminder"}),Object(O.jsx)("input",{type:"checkbox",checked:h,value:h,onChange:function(e){return f(e.currentTarget.checked)}})]}),Object(O.jsx)("input",{type:"submit",value:"saveTask",className:"btn btn-block"})]})]})},E=function(e){var t=e.onEdit,n=e.taskToEdit,c=e.onChange,r=Object(a.useState)(n.text),s=Object(j.a)(r,2),o=s[0],i=s[1],l=Object(a.useState)(new Date(n.objectDate)),u=Object(j.a)(l,2),d=u[0],b=u[1],h=Object(a.useState)(n.reminder),f=Object(j.a)(h,2),x=f[0],p=f[1];return Object(O.jsxs)(g.a.div,{initial:"hidden",animate:"visible",variants:{hidden:{opacity:.2,y:75},visible:{opacity:1,translateY:-75,scaleY:1}},transition:{duration:.2},children:[Object(O.jsx)("h2",{children:"Edit Task"}),Object(O.jsxs)("form",{className:"add-form",onSubmit:function(e){e.preventDefault();var n="".concat(d.toLocaleDateString("es-ES")," ").concat(d.toLocaleTimeString("en-US"));t({text:o,date:n,objectDate:d,reminder:x})},onChange:c,children:[Object(O.jsxs)("div",{className:"form-control",children:[Object(O.jsx)("label",{children:"Task"}),Object(O.jsx)("input",{type:"text",placeholder:"Add Task",value:o,onChange:function(e){return i(e.target.value)}})]}),Object(O.jsxs)("div",{className:"form-control",children:[Object(O.jsx)("label",{children:"Day & Time"}),Object(O.jsx)(w.a,{dateFormat:"MMM d, yyyy h:mmaa",showTimeSelect:!0,selected:d,onChange:function(e){return b(e)}})]}),Object(O.jsxs)("div",{className:"form-control form-control-check",children:[Object(O.jsx)("label",{children:"Set Reminder"}),Object(O.jsx)("input",{type:"checkbox",checked:x,value:x,onChange:function(e){return p(e.currentTarget.checked)}})]}),Object(O.jsx)("input",{type:"submit",value:"saveTask",className:"btn btn-block"})]})]})},C=function(){return Object(O.jsxs)("div",{className:"d-block mt-auto",children:[Object(O.jsx)("h4",{children:"Version 1.0.0"}),Object(O.jsx)(b.b,{to:"/",children:"Go Back"})]})},F=function(){var e=new Date,t=e.getDate(),n=["jan","feb","mar","apr","may","jun","jul","aug","sep","oct","nov","dec"][e.getMonth()];return Object(O.jsx)("div",{children:Object(O.jsx)("h1",{className:"text-uppercase text-center",children:"".concat(t," ").concat(n)})})},M=function(e){var t=e.todayTasks,n=e.onDelete,a=e.onToggle,c=e.onEdit;return Object(O.jsx)("div",{children:Object(O.jsx)("div",{children:t.sort((function(e,t){return new Date(e.objectDate).getTime()-new Date(t.objectDate).getTime()})).map((function(e){return Object(O.jsx)(k,{task:e,onDelete:n,onToggle:a,onEdit:c},e.id)}))})})},A=function(e){var t=e.todayTasks,n=e.onDelete,a=e.onToggle,c=e.onEdit;return Object(O.jsxs)("div",{children:[Object(O.jsx)(F,{}),t.length>0?Object(O.jsx)(M,{todayTasks:t,onDelete:n,onEdit:c,onToggle:a}):"There are no tasks for today"]})};p.defaultProps={title:"Task Tracker"};var P=function(){var e=Object(a.useState)(!1),t=Object(j.a)(e,2),n=t[0],c=t[1],r=Object(a.useState)(!1),s=Object(j.a)(r,2),l=s[0],f=s[1],m=Object(a.useState)(!1),k=Object(j.a)(m,2),y=k[0],D=k[1],w=Object(a.useState)(!1),S=Object(j.a)(w,2),F=S[0],M=S[1],P=Object(a.useState)([]),Y=Object(j.a)(P,2),L=Y[0],J=Y[1],B=Object(a.useState)([]),U=Object(j.a)(B,2),X=U[0],I=U[1],R=Object(a.useState)([]),G=Object(j.a)(R,2),V=G[0],q=G[1],z=Object(a.useState)([]),H=Object(j.a)(z,2),K=H[0],Q=H[1],W=Object(a.useState)({}),Z=Object(j.a)(W,2),$=Z[0],_=Z[1];Object(a.useEffect)((function(){var e=function(){var e=Object(d.a)(u.a.mark((function e(){var t;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,ce();case 2:t=e.sent,J(t),te(t);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();e()}),[]);var ee=function(e,t){var n=new Date;return n=[n.getFullYear(),n.getMonth(),n.getDate()],t="future"===t.toLowerCase()||"past"!==t.toLowerCase()&&null,e.filter((function(e){var a=new Date(e.objectDate);a=[a.getFullYear(),a.getMonth(),a.getDate()];for(var c=0;c<a.length;c++)if(a[c]>n[c])return t;return!t}))},te=function(e){var t=(new Date).toDateString();I(e.filter((function(e){return t===new Date(e.objectDate).toDateString()})))},ne=function(e){Q(ee(e,"future"))},ae=function(e){q(ee(e,"past"))},ce=function(){var e=Object(d.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks");case 2:return t=e.sent,e.next=5,t.json();case 5:return n=e.sent,e.abrupt("return",n);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),re=function(){var e=Object(d.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks/".concat(t));case 2:return n=e.sent,e.next=5,n.json();case 5:return a=e.sent,e.abrupt("return",a);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),se=function(){var e=Object(d.a)(u.a.mark((function e(t){var n,a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks",{method:"POST",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 2:return n=e.sent,e.next=5,n.json();case 5:a=e.sent,J([].concat(Object(i.a)(L),[a])),te([].concat(Object(i.a)(X),[a])),y&&ne([].concat(Object(i.a)(K),[a])),F&&ae([].concat(Object(i.a)(V),[a]));case 10:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),oe=function(){var e=Object(d.a)(u.a.mark((function e(t){var a;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,re(t);case 2:a=e.sent,_(a),n&&c(!n),f(!l);case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ie=function(){var e=Object(d.a)(u.a.mark((function e(t){var n,a,c,r;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=$.id,e.next=3,fetch("http://localhost:5000/tasks/".concat(n),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(t)});case 3:return a=e.sent,e.next=6,a.json();case 6:c=e.sent,r=L.map((function(e){return e.id===n?c:e})),J(r),te(r),y&&ne(r),F&&ae(r),f(!1);case 13:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),le=function(){var e=Object(d.a)(u.a.mark((function e(t){var n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("http://localhost:5000/tasks/".concat(t),{method:"DELETE"});case 2:n=L.filter((function(e){return e.id!==t})),J(n),te(n),y&&ne(n),F&&ae(n);case 7:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),ue=function(){var e=Object(d.a)(u.a.mark((function e(t){var n,a,c,r,s;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,re(t);case 2:return n=e.sent,a=Object(o.a)(Object(o.a)({},n),{},{reminder:!n.reminder}),e.next=6,fetch("http://localhost:5000/tasks/".concat(t),{method:"PUT",headers:{"Content-type":"application/json"},body:JSON.stringify(a)});case 6:return c=e.sent,e.next=9,c.json();case 9:r=e.sent,s=L.map((function(e){return e.id===t?Object(o.a)(Object(o.a)({},e),{},{reminder:r.reminder}):e})),J(s),te(s),y&&ne(s),F&&ae(s);case 15:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),de={hidden:{opacity:.2,y:-200,scaleY:.5},visible:{opacity:1,translateY:200,scaleY:1}},je={hidden:{opacity:0,x:-200,scaleX:.5},visible:{opacity:1,translateX:200,scaleX:1}};return Object(O.jsx)(b.a,{children:Object(O.jsx)("div",{className:"container",children:Object(O.jsxs)("div",{className:"row",children:[Object(O.jsxs)(g.a.div,{className:"col border-rounded",initial:"hidden",animate:"visible",variants:de,transition:{delay:.1},children:[Object(O.jsx)(p,{onAdd:function(){l&&f(!l),c(!n)},showAdd:n}),Object(O.jsx)(h.a,{exact:!0,path:"/",render:function(e){return Object(O.jsxs)(O.Fragment,{children:[n&&!l&&Object(O.jsx)(N,{onAdd:se}),l&&!n&&Object(O.jsx)(E,{onEdit:ie,taskToEdit:$,onChange:function(){return _($)}})]})}}),Object(O.jsx)(h.a,{path:"/about",component:C}),Object(O.jsx)(v,{className:"mt-auto"})]}),Object(O.jsx)(h.a,{exact:!0,path:"/",render:function(e){return Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(g.a.div,{className:"col h-100",initial:"hidden",animate:"visible",variants:je,transition:{delay:.2},children:Object(O.jsx)(A,{todayTasks:X,onDelete:le,onEdit:oe,onToggle:ue,showEditTask:l})}),Object(O.jsx)(g.a.div,{className:"col-12",initial:Object(o.a)(Object(o.a)({},de.hidden),{},{opacity:0}),animate:"visible",variants:de,transition:{delay:.3},children:Object(O.jsxs)("div",{className:"row border-rounded p-5",children:[Object(O.jsx)("div",{className:"col-12",children:Object(O.jsxs)("div",{className:"row ".concat(y&&F?"space-between":""),children:[Object(O.jsx)(x,{text:"future tasks",color:"green",onClick:function(){D(!y),ne(L)},showFutureTasks:y}),Object(O.jsx)(x,{text:"pasts tasks",color:"green",onClick:function(){M(!F),ae(L)},showPastTasks:F})]})}),y&&F&&L.length>0?Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)(T,{tasks:K,onDelete:le,onToggle:ue,onEdit:oe,showEditTask:l}),Object(O.jsx)(T,{tasks:V,onDelete:le,onToggle:ue,onEdit:oe,showEditTask:l})]}):y&&L.length>0?Object(O.jsx)(T,{tasks:K,onDelete:le,onToggle:ue,onEdit:oe,showEditTask:l}):F&&L.length>0?Object(O.jsx)(T,{tasks:V,onDelete:le,onToggle:ue,onEdit:oe,showEditTask:l}):""]})})]})}})]})})})},Y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,125)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,r=t.getLCP,s=t.getTTFB;n(e),a(e),c(e),r(e),s(e)}))};s.a.render(Object(O.jsx)(c.a.StrictMode,{children:Object(O.jsx)(P,{})}),document.getElementById("root")),Y()},62:function(e,t,n){}},[[116,1,2]]]);
//# sourceMappingURL=main.3097ecc7.chunk.js.map