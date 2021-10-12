import { actionTypes as action, actionTypes } from "./actionTypes"
import { keywords } from './keywords'

export const defaultState = {
    characters:null
}


export const characterReducers = (state, event) => {
    switch (event.type) {
        case actionTypes.GET_CHARACTER_SUCCESS:
            return {
                ...state,
                characters:event.payload
            }
        case actionTypes.GET_CHARACTER_ERROR:
            return {
                ...state,
                characters: null
            }


        default:
            throw new Error('invalid Reducer event')
    }
}