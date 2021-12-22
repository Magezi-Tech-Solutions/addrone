import Head from "next/head";
import Image from "next/image";
import ContactHero from "../components/contact/ContactHero";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";

function Contact() {
  return (
    <div>
      <Head>
        <title>AdDrone Digital | Contact Us</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Navbar />
      <ContactHero />

      <section className="relative w-full bg-white">
        <div className="relative px-8 mx-auto max-w-7xl">
          <div className="absolute inset-0 flex justify-end w-full h-full bg-gray-100 opacity-10">
            <div
              className="absolute inset-0 w-full h-full bg-repeat opacity-40"
              style={{
                backgroundImage: "url(" + "/drones/dcontact.jpeg" + ")",
                backgroundPosition: "center",
                backgroundSize: "cover",
                backgroundRepeat: "no-repeat",
              }}
            ></div>
            <div className="absolute w-full h-full bg-gradient-to-r from-white to-transparent"></div>
          </div>
          <div className="relative flex flex-wrap items-center">
            <div className="relative w-full px-4 mb-12 lg:w-5/12 lg:mb-0">
              <div className="relative py-20 text-center md:py-32 xl:py-40">
                <a
                  className="flex justify-center w-full text-3xl font-bold lg:justify-start font-heading"
                  href="/"
                >
                  <div className="relative w-64 h-32 mx-auto">
                    <Image src="/logo.png" layout="fill" objectFit="contain" />
                  </div>
                </a>
                <form>
                  <div className="relative flex items-center mb-4">
                    <svg
                      className="absolute ml-4 w-8 h-8 stroke-current text-gray-200 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                    <input
                      className="w-full py-5 border border-gray-200 rounded-md pl-14 bg-gray-50 focus:bg-white focus:ring-indigo-500 focus:ring-2 focus:ring-offset-2 focus:ring-opacity-90 focus:outline-none"
                      type="text"
                      placeholder="Email Address"
                    />
                  </div>
                  <div className="relative flex items-center mb-4">
                    <svg
                      className="absolute ml-4 w-8 h-8 stroke-current text-gray-200 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                      ></path>
                    </svg>
                    <input
                      className="w-full py-5 border border-gray-200 rounded-md pl-14 bg-gray-50 focus:bg-white focus:ring-indigo-500 focus:ring-2 focus:ring-offset-2 focus:ring-opacity-90 focus:outline-none"
                      type="text"
                      placeholder="Subject"
                    />
                  </div>
                  <div className="relative flex items-center mb-4">
                    <svg
                      className="absolute ml-4 w-8 h-8 stroke-current text-gray-200 mt-0.5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                      ></path>
                    </svg>
                    <textarea
                      placeholder="Message"
                      className="w-full py-5 border border-gray-200 rounded-md pl-14 bg-gray-50 focus:bg-white focus:ring-indigo-500 focus:ring-2 focus:ring-offset-2 focus:ring-opacity-90 focus:outline-none"
                    ></textarea>
                  </div>
                  <button className="w-full px-8 py-3 mt-8 font-bold text-white uppercase bg-[#00a5b5] rounded-md md:mt-5 hover:bg-indigo-600 font-heading">
                    Contact Us
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div
          className="top-0 bottom-0 right-0 hidden bg-cover lg:block lg:absolute lg:w-3/6"
          style={{
            backgroundImage: "url(" + "/drones/dcontact.jpeg" + ")",
            backgroundPosition: "center",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
          }}
        ></div>
      </section>
      <Footer />
    </div>
  );
}

export default Contact;
