import React from "react";
import Header from "./Header";
import chart from "./account1.png";

const Homepage = () => {
  return (
    <div>
      <Header />
      <div className="w-full h-screen flex p-6">
        <div className="w-3/7 gap-3 items-center">
          <h1 className="text-8xl ">
            <span className="text-secondary">Create</span>
            <br />
            <span>
              Data
              <br />
              Visualisation
            </span>
          </h1>
          <p className="w-4/11 mt-6">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odio vel
            et necessitatibus hic incidunt repellendus. Ex dicta esse eaque,
            quos velit quam soluta. Nam excepturi nihil modi delectus.
            Cupiditate, magni?
          </p>
          <div className="flex gap-2 py-2 rounded-full items-center text-l mt-6">
          <button className="flex gap-2 bg-primary px-5 py-2 rounded-full items-center text-3xl ">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
  <path fill-rule="evenodd" d="M2.25 13.5a8.25 8.25 0 018.25-8.25.75.75 0 01.75.75v6.75H18a.75.75 0 01.75.75 8.25 8.25 0 01-16.5 0z" clip-rule="evenodd" />
  <path fill-rule="evenodd" d="M12.75 3a.75.75 0 01.75-.75 8.25 8.25 0 018.25 8.25.75.75 0 01-.75.75h-7.5a.75.75 0 01-.75-.75V3z" clip-rule="evenodd" />
</svg>



            <div>Create</div>
          </button>
          <p>Read more About us</p>
        </div></div>
        <div className="w-full">
          <img src={chart} alt="chart" />
        </div>
      </div>
    </div>
  );
};

export default Homepage;
