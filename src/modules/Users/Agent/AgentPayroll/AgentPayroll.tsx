import React, { useEffect, useRef, useState } from 'react'
import DateRangeDropdown from '../../../Common/components/DateRangeDropdown/DateRangeDropdown';
import AgentSearch from '../../../Common/components/AgentSearch/AgentSearch';
import { singleAgentPayrollData } from './agentPayrollData';
import { agentsData } from '../../Supervisor/SupervisorAttendanceSchedule/Attendance-Search/AgentsData';
import { I2cBadge, I2cButton, I2cDropdown, I2cMenu, I2cMenuItem } from '@webcomponents/i2cwebcomponents/dist/react';
import { ArrowDown2, ArrowLeft } from 'iconsax-react';
import userImage from '../../../../../public/assets/profile.png';
import classes from './AgentPayroll.module.css';
import SimpleBarReact from "simplebar-react";
import Link from "next/link";
import Image from "next/image";
import {useRouter} from "next/router";

const AgentPayroll = () => {
    const footerRef = useRef<HTMLDivElement>(null); // page footer reference
    const scrollBoxRef = useRef<HTMLDivElement>(null); // scrollbox reference in which scroll will be applied
    const [singleAgentDataSource, setSingleAgentDataSource] = useState<any>(singleAgentPayrollData); // agent payroll data in JSON format 
    const [showAgentsSearch, setShowAgentsSearch] = useState(false); // for showing Agent-Search filter component
    const router = useRouter(); // for getting the current route path
    const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "June", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let agentsDatasource = [...agentsData]; // used for Agent-Search filter component

    const onfilterData = (filteredData: any[]) => {
        agentsDatasource = [...filteredData];
    }
    const tBodyData = (
        <div className='d-inline-block' style={{'minWidth': '100%'}}>
            <div className="tr p-0">
                <div className="th">Regular</div>
                <div className="th">D1</div>
                <div className="th">D2</div>
                <div className="th">D3</div>
                <div className="th">PTOs</div>
                <div className="th">Bereaved</div>
                <div className="th">Overtime</div>
                <div className="th">HOL</div>
                <div className="th">EPL</div>
                <div className="th">EPFL</div>
            </div>
            {
                singleAgentDataSource && singleAgentDataSource['payrollDetail'] &&
                Object.values(singleAgentDataSource['payrollDetail']).map((singleDateData: any, index) => {
                    return (
                        <div key={singleDateData + index} className="tr p-0">
                            <div className="td">{singleDateData.Regular ? singleDateData.Regular : '-'}</div>
                            <div className="td">{singleDateData.D1 ? singleDateData.D1 : '-'}</div>
                            <div className="td">{singleDateData.D2 ? singleDateData.D2 : '-'}</div>
                            <div className="td">{singleDateData.D3 ? singleDateData.D3 : '-'}</div>
                            <div className="td">{singleDateData.PTOs ? singleDateData.PTOs : '-'}</div>
                            <div className="td">{singleDateData.Bereaved ? singleDateData.Bereaved : '-'}</div>
                            <div className="td">{singleDateData.Overtime ? singleDateData.Overtime : '-'}</div>
                            <div className="td">{singleDateData.HOL ? singleDateData.HOL : '-'}</div>
                            <div className="td">{singleDateData.EPL ? singleDateData.EPL : '-'}</div>
                            <div className="td border-end-0">{singleDateData.EPFL ? singleDateData.EPFL : '-'}</div>
                        </div>
                    );
                })
            }
        </div>
    );
    

    return (
        <React.Fragment>
            {
                !router.pathname.includes('agent') &&
                <div className='p-1 pb-3'>
                    <div className="d-flex align-items-center resource-detail">
                        <div className="me-3 position-relative">
                            <Link href="/supervisor-payroll" className="btn btn-back btn-sm ps-0 pe-1 font-12 me-3"><i><ArrowLeft size="20" color="#222" /></i></Link><Image src={userImage} className="media-img" alt="user pic" />
                        </div>
                        <div className="font-12 d-flex align-items-center">
                            <div className="me-3">
                                <span className="d-block">Rojer Asclene Johnson</span>
                                <span className='me-2' style={{color: '#666'}}>009347</span><I2cBadge className={classes['resourc-batch']}>Emp</I2cBadge>
                            </div>
                            <div className="dropdown d-inline-block me-3">
                                <button className={`btn btn-sm ${classes['resource-dropdown-circle-btn']}` } onClick={() => setShowAgentsSearch(prevState => !prevState)}> 
                                    <ArrowDown2 size="10" color="#46B0E6" />
                                </button>
                                { showAgentsSearch && <AgentSearch data={agentsDatasource} setData={onfilterData} hideAgentSearch= {() => setShowAgentsSearch(prevState => !prevState)} /> }
                            </div>
                        </div>
                    </div>
                </div>
            }
            <div className="p-1">
                <div className={classes['payroll-report-wrapper']}>
                    
                    <div className={`p-4 ${classes['header-content']}`}>
                        <div className='row justify-content-between align-items-center'>
                            <div className='col-xxl-4 col-xl-3 d-flex justify-content-xl-start justify-content-center'>
                                <h1>Payroll Report</h1>
                            </div>
                            <div className='d-flex justify-content-xl-end justify-content-center flex-wrap align-items-center col'>
                                <div className="dropdown d-inline-block me-1">
                                    <I2cDropdown>
                                        <I2cButton className={classes['download-dropdown-button']} size="large" slot="trigger" caret>
                                            Download
                                        </I2cButton>
                                        <I2cMenu className={classes['download-dropdown']}>
                                            <I2cMenuItem className={classes['download-dropdown-item']}>PDF</I2cMenuItem>
                                            <I2cMenuItem className={classes['download-dropdown-item']}>XLS</I2cMenuItem>
                                            <I2cMenuItem className={classes['download-dropdown-item']}>CSV</I2cMenuItem>
                                        </I2cMenu>
                                    </I2cDropdown>
                                </div>
                                <div className="dropdown d-inline-block">
                                    <DateRangeDropdown />
                                </div>
                            </div>
                        </div>
                    </div>
        
                    <div className={classes['report-summary']}>
                        <div className="">
                            Total Hours
                            <span className={classes['green']}>61H</span>
                        </div>
                        <div>
                            Previous PTO Balance
                            <span className={classes['blue']}>11H 11M</span>
                        </div>
                        <div>
                            Earned PTO
                            <span className={classes['blue']}>2H 11M</span>
                        </div>
                        <div>
                            Current PTO Balance
                            <span className={classes['blue']}>2H 11M</span>
                        </div>
                    </div>

                    <div className="table-wrapper sticky-table" ref={scrollBoxRef}>
                        <div className="table mb-0">
                            <div className="thead">
                                <div className="tr">
                                    <div className="th right-shadow-cell">Date</div>
                                </div>
                                {
                                    singleAgentDataSource && singleAgentDataSource['payrollDetail'] &&
                                    Object.keys(singleAgentDataSource['payrollDetail']).map((singleDate: any, index) => {
                                        return (
                                            <div key={singleDate + index} className="tr">
                                                <div className="td date-cell right-shadow-cell">
                                                    <span>{days[new Date(singleDate).getDay()]}</span>
                                                    <span>{monthNames[new Date(singleDate).getUTCMonth()]  + ' ' + new Date(singleDate).getDate() + ', ' + new Date(singleDate).getFullYear()}</span>
                                                </div>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                            <SimpleBarReact className='d-none d-lg-block' style={{width: 'calc(100% - 300px)'}}>
                                <div className="tbody w-100" style={{overflowX: 'unset'}}>
                                    {tBodyData}
                                </div>
                            </SimpleBarReact>
                            <div className="tbody d-block d-lg-none w-auto" style={{overflowX: 'unset'}}>
                                {tBodyData}
                            </div>
                            <div className="tfooter">
                                <div className="tr">
                                    <div className="th left-shadow-cell">Total Hrs</div>
                                    {/* <div className="th">Occurrences</div> */}
                                </div>
                                {
                                    singleAgentDataSource && singleAgentDataSource['payrollDetail'] &&
                                    Object.values(singleAgentDataSource['payrollDetail']).map((singleDateData: any, index) => {
                                        return (
                                            <div key={singleDateData + index} className="tr">
                                                <div className="td left-shadow-cell">{singleDateData.TotalHours}</div>
                                            </div>
                                        );
                                    })
                                }
                            </div>
                        </div>
                    </div>

                    <div className={classes["total-hours"]} ref={footerRef}>
                        <div className="d-flex justify-content-between pt-3 pb-3 ps-4 pe-5">
                            <div className={classes["text-orange"]}>
                                1st Week
                            </div>
                            <div className={classes["total-hours-slot"]}>
                                <span> Total Hours:</span> <span>30.11</span>
                            </div>
                        </div>
                        <div className="d-flex justify-content-between pt-3 pb-3 ps-4 pe-5">
                            <div className={classes["text-orange"]}>
                                2nd Week
                            </div>
                            <div className={classes["total-hours-slot"]}>
                                <span> Total Hours:</span> <span>30.11</span>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
        </React.Fragment>
    )
}

export default AgentPayroll;