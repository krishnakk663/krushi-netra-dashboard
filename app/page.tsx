import Sidebar from "@/components/Sidebar"
import MoistureGauge from "@/components/dashboard/MoistureGauge"
import SensorCard from "@/components/dashboard/SensorCard"
import PumpControl from "@/components/dashboard/PumpControl"
import WeatherCard from "@/components/dashboard/WeatherCard"
import AIInsight from "@/components/dashboard/AIInsight"
import SensorChart from "@/components/dashboard/SensorChart"
export default function Home() {
  return (
    <div className="flex">

      <Sidebar />

      <main className="flex-1 bg-[#0F231D] text-white p-10">

        <h1 className="text-4xl font-bold mb-10">
          Dashboard
        </h1>

        <div className="flex flex-wrap gap-10">

          <MoistureGauge />

          <SensorCard
            title="Temperature"
            value="28°C"
            color="text-yellow-400"
          />

          <SensorCard
            title="Humidity"
            value="72%"
            color="text-blue-400"
          />

          <PumpControl />

          <WeatherCard />

          <AIInsight />

          <SensorChart />npm run dev

        </div>

      </main>

    </div>
  )
}