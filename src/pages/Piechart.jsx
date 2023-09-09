import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import { Chart } from "react-google-charts";

const Piechart = () => {
  const [options, setOptions] = useState({ title: "My Daily Activities" });
  const [data, setData] = useState([["", ""]]);
  const [value1, setValue1] = useState("");
  const [value2, setValue2] = useState("");
  const [value3, setValue3] = useState("");
  const [value4, setValue4] = useState("");
  const [temp, setTemp] = useState([]); // Corrected initialization

  const addRow = () => {
    const newRow = [value1, value2];
    const newRow2 = [value3, value4];

    if (data[0][0] !== "" && data[0][1] !== "") {
      setData([...data, newRow2]);
    } else {
      setData([...data, newRow]);
    }
  };

  return (
    <div>
      <Header />

      <div className="w-3/4 flex h-screen ">
        <Chart
          chartType="PieChart"
          data={data}
          options={options}
          width={"100%"}
          height={"400px"}
        />

        <div className=" bg-littlegray rounded h-full  absolute left-3/4 right-0 drop-shadow-md w-fit">
          <div className="h-auto flex flex-col items-center p-2 gap-2">
            <label>Title</label>
            <input
              type="text"
              value={options.title}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => {
                setOptions({ title: e.target.value });
              }}
            />
            <table>
              <thead>
                <tr>
                  <th>Task</th>
                  <th>Hours per Day</th>
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
            <label>Category Title</label>
            <input
              type="text"
              value={value3}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => {
                setValue3(e.target.value);
              }}
            />
            <label>Quantity Title</label>
            <input
              type="text"
              value={value4}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => {
                setValue4(e.target.value);
              }}
            />
            <label>Category</label>
            <input
              type="text"
              value={value1}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => {
                setValue1(e.target.value);
              }}
            />
            <label>Value</label>
            <input
              type="number"
              value={value2}
              className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500"
              onChange={(e) => {
                setValue2(e.target.value);
              }}
            />
            <button className="flex gap-2 bg-primary px-5 py-2 rounded-full items-center text-3xl hover:bg-secondary" onClick={addRow}>Add Row</button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Piechart;
