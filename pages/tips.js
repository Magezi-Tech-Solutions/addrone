import Head from "next/head";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import TipsHero from "../components/tips/tipsHero";

function Tips() {
  return (
    <div className="">
      <Head>
        <title>AdDrone Digital | Tips </title>
        <link rel="icon" href="/logo.png" />
      </Head>
      <Navbar />
      <TipsHero />

      <section className="relative bg-white min-w-screen animation-fade animation-delay">
        <div className="px-0 px-8 mx-auto sm:px-12 xl:px-5">
          <div className="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
            <h3 className="text-lg font-bold text-[#00a5b5] sm:text-xl md:text-2xl">
              1. Certification
            </h3>
            <p className="mt-2 text-base font-thin text-gray-600 sm:text-lg md:text-normal">
              Drone operators must be certified by CASA (the Civil Aviation
              Safety Authority), in order for them to be allowed to do business
              with you. The certificate is referred to as an RPA Operator’s
              Certificate ‘ReOC’ (previously referred to as an Unmanned
              Operator’s Certificate ‘UOC’).
            </p>
            <p className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
              As of 29/09/16 organisations which operate ‘Very Small Remotely
              Piloted Aircraft’ (VSRPA) weighing less than 2 kg may also fly
              their drone for commercial use (for money), provided they have an
              Aviation Reference Number (ARN), and have successfully notified
              CASA via the CASA RPAS notification form.
            </p>
            <p className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
              While we require all operators listed on dronesforhire.com.au to
              provide their CASA certification number, or indicate that they
              have successfully completed the CASA RPAS notification process,
              (sub-2kg drone operators), you should satisfy yourself that your
              chosen operator’s certificate or RPAS notification is valid and
              that it permits the operator to carry out the kind of work you are
              asking them to do. Engaging a non-certified, non-validated or
              uninsured drone operator may expose you to substantial damages or
              compensation claims.
            </p>
          </div>
          <div className="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
            <h3 className="text-lg font-bold text-[#00a5b5] sm:text-xl md:text-2xl">
              2. Insurance
            </h3>
            <p className="mt-2 text-base font-thin text-gray-600 sm:text-lg md:text-normal">
              Drone operators must be certified by CASA (the Civil Aviation
              Safety Authority), in order for them to be allowed to do business
              with you. The certificate is referred to as an RPA Operator’s
              Certificate ‘ReOC’ (previously referred to as an Unmanned
              Operator’s Certificate ‘UOC’).
            </p>
            <p className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
              We strongly recommend you satisfy yourself that your chosen drone
              operator holds a current public liability insurance policy that
              specifically covers the operation of a drone (RPA) for your
              project. The public liability insurance policy should also cite
              the names of the persons who will be controlling the actual
              drone/s during your project.
            </p>
          </div>
          <div className="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
            <h3 className="text-lg font-bold text-[#00a5b5] sm:text-xl md:text-2xl">
              3. Travel expenses
            </h3>
            <p className="mt-2 text-base font-thin text-gray-600 sm:text-lg md:text-normal">
              Drone operators must be certified by CASA (the Civil Aviation
              Safety Authority), in order for them to be allowed to do business
              with you. The certificate is referred to as an RPA Operator’s
              Certificate ‘ReOC’ (previously referred to as an Unmanned
              Operator’s Certificate ‘UOC’).
            </p>
            <p className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
              Drone operators that do not have an office near the area that your
              job is located in sometimes add travel expenses to their quote.
              Please discuss this with them directly.
            </p>
          </div>
          <div className="w-full px-6 py-6 mx-auto mt-10 bg-white border border-gray-200 rounded-lg sm:px-8 md:px-12 sm:py-8 sm:shadow lg:w-5/6 xl:w-2/3">
            <h3 className="text-lg font-bold text-[#00a5b5] sm:text-xl md:text-2xl">
              4. Job approval
            </h3>
            <p className="mt-2 text-base font-thin text-gray-600 sm:text-lg md:text-normal">
              Drone operators must be certified by CASA (the Civil Aviation
              Safety Authority), in order for them to be allowed to do business
              with you. The certificate is referred to as an RPA Operator’s
              Certificate ‘ReOC’ (previously referred to as an Unmanned
              Operator’s Certificate ‘UOC’).
            </p>
            <p className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
              Depending on the nature of the job, the job location and various
              other factors, drone operators may need to request approval from
              CASA/Air Services before commencing your work.
            </p>
            <p className="mt-2 text-base text-gray-600 sm:text-lg md:text-normal">
              You should ask your chosen operator about this directly before the
              commencement of any work.
            </p>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}

export default Tips;
