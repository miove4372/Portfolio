import Image from "next/image";

export default function Links() {
  return (
    <div className="flex m-2 justify-evenly">
      <div>
        <Image
          src="/github_logo.svg.webp"
          width={50}
          height={50}
          alt="mail"
        />

        <a
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 hover:cursor-pointer"
          href="https://github.com/miove4372"
        >
          Github
        </a>
      </div>
      <div>
        <Image
          src="/facebook.svg.webp"
          width={50}
          height={50}
          alt="mail"
        />
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 hover:cursor-pointer"
          href="https://www.facebook.com/profile.php?id=100006384786377"
        >
          Facebook
        </a>
      </div>
      <div>
        <Image
          src="/Linkedin.svg.webp"
          width={50}
          height={50}
          alt="mail"
        />
        <a
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 hover:cursor-pointer"
          href="https://www.linkedin.com/in/mikael-overland-68a808356/"
        >
          LinkedIn
        </a>
      </div>
    </div>
  );
}
