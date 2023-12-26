import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

export default function LineChart(props: any) {

    return (
        <div className="lineChart-container">
            <HighchartsReact highcharts={Highcharts} options={props.options} />
        </div>
    );
}
