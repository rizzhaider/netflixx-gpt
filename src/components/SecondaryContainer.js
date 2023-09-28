import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies = useSelector(store => store?.movies);
    if(!movies) return;
  return (
    <div className="-mt-52 relative z-20 pl-12">
        <MovieList title="Now Playing" movies={movies.nowPlayingMovies}/>
        <MovieList title="Popular" movies={movies.popularMovies}/>
        <MovieList title="Top Rated" movies={movies.topRatedMovies}/>
    </div>
  )
}

export default SecondaryContainer