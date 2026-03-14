"use client"
import { useState } from "react"

export default function PumpControl() {
  const [on, setOn] = useState(false)

  return (
    <div className="bg-[#162B25] p-6 rounded-2xl w-60 text-center">
      <h3 className="text-gray-400 text-sm mb-4">
        Pump Control
      </h3>

      <button
        onClick={() => setOn(!on)}
        className={`px-6 py-2 rounded-lg font-bold ${
          on ? "bg-green-500 text-black" : "bg-red-500 text-white"
        }`}
      >
        {on ? "ON" : "OFF"}
      </button>
    </div>
  )
}