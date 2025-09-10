"use client";

import logo1 from "@/app/assets/acme 1.svg";
import logo2 from "@/app/assets/apex 1.svg";
import logo3 from "@/app/assets/celestia 1.svg";
import logo4 from "@/app/assets/pulse 1.svg";
import logo5 from "@/app/assets/quantum 1.svg";
import logo6 from "@/app/assets/echo 1.svg";
import Image from "next/image";
import { motion } from "framer-motion";

const LogosArray = [
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
  logo1,
  logo2,
  logo3,
  logo4,
  logo5,
  logo6,
];

export default function Logos() {
  return (
    <section className="py-8 md:py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex justify-center items-center w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black,transparent)]">
          <motion.div
            className="flex gap-14 flex-none"
            animate={{ x: ["0%", "-50%"] }}
            transition={{
              duration: 120,
              ease: "linear",
              repeat: Infinity,
            }}
          >
            {[
              ...LogosArray,
              ...LogosArray,
              ...LogosArray,
              ...LogosArray,
              ...LogosArray,
            ].map((logo, index) => (
              <Image
                key={index}
                src={logo}
                alt={`Logo Number ${index + 1}`}
                className="logo-ticker-image cursor-pointer"
              />
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
