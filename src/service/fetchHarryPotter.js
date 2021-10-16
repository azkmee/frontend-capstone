import { createContext, useContext } from "react"
import { useCharacterState } from "../reducers/charactersAction"

const BASE_URL = 'https://hp-api.herokuapp.com/api/characters'

const fetchCharacters = async () => {
    return fetch(BASE_URL).then(res => res.json())
}

export const CharacterContext = createContext()

export const CharacterProvider = ({children}) => {
    const character = useCharacterState()

    return(
        <CharacterContext.Provider value={character}>
            {children}
        </CharacterContext.Provider>
    )
}

//hook to fetch all characters
export const useFetchCharacters = () => {
    const { getCharacterSuccess , getCharacterError} = useContext(CharacterContext)
    return function invokeFetchCharacters(){
        return fetchCharacters()
            .then(res => {
                const toSave = res.filter(character => {
                    return character.image !== ""
                })
                getCharacterSuccess(toSave)})
            .catch(res => getCharacterError(res))
    }
}