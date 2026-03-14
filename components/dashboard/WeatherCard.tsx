export default function WeatherCard() {
  return (
    <div className="bg-[#162B25] p-6 rounded-2xl w-60 text-center">
      <h3 className="text-gray-400 text-sm">Weather</h3>

      <div className="text-3xl mt-3">
        ☀️
      </div>

      <div className="text-xl font-bold mt-2">
        32°C
      </div>

      <p className="text-gray-400 text-sm">
        Pune, India
      </p>
    </div>
  )
}