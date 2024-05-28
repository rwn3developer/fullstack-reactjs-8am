
const initialState = {
    users : null
}

const crudreducer = (state=initialState,action) => {
    
    switch(action.type){
        case 'getemp':
            
            return{
                ...state,
                users : action.payload
            }

        default :
            return state
    }
}

export default crudreducer

