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
import { ArgumentScale, Stack } from '@devexpress/dx-react-chart';
import { EventTracker, HoverState } from '@devexpress/dx-react-chart';

export default class Demo extends React.PureComponent {
    state = {
        data: [
            {
                state: 'Edmonton',
                recovered: this.props.edmontonData
                    .filter((data) => {
                        return data["case_status"] === 'Recovered';
                    }).length,
                total: this.props.edmontonData.length
            },
            {
                state: 'Calgary',
                recovered: this.props.calgaryData
                    .filter((data) => {
                        return data["case_status"] === 'Recovered';
                    }).length,
                total: this.props.calgaryData.length
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
                    <Title text="Edmonton vs Calgary" />
                    <BarSeries
                        valueField="total"
                        argumentField="state"
                        name="Total"
                        color="grey"
                    />
                    <BarSeries
                        valueField="recovered"
                        argumentField="state"
                        name="Recovered"
                        color="green"
                    />

                    <Stack />
                    <EventTracker />
                    <HoverState />
                    <Legend />
                    <Tooltip />
                </Chart>
            </Paper>
        );
    }
}

