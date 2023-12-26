import type {NextPage} from 'next'
import dynamic from "next/dynamic";

const Attendance = dynamic(() => import('../../src/modules/Common/components/Attendance/Attendance'), { ssr: false } );

const AttendancePage: NextPage = () => {
    return <Attendance/>
}

export default AttendancePage
