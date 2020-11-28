(this["webpackJsonpcovid-19-tracker"]=this["webpackJsonpcovid-19-tracker"]||[]).push([[0],{156:function(e,t,a){e.exports=a(370)},161:function(e,t,a){},169:function(e,t,a){},370:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(24),c=a.n(o),i=(a(161),a(93)),l=(a(162),a(393)),s=a(389),u=a(394),m=a(392),h=a(395),f=Object(s.a)({root:{minWidth:200,marginLeft:"10%",marginTop:10,marginBottom:10},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}});function g(e){var t=f();return r.a.createElement(u.a,{className:t.root,style:{marginLeft:"3%"}},r.a.createElement(m.a,{style:{justifyContent:"center",textAlign:"center"}},r.a.createElement(h.a,{variant:"h5",component:"h2"},e.name),r.a.createElement(h.a,{variant:"body2",component:"p"},"Total cases: ",e.total,r.a.createElement("br",null),"Active cases: ",e.active,r.a.createElement("br",null),"Deaths: ",e.died)))}var d=function(e){return r.a.createElement(l.a,{container:!0,style:{marginLeft:"7%"}},r.a.createElement(r.a.Fragment,null,e.array.map((function(e){return r.a.createElement(g,{name:e.alberta_health_services_zone,total:e["total case"],active:e["total active"],died:e["total death"]})}))))};function v(e){return r.a.createElement("h1",{style:{marginLeft:"8%"}},e.header)}a(169),a(170);var p=a(94),E=a(151),_=(a(369),function(){var e={lat:53.5461,lng:-116.4938};return r.a.createElement(p.b,{googleMapsApiKey:"AIzaSyA3lBAg4Tn0DQvw9gJ8ZRBKV52nLzCru1E"},r.a.createElement(p.a,{mapContainerStyle:{height:"50vh",width:"72%",marginLeft:"10%",marginBottom:"15%"},zoom:6,center:e},r.a.createElement(E.Circle,{def:e,radius:"100"})))});var b=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],o=t[1],c=Object(n.useState)([]),l=Object(i.a)(c,2),s=l[0],u=l[1],m=function(){var e=new Date;return e.setDate(e.getDate()-2),e.getFullYear()+"-"+(e.getMonth()+1)+"-"+e.getDate()}();function h(e,t){var a=[],n={};for(var r in e)n[e[r][t]]=e[r];for(r in n)a.push(n[r]);return a}Object(n.useEffect)((function(){fetch("https://data.edmonton.ca/resource/jmcu-tz8y.json?$limit=10000000000&$$app_token=CoCmeiMMf8g0Uexp09f2YjYWq",{method:"GET",headers:{"Content-Type":"applicaiton/json"}}).then((function(e){return e.json()})).then((function(e){return u(e)})).catch((function(e){return console.log(e)}))}),[]),Object(n.useEffect)((function(){fetch("https://data.edmonton.ca/resource/jmcu-tz8y.json?$limit=10000000000&$where=date_reported between '2020-03-06' and '".concat(m,"'&$$app_token=CoCmeiMMf8g0Uexp09f2YjYWq"),{method:"GET",headers:{"Content-Type":"applicaiton/json"}}).then((function(e){return e.json()})).then((function(e){return o(e)})).catch((function(e){return console.log(e)}))}),[]);var f=h(s,"alberta_health_services_zone"),g=h(a,"alberta_health_services_zone");function p(e,t){for(var a=[],n=function(n){(o={}).alberta_health_services_zone=t[n].alberta_health_services_zone,c=e.filter((function(e){return e.alberta_health_services_zone===t[n].alberta_health_services_zone})),o["total case"]=c.length,o["total active"]=c.filter((function(e){return"Active"===e.case_status})).length,o["total death"]=c.filter((function(e){return"Died"===e.case_status})).length,a.push(o)},r=0;r<t.length;r++){var o,c;n(r)}return a}var E=p(s,f);return p(a,g),r.a.createElement("div",null,r.a.createElement("div",{className:"App_header"},r.a.createElement(v,{header:"Alberta Covid-19 Tracker"})),r.a.createElement(r.a.Fragment,{style:{width:"20%",opacity:"90%"}},r.a.createElement("h2",{style:{marginLeft:"10%",marginRight:"30%"}}," Alberta total:  ",s.length,"  "),r.a.createElement("h2",{style:{marginLeft:"10%",marginRight:"30%"}}," Alberta today increased cases:  ",s.length-a.length,"  ")),r.a.createElement(d,{array:E}),r.a.createElement(_,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(b,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[156,1,2]]]);
//# sourceMappingURL=main.088b5a3f.chunk.js.map