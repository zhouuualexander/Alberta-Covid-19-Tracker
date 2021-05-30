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
import { getYesterdaysDate } from './dataFilter';
import { removeDuplicates } from './dataFilter';
import { finalizeArray } from './dataFilter';
import { locationGps } from './constant/city';



const App = () => {
  /***********get data from API ******************************************************8 */
  var albertaData = [];
  var albertaOlddata = [];
  const [abOlddata, setabOlddata] = useState(albertaOlddata);
  const [abData, setabData] = useState(albertaData);
  let yesterday = getYesterdaysDate(2);
  let dayBeforeYesterday = getYesterdaysDate(3);

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
      `https://data.edmonton.ca/resource/jmcu-tz8y.json?$limit=10000000000&$where=date_reported between '2020-03-06' and '${dayBeforeYesterday}'&$$app_token=CoCmeiMMf8g0Uexp09f2YjYWq`,
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
  }, [dayBeforeYesterday]);

  let uniqueArray = removeDuplicates(abData, "alberta_health_services_zone");


  /*---------------------------------Array has been finalized-----------------------*/
  let array = finalizeArray(abData, uniqueArray);
  if (array.length === 0) return null;

  //city location


  const locationOptions = {
    edmonton_options: {
      strokeColor: "#FF00FF",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF00FF",
      fillOpacity: 0.35,
      clickable: false,
      draggable: false,
      editable: false,
      visible: true,
      radius: array[1]["total active"] * 10,
      zIndex: 1,
    },
    total_edmonton_options: {
      strokeColor: "#00FF00",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#00FF00",
      fillOpacity: 0.35,
      clickable: false,
      draggable: false,
      editable: false,
      visible: true,
      radius: array[1]["total case"] * 100,
      zIndex: 1,
    }, calgary_options: {
      strokeColor: "#FFFF00",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FFFF00",
      fillOpacity: 0.35,
      clickable: false,
      draggable: false,
      editable: false,
      visible: true,
      radius: array[0]["total active"] * 10,
      zIndex: 1,
    }, total_calgary_options: {
      strokeColor: "#00FF00",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#00FF00",
      fillOpacity: 0.35,
      clickable: false,
      draggable: false,
      editable: false,
      visible: true,
      radius: array[0]["total case"] * 1,
      zIndex: 1,
    }, north_options: {
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
      clickable: false,
      draggable: false,
      editable: false,
      visible: true,
      radius: array[3]["total active"] * 10,
      zIndex: 1,
    }, total_north_options: {
      strokeColor: "#00FF00",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#00FF00",
      fillOpacity: 0.35,
      clickable: false,
      draggable: false,
      editable: false,
      visible: true,
      radius: array[3]["total case"] * 1,
      zIndex: 1,
    }, south_options: {
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
      clickable: false,
      draggable: false,
      editable: false,
      visible: true,
      radius: array[4]["total active"] * 10,
      zIndex: 1,
    }, total_south_options: {
      strokeColor: "#00FF00",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#00FF00",
      fillOpacity: 0.35,
      clickable: false,
      draggable: false,
      editable: false,
      visible: true,
      radius: array[4]["total case"] * 1,
      zIndex: 1,
    }, central_options: {
      strokeColor: "#FF0000",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#FF0000",
      fillOpacity: 0.35,
      clickable: false,
      draggable: false,
      editable: false,
      visible: true,
      radius: array[2]["total active"] * 10,
      zIndex: 1,
    }, total_central_options: {
      strokeColor: "#00FF00",
      strokeOpacity: 0.8,
      strokeWeight: 2,
      fillColor: "#00FF00",
      fillOpacity: 0.35,
      clickable: false,
      draggable: false,
      editable: false,
      visible: true,
      radius: array[2]["total case"] * 1,
      zIndex: 1,
    }
  };



  const cities = [
    [locationGps.edmonton, locationOptions.edmonton_options, locationOptions.total_edmonton_options],
    [locationGps.calgary, locationOptions.calgary_options, locationOptions.total_calgary_options],
    [locationGps.north, locationOptions.north_options, locationOptions.total_north_options],
    [locationGps.south, locationOptions.south_options, locationOptions.total_south_options],
    [locationGps.central, locationOptions.central_options, locationOptions.total_central_options],
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
            Alberta increased cases: {abData.length - abOlddata.length} on {yesterday}
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
};

export default App;
