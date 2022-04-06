import React from 'react'
import { Link } from 'react-router-dom'

function Card(props) {
  
  return (
    <>
    
    <div className="rounded relative overflow-hidden shadow-lg w-full h-max  border-b-2 ">
      <div className=' absolute  w-full h-full z-30 text-white '>

      </div>
      <a
      href={`/tv/${props.id}`}>
      
      <button className=' absolute  z-40 text-transparent rounded-lg w-full h-full hover:text-white hover:backdrop-blur-sm hover:backdrop-brightness-50 hover:transition-all hover:duration-200' >more info</button>
      </a>
      <div className='w-full h-full  z-20  '>


      <div className='h-full'>
      <img  src={props.image} alt="" />

      </div>

    <div className="px-6 py-4 h-20">
      <div className="font-bold text-xs mb-2">{props.moviename}</div>

    </div>
      </div>
      {/* <div  className=' h-full w-full absolute  top-0'>
        <button className=''> asdas</button>

      </div> */}




  </div>
    </>
  )
}

export default Card