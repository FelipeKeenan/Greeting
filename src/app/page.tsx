import React from "react";
import { Clock } from "@/components/Clock"
import { Greeting } from "@/components/Greeting"

const Page: React.FC = () => {
  const time = new Date()
  const hour = time.getHours().toString().padStart(2, "0")
  const minutes = time.getMinutes().toString().padStart(2, "0")
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center text-white bg-gradient-to-r from-sky-500 to-indigo-500">
      <Clock hour={hour} minutes={minutes} />
      <Greeting hour={hour} />
    </div>
  )
}

export default Page
