import React from "react";
import "./widget.scss"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";


function Widget({type}){
    let data;
    const amount = 100;
    const diff = 20;

    // we are switching between the types as stated in the widget home 
    switch(type){
        case "user":
            data={
                title:"USERS",
                isMoney:false,
                link:"see all users",
                icon:
                <PersonIcon className="iconwidget" 
                style={{
                    color: "crimson",
                    backgroundColor: "rgba(255, 0, 0, 0.2)",
                  }}
                />,           
            }
            break;
            
        case "order":
            data={
                title:"ORDERS",
                isMoney:false,
                link:"view all orders ",
                icon:
                <ShoppingCartOutlinedIcon className="iconwidget" 
                style={{
                    backgroundColor: "rgba(218, 165, 32, 0.2)",
                    color: "goldenrod",
                  }}
                />   ,  
            }
        break;
        case "earning":
            data={
                title:"EARNINGS",
                isMoney:true,
                link:"view net earnings",
                icon:
                <MonetizationOnOutlinedIcon className="iconwidget" 
                style={{ backgroundColor: "rgba(0, 128, 0, 0.2)", color: "green" }}

                />   ,  
            }
        break;
    
          case "balance":
            data={
                title:"BALANCE",
                isMoney:true,
                link:"see details",
                icon:
                <AccountBalanceWalletOutlinedIcon className="iconwidget" 
                style={{
                    backgroundColor: "rgba(128, 0, 128, 0.2)",
                    color: "purple",
                  }}
                />   ,  
            }
        break;
        default:
        break;


    }




    return(
        <div className="widget"> 

            <div className="left">
                <span className="title"> {data.title}</span>

                <span className="counterwidget"> 
                    {data.isMoney && "$"} {amount}
                </span>

                <span className="link"> {data.link}</span>
            </div>
            <div className="right">
                <div className="percentage positive">
                    <KeyboardArrowUpIcon/>
                    {diff} %
                </div>
                {data.icon}
            </div>
        </div>

    )
}
export default Widget;