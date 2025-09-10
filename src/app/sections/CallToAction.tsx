"use client";
import { ArrowRight } from "lucide-react";
import image1 from "@/app/assets/helix2 1.svg";
import image2 from "@/app/assets/emojistar 1.svg";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
export default function CallToAction() {
  const callToActionRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: callToActionRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);

  return (
    <section
      ref={callToActionRef}
      className="bg-gradient-to-b from-[#FFFFFF] to-[#D2DCFF] py-6 sm:py-12 xl:py-24 overflow-x-clip"
    >
      <div className="container mx-auto px-4 flex flex-col items-center gap-5 md:gap-8 text-center">
        <div className="flex justify-center items-center flex-col relative  gap-5 md:gap-8 w-full">
          <h2 className="section-title">Sign up for free today</h2>
          <p className="section-desc">
            Celebrate the joy of accomplishment with an app designed to track
            your progress and motivate your efforts.
          </p>

          <motion.img
            src={image1.src}
            alt="Image 1"
            className="absolute hidden md:block md:-right-[250px] xl:-right-[100px] md:top-[20px] xl:-top-[19px]"
            width={360}
            style={{
              translateY: translateY,
            }}
          />
          <motion.img
            src={image2.src}
            alt="Image 2"
            className="absolute hidden md:block md:-left-[230px] xl:-left-[100px] md:-top-[250px] xl:-top-[137px]"
            width={360}
            style={{
              translateY: translateY,
            }}
          />
        </div>
        <div className="flex items-center gap-2">
          <button className="btn btn-primary">Get For Free</button>
          <button className="btn btn-text">
            Learn More <ArrowRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
