"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
    { id: "home", label: "Home" },
    { id: "foto", label: "Foto" },
    { id: "blog", label: "Blog" },
    { id: "contact", label: "Contact" },
];

interface NavigationProps {
    activePage: string;
    setPage: (id: string) => void;
    isOpen: boolean;
    setIsOpen: (open: boolean) => void;
}

export default function Navigation({ activePage, setPage, isOpen, setIsOpen }: NavigationProps) {
    return (
        <>
            {/* Menu Button */}
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed top-8 right-8 z-50 mix-blend-difference text-white uppercase font-bold tracking-widest text-xs flex items-center gap-2 group"
            >
                <span className="group-hover:opacity-75 transition-opacity">{isOpen ? "Close" : "Menu"}</span>
            </button>

            {/* Navigation Overlay */}
            <motion.nav
                initial={{ opacity: 0, pointerEvents: "none" }}
                animate={{ opacity: isOpen ? 1 : 0, pointerEvents: isOpen ? "auto" : "none" }}
                className="fixed inset-0 z-40 flex items-center justify-center bg-[#0D0F16]/95 backdrop-blur-sm"
            >
                <div className="flex flex-col items-center gap-8">
                    {navItems.map((item, i) => (
                        <motion.button
                            key={item.id}
                            initial={{ y: 20, opacity: 0 }}
                            animate={{ y: isOpen ? 0 : 20, opacity: isOpen ? 1 : 0 }}
                            transition={{ delay: i * 0.1 }}
                            onClick={() => {
                                setPage(item.id);
                                setIsOpen(false);
                            }}
                            className={cn(
                                "text-4xl md:text-6xl font-light tracking-wide hover:text-[#FAC921] transition-colors font-heading",
                                activePage === item.id ? "text-white" : "text-white/50"
                            )}
                        >
                            {item.label}
                        </motion.button>
                    ))}
                </div>
            </motion.nav>
        </>
    );
}
