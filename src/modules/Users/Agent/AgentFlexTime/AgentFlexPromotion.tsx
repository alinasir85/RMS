import { useState } from 'react';
import Flex_Time_Agent_Data from './Flex_Time_Agent_Data.json';
import AgentFlexPromotionGrid from './AgentFlexPromotionGrid';
import AgentFlexPromotionList from './AgentFlexPromotionList';
import PaginatedItems from '../../../Common/components/react-paginate/react-paginate'
import { Element3, RowVertical } from 'iconsax-react';
import DateRangeDropdown from '../../../Common/components/DateRangeDropdown/DateRangeDropdown';

const AgentFlexPromotion = () => {
  const [flexTime, setFlexTime] = useState(Flex_Time_Agent_Data);
  const [toggle, setToggle] = useState(true);

  /*Change View */
  const toggler = (e: any) => {
    return toggle == false ? setToggle(true) : setToggle(false);
  }
  return (
   <div className='agentFlexTime'>
     <div className="component-container">
      <div className='component-header'>
        <div className="col-md-6">
          <h2>Flex Time</h2>
        </div>

        <div className="col-md-6 component-header-right">

        <div className="dropdown d-inline-block me-3"><DateRangeDropdown isFlex={true}  /></div>

          <div className='switch-container'> <button className="button" onClick={toggler} disabled={toggle}><RowVertical size="18" /></button> <button disabled={toggle == false} className="button" onClick={toggler}><Element3 size="20" /></button></div>

        </div>
      </div>

      {toggle == true ? <AgentFlexPromotionList className="supervisor-dispute" promotionData={flexTime} /> : <AgentFlexPromotionGrid promotionGridData={flexTime} />}

      <div className="component-footer">
        <div className="col-md-12">
          <PaginatedItems data={Flex_Time_Agent_Data} setData={setFlexTime} />
        </div>
      </div>
    </div>
   </div>
  );

}

export default AgentFlexPromotion;
