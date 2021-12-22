import Head from "next/head";
import { useState } from "react";
import BusinessLicense from "../components/license/BusinessLicense";
import LicenseHero from "../components/license/LicenseHero";
import NoLicense from "../components/license/NoLicense";
import RemoteLicense from "../components/license/RemoteLicense";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function License() {
  const [current, setCurrent] = useState(1);
  return (
    <div>
      <Head>
        <title>AdDrone Digital | Licenses</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Navbar />
      <LicenseHero />
      <div className="w-full px-10 md:px-20">
        <p className="py-2 font-thin">Drone Technology</p>
        <h1 className="text-3xl font-bold">The 3 Main License Options</h1>
        <p className="text-lg font-semibold">
          Drones are being increasingly used to inspect assets such as buildings
          and roofs, but there are some rules:
        </p>
      </div>

      <div className="flex px-10 pt-10 md:px-20">
        <button
          onClick={() => setCurrent(1)}
          className={`${
            current == 1 ? "bg-[#636569] text-white" : "bg-white text-black"
          } border border-[#636569] rounded-tr-lg px-3 py-3  transition duration-150 hover:scale-105 `}
        >
          No License Required
        </button>
        <button
          onClick={() => setCurrent(2)}
          className={`${
            current == 2 ? "bg-[#636569] text-white" : "bg-white text-black"
          } border border-[#636569] rounded-tr-lg px-3 py-3  transition duration-150 hover:scale-105 `}
        >
          Remote Pilot License Required
        </button>
        <button
          onClick={() => setCurrent(3)}
          className={`${
            current == 3 ? "bg-[#636569] text-white" : "bg-white text-black"
          } border border-[#636569] rounded-tr-lg px-3 py-3  transition duration-150 hover:scale-105 `}
        >
          Business License Required
        </button>
      </div>

      <div
        className={`w-full md:px-20 px-10 py-10 ${
          current == 1 ? "inline-flex" : "hidden"
        }`}
      >
        <NoLicense />
      </div>
      <div
        className={`w-full md:px-20 px-10 py-10 ${
          current == 2 ? "inline-flex" : "hidden"
        }`}
      >
        <RemoteLicense />
      </div>
      <div
        className={`w-full md:px-20 px-10 py-10 ${
          current == 3 ? "inline-flex" : "hidden"
        }`}
      >
        <BusinessLicense />
      </div>

      <Footer />
    </div>
  );
}

export default License;
