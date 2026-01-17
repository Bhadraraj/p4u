"use client";
import Image from "next/image";
import ambulace from "../images/home-banner-bottom/ambulace.png";
import help from "../images/home-banner-bottom/help.png";
import urgent from "../images/home-banner-bottom/urgent.png";

export default function ServiceCards() {
  return (
 <div className=" mx-auto max-w-[1400px] px-3 sm:px-4 md:px-6 my-6  ">
      <div className="bg-white rounded-xl sm:rounded-2xl shadow-lg p-4 sm:p-6 lg:p-8">
        <div className="grid grid-cols-3 gap-3 sm:gap-6 lg:gap-8">
          {/* Emergency Card */}
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-16 sm:w-32 sm:h-28 lg:w-48 lg:h-40 mb-3 sm:mb-4 lg:mb-6 relative">
              <Image
                src={ambulace}
                alt="Emergency Ambulance"
                fill
                className="object-contain"
              />
            </div>
            <button
              className="px-2 py-1 sm:px-4 sm:py-2.5 lg:py-3 
             rounded-lg sm:rounded-xl 
             text-white transition-transform hover:scale-105 
             inline-flex items-center whitespace-nowrap"
              style={{ backgroundColor: "var(--primary-teal)" }}
            >
              <span className="text-xs sm:text-sm lg:text-base font-medium">
                Emergency
              </span>
            </button>
          </div>

          {/* Urgent Card */}
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-16 sm:w-32 sm:h-28 lg:w-48 lg:h-40 mb-3 sm:mb-4 lg:mb-6 relative">
              <Image
                src={urgent}
                alt="Urgent Care"
                fill
                className="object-contain"
              />
            </div>
            <button
              className="px-2 py-1 sm:px-4 sm:py-2.5 lg:py-3 
             rounded-lg sm:rounded-xl 
             text-white transition-transform hover:scale-105 
             inline-flex items-center whitespace-nowrap"
              style={{ backgroundColor: "var(--primary-teal)" }}
            >
              <span className="text-xs sm:text-sm lg:text-base font-medium">
                Urgent
              </span>
            </button>
          </div>

          {/* Help Card */}
          <div className="flex flex-col items-center text-center">
            <div className="w-20 h-16 sm:w-32 sm:h-28 lg:w-48 lg:h-40 mb-3 sm:mb-4 lg:mb-6 relative">
              <Image
                src={help}
                alt="Help Support"
                fill
                className="object-contain"
              />
            </div>
            <button
              className="px-2 py-1 sm:px-4 sm:py-2.5 lg:py-3 
             rounded-lg sm:rounded-xl 
             text-white transition-transform hover:scale-105 
             inline-flex items-center whitespace-nowrap"
              style={{ backgroundColor: "var(--primary-teal)" }}
            >
              <span className="text-xs sm:text-sm lg:text-base font-medium">
                Help
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
