import Image from "next/image";
import { useState } from "react";

function Calculator() {
  const [drones, setDrones] = useState(0);
  const [hours, setHours] = useState(0);
  const [acres, setAcres] = useState(0);
  return (
    <div className="w-full bg-gray-100">
      <h1 className="max-w-md text-4xl font-extrabold text-gray-900 sm:mx-auto lg:max-w-none lg:text-5xl sm:text-center">
        Quote Calculator
      </h1>
      <p className="max-w-md mx-auto mt-5 text-lg text-gray-500 lg:max-w-none lg:text-xl sm:text-center">
        Generate a personalized quote based on your personal needs.
      </p>
      <section className="max-w-4xl p-6 mx-auto mt-20 bg-[#636569] rounded-md shadow-md dark:bg-gray-800">
        <h1 className="text-xl font-bold text-white capitalize dark:text-white">
          Specifications
        </h1>
        <form>
          <div className="grid grid-cols-1 gap-6 mt-4 sm:grid-cols-2">
            <div>
              <label
                className="text-white dark:text-gray-200"
                for="passwordConfirmation"
              >
                Spraying Crops
              </label>
              <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                <option>No</option>
                <option>Yes</option>
              </select>
            </div>

            <div>
              <label
                className="text-white dark:text-gray-200"
                for="passwordConfirmation"
              >
                Monitoring Crop Health and Distribution
              </label>
              <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                <option>No</option>
                <option>Yes</option>
              </select>
            </div>

            <div>
              <label
                className="text-white dark:text-gray-200"
                for="passwordConfirmation"
              >
                Seed Planting
              </label>
              <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                <option>No</option>
                <option>Yes</option>
              </select>
            </div>

            <div>
              <label
                className="text-white dark:text-gray-200"
                for="passwordConfirmation"
              >
                Monitoring and Managing Livestock
              </label>
              <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                <option>No</option>
                <option>Yes</option>
              </select>
            </div>

            <div>
              <label
                className="text-white dark:text-gray-200"
                for="passwordConfirmation"
              >
                Monitoring and Managing Irrigation
              </label>
              <select className="block w-full px-4 py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring">
                <option>No</option>
                <option>Yes</option>
              </select>
            </div>

            <div>
              <label
                className="text-white dark:text-gray-200"
                for="passwordConfirmation"
              >
                Drone Pilots ({drones})
              </label>
              <input
                value={drones}
                min="0"
                max="4"
                onChange={(e) => setDrones(e.target.value)}
                id="range"
                type="range"
                className="block w-full py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md cursor-pointer dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-white dark:text-gray-200"
                for="passwordConfirmation"
              >
                Hours ({hours})
              </label>
              <input
                value={hours}
                min="0"
                max="24"
                onChange={(e) => setHours(e.target.value)}
                id="range"
                type="range"
                className="block w-full py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md cursor-pointer dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-white dark:text-gray-200"
                for="passwordConfirmation"
              >
                Acres Of Land ({acres})
              </label>
              <input
                value={acres}
                min="0"
                max="1280"
                onChange={(e) => setAcres(e.target.value)}
                id="range"
                type="range"
                className="block w-full py-2 mt-2 text-gray-700 bg-white border border-gray-300 rounded-md cursor-pointer dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              />
            </div>

            <div>
              <label
                className="text-white dark:text-gray-200"
                for="passwordConfirmation"
              >
                Total
              </label>
              <textarea
                readonly
                value="KES 3000"
                id="textarea"
                type="textarea"
                className="block w-full px-4 py-2 mt-2 text-3xl text-gray-700 bg-white border border-gray-300 rounded-md bg-opacity-80 dark:bg-gray-800 dark:text-gray-300 dark:border-gray-600 focus:border-blue-500 dark:focus:border-blue-500 focus:outline-none focus:ring"
              ></textarea>
            </div>
            <div>
              <Image
                src="/logo.png"
                width="200"
                height="200"
                objectFit="cover"
              />
            </div>
          </div>

          <div className="flex justify-end mt-6">
            <button className="px-6 py-2 leading-5 text-white transition-colors duration-200 transform bg-[#00a5b5] rounded-md hover:bg-[#ffe800] focus:outline-none focus:bg-gray-600">
              Next
            </button>
          </div>
        </form>
      </section>
    </div>
  );
}

export default Calculator;
