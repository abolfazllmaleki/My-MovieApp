import React from 'react'

function Trailer({ukey}) {
  return (
    <div>
        <a href={`https://www.youtube.com/watch?v=${ukey}`}>
            
            watch trailer
        </a>

    </div>
  )
}

export default Trailer