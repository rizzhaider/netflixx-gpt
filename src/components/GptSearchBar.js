import React from 'react'
import lang from '../utils/langugaeConstants'
import { useSelector } from 'react-redux'

const GptSearchBar = () => {
    const currentLang = useSelector(store => store?.config?.lang);
    return (
        <div className='pt-[20%] flex justify-center'>
            <form className='bg-black w-1/2 grid grid-cols-12'>
                <input type="text" className='p-4 m-4 col-span-9'
                    placeholder={lang[currentLang].WHAT_WOULD_YOU_LIKE_TO_WATCH_TODAY} />
                <button className='col-span-3 m-4 py-2 px-4 bg-red-700 text-white rounded-lg'>
                    {lang[currentLang].SEARCH}
                </button>
            </form>
        </div>
    )
}

export default GptSearchBar