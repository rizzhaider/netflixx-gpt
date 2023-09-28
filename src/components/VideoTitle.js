import React from 'react'
import info from '../assets/img/icon-info.svg';
import play from '../assets/img/icon-play.svg';

const VideoTitle = ({ title, overview}) => {
  return (
    <div className='w-screen aspect-video pt-[20%] px-24 absolute text-white bg-gradient-to-r from-black'>
        <h1 className='text-4xl font-bold'>{title}</h1>
        <p className='py-6 text-md w-1/4'>{overview}</p>
        <div className='py-6 flex'>
            <button className='flex items-center bg-white text-black p-4 px-12 text-lg rounded-lg hover:bg-opacity-80'>
                <img src={play} alt="play" className='w-6 h-6 mr-1' /> Play
                </button>
            <button className='flex items-center mx-2 bg-gray-500 text-white p-4 px-12 text-lg bg-opacity-50 rounded-lg'>
              <img src={info} alt="info" className='w-6 h-6 mr-1' />More Info</button>
        </div>
    </div>
  )
}

export default VideoTitle