import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
    ValueAxis,
    Chart,
    Legend,
    ArgumentAxis,
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

export default class CitiesVaccination extends React.PureComponent {

    oldEdmonton = [...this.props.edmontonDailyVaccination];
    oldCalgary = [...this.props.calgaryDailyVaccination];

    edmontonDailyVaccinationRate = this.oldEdmonton.reverse().map((data) => {
        return ({
            splineValue: data["percent_pop_1_plus_dose"],
            argument: data.date.slice(0, 10),
        });

    });
    calgaryDailyVaccinationRate = this.oldCalgary.reverse().map((data) => {
        return ({
            lineValue: data["percent_pop_1_plus_dose"],
            argument: data.date,
        });

    });
    citiesDailyVaccinationRate = this.edmontonDailyVaccinationRate.map((data, i) => {
        return ({

            lineValue: Math.round(this.calgaryDailyVaccinationRate[i].lineValue),
            splineValue: Math.round(data.splineValue),
            argument: data.argument,
        });
    });
    state = {
        data: this.citiesDailyVaccinationRate
    };
    render() {
        const { data: chartData } = this.state;
        return (
            <Paper style={{ width: "70vw" }}>
                <Chart height={300}
                    width='70vw'
                    data={chartData}
                >
                    <Title text="Edmonton vs Calgary first dose vaccination rate" />
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
                    <ArgumentAxis labelComponent={ArgumentLabel} />
                    <Legend />
                </Chart>
            </Paper >
        );
    }
}
