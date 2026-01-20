import {
  Camera,
  Code,
  Globe,
  MessageCircle,
  Shield,
  Users,
} from "lucide-react";
import FeatureCard from "./FeatureCard";

const features = [
  {
    icon: Camera,
    title: "Beautiful Image Sharing",
    description:
      "Showcase your photos on the federated Pixelfed network with support for collections, making your content stand out.",
  },
  {
    icon: Globe,
    title: "Federated Network",
    description:
      "Connect with users across the Fediverse. Follow accounts from any Pixelfed instance and expand your social reach.",
  },
  {
    icon: MessageCircle,
    title: "Direct Messages",
    description:
      "Easily chat with friends and followers through text-based direct messages. Stay connected and keep conversations going within the Pixelfed network.",
  },
  {
    icon: Users,
    title: "Community Focused",
    description:
      "Engage with a community that values privacy and user control over algorithms. Build real connections.",
  },
  {
    icon: Shield,
    title: "Privacy Respecting",
    description:
      "No tracking, no ads, no algorithms manipulating your feed. Just the content you choose to follow.",
  },
  {
    icon: Code,
    title: "Open Source",
    description:
      "Fully open source and transparent. Contribute to the development or audit the code yourself anytime.",
  },
];

export default function WhySection() {
  return (
    <section
      id="features"
      className="bg-black text-white py-24 md:py-32 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-lime-500/10 backdrop-blur-xs rounded-full mb-6 border border-lime-500/20">
            <span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
            <span className="text-sm font-medium text-lime-400">
              POWERFUL FEATURES
            </span>
          </div>
          <h2 className="text-4xl pb-2 md:text-6xl font-bold mb-6 bg-linear-to-r from-lime-400 to-lime-300 bg-clip-text text-transparent">
            Why Choose Pixelix?
          </h2>
          <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
            Experience social media the way it should be - beautiful, private,
            and community-driven.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <FeatureCard
              // biome-ignore lint/suspicious/noArrayIndexKey: <explanation>
              key={index}
              icon={<feature.icon />}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
