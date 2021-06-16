import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { Animation } from '@devexpress/dx-react-chart';
import {
    Chart,
    ArgumentAxis,
    ValueAxis,
    BarSeries,
    Title,
    Legend,
    Tooltip
} from '@devexpress/dx-react-chart-material-ui';
import { scaleBand } from '@devexpress/dx-chart-core';
import { ArgumentScale } from '@devexpress/dx-react-chart';
import { EventTracker, HoverState } from '@devexpress/dx-react-chart';

export default class Demo extends React.PureComponent {
    state = {
        data: [
            {
                state: 'Male', male: this.props.albertaData
                    .filter((data) => {
                        return data.gender === 'Male';
                    }).length
            },
            {
                state: 'Female', female: this.props.albertaData
                    .filter((data) => {
                        return data.gender === 'Female';
                    }).length
            },
        ]
    };
    render() {
        const { data: chartData } = this.state;
        return (
            <Paper style={{ width: "300px" }}>

                <Chart height={300}
                    width={300}
                    data={chartData}
                >
                    <Animation duration={3000} />
                    <ArgumentScale factory={scaleBand} />
                    <ArgumentAxis />
                    <ValueAxis />
                    <Title text="Gender" />
                    <BarSeries
                        valueField="male"
                        argumentField="state"
                        name="Male"
                        color="#a4c6ed"
                    />
                    <BarSeries
                        valueField="female"
                        argumentField="state"
                        name="Female"
                        color="pink"
                    />
                    <EventTracker />
                    <HoverState />
                    <Tooltip />
                    <Legend />
                </Chart>
            </Paper>
        );
    }
}

