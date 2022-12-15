import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import DataTable from "../../components/userTable/UserTable";
import "./list.scss"


function List (){
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <DataTable/>
      </div>
    </div>
  )
  }
export default List ;



