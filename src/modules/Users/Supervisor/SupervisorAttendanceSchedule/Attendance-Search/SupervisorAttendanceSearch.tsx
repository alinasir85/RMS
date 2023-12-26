import React, { useState } from 'react'
import DateSelector from '../../../../Common/components/Calendar/DateSelector';
import { I2cButton, I2cMenuItem, I2cSelect } from '@webcomponents/i2cwebcomponents/dist/react';
import AgentSearch from '../../../../Common/components/AgentSearch/AgentSearch';
import { ArrowDown2 } from 'iconsax-react';
import { agentsData } from './AgentsData';
import {useRouter} from "next/router";

const SupervisorAttendanceSearch = () => {
  let agentsDatasource = [...agentsData];
  const [showAgentsSearch, setShowAgentsSearch] = useState(false);
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const router = useRouter();
  const startDateChangeHandler = (value:any) => {
    setStartDate(value);
    console.log('start date: ' + value);
  }

  const endDateChangeHandler = (value:any) => {
    setEndDate(value);
    console.log('end date: ' + value);
  }
  const searchHandler = () => {
    router.push('/supervisor-attendance');
  }
  const onfilterData = (filteredData: any[]) => {
    agentsDatasource = [...filteredData];
  }

  return (
    <div className='bg-white main-search-wrapper'>
      <div className="pt-3 pe-3 ps-3 pb-4">
        <div className="text-center pt-4 pb-4 pe-5 ps-5">
          <h1>Attendance &amp; Schedule Report</h1>
          <p>Here you can view employee attendance report that records the presence, absence, leaves, <br /> and other attendance data of agents for payroll or scheduling.</p>
        </div>
        <div className="row justify-content-around">
          <div className="col-md-5 mb-3">
            <DateSelector className='w-100' text='From Date'  value={startDate} onChange={startDateChangeHandler} />
            {/* <DatePicker onChange={startDateChangeHandler} value={startDate}  /> */}
          </div>
          <div className="col-md-5 mb-3">
            <DateSelector className='w-100' text='To Date' value={endDate} onChange={endDateChangeHandler} />
            {/* <DatePicker onChange={endDateChangeHandler} value={endDate} /> */}
          </div>
          <div className="col-md-5 mb-3">
            <div className='cursor-pointer mt-4' style={{color: '#666'}} onClick={() => setShowAgentsSearch(prevState => !prevState)}>
              Select Employee
              <i className="ms-2 float-end"><ArrowDown2 size="16" color="#999" /></i>
            </div>
            {/* <I2cButton className="dateranger-picker-opener" onClick={() => setShowAgentsSearch(prevState => !prevState)} size="large">
              Select Employee <i className="ms-2"><ArrowDown2 size="12" color="#222" /></i>
            </I2cButton> */}
            { showAgentsSearch && <AgentSearch data={agentsData} setData={onfilterData} hideAgentSearch= {() => setShowAgentsSearch(prevState => !prevState)} /> }
          </div>
          <div className="col-md-5 mb-3">
            <I2cSelect className='locations-dropdown' label="Select Locations" value="1">
              <I2cMenuItem className='locations-dropdown-item' value="1">All Sites</I2cMenuItem>
              <I2cMenuItem className='locations-dropdown-item' value="2">New York</I2cMenuItem>
              <I2cMenuItem className='locations-dropdown-item' value="3">Los Angeles</I2cMenuItem>
              <I2cMenuItem className='locations-dropdown-item' value="4">Chicago</I2cMenuItem>
              <I2cMenuItem className='locations-dropdown-item' value="5">Houston</I2cMenuItem>
            </I2cSelect>
          </div>
        </div>
      </div>

      <div className="text-center w-100 p-3 search-footer">
        <I2cButton className='m-2' size="x-large"> Cancel </I2cButton>
        <I2cButton className='m-2' size="x-large" variant="primary" onClick={searchHandler}> Search </I2cButton>
      </div>
    </div>
  )
}

export default SupervisorAttendanceSearch;