import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "../components/informationCard";
const useStyles = makeStyles({
  root: {
    display: "flex",
    justifyContent: "left",
  },
});

const OtherInformation = function (props) {
  const classes = useStyles();
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
              className={classes.root}
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
