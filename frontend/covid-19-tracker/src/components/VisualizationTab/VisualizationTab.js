import React from 'react';
import PropTypes from 'prop-types';
import SwipeableViews from 'react-swipeable-views';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import AlbertaNewCases from '../Visualization/AlbertaNewCases';
import AlbertaCases from '../Visualization/AlbertaCases';
import CitiesNewCases from '../Visualization/CitiesNewCases';
import CitiesVaccination from '../Visualization/CitiesVaccination';
import AlbertaVariant from "../Visualization/AlbertaVariant";
import EdmontonVariant from "../Visualization/EdmontonVariant";
import CalgaryVariant from '../Visualization/CalgaryVariant';
import CitiesVariant from '../Visualization/CitiesVariant';
function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`full-width-tabpanel-${index}`}
            aria-labelledby={`full-width-tab-${index}`}
            {...other}
        >
            {value === index && (
                <div>  {children}</div>


            )}
        </div>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};

function a11yProps(index) {
    return {
        id: `full-width-tab-${index}`,
        'aria-controls': `full-width-tabpanel-${index}`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        backgroundColor: theme.palette.background.paper,
        width: '80vw',
    },
}));

export default function FullWidthTabs(props) {
    const classes = useStyles();
    const theme = useTheme();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleChangeIndex = (index) => {
        setValue(index);
    };

    return (
        <div className={classes.root}>
            <AppBar position="static" color="default">
                <Tabs
                    value={value}
                    onChange={handleChange}
                    indicatorColor="primary"
                    textColor="primary"
                    variant="fullWidth"
                    aria-label="full width tabs example"
                >
                    <Tab label="Alberta" {...a11yProps(0)} />
                    <Tab label="City Zones" {...a11yProps(1)} />
                    <Tab label="Edmonton Zone" {...a11yProps(2)} />
                    <Tab label="Calgary Zone" {...a11yProps(3)} />
                </Tabs>
            </AppBar>
            <SwipeableViews
                style={{ marginTop: '3vh' }}
                axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
                index={value}
                onChangeIndex={handleChangeIndex}
            >
                <TabPanel value={value} index={0} dir={theme.direction} >
                    <Grid container spacing={2} justify="center">
                        <Grid item>
                            <AlbertaNewCases albertaDailyData={props.albertaDailyData} />
                        </Grid>
                        <Grid item>
                            <AlbertaCases albertaDailyData={props.albertaDailyData} />
                        </Grid>
                        <Grid item>
                            <AlbertaVariant albertaDailyVariant={props.albertaDailyVariant} />
                        </Grid>
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={1} dir={theme.direction}>
                    <Grid container spacing={2} justify="center">
                        <Grid item>
                            <CitiesNewCases calgaryDailyData={props.calgaryDailyData} edmontonDailyData={props.edmontonDailyData} />
                        </Grid>
                        <Grid item>
                            <CitiesVaccination calgaryDailyVaccination={props.calgaryDailyVaccination} edmontonDailyVaccination={props.edmontonDailyVaccination} />
                        </Grid>
                        <Grid item>
                            <CitiesVariant calgaryVariant={props.calgaryVariant} edmontonVariant={props.edmontonVariant} />
                        </Grid>
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={2} dir={theme.direction}>
                    <Grid container spacing={2} justify="center">
                        <Grid item>
                            <EdmontonVariant edmontonVariant={props.edmontonVariant} />
                        </Grid>
                    </Grid>
                </TabPanel>
                <TabPanel value={value} index={3} dir={theme.direction}>
                    <Grid container spacing={2} justify="center">
                        <Grid item>
                            <CalgaryVariant calgaryVariant={props.calgaryVariant} />
                        </Grid>
                    </Grid>
                </TabPanel>
            </SwipeableViews>
        </div>
    );
}
