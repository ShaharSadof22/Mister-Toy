const initialState = {
    currUser: {
        name: 'Popo'
    }
}

export function userReducer(state = initialState, action){
    
    switch (action.type) {
        case 'UPDATE_CURR_USER':
            return {
                ...state,
                currUser: action.user
            }
    
        default:
            return state
    }
}