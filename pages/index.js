import '../styles/globals.css';
// import styles from '../styles/globals.module.css';
// pages/index.js
// pages/index.js
import Navbar from '../components/Navbar';
import Card from "../components/Card";
import Footer from "../components/Footer";

import { useState } from 'react';

export default function Home() {
  const [selectedPerson, setSelectedPerson] = useState("Arian");

  const testimonials = {
    Arian: {
      image: "https://media.better.com/better-com/homepage/social-proof/still-quote-Arian.webp",
      text: "The reason why I decided to go with Better is because after I did my research with the other lenders, Better was the ones that provided me with the lowest interest rate.",
      author: "Arian – Better Mortgage customer"
    },
    Amanda: {
      image: "https://media.better.com/better-com/homepage/social-proof/still-quote-Amanda.webp", // Replace with actual image
      text: "Better made my home-buying experience seamless and stress-free. I couldn't be happier with my decision!",
      author: "Amanda – Happy Homeowner"
    },
    Paul: {
      image: "https://media.better.com/better-com/homepage/social-proof/still-quote-Paul.webp", // Replace with actual image
      text: "I got the best mortgage rate with Better. The process was smooth, and I highly recommend them!",
      author: "Paul – Satisfied Customer"
    }
  };

  return (
    <div>
      <Navbar />

      {/* Background Image and Content */}
      <div
        className="h-screen bg-contain bg-center bg-no-repeat flex items-center justify-center bg-[#004733]"
        style={{
          backgroundImage: `url('https://media.better.com/better-com/homepage/hero-variant-c.webp')`,
        }}
      >
      {/* Hero Section Content */}
        <div className="flex flex-col items-center justify-center text-[#1EE07F] p-8 rounded-lg mx-4 text-center">
          <h1 className="text-8xl flex justify-center font-bold mb-6 max-w-2xl">Mortgages made simple</h1>
          <div className='flex space-x-[400px]'>
            {/* Button Wrapper for Better Alignment */}
            <div className="mt-6 flex flex-col">
              <button className="bg-[#109A5C] text-white px-10 py-4 rounded-full text-lg hover:bg-[#004733] transition duration-300 shadow-lg">
                Start my approval
              </button>
              3 min | No credit impact
            </div>

            {/* Google Reviews Section */}
            <div className="mt-6 flex flex-col items-center justify-center px-6 py-3">
              <span className="text-yellow-400 text-2xl">★★★★★</span>
              <div className='flex text-white'>
                <span className="font-semibold">4.5</span>
                <span className="">|</span>
                <span className="">3177 Google reviews</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col md:flex-row items-center justify-center min-h-screen bg-[#FAFAF7] px-6 md:px-20 pb-[150px]">
      {/* Left Side - Video/Testimonial */}
      <div className="w-full md:w-1/3 flex flex-col items-center mr-[250px]">
        <div className="rounded-lg overflow-hidden shadow-lg max-w-xs">
          <img
            src={testimonials[selectedPerson].image}
            width={350}
            height={500}
            alt="Testimonial"
            className="w-full h-auto rounded-lg"
          />
        </div>
        {/* Buttons */}
        <div className="flex space-x-4 mt-4">
          {Object.keys(testimonials).map((person) => (
            <button
              key={person}
              onClick={() => setSelectedPerson(person)}
              className={`px-4 py-2 rounded-full border ${
                selectedPerson === person
                  ? "bg-[#004733] text-white"
                  : "bg-white text-gray-700 border-gray-300"
              } font-medium hover:bg-[#003020] transition`}
            >
              {person}
            </button>
          ))}
        </div>
      </div>

      {/* Right Side - Text & Button */}
      <div className="w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0 md:ml-12">
        <h1 className="text-10xl md:text-6xl font-semibold text-[#1C1C1A]">
          Find out why
        </h1>
        <h1 className="text-10xl md:text-6xl font-semibold text-[#1C1C1A]">
          we’re better.
        </h1>
        <button className="mt-6 bg-[#004733] text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-[#003020] transition">
          See all our stories
        </button>

        <div className="flex items-center mt-4 justify-center md:justify-start space-x-2 text-gray-600 text-sm">
          <span className="text-green-600">★</span>
          <span className="text-green-600 font-medium">Trustpilot</span>
          <span className="font-semibold">Excellent</span>
          <span>4.4 out of 5</span>
        </div>
      </div>
      </div>
      
      <div className="max-w-6xl mx-auto p-6">
      <div className="flex justify-between items-center">
        <div>
          <h2 className="text-3xl font-semibold">Got questions?</h2>
          <h3 className="text-3xl font-semibold">We've got answers</h3>
        </div>
        
        {/* 3 Buttons */}
        <div className="flex gap-4">
          <button className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold shadow-md">
            Our Products
          </button>
          <button className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold shadow-md">
            Calculators
          </button>
          <button className="bg-green-100 text-green-800 px-4 py-2 rounded-full font-semibold shadow-md">
            Guides & FAQs
          </button>
        </div>
      </div>

      {/* Main Grid */}
      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {/* Left Small Card */}
        <div className="bg-green-50 rounded-sm p-6 flex flex-col justify-between shadow-md">
          <h4 className="text-xl text-[#073126] font-semibold">
            Buying your first home with Better
          </h4>
          <div className="mt-4 flex justify-between items-center">
            <button className="border border-green-700 rounded-full p-2">
              ➝
            </button>
          </div>
          <div className="mt-4">
            <img
              src="https://media.better.com/better-com/homepage/learning-center/first-home.webp"
              alt="House"
              width={300}
              height={150}
              className="rounded-lg"
            />
          </div>
        </div>

        {/* Right Large Card */}
        <div className="bg-green-50 rounded-lg p-6 flex flex-col justify-between shadow-md md:col-span-2">
          <h4 className="text-lg font-semibold">One Day Mortgage</h4>
          <p className="text-sm text-gray-700 mt-2">
            Kick your home loan into hyperdrive. Going from locked rate to
            Commitment Letter takes weeks for traditional lenders. We do it in a
            single day.
          </p>

          <div className="mt-4 flex justify-between items-center">
            <button className="border border-green-700 rounded-full p-2">
              ➝
            </button>

            {/* Square Logo with Full Height */}
            <div className="w-1/4 h-full bg-green-100 flex justify-center items-center rounded-lg p-4">
              <img
                src="https://media.better.com/better-com/homepage/learning-center/one-day-mortgage.webp"
                alt="One Day Mortgage Logo"
                width={100}
                height={100}
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-6 mt-8">
        {/* Right Large Card (moved to left) */}
        <div className="bg-green-50 rounded-lg p-6 flex justify-between shadow-md md:col-span-2">
        {/* Square Logo with Full Height */}
          <div className="w-[100%] h-full bg-green-100 flex justify-center items-center rounded-lg p-4 mr-10">
            <img
            src="https://media.better.com/better-com/homepage/learning-center/better-heloc.webp"
            alt="One Day Mortgage Logo"
            width={100}
            height={100}
            className="w-full h-full object-contain rounded-lg"
          />
        </div>
      <div>
      <h4 className="text-lg font-semibold">Better HELOC</h4>
      <p className="text-sm text-gray-700 mt-2">
      Introducing One Day HELOC™—your express lane to getting cash from your home with our Home Equity Line of Credit<sup>2</sup> . Access up to 90% of your home equity as cash in as little as 7 days.
      </p>
      <div className="mt-4 flex justify-between items-center">
        <button className="border border-green-700 rounded-full p-2">➝</button>
      </div>
    </div>
  </div>

  {/* Left Small Card (moved to right) */}
  <div className="bg-green-50 rounded-sm p-6 flex flex-col justify-between shadow-md">
    <h4 className="text-xl text-[#073126] font-semibold">
      Insurance
    </h4>
    <div className="mt-4 flex justify-between items-center">
      <button className="border border-green-700 rounded-full p-2">➝</button>
    </div>
    <div className="mt-4">
      <img
        src="https://media.better.com/better-com/homepage/learning-center/insurance.webp"
        alt="House"
        width={300}
        height={150}
        className="rounded-lg"
      />
    </div>
  </div>
      </div>
      

      
      </div>

      <Footer />
    </div>
  );
}