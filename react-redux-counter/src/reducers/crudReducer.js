const initialState = {
    users : JSON.parse(localStorage.getItem("users")) || [],
    user : {}
}

const crudReducer = (state=initialState,action) => {
    switch(action.type){

        case 'add':
        const old = [...state.users,action.payload];
        let a = localStorage.setItem('users',JSON.stringify(old));
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

        default : 
            return state;
    }
}
export default crudReducer

