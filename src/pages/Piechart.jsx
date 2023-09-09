import React from 'react'
import Header from './Header'
import Footer from './Footer'
import { Chart } from "react-google-charts";

export const data = [
  ["Task", "Hours per Day"],
  ["Work", 11],
  ["Eat", 2],
  ["Commute", 2],
  ["Watch TV", 2],
  ["Sleep", 7],
];

export const options = {
  title: "My Daily Activities",
};

const Piechart = () => {
  return (
    <div><Header/>
    <div><Chart
      chartType="PieChart"
      data={data}
      options={options}
      width={"100%"}
      height={"400px"}
    /></div><Footer/></div>
  )
}

export default Piechart