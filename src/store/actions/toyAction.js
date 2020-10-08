import { toyService } from '../../services/toyService'


export function loadToy() {
    return async dispatch => {
        const toys = await toyService.query()
        dispatch({ type: 'SET_TOYS', toys })
    }
}
export function loadData(type) {
    return async dispatch => {
        const toys = await toyService.query()

        if (type === 'PricePerType') {
            const dataPricePerType = await toyService.getDataPricePerType(toys)
            dispatch({ type: 'SET_DATA_PRICE_PER_TYPE', dataPricePerType })
        } else {
            const dataToyPerYear = await toyService.getDataToysPerYear(toys)
            dispatch({ type: 'SET_DATA_TOY_PER_YEAR', dataToyPerYear })
        }
    }
}
export function removeToy(toyId) {
    return async dispatch => {
        await toyService.remove(toyId)
        dispatch({ type: 'REMOVE_TOYS', toyId })
    }
}
export function startEditToy(toyId) {
    return dispatch => {
        dispatch({ type: 'SET_EDIT_TOY', toyId })
    }
}