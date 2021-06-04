import React from "react";
import Card from "../InformationCard/InformationCard";


const OtherInformation = (props) => {

  return (
    <React.Fragment>
      {props.array.map((zone) => {
        if (
          zone["alberta_health_services_zone"] !== "Edmonton Zone" &&
          zone["alberta_health_services_zone"] !== "Calgary Zone" &&
          zone["alberta_health_services_zone"] !== "Unknown"
        ) {
          return (
            <Card
              key={zone["alberta_health_services_zone"]}
              name={zone["alberta_health_services_zone"]}
              total={zone["total case"]}
            />
          );
        } else {
          return "";
        }
      })}
    </React.Fragment>
  );
};
export default OtherInformation;
