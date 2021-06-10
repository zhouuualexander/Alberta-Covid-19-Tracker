import "moment-timezone";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import React, { Component } from "react";
import "./App.css";
import { Container, CssBaseline } from "@material-ui/core";
import TitleBar from './components/TitleBar/TitleBar';
import MapContainer from "./components/MapContainer/MapContainer";
import Copyright from "./components/Copyright/Copyright";
import { getYesterdaysDate, removeDuplicates } from './Helper/dataFilter';
import { finalizeArray } from './Helper/dataFilter';
import locationGps from './constant/city';
import Loading from '../src/components/Loading/Loading';
import ZoneCard from './components/ZoneCard/ZoneCard';
import Alberta from './components/Visualization/Alberta';
import Gender from './components/Visualization/Gender';
import City from './components/Visualization/City';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';

class App extends Component {
  /***********get data from API ******************************************************8 */
  // var albertaData = [];
  // var albertaOlddata = [];
  // const [abOlddata, setabOlddata] = useState(albertaOlddata);
  // const [abData, setabData] = useState(albertaData);
  // https://data.edmonton.ca/resource/jmcu-tz8y.json?$limit=10000000000&$$app_token=CoCmeiMMf8g0Uexp09f2YjYWq
  // https://data.edmonton.ca/resource/jmcu-tz8y.json?$limit=10000000000&$where=date_reported between '2020-03-06' and '${dayBeforeYesterday}'&$$app_token=CoCmeiMMf8g0Uexp09f2YjYWq`

  // useEffect(() => {
  //   fetch(
  //     `https://data.edmonton.ca/resource/jmcu-tz8y.json?$limit=10000000000&$$app_token=CoCmeiMMf8g0Uexp09f2YjYWq`,
  //     {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "applicaiton/json",
  //       },
  //     }
  //   )
  //     .then((resp) => resp.json())
  //     .then((resp) => setabData(resp))
  //     .catch((error) => console.log(error));
  // }, []);
  // /**************************************************************************** */
  // useEffect(() => {
  //   fetch(
  //     `https://data.edmonton.ca/resource/jmcu-tz8y.json?$limit=10000000000&$where=date_reported between '2020-03-06' and '${dayBeforeYesterday}'&$$app_token=CoCmeiMMf8g0Uexp09f2YjYWq`,
  //     {
  //       method: "GET",
  //       headers: {
  //         "Content-Type": "applicaiton/json",
  //       },
  //     }
  //   )
  //     .then((resp) => resp.json())
  //     .then((resp) => setabOlddata(resp))
  //     .catch((error) => console.log(error));
  // }, [dayBeforeYesterday]);

  // let uniqueArray = removeDuplicates(abData, "alberta_health_services_zone");


  /*---------------------------------Array has been finalized-----------------------*/
  // let array = finalizeArray(abData, uniqueArray);
  // if (array.length === 0) return null;

