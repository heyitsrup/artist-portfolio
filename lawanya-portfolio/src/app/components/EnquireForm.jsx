import React from "react";

export default function OrderForm() {
  return (
    <div className="bg-[#EBE8DE] flex items-center justify-center min-h-screen">
      <div className="p-6 rounded-2xl shadow-lg w-full max-w-lg">
        <form action="#" method="post" encType="multipart/form-data" className="space-y-4">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-base font-medium text-gray-700">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-green-700 focus:border-green-700 sm:text-lg"
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-base font-medium text-gray-700">
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
            />
          </div>

          {/* Horizontal Selector */}
          <div>
            <label className="block text-base font-medium text-gray-700">Size</label>
            <div className="mt-2 flex space-x-2">
              <label>
                <input type="radio" name="size" value="a5" required className="hidden" />
                <span className="inline-block px-4 py-2 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-300 focus:bg-indigo-200">
                  A5
                </span>
              </label>
              <label>
                <input type="radio" name="size" value="a4" className="hidden" />
                <span className="inline-block px-4 py-2 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-300 focus:bg-indigo-200">
                  A4
                </span>
              </label>
              <label>
                <input type="radio" name="size" value="a3" className="hidden" />
                <span className="inline-block px-4 py-2 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-300 focus:bg-indigo-200">
                  A3
                </span>
              </label>
              <label>
                <input type="radio" name="size" value="a2" className="hidden" />
                <span className="inline-block px-4 py-2 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-300 focus:bg-indigo-200">
                  A2
                </span>
              </label>
              <label>
                <input type="radio" name="size" value="a1" className="hidden" />
                <span className="inline-block px-4 py-2 bg-gray-200 rounded-lg cursor-pointer hover:bg-gray-300 focus:bg-indigo-200">
                  A1
                </span>
              </label>
            </div>
          </div>

          {/* Dropdown Menu */}
          <div>
            <label htmlFor="medium" className="block text-base font-medium text-gray-700">
              Medium
            </label>
            <select
              id="medium"
              name="medium"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
            >
              <option value="starter">Select the style</option>
              <option value="acrylic">Acrylic</option>
              <option value="watercolour">Watercolour</option>
              <option value="biro_sketch">Biro Sketch</option>
            </select>
          </div>

          {/* Image Upload */}
          <div>
            <label htmlFor="reference" className="block text-base font-medium text-gray-700">
              Reference Image (Optional)
            </label>
            <input
              type="file"
              id="reference"
              name="reference"
              accept="image/*"
              className="mt-1 block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-indigo-50 file:text-green-800 hover:file:bg-indigo-100"
            />
          </div>

          {/* Event Selector */}
          <div>
            <label htmlFor="event" className="block text-base font-medium text-gray-700">
              Event
            </label>
            <select
              id="event"
              name="event"
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-lg"
            >
              <option value="starter">Select the special event</option>
              <option value="valentines">Valentine's Day</option>
              <option value="mothers_day">Mother's Day</option>
              <option value="fathers_day">Father's Day</option>
              <option value="birthday">Birthday</option>
              <option value="other">Other</option>
            </select>
          </div>

          {/* Text Box for More Details */}
          <div>
            <label htmlFor="details" className="block text-base font-medium text-gray-700">
              More Details
            </label>
            <textarea
              id="details"
              name="details"
              rows="4"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-green-700 text-white font-semibold rounded-lg shadow-md hover:bg-green-800 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
            >
              Submit Order
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
