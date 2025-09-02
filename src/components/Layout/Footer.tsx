import React from 'react';
import { GraduationCap, Mail, Phone, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <GraduationCap className="h-8 w-8 text-blue-400" />
              <span className="text-xl font-bold">AlumniConnect</span>
            </div>
            <p className="text-gray-300 mb-4">
              Bridging the gap between alumni and students, fostering meaningful 
              connections, mentorship, and career growth opportunities.
            </p>
            <div className="flex space-x-4">
              <div className="flex items-center text-sm text-gray-400">
                <Mail className="h-4 w-4 mr-2" />
                contact@alumniconnect.edu
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Features</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Success Stories</a></li>
              <li><a href="#" className="text-gray-300 hover:text-white transition-colors">Support</a></li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact</h3>
            <div className="space-y-3">
              <div className="flex items-center text-sm text-gray-300">
                <Phone className="h-4 w-4 mr-2" />
                +1 (555) 123-4567
              </div>
              <div className="flex items-center text-sm text-gray-300">
                <MapPin className="h-4 w-4 mr-2" />
                123 University Ave, Campus City
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400">
            © 2025 AlumniConnect. All rights reserved. | Built for educational institutions.
          </p>
        </div>
      </div>
    </footer>
  );
}