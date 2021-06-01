import React from "react";
import Card from "../InformationCard/InformationCard";

const CityInformation = (props) => {
  return (
    <React.Fragment>
      {props.array.map(function (zone) {
        if (
          zone["alberta_health_services_zone"] === "Edmonton Zone" ||
          zone["alberta_health_services_zone"] === "Calgary Zone"
        ) {
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
