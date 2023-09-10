import React, { useState } from "react";
import Header from "../pages/Header";
import Footer from "../pages/Footer";
import "./R1.css"
import RM from "./rm.png"

const R1 = () => {

  const [color, setColor]=useState("#000")
  const widthc=window.innerWidth;
  // const heightc=window.innerHeight;
  const heightc=widthc*(683.35/1151.2)
 const size=Math.floor(widthc/50);
 const t=Math.floor(heightc/size)
 
  const div2=[]

  for (let i = 50; i < 50+t; i++) {
    div2.push(<div key={i} style={{width:size,height:size}} >s</div>);
  }

  const n=50  // Change this to the number of divs you want to insert
  const divs = [];

  for (let i = 0; i < n; i++) {
    divs.push(<div key={i} style={{width:size,height:size}} >{div2}</div>);
  }

  

  return (
    <div>
      <Header />
      <div>
        <div className="flex justify-center"><input type="color" onChange={(e)=>{setColor(e.target.value)}}  value={color}/></div>
        <div className="relative"><div className="canvas1"><img src={RM} alt="img" className="w-screen" /></div>
        <div className="absolute top-0 left-0 flex" style={{width:widthc,height:heightc}}>{divs}</div></div>

      </div>
      <Footer />
    </div>
  );
};

export default R1;
