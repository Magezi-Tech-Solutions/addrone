function Notification() {
  return (
    <section className="relative px-6 overflow-hidden bg-gradient-to-tr from-blue-600 to-indigo-600 md:px-8">
      <div className="relative flex flex-wrap py-5 mx-auto md:py-3 max-w-7xl sm:pr-5 md:pr-0 sm:flex-nowrap sm:justify-center sm:items-center">
        <div className="inline-flex items-center order-1 w-11/12 max-w-screen-sm mb-2 text-sm text-white sm:order-none sm:w-auto md:text-base sm:mb-0">
          <span className="hidden mr-2 text-2xl md:block">🎉</span> This is a
          simple call to action bar that can draw your users attention
        </div>

        <a
          href="#"
          className="order-last inline-block w-full px-4 py-3 text-sm font-semibold text-center text-indigo-600 transition duration-100 rounded-md outline-none sm:py-2 sm:order-none sm:w-auto sm:ml-4 bg-indigo-50 hover:bg-white active:bg-white focus-visible:ring ring-indigo-300 whitespace-nowrap"
        >
          Learn more
        </a>

        <div className="flex items-start justify-end order-2 w-1/12 sm:order-none sm:w-auto sm:absolute sm:right-0 sm:-mr-1 xl:mr-3">
          <button
            type="button"
            className="text-indigo-100 transition duration-100 hover:text-white active:text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-5 h-5 md:w-6 md:h-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}

export default Notification;
