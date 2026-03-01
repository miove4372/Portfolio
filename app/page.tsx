"use client"

import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars"
import Darkmode from "@/components/darkmode"
import MainBox from "@/components/mainBox"


export default function Home() {

return (
    <StarsBackground className="relative h-screen w-full flex items-center justify-center" starColor="var(--stars-color)" background="var(--stars-bg)">
      <Darkmode/>
      <MainBox background="var(--mainbox-color)" stripBackground="var(--mainbox-strip)" />
    </StarsBackground>
  )
}
