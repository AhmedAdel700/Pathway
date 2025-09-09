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
    <footer className="py-12">
      <div className="container mx-auto px-4">
        <Image
          src={Logo}
          alt="Logo"
          className="inline-flex justify-center items-center"
          width={40}
          height={40}
        />

        <nav className="grid grid-cols-2 lg:grid-cols-5 place-items-center">
          {[
            { label: "Customers", href: "#" },
            { label: "About", href: "#" },
            { label: "Features", href: "#" },
            { label: "Updates", href: "#" },
            { label: "Help", href: "#" },
          ].map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className={`${
                item.label === "Help" && "col-span-2 lg:col-span-1"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-4">
          {socialsIcons.map((icon, index) => (
            <div key={index} className="icons cursor-pointer">
              <Image
                src={icon}
                alt={`Icon Number ${index + 1}`}
                className="w-full"
              />
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
