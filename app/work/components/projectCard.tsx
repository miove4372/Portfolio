// ProjectCard.tsx
import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  tags: string[];
}

export default function ProjectCard({
  title,
  description,
  image,
  link,
  tags,
}: ProjectCardProps) {
  return (
    <div className="bg-(--mainbox-color) w-full z-10 border-4 border-accent rounded-4xl p-4 overflow-hidden flex flex-col">
      <h1 className="text-2xl font-semibold text-center mb-4">{title}</h1>
      <Image
        src={image}
        height={300}
        width={500}
        alt={title}
        className="w-full  object-cover rounded-2xl"
      />
      <div className="mt-auto">  
      <p className="mt-4">{description}</p>
      {link && (
        <Link className="hover:text-blue-600 text-2xl underline" href={link} target="_blank">
          git repo
        </Link>
      )}
      <ul className="text-sm mt-4 flex flex-wrap gap-2">
        {tags.map((tag) => (
          <li
            key={tag}
            className="bg-accent text-var(--accent-foreground) px-3 py-1 rounded-full"
          >
            {tag}
          </li>
        ))}
      </ul>
      </div>
    </div>
  );
}
