import React from 'react'

function Navbar(props) {
    return (
        <div className='navbar'>
            <ul>
            <li><a href="#Episodes">
            {
                (props.currpage === 'episodes')?
                <button className='Navbar-button active' onClick= {() => {props.setCurrpage('episodes')}}>Episodes</button>
                :
                <button className='Navbar-button' onClick= {() => {props.setCurrpage('episodes')}}>Episodes</button>
            } 
            </a></li>
            <li><a  href="#Explore">
            {
                (props.currpage === 'explore')?
                <button className='Navbar-button active' onClick= {() => {props.setCurrpage('explore')}}>Explore</button>
                :
                <button className='Navbar-button' onClick= {() => {props.setCurrpage('explore')}}>Explore</button>
            }
            </a></li>
            </ul>
        </div>
    )
}

export default Navbar
