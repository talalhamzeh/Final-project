import React from "react";
import "./widget.scss"
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import PersonIcon from '@mui/icons-material/Person';
import AccountBalanceWalletOutlinedIcon from "@mui/icons-material/AccountBalanceWalletOutlined";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import MonetizationOnOutlinedIcon from "@mui/icons-material/MonetizationOnOutlined";
import { useEffect, useState } from "react";
import { collection, query, where, getDocs } from "firebase/firestore";
import { db } from "../../firebase";
import {Link} from "react-router-dom" ;



function Widget({type}){
  
    const [amount, setAmount] = useState(null);
    const [diff, setDiff] = useState(null);
    let data;
    // we are switching between the types as stated in the widget home 
    switch(type){
        case "user":
            data={
                title:"USERS",
                isMoney:false,
               
                link: <Link to ="/users" style={{ textDecoration: "none" }} >see all users </Link>,
               
                    query:"users",
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
                title:"PRODUCTS",
                isMoney:false,
                link: <Link to ="/products" style={{ textDecoration: "none" }} >View all products</Link>,
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


    useEffect(() => {
        const fetchData = async () => {
          const today = new Date();
          const lastMonth = new Date(new Date().setMonth(today.getMonth() - 1));
          const prevMonth = new Date(new Date().setMonth(today.getMonth() - 2));
    
          const lastMonthQuery = query(
            collection(db, data.query),
            where("timeStamp", "<=", today),
            where("timeStamp", ">", lastMonth)
          );
          const prevMonthQuery = query(
            collection(db, data.query),
            where("timeStamp", "<=", lastMonth),
            where("timeStamp", ">", prevMonth)
          );
    
          const lastMonthData = await getDocs(lastMonthQuery);
          const prevMonthData = await getDocs(prevMonthQuery);
    
          setAmount(lastMonthData.docs.length);
          setDiff(
            ((lastMonthData.docs.length - prevMonthData.docs.length) / prevMonthData.docs.length) *
              100
          );
        };
        fetchData();
      }, []);

    return(
        <div className="widget"> 

            <div className="left">
                <span className="title"> {data.title}</span>

                <span className="counterwidget"> 
                    {data.isMoney && "$"} {amount}
                </span>
             

                <span className="linkW"> {data.link}</span>
               
            </div>
            <div className="right">
        <div className={`percentage ${diff < 0 ? "negative" : "positive"}`}>
          {diff < 0 ? <KeyboardArrowDownIcon/> : <KeyboardArrowUpIcon/> }
          {diff} %
        </div>
                {data.icon}
            </div>
        </div>

    )
}
export default Widget;