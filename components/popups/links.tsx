import Image from "next/image";

export default function Links() {
  return (
    <div className="flex m-2 justify-evenly text-2xl">
      <div>
        <Image
          src="/GitHub_Invertocat_White.png"
          width={50}
          height={50}
          alt="Black cat"
          className="hidden dark:block"
        />
        <Image
          src="/GitHub_Invertocat_Black.png"
          width={50}
          height={50}
          alt="Black cat"
          className="block dark:hidden"
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
        <Image src="/facebook.svg.webp" width={50} height={50} alt="mail" />
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
        <Image src="/LinkedIn.svg.webp" width={50} height={50} alt="mail" />
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
