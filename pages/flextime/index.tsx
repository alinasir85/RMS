import type {NextPage} from 'next'
import dynamic from "next/dynamic";

const FlexTime = dynamic(() => import('../../src/modules/Common/components/FlexTime/FlexTime'), { ssr: false } );

const FlexPage: NextPage = () => {
    return <FlexTime/>
}

export default FlexPage
