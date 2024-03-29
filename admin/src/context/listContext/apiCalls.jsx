import { getListsSuccess , getListsStart, getListsFailure, deleteListStart, deleteListSuccess, deleteListFailure , createListStart , createListSuccess , createListFailure} from "./ListAction"
import axios from "axios"

export const getLists = async (dispatch) => {
    dispatch(getListsStart())
    try {
        const res = await axios.get("/lists", {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
            },
        });
        dispatch(getListsSuccess(res.data));
    } catch (error) {
        dispatch(getListsFailure());
    }
};

//Create
export const createList = async (list, dispatch) => {
    dispatch(createListStart());
    try {
       const res =  await axios.post("/lists", list,  {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
            },
        });
        dispatch(createListSuccess(res.data));
    } catch (error) {
        dispatch(createListFailure());
    }
};

// //UPDATE
// export const updateMovie = async (movie, dispatch) => {
//     dispatch(updateMovieStart());
//     try {
//        const res =  await axios.put("/movies/" + movie._id, movie,{
//             headers: {
//                 token: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
//             },
//         });
//         dispatch(updateMovieSuccess(res.data));
//     } catch (error) {
//         dispatch(updateMovieFailure());
//     }
// };

// delete
export const deleteList = async (id ,dispatch) => {
    dispatch(deleteListStart());
    try {
        await axios.delete("/lists/"+ id, {
            headers: {
                token: "Bearer " + JSON.parse(localStorage.getItem("user")).token,
            },
        });
        dispatch(deleteListSuccess(id));
    } catch (error) {
        dispatch(deleteListFailure());
    }
};