"use client";

import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ArrowLeft, Clock, MapPin, GraduationCap, Star, UserCheck, ShieldCheck, Phone, Calendar } from 'lucide-react';

export default function DrRidamPage() {
    return (
        <main className="min-h-screen bg-white">

            {/* --- HERO SECTION --- */}
            <section className="relative w-full min-h-[600px] lg:h-[800px] bg-[#1a3b44] overflow-hidden flex items-center">
                {/* Background Texture */}
                <div className="absolute inset-0 opacity-[0.05]"
                    style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '32px 32px' }}>
                </div>

                <div className="max-w-7xl mx-auto w-full px-4 md:px-8 relative grid grid-cols-1 lg:grid-cols-2 gap-12 items-center h-full pt-24 lg:pt-0">

                    {/* Content Left */}
                    <div className="relative z-10 flex flex-col justify-center">
                        <Link href="/about" className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors mb-8 text-sm font-medium tracking-wide w-fit">
                            <ArrowLeft className="w-4 h-4" />
                            Back to Team
                        </Link>

                        <div className="inline-block px-4 py-1.5 rounded-full bg-white/10 border border-white/10 text-white text-xs font-bold tracking-[0.2em] uppercase mb-6 backdrop-blur-sm w-fit">
                            Specialist Orthodontist
                        </div>

                        <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-white mb-6 leading-[1.1]">
                            Dr. Ridam <br /> <span className="text-[#88d9e6]">Jain</span>
                        </h1>

                        <p className="text-lg text-white/80 max-w-lg mb-8 leading-relaxed font-light">
                            BDS, MDS (Orthodontics & Dentofacial Orthopaedics)<br />
                            A distinguished expert dedicated to the art and science of creating healthy, radiant, and confident smiles.
                        </p>

                        <div className="flex flex-wrap gap-4 pb-12 lg:pb-0">
                            <Link href="/book">
                                <button className="bg-[#88d9e6] text-[#1a3b44] px-8 py-4 rounded-full font-bold hover:bg-white transition-all transform hover:-translate-y-1 shadow-lg shadow-[#88d9e6]/20 flex items-center gap-2">
                                    <Calendar className="w-4 h-4" />
                                    Book Appointment
                                </button>
                            </Link>
                        </div>
                    </div>

                    {/* Image Right */}
                    <div className="relative h-[400px] lg:h-full w-full">
                        {/* Reduced gradient opacity for cleaner image */}
                        <div className="absolute bottom-0 right-0 w-full h-[30%] bg-gradient-to-t from-[#1a3b44] to-transparent z-10 lg:hidden"></div>
                        <Image
                            src="/ridam.jpeg"
                            alt="Dr. Ridam Jain"
                            fill
                            className="object-cover object-top"
                            style={{ objectPosition: 'center top' }}
                            priority
                        />
                    </div>
                </div>
            </section>


            {/* --- STATS / QUICK INFO --- */}
            <div className="bg-[#f0f9fb] border-y border-slate-100">
                <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-slate-200">
                    <div className="flex items-start gap-4 p-2">
                        <GraduationCap className="w-8 h-8 text-[#1E4D58] shrink-0" />
                        <div>
                            <h4 className="font-bold text-slate-900 text-lg">MDS Orthodontist</h4>
                            <p className="text-sm text-slate-600 leading-relaxed">Specialized Master's degree in Orthodontics & Dentofacial Orthopaedics.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-2 md:pl-8">
                        <Star className="w-8 h-8 text-[#1E4D58] shrink-0" />
                        <div>
                            <h4 className="font-bold text-slate-900 text-lg">Smile Expert</h4>
                            <p className="text-sm text-slate-600 leading-relaxed">Expertise in Smile Makeovers and complex dental alignment.</p>
                        </div>
                    </div>
                    <div className="flex items-start gap-4 p-2 md:pl-8">
                        <Clock className="w-8 h-8 text-[#1E4D58] shrink-0" />
                        <div>
                            <h4 className="font-bold text-slate-900 text-lg">15+ Years</h4>
                            <p className="text-sm text-slate-600 leading-relaxed">Extensive clinical experience in creating functional smiles.</p>
                        </div>
                    </div>
                </div>
            </div>


            {/* --- BIO & PHILOSOPHY --- */}
            <section className="max-w-7xl mx-auto px-4 md:px-8 py-20 lg:py-28">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

                    {/* Left Column: Bio */}
                    <div className="lg:col-span-7">
                        <h3 className="text-[#1E4D58] font-bold text-sm tracking-widest uppercase mb-4">About the Doctor</h3>
                        <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-8 leading-tight">
                            Blending Precision Science with <span className="italic text-[#1E4D58]">Aesthetic Artistry</span>
                        </h2>

                        <div className="prose prose-lg prose-slate text-slate-600 leading-loose">
                            <p>
                                Dr. Ridam Jain is a distinguished Orthodontist and Smile Expert based in Jaipur, dedicated to the art and science of creating healthy, radiant, and confident smiles. With an extensive academic background and years of clinical expertise, Dr. Jain specializes in comprehensive dental alignment, correcting complex jaw discrepancies, and optimizing bite functionality.
                            </p>
                            <p>
                                She holds both a <strong>Bachelor of Dental Surgery (BDS)</strong> and a <strong>Master of Dental Surgery (MDS)</strong> in Orthodontics & Dentofacial Orthopaedics. This advanced training equips her with the specialized knowledge required to address severe dental irregularities and structural issues that require more than routine care.
                            </p>
                            <p>
                                Personalized care is at the heart of her practice at Old Glory Orthodontics & Dental Care. Whether designing a treatment plan for a subtle correction or a transformative Smile Makeover, Dr. Jain ensures that every result is both functional and visually harmonious with the patient's unique facial features.
                            </p>
                        </div>
                    </div>

                    {/* Right Column: Key Focus Areas */}
                    <div className="lg:col-span-5 space-y-8">
                        <div className="bg-[#FAFCFD] p-8 rounded-3xl border border-slate-100">
                            <h4 className="text-xl font-serif text-slate-900 mb-6">Area of Expertise</h4>
                            <ul className="space-y-4">
                                {[
                                    "Smile Makeovers & Design",
                                    "Clear Aligners (Invisalign)",
                                    "Complex Jaw Corrections",
                                    "Ceramic & Metal Braces",
                                    "Dentofacial Orthopaedics",
                                    "Pediatric Orthodontics"
                                ].map((item, idx) => (
                                    <li key={idx} className="flex items-center gap-3 text-slate-700">
                                        <div className="w-1.5 h-1.5 rounded-full bg-[#1E4D58]"></div>
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>

                        <div className="bg-[#1E4D58] p-8 rounded-3xl text-white relative overflow-hidden">
                            <div className="absolute top-0 right-0 p-8 opacity-10">
                                <ShieldCheck className="w-24 h-24" />
                            </div>
                            <h4 className="text-xl font-serif text-white mb-4 relative z-10">Patient Commitment</h4>
                            <p className="text-white/80 leading-relaxed relative z-10 mb-6">
                                "I believe in transparent communication. A patient who understands their treatment journey is a patient who can smile with confidence even before the braces come off."
                            </p>
                            <div className="flex items-center gap-4 relative z-10">
                                <div className="w-12 h-1 bg-white/20 rounded-full"></div>
                                <span className="font-serif italic text-white/90">Dr. Ridam</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* --- APPROACH GRID --- */}
            <section className="bg-slate-50 py-20 lg:py-28 px-4 md:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl md:text-4xl font-serif text-slate-900 mb-4">Her Professional Approach</h2>
                        <p className="text-slate-600 text-lg">Defined by precision, comfort, and personalized attention.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {[
                            {
                                icon: UserCheck,
                                title: "Individualized Consultations",
                                desc: "One-on-one sessions to deeply understand specific patient goals and lifestyle needs."
                            },
                            {
                                icon: Star,
                                title: "Advanced Technology",
                                desc: "Utilizing the latest diagnostic and treatment tools in modern orthodontics for precise results."
                            },
                            {
                                icon: ShieldCheck,
                                title: "Patient Education",
                                desc: "Prioritizing transparent communication so patients are fully informed and comfortable."
                            },
                            {
                                icon: Heart,
                                title: "Minimally Invasive",
                                desc: "Focusing on effective results with maximum patient comfort and gentle chairside manner."
                            }
                        ].map((card, idx) => (
                            <div key={idx} className="bg-white p-8 rounded-2xl border border-slate-100 hover:shadow-xl hover:shadow-[#1E4D58]/5 transition-all duration-300 group">
                                <div className="w-12 h-12 bg-[#e0f2f7] rounded-xl flex items-center justify-center text-[#1E4D58] mb-6 group-hover:bg-[#1E4D58] group-hover:text-white transition-colors">
                                    <card.icon className="w-6 h-6" />
                                </div>
                                <h3 className="font-bold text-slate-900 mb-3">{card.title}</h3>
                                <p className="text-slate-500 text-sm leading-relaxed">{card.desc}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* --- CTA --- */}
            <section className="bg-[#1E4D58] py-20 px-4">
                <div className="max-w-4xl mx-auto text-center text-white">
                    <h2 className="text-3xl md:text-5xl font-serif mb-8">Ready to transform your smile with Dr. Ridam?</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        <Link href="/book">
                            <button className="bg-white text-[#1E4D58] px-8 py-4 rounded-full font-bold hover:bg-[#f0f9fb] transition-colors flex items-center gap-2">
                                <Calendar className="w-5 h-5" />
                                Schedule Consultation
                            </button>
                        </Link>
                        <a href="tel:+918875700500" className="px-8 py-4 rounded-full border border-white/30 hover:bg-white/10 transition-colors flex items-center gap-2 font-medium">
                            <Phone className="w-5 h-5" />
                            +91 88757 00500
                        </a>
                    </div>
                </div>
            </section>

        </main >
    );
}

// Icon helper
const Heart = ({ className }: { className?: string }) => (
    <svg className={className} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" /></svg>
);
