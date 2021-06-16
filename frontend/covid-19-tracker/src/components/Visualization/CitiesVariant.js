import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {
    Legend,
    ValueAxis,
    Chart,
    Title,
    LineSeries,
} from '@devexpress/dx-react-chart-material-ui';

export default class CitiesVariant extends React.PureComponent {

    oldCalgary = [...this.props.calgaryVariant];
    calgaryCases = this.oldCalgary.map((data, i) => {
        if (this.props.calgaryVariant[i + 1]) {
            return ({
                calgaryDelta: Math.round(this.props.calgaryVariant[i]["b_1_617"]),
                argument: data.date,
            });
        }
        else {
            return ({
                calgaryDelta: Math.round(this.props.calgaryVariant[i - 1]["b_1_617"]),
                argument: 0,
            });;
        }

    });
    oldEdmonton = [...this.props.edmontonVariant];
    edmontonCases = this.oldEdmonton.map((data, i) => {
        if (this.props.edmontonVariant[i + 1]) {
            return ({
                edmontonDelta: Math.round(this.props.edmontonVariant[i]["b_1_617"]),
                argument: data.date,
            });
        }
        else {
            return ({
                edmontonDelta: Math.round(this.props.edmontonVariant[i - 1]["b_1_617"]),
                argument: 0,
            });;
        }

    });
    citiesCases = this.calgaryCases.map((data, i) => {
        return ({
            calgary: data.calgaryDelta,
            edmonton: this.edmontonCases[i].edmontonDelta,
            argument: data.argument,
        });
    });

    state = {
        data: this.citiesCases
    };

    render() {

        const { data: chartData } = this.state;
        return (
            <React.Fragment >
                <Paper style={{ width: "70vw" }} >
                    <Chart height={300}
                        width="70vw"
                        data={chartData}
                    >
                        <Title text="Edmonton VS Calgary Delta curve" />
                        <ValueAxis />
                        <LineSeries
                            name="Calgary"
                            valueField="calgary"
                            argumentField="argument"
                            color="red"
                        />
                        <LineSeries
                            name="Edmonton"
                            valueField="edmonton"
                            argumentField="argument"
                            color="blue"
                        />
                        <Legend />
                    </Chart>
                    <Typography align="center">Since the beginning of the pandemic</Typography>
                </Paper>

            </React.Fragment>
        );
    }
}
