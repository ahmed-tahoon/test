(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{1363:function(e,t,a){"use strict";a.r(t);var n=a(96),l=a(12),r=a(24),c=a(0),o=a.n(c),i=a(4),d=a.n(i),u=a(1168),m=a(1112),s=a.n(m),f=a(1170),p=a.n(f),b=a(1171),v=a.n(b),g=a(1172),h=a.n(g),y=a(1173),E=a.n(y),j=a(465),O=a(6),D=a(70),C=a(982),k=a(957),w=a(958),N=a(466),A=(a(1174),a(1175),a(1176),a(1177),a(33)),x=a(20),M=a(26),Y=a(9),W=a(2),T=a(3),S=a.n(T),V=a(79),B=a(996),G=a(980),P=a(1113),R=a(961),H=a(973),I=a(917),J=a(967),z=a(262),F=a.n(z),L=Object(j.a)(function(e){return{root:{position:"absolute",top:"50%",left:"50%",transform:"translate(-50%, -50%)",outline:"none",boxShadow:e.shadows[20],width:700,maxHeight:"100%",overflowY:"auto",maxWidth:"100%"},field:{marginTop:e.spacing(3)},cancelButton:{marginLeft:"auto"},confirmButton:{color:e.palette.white,backgroundColor:O.a.green[600],"&:hover":{backgroundColor:O.a.green[900]}}}}),q=Object(c.forwardRef)(function(e,t){var a=e.event,n=e.onDelete,i=e.onCancel,u=e.onAdd,m=e.onEdit,s=e.className,f=Object(Y.a)(e,["event","onDelete","onCancel","onAdd","onEdit","className"]),p=L(),b={title:"Event title",desc:"Event description",allDay:!1,start:d()().toDate(),end:d()().toDate()},v=Object(c.useState)(a||b),g=Object(l.a)(v,2),h=g[0],y=g[1],E=a?"edit":"add",j=function(e){e.persist(),y(function(t){return Object(r.a)({},t,Object(M.a)({},e.target.name,"checkbox"===e.target.type?e.target.checked:e.target.value))})};return o.a.createElement(k.a,Object.assign({},f,{className:Object(W.a)(p.root,s),ref:t}),o.a.createElement("form",null,o.a.createElement(w.a,null,o.a.createElement(V.a,{align:"center",gutterBottom:!0,variant:"h3"},"add"===E?"Add Event":"Edit Event"),o.a.createElement(B.a,{className:p.field,fullWidth:!0,label:"Title",name:"title",onChange:j,value:h.title,variant:"outlined"}),o.a.createElement(B.a,{className:p.field,fullWidth:!0,label:"Description",name:"desc",onChange:j,value:h.desc,variant:"outlined"}),o.a.createElement(G.a,{className:p.field,control:o.a.createElement(P.a,{checked:h.allDay,name:"allDay",onChange:j}),label:"All day"}),o.a.createElement(B.a,{className:p.field,defaultValue:d()(h.start).format("YYYY-MM-DDThh:mm:ss"),fullWidth:!0,label:"Start date",name:"start",onChange:j,type:"datetime-local",variant:"outlined"}),o.a.createElement(B.a,{className:p.field,defaultValue:d()(h.end).format("YYYY-MM-DDThh:mm:ss"),disabled:h.allDay,fullWidth:!0,label:"End date",name:"end",onChange:j,type:"datetime-local",variant:"outlined"})),o.a.createElement(R.a,null),o.a.createElement(H.a,null,o.a.createElement(I.a,{edge:"start",onClick:function(){n&&n(a)}},o.a.createElement(F.a,null)),o.a.createElement(J.a,{className:p.cancelButton,onClick:i,variant:"contained"},"Cancel"),"add"===E?o.a.createElement(J.a,{className:p.confirmButton,onClick:function(){h.title&&h.desc&&u(Object(r.a)({},h,{id:S()()}))},variant:"contained"},"Add"):o.a.createElement(J.a,{className:p.confirmButton,onClick:function(){h.title&&h.desc&&m(h)},variant:"contained"},"Save"))))}),K=a(977),Q=a(987),U=a(1e3),X=a(960),Z=a(1178),$=a.n(Z),_=a(1179),ee=a.n(_),te=a(1180),ae=a.n(te),ne=a(1181),le=a.n(ne),re=Object(j.a)(function(){return{root:{}}}),ce=function(e){var t=e.date,a=e.view,n=e.onDatePrev,l=e.onDateNext,r=e.onEventAdd,c=e.onViewChange,i=e.onDateToday,u=e.className,m=Object(Y.a)(e,["date","view","onDatePrev","onDateNext","onEventAdd","onViewChange","onDateToday","className"]),s=re(),f=[{label:"Month",value:"dayGridMonth",icon:$.a},{label:"Week",value:"timeGridWeek",icon:ee.a},{label:"Day",value:"timeGridDay",icon:ae.a},{label:"Agenda",value:"listWeek",icon:le.a}];return o.a.createElement("div",Object.assign({},m,{className:Object(W.a)(s.root,u)}),o.a.createElement(K.a,{alignItems:"flex-end",container:!0,justify:"space-between",spacing:3},o.a.createElement(K.a,{item:!0},o.a.createElement(V.a,{component:"h2",gutterBottom:!0,variant:"overline"},"Calendar"),o.a.createElement(V.a,{component:"h1",variant:"h3"},"Here's what you planned")),o.a.createElement(K.a,{item:!0},o.a.createElement(J.a,{color:"primary",onClick:r,variant:"contained"},"Add event"))),o.a.createElement(K.a,{alignItems:"center",container:!0,justify:"space-between",spacing:3},o.a.createElement(K.a,{item:!0},o.a.createElement(Q.a,null,o.a.createElement(J.a,{onClick:n},"Prev"),o.a.createElement(J.a,{onClick:i},"Today"),o.a.createElement(J.a,{onClick:l},"Next"))),o.a.createElement(U.a,{smDown:!0},o.a.createElement(K.a,{item:!0},o.a.createElement(V.a,{variant:"h3"},d()(t).format("MMMM YYYY"))),o.a.createElement(K.a,{item:!0},f.map(function(e){var t=e.icon;return o.a.createElement(X.a,{key:e.value,title:e.label},o.a.createElement(I.a,{color:e.value===a?"primary":"default",onClick:function(){return c(e.value)}},o.a.createElement(t,null)))})))))},oe=Object(j.a)(function(e){return{root:{height:"100%",padding:e.spacing(3),"& .fc-unthemed td":{borderColor:e.palette.divider},"& .fc-widget-header":{backgroundColor:O.a.grey[50]},"& .fc-axis":Object(r.a)({},e.typography.body2),"& .fc-list-item-time":Object(r.a)({},e.typography.body2),"& .fc-list-item-title":Object(r.a)({},e.typography.body1),"& .fc-list-heading-main":Object(r.a)({},e.typography.h6),"& .fc-list-heading-alt":Object(r.a)({},e.typography.h6),"& .fc th":{borderColor:e.palette.divider},"& .fc-day-header":Object(r.a)({},e.typography.subtitle2,{fontWeight:500,color:e.palette.text.secondary,padding:e.spacing(1),backgroundColor:O.a.grey[50]}),"& .fc-day-top":Object(r.a)({},e.typography.body2),"& .fc-highlight":{backgroundColor:O.a.blueGrey[50]},"& .fc-event":{backgroundColor:e.palette.primary.main,color:e.palette.primary.contrastText,borderWidth:2,opacity:.9,"& .fc-time":Object(r.a)({},e.typography.h6,{color:"inherit"}),"& .fc-title":Object(r.a)({},e.typography.body1,{color:"inherit"})},"& .fc-list-empty":Object(r.a)({},e.typography.subtitle1)},card:{marginTop:e.spacing(3)}}}),ie=function(){var e=oe(),t=Object(c.useRef)(null),a=Object(D.a)(),r=Object(C.a)(a.breakpoints.down("sm")),i=Object(c.useState)(r?"listWeek":"dayGridMonth"),m=Object(l.a)(i,2),f=m[0],b=m[1],g=Object(c.useState)(d()("2019-07-30 08:00:00").toDate()),y=Object(l.a)(g,2),j=y[0],O=y[1],M=Object(c.useState)([]),Y=Object(l.a)(M,2),W=Y[0],T=Y[1],S=Object(c.useState)({open:!1,event:null}),V=Object(l.a)(S,2),B=V[0],G=V[1];Object(c.useEffect)(function(){var e=!0;return e&&A.a.get("/api/calendar").then(function(e){return T(e.data.events)}),function(){e=!1}},[]),Object(c.useEffect)(function(){var e=t.current.getApi(),a=r?"listWeek":"dayGridMonth";e.changeView(a),b(a)},[r]);var P=function(){G({open:!1,event:null})};return o.a.createElement(x.k,{className:e.root,title:"Calendar"},o.a.createElement(ce,{date:j,onDateNext:function(){var e=t.current.getApi();e.next(),O(e.getDate())},onDatePrev:function(){var e=t.current.getApi();e.prev(),O(e.getDate())},onDateToday:function(){var e=t.current.getApi();e.today(),O(e.getDate())},onEventAdd:function(){G({open:!0,event:null})},onViewChange:function(e){t.current.getApi().changeView(e),b(e)},view:f}),o.a.createElement(k.a,{className:e.card},o.a.createElement(w.a,null,o.a.createElement(u.a,{allDayMaintainDuration:!0,defaultDate:j,defaultView:f,droppable:!0,editable:!0,eventClick:function(e){var t=W.find(function(t){return t.id===e.event.id});G({open:!0,event:t})},eventResizableFromStart:!0,events:W,header:!1,height:800,plugins:[s.a,p.a,v.a,h.a,E.a],ref:t,rerenderDelay:10,selectable:!0,weekends:!0}))),o.a.createElement(N.a,{onClose:P,open:B.open},o.a.createElement(q,{event:B.event,onAdd:function(e){T(function(t){return[].concat(Object(n.a)(t),[e])}),G({open:!1,event:null})},onCancel:P,onDelete:function(e){T(function(t){return t.filter(function(t){return t.id!==e.id})}),G({open:!1,event:null})},onEdit:function(e){T(function(t){return t.map(function(t){return t.id===e.id?e:t})}),G({open:!1,event:null})}})))};a.d(t,"default",function(){return ie})}}]);
//# sourceMappingURL=35.2d2afa97.chunk.js.map