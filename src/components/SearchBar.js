import React, { useState } from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

const SearchBar = (props) => {
  const navigate = useNavigate()
  const [search, setSearch] = useState("")

  const handleClickSearch = () => {
    if (search.trim() !== "") {
      console.log("We will search", search.trim())
      // 
      props.fetchSearch(search.trim());
      // takodje i da redirectuej na pocetnu
      navigate("/")
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