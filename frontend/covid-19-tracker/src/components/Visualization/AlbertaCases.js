import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
    ArgumentAxis,
    ValueAxis,
    Chart,
    Title,
    SplineSeries,
} from '@devexpress/dx-react-chart-material-ui';
const labelHalfWidth = 500;
let lastLabelCoordinate;

const ArgumentLabel = props => {
    const { x } = props;
    // filter Labels
    if (
        lastLabelCoordinate &&
        lastLabelCoordinate < x &&
        x - lastLabelCoordinate <= labelHalfWidth
    ) {
        return null;
    }
    lastLabelCoordinate = x;
    return <ArgumentAxis.Label {...props} />;
};

export default class AlbertaNewCases extends React.PureComponent {

    old = [...this.props.albertaDailyData];
    cases = this.old.reverse().map((data) => {

        return ({
            splineValue: Math.log(data["cases_confirmed_cumulative"]),
            argument: data.date.slice(0, 10),
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
                    <Title text="Alberta accumulate cases curve (Logarithm)" />
                    <ValueAxis />
                    <SplineSeries
                        name="spline"
                        valueField="splineValue"
                        argumentField="argument"
                    />
                    <ArgumentAxis labelComponent={ArgumentLabel} />
                </Chart>
            </Paper>
        );
    }
}
