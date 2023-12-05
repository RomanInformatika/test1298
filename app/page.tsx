"use client"
import Image from 'next/image'
import { useState } from 'react'
import { FaStarOfLife } from "react-icons/fa6";
export default function Home() {
  const [number, setNumber] = useState(0)
  const increaseNumber = () => {


  }

  return (
    <div className='flex flex-col bg-slate-600 w-full h-screen'>
      <div className='bg-zinc-500 h-1/5'></div>
      <div className='bg-neutral-300 h-full'>
        <div className='flex flex-row h-20 justify-between'>
          <button onClick={() => increaseNumber()}
            className="flex flew-row justify-center items-center  px-5 min-w-[30%] py-3 m-2 text-white duration-150 bg-indigo-600 rounded-lg hover:bg-indigo-700 active:shadow-lg"
          >
  
            <FaStarOfLife   />
          
          </button>
          <button onClick={() => increaseNumber()}
            className="px-2  min-w-[30%] py-2 m-2 text-white duration-150 bg-indigo-600 rounded-lg hover:bg-indigo-700 active:shadow-lg"
          >
            Button
          </button>
          <button onClick={() => increaseNumber()}
            className="px-2 min-w-[30%] py-3 m-2 text-white duration-150 bg-indigo-600 rounded-lg hover:bg-indigo-700 active:shadow-lg"
          >
            Button
          </button>

        </div>




      </div>

    </div>
  )
}



{/* <button onClick={() => increaseNumber()}
        className="px-5 py-3 text-white duration-150 bg-indigo-600 rounded-lg hover:bg-indigo-700 active:shadow-lg"
      >
        Button
      </button> */}