import React, { useContext , useState, useEffect} from 'react'
import "./productList.css"
import { productRows } from '../../../DummyData';
import { DataGrid } from '@material-ui/data-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrash } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom"
import { MovieContext } from '../../../context/movieContext/MovieContext';
import { getMovies } from '../../../context/movieContext/apiCalls';
const ProductList = () => {
  const [data, setData] = useState(productRows);
  const { movies, dispatch } = useContext(MovieContext); 

  useEffect(() => {
    getMovies(dispatch)
  }, [dispatch])
  const handelDelete = (id) =>{
    // setData(data.filter((item)=> item.id !== id))
  };
  console.log(movies)
const columns = [
    { field: 'id', headerName: 'ID', width: 100 },
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
        rows={movies}
        columns={columns}
        pageSize={10}
        checkboxSelection
        disableSelectionOnClick
        getRowId={r=>r._id}
      />
    </div>
  )
}

export default ProductList