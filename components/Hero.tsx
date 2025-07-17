'use client';
import { RiArrowUpDoubleLine } from "react-icons/ri";
import React from 'react';
import { Michroma } from 'next/font/google';
import FaceScannerPanel from "./FaceScannerPanel";

const michroma = Michroma({
  weight: '400',
  subsets: ['latin'],
});

const faces = [
  {
    src: '/face1.png',
    result: 'Woman about 23 years old, Asian appearance, with dark hair...',
    databaseCount: '125K',
  },
  {
    src: '/face2.png',
    result: 'Man approx. 30 years old, beard and dark curly hair.',
    databaseCount: '125K',
  },
  {
    src: '/face3.png',
    result: 'Teenage girl with straight black hair and neutral expression.',
    databaseCount: '125K',
  },
];

export default function FaceRecognitionBanner() {
  return (
    <div className="relative bg-[url(/mainbg.jpg)] text-[#0D1128] px-6 py-12 overflow-hidden w-full min-h-screen">
      {/* AI Icon + Title */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
        <div className="relative w-24 h-24 rounded-lg overflow-hidden border border-blue-300 bg-white shadow-sm">
          {/* Grid background */}
          <div className="absolute inset-0 grid grid-cols-4 grid-rows-4">
            {[...Array(3)].map((_, i) => (
              <div
                key={`v-${i}`}
                className="absolute top-0 bottom-0 w-px bg-blue-200"
                style={{ left: `${((i + 1) / 4) * 100}%` }}
              />
            ))}
            {[...Array(3)].map((_, i) => (
              <div
                key={`h-${i}`}
                className="absolute left-0 right-0 h-px bg-blue-200"
                style={{ top: `${((i + 1) / 4) * 100}%` }}
              />
            ))}
          </div>

          {/* Horizontal stripe */}
          <div className="absolute top-1/2 left-0 right-0 h-6 bg-blue-100/70 transform -translate-y-1/2" />

          {/* AI Text */}
          <div className={`${michroma.className} relative w-full h-full flex items-center justify-center text-4xl sm:text-6xl text-blue-900`}>
            AI
          </div>
        </div>

        <h1 className={`${michroma.className} text-4xl sm:text-7xl text-center sm:text-left`}>Face Recognition</h1>
      </div>

      {/* Scanning Accuracy Box */}
      <div className="hidden sm:flex absolute top-24 right-4 sm:right-96 bg-[#1A1A2E] text-white px-5 py-4 rounded-2xl shadow-lg flex-col items-center w-36 h-36">
  <div className="relative w-16 h-16">
    <div className="absolute inset-0 w-16 h-16 rounded-full border-4 border-pink-300" />
    <div className="absolute inset-0 flex flex-col items-center justify-center text-sm font-bold text-pink-400">
      <RiArrowUpDoubleLine size={20} className="mb-1" />
      100%
    </div>
  </div>
  <div className="mt-2 text-xs text-gray-300 text-center">Scanning accuracy</div>
</div>


      {/* Description and Button */}
      <div className="flex flex-col items-center sm:items-start sm:ml-60 mt-10">
        <div className="w-full sm:w-[20vw] text-lg text-center sm:text-left">
          Integrate Face Recognition using our cloud API. Detect and compare human faces. Recognise age, gender and emotions in the photo.
        </div>
        <button className="text-xl bg-pink-400 w-60 sm:w-[20vw] h-[5vh] rounded-full text-white shadow-lg hover:bg-pink-500 transition duration-300 mt-6">
          Request a demo
        </button>
      </div>

      {/* Scanner Component */}
      <FaceScannerPanel images={faces} />
    </div>
  );
}
