import { motion, AnimatePresence } from 'framer-motion';
import './ServiceModal.css';

const ServiceModal = ({ service, onClose }) => {
    if (!service) return null;

    return (
        <AnimatePresence>
            <motion.div
                className="modal-backdrop"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                onClick={onClose}
            >
                <motion.div
                    className="modal-content glass-strong"
                    initial={{ scale: 0.8, opacity: 0, y: 50 }}
                    animate={{ scale: 1, opacity: 1, y: 0 }}
                    exit={{ scale: 0.8, opacity: 0, y: 50 }}
                    transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                    onClick={(e) => e.stopPropagation()}
                >
                    <button className="modal-close" onClick={onClose} aria-label="Close modal">
                        ✕
                    </button>

                    <div className="modal-header">
                        <div className="modal-icon">
                            <service.icon size={56} strokeWidth={2} />
                        </div>
                        <h3 className="modal-title">{service.title}</h3>
                        <p className="modal-description">{service.description}</p>
                    </div>

                    <div className="modal-body">
                        <h4 className="services-list-title">Services Included:</h4>
                        <ul className="services-list">
                            {service.services.map((item, index) => (
                                <motion.li
                                    key={index}
                                    className="service-item"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ delay: index * 0.05 }}
                                >
                                    <span className="service-bullet">✓</span>
                                    {item}
                                </motion.li>
                            ))}
                        </ul>
                    </div>

                    <div className="modal-footer">
                        <button className="btn btn-primary" onClick={onClose}>
                            Got it!
                        </button>
                    </div>
                </motion.div>
            </motion.div>
        </AnimatePresence>
    );
};

export default ServiceModal;
