import React from 'react'

const SearchBar = () => {
  return (
    <div style={{margin:'20px'}}>
        <input 
        type="text"
        placeholder='search expenses...'
        value={searchCategory}
        onChange={(event)=>onSearchChange(event.target.value)}
        />
    </div>
  )
}

export default SearchBar