import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { useState } from "react";
import './view.css';

interface highChartDetails {
  DataObjectY: any;
  DataObjectX: any;
}
export default function HighChart(props: any, { DataObjectX, DataObjectY }: highChartDetails) {
  const [options] = useState({
    chart: {
      height: 200,
      type: "areaspline",
      plotBorderWidth: 0
    },
    title: {
      text: "",
      align: "left",
      verticalAlign: "top",
      x: 10,
      y: 20
    },
    tooltip: {
      backgroundColor: "#ffffff",
      borderWidth: 0,
      borderRadius: 4,
      borderColor: "#AAA",
      formatter: function (this: Highcharts.TooltipFormatterContextObject) {
        return this.point.y + " Hours";
      }
    },
    series: [
      {
        type: "areaspline",
        data: [0, 8, 0, 9, 10, 9, 8],
        zoneAxis: "x",
        zones: [
          {
            value: 1,
            color: "#EE4723",
            fillColor: {
              linearGradient: [0, 0, 0, 150],
              stops: [
                [0, '#EE4723'],
                [10, Highcharts.color('#ffffff').setOpacity(0.1).get('rgba')]
              ]
            },
          },
          {
            value: 5,
            color: "#666666",
            fillColor: {
              linearGradient: [0, 0, 0, 150],
              stops: [
                [0, '#666666'],
                [1, Highcharts.color('#ffffff').setOpacity(0.1).get('rgba')]
              ]
            },
          },
          {
            value: 9,
            color: "#39B7E9",
            fillColor: {
              linearGradient: [0, 0, 0, 150],
              stops: [
                [0, '#39B7E9'],
                [1, Highcharts.color('#ffffff').setOpacity(0.1).get('rgba')]
              ]
            },
          }
        ],
        marker: {
          enabled: false
      }
      }
    ],
    legend: {
      enabled: false
    },
    xAxis: {
      type: "datetime",
      categories: [
        "11 Mar",
        "12 Mar",
        "13 Mar",
        "14 Mar",
        "15 Mar",
        "16 Mar",
        "17 Mar"
      ],
      gridZIndex: 1,
      gridLineWidth: 1,
      gridLineDashStyle: "Dash",
      gridLineColor: "#EEEEEE",
      lineWidth: 0,
      crosshair: {
        width: 1,
        color: "#39B7E9",
        dashStyle: "Dash"
      }
    },
    yAxis: {
      lineWidth: 0,
      title: {
        text: '',
      },
      gridLineWidth: 1,
      gridLineDashStyle: "Dash",
      gridLineColor: "#EEEEEE",
      crosshair: {
        width: 1,
        color: "#39B7E9",
        dashStyle: "Dash"
      }
    }
  });

  //Important Comment
  
  // let color:any;
  // let value:any;
  // let fillColor:any;

  // const range = () => {
  //   let result = options.series[0].data;
  //   for (let i = 0; i < result.length; i++) {
  //     if (result[i] === 0) {
  //       color = "#EE4723";
  //       value = 9;

  //     }else if(result[i] === 1){
  //       color = options.series[0].zones[0].color = "#666666";
  //       value = options.series[0].zones[0].value = 9;

  //     }else if(result[i] >= 1){
  //       color = options.series[0].zones[0].color = "#46B0E6";
  //       value = options.series[0].zones[0].value = result[i];
  //     }
  //   }

  //   return;

  // }

  // useEffect(()=>{
  //   range();
  // },[])
  return (
    <div className="highchart-container">
      <div className="row chartFilter">
        <div className="col-50">
          <h3>Hours View</h3>
        </div>
        <div className="col-50 text-right">
          <select name="days" id="days">
            <option value="current-week">Current Week</option>
            <option value="las-week">Last Week</option>
            <option value="days">Last 15 Days</option>
          </select>
        </div>
      </div>

      <div className="row chartFilter">
        <div className="col-50">
          <span><div className="blue"></div>Actual Hours</span>
          <span><div className="red"></div>Leaves</span>
          <span><div className="black"></div>Off Days</span>
        </div>
        <div className="col-50 text-right">
        </div>
      </div>

      <div className="graph">
        <HighchartsReact highcharts={Highcharts} options={options} />
      </div>
    </div>
  );
}
