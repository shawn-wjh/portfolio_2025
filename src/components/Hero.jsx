import { TypeAnimation } from "react-type-animation";
import image_mesh_gradient from "../assets/image-mesh-gradient.png";
import { FaGithub, FaLinkedin, FaEnvelope, FaCheck } from "react-icons/fa";
import { useState } from "react";
import { motion } from "motion/react";
import { useEmailCopy } from "../utils/emailHandler";

const Hero = () => {
  const { showCopyNotification, handleEmailClick } = useEmailCopy();

  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/shawn-wjh",
    },
    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/shawn-woo-38b37533a/",
    },
    {
      icon: <FaEnvelope />,
      url: "#",
      onClick: handleEmailClick,
    },
  ];

  return (
    <section
      id="home"
      className="section bg-[var(--primary-bg)] relative min-h-screen flex items-center justify-center"
    >
      {showCopyNotification && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          className={`fixed top-20 left-1/2 transform -translate-x-1/2
                bg-[var(--secondary-bg)] text-[var(--primary-text)] 
                px-4 py-2 rounded-lg shadow-lg flex items-center gap-2 z-50`}
        >
          <FaCheck className="text-green-500" />
          <span>Copied to clipboard!</span>
        </motion.div>
      )}

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        className="absolute inset-0 mx-10 mt-20 rounded-[2rem] -hidden z-20"
      >
        <img
          src={image_mesh_gradient}
          alt="Gradient"
          className="w-full h-full object-cover rounded-[2rem]"
        />
      </motion.div>

      <div className="relative z-20 flex flex-col items-center justify-between h-full min-h-screen mt-35">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-8"
        >
          <h1 className="text-8xl font-bold mb-4 text-[var(--primary-text)]">
            Hi! I'm Shawn
          </h1>
          <TypeAnimation
            sequence={[
              "I am a Software Engineer",
              2000,
              "I am a Web Developer",
              2000,
              "I am a Full Stack Developer",
              2000,
            ]}
            wrapper="p"
            cursor={true}
            repeat={Infinity}
            style={{ fontSize: "2.5em" }}
            speed={50}
            className="text-[var(--secondary-text)]"
          />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="flex gap-25 mt-8 mb-15"
        >
          {socialLinks.map((link, index) =>
            link.onClick ? (
              <motion.button
                key={index}
                onClick={link.onClick}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-16 h-16 rounded-full bg-[var(--tertiary-bg)] flex items-center justify-center 
                                        hover:bg-[var(--primary-accent)] transition-all duration-300 object-cover cursor-pointer"
              >
                <div className="w-full h-full flex items-center justify-center text-3xl">
                  {link.icon}
                </div>
              </motion.button>
            ) : (
              <motion.a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="w-16 h-16 rounded-full bg-[var(--tertiary-bg)] flex items-center justify-center 
                                        hover:bg-[var(--primary-accent)] transition-all duration-300 object-cover cursor-pointer"
              >
                <div className="w-full h-full flex items-center justify-center text-3xl">
                  {link.icon}
                </div>
              </motion.a>
            )
          )}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="w-full max-w-8/10 mx-auto"
        >
          <div className="bg-[var(--primary-bg)]/50 backdrop-blur-lg rounded-[2rem] p-4 md:p-8">
            <p className="te    xt-base md:text-lg text-[var(--secondary-text)] mb-4">
              Hi there! I'm a curious and driven software engineering student who loves building things that make life easier (or just more fun). Whether I'm diving into a new framework, debugging for hours, or brainstorming with a team, I genuinely enjoy the process of solving problems and learning something new along the way.
            </p>
            <p className="text-base md:text-lg text-[var(--secondary-text)]">
                When I'm not coding, you can find me outdoors or at the gym. I enjoy hiking, staying active with fitness and weightlifting, and challenging myself on the bouldering wall. It's my way of unwinding and having fun outside of a screen. 
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