  //city location
  // const locationOptions = {
  //   edmonton_options: {
  //     strokeColor: "#FF00FF",
  //     strokeOpacity: 0.8,
  //     strokeWeight: 2,
  //     fillColor: "#FF00FF",
  //     fillOpacity: 0.35,
  //     clickable: false,
  //     draggable: false,
  //     editable: false,
  //     visible: true,
  //     radius: array[1]["total active"] * 100,
  //     zIndex: 1,
  //   },
  //   total_edmonton_options: {
  //     strokeColor: "#00FF00",
  //     strokeOpacity: 0.8,
  //     strokeWeight: 2,
  //     fillColor: "#00FF00",
  //     fillOpacity: 0.35,
  //     clickable: false,
  //     draggable: false,
  //     editable: false,
  //     visible: true,
  //     radius: array[1]["total case"] * 1000,
  //     zIndex: 1,
  //   }, calgary_options: {
  //     strokeColor: "#FFFF00",
  //     strokeOpacity: 0.8,
  //     strokeWeight: 2,
  //     fillColor: "#FFFF00",
  //     fillOpacity: 0.35,
  //     clickable: false,
  //     draggable: false,
  //     editable: false,
  //     visible: true,
  //     radius: array[0]["total active"] * 100,
  //     zIndex: 1,
  //   }, total_calgary_options: {
  //     strokeColor: "#00FF00",
  //     strokeOpacity: 0.8,
  //     strokeWeight: 2,
  //     fillColor: "#00FF00",
  //     fillOpacity: 0.35,
  //     clickable: false,
  //     draggable: false,
  //     editable: false,
  //     visible: true,
  //     radius: array[0]["total case"] * 10,
  //     zIndex: 1,
  //   }, north_options: {
  //     strokeColor: "#FF0000",
  //     strokeOpacity: 0.8,
  //     strokeWeight: 2,
  //     fillColor: "#FF0000",
  //     fillOpacity: 0.35,
  //     clickable: false,
  //     draggable: false,
  //     editable: false,
  //     visible: true,
  //     radius: array[3]["total active"] * 100,
  //     zIndex: 1,
  //   }, total_north_options: {
  //     strokeColor: "#00FF00",
  //     strokeOpacity: 0.8,
  //     strokeWeight: 2,
  //     fillColor: "#00FF00",
  //     fillOpacity: 0.35,
  //     clickable: false,
  //     draggable: false,
  //     editable: false,
  //     visible: true,
  //     radius: array[3]["total case"] * 10,
  //     zIndex: 1,
  //   }, south_options: {
  //     strokeColor: "#FF0000",
  //     strokeOpacity: 0.8,
  //     strokeWeight: 2,
  //     fillColor: "#FF0000",
  //     fillOpacity: 0.35,
  //     clickable: false,
  //     draggable: false,
  //     editable: false,
  //     visible: true,
  //     radius: array[4]["total active"] * 100,
  //     zIndex: 1,
  //   }, total_south_options: {
  //     strokeColor: "#00FF00",
  //     strokeOpacity: 0.8,
  //     strokeWeight: 2,
  //     fillColor: "#00FF00",
  //     fillOpacity: 0.35,
  //     clickable: false,
  //     draggable: false,
  //     editable: false,
  //     visible: true,
  //     radius: array[4]["total case"] * 10,
  //     zIndex: 1,
  //   }, central_options: {
  //     strokeColor: "#FF0000",
  //     strokeOpacity: 0.8,
  //     strokeWeight: 2,
  //     fillColor: "#FF0000",
  //     fillOpacity: 0.35,
  //     clickable: false,
  //     draggable: false,
  //     editable: false,
  //     visible: true,
  //     radius: array[2]["total active"] * 100,
  //     zIndex: 1,
  //   }, total_central_options: {
  //     strokeColor: "#00FF00",
  //     strokeOpacity: 0.8,
  //     strokeWeight: 2,
  //     fillColor: "#00FF00",
  //     fillOpacity: 0.35,
  //     clickable: false,
  //     draggable: false,
  //     editable: false,
  //     visible: true,
  //     radius: array[2]["total case"] * 10,
  //     zIndex: 1,
  //   }
  // };



