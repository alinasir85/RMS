import { useState } from 'react';
import { Element3, RowVertical } from 'iconsax-react';
import SupervisorDisputeList from './SupervisorDisputeList';
import SupervisorDisputeGrid from './SupervisorDisuteGrid';
import Supervisor_Data from './SupervisorData.json';
import AgentSearch from '../../../Common/components/AgentSearch/AgentSearch';
import DisputeTypeFilter from '../../../Common/components/Filters/DisputeTypeFilter';
import PaginatedItems from '../../../Common/components/react-paginate/react-paginate'
import DateRangeDropdown from '../../../Common/components/DateRangeDropdown/DateRangeDropdown';

const SupervisorDispute = () => {
  const [toggle, setToggle] = useState(true);
  const [activePage, setActivePage] = useState(1);
  const [supervisorData, setSupervisorData] = useState(Supervisor_Data);

  /*Change View */
  const toggler = (e: any) => {
    return toggle == false ? setToggle(true) : setToggle(false);
  }

  return (
    <>
      <div className="component-container">
        <div className='component-header'>
          <div className="col-md-6">
            <h2>Dispute Requests</h2>
          </div>
          <div className="col-md-6 component-header-right">
            <DisputeTypeFilter setData={setSupervisorData} data={Supervisor_Data} />
            <AgentSearch data={Supervisor_Data} setData={setSupervisorData} />
            <div className="dropdown d-inline-block me-3"><DateRangeDropdown /></div>
            <div className='switch-container'> <button className="button" onClick={toggler} disabled={toggle}><RowVertical size="18" /></button> <button disabled={toggle == false} className="button" onClick={toggler}><Element3 size="20" /></button></div>

          </div>
        </div>

        <div className='table-container'>
          {toggle == true ? <SupervisorDisputeList data={supervisorData} className="supervisor-dispute" supervisorData={supervisorData} /> : <SupervisorDisputeGrid data={supervisorData} />}
        </div>

        <div className="component-footer">
          <div className="col-md-12">
            {toggle ? <PaginatedItems data={Supervisor_Data} setData={setSupervisorData} /> : <PaginatedItems data={Supervisor_Data} setData={setSupervisorData} />}
          </div>
        </div>
      </div>
    </>
  );

}

export default SupervisorDispute;
