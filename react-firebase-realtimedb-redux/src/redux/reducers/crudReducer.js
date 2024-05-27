
const initialState = {
    users : null 
}

const crudreducer = (state=initialState,action) => {
    switch(action.type){
        case 'getuser':
            return {
                ...state,
                users : action.payload
            }
        default :
            return state
    }
}

export default crudreducer