  // const cities = [
  //   [locationGps.edmonton, locationOptions.edmonton_options, locationOptions.total_edmonton_options],
  //   [locationGps.calgary, locationOptions.calgary_options, locationOptions.total_calgary_options],
  //   [locationGps.north, locationOptions.north_options, locationOptions.total_north_options],
  //   [locationGps.south, locationOptions.south_options, locationOptions.total_south_options],
  //   [locationGps.central, locationOptions.central_options, locationOptions.total_central_options],
  // ];
  state = {
    albertaData: null, albertaRecovered: [], albertaActive: [], albertaDied: [],
    edmontonData: [], edmontonRecovered: [], edmontonActive: [], edmontonDied: [],
    calgaryData: [], calgaryRecovered: [], calgaryActive: [], calgaryDied: [],
    northData: [], northRecovered: [], northActive: [], northDied: [],
    southData: [], southRecovered: [], southActive: [], southDied: [],
    centralData: [], centralRecovered: [], centralActive: [], centralDied: [],
  };
  componentDidMount() {
    axios.get('https://data.edmonton.ca/resource/jmcu-tz8y.json?$limit=10000000000&$$app_token=CoCmeiMMf8g0Uexp09f2YjYWq')
      .then((response) => {
        const albertaData = response.data;

        const edmontonData = albertaData.filter((data) => {
          return (data['alberta_health_services_zone'] === 'Edmonton Zone');
        });
        const albertaRecovered = albertaData.filter((data) => {
          return data['case_status'] === 'Recovered';
        });
        const albertaActive = albertaData.filter((data) => {
          return data['case_status'] === 'Active';
        });
        const albertaDied = albertaData.filter((data) => {
          return data['case_status'] === 'Died';
        });
        const edmontonTotalCases = edmontonData.length;
        const edmontonRecovered = edmontonData.filter((data) => {
          return data['case_status'] === 'Recovered';
        });
        const edmontonActive = edmontonData.filter((data) => {
          return data['case_status'] === 'Active';
        });
        const edmontonDied = edmontonData.filter((data) => {
          return data['case_status'] === 'Died';
        });
        const calgaryData = albertaData.filter((data) => {
          return (data['alberta_health_services_zone'] === 'Calgary Zone');
        });
        const calgaryRecovered = calgaryData.filter((data) => {
          return data['case_status'] === 'Recovered';
        });
        const calgaryActive = calgaryData.filter((data) => {
          return data['case_status'] === 'Active';
        });
        const calgaryDied = calgaryData.filter((data) => {
          return data['case_status'] === 'Died';
        });
        const northData = albertaData.filter((data) => {
          return (data['alberta_health_services_zone'] === 'North Zone');
        });
        const northRecovered = northData.filter((data) => {
          return data['case_status'] === 'Recovered';
        });
        const northActive = northData.filter((data) => {
          return data['case_status'] === 'Active';
        });
        const northDied = northData.filter((data) => {
          return data['case_status'] === 'Died';
        });
        const southData = albertaData.filter((data) => {
          return (data['alberta_health_services_zone'] === 'South Zone');
        });
        const southRecovered = southData.filter((data) => {
          return data['case_status'] === 'Recovered';
        });
        const southActive = southData.filter((data) => {
          return data['case_status'] === 'Active';
        });
        const southDied = southData.filter((data) => {
          return data['case_status'] === 'Died';
        });
        const centralData = albertaData.filter((data) => {
          return (data['alberta_health_services_zone'] === 'Central Zone');
        });
        const centralRecovered = centralData.filter((data) => {
          return data['case_status'] === 'Recovered';
        });
        const centralActive = centralData.filter((data) => {
          return data['case_status'] === 'Active';
        });
        const centralDied = centralData.filter((data) => {
          return data['case_status'] === 'Died';
        });
        this.setState({
          albertaData, albertaRecovered, albertaActive, albertaDied,
          edmontonData, edmontonRecovered, edmontonActive, edmontonDied,
          calgaryData, calgaryRecovered, calgaryActive, calgaryDied,
          northData, northRecovered, northActive, northDied,
          southData, southRecovered, southActive, southDied,
          centralData, centralRecovered, centralActive, centralDied
        });
      });
  }
  render() {
    let yesterday = getYesterdaysDate(2);
    let dayBeforeYesterday = getYesterdaysDate(3);
    let theme = createMuiTheme();
    theme = responsiveFontSizes(theme);
    console.log(this.state.albertaData);

    return (
      // #2B588E
      <React.Fragment>
        <CssBaseline />
        <TitleBar />
        <main>
          <ThemeProvider theme={theme}>
            {this.state.albertaData === null ?
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
                <Loading type="spin" color="black" />
              </div> :
              <Container maxWidth='lg' style={{ marginBottom: '10px' }}>
                <div style={{ marginBottom: '20px' }}>
                  <ZoneCard albertaData={this.state.albertaData}
                    edmontonData={this.state.edmontonData}
                    edmontonActive={this.state.edmontonActive}
                    edmontonRecovered={this.state.edmontonRecovered}
                    edmontonDied={this.state.edmontonDied}
                    calgaryData={this.state.calgaryData}
                    calgaryActive={this.state.calgaryActive}
                    calgaryRecovered={this.state.calgaryRecovered}
                    calgaryDied={this.state.calgaryDied} />
                </div>
                <Grid container justify="center" spacing={4}>
                  <Grid item >
                    <Alberta albertaActive={this.state.albertaActive}
                      albertaRecovered={this.state.albertaRecovered}
                      albertaDied={this.state.albertaDied} />
                  </Grid>
                  <Grid item >
                    <Gender albertaData={this.state.albertaData} />
                  </Grid>
                  <Grid item >
                    <City edmontonData={this.state.edmontonData} calgaryData={this.state.calgaryData} />
                  </Grid>


                </Grid>
              </Container>
            }


          </ThemeProvider>
        </main>
        <footer>
          <Copyright />
        </footer>
      </React.Fragment >
    );
  }

};

export default App;
