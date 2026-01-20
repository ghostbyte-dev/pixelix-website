import Link from "next/link";

export default function ContributeSection() {
  return (
    <section id="donate" className="py-24 md:py-32 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-lime-300 via-lime-400 to-lime-500" />

      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMiIgZD0iTTAgMGg2MHY2MEgweiIvPjxwYXRoIGQ9Ik02MCAwdjYwSDBWMGg2MHpNMzAgMzBoMzBWMEgzMHYzMHpNMCA2MGgzMFYzMEgwdjMweiIgZmlsbC1vcGFjaXR5PSIuMDUiIGZpbGw9IiMwMDAiLz48L2c+PC9zdmc+')] opacity-50" />

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg p-12 rounded-3xl shadow-2xl border border-white/20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/10 backdrop-blur-xs rounded-full mb-6 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
            <span className="text-sm font-medium text-black">DONATE</span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">Support Us</h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            If you like Pixelix, please consider supporting us by purchasing it
            from Google Play Store or donating a small amount via Liberapay or
            Buy Me a Coffee.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-6">
            <div className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <Link
                href="https://www.buymeacoffee.com/daniebeler"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/buttons/bmac.png"
                  className="h-16 object-contain"
                  alt="Buy Me a Coffee Button"
                />
              </Link>
            </div>

            <div className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
              <Link
                href="https://liberapay.com/pixelix/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="/buttons/liberapay.svg"
                  className="h-16 object-contain"
                  alt="LiberaPay Button"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
