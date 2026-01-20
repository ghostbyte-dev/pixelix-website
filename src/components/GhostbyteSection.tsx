export default function GhostbyteSection() {
  return (
    <section className="bg-black text-white py-24 md:py-32 relative overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime-500/10 backdrop-blur-xs rounded-full mb-6 border border-lime-500/20">
            <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
            <span className="text-sm font-medium text-lime-400">
              POWERFUL FEATURES
            </span>
          </div>
          <h2 className="text-4xl pb-2 md:text-6xl font-bold mb-6 bg-linear-to-r from-lime-400 to-lime-300 bg-clip-text text-transparent">
            Brought to you by Ghostbyte
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Experience social media the way it should be - beautiful, private,
            and community-driven.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          <div className="group relative">
            {/* Card background with hover effect */}
            <div className="absolute inset-0 bg-zinc-900 rounded-2xl transition-all duration-300 group-hover:scale-[1.03]" />

            {/* Border glow effect */}
            <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-lime-500/20 via-lime-500/0 to-lime-500/0 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-[1.03]" />

            {/* Content */}
            <div className="relative p-8">
              <div className="w-16 h-16 rounded-xl bg-lime-400 text-black flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-lime-500/10">
                f
              </div>
              <h3 className="text-2xl font-bold mb-4 group-hover:text-lime-300 transition-colors">
                Hola
              </h3>
              <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors">
                Fef
              </p>
              <div className="mt-6 h-1.5 w-12 bg-lime-500/30 rounded-full group-hover:w-20 transition-all duration-300" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
