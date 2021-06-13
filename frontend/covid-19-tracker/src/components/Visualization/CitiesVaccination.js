import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {
    ValueAxis,
    Chart,
    Legend,
    LineSeries,
    Title,
    SplineSeries,
} from '@devexpress/dx-react-chart-material-ui';

export default class CitiesVaccination extends React.PureComponent {

    oldEdmonton = [...this.props.edmontonDailyVaccination];
    oldCalgary = [...this.props.calgaryDailyVaccination];

    edmontonDailyVaccinationRate = this.oldEdmonton.reverse().map((data) => {
        return ({
            splineValue: data["percent_pop_1_plus_dose"],
            argument: data.date,
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
                    <LineSeries
                        name="Calgary"
                        valueField="lineValue"
                        argumentField="argument"
                        color="red"
                    />
                    <Legend />
                </Chart>
                <Typography align="center">Since April 25th, 2021</Typography>
            </Paper >
        );
    }
}
