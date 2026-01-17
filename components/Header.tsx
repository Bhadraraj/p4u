"use client";

import { useState } from "react";
import {
  MapPin,
  Search,
  ShoppingCart,
  User,
  ChevronDown,
  Menu,
  X,
  ShoppingBag,
  Settings,
  Video,
  Calendar,
  FileText,
} from "lucide-react";
import Image from "next/image";
import logo from "../images/logo.png";
import Ind from "../images/language/Ind.png";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <header className="w-full bg-white border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        {/* Desktop Header (1200px+) */}
        <div className="hidden min-[1200px]:block">
          <div className=" max-w-[1400px]  mx-auto px-4 xl:px-6 py-3">
            <div className="flex items-center gap-1.5 xl:gap-3">
              {/* Logo */}
              <div className="flex-shrink-0">
                <div className="w-16 h-16 xl:w-20 xl:h-20 flex items-center justify-center relative overflow-hidden">
                  <Image
                    src={logo}
                    alt="P4U Mall Logo"
                    fill
                    className="object-contain p-2"
                    priority
                  />
                </div>
              </div>

              {/* Location Selector */}
              <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-xl px-2.5 xl:px-4 py-2.5 w-36 xl:w-52 cursor-pointer hover:border-gray-400 transition-colors flex-shrink-0">
                <MapPin
                  className="text-gray-500 w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0"
                  strokeWidth={2}
                />
                <span className="text-gray-600 text-xs xl:text-sm truncate">
                  JJ Nagar, Coimbator...
                </span>
              </div>

              {/* Search Bar */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 xl:gap-3 bg-white border border-gray-300 rounded-xl px-3 xl:px-4 py-2.5 hover:border-gray-400 transition-colors">
                  <Search
                    className="text-gray-500 w-4 xl:w-5 h-4 xl:h-5 flex-shrink-0"
                    strokeWidth={2}
                  />
                  <input
                    type="text"
                    placeholder="Search for Groceries"
                    className="bg-transparent outline-none text-gray-700 flex-1 text-xs xl:text-sm placeholder:text-gray-500 w-full min-w-0"
                  />
                </div>
              </div>

              {/* Become a Seller Button */}
              <button className="bg-white border border-gray-300 text-black px-3 xl:px-6 py-2.5 rounded-xl hover:bg-gray-50 transition-colors whitespace-nowrap  text-xs xl:text-sm flex-shrink-0">
                Become a Seller
              </button>

              {/* Language Selector */}
              <div className="flex items-center gap-1.5 xl:gap-2 px-2.5 xl:px-4 py-2 border border-gray-300 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors flex-shrink-0">
                <div className="w-5 xl:w-6 h-3 xl:h-4 relative">
                  <Image
                    src={Ind}
                    alt="India Flag"
                    fill
                    className="object-contain rounded-sm"
                  />
                </div>
                <span className="text-xs xl:text-sm   text-black">
                  ENG
                </span>
                <ChevronDown
                  className="w-3 xl:w-4 h-3 xl:h-4 text-black"
                  strokeWidth={2}
                />
              </div>

              {/* Login Button */}
              <div className="flex items-center gap-1.5 xl:gap-2 px-2.5 xl:px-4 py-2.5 border border-gray-300 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors flex-shrink-0">
                <User
                  className="w-4 xl:w-5 h-4 xl:h-5 text-black"
                  strokeWidth={2}
                />
                <span className="text-xs xl:text-sm   text-black">
                  Login
                </span>
                <ChevronDown
                  className="w-3 xl:w-4 h-3 xl:h-4 text-black"
                  strokeWidth={2}
                />
              </div>

              {/* Cart Button */}
              <div className="flex items-center gap-1.5 xl:gap-2 px-2.5 xl:px-4 py-2.5 border border-gray-300 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors relative flex-shrink-0">
                <div className="relative">
                  <ShoppingCart
                    className="w-4 xl:w-5 h-4 xl:h-5 text-black"
                    strokeWidth={2}
                  />
                  <div className="absolute -top-2 -right-2 bg-cyan-600 rounded-full w-4 xl:w-5 h-4 xl:h-5 flex items-center justify-center">
                    <span className="text-white text-xs font-bold">2</span>
                  </div>
                </div>
                <span className="text-xs xl:text-sm   text-black">
                  Cart
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Tablet Header (768px - 1199px) */}
        <div className="hidden md:block min-[1200px]:hidden">
          <div className="px-3 sm:px-4 py-2.5">
            <div className="flex items-center justify-between gap-2">
              {/* Logo */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center relative overflow-hidden">
                  <Image
                    src={logo}
                    alt="P4U Mall Logo"
                    fill
                    className="object-contain p-2"
                    priority
                  />
                </div>
              </div>

              {/* Search Only */}
              <div className="flex-1 mx-2">
                <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-xl px-3 py-2 hover:border-gray-400 transition-colors">
                  <Search
                    className="text-gray-500 w-4 h-4 flex-shrink-0"
                    strokeWidth={2}
                  />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="bg-transparent outline-none text-gray-700 flex-1 text-sm placeholder:text-gray-500 w-full"
                  />
                </div>
              </div>

              {/* Right Actions */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <div className="flex items-center px-2.5 py-2.5 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors">
                  <User className="w-5 h-5 text-black" strokeWidth={2} />
                </div>

                <div className="flex items-center px-2.5 py-2.5 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors relative">
                  <div className="relative">
                    <ShoppingCart
                      className="w-5 h-5 text-black"
                      strokeWidth={2}
                    />
                    <div className="absolute -top-2 -right-2 bg-cyan-600 rounded-full w-5 h-5 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">2</span>
                    </div>
                  </div>
                </div>

                <button
                  className="p-2.5 hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? (
                    <X className="w-5 h-5 text-black" strokeWidth={2} />
                  ) : (
                    <Menu className="w-5 h-5 text-black" strokeWidth={2} />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="absolute left-0 right-0 bg-white border-t border-b border-gray-200 shadow-lg z-40">
              <nav className="flex flex-col px-4 py-3 space-y-2">
                <button className="text-left text-sm   w-full py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-300 flex items-center justify-between">
                  Become a Seller
                </button>

                <div className="flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
                  <div className="w-6 h-4 relative">
                    <Image
                      src={Ind}
                      alt="India Flag"
                      fill
                      className="object-contain rounded-sm"
                    />
                  </div>
                  <span className="text-sm   text-black">ENG</span>
                  <ChevronDown className="w-4 h-4 text-black" strokeWidth={2} />
                </div>

                <button className="text-left text-sm   w-full py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-300 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-black" strokeWidth={2} />
                    <span>Login / Sign Up</span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-black" strokeWidth={2} />
                </button>
              </nav>
            </div>
          )}
        </div>

        {/* Mobile Header (< 768px) */}
        <div className="block md:hidden">
          <div className="px-3 sm:px-4 py-2.5">
            <div className="flex items-center justify-between gap-2">
              {/* Logo */}
              <div className="flex-shrink-0">
                <div className="w-12 h-12 sm:w-14 sm:h-14 flex items-center justify-center relative overflow-hidden">
                  <Image
                    src={logo}
                    alt="P4U Mall Logo"
                    fill
                    className="object-contain p-2"
                    priority
                  />
                </div>
              </div>

              {/* Location Icon */}
              <div className="flex items-center px-2.5 py-2.5 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors">
                <MapPin className="w-5 h-5 text-gray-600" strokeWidth={2} />
              </div>

              {/* Search */}
              <div className="flex-1 mx-2">
                <div className="flex items-center gap-2 bg-white border border-gray-300 rounded-xl px-3 py-2 hover:border-gray-400 transition-colors">
                  <Search
                    className="text-gray-500 w-4 h-4 flex-shrink-0"
                    strokeWidth={2}
                  />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="bg-transparent outline-none text-gray-700 flex-1 text-sm placeholder:text-gray-500 w-full"
                  />
                </div>
              </div>

              {/* Right Actions */}
              <div className="flex items-center gap-2 flex-shrink-0">
                <div className="flex items-center px-2.5 py-2.5 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors">
                  <User className="w-5 h-5 text-black" strokeWidth={2} />
                </div>

                <div className="flex items-center px-2.5 py-2.5 cursor-pointer hover:bg-gray-50 rounded-lg transition-colors relative">
                  <div className="relative">
                    <ShoppingCart
                      className="w-5 h-5 text-black"
                      strokeWidth={2}
                    />
                    <div className="absolute -top-2 -right-2 bg-cyan-600 rounded-full w-5 h-5 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">2</span>
                    </div>
                  </div>
                </div>

                <button
                  className="p-2.5 hover:bg-gray-50 rounded-lg transition-colors"
                  onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                  {isMobileMenuOpen ? (
                    <X className="w-5 h-5 text-black" strokeWidth={2} />
                  ) : (
                    <Menu className="w-5 h-5 text-black" strokeWidth={2} />
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Mobile Menu */}
          {isMobileMenuOpen && (
            <div className="absolute left-0 right-0 bg-white border-t border-b border-gray-200 shadow-lg z-40">
              <nav className="flex flex-col px-4 py-3 space-y-2">
                <button className="text-left text-sm   w-full py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-300 flex items-center justify-between">
                  Become a Seller
                </button>

                <div className="flex items-center gap-2 px-4 py-2.5 border border-gray-300 rounded-xl cursor-pointer hover:bg-gray-50 transition-colors">
                  <div className="w-6 h-4 relative">
                    <Image
                      src={Ind}
                      alt="India Flag"
                      fill
                      className="object-contain rounded-sm"
                    />
                  </div>
                  <span className="text-sm   text-black">ENG</span>
                  <ChevronDown className="w-4 h-4 text-black" strokeWidth={2} />
                </div>

                <button className="text-left text-sm   w-full py-3 px-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-300 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <User className="w-4 h-4 text-black" strokeWidth={2} />
                    <span>Login / Sign Up</span>
                  </div>
                  <ChevronDown className="w-4 h-4 text-black" strokeWidth={2} />
                </button>
              </nav>
            </div>
          )}
        </div>

        {/* Navigation Bar */}
        <nav className="w-full bg-cyan-50 border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-2 sm:px-4 lg:px-6">
            {/* Desktop Navigation (1200px+) - Equal Width with Space Between */}
            <div className="hidden min-[1200px]:block py-3">
              <div className="flex justify-between gap-4">
                <button className="flex-1 flex items-center justify-center gap-2 bg-white px-4 py-2.5 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap">
                  <ShoppingBag
                    className="w-5 h-5 text-cyan-600 flex-shrink-0"
                    strokeWidth={2}
                  />
                  <span className="text-cyan-600 font-medium text-base">
                    Shop
                  </span>
                </button>

                <button className="flex-1 flex items-center justify-center gap-2 bg-white px-4 py-2.5 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap">
                  <Settings
                    className="w-5 h-5 text-cyan-600 flex-shrink-0"
                    strokeWidth={2}
                  />
                  <span className="text-cyan-600 font-medium text-base">
                    Services
                  </span>
                </button>

                <button className="flex-1 flex items-center justify-center gap-2 bg-white px-4 py-2.5 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap">
                  <Video
                    className="w-5 h-5 text-cyan-600 flex-shrink-0"
                    strokeWidth={2}
                  />
                  <span className="text-cyan-600 font-medium text-base">
                    Socio
                  </span>
                </button>

                <button className="flex-1 flex items-center justify-center gap-2 bg-white px-4 py-2.5 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap">
                  <Calendar
                    className="w-5 h-5 text-cyan-600 flex-shrink-0"
                    strokeWidth={2}
                  />
                  <span className="text-cyan-600 font-medium text-base">
                    Booking
                  </span>
                </button>

                <button className="flex-1 flex items-center justify-center gap-2 bg-white px-4 py-2.5 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap">
                  <FileText
                    className="w-5 h-5 text-cyan-600 flex-shrink-0"
                    strokeWidth={2}
                  />
                  <span className="text-cyan-600 font-medium text-base">
                    Classified
                  </span>
                </button>
              </div>
            </div>

            {/* Mobile/Tablet Navigation - Horizontal Scroll (< 1200px) */}
            <div
              className="min-[1200px]:hidden py-2.5 overflow-x-auto"
              style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
            >
              <style jsx>{`
                div::-webkit-scrollbar {
                  display: none;
                }
              `}</style>
              <div className="flex gap-2 px-2">
                <button className="flex items-center justify-center gap-2 bg-white px-4 py-2.5 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap flex-shrink-0">
                  <ShoppingBag
                    className="w-4 h-4 text-cyan-600 flex-shrink-0"
                    strokeWidth={2}
                  />
                  <span className="text-cyan-600 font-medium text-sm">
                    Shop
                  </span>
                </button>

                <button className="flex items-center justify-center gap-2 bg-white px-4 py-2.5 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap flex-shrink-0">
                  <Settings
                    className="w-4 h-4 text-cyan-600 flex-shrink-0"
                    strokeWidth={2}
                  />
                  <span className="text-cyan-600 font-medium text-sm">
                    Services
                  </span>
                </button>

                <button className="flex items-center justify-center gap-2 bg-white px-4 py-2.5 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap flex-shrink-0">
                  <Video
                    className="w-4 h-4 text-cyan-600 flex-shrink-0"
                    strokeWidth={2}
                  />
                  <span className="text-cyan-600 font-medium text-sm">
                    Socio
                  </span>
                </button>

                <button className="flex items-center justify-center gap-2 bg-white px-4 py-2.5 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap flex-shrink-0">
                  <Calendar
                    className="w-4 h-4 text-cyan-600 flex-shrink-0"
                    strokeWidth={2}
                  />
                  <span className="text-cyan-600 font-medium text-sm">
                    Booking
                  </span>
                </button>

                <button className="flex items-center justify-center gap-2 bg-white px-4 py-2.5 rounded-lg hover:bg-gray-50 transition-colors whitespace-nowrap flex-shrink-0">
                  <FileText
                    className="w-4 h-4 text-cyan-600 flex-shrink-0"
                    strokeWidth={2}
                  />
                  <span className="text-cyan-600 font-medium text-sm">
                    Classified
                  </span>
                </button>
              </div>
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}