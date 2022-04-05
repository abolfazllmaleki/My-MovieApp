import axios from 'axios'
import React, { useEffect } from 'react'
import Home from './Pages/Home'
import MoviePage from './Pages/MoviePage'
import SearchPage from './Pages/SearchPage'
import { BrowserRouter as Router , Route ,Routes} from 'react-router-dom'
import Navbar from './components/Navbar'



function App() {
  return (
    <div>

    <Router>
      <div className='mb-2'>
      <Navbar/>

      </div>
      <div  className='lg:mx-4 '>

      
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
      </div>

    </Router>
    </div>
    
  )
}

export default App