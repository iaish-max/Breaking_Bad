import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card'
import spinner from '../img/spinner2.gif'



function Characters(props) {
    const [items, setItems] = useState([])
    const [isLoading, setisLoading] = useState(true)

    useEffect(() => {
        console.log(props.query);
        axios.get(`https://www.breakingbadapi.com/api/characters?name=${props.query}`)
        .then((response) => {
            setItems(response.data)
            setisLoading(false)
        })
        .catch((err) => console.log(err))

        console.log(items);
    },[props.query])

    return (
        <>
        {(isLoading === true) ? 
            <div className='spinner-div'>
                    <img src={spinner} alt='spinner' />
            </div>
            : 
            <div className='Box'>
             {items.map((item) => <Card key={item.char_id} item={item}/>)}
            </div>
        }
            
        </>
    )
}

export default Characters
