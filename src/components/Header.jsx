import React from "react";

const Header = () => {
  return (
    <header className="header">
      <a href="#content" className="sr-only focus:not-sr-only">
        Skip to content
      </a>
      <div className="bg-white shadow sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-4">
          {/* Logo */}
          <div className="w-1/4 text-center">
            <a href="/">
              <img
                src="https://knotsolutions.com/wp-content/uploads/2022/07/Knot-Solutions-logo-1024x362.png"
                alt="Knot Solutions Logo"
                className="h-16 mx-auto"
              />
            </a>
          </div>

          {/* Navigation Menu */}
          <nav className="w-1/2">
            <ul className="flex justify-evenly items-center text-gray-700 text-sm">
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
                <a href="partners" className="hover:text-blue-600">
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
          <div className="w-1/4 text-right">
            <a
              href="/contact-us"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Contact Us
            </a>
          </div>

          {/* Search Form */}
          <div className="hidden md:flex items-center">
            <button
              className="text-gray-600 hover:text-blue-600 focus:outline-none"
              aria-label="Search"
            >
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
