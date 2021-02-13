import "moment-timezone";
import React, { useState, useEffect } from "react";
import CityInformation from "./components/cityInformation";
import "./App.css";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Link from "@material-ui/core/Link";
import Grid from '@material-ui/core/Grid';
import MapContainer from "./components/dataVisualize/map";
import OtherInformation from "./components/otherinformation";
import ImgMediaCard from "./components/imgMediaCard";

class Copyright extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Typography variant="body2" color="textSecondary" align="center">
        {"Copyright © "}
        <Link color="inherit" href="https://www.linkedin.cn/in/zijian-zhou/">
          {"Zijian Zhou"}
        </Link>{" "}
        {new Date().getFullYear()}
        {"."}
      </Typography>
    );
  }
}
function App() {
  /***********get data from API ******************************************************8 */
  var albertaData = [];
  var albertaOlddata = [];
  const [abOlddata, setabOlddata] = useState(albertaOlddata);
  const [abData, setabData] = useState(albertaData);

  /**
   * /**
   * @param {void} getYesterdaysDate - this function is help to get yesterday's date .
   */

  function getYesterdaysDate() {
    var date = new Date();
    date.setDate(date.getDate() - 2);
    return (
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
    );
  }

  var yesterday = getYesterdaysDate();

  useEffect(() => {
    fetch(
      `https://data.edmonton.ca/resource/jmcu-tz8y.json?$limit=10000000000&$$app_token=CoCmeiMMf8g0Uexp09f2YjYWq`,
      {
        method: "GET",
        headers: {
          "Content-Type": "applicaiton/json",
        },
      }
    )
      .then((resp) => resp.json())
      .then((resp) => setabData(resp))
      .catch((error) => console.log(error));
  }, []);
  /**************************************************************************** */
  useEffect(() => {
    fetch(
      `https://data.edmonton.ca/resource/jmcu-tz8y.json?$limit=10000000000&$where=date_reported between '2020-03-06' and '${yesterday}'&$$app_token=CoCmeiMMf8g0Uexp09f2YjYWq`,
      {
        method: "GET",
        headers: {
          "Content-Type": "applicaiton/json",
        },
      }
    )
      .then((resp) => resp.json())
      .then((resp) => setabOlddata(resp))
      .catch((error) => console.log(error));
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
  var uniqueOldArray = removeDuplicates(
    abOlddata,
    "alberta_health_services_zone"
  );
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
  if (array.length === 0) return null;
  console.log(array);
  var oldarray = finalizeArray(abOlddata, uniqueOldArray);

  //city location
  const edmonton = {
    lat: 53.5461,
    lng: -113.4938,
  };

  const edmonton_options = {
    strokeColor: "#FF00FF",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF00FF",
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: array[1]["total active"] * 100,
    zIndex: 1,
  };
  const total_edmonton_options = {
    strokeColor: "#00FF00",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#00FF00",
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: array[1]["total case"] * 10,
    zIndex: 1,
  };

  const calgary = {
    lat: 51.0447,
    lng: -114.0719,
  };

  const calgary_options = {
    strokeColor: "#FFFF00",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FFFF00",
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: array[0]["total active"] * 100,
    zIndex: 1,
  };
  const total_calgary_options = {
    strokeColor: "#00FF00",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#00FF00",
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: array[0]["total case"] * 10,
    zIndex: 1,
  };
  const north = {
    lat: 57.0,
    lng: -115.0,
  };
  const north_options = {
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: array[3]["total active"] * 100,
    zIndex: 1,
  };
  const total_north_options = {
    strokeColor: "#00FF00",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#00FF00",
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: array[3]["total case"] * 10,
    zIndex: 1,
  };
  const south = {
    lat: 50.0,
    lng: -112.0,
  };
  const south_options = {
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: array[4]["total active"] * 100,
    zIndex: 1,
  };
  const total_south_options = {
    strokeColor: "#00FF00",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#00FF00",
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: array[4]["total case"] * 10,
    zIndex: 1,
  };
  const central = {
    lat: 52.0,
    lng: -113.29,
  };
  const central_options = {
    strokeColor: "#FF0000",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#FF0000",
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: array[2]["total active"] * 100,
    zIndex: 1,
  };
  const total_central_options = {
    strokeColor: "#00FF00",
    strokeOpacity: 0.8,
    strokeWeight: 2,
    fillColor: "#00FF00",
    fillOpacity: 0.35,
    clickable: false,
    draggable: false,
    editable: false,
    visible: true,
    radius: array[2]["total case"] * 10,
    zIndex: 1,
  };

  const cities = [
    [edmonton, edmonton_options, total_edmonton_options],
    [calgary, calgary_options, total_calgary_options],
    [north, north_options, total_north_options],
    [south, south_options, total_south_options],
    [central, central_options, total_central_options],
  ];

  return (
    <div>
      <Grid alignContent={'center'} >
        <Box display="flex" my={2} justifyContent="center">
          <Typography variant="h1" component="h1" gutterBottom noWrap style={{fontSize:"4vw"}}>
            Alberta Covid-19 Tracker
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center">
          <Typography variant="h4" component="h1" gutterBottom noWrap style={{fontSize:"2vw"}}>
            Alberta total: {abData.length}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center">
          <Typography variant="h4" component="h1" gutterBottom noWrap style={{fontSize:"2vw"}}>
            Alberta today increased cases: {abData.length - abOlddata.length}
          </Typography>
        </Box>
        <Box display="flex"  justifyContent="center" marginLeft="auto">
        <ImgMediaCard array={array}/>
        </Box>
        {/* <Box display="flex" justifyContent="center" >
          <CityInformation array={array} />
        </Box> */}
        <Box display="flex" justifyContent="center" marginTop={1} marginLeft="auto" marginRight="auto">
          <OtherInformation array={array} />
        </Box>
        <Box display="flex" justifyContent="center" marginTop={1}>
          <MapContainer cities={cities} />
        </Box>

        <Box display="flex" my={1} justifyContent="left" marginLeft={"10%"}>
          <Typography variant="h6" component="h1" gutterBottom noWrap>
            Pink circle: Edmonton Active Cases{" "}
          </Typography>
        </Box>
        <Box display="flex"  justifyContent="left" marginLeft={"10%"}>
          <Typography variant="h6" component="h1" gutterBottom noWrap>
            Yellow circle: Calgary Active Cases
          </Typography>
        </Box>
       
       
       
        <Copyright />
        </Grid>
    </div>
  );
}

export default App;
