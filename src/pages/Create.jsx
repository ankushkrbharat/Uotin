import React from "react";
import Header from "./Header";
import Line from "./line.png";
import { Link } from "react-router-dom";

const Create = () => {
  return (
    <div>
      <Header />
      <div className="p-6 grid grid-flow-row-dense md:grid-cols-3 md:grid-rows-3     sm:grid-cols-2 sm:grid-rows-2  gap-9   ">
        <Link className="items-center w-[300px]">
          <img src={Line} alt="line-chart" className="" />
          <Link className="flex gap-2 items-center bg-primary px-5 py-2 rounded text-3xl hover:bg-secondary align-middle">
            <div className=" flex items-center w-full align-middle justify-center">
              Line Chart
            </div>
          </Link>
        </Link>
        <Link className="w-[300px] items-center">
          <img src={Line} alt="line-chart" className="" />
          <Link className="flex gap-2 items-center bg-primary px-5 py-2 rounded text-3xl hover:bg-secondary align-middle">
            <div className=" flex items-center w-full align-middle justify-center">
              Line Chart
            </div>
          </Link>
        </Link>
        <Link className="w-[300px] items-center">
          <img src={Line} alt="line-chart" className="" />
          <Link className="flex gap-2 items-center bg-primary px-5 py-2 rounded text-3xl hover:bg-secondary align-middle">
            <div className=" flex items-center w-full align-middle justify-center">
              Line Chart
            </div>
          </Link>
        </Link>
        <Link className="w-[300px] items-center">
          <img src={Line} alt="line-chart" className="" />
          <Link className="flex gap-2 items-center bg-primary px-5 py-2 rounded text-3xl hover:bg-secondary align-middle">
            <div className=" flex items-center w-full align-middle justify-center">
              Line Chart
            </div>
          </Link>
        </Link>
        <Link className="w-[300px] items-center">
          <img src={Line} alt="line-chart" className="" />
          <Link className="flex gap-2 items-center bg-primary px-5 py-2 rounded text-3xl hover:bg-secondary align-middle">
            <div className=" flex items-center w-full align-middle justify-center">
              Line Chart
            </div>
          </Link>
        </Link>
        <Link className="w-[300px] items-center">
          <img src={Line} alt="line-chart" className="" />
          <Link className="flex gap-2 items-center bg-primary px-5 py-2 rounded text-3xl hover:bg-secondary align-middle">
            <div className=" flex items-center w-full align-middle justify-center">
              Line Chart
            </div>
          </Link>
        </Link>
      </div>
    </div>
  );
};

export default Create;
