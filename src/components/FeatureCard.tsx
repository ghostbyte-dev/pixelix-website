import Link from "next/link";
import type { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
  accentColor?: string;
  href?: string;
}

export default function FeatureCard({
  icon,
  title,
  description,
  accentColor = "#95dc1a",
  href,
}: FeatureCardProps) {
  // Common classes for both Link and Div wrappers
  const containerClasses =
    "group relative block w-full text-left outline-hidden";

  const CardContent = (
    <>
      {/* Card background with hover effect */}
      <div className="absolute inset-0 bg-zinc-900 rounded-2xl transition-all duration-300 group-hover:scale-[1.03]" />

      {/* Border glow effect */}
      <div
        className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:scale-[1.03]"
        style={{
          background: `linear-gradient(to bottom right, ${accentColor}33, transparent, transparent)`,
        }}
      />

      {/* Content */}
      <div className="relative p-8">
        <div
          className="w-16 h-16 rounded-xl text-black flex items-center justify-center mb-6 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
          style={{
            backgroundColor: accentColor,
            boxShadow: `0 10px 15px -3px ${accentColor}1A`,
          }}
        >
          {icon}
        </div>

        <h3
          className="text-2xl font-bold mb-4 transition-colors"
          style={{ "--hover-color": accentColor } as React.CSSProperties}
        >
          <span className="group-hover:text-(--hover-color) transition-colors">
            {title}
          </span>
        </h3>

        <p className="text-zinc-400 group-hover:text-zinc-300 transition-colors">
          {description}
        </p>

        <div
          className="mt-6 h-1.5 w-12 rounded-full group-hover:w-20 transition-all duration-300"
          style={{ backgroundColor: `${accentColor}4D` }}
        />
      </div>
    </>
  );

  if (href) {
    return (
      <Link
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={containerClasses}
      >
        {CardContent}
      </Link>
    );
  }

  return <div className={containerClasses}>{CardContent}</div>;
}
