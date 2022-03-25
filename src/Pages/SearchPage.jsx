import React from 'react'
import Menu from '../components/Menu'
import SelectedMovieList from '../components/SelectedMovieList'
import api from '../Api/key';
import axios from 'axios';
import { useState,useEffect } from 'react';
import Pagination from '../components/Pagination'

function SearchPage() {

  const[neww,setneww]=useState([])

  useEffect(()=>{axios.get(`https://api.themoviedb.org/3/movie/upcoming?api_key=${api}&language=en-US&page=1` )
  .then(res=>{setneww(res.data.results)})
  },[]);
  console.log(neww)


  return (
    <div>
      <div><Menu/></div>
      <div><SelectedMovieList movies={neww}/></div>
      <div><Pagination/></div>


      </div>
  )
}

export default SearchPage