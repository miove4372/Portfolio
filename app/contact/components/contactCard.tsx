import Image from "next/image";

export default function ContactCard() {
  return (
    <div className="bg-(--mainbox-color) w-11/12 h-auto z-10 border-4 rounded-4xl p-2 overflow-hidden md:w-4/5 border-accent md:h-auto">
      <h1 className="text-4xl md:text-5xl font-bold text-center m-2 mb-8 text-accent-foreground)">
        Kontakt
      </h1>
      <div className="flex flex-col justify-evenly mb-4 md:flex-row">
        <ul className="md:text-2xl text-base mb-10 space-y-3 underline font-semibold">
          <li className="mb-10">
            <a href="mailto:overlandmikael@gmail.com">
              Email: overlandmikael@gmail.com
            </a>
          </li>
          <li>
            <a href="tel:96621634">Telefon: 96621634</a>
          </li>
        </ul>
        <div className="flex justify-evenly md:flex-col ">
          <button
            className="cursor-pointer"
            onClick={() =>
              window.open(
                "https://www.linkedin.com/in/mikael-overland-68a808356/",
                "_blank",
              )
            }
          >
            <Image
              src="/LinkedIn.svg.webp"
              alt="bile av LinkedIn"
              width={50}
              height={50}
            ></Image>
            <p>LinkedIn</p>
          </button>
          <button
            className="cursor-pointer"
            onClick={() =>
              window.open("https://github.com/miove4372", "_blank")
            }
          >
            <Image
              src="/GitHub_Invertocat_Black.png"
              alt="bile av github"
              width={50}
              height={50}
              className="block dark:hidden"
            ></Image>
            <Image
              src="/GitHub_Invertocat_White.png"
              alt="bile av github"
              width={50}
              height={50}
              className="hidden dark:block"
            ></Image>
            <p>Github</p>
          </button>
          <button
            className="cursor-pointer"
            onClick={() =>
              window.open(
                "https://www.facebook.com/profile.php?id=100006384786377",
                "_blank",
              )
            }
          >
            <Image
              src="/facebook.svg.webp"
              alt="bile av facebook"
              width={50}
              height={50}
            ></Image>
            <p>FaceBook</p>
          </button>
        </div>
      </div>
    </div>
  );
}
