import { useState } from 'react';
import agentFlexTimeData from './Flex_Time_Data.json';
import SupervisorFlexPromotion from './promotions/SupervisorFlexPromotion';
import SupervisorFlexRequest from './request/SupervisorFlexRequest';
import SupervisorFlexPromotionGrid from './promotions/SupervisorFlexPromotionGrid';
import PaginatedItems from '../../../Common/components/react-paginate/react-paginate'
import { Task, Element3 } from 'iconsax-react';
import DateRangeDropdown from '../../../Common/components/DateRangeDropdown/DateRangeDropdown';
import { I2cButton } from "@webcomponents/i2cwebcomponents/dist/react";

const SupervisorFlexTime = () => {
  const [switcher, setSwitcher] = useState(true);
  const [flexTime, setFlexTime] = useState(agentFlexTimeData);
  const [toggle, setToggle] = useState(true);

  /*Change View */
  const toggler = (e: any) => {
    return toggle == false ? setToggle(true) : setToggle(false);
  }

  //Change View Promotions or Requests
  const switchData = (e: any) => {
    return switcher == false ? setSwitcher(true) : setSwitcher(false);
  }

  return (
    <div className='supervisorFlexTime'>
      <div className="component-container">
        <div className='component-header'>
          <div className="col-md-5">
            <h2>Flex Time</h2>
          </div>
          <div className="col-md-3">
            <div className='switch-mode'>
              <button className="button" onClick={switchData} disabled={switcher}>Promotions</button> <button disabled={switcher == false} className="button" onClick={switchData}>Requests</button>
            </div>
          </div>
          <div className="col-md-4 text-right">

            <div className="dropdown d-inline-block me-3">
              <DateRangeDropdown isFlex={true} />
            </div>
            <I2cButton className='add-btn' size="medium" variant="primary">+ Add New Flex</I2cButton>

            <div className='switch-container'>
              {switcher ? <>  <button className="button" onClick={toggler} disabled={toggle}><Task size="18" /></button> <button disabled={toggle == false} className="button" onClick={toggler}><Element3 size="14" /></button></> : <></>}
            </div>
          </div>
        </div>
        <div className='table-container'>
          {switcher == true ? <>{toggle == true ? <SupervisorFlexPromotion promotionData={flexTime} /> : <SupervisorFlexPromotionGrid promotionGridData={flexTime} />}</> : <><SupervisorFlexRequest requestData={flexTime} /></>}
        </div>
        <div className="component-footer">
          <div className="col-md-12">
            <PaginatedItems data={agentFlexTimeData} setData={setFlexTime} />
          </div>
        </div>
      </div>
    </div>
  );

}

export default SupervisorFlexTime;
