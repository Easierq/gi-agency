import { Clock, MapPin, Phone } from 'lucide-react';
import React from 'react'

const Banner = () => {
  return (
    <div className="bg-secondary-900 text-white py-2">
      <div className="px-[3%] lg:px-[7%] mx-auto">
        <div className="flex flex-wrap justify-between items-center text-sm">
          <div className="flex flex-wrap gap-4">
            <a
              href="tel:5551234567"
              className="flex items-center space-x-2 hover:text-primary-400 transition-colors"
            >
              <Phone className="w-4 h-4" />
              <span>(555) 123-4567</span>
            </a>
            <div className="flex items-center space-x-2">
              <Clock className="w-4 h-4" />
              <span>Mon-Fri: 7AM-7PM | Sat: 8AM-5PM</span>
            </div>
          </div>
          <div className="hidden md:flex items-center space-x-2">
            <MapPin className="w-4 h-4" />
            <span>789 Electric Ave, New York, NY 10001</span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner