
import { app } from "../../Firebase";
import { collection, getDocs, getFirestore } from "firebase/firestore";

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

