// WorkBody.tsx
import { StarsBackground } from "@/components/animate-ui/components/backgrounds/stars";
import ProjectCard from "./projectCard";

export default function WorkBody() {
  const projects = [
    {
      title: "Portfolio",
      description: "Min personlige nettside",
      image: "/Portfølje.png",
      tags: ["React", "Next.js", "HTML/CSS", "TypeScript", "Vercel"],
      link: "https://github.com/miove4372/Portfolio",
    },
    {
      title: "Mattilbud app",
      description: "Bruker search ai til å finne de beste ukestilbudene for hver uke og kommer med forslag til oppskrifter.",
      image: "/MattilbudApp.png",
      tags: ["React", "Next.js", "HTML/CSS", "TypeScript", "Redis", "Cron", "Vercel", "Perplexity"],
      link: "https://github.com/miove4372/Portfolio",
    },
    {
      title: "Databasesystem ",
      description: "Databasesytem for bergen bysykkel hvor man kan legge til sykkel, fjerne sykkel, se sykkelstatus staus, posisjon på sykkels stasjon og mye mer.",
      image: "/BergenBysykkel.png",
      tags: ["Python", "Shiny", "SQL", "CSS"],
      link: "https://github.com/miove4372/Bergen-Bysykkel-Databasesystem",
    },
    {
      title: "Snake",
      description: "Snake kodet i python.",
      image: "/Snake.png",
      tags: ["Python"],
      link: "https://github.com/miove4372/Snake",
    },
    {
      title: "Tetris",
      description: "Tetris med poengsystem, poengtabell og mulighet til å holde igjen en brikke.",
      image: "/Tetris.png",
      tags: ["Java", "Swing"],
      link: "https://github.com/miove4372/Tetris",
    },
    {
      title: "Minesweeper",
      description: "Klassisk minesweeper laget i Java med tre forskjellige vanskelighetsgrader.",
      image: "/Minesweeper.png",
      tags: ["Java", "Swing"],
      link: "https://github.com/miove4372/Minesweeper",
    },
    
    
  ];

  return (
    <StarsBackground
      background="var(--stars-bg)"
      starColor="var(--stars-color)"
      className="min-h-screen"
    >
      <main className="relative w-full min-h-screen z-10 p-10 mt-20">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-6xl mx-auto">
          {projects.map((project) => (
            <ProjectCard
              key={project.title}
              title={project.title}
              description={project.description}
              image={project.image}
              link={project.link}
              tags={project.tags}
            />
          ))}
        </div>
      </main>
    </StarsBackground>
  );
}