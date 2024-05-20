const initialState = {
    users : JSON.parse(localStorage.getItem("users")) || [],
    user : {}
}

const crudReducer = (state=initialState,action) => {
    switch(action.type){

        case 'add':
        const old = [...state.users,action.payload];
        localStorage.setItem('users',JSON.stringify(old));
        return {
            ...state,
            users : old
        }

        case 'delete' :
        let id =  action.payload;
        let deleteUser = state.users.filter(item => item.id != id);
        localStorage.setItem('users',JSON.stringify(deleteUser));
        return {
            ...state,
            users : deleteUser
        }
        
        case 'edit':
            let editid = action.payload;
            let singleUser = state.users.find(item => item.id == editid);
        return {
            ...state,
            user : singleUser
        }

        case "update":
            let updateId = action.payload.id;
            let up = state.users.map((item)=>{
                if(item.id == updateId){
                    return {
                        ...item,
                        name:action.payload.name,
                        phone:action.payload.phone
                    }
                }
                return item
            })
           localStorage.setItem('users',JSON.stringify(up));
         return {
            ...state,
            users : up
         }

        default : 
            return state;
    }
}
export default crudReducer

