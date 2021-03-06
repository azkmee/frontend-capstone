import React from 'react'
import {TextField} from './TextField'
import {Button} from './button'
import { Bookmarked } from './bookmark'


export const Detail = ({
    props,
    handleClose,
    handleBookmark,
    bookmarked,
}) => {

    const mapLabel = {
        "name": "Name",
        "species": "Species",
        "gender": "Gender",
        "house": "House",
        "dateOfBirth": "Date of Birth",
        "yearOfBirth": 'Year Of Birth',
        "wizard": "Wizard",
        "ancestry": "Ancestry",
        "eyeColour": "Eye Color",
        "hairColour": "Hair Color",
        "actor": "Actor",
    }

    const { image, ...toShow } = props

    return (
        <div className='grid grid-cols-2 gap-3 bg-gray-300 p-4'>
            <div className='relative h-2/3'>
                <img className='w-full overflow-hidden' src={image}/>
            </div>
            <div className='relative'>
                <Bookmarked onClick = {()=>handleBookmark(toShow.name)} className='float-right' state={bookmarked}/>
                <div className='text-center'>
                    {Object.keys(toShow).map( (key, index)=> {
                        return(
                            <TextField
                                key={index}
                                label={mapLabel[key]}
                                title={toShow[key]}/>)
                    })
                    }
                </div>
                <div className='absolute bottom-0 w-full text-center inline-block'>
                    <Button onClick={handleClose} className='w-2/5'>Back</Button>
                </div>
            </div>

        </div>
    )
}
