import { Github } from "lucide-react";
import Link from "next/link";

export default function Header() {
  return (
    <header className="absolute text-black z-50 top-0 left-0 right-0 w-full container mx-auto py-6 px-4 flex justify-between items-center">
      <Link href="/">
        <div className="flex items-center gap-2 hover:cursor-pointer">
          <div className="grid grid-cols-3 grid-rows-4">
            {[
              [0, 0],
              [1, 0],
              [0, 1],
              [2, 1],
              [1, 2],
              [2, 2],
              [0, 3],
            ].map((pos, index) => (
              <div
                key={index}
                className="w-3 h-3 bg-black hover:bg-green-600 transitio"
                style={{ gridColumn: pos[0] + 1, gridRow: pos[1] + 1 }}
              />
            ))}
          </div>

          <h1 className="text-2xl font-bold">Pixelix</h1>
        </div>
      </Link>
      <nav className="hidden md:flex gap-6">
        <Link
          href="/#features"
          className="font-medium hover:text-lime-900 transition-colors"
        >
          Features
        </Link>
        <Link
          href="/#download"
          className="font-medium hover:text-lime-900 transition-colors"
        >
          Download
        </Link>
      </nav>
      <div>
        <Link
          href="https://github.com/daniebeler/pixelix"
          className="bg-black text-white hover:bg-lime-900 border-none rounded-xl transition-all duration-300 hover:-translate-y-1 hover:shadow-md flex items-center px-4 py-2"
        >
          <Github className="mr-2 h-4 w-4" />
          View on Github
        </Link>
      </div>
    </header>
  );
}
