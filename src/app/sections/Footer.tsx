"use client";

import Logo from "@/app/assets/logosaas.svg";
import { Link } from "@/navigations";
import Image from "next/image";
import Icon from "@/app/assets/Socials.svg";
import Icon1 from "@/app/assets/Socials (1).svg";
import Icon2 from "@/app/assets/Socials (2).svg";
import Icon3 from "@/app/assets/Socials (3).svg";
import Icon4 from "@/app/assets/Socials (4).svg";
import Icon5 from "@/app/assets/Socials (5).svg";

const socialsIcons = [Icon, Icon1, Icon2, Icon3, Icon4, Icon5];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-indigo-400 to-indigo-700 text-white py-8">
      <div className="container mx-auto px-4 flex flex-col items-center text-center gap-4">
        {/* Logo */}
        <div className="inline-flex relative before:absolute before:content-[''] before:top-2 before:bottom-0 before:blur before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)]">
          <Image
            src={Logo}
            alt="Company Logo"
            width={50}
            height={50}
            className="relative"
          />
        </div>

        {/* Description Paragraph */}
        <p className="max-w-xl xl:max-w-3xl text-sm lg:text-base text-white/80 leading-relaxed">
          We build powerful, easy-to-use SaaS tools that help businesses grow
          and succeed in the digital age. Our mission is to simplify complex
          processes through beautifully designed software.
        </p>

        {/* Navigation Links */}
        <nav className="flex flex-wrap justify-center gap-6 text-sm font-medium">
          {[
            { label: "Customers", href: "#" },
            { label: "About", href: "#" },
            { label: "Features", href: "#" },
            { label: "Updates", href: "#" },
            { label: "Help", href: "#" },
          ].map((item) => (
            <Link key={item.label} href={item.href} className="hover:underline">
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Social Icons */}
        <div className="flex justify-center gap-5">
          {socialsIcons.map((icon, index) => (
            <Image
              key={index}
              src={icon}
              alt={`Social Icon ${index + 1}`}
              className="w-6 h-6 cursor-pointer hover:opacity-80 transition"
            />
          ))}
        </div>

        <hr className="w-full border-white/20" />

        {/* Bottom Section: Terms and Copyright */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full text-white/60 gap-2 text-sm">
          <p>&copy; {new Date().getFullYear()} PathWay. All rights reserved.</p>
          <Link href="#" className="hover:underline text-sm">
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}
