import AgentPayroll from "../../../Users/Agent/AgentPayroll/AgentPayroll";
import SupervisorPayrollSearch from "../../../Users/Supervisor/SupervisorPayroll/Supervisor-Payroll-Search/SupervisorPayrollSearch";

const ROLES_PAYROLL : {[key: string]: any} = {
    "0" : <AgentPayroll/>,
    "1" : <SupervisorPayrollSearch/>,
    // "2" : <WFMDashboard/>
 }

const Payroll = () => {

    const roleId : any  = sessionStorage.getItem("roleId");
    return (
      <>
          {
              ROLES_PAYROLL[roleId]
          }
      </>
  );

}

export default Payroll;
