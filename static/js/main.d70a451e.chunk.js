(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{22:function(e,t,a){e.exports=a(37)},27:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(8),l=a.n(o),i=(a(27),a(16)),c=(a(28),a(59)),s=a(55),u=a(60),h=a(58),m=a(61),g=Object(s.a)({root:{minWidth:200,marginLeft:"10%",marginTop:10,marginBottom:10},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}});function f(e){var t=g();return r.a.createElement(u.a,{className:t.root,style:{marginLeft:"3%"}},r.a.createElement(h.a,{style:{justifyContent:"center",textAlign:"center"}},r.a.createElement(m.a,{variant:"h5",component:"h2"},e.name),r.a.createElement(m.a,{variant:"body2",component:"p"},"Total cases: ",e.total,r.a.createElement("br",null),"Active cases: ",e.active,r.a.createElement("br",null),"Deaths: ",e.died)))}var d=function(e){return r.a.createElement(c.a,{container:!0,style:{marginLeft:"7%"}},r.a.createElement(r.a.Fragment,null,e.array.map((function(e){return r.a.createElement(f,{name:e.alberta_health_services_zone,total:e["total case"],active:e["total active"],died:e["total death"]})}))))};function v(e){return r.a.createElement("h1",{style:{marginLeft:"8%"}},e.header)}a(36);var p=a(11),b=function(e){var t=function(e){console.log("Circle onLoad circle: ",e)},a=function(e){console.log("Circle onUnmount circle: ",e)};return r.a.createElement(p.c,{googleMapsApiKey:"AIzaSyA3lBAg4Tn0DQvw9gJ8ZRBKV52nLzCru1E"},r.a.createElement(p.b,{mapContainerStyle:{height:"50vh",width:"82%",marginLeft:"10%",marginBottom:"15%"},zoom:5.2,center:{lat:54.861,lng:-116.4938}},e.cities.map((function(e){return r.a.createElement(p.a,{onLoad:t,onUnmount:a,center:e[0],options:e[1]})}))))};var y=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],o=t[1],l=Object(n.useState)([]),c=Object(i.a)(l,2),s=c[0],u=c[1],h=function(){var e=new Date;return e.setDate(e.getDate()-2),e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()}();function m(e,t){var a=[],n={};for(var r in e)n[e[r][t]]=e[r];for(r in n)a.push(n[r]);return a}Object(n.useEffect)((function(){fetch("https://data.edmonton.ca/resource/jmcu-tz8y.json?$limit=10000000000&$$app_token=CoCmeiMMf8g0Uexp09f2YjYWq",{method:"GET",headers:{"Content-Type":"applicaiton/json"}}).then((function(e){return e.json()})).then((function(e){return u(e)})).catch((function(e){return console.log(e)}))}),[]),Object(n.useEffect)((function(){fetch("https://data.edmonton.ca/resource/jmcu-tz8y.json?$limit=10000000000&$where=date_reported between '2020-03-06' and '".concat(h,"'&$$app_token=CoCmeiMMf8g0Uexp09f2YjYWq"),{method:"GET",headers:{"Content-Type":"applicaiton/json"}}).then((function(e){return e.json()})).then((function(e){return o(e)})).catch((function(e){return console.log(e)}))}),[]);var g=m(s,"alberta_health_services_zone"),f=m(a,"alberta_health_services_zone");function p(e,t){for(var a=[],n=function(n){(o={}).alberta_health_services_zone=t[n].alberta_health_services_zone,l=e.filter((function(e){return e.alberta_health_services_zone===t[n].alberta_health_services_zone})),o["total case"]=l.length,o["total active"]=l.filter((function(e){return"Active"===e.case_status})).length,o["total death"]=l.filter((function(e){return"Died"===e.case_status})).length,a.push(o)},r=0;r<t.length;r++){var o,l;n(r)}return a}var y=p(s,g);if(0===y.length)return null;console.log(y),p(a,f);var k=[[{lat:53.5461,lng:-113.4938},{strokeColor:"#FF0000",strokeOpacity:.8,strokeWeight:2,fillColor:"#FF0000",fillOpacity:.35,clickable:!1,draggable:!1,editable:!1,visible:!0,radius:10*y[1]["total active"],zIndex:1}],[{lat:51.0447,lng:-114.0719},{strokeColor:"#FF0000",strokeOpacity:.8,strokeWeight:2,fillColor:"#FF0000",fillOpacity:.35,clickable:!1,draggable:!1,editable:!1,visible:!0,radius:10*y[0]["total active"],zIndex:1}],[{lat:57,lng:-115},{strokeColor:"#FF0000",strokeOpacity:.8,strokeWeight:2,fillColor:"#FF0000",fillOpacity:.35,clickable:!1,draggable:!1,editable:!1,visible:!0,radius:10*y[3]["total active"],zIndex:1}],[{lat:50,lng:-112},{strokeColor:"#FF0000",strokeOpacity:.8,strokeWeight:2,fillColor:"#FF0000",fillOpacity:.35,clickable:!1,draggable:!1,editable:!1,visible:!0,radius:10*y[4]["total active"],zIndex:1}],[{lat:52,lng:-113.29},{strokeColor:"#FF0000",strokeOpacity:.8,strokeWeight:2,fillColor:"#FF0000",fillOpacity:.35,clickable:!1,draggable:!1,editable:!1,visible:!0,radius:10*y[2]["total active"],zIndex:1}]];return r.a.createElement("div",null,r.a.createElement("div",{className:"App_header"},r.a.createElement(v,{header:"Alberta Covid-19 Tracker"})),r.a.createElement(r.a.Fragment,{style:{width:"20%",opacity:"90%"}},r.a.createElement("h2",{style:{marginLeft:"10%",marginRight:"30%"}}," Alberta total:  ",s.length,"  "),r.a.createElement("h2",{style:{marginLeft:"10%",marginRight:"30%"}}," Alberta today increased cases:  ",s.length-a.length,"  ")),r.a.createElement(d,{array:y}),r.a.createElement(b,{cities:k}))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(y,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.d70a451e.chunk.js.map