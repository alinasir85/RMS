import type {NextPage} from 'next'
import dynamic from "next/dynamic";

const Login = dynamic(() => import('../src/modules/Common/components/Login/Login'), { ssr: false } );

const Home: NextPage = () => {
  return <Login/>
}

export default Home
