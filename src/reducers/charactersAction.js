import React, { useReducer } from "react"
import { actionTypes as action, actionTypes } from "./actionTypes"
import { keywords } from './keywords'
import { characterReducers, defaultState } from "./charactersReducers"


export const useCharacterState = () => {
    
    const [state, dispatch] = useReducer(characterReducers, defaultState);

    const getCharacter = () => {
        dispatch({
            type: actionTypes.GET_CHARACTER
        })
    }
    const getCharacterSuccess = (data) => {
        dispatch({
            type:action.GET_CHARACTER_SUCCESS,
            payload: {data}
        })
    }
    const getCharacterError = (data) => {
        dispatch({
            type:action.GET_CHARACTER_ERROR,
            payload: {data}
        })
    }

    return {
        ...state,
        getCharacter,
        getCharacterSuccess,
        getCharacterError,
    }
}