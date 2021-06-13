import React from "react";
import { Typography, Grid } from "@material-ui/core";
import ImgMediaCard from '../ImgMediaCard/ImgMediaCard';
import CountUp from 'react-countup';
const ZoneCard = (props) => {
    return (
        <React.Fragment>
            <Typography variant="h4" align="center" color="textSecondary" paragraph style={{ marginTop: "2%" }} >
                Alberta total: {<CountUp start={0} end={props.albertaData.length} duration={2.5} separator=',' />}
            </Typography>
            <Typography variant="h4" align="center" color="textSecondary" paragraph style={{ marginTop: "2%" }} >
                Alberta increased: {<CountUp start={0} end={props.albertaData.length - props.albertaOldData.length} duration={2.5} separator=',' />} on yesterday
            </Typography>
            <Grid container spacing={2} justify="center">
                <ImgMediaCard
                    edmontonDailyVaccination={props.edmontonDailyVaccination}
                    calgaryDailyVaccination={props.calgaryDailyVaccination}
                    edmontonData={props.edmontonData}
                    edmontonActive={props.edmontonActive}
                    edmontonRecovered={props.edmontonRecovered}
                    edmontonDied={props.edmontonDied}
                    calgaryData={props.calgaryData}
                    calgaryActive={props.calgaryActive}
                    calgaryRecovered={props.calgaryRecovered}
                    calgaryDied={props.calgaryDied} />
            </Grid>
            <Grid container spacing={2} justify="center">
            </Grid>
        </React.Fragment>
    );
};
export default ZoneCard;