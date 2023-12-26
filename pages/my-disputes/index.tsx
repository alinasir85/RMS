import type {NextPage} from 'next'
import dynamic from "next/dynamic";

const Dispute = dynamic(() => import('../../src/modules/Common/components/Dispute/Dispute'), { ssr: false } );

const DisputePage: NextPage = () => {
    return <Dispute/>
}

export default DisputePage
