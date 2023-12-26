import AgentDispute from "../../../Users/Agent/AgentDispute/AgentDispute";
import SupervisorDispute from "../../../Users/Supervisor/SupervisorDispute/SupervisorDispute";

const ROLES_DISPUTE : {[key: string]: any} = {
    "0" : <AgentDispute/>,
    "1" : <SupervisorDispute/>,
    // "2" : <WFMDashboard/>
 }

const Dispute = () => {

    const roleId : any  = "0" //sessionStorage.getItem("roleId");
    return (
      <>
          {
              ROLES_DISPUTE[roleId]
          }
      </>
  );

}

export default Dispute;
