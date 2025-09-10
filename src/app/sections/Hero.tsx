"use client";
import { ArrowRight } from "lucide-react";
import HeroImage1 from "@/app/assets/Visual.svg";
import HeroImage2 from "@/app/assets/cylinder 1.svg";
import HeroImage3 from "@/app/assets/half-torus 1.svg";
import { useLocale } from "next-intl";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function Hero() {
  const locale = useLocale();
  const heroRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start end", "end start"],
  });

  const translateY = useTransform(scrollYProgress, [0, 1], [150, -150]);
  return (
    <section
      ref={heroRef}
      className="pt-8 sm:pt-5 sm:pb-10 xl:pt-20 pb-20 bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_75%)] xl:bg-[radial-gradient(ellipse_200%_100%_at_bottom_left,#183EC2,#EAEEFE_75%)] h-fit xl:min-h-[calc(100vh-123px)] overflow-x-clip"
    >
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-center xl:justify-between items-center gap-6 xl:gap-0">
        <div className="flex flex-col gap-6 md:w-[478px] xl:w-full">
          <div className="tag">Version 2.0 Is Here</div>
          <h1 className="capitalize text-5xl sm:text-7xl xl:text-8xl xl:max-w-full font-bold tracking-tighter bg-gradient-to-b from-black to-[#001E80] text-transparent bg-clip-text">
            Pathway to productivity
          </h1>
          <p className="capitalize text-[#010D3E] tracking-tight xl:max-w-[55%] text-lg font-medium">
            Celebrate the joy of accomplishment with an app designed to track
            your progress, motivate your efforts, and celebrate your successes.
          </p>

          <div className="flex gap-1 items-center">
            <button className="btn btn-primary">Get For Free</button>
            <button className="btn btn-text gap-1">
              Learn More <ArrowRight size={18} />
            </button>
          </div>
        </div>
        <div className="md:flex-1 xl:flex-0 md:h-[648px] relative">
          <motion.img
            src={HeroImage1.src}
            alt="Hero Section Image 1"
            className={`md:absolute md:h-full md:w-auto md:max-w-none xl:relative ${
              locale === "ar"
                ? "scale-x-[-1] md:-right-6 lg:right-0"
                : "md:-left-6 lg:left-0"
            } `}
            animate={{
              translateY: [-30, 30],
            }}
            transition={{
              repeat: Infinity,
              repeatType: "mirror",
              duration: 3,
              ease: "easeInOut",
            }}
          />
          <motion.img
            src={HeroImage2.src}
            alt="Hero Section Image 2"
            className={`hidden md:block md:absolute top-1 xl:-top-8 ${
              locale === "ar"
                ? "scale-x-[-1] -right-32 xl:-right-32 "
                : "-left-32 xl:-left-32 "
            }`}
            width={220}
            height={220}
            style={{
              translateY: translateY,
            }}
          />
          <motion.img
            src={HeroImage3.src}
            alt="Hero Section Image 3"
            className={`hidden xl:block md:absolute top-[565] ${
              locale === "ar" ? "scale-x-[-1] right-[448px]" : "left-[448px]"
            }`}
            width={220}
            height={220}
            style={{
              translateY: translateY,
            }}
          />
        </div>
      </div>
    </section>
  );
}
