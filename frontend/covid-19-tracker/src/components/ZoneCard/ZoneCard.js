import React from "react";
import { Typography, Container, Grid } from "@material-ui/core";
import OtherInformation from "../OtherInformation/OtherInformation";
import ImgMediaCard from '../ImgMediaCard/ImgMediaCard';
const ZoneCard = (props) => {
    return (
        <Container maxWidth='md'>

            <Typography variant="h4" align="center" color="textSecondary" paragraph style={{ marginTop: "2%" }} >
                Alberta total: {props.data.length}
            </Typography>

            <Typography variant="h5" align="center" color="textSecondary" paragraph>
                Alberta increased cases: {props.data.length - props.oldData.length} on {props.yesterday}
            </Typography>


            <Grid container spacing={2} justify="center">
                <ImgMediaCard array={props.array} />
            </Grid>
            <Grid container spacing={2} justify="center">
                <OtherInformation array={props.array} />
            </Grid>
        </Container>
    );
};
export default ZoneCard;