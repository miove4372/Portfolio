"use client"

import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars"
import Darkmode from "@/components/darkmode"

export default function Work() {

return (
  <div>
    <StarsBackground className="relative h-screen w-full flex items-center justify-center" starColor="var(--stars-color)" background="var(--stars-bg)">
      <Darkmode/>
     
    </StarsBackground>

  </div>
  )
}
