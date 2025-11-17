"use client";

import DownloadSection from "@/components/DownloadSection";
import HeroSection from "@/components/HeroSection";
import WhySection from "@/components/WhySection";

export default function Home() {
  return (
    <main className="text-[#101318]">
      <div className="w-full">
        <HeroSection />

        <WhySection />

        <DownloadSection />
      </div>
    </main>
  );
}
