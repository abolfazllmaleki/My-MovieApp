import React from 'react'

function Cast({castimage,castname}) {




  
  return (
    <div className="rounded overflow-hidden shadow-lg w-1/4 h-full sm:h-full flex flex-col justify-center mx-2 xl:w-72 xl:h-72 xl:mx-8">
      <img className='lg:h-48 lg:w-48 lg:mx-4 xl:relative xl:left-8 ' src={castimage!=null?castimage:`https://image.tmdb.org/t/p/w185/33Q1dBoqtTiRLy8YFM418iPerQJ.jpg`} alt="" />

    <div className="px-6 py-4">
      <div className="font-bold text-xs mb-2 xl:text-sm">{castname}</div>

    </div>

  </div>
  )
}

export default Cast