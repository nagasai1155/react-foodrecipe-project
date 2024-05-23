import React from 'react'
import { useNavigate } from 'react-router-dom'
import use from './pngtree-8-.jpg'
export default function Home() {
    const navigate = useNavigate()
  return (
    <>
   
    <div className='home'>
      
      
     
        <button className =' btn btn-primary' onClick={()=>navigate("/movies")}>Movies</button>
        <button className =' btn btn-danger' onClick={()=>navigate("/tv")}>TV</button>
    </div>

    </>
  )
}
