import React, { useEffect } from 'react'
import { useState } from "react"
import Dropdown from '../components/Dropdown'
import DropdownType from '../components/DropdownType'
import DropdownGenres from '../components/DropdownGenres'
import SearchField from '../components/SearchField'
function Menu(props) {
  const[name,setname]=useState(null)
  const[type,settype]=useState(null)
  const[genres,setgenres]=useState(null)
  const[trend,settrend]=useState(null)
  const Send =()=>{
    
    props.genres(genres)
    props.name(name)
    props.type(type)
    props.trend(trend)
    props.page(1)
  
  }

  




  return (
    <>
    <div className='m-2'>
      <SearchField name={(e)=>setname(e)} type={(e)=>settype(e)}/>
    </div>
    <div className='flex flex-row space-x-7' >
        {/* <div className='ml-20'>
            <Dropdown/>
        </div> */}

        

        <div className=''>
            <DropdownGenres genres={(x)=>setgenres(x)}/>
        </div>
        
        <div className=''>
            <DropdownType trend = {(x)=>settrend(x)}/>
        </div>
        <button onClick={()=>Send()}>SEARCH</button>

    </div>

    </>
  )
}

export default Menu