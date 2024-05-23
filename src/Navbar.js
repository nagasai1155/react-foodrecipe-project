import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';



export default function Navbar({onSearch}) {
    const [query,setQuery] = useState("")
  return (
    <div className='navbar'>
        {/* <h1 className='text-primary'>Nagasai  MovieTB</h1> */}
        <ul className='nav'>
            <button className='btn btn-success'>
            <li>
                <Link to="/" >Home</Link>
            </li>
            </button>
           <button className='btn btn-success'>
           <li>
                <Link to="/movies" >Movie</Link>
            </li>
           </button>
            <button className='btn btn-success'>
            <li>
                <Link to="/tv">Tv</Link>
            </li>
            </button>
           <button className='btn btn-success'>
           <li>
                <Link to="/favMov"  >Movie Library</Link>
            </li>
           </button>
            <button className='btn btn-success'>
            <li>
                <Link to="/favTv"  >Tv Library</Link>
            </li>
            </button>
        </ul>
        <div className='search'>
            <input type="text" placeholder='search here' onChange={(e)=>setQuery(e.target.value)}/>
            <button className =' btn btn-danger'  onClick={()=>onSearch(query)}>Search</button>
        </div>
    </div>


  )
}
