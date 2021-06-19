import * as React from 'react';
import Paper from '@material-ui/core/Paper';
import {
    Legend,
    ValueAxis,
    Chart,
    Title,
    ArgumentAxis,
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
export default class CitiesVariant extends React.PureComponent {

    oldCalgary = [...this.props.calgaryVariant];
    calgaryCases = this.oldCalgary.map((data, i) => {
        if (this.props.calgaryVariant[i + 1]) {
            return ({
                calgaryDelta: Math.round(this.props.calgaryVariant[i]["b_1_617"]),
                argument: data.date.slice(0, 10),
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
                <Paper style={{ width: "70vw", marginBottom: '3vh' }} >
                    <Chart height={300}
                        width="70vw"
                        data={chartData}
                    >
                        <Title text="Edmonton VS Calgary Delta curve" />
                        <ValueAxis />
                        <SplineSeries
                            name="Calgary"
                            valueField="calgary"
                            argumentField="argument"
                            color="red"
                        />
                        <SplineSeries
                            name="Edmonton"
                            valueField="edmonton"
                            argumentField="argument"
                            color="blue"
                        />
                        <ArgumentAxis labelComponent={ArgumentLabel} />
                        <Legend />
                    </Chart>
                </Paper>

            </React.Fragment>
        );
    }
}
