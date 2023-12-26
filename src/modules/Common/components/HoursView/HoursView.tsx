import { useEffect, useState } from 'react';
import GraphChart from '../View/GraphChart';
import Highcharts from "highcharts";
import axios from "../../configs/custom-axios";
import DateRangeDropdown from '../DateRangeDropdown/DateRangeDropdown';
import {convertData, convertHoursData} from "../../configs/Helper";

const HoursView = () => {

    const [hoursData, setHoursData] = useState({data: Array(), zones: Array(), categories: Array()});
    const [options, setOptions] = useState({});
    const [dateRange, setDateRange] = useState<string>('CW');

    useEffect(() => {
        setOptions({
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
                backgroundColor: "rgba(32, 29, 30, 0.01)",
                borderWidth: 0,
                borderRadius: 4,
                borderColor: null,
                shadow: false,
                formatter: function (this: Highcharts.TooltipFormatterContextObject) {
                    return this.point.y + " Hours";
                }
            },
            series: [
                {
                    type: "areaspline",
                    data: hoursData.data,
                    zoneAxis: "x",
                    zones: hoursData.zones,
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
                categories: hoursData.categories,
                gridZIndex: 1,
                gridLineWidth: 1,
                gridLineDashStyle: "Dash",
                gridLineColor: "rgba(32, 29, 30, 0.03)",
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
                gridLineColor: "rgba(32, 29, 30, 0.03)",
                crosshair: {
                    width: 1,
                    color: "#39B7E9",
                    dashStyle: "Dash"
                }
            }
        });
    },[hoursData]);

    useEffect(() => {
        axios.post('/agent/hoursview',{dateRange})
            .then(resp=> {
                setHoursData(convertHoursData(resp.data));
            }).catch(err => {
            console.log(err);
        });
    }, [dateRange]);


    return (
        <div className="HoursView">
            <div className="component-container">
                <div className="component-header">
                    <div className="col-md-6">
                        <h2>Hours View</h2>
                    </div>
                    <div className="col-md-6 text-right">
                        <div className="dropdown d-inline-block me-3"><DateRangeDropdown onChange={setDateRange} isFlex={true} /></div>
                    </div>
                </div>
                <div>
                    <div className="col-md-12 text-left">
                        <span><div className="blue"></div>Actual Hours</span>
                        <span><div className="red"></div>Leaves</span>
                        <span><div className="black"></div>Off Days</span>
                    </div>
                </div>
                <GraphChart options={options} />
            </div>
        </div>
    );

}

export default HoursView;
