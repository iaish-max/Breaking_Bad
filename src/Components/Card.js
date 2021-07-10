import React from 'react'
import '../App.css'

function Card(props) {
    return (
        <div className='card'>
        <div className="flip-card">
            <div className="flip-card-inner">
                <div className="flip-card-front">
                    <img className='card-img' src={props.item.img} alt="character"/>
                </div>
                <div className="flip-card-back">
                    <h3>Actor Name: {props.item.name}</h3> 
                    <h3>Nickname: {props.item.nickname}</h3>
                    <h3>Birthday: {props.item.birthday}</h3> 
                    <h3>Status: {props.item.status}</h3>  
                </div>
            </div>
        </div>
    </div>
    )
}

export default Card
