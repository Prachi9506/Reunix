import React from "react";
import {
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Github,
  ArrowRight,
} from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300 relative">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-14">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-9 w-9 text-blue-400" />
              <span className="text-2xl font-bold text-white">
                ReUnix
              </span>
            </div>
            <p className="mb-3 text-gray-400 leading-relaxed">
              Where alumni inspire, and students rise. <br />
              Building meaningful connections, mentorship, and lifelong growth
              opportunities.
            </p>
            <p className="text-sm italic text-gray-500">
              Empowering students with alumni wisdom since 2025
            </p>

            {/* Social Links */}
            <div className="flex space-x-4 mt-6">
              <a
                href="https://linkedin.com"
                aria-label="LinkedIn"
                className="p-2 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-600 transition"
              >
                <Linkedin className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://twitter.com"
                aria-label="Twitter"
                className="p-2 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-blue-400 hover:to-purple-500 transition"
              >
                <Twitter className="h-5 w-5 text-white" />
              </a>
              <a
                href="https://github.com"
                aria-label="GitHub"
                className="p-2 rounded-full bg-gray-800 hover:bg-gradient-to-r hover:from-gray-600 hover:to-purple-600 transition"
              >
                <Github className="h-5 w-5 text-white" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {[
                { label: "About Us", href: "#about" },
                { label: "Features", href: "#features" },
                { label: "Events", href: "#events" },
                { label: "Blog", href: "#blog" },
                { label: "Careers", href: "#careers" },
                { label: "Support", href: "#support" },
              ].map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="flex items-center hover:text-blue-400 transition-colors"
                  >
                    <ArrowRight className="h-4 w-4 mr-2 text-blue-400" />
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + Map + Newsletter */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-5">
              Get in Touch
            </h3>
            <div className="space-y-4 mb-6 text-sm">
              <div className="flex items-center">
                <Phone className="h-4 w-4 mr-2 text-blue-400" /> +91 99999 00000
              </div>
              <div className="flex items-center">
                <Mail className="h-4 w-4 mr-2 text-blue-400" />{" "}
                support@ReUnix.net
              </div>
              <div className="flex items-center">
                <MapPin className="h-4 w-4 mr-2 text-blue-400" /> KIET Group of
                Institutions, Ghaziabad
              </div>
            </div>

            {/* Newsletter */}
            <form className="flex mb-6">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-3 py-2 rounded-l-lg bg-gray-800 text-gray-200 border border-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400"
              />
              <button
                type="submit"
                className="px-5 py-2 bg-gradient-to-r from-blue-500 to-purple-600 
                           text-white rounded-r-lg hover:from-blue-600 hover:to-purple-700 
                           transition-all duration-300 shadow-md"
              >
                Subscribe
              </button>
            </form>

            {/* Map */}
            <div className="w-full h-36 rounded-lg overflow-hidden shadow-lg transform transition duration-500 hover:scale-105">
              <iframe
                title="KIET Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14014.793061687753!2d77.4969542!3d28.7522703!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cf3082b9cf79f%3A0xdeb5b9f71f1e1a!2sKIET%20Group%20of%20Institutions!5e0!3m2!1sen!2sin!4v1693839288889!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-gray-800 mt-12 pt-6 flex flex-col md:flex-row items-center justify-between text-sm">
          <p className="text-gray-400">
            © 2025 ReUnix All rights reserved. | Built for educational
            institutions.
          </p>
          <div className="flex space-x-6 mt-3 md:mt-0">
            <a href="#" className="hover:text-blue-400">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-blue-400">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
