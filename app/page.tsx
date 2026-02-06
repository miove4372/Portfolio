"use client"

import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars"
import Darkmode from "@/components/darkmode"
import MainBox from "@/components/mainBcx"


export default function Home() {
  return (
    <StarsBackground className="min-h-screen w-full flex items-center justify-center" starColor="cyan" background="radial-gradient( #0ea5e9 0%, #020617 100%)">
      <Darkmode/>
      <MainBox/>
    </StarsBackground>
  )
}
