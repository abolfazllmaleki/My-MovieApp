import React from 'react'
import Dropdown from '../components/Dropdown'
import DropdownType from '../components/DropdownType'
import DropdownGenres from '../components/DropdownGenres'
import SearchField from '../components/SearchField'
function Menu() {
  return (
    <>
    <div className='m-2'>
      <SearchField/>
    </div>
    <div className='flex flex-row space-x-7' >
        {/* <div className='ml-20'>
            <Dropdown/>
        </div> */}

        

        <div className=''>
            <DropdownGenres/>
        </div>
        
        <div className=''>
            <DropdownType/>
        </div>
        <button>SEARCH</button>

    </div>

    </>
  )
}

export default Menu