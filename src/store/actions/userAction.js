
export function updateCurrUser(user) {
    return async dispatch => {
        dispatch({ type: 'UPDATE_CURR_USER', user })
    }
}
