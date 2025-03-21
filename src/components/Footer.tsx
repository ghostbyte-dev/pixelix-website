import { Github, Share2 } from "lucide-react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black text-white pt-20 pb-3">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between gap-12 mb-16">
          {/* Brand column */}
          <div className="md:w-1/3">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 bg-gradient-to-br from-lime-400 to-lime-600 rounded-xl flex items-center justify-center text-black font-bold text-xl">
                <img src="/logo_dark.svg" height={22} width={22} />
              </div>
              <h3 className="text-3xl font-bold">Pixelix</h3>
            </div>
            <p className="mb-8 text-zinc-400 text-lg">
              An open-source Android client for Pixelfed, designed with modern
              aesthetics and performance in mind.
            </p>
            <div className="flex gap-4">
              <Link
                href="https://github.com/daniebeler/pixelix"
                className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-lime-400 hover:bg-lime-400 hover:text-black transition-colors"
              >
                <Github className="h-6 w-6" />
              </Link>
              <Link
                href="#"
                className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center text-lime-400 hover:bg-lime-400 hover:text-black transition-colors"
              >
                <Share2 className="h-6 w-6" />
              </Link>
            </div>
          </div>

          {/* Links columns */}
          <div className="grid grid-cols-2 md:grid-cols-3 gap-10 md:w-2/3">
            <div>
              <h3 className="text-xl font-bold mb-6 text-lime-400">
                Navigation
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="#features"
                    className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-lime-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Features
                  </Link>
                </li>
                <li>
                  <Link
                    href="#download"
                    className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-lime-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Download
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 text-lime-400">Legal</h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="/privacy"
                    className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-lime-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
                    href="#"
                    className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-lime-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-6 text-lime-400">
                Resources
              </h3>
              <ul className="space-y-4">
                <li>
                  <Link
                    href="https://pixelfed.org"
                    className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-lime-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Pixelfed Official
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/daniebeler/pixelix"
                    className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-lime-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Source Code
                  </Link>
                </li>
                <li>
                  <Link
                    href="https://github.com/daniebeler/pixelix/issues"
                    className="text-zinc-400 hover:text-white transition-colors flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-lime-500 opacity-0 group-hover:opacity-100 transition-opacity"></span>
                    Report an Issue
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-zinc-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-zinc-500 text-sm">
            © {new Date().getFullYear()} Pixelix. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link
              href="#"
              className="text-zinc-500 hover:text-white text-sm transition-colors"
            >
              Privacy
            </Link>
            <Link
              href="#"
              className="text-zinc-500 hover:text-white text-sm transition-colors"
            >
              Terms
            </Link>
          </div>
        </div>

        <div className="p-3 text-center">
          Developed with ❤️ by{" "}
          <a href="https://daniebeler.com">
            <strong>Daniel</strong>
          </a>{" "}
          and{" "}
          <a href="https://emanuelhiebeler.me">
            <strong>Emanuel</strong>
          </a>{" "}
        </div>
      </div>
    </footer>
  );
}
