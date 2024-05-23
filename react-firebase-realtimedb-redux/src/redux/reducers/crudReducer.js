import { getDatabase, ref, set } from "firebase/database"
import { app } from "../../Firebase"

const initialState = {
    users  : []
}

const crudreducer = (state=initialState,action) => {
    switch(action.type){
        case  'adduser' :
            const db = getDatabase(app);
            set(ref(db,`users/${action.payload.userid}`),{
                name : action.payload.name,
                phone : action.payload.phone
            })

        default :
            return state
    }
}

export default crudreducer

