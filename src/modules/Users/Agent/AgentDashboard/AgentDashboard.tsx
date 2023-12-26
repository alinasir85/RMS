import HoursView from "../../../Common/components/HoursView/HoursView";
import Stats from "../../../Common/components/Stats/stats";
import AgentAttendance from "./AgentAttendance";

const AgentDashboard = () => {

    return (
        <div className='agent-dashboard'>
            <div className="component-header">
                <div className="col-md-6"> <Stats /></div>
                <div className="col-md-6"><HoursView /></div>
            </div>
            <div className='row'>
                <AgentAttendance />
            </div>
        </div>
    );

}

export default AgentDashboard;
