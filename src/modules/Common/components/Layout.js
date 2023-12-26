import Header from "./Header/Header";
import SideNav from "./Sidenav/Sidenav";
import {useEffect, useState} from "react";
import axios from "axios";
import {convertMenus} from "../configs/Helper";

const Layout = ({children}) => {
    const [menus,setMenus] = useState([]);
    useEffect(()=>{
        axios.get('https://mocki.io/v1/e6adb24b-97ea-464d-a7f3-afa9530e169c').then(resp => {
            setMenus(convertMenus(resp.data));
        });
    },[]);
    return (
        <div className="app-container">
            <Header/>
            <main id="main">
                <SideNav menus={menus}/>
                <div className="page-content">
                    {children}
                </div>
            </main>
        </div>
    );
}
export default Layout;