import React from "react";
import Header from "./Header";
import chart from "./account1.png";
import { Link } from "react-router-dom";
import Footer from "./Footer";

const Homepage = () => {
  return (
    <div>
      <Header />
      <div className="flex max-lg:flex-col p-6">
        <div className="md:w-3/7 max-md:w-full gap-3 items-center">
          <h1 className="text-8xl ">
            <span className="text-secondary">Visualise</span>
            <br />
            <span>
              Your 
              <br />
              City Insights
            </span>
          </h1>
          <p className="w-4/11 max-md:w-full mt-6">
            Explore Your city and ask <span className="font-bold">Questions</span>  to people and <span className="font-bold">plot</span> them on Map.
            Explore your <span className="font-bold">city's pulse</span>  with our platform. <span className="font-bold">Conduct surveys, gather data, and create dynamic maps</span> that showcase your findings, making your city come alive in just a few clicks.
          </p>
          <div className="flex gap-2 py-2 rounded-full items-center text-l mt-6">
            <Link
              to={"/createmap"}
              className="flex gap-2 bg-primary px-5 py-2 rounded-full items-center text-3xl hover:bg-secondary"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                class="w-6 h-6"
              >
                <path
                  fill-rule="evenodd"
                  d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z"
                  clip-rule="evenodd"
                />
                <path
                  fill-rule="evenodd"
                  d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z"
                  clip-rule="evenodd"
                />
              </svg>

              <div>Build Map</div>
            </Link>
            <p className="hover:text-opacity-75 text-dark cursor-pointer hover:underline">
              Read more About us
            </p>
          </div>
        </div>
        <div className="w-full">
          <img src={chart} alt="chart" />
        </div>
      </div>{" "}
      <Footer />
    </div>
  );
};

export default Homepage;
