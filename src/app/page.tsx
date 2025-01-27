"use client";

import Image from "next/image";
import Link from "next/link";
import { EffectCards } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/bundle";

export default function Home() {
  return (
    <main className="text-[#101318] bg-gradient-to-tr from-[#D4DD46] to-[#7FB246]">
      <div className="absolute p-10">
        <img src="/logo_dark.svg" alt="" className="w-8 pointer-events-none" />
      </div>

      <div className="w-full">
        <section className="lg:h-screen max-w-6xl w-4/5 mx-auto">
          <div className="lg:h-full w-full pt-36 lg:pt-0 flex items-center lg:justify-between flex-wrap">
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-normal">
              <div>
                <h1 className="text-4xl font-extrabold md:text-6xl mb-5">
                  <span>
                    Where every <br />
                  </span>
                  <span>
                    Pixel tells <br />
                  </span>
                  <span>a story</span>
                </h1>

                <Link href="https://play.google.com/store/apps/details?id=com.daniebeler.pfpixelix">
                  <Image
                    src="/google-play-badge.png"
                    alt=""
                    width="282"
                    height="84"
                    className="transition-transform duration-300 hover:scale-95 inline-block"
                  />
                </Link>
              </div>
            </div>
            <div className="w-full lg:w-1/2 flex justify-center lg:justify-end mt-32 lg:mt-0 mb-32 lg:mb-0">
              <div className="lg:mr-16">
                <Swiper
                  className="w-[320px] max-w-[50vw] aspect-[1080/2400]"
                  slidesPerView={"auto"}
                  effect={"cards"}
                  modules={[EffectCards]}
                >
                  <SwiperSlide>
                    <Image
                      src="/screenshots/screen_1.png"
                      alt=""
                      fill
                      className="rounded-xl"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src="/screenshots/screen_2.png"
                      alt=""
                      fill
                      className="rounded-xl"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src="/screenshots/screen_3.png"
                      alt=""
                      fill
                      className="rounded-xl"
                    />
                  </SwiperSlide>
                  <SwiperSlide>
                    <Image
                      src="/screenshots/screen_4.png"
                      alt=""
                      fill
                      className="rounded-xl"
                    />
                  </SwiperSlide>
                </Swiper>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-6xl w-4/5 mb-20 mx-auto flex items-center flex-wrap md:justify-between justify-center flex-col md:flex-row">
          <div className="md:flex md:w-full md:justify-between">
            <div className="mb-12">
              <Image
                src="/download.svg"
                alt=""
                width={50}
                height={50}
                className="mb-3"
              />
              <p className="text-7xl font-bold">850+</p>
              <p>Downloads from Play Store</p>
            </div>

            <div className="mb-12">
              <Image
                src="/star.svg"
                alt=""
                width={50}
                height={50}
                className="mb-3"
              />
              <p className="text-7xl font-bold">110+</p>
              <p>Stars on Github</p>
            </div>

            <div className="mb-12">
              <Image
                src="/language.svg"
                alt=""
                width={50}
                height={50}
                className="mb-3"
              />
              <p className="text-7xl font-bold">11+</p>
              <p>Supported languages</p>
            </div>
          </div>
        </section>

        {/* <section className="max-w-6xl w-4/5 mx-auto">
          <div className="grid grid-cols-4 gap-4">
            <div className="relative">
              <div className="w-full aspect-square"></div>
              <div className="w-full aspect-square"></div>
              <Image
                src="/screenshots/screen_1.png"
                alt=""
                layout="responsive"
                height={16}
                width={12}
                className="rounded-xl"
              />
            </div>
            <div className="relative">
              <div className="w-full aspect-square"></div>
              <Image
                src="/screenshots/screen_1.png"
                alt=""
                layout="responsive"
                height={16}
                width={12}
                className="mt-12 rounded-xl"
              />
            </div>

            <div className="relative">
              <Image
                src="/screenshots/screen_1.png"
                alt=""
                layout="responsive"
                height={16}
                width={12}
                className="mt-12 rounded-xl"
              />

              <Image
                src="/screenshots/screen_1.png"
                alt=""
                layout="responsive"
                height={16}
                width={12}
                className="mt-4 rounded-xl"
              />
            </div>

            <div className="relative">
              <div className="w-full aspect-square"></div>
              <Image
                src="/screenshots/screen_1.png"
                alt=""
                layout="responsive"
                height={16}
                width={12}
                className="mt-12 rounded-xl"
              />
            </div>
          </div>
        </section> */}

        <section className="max-w-6xl w-4/5 mx-auto">
          <h2 className="text-3xl md:text-5xl text-center mt-12 mb-6 font-extrabold">
            Free as in Free Beer 🍻
          </h2>

          <div className="flex flex-col md:flex-row items-start justify-between gap-6">
            {/* Text Section */}
            <div className="flex-1">
              <p>
                We believe everyone should have access to our app without any
                barriers. That's why Pixelix is available for free on:
              </p>

              <ul className="list-disc list-inside">
                <li>
                  <strong>F-Droid</strong>: The trusted repository for
                  open-source apps.
                </li>
                <li>
                  <strong>IzzyOnDroid</strong>: Another great platform for free
                  software enthusiasts.
                </li>
                <li>
                  <strong>GitHub</strong>: Get the source code or build it
                  yourself, no strings attached.
                </li>
              </ul>

              <div className="flex space-x-5 mt-5 mb-5">
                <Link
                  href="https://f-droid.org/de/packages/com.daniebeler.pfpixelix/"
                  className="transition-transform duration-300 hover:scale-95 inline-block"
                >
                  <Image
                    src="/buttons/fdroid.png"
                    alt="Download on Google Play"
                    width="282"
                    height="84"
                  />
                </Link>
                <Link
                  href="https://apt.izzysoft.de/fdroid/index/apk/com.daniebeler.pfpixelix"
                  className="transition-transform duration-300 hover:scale-95 inline-block"
                >
                  <Image
                    src="/buttons/izzyondroid.png"
                    alt="Download on Google Play"
                    width="282"
                    height="84"
                  />
                </Link>
              </div>

              <p>
                To support our work, the app is also available on the Google
                Play Store for a small fee of €2. By purchasing it there, you
                help us continue improving and maintaining the app—thank you for
                your support!
              </p>

              <p>
                Whether you grab it for free or choose to support us, you'll
                always get the same great experience.
              </p>
            </div>
          </div>
        </section>

        <section className="max-w-6xl w-4/5 mx-auto mt-20">
          <h2 className="text-3xl md:text-5xl text-center mb-6 font-extrabold">
            Free as in Freedom
          </h2>

          <p>
            <strong>Pixelix</strong> is fully <strong>open-source</strong>,
            available on <strong>GitHub</strong>. This means you have the power
            to explore the code, modify it to suit your needs, and even
            contribute back to the project. Built with transparency and trust,
            we ensure there are no hidden trackers or surprises. Join a global
            community of contributors and make social media the way it should be
            — free and open for all.
          </p>

          <div className="w-full aspect-video relative mt-4 mb-5">
            <Image fill src="/github.png" alt="" className="rounded-xl" />
          </div>

          <Link href="https://play.google.com/store/apps/details?id=com.daniebeler.pfpixelix">
            <div className="bg-black p-5 rounded-lg text-white font-bold transition-transform duration-300 hover:scale-95 inline-block">
              Check out the repository
            </div>
          </Link>
        </section>

        <section className="max-w-6xl w-4/5 mx-auto mt-20">
          <h2 className="text-3xl md:text-5xl text-center mb-6 font-extrabold">
          Developed with ❤️
          </h2>

          <div className="flex flex-wrap">
            <div className="w-full md:p-4 md:w-1/2 text-white mt-5">
              <div className="p-4 bg-black rounded-xl flex flex-col items-center">
                <Image
                  src="/about/daniel.webp"
                  alt=""
                  width={120}
                  height={120}
                  className="rounded-full"
                />

                <h3 className="text-2xl mb-3 mt-3 font-bold">Daniel Hiebeler</h3>
                <p className="">
                  I am 21 years old and from Lustenau. In 2022, I graduated from
                  HTL Dornbirn in Business Informatics. After my civilian
                  service in a kindergarten, I moved to Vienna in October 2023
                  to study Informatics at the Technical University. My passion
                  for technology began early - I started developing Android
                  games at 13 and have been programming with enthusiasm ever
                  since.
                </p>

                <div className="pb-6 mt-4 flex items-center space-x-4 w-full">
                  <Link
                    href="https://pixelix.social/daniebeler"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform duration-300 hover:scale-95"
                  >
                    <Image
                      src="/social-icons/pixelfed.svg"
                      width={30}
                      height={30}
                      alt=""
                    />
                  </Link>

                  <Link
                    href="https://techhub.social/@daniebeler"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform duration-300 hover:scale-95"
                  >
                    <Image
                      src="/social-icons/mastodon.svg"
                      width={30}
                      height={30}
                      alt=""
                    />
                  </Link>

                  <Link
                    href="https://github.com/daniebeler"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform duration-300 hover:scale-95"
                  >
                    <Image
                      src="/social-icons/github.svg"
                      width={30}
                      height={30}
                      alt=""
                    />
                  </Link>
                </div>

                <Link
                  href="https://daniebeler.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-300 hover:scale-95"
                >
                  daniebeler.com
                </Link>
              </div>
            </div>

            <div className="w-full md:p-4 md:w-1/2 text-white mt-5">
              <div className="p-4 bg-black rounded-xl flex flex-col items-center">
                <Image
                  src="/about/emanuel.webp"
                  alt=""
                  width={120}
                  height={120}
                  className="rounded-full"
                />

                <h3 className="text-2xl mb-3 mt-3 font-bold">Emanuel Hiebeler</h3>
                <p className=""></p>

                <div className="pb-6 mt-4 flex items-center space-x-4 w-full">
                  <Link
                    href="https://pixelix.social/hiebeler05"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform duration-300 hover:scale-95"
                  >
                    <Image
                      src="/social-icons/pixelfed.svg"
                      width={30}
                      height={30}
                      alt=""
                    />
                  </Link>

                  <Link
                    href="https://techhub.social/@hiebeler05"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform duration-300 hover:scale-95"
                  >
                    <Image
                      src="/social-icons/mastodon.svg"
                      width={30}
                      height={30}
                      alt=""
                    />
                  </Link>

                  <Link
                    href="https://github.com/Hiebeler"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="transition-transform duration-300 hover:scale-95"
                  >
                    <Image
                      src="/social-icons/github.svg"
                      width={30}
                      height={30}
                      alt=""
                    />
                  </Link>
                </div>

                <Link
                  href="https://emanuelhiebeler.me/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-transform duration-300 hover:scale-95"
                >
                  emanuelhiebeler.me
                </Link>
              </div>
            </div>
          </div>
        </section>

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
