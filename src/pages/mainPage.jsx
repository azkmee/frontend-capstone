import React, { useContext, useEffect, useState } from 'react';
import ReactModal, { Modal } from 'react-modal';
import { CharacterBox } from '../components/characterBox';
import { Detail } from '../components/Detail';
import { CharacterContext, useFetchCharacters } from '../service/fetchHarryPotter';
import { Button } from '../components/button'

export const MainPage = ({

}) => {
    const { characters } = useContext(CharacterContext)
    const perPage = 12;
    const [currentPage, setCurrentPage ] = useState(0)
    const [currentCharacters, setCurrentCharacters ] = useState()
    const [detailCharacter, setDetailCharacter ] = useState()
    const [modalOpen, setModalOpen ] = useState(false)
    const [ isNext, setIsNext ] = useState(true)
    const [ bookmarks, setBookmarks ] = useState([])
    const fetchCharacters = useFetchCharacters()

    useEffect( () => {
        fetchCharacters()
        setBookmarks(JSON.parse(localStorage.getItem("bookmark")))
    }, [])

    useEffect( () => {
        if(characters){
            const from = currentPage*perPage
            const to  = from + perPage
            setCurrentCharacters(characters.data.slice(from, to))
            if(to>characters.data.length){
                setIsNext(false)
            } else {setIsNext(true)}

        }
    }, [characters, currentPage])

    const handleModalClose = () => {
        setModalOpen(false)
    }

    const handleDetailClick = (details) => {
        setModalOpen(true)
        const toShow = ['name','house','dateOfBirth','yearOfBirth','ancestry','actor','image']
        const detailToSend = {}
        toShow.map(key => {
            detailToSend[key] = details[key]
        })

        setDetailCharacter(detailToSend)
    }

    const handleBookmark = (name) => {
        if (bookmarks.includes(name)){
            setBookmarks(bookmarks.filter(bookmark => bookmark != name))
        } else {
            setBookmarks([...bookmarks, name])
        }
    }

    useEffect(()=>{
        localStorage.setItem("bookmark", JSON.stringify(bookmarks))
    }, [bookmarks])

    return(
        <>
        <div className = 'grid grid-cols-3 gap-4 p-4'>
            {currentCharacters ? (
                currentCharacters.map(character => {
                    return(
                    <CharacterBox 
                        image={character.image}
                        name={character.name}
                        actor = {character.actor}
                        bookmarked = {bookmarks.includes(character.name)}
                        rest = {character}
                        clickDetail = {handleDetailClick}
                        key={character.name}
                        handleBookmark={handleBookmark}
                        />
                )})
            ):null}

            <ReactModal
                isOpen={modalOpen}
                contentlabel='Example'>
                    <Detail 
                        props={detailCharacter} 
                        handleClose = {handleModalClose}
                        handleBookmark={handleBookmark}
                        bookmarked = {bookmarks.includes(detailCharacter?.name)}
                        />
            </ReactModal>
        </div>
        <div className='justify-content inline-flex w-full my-10'>
            <div className='w-1/2 text-center'>
                {currentPage>0?
                    <Button onClick={()=>{setCurrentPage(currentPage-1)}}>
                        Previous
                    </Button> : null}
            </div>
            <div className='w-1/2 text-center'>
                {isNext ? 
                    <Button onClick={()=>{setCurrentPage(currentPage+1)}}>
                        Next
                    </Button>:null
                }
            </div>
        </div>
        </>
    )
}

