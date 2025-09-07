"use client";

import Image from "next/image";
import ProductImage from "@/app/assets/Product Image.svg";
import PyramidImage from "@/app/assets/pyramid 1.svg";
import TubeImage from "@/app/assets/torus 1.svg";
export default function Products() {
  return (
    <section className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-6 sm:py-12 xl:py-24 overflow-x-clip">
      <div className="container mx-auto px-4 flex flex-col items-center gap-5 md:gap-8 text-center">
        <div className="capitalize tag">Boost your productivity</div>
        <h2 className="section-title">
          A more effective way to track progress
        </h2>
        <p className="section-desc">
          Effortlessly turn your ideas into a fully functional, responsive,
          no-code SaaS website in just minutes with the set of free components
          for Framer.
        </p>

        <div className="relative">
          <Image src={ProductImage} alt="Product Image" />
          <Image
            src={PyramidImage}
            alt="Pyramid Image"
            className="hidden md:block absolute -right-36 -top-10 xl:-top-32"
            width={262}
            height={262}
          />
          <Image
            src={TubeImage}
            alt="Tube Image"
            className="hidden md:block absolute -left-36 bottom-24"
            width={262}
            height={262}
          />
        </div>
      </div>
    </section>
  );
}
