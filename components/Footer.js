'use client';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";

import Link from 'next/link';

const Footer = () => {
    return (
      <footer className="bg-white text-gray-800 py-10 px-6 md:px-12">
        <div className="px-20 max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-base leading-normal">
          {/* Left Section */}
          <div>
            <h2 className="text-2xl font-bold text-green-800">Better</h2>
            <p className="mt-2 text-gray-700">
              Better is a family of companies serving all your homeownership needs.
            </p>
  
            <div className="mt-5 space-y-4">
              <div>
                <h4 className="font-bold text-green-800 text-lg">Better Mortgage</h4>
                <p className="text-gray-700">
                  We can’t wait to say “Welcome home.” Apply 100% online, with expert customer support.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-green-800 text-lg">Better Real Estate</h4>
                <p className="text-gray-700">
                  Connect with a local Better Real Estate Partner Agent to find out all the ways you can save.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-green-800 text-lg">Better Cover</h4>
                <p className="text-gray-700">
                  Shop, bundle, and save on insurance coverage for home, auto, life, and more.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-green-800 text-lg">Better Inspect</h4>
                <p className="text-gray-700">
                  Get free repair estimates, 24-hour turnarounds on reports, and rest easy with our 100-day inspection guarantee.
                </p>
              </div>
              <div>
                <h4 className="font-bold text-green-800 text-lg">Better Settlement Services</h4>
                <p className="text-gray-700">
                  Get transparent rates when you shop for title insurance all in one convenient place.
                </p>
              </div>
            </div>
          </div>
  
          {/* Resources Section */}
          <div>
            <h4 className="font-semibold text-lg mb-3 relative group">
              Resources
              <span className="block h-0.5 w-0 bg-green-700 transition-all duration-300 group-hover:w-full"></span>
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li>Home affordability calculator</li>
              <li>Mortgage calculator</li>
              <li>Free mortgage calculator</li>
              <li>Mortgage calculator with taxes</li>
              <li>Mortgage calculator with PMI</li>
              <li>Rent vs buy calculator</li>
              <li>HELOC payment calculator</li>
              <li>HELOC vs cash-out refinance calculator</li>
              <li>Buy a home</li>
              <li>Sell a home</li>
              <li>Get home inspection</li>
            </ul>
          </div>
  
          {/* Company Section */}
          <div>
            <h4 className="font-semibold text-lg mb-3 relative group">
              Company
              <span className="block h-0.5 w-0 bg-green-700 transition-all duration-300 group-hover:w-full"></span>
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li>About Us</li>
              <li>Careers</li>
              <li>Media</li>
              <li>Partner With Us</li>
              <li>Learning Center</li>
              <li>FAQs</li>
              <li className="font-semibold">Investor Relations</li>
            </ul>
          </div>
  
          {/* Contact Section */}
          <div>
            <h4 className="font-semibold text-lg mb-3 relative group">
              Contact Us
              <span className="block h-0.5 w-0 bg-green-700 transition-all duration-300 group-hover:w-full"></span>
            </h4>
            <p className="mb-2 text-gray-700">hello@better.com</p>
            <p className="mb-2 text-gray-700">415-523-8837</p>
            <p className="mb-2 text-gray-700">FAQ</p>
            <p className="mb-5 text-gray-700">Glossary</p>
  
            {/* Legal Section */}
            <h4 className="font-semibold text-lg mb-3 relative group">
              Legal
              <span className="block h-0.5 w-0 bg-green-700 transition-all duration-300 group-hover:w-full"></span>
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li>NMLS Consumer Access</li>
              <li>Privacy Policy</li>
              <li>Terms of Use</li>
              <li>Disclosures & Licensing</li>
              <li>Affiliated Business</li>
              <li>Browser Disclaimer</li>
            </ul>
          </div>
        </div>

        <div className="bg-white text-gray-600 text-sm mt-10 md:px-16 lg:px-32 py-10 border-t">
            <div className="flex space-x-6 mb-4">
                <a href="#" className="text-gray-500 hover:text-gray-900">
                    <FaFacebookF size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                    <FaInstagram size={20} />
                </a>
                <a href="#" className="text-gray-500 hover:text-gray-900">
                    <FaLinkedinIn size={20} />
                </a>
            </div>
            <div className="text-gray-700 mx-auto leading-6">
                <p>
                    <sup>1</sup> Better Mortgage’s One Day Mortgage™ promotion offers qualified customers who provide certain required financial information/documentation to Better Mortgage within 4 hours of locking a rate on a mortgage loan the opportunity to receive an underwriting determination from Better Mortgage within 24 hours of their rate lock. The underwriting determination is subject to customary terms, including fraud and anti-money laundering checks, that take place pre-closing and which may trigger additional required documentation from the customer. Better Mortgage does not guarantee that initial underwriting approval will result in a final underwriting approval. See <Link href="#" className="text-blue-600 underline">One Day Mortgage™ Terms and Conditions</Link>.
                </p>
                <p className="mt-4">
                    <sup>2</sup> Better Mortgage’s One Day HELOC™ promotion offers qualified customers the opportunity to receive an underwriting determination from Better Mortgage within 24 hours. The underwriting determination is subject to customary terms, including fraud and anti-money laundering checks, and may require additional documentation. See <Link href="#" className="text-blue-600 underline">One Day HELOC™ Terms and Conditions</Link>.
                </p>
                <p className="mt-4">
                    <sup>3</sup> Assumes borrowers are eligible for the Automated Valuation Model (AVM). Closing timelines may vary if an appraisal is required.
                </p>
            </div>
                <hr className="my-6 border-gray-300" />
                <div className="text-gray-700 mx-auto text-sm">
                <p>&copy; 2025 Better Home & Finance Holding Company and/or its affiliates. Better is a family of companies. Better Mortgage Corporation provides home loans; Better Real Estate, LLC and Better Real Estate California Inc License # 02164055 provides real estate services; Better Cover, LLC sells insurance products; and Better Settlement Services provides title insurance services; and Better Inspect, LLC provides home inspection services. All rights reserved.</p>
                <p className="mt-4">Home lending products offered by Better Mortgage Corporation. Better Mortgage Corporation is a direct lender. NMLS #330511. 1 World Trade Center, 80th Floor, New York, NY 10007. Loans made or arranged pursuant to a California Finance Lenders Law License. Not available in all states. Equal Housing Lender. NMLS Consumer Access</p>
                <p className="mt-4">Better Real Estate, LLC dba BRE, Better Home Services, BRE Services, LLC and Better Real Estate, and operating in the State of California through its wholly owned subsidiary Better Real Estate California Inc., is a licensed real estate brokerage and maintains its corporate headquarters at 325-41 Chestnut Street, Suite 826, Philadelphia, PA 19106. Here is a full listing of Better Real Estate, LLC’s license numbers. Better Real Estate, LLC provides access to real estate brokerage services via its nationwide network of partner brokerages and real estate agents (“Better Real Estate Partner Agents”). Equal Housing Opportunity. All rights reserved.</p>
                <p className="mt-4"><Link href="#" className="text-blue-600 underline">New York State Housing and Anti-Discrimination Notice</Link></p>
                <p className="mt-4"><Link href="#" className="text-blue-600 underline">New York Standard Operating Procedures</Link></p>
                <p className="mt-4">Better Settlement Services, LLC. 325-41 Chestnut Street, Suite 803, Philadelphia, PA 19106.</p>
                <p className="mt-4">Homeowners insurance policies are offered through Better Cover, LLC, a Pennsylvania Resident Producer Agency. License #881593. 325-41 Chestnut Street, Suite 807, Philadelphia, PA 19106.</p>
                <p className="mt-4">Insurance quotes and policies are offered through Better Cover, LLC. A Pennsylvania Resident Producer Agency. License #881593. Here is a full listing of Better Cover, LLC’s license numbers.</p>
                <p className="mt-4">Better Inspect, LLC maintains its corporate headquarters at 325-41 Chestnut Street, Suite 846, Philadelphia, PA 19106.</p>
                <p className="mt-4">Better Mortgage Corporation, Better Real Estate, LLC, Better Settlement Services, LLC, Better Cover, LLC, Better Connect, and Better Inspect, LLC are separate operating subsidiaries of Better Home & Finance Holding Company. Each company is a separate legal entity operated and managed through its own management and governance structure as required by its state of incorporation, and applicable and legal and regulatory requirements. Products not available in all states.</p>
                <p className="mt-4">Any unauthorized use of any proprietary or intellectual property is strictly prohibited. All trademarks, service marks, trade names, logos, icons, and domain names are proprietary to Better Home & Finance Holding Company. Better Home & Finance Holding Company trademarks are federally registered with the U. S. Patent and Trademark Office. Better Cover is a registered trademark with the U.S. Patent and Trademark Office and is owned by Better Cover, LLC.</p>
            </div>
        </div>


      </footer>
    );
  };
  
  export default Footer;
  