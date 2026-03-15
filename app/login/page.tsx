"use client"

import { useRouter } from "next/navigation"
import { useState } from "react"

export default function LoginPage() {

  const router = useRouter()

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleLogin = () => {

    if(email === "admin@krushi.com" && password === "1234"){
      router.push("/dashboard")
    } else {
      alert("Invalid credentials")
    }

  }

  return (

    <div className="min-h-screen flex items-center justify-center bg-[#0F172A] text-white">

      <div className="bg-[#1E293B] p-10 rounded-xl w-[350px]">

        <h1 className="text-2xl font-bold mb-6 text-center">
          Krushi Netra Login
        </h1>

        <input
          className="w-full p-3 mb-4 rounded bg-gray-800"
          placeholder="Email"
          onChange={(e)=>setEmail(e.target.value)}
        />

        <input
          type="password"
          className="w-full p-3 mb-6 rounded bg-gray-800"
          placeholder="Password"
          onChange={(e)=>setPassword(e.target.value)}
        />

        <button
          onClick={handleLogin}
          className="w-full bg-green-500 p-3 rounded font-bold"
        >
          Login
        </button>

      </div>

    </div>

  )
}