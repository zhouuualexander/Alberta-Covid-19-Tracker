import "moment-timezone";
import React, { useState, useEffect } from "react";
import "./App.css";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import MapContainer from "./components/dataVisualize/map";
import OtherInformation from "./components/otherinformation";
import ImgMediaCard from "./components/imgMediaCard";
import Container from "@material-ui/core/Container";
import Copyright from "./components/copyright";

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
    let date = new Date();
    date.setDate(date.getDate() - 2);
    return (
      date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
    );
  }

  let yesterday = getYesterdaysDate();

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
  }, [yesterday]);
  /*----------------------------------------removeDuplicates-------------------------*/
  function removeDuplicates(originalArray, prop) {
    let newArray = [];
    let lookupObject = {};
    for (let i in originalArray) {
      lookupObject[originalArray[i][prop]] = originalArray[i];
    }
    for (let i in lookupObject) {
      newArray.push(lookupObject[i]);
    }
    return newArray;
  }
  //reference:https://stackoverflow.com/questions/2218999/remove-duplicates-from-an-array-of-objects-in-javascript
  let uniqueArray = removeDuplicates(abData, "alberta_health_services_zone");

  /*--------------------------------------Finalize the array-------------------------*/
  function finalizeArray(originalArray, uniqueArray) {
    let finalArray = [];
    for (let i = 0; i < uniqueArray.length; i++) {
      let newObject = {};
      newObject["alberta_health_services_zone"] =
        uniqueArray[i]["alberta_health_services_zone"];
      let zoneArray = originalArray.filter(
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
  let array = finalizeArray(abData, uniqueArray);
  if (array.length === 0) return null;

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
    // #2B588E
    <div>
      <Container
        disableGutters={true}
        maxWidth={false}
        style={{
          backgroundColor: "#ffffff",
          overflow: "scroll",
          minHeight: "100vh",
        }}
      >
        <Box
          display="flex"
          justifyContent="center"
          bgcolor="#3f8aac"
          height="auto"
          alignItems="center"
        >
          <Typography
            variant="h1"
            component="h1"
            gutterBottom={false}
            noWrap
            align={"center"}
            style={{
              fontSize: "2vw",
              height: "auto",
              marginTop: "20px",
              marginBottom: "20px",
              color: "#e8f7fb",
            }}
          >
            Alberta Covid-19 Tracker
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center">
          <Typography
            variant="h4"
            component="h1"
            gutterBottom={false}
            noWrap
            style={{ fontSize: "1vw", marginTop: "10px" }}
          >
            Alberta total: {abData.length}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center">
          <Typography
            variant="h4"
            component="h1"
            gutterBottom
            noWrap
            style={{ fontSize: "1vw" }}
          >
            Alberta today increased cases: {abData.length - abOlddata.length}
          </Typography>
        </Box>
        <Box display="flex" justifyContent="center" marginLeft="auto">
          <ImgMediaCard array={array} />
        </Box>
        {/* <Box display="flex" justifyContent="center" >
          <CityInformation array={array} />
        </Box> */}
        <Box
          display="flex"
          justifyContent="center"
          marginTop={1}
          marginLeft="auto"
          marginRight="auto"
        >
          <OtherInformation array={array} />
        </Box>
        <Box display="flex" justifyContent="center" marginTop={1}>
          <MapContainer cities={cities} />
        </Box>

        <footer>
          <Copyright />
        </footer>
      </Container>
    </div>
  );
}

export default App;
