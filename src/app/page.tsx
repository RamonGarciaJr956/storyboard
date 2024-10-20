//import React from "react";
//import imageToAdd from "C:\Users\jades\Downloads\STORYBOARD.png";

const Page = () => {
    return ( 
        
        <div className= "bg-gradient-to-r from-[#7eff9a] to-[#4056F4] " >
        
          
            <header className="bg-black"></header>
            <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
            <div className="flex h-16 items-center justify-between">
            <div className="flex-1 md:flex md:items-center md:gap-12">
              <a className="block text-emerald-400" href="#">
                <span className="sr-only">Home</span>
                <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="102" height="120">
                <path d="M0 0 C2 2.25 2 2.25 3 5 C2.32523359 8.54252363 1.42430792 9.69237675 -1.5 11.8125 C-4 13 -4 13 -6 13 C-7.08017092 16.51910051 -7.1394238 19.79193505 -7.16113281 23.46166992 C-7.17554413 25.42972847 -7.17554413 25.42972847 -7.19024658 27.43754578 C-7.19509612 28.86851832 -7.19937456 30.2994929 -7.203125 31.73046875 C-7.2088825 33.2053477 -7.21464015 34.68022664 -7.22039795 36.15510559 C-7.23089437 39.24769436 -7.23674533 42.34025726 -7.24023438 45.43286133 C-7.24570407 49.37569995 -7.26970481 53.31819062 -7.29820633 57.26092052 C-7.31693059 60.30917829 -7.32204357 63.35735405 -7.32357025 66.40566444 C-7.32657731 67.85798346 -7.33453926 69.31030171 -7.34775543 70.76256371 C-7.42537326 79.95041129 -7.39246586 88.65216112 -1.8125 96.375 C4.61556232 102.37452484 11.25839595 102.5031778 19.72265625 102.27734375 C25.76449232 101.76605607 29.23936121 100.08646168 33.375 95.5625 C35.43752199 93.09740019 36.40206839 91.16347539 37 88 C36.28457031 88.32097656 35.56914063 88.64195313 34.83203125 88.97265625 C29.62750983 90.86064126 23.89057289 91.13575629 18.68359375 89.08984375 C12.67391705 85.54333625 8.08812921 80.76300273 6 74 C5.67091166 70.91669463 5.62454969 67.84516688 5.59375 64.74609375 C5.58234985 63.84939468 5.57094971 62.95269562 5.5592041 62.02882385 C5.54034608 60.13181237 5.5272528 58.23473599 5.51953125 56.33764648 C5.50022317 53.47063759 5.43819701 50.6065644 5.375 47.74023438 C5.25371304 37.28151408 5.43390706 28.6688785 12 20 C20.30133257 11.88441655 29.13462579 11.50500925 40.24047852 11.49804688 C50.90578455 11.72096199 57.57455134 14.59682029 65.5 21.875 C68.87024928 25.54591468 71.28478328 29.32136428 73 34 C73.3393457 34.92039063 73.67869141 35.84078125 74.02832031 36.7890625 C75.65067354 42.56483916 75.32535195 48.57642286 75.3359375 54.52734375 C75.3459227 56.48167076 75.3459227 56.48167076 75.35610962 58.47547913 C75.36803638 61.22481605 75.37179508 63.97402774 75.37060547 66.72338867 C75.3704022 70.22810925 75.39773212 73.73201972 75.43214989 77.23654842 C75.45986645 80.60432437 75.45857028 83.97195543 75.4609375 87.33984375 C75.47530853 88.58902084 75.48967957 89.83819794 75.50448608 91.12522888 C75.46244282 99.17444973 74.71741502 104.96652946 69.0703125 111.09375 C65.84875938 113.42258358 63.66325644 114.88737155 59.6875 115.5625 C57 115 57 115 55.125 113.875 C53.36223145 110.93705242 53.33916562 109.37025536 54 106 C55.56330872 104.84835815 55.56330872 104.84835815 57.48754883 103.64013672 C60.0183878 101.54663387 60.89845282 100.43663908 61.65072632 97.20196533 C61.87704093 93.64079826 61.89118434 90.13817851 61.82421875 86.5703125 C61.82380081 85.26601288 61.82338287 83.96171326 61.82295227 82.6178894 C61.81974303 79.86195136 61.79288415 77.10761553 61.74780273 74.35205078 C61.6912429 70.83924818 61.6829348 67.32844738 61.69121075 63.81526375 C61.69470068 60.44170135 61.66497757 57.06876313 61.63671875 53.6953125 C61.63474739 51.81684128 61.63474739 51.81684128 61.63273621 49.90042114 C61.49911831 42.81978915 60.85705049 38.0002518 57 32 C54.62157423 29.59593616 54.62157423 29.59593616 52 28 C51.401875 27.608125 50.80375 27.21625 50.1875 26.8125 C43.44137882 24.30679785 33.88564143 23.5940105 27.125 26.3125 C23.67112032 28.17759503 21.74266809 29.51466383 20 33 C19.87639073 35.95444891 19.81156175 38.88437949 19.796875 41.83984375 C19.78832489 43.15668907 19.78832489 43.15668907 19.77960205 44.50013733 C19.77014849 46.35872185 19.76361666 48.21732316 19.75976562 50.07592773 C19.75005065 52.92265939 19.71902721 55.76867198 19.6875 58.61523438 C19.68097094 60.41926654 19.67572009 62.22330387 19.671875 64.02734375 C19.6595282 64.88053696 19.6471814 65.73373016 19.63446045 66.61277771 C19.49768602 70.95751519 19.49768602 70.95751519 21.37384033 74.69410706 C23.61412598 76.49317592 25.13250907 76.86345281 28 77 C30.2831838 75.8584081 32.19012683 74.80987317 34 73 C34.9669173 67.09106096 35.08290465 61.19613817 34.83984375 55.2265625 C35.02322013 52.67718363 35.63965482 51.15190491 37 49 C39.79870027 47.60064987 41.90498792 47.74734595 45 48 C47.03003274 49.52886969 47.88679837 50.42370367 48.38095093 52.93937683 C48.3845311 54.03902519 48.3845311 54.03902519 48.38818359 55.16088867 C48.39764008 55.99573288 48.40709656 56.83057709 48.4168396 57.6907196 C48.41076691 58.59071182 48.40469421 59.49070404 48.3984375 60.41796875 C48.40130768 61.34918045 48.40417786 62.28039215 48.40713501 63.23982239 C48.40917743 65.21270352 48.40363519 67.18560482 48.39111328 69.15844727 C48.37515248 72.15883567 48.39090903 75.15785838 48.41015625 78.15820312 C48.40817208 80.07812795 48.40432482 81.99805193 48.3984375 83.91796875 C48.40451019 84.80783981 48.41058289 85.69771088 48.4168396 86.61454773 C48.32904668 94.51146975 46.53061422 101.47564979 40.9375 107.32421875 C32.94206576 114.23962458 25.68102252 115.5631922 15.375 115.6875 C13.92685913 115.71638306 13.92685913 115.71638306 12.44946289 115.74584961 C3.3746891 115.59807215 -4.40743647 112.33571041 -11 106 C-12.94921875 103.4140625 -12.94921875 103.4140625 -14.6875 100.625 C-15.55955078 99.25214844 -15.55955078 99.25214844 -16.44921875 97.8515625 C-19.41669936 92.39498606 -20.25407634 87.75245666 -20.29052734 81.56103516 C-20.29724457 80.84149155 -20.30396179 80.12194794 -20.31088257 79.38059998 C-20.3297832 77.0166827 -20.3337826 74.6530505 -20.3359375 72.2890625 C-20.3423706 70.63528327 -20.34909934 68.98150516 -20.35610962 67.32772827 C-20.36806228 63.86624514 -20.37179249 60.40486167 -20.37060547 56.94335938 C-20.37040231 52.5228195 -20.39770948 48.10292274 -20.43214989 43.68253517 C-20.4544612 40.26800643 -20.45844173 36.85363148 -20.45738602 33.43903732 C-20.45973541 31.81005003 -20.46852146 30.18105806 -20.48405075 28.5521431 C-20.63355891 11.25136677 -20.63355891 11.25136677 -14.18359375 3.94140625 C-13.60738281 3.48636719 -13.03117188 3.03132812 -12.4375 2.5625 C-11.85871094 2.08941406 -11.27992187 1.61632812 -10.68359375 1.12890625 C-6.96717788 -1.36307562 -4.17390587 -1.21738921 0 0 Z " fill="#313131" transform="translate(23,2)"/>
                <path d="M0 0 C0.66 0.33 1.32 0.66 2 1 C0.02 3.31 -1.96 5.62 -4 8 C-4.99 7.67 -5.98 7.34 -7 7 C-4.78071806 4.09197539 -3.07030857 2.04687238 0 0 Z " fill="#4F4F4E" transform="translate(40,18)"/>
                </svg>
              </a>
            </div>

          <div className="md:flex md:items-center md:gap-12">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-sm">
                <li>
                  <a className="text-white transition hover:text-gray-500/75" href="#"> About </a>
                </li>

                <li>
                  <a className="text-white transition hover:text-gray-500/75" href="#"> FAQs </a>
                </li>

                <li>
                  <a className="text-white transition hover:text-gray-500/75" href="#"> Account </a>
                </li>

                <li>
                  <div>
                            <label htmlFor="OrderNotes" className="sr-only">Order notes</label>
                            <div
                                className="overflow-hidden text-center text-white underline "
                            >
                          
                            </div>
                  <a className="text-white transition hover:text-gray-500/75" href="board"> Boards </a>
                  </div>
                </li>

                <li>
                  <a className="text-white transition hover:text-gray-500/75" href="#"> Settings </a>
                </li>
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
            href="#"
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
              href="#"
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
          alt=""
          src="/storyboarddes.png"
          className="drop-shadow-xl block rounded-lg absolute inset-0 h-full w-full object-cover"
        />
      </div>

      <div className="lg:py-16">
        <article className="space-y-4 text-white">
          <p className="font-bold text-2xl">
            STORYBOARD'S MISSION..
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
             we’re not just helping them plan—we're helping them envision their success.
            </p>

          <p>
          Additionally, our platform leverages Google's Gemini to assist you in creating logos, 
          names, and catchphrases that truly reflect your brand’s identity. Whether you’re 
          launching a startup or looking to rebrand, our tools are designed to spark 
          creativity and streamline your branding process.
          </p>
        </article>
      </div>
    </div>
  </div>
</section>
<section>
  {/* FAQ*/}
  <div className="space-y-4">
  <details
    className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
    open
  >
    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
      <h2 className="text-lg font-medium text-gray-900">
        Lorem ipsum dolor sit amet consectetur adipisicing?
      </h2>

      <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-gray-700">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in,
      recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo
      consequuntur distinctio corporis earum similique!
    </p>
  </details>

  <details
    className="group border-s-4 border-green-500 bg-gray-50 p-6 [&_summary::-webkit-details-marker]:hidden"
  >
    <summary className="flex cursor-pointer items-center justify-between gap-1.5">
      <h2 className="text-lg font-medium text-gray-900">
        Lorem ipsum dolor sit amet consectetur adipisicing?
      </h2>

      <span className="shrink-0 rounded-full bg-white p-1.5 text-gray-900 sm:p-3">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="size-5 shrink-0 transition duration-300 group-open:-rotate-45"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
            clipRule="evenodd"
          />
        </svg>
      </span>
    </summary>

    <p className="mt-4 leading-relaxed text-gray-700">
      Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ab hic veritatis molestias culpa in,
      recusandae laboriosam neque aliquid libero nesciunt voluptate dicta quo officiis explicabo
      consequuntur distinctio corporis earum similique!
    </p>
  </details>
</div>
</section>
        </div>

     );
}
 
export default Page;