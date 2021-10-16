export const Modal = ({children}) => {

    return (
    <div className='fixed w-full h-full bg-white overflow-scroll p-10'>
        {children}
    </div>
    )
    
}

// disable scrolling, opacty changines