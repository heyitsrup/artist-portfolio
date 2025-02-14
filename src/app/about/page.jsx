import React from 'react';
import Image from 'next/image';
import EnquireForm from '../components/EnquireForm.jsx';

export default function About() {
  return (
    <div>
      <p className="text-center md:text-[2vw] font-light py-4">
        PASSIONATE ABOUT BRINGING DREAMS ON TO A CANVAS
      </p>

      {/* Adjust flex direction for small screens */}
      <div className="flex flex-col md:flex-row items-center px-4 sm:px-8 md:px-16 lg:px-64">
        {/* Image Section */}
        <div className="bg-transparent flex-shrink-0 w-full md:w-1/2">
          <Image
            src="/images/Selfie.JPG"
            alt="profile"
            className="w-full h-auto object-cover"
            height={1000}
            width={1000}
          />
        </div>

        {/* Text Section */}
        <div className="bg-transparent px-4 sm:px-8 w-full md:w-1/2 text-center md:text-left">
          <p className="text-2xl pb-2">Hi there!</p>
          <p className="text-xl py-2">
            I'm Lawanya, an artist who’s been drawing and painting since childhood.
            My work is driven by a fascination with human connection and the beauty of everyday interactions.
            Each piece allows me to explore and share the depth of feeling and story behind a simple moment.
            I’m excited to invite you into this emotional, artistic journey!
          </p>
          <p className="md:text-[1.5vw] tracking-[0.25em] font-bold text-red-950 pt-2">
            enquire below
          </p>
        </div>
      </div>

      {/* Enquiry Form Section */}
      <div className="flex items-center justify-center py-2 px-4 sm:px-8">
        <div className="max-w-screen-md w-full">
          <EnquireForm />
        </div>
      </div>
    </div>
  );
}
