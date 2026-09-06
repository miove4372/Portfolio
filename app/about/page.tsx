"use client"

import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars"
import Header from "@/components/header"

export default function About() {

return (
  <div>
    <StarsBackground className="relative h-screen w-full flex items-center justify-center" starColor="var(--stars-color)" background="var(--stars-bg)">
    
      <Header/>
    </StarsBackground>

  </div>
  )
}
