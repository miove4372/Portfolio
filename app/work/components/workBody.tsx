import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars";

export default function WorkBody() {
  return (
    <StarsBackground
      background="var(--stars-bg)"
      starColor="var(--stars-color)"
      className="min-h-screen"
    >
      <main className="relative z-10 w-full min-h-screen">
        {/* innhold for arbeid-siden kommer her */}
      </main>
    </StarsBackground>
  );
}