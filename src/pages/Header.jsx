import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className=" w-full sm:box-border flex justify-between p-3 bg-white items-center h-30 max-md:justify-between">
      <div className="flex items-center mx-6">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="#000"
          class="w-6 h-6"
        >
          <path d="M12.378 1.602a.75.75 0 00-.756 0L3 6.632l9 5.25 9-5.25-8.622-5.03zM21.75 7.93l-9 5.25v9l8.628-5.032a.75.75 0 00.372-.648V7.93zM11.25 22.18v-9l-9-5.25v8.57a.75.75 0 00.372.648l8.628 5.033z" />
        </svg>

        <div className="text-2xl text-black"> Uotin</div>
      </div>
      <div className="md:hidden"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
  <path fill-rule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clip-rule="evenodd" />
</svg>
</div>
      <div className="box-border h-11 text-xl bg-primary rounded-full p-2 px-6 gap-2 items-center max-md:hidden ">
        <Link
          to={"/"}
          className="text-dark  mx-4 hover:text-[22px] transition-all ease-in"
        >
          Home
        </Link>
        <Link
          to={"/marksheet"}
          className="text-dark  mx-4 hover:text-[22px] transition-all ease-in"
        >
          MarkSheet{" "}
        </Link>
        <Link
          to={"/report"}
          className="text-dark  mx-4 hover:text-[22px] transition-all ease-in "
        >
          Report Card{" "}
        </Link>
        <Link
          to={"/add"}
          className="text-dark  mx-4 hover:text-[22px] transition-all ease-in"
        >
          {" "}
          Add
        </Link>
      </div>
      <div className="text-2xl mx-5 text-balck max-md:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="w-8 h-8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M7.217 10.907a2.25 2.25 0 100 2.186m0-2.186c.18.324.283.696.283 1.093s-.103.77-.283 1.093m0-2.186l9.566-5.314m-9.566 7.5l9.566 5.314m0 0a2.25 2.25 0 103.935 2.186 2.25 2.25 0 00-3.935-2.186zm0-12.814a2.25 2.25 0 103.933-2.185 2.25 2.25 0 00-3.933 2.185z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Header;
