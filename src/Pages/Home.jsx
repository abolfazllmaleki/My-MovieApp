import React from 'react'
import HeroSlider from '../components/HeroSlider'
import Trending from '../components/Trending'
import Card from '../components/Card'
import PopularShow from '../components/PopularShow'

function Home() {
  return (
    <>
    <div className='h-screen w-screen'>
      <div className='h-2/6 sm:h-3/6 lg:h-4/6'>
        <HeroSlider/>

      </div>
    
      <div className='h-6/12 '>

          <Trending/>
      </div>
      <div className='h-2/6 '>

      
          <PopularShow/>

      </div>

        

    </div>

    
    </>


  )
}

export default Home