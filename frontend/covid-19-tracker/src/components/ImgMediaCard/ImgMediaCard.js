import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import CountUp from 'react-countup';
import edmonton from '../../Assets/edmonton-banner.jpg';
import calgary from '../../Assets/calgary_final_revised.jpg';
const useStyles = makeStyles({
  root: {
    maxWidth: 400,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    marginRight: 10,

  },
});
const ImgMediaCard = (props) => {
  const classes = useStyles();
  const cities = [
    {
      name: 'Edmonton',
      totalCases: props.edmontonData.length,
      activeCases: props.edmontonActive.length,
      diedCases: props.edmontonDied.length,
      recoveredCases: props.edmontonRecovered.length,
      firstDoseRate: props.edmontonDailyVaccination[0]["percent_pop_1_plus_dose"]
    },
    {
      name: 'Calgary',
      totalCases: props.calgaryData.length,
      activeCases: props.calgaryActive.length,
      diedCases: props.calgaryDied.length,
      recoveredCases: props.calgaryRecovered.length,
      firstDoseRate: props.calgaryDailyVaccination[0]["percent_pop_1_plus_dose"]
    }
  ];
  return (
    <React.Fragment>
      {cities.map((city) => {
        return <Card className={classes.root} key={city.name}>
          <CardActionArea disabled >
            <CardMedia
              component="img"
              alt={city.name === "Edmonton" ? "Edmonton Zone" :
                "Calgary Zone"}
              height="300px"
              src={city.name === "Edmonton" ?
                edmonton :
                calgary}
              title={city.name === "Edmonton" ? "Edmonton Zone" :
                "Calgary Zone"}
            />
            <CardContent  >
              <Typography gutterBottom variant="h5" component="h2" >
                {city.name}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" >
                Total cases: {<CountUp start={0} end={city.totalCases} duration={2.5} />}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" >
                Recovered cases: {<CountUp start={0} end={city.recoveredCases} duration={2.5} />}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" >
                Active cases: {<CountUp start={0} end={city.activeCases} duration={2.5} />}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" >
                Death cases: {<CountUp start={0} end={city.diedCases} duration={2.5} />}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" >
                First Dose of Vaccination rate: {<CountUp start={0} end={city.firstDoseRate} duration={2.5} />}%
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" target="_blank" href={city.name === "Edmonton" ?
              "https://www.edmonton.ca/programs_services/emergency_preparedness/covid-19.aspx" :
              "https://www.calgary.ca/csps/cema/covid19/response-to-coronavirus.html"}>
              More info
            </Button>
          </CardActions>
        </Card>;
      })}

    </React.Fragment>

  );
};
export default ImgMediaCard;