import axios from 'axios'
import React, { useEffect } from 'react'
import Home from './Pages/Home'
import MoviePage from './Pages/MoviePage'
import SearchPage from './Pages/SearchPage'
import { BrowserRouter as Router , Route ,Routes} from 'react-router-dom'
import Navbar from './components/Navbar'



function App() {
  return (
    <>

    <Router>
      <Navbar/>
      <Routes>
        <Route exact path='/'
        element={
          <>
          <Home/>
          </>
        }
        />

        <Route exact path='/search'
        element={
          <>
          <SearchPage/>
          </>
        }
        />

        <Route exact path='/movie/:id'
        element={
          <>
          <MoviePage/>
          </>
        }
        />

      </Routes>

    </Router>
    </>
    
  )
}

export default App