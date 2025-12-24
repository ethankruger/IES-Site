import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './Navigation.css';

const Navigation = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [showReviewDropdown, setShowReviewDropdown] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
        setIsMenuOpen(false);
    };

    const navLinks = [
        { name: 'Services', id: 'services' },
        { name: 'About', id: 'about' },
        { name: 'Contact', id: 'contact' }
    ];

    return (
        <motion.nav
            className={`navigation ${isScrolled ? 'scrolled' : ''}`}
            initial={{ y: -100 }}
            animate={{ y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <div className="container">
                <div className="nav-content">
                    {/* Logo */}
                    <motion.div
                        className="nav-logo"
                        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                    >
                        <span className="logo-text">IDEAL ELECTRIC</span>
                    </motion.div>

                    {/* Desktop Navigation */}
                    <div className="nav-links desktop">
                        {navLinks.map((link, index) => (
                            <motion.button
                                key={link.id}
                                className="nav-link"
                                onClick={() => scrollToSection(link.id)}
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                whileHover={{ y: -2 }}
                            >
                                {link.name}
                            </motion.button>
                        ))}

                        {/* Review Dropdown */}
                        <div
                            className="review-dropdown-container"
                            onMouseEnter={() => setShowReviewDropdown(true)}
                            onMouseLeave={() => setShowReviewDropdown(false)}
                        >
                            <motion.button
                                className="nav-link"
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.3 }}
                                whileHover={{ y: -2 }}
                            >
                                Leave us a review ▾
                            </motion.button>

                            <AnimatePresence>
                                {showReviewDropdown && (
                                    <motion.div
                                        className="review-dropdown glass"
                                        initial={{ opacity: 0, y: -10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        exit={{ opacity: 0, y: -10 }}
                                        transition={{ duration: 0.2 }}
                                    >
                                        <a
                                            href="https://www.facebook.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="dropdown-item"
                                        >
                                            Facebook
                                        </a>
                                        <a
                                            href="https://www.google.com"
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="dropdown-item"
                                        >
                                            Google
                                        </a>
                                    </motion.div>
                                )}
                            </AnimatePresence>
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <button
                        className="mobile-menu-btn"
                        onClick={() => setIsMenuOpen(!isMenuOpen)}
                        aria-label="Toggle menu"
                    >
                        <span className={`hamburger ${isMenuOpen ? 'open' : ''}`}>
                            <span></span>
                            <span></span>
                            <span></span>
                        </span>
                    </button>
                </div>

                {/* Mobile Menu */}
                <AnimatePresence>
                    {isMenuOpen && (
                        <motion.div
                            className="mobile-menu glass"
                            initial={{ opacity: 0, height: 0 }}
                            animate={{ opacity: 1, height: 'auto' }}
                            exit={{ opacity: 0, height: 0 }}
                            transition={{ duration: 0.3 }}
                        >
                            {navLinks.map((link) => (
                                <button
                                    key={link.id}
                                    className="mobile-link"
                                    onClick={() => scrollToSection(link.id)}
                                >
                                    {link.name}
                                </button>
                            ))}
                            <div className="mobile-review-links">
                                <span className="mobile-review-title">Leave us a review:</span>
                                <a
                                    href="https://www.facebook.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mobile-link"
                                >
                                    Facebook
                                </a>
                                <a
                                    href="https://www.google.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="mobile-link"
                                >
                                    Google
                                </a>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </motion.nav>
    );
};

export default Navigation;
