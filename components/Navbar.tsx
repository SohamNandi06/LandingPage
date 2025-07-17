'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { MdCropFree } from 'react-icons/md';
import { BsFillArrowUpRightCircleFill } from 'react-icons/bs';
import { HiMenu, HiX } from 'react-icons/hi';

export default function NavbarComponent() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="w-full py-4 px-6 md:px-8 flex items-center justify-between bg-gradient-to-r from-white/80 to-blue-100 backdrop-blur-md shadow-sm relative z-50">
      {/* Left - Logo */}
      <div className="flex items-center space-x-2">
        <div className="text-2xl font-semibold text-gray-900 flex items-center">
          <MdCropFree />
          <span className="font-bold ml-1">Face Me</span>
        </div>
      </div>

      {/* Center - Links (desktop only) */}
      <div className="hidden md:flex space-x-[6vw] text-gray-700 font-medium">
        <Link href="#" className="hover:text-black transition">How it work</Link>
        <Link href="#" className="hover:text-black transition">Our prices</Link>
        <Link href="#" className="hover:text-black transition">Reviews</Link>
        <div className="relative">
          <Link href="#" className="hover:text-black transition">Blog</Link>
          <span className="absolute -top-2 -right-4 text-pink-400 text-xs font-bold">34</span>
        </div>
      </div>

      {/* Right - Sign in + Mobile Toggle */}
      <div className="flex items-center gap-4">
        {/* Toggle Button (Mobile Only) */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-gray-800 text-2xl"
        >
          {isOpen ? <HiX /> : <HiMenu />}
        </button>

        {/* Sign In Button (Always visible) */}
        <Link
          href="#"
          className="hidden sm:flex items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full shadow-md transition"
        >
          Sign in
          <BsFillArrowUpRightCircleFill size={20} />
        </Link>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md flex flex-col px-6 py-4 space-y-4 text-gray-700 font-medium md:hidden">
          <Link href="#" className="hover:text-black transition" onClick={() => setIsOpen(false)}>How it work</Link>
          <Link href="#" className="hover:text-black transition" onClick={() => setIsOpen(false)}>Our prices</Link>
          <Link href="#" className="hover:text-black transition" onClick={() => setIsOpen(false)}>Reviews</Link>
          <div className="relative">
            <Link href="#" className="hover:text-black transition" onClick={() => setIsOpen(false)}>Blog</Link>
            <span className="absolute -top-2 -right-4 text-pink-400 text-xs font-bold">34</span>
          </div>
          <Link
            href="#"
            className="flex sm:hidden items-center gap-2 bg-pink-500 hover:bg-pink-600 text-white px-4 py-2 rounded-full shadow-md transition w-fit"
          >
            Sign in
            <BsFillArrowUpRightCircleFill size={20} />
          </Link>
        </div>
      )}
    </nav>
  );
}
