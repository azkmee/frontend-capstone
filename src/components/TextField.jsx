import React from 'react';
import PropTypes from 'prop-types'

export const TextField = ({
    label,
    title,
}) => {
    return (
        <div className = 'flex flex-nowrap items-center w-full'>
            <div className='w-1/3 '>{label} :</div>
            <div className='w-2/3 left-0 ml-3'>{title}</div>           
        </div>
    )
}

TextField.propTypes = {

    /**
     * 
     * 
     */
    label: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired
}
