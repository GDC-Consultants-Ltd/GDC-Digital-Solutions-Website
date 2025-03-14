// components/Footer.js
import { PaperAirplaneIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-white py-10 border-t border-gray-200 relative overflow-hidden">
      <div className="container mx-auto px-20 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 py-10">
        {/* Company Info Section */}
        <div className="flex flex-col items-start">
          {/* Logo grid with proper spacing and alignment */}
          <div className="grid grid-cols-2 gap-4 mb-4">
            <div className="flex items-center justify-center">
              <Image
                src="/assets/images/Digital Solution.webp"
                alt="GDC Digital Solutions Logo"
                width={140}
                height={60}
                className="object-contain h-16"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/assets/images/GDC LOGOS 2024 BLUE.webp"
                alt="GDC Consultants Logo"
                width={140}
                height={60}
                className="object-contain h-16"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/assets/images/Recruit Logo.png"
                alt="GDC Recruitment Logo"
                width={140}
                height={60}
                className="object-contain h-16"
              />
            </div>
            <div className="flex items-center justify-center">
              <Image
                src="/assets/images/properties logo.png"
                alt="GDC Properties Logo"
                width={140}
                height={60}
                className="object-contain h-16"
              />
            </div>
          </div>
        </div>

        {/* Services Section - Updated Structure */}
        <nav aria-label="Services navigation">
          <div className="mb-6">
            <h3 className="font-semibold mb-2">Digital Marketing</h3>
            <ul className="text-gray-600 space-y-1 ml-4" role="list">
              <li>Google & Facebook Ads</li>
              <li>SEO/ Copywriting</li>
            </ul>
          </div>

          <div className="mb-6">
            <h3 className="font-semibold mb-2">Web & App Development</h3>
            <ul className="text-gray-600 space-y-1 ml-4" role="list">
              <li>Website Development</li>
              <li>App Development</li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-2">Consulting & Strategy</h3>
            <ul className="text-gray-600 space-y-1 ml-4" role="list">
              <li>Business Analysis & Consulting</li>
            </ul>
          </div>
        </nav>

        {/* Newsletter Subscription */}
        <div>
          <h3 className="font-semibold mb-4">Subscribe Newsletters</h3>
          <p className="text-gray-600 mb-4">
            Get our latest news and ideas to your inbox
          </p>
          <form
            className="flex flex-col items-center space-y-4"
            aria-label="Newsletter subscription form"
          >
            <div className="flex w-full rounded-full overflow-hidden shadow-lg bg-white">
              <input
                type="email"
                placeholder="Your Email"
                aria-label="Email address for newsletter"
                className="py-3 px-6 w-full text-gray-600 focus:outline-none"
                style={{ borderTopRightRadius: 0, borderBottomRightRadius: 0 }}
                required
              />
              <button
                type="submit"
                aria-label="Subscribe to newsletter"
                className="bg-customYellow text-white flex items-center justify-center px-6 py-3"
                style={{ borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }}
              >
                <PaperAirplaneIcon className="h-5 w-5" aria-hidden="true" />
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="border-t border-gray-200 mt-10 pt-6 text-center text-gray-500 relative z-10">
        <p>Copyright © 2024 GDC Digital Solutions. All Rights Reserved.</p>
      </div>
    </footer>
  );
}
