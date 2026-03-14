"use client"

import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement
} from "chart.js"

import { Line } from "react-chartjs-2"

ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement)

export default function SensorChart() {

  const data = {
    labels: ["6AM", "8AM", "10AM", "12PM", "2PM", "4PM"],
    datasets: [
      {
        label: "Soil Moisture",
        data: [70, 68, 65, 60, 58, 63],
        borderColor: "#06E09B",
        backgroundColor: "#06E09B33",
        tension: 0.4
      }
    ]
  }

  return (
    <div className="bg-[#162B25] p-6 rounded-2xl w-[600px]">
      <h3 className="text-gray-300 mb-4">Moisture History</h3>

      <Line data={data} />
    </div>
  )
}