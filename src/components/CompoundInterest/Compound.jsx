import React, { useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import Header from "../Header/header";

const Compound = () => {
  const [startingBalance, setStartingBalance] = useState("");
  const [annualInterestRate, setAnnualInterestRate] = useState("");
  const [compoundInterval, setCompoundInterval] = useState(12); // Default to monthly
  const [duration, setDuration] = useState("");
  const [durationType, setDurationType] = useState("years"); // Default to years
  const [result, setResult] = useState(null);
  const [chartData, setChartData] = useState([]);

  const calculateCompoundInterest = () => {
    const rate = annualInterestRate / 100;
    const periods =
      durationType === "years" ? duration * compoundInterval : duration;
    const data = [];
    let balance = parseFloat(startingBalance);
    for (let i = 1; i <= periods; i++) {
      balance *= 1 + rate / compoundInterval;
      data.push({ year: i, value: balance.toFixed(2) });
    }
    setResult(balance.toFixed(2));
    setChartData(data);
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="container mx-auto py-8">
        <h1 className="text-3xl font-bold mb-4 text-center p-5">
          Compound Interest Calculator
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-white shadow-md rounded px-8 pt-6 pb-8">
            <h2 className="text-lg font-bold mb-4 text-center">Calculator</h2>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Starting Balance:
              </label>
              <input
                type="number"
                value={startingBalance}
                onChange={(e) => setStartingBalance(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter starting balance"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Annual Interest Rate (%):
              </label>
              <input
                type="number"
                value={annualInterestRate}
                onChange={(e) => setAnnualInterestRate(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter annual interest rate"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Compound Interval:
              </label>
              <select
                value={compoundInterval}
                onChange={(e) => setCompoundInterval(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value={12}>Monthly</option>
                <option value={4}>Quarterly</option>
                <option value={2}>Semi-Annually</option>
                <option value={1}>Annually</option>
              </select>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Duration:
              </label>
              <input
                type="number"
                value={duration}
                onChange={(e) => setDuration(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                placeholder="Enter duration"
              />
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 text-sm font-bold mb-2">
                Duration Type:
              </label>
              <select
                value={durationType}
                onChange={(e) => setDurationType(e.target.value)}
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              >
                <option value="years">Years</option>
                <option value="months">Months</option>
              </select>
            </div>
            <div className="flex items-center justify-center">
              <button
                onClick={calculateCompoundInterest}
                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline mr-2"
              >
                Calculate
              </button>
            </div>
          </div>
          {result && (
            <div className="bg-white shadow-md rounded px-8 pt-6 pb-8">
              <h2 className="text-lg font-bold mb-4 text-center">Result</h2>
              <p className="text-center">Compound Interest Result: {result}</p>
              <div className="flex justify-center">
                <BarChart width={400} height={300} data={chartData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="year" />
                  <YAxis />
                  <Tooltip />
                  <Legend />
                  <Bar dataKey="value" fill="#8884d8" />
                </BarChart>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Compound;
