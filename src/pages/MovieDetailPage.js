import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const MovieDetailPage = () => {
    const { id } = useParams(); // Use useParams to get id from the URL
    const [movie, setMovie] = useState({});
    const [cast, setCast] = useState([]);
    const apiKey = "c45a857c193f6302f2b5061c3b85e743";

    useEffect(() => {
        const fetchMovieDetails = async () => {
            const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=en-US`);
            setMovie(res.data);
        };

        const fetchMovieCast = async () => {
            const res = await axios.get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}&language=en-US`);
            setCast(res.data.cast);
        };

        fetchMovieDetails();
        fetchMovieCast();
    }, [id]); // Use id as a dependency

    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold">{movie.title}</h1>
            <img 
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} 
                alt={movie.title} 
                className="w-full h-96 object-cover" 
            />
            <p className="mt-4">{movie.overview}</p>
            <h2 className="text-xl font-bold mt-4">Cast</h2>
            <ul className="list-disc ml-4">
                {cast.map(actor => (
                    <li key={actor.id}>{actor.name}</li>
                ))}
            </ul>
        </div>
    );
};

export default MovieDetailPage;