import React from "react";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Chart from "../../components/charts/Charts";
import TableList from "../../components/table/Table";
import "./userDisplay.scss"

function SingleUser (){
    return (
      <div className="single">
        <Sidebar />
        <div className="singleContainer">
          <Navbar />
          <div className="topUser">
            <div className="leftUser">
              <div className="editButton">Edit</div>
              <h1 className="titleUser">Information</h1>
              <div className="itemUser">
                <img
                  src="https://cdn1.iconfinder.com/data/icons/user-pictures/100/female1-512.png"
                  alt=""
                  className="itemImg"
                />
                <div className="details">
                  <h1 className="itemTitle">Jane Doe</h1>
                  <div className="detailItem">
                    <span className="itemKey">Email:</span>
                    <span className="itemValue">janedoe@gmail.com</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Phone:</span>
                    <span className="itemValue">+1 2345 67 89</span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Address:</span>
                    <span className="itemValue">
                      Elton St. 234 Garden Yd. NewYork
                    </span>
                  </div>
                  <div className="detailItem">
                    <span className="itemKey">Country:</span>
                    <span className="itemValue">USA</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="rightUser">
              <Chart aspect={3 / 1} title="User Spending ( Last 6 Months)" />
            </div>
          </div>
          <div className="bottomUser">
          <h1 className="titleUser">Last Transactions</h1>
            <TableList/>
          </div>
        </div>
      </div>
    );
  };
export default SingleUser ;
