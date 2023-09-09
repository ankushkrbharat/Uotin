import React from 'react'
import Header from './Header'
import chart from './account1.png'

const Homepage = () => {
  return (
    <div><Header/>
    <div className='w-full h-screen flex'>
      <div className="w-full">zz</div>
      <div className="w-full"><img src={chart} alt="chart"  /></div>
    </div>
    </div>
  )
}

export default Homepage