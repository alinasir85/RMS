import { useEffect, useState } from 'react';
import PieChart from '../../../Common/components/View/PieChart';

const PayrollReport = () => {

  //Pie Data
  const [data] = useState([
    {
      y: 100,
      color: "#03C04A",
      name: "Total Payable Time"
    },
    {
      y: 50,
      color: "#EF9829",
      name: "Unavailable Time"
    },
    {
      y: 20,
      color: "#EE4723",
      name: "Leaves"
    },
    {
      y: 5,
      color: "#FF7A93",
      name: "On Break"
    },
    {
      y: 20,
      color: "#46B0E6",
      name: "HOL"
    },
    {
      y: 10,
      color: "#51D2D0",
      name: "Bereaved"
    },
    {
      y: 15,
      color: "#B0B0B0",
      name: "Overtime"
    },
    {
      y: 20,
      color: "#9B89FF",
      name: "Regular"
    },
    {
      y: 10,
      color: "#5CE1D4",
      name: "PTOs"
    }
  ])

  //PieCHart Configurations
  const [options] = useState({
    chart: {
      height: 180,
      animation: false,
      type: 'pie',
      backgroundColor: null
    },
    title: {
      text: null
    },
    tooltip: {
      backgroundColor: "#FFFFFF",
      borderWidth: 0,
      borderRadius: 5,
      borderColor: null,
      shadow: false,
      valueSuffix: '%',
      enabled: true,
      formatter: function (this: Highcharts.TooltipFormatterContextObject) {
        return this.point.name + " " + `<strong>${this.point.y}</strong>`;
      }
    },
    plotOptions: {
      pie: {
        animation: {
          duration: 750,
          easing: 'easeOutQuad'
        },
        shadow: false,
        center: ['50%', '50%'],
        cursor: 'pointer',
        dataLabels: {
          enabled: false
        },
      },
      series: {
        animation: {
          duration: 750,
          easing: 'easeOutQuad'
        },
        //   hover: {
        //     halo: {
        //         size: 500,
        //     }

        // }
      }
    },
    series: [{
      animation: {
        duration: 750,
        easing: 'easeOutQuad'
      },
      name: 'Spending',
      data: data,
      size: '100%',
      innerSize: '55%',
      dataLabels: {
        formatter: function (this: Highcharts.TooltipFormatterContextObject) {
          return data[0].y + " Hours";
        },
        color: '#ffffff',
        distance: 0
      }
    }],
  });

  useEffect(() => {
  }, []);


  return (
    <>
      <div className="PayrollReport">
        <div className="row">
          <div className="col-50">
            <h3>Payroll Report</h3>
          </div>
          <div className="col-50 text-right">
            <select className='select'>
              <option value="current-week">Current Week</option>
              <option value="las-week">Last Week</option>
              <option value="days">Last 15 Days</option>
            </select>
          </div>
        </div>

        <div className="row">
          <div className="col-50">
            <PieChart data={data} options={options} />
          </div>
          <div className="col-50 vt">
            <div className="row">
              <div className="col-50"> <ul>
                <li><div className="green"></div><strong>{data[0].name}</strong></li>
                <li><div className="orange"></div><strong>{data[1].name}</strong></li>
                <li><div className="red"></div><strong>{data[2].name}</strong></li>
                <li><div className="pink"></div><strong>{data[3].name}</strong></li>
                <li><div className="blue"></div><strong>{data[4].name}</strong></li>
              </ul></div>
              <div className="col-50"> 
              <ul>
                <li><div className="blue"></div><strong>{data[5].name}</strong></li>
                <li><div className="gray"></div><strong>{data[6].name}</strong></li>
                <li><div className="purple"></div><strong>{data[7].name}</strong></li>
                <li><div className="skyBlue"></div><strong>{data[8].name}</strong></li>
              </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );

}

export default PayrollReport;
