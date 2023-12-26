import AgentAttendance from "../../../Users/Agent/AgentDashboard/AgentAttendance";
import SupervisorAttendanceSearch from "../../../Users/Supervisor/SupervisorAttendanceSchedule/Attendance-Search/SupervisorAttendanceSearch";


const ROLES_ATTENDANCE : {[key: string]: any} = {
    "0" : <AgentAttendance/>,
    "1" : <SupervisorAttendanceSearch/>,
    // "2" : <WFMDashboard/>
 }

const Attendance = () => {

    const roleId : any  = sessionStorage.getItem("roleId");
    return (
      <>
          {
              ROLES_ATTENDANCE[roleId]
          }
      </>
  );

}

export default Attendance;
