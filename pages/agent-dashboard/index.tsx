import type {NextPage} from 'next'
import dynamic from "next/dynamic";

const AgentDashboard = dynamic(() => import('../../src/modules/Users/Agent/AgentDashboard/AgentDashboard'), { ssr: false } );

const AgentDash: NextPage = () => {
    return <AgentDashboard/>
}

export default AgentDash