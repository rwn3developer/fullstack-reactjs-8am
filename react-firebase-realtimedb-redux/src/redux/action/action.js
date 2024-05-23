export const ADD_USER = (obj) => {
    return async(dispatch)=>{
        dispatch({
            type : 'adduser',
            payload : obj
        })
    }
}



