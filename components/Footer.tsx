import {
  Mail,
  Facebook,
  Twitter,
  Linkedin,
  Instagram,
  Youtube,
} from "lucide-react";
import Image from "next/image";

import visaLogo from "../images/payment-logos/img1.png";
import amexLogo from "../images/payment-logos/img2.png";
import discoverLogo from "../images/payment-logos/img3.png";
import mastercardLogo from "../images/payment-logos/img4.png";
import maestroLogo from "../images/payment-logos/img5.png";
import paypalLogo from "../images/payment-logos/img6.png";

import appstore from "../images/footer/appstore.png";
import footerLogo from "../images/footer/footer-logo.png";
import googleplay from "../images/footer/googleplay.png";

export default function Footer() {
  const infoLinks = [
    "SF NO 250/2 JJ NAGAR, SITE NO 15,",
    "NAGAMANAICKEN PALAYAM ROAD, PATTANAM POST -",
    "COIMBATORE 641016",
  ];

  const companyLinks = ["Contact Us", "Careers", "About Us", "Press"];
  const helpLinks = ["Payments", "Shipping", "Cancellation & Return", "FAQ"];
  const consumerPolicyLinks = [
    "Cancellation & Return",
    "Terms Of Use",
    "Security",
    "Privacy",
    "Sitemap",
    "Grievance Redressal",
    "EPR Compliance",
  ];

  const socialIcons = [
    { icon: Facebook, label: "Facebook" },
    { icon: Twitter, label: "Twitter" },
    { icon: Linkedin, label: "LinkedIn" },
    { icon: Instagram, label: "Instagram" },
    { icon: Youtube, label: "YouTube" },
  ];

  const paymentMethods = [
    { name: "VISA", logo: visaLogo },
    { name: "American Express", logo: amexLogo },
    { name: "Discover", logo: discoverLogo },
    { name: "Mastercard", logo: mastercardLogo },
    { name: "Maestro", logo: maestroLogo },
    { name: "PayPal", logo: paypalLogo },
  ];

  return (
    <>
      <footer  className=" mx-auto max-w-[1400px] px-3 sm:px-4 md:px-6 mt-2 sm:mt-3 md:mt-4  ">
        <div className=" max-w-[1400px]  mx-auto pt-10 pb-2 px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3 mb-2">
            {/* Info */}
            <div>
              <h4 className="font-semibold mb-4">Info</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                {infoLinks.map((i, idx) => (
                  <li key={idx}>{i}</li>
                ))}
              </ul>
              <p className="mt-3 text-sm text-gray-600 flex items-center gap-2">
                planext4uofficial@gmail.com <br />
                +91-9787176868
              </p>
            </div>

            {/* Company */}
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                {companyLinks.map((i, idx) => (
                  <li key={idx}>
                    <a href="#" className="hover:text-teal-600">
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Help */}
            <div>
              <h4 className="font-semibold mb-4">Help</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                {helpLinks.map((i, idx) => (
                  <li key={idx}>
                    <a href="#" className="hover:text-teal-600">
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Consumer Policy */}
            <div>
              <h4 className="font-semibold mb-4">Consumer Policy</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                {consumerPolicyLinks.map((i, idx) => (
                  <li key={idx}>
                    <a href="#" className="hover:text-teal-600">
                      {i}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Logo + Store */}

            <div className=" hidden lg:flex   flex-col items-center lg:items-start gap-4">
              <Image src={footerLogo} alt="P4U Logo" width={140} priority />
              <div className="flex items-center justify-center lg:justify-start gap-4">
                <Image
                  src={appstore}
                  alt="App Store"
                  width={100}
                  className="cursor-pointer hover:scale-105 transition-transform"
                />
                <Image
                  src={googleplay}
                  alt="Google Play"
                  width={100}
                  className="cursor-pointer hover:scale-105 transition-transform"
                />
              </div>
            </div>
          </div>

          {/* Social */}
          <div className="mb-8">
            <h4 className="font-semibold mb-3">Social</h4>
            <div className="flex flex-wrap gap-2">
              {socialIcons.map((s, i) => {
                const Icon = s.icon;
                return (
                  <a
                    key={i}
                    href="#"
                    className="w-10 h-10 rounded-full flex items-center justify-center hover:bg-teal-500 hover:text-white transition"
                  >
                    <Icon className="w-6 h-6" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom Bar */}
      <div className="pb-5 px-4 bg-white ">
        <div className=" max-w-[1400px] mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-700 text-center md:text-left">
            Planext4u Solutions India Private Limited Copyright © 2025. All
            Rights Reserved.
          </p>
          <div className="hidden md:flex flex-wrap gap-3 justify-center">
            {paymentMethods.map((m, i) => (
              <div key={i} className="relative w-14 h-9">
                <Image
                  src={m.logo}
                  alt={m.name}
                  fill
                  className="object-contain"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
