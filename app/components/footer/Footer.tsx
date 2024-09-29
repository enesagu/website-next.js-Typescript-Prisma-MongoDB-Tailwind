import React from "react";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaGithub } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8  mt-2">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center flex-wrap">
          {/* Logo and Description */}
          <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
            <h1 className="text-2xl font-bold">MyCompany</h1>
            <p className="text-gray-400 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis vehicula ex lorem, nec scelerisque turpis ullamcorper ac.</p>
          </div>

          {/* Links Section */}
          <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
            <h2 className="font-bold text-lg">Quick Links</h2>
            <ul className="mt-4 space-y-2">
              <li>
                <a href="#!" className="hover:text-gray-300">About Us</a>
              </li>
              <li>
                <a href="#!" className="hover:text-gray-300">Services</a>
              </li>
              <li>
                <a href="#!" className="hover:text-gray-300">Contact</a>
              </li>
              <li>
                <a href="#!" className="hover:text-gray-300">Blog</a>
              </li>
            </ul>
          </div>

          {/* Social Media Icons */}
          <div className="w-full lg:w-1/3 mb-4 lg:mb-0">
            <h2 className="font-bold text-lg">Follow Us</h2>
            <div className="flex space-x-4 mt-4">
              <a href="#!" className="text-white hover:text-gray-400">
                <FaFacebookF />
              </a>
              <a href="#!" className="text-white hover:text-gray-400">
                <FaTwitter />
              </a>
              <a href="#!" className="text-white hover:text-gray-400">
                <FaInstagram />
              </a>
              <a href="#!" className="text-white hover:text-gray-400">
                <FaLinkedinIn />
              </a>
              <a href="#!" className="text-white hover:text-gray-400">
                <FaGithub />
              </a>
            </div>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="border-t border-gray-700 mt-8 pt-4 text-center">
          <p className="text-gray-500">
            © {new Date().getFullYear()} MyCompany. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
