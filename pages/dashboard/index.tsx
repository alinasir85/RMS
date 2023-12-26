import type {NextPage} from 'next'
import dynamic from "next/dynamic";

const Dashboard = dynamic(() => import('../../src/modules/Common/components/Dashboard/Dashboard'), { ssr: false } );

const DashboardPage: NextPage = () => {

    return (
        <Dashboard/>
    )
}

export default DashboardPage