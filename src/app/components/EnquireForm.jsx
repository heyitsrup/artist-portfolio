"use client"

import React, { useState } from 'react';
import emailjs from 'emailjs-com';

export default function EnquireForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    size: '',
    medium: '',
    event: '',
    details: '',
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === 'reference') {
      setFormData({ ...formData, [name]: files[0] });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Prepare email data
    const templateParams = {
      name: formData.name,
      email: formData.email,
      size: formData.size,
      medium: formData.medium,
      event: formData.event,
      details: formData.details,
    };

    // Send email via EmailJS
    emailjs
      .send('service_3i7p29u', 'template_u5qyeyr', templateParams, 'L9fKDLBZ8eRSRY3sx')
      .then(
        (response) => {
          console.log('Email successfully sent!', response);
          alert('Your message has been sent!');
        },
        (error) => {
          console.error('Error sending email:', error);
          alert('There was an error sending your message. Please try again.');
        }
      );

    // Reset form data after submission
    setFormData({
      name: '',
      email: '',
      size: '',
      medium: '',
      event: '',
      details: '',
    });
  };

  return (
    <div className="bg-[#EBE8DE] flex items-center justify-center pt-8">
      <div className="p-6 rounded-2xl shadow-lg w-full max-w-lg">
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Name Input */}
          <div>
            <label htmlFor="name" className="block text-base font-medium text-gray-700">
              Name (required)
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-lg"
            />
          </div>

          {/* Email Input */}
          <div>
            <label htmlFor="email" className="block text-base font-medium text-gray-700">
              Email (required)
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-lg"
            />
          </div>

          {/* Selector for Size */}
          <div>
            <label htmlFor="size" className="block text-base font-medium text-gray-700">
              Size (required)
            </label>
            <select
              id="size"
              name="size"
              value={formData.size}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-lg"
            >
              <option value="starter">Select the size</option>
              <option value="A5">A5</option>
              <option value="A4">A4</option>
              <option value="A3">A3</option>
              <option value="A2">A2</option>
              <option value="A1">A1</option>
            </select>
          </div>

          {/* Medium Selector */}
          <div>
            <label htmlFor="medium" className="block text-base font-medium text-gray-700">
              Medium (required)
            </label>
            <select
              id="medium"
              name="medium"
              value={formData.medium}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-lg"
            >
              <option value="starter">Select the style</option>
              <option value="acrylic">Acrylic</option>
              <option value="watercolour">Watercolour</option>
              <option value="biro_sketch">Biro Sketch</option>
            </select>
          </div>

          {/* Event Selector */}
          <div>
            <label htmlFor="event" className="block text-base font-medium text-gray-700">
              Event
            </label>
            <input
              type="text"
              id="event"
              name="event"
              value={formData.event}
              onChange={handleChange}
              required
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-lg"
            />
          </div>

          {/* Text Box for More Details */}
          <div>
            <label htmlFor="details" className="block text-base font-medium text-gray-700">
              More Details
            </label>
            <textarea
              id="details"
              name="details"
              value={formData.details}
              onChange={handleChange}
              rows="4"
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm sm:text-sm"
            ></textarea>
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-red-950 hover:bg-green-700 text-white font-semibold rounded-lg shadow-md"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
