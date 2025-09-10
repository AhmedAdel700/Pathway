"use client";

import { CheckIcon } from "lucide-react";
import { twMerge } from "tailwind-merge";
import { motion } from "framer-motion";

const pricingPlans = [
  {
    id: 1,
    title: "Basic",
    monthlyPrice: 9.99,
    buttonText: "Choose Basic",
    popular: false,
    inverse: false,
    features: [
      "1 Project",
      "Basic Support",
      "100MB Storage",
      "Community Access",
      "Email Notifications",
      "Manual Backups",
    ],
  },
  {
    id: 2,
    title: "Pro",
    monthlyPrice: 19.99,
    buttonText: "Choose Pro",
    popular: true,
    inverse: true,
    features: [
      "10 Projects",
      "Priority Email Support",
      "10GB Storage",
      "Custom Domains",
      "Analytics Dashboard",
      "Automated Backups",
      "Team Collaboration",
      "Unlimited API Access",
      "Advanced Email Notifications",
    ],
  },
  {
    id: 3,
    title: "Enterprise",
    monthlyPrice: 49.99,
    buttonText: "Contact Sales",
    popular: false,
    inverse: false,
    features: [
      "Unlimited Projects",
      "Dedicated Account Manager",
      "Unlimited Storage",
      "Advanced Security & Compliance",
      "White-labeling Options",
      "SLA Guaranteed Uptime",
      "Custom Integrations",
      "SSO & Identity Management",
      "24/7 Phone Support",
      "Multi-region Deployments",
      "Onboarding & Training",
      "Audit Logs & Reporting",
    ],
  },
];

export default function Pricing() {
  return (
    <section className="py-6 sm:py-12 xl:py-24 overflow-x-clip bg-white">
      <div className="mx-auto container px-4 text-center flex flex-col items-center gap-5 md:gap-8">
        <h2 className="section-title">Pricing</h2>
        <p className="section-desc xl:max-w-[75%]">
          Choose the plan that fits your needs. Whether you are just getting
          started or scaling your business, our flexible pricing options are
          designed to support you every step of the way. No hidden fees, cancel
          anytime.
        </p>

        <div className="grid md:grid-cols-2 xl:grid-cols-3 place-items-center items-center xl:items-end w-full gap-6 xl:gap-0 mt-5 xl:mt-10">
          {pricingPlans.map((plan) => (
            <div
              key={plan.id}
              className={twMerge(
                "p-10 bg-white/60 border border-[#F1F1F1] rounded-3xl shadow-[0_7px_14px_#EAEAEA] flex flex-col gap-[30px] max-w-md xl:max-w-sm w-full md:h-full xl:h-fit",
                plan.inverse && "border-black bg-black text-white"
              )}
            >
              <div className={`flex justify-between`}>
                <h3
                  className={twMerge(
                    "text-lg font-bold text-black/50",
                    plan.inverse && "text-white"
                  )}
                >
                  {plan.title}
                </h3>
                {plan.popular && (
                  <div className="inline-flex text-sm px-4 py-1.5 rounded-xl border border-white/20">
                    <motion.span
                      className="bg-[linear-gradient(to_right,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF,#DD7DDF,#E1CD86,#BBCB92,#71C2EF,#3BFFFF)] [background-size:200%] text-transparent bg-clip-text font-medium"
                      animate={{
                        backgroundPosition: "-100%",
                      }}
                      transition={{
                        repeat: Infinity,
                        repeatType: "loop",
                        ease: "linear",
                        duration: 1,
                      }}
                    >
                      Popular
                    </motion.span>
                  </div>
                )}
              </div>
              <div className="flex items-baseline gap-1">
                <span className="text-4xl font-bold tracking-tighter leading-none">
                  {plan.monthlyPrice}
                </span>
                <span className="tracking-tight font-bold text-black/50">
                  /Month
                </span>
              </div>

              <button
                className={twMerge(
                  "btn btn-primary w-full",
                  plan.inverse && "bg-white text-black"
                )}
              >
                {plan.buttonText}
              </button>

              <ul className="flex flex-col gap-5">
                {plan.features.map((feature, index) => (
                  <li key={index} className="text-sm flex items-center gap-4">
                    <CheckIcon size={24} color="green" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
