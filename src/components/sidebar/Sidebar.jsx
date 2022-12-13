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



function Sidebar (){
    return (
        <div className='sidebar' >
            <div className='top'>
                <span className='logo'> LOGO  </span>
            </div>
            <hr />
            <div className='center'>
                <ul>
                    <p className="title"> Main </p>
                    <li>
                        <DashboardIcon className="icon"/>
                        <span> Dashboard</span>
                    </li>
                    
                    <li>
                        <PersonIcon className="icon"/>
                        <span> Users </span>
                    </li>
                    <li>
                        <InventoryIcon className="icon"/>
                        <span> Products </span>
                    </li>
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
                    <li>
                        <LogoutIcon className="icon"/>
                        <span> Logout </span>
                    </li>
                  

                
                </ul>
            </div>

            <div className='bottom'>
                <div className="colorOption"> </div>
                <div className="colorOption"> </div>
            
            
            </div>


        </div>
    )
    
}
export default Sidebar;
