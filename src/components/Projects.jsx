import sushi_invoice from "../assets/sushi_invoice.png";
import study_ai from "../assets/study_ai.png";
import work_in_progress from "../assets/work_in_progress_page.png";
import { metallicShapes } from "../assets/metallicShapes";
import { motion } from "motion/react";

const Projects = () => {
    const projectsData = [
        {
            title: "Sushi Invoice",
            description: "I built an e-invoicing app that simplifies UBL XML invoicing for businesses of all sizes. It lets users create, validate, and send invoices securely, with smart creation tools and user authentication. It was one of the few projects selected to present to Macquarie Bank.",
            technologies: ["React", "Node.js", "DynamoDb", "JavaScript", "S3", "Elastic Beanstalk"],
            image: sushi_invoice,
            link: "http://sushi-invoice-application.ap-southeast-2.elasticbeanstalk.com/"
        },
        {
            title: "AI Study App",
            description: `I'm building an AI-powered study app that helps students learn through active recall. Upload any study material, and it generates summaries, flashcards, and practice questions. Currently working on expanding support to formats like videos and podcasts, with even smarter summaries on the way.`,
            technologies: ["Python", "Flask", "PostgreSQL", "React", "TailwindCSS", "SQLite", "AWS"],
            image: study_ai,
            link: "http://study-ai-env-5.eba-petumr2q.ap-southeast-2.elasticbeanstalk.com/home"
        },
        {
            title: "Predictive Model",
            description: "Planning a machine learning project to predict the risk of heart attacks based on health data. The goal is to train a model that can detect patterns in a patient to identify high-risk cases. It addresses a real-world problem and is a great way for me to deepen my understanding of machine learning",
            technologies: ["React", "Python", "Pandas", "TBD"],
            image: work_in_progress,
            link: null
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
            //  open link in new tab
            window.open(link, "_blank");
        } else {
            alert("Work in progress!");
        }
    };

    return (
        <section id="projects" className="section bg-[var(--primary-bg)] relative">
            <img src={metallicShapes.Picture7} alt="Metallic Shape 7" className="absolute -right-1/10 w-7/10 h-auto z-10" />
            <div className="container mx-auto px-4 relative z-20">
                <motion.h2
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="section-title"
                >
                    Projects
                </motion.h2>
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {projectsData.map((project, index) => (
                        <motion.div
                            key={index}
                            variants={itemVariants}
                            whileHover={{ scale: 1.03, cursor: "pointer" }}
                            onClick={() => handleLinkClick(project.link)}
                            className="bg-[var(--card-bg)] rounded-lg p-4 hover:shadow-[0_0_6px_3px_var(--primary-accent)] transition-shadow duration-300"
                        >
                            <motion.img
                                transition={{ duration: 0.2 }}
                                src={project.image}
                                alt={project.title}
                                className="w-full h-48 object-cover shadow-lg shadow-[var(--primary-accent)]"
                            />
                            <div className="p-6">
                                <h3 className="text-2xl font-semibold text-[var(--primary-text)] mb-2">{project.title}</h3>
                                <p className="text-[var(--secondary-text)] mb-4">{project.description}</p>
                                <div className="flex flex-wrap gap-2">
                                    {project.technologies.map((tech, techIndex) => (
                                        <span
                                            key={techIndex}
                                            className="px-3 py-1 bg-[var(--tertiary-bg)] text-[var(--secondary-text)] rounded-full text-sm"
                                        >
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects; 