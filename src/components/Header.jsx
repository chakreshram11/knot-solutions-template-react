// import React from "react";

// const Header = () => {
//   return (
//     <header className="header">
//       <a href="#content" className="sr-only focus:not-sr-only">
//         Skip to content
//       </a>
//       <div className="bg-white shadow sticky top-0 z-50">
//         <div className="container mx-auto flex justify-between items-center py-4">
//           {/* Logo */}
//           <div className="w-1/4 text-center">
//             <a href="/">
//               <img
//                 src="https://knotsolutions.com/wp-content/uploads/2022/07/Knot-Solutions-logo-1024x362.png"
//                 alt="Knot Solutions Logo"
//                 className="h-16 mx-auto"
//               />
//             </a>
//           </div>

//           {/* Navigation Menu */}
//           <nav className="w-1/2">
//             <ul className="flex justify-evenly items-center text-gray-700 text-sm">
//               <li>
//                 <a href="/about" className="hover:text-blue-600">
//                   About Us
//                 </a>
//               </li>
//               <li>
//                 <a href="/products" className="hover:text-blue-600">
//                   Products
//                 </a>
//               </li>
//               <li>
//                 <a href="/services" className="hover:text-blue-600">
//                   Services
//                 </a>
//               </li>
//               <li>
//                 <a href="/solutions" className="hover:text-blue-600">
//                   Solutions
//                 </a>
//               </li>
//               <li>
//                 <a href="/insights" className="hover:text-blue-600">
//                   Insights
//                 </a>
//               </li>
//               <li>
//                 <a href="/careers" className="hover:text-blue-600">
//                   Careers
//                 </a>
//               </li>
//               <li>
//                 <a href="partners" className="hover:text-blue-600">
//                   Partners
//                 </a>
//               </li>
//               <li>
//                 <a href="/contact-us" className="hover:text-blue-600">
//                   Contact Us
//                 </a>
//               </li>
//             </ul>
//           </nav>

//           {/* Contact Button */}
//           <div className="w-1/4 text-right">
//             <a
//               href="/contact-us"
//               className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
//             >
//               Contact Us
//             </a>
//           </div>

//           {/* Search Form */}
//           <div className="hidden md:flex items-center">
//             <button
//               className="text-gray-600 hover:text-blue-600 focus:outline-none"
//               aria-label="Search"
//             >
//               <i className="fas fa-search"></i>
//             </button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// };

// export default Header;

import React, { useState } from "react";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      <a href="#content" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <div className="bg-white shadow sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-4 lg:px-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="/">
              <img
                src="https://knotsolutions.com/wp-content/uploads/2022/07/Knot-Solutions-logo-1024x362.png"
                alt="Knot Solutions Logo"
                className="h-12 sm:h-16"
              />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <div className="lg:hidden">
            <button
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
              aria-label="Toggle menu"
              onClick={() => setMobileMenuOpen(!isMobileMenuOpen)}
            >
              {/* Hamburger Icon */}
              {isMobileMenuOpen ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
              )}
            </button>
          </div>

          {/* Navigation Menu */}
          <nav
            className={`${
              isMobileMenuOpen ? "block" : "hidden"
            } lg:flex flex-col lg:flex-row lg:space-x-6 bg-white lg:bg-transparent absolute lg:static top-16 left-0 w-full lg:w-auto shadow-lg lg:shadow-none z-40 lg:z-auto`}
          >
            <ul className="flex flex-col lg:flex-row lg:space-x-6 space-y-4 lg:space-y-0 text-gray-700 text-sm px-4 lg:px-0 py-4 lg:py-0">
              <li>
                <a href="/about" className="hover:text-blue-600">
                  About Us
                </a>
              </li>
              <li>
                <a href="/products" className="hover:text-blue-600">
                  Products
                </a>
              </li>
              <li>
                <a href="/services" className="hover:text-blue-600">
                  Services
                </a>
              </li>
              <li>
                <a href="/solutions" className="hover:text-blue-600">
                  Solutions
                </a>
              </li>
              <li>
                <a href="/insights" className="hover:text-blue-600">
                  Insights
                </a>
              </li>
              <li>
                <a href="/careers" className="hover:text-blue-600">
                  Careers
                </a>
              </li>
              <li>
                <a href="/partners" className="hover:text-blue-600">
                  Partners
                </a>
              </li>
              <li>
                <a href="/contact-us" className="hover:text-blue-600">
                  Contact Us
                </a>
              </li>
            </ul>
          </nav>

          {/* Contact Button */}
          <div className="hidden lg:block">
            <a
              href="/contact-us"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Contact Us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
