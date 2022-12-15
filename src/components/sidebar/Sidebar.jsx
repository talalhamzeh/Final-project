import './sidebar.scss'
import DashboardIcon from '@mui/icons-material/Dashboard';
import PersonIcon from '@mui/icons-material/Person';
import InventoryIcon from '@mui/icons-material/Inventory';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import QueryStatsIcon from '@mui/icons-material/QueryStats';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import HealthAndSafetyIcon from '@mui/icons-material/HealthAndSafety';
import PsychologyIcon from '@mui/icons-material/Psychology';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import AccountBoxIcon from '@mui/icons-material/AccountBox';
import LogoutIcon from '@mui/icons-material/Logout';
import {Link} from "react-router-dom";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase";
import { useNavigate } from "react-router-dom";
import {AuthContext} from "../../context/AuthContext"
import { useContext, useState } from "react";


function Sidebar (){

    const navigate = useNavigate()

    const {dispatch} = useContext(AuthContext)
    const handleLogout=(e)=>{
        e.preventDefault();
        console.log("test ")
        
       
          // Signed out
        
          dispatch({type:"LOGOUT"})
          navigate("/login")
        
        
      }
      

    
    return (
        <div className='sidebar' >
            <div className='top'>
                <Link to="/" style={{textDecoration: " none" }}>
                     <span className='logo'> DASHIFY </span> 
                     </Link>
                
            </div>
            <hr />
            <div className='center'>
                <ul>
                    <p className="title"> Main </p>
                    <Link to="/" style={{textDecoration: " none" }}>

                    <li>
                        <DashboardIcon className="icon"/>
                        <span> Dashboard</span>
                    </li>
                    </Link>
                    <Link to="/users" style={{textDecoration: " none" }}>
                    <li>
                        <PersonIcon className="icon"/>
                        <span> Users </span>
                    </li>
                    </Link>
                    <Link to="/products" style={{textDecoration: " none" }}>

                    <li>
                        <InventoryIcon className="icon"/>
                        <span> Products </span>
                    </li>
                    </Link>
                    <li>
                        <ShoppingBagIcon className="icon"/>
                        <span> Orders </span>
                    </li>
                    <li>
                        <LocalShippingIcon className="icon"/>
                        <span> Delivery </span>
                    </li>
                    <p className="title"> Usefull </p>

                    <li>
                        <QueryStatsIcon className="icon"/>
                        <span> Stats </span>
                    </li>
                    <li>
                        <NotificationsActiveIcon className="icon"/>
                        <span> Notificatiosn </span>
                    </li>
                    <p className="title"> Service </p>

                    <li>
                        <HealthAndSafetyIcon className="icon"/>
                        <span> System Health </span>
                    </li>
                    <li>
                        <PsychologyIcon className="icon"/>
                        <span> Logs </span>
                    </li>
                    <li>
                        <SettingsApplicationsIcon className="icon"/>
                        <span> Settings </span>
                    </li>
                    <p className="title"> User </p>

                    <li>
                        <AccountBoxIcon className="icon"/>
                        <span> Profile </span>
                    </li>
                   
                    <li onClick={handleLogout}>
                        <LogoutIcon className="icon"/>
                        <span> Logout </span>
                    </li>
                  
                
                
                </ul>
            </div>

          


        </div>
    )
    
}
export default Sidebar;
