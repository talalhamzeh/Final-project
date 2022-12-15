import './navbar.scss'
import ManageSearchIcon from '@mui/icons-material/ManageSearch';
import NotificationsNoneOutlinedIcon from "@mui/icons-material/NotificationsNoneOutlined";
import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";

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
                        <NotificationsNoneOutlinedIcon className="navIcon" />
                        <div className="counter">1</div>
                    </div>
                    <div className="item">
                        <ChatBubbleOutlineOutlinedIcon className="navIcon" />
                        <div className="counter">2</div>
                    </div>
                    <div className="item">
                        <h1>welcome </h1>
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
