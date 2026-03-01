"use client";

import * as React from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";
import { useState } from "react";
import PopUpWindow from "./popups/popUpWindow";
import About from "./popups/about";
import Links from "./popups/links";
import Work from "./popups/work";
import Mail from "./popups/mail";



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


const [aboutOpen, setAboutOpen] = useState<boolean>(false)
const [workOpen, setWorkOpen] = useState<boolean>(false)
const [linksOpen, setLinksOpen] = useState<boolean>(false)
const [mailOpen, setMailOpen] = useState<boolean>(false)


  return (
    <div
      className={cn("h-6/10 w-3/5 z-10  rounded-2xl flex flex-col overflow-scroll", className)} style={{ background }}
      {...props}>
        
      <header
        className="h-16 rounded-t-2xl text-2xl border-2  p-2"
        style={{ background: stripBg }}>
          <p className="text-white">Home</p>
        </header>
        <main className="flex flex-col flex-1 items-center m-10">
          <h1 className="text-7xl m-2">Hi! I am Mikael</h1>
          <p className="text-2xl p-5">1st year student</p>
        </main>
        <footer className="m-2">
          <div>
              <div className="flex justify-around ml-5 mr-5">
                <button onClick={()=>{setAboutOpen(true)}} className="hover:cursor-pointer">
                  <Image src="/info-circle-svgrepo-com.svg" width={50} height={50} alt="info" className="block dark:hidden" />
                  <Image src="/info-circle-svgrepo-com (1).svg" width={50} height={50} alt="info" className="hidden dark:block" />
                </button>

                <button onClick={()=>{setWorkOpen(true)}} className="hover:cursor-pointer">
                  <Image src="/folder-open-svgrepo-com (1).svg" width={50} height={50} alt="folder" className="block dark:hidden" />
                  <Image src="/folder-open-svgrepo-com.svg" width={50} height={50} alt="folder" className="hidden dark:block" />
                </button>

                <button onClick={()=>{setLinksOpen(true)}} className="hover:cursor-pointer">
                  <Image src="/link-svgrepo-com.svg" width={50} height={50} alt="link" className="block dark:hidden" />
                  <Image src="/link-svgrepo-com (1).svg" width={50} height={50} alt="link" className="hidden dark:block" />
                </button>

                <button onClick={()=>{setMailOpen(true)}} className="hover:cursor-pointer">
                  <Image src="/mail-svgrepo-com.svg" width={50} height={50} alt="mail" className="block dark:hidden" />
                  <Image src="/mail-svgrepo-com (1).svg" width={50} height={50} alt="mail" className="hidden dark:block" />
                </button>


                {aboutOpen &&(
                  <PopUpWindow isOpen={aboutOpen} onClose={() => setAboutOpen(false)} header="About">
                      <About/>
                  </PopUpWindow>
                )}
                {linksOpen &&(
                  <PopUpWindow isOpen={linksOpen} onClose={() => setLinksOpen(false)} header="Links">
                      <Links/>
                  </PopUpWindow>
                )}
                {workOpen &&(
                  <PopUpWindow isOpen={workOpen} onClose={() => setWorkOpen(false)} header="Work">
                      <Work/>
                  </PopUpWindow>
                )}
                {mailOpen &&(
                  <PopUpWindow isOpen={mailOpen} onClose={() => setMailOpen(false)} header="Mail">
                      <Mail/>
                  </PopUpWindow>
                )}
              </div>

              <div className="flex justify-around ml-5 mr-5 text-2xl">
                <span >About</span>
                <span>Work</span>
                <span>Links</span>
                <span>Mail</span>
              </div>
            </div>
        </footer>
    
      
    </div>
  );
}
