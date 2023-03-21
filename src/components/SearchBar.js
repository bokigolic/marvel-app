import React, { useState } from 'react'

const SearchBar = (props) => {
  const [search, setSearch] = useState("")

  const handleClickSearch = () => {
    if (search.trim() !== "") {
      console.log("We will search", search.trim())
      // 
      props.fetchSearch(search.trim())
    }
  }

  let disabled = true; // iskljuceno
  if (search.trim() !== "") {
    // ukljuceno
    disabled = false
  }

  return (
    <div>
      <input
        type="text"
        name="search"
        value={search}
        onChange={(e) => { setSearch(e.target.value) }}
      />
      <button
        disabled={disabled}
        onClick={handleClickSearch}
      >Search</button>
    </div>
  )
}

export default SearchBar