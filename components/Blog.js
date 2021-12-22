function Blog() {
  return (
    <section className="w-full bg-white">
      <div className="max-w-5xl px-10 py-10 mx-auto xl:px-0">
        <ul className="flex flex-wrap -mx-2 overflow-hidden">
          <li className="w-full px-2 my-2 overflow-hidden md:w-1/3 lg:w-1/3 xl:w-1/3">
            <a href="#_">
              <div className="relative flex items-end justify-center mx-2 overflow-hidden bg-gray-300 rounded-lg group h-96">
                <img
                  src="https://cdn.devdojo.com/images/may2021/tails-blog-1.jpg"
                  className="absolute object-cover object-center w-full h-full transition duration-300 ease-out transform scale-100 group-hover:scale-105"
                />
                <div className="absolute z-10 w-full h-full bg-gradient-to-b from-transparent to-black opacity-60"></div>
                <div className="relative z-20 p-5 text-left">
                  <span className="relative inline-block px-3 py-1 -ml-1 text-xs tracking-wide text-white uppercase">
                    <span className="absolute inset-0 transform -skew-x-6 bg-indigo-500"></span>
                    <span className="relative">Lifestyle</span>
                  </span>
                  <h2 className="my-2 font-serif text-xl font-semibold text-white">
                    The Most Popular Places to Visit in the World
                  </h2>
                  <span className="inline-block font-sans text-xs text-white">
                    Top Places
                  </span>
                </div>
              </div>
            </a>
          </li>
          <li className="w-full px-2 my-2 overflow-hidden md:w-1/3 lg:w-1/3 xl:w-1/3">
            <a href="#_">
              <div className="relative flex items-end justify-center mx-2 overflow-hidden bg-gray-300 rounded-lg group h-96">
                <img
                  src="https://cdn.devdojo.com/images/may2021/tails-blog-2.jpg"
                  className="absolute object-cover object-center w-full h-full transition duration-300 ease-out transform scale-100 group-hover:scale-105"
                />

                <div className="absolute z-10 w-full h-full bg-gradient-to-b from-transparent to-black opacity-60"></div>
                <div className="relative z-20 p-5 text-left">
                  <span className="relative inline-block px-3 py-1 -ml-1 text-xs tracking-wide text-white uppercase">
                    <span className="absolute inset-0 transform -skew-x-6 bg-red-500"></span>
                    <span className="relative">Health</span>
                  </span>
                  <h2 className="my-2 font-serif text-xl font-semibold text-white">
                    Does Exercise Help with your Productivity
                  </h2>
                  <span className="inline-block font-sans text-xs text-white">
                    Health Chat
                  </span>
                </div>
              </div>
            </a>
          </li>
          <li className="w-full px-2 my-2 overflow-hidden md:w-1/3 lg:w-1/3 xl:w-1/3">
            <a href="#_">
              <div className="relative flex items-end justify-center mx-2 overflow-hidden bg-gray-300 rounded-lg group h-96">
                <img
                  src="https://cdn.devdojo.com/images/may2021/tails-blog-3.jpg"
                  className="absolute object-cover object-center w-full h-full transition duration-300 ease-out transform scale-100 group-hover:scale-105"
                />
                <div className="absolute z-10 w-full h-full bg-gradient-to-b from-transparent to-black opacity-60"></div>
                <div className="relative z-20 p-5 text-left">
                  <span className="relative inline-block px-3 py-1 -ml-1 text-xs tracking-wide text-white uppercase">
                    <span className="absolute inset-0 transform -skew-x-6 bg-yellow-500"></span>
                    <span className="relative">Gaming</span>
                  </span>
                  <h2 className="my-2 font-serif text-xl font-semibold text-white">
                    Can Playing Video Games Help Reduce Stress?
                  </h2>
                  <span className="inline-block font-sans text-xs text-white">
                    Game Play
                  </span>
                </div>
              </div>
            </a>
          </li>
        </ul>

        <div className="flex flex-wrap mt-10 overflow-hidden">
          <div className="w-full overflow-hidden md:w-4/6 lg:w-4/6 xl:w-4/6">
            <div className="ml-2 mr-2 md:mr-4">
              <div className="pb-12">
                <a
                  href="#_"
                  className="relative block w-full overflow-hidden h-80 rounded-xl"
                >
                  <img
                    className="object-cover object-top w-full h-full transition duration-300 ease-out transform scale-100 hover:scale-105"
                    src="https://cdn.devdojo.com/images/may2021/tails-blog-4.jpg"
                    alt=""
                  />
                </a>
                <a
                  href="#_"
                  className="relative block mt-5 mb-1 text-xs font-medium tracking-wide text-green-500 uppercase"
                >
                  Travel
                </a>
                <h2 className="mb-1 font-serif text-3xl font-thin text-gray-900">
                  <a href="#_">Where to Visit on Your Next Vacation</a>
                </h2>

                <span className="block mb-5 text-xs font-normal text-gray-800">
                  <span className="ml-1 text-gray-500">
                    Written by Jane Doe on December 02, 2019
                  </span>
                </span>
                <p className="text-gray-800">
                  <span>
                    There are thousands of places you can visit on your next
                    vacation. In this post we'll show you the top destinations
                    to consider for your next adventure...
                  </span>

                  <a
                    href="#_"
                    className="inline-flex items-center inline text-sm text-gray-500 underline"
                  >
                    <span>Continue Reading</span>
                    <svg
                      className="w-3 h-3 ml-1 transform -rotate-45"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M14 5l7 7m0 0l-7 7m7-7H3"
                      ></path>
                    </svg>
                  </a>
                </p>
              </div>
              <div className="grid grid-cols-12 gap-8">
                <div className="col-span-12 md:col-span-6">
                  <a
                    href="#_"
                    className="block h-48 mb-3 overflow-hidden rounded-lg"
                  >
                    <img
                      className="object-cover object-center w-full h-full transition duration-300 ease-out transform scale-100 hover:scale-105"
                      src="https://cdn.devdojo.com/images/may2021/tails-blog-5.jpg"
                      alt=""
                    />
                  </a>
                  <h2 className="mb-2 font-serif text-lg text-gray-900">
                    <a href="#_">Time for the Beach and Friends</a>
                  </h2>
                  <p className="mb-3 text-sm text-gray-800">
                    Many people live so close to amazing scenary, yet they
                    rarely take...
                    <a
                      href="#_"
                      className="inline-flex items-center inline ml-1 text-xs text-gray-500 underline"
                    >
                      <span>Continue Reading</span>
                      <svg
                        className="w-3 h-3 ml-1 transform -rotate-45"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </a>
                  </p>
                </div>

                <div className="col-span-12 md:col-span-6">
                  <a
                    href="#_"
                    className="block h-48 mb-3 overflow-hidden rounded-lg"
                  >
                    <img
                      className="object-cover object-center w-full h-full transition duration-300 ease-out transform scale-100 hover:scale-105"
                      src="https://cdn.devdojo.com/images/may2021/tails-blog-6.jpg"
                      alt=""
                    />
                  </a>
                  <h2 className="mb-2 font-serif text-lg text-gray-900">
                    <a href="#_">Are you Ready for an Experience?</a>
                  </h2>
                  <p className="mb-3 text-sm text-gray-800">
                    Check out these awesome places you'll want to visit as you
                    set your...
                    <a
                      href="#_"
                      className="inline-flex items-center inline ml-1 text-xs text-gray-500 underline"
                    >
                      <span>Continue Reading</span>
                      <svg
                        className="w-3 h-3 ml-1 transform -rotate-45"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </a>
                  </p>
                </div>
                <div className="col-span-12 md:col-span-6">
                  <a
                    href="#_"
                    className="block h-48 mb-3 overflow-hidden rounded-lg"
                  >
                    <img
                      className="object-cover object-center w-full h-full transition duration-300 ease-out transform scale-100 hover:scale-105"
                      src="https://cdn.devdojo.com/images/may2021/tails-blog-7.jpg"
                      alt=""
                    />
                  </a>
                  <h2 className="mb-2 font-serif text-lg text-gray-900">
                    <a href="#_">Take Me Back in Time</a>
                  </h2>
                  <p className="mb-3 text-sm text-gray-800">
                    How nice would that be to go back in time and enjoy the
                    youth...
                    <a
                      href="#_"
                      className="inline-flex items-center inline ml-1 text-xs text-gray-500 underline"
                    >
                      <span>Continue Reading</span>
                      <svg
                        className="w-3 h-3 ml-1 transform -rotate-45"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </a>
                  </p>
                </div>

                <div className="col-span-12 md:col-span-6">
                  <a
                    href="#_"
                    className="block h-48 mb-3 overflow-hidden rounded-lg"
                  >
                    <img
                      className="object-cover object-center w-full h-full transition duration-300 ease-out transform scale-100 hover:scale-105"
                      src="https://cdn.devdojo.com/images/may2021/tails-blog-8.jpg"
                      alt=""
                    />
                  </a>
                  <h2 className="mb-2 font-serif text-lg text-gray-900">
                    <a href="#_">Here are the Best Ways to Train</a>
                  </h2>
                  <p className="mb-3 text-sm text-gray-800">
                    Learn about the best ways to train to get the most of your
                    workout...
                    <a
                      href="#_"
                      className="inline-flex items-center inline ml-1 text-xs text-gray-500 underline"
                    >
                      <span>Continue Reading</span>
                      <svg
                        className="w-3 h-3 ml-1 transform -rotate-45"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M14 5l7 7m0 0l-7 7m7-7H3"
                        ></path>
                      </svg>
                    </a>
                  </p>
                </div>
              </div>
            </div>

            <div className="mt-10 text-center">
              <button className="px-5 py-3 mt-5 text-sm font-medium tracking-widest text-white uppercase bg-gray-900 rounded-lg">
                Load more articles
              </button>
            </div>
          </div>

          <div className="w-full mt-12 overflow-hidden md:w-2/6 lg:w-2/6 xl:w-2/6 md:mt-0">
            <div className="ml-2 mr-2 md:ml-4">
              <div className="rounded-lg bg-gray-50 p-7">
                <div className="pb-6 text-left">
                  <h2 className="mb-1 text-lg font-medium text-gray-900">
                    Subscribe to our Newsletter
                  </h2>
                  <span className="block text-xs italic text-gray-500">
                    No Spam. Only one email per week.
                  </span>
                  <form action="">
                    <div className="mt-5 overflow-hidden bg-white border-none rounded-lg">
                      <input
                        className="w-full px-3 py-2 placeholder-gray-400 bg-transparent border-2 border-gray-200 rounded-lg focus:outline-none"
                        type="text"
                        name="name"
                        placeholder="First Name"
                      />
                    </div>
                    <div className="mt-5 overflow-hidden bg-white border-none rounded-lg">
                      <input
                        className="w-full px-3 py-2 placeholder-gray-400 bg-transparent border-2 border-gray-200 rounded-lg focus:outline-none"
                        type="email"
                        name="email"
                        placeholder="Email Address"
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 mt-5 text-sm font-medium tracking-widest text-white uppercase bg-gray-900 rounded-lg"
                    >
                      Subscribe
                    </button>
                  </form>
                </div>
              </div>
              <div className="mt-10">
                <h2 className="mb-5 text-lg font-medium text-gray-900">
                  Categories
                </h2>
                <ul>
                  <li className="flex">
                    <a
                      href="#_"
                      className="flex-1 block py-2 font-serif text-lg font-thin text-gray-900"
                    >
                      Lifestyle
                    </a>
                    <span className="p-2 text-lg font-thin text-gray-700">
                      32
                    </span>
                  </li>
                  <li className="flex">
                    <a
                      href="#_"
                      className="flex-1 block py-2 font-serif text-lg font-thin text-gray-900"
                    >
                      Health
                    </a>
                    <span className="p-2 text-lg font-thin text-gray-700">
                      41
                    </span>
                  </li>
                  <li className="flex">
                    <a
                      href="#_"
                      className="flex-1 block py-2 font-serif text-lg font-thin text-gray-900"
                    >
                      Gaming
                    </a>
                    <span className="p-2 text-lg font-thin text-gray-700">
                      27
                    </span>
                  </li>
                  <li className="flex">
                    <a
                      href="#_"
                      className="flex-1 block py-2 font-serif text-lg font-thin text-gray-900"
                    >
                      Travel
                    </a>
                    <span className="p-2 text-lg font-thin text-gray-700">
                      21
                    </span>
                  </li>
                  <li className="flex">
                    <a
                      href="#_"
                      className="flex-1 block py-2 font-serif text-lg font-thin text-gray-900"
                    >
                      Food
                    </a>
                    <span className="p-2 text-lg font-thin text-gray-700">
                      15
                    </span>
                  </li>
                  <li className="flex">
                    <a
                      href="#_"
                      className="flex-1 block py-2 font-serif text-lg font-thin text-gray-900"
                    >
                      Business
                    </a>
                    <span className="p-2 text-lg font-thin text-gray-700">
                      28
                    </span>
                  </li>
                </ul>
              </div>
              <div className="mt-12">
                <h2 className="mb-5 text-lg font-medium text-gray-900">
                  Recent Posts
                </h2>
                <ul>
                  <li className="mb-5">
                    <a href="#_" className="flex">
                      <div className="w-1/3 overflow-hidden rounded">
                        <img
                          className="object-cover object-center w-full h-full transition duration-300 ease-out transform scale-100 rounded hover:scale-105"
                          src="https://cdn.devdojo.com/images/may2021/tails-blog-9.jpg"
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col items-start justify-center w-2/3 p-2">
                        <h3 className="mb-2 font-serif font-thin text-gray-900">
                          Top Destinations to Visit in the World
                        </h3>
                        <span className="block text-xs font-thin text-gray-800">
                          January 02, 2021
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="mb-5">
                    <a href="#_" className="flex">
                      <div className="w-1/3 overflow-hidden rounded">
                        <img
                          className="object-cover object-center w-full h-full transition duration-300 ease-out transform scale-100 rounded hover:scale-105"
                          src="https://cdn.devdojo.com/images/may2021/tails-blog-10.jpg"
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col items-start justify-center w-2/3 p-2">
                        <h3 className="mb-2 font-serif font-thin text-gray-900">
                          Experience the Future of the 3d Gaming Experience
                        </h3>
                        <span className="block text-xs font-thin text-gray-800">
                          January 04, 2021
                        </span>
                      </div>
                    </a>
                  </li>
                  <li className="mb-5">
                    <a href="#_" className="flex">
                      <div className="w-1/3 overflow-hidden rounded">
                        <img
                          className="object-cover object-center w-full h-full transition duration-300 ease-out transform scale-100 rounded hover:scale-105"
                          src="https://cdn.devdojo.com/images/may2021/tails-blog-11.jpg"
                          alt=""
                        />
                      </div>
                      <div className="flex flex-col items-start justify-center w-2/3 p-2">
                        <h3 className="mb-2 font-serif font-thin text-gray-900">
                          Take a Trip to The End of The World
                        </h3>
                        <span className="block text-xs font-thin text-gray-800">
                          January 05, 2021
                        </span>
                      </div>
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Blog;
