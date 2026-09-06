"use client";
import Image from "next/image";
import Link from "next/link";
import { StarsBackground } from "./animate-ui/components/backgrounds/stars";

export default function HomeBody() {
  return (
    <StarsBackground background="var(--stars-bg)" starColor="var(--stars-color)">
      <main className="flex flex-col md:flex-row items-center justify-center gap-12 m-10 min-h-screen max-w-6xl mx-auto px-6">
        <div className="w-full flex flex-col justify-center z-10 text-center md:text-left">
          <h1 className="text-6xl md:text-7xl font-semibold m-2 text-(--text-primary)">
            Mikael Øverland
          </h1>
          <p className="text-xl md:text-2xl m-2 text-(--text-secondary)">
            Informatikkstudent ved UiB
          </p>
          <div className="flex gap-4 justify-center md:justify-start mt-4 m-2">
            <Link
              href="/work"
              className="px-6 py-3 rounded-full bg-accent text-accent-foreground font-medium hover:opacity-90 transition"
            >
              Se mitt arbeid
            </Link>
            <Link
              href="/contact"
              className="px-6 py-3 rounded-full border border-(--text-primary) text-(--text-primary) font-medium hover:bg-(--text-primary)/10 transition"
            >
              Kontakt meg
            </Link>
          </div>
        </div>

        <div className="w-full flex items-center justify-center">
          <Image
            className="border-4 border-(--accent rounded-full z-10 shadow-lg"
            src="/Meg2.JPG"
            alt="Bilde av meg"
            width={300}
            height={300}
          />
        </div>
      </main>
    </StarsBackground>
  );
}