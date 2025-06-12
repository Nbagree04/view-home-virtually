
import React from "react";
import { Link } from "react-router-dom";
import { Home, Mail, Phone, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-realestate-blue text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Info */}
          <div>
            <div className="flex items-center space-x-2 mb-4">
              <Home className="h-5 w-5" />
              <span className="text-xl font-bold">VR Estates</span>
            </div>
            <p className="text-sm opacity-80 mb-4">
              We revolutionize home-buying with virtual reality tours, making the process more immersive, convenient, and transparent.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/properties" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Properties
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Contact
                </Link>
              </li>
              <li>
                <Link to="/book-visit" className="text-sm opacity-80 hover:opacity-100 transition-opacity">
                  Book a Visit
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3">
                <MapPin className="h-5 w-5 shrink-0 mt-0.5" />
                <span className="text-sm opacity-80">Skye Luxuria, Nipania, Indore, Madhya Pradesh</span>
              </li>
              <li className="flex items-center space-x-3">
                <Phone className="h-5 w-5" />
                <span className="text-sm opacity-80">+91 98267 41260</span>
              </li>
              <li className="flex items-center space-x-3">
                <Mail className="h-5 w-5" />
                <span className="text-sm opacity-80">info@vrestates.com</span>
              </li>
            </ul>
          </div>

          {/* Office Hours */}
          <div>
            <h3 className="text-lg font-bold mb-4">Office Hours</h3>
            <ul className="space-y-2">
              <li className="text-sm opacity-80">
                <span className="font-medium">Mon-Fri:</span> 9:00 AM - 6:00 PM
              </li>
              <li className="text-sm opacity-80">
                <span className="font-medium">Saturday:</span> 10:00 AM - 4:00 PM
              </li>
              <li className="text-sm opacity-80">
                <span className="font-medium">Sunday:</span> Closed
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/20 mt-8 pt-6 text-center">
          <p className="text-sm opacity-70">
            © {new Date().getFullYear()} VR Estates. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
