import { Phone, Mail, MapPin } from "lucide-react";

export default function ContactSection() {
    return (
        <div className="w-full min-h-screen container mx-auto px-4 sm:px-8 py-20">
            <div className="mb-12 border-b border-white/10 pb-8">
                <h5 className="text-[#FAC921] uppercase tracking-[4px] font-semibold text-sm mb-2">Contact Me</h5>
                <h3 className="text-4xl md:text-5xl font-heading font-bold">Contact</h3>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                    <div className="mb-12">
                        <h5 className="text-2xl font-heading font-bold mb-8">Contact <span className="text-[#FAC921]">Info</span></h5>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                            {/* Phone */}
                            <div className="flex gap-4">
                                <span className="w-12 h-12 flex-shrink-0 bg-[#FAC921]/10 text-[#FAC921] flex items-center justify-center rounded-full">
                                    <Phone size={20} />
                                </span>
                                <div>
                                    <h6 className="font-bold font-heading mb-1 text-lg">Phone</h6>
                                    <p className="text-gray-400 text-sm hover:text-white transition-colors">
                                        <a href="tel:+6285778035211">+6285778035211</a>
                                    </p>
                                </div>
                            </div>
                            {/* Whatsapp */}
                            <div className="flex gap-4">
                                <span className="w-12 h-12 flex-shrink-0 bg-[#FAC921]/10 text-[#FAC921] flex items-center justify-center rounded-full">
                                    <Phone size={20} />
                                </span>
                                <div>
                                    <h6 className="font-bold font-heading mb-1 text-lg">Whatsapp</h6>
                                    <p className="text-gray-400 text-sm hover:text-white transition-colors">
                                        <a href="https://web.whatsapp.com/send?phone=6285778035211" target="_blank">+6285778035211</a>
                                    </p>
                                </div>
                            </div>
                            {/* Email */}
                            <div className="flex gap-4">
                                <span className="w-12 h-12 flex-shrink-0 bg-[#FAC921]/10 text-[#FAC921] flex items-center justify-center rounded-full">
                                    <Mail size={20} />
                                </span>
                                <div>
                                    <h6 className="font-bold font-heading mb-1 text-lg">Email</h6>
                                    <p className="text-gray-400 text-sm hover:text-white transition-colors break-all">
                                        <a href="mailto:aryawiratama@example.com">email@protected</a>
                                    </p>
                                </div>
                            </div>
                            {/* Address */}
                            <div className="flex gap-4">
                                <span className="w-12 h-12 flex-shrink-0 bg-[#FAC921]/10 text-[#FAC921] flex items-center justify-center rounded-full">
                                    <MapPin size={20} />
                                </span>
                                <div>
                                    <h6 className="font-bold font-heading mb-1 text-lg">Alamat</h6>
                                    <p className="text-gray-400 text-sm">
                                        Jl.Kawaluyaan Indah XVI No.21
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Use standard image for now, later could be form or map */}
                <div className="relative w-full aspect-square md:aspect-auto md:h-full min-h-[400px]">
                    {/* This replicates the .simg background img from original */}
                    <div className="absolute inset-0 bg-[url('/img/5.jpg')] bg-cover bg-center grayscale opacity-50 rounded-lg"></div>
                </div>
            </div>
        </div>
    );
}
