import { motion } from 'framer-motion';
import { Target, Users, Home, Award, MapPin } from 'lucide-react';
import './About.css';

const featureCards = [
    { icon: Users, title: "Family Owned", description: "Local business you can trust" },
    { icon: Home, title: "Residential Focus", description: "Specialized in home electrical" },
    { icon: Award, title: "Premier Service", description: "Highest quality standards" },
    { icon: MapPin, title: "Local Expertise", description: "Serving Milaca, MN area" }
];

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.15,
            delayChildren: 0.3
        }
    }
};

const cardVariants = {
    hidden: {
        opacity: 0,
        y: 50,
        scale: 0.9
    },
    visible: {
        opacity: 1,
        y: 0,
        scale: 1,
        transition: {
            type: "spring",
            stiffness: 100,
            damping: 12
        }
    }
};

const About = () => {
    return (
        <section className="about section" id="about">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="section-title">About Us</h2>
                    <p className="section-subtitle">
                        Premier electrical service experience in Milaca, Minnesota
                    </p>
                </motion.div>

                <motion.div
                    className="about-description"
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                >
                    <p>
                        <strong>Ideal Electric Service</strong> is a family-owned and operated residential
                        service electrical company based in Milaca, Minnesota. We specialize in all-purpose
                        residential electric installs and service work, bringing years of expertise and
                        dedication to every project.
                    </p>
                </motion.div>

                <div className="about-content">
                    <motion.div
                        className="about-left"
                        initial={{ opacity: 0, x: -60, rotateY: -10 }}
                        whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <motion.div
                            className="mission-statement glass"
                            whileHover={{ scale: 1.02, y: -5 }}
                            transition={{ duration: 0.3 }}
                        >
                            <motion.div
                                className="mission-icon"
                                initial={{ rotate: -180, scale: 0 }}
                                whileInView={{ rotate: 0, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: 0.5, type: "spring" }}
                            >
                                <Target size={40} strokeWidth={2} />
                            </motion.div>
                            <div className="mission-content">
                                <h3 className="mission-title">Our Mission</h3>
                                <p className="mission-text">
                                    "To give our customers a premier electrical service experience while holding
                                    ourselves to the highest standard in our trade."
                                </p>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="about-right"
                        variants={containerVariants}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-100px" }}
                    >
                        <div className="about-features-grid">
                            {featureCards.map((feature, index) => (
                                <motion.div
                                    key={index}
                                    className="feature-card glass"
                                    variants={cardVariants}
                                    whileHover={{
                                        scale: 1.05,
                                        y: -10,
                                        transition: { duration: 0.3 }
                                    }}
                                >
                                    <motion.div
                                        className="feature-icon"
                                        initial={{ rotate: -180, scale: 0 }}
                                        whileInView={{ rotate: 0, scale: 1 }}
                                        viewport={{ once: true }}
                                        transition={{
                                            duration: 0.5,
                                            delay: 0.5 + (index * 0.1),
                                            type: "spring",
                                            stiffness: 200
                                        }}
                                    >
                                        <feature.icon size={32} strokeWidth={2} />
                                    </motion.div>
                                    <h4 className="feature-title">{feature.title}</h4>
                                    <p className="feature-description">{feature.description}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default About;
