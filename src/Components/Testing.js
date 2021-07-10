import React, { useEffect, useState } from 'react'
import axios from 'axios'



function Testing() {
    const [items, setItems] = useState([])

    useEffect(() => {
        axios.get('https://www.breakingbadapi.com/api/characters')
        .then((response) => {
            setItems(response.data)
        })
        .catch((err) => console.log(err))
    },[])

    console.log(items);

    return (
        <div>
            <h2>Testing</h2>
            {items.map((item) => <div  key={item.char_id}>
                <h2>{item.name}</h2>
                <img src={item.img} alt='images of breaking bad'/>
            </div>)}
        </div>
    )
}

export default Testing
