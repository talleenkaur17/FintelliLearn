import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import Header from "../Header/header";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const InflationCalculator = () => {
  const [amount, setAmount] = useState(0);
  const [inflationRate, setInflationRate] = useState(0);
  const [years, setYears] = useState(0);
  const [futureValue, setFutureValue] = useState(null);
  const [graphData, setGraphData] = useState(null);

  const calculateFutureValue = (e) => {
    e.preventDefault();
    const rate = inflationRate / 100;
    const fv = amount * Math.pow(1 + rate, years);
    setFutureValue(fv.toFixed(2));

    // Generate data for graph
    let yearlyValues = [];
    for (let i = 0; i <= years; i++) {
      yearlyValues.push(amount * Math.pow(1 + rate, i));
    }
    setGraphData({
      labels: Array.from({ length: years + 1 }, (_, i) => i),
      datasets: [
        {
          label: "Future Value Over Time",
          data: yearlyValues,
          borderColor: "rgb(75, 192, 192)",
          backgroundColor: "rgba(75, 192, 192, 0.2)",
        },
      ],
    });
  };

  return (
    <div>
      <Header />
      <div className="App min-h-screen flex flex-col items-center justify-center bg-gray-100">
        <header className="text-center p-6 bg-blue-600 text-white w-full">
          <h1 className="text-3xl font-bold">Inflation Calculator</h1>
        </header>
        <main className="flex flex-col items-center p-6 bg-white rounded shadow-md mt-6">
          <form
            onSubmit={calculateFutureValue}
            className="flex flex-col items-center space-y-4"
          >
            <div className="flex items-center space-x-2">
              <label className="font-semibold">Initial Amount:</label>
              <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(Number(e.target.value))}
                required
                className="border px-2 py-1 rounded"
              />
            </div>
            <div className="flex items-center space-x-2">
              <label className="font-semibold">
                Annual Inflation Rate (%):
              </label>
              <input
                type="number"
                value={inflationRate}
                onChange={(e) => setInflationRate(Number(e.target.value))}
                required
                className="border px-2 py-1 rounded"
              />
            </div>
            <div className="flex items-center space-x-2">
              <label className="font-semibold">Number of Years:</label>
              <input
                type="number"
                value={years}
                onChange={(e) => setYears(Number(e.target.value))}
                required
                className="border px-2 py-1 rounded"
              />
            </div>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-600 text-white rounded shadow"
            >
              Calculate
            </button>
          </form>
          {futureValue !== null && (
            <div className="mt-6">
              <h2 className="text-xl font-bold">
                Future Value: ${futureValue}
              </h2>
            </div>
          )}
          {graphData && (
            <div className="mt-6 w-full max-w-3xl">
              <Line
                data={graphData}
                options={{ responsive: true, maintainAspectRatio: false }}
              />
            </div>
          )}
        </main>
      </div>
    </div>
  );
};

export default InflationCalculator;
