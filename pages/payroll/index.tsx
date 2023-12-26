import type {NextPage} from 'next'
import dynamic from "next/dynamic";

const Payroll = dynamic(() => import('../../src/modules/Common/components/Payroll/Payroll'), { ssr: false } );

const PayrollPage: NextPage = () => {
    return <Payroll/>
}

export default PayrollPage
