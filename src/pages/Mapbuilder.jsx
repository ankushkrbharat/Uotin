import React, { useState } from 'react'
import Header from './Header'
import Footer from './Footer'
import { Link } from 'react-router-dom'
import rm from "./rm.png"
import rp from "./rp.png"

const Mapbuilder = () => {

  const [open,setOpen]=useState(false);

  return (
    <div><Header/>
    <div className="flex flex-col justify-center p-5">
    <h1 className="text-7xl text-center">Select Your Location</h1>
    <div className='flex m-2 justify-center'><Link onClick={(e)=>{setOpen(!open)}} className="bg-primary hover:bg-secondary rounded-md px-5 m-2 py-2">Rourkela</Link></div>
    {open?
    <div className="flex align-middle items-center justify-center"><div className="w-[300px] hover:scale-110 m-2 transition-all ease in"><Link to={'/canvas1'}><img src={rm} alt="rb" /></Link></div>
    <div className="w-[300px] hover:scale-110 m-2 transition-all ease in"><Link to={'/canvas2'}><img src={rp} alt="rs" /></Link></div>
    </div>:""}
    </div><Footer/></div>
  )
}

export default Mapbuilder