export const getListsStart = () => ({
    type: "GET_LIST_START",
});

export const getListsSuccess = (lists) => ({
    type: "GET_LIST_SUCCESS",
    payload: lists,
});

export const getListsFailure = () => ({
    type: "GET_LIST_FAILURE",
});

export const createListStart = () => ({
    type: "CREATE_LIST_START",
});

export const createListSuccess = (movie) => ({
    type: "CREATE_LIST_SUCCESS",
    payload: movie,
});

export const createListFailure = () => ({
    type: "CREATE_LIST_FAILURE",
});

export const updateListStart = () => ({
    type: "UPDATE_LIST_START",
});

export const updateListSuccess = (list) => ({
    type: "UPDATE_LIST_SUCCESS",
    payload: list,
});

export const updateListFailure = () => ({
    type: "UPDATE_LIST_FAILURE",
});


export const  deleteListStart = () => ({
    type: "DELETE_LIST_START",
});

export const  deleteListSuccess = (id) => ({
    type: "DELETE_LIST_SUCCESS",
    payload: id,
});

export const deleteListFailure = () => ({
    type: "DELETE_LIST_FAILURE",
})