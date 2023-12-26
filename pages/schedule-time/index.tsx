import type {NextPage} from 'next'
import dynamic from "next/dynamic";

const ScheduleTime = dynamic(() => import('../../src/modules/Users/Agent/AgentScheduledTime/ScheduledTime'), { ssr: false } );

const ScheduledPage: NextPage = () => {

    return (
        <ScheduleTime/>
    )
}

export default ScheduledPage