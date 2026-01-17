"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

// Import your product images
import iphone from "../images/brand-section/iphone-card.png";
import realme from "../images/brand-section/realme-card.png";
import xiaomi from "../images/brand-section/xiaomi-card.png";

const originalBrands = [
  { image: iphone, alt: "iPhone" },
  { image: realme, alt: "Realme Phone" },
  { image: xiaomi, alt: "Xiaomi Phone" },
];

export default function BrandSections() {
  const [currentSlide, setCurrentSlide] = useState(originalBrands.length);
  const scrollRef = useRef<HTMLDivElement>(null);
  const autoScrollTimer = useRef<NodeJS.Timeout | null>(null);

  // Triple the brands array for infinite loop
  const brands = [...originalBrands, ...originalBrands, ...originalBrands];

  // Auto-play slider for mobile with infinite loop
  useEffect(() => {
    const startAutoScroll = () => {
      if (autoScrollTimer.current) {
        clearInterval(autoScrollTimer.current);
      }
      
      autoScrollTimer.current = setInterval(() => {
        setCurrentSlide((prev) => {
          const next = prev + 1;
          // Reset to middle set if we reach the end
          if (next >= originalBrands.length * 2) {
            // Schedule instant jump after smooth scroll completes
            setTimeout(() => {
              if (scrollRef.current) {
                const scrollWidth = scrollRef.current.scrollWidth / brands.length;
                scrollRef.current.scrollTo({
                  left: scrollWidth * originalBrands.length,
                  behavior: "auto",
                });
              }
              setCurrentSlide(originalBrands.length);
            }, 300);
          }
          return next;
        });
      }, 4000);
    };

    startAutoScroll();
    
    return () => {
      if (autoScrollTimer.current) {
        clearInterval(autoScrollTimer.current);
      }
    };
  }, []);

  // Smooth scroll on mobile
  useEffect(() => {
    if (scrollRef.current) {
      const scrollWidth = scrollRef.current.scrollWidth / brands.length;
      scrollRef.current.scrollTo({
        left: scrollWidth * currentSlide,
        behavior: "smooth",
      });
    }
  }, [currentSlide]);

  // Initialize scroll position to middle set
  useEffect(() => {
    if (scrollRef.current) {
      const scrollWidth = scrollRef.current.scrollWidth / brands.length;
      scrollRef.current.scrollTo({
        left: scrollWidth * originalBrands.length,
        behavior: "auto",
      });
    }
  }, []);

  const handleDotClick = (index: number) => {
    // Stop auto-scroll temporarily
    if (autoScrollTimer.current) {
      clearInterval(autoScrollTimer.current);
    }

    const currentPosition = currentSlide % originalBrands.length;
    let targetSlide = currentSlide;

    // Calculate the nearest target slide in the same "set"
    const diff = index - currentPosition;
    
    if (diff === 0) {
      // Same slide, do nothing
      return;
    }

    // Move forward or backward within the current set or adjacent sets
    targetSlide = currentSlide + diff;

    // Make sure we stay within bounds
    if (targetSlide < 0) {
      targetSlide = originalBrands.length + index;
    } else if (targetSlide >= brands.length) {
      targetSlide = originalBrands.length + index;
    }

    setCurrentSlide(targetSlide);

    // Restart auto-scroll after 5 seconds
    setTimeout(() => {
      if (autoScrollTimer.current) {
        clearInterval(autoScrollTimer.current);
      }
      autoScrollTimer.current = setInterval(() => {
        setCurrentSlide((prev) => {
          const next = prev + 1;
          if (next >= originalBrands.length * 2) {
            setTimeout(() => {
              if (scrollRef.current) {
                const scrollWidth = scrollRef.current.scrollWidth / brands.length;
                scrollRef.current.scrollTo({
                  left: scrollWidth * originalBrands.length,
                  behavior: "auto",
                });
              }
              setCurrentSlide(originalBrands.length);
            }, 300);
          }
          return next;
        });
      }, 4000);
    }, 5000);
  };

  // Calculate which dot should be active
  const getActiveDot = () => {
    return currentSlide % originalBrands.length;
  };

  return (
    <div className="mx-auto max-w-7xl px-3 sm:px-4 md:px-6 mt-2 sm:mt-3 md:mt-4">
      {/* Desktop: All three in a row */}
      <div className="hidden md:grid md:grid-cols-3 gap-6">
        {originalBrands.map((brand, index) => (
          <div
            key={index}
            className="overflow-hidden cursor-pointer transition-transform duration-300 hover:scale-105"
          >
            <div className="relative w-full h-48">
              <Image
                src={brand.image}
                alt={brand.alt}
                fill
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>

      {/* Mobile: Auto-play slider with infinite loop */}
      <div className="md:hidden relative">
        <div
          ref={scrollRef}
          className="flex gap-4 overflow-x-auto scrollbar-hide snap-x snap-mandatory"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {brands.map((brand, index) => (
            <div
              key={index}
              className="flex-shrink-0 w-full snap-center rounded-2xl overflow-hidden shadow-lg"
            >
              <div className="relative w-full h-48">
                <Image
                  src={brand.image}
                  alt={brand.alt}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        {/* Slide indicators */}
        <div className="flex justify-center gap-2 mt-4">
          {originalBrands.map((_, index) => (
            <button
              key={index}
              onClick={() => handleDotClick(index)}
              className={`h-2 rounded-full transition-all duration-300 ${
                getActiveDot() === index ? "w-8" : "w-2"
              }`}
              style={{
                backgroundColor:
                  getActiveDot() === index ? "var(--primary-teal)" : "#d1d5db",
              }}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </div>
  );
}