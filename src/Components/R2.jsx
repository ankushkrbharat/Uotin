
import Header from "../pages/Header";;
import Footer from "../pages/Footer";
import React from 'react'
import RS from './rp.png'


// Render the div elements
const R2 = () => {




  const widthc = window.innerWidth;
  // const heightc=window.innerHeight;
  const heightc = widthc * (683.35 / 1151.2);
  const size = Math.floor(widthc / 50);//each pixel
  const t = Math.floor(heightc / size);//no of vertical cells


  const cells = [];
  for (let i = 0; i < t; i++) {
    cells.push(<tr><td width={size} height={heightc} id={`${i}1`} style={{opacity:0.4}}></td></tr>)
    
  }
    
  
  return (
    <div><Header /><div><div className="flex justify-center"><input type="color" /></div>
      <div className="relative"><div className="canvas2"><img src={RS} alt="img" className="w-screen" /></div>
        <table className="absolute top-0 left-0 " style={{ width: widthc, height: heightc }}><tr className="left-0"><td width={size} height={size}  style={{opacity:0.4}}>f</td></tr></table></div>
    </div><Footer /></div>
  )
}

export default R2;