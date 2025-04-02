import { Download, Github } from "lucide-react";
import Link from "next/link";

export default function DownloadSection() {
  return (
    <section className="py-24 md:py-32 relative overflow-hidden" id="download">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-linear-to-br from-lime-300 via-lime-400 to-lime-500"></div>

      {/* Background pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMiIgZD0iTTAgMGg2MHY2MEgweiIvPjxwYXRoIGQ9Ik02MCAwdjYwSDBWMGg2MHpNMzAgMzBoMzBWMEgzMHYzMHpNMCA2MGgzMFYzMEgwdjMweiIgZmlsbC1vcGFjaXR5PSIuMDUiIGZpbGw9IiMwMDAiLz48L2c+PC9zdmc+')] opacity-50"></div>

      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-lg p-12 rounded-3xl shadow-2xl border border-white/20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-black/10 backdrop-blur-xs rounded-full mb-6 border border-white/10">
            <span className="w-2 h-2 rounded-full bg-black animate-pulse"></span>
            <span className="text-sm font-medium text-black">
              JOIN THE COMMUNITY
            </span>
          </div>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Ready to Join the Fediverse?
          </h2>
          <p className="text-xl mb-10 max-w-2xl mx-auto">
            Download Pixelix today and start sharing your photos with the
            federated Pixelfed network. Join thousands of users who've already
            made the switch.
          </p>

          <div className="flex flex-col sm:flex-row justify-center gap-6 mb-10">
            <Link href="https://play.google.com/store/apps/details?id=com.daniebeler.pfpixelix" className="bg-black flex hover:bg-lime-900 text-white px-8 py-7 text-lg rounded-2xl transition-all duration-300 hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.3)] hover:-translate-y-1 group">
              <Download className="mr-3 h-6 w-6 group-hover:animate-bounce" />
              Get on Google Play
            </Link>
            <Link href="https://github.com/daniebeler/pixelix" className="border-white/20 flex bg-white/10 backdrop-blur-xs hover:bg-white/20 px-8 py-7 text-lg rounded-2xl transition-all duration-300 hover:shadow-lg">
              <Github className="mr-3 h-6 w-6" />
              View on GitHub
            </Link>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-xs rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold mb-1">800+</div>
              <div>Active Users</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xs rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold mb-1">4.5</div>
              <div>User Rating</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xs rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold mb-1">100%</div>
              <div className="">Open Source</div>
            </div>
            <div className="bg-white/10 backdrop-blur-xs rounded-xl p-6 border border-white/10">
              <div className="text-3xl font-bold  mb-1">200+</div>
              <div>Github Stars</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
