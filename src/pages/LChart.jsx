import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Chart } from "react-google-charts";





const LChart = () => {




const [options,setOptions]=useState({
  title: "Company Performance",
  curveType: "function",
  legend: { position: "bottom" }});

const [data,setData]=useState([
  ["Year", "Sales", "Expenses"],
  ["2004", 1000, 400],
  ["2005", 1170, 460],
  ["2006", 660, 1120],
  ["2007", 1030, 540],
])


const [x,setX]=useState([])
const [val3,setVal3]=useState()
const [val1,setval1]=useState()
const [val2,setval2]=useState()

const addRow = () => {
  const newRow = [val1, val2,val3];
  const newRow2 = [x[0], x[1],x[2]];

  if (data[0][0] !== "" && data[0][1] !== ""&&data[0][2] !== "") {
    setData([...data, newRow2]);
  } else {
    setData([...data, newRow]);
  }
};


  return (
    <div>
      <Header />
      <div className="flex">
      
    <div className="w-3/4">
        <Chart
          chartType="LineChart"
          width="100%"
          height="400px"
          data={data}
          options={options}
        /></div>
        <div>
        <div className=" bg-littlegray rounded h-fit  absolute left-3/4 right-0 drop-shadow-md w-fit">
          <div className="h-auto flex flex-col items-center p-2 gap-2">
            <label>Title</label>
            <input
              type="text"
              value={options.title}
              onChange={(e)=>{
                setOptions({...options,title:e.target.value})
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
          </div>
          <table>
              <thead>
                <tr>
                  <th>{data[0][0]}</th>
                  <th>{data[0][1]}</th>
                </tr>
              </thead>
              <tbody>
                {data.map((row, index) => (
                  <tr key={index}>
                    {row.map((cell, cellIndex) => (
                      <td key={cellIndex}>{cell}</td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>

          <label>Set X-axis,first chart label ,second chart label</label>
            <input
              type="text"
              value={x}
              onChange={(e)=>{
                setX(...x,e.target.value)
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <input
              type="text"
              value={x}
              onChange={(e)=>{
                setX(...x,e.target.value)
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <input
              type="text"
              value={x}
              onChange={(e)=>{
                setX(...x,e.target.value)
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
             
             <label>Value 1</label>
            <input
              type="text"
              value={val1}
              onChange={(e)=>{
                setval1(e.target.value)
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
             <label>Val 2</label>
            <input
              type="text"
              value={val2}
              onChange={(e)=>{
                setval2(e.target.value)
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <label>Val 3</label>
            <input
              type="text"
              value={val3}
              onChange={(e)=>{
                setVal3(e.target.value)
              }}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
            />
            <button className="flex gap-2 bg-primary px-5 py-2 rounded-full items-center text-3xl hover:bg-secondary" onClick={addRow}>Add Row</button>
          
        </div>
      </div>
      </div>
      <Footer />
    </div>
  );
};

export default LChart;
