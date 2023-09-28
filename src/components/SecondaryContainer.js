import React from 'react'
import MovieList from './MovieList'
import { useSelector } from 'react-redux'

const SecondaryContainer = () => {
    const movies = useSelector(store => store?.movies);
    if(!movies) return;
  return (
    <div className="pl-12 bg-black">
      <div className='-mt-52 relative z-20'>
      <MovieList title="Now Playing" movies={movies.nowPlayingMovies}/>
        <MovieList title="Popular" movies={movies.popularMovies}/>
        <MovieList title="Top Rated" movies={movies.topRatedMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer