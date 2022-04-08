import React from 'react'

function HeroSliderItem({movie}) {
    const th= (x)=>{
        if(x.overview.length>190){
          return x.overview.slice(0,185) + '...'
        }else{
          return x.overview
        }
    
      }
      console.log(movie)

      const dodo=()=>{
          if(movie){
              return(
                <div className='h-full w-full flex flex-row  '>
                <div className='h-full w-1/2 rounded-lg lg:w-1/4 md:w-2/5 bg-contain bg-no-repeat mr-2' style={{ backgroundImage: `url(https://image.tmdb.org/t/p/w780/${movie.poster_path})` }}></div>
                  <div className='h-full w-full '>
                    <div className='mb-3 m-3'>{!movie.overview?<div className=' animate-pulse rounded-sm bg-slate-200 h-4 w-20'></div>:<p className='font-serif text-lg sm:text-xl'>{movie.title}</p>}
                    <div className='flex'>
                    <p className='text-sm sm:text-lg mr-2'>{movie.vote_average}</p>
                    <dt className="text-sky-500">
                <span className="sr-only">Star rating</span>
                <svg width="20" height="20" fill="currentColor">
                  <path d="M7.05 3.691c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.372 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.539 1.118l-2.8-2.034a1 1 0 00-1.176 0l-2.8 2.034c-.783.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.363-1.118L.98 9.483c-.784-.57-.381-1.81.587-1.81H5.03a1 1 0 00.95-.69L7.05 3.69z" />
                </svg>
              </dt>

                    </div>
                    </div>
                    
                    <p className='mb-2 text-sm sm:text-lg'>overview :</p><p className='mb-2 text-xs w-11/12 break-normal sm:text-sm'>{th(movie)}</p>
                    <div className='flex justify-center bg-slate-900 my-2 xl:text-base w-32 h-8 rounded-lg hover:bg-white transition-all'>
                        
            
                          <a
                           href={`/movie/${movie.id}`}
                           className='no-underline w-full'>
                            <button className='bg-red text-white w-full h-8 text-sm hover:text-black border-2'>more info</button>
            
                        
                          </a>
            
                        
                    </div>
                    </div>
                </div>

              )
          }else{
              return (null)
          }
      }
      
  return (
      <>
      {dodo()}
      </>

  )
}

export default HeroSliderItem