import React from 'react'
import HeroSlider from '../components/HeroSlider'
import Trending from '../components/Trending'
import Card from '../components/Card'

function Home() {
  return (
    <>
    <div className='h-screen w-screen'>
      <div className='h-2/6 sm:h-3/6 lg:h-4/6'>
        <HeroSlider/>

      </div>
    
        <div className='h-full'>

          <Trending/>
        </div>
        

    </div>
    
    </>


  )
}

export default Home