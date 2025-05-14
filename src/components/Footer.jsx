import { FaEnvelope, FaPhone, FaLinkedin, FaGithub } from "react-icons/fa";
import { motion } from "motion/react";
import { FaCheck } from "react-icons/fa";
import { useEmailCopy } from "../utils/emailHandler";

const Footer = () => {
  const { showCopyNotification, handleEmailClick } = useEmailCopy();

  return (
    <>
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
    <footer className="bg-[var(--primary-bg)]/20 backdrop-blur-lg py-12 px-4 md:px-8 lg:px-16">

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto bg-[var(--secondary-bg)]/20 p-10 rounded-2xl"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold text-[var(--primary-text)] mb-4 underline decoration-[var(--primary-accent)] decoration-2">
              Contact Me
            </h3>
            <div className="space-y-2">
              <motion.a
                whileHover={{ x: 10 }}
                onClick={handleEmailClick}
                className="flex items-center text-[var(--secondary-text)] hover:text-[var(--primary-accent)] transition-colors duration-300 cursor-pointer"
              >
                <FaEnvelope className="mr-2" />
                shawn.wjh@gmail.com
              </motion.a>
              <motion.a
                whileHover={{ x: 10 }}
                href="https://www.linkedin.com/in/shawn-woo-38b37533a/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-[var(--secondary-text)] hover:text-[var(--primary-accent)] transition-colors duration-300"
              >
                <FaLinkedin className="mr-2" />
                LinkedIn
              </motion.a>
              <motion.a
                whileHover={{ x: 10 }}
                href="https://github.com/shawn-wjh"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center text-[var(--secondary-text)] hover:text-[var(--primary-accent)] transition-colors duration-300"
              >
                <FaGithub className="mr-2" />
                GitHub
              </motion.a>
            </div>
          </motion.div>

          {/* Resume Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="space-y-4"
          >
            <h3 className="text-2xl font-semibold text-[var(--primary-text)] mb-4">
              Resume
            </h3>
            <div className="space-y-4">
              <p className="text-[var(--secondary-text)]">
                View my resume to learn more about my experience and skills.
              </p>
              <motion.a
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => window.open("https://drive.google.com/file/d/1C64ALYWUp-dEIafYhhrKXwZXKkdYrpBQ/view?usp=sharing", "_blank")}
                rel="noopener noreferrer"
                className="inline-block bg-[var(--primary-accent)] text-white px-6 py-3 rounded-full hover:bg-[var(--primary-accent)]/90 transition-colors duration-300 cursor-pointer"
              >
                View Resume
              </motion.a>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </footer>
    </>
  );
};

export default Footer;
