// components/Navbar.js
import Link from 'next/link';
import { useState, useEffect } from "react";


export default function Navbar() {

  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setScrolling(true);
      } else {
        setScrolling(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  
  return (
    // <nav className="bg-transparent fixed w-full p-4 bg-[#004733]">
      <nav
      className={`fixed top-0 left-0 w-full px-6 py-4 transition-all duration-300 ${
        scrolling ? "bg-white" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex justify-between items-center">
        {/* Left Side: Logo and Links */}
        <div className="flex items-center space-x-12">
          <Link href="/" className={`text-xl font-bold ${
        scrolling ? "text-black" : "text-white"
      }`}>
            Better
          </Link>
          <div className="hidden md:flex space-x-16">
            <Link href="/buy" className={`font-bold px-4 py-2 rounded-[100px] hover:bg-white hover:text-black transition-all duration-300 ${
        scrolling ? "text-black" : "text-white"
      }`}>
              Buy
            </Link>
            <Link href="/refinance" className={`font-bold px-4 py-2 rounded-[100px] hover:bg-white hover:text-black transition-all duration-300 ${
        scrolling ? "text-black" : "text-white"
      }`}>
              Refinance
            </Link>
            <Link href="/heloc" className={`font-bold px-4 py-2 rounded-[100px] hover:bg-white hover:text-black transition-all duration-300 ${
        scrolling ? "text-black" : "text-white"
      }`}>
              HELOC
            </Link>
            <Link href="/rates" className={`font-bold px-4 py-2 rounded-[100px] hover:bg-white hover:text-black transition-all duration-300 ${
        scrolling ? "text-black" : "text-white"
      }`}>
              Rates
            </Link>
            <Link href="/better-plus" className={`font-bold px-4 py-2 rounded-[100px] hover:bg-white hover:text-black transition-all duration-300 ${
        scrolling ? "text-black" : "text-white"
      }`}>
              Better+
            </Link>
          </div>
        </div>

        {/* Right Side: Sign In Button */}
        <div>
          <Link
            href="/signin"
            className={`text-white px-4 py-2 rounded-[100px] hover:bg-white hover:text-black transition-all duration-300 ${
              scrolling ? "text-black" : "text-white"
            }`}
          >
            Sign in
          </Link>
        </div>
      </div>
    </nav>
  );
}