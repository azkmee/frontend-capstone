import React from 'react'
import { Bookmarked } from './bookmark'
import {Button} from './button'

export const CharacterBox = ({
    image, 
    name, 
    actor,
    bookmarked,
    clickDetail,
    rest,
    handleBookmark,
}) => {


    return(
        <div className = 'text-center block ' style={{height:500}}>
            <div className='text-center'style={{height:400}}>
                <img className='m-auto block overflow-hidden' src={image} style={{height:400,width:300}}/>
            </div>
            <div className='p-2 px-16 text-justify'>
                <Bookmarked onClick = {()=>handleBookmark(name)} className='float-right' state={bookmarked}/>
                <h1>Character: {name}</h1>
                <h1>Actor Name: {actor}</h1>
            </div>
            <div className='w-full'>
                <Button onClick={()=>clickDetail(rest)} className='w-2/5'>See more</Button>
            </div>
        </div>
    )
}
