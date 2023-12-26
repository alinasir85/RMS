import { useEffect } from 'react';
import SupervisorAttendanceOverview from '../../Supervisor/SupervisorDashboard/SupervisorAttendanceOverview';
import List from '../../../Common/components/Lists/List'
import ScheduleReport from '../../../Common/components/ScheduleReport/ScheduleReport';
import PayrollReport from '../PayrollReport/PayrollReport';

const WFMDashboard = () => {

  useEffect(() => {
  }, []);


  return (
    <>
      <div className="wrapper">
        <article>
          <div className='row mb-20'>
            <SupervisorAttendanceOverview />
          </div>
          <div className='row'>
            <div className="col-50 vt"><ScheduleReport /></div>
            <div className="col-50 vt"><PayrollReport /></div>
          </div>
        </article>

        <aside> <List /></aside>

      </div>
    </>
  );

}

export default WFMDashboard;
