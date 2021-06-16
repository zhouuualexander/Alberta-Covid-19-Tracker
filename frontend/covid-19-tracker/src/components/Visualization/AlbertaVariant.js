import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import {
    Legend,
    ValueAxis,
    Chart,
    Title,
    LineSeries,
    SplineSeries,
} from '@devexpress/dx-react-chart-material-ui';

export default class AlbertaVariant extends React.PureComponent {

    old = [...this.props.albertaDailyVariant];
    newCases = this.old.map((data, i) => {
        if (this.props.albertaDailyVariant[i + 1]) {
            return ({
                india: Math.round(this.props.albertaDailyVariant[i]["b_1_617"]),
                british: Math.round(this.props.albertaDailyVariant[i]["b_1_1_7"]),
                brazil: Math.round(this.props.albertaDailyVariant[i]["p_1"]),
                southAfrica: Math.round(this.props.albertaDailyVariant[i]["b_1_351"]),
                argument: data.date,
            });
        }
        else {
            return ({
                southAfrica: Math.round(this.props.albertaDailyVariant[i]["b_1_351"]),
                brazil: Math.round(this.props.albertaDailyVariant[i - 1]["p_1"]),
                british: Math.round(this.props.albertaDailyVariant[i - 1]["b_1_1_7"]),
                india: Math.round(this.props.albertaDailyVariant[i - 1]["b_1_617"]),
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
            <React.Fragment >
                <Paper style={{ width: "70vw", marginBottom: '3vh' }} >
                    <Chart height={300}
                        width="70vw"
                        data={chartData}
                    >
                        <Title text="Alberta Variant Beta VS Delta curve" />
                        <ValueAxis />
                        {/* <SplineSeries
                        name="Delta (India B.1.167)"
                        valueField="splineValue"
                        argumentField="argument"
                    /> */}

                        <LineSeries
                            name="Delta (India B.1.617)"
                            valueField="india"
                            argumentField="argument"
                        />

                        <LineSeries
                            name="Beta (South Africa B.1.351)"
                            valueField="southAfrica"
                            argumentField="argument"
                        />
                        <Legend />
                    </Chart>
                    <Typography align="center">Since the beginning of the pandemic</Typography>
                </Paper>
                <Paper style={{ width: "70vw" }}>
                    <Chart height={300}
                        width="70vw"
                        data={chartData}
                    >
                        <Title text="Alberta Variant Alpha VS Gamma curve" />
                        <ValueAxis />
                        {/* <SplineSeries
                    name="Delta (India B.1.167)"
                    valueField="splineValue"
                    argumentField="argument"
                /> */}

                        <LineSeries
                            name="Alpha (British B.1.1.7)"
                            valueField="british"
                            argumentField="argument"
                        />

                        <LineSeries
                            name="Gamma (Brazil P.1)"
                            valueField="brazil"
                            argumentField="argument"
                        />
                        <Legend />
                    </Chart>
                    <Typography align="center">Since the beginning of the pandemic</Typography>
                </Paper>
            </React.Fragment>
        );
    }
}
