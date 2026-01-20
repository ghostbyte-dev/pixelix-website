import ContributeSection from "@/components/ContributeSection";
import DownloadSection from "@/components/DownloadSection";
import GhostbyteSection from "@/components/GhostbyteSection";
import HeroSection from "@/components/HeroSection";
import WhySection from "@/components/WhySection";

export default function Home() {
  return (
    <main className="text-[#101318]">
      <div className="w-full">
        <HeroSection />

        <WhySection />

        <DownloadSection />

        <GhostbyteSection />

        <ContributeSection />
      </div>
    </main>
  );
}
