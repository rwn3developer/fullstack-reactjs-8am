export const ADD_USER = (obj) => {
    return async(dispatch)=>{
        dispatch({
            type : 'adduser',
            payload : obj
        })
    }
}

export const GET_USER = () => {
    return async(dispatch) => {
        dispatch({
            type : 'getuser'
        })
    }
}



