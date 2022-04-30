import { useState } from "react";

export default function List({ children }) {

  const [load,setload]=useState(true)

  const minLoadTime=()=>{
    setTimeout(() => {
      setload(false)
    }, 1500);
  }
  minLoadTime()

    return (
      <>
      {load?
        <div className="flex justify-center">

<div class="flex justify-center items-center">
  <div class="spinner-border animate-spin inline-block w-8 h-8 border-4 rounded-full" role="status">
    <span class="visually-hidden">.</span>
  </div>
</div>
        </div>

        :<ul className="divide-y divide-slate-100">
      {children}
    </ul>}
      </>

    )
  }