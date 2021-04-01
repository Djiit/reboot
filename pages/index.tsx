import { useState } from "react";
import Head from "next/head";

export default function Home() {
  const [rick, setRick] = useState(false);
  return (
    <div className="max-h-screen">
      <Head>
        <title>Reboot</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {rick ? (
        <div className="relative h-full" style={{ paddingTop: "56.25%" }}>
          <iframe
            className="absolute inset-0 w-full h-full"
            src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
            frameBorder="0"
          ></iframe>
        </div>
      ) : (
        <div className="relative bg-white overflow-hidden">
          <div className="max-w-7xl mx-auto">
            <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
              <svg
                className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                fill="currentColor"
                viewBox="0 0 100 100"
                preserveAspectRatio="none"
                aria-hidden="true"
              >
                <polygon points="50,0 100,0 50,100 0,100" />
              </svg>

              <div className="relative pt-6 px-4 sm:px-6 lg:px-8">
                <nav
                  className="relative flex items-center justify-between sm:h-10 lg:justify-start"
                  aria-label="Global"
                >
                  <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                    <div className="flex items-center justify-between w-full md:w-auto">
                      <a onClick={() => setRick(true)}>
                        <span className="sr-only">Workflow</span>
                        <img
                          className="h-8 w-auto sm:h-10"
                          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
                        />
                      </a>
                      <div className="-mr-2 flex items-center md:hidden">
                        <button
                          type="button"
                          className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
                          aria-expanded="false"
                        >
                          <span className="sr-only">Open main menu</span>
                          <svg
                            className="h-6 w-6"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                            aria-hidden="true"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M4 6h16M4 12h16M4 18h16"
                            />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
                    <a
                      onClick={() => setRick(true)}
                      className="font-medium text-gray-500 hover:text-gray-900"
                    >
                      Product
                    </a>

                    <a
                      onClick={() => setRick(true)}
                      className="font-medium text-gray-500 hover:text-gray-900"
                    >
                      Features
                    </a>

                    <a
                      onClick={() => setRick(true)}
                      className="font-medium text-gray-500 hover:text-gray-900"
                    >
                      Marketplace
                    </a>

                    <a
                      onClick={() => setRick(true)}
                      className="font-medium text-gray-500 hover:text-gray-900"
                    >
                      Company
                    </a>

                    <a
                      onClick={() => setRick(true)}
                      className="font-medium text-indigo-600 hover:text-indigo-500"
                    >
                      Log in
                    </a>
                  </div>
                </nav>
              </div>


              <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                <div className="sm:text-center lg:text-left">
                  <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                    <span className="block xl:inline">
                      Never reboot a server
                    </span>
                    <span className="block text-indigo-600 xl:inline">
                      {" "}
                      yourself again
                    </span>
                  </h1>
                  <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                    Just ask me. I'll do it. For a couple beers a month. Yep.
                    I'll use magic. But not your usual magic. I'll use DevOps
                    Magic ™️
                  </p>
                  <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                    <div className="rounded-md shadow">
                      <a
                        onClick={() => setRick(true)}
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                      >
                        Reboot my server
                      </a>
                    </div>
                    <div className="mt-3 sm:mt-0 sm:ml-3">
                      <a
                        onClick={() => setRick(true)}
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-indigo-700 bg-indigo-100 hover:bg-indigo-200 md:py-4 md:text-lg md:px-10"
                      >
                        Why ?
                      </a>
                    </div>
                  </div>
                </div>
              </main>
            </div>
          </div>
          <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
            <img
              className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full"
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2850&q=80"
              alt=""
            />
          </div>
        </div>
      )}{" "}
    </div>
  );
}
