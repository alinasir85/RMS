import { useState } from 'react';
import { Element3, RowVertical } from 'iconsax-react';
import PaginatedItems from "../../../Common/components/react-paginate/react-paginate";
import agentHistoryData from './agentHistoryData.json';
import Agent_Active_Data from './agentActiveData.json';
import DisputeTypeFilter from '../../../Common/components/Filters/DisputeTypeFilter';
import AgentDisputeHistory from './History/DisputeAgentHistory';
import AgentDisputeActive from './Active/DisputeAgentActive';
import { I2cButton } from '@webcomponents/i2cwebcomponents/dist/react';
import DateRangeDropdown from '../../../Common/components/DateRangeDropdown/DateRangeDropdown';
import TimeOff from "../../../Common/components/Dialogs/timeOff";
import DisputeModal from "../../../Common/components/Dialogs/DisputeModal";

const AgentDispute = () => {
  const [toggle, setToggle] = useState(true);
  const [switcher, setSwitcher] = useState(true);
  const [historyAgent, setHistoryAgent] = useState(agentHistoryData);
  const [agentActiveData, setAgentActiveData] = useState(Agent_Active_Data);

  //Change View List or Grid
  const toggler = (e: any) => {
    return toggle == false ? setToggle(true) : setToggle(false);
  }

  const [openDisputeModal, setOpenDisputeModal] = useState(false);
  const closeRequestModal = (value: boolean) => {
    setOpenDisputeModal(value);
  }

  //Change View Active or History
  const switchData = (e: any) => {
    return switcher == false ? setSwitcher(true) : setSwitcher(false);
  }

  return (
    <div className="component-container">
      <div className='component-header'>
        <div className="col-5">
          <h2>My Dispute Requests</h2>
        </div>

        <div className="col-3">
          <div className='switch-mode'>
            <button className="button" onClick={switchData} disabled={switcher}>Active</button> <button disabled={switcher == false} className="button" onClick={switchData}>History</button>
          </div>
        </div>

        <div className="col-4 component-header-right">

          {switcher == true ? <DisputeTypeFilter setData={setAgentActiveData} data={Agent_Active_Data} /> : <DisputeTypeFilter data={agentHistoryData} setData={setHistoryAgent} />}

          <div className="dropdown d-inline-block me-3"><DateRangeDropdown /></div>

          {switcher == true ? <I2cButton className='add-btn' size="medium" onClick={() => { setOpenDisputeModal(true) }} variant="primary">+ Add New Dispute</I2cButton> : <></>}
          <div className='switch-container'>
            {/*<button className="button" onClick={toggler} disabled={toggle}><RowVertical size="18" /></button> <button disabled={toggle == false} className="button" onClick={toggler}><Element3 size="20" /></button>*/}
            <DisputeModal title='Request Dispute' openModal={openDisputeModal} isStatsView={true} closeModal={closeRequestModal} />
          </div>
        </div>

      </div>

      <div className='table-container'>
        {switcher == true ? <AgentDisputeActive toggle={toggle} data={agentActiveData} /> : <AgentDisputeHistory toggle={toggle} data={historyAgent} />}
      </div>


      <div className="component-footer">
        <div className="col-md-12">
          {switcher ? <PaginatedItems data={Agent_Active_Data} setData={setAgentActiveData} /> : <PaginatedItems data={agentHistoryData} setData={setHistoryAgent} />}
        </div>
      </div>
    </div>
  );

}

export default AgentDispute;
