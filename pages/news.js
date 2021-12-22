import Head from "next/head";
import Blog from "../components/Blog";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import NewsHero from "../components/news/NewsHero";

function News() {
  return (
    <div>
      <Head>
        <title>AdDrone Digital | Licenses</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Navbar />
      <NewsHero />
      <Blog />
      <Footer />
    </div>
  );
}

export default News;
