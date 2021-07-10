import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Card from './Card'
import spinner from '../img/spinner.gif'



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
        <div>
        {(isLoading === true) ? 
            <img src={spinner} alt='spinner' style={{display:'block', margin:'auto', width:'5rem', padding:'5rem'}} />
            : 
            <div className='Box'>
             {items.map((item) => <Card key={item.char_id} item={item}/>)}
            </div>
        }
            
        </div>
    )
}

export default Characters
