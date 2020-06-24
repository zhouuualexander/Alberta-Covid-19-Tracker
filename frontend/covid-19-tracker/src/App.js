import "moment-timezone";
import React, { useState, useEffect } from "react";
import Card from "../src/informationCard.js";
import "./App.css";
import axios from "axios";
import * as d3 from "d3";
import BarChart from './component/dataVisualize/barchart';
function App() {
  /***********get data from API ******************************************************8 */
  var albertaData = [];
  const [abData, setabData] = useState( albertaData );
  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "http://data.edmonton.ca/resource/jmcu-tz8y.json?$limit=10000000000&$$app_token=CoCmeiMMf8g0Uexp09f2YjYWq"
       
      );
      console.log(result);
      setabData(result.data);
    
    };
    
    fetchData();
  }, []);
  /**************************************************************************** */
  /*----------------------------------------removeDuplicates-------------------------*/
  function removeDuplicates(originalArray, prop) {
    var newArray = [];
    var lookupObject = {};
    for (var i in originalArray) {
      lookupObject[originalArray[i][prop]] = originalArray[i];
    }
    for (i in lookupObject) {
      newArray.push(lookupObject[i]);
    }
    return newArray;
  }
  //reference:https://stackoverflow.com/questions/2218999/remove-duplicates-from-an-array-of-objects-in-javascript
  var uniqueArray = removeDuplicates(abData, "alberta_health_services_zone");
  /*--------------------------------------Finalize the array-------------------------*/
  function finalizeArray(originalArray, uniqueArray) {
    var finalArray = [];
    for (let i = 0; i < uniqueArray.length; i++) {
      var newObject = {};
      newObject["alberta_health_services_zone"] =
        uniqueArray[i]["alberta_health_services_zone"];
      var zoneArray = originalArray.filter(
        (city) =>
          city["alberta_health_services_zone"] ===
          uniqueArray[i]["alberta_health_services_zone"]
      );
      newObject["total case"] = zoneArray.length;
      newObject["total active"] = zoneArray.filter(
        (active) => active["case_status"] === "Active"
      ).length;
      newObject["total death"] = zoneArray.filter(
        (death) => death["case_status"] === "Died"
      ).length;
      finalArray.push(newObject);
    }
    return finalArray;
  }
  /*---------------------------------Array has been finalized-----------------------*/
  var array = finalizeArray(abData, uniqueArray);
  
  return (
    <div>
      <div className="App_header">
        <h1 style={{ marginLeft: "2%" }}>Covid-19 Tendency in Alberta</h1>
      </div>
      <div style={{ display: "flex" }}>
  
        <div style={{ width: "20%", opacity: "90%" }}>
        <h2 style={{marginLeft:"10%"}}>Alberta total is: {abData.length}</h2>
        {/* <BarChart /> */}
          {array.map(function (zone) {
            return (
              <div>
                <Card
                  name={zone["alberta_health_services_zone"]}
                  total={zone["total case"]}
                  active={zone["total active"]}
                  died={zone["total death"]}
                />
              </div>
            );
          })}
        </div>
        
      </div>
    </div>
  );
}

export default App;
