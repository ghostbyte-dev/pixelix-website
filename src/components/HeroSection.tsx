import { Download, Github } from "lucide-react";
import Link from "next/link";

export default function () {
	return (
		<section className="relative overflow-hidden bg-linear-to-br from-lime-300 via-lime-400 to-lime-500 py-20 md:py-28">
			{/* Decorative elements */}
			<div className="absolute top-0 left-0 right-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />
			<div className="absolute -top-40 right-0 w-96 h-96 bg-lime-200 rounded-full opacity-20 blur-3xl" />

			{/* Grid pattern */}
			<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGZpbGw9IiMwMDAwMDAiIGZpbGwtb3BhY2l0eT0iMC4wMiIgZD0iTTAgMGg2MHY2MEgweiIvPjxwYXRoIGQ9Ik02MCAwdjYwSDBWMGg2MHpNMzAgMzBoMzBWMEgzMHYzMHpNMCA2MGgzMFYzMEgwdjMweiIgZmlsbC1vcGFjaXR5PSIuMDUiIGZpbGw9IiMwMDAiLz48L2c+PC9zdmc+')] opacity-50" />

			<div className="container mx-auto px-4 mt-10 relative z-10">
				<div className="flex flex-col lg:flex-row items-center gap-12 md:gap-20">
					{/* Left content */}
					<div className="lg:w-1/2 text-center lg:text-left">
						<div className="inline-flex items-center gap-2 px-4 py-2 bg-black/10 backdrop-blur-md rounded-full mb-6 border border-white/10">
							<span className="w-2 h-2 rounded-full bg-lime-400 animate-pulse" />
							<span className="text-sm font-medium">
								Open Source • Federated • Made for You
							</span>
						</div>

						<h1 className="text-5xl md:text-7xl font-black mb-6 leading-none tracking-tight">
							<span className="relative">
								<span className="absolute -inset-1 blur-xl bg-black/10 rounded-lg transform -skew-y-3" />
								<span className="relative inline-block text-black">
									Capture.
								</span>
							</span>
							<br />
							<span className="relative">
								<span className="absolute -inset-1 blur-xl bg-black/10 rounded-lg transform -skew-y-3" />
								<span className="relative inline-block text-black">
									Create.
								</span>
							</span>
							<br />
							<span className="relative">
								<span className="absolute -inset-1 blur-xl bg-black/10 rounded-lg transform -skew-y-3" />
								<span className="relative inline-block bg-clip-text text-transparent bg-linear-to-r from-lime-900 to-black">
									Share.
								</span>
							</span>
						</h1>

						<p className="text-xl md:text-2xl mb-8 text-black/80 max-w-xl">
							The ultimate Pixelfed experience for Android and iOS.{" "}
							<span className="font-bold">
								Your photos. Your network. Your way.
							</span>
						</p>

						<div className="flex gap-4 justify-center lg:justify-start mb-8">
							<div className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
								<Link
									href="https://play.google.com/store/apps/details?id=com.daniebeler.pfpixelix"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src="/buttons/googleplaybadge.png"
										className="h-16 object-contain"
										alt="Get it on Google Play"
									/>
								</Link>
							</div>

							<div className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
								<Link
									href="https://apps.apple.com/us/app/id6743839819"
									target="_blank"
									rel="noopener noreferrer"
								>
									<img
										src="/buttons/appstorebadgewhite.svg"
										className="h-16 object-contain"
										alt="Get it on Apple App Store"
									/>
								</Link>
							</div>
						</div>

						<div className="flex items-center gap-4 justify-center lg:justify-start">
							<div className="flex -space-x-3">
								<div className="w-10 h-10 rounded-full ring-2 ring-white bg-lime-200 flex items-center justify-center text-sm shadow-lg">
									🌟
								</div>
								<div className="w-10 h-10 rounded-full ring-2 ring-white bg-lime-300 flex items-center justify-center text-sm shadow-lg">
									👍
								</div>
								<div className="w-10 h-10 rounded-full ring-2 ring-white bg-lime-400 flex items-center justify-center text-sm shadow-lg">
									❤️
								</div>
							</div>
							<div>
								<div className="font-bold">1,300+ Downloads</div>
								<div className="text-sm text-black/60">
									Join the community today
								</div>
							</div>
						</div>
					</div>

					{/* Right content - Phone mockups */}
					<div className="lg:w-1/2 relative">
						<div className="absolute inset-0 bg-linear-to-br from-lime-400 to-lime-600 rounded-full opacity-20 blur-3xl transform scale-125" />

						{/* Main phone */}
						<div className="relative mx-auto w-[280px] md:w-[320px]">
							{/* Phone frame */}
							<div className="relative z-20 bg-black rounded-[40px] p-3 shadow-2xl shadow-black">
								{/* Phone screen */}
								<div className="w-full aspect-[9/19.5] overflow-hidden rounded-[32px] relative bg-black">
									<video
										src="/demo2.mp4"
										autoPlay
										loop
										muted
										playsInline
										className="w-full h-full object-cover"
									/>

									{/* Screen reflection overlay */}
									<div className="absolute inset-0 bg-linear-to-tr from-transparent via-white/5 to-white/10 pointer-events-none" />
								</div>
							</div>

							{/* Decorative elements */}
							<div className="absolute top-1/2 -right-20 -translate-y-1/2 w-40 h-40 bg-lime-300 rounded-full blur-xl opacity-30 animate-pulse" />
							<div className="absolute -bottom-10 -left-10 w-40 h-40 bg-lime-500 rounded-full blur-xl opacity-20" />
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
