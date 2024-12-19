import React,{useState,useEffect} from 'react'
import axios from 'axios'
import MovieCard from '../components/MovieCard'
import Pagination from '../components/Pagination'
import Search from '../components/Search'

const HomePage = () => {
    const[movies,setMovies]= useState([])
    const[currentPage,setCurrentPage]= useState(1)
    const[totalPage,setTotalPage]= useState(0)
    const apiKey= "c45a857c193f6302f2b5061c3b85e743";
    useEffect(()=>{
        const fetchMovies=async()=>{
            const res = await axios.get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&language=en-US&page=${currentPage}`)
            setMovies(res.data.results)
            setTotalPage(res.data.total_pages)
        };
        fetchMovies()
    },[currentPage])

  return (
    <div className='container mx-auto p-4'>
        <h2 className='text-2xl font-bold text-center mb-8'>Popular Movies</h2>
        <Search/>
        <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6'>
            {movies.map(movie=>(
                <MovieCard key={movie.id} movie={movie}/>
            ))}

        </div>
        <Pagination currentPage={currentPage} totalPage={totalPage} onPageChange={setCurrentPage}/>
      
    </div>
  )
}

export default HomePage
