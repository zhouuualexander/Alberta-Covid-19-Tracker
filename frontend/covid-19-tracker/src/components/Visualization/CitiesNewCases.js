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

export default class CitiesNewCases extends React.PureComponent {

    oldEdmonton = [...this.props.edmontonDailyData];
    oldCalgary = [...this.props.calgaryDailyData];

    newEdmontonCases = this.oldEdmonton.reverse().map((data, i) => {
        if (this.props.edmontonDailyData[i + 1]) {
            return ({
                splineValue: this.props.edmontonDailyData[i]["cases_confirmed_cumulative"] - this.props.edmontonDailyData[i + 1]["cases_confirmed_cumulative"],
                argument: data.date,
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
            <Paper style={{ width: "800px" }}>
                <Chart height={300}
                    width={800}
                    data={chartData}
                >
                    <Title text="Edmonton vs Calgary new cases curve" />
                    <ValueAxis />
                    <SplineSeries
                        name="Edmonton"
                        valueField="splineValue"
                        argumentField="argument"
                    />
                    <LineSeries
                        name="Calgary"
                        valueField="lineValue"
                        argumentField="argument"
                    />
                    <Legend />

                </Chart>
                <Typography align="center">Since the beginning of the pandemic</Typography>
            </Paper>
        );
    }
}
// return (
//     <Paper style={{ width: "800px" }}>
//         <Chart height={300}
//             width={800}
//             data={chartData}
//         >
//             <Title text="Edmonton vs Calgary new cases curve" />
//             <ValueAxis />
//             <SplineSeries
//                 name="Edmonton"
//                 valueField="splineValue"
//             />
//             {/* <LineSeries
//                 name="Calgary"
//                 valueField="lineValue"
//             /> */}
//             <Legend />
//         </Chart>
//         <Typography align="center">Since the beginning of the pandemic</Typography>
//     </Paper>
// );