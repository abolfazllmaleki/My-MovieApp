import React from 'react'
import Menu from '../components/Menu'
import SelectedMovieList from '../components/SelectedMovieList'
import api from '../Api/key';
import axios from 'axios';
import { useState,useEffect } from 'react';
import Pagination from '../components/Pagination'

import { connect, useSelector } from 'react-redux';

const maptostate = (state)=>{



  return state

}


function SearchPage() {

  const[movies,setmovies]=useState([])
  const[name,setname]=useState(null)
  const[type,settype]=useState('movie')
  const[genres,setgenres]=useState(null)
  const[trend,settrend]=useState('upcoming')

  const page = useSelector((state)=>{return state.page})

  if(type==='tv' && trend==='upcoming'){
    settrend('on_the_air')
  }
  
 
  useEffect(()=>{

  if(name!=null){
    setmovies([])
    
    try{
      axios.get(`https://api.themoviedb.org/3/search/${type}?api_key=${api}&query=${name}` )
      .then(res=>{


        setmovies(res.data.results)
        
      })
      
    }catch{
      console.log('error')
    }
    

  }else{axios.get(`https://api.themoviedb.org/3/${type}/${trend}?api_key=${api}&language=en-US&page=${page}` )
    .then(res=>{
      
      if(genres=='comedy'){

        const the=res.data.results.filter(x=>x.genre_ids[0]===35)
        setmovies(the)


        }
      else if(genres=='Drama'){

        const the=res.data.results.filter(x=>x.genre_ids[0]===18)
        setmovies(the)


        }
      else if(genres=='horror'){

        const the=res.data.results.filter(x=>x.genre_ids[0]===27)
        setmovies(the)


        }
      else if(genres=='action'){

        const the=res.data.results.filter(x=>x.genre_ids[0]===28)
        setmovies(the)


        }
        else{
          setmovies(res.data.results)

      }
    })}}
    ,[type,trend,genres,page,name]);
  



  return (
    <div>
      <div><Menu name={(e)=>setname(e)}  type={(e)=>settype(e)} genres={(x)=>setgenres(x)} trend = {(x)=>settrend(x) }  /></div>
      <div><SelectedMovieList movies={movies}/></div>
      <div><Pagination /></div>


      </div>
  )
}

export default connect(maptostate)(SearchPage)