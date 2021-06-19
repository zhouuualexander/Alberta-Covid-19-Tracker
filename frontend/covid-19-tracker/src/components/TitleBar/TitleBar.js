import React from "react";
import { Typography, AppBar, Toolbar } from "@material-ui/core";
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
import { Link } from 'react-router-dom';
import {
    BrowserView,
    MobileOnlyView,
    isBrowser,
    isMobile,
    TabletView
} from "react-device-detect";
import Tab from '@material-ui/core/Tab';
const titleBar = (props) => {

    return (
        <div>
            <BrowserView>
                <AppBar position="relative" color="primary" >
                    <Toolbar style={{ marginLeft: "10%" }}>
                        <TrendingDownIcon fontSize="large" style={{ marginRight: "1%" }} />
                        <Typography variant="h6" noWrap color="inherit" style={{ flexGrow: '1' }}>
                            Alberta COVID-19 Tracker
                        </Typography>
                        <Link to="/" style={{ textDecoration: "none" }}>  <Tab label="Home" style={{ fontSize: '20px', textTransform: 'none', color: 'white' }} /></Link>
                        <Link to="/alberta-covid-19-tracker/visualization" style={{ textDecoration: "none" }}> <Tab label="Visualization" style={{ fontSize: '20px', textTransform: 'none', color: 'white' }} /></Link>
                        <Link to="/alberta-covid-19-tracker/map/" style={{ textDecoration: "none" }}> <Tab label="Map" style={{ fontSize: '20px', textTransform: 'none', color: 'white' }} /></Link>
                    </Toolbar>
                </AppBar></BrowserView>
            <MobileOnlyView>
                <AppBar position="relative" color="primary" >
                    <Toolbar style={{ marginLeft: "1px" }}>
                        <TrendingDownIcon fontSize="small" style={{ marginRight: "20px" }} />
                        <Typography color="inherit" style={{ fontSize: '10px', flexGrow: '1' }}>
                            Alberta COVID-19 Tracker
                        </Typography>
                        <Link to="/" style={{ textDecoration: "none" }}>  <Tab label="Home" style={{ fontSize: '10px', textTransform: 'none', color: 'white' }} /></Link>
                        <Link to="/alberta-covid-19-tracker/visualization" style={{ textDecoration: "none" }}> <Tab label="Visualization" style={{ fontSize: '10px', textTransform: 'none', color: 'white' }} /></Link>
                        <Link to="/alberta-covid-19-tracker/map/" style={{ textDecoration: "none" }}> <Tab label="Map" style={{ fontSize: '10px', textTransform: 'none', color: 'white' }} /></Link>
                    </Toolbar>
                </AppBar>
            </MobileOnlyView>
            <TabletView>
                <AppBar position="relative" color="primary" >
                    <Toolbar style={{ marginLeft: "1px" }}>
                        <TrendingDownIcon fontSize="large" style={{ marginRight: "20px" }} />
                        <Typography variant="h6" color="inherit" style={{ flexGrow: '1' }}>
                            Alberta COVID-19 Tracker
                        </Typography>
                        <Link to="/" style={{ textDecoration: "none" }}>  <Tab label="Home" style={{ fontSize: '20px', textTransform: 'none', color: 'white' }} /></Link>
                        <Link to="/alberta-covid-19-tracker/visualization" style={{ textDecoration: "none" }}> <Tab label="Visualization" style={{ fontSize: '20px', textTransform: 'none', color: 'white' }} /></Link>
                        <Link to="/alberta-covid-19-tracker/map/" style={{ textDecoration: "none" }}> <Tab label="Map" style={{ fontSize: '20px', textTransform: 'none', color: 'white' }} /></Link>
                    </Toolbar>
                </AppBar>
            </TabletView>


        </div>
    );
};

export default titleBar;