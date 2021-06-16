import "moment-timezone";
import axios from "axios";
import Grid from "@material-ui/core/Grid";
import React, { Component } from "react";
import "./App.css";
import { Container, CssBaseline } from "@material-ui/core";
import TitleBar from './components/TitleBar/TitleBar';
import Copyright from "./components/Copyright/Copyright";
import { getYesterdaysDate } from './Helper/dataFilter';
import Loading from '../src/components/Loading/Loading';
import ZoneCard from './components/ZoneCard/ZoneCard';
import Alberta from './components/Visualization/Alberta';
import Gender from './components/Visualization/Gender';
import City from './components/Visualization/City';
import { createMuiTheme, responsiveFontSizes, ThemeProvider } from '@material-ui/core/styles';
import Map from '../src/components/MapContainer/MapContainer';
import AlbertaVariant from "./components/Visualization/AlbertaVariant";
import EdmontonVariant from "./components/Visualization/EdmontonVariant";
import CalgaryVariant from "./components/Visualization/CalgaryVariant";
import CitiesVariant from "./components/Visualization/CitiesVariant";
import VisualizationTab from './components/VisualizationTab/VisualizationTab';
class App extends Component {

  state = {
    albertaOldData: null,
    albertaData: null, albertaRecovered: [], albertaActive: [], albertaDied: [],
    edmontonData: [], edmontonRecovered: [], edmontonActive: [], edmontonDied: [],
    calgaryData: [], calgaryRecovered: [], calgaryActive: [], calgaryDied: [],
    northData: [], northRecovered: [], northActive: [], northDied: [],
    southData: [], southRecovered: [], southActive: [], southDied: [],
    centralData: [], centralRecovered: [], centralActive: [], centralDied: [],
    albertaDailyData: [], edmontonDailyData: [], calgaryDailyData: [], calgaryDailyVaccination: [], edmontonDailyVaccination: [],
    albertaDailyVariant: [], edmontonVariant: [], calgaryVariant: []
  };
  componentDidMount() {
    const dayBeforeYesterday = getYesterdaysDate(3);
    axios.get(`https://data.edmonton.ca/resource/jmcu-tz8y.json?$limit=10000000000&$where=date_reported between '2020-03-06' and '${dayBeforeYesterday}'&$$app_token=CoCmeiMMf8g0Uexp09f2YjYWq`).then((response) => {
      const albertaOldData = response.data;
      this.setState({ albertaOldData: albertaOldData });

    });
    /**
    Getting the Alberta Day by Day Covid-19 Data below
    */
    axios.get('https://data.edmonton.ca/resource/gxqm-z6fa.json?$limit=10000000000&$$app_token=CoCmeiMMf8g0Uexp09f2YjYWq')
      .then((response) => {
        const albertaDailyData = response.data.filter((data) => {
          return data.location === "Alberta";
        });
        const edmontonDailyData = response.data.filter((data) => {
          return data.location === "Edmonton Zone";
        });
        const calgaryDailyData = response.data.filter((data) => {
          return data.location === "Calgary Zone";
        });

        this.setState({ edmontonDailyData: edmontonDailyData, albertaDailyData: albertaDailyData, calgaryDailyData: calgaryDailyData });

      });
    /**
   Getting the Alberta Day by Day Covid-19 Data above
   */
    /**
    Getting the Alberta Vaccination Data below
    */
    axios.get('https://data.edmonton.ca/resource/d43f-8ikp.json?$limit=10000000000&$$app_token=CoCmeiMMf8g0Uexp09f2YjYWq')
      .then((response) => {
        const edmontonDailyVaccination = response.data.filter((data) => {
          return data.location === 'Edmonton Zone';
        });
        const calgaryDailyVaccination = response.data.filter((data) => {
          return data.location === 'Calgary Zone';
        });
        this.setState({ edmontonDailyVaccination: edmontonDailyVaccination, calgaryDailyVaccination: calgaryDailyVaccination });
      });
    /**
    Getting the Alberta Vaccination Data above
   */
    /**
  Getting the Alberta Day by Day Covid-19 Data above
 */
    /**
    Getting the Alberta Covid-19 Variant Data below
    */
    axios.get('https://data.edmonton.ca/resource/f7kx-redx.json?$limit=10000000000&$$app_token=CoCmeiMMf8g0Uexp09f2YjYWq')
      .then((response) => {

        const albertaDailyVariant = response.data.filter((data) => {

          return (data.zone === 'In Alberta');

        });
        const edmontonVariant = response.data.filter((data) => {
          return (data.zone === 'Edmonton Zone');
        });
        const calgaryVariant = response.data.filter((data) => {
          return (data.zone === 'Calgary Zone');
        });

        this.setState({ albertaDailyVariant: albertaDailyVariant, edmontonVariant: edmontonVariant, calgaryVariant: calgaryVariant });
      });
    /**
    Getting the Alberta Covid-19 Variant Data  above
   */



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
    let theme = createMuiTheme();
    theme = responsiveFontSizes(theme);
    return (
      // #2B588E
      <React.Fragment >
        <CssBaseline />
        <TitleBar />
        <main>
          <ThemeProvider theme={theme}>
            {this.state.albertaData === null || this.state.albertaOldData === null || this.state.albertaDailyData === null || this.state.edmontonDailyVaccination === null
              || this.state.albertaDailyVariant === null ?
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
                <Loading type="spin" color="black" />
              </div> :
              <Container maxWidth='lg' style={{ marginBottom: '10px' }}>
                <div style={{ marginBottom: '20px' }}>
                  <ZoneCard albertaData={this.state.albertaData}
                    albertaOldData={this.state.albertaOldData}
                    edmontonData={this.state.edmontonData}
                    edmontonActive={this.state.edmontonActive}
                    edmontonRecovered={this.state.edmontonRecovered}
                    edmontonDied={this.state.edmontonDied}
                    calgaryData={this.state.calgaryData}
                    calgaryActive={this.state.calgaryActive}
                    calgaryRecovered={this.state.calgaryRecovered}
                    calgaryDied={this.state.calgaryDied}
                    edmontonDailyVaccination={this.state.edmontonDailyVaccination}
                    calgaryDailyVaccination={this.state.calgaryDailyVaccination} />
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
                  </Grid><Grid item >
                    <VisualizationTab albertaDailyData={this.state.albertaDailyData}
                      calgaryDailyData={this.state.calgaryDailyData} edmontonDailyData={this.state.edmontonDailyData}
                      calgaryDailyVaccination={this.state.calgaryDailyVaccination} edmontonDailyVaccination={this.state.edmontonDailyVaccination}
                      albertaDailyVariant={this.state.albertaDailyVariant}
                      edmontonVariant={this.state.edmontonVariant}
                      calgaryVariant={this.state.calgaryVariant} />
                  </Grid>

                  <Grid item >
                    <Map edmontonActiveNumber={this.state.edmontonActive.length}
                      calgaryActiveNumber={this.state.calgaryActive.length} />
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
