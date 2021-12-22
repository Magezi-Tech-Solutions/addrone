import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Plans from "../components/pricing/Plans";
import PricingHero from "../components/pricing/PricingHero";

function Pricing() {
  return (
    <div>
      <Head>
        <title>AdDrone Digital | About</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Navbar />
      <PricingHero />
      <Plans />
      <Footer />
    </div>
  );
}

export default Pricing;
