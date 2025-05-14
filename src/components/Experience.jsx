import { metallicShapes } from "../assets/metallicShapes";
import { motion } from "motion/react";

const Experience = () => {
    const experiences = [
        {
            title: "Corporate Finance Intern",
            company: "Deloitte Malaysia",
            period: "Dec 2024 - Feb 2025",
            description: [
                "Assisted in the execution of M&A deals across multiple industries, gaining hands-on experience in comparable company analysis, and financial validation.",
                "Collaborated with senior consultants and worked closely with clients, improving my ability to work in a team under high-pressure environments.",
                "Impact: Strengthened my business acumen and strategic thinking, enabling me to approach software development with a strong understanding of commercial priorities, client needs, and value-driven outcomes",
            ]
        }
    ];

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
            },
        },
    };

    return (
        <section id="experience" className="section bg-[var(--primary-bg)] relative">
            <img src={metallicShapes.Picture3} alt="Metallic Shape 1" className="absolute rotate-40 -right-1/8 w-3/4 h-auto z-10" />
            <div className="container mx-auto px-4 relative z-20">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="section-title"
                >
                    Experience
                </motion.h2>
                
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="max-w-4xl mx-auto z-10"
                >
                    <div className="space-y-8">
                        {experiences.map((exp, index) => (
                            <motion.div
                                key={index}
                                variants={itemVariants}
                                whileHover={{ scale: 1.02, backgroundColor: "var(--tertiary-bg)" }}
                                className="card p-6 z-10"
                            >
                                <div className="flex flex-col md:flex-row md:justify-between md:items-center mb-4">
                                    <div>
                                        <h3 className="text-2xl font-semibold text-[var(--primary-text)]">{exp.title}</h3>
                                        <p className="text-xl text-[var(--secondary-text)]">{exp.company}</p>
                                    </div>
                                    <p className="text-[var(--accent-text)] mt-2 md:mt-0">{exp.period}</p>
                                </div>
                                <ul className="space-y-2">
                                    {exp.description.map((item, itemIndex) => (
                                        <motion.li
                                            key={itemIndex}
                                            initial={{ opacity: 0, x: -20 }}
                                            animate={{ opacity: 1, x: 0 }}
                                            transition={{ delay: itemIndex * 0.1 }}
                                            className="flex items-start"
                                        >
                                            <span className="text-[var(--primary-accent)] mr-2">•</span>
                                            <span className="text-[var(--secondary-text)]">{item}</span>
                                        </motion.li>
                                    ))}
                                </ul>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Experience; 