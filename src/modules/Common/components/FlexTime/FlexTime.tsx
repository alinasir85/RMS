import AgentFlexPromotion from "../../../Users/Agent/AgentFlexTime/AgentFlexPromotion";
import SupervisorFlexTime from "../../../Users/Supervisor/SupervisorFlexTime/SupervisorFlexTime";

const ROLES_FLEXTIME : {[key: string]: any} = {
    "0" : <AgentFlexPromotion/>,
    "1" : <SupervisorFlexTime/>,
    //"2" : <WFMDashboard/>
 }

const FlexTime = () => {

    const roleId : any  = sessionStorage.getItem("roleId");
    return (
      <>
          {
              ROLES_FLEXTIME[roleId]
          }
      </>
  );

}

export default FlexTime;