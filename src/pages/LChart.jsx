import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Chart } from "react-google-charts";

export const data = [
  ["Year", "Sales", "Expenses"],
  ["2004", 1000, 400],
  ["2005", 1170, 460],
  ["2006", 660, 1120],
  ["2007", 1030, 540],
];

export const options = {
  title: "Company Performance",
  curveType: "function",
  legend: { position: "bottom" },
};


const LChart = () => {
  return (
    <div>
      <Header/>
    <div>
    <div className=" bg-littlegray rounded h-full  absolute left-3/4 right-0 drop-shadow-md w-fit">
          <div className="h-auto flex flex-col items-center p-2 gap-2">
            <label>Title</label>
            <input
              type="text"
              value={options.title}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              
            />
            </div>
            </div>
            
    <Chart
      chartType="LineChart"
      width="100%"
      height="400px"
      data={data}
      options={options}
    />
    </div>
    <Footer/></div>
  )
}

export default LChart;