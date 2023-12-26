import WFMDashboard from "../../../Users/WFM/WFMDashboard/WFMDashboard";
import SupervisorDashboard from "../../../Users/Supervisor/SupervisorDashboard/SupervisorDashboard";
import AgentDashboard from "../../../Users/Agent/AgentDashboard/AgentDashboard";

const ROLES_DASHBOARD : {[key: string]: any} = {
    "0" : <AgentDashboard/>,
    "1" : <SupervisorDashboard/>,
    "2" : <WFMDashboard/>
 }

const Dashboard = () => {

    const roleId : any  = sessionStorage.getItem("roleId");
    return (
      <>
          {
              ROLES_DASHBOARD[roleId]
          }
      </>
  );

}

export default Dashboard;
