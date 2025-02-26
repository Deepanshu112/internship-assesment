import '../../styles/globals.css';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import React, { useState } from "react";

export default function MortgageCalculator() {
  const [homePrice, setHomePrice] = useState(50000);
  const [downPayment, setDownPayment] = useState(10000);
  const [interestRate, setInterestRate] = useState(6.5);
  const [loanTerm, setLoanTerm] = useState(30);
  const [zipCode, setZipCode] = useState("110005");

  const minPrice = 10000;
  const maxPrice = 1000000;

  const handleInputChange = (e) => {
    let value = Number(e.target.value.replace(/\D/g, ""));
    if (value > maxPrice) value = maxPrice;
    if (value < minPrice) value = minPrice;
    setHomePrice(value);
  };

  const handleSliderChange = (e) => {
    setHomePrice(Number(e.target.value));
  };
  

  return (
    <div>
      <Navbar />
      <div className="flex justify-center">
      <div className="min-h-screen w-full shadow-lg bg-[#F0F7F1] p-20 rounded-xl mt-20">
        <h1 className="text-5xl font-semibold text-gray-800 mb-8">Mortgage calculator</h1>
        <p className="text-gray-600 mt-2 max-w-3xl">
          Our mortgage calculator includes key factors like property taxes, and private
          mortgage insurance (PMI). Get the whole picture and calculate your total monthly
          payment.
        </p>

        <div className="flex justify-between items-center mt-6 gap-80">
          <div>
            <p className="text-gray-600 font-semibold mb-8 ml-4">Home price</p>
            <input
            type="text"
            value={`$${homePrice.toLocaleString()}`}
            onChange={handleInputChange}
            className="text-5xl font-semibold text-right w-[200px] border p-2 rounded-md focus:outline-none"
          />
          </div>
          <div>
            <p className="text-gray-600 font-semibold mb-8 ml-4">Monthly payment</p>
            <p className="text-5xl font-semibold">$882/mo</p>
          </div>
          <button className="w-full mt-6 bg-green-600 text-white p-3 rounded-lg font-semibold hover:bg-green-700">
            Get pre-approved
          </button>
          
        </div>

        <input
          type="range"
          min={minPrice}
          max={maxPrice}
          value={homePrice}
          onChange={handleSliderChange}
          className="w-full m-4"
        />

        <div className="grid grid-cols-2 gap-4 mt-6">
          <div>
            <p className="text-gray-600">ZIP code</p>
            <input
              type="text"
              value={zipCode}
              onChange={(e) => setZipCode(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <p className="text-gray-600">Down payment</p>
            <input
              type="text"
              value={`$ ${downPayment.toLocaleString()}`}
              readOnly
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <p className="text-gray-600">Interest rate</p>
            <input
              type="number"
              value={interestRate}
              onChange={(e) => setInterestRate(e.target.value)}
              className="w-full p-2 border rounded"
            />
          </div>
          <div>
            <p className="text-gray-600">Length of loan</p>
            <select
              value={loanTerm}
              onChange={(e) => setLoanTerm(e.target.value)}
              className="w-full p-2 border rounded"
            >
              <option value="15">15 years</option>
              <option value="15">20 years</option>
              <option value="30">30 years</option>
            </select>
          </div>
        </div>

        
      </div>
      </div>

      <section>
        <div className="bg-white py-16 px-6 md:px-20">
        {/* Section 1 */}
          <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                How does a mortgage calculator help me?
              </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              When deciding how much house you can afford, one of the most important
              pieces to determine is whether a home will fit into your monthly
              budget. A mortgage calculator helps you understand the monthly cost of
              a home. And ours will allow you to enter different down payments and
              interest rates to help determine what is affordable for you.
              </p>
            </div>

            {/* Divider Line */}
            <hr className="border-t border-gray-300 mb-6" />

            {/* Section 2 */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                How much monthly mortgage payment can I afford?
              </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
              Lenders determine how much you can afford on a monthly housing payment
              by calculating your{" "}
              <a href="#" className="text-green-600 underline">
               debt-to-income ratio (DTI)
              </a>
              . The maximum DTI you can have in order to qualify for most mortgage
              loans is often between 45–50%, with your anticipated housing costs
              included.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg mt-4">
              Your DTI is the balance between your income and your debt. It helps
              lenders understand how safe or risky it is for them to approve your
              loan. A DTI ratio represents how much of your gross monthly income is
              spoken for by creditors, and how much of it is left over to you as
              disposable income. It’s most commonly written as a percentage.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg mt-4">
              For example, if you pay half your monthly income in debt payments, you
              would have a DTI of 50%.
            </p>
          </div>
        </div>

        <div className="bg-gray-50 min-h-screen flex items-center justify-center p-6">
          <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-8">
            <h2 className="text-center text-lg text-gray-700 mb-6">
              Formula for calculating your debt-to-income (DTI) ratio:
            </h2>

            <img src='https://media.better.com/better-com/mortgage-calculator/dti-formula.jpg'></img>

            <h2 className="text-center text-lg text-gray-700 mb-6">
              Here’s an example of what calculating your DTI might look like:
            </h2>

            <img src='https://media.better.com/better-com/mortgage-calculator/dti-example.jpg'></img>
          </div>
        </div>  

        <div className="bg-white py-16 px-6 md:px-20">
        <hr className="border-t border-gray-300 mb-6" />
        {/* Section 1 */}
          <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              How does a mortgage calculator help me?
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">
                When deciding how much house you can afford, one of the most important pieces to determine is whether a home will fit into your monthly budget. A mortgage calculator helps you understand the monthly cost of a home. And ours will allow you to enter different down payments and interest rates to help determine what is affordable for you.
              </p>
          </div>

          {/* Divider Line */}
          <hr className="border-t border-gray-300 mb-6" />

          {/* Section 2 */}
          <div className="mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              How much monthly mortgage payment can I afford?
            </h2>
          <p className="text-gray-700 leading-relaxed text-lg">
            Lenders determine how much you can afford on a monthly housing payment
            by calculating your{" "}
            <a href="#" className="text-green-600 underline">
              debt-to-income ratio (DTI)
            </a>
              . The maximum DTI you can have in order to qualify for most mortgage
              loans is often between 45–50%, with your anticipated housing costs
              included.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg mt-4">
              Your DTI is the balance between your income and your debt. It helps
              lenders understand how safe or risky it is for them to approve your
              loan. A DTI ratio represents how much of your gross monthly income is
              spoken for by creditors, and how much of it is left over to you as
              disposable income. It’s most commonly written as a percentage.
            </p>
            <p className="text-gray-700 leading-relaxed text-lg mt-4">
              For example, if you pay half your monthly income in debt payments, you
              would have a DTI of 50%.
            </p>
          </div>
          <div className="bg-gray-50 min-h-screen flex items-center justify-center p-6">
          <div className="max-w-4xl w-full bg-white shadow-md rounded-lg p-8">
            <img src='https://media.better.com/better-com/mortgage-calculator/dti-formula.jpg'></img>
            <p className="text-gray-700 leading-relaxed text-lg mt-4">
            Where:

            M is monthly mortgage payments
            P is the principal loan amount (the amount you borrow)
            r is the monthly interest rate
            (annual interest rate divided by 12 and expressed as a decimal)
            For example:
            if the annual interest rate is 5%,
            the monthly rate would be 0.05/12 = .00417, or .417%
            n is the total number of payments in months
            For example:
            for a 30-year loan, n = 30×12 = 360 months
            Here’s a simple example:
            </p>
            <img src='https://media.better.com/better-com/mortgage-calculator/monthly-mortgage-payments-example.jpg'></img>
          </div>
          <hr className="border-t border-gray-300 mb-6 mt-6" />
        </div>
        <p>This formula assumes a fixed-rate mortgage, where the interest rate remains constant throughout the loan term. And remember, you’ll still need to add on taxes, insurance, utilities, and HOA fees if applicable.</p>
        <hr className="border-t border-gray-300 mb-6 mt-6" />
        </div>

        <div className="bg-white px-6 md:px-20">
        {/* Section 1 */}
          <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              How to use this mortgage calculator?
              </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
            Play around with different home prices, locations, down payments, interest rates, and mortgage lengths to see how they impact your monthly mortgage payments.

Increasing your down payment and decreasing your interest rate and mortgage term length will make your monthly payment go down. Taxes, insurance, and HOA fees will vary by location. If you enter a down payment amount that’s less than 20% of the home price, private mortgage insurance (PMI) costs will be added to your monthly mortgage payment. As the costs of utilities can vary from county to county, we’ve included a utilities estimate that you can break down by service. If you’re thinking about buying a condo or into a community with a Homeowners Association (HOA), you can add HOA fees.

The only amounts we haven’t included are the money you’ll need to save for annual home maintenance/repairs or the costs of home improvements. To see how much home you can afford including these costs, take a look at the Better home affordability calculator.

Fun fact: Property tax rates are extremely localized, so two homes of roughly the same size and quality on either side of a municipal border could have very different tax rates. Buying in an area with a lower property tax rate may make it easier for you to afford a higher-priced home.
              </p>
            </div>

            {/* Divider Line */}
            <hr className="border-t border-gray-300 mb-6" />

            {/* Section 2 */}
            <div className="mb-12">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
              Do you know your property tax rate?
              </h2>
            <p className="text-gray-700 leading-relaxed text-lg">
            While exact property tax rates vary by county, it can be helpful to look at taxes on the state level to get an idea for taxes in your state. Here’s a helpful chart from Forbes breaking down the Census Bureau’s 2021 American Community Survey 5-year estimate: {" "}
            </p>
          </div>
        </div>

      </section>

      <Footer/>
    </div>
  );
}