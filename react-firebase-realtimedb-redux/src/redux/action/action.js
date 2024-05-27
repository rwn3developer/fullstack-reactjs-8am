import { getDatabase, onValue, ref, remove, set, update } from "firebase/database"
import { app } from "../../Firebase"

export const ADD_USER = (obj) => {
    const db = getDatabase(app);
    return async(dispatch)=>{
        try{
            await set(ref(db,`users/${obj.userid}`),{
                name : obj.name,
                phone : obj.phone
            })
        }catch(err){
            console.log(err);
            return false;
        }
    }
}

export const GET_USER = () => {
    return async(dispatch) => {
        try{
            const db = await getDatabase(app);
            const users = await ref(db,"users");
            onValue(users,(snapshot)=>{
                const data = snapshot.val()
                dispatch(SET_USER(data))
            })
        }catch(err){
            console.log(err);
            return false;
        }
    }
}

const SET_USER = (data) => {
    return {
        type : "getuser",
        payload : data
    }
}

export const DELETE_USER = (id) => {
    return async(dispatch)=>{
        try{
         const db = getDatabase(app);
         const user = await ref(db,`users/${id}`);
         await remove(user)
        }catch(err){
            console.log(err);
            return false;
        }
    }
}

export const UPDATE_USER = (obj) => {
    const db = getDatabase(app);
    return async(dispatch)=>{
        try{
            const user = await ref(db,`users/${obj.id}`);
            await update(user,{
                name : obj.name,
                phone : obj.phone
            })
        }catch(err){
            console.log(err);
            return false;
        }
    }
}



