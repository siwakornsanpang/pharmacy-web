"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navLinks = [
    { name: "หน้าแรก", href: "/" },
    { name: "เกี่ยวกับองค์กร", href: "/about" },
    { name: "หน่วยงาน", href: "/organizations", hasDropdown: true },
    { name: "งานบริการ", href: "/services" },
    { name: "งานประชุม", href: "/meetings" },
    { name: "ข่าวสาร", href: "/news" },
    { name: "กฎหมาย", href: "/laws" },
    { name: "บริการอื่นๆ", href: "/other-services" },
    { name: "ติดต่อ", href: "/contact" },
];

export default function Navbar() {
    const pathname = usePathname();
    const [lang, setLang] = useState("TH");

    return (
        <nav className="w-full shadow-md font-sans">
            {/* Top Banner (Green) */}
            <div className="bg-[#737300] text-white py-3 px-8 md:px-16 flex items-center justify-between">
                <div className="flex items-center gap-4">
                    <Image
                        src="https://pharmacycouncil.org/pharmacycouncil/templates/pharmacycouncil_new/images/smaLogo.jpg"
                        alt="Pharmacy Council Logo"
                        width={65}
                        height={65}
                    />
                    <div>
                        <h1 className="text-xl md:text-2xl font-semibold tracking-wide leading-tight ThaiFont">
                            สภาเภสัชกรรม
                        </h1>
                        <p className="text-sm opacity-90 ThaiFont">
                            THE PHARMACY COUNCIL OF THAILAND
                        </p>
                    </div>
                </div>

                <div className="flex items-center gap-6">
                    {/* Language Switcher */}
                    <div className="flex items-center gap-1.5 cursor-pointer hover:bg-white/10 px-2 py-1 rounded transition-colors group">
                        <svg
                            className="w-5 h-5 opacity-80 group-hover:opacity-100 transition-opacity"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9"
                            />
                        </svg>
                        <span className="font-semibold">{lang}</span>
                        <svg
                            className="w-4 h-4 opacity-70 group-hover:opacity-100 transition-opacity"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                        >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                    </div>

                    {/* Login Button */}
                    <button className="border-2 border-white rounded-xl px-5 py-2 hover:bg-white hover:text-[#737300] transition-all duration-300 font-medium ThaiFont shadow-lg">
                        เข้าสู่ระบบเภสัชกร
                    </button>
                </div>
            </div>

            {/* Lower Nav (White) */}
            <div className="bg-white border-b border-gray-100 px-8 md:px-16">
                <div className="flex items-center gap-2 overflow-x-auto no-scrollbar py-2">
                    {navLinks.map((link) => {
                        const isActive = pathname === link.href;
                        return (
                            <Link
                                key={link.href}
                                href={link.href}
                                className={`flex items-center gap-1 px-3 py-3 text-sm font-medium whitespace-nowrap transition-colors relative ThaiFont ${isActive ? "text-[#737300]" : "text-gray-600 hover:text-[#737300]"
                                    }`}
                            >
                                {link.name}
                                {link.hasDropdown && (
                                    <svg
                                        className={`w-4 h-4 transition-transform ${isActive ? "opacity-100" : "opacity-60"}`}
                                        fill="none"
                                        stroke="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                )}
                                {/* Underline for Active */}
                                {isActive && (
                                    <div className="absolute bottom-0 left-0 right-0 h-1 bg-[#737300] rounded-t" />
                                )}
                            </Link>
                        );
                    })}
                </div>
            </div>
        </nav>
    );
}
