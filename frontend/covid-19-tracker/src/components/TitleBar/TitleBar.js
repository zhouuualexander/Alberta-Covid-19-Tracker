import React from "react";
import { Typography, AppBar, Toolbar } from "@material-ui/core";
import TrendingDownIcon from '@material-ui/icons/TrendingDown';
const titleBar = (props) => {
    return (
        <div>
            <AppBar position="relative" color="primary" >
                <Toolbar style={{ marginLeft: "10%" }}>
                    <TrendingDownIcon fontSize="large" style={{ marginRight: "1%" }} />
                    <Typography variant="h4" noWrap color="inherit">
                        Alberta COVID-19 Tracker
    </Typography>
                </Toolbar>
            </AppBar>
        </div>
    );
};

export default titleBar;