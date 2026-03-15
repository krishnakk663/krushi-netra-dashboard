"use client"

import { useRouter } from "next/navigation"

export default function Home() {

  const router = useRouter()

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0F172A] text-white">

      <h1 className="text-5xl font-bold mb-6">
        🌱 Krushi Netra
      </h1>

      <p className="text-gray-400 text-lg mb-10">
        AI + IoT Monitoring System
      </p>

      <button
        onClick={() => router.push("/login")}
        className="bg-green-500 px-6 py-3 rounded-lg"
      >
        Open Dashboard
      </button>

    </div>
  )
}