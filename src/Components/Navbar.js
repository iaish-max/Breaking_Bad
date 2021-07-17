import React from 'react'

function Navbar() {
    return (
        <div className='navbar'>
            <ul>
            <li><a href="#home">Episodes</a></li>
            <li><a className="active" href="#news">Explore</a></li>
            </ul>
        </div>
    )
}

export default Navbar
