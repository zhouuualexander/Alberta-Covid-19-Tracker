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
class App extends Component {

  state = {
    albertaOldData: null,
    albertaData: null, albertaRecovered: [], albertaActive: [], albertaDied: [],
    edmontonData: [], edmontonRecovered: [], edmontonActive: [], edmontonDied: [],
    calgaryData: [], calgaryRecovered: [], calgaryActive: [], calgaryDied: [],
    northData: [], northRecovered: [], northActive: [], northDied: [],
    southData: [], southRecovered: [], southActive: [], southDied: [],
    centralData: [], centralRecovered: [], centralActive: [], centralDied: [],
  };
  componentDidMount() {
    const dayBeforeYesterday = getYesterdaysDate(3);
    axios.get(`https://data.edmonton.ca/resource/jmcu-tz8y.json?$limit=10000000000&$where=date_reported between '2020-03-06' and '${dayBeforeYesterday}'&$$app_token=CoCmeiMMf8g0Uexp09f2YjYWq`).then((response) => {
      const albertaOldData = response.data;
      this.setState({ albertaOldData: albertaOldData });

    });
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
      <React.Fragment>
        <CssBaseline />
        <TitleBar />
        <main>
          <ThemeProvider theme={theme}>
            {this.state.albertaData === null || this.state.albertaOldData === null ?
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
                <Map />
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
