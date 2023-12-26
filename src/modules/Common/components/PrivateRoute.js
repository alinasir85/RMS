import Layout from "./Layout";
import Login from "./Login/Login";

const PrivateRoute =({children})=>{
    if(document.cookie.includes('isLoggedIn')){
        return <Layout>{children}</Layout>
    } else {
        return <Login/>
    }
}

export default PrivateRoute;