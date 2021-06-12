import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {
    ArgumentAxis,
    ValueAxis,
    Chart,
    LineSeries,
    Title,
    SplineSeries,
} from '@devexpress/dx-react-chart-material-ui';


export default class AlbertaNewCases extends React.PureComponent {

    old = [...this.props.albertaDailyData];
    cases = this.old.reverse().map((data) => {

        return ({
            splineValue: Math.log(data["cases_confirmed_cumulative"]),
            argument: data.date,
        });


    });
    state = {
        data: this.cases
    };

    render() {
        const { data: chartData } = this.state;
        return (
            <Paper style={{ width: "70vw" }}>
                <Chart height={300}
                    width="70vw"
                    data={chartData}
                >
                    <Title text="Alberta accumulate cases curve (log)" />

                    <ValueAxis />
                    <SplineSeries
                        name="spline"
                        valueField="splineValue"
                        argumentField="argument"
                    />
                </Chart>
                <Typography align="center">Since the beginning of the pandemic</Typography>
            </Paper>
        );
    }
}
