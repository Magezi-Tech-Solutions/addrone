import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Products from "../components/store/Products";
import StoreHero from "../components/store/StoreHero";

function Store() {
  return (
    <div>
      <Head>
        <title>AdDrone Digital | About</title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Navbar />
      <StoreHero />
      <Products />
      <section className="py-8 bg-white">
        <div className="container px-6 py-8 mx-auto">
          <a
            className="mb-8 text-xl font-bold tracking-wide text-gray-800 no-underline uppercase hover:no-underline"
            href="#"
          >
            CSR
          </a>

          <p className="mt-8 mb-8">
            Every peace of merchandise you purchase goes to feeding............
          </p>

          <p className="mb-8">
            Lorem ipsum dolor sit amet, consectetur <a href="#">random link</a>{" "}
            adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Vel risus commodo viverra maecenas accumsan
            lacus vel facilisis volutpat. Vitae aliquet nec ullamcorper sit.
            Nullam eget felis eget nunc lobortis mattis aliquam. In est ante in
            nibh mauris. Egestas congue quisque egestas diam in. Facilisi nullam
            vehicula ipsum a arcu. Nec nam aliquam sem et tortor consequat. Eget
            mi proin sed libero enim sed faucibus turpis in. Hac habitasse
            platea dictumst quisque. In aliquam sem fringilla ut. Gravida rutrum
            quisque non tellus orci ac auctor augue mauris. Accumsan lacus vel
            facilisis volutpat est velit egestas dui id. At tempor commodo
            ullamcorper a. Volutpat commodo sed egestas egestas fringilla. Vitae
            congue eu consequat ac.
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Store;
