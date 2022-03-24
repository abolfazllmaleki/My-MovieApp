import React from 'react'
import Dropdown from '../components/Dropdown'
import DropdownType from '../components/DropdownType'
import DropdownGenres from '../components/DropdownGenres'

function Menu() {
  return (
    <div className='flex flex-row'>
        {/* <div className='ml-20'>
            <Dropdown/>
        </div> */}
        <div className='ml-20'>
            <DropdownGenres/>
        </div>
        <div className='ml-20'>
            <DropdownType/>
        </div>

    </div>
  )
}

export default Menu