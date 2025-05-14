import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaPython,
  FaGit,
  FaAws,
} from "react-icons/fa";
import { SiPostgresql, SiTypescript } from "react-icons/si";
import Picture10 from "../assets/Picture10.png";
import Picture11 from "../assets/Picture11.png";
import { motion } from "motion/react";

const Skills = () => {
  const skills = [
    {
      name: "HTML",
      icon: <FaHtml5 />,
    },
    {
      name: "CSS",
      icon: <FaCss3Alt />,
    },
    {
      name: "JavaScript",
      icon: <FaJs />,
    },
    {
      name: "React",
      icon: <FaReact />,
    },
    {
      name: "Node.js",
      icon: <FaNodeJs />,
    },
    {
      name: "Python",
      icon: <FaPython />,
    },
    {
      name: "Git",
      icon: <FaGit />,
    },
    {
      name: "TypeScript",
      icon: <SiTypescript />,
    },
    {
      name: "AWS",
      icon: <FaAws />,
    },
    {
      name: "PostgreSQL",
      icon: <SiPostgresql />,
    },
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
    <>
      <section
        id="skills"
        className="section bg-[var(--primary-bg)] relative pt-20 "
      >
        <div className="absolute inset-0 z-0 ">
          <img
            src={Picture10}
            alt="Picture10"
            className="absolute -top-1/8 -left-1/12 w-1/2 z-0 h-auto"
          />
          <img
            src={Picture11}
            alt="Picture11"
            className="absolute -top-1/3 -right-1/40 w-1/2 z-0 h-auto"
          />
        </div>
        <div className="container flex flex-col items-center mx-auto px-20">
          <motion.h1
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="section-title"
          >
            Skills
          </motion.h1>
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-5 gap-6 w-full"
          >
            {skills.map((skill, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03, backgroundColor: "var(--tertiary-bg)" }}
                className="aspect-square bg-[var(--secondary-bg)]/60 backdrop-blur-lg rounded-lg flex flex-col items-center justify-center hover:cursor-pointer transition-all duration-300"
              >
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                  className="mb-2 text-6xl"
                >
                  {skill.icon}
                </motion.div>
                <p className="text-sm text-[var(--secondary-text)] text-center">
                  {skill.name}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
};

export default Skills;
