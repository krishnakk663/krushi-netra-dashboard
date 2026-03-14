"use client"
import { useEffect, useState } from "react"

export default function MoistureGauge() {
  const [moisture, setMoisture] = useState(60)

  const radius = 80
  const stroke = 10
  const normalizedRadius = radius - stroke * 2
  const circumference = normalizedRadius * 2 * Math.PI

  useEffect(() => {
    const interval = setInterval(() => {
      setMoisture((prev) => {
        let v = prev + (Math.random() * 6 - 3)
        v = Math.max(30, Math.min(90, v))
        return Math.round(v)
      })
    }, 2000)

    return () => clearInterval(interval)
  }, [])

  const strokeDashoffset =
    circumference - (moisture / 100) * circumference

  return (
    <div className="bg-[#162B25] p-10 rounded-2xl text-center w-[320px]">
      <h2 className="text-gray-300 mb-6">Soil Moisture</h2>

      <svg height={radius * 2} width={radius * 2}>
        <circle
          stroke="#1f3d36"
          fill="transparent"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />

        <circle
          stroke="#06E09B"
          fill="transparent"
          strokeWidth={stroke}
          strokeDasharray={`${circumference} ${circumference}`}
          style={{ strokeDashoffset }}
          strokeLinecap="round"
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          transform={`rotate(-90 ${radius} ${radius})`}
        />

        <text
          x="50%"
          y="50%"
          dominantBaseline="middle"
          textAnchor="middle"
          className="fill-white text-2xl font-bold"
        >
          {moisture}%
        </text>
      </svg>

      <p className="mt-4 text-green-400">Green Zone</p>
    </div>
  )
}