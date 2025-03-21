import { Download, Github } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function () {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-lime-300 via-lime-400 to-lime-500 py-20 md:py-28">
      {/* Decorative elements */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
      <div className="absolute -top-40 right-0 w-96 h-96 bg-lime-200 rounded-full opacity-20 blur-3xl"></div>
      <div className="absolute bottom-0 -left-20 w-80 h-80 bg-lime-600 rounded-full opacity-10 blur-3xl"></div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMiIgZD0iTTAgMGg2MHY2MEgweiIvPjxwYXRoIGQ9Ik02MCAwdjYwSDBWMGg2MHpNMzAgMzBoMzBWMEgzMHYzMHpNMCA2MGgzMFYzMEgwdjMweiIgZmlsbC1vcGFjaXR5PSIuMDUiIGZpbGw9IiMwMDAiLz48L2c+PC9zdmc+')] opacity-10"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="flex flex-col lg:flex-row items-center gap-12 md:gap-20">
          {/* Left content */}
          <div className="lg:w-1/2 text-center lg:text-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/10 backdrop-blur-md rounded-full mb-6 border border-white/10">
              <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse"></span>
              <span className="text-sm font-medium">
                Open Source • Privacy-First • Federated
              </span>
            </div>

            <h1 className="text-5xl md:text-7xl font-black mb-6 leading-none tracking-tight">
              <span className="relative">
                <span className="absolute -inset-1 blur-xl bg-black/10 rounded-lg transform -skew-y-3"></span>
                <span className="relative inline-block text-black">
                  Capture.
                </span>
              </span>
              <br />
              <span className="relative">
                <span className="absolute -inset-1 blur-xl bg-black/10 rounded-lg transform -skew-y-3"></span>
                <span className="relative inline-block text-black">
                  Connect.
                </span>
              </span>
              <br />
              <span className="relative">
                <span className="absolute -inset-1 blur-xl bg-black/10 rounded-lg transform -skew-y-3"></span>
                <span className="relative inline-block bg-clip-text text-transparent bg-gradient-to-r from-lime-900 to-black">
                  Control.
                </span>
              </span>
            </h1>

            <p className="text-xl md:text-2xl mb-8 text-black/80 max-w-xl">
              The ultimate Pixelfed experience for Android.{" "}
              <span className="font-bold">
                Your photos. Your network. Your way.
              </span>
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8">
              <Link href="https://play.google.com/store/apps/details?id=com.daniebeler.pfpixelix" className="bg-black flex hover:bg-lime-900 text-white px-8 py-7 text-lg rounded-2xl transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] hover:-translate-y-1 group">
                <Download className="mr-2 h-5 w-5 group-hover:animate-bounce" />
                Get on Google Play
              </Link>
              <Link href="https://github.com/daniebeler/pixelix" className="border-black/20 flex bg-white/30 backdrop-blur-sm hover:bg-white/50 px-8 py-7 text-lg rounded-2xl transition-all duration-300 hover:shadow-lg">
                <Github className="mr-2 h-5 w-5" />
                View on GitHub
              </Link>
            </div>

            <div className="flex items-center gap-4 justify-center lg:justify-start">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full ring-2 ring-white bg-lime-200 flex items-center justify-center text-sm shadow-lg">
                  🌟
                </div>
                <div className="w-10 h-10 rounded-full ring-2 ring-white bg-lime-300 flex items-center justify-center text-sm shadow-lg">
                  👍
                </div>
                <div className="w-10 h-10 rounded-full ring-2 ring-white bg-lime-400 flex items-center justify-center text-sm shadow-lg">
                  ❤️
                </div>
              </div>
              <div>
                <div className="font-bold">1,300+ Downloads</div>
                <div className="text-sm text-black/60">
                  Join the community today
                </div>
              </div>
            </div>
          </div>

          {/* Right content - Phone mockups */}
          <div className="lg:w-1/2 relative">
            <div className="absolute inset-0 bg-gradient-to-br from-lime-400 to-lime-600 rounded-full opacity-20 blur-3xl transform scale-125"></div>

            {/* Main phone */}
            <div className="relative mx-auto w-[280px] md:w-[320px]">
              {/* Phone frame */}
              <div
                className="relative z-20 bg-black rounded-[40px] p-3 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.3),0_30px_60px_-30px_rgba(0,0,0,0.5)]
                  before:content-[''] before:absolute before:inset-0 before:border-[8px] before:border-black before:rounded-[40px] before:z-10
                  after:content-[''] after:absolute after:top-0 after:left-1/2 after:-translate-x-1/2 after:w-32 after:h-6 after:bg-black after:rounded-b-2xl after:z-20"
              >
                {/* Phone screen */}
                <div className="w-full aspect-[9/19.5] overflow-hidden rounded-[32px] relative bg-black">
                  <Image
                    src="/screenshots/screen_1.png"
                    alt="Pixelix App Screenshots"
                    fill
                    className="object-cover"
                    priority
                  />

                  {/* Screen reflection overlay */}
                  <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/5 to-white/10 pointer-events-none"></div>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute top-1/2 -right-20 -translate-y-1/2 w-40 h-40 bg-lime-300 rounded-full blur-xl opacity-30 animate-pulse"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-lime-500 rounded-full blur-xl opacity-20"></div>

              {/* Feature highlights */}
              <div className="absolute -right-4 top-20 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg text-sm font-medium z-30 animate-bounce">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-lime-500"></span>
                  Beautiful UI
                </span>
              </div>
              <div
                className="absolute -left-4 top-1/3 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg text-sm font-medium z-30 animate-bounce"
                style={{ animationDelay: "0.5s" }}
              >
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-lime-500"></span>
                  Fast & Responsive
                </span>
              </div>
              <div
                className="absolute -right-4 bottom-40 bg-white/90 backdrop-blur-sm px-4 py-2 rounded-lg shadow-lg text-sm font-medium z-30 animate-bounce"
                style={{ animationDelay: "1s" }}
              >
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-lime-500"></span>
                  Privacy Focused
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

  
    </section>
  );
}
