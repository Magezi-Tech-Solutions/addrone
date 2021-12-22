import Head from "next/head";
import Blog from "../components/Blog";
import Clients from "../components/Clients";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Mvo from "../components/Mvo";
import Navbar from "../components/Navbar";
import Services from "../components/Services";
import Team from "../components/Team";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen lg:bg-black">
      <Head>
        <title>AdDrone Digital</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Navbar />
      <Mvo />

      <main className="flex flex-col items-center justify-center flex-1 w-full text-center lg:px-20">
        <Clients />
        <Services />
        <Team />
      </main>

      <Footer />
    </div>
  );
}
