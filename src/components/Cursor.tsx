"use client";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

export default function Cursor() {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        // Check if device is touch or small screen
        const isTouchDevice = () => {
            return (('ontouchstart' in window) ||
                (navigator.maxTouchPoints > 0));
        }

        if (isTouchDevice() || window.innerWidth < 768) {
            setIsHovering(false); // Ensure hover state is off
            return; // Don't add listeners on mobile
        }

        const mouseMove = (e: MouseEvent) => {
            setMousePosition({
                x: e.clientX,
                y: e.clientY
            });
        };

        const mouseOver = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.tagName === "A" || target.tagName === "BUTTON" || target.closest('a') || target.closest('button')) {
                setIsHovering(true);
            } else {
                setIsHovering(false);
            }
        };

        window.addEventListener("mousemove", mouseMove);
        window.addEventListener("mouseover", mouseOver);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            window.removeEventListener("mouseover", mouseOver);
        };
    }, []);

    return (
        <div className="hidden md:block pointer-events-none fixed inset-0 z-[100]">
            {/* Main Dot */}
            <motion.div
                className="fixed top-0 left-0 w-2 h-2 bg-[#FAC921] rounded-full mix-blend-difference"
                animate={{ x: mousePosition.x - 4, y: mousePosition.y - 4 }}
                transition={{ type: "tween", ease: "backOut", duration: 0 }}
            />
            {/* Trailing Circle */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 border border-[#FAC921] rounded-full mix-blend-difference"
                animate={{
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 16,
                    scale: isHovering ? 2 : 1,
                    backgroundColor: isHovering ? "rgba(250, 201, 33, 0.1)" : "transparent"
                }}
                transition={{ type: "spring", stiffness: 150, damping: 15, mass: 0.5 }}
            />
        </div>
    );
}

