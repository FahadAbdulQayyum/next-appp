import Counter from "@/components/counter";

export default function Home() {

  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <span className="flex text-7xl">
        Count: <Counter />
      </span>
      {/* <span className="flex justify-between"> */}
      <span className="flex space-x-32">
        <button className="bg-orange-400 rounded-lg p-3 px-5">Start</button>
        <button className="bg-red-400 rounded-lg p-3 px-5">Stop</button>
      </span>
    </div>
  )
}