import React from "react";
import { Typography, Container, Grid, Card, CardContent } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import OtherInformation from "../OtherInformation/OtherInformation";
import ImgMediaCard from '../ImgMediaCard/ImgMediaCard';
const useStyles = makeStyles({
    root: {
        maxWidth: 820,
        minWidth: 307,
        marginLeft: 10,
        marginTop: 10,
        marginBottom: 10,
        marginRight: 10,

    },
});
const ZoneCard = (props) => {
    const classes = useStyles();
    return (
        <Container maxWidth='md'>
            <Grid container justify="center">
                <Card className={classes.root}>
                    <CardContent
                    >
                        <Typography variant="h4" align="center" color="textPrimary" style={{ marginTop: "2%" }} >
                            Alberta total: {props.data.length}
                        </Typography>

                        <Typography variant="h5" align="center" color="textPrimary">
                            Alberta increased cases: {props.data.length - props.oldData.length} on {props.yesterday}
                        </Typography>
                    </CardContent>
                </Card>
            </Grid>
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