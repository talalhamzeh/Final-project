import './navbar.scss'
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import LanguageIcon from '@mui/icons-material/Language';
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import FullscreenExitOutlinedIcon from "@mui/icons-material/FullscreenExitOutlined";
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import ListOutlinedIcon from "@mui/icons-material/ListOutlined";

function Navbar (){
    return (
        <div className='navbar' >
            <div className="wrapper">
                <div className="search">
                    <input type="text" placeholder='Search ....' />
                    <ManageSearchIcon/>
                </div>
                <div className="items">
                    <div className="item">
                        <LanguageIcon className="navIcon" />
                        English
                    </div>
                    <div className="item">
                        <DarkModeOutlinedIcon  className="navIcon" />
                        English
                    </div>
                    <div className="item">
                        <FullscreenExitOutlinedIcon className="navIcon" />
                        English
                    </div>
                    <div className="item">
                        <NotificationsNoneOutlinedIcon className="navIcon" />
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <ChatBubbleOutlineOutlinedIcon className="navIcon" />
                        <div className="counter">2</div>
                    </div>
                    <div className="item">
                        <ListOutlinedIcon className="navIcon" />
                        English
                    </div>

                    <div className="item">
                        <img src="https://cdn-icons-png.flaticon.com/512/147/147142.png" className="avatar" />
                    </div>


                </div>
            </div>


        </div>
    )
    
}
export default Navbar;
