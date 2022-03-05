import "./userList.css";
import { useState} from 'react'
import { userRows } from '../../../DummyData';
import { DataGrid } from '@material-ui/data-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom"
const UserList = () => {
    const[data , setData] = useState(userRows)
    const handelDelete = (id) =>{
        setData(data.filter((item)=> item.id !== id))
    };
    const columns = [
        { field: 'id', headerName: 'ID', width: 100 },
        {
          field: 'user',
          headerName: 'Username',
          width: 200,
          renderCell: (params) =>{
              return(
                  <div className='userListUser'>
                      <img className='userListImg' src= {params.row.avatar} alt="" />
                      {params.row.username}
                  </div>
              )
          }
         
        },
        {
          field: 'email',
          headerName: 'Email',
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
          field: 'transaction',
          headerName: 'Transaction',
          width: 160
        },
        {
            field:"action",
            headerName: "Action",
            width:150,
            renderCell: (params) =>{
                return(
                    <>
                    <Link to ={"/user/"+params.row.id}>
                    <button className='userListEdit'>Edit</button>
                    </Link>
                   
                    <FontAwesomeIcon icon={faTrash} className="userListDelete" onClick={()=>handelDelete(params.row.id) }/>
                    </>
                    )
            }
        }
      ];
   
    
  return (
      <div className='userList'>
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

export default UserList