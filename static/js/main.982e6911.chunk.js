(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{46:function(e,t,a){e.exports=a(62)},51:function(e,t,a){},55:function(e,t,a){},60:function(e,t,a){e.exports=a.p+"static/media/edmonton-banner.37de0d12.jpg"},61:function(e,t,a){e.exports=a.p+"static/media/calgary_final_revised.b96e6bf0.jpg"},62:function(e,t,a){"use strict";a.r(t);var n=a(0),o=a.n(n),r=a(11),l=a.n(r),i=(a(51),a(27)),c=(a(31),a(55),a(63)),s=a(90),m=a(15),u=function(e){var t={lat:58.545457,lng:-130.843898};return o.a.createElement(m.d,{googleMapsApiKey:"AIzaSyA3lBAg4Tn0DQvw9gJ8ZRBKV52nLzCru1E"},o.a.createElement(m.b,{mapContainerStyle:{height:"30vh",width:"90vh",marginLeft:"auto",marginRight:"auto"},zoom:4.8,center:{lat:54.861,lng:-116.4938}},e.cities.map((function(e){return o.a.createElement("div",{key:e[0].lat},o.a.createElement(m.a,{center:e[0],options:e[1]}),53.5461===e[0].lat?o.a.createElement(m.c,{position:t},o.a.createElement("div",{style:{backgroundColor:"white",opacity:.75,padding:12,width:"200px"}},o.a.createElement("div",{style:{fontSize:16,fontColor:"#08233B"}},"Circle is about active cases"))):null)}))))},h=a(81),d=a(92),g=a(83),f=Object(h.a)({root:{minWidth:260,marginLeft:10,marginTop:10,marginBottom:10,marginRight:10},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}}),p=function(e){var t=f();return"Edmonton Zone"===e.name||"Calgary Zone"===e.name?o.a.createElement(d.a,{className:t.root},o.a.createElement(g.a,{style:{margin:"0",justifyContent:"center",textAlign:"center",fontSize:"3vw",backgroundColor:"#AEC6EC"}},o.a.createElement(c.a,{variant:"h4",component:"h2",style:{fontSize:"2vw"}},e.name),o.a.createElement(c.a,{variant:"body1",component:"p",style:{fontSize:"1vw"}},"Total cases: ",e.total,o.a.createElement("br",null),"Active cases: ",e.active,o.a.createElement("br",null),"Deaths: ",e.died))):o.a.createElement(d.a,{className:t.root},o.a.createElement(g.a,{style:{margin:"0",justifyContent:"center",textAlign:"center"}},o.a.createElement(c.a,{variant:"h5",component:"h2"},e.name),o.a.createElement(c.a,{variant:"body2",color:"textSecondary",component:"p"},"Total cases: ",e.total)))},b=Object(h.a)({root:{display:"flex",justifyContent:"left"}}),v=function(e){var t=b();return o.a.createElement(o.a.Fragment,null,e.array.map((function(e){return"Edmonton Zone"!==e.alberta_health_services_zone&&"Calgary Zone"!==e.alberta_health_services_zone&&"Unknown"!==e.alberta_health_services_zone?o.a.createElement(p,{className:t.root,key:e.alberta_health_services_zone,name:e.alberta_health_services_zone,total:e["total case"]}):""})))},y=a(84),E=a(86),_=a(85),k=a(87),C=Object(h.a)({root:{maxWidth:400,marginLeft:10,marginTop:10,marginBottom:10,marginRight:10}});function F(e){var t=C();return o.a.createElement(o.a.Fragment,null,e.array.map((function(e){return"Edmonton Zone"===e.alberta_health_services_zone||"Calgary Zone"===e.alberta_health_services_zone?o.a.createElement(d.a,{className:t.root,key:e.alberta_health_services_zone},o.a.createElement(y.a,{disabled:!0},o.a.createElement(_.a,{component:"img",alt:"Edmonton Zone"===e.alberta_health_services_zone?"Edmonton Zone":"Calgary Zone",height:"300px",src:"Edmonton Zone"===e.alberta_health_services_zone?a(60):a(61),title:"Edmonton Zone"===e.alberta_health_services_zone?"Edmonton Zone":"Calgary Zone"}),o.a.createElement(g.a,null,o.a.createElement(c.a,{gutterBottom:!0,variant:"h5",component:"h2"},e.alberta_health_services_zone),o.a.createElement(c.a,{variant:"body2",color:"textSecondary",component:"p"},"Total cases"," ",e["total case"]),o.a.createElement(c.a,{variant:"body2",color:"textSecondary",component:"p"},"Active cases"," ",e["total active"]),o.a.createElement(c.a,{variant:"body2",color:"textSecondary",component:"p"},"Death cases"," ",e["total death"]))),o.a.createElement(E.a,null,o.a.createElement(k.a,{size:"small",color:"primary",target:"_blank",href:"https://www.edmonton.ca/programs_services/emergency_preparedness/covid-19.aspx"},"Learn More"))):""})))}var z=a(89),x=a(33),j=a(34),O=a(36),w=a(35),W=a(88),S=function(e){Object(O.a)(a,e);var t=Object(w.a)(a);function a(){return Object(x.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return o.a.createElement(c.a,{variant:"body2",color:"textSecondary",align:"center"},"Copyright \xa9 ",o.a.createElement(W.a,{color:"inherit",href:"https://www.linkedin.cn/in/zijian-zhou/"},"Zijian Zhou")," ",(new Date).getFullYear(),".")}}]),a}(o.a.Component);var Z=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],r=t[1],l=Object(n.useState)([]),m=Object(i.a)(l,2),h=m[0],d=m[1],g=function(){var e=new Date;return e.setDate(e.getDate()-2),e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()}();Object(n.useEffect)((function(){fetch("https://data.edmonton.ca/resource/jmcu-tz8y.json?$limit=10000000000&$$app_token=CoCmeiMMf8g0Uexp09f2YjYWq",{method:"GET",headers:{"Content-Type":"applicaiton/json"}}).then((function(e){return e.json()})).then((function(e){return d(e)})).catch((function(e){return console.log(e)}))}),[]),Object(n.useEffect)((function(){fetch("https://data.edmonton.ca/resource/jmcu-tz8y.json?$limit=10000000000&$where=date_reported between '2020-03-06' and '".concat(g,"'&$$app_token=CoCmeiMMf8g0Uexp09f2YjYWq"),{method:"GET",headers:{"Content-Type":"applicaiton/json"}}).then((function(e){return e.json()})).then((function(e){return r(e)})).catch((function(e){return console.log(e)}))}),[g]);var f=function(e,t){for(var a=[],n=function(n){var o={};o.alberta_health_services_zone=t[n].alberta_health_services_zone;var r=e.filter((function(e){return e.alberta_health_services_zone===t[n].alberta_health_services_zone}));o["total case"]=r.length,o["total active"]=r.filter((function(e){return"Active"===e.case_status})).length,o["total death"]=r.filter((function(e){return"Died"===e.case_status})).length,a.push(o)},o=0;o<t.length;o++)n(o);return a}(h,function(e,t){var a=[],n={};for(var o in e)n[e[o][t]]=e[o];for(var r in n)a.push(n[r]);return a}(h,"alberta_health_services_zone"));if(0===f.length)return null;var p=[[{lat:53.5461,lng:-113.4938},{strokeColor:"#FF00FF",strokeOpacity:.8,strokeWeight:2,fillColor:"#FF00FF",fillOpacity:.35,clickable:!1,draggable:!1,editable:!1,visible:!0,radius:100*f[1]["total active"],zIndex:1},{strokeColor:"#00FF00",strokeOpacity:.8,strokeWeight:2,fillColor:"#00FF00",fillOpacity:.35,clickable:!1,draggable:!1,editable:!1,visible:!0,radius:10*f[1]["total case"],zIndex:1}],[{lat:51.0447,lng:-114.0719},{strokeColor:"#FFFF00",strokeOpacity:.8,strokeWeight:2,fillColor:"#FFFF00",fillOpacity:.35,clickable:!1,draggable:!1,editable:!1,visible:!0,radius:100*f[0]["total active"],zIndex:1},{strokeColor:"#00FF00",strokeOpacity:.8,strokeWeight:2,fillColor:"#00FF00",fillOpacity:.35,clickable:!1,draggable:!1,editable:!1,visible:!0,radius:10*f[0]["total case"],zIndex:1}],[{lat:57,lng:-115},{strokeColor:"#FF0000",strokeOpacity:.8,strokeWeight:2,fillColor:"#FF0000",fillOpacity:.35,clickable:!1,draggable:!1,editable:!1,visible:!0,radius:100*f[3]["total active"],zIndex:1},{strokeColor:"#00FF00",strokeOpacity:.8,strokeWeight:2,fillColor:"#00FF00",fillOpacity:.35,clickable:!1,draggable:!1,editable:!1,visible:!0,radius:10*f[3]["total case"],zIndex:1}],[{lat:50,lng:-112},{strokeColor:"#FF0000",strokeOpacity:.8,strokeWeight:2,fillColor:"#FF0000",fillOpacity:.35,clickable:!1,draggable:!1,editable:!1,visible:!0,radius:100*f[4]["total active"],zIndex:1},{strokeColor:"#00FF00",strokeOpacity:.8,strokeWeight:2,fillColor:"#00FF00",fillOpacity:.35,clickable:!1,draggable:!1,editable:!1,visible:!0,radius:10*f[4]["total case"],zIndex:1}],[{lat:52,lng:-113.29},{strokeColor:"#FF0000",strokeOpacity:.8,strokeWeight:2,fillColor:"#FF0000",fillOpacity:.35,clickable:!1,draggable:!1,editable:!1,visible:!0,radius:100*f[2]["total active"],zIndex:1},{strokeColor:"#00FF00",strokeOpacity:.8,strokeWeight:2,fillColor:"#00FF00",fillOpacity:.35,clickable:!1,draggable:!1,editable:!1,visible:!0,radius:10*f[2]["total case"],zIndex:1}]];return o.a.createElement("div",null,o.a.createElement(z.a,{disableGutters:!0,maxWidth:!1,style:{backgroundColor:"#ffffff",overflow:"scroll",minHeight:"100vh"}},o.a.createElement(s.a,{display:"flex",justifyContent:"center",bgcolor:"#3f8aac",height:"auto",alignItems:"center"},o.a.createElement(c.a,{variant:"h1",component:"h1",gutterBottom:!1,noWrap:!0,align:"center",style:{fontSize:"2vw",height:"auto",marginTop:"20px",marginBottom:"20px",color:"#e8f7fb"}},"Alberta Covid-19 Tracker")),o.a.createElement(s.a,{display:"flex",justifyContent:"center"},o.a.createElement(c.a,{variant:"h4",component:"h1",gutterBottom:!1,noWrap:!0,style:{fontSize:"1vw",marginTop:"10px"}},"Alberta total: ",h.length)),o.a.createElement(s.a,{display:"flex",justifyContent:"center"},o.a.createElement(c.a,{variant:"h4",component:"h1",gutterBottom:!0,noWrap:!0,style:{fontSize:"1vw"}},"Alberta today increased cases: ",h.length-a.length)),o.a.createElement(s.a,{display:"flex",justifyContent:"center",marginLeft:"auto"},o.a.createElement(F,{array:f})),o.a.createElement(s.a,{display:"flex",justifyContent:"center",marginTop:1,marginLeft:"auto",marginRight:"auto"},o.a.createElement(v,{array:f})),o.a.createElement(s.a,{display:"flex",justifyContent:"center",marginTop:1},o.a.createElement(u,{cities:p})),o.a.createElement("footer",null,o.a.createElement(S,null))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(o.a.createElement(o.a.StrictMode,null,o.a.createElement(Z,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[46,1,2]]]);
//# sourceMappingURL=main.982e6911.chunk.js.map