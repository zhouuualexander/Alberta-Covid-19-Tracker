import "moment-timezone";
import React, { useState, useEffect } from "react";
import CityInformation from './components/cityInformation'
import Header from './components/header';
import "./App.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLungsVirus} from '@fortawesome/free-solid-svg-icons'
import MapContainer from './components/dataVisualize/map';

function App() {
  /***********get data from API ******************************************************8 */
  var albertaData = [];
  var albertaOlddata = []
  const [abOlddata, setabOlddata] = useState( albertaOlddata );
  const [abData, setabData] = useState( albertaData );

  /**
   * /**
    * @param {void} getYesterdaysDate - this function is help to get yesterday's date .
    */

function getYesterdaysDate() {
  var date = new Date();
  date.setDate(date.getDate()-2);
  return date.getFullYear() + '-' + (date.getMonth()+1) + '-' + date.getDate();
}

var yesterday = getYesterdaysDate()


  useEffect(() => {
      fetch(`https://data.edmonton.ca/resource/jmcu-tz8y.json?$limit=10000000000&$$app_token=CoCmeiMMf8g0Uexp09f2YjYWq`,{
        method:'GET',
        headers:{
          'Content-Type':'applicaiton/json',
        }
      }).then(resp=>resp.json())
      .then(resp=> setabData(resp))
      .catch(error=> console.log(error))
  }, []);
  /**************************************************************************** */
  useEffect(() => {
    fetch(`https://data.edmonton.ca/resource/jmcu-tz8y.json?$limit=10000000000&$where=date_reported between '2020-03-06' and '${yesterday}'&$$app_token=CoCmeiMMf8g0Uexp09f2YjYWq`,{
      method:'GET',
      headers:{
        'Content-Type':'applicaiton/json',
      }
    }).then(resp=>resp.json())
    .then(resp=> setabOlddata(resp))
    .catch(error=> console.log(error))
}, []);
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
  var uniqueOldArray = removeDuplicates(abOlddata,"alberta_health_services_zone")
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
  var oldarray = finalizeArray(abOlddata,uniqueOldArray);
  return (
    <div>

      <div className="App_header">
        <Header header = 'Alberta Covid-19 Tracker' ></Header>
        
       
      </div>
        <React.Fragment style={{ width: "20%", opacity: "90%" }}>
        <h2 style={{marginLeft:"10%" ,marginRight:"30%"}}> Alberta total:  {abData.length}  </h2>
        <h2 style={{marginLeft:"10%" ,marginRight:"30%"}}> Alberta today increased cases:  {abData.length-abOlddata.length}  </h2>
       
        </React.Fragment>
       <CityInformation array={array} />
       <MapContainer/>

     
    </div>
  );
}

export default App;
