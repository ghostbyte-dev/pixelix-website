"use client";

import Image from "next/image";
import Link from "next/link";

import "swiper/css";
import "swiper/css/bundle";
import WhySection from "@/components/WhySection";
import HeroSection from "@/components/HeroSection";
import Footer from "@/components/Footer";
import DownloadSection from "@/components/DownloadSection";
import Header from "@/components/Header";

export default function Home() {
  return (
    <main className="text-[#101318]">
      <div className="w-full">
        <Header />

        <HeroSection />

        <WhySection />

        <DownloadSection />
      </div>
    </main>
  );
}
