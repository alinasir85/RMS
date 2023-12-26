import type {NextPage} from 'next'
import dynamic from "next/dynamic";

const SupervisorDashboard = dynamic(() => import('../../src/modules/Users/Supervisor/SupervisorDashboard/SupervisorDashboard'), { ssr: false } );

const SupDash: NextPage = () => {
    return <SupervisorDashboard/>
}

export default SupDash