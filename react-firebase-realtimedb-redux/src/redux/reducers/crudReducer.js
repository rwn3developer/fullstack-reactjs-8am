import { getDatabase, onValue, ref, set } from "firebase/database"
import { app } from "../../Firebase"

const initialState = {
    users : null 
}

const crudreducer = (state=initialState,action) => {
    const db = getDatabase(app);
    switch(action.type){
        case  'adduser' :
            set(ref(db,`users/${action.payload.userid}`),{
                name : action.payload.name,
                phone : action.payload.phone
            })

            case 'getuser':
                const users = ref(db,"users");
                let all = ""
                onValue(users,(snapshot)=>{
                    all = snapshot.val()
                    return all
                    
                })
                return {
                    ...state,
                    users : all
                }
        
        default :
        const alluser = ref(db,"users");
            let alldata = ""
            onValue(alluser,(snapshot)=>{
                alldata = snapshot.val()
                return alldata
                
            })
            return {
                ...state,
                users : alldata
            }
    }
}

export default crudreducer

