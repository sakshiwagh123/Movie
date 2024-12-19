import React,{useState} from 'react'
import {useNavigate} from "react-router-dom"

const Search = () => {
    const [query,setQuery]= useState("")
  const navigate = useNavigate()

    const handleSearch=(e)=>{
        e.preventDefault()
        if(query){
           navigate(`/search?query=${query}`)
        }
    }
  return (
    <form onSubmit={handleSearch} className='flex justify-center my-4'>
        <input type='text' placeholder='search for movie' value={query} onChange={(e)=>setQuery(e.target.value)} className='border rounded-l px-4 py-2'/>
        <button type='submit' className='bg-blue-500 text-white rounded-r px-4 py-2'>Search</button>

    </form>
  )
}

export default Search
