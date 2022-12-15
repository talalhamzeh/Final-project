import React from "react";
import Sidebar from "../../components/sidebar/Sidebar";
import Navbar from "../../components/navbar/Navbar";
import ProductTable from "../../components/products/Products";
import "./list.scss"


function ProductList (){
  return (
    <div className="list">
      <Sidebar/>
      <div className="listContainer">
        <Navbar/>
        <ProductTable/>
      </div>
    </div>
  )
  }
export default ProductList ;



