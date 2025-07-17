'use client';

import React, { useState } from 'react';
import { RiUserSearchLine } from 'react-icons/ri';
import { FiZap } from 'react-icons/fi';

type FaceData = {
  src: string;
  result: string;
  databaseCount: string;
};

type Props = {
  images: FaceData[];
};

export default function FaceScannerPanel({ images }: Props) {
  const [selected, setSelected] = useState(0);
  const selectedFace = images[selected];

  return (
    <div className="mt-4 mb-4 relative bg-[url(/bluebgmain-2.jpg)] bg-cover bg-center rounded-3xl h-auto md:h-[60vh] px-4 md:px-8 pt-12 pb-6 text-white">
      {/* IMAGE CENTERED */}
      <div className="relative w-full h-full flex flex-col md:flex-row items-center justify-center gap-4">
        {/* Face Image with Grid */}
        <div className="relative w-[90%] max-w-[20rem] md:max-w-[35rem] aspect-square md:bottom-50 md:left-70 md:transform md:-translate-x-1/2">
          <img
            src={selectedFace.src}
            alt="Selected Face"
            className="w-full h-full object-cover rounded-xl"
          />

          {/* Grid Overlay */}
          <div className="absolute inset-0 grid grid-cols-3 grid-rows-4 border border-blue-300/30 rounded-xl pointer-events-none">
            {[...Array(2)].map((_, i) => (
              <div
                key={`v-${i}`}
                className="absolute top-0 bottom-0 w-px bg-blue-400/40 drop-shadow-[0_0_3px_#60a5fa]"
                style={{ left: `${((i + 1) / 3) * 100}%` }}
              />
            ))}
            {[...Array(3)].map((_, i) => (
              <div
                key={`h-${i}`}
                className="absolute left-0 right-0 h-px bg-blue-400/40 drop-shadow-[0_0_3px_#60a5fa]"
                style={{ top: `${((i + 1) / 4) * 100}%` }}
              />
            ))}
          </div>

          {/* Face Detection Markers */}
          <div className="absolute w-2 h-2 md:w-3 md:h-3 bg-pink-400 rounded-full top-[20%] left-[65%]" />
          <div className="absolute w-2 h-2 md:w-3 md:h-3 bg-white rounded-full top-[40%] left-[30%]" />
          <div className="absolute w-2 h-2 md:w-3 md:h-3 bg-white rounded-full top-[55%] left-[60%]" />
          <div className="absolute w-2 h-2 md:w-3 md:h-3 bg-pink-400 rounded-full top-[80%] left-[20%]" />
        </div>

        {/* LEFT BOX */}
        <div className="w-full md:w-64 flex flex-col items-center md:absolute md:bottom-[40%] md:left-[10%] md:items-start mt-4 md:mt-0">
          <span className="flex items-center gap-2 text-xs md:text-sm bg-white rounded-2xl text-black font-semibold px-3 py-1 mb-3 w-fit">
            <FiZap /> Quick Scan
          </span>
          <div className="bg-[url(/leftboxbg.avif)] bg-cover h-36 md:h-40 text-black border border-gray-200 rounded-xl p-4 shadow-lg w-full max-w-[90%] md:max-w-full">
            <div className="text-sm md:text-lg font-semibold mb-1">Scan Result:</div>
            <p className="text-xs text-gray-700">{selectedFace.result}</p>
          </div>
        </div>

        {/* RIGHT BOX */}
        <div className="w-full md:w-52 h-32 md:h-40 bg-gradient-to-br from-blue-400 to-blue-300 rounded-xl p-4 flex flex-col justify-center items-center text-black shadow-lg mt-4 md:mt-0 md:absolute md:bottom-[90%] md:right-[10%]">
          <div className="text-2xl md:text-4xl font-semibold">{selectedFace.databaseCount}</div>
          <div className="text-xs mt-2">People in the database</div>
        </div>
      </div>

      {/* Thumbnails */}
      <div className="mt-6 flex justify-center items-center flex-wrap gap-4 md:gap-6 md:absolute md:bottom-20 md:left-1/2 md:-translate-x-1/2">
        {images.map((img, index) => (
          <img
            key={index}
            src={img.src}
            alt={`Face ${index}`}
            onClick={() => setSelected(index)}
            className={`w-14 h-14 md:w-18 md:h-18 rounded-lg bg-white border-2 cursor-pointer transition duration-200 ${
              selected === index
                ? 'border-blue-500 ring-2 ring-blue-400'
                : 'border-gray-600 opacity-60 hover:opacity-100'
            }`}
          />
        ))}
        <div className="flex items-center gap-2 text-sm text-blue-300 ml-4">
          <RiUserSearchLine />
          20K+
        </div>
      </div>

      {/* Scanning Bar */}
      <div className="hidden md:block mt-6 md:absolute md:bottom-5 left-1/2 transform -translate-x-1/2 mb-2 w-[80%] md:w-[30vw]">
  <div className="text-sm text-center text-gray-300 mb-1">Scanning</div>
  <div className="w-full bg-gray-800 h-4 rounded-full overflow-hidden">
    <div className="bg-gradient-to-r from-pink-500 to-purple-500 h-full w-[56%]" />
  </div>
</div>

    </div>
  );
}
