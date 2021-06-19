import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {

    ValueAxis,
    Chart,
    ArgumentAxis,
    Title,
    SplineSeries,
} from '@devexpress/dx-react-chart-material-ui';
const labelHalfWidth = 150;
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

    old = [...this.props.albertaDailyData].reverse();
    newCases = this.old.map((data, i) => {
        if (this.props.albertaDailyData[i + 1]) {
            return ({
                splineValue: this.old[i + 1]["cases_confirmed_cumulative"] - this.old[i]["cases_confirmed_cumulative"],
                argument: data.date.slice(0, 10),
            });
        }
        else {
            return ({
                splineValue: this.old[i]["cases_confirmed_cumulative"] - this.old[i - 1]["cases_confirmed_cumulative"],
                argument: 0,
            });;
        }

    });
    state = {
        data: this.newCases
    };

    render() {

        const { data: chartData } = this.state;
        return (
            <Paper style={{ width: "70vw" }}>
                <Chart height={300}
                    width="70vw"
                    data={chartData}
                >
                    <Title text="Alberta daily new cases curve" />
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
