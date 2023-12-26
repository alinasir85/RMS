import SupervisorAttendanceOverview from './SupervisorAttendanceOverview';
import List from '../../../Common/components/Lists/List'
import ScheduleReport from '../../../Common/components/ScheduleReport/ScheduleReport';
import FlexReport from '../../../Common/components/FlexReport/FlexReport';

const SupervisorDashboard = () => {
  
  return (
    <div className="wrapper">
    <article>
      <div className='row mb-20'>
        <SupervisorAttendanceOverview />
      </div>
      <div className='row'>
        <div className="col-6"><ScheduleReport /></div>
        <div className="col-6"><FlexReport /></div>
      </div>
    </article>

    <aside> <List /></aside>

  </div>
  );

}

export default SupervisorDashboard;
