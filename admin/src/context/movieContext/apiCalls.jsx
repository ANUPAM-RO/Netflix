import { getMoviesFailure, getMoviesStart, getMoviesSuccess , deleteMoviesStart , deleteMoviesFailure, deleteMoviesSuccess, createMovieStart , createMovieSuccess , createMovieFailure , updateMovieStart ,updateMovieSuccess , updateMovieFailure} from "./MovieAction"
import axios from "axios"

export const getMovies = async (dispatch) => {
    dispatch(getMoviesStart())
    try {
        const res = await axios.get("/movies", {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
            },
        });
        dispatch(getMoviesSuccess(res.data));
    } catch (error) {
        dispatch(getMoviesFailure());
    }
};

//Create
export const createMovie = async (movie, dispatch) => {
    dispatch(createMovieStart());
    try {
       const res =  await axios.post("/movies", movie,  {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
            },
        });
        dispatch(createMovieSuccess(res.data));
    } catch (error) {
        dispatch(createMovieFailure());
    }
};

//UPDATE
export const updateMovie = async (movie, dispatch) => {
    dispatch(updateMovieStart());
    try {
       const res =  await axios.put("/movies/" + movie._id, movie,{
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
            },
        });
        dispatch(updateMovieSuccess(res.data));
    } catch (error) {
        dispatch(updateMovieFailure());
    }
};

// delete
export const deleteMovie = async (id ,dispatch) => {
    dispatch(deleteMoviesStart());
    try {
        await axios.delete("/movies/"+ id, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
            },
        });
        dispatch(deleteMoviesSuccess(id));
    } catch (error) {
        dispatch(deleteMoviesFailure());
    }
};