"use client";

import ArrowRight from "@/app/assets/Icons.svg";
import Logo from "@/app/assets/logosaas.svg";
import Image from "next/image";
import { Globe, Menu, X } from "lucide-react";
import { Link, useRouter, usePathname } from "@/navigations";
import { useCallback, useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useLocale } from "next-intl";

export default function Header() {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement | null>(null);
  const panelRef = useRef<HTMLDivElement | null>(null);

  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const toggleLang = useCallback((): void => {
    const next = locale === "en" ? "ar" : "en";
    router.push(pathname, { locale: next });
  }, [router, pathname, locale]);

  // Scroll lock on open
  useEffect(() => {
    if (!open) return;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  // Close on ESC
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  // Basic focus trap when open
  useEffect(() => {
    if (!open || !panelRef.current) return;
    const focusable = panelRef.current.querySelectorAll<HTMLElement>(
      'a,button,[tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    const onTab = (e: KeyboardEvent) => {
      if (e.key !== "Tab" || focusable.length === 0) return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };
    window.addEventListener("keydown", onTab);
    first?.focus();
    return () => window.removeEventListener("keydown", onTab);
  }, [open]);

  const NavLinks = () => (
    <>
      <Link href={"#"}>About</Link>
      <Link href={"#"}>Features</Link>
      <Link href={"#"}>Customers</Link>
      <Link href={"#"}>Updates</Link>
      <Link href={"#"}>Help</Link>
    </>
  );

  return (
    <header className="sticky top-0 backdrop-blur-sm z-[9999]">
      {/* Top strip */}
      <div className="flex justify-center items-center py-3 bg-black text-white text-sm gap-3">
        <p className="text-white/60 hidden md:block">
          Streamline Your Workflow And Boost Your Productivity
        </p>
        <div className="inline-flex gap-1 items-center cursor-pointer">
          <p>Get Started For Free</p>
          <Image
            src={ArrowRight}
            alt="Arrow Right"
            className="inline-flex justify-center items-center"
            width={20}
            height={20}
          />
        </div>
      </div>

      {/* Main bar */}
      <div className="py-4 sm:py-5">
        <div className="container px-4 mx-auto flex items-center justify-between">
          <div className="inline-flex relative before:absolute before:content-[''] before:top-2 before:bottom-0 before:blur before:w-full before:bg-[linear-gradient(to_right,#F87BFF,#FB92CF,#FFDD9B,#C2F0B1,#2FD8FE)]">
            <Image
              src={Logo}
              alt="Logo"
              className="inline-flex justify-center items-center relative cursor-pointer"
              width={40}
              height={40}
            />
          </div>

          {/* Mobile trigger */}
          <button
            ref={triggerRef}
            aria-label="Open menu"
            aria-haspopup="dialog"
            aria-expanded={open}
            onClick={() => setOpen(true)}
            className="md:hidden inline-flex items-center gap-2"
          >
            <Menu size={24} className="cursor-pointer" />
          </button>

          {/* Desktop nav */}
          <nav className="hidden md:flex gap-6 text-black/60 items-center">
            <NavLinks />
            <button
              onClick={toggleLang}
              className="btn btn-primary inline-flex items-center gap-2"
            >
              EN <Globe size={16} />
            </button>
          </nav>
        </div>
      </div>

      {/* Mobile overlay + panel */}
      <AnimatePresence>
        {open && (
          <>
            {/* Dim/blur background */}
            <motion.div
              key="backdrop"
              onClick={() => setOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            />

            {/* Sliding panel */}
            <motion.div
              key="panel"
              ref={panelRef}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
              className="fixed inset-x-3 top-3 rounded-2xl bg-white/90 backdrop-blur-xl border border-white/60 shadow-2xl"
              initial={{ y: -24, opacity: 0, scale: 0.98 }}
              animate={{
                y: 0,
                opacity: 1,
                scale: 1,
                transition: { type: "spring", stiffness: 320, damping: 26 },
              }}
              exit={{
                y: -16,
                opacity: 0,
                scale: 0.98,
                transition: { duration: 0.15 },
              }}
            >
              {/* Header row */}
              <div className="flex items-center justify-between px-4 py-3">
                <div className="flex items-center gap-3">
                  <Image src={Logo} alt="Logo" width={32} height={32} />
                  <span className="text-sm font-medium text-black/70">
                    Menu
                  </span>
                </div>
                <button
                  aria-label="Close menu"
                  onClick={() => {
                    setOpen(false);
                    triggerRef.current?.focus();
                  }}
                  className="inline-flex items-center"
                >
                  <X size={22} />
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-col gap-1 px-2 pb-2">
                <div className="flex flex-col">
                  {/* link buttons with active/hover states */}
                  {[
                    { label: "About", href: "#" },
                    { label: "Features", href: "#" },
                    { label: "Customers", href: "#" },
                    { label: "Updates", href: "#" },
                    { label: "Help", href: "#" },
                  ].map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="px-3 py-3 text-[15px] rounded-xl text-black/70 hover:text-black hover:bg-black/[0.04] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/20"
                      onClick={() => setOpen(false)}
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>

                {/* Divider */}
                <div className="h-px bg-gradient-to-r from-transparent via-black/10 to-transparent my-1" />

                {/* Actions */}
                <div className="flex flex-col gap-2 px-1 pb-3">
                  <button className="w-full rounded-xl px-3 py-3 text-sm font-medium bg-black text-white hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-black/30">
                    Get Started For Free
                  </button>
                  <button
                    onClick={toggleLang}
                    className="w-full rounded-xl px-3 py-3 text-sm inline-flex items-center justify-center gap-2 bg-white border border-black/10 hover:bg-black/[0.03]"
                  >
                    EN <Globe size={16} />
                  </button>
                </div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </header>
  );
}
