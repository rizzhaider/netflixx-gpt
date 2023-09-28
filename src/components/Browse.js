import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import MainContainer from './MainContainer';
import SecondaryContainer from './SecondaryContainer';
import usePopularMovies from '../hooks/usePopularMovies';
import useTopRatedMovies from '../hooks/useTopRatedMovies';
import GptSearchPage from './GptSearchPage';
import { useSelector } from 'react-redux';

const Browse = () => {
  const showGptSearch = useSelector(store => store?.gpt?.showGptSearch);
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  return (
    <div>
      <Header />
      {showGptSearch ? <GptSearchPage /> : <>
      <MainContainer />
      <SecondaryContainer />
      </>}
      
      </div>
  )
}

export default Browse;