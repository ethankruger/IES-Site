import { motion } from 'framer-motion';
import { useForm } from 'react-hook-form';
import './Contact.css';

const infoItemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: (index) => ({
        opacity: 1,
        x: 0,
        transition: {
            delay: index * 0.1 + 0.3,
            duration: 0.5,
            ease: "easeOut"
        }
    })
};

const formFieldVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (index) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: index * 0.1 + 0.2,
            duration: 0.5
        }
    })
};

const Contact = () => {
    const { register, handleSubmit, formState: { errors }, reset } = useForm();

    const onSubmit = (data) => {
        console.log('Form submitted:', data);
        alert('Thank you for your message! We will get back to you soon.');
        reset();
    };

    return (
        <section className="contact section" id="contact">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="section-title">Get In Touch</h2>
                    <p className="section-subtitle">
                        Ready to start your electrical project? Contact us today!
                    </p>
                </motion.div>

                <div className="contact-content">
                    <motion.div
                        className="contact-info"
                        initial={{ opacity: 0, x: -60, rotateY: -10 }}
                        whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <motion.div
                            className="info-card glass"
                            whileHover={{ scale: 1.02, y: -5 }}
                            transition={{ duration: 0.3 }}
                        >
                            <h3 className="info-title">Contact Information</h3>

                            <div className="info-item">
                                <div className="info-icon">📍</div>
                                <div>
                                    <div className="info-label">Address</div>
                                    <div className="info-value">P.O. Box 131<br />Milaca, MN 56353</div>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon">📞</div>
                                <div>
                                    <div className="info-label">Phone</div>
                                    <div className="info-value">
                                        <a href="tel:320-200-9388">320-200-9388</a>
                                    </div>
                                </div>
                            </div>

                            <div className="info-item">
                                <div className="info-icon">✉️</div>
                                <div>
                                    <div className="info-label">Email</div>
                                    <div className="info-value">
                                        <a href="mailto:IdealElectricService@gmail.com">
                                            IdealElectricService@gmail.com
                                        </a>
                                    </div>
                                </div>
                            </div>

                            <div className="social-links">
                                <h4 className="social-title">Follow Us</h4>
                                <div className="social-icons">
                                    <a
                                        href="https://www.facebook.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-icon"
                                        aria-label="Facebook"
                                    >
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                                        </svg>
                                    </a>
                                    <a
                                        href="https://www.instagram.com"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="social-icon"
                                        aria-label="Instagram"
                                    >
                                        <svg viewBox="0 0 24 24" fill="currentColor">
                                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>

                    <motion.div
                        className="contact-form-container"
                        initial={{ opacity: 0, x: 60, rotateY: 10 }}
                        whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
                    >
                        <form className="contact-form glass" onSubmit={handleSubmit(onSubmit)}>
                            <div className="form-group">
                                <label htmlFor="fullName">Full Name *</label>
                                <input
                                    id="fullName"
                                    type="text"
                                    {...register('fullName', { required: 'Full name is required' })}
                                    className={errors.fullName ? 'error' : ''}
                                />
                                {errors.fullName && <span className="error-message">{errors.fullName.message}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="email">Email *</label>
                                <input
                                    id="email"
                                    type="email"
                                    {...register('email', {
                                        required: 'Email is required',
                                        pattern: {
                                            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                            message: 'Invalid email address'
                                        }
                                    })}
                                    className={errors.email ? 'error' : ''}
                                />
                                {errors.email && <span className="error-message">{errors.email.message}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="phone">Phone Number *</label>
                                <input
                                    id="phone"
                                    type="tel"
                                    {...register('phone', { required: 'Phone number is required' })}
                                    className={errors.phone ? 'error' : ''}
                                />
                                {errors.phone && <span className="error-message">{errors.phone.message}</span>}
                            </div>

                            <div className="form-group">
                                <label htmlFor="message">Message *</label>
                                <textarea
                                    id="message"
                                    rows="5"
                                    {...register('message', { required: 'Message is required' })}
                                    className={errors.message ? 'error' : ''}
                                ></textarea>
                                {errors.message && <span className="error-message">{errors.message.message}</span>}
                            </div>

                            <button type="submit" className="btn btn-primary btn-submit">
                                Send Message
                            </button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
