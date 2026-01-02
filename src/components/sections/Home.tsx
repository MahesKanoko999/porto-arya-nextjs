import Image from "next/image";
import { Facebook, Twitter } from "lucide-react";

export default function HomeSection() {
    return (
        <div className="w-full h-full min-h-screen flex items-center justify-center container mx-auto px-4 sm:px-8">
            <div className="flex flex-col md:flex-row items-center gap-12 w-full max-w-6xl">
                {/* Image Side */}
                <div className="w-full md:w-1/3 flex justify-center md:justify-end">
                    <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96">
                        {/* Pattern/Border Effect replicating the original .pattern */}
                        <div className="absolute inset-0 bg-transparent border-2 border-white/20 translate-x-4 translate-y-4 z-0"></div>
                        <div className="absolute inset-0 overflow-hidden bg-black z-10">
                            <Image
                                src="/img/fotobaru.jpg"
                                alt="Arya Wiratama"
                                fill
                                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
                                priority
                            />
                        </div>
                    </div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-2/3 text-center md:text-left z-20">
                    <h6 className="text-[#FAC921] uppercase tracking-[4px] mb-4 text-sm font-semibold">Hey There!</h6>
                    <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading mb-6 leading-tight">
                        I'm Arya Wiratama<span className="text-[#FAC921]">.1111</span>
                    </h1>
                    <p className="text-gray-400 text-lg leading-relaxed max-w-xl mb-8">
                        I am Muhammad Arya Wiratama Raditia Putra. My Hobby: Developer Application & Website.
                    </p>

                    <div className="flex gap-4 justify-center md:justify-start">
                        <a href="https://facebook.com/aryawiratama.dev" target="_blank" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-[#FAC921] hover:border-[#FAC921] hover:text-black transition-all">
                            <Facebook size={18} />
                        </a>
                        <a href="https://twitter.com/1111Arya" target="_blank" className="w-10 h-10 border border-white/20 rounded-full flex items-center justify-center text-white hover:bg-[#FAC921] hover:border-[#FAC921] hover:text-black transition-all">
                            <Twitter size={18} />
                        </a>
                    </div>
                </div>
            </div>
        </div>
    );
}
