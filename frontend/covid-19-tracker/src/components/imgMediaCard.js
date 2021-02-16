import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth:400,
    marginLeft: 10,
    marginTop: 10,
    marginBottom: 10,
    marginRight:10,
    
  },
});


export default function ImgMediaCard(props) {
  const classes = useStyles();
  
  return (
    <React.Fragment>
    {props.array.map((zone)=> {
      if(zone["alberta_health_services_zone"]==="Edmonton Zone" || zone["alberta_health_services_zone"]==="Calgary Zone"){
        return (
          <Card className={classes.root} key={zone["alberta_health_services_zone"]}  >
          <CardActionArea disabled >
            <CardMedia
              
              component="img"
              alt={zone["alberta_health_services_zone"]==="Edmonton Zone"?"Edmonton Zone":
              "Calgary Zone"}
              height="300px"
              
              src={zone["alberta_health_services_zone"]==="Edmonton Zone"?
              require('/Users/alexzhou/Desktop/alberta-covid-19-tracker/frontend/covid-19-tracker/src/images/edmonton-banner.jpg'):
              require('/Users/alexzhou/Desktop/alberta-covid-19-tracker/frontend/covid-19-tracker/src/images/calgary_final_revised.jpg')}
              title={zone["alberta_health_services_zone"]==="Edmonton Zone"?"Edmonton Zone":
              "Calgary Zone"}
            />
            <CardContent >
              <Typography gutterBottom variant="h5" component="h2" >
                {zone["alberta_health_services_zone"]}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" >
                {"Total cases"} {zone["total case"]}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" >
                {"Active cases"} {zone["total active"]}
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p" >
                {"Death cases"} {zone["total death"]}
              </Typography>
            </CardContent>
            
          </CardActionArea>
          <CardActions>
            
            <Button size="small" color="primary" target="_blank" href="https://www.edmonton.ca/programs_services/emergency_preparedness/covid-19.aspx">
              Learn More
            </Button>
          </CardActions>
        </Card>
        );
      }
      else{
        return('')
      }   
    })}
  </React.Fragment>
    
  );
}
