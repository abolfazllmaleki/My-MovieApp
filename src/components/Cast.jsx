import React from 'react'

function Cast({castimage,castname}) {




  
  return (
    <div className="rounded overflow-hidden shadow-lg w-1/4 h-full sm:h-full flex flex-col justify-items-center">
      <img src={castimage!=null?castimage:`https://image.tmdb.org/t/p/w185/33Q1dBoqtTiRLy8YFM418iPerQJ.jpg`} alt="" />

    <div className="px-6 py-4">
      <div className="font-bold text-xs mb-2">{castname}</div>

    </div>

  </div>
  )
}

export default Cast