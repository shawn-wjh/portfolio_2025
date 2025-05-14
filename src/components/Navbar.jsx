import { useState, useEffect } from 'react';

const Navbar = () => {
    const sections = ['Home', 'Skills', 'Experience', 'Education', 'Projects', 'Contact'];
    const [activeSection, setActiveSection] = useState('Home');

    useEffect(() => {
        const handleScroll = () => {
            const scrollPosition = window.scrollY;
            const windowHeight = window.innerHeight;
            const documentHeight = document.documentElement.scrollHeight;
            
            // Check if we're at the bottom of the page
            if (scrollPosition + windowHeight >= documentHeight - 100) {
                setActiveSection('Contact');
                return;
            }

            const sectionElements = sections.map(section => 
                document.getElementById(section.toLowerCase())
            );

            for (let i = sectionElements.length - 1; i >= 0; i--) {
                const element = sectionElements[i];
                if (element) {
                    const rect = element.getBoundingClientRect();
                    // Adjust the offset to better detect when a section is in view
                    if (rect.top <= 150) {
                        setActiveSection(sections[i]);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (section) => {
        if (section === 'Contact') {
            window.scrollTo({
                top: document.documentElement.scrollHeight,
                behavior: 'smooth'
            });
        } else {
            const element = document.getElementById(section.toLowerCase());
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setActiveSection(section);
    };

    return (
        <nav className="fixed flex-row top-4 left-1/2 transform -translate-x-1/2 w-[90%] md:w-[80%] lg:w-[60%] z-50">
            <div className="bg-[var(--primary-bg)]/20 backdrop-blur-lg rounded-full py-2 px-4 shadow-lg">
                <ul className="flex justify-center items-center gap-2 md:gap-4 lg:gap-5">
                    {sections.map((section) => (
                        <li key={section} className="flex-1 md:flex-none">
                            <button
                                onClick={() => scrollToSection(section)}
                                className={`w-full md:w-auto px-3 md:px-4 py-1.5 rounded-full 
                                    transition-all duration-300 text-sm md:text-base font-medium
                                    cursor-pointer
                                    ${activeSection === section 
                                        ? 'bg-[var(--primary-accent)] text-white' 
                                        : 'text-[var(--secondary-text)] hover:bg-[var(--tertiary-bg)]'
                                    }`}
                            >
                                {section}
                            </button>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;