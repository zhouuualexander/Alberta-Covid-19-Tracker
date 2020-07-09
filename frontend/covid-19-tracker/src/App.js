import "moment-timezone";
import React, { useState, useEffect } from "react";
import Card from "../src/component/informationCard.js";
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Header from './component/header';
import "./App.css";
import * as d3 from "d3";
import BarChart from './component/dataVisualize/barchart';
function App() {
  /***********get data from API ******************************************************8 */
  var albertaData = [];
  const [abData, setabData] = useState( albertaData );
  useEffect(() => {
      fetch("https://data.edmonton.ca/resource/jmcu-tz8y.json?$limit=10000000000&$$app_token=CoCmeiMMf8g0Uexp09f2YjYWq",{
        method:'GET',
        headers:{
          'Content-Type':'applicaiton/json',
        }
      }).then(resp=>resp.json())
      .then(resp=> setabData(resp))
      .catch(error=> console.log(error))
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
        <Header header = 'Alberta Covid-19 Tracker' ></Header>
      </div>
      
        <React.Fragment style={{ width: "20%", opacity: "90%" }}>
        <h2 style={{marginLeft:"10%" ,marginRight:"30%"}}> Alberta total:  {abData.length}</h2>
        <Grid container >
        <React.Fragment>
        
          {array.map(function (zone) {
            return (
                <Card
                  name={zone["alberta_health_services_zone"]}
                  total={zone["total case"]}
                  active={zone["total active"]}
                  died={zone["total death"]}
                />
        
            );
          })}
          </React.Fragment>
          </Grid>
        </React.Fragment>
       

     
    </div>
  );
}

export default App;
