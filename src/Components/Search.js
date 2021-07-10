import React, { useState } from 'react'

function Search(props) {
    const [search, setSearch] = useState('')

    const onChange = (e) => {
        props.setQuery(e)
        setSearch(e)
    }
    return (
        <div className='search'>
            <div className='search-div'>
            <form>
                <input type='text' placeholder='Character Name...' value={search} onChange={(e) => onChange(e.target.value)} autoFocus></input>
            </form>
            </div>
        </div>
    )
}

export default Search
