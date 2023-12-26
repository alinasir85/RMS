import type {NextPage} from 'next'
import dynamic from "next/dynamic";

const RequestTimeOff = dynamic(() => import('../../src/modules/Users/Agent/AgentRequestTimeOff/RequestTimeOff'), { ssr: false } );

const RequestTimeOffPage: NextPage = () => {

    return (
        <RequestTimeOff/>
    )
}

export default RequestTimeOffPage