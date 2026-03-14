export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-[#111816] text-white p-6">

      <h1 className="text-2xl font-bold text-green-400 mb-10">
        Krushi Netra
      </h1>

      <ul className="space-y-6 text-gray-300">

        <li className="hover:text-white cursor-pointer">
          Dashboard
        </li>

        <li className="hover:text-white cursor-pointer">
          Irrigation
        </li>

        <li className="hover:text-white cursor-pointer">
          Analytics
        </li>

        <li className="hover:text-white cursor-pointer">
          Crops
        </li>

        <li className="hover:text-white cursor-pointer">
          Settings
        </li>

      </ul>

    </div>
  )
}