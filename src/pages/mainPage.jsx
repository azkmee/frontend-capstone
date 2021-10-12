import React, { useContext, useEffect } from 'react';
import { CharacterContext, useFetchCharacters } from '../service/fetchHarryPotter';

export const MainPage = ({

}) => {
    const { characters } = useContext(CharacterContext)
    const fetchCharacters = useFetchCharacters()

    useEffect( () => {
        fetchCharacters()
    }, [])

    useEffect( () => {
        if(characters){
            console.log(characters)
        }
    }, [characters])

    return(
        'hello'
    )
}