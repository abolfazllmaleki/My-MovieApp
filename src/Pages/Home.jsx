import React, { useState } from 'react'
import HeroSlider from '../components/HeroSlider'
import Trending from '../components/Trending'

import PopularShow from '../components/PopularShow'
import Loading from '../components/Loading'

function Home() {
  const[loading,setloading]=useState(true)


  setTimeout(()=>{
    setloading(false)

  },800)

  return (
    <>
    <div className='h-screen w-full'>
      <div className='h-2/6 sm:h-3/6 lg:h-4/6'>
        {loading?<Loading/>:<HeroSlider/>}
        

      </div>
    
      <div className='h-8/12 '>

          <Trending/>
      </div>
      <div className='h-8/12 '>

          <PopularShow/>

      </div>


        

    </div>


    
    </>


  )
}

export default Home