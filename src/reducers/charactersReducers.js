import { actionTypes as action } from "./actionTypes"

export const defaultState = {
    characters:null
}


export const characterReducers = (state, event) => {
    switch (event.type) {
        case action.GET_CHARACTER_SUCCESS:
            return {
                ...state,
                characters:event.payload
            }
        case action.GET_CHARACTER_ERROR:
            return {
                ...state,
                characters: null
            }

        default:
            throw new Error('invalid Reducer event')
    }
}