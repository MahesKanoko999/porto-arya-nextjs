"use client";

import { useState } from "react";
import Image, { ImageProps } from "next/image";
import { ImageOff } from "lucide-react";
import { cn } from "@/lib/utils";

interface SafeImageProps extends ImageProps {
    fallbackText?: string;
}

export default function SafeImage({ src, alt, className, fallbackText = "Image Not Found", ...props }: SafeImageProps) {
    const [error, setError] = useState(false);

    if (error) {
        return (
            <div className={cn("flex flex-col items-center justify-center bg-[#12141C] border border-white/10 text-gray-500", className)}>
                <ImageOff size={32} className="mb-2 opacity-50" />
                <span className="text-xs font-mono uppercase tracking-widest text-center px-4">{fallbackText}</span>
            </div>
        );
    }

    return (
        <Image
            src={src}
            alt={alt}
            className={className}
            onError={() => setError(true)}
            {...props}
        />
    );
}
