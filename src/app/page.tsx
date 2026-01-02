"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import Navigation from "@/components/Navigation";
import HomeSection from "@/components/sections/Home";
import BlogSection from "@/components/sections/Blog";
import PortfolioSection from "@/components/sections/Portfolio";
import ContactSection from "@/components/sections/Contact";

export default function Home() {
  const [page, setPage] = useState("home");
  const [isNavOpen, setIsNavOpen] = useState(false);

  const getPage = () => {
    switch (page) {
      case "home": return <HomeSection />;
      case "blog": return <BlogSection />;
      case "foto": return <PortfolioSection />;
      case "contact": return <ContactSection />;
      default: return <HomeSection />;
    }
  };

  return (
    <main className="relative w-full h-screen overflow-hidden bg-[#12141C] text-white">
      {/* Navigation */}
      <Navigation
        activePage={page}
        setPage={setPage}
        isOpen={isNavOpen}
        setIsOpen={setIsNavOpen}
      />

      {/* Main Content Area */}
      <AnimatePresence mode="wait">
        <motion.div
          key={page}
          initial={{ opacity: 0, y: 20, scale: 0.98 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: -20, scale: 1.02 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} // Bezier for smooth feel
          className="w-full h-full overflow-y-auto"
        >
          {getPage()}
        </motion.div>
      </AnimatePresence>

      {/* Loading Overlay (Optional, consistent with original) */}
      {/* <div className="fixed inset-0 z-[60] bg-[#12141C] pointer-events-none" /> */}
    </main>
  );
}
