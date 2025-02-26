import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';
import '../../styles/globals.css';

export default function AboutUs() {
  const logos = [
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShDv9PB1TZ_E_H_QlLdbvh9ccMN5Bg9b4T9A&s", alt: "SoftBank" },
    { src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRO8VNpiNl5d_oaBw0t9NrtGA5ho9CG51Yf_g&s", alt: "Ally" },
    { src: "data:image/png;base64,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", alt: "Citi" },
    { src: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAflBMVEX///8AAAD6+vqDg4MtLS3b29u4uLhWVlZxcXE/Pz9qamr29vbi4uJ9fX3BwcHJyclKSkqsrKympqbs7OxCQkKOjo41NTXV1dWampodHR3Q0NCxsbFISEi7u7spKSmenp4XFxdcXFwPDw9SUlKJiYlkZGQqKioSEhIbGxt3d3fICMtCAAAKL0lEQVR4nO2baZuivBKGARtF2VQGXFtHxZnx///BQ5LKUkkAtd95+zrn1P2lG8j2pLJUFoOAIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIAiCIP4fWMw46XeX469RhYJyOFi8YWQvJx+VgrfKtsknz5LHvalIhfvBvA4i0MJ4NV1+uDQPqy3MIXn2/+XkicHZrb25zsLnUUUrLnbqEMLOfYkyhUCVftP2ZYUkJvBy0/2fDpSv8Sq8vKFw8UKcJlJZbcWbLX+I2PuqN1ptFHEN71bBiML5P6Xw/EKUMExkTk7ZujbaG2upS7iHV7k/FQO/wjda6QsxGLLBTewP0YBCXdgKv3m9lZbLmcUSwrsf9qN5+NiIjDLng1TYogLFlsKdCHyVFfWjP6eJV6GLrLS+QV18r7ueNAK0L1B471WIC7bBCmU0PY4PZPgkmZOmX+E4psLYrfLgCRvWEHb6bOm9ZBxVA65CXEOilW6fSHhjKDxCw6gUgVQ4n+QGC1Nh8WL78/NptUpboex3KxmhXHV03WLBZr+Ta8xYzIqdhGkX8GBmcsYhx0YaWZSlncWLQDKzHoVyVrabeSRe/3HSg3nvE6meMgor5JjCk3j49XQP62EFqVqDHiiUA49jK1B4ctI7exT6GVMYpZz3pUlgQP4hniyFeY8Jpe1dheCDYIOVropxhRLpY0RBPOg5W51AIzMqPQqlCfXIkiWA+HB9JJgHDCozeM5QIQ0yyDgPUk1UugrleFOPumC9a4MPs+KwQun16sDb4UwcatOwPoWD86FRoFvwvkJZSYWjUD4Y9n/NLZXWH7AhVmj7NEH0WwT/HX1BYdCIAI2jULoURtj3FHq6nPRpZqu1QWsrvKkK+YpC6b9/WgqlJ2Iu895rpUEWx3Emhv9DzEifG2mkwy68mpGFm7H0tAF3e2cpvIh/r2bQbLFg48kjF0PwLllYgG98E09307/9xb+onYB+hYkdRKydgrTogD2NPWMD39n7YtMvMJABD0ihfLvyxhFj5s15750tBKdnFcrmJhvRsbfkEGBAG3BT1jIULgej9ykcmPGFDVVV9yqUtSM9xl1/wSHEuNtTHeeMU2YorMLd6XTa/fRZI5D63drd+myYtt2M3P7kX/LztmMqFSZZjNHtWm5BXfFQ8JZCzdjqSXGXVrd4iPh4380zAlfe2cLEHFe+QyEUOrdew54h3i4bmfGnH6wBXVjA9MLbEvevpuvVanr/PoXSoduZy9ON7Lt3HHhYISTFrCn8K6Ptb7+k8NU9F6xaLsDDkxxsS72xZU1NIz7NVr668L+/3FzeVOjZWxjEmjZq/aXuFK1OfXXRWWnStm0tRpoZnyfbwOyH4ssdUkzdTL5HYRA3+tv9qv9f9GTonS24wsLMBlXP9ypkY4Qbatbbhb0zvhhLbzo+PoH5boVd37vhMPnA2dKAwqwvk68pDLq5t2Z0naTl50t5foE4i9zmMfFtKERTo/uF4WPA+x1SqPaD7O2SLyr0IPcbnjrmy6buTu9t3Rt1SCHs+zgu4j+vUPb5/vnwdv0pcMQpdnOgQZ1qSKF0Ff6+DUcV+ifR5vDwvjfPQ4cVynW4tQbyKPzU55RyMP/rCi/MVGnt+ZKYUYXCawffyzfXFsZijX3Wpvco9KyD/7LCiep4B2fyQAqN6fMU4Elwikuu3XGPwiR0eEHgywpvB1R/m8kOfUat1DDyh5USW07KTafQPK55SiGqxy8rDNY1sN0efHcTqlKFqFs8rmojnsy8QGGQygXhsA2dVjp/ad8f/PzTVw8L/KxhM+cuFiRZnTwYSQ7Z7WvxWddvxTaFEnQ9I8Nb3fV711AIgiAIgiCI/wnk1YKvpFEukkc+ac+H0toBSod2e17OZb5UHHNxhSlIjstjV/ZivvxhnCFt5su5WCsc9Ob2/GyLfPzemRfRbsujuYS6HI9y4WCuntDxR4zvKuxz4x5B9fI98RVeiIg9BraQTeG0QS+Q2N0t5sdHSxTjiitc7AuqRy7DOMUIdenRHWHzdihbRJ1RCmo1FcN24944OFgvBlXbCvnCsDEU6l23AhQu7SiojV3wek4YSq9oQ3U3iSvclOXnYTtHK0B+rUCfivJdXdmUVlBdF33HZ9t3PdhQmJSFoGzE6hspVAJAITPloVCE+AhQ7jJjhbr8hsJYB1uY9/Nu/ExUrfo2ZiHOsKCfKYVso3Vwjc8U6htPzAAbW+EHVngP0b5IiB9ZChejlcnOVujgUuFGx9wYB07d//NCXyWEmyJQAZ3BHlALIod8TKBH4SdSyDbtb0ghO8A3RhesMOb9zHjHFB5l68cKS32EXBh9dcaqI9T9bM9NCoJqGJSW0CyS0L6D+4TCKVJYsVcLU+ESK2QtXD/NeJizTpQpTHjTrWyFheptm6se0WK+iTPRBe8qYr6VVdRCn5jziyOB2VreVZjxh7pfIYJJaWCLPlIKF3xD+09kKWQdumHbuiezDHd16UUrbNgNdl4bOSj/4OWchU/ckHYVFkhhHEQ7GClshXUDe/f6CuZSBOFGrA2F/EVjKTR3hNV8KKUdVdkLdupdQUt6QLo7ls8xHP2tFShcTA+CKUhDCsW8VboK9T6+TGwTypFbGTHVReODB1b4Z3Zsfu1YN/sJk9IdOthUhTvwiFNhrgfYgw22x9Daj+1XiGDpY4VivI6fUHhTlaqMKBXybzlSuFJjWHqWaTITVtwXvMrBCabAhHflBPpdKIYf0RtfU8hryFIotm5TW2HK7/cYCrUJRU9MTYXcU6lNhWdjSsjBV0H72aLprmGc/cMSv4tw4izuyEKPenFM4ekHdKjLWUystkL+X3MIfSONoVD0C/HjBTb6tUghL1Wx0wq7IBejGEyP9WOvCILxBNgotr2I7snTOvLu6N7D9ih0fj3hKFRHtKVobl6FbGpuYPyoAjCiVqhOsqXC1pgE72IW6Br+rmlOu6vuMUyhmNJZU97BEUco4mbheFd8UqG8TFuKkwQjbKi8ZmbcQilkRpwghdKjkwq7Oe/C2nmVbdhRxKcwoZg2ozQ6gzdVgxsjHWKmMIU+wIs40hWfVQg/cytFMa47CTsJFsP6XvRCqRCMaCqEI3SpEJ+pMjW5aRFmJ+YGtMrxFR4g8y8q1Y7uo13xaYXifLMM3MEJ3MKjyF0pZEbMsUIR1bChZslMgkv7EDFbffRdyCJoh4DVg/uzFhOmwvm5yEkoPCOFqUwe3++RsZl9WK8X5/EZjAaV7DFAqxt1kCb3S7c+njfNrS0h34dRilgErQ3HLIciYKcdxXKoOrfSsTL4mln3J8JBYRHzqX6OtaqMrxX8LfhxYNz9TYPuKcZJ9/8gOsKnltMHK1m0SHQhGnFpPzUWkFvfPd7/YuBXdvFaL7vry+u/gCcIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiAIgiCIf5//AI0WkbZKSwqCAAAAAElFTkSuQmCC", alt: "PingAn Bank" },
    { src: "data:image/png;base64,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", alt: "Goldman Sachs" },
    { src: "data:image/png;base64,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", alt: "KPCB" },
    { src: "data:image/png;base64,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", alt: "American Express" },
  ];

  const timelineData = [
    {
      year: "2014",
      text: "After Vishal Garg’s first attempt to purchase his own dream home, he quickly realized that the homebuying process is unnecessarily broken. This inspired him to found a technology-first company led by engineers and data experts with the mission of digitizing and automating home finance to make it cheaper, easier, and faster for all.",
    },
    {
      year: "2015",
      text: "Better Mortgage funds its first mortgage loan entirely online (without a single phone call!).",
    },
    {
      year: "2016",
      text: "Better Mortgage becomes a Fannie Mae approved seller + servicer and establishes relationships with top mortgage investors.",
    },
    {
      year: "2017",
      text: "Better expands into the real estate market with Better Real Estate.",
    },
    {
      year: "2018",
      text: "Better Mortgage partners with Ally Bank to build Ally powered by Better.",
    },
    {
      year: "2019",
      text: "Better Mortgage launches its pilot partnership with American Express to deliver a seamless homebuying experience to AMEX customers.",
    },
    {
      year: "2021",
      text: "Better acquires Trussle — The UK’s most innovative online mortgage broker.",
    },
    {
      year: "2022",
      text: "Better Mortgage becomes the first fintech to fund $100B home loans entirely online.",
    },
    {
      year: "2023",
      text: "Better Mortgage launches One Day Mortgage¹: The first offering to customers to go from application to full mortgage Commitment Letter within 24 hours vs. typical industry process of 30+ days.",
    },
    {
      text: "Better Mortgage launches the fully digital 3-day HELOC².",
    },
    {
      text: "Better Mortgage launches One Day Verified Approval Letter.",
    },
    {
      year: "Today",
      text: "You become part of the story by joining tens of thousands of happy Better Mortgage borrowers.",
    },
  ];

  return (
    <div>
      <Navbar />
      <section className="bg-[#F9F7F4] text-center py-60">
        <h3 className="text-green-700 text-[35px] font-medium">Our mission</h3>
        <h2 className="text-4xl md:text-4xl lg:text-5xl font-semibold text-[#292B29] max-w-5xl mx-auto mt-3">
          We’re making homeownership simpler, faster — and most importantly, more
          accessible for all Americans.
        </h2>
      </section>

      <section className="bg-[#F9F7F4] pb-20 px-6 md:px-12 lg:px-20 flex flex-col md:flex-row items-center justify-center gap-12">
      {/* Text Content */}
        <div className="max-w-lg text-center md:text-left">
          <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">
            The status quo is broken
          </h2>
          <p className="text-gray-700 mt-4">
            The traditional processes around homeownership are opaque and
            stressful. Fees aren’t transparent and some are simply outrageous in
            size. Traditional mortgage lending is rife with unnecessary fees and
            slow, painful processes. It’s a system set up to benefit insiders —
            not you. Better.com CEO, Vishal Garg, set out to change that.
          </p>
          <button className="mt-6 px-6 py-3 bg-green-700 text-white font-semibold rounded-md hover:bg-green-800 transition duration-300">
            Read Vishal’s story
          </button>
        </div>

        {/* Video Section */}
        <div className="relative">
          <img
            src="https://media.better.com/video/vishal-mission.jpg"
            alt="Vishal Garg"
            className="w-full max-w-lg rounded-lg shadow-md"
          />
          <button className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-40 rounded-lg">
            <svg
              className="w-12 h-12 text-white"
              fill="currentColor"
              viewBox="0 0 24 24"
            >
              <path d="M8 5v14l11-7z" />
            </svg>
          </button>
        </div>
      </section>

      <section className="bg-[#017848] text-white my-10 py-20 px-6 md:px-12 lg:px-20 text-center md:text-left">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-semibold">How we’re changing things</h2>
          <p className="mt-4 text-lg">
            Homeownership is a huge part of our economy. Housing overall is a $33 trillion business, and mortgages account for $15 trillion.
            Yet home finance operates in the same way it has for decades — through opaque systems and expensive intermediaries whose interests are misaligned with consumers’.
          </p>
          <p className="mt-4 text-lg">
            That’s why Better.com is redefining the homeownership process from the ground up. We’re using technology to make it faster and more efficient, and humans to help make it friendly and enjoyable.
          </p>
        </div>
      </section>

      <section className="text-center py-12 px-6">
        <h2 className="text-3xl font-semibold mb-20 text-[#292B29]">Backed by</h2>
        <div className="flex flex-wrap justify-center gap-12 items-center mb-20">
          {logos.map((logo, index) => (
            <img
              key={index}
              src={logo.src}
              alt={logo.alt}
              className="h-16 md:h-20 object-contain"
            />
          ))}
        </div>
        <h2 className="text-3xl font-semibold mt-12 text-[#292B29] mb-20">Company timeline</h2>
      </section>

      <div className="bg-gray-50 py-16 flex justify-center">
      <div className="relative w-3/4 md:w-2/3 lg:w-1/2">
        {/* Timeline Vertical Line */}
        <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>

        {timelineData.map((event, index) => (
          <div
            key={index}
            className={`mb-12 flex items-center w-full ${
              index % 2 === 0 ? "justify-start" : "justify-end"
            }`}
          >
            <div className="relative w-5/12">
              {/* Card */}
              <div className="bg-gray-200 p-5 rounded-lg shadow-md text-gray-700">
                {event.text}
              </div>
            </div>

            {/* Dot in the middle */}
            <div className="py-3 px-5 bg-green-600 text-white font-semibold text-xl rounded-full absolute left-1/2 transform -translate-x-1/2">{event.year}</div>
          </div>
        ))}
      </div>
    </div>

      <Footer/>
    </div>
  );
}