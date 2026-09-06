import Link from "next/link";
import Darkmode from "./darkmode";

export default function Header() {
  return (
    <header className="text-white absolute top-5 z-50 h-16 w-full px-6 md:px-10 flex  items-center justify-between  backdrop-blur-xl rounded-full">
      <div>
        <Link className="px-6 py-3 rounded-full border border-(--text-primary) text-(--text-primary) font-medium hover:bg-(--text-primary)/10 transition" href={"/"}>
          Hjem
        </Link>
      </div>
      <Darkmode className="px-6 py-3 rounded-full border border-(--text-primary) text-(--text-primary) font-medium hover:bg-(--text-primary)/10 transition" />
    </header>
  );
}
