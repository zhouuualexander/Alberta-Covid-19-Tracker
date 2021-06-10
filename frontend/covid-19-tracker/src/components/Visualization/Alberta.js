import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import { Animation } from '@devexpress/dx-react-chart';
import { Chart, ArgumentAxis, ValueAxis, BarSeries, Title, Tooltip } from '@devexpress/dx-react-chart-material-ui';
import { scaleBand } from '@devexpress/dx-chart-core';
import { ArgumentScale } from '@devexpress/dx-react-chart';
import { EventTracker, HoverState } from '@devexpress/dx-react-chart';

export default class Demo extends React.PureComponent {

    state = {
        data: [
            { state: 'Active', active: this.props.albertaActive.length },
            { state: 'Recovered', recovered: this.props.albertaRecovered.length },
            { state: 'Died', died: this.props.albertaDied.length }
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
                    <Title text="Alberta Covid-19" />
                    <BarSeries
                        valueField="active"
                        argumentField="state"
                        name="Active"
                    />
                    <BarSeries
                        valueField="recovered"
                        argumentField="state"
                        name="Recovered"
                    />
                    <BarSeries
                        valueField="died"
                        argumentField="state"
                        name="Died"
                    />
                    <EventTracker />
                    <HoverState />
                    <Tooltip />

                </Chart>
            </Paper>
        );
    }
}

