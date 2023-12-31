import React, { useEffect, useState } from "react";
import Header from "../pages/Header";
import Footer from "../pages/Footer";
import "./R1.css"
import RM from "./rm.png"

const R1 = () => {

  const [color, setColor]=useState("#999");
  

  const widthc=window.innerWidth;
  // const heightc=window.innerHeight;
  const heightc=widthc*(683.35/1151.2)
 const size=Math.floor(widthc/50);
 const t=Math.floor(heightc/size)
 const [sid, SetSid]=useState()

 

  const div2=[];
  const [c,setC]=[];

  for (let i = 0; i < t; i++) {
    const colorset=(e)=>{
      
      }
    div2.push(<div key={i} style={{width:size,height:size,opacity:0.2,backgroundColor:""}} className="border hover:scale-125 hover:bg-secondary transition-all ease-in" onClick={(e)=>{style.backgroundColor=color}} id={`${i}t`} ></div>);
  
  }

  const n=50  // Change this to the number of divs you want to insert
  const divs = [];

  for (let i = 0; i < n; i++) {

    divs.push(<div style={{width:size,height:size}} id={`${i}d`} >{div2}</div>);
  }


  for (let i = 0; i < n; i++) {
    const outerdiv = document.getElementById(`#${i}d`)
    for (let i = 0; i <t ; i++) {
      const innerdiv = document.getElementById(`#${i}t`);
      
    }
  }
  // const rows = t;
  // const cols = 50;
  // const divs = [];

  // // Generate a grid of divs with unique IDs
  // for (let row = 0; row < rows; row++) {
  //   for (let col = 0; col < cols; col++) {
  //     const id = `${row}${col}`;
  //     divs.push(
  //       <div
  //         key={id}
  //         id={id}
  //         style={{
  //           width:size, // Set the width of each square
  //           height:size, // Set the height of each square
  //           backgroundColor:color, // Set the background color
  //           border: '1px solid black',
  //           opacity:0.4 // Set the border
  //         }}
  //         className="flex"
  //       ></div>
  //     );
  //   }
  // }

  

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
