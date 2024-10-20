"use client";

import { signOut, useSession } from "next-auth/react";
import Image from "next/image";

const Page = () => {
  const { data: session } = useSession();

  return (
    <div className="bg-gradient-to-r from-[#7eff9a] to-[#4056F4] " >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="flex fled-row items-center gap-2" href="#">
              <Image src="/logo.svg" alt="logo" width={24} height={24} />
              <h2 className="text-black text-2xl">Story Board</h2>
            </a>
          </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a href="/#about" className="text-white transition hover:text-gray-500/75">About</a>
                </li>

                {
                  session ? (
                    <>
                      <li>
                        <a href="/board" className="text-white transition hover:text-gray-500/75">Board</a>
                      </li>

                      <li>
                        <button onClick={() => signOut()} className="text-white transition hover:text-gray-500/75">Sign Out</button>
                      </li>
                    </>
                  ) : (
                    <>
                      <li>
                        <a className="text-white transition hover:text-gray-500/75" href="/sign-in">Sign In</a>
                      </li>

                      <li>
                        <a className="text-white transition hover:text-gray-500/75" href="/sign-up">Sign Up</a>
                      </li>
                    </>
                  )
                }
              </ul>
            </nav>

            <div className="block md:hidden">
              <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="size-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>

      <section
        className="relative bg-[url('/STORYBOARDFINAL.png')] bg-cover bg-center bg-no-repeat">
        <div
          className="absolute inset-0 bg-gray-900/75 sm:bg-transparent sm:from-gray-900/95 sm:to-gray-900/25 ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"
        ></div>

        <div
          className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8"
        >
          <div className="max-w-xl ltr:sm:text-left rtl:sm:text-right">
            <h1 className="text-3xl font-extrabold text-gray-800 sm:text-5xl">
              Welcome to

            </h1>

            <p className="mt-4 max-w-lg text-[#4056F4] sm:text-xl/relaxed">
              Stories that Inspire, Strategies that Deliver.
            </p>

            <div className="mt-8 flex flex-wrap gap-4 text-center">

              {/* Pill */}
              <a
                className="group inline-block rounded-full bg-gradient-to-r from-[#553c9e] to-emerald-500 p-[2px] hover:text-white focus:outline-none focus:ring active:text-opacity-75"
                href="/sign-up"
              >
                <span
                  className="block rounded-full bg-white px-8 py-3 text-sm font-medium group-hover:bg-transparent"
                >
                  Get Started
                </span>
              </a>

              {/* Base */}
              <a
                className="inline-block rounded border border-zinc-500 bg-zinc-500 px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-neutral-800 focus:outline-none focus:ring active:text-white"
                href="/#about"
              >
                About Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          <div className="max-w-3xl">
            <h2 className="text-3xl font-bold sm:text-4xl">

            </h2>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
            <div className="relative h-64 overflow-hidden sm:h-80 lg:h-full">
              <img
                alt="Background"
                src="/storyboarddes.png"
                className="drop-shadow-xl block rounded-lg absolute inset-0 h-full w-full object-cover"
              />
            </div>

            <div className="lg:py-16" id="about">
              <article className="space-y-4 text-white">
                <p className="font-bold text-2xl">
                  STORYBOARD&apos;S MISSION..
                </p>
                <p>
                  is to help entrepreneurs and businesses
                  bring their visions to life through effective storyboarding.
                  We believe that every great business starts with a powerful story.
                </p>
                <p>Our vision is to foster innovation and creativity in the small business
                  community. We aim to help entrepreneurs transform their ideas into
                  actionable plans through storytelling and visual mapping. By enabling
                  users to break down their goals and strategies into manageable segments,
                  we&apos;re not just helping them plan—we&apos;re helping them envision their success.
                </p>

                <p>
                  Additionally, our platform leverages Google&apos;s Gemini to assist you in creating logos,
                  names, and catchphrases that truly reflect your brand&apos;s identity. Whether you&apos;re
                  launching a startup or looking to rebrand, our tools are designed to spark
                  creativity and streamline your branding process.
                </p>
              </article>
            </div>
          </div>
        </div>
      </section>
    </div>

  );
}

export default Page;