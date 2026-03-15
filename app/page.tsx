"use client"

import { useRouter } from "next/navigation"

export default function Home() {

  const router = useRouter()

  return (
    <div className="min-h-screen bg-[#0F172A] text-white flex flex-col items-center justify-center">

      <h1 className="text-5xl font-bold mb-6">
        🌱 Krushi Netra
      </h1>

      <p className="text-gray-400 text-xl mb-10 text-center max-w-xl">
        AI + IoT Monitoring System for Smart Agriculture and Forest Fire Detection
      </p>

      <button
        onClick={() => router.push("/login")}
        className="bg-green-500 px-8 py-4 rounded-xl text-lg font-bold hover:bg-green-600 transition"
      >
        Open Dashboard
      </button>

    </div>
  )
}