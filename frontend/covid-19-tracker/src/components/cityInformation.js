import React from "react";
import Grid from "@material-ui/core/Grid";
import Card from "../components/informationCard";
const CityInformation = function (props) {
  return (
   
      <React.Fragment>
        {props.array.map(function (zone) {
          if(zone["alberta_health_services_zone"]==="Edmonton Zone"||zone["alberta_health_services_zone"]==="Calgary Zone"){
            return (
              <Card
                name={zone["alberta_health_services_zone"]}
                total={zone["total case"]}
                active={zone["total active"]}
                died={zone["total death"]}
              />
            );
          }
          
        })}
      </React.Fragment>
   
  );
};
export default CityInformation;
