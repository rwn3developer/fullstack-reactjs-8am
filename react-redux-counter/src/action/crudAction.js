export const VIEW_USER = () => {
    return {
        type : 'view'
    }
}

export const ADD_USER = (data) => {
    return {
        type : 'add',
        payload: data
    }
}

export const DELETE_USER = (id) => {
    return {
        type : 'delete',
        payload : id
    }
}

export const EDIT_USER = (id) => {
    return {
        type : 'edit',
        payload : id
    }
}

