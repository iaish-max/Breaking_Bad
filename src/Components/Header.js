import React from 'react'
import img from '../img/logo.png'

function Header() {
    return (
        <div className='header'>
            <img className='header-img' src={img} alt='header'></img>
        </div>
    )
}

export default Header
