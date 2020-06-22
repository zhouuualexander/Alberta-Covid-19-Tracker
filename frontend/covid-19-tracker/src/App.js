import Moment from 'react-moment';
import 'moment-timezone';
import React, { useState, useEffect } from "react";
import Card from '../src/informationCard.js';
import './App.css';
import axios from 'axios';
import data from './component/data/data.json';

import Paper from './paper';
function App() {
/*----------------------------------------removeDuplicates-------------------------*/
  function removeDuplicates(originalArray, prop) {
    var newArray = [];
    var lookupObject  = {};
    for(var i in originalArray) {
       lookupObject[originalArray[i][prop]] = originalArray[i];
    }
    for(i in lookupObject) {
        newArray.push(lookupObject[i]);
    }
     return newArray;
}
//reference:https://stackoverflow.com/questions/2218999/remove-duplicates-from-an-array-of-objects-in-javascript
var uniqueArray = removeDuplicates(data, "Alberta Health Services Zone");
/*--------------------------------------Finalize the array-------------------------*/
 function finalizeArray(originalArray,uniqueArray){
  var  finalArray= [];
  for(var i=0; i < uniqueArray.length; i++){
    var newObject = {};
    newObject["Alberta Health Services Zone"] = uniqueArray[i]["Alberta Health Services Zone"];
    var zoneArray = originalArray.filter(city=>city["Alberta Health Services Zone"]===uniqueArray[i]["Alberta Health Services Zone"])
    newObject["total case"] = zoneArray.length;
    newObject["total active"] = zoneArray.filter(active=>active["Case status"]==="Active").length;
    newObject["total death"]  = zoneArray.filter(death=>death["Case status"]==="Died").length;
   finalArray.push(newObject)
  }
 return finalArray;
 }
 /*---------------------------------Array has been finalized-----------------------*/
 var array = finalizeArray(data,uniqueArray); 
 
  return (
    <div>
    <div className="App_header">
      <h1 style = {{marginLeft:"2%"}}>Covid-19 Tendency in Alberta</h1>
    </div>
    <div style={{display:"flex"}}>

    <div style={{width:"20%",
  opacity:"90%",}}>
     
    {array.map(function(zone){return(
       <Card name = {zone["Alberta Health Services Zone"]}
       total = {zone["total case"]}
       active = {zone["total active"]}
       died = {zone["total death"]}
       />);
    })}     
  </div>
  </div>
    </div>
  );
}

export default App;
