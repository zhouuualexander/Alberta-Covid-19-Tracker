import React from 'react';
import Card from '../src/informationCard.js';
import './App.css';
import data from './component/data/data.json';
function App() {
  //Edmonton Zone Information
  var edmontonData = data.filter(city=>city["Alberta Health Services Zone"]==='Edmonton Zone');
  var edmontonActive = edmontonData.filter(active=>active["Case status"]==="Active");
  var edmontonDied = edmontonData.filter(death=>death["Case status"]==="Died");
  var edmontonTotal = edmontonData.length;
  var edmontonTotalActive = edmontonActive.length;
  var edmontonTotalDied = edmontonDied.length;

  //Calgary Zone Information
  var calgaryData = data.filter(city=>city["Alberta Health Services Zone"]==='Calgary Zone');
  var calgaryActive = calgaryData.filter(active=>active["Case status"]==="Active");
  var calgaryDied = calgaryData.filter(death=>death["Case status"]==="Died");
  var calgaryTotal = calgaryData.length;
  var calgaryTotalActive = calgaryActive.length;
  var calgaryTotalDied = calgaryDied.length;

  //Central Zone Information
  var centralData = data.filter(city=>city["Alberta Health Services Zone"]==='Central Zone');
  var centralActive = centralData.filter(active=>active["Case status"]==="Active");
  var centralDied = centralData.filter(death=>death["Case status"]==="Died");
  var centralTotal = centralData.length;
  var centralTotalActive = centralActive.length;
  var centralTotalDied = centralDied.length;

  //North Zone Information
  var northData = data.filter(city=>city['Alberta Health Services Zone']==='North Zone');
  var northActive = northData.filter(active=>active["Case status"]==="Active");
  var northDied = northData.filter(death=>death["Case status"]==="Died");
  var northTotal = northData.length;
  var northTotalActive = northActive.length;
  var northTotalDied = northDied.length;

  //South Zone Information
  var southData = data.filter(city=>city['Alberta Health Services Zone']==='South Zone');
  var southActive = southData.filter(active=>active["Case status"]==="Active");
  var southDied = southData.filter(death=>death["Case status"]==="Died");
  var southTotal = southData.length;
  var southTotalActive = southActive.length;
  var southTotalDied = southDied.length;

  //Unknown
  var unknownData = data.filter(city=>city['Alberta Health Services Zone']==='Unknown');
  var unknownActive = unknownData.filter(active=>active["Case status"]==="Active");
  var unknownDied = unknownData.filter(death=>death["Case status"]==="Died");
  var unknownTotal = unknownData.length;
  var unknownTotalActive = unknownActive.length;
  var unknownTotalDied = unknownDied.length;
  return (
    <body>
    <div className="App_header">
      <h1>Covid-19 Tendency in Alberta</h1>
      
    </div>
    <div style={{width:"50%",
  opacity:"90%"}}>
    <Card name = {edmontonData[0]["Alberta Health Services Zone"]}
      total = {edmontonTotal}
      active = {edmontonTotalActive}
      died = {edmontonTotalDied}/>
    <Card
      name = {calgaryData[0]["Alberta Health Services Zone"]}
      total = {calgaryTotal}
      active = {calgaryTotalActive}
      died = {calgaryTotalDied}/>

      <Card
      name = {centralData[0]["Alberta Health Services Zone"]}
      total = {centralTotal}
      active = {centralTotalActive}
      died = {centralTotalDied}
      />
      <Card
      name = {northData[0]["Alberta Health Services Zone"]}
      total = {northTotal}
      active = {northTotalActive}
      died = {northTotalDied}
      />
      <Card
      name = {southData[0]["Alberta Health Services Zone"]}
      total = {southTotal}
      active = {southTotalActive}
      died = {southTotalDied}/>
      <Card
      name = {unknownData[0]["Alberta Health Services Zone"]}
      total = {unknownTotal}
      active = {unknownTotalActive}
      died = {unknownTotalDied}/>
      
  </div>
    </body>
  );
}

export default App;
