import React, { useContext, useEffect, useState } from 'react';
import { CharacterBox } from '../components/characterBox';
import { Detail } from '../components/Detail';
import { CharacterContext, useFetchCharacters } from '../service/fetchHarryPotter';
import { Button } from '../components/button'
import { Modal } from '../components/modal';

export const MainPage = ({...props}) => {
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
        const checkStorage = JSON.parse(localStorage.getItem("bookmark"))
        if(checkStorage){
            setBookmarks(checkStorage)
        }
    }, [])

    useEffect( () => {
        if(characters){
            const from = currentPage*perPage
            const to  = from + perPage
            setCurrentCharacters(characters.data.slice(from, to))
            if(to>characters.data.length){
                setIsNext(false)
            } else {setIsNext(true)}
            window.scrollTo(0, 0)
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
        console.log(typeof bookmarks, bookmarks)
        if (bookmarks?.includes(name)){
            setBookmarks(bookmarks.filter(bookmark => bookmark != name))
        } else {
            setBookmarks(bookmarks!==[]? [...bookmarks, name] : [name])
        }
    }

    useEffect(()=>{
        localStorage.setItem("bookmark", JSON.stringify(bookmarks))
    }, [bookmarks])

    return(
        <div className='h-full'>
                
            {/* activate when a character is selected */}
            { modalOpen ? 
                <Modal>
                    <Detail 
                        props={detailCharacter} 
                        handleClose = {handleModalClose}
                        handleBookmark={handleBookmark}
                        bookmarked = {bookmarks?.includes(detailCharacter?.name)}
                        />
                </Modal>: null}

            <div className = 'grid grid-cols-3 gap-4 p-4'>
                {currentCharacters ? (
                    currentCharacters.map(character => {
                        return(
                            <CharacterBox 
                                image={character.image}
                                name={character.name}
                                actor = {character.actor}
                                bookmarked = {bookmarks?.includes(character.name)}
                                rest = {character}
                                clickDetail = {handleDetailClick}
                                key={character.name}
                                handleBookmark={handleBookmark}
                                />
                    )})
                ):null}
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


        </div>
    )
}

