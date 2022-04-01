import React from 'react'

function Card(props) {
  
  return (
    <div className="rounded overflow-hidden shadow-lg w-full h-full  sm:h-full">
      <img  src={props.image} alt="" />

    <div className="px-6 py-4">
      <div className="font-bold text-xs mb-2">{props.moviename}</div>

    </div>

  </div>
  )
}

export default Card