"use client";

import "swiper/css";
import "swiper/css/bundle";
import WhySection from "@/components/WhySection";
import HeroSection from "@/components/HeroSection";
import DownloadSection from "@/components/DownloadSection";

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
