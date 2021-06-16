import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {
    ValueAxis,
    Chart,
    Legend,
    Title,
    ArgumentAxis,
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
export default class CitiesNewCases extends React.PureComponent {

    oldEdmonton = [...this.props.edmontonDailyData];
    oldCalgary = [...this.props.calgaryDailyData];

    newEdmontonCases = this.oldEdmonton.reverse().map((data, i) => {
        if (this.props.edmontonDailyData[i + 1]) {
            return ({
                splineValue: this.props.edmontonDailyData[i]["cases_confirmed_cumulative"] - this.props.edmontonDailyData[i + 1]["cases_confirmed_cumulative"],
                argument: data.date.slice(0, 10),
            });
        }
        else {
            return ({
                splineValue: 0,
                argument: 0,

            });;
        }
    });
    newCalgaryCases = this.oldCalgary.reverse().map((data, i) => {
        if (this.props.calgaryDailyData[i + 1]) {
            return ({
                lineValue: this.props.calgaryDailyData[i]["cases_confirmed_cumulative"] - this.props.calgaryDailyData[i + 1]["cases_confirmed_cumulative"],
            });
        }
        else {
            return ({
                lineValue: 0
            });;
        }

    });
    newCitiesCases = this.newEdmontonCases.map((data, i) => {
        return ({
            splineValue: data.splineValue,
            lineValue: this.newCalgaryCases[i].lineValue,
            argument: data.argument,
        });
    });
    state = {
        data: this.newCitiesCases
    };
    render() {
        const { data: chartData } = this.state;
        return (
            <Paper style={{ width: "70vw" }}>
                <Chart height={300}
                    width='70vw'
                    data={chartData}
                >
                    <Title text="Edmonton vs Calgary daily new cases curve" />
                    <ValueAxis />
                    <SplineSeries
                        name="Edmonton"
                        valueField="splineValue"
                        argumentField="argument"
                        color="blue"
                    />
                    <SplineSeries
                        name="Calgary"
                        valueField="lineValue"
                        argumentField="argument"
                        color="red"
                    />
                    <Legend />
                    <ArgumentAxis labelComponent={ArgumentLabel} />
                </Chart>
            </Paper >
        );
    }
}
