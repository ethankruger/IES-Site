import { motion } from 'framer-motion';
import logo from '../assets/logo.svg';
import './Hero.css';

const Hero = () => {
    const scrollToContact = () => {
        const element = document.getElementById('contact');
        if (element) {
            const offset = 80;
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition = elementPosition + window.pageYOffset - offset;

            window.scrollTo({
                top: offsetPosition,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="hero" id="home">
            <div className="hero-background">
                <div className="hero-gradient"></div>
                <div className="hero-particles">
                    {[...Array(20)].map((_, i) => (
                        <div
                            key={i}
                            className="particle"
                            style={{
                                left: `${Math.random() * 100}%`,
                                top: `${Math.random() * 100}%`,
                                animationDelay: `${Math.random() * 5}s`,
                                animationDuration: `${5 + Math.random() * 10}s`
                            }}
                        ></div>
                    ))}
                </div>
            </div>

            <div className="container hero-content">
                <motion.div
                    className="hero-logo-container"
                    initial={{ scale: 0, rotate: -180 }}
                    animate={{ scale: 1, rotate: 0 }}
                    transition={{
                        type: 'spring',
                        stiffness: 100,
                        damping: 15,
                        duration: 1
                    }}
                >
                    <img src={logo} alt="Ideal Electric Service Logo" className="hero-logo animate-float" />
                </motion.div>

                <motion.h1
                    className="hero-title"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3, duration: 0.8 }}
                >
                    IDEAL ELECTRIC SERVICE
                </motion.h1>

                <motion.p
                    className="hero-subtitle"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.8 }}
                >
                    Interior • Exterior • Residential
                </motion.p>

                <motion.p
                    className="hero-description"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.7, duration: 0.8 }}
                >
                    Premier electrical service experience in Milaca, Minnesota
                </motion.p>

                <motion.div
                    className="hero-cta"
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.9, duration: 0.8 }}
                >
                    <button className="btn btn-primary" onClick={scrollToContact}>
                        Get In Touch
                    </button>
                    <button
                        className="btn btn-ghost"
                        onClick={() => {
                            const element = document.getElementById('services');
                            if (element) {
                                const offset = 80;
                                const elementPosition = element.getBoundingClientRect().top;
                                const offsetPosition = elementPosition + window.pageYOffset - offset;
                                window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
                            }
                        }}
                    >
                        Our Services
                    </button>
                </motion.div>

                <motion.div
                    className="scroll-indicator"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.2, duration: 0.8 }}
                >
                    <div className="scroll-arrow"></div>
                </motion.div>
            </div>
        </section>
    );
};

export default Hero;
