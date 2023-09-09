import React from "react";
import Header from "./Header";
import Line from "./line.png";
import Bar from "./barchart.png";
import Pie from "./pie.png";
import Scatter from "./scatter.png";
import Area from "./area.png";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Create = () => {
  return (
    <div>
      <Header />
      <div className="flex flex-col"><h1 className="text-6xl ">Percentage charts</h1>
      <div className="p-6 grid grid-flow-row-dense md:grid-cols-3 md:grid-rows-1 sm:grid-cols-2 sm:grid-rows-2  gap-9   ">
       
       <div to='/linechart' className="p-3 hover:scale-110 transition-all ease-in">
        <Link className="items-center w-[300px]" to={'/linechart'}>
          <img src={Line} alt="line-chart" className="" />
          <Link className="flex gap-2 items-center bg-primary px-5 py-2 rounded text-3xl hover:bg-secondary align-middle">
            <div className=" flex items-center w-full align-middle justify-center">
              Line Chart
            </div>
          </Link>
        </Link>
        </div>
        </div>
      </div>
      <div className="p-6 grid grid-flow-row-dense md:grid-cols-3 md:grid-rows-2     sm:grid-cols-2 sm:grid-rows-2  gap-9   ">
       
       <div to='/linechart' className="p-3 hover:scale-110 transition-all ease-in">
        <Link className="items-center w-[300px]" to={'/linechart'}>
          <img src={Line} alt="line-chart" className="" />
          <Link className="flex gap-2 items-center bg-primary px-5 py-2 rounded text-3xl hover:bg-secondary align-middle">
            <div className=" flex items-center w-full align-middle justify-center">
              Line Chart
            </div>
          </Link>
        </Link>
        </div>
        <div className="p-3 hover:scale-110 transition-all ease-in">
        <Link className="items-center w-[300px]" to={'/barchart'}>
          <img src={Bar} alt="line-chart" className="" />
          <Link className="flex gap-2 items-center bg-primary px-5 py-2 rounded text-3xl hover:bg-secondary align-middle">
            <div className=" flex items-center w-full align-middle justify-center">
              Bar Chart
            </div>
          </Link>
        </Link>
        </div>
        <div className="p-3 hover:scale-110 transition-all ease-in">
        <Link className="items-center w-[300px]" to={'/areachart'}>
          <img src={Area} alt="line-chart" className="" />
          <Link className="flex gap-2 items-center bg-primary px-5 py-2 rounded text-3xl hover:bg-secondary align-middle">
            <div className=" flex items-center w-full align-middle justify-center">
              Area Chart
            </div>
          </Link>
        </Link>
        </div>
        <div className="p-3 hover:scale-110 transition-all ease-in">
        <Link className="items-center w-[300px] " to={'/scatterchart'}>
          <img src={Scatter} alt="line-chart" className="" />
          <Link className="flex gap-2 items-center bg-primary px-5 py-2 rounded text-3xl hover:bg-secondary align-middle">
            <div className=" flex items-center w-full align-middle justify-center">
              Scatter Chart
            </div>
          </Link>
        </Link>
        </div>
        <div className="p-3 hover:scale-110 transition-all ease-in">
        <Link className="items-center w-[300px]" to={'/piechart'}>
          <img src={Pie} alt="line-chart" className="" />
          <Link className="flex gap-2 items-center bg-primary px-5 py-2 rounded text-3xl hover:bg-secondary align-middle">
            <div className=" flex items-center w-full align-middle justify-center">
              Pie Chart
            </div>
          </Link>
        </Link>
        </div>

        

      </div>
      <Footer/>
    </div>
  );
};

export default Create;
