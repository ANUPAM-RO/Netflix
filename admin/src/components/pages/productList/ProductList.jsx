import React, { useContext , useEffect} from 'react'
import "./productList.css"
import { DataGrid } from '@material-ui/data-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom"
import { MovieContext } from '../../../context/movieContext/MovieContext';
import {deleteMovie, getMovies } from '../../../context/movieContext/apiCalls';
const ProductList = () => {
  const { movies, dispatch } = useContext(MovieContext); 

  useEffect(() => {
    getMovies(dispatch)
  }, [dispatch])
  const handelDelete = (id) =>{
   deleteMovie(id,dispatch)
  };
const columns = [
    { field: '_id', headerName: 'ID', width: 100 },
    {
      field: 'movie',
      headerName: 'movie',
      width: 200,
      renderCell: (params) =>{
          return(
              <div className='movieListItem'>
                  <img className='movieListImg' src= {params.row.img} alt="" />
                  {params.row.title}
              </div>
          )
      }
     
    },
    {
      field: 'genre',
      headerName: 'Genre',
      width: 150,
  },
     {
      field: 'year',
      headerName: 'Year',
      width: 150,
    },
     {
      field: 'genre',
      headerName: 'Genre',
      width: 150,
    },
     {
      field: 'limit',
      headerName: 'Limit',
      width: 150,
    },
    {
      field: 'isSeries',
      headerName: 'isSeries',
      width: 150,
    },
    {
        field:"action",
        headerName: "Action",
        width:150,
        renderCell: (params) =>{
            return(
                <>
                <Link to ={{pathname: "/product/" + params.row._id, movie: params.row}}>
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
        rows={movies}
        columns={columns}
        pageSize={8}
        checkboxSelection
        disableSelectionOnClick
        getRowId={r=>r._id}
      />
    </div>
  )
}

export default ProductList