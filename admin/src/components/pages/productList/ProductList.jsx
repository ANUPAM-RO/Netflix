import React from 'react'
import "./productList.css"
import { useState} from 'react'
import { productRows } from '../../../DummyData';
import { DataGrid } from '@material-ui/data-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom"
const ProductList = () => {
  const[data , setData] = useState(productRows)
  const handelDelete = (id) =>{
    setData(data.filter((item)=> item.id !== id))
};
const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
    {
      field: 'product',
      headerName: 'Product',
      width: 200,
      renderCell: (params) =>{
          return(
              <div className='productListItem'>
                  <img className='productListImg' src= {params.row.img} alt="" />
                  {params.row.name}
              </div>
          )
      }
     
    },
    {
      field: 'stock',
      headerName: 'Stock',
      width: 150,
      editable: true,
    },
    {
      field: 'status',
      headerName: 'Status',
      width: 120,
      editable: true,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 160
    },
    {
        field:"action",
        headerName: "Action",
        width:150,
        renderCell: (params) =>{
            return(
                <>
                <Link to ={"/product/"+params.row.id}>
                <button className='productListEdit'>Edit</button>
                </Link>
               
                <FontAwesomeIcon icon={faTrash} className="productListDelete" onClick={()=>handelDelete(params.row.id) }/>
                </>
                )
        }
    }
  ];
  return (
    <div className='productList'>
       <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
      />
    </div>
  )
}

export default ProductList