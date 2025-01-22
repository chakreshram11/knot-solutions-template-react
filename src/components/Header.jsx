import React, { useState } from "react";
import {Link} from "react-router-dom";

const Header = () => {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="header">
      {/* <a className="sr-only focus:not-sr-only">
        Skip to content
      </a> */}
      <div className="bg-white shadow sticky top-0 z-50">
        <div className="container mx-auto flex justify-between items-center py-4 px-4 lg:px-8">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link href="/">
              <img
                src="https://knotsolutions.com/wp-content/uploads/2022/07/Knot-Solutions-logo-1024x362.png"
                alt="Knot Solutions Logo"
                className="h-12 sm:h-16"
              />
            </Link>
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
                <Link href="/about" className="hover:text-blue-600">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/products" className="hover:text-blue-600">
                  Products
                </Link>
              </li>
              <li>
                <Link href="/services" className="hover:text-blue-600">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/solutions" className="hover:text-blue-600">
                  Solutions
                </Link>
              </li>
              <li>
                <Link href="/insights" className="hover:text-blue-600">
                  Insights
                </Link>
              </li>
              <li>
                <Link href="/careers" className="hover:text-blue-600">
                  Careers
                </Link>
              </li>
              <li>
                <Link href="/partners" className="hover:text-blue-600">
                  Partners
                </Link>
              </li>
              <li>
                <Link href="/contact-us" className="hover:text-blue-600">
                  Contact Us
                </Link>
              </li>
            </ul>
          </nav>

          {/* Contact Button */}
          <div className="hidden lg:block">
            <Link
              href="/contact-us"
              className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
