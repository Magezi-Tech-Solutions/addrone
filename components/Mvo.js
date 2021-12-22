import Image from "next/image";

function Mvo() {
  return (
    <section className="w-full pb-20 overflow-x-hidden bg-black">
      <div className="max-w-5xl mx-auto md:px-8 xl:px-0">
        <div className="relative z-20 flex flex-col max-w-lg mx-auto text-center">
          <Image src="/logo.png" width="300" height="300" objectFit="contain" />

          <h1 className="inline-block w-auto font-bold text-transparent bg-gradient-to-r text-7xl from-gray-500 via-gray-200 to-gray-900 bg-clip-text">
            Welcome to the future of Drone Technology
          </h1>
          <a
            href="#_"
            className="flex items-center w-auto mx-auto mt-5 text-lg leading-tight text-center text-blue-600 hover:underline"
          >
            <span>Learn more about our latest integrations</span>
            <svg
              className="w-3 h-3 mt-0.5 ml-0.5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M9 5l7 7-7 7"
              ></path>
            </svg>
          </a>
        </div>

        <div className="flex flex-col-reverse w-full py-20 md:flex-row">
          <div className="relative z-20 flex flex-col items-center w-full space-y-1 transform md:w-1/2 lg:w-1/3 md:items-start md:translate-x-16">
            <p className="text-2xl font-bold text-yellow-600">Who Are We?</p>
            <h2 className="text-5xl font-bold text-white">Executive</h2>
            <h3 className="text-2xl font-medium text-white">Summary</h3>
            <div className="flex flex-col items-center pt-4 space-y-4 md:items-start">
              <p className="text-center text-white md:text-left">
                Addrone Digital is a value addition company within the drone
                industry. We are a registered entity under the Kenya company
                regulation act that was founded on April 30th 2018.
              </p>
              <a
                href="#_"
                className="bg-blue-600 text-white mt-8 inline-block md:mx-0 mx-auto rounded-full px-5 py-1.5"
              >
                Read More
              </a>
              <h2 className="text-5xl font-bold text-white">Mission</h2>
              <div className="flex flex-col items-center pt-4 space-y-4 md:items-start">
                <p className="text-center text-white md:text-left">
                  Provide innovative consumer rich solutions; engaging a desired
                  target audience at the right place at the right time.
                </p>
              </div>
              <h2 className="text-5xl font-bold text-white">Vision</h2>
              <div className="flex flex-col items-center pt-4 space-y-4 md:items-start">
                <p className="text-center text-white md:text-left">
                  Uniqueness in our craft <br /> to make you different!
                </p>
              </div>
            </div>
          </div>
          <div className="relative z-10 w-full overflow-hidden md:w-1/2 lg:w-2/3">
            <Image
              width="800"
              height="800"
              objectFit="contain"
              src="/drones/about1.jpg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Mvo;