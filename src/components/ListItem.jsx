import { useState } from "react"

export default function ListItem({ movie }) {



  const dodo=()=>{

    if(movie.release_date || movie.first_air_date){
      return(<dd>{!movie.release_date?movie.first_air_date.substring(0,4):movie.release_date.substring(0,4)}</dd>)
    }else{
      return(<></>)
    }

  }





    const genre = ()=>{
      if(movie.genre_ids[0]==28){
        return('action')
      }else if(movie.genre_ids[0]==35){
        return('comedy')
  
      }else if(movie.genre_ids[0]==16){
        return('Animation')
  
      }else if(movie.genre_ids[0]==12){
        return('Adventure')
  
      }else if(movie.genre_ids[0]==80){
        return('Crime')
      }else if(movie.genre_ids[0]==18){
        return('Drama')
      }else if(movie.genre_ids[0]==27){
        return('Horror')
      }else if(movie.genre_ids[0]==14){
        return('Fantasy')
      }

    }
   

  

    return (
      <article className="flex items-start space-x-6 p-6">
        <img src={movie.poster_path===null?`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT1ecgCU38TNQLa_ej2JD2Z1-BkzTsYE8ZuZQ&usqp=CAU`: `https://image.tmdb.org/t/p/w342${movie.poster_path}`} alt="" width="60" height="88" className="flex-none rounded-md bg-slate-100" />
        <div className="min-w-0 relative flex-auto">
          <h2 className="font-semibold text-slate-900 truncate pr-20">{!movie.title?movie.name:movie.title}</h2>
          <dl className="mt-2 flex flex-wrap text-sm leading-6 font-medium">
            <div className="absolute top-0 right-0 flex items-center space-x-1">
              <dt className="text-sky-500">
                <span className="sr-only">Star rating</span>
                <svg width="16" height="20" fill="currentColor">
                  <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                </svg>
              </dt>
              <dd>{movie.vote_average}</dd>
            </div>

            <div className="ml-2">
              <dt className="sr-only">Year</dt>
              {dodo()}
            </div>
            <div>
              <dt className="sr-only">Genre</dt>
              <dd className="flex items-center">
                <svg width="2" height="2" fill="currentColor" className="mx-2 text-slate-300" aria-hidden="true">
                  <circle cx="1" cy="1" r="1" />
                </svg>
                {genre()}
              </dd>
            </div>

            {/* <div>
              <dt className="sr-only">Runtime</dt>
              <dd className="flex items-center">
                <svg width="2" height="2" fill="currentColor" className="mx-2 text-slate-300" aria-hidden="true">
                  <circle cx="1" cy="1" r="1" />
                </svg>
                {movie.runtime}
              </dd>
            </div> */}
            <div className="flex-none w-full mt-2 font-normal">
              <dt className="sr-only">Cast</dt>
              <dd className="text-slate-400">{movie.cast}</dd>
            </div>
            <div className=' bg-slate-900 my-2 xl:text-base w-32 h-8 rounded-lg hover:bg-white transition-all'>
            
              <a
               href={movie.release_date?`/movie/${movie.id}`:`/tv/${movie.id}`}
               className='no-underline w-full'>

            <button className='bg-red text-white w-full h-8 text-sm hover:text-black border-2'>
            more info
            </button>

              </a>
        </div>
          </dl>
        </div>
      </article>
    )
  }
  