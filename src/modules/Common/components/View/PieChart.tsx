import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";

export default function PieChart(props: any) {

  return (
    <div className="pieChart-container">
      <HighchartsReact highcharts={Highcharts} options={props.options} />
    </div>
  );
}
