import {metallicShapes} from "../assets/metallicShapes";
import { motion } from "motion/react";

const Education = () => {
    const educationData = [
        {
            degree: "Bachelor of Engineering in Software Engineering",
            school: "University of New South Wales",
            year: "Started 2024",
            description: "Maintaining a WAM of 84.20.",
            link: "https://drive.google.com/file/d/11GgZLzwl8YJURIi9eu_VuNSnSzeaq5ED/view?usp=sharing"
        },
        {
            degree: "Cambridge International A-Levels",
            school: "Macleans College (New Zealand)",
            year: "2019 - 2023",
            description: "Achieved 3A*s in Physics, Chemistry and Mathematics, and 1C in English Language.",
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
    
    const handleLinkClick = (link) => {
        if (link) {
            window.open(link, "_blank");
        } else {
            alert("Work in progress!");
        }
    };

    return (
        <section id="education" className="min-h-screen bg-[var(--primary-bg)] py-20 relative">
            <img src={metallicShapes.Picture7} alt="Metallic Shape 7" className="absolute top-1/3 -left-1/10 w-1/2 h-auto z-10" />
            <div className="container mx-auto px-4 relative z-20">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="section-title"
                >
                    Education
                </motion.h2>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="max-w-3xl mx-auto space-y-8"
                >
                    {educationData.map((edu, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.02, backgroundColor: "var(--tertiary-bg)" }}
                            className="bg-[var(--secondary-bg)] p-6 rounded-lg shadow-md"
                        >
                            <h3 className="text-2xl font-semibold text-[var(--primary-text)]">{edu.degree}</h3>
                            <p className="text-xl text-[var(--secondary-text)] mt-2">{edu.school}</p>
                            <p className="text-[var(--secondary-text)] mt-1">{edu.year}</p>
                            <p className="text-[var(--secondary-text)] mt-4">{edu.description}</p>
                            {edu.link && (
                                <button
                                    onClick={() => handleLinkClick(edu.link)}
                                    className="text-[var(--secondary-text)] mt-4 underline hover:text-[var(--primary-accent)] hover:cursor-pointer"
                                >
                                    View my Academic Transcript
                                </button>
                            )}
                            {edu.list && edu.list.map((item, index) => (
                                <li key={index} className="text-[var(--secondary-text)] mt-4">{item}</li>
                            ))}
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Education;
