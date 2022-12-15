export const productsColumns = [
    // will be using the same field of the datagrid 
    { field: "id", headerName: "ID", width: 70 },
    {
      field: "product",
      headerName: "Product",
      width: 230,
      // render cell is the same as valueGetter
      renderCell: (params) => {
        return (
          <div className="userImg">
                <img className="profileImg" src={params.row.img} alt="profile" />
                {params.row.username}
          </div>
        );
      },
    },
    {
      title: "title",
      headerName: "Title",
      width: 230,
    },
  
    {
      price: "price",
      headerName: "Price",
      width: 100,
    },
    {
      field: "status",
      headerName: "Status",
      width: 160,
      renderCell: (params) => {
        return (
          <div className={`userStatus ${params.row.status}`}>
            {params.row.status}
          </div>
        );
      },
    },
  ];