import React, { useContext , useEffect} from 'react'
import "./movieList.css"
import { DataGrid } from '@material-ui/data-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom"
import { ListContext } from '../../../context/listContext/ListContext';
import { deleteList, getLists } from '../../../context/listContext/apiCalls';
const MovieList = () => {
  const { lists, dispatch } = useContext(ListContext); 

  useEffect(() => {
    getLists(dispatch)
  }, [dispatch])
  const handelDelete = (id) =>{
    deleteList(id, dispatch)
  };
const columns = [
    { field: '_id', headerName: 'ID', width: 250 },
    {
     field: 'title',
     headerName: 'Title',
     width: 250,
   },
    {
      field: 'genre',
      headerName: 'Genre',
      width: 150,
  },
    //  {
    //   field: 'content',
    //   headerName: 'Content',
    //   width: 150,
    // },
     {
      field: 'type',
      headerName: 'Type',
      width: 150,
    },
    {
        field:"action",
        headerName: "Action",
        width:150,
        renderCell: (params) =>{
            return(
                <>
                <Link to ={{pathname: "/list/" + params.row._id, list: params.row}}>
                <button className='movieListEdit'>Edit</button>
                </Link>
               
                <FontAwesomeIcon icon={faTrash} className="movieListDelete" onClick={()=>handelDelete(params.row._id) }/>
                </>
                )
        }
    }
  ];
  return (
    <div className='movieList'>
       <DataGrid
        rows={lists}
        columns={columns}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
        getRowId={r=>r._id}
      />
    </div>
  )
}

export default MovieList