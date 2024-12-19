import React from 'react'
import { Link } from 'react-router-dom'

const MovieCard = ({movie}) => {
  return (
    <div className='border rounded-lg overflow-hidden shadow-lg'>
        <Link to={`/movie/${movie.id}`}>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
        className='w-full h-60 object-cover'/>

        <div className='p-4'>
            <h3 className='font-bold'>{movie.title}</h3>
        </div>

         
        </Link>
      
    </div>
  )
}

export default MovieCard
