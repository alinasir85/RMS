import type {NextPage} from 'next'
import dynamic from "next/dynamic";

const WFMDashboard = dynamic(() => import('../../src/modules/Users/WFM/WFMDashboard/WFMDashboard'), { ssr: false } );

const WFMDash: NextPage = () => {
    return <WFMDashboard/>
}

export default WFMDash