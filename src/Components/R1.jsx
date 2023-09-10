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
  return (
    <div>
      <Header />
      <div>
        <div className="flex justify-center"><input type="color" onChange={(e)=>{setColor(e.target.value)}}  value={color}/></div>
        <div className="relative"><div className="canvas1"><img src={RM} alt="img" className="w-screen" /></div>
        <div className="absolute top-0 left-0" style={{width:widthc,height:heightc}}></div></div>

      </div>
      <Footer />
    </div>
  );
};

export default R1;
