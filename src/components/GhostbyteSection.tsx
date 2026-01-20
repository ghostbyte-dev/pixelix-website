import Image from "next/image";
import Link from "next/link";
import FeatureCard from "./FeatureCard";

export default function GhostbyteSection() {
  return (
    <section className="bg-black text-white py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime-500/10 backdrop-blur-xs rounded-full mb-6 border border-lime-500/20">
            <span className="w-2 h-2 rounded-full bg-primary animate-pulse" />
            <span className="text-sm font-medium text-primary">
              ghostbyte.dev
            </span>
          </div>
          <h2 className="text-4xl pb-2 md:text-6xl font-bold mb-6 bg-linear-to-r from-primary to-lime-300 bg-clip-text text-transparent">
            A Ghostbyte Production
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Pixelix is a Ghostbyte project. We're a small Austrian studio that
            loves building software. Whether it's a tailored solution for a
            client or an idea of our own we've brought to life.
          </p>
        </div>

        {/* <div className="grid grid-cols-2 md:grid-cols-6 gap-6 mt-12 mb-10">
          <div className="bg-white/10 backdrop-blur-xs rounded-xl p-6 flex flex-col items-center">
            <div className="text-3xl font-bold mb-1">2</div>
            <div>Employees</div>
          </div>
          <div className="bg-white/10 backdrop-blur-xs rounded-xl p-6 flex flex-col items-center">
            <div className="text-3xl font-bold mb-1">2025</div>
            <div>Founded in</div>
          </div>
          <div className="bg-white/10 backdrop-blur-xs rounded-xl p-6 flex flex-col items-center">
            <div className="text-3xl font-bold mb-1">8</div>
            <div className="">Projects</div>
          </div>
          <div className="bg-white/10 backdrop-blur-xs rounded-xl p-6 flex flex-col items-center">
            <div className="text-3xl font-bold  mb-1">Austria</div>
            <div>Country</div>
          </div>
          <div className="bg-white/10 backdrop-blur-xs rounded-xl p-6 flex flex-col items-center">
            <div className="text-3xl font-bold  mb-1">Austria</div>
            <div>Country</div>
          </div>
          <div className="bg-white/10 backdrop-blur-xs rounded-xl p-6 flex flex-col items-center">
            <div className="text-3xl font-bold  mb-1">Austria</div>
            <div>Country</div>
          </div>
        </div> */}

        <h3 className="mb-5 text-2xl">Other Projects</h3>

        <div className="grid md:grid-cols-3 gap-8">
          <FeatureCard
            icon={
              <Image
                src="/ghostbyte/socialfolio.svg"
                alt=""
                width={28}
                height={28}
              />
            }
            accentColor="#fdc700"
            href="https://socialfolio.me"
            title="Socialfolio"
            description="Socialfolio is an open-source platform that allows users to
                create a simple, centralized landing page to showcase and share
                all of their social media links in one place."
          />

          <FeatureCard
            icon={
              <Image
                src="/ghostbyte/together.svg"
                alt=""
                width={28}
                height={28}
              />
            }
            accentColor="#00cb54"
            href="https://together.ghostbyte.dev/"
            title="Together"
            description="A tool for managing households and communities. Features are a shared shopping list, todos, calendar and more."
          />

          <FeatureCard
            icon={
              <Image
                src="/ghostbyte/ghostbyte-library.svg"
                alt=""
                width={32}
                height={28}
              />
            }
            accentColor="#9d9cff"
            href="https://library.ghostbyte.dev/"
            title="Ghostbyte Library"
            description="A collection of many useful websites and tools. They are sorted by category and include some tags to quickly find the right one for your needs."
          />
        </div>

        <div className="w-full flex justify-center mt-12">
          <Link
            href="https://ghostbyte.dev"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-[#101318] py-2 px-4 rounded-lg font-bold"
          >
            More about Ghostbyte
          </Link>
        </div>
      </div>
    </section>
  );
}
