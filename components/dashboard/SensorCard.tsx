type Props = {
  title: string
  value: string
  color: string
}

export default function SensorCard({ title, value, color }: Props) {
  return (
    <div className="bg-[#162B25] p-6 rounded-2xl w-60 text-center">
      <h3 className="text-gray-400 text-sm">{title}</h3>

      <div className={`text-3xl font-bold mt-2 ${color}`}>
        {value}
      </div>
    </div>
  )
}