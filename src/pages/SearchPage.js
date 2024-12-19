import React,{useEffect,useState} from 'react'
import { useLocation } from 'react-router-dom'
import axios from 'axios'
import MovieCard from '../components/MovieCard'
import Pagination from '../components/Pagination'
import Search from '../components/Search'

const SearchPage = () => {
    const query = new URLSearchParams(useLocation().search).get("query")
    const[movies,setMovies]= useState([])
    const[currentPage,setCurrentPage]= useState(1)
    const[totalPages,setTotalPages]= useState(0)
    const apiKey =  "c45a857c193f6302f2b5061c3b85e743";

    useEffect(()=>{
        const fetchSearchResults = async()=>{
            const res = await axios.get(`https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${query}&page=${currentPage}`)
            setMovies(res.data.results)
            setTotalPages(res.data.total_pages)
        };
        fetchSearchResults()
    },[query,currentPage])
  return (
    <div className='container mx-auto p-4'>
        <h1 className='text-2xl font-bold text-center mb-8'>Search {query}</h1>
        <Search/>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {movies.map(movie=>(
                <MovieCard key={movie.id} movie={movie}/>
            ))}

        </div>
        <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={setCurrentPage}/>
      
    </div>
  )
}

export default SearchPage
