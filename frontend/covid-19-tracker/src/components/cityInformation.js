import React from 'react'
import Grid from '@material-ui/core/Grid';
import Card from "../components/informationCard";
function CityInformation(props){
    return(
<Grid container style={{marginLeft:"7%"}} >
        <React.Fragment>
        
          {props.array.map(function (zone) {
            return (
                <Card 
                  name={zone["alberta_health_services_zone"]}
                  total={zone["total case"]}
                  active={zone["total active"]}
                  died={zone["total death"]}
                />
        
            );
          })}
          </React.Fragment>
          </Grid>
    )
}
export default CityInformation