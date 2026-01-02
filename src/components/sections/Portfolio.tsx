"use client";
import { useState } from "react";
import SafeImage from "@/components/SafeImage";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

const filters = [
    { id: "*", label: "All" },
    { id: "1", label: "Keluarga" },
    { id: "2", label: "Teman" },
    { id: "3", label: "Benda" },
    { id: "4", label: "FiveM" },
];

const items = [
    { id: 1, cat: "4", img: "/img/portfolio/discord/discord-1.png", title: "GRAPIK TE NGOTAK", tag: "#HOPEFULLY" },
    { id: 2, cat: "4", img: "/img/portfolio/discord/discord-2.png", title: "GRAPIK TE NGOTAK", tag: "#HOPEFULLY" },
    { id: 3, cat: "4", img: "/img/portfolio/discord/discord-3.png", title: "Keluarga KOMPE", tag: "#HOPEFULLY" },
    { id: 4, cat: "4", img: "/img/portfolio/discord/discord-4.png", title: "Foto MahesKanoko", tag: "#HOPEFULLY" },
    { id: 5, cat: "4", img: "/img/portfolio/discord/discord-5.jpg", title: "Foto Keluarga Orang Aku Ambil :V", tag: "#HOPEFULLY" },
    { id: 6, cat: "4", img: "/img/portfolio/discord/discord-6.png", title: "Melihat langit", tag: "#HOPEFULLY" },
    { id: 7, cat: "4", img: "/img/portfolio/discord/discord-7.png", title: "DEVNGACAK NGAROK", tag: "#HOPEFULLY" },
    { id: 8, cat: "4", img: "/img/portfolio/discord/discord-8.png", title: "MATI LAMPU", tag: "#HOPEFULLY" },
    { id: 9, cat: "4", img: "/img/portfolio/hopefully-team-dev-zwidvoigheuifhbawd.png", title: "HOPEFULLY TEAM", tag: "#HOPEFULLY COMMUNITY" },
    { id: 10, cat: "4", img: "/img/portfolio/hopefully_re-aigcuandllwk.png", title: "HOPEFULLY REMASTERD", tag: "#HOPEFULLY COMMUNITY" },
    { id: 11, cat: "4", img: "/img/portfolio/discord/discord-9.png", title: "MOIL IMPIAN", tag: "#HOPEFULLY" },
    { id: 12, cat: "2", img: "/img/portfolio/sd7t6s5f78s9.JPG", title: "Foto Daxa Dan Rog Phone 2", tag: "ROG PHONE II X DAXA PRO" },
];

export default function PortfolioSection() {
    const [activeFilter, setActiveFilter] = useState("*");

    const filteredItems = activeFilter === "*"
        ? items
        : items.filter(item => item.cat === activeFilter);

    return (
        <div className="w-full min-h-screen container mx-auto px-4 sm:px-8 py-20">
            <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-white/10 pb-8">
                <div>
                    <h5 className="text-[#FAC921] uppercase tracking-[4px] font-semibold text-sm mb-2">Foto</h5>
                    <h3 className="text-4xl md:text-5xl font-heading font-bold">FOTO</h3>
                </div>

                <div className="flex gap-6 mt-6 md:mt-0">
                    {filters.map(filter => (
                        <button
                            key={filter.id}
                            onClick={() => setActiveFilter(filter.id)}
                            className={cn(
                                "text-sm font-semibold uppercase tracking-wider transition-colors hover:text-[#FAC921]",
                                activeFilter === filter.id ? "text-[#FAC921]" : "text-gray-500"
                            )}
                        >
                            {filter.label}
                        </button>
                    ))}
                </div>
            </div>

            <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8">
                <AnimatePresence>
                    {filteredItems.map(item => (
                        <motion.div
                            layout
                            key={item.id}
                            initial={{ opacity: 0, scale: 0.8 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.8 }}
                            transition={{ duration: 0.3 }}
                            className="group relative h-96 w-full cursor-pointer overflow-hidden rounded-lg"
                        >
                            <SafeImage
                                src={item.img}
                                alt={item.title}
                                fill
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                            />
                            <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                                <div className="text-center p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <p className="text-[#FAC921] text-xs font-bold tracking-widest uppercase mb-2">{item.tag}</p>
                                    <h6 className="text-white text-xl font-heading font-bold mb-6">{item.title}</h6>
                                    <span className="inline-flex w-12 h-12 rounded-full border border-white items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
                                        <ArrowRight size={20} />
                                    </span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </AnimatePresence>
            </motion.div>
        </div>
    );
}
