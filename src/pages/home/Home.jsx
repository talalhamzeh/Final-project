import React from "react";
import "./home.scss"
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Widget from "../../components/widgets/Widget";
import Featured from "../../components/featured/Featured";
import Charts from "../../components/charts/Charts";
import Table from "../../components/table/Table";




function Home (){
  
  return (
        <div className="home">
          <Sidebar/>
          <div className="homecontainer">
            <Navbar/>
            <div className="widgets"> 
              <Widget type="user"/>
              
              <Widget type="order"/>

              <Widget type="earning"/>

              <Widget type="balance"/>
            </div>
            <div className="charts">
              <Featured />
              <Charts title="last 6 month revenue" aspect={2/1} />
            </div>
            <div className="listContainer">
          <div className="listTitle">Latest Transactions</div>
          <Table />
        </div>


          </div>
        </div>
    )

}
export default Home 

