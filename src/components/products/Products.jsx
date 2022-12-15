import React from 'react';
import './productTable.scss'
import { DataGrid} from '@mui/x-data-grid';
import {productsColumns} from './ProductsTable';

import {Link} from "react-router-dom" ;
import { useEffect, useState } from "react";
import {
  collection,
  getDocs,
  deleteDoc,
  doc,
  onSnapshot,
} from "firebase/firestore";
import { db } from "../../firebase";



function ProductTable(){
  const [data, setData] = useState([]);
  useEffect(() => {
    //listen realtime 
  const unsub = onSnapshot(
    collection(db, "products"),
    (snapShot) => {
      let list = [];
      snapShot.docs.forEach((doc) => {
        list.push({ id: doc.id, ...doc.data() });
      });
      setData(list);
    },
    (error) => {
      console.log(error);
    }
  );
// we return unsub otherwise it will be callingb for ever 
  return () => {
    unsub();
  };
}, []);

      const handleDelete = async (id) => {
    try {
      await deleteDoc(doc(db, "products", id));
      setData(data.filter((item) => item.id !== id));
    } catch (err) {
      console.log(err);
    }
  };


      const actionColumn=[{
        field: "action",
        headerName: "Action",
        width: 200,
        renderCell: (params) => {
          return (
            <div className="cellAction">
              <Link to="/products/test" style={{ textDecoration: "none" }}>
                <div className="viewButton">View</div>
              </Link>
              <div
                className="deleteButton"
                onClick={() => handleDelete(params.row.id)}
              >
                Delete
              </div>
            </div>
          );
        }
      }]
      return(
      <div className='dataTable'>
           <div className="datatableTitle">
        Add New Product
        <Link to="/products/new" className="link">
          Add New
        </Link>
      </div>
        
            
        <DataGrid
          rows={data}
     
          columns={productsColumns.concat(actionColumn)}

          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
        />
      </div>
      
    )
}
export default ProductTable;