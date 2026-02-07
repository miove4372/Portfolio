"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

type MainBoxProps = React.ComponentProps<"div"> & {
  /** Background of the main box (supports CSS vars like "var(--mainbox-color)") */
  background?: string;
  /** Background of the top strip (defaults to background) */
  stripBackground?: string;
};


export default function MainBox({
  className,
  background = "var(--mainbox-color)",
  stripBackground,
  
  ...props
}: MainBoxProps) {
  const stripBg = stripBackground ?? background;

  return (
    <div
      className={cn("h-6/10 w-3/5 z-10 border-2 border-white rounded-2xl flex flex-col overflow-scroll", className)} style={{ background }}
      {...props}>
        
      <header
        className="h-16 rounded-t-2xl text-2xl p-2 border-2 border-white"
        style={{ background: stripBg }}>
          <p>Home</p>
        </header>
        <main className="flex flex-col flex-1 items-center m-10">
          <h1 className="text-7xl m-2">Hi! I am Mikael</h1>
          <p className="text-2xl p-5">Student, new and weak</p>
        </main>
        <footer className="m-2">
          <div>
              <div className="flex justify-around ml-5 mr-5">
                {/* Lightmode icons */}
                <Image src={"/info-circle-svgrepo-com.svg"} height={50} width={50} alt="info" className="block dark:hidden"/>
                <Image src={"/folder-open-svgrepo-com (1).svg"} height={50} width={50} alt="folder" className="block dark:hidden"/>
                <Image src={"/link-svgrepo-com.svg"} height={50} width={50} alt="link" className="block dark:hidden"/>
                <Image src={"/mail-svgrepo-com.svg"} height={50} width={50} alt="mail" className="block dark:hidden"/>
                
                
                {/* Darkmode icons */}
                <Image src={"/info-circle-svgrepo-com (1).svg"} height={50} width={50} alt="info" className="hidden dark:block"/>
                <Image src={"/folder-open-svgrepo-com.svg"} height={50} width={50} alt="folder" className="hidden dark:block"/>
                <Image src={"/link-svgrepo-com (1).svg"} height={50} width={50} alt="link" className="hidden dark:block"/>
                <Image src={"/mail-svgrepo-com (1).svg"} height={50} width={50} alt="mail" className="hidden dark:block"/>
                </div>
              <div className="flex justify-around ml-5 mr-5 text-2xl">
                <p >About</p>
                <p>Work</p>
                <p>Links</p>
                <p>Mail</p>
              </div>
            </div>
        </footer>
    
      
    </div>
  );
}
