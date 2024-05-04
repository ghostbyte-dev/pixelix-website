import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main
      style={{ backgroundImage: `url('../../../bg-7.jpg')` }}
      className="flex min-h-screen flex-col bg-no-repeat bg-cover bg-center bg-fixed items-center justify-between"
    >
      <div className="w-full backdrop-blur-3xl">
        <div className="h-screen w-full">
          <div className="absolute p-8 pl-12">PIXELIX</div>

          <div className="h-full w-full  flex items-center justify-center">
            <div className="container flex flex-col items-center">
              <h1 className="text-3xl font-bold text-center md:text-6xl">
                Where every pixel
              </h1>

              <h1 className="text-3xl font-bold text-center md:text-6xl pb-12">
                tells a story
              </h1>

              <Link href="https://play.google.com/store/apps/details?id=com.daniebeler.pfpixelix">
                <Image
                  src="/google-play-badge.png"
                  alt=""
                  width="250"
                  height="250"
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="flex justify-center pt-96 pb-96">
          <div className="container flex flex-row">
            <div className="basis-1/4">
              <div className="h-64 w-64 rounded-md bg-white"></div>
            </div>
            <div className="basis-3/4">
              Your personalized curation of inspiration, ideas, and must-haves,
              tailored just for you!
            </div>
          </div>
        </div>

        <section>
          <div className="p-3 text-center">
            Developed with ❤️ by{" "}
            <a href="https://daniebeler.com">
              <strong>Daniel</strong>
            </a>{" "}
            and{" "}
            <a href="https://emanuelhiebeler.me">
              <strong>Emanuel</strong>
            </a>{" "}
          </div>
        </section>
      </div>
    </main>
  );
}
