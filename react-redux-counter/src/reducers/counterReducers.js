const initialstate = 0;

const counterReducers = (state=initialstate,action) => {
    switch(action.type){
        case 'inc' :
        return state + 1

        default : 
            return state
    }
}

export default counterReducers;