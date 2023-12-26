import React, {useEffect, useRef, useState} from "react";
import classes from "./AgentAttendance.module.css";
import {I2cMenuItem, I2cSelect} from "@webcomponents/i2cwebcomponents/dist/react";
import {Category, Diagram} from "iconsax-react";
import PopOver from "../../../Common/components/Popover-component/PopoverOver";
import Tooltip from "@mui/material/Tooltip/Tooltip";
import {convertData} from "../../../Common/configs/Helper"
import axios from "../../../Common/configs/custom-axios";
import DateRangeDropdown from "../../../Common/components/DateRangeDropdown/DateRangeDropdown";
import PaginatedItems from "../../../Common/components/react-paginate/react-paginate";


let tabValHolder: string = "shifts";
let reportViewHolder: string = "graph";

const AgentAttendance = () => {

    const footerRef = useRef<HTMLDivElement>(null);
    const scrollBoxRef = useRef<HTMLDivElement>(null);
    const xAxisRef = useRef<HTMLDivElement>(null);
    const [tabVal, setTabVal] = useState('shifts');
    const [reportView, setReportView] = useState('graph');
    const [graphTblData, setGraphTblData] = useState<any[]>([]);
    const [htmlBars, setHtmlBars] = useState<any[]>([]);
    const [anchorElPopover, setAnchorElPopover] = React.useState<HTMLButtonElement | null>(null);
    const [xAxisHtml, setXAxisHtml] = useState('');
    const [jsonData, setJsonData] = useState<any[]>([]);
    const [popUpData, setPopUpData] = useState ({});
    const [minStart,setMinStart] = useState(25);
    const [maxEnd,setMaxEnd] = useState(0);
    const [hoursMinSwitcher,setHoursMinSwitcher]= useState("hours-view");
    const [dateRange, setDateRange] = useState<string>('CW');

    useEffect(() => {

        axios.post('/attendance/record')
            .then(resp=> {
                setJsonData(convertData(resp.data, tabVal));
            }).catch(err => {
                console.log(err);
        });

        tabValHolder = tabVal;
        reportViewHolder = reportView;

    }, [tabVal]);

    useEffect(()=>{
        graphInit();
    },[jsonData])

    const switchHoursMinutesView = (selectedValue:string) => {
        let xAxisHtmlsContainer: any[] = [];
        let min = 0;
        setHoursMinSwitcher(selectedValue);
        for (let i = minStart; i <= maxEnd; i++) {
            if(selectedValue === "minutes-view") {
                xAxisHtmlsContainer.push('<i class="x-axis-element">' + min + '</i>');
                min+=20;
            } else {
                if(i>=13){
                    xAxisHtmlsContainer.push('<i class="x-axis-element">' + (i-12) + ':00 PM</i>');
                }
                else{
                    xAxisHtmlsContainer.push('<i class="x-axis-element">' + i + ':00 AM</i>');
                }
            }
        }
        setXAxisHtml(xAxisHtmlsContainer.join(""));
    }

    const graphInit = () => {
        let data: any[] = [];
        if (reportViewHolder === 'graph') {
            if (tabValHolder === 'requests') {
                data = jsonData;
            } else {
                data = jsonData;
            }
            setGraphTblData(data);
        }
        setHtmlBars ([]);
        let elementsTemp: any[] = []
        let elements: any[] = []
        let minStart = 25;
        let maxEnd = 0;
    

        let elementWidth: any;
        let radiusCss = '';
        let promise = new Promise<any>((resolve, reject) => {
          setTimeout(() => {
            for (let i = 0; i < data.length; i++) {
              for (let j = 0; j < data[i].taskDetails.length; j++) {
                if (data[i].taskDetails[j]['start'] < minStart) {
                  minStart = data[i].taskDetails[j]['start'];
                }
                if (data[i].taskDetails[j]['end'] > maxEnd) {
                  maxEnd = data[i].taskDetails[j]['end'];
                }
              }
            }
            setMinStart(minStart);
            setMaxEnd(maxEnd);
            let xAxisHtmlContainer: any[] = [];
            for (let i = minStart; i <= maxEnd; i++) {
                if(i>=13){
                    xAxisHtmlContainer.push('<i class="x-axis-element">' + (i-12) + ':00 PM</i>');
                }
                else{
                    xAxisHtmlContainer.push('<i class="x-axis-element">' + i + ':00 AM</i>');
                }
            }
            setXAxisHtml(xAxisHtmlContainer.join(""));
            resolve('Draw Chart Now');
          });
        })
        promise.then((val) => {
            let box: any = xAxisRef;
            let xAxisWidth:number = 0;
            setTimeout(() => {
                xAxisWidth = box?.current?.offsetWidth / (maxEnd - minStart + 1);
                let tempStyle:any= '';
                for (let i = 0; i < data.length; i++) {
                    
                    for (let j = 0; j < data[i].taskDetails.length; j++) {
                        const key = data[i].taskDetails[j].id;
                
                        if (j < data[i].taskDetails.length - 1) {
                            if (data[i].taskDetails[j]['end'] !== data[i].taskDetails[j + 1]['start']) {
                                radiusCss = 'border-top-right-radius:20px;border-bottom-right-radius:20px';
                            }
                        }
                        if (j > 0) {
                            if (data[i].taskDetails[j - 1]['end'] !== data[i].taskDetails[j]['start']) {
                                if (radiusCss !== '') {
                                    radiusCss = 'border-radius:20px;';
                                } else {
                                    radiusCss = 'border-top-left-radius:20px;border-bottom-left-radius:20px';
                                }
                            }
                        }
                        elementsTemp.push(key + ' ' + key + '-' + i + '-' + j);
                        elementWidth = ((data[i].taskDetails[j]['end'] - data[i].taskDetails[j]['start']) * xAxisWidth) + 1;
                        const elementPosition = ((data[i].taskDetails[j]['start'] - minStart) * xAxisWidth) + 10;
                        tempStyle += '.' + key + '-' + i + '-' + j + '{width:' + elementWidth + 'px; background:' + data[i].taskDetails[j]['color'] + '; left:' + elementPosition + 'px;' + radiusCss + '}';
                        elements.push(elementsTemp);
                        elementsTemp = [];
                        radiusCss = '';
                    }
                    const setElements= elements;
                    setHtmlBars( (currentState) => [...currentState, setElements]);            
                    elements = [];
                }

                const css: any = document.createElement('style');
                css.type = 'text/css';
    
                if (css.styleSheet && tempStyle)
                    css.styleSheet.cssText = tempStyle;
                else
                    css.appendChild(document.createTextNode(tempStyle));
                document.getElementsByTagName("head")[0].appendChild(css);
            });
        }).catch(function (error) { })
    };

    const changeView = (val: string) => {
        reportViewHolder = val;
        setReportView(reportViewHolder);
        graphInitOnViewChangeOrTabChange();
    }

    const tabChange = (val: string) => {
        tabValHolder = val;
        setTabVal(tabValHolder);
        graphInitOnViewChangeOrTabChange();
    }

    const graphInitOnViewChangeOrTabChange = () => {
        if (reportViewHolder === 'graph') {    
            graphInit();
        }
    }

    /* Material UI Popover configuration start */
    const togglePopoverHandler = (event: React.MouseEvent<HTMLButtonElement>, index:number) => {
        setAnchorElPopover(event.currentTarget);
        setPopUpData(jsonData[index]);
    };
    const closePopoverHandler = () => {
        setAnchorElPopover(null);
    };
    const open = !!anchorElPopover;
    /* Material UI Popover configuration  end */


    return (
        <div>
            {}
            <div className={classes['attendance-wrapper']}>
                <div className='p-4'>
                    <div className='row justify-content-between align-items-center'>
                        <div className='col-xxl-4 col-xl-3 d-flex justify-content-xl-start justify-content-center'>
                            <h1>Attendance Record</h1>
                        </div>
                        <div className='col-xl-4 justify-content-center d-flex mt-xl-0 mb-xl-0 mb-3 mt-3'>
                            <div className={`nav btn-group btn-group-sm d-inline-block ${classes['tabs-toggle']}`} role="group" aria-label="toggle button group">
                                <input type="radio" className={classes['btn-check']} name="btnradio" id="btnradio1" onClick={() => {tabChange('shifts');}} autoComplete="off"  defaultChecked aria-label="Active Tab" />
                                <label className={`btn + ${classes['btn-outline-secondary']}`} htmlFor="btnradio1"> My Shifts</label>

                                <input type="radio" className={classes['btn-check']} name="btnradio" id="btnradio2" onClick={() => { tabChange('requests');}} autoComplete="off" value="0" aria-label="History Tab" />
                                <label className={`btn ${classes['btn-outline-secondary']}`} htmlFor="btnradio2">Requests</label>
                            </div>
                        </div>
                        <div className='d-flex justify-content-xl-end justify-content-center text-center col-xxl-4 col-xl-5'>
                            <DateRangeDropdown onChange={setDateRange}/>
                            <div>
                                {
                                    tabVal === 'requests' && reportView  === 'graph' &&
                                    <div className="dropdown d-inline-block me-3">
                                        <I2cSelect className={classes['time-view-dropdown']} value={hoursMinSwitcher} onI2cChange={(event:any)=>switchHoursMinutesView(event.target.value)}>
                                            <I2cMenuItem className={classes['time-view-dropdown-item']} value="hours-view">Hours View</I2cMenuItem>
                                            <I2cMenuItem className={classes['time-view-dropdown-item']} value="minutes-view">Minutes View</I2cMenuItem>
                                        </I2cSelect>
                                    </div>
                                }
                                <div className="nav btn-group btn-group-sm d-inline-block tabs-toggle view-switch-tabs" role="group" aria-label="toggle button group">
                                    <input type="radio" className={classes['btn-check']} name="viewType" id="btnradiodisplay2" 
                                        onClick={
                                            () => {
                                                changeView('grid');
                                            }
                                        }
                                        autoComplete="off" value="0" aria-label="Grid View Tab" />
                                    <label className={`btn ${classes['btn-outline-secondary']}`} aria-label="Grid-layout-label" htmlFor="btnradiodisplay2"><Category className="mb-1" size="14" color="#000" /><span className="ms-1">Grid</span></label>

                                    <input type="radio" className={classes['btn-check']} name="viewType" id="btnradiodisplay1" 
                                        onClick={
                                            () => {
                                                changeView('graph');
                                            }
                                        }
                                        autoComplete="off" defaultChecked aria-label="Graph View Tab" />
                                    <label className={`btn ${classes['btn-outline-secondary']}`} aria-label="List-layout-label" htmlFor="btnradiodisplay1"><Diagram className="mb-1" size="14" color="#000" /> <span className="ms-1">Graph</span></label>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    reportView === 'graph' && graphTblData &&
                    <div>
                        <div className={`${classes['tbl-container']} w-100 slim-scroll`}>
                            {
                                graphTblData.length > 0 &&
                                <table  className={`${classes['standard-tbl-structure']} ${classes['attendance-table']}`}>
                                    <thead>
                                        <tr>
                                            <th style={{width:'120px'}} className={classes['right-shadow-cell']}>
                                                Date
                                            </th>
                                            <th>
                                                { tabVal === 'shifts'? 'Shift Timings' : 'Request Status (Pending/Approved/Decline)' }
                                            </th>
                                            <th style={{width:'100px'}}>
                                                Scheduled
                                            </th>
                                            <th style={{width:'100px'}}>
                                                Available
                                            </th>
                                            <th style={{width:'100px'}}>
                                                Break
                                            </th>
                                            <th style={{width:'100px'}}>
                                                Occurrence
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr>
                                            <td colSpan={6} className="p-0 td-scroll scrollParent">
                                                <div className="table-scroll " ref={scrollBoxRef}>
                                                    <table className="table-body-content scrollChild">
                                                        <tbody>
                                                            <tr>
                                                                <td className={classes['right-shadow-cell']} width="120"></td>
                                                                <td>
                                                                    <div className={`position-relative ${classes['x-axis']}`} ref={xAxisRef} dangerouslySetInnerHTML={{__html: xAxisHtml}} />
                                                                </td>
                                                                <td className={classes['left-shadow-cell']} width="100">

                                                                </td>
                                                                <td width="100">

                                                                </td>
                                                                <td width="100">

                                                                </td>
                                                                <td width="100">

                                                                </td>
                                                            </tr>
                                                            {
                                                                
                                                                htmlBars.length && graphTblData.map((item,  i) => {
                                                                    return (
                                                                        <tr key={i}><td className={`bg-white ${classes['right-shadow-cell']}`}>
                                                                                {item.timeDetails?.date}
                                                                            </td>
                                                                            <td className={classes['graph-box']}>
                                                                            
                                                                                { !htmlBars[i].length && <span className={classes['no-shift-text']}>No Shift</span> }
                                                                                
                                                                                <div className={`position-relative ${classes['graph-cell']} ${!htmlBars[i].length ? classes['no-shift'] : ''  }`}>
                                                                                    { 
                                                                                        htmlBars[i].map((graphCell: any, j: number) => {
                                                                                            if(item.taskDetails[j]?.id &&  tabVal==='shifts')
                                                                                            {
                                                                                                return <span key={i+j} onClick={(event:React.MouseEvent<HTMLButtonElement>)=>togglePopoverHandler(event, i)} className={`${classes['graph-piece']} d-inline-block ${item.taskDetails[j]?.id}-${i}-${j}`}> {item.taskDetails[j].text}</span>;
                                                                                            }
                                                                                            if(item.taskDetails[j]?.id &&  tabVal==='requests')
                                                                                            {
                                                                                                return <Tooltip key={i+j} title="Request Rejected" placement="bottom"><span className={`${classes['graph-piece']} d-inline-block ${item.taskDetails[j]?.id}-${i}-${j}`}> {item.taskDetails[j].text}</span></Tooltip>;
                                                                                            }
                                                                                            return <></>;
                                                                                        })
                                                                                    }
                                                                                </div>
                                                                                
                                                                            </td>
                                                                            <td className={`text-center bg-white ${classes['left-shadow-cell']}`}>
                                                                                {item.timeDetails?.graphScheduleDate || 0}
                                                                            </td>
                                                                            <td className="text-center bg-white">
                                                                                {item.timeDetails?.graphAvailableDate || 0}
                                                                            </td>
                                                                            <td className="text-center bg-white">
                                                                                {item.timeDetails?.breakTime || 0}
                                                                            </td>
                                                                            <td className="text-center bg-white">
                                                                                {item.timeDetails?.occurrences || 0}
                                                                            </td></tr> 
                                                                    ) 
                                                                    
                                                                })
                                                            }
                                                        </tbody>
                                                    </table>
                                                </div>
                                            </td>
                                        </tr>
                                    </tbody>
                                </table>
                            }

                        </div>
                        <div className={classes['indicators-row']} ref={footerRef}>
                            {tabVal==="shifts"?(
                                <div className={`d-inline-block ${classes['chart-indicators']}`}>
                                    <span><i className={classes.blue}></i> Actual</span>
                                    <span><i className={classes['light-blue']}></i> Break</span>
                                    <span><i className={classes['light-red']}></i> Occurrences</span>
                                    <span><i className={classes.yellow}></i> Flex </span>
                                    <span><i className={classes.green}></i> Paid Time Off  </span>
                                    <span><i className={classes.red}></i> Unpaid Time Off (Pending Approvals) </span>
                                    <span><i className={classes.purple}></i> Unpaid Time Off (Approved) </span>
                                </div>
                                )
                                :
                                (
                                <div className={`d-inline-block ${classes['chart-indicators']}`}>
                                    <span><i className={classes.gray}></i> All Request</span>
                                    <span><i className={classes.green}></i> Paid Time Off</span>
                                    <span><i className={classes.red}></i> Unpaid Time Off (Pending Approvals)</span>
                                    <span><i className={classes.purple}></i> Unpaid Time Off (Approved) </span>
                                </div>
                                )
                            }
                        </div>
                    </div>
                }
                {
                    reportView === 'grid' && tabVal==='shifts' &&
                    <div className='w-100'>
                        <div className={`${classes['tbl-container']} w-100 slim-scroll`}>
                            <table className={`${classes['standard-tbl-structure']} ${classes['table-shifts']}` }>
                                <thead>
                                    <tr>
                                        <th className={classes['right-shadow-cell']}>
                                            Date
                                        </th>
                                        <th>
                                            Login
                                        </th>
                                        <th>
                                            Logout
                                        </th>
                                        <th>
                                            Call Time
                                        </th>
                                        <th>
                                            Trainings Time
                                        </th>
                                        <th>
                                            Ticket Management
                                        </th>
                                        <th>
                                            Case Management
                                        </th>
                                        <th>
                                            QA Time
                                        </th>
                                        <th>
                                            Scheduled Time
                                        </th>
                                        <th>
                                            Break Time
                                        </th>
                                        <th>
                                            Paid Time Off
                                        </th>
                                        <th>
                                            Flex Hours
                                        </th>
                                        <th>
                                            Unpaid Time off Approved
                                        </th>
                                        <th>
                                            Unpaid Time off Pending
                                        </th>
                                        <th className={classes['left-shadow-cell']}>
                                            Available Time
                                        </th>
                                        <th>
                                            Occurrences
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colSpan={16} className="p-0 td-scroll scrollParent">
                                            <div className="table-scroll" ref={scrollBoxRef}>
                                                <table className="table-body-content scrollChild">
                                                    <tbody>
                                                    {jsonData.map((item,index)=> (
                                                        <tr key={index}>
                                                            <td className={classes['right-shadow-cell']}>{item.timeDetails.date}</td>
                                                            <td>{item.timeDetails.timeIn}</td>
                                                            <td>{item.timeDetails.timeOut}</td>
                                                            <td>{item.timeDetails.callTime}</td>
                                                            <td>{item.timeDetails.trainingTime}</td>
                                                            <td>{item.timeDetails.ticketManagement}</td>
                                                            <td>{item.timeDetails.caseManagement}</td>
                                                            <td>{item.timeDetails.qaTime}</td>
                                                            <td className={classes['bg-blue']}>{item.timeDetails.gridScheduleDate?item.timeDetails.gridScheduleDate:0}</td>
                                                            <td>{item.timeDetails.breakTime}</td>
                                                            <td className={classes['bg-green']}>{item.timeDetails.paidTimeOff}</td>
                                                            <td className={classes['bg-green']}>{item.timeDetails.flexHours}</td>
                                                            <td className={classes['bg-purple']}>{item.timeDetails.unpaidTimeoffApproved}</td>
                                                            <td>{item.timeDetails.unpaidTimeoffPending}</td>
                                                            <td className={classes['left-shadow-cell']}>{item.timeDetails.gridAvailableDate?item.timeDetails.gridAvailableDate:0}</td>
                                                            <td className={classes['bg-red']}>{item.timeDetails.occurrences}</td>
                                                        </tr>
                                                        )
                                                    )}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <PaginatedItems/>
                    </div>
                }
                {
                    reportView === 'grid' && tabVal==='requests' &&
                    <div className='w-100'>
                        <div className={`${classes['tbl-container']} w-100 slim-scroll`}>
                            <table className={`${classes['standard-tbl-structure']} ${classes['requests-table']} `}>
                                <thead>
                                    <tr>
                                        <th>
                                            Date
                                        </th>
                                        <th>
                                            Scheduled Time
                                        </th>
                                        <th>
                                            Break Time
                                        </th>
                                        <th>
                                            Paid Time Off
                                        </th>
                                        <th>
                                            Unpaid Time off Approved
                                        </th>
                                        <th>
                                            Unpaid Time off Pending
                                        </th>
                                        <th className={classes['left-shadow-cell']}>
                                            Available Time
                                        </th>
                                        <th>
                                            Occurrences
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td colSpan={8} className="p-0 td-scroll scrollParent">
                                            <div className="table-scroll " ref={scrollBoxRef}>
                                                <table className="table-body-content scrollChild">
                                                    <tbody>
                                                    {jsonData.map((item,index)=> (
                                                        <tr key={index}>
                                                            <td>{item.timeDetails.date}</td>
                                                            <td>{item.timeDetails.gridScheduleDate?item.timeDetails.gridScheduleDate:0}</td>
                                                            <td>{item.timeDetails.breakTime}</td>
                                                            <td className={classes['bg-green']}>{item.timeDetails.paidTimeOff}</td>
                                                            <td>{item.timeDetails.unpaidTimeoffApproved}</td>
                                                            <td className={classes['bg-purple']}>{item.timeDetails.unpaidTimeoffPending}</td>
                                                            <td>{item.timeDetails.gridAvailableDate?item.timeDetails.gridAvailableDate:0}</td>
                                                            <td className={classes['bg-red']}>{item.timeDetails.occurrences}</td>
                                                        </tr>
                                                        )
                                                        )}
                                                    </tbody>
                                                </table>
                                            </div>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <PaginatedItems/>
                    </div>
                }
            </div>
            <PopOver popUpData={popUpData} openPopover={open} anchorEl={anchorElPopover} closePopover={closePopoverHandler}
                anchorOrigin={{vertical: 'bottom', horizontal: 'right'}} 
                transformOrigin={{vertical: 'center', horizontal: 'left'}}  />
        </div>
    );
};

export default AgentAttendance;
