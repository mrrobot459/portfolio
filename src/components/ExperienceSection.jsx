import React from 'react';
import { Briefcase } from 'lucide-react';
import { motion as Motion } from 'framer-motion';
import { portfolioData } from '../data/portfolioData';

const experienceData = portfolioData.experienceSection.map((item) => ({
    role: item.role,
    company: item.companyName,
    location: item.location,
    duration: item.duration,
    responsibilities: item.descriptionPoints,
}));

const ExperienceSection = () => {
    return (
        <section id="experience" className="bg-[#0b1218] text-white py-20 px-4 sm:px-6 md:px-12">
            <div className="max-w-6xl mx-auto">
                <div className="mb-16 text-center">
                    <h2 className="text-4xl sm:text-5xl font-bold text-[#FEE715] mb-2">Experience</h2>
                </div>

                <div className="flex flex-col items-center gap-8">
                    {experienceData.map((item, index) => (
                        <Motion.article
                            key={index}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            whileHover={{ y: -4, boxShadow: '0 20px 45px rgba(254,231,21,0.3)' }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="w-full max-w-xl border border-[#FEE715]/30 rounded-2xl p-6 bg-gradient-to-br from-[#101820] via-[#111e2e] to-[#122237]"
                        >
                            <div className="flex items-start justify-between gap-3 mb-4">
                                <div>
                                    <h3 className="text-2xl font-bold text-[#FEE715]">{item.role}</h3>
                                    <p className="text-sm text-white/80">
                                        <span className="font-medium text-white">{item.company}</span> • {item.location}
                                    </p>
                                </div>
                                <span className="text-xs text-[#A7BEAE] font-semibold uppercase tracking-wider">{item.duration}</span>
                            </div>

                            <div className="flex items-center gap-2 mb-4 text-sm text-white/80">
                                <Briefcase size={18} className="text-[#FEE715]" />
                                <span>Key responsibilities</span>
                            </div>

                            <ul className="space-y-2 text-white/85">
                                {item.responsibilities.slice(0, 5).map((line, i) => (
                                    <li key={i} className="relative pl-5 before:absolute before:left-0 before:top-1.5 before:h-2 before:w-2 before:rounded-full before:bg-[#FEE715]">
                                        {line}
                                    </li>
                                ))}
                            </ul>

                            {item.responsibilities.length > 5 && (
                                <p className="mt-4 text-xs text-white/60">+{item.responsibilities.length - 5} more bullet points</p>
                            )}
                        </Motion.article>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ExperienceSection;
