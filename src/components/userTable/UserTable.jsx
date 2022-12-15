import React from 'react';
import './userTable.scss'
import { DataGrid} from '@mui/x-data-grid';
import {userColumns} from './userData';
import { userRows } from './userData';
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



function DataTable(){
  const [data, setData] = useState([]);
  useEffect(() => {
    //listen realtime 
  const unsub = onSnapshot(
    collection(db, "users"),
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
      await deleteDoc(doc(db, "users", id));
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
              <Link to="/users/test" style={{ textDecoration: "none" }}>
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
        Add New User
        <Link to="/users/new" className="link">
          Add New
        </Link>
      </div>
        
            
        <DataGrid
          rows={data}
     
          columns={userColumns.concat(actionColumn)}

          pageSize={10}
          rowsPerPageOptions={[10]}
          checkboxSelection
        />
      </div>
      
    )
}
export default DataTable;