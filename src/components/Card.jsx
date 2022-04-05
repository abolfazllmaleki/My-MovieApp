import React from 'react'

function Card(props) {
  
  return (
    <>
    
    <div className="rounded overflow-hidden shadow-lg w-full h-max   border-b-2 ">
      <button className='relative transition-transform  translate-y-24 blur-none text-white z-50 bottom-14'>alsdmk</button>
      <div className='w-full h-full hover:backdrop-brightness-50 hover:blur-sm  '>


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