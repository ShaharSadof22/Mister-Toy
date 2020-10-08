const initialState = {
    toys: [],
    dataPricePerType: {},
    dataToyPerYear: {},
    editToyId: null
}

export function toyReducer(state = initialState, action){
    
    switch (action.type) {
        case 'SET_TOYS':
            return {
                ...state,
                toys: action.toys
            }
        case 'REMOVE_TOYS':
            return {
                ...state,
                toys: state.toys.filter(toy => toy._id !== action.toyId)
            }
        case 'SET_DATA_PRICE_PER_TYPE':
            return {
                ...state,
                dataPricePerType: action.dataPricePerType
            }
        case 'SET_DATA_TOY_PER_YEAR':
            return {
                ...state,
                dataToyPerYear: action.dataToyPerYear
            }
        case 'SET_EDIT_TOY':
            return {
                ...state,
                editToyId: action.toyId
            }

    
        default:
            return state
    }
}