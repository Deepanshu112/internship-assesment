import '../../styles/globals.css';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

export default function Start() {
  return (
    <div>
      <div className="min-h-screen flex flex-col items-center justify-center text-center px-4">
      {/* Header */}
        <header className="w-full flex justify-between items-center p-4 max-w-5xl">
          <h1 className="text-green-700 text-xl font-semibold">Better <span className="font-light">Mortgage</span></h1>
          <div className="flex items-center gap-2">
            <span className="text-green-600">📞 Need help? Call (415) 523 8837</span>
          </div>
        </header>

        <div className="w-full border-t-4 border-gray-300 absolute top-24 left-0"></div>

        {/* Profile Image */}
        <div className="relative w-16 h-16 bg-white z-10 top-1">
          <img
            src="https://media.better.com/components/preapproval/industry-parity-v2/betty1.jpg" // Replace with actual image URL
            alt="Profile"
            width={64}
            height={64}
            className="rounded-full border-4 border-white shadow-lg"
          />
        </div>

        {/* Hero Section */}
        <h2 className="text-3xl font-semibold mt-4">Hi, I'm Betsy!</h2>
        <p className="text-2xl font-semibold mb-6">What can I help you with?</p>

        {/* Options */}
        <div className="w-full max-w-md space-y-4">
          {["Buying a home", "Refinance my mortgage", "Get cash from my home"].map((text, index) => (
            <button 
              key={index} 
              className=" font-semibold text-lg w-full py-3 border border-gray-400 px-7 rounded-lg flex gap-3 transiotion all duration-300 hover:border-green-700 hover:text-green-700 hover:border-4"
            >
              <span className="text-green-700">🏡</span> {text}
            </button>
          ))}
        </div>

        {/* Statistics */}
        <div className="mt-8 flex space-x-12">
          <div>
            <p className="text-3xl font-bold">$100B</p>
            <p className="text-gray-500 text-sm">home loans funded entirely online</p>
          </div>
          <div>
            <p className="text-3xl font-bold">400K</p>
            <p className="text-gray-500 text-sm">Customers who chose a Better Mortgage</p>
          </div>
        </div>

        {/* Unlock Section */}
        <div className="bg-green-50 p-6 rounded-lg mt-8 w-full max-w-lg text-left">
          <p className="font-semibold">After a few questions, you'll unlock:</p>
          <ul className="mt-2 text-gray-600 space-y-2">
            <li>✅ Custom mortgage rates</li>
            <li>🎁 Exclusive offers</li>
            <li>📱 A personalized dashboard</li>
          </ul>
        </div>
      </div>
      <Footer/>
    </div>
  );
}