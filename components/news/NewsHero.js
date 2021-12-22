function NewsHero() {
  return (
    <section
      className="relative"
      style={{
        backgroundImage: "url(" + "/drones/d6.jpeg" + ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
    >
      <div className="absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-90"></div>

      <div className="relative z-20 px-4 py-24 mx-auto text-left text-white max-w-7xl lg:py-32">
        <div className="flex flex-wrap text-white">
          <div className="relative w-full px-4 mx-auto text-left xl:flex-grow-0 xl:flex-shrink-0">
            <h1 className="mt-0 mb-2 text-4xl font-bold text-white sm:text-5xl lg:text-7xl">
              Our Blog Post & News
            </h1>
            <p className="mt-0 mb-4 text-base text-white sm:text-lg lg:text-xl">
              Keep up with the latest news about drone technology from both
              within our company and abroad.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default NewsHero;
