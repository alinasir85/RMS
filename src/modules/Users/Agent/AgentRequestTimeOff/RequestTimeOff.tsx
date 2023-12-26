import { useState } from 'react';
import Request_Time_Off_Agent_Data from './Request_Time_Off_Agent_Data.json';
import RequestTimeOffGrid from './RequestTimeOffGrid';
import RequestTimeOffList from './RequestTimeOffList';
import PaginatedItems from '../../../Common/components/react-paginate/react-paginate';
import { RowVertical, Element3, Add, Clock } from 'iconsax-react';
import TimeOffRequest from '../../../Common/components/Filters/TimeOffRequest';
import { I2cButton, I2cSelect, I2cMenuItem } from '@webcomponents/i2cwebcomponents/dist/react';
import DateRangeDropdown from '../../../Common/components/DateRangeDropdown/DateRangeDropdown';
import classes from './RequestTimeOff.module.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.js';
import TimeOff from '../../../Common/components/Dialogs/timeOff';
const RequestTimeOff = () => {
  const [requestTime, setRequestTime] = useState(Request_Time_Off_Agent_Data);
  const [toggle, setToggle] = useState(true);

  const [openRequestModal, setOpenRequestModal] = useState(false);
  const closeRequestModal = (value: boolean) => {
    setOpenRequestModal(value);
  }

  /*Change View */
  const toggler = (e: any) => {
    // return toggle === false ? setToggle(true) : setToggle(false);
    setToggle(prevState => !prevState);
  }

  return (
    <div className='p-1'>
      <div className={`request-time-off ${classes['request-time-off-wrapper']}`}>
        {/* <div className='component-header'>

          <div className="col-md-6"><h2>Request Time Off(Paid/Unpaid)</h2> </div>

          <div className="col-md-6 text-right">

            <TimeOffRequest data={Request_Time_Off_Agent_Data} setData={setRequestTime} />
            <div className="dropdown d-inline-block me-3"><DateRangeDropdown isFlex={true} /></div>
            <I2cButton className='add-btn' size="medium" variant="primary"><Add size="24" color="#ffffff" /> Add New Request</I2cButton>
            <div className='switch-container'> <button className="button" onClick={toggler} disabled={toggle}><RowVertical size="18" /></button> <button disabled={toggle == false} className="button" onClick={toggler}><Element3 size="20" /></button></div>
         
          </div>
        </div> */}
        <div className={`p-4 ${classes['header-content']}`}>
          <div className='row justify-content-between align-items-center'>
              <div className='col-xxl-4 col-xl-3 d-flex justify-content-xl-start justify-content-center'>
                <h1>Request Time Off(Paid/Unpaid)</h1>
              </div>
              <div className='d-flex justify-content-xl-end justify-content-center flex-wrap align-items-center col'>
                  <div className="dropdown d-inline-block me-1">
                      <I2cSelect className={classes['requests-dropdown']} value="all-requests">
                        <I2cMenuItem className={classes['requests-dropdown-item']} value="all-requests">All Requests</I2cMenuItem>
                        <I2cMenuItem className={classes['requests-dropdown-item']} value="paid">Paid Time Off</I2cMenuItem>
                        <I2cMenuItem className={classes['requests-dropdown-item']} value="unpaid">Unpaid Time Off</I2cMenuItem>
                      </I2cSelect>
                  </div>
                  <div className="dropdown d-inline-block me-1">
                      <DateRangeDropdown isFlex={true} />
                  </div>
                  <div className="dropdown d-inline-block me-3">
                  {/* <I2cButton className="button-default" onClick={() => { setOpenRequestModal(true) }}>Request</I2cButton> */}
                    <I2cButton size="medium" variant="primary" onClick={() => {  setOpenRequestModal(true) }}><Add className='mb-1' size="16" color="#ffffff" />Add New Request</I2cButton>
                  </div>
                  
                  <div className="dropdown d-inline-block">
                    <div className='switch-container'> 
                      <button className="button" onClick={toggler} disabled={toggle}><RowVertical size="18" /></button> 
                      <button disabled={toggle == false} className="button" onClick={toggler}><Element3 size="20" /></button>
                    </div>
                  </div>
              </div>
          </div>
        </div>
        <div className="px-4">
          <div className={` ${classes['alert-warning-custom']} d-flex justify-content-between align-items-center`}>
              <div>
                <Clock size="20" className='me-2' /> <span className='d-inline-block align-middle' style={{fontSize: '1.1em'}}>Your employer requires 7 days advance notice for time off requests (except sick time).</span>
              </div>
              <div aria-hidden="true" className="cross-icon cursor-pointer" style={{fontSize: '24px'}}>&times;</div>
              
          </div>
        </div>

        <div className='table-container'>
          {toggle === true ? <RequestTimeOffList requestDataList={requestTime} /> : <RequestTimeOffGrid requestDataGrid={requestTime} />}
        </div>

        <div className="component-footer">
          <div className="col-md-12">
            <PaginatedItems />
          </div>
        </div>
      </div>
      <TimeOff title='Request Time (Paid/Unpaid)' openModal={openRequestModal} isStatsView={true} closeModal={closeRequestModal} />
    </div>
    
  );

}

export default RequestTimeOff;
