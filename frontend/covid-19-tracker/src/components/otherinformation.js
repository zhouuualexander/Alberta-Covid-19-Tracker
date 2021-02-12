import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Card from "../components/informationCard";
const useStyles = makeStyles({
    root: {
      display:"flex",
      justifyContent:"left",
    },
   
  });
  
const OtherInformation = function (props) {
    const classes = useStyles();
  return (
   
      <React.Fragment className={classes.root} >
        {props.array.map(function (zone) {
          if(zone["alberta_health_services_zone"]!=="Edmonton Zone" &&zone["alberta_health_services_zone"]!=="Calgary Zone"&&zone["alberta_health_services_zone"]!=="Unknown"){
            return (
              <Card
                name={zone["alberta_health_services_zone"]}
                total={zone["total case"]}
              />
            );
          }
          
        })}
      </React.Fragment>
   
  );
};
export default OtherInformation;