import Image from "next/image";

export default function Home() {
  return (
    <main
      style={{ backgroundImage: `url('../../../bg-5.jpg')` }}
      className="flex min-h-screen flex-col bg-no-repeat bg-cover bg-center bg-fixed items-center justify-between"
    >
      <div className="w-full backdrop-blur-3xl">
        <div className="h-screen w-full">
          <div className="h-full w-full  flex items-center justify-center">
            <div className="container">
              <h1 className="text-6xl font-bold text-center">Where Moments</h1>

              <h1 className="text-6xl font-bold text-center">
                Become Masterpieces
              </h1>
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
          <div className="p-3 text-center">Developed with ❤️ by <strong>Daniel</strong> and Emanuel</div>
        </section>
      </div>
    </main>
  );
}
