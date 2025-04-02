import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
}: FeatureCardProps) {
  return (
    <div className="group relative">
      {/* Card background with hover effect */}
      <div className="absolute inset-0 bg-zinc-900 rounded-2xl transition-all duration-300 group-hover:scale-[1.03]"></div>

      {/* Border glow effect */}
      <div className="absolute inset-0 rounded-2xl bg-linear-to-br from-lime-500/20 via-lime-500/0 to-lime-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xs"></div>

      {/* Content */}
      <div className="relative p-8 backdrop-blur-xs">
        <div className="w-16 h-16 rounded-xl bg-lime-500/10 flex items-center justify-center mb-6 group-hover:bg-lime-500/20 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-lime-500/10">
          {icon}
        </div>
        <h3 className="text-2xl font-bold mb-4 group-hover:text-lime-300 transition-colors">
          {title}
        </h3>
        <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors">
          {description}
        </p>
        <div className="mt-6 h-1.5 w-12 bg-lime-500/30 rounded-full group-hover:w-20 transition-all duration-300"></div>
      </div>
    </div>
  );
}
