import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars";
import ContactCard from "./contactCard";

export default function ContactBody() {
  return (
    <StarsBackground
      background="var(--stars-bg)"
      starColor="var(--stars-color)"
      className="min-h-screen"
    >
      <main className="flex justify-center p-10 h-screen items-center z-10 md:flex-row">
          <ContactCard/>
      </main>
    </StarsBackground>

  );
}
