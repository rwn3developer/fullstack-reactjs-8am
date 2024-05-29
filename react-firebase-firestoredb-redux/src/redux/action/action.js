
import { app } from "../../Firebase";
import { addDoc, collection, deleteDoc, doc, getDocs, getFirestore, updateDoc } from "firebase/firestore";

export const GET_USER = () => {
    return async(dispatch)=>{
        try{
           const db = getFirestore(app)
           const data = collection(db,"employee");
           const alldata = await getDocs(data)
           dispatch(SET_EMP(alldata))
        }catch(err){ 
            console.log(err);
            return false;
        }
    }
}

const SET_EMP = (data) => {
    // console.log(data);
    return{
        type : 'getemp',
        payload : data
    }
}

export const ADD_EMP = (data) => {
    return async(dispatch) => {
        try{
            const db = getFirestore(app);
            const addemp = await addDoc(collection(db,"employee"),{
                name : data.name,
                phone : data.phone
            })
        }catch(err){
            console.log(err);
            return false;
        }
    }
}

export const DELETE_EMP = (userid) => {
    return async(dispatch) => {
        try{
           const db = getFirestore(app);
           const user = doc(db,"employee",userid);
          await deleteDoc(user)
          dispatch(GET_USER())
        }catch(err){
            console.log(err);
            return false;
        }
    }
}

export const EDIT_EMP = (data) => {
    return async(dispatch) => {
        try{
            const db = getFirestore(app);
            const user = await doc(db,"employee",data.id);
            await updateDoc(user,{
                name : data.name,
                phone : data.phone
            })
            dispatch(GET_USER());
        }catch(err){
            console.log(err);
            return false;
        }
    }
}

