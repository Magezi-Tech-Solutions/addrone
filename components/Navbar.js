import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { BsWhatsapp } from "react-icons/bs";
import { MdShoppingBasket, MdSupportAgent } from "react-icons/md";

function Navbar() {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    if (showMenu) {
      setShowMenu(false);
    } else {
      setShowMenu(true);
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-screen h-24 select-none  bg-gradient-to-r from-[#ffe800] to-[#00a5b5]">
      <div className="container relative flex flex-wrap items-center justify-between h-24 mx-auto overflow-hidden font-medium border-b border-gray-200 md:overflow-visible lg:justify-center sm:px-4 md:px-2">
        <div className="flex items-center justify-start w-1/4 h-full pr-4">
          <Link href="/">
            <div className="inline-block py-4 md:py-0">
              <span className="p-1 text-xl font-black leading-none text-gray-900">
                <span>AdDrone</span>
                <span className="hidden sm:hidden lg:inline-flex text-[#00a5b5]">
                  {" "}
                  Digital
                </span>
              </span>
            </div>
          </Link>
        </div>
        <div
          className={`top-0 left-0 items-start hidden w-full h-full p-4 text-sm bg-gray-900 bg-opacity-50 md:items-center md:w-3/4 absolute lg:text-base md:bg-transparent md:p-0 md:relative md:flex`}
        >
          <div className="flex-col w-full h-auto overflow-hidden bg-white rounded-lg md:bg-transparent md:overflow-visible md:rounded-none md:relative md:flex md:flex-row">
            <Link href="/">
              <div className="inline-flex items-center block w-auto h-16 px-6 text-xl font-black leading-none text-gray-900 md:hidden">
                AdDrone<span className="text-[#00a5b5] ">Digital</span>
              </div>
            </Link>
            <div className="flex flex-col items-start justify-center w-full space-x-6 text-center lg:space-x-8 md:w-2/3 md:mt-0 md:flex-row md:items-center">
              <Link href="/">
                <div className="navbarLink">Home</div>
              </Link>
              <Link href="/pricing">
                <div className="navbarLink">Pricing</div>
              </Link>
              <Link href="/tips">
                <div className="navbarLink">Tips</div>
              </Link>
              <Link href="/store">
                <div className="navbarLink">
                  <MdShoppingBasket className="text-3xl" />
                </div>
              </Link>
              <Link href="/license">
                <div className="navbarLink">Licenses</div>
              </Link>
              <Link href="/news">
                <div className="navbarLink">News</div>
              </Link>
              <Link href="/contact">
                <div className="navbarLink">Contact</div>
              </Link>
            </div>
            <div className="flex flex-col items-start justify-end w-full pt-4 md:items-center md:w-1/3 md:flex-row md:py-0">
              <a
                href="#"
                className="flex items-center w-full px-6 py-2 mr-0 text-2xl text-[whitesmoke] md:px-0 lg:pl-2 md:mr-4 lg:mr-5 md:w-auto"
              >
                <BsWhatsapp />
              </a>
              <a
                href="#_"
                className="inline-flex items-center w-full px-6 py-3 text-2xl font-medium leading-4 text-gray-900 bg-[#00a5b5] md:px-3 md:w-auto md:rounded-full lg:px-5 hover:bg-[#ffe800] focus:outline-none md:focus:ring-2 focus:ring-0 focus:ring-offset-2 focus:ring-indigo-600"
              >
                <MdSupportAgent />
              </a>
            </div>
          </div>
        </div>
        <div
          onClick={toggleMenu}
          className="absolute right-0 flex flex-col items-center justify-center w-10 h-10 bg-white rounded-full cursor-pointer md:hidden hover:bg-gray-100"
        >
          <svg
            className={`${showMenu ? "hidden" : ""} w-6 h-6 text-gray-700`}
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
          <svg
            className={`${showMenu ? "" : "hidden"} w-6 h-6 text-gray-700`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            ></path>
          </svg>
        </div>
      </div>

      <div
        onClick={() => setShowMenu(false)}
        className={`absolute lg:hidden w-screen z-40 bg-black bg-opacity-70 h-screen ${
          showMenu ? "flex" : "hidden"
        }`}
      ></div>
      <div
        className={`w-64 lg:hidden ${
          showMenu ? "flex" : "hidden"
        } fixed h-screen left-0 top-0  z-50 bg-[whitesmoke] `}
      >
        <div className="flex flex-col items-center justify-between">
          <div>
            <Link href="/">
              <div>
                <Image
                  src="/logo.png"
                  alt="AdDrone Digital"
                  objectFit="contain"
                  width="300"
                  height="300"
                />
              </div>
            </Link>
          </div>
          <div className="items-center w-full pl-10 text-xl">
            <Link href="/">
              <div className="navbarLink">Home</div>
            </Link>
            <Link href="/pricing">
              <div className="navbarLink">Pricing</div>
            </Link>
            <Link href="/tips">
              <div className="navbarLink">Tips</div>
            </Link>
            <Link href="/store">
              <div className="navbarLink">
                <MdShoppingBasket className="text-3xl" />
              </div>
            </Link>
            <Link href="/license">
              <div className="navbarLink">Licenses</div>
            </Link>
            <Link href="/news">
              <div className="navbarLink">News</div>
            </Link>
            <Link href="/contact">
              <div className="navbarLink">Contact</div>
            </Link>
          </div>
          <div>
            <p className="mt-8 text-base leading-6 text-center text-gray-900">
              © 2021 AdDrone Digital. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
