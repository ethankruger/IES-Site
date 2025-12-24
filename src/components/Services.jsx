import { useState } from 'react';
import { motion } from 'framer-motion';
import { Wrench, Zap, Search, TrendingUp, Plug, Plus } from 'lucide-react';
import ServiceModal from './ServiceModal';
import './Services.css';

const servicesData = [
    {
        id: 1,
        title: 'Maintenance',
        description: 'Keep your electrical systems running smoothly',
        icon: Wrench,
        image: '/images/services/maintenance.jpg',
        services: [
            'Maintain Power Outlets & Switches',
            'Electrical Connection Checks',
            'Electrical Damage Monitoring'
        ]
    },
    {
        id: 2,
        title: 'Trouble Shooting',
        description: 'Quick diagnosis and resolution of electrical issues',
        icon: Zap,
        image: '/images/services/troubleshooting.jpg',
        services: [
            'Loose Power Outlets',
            'Broken Light Switches',
            'Flickering or Dim Lights',
            'Burning Lightbulbs',
            'Dead Outlets',
            'Hot Electrical Components',
            'Tripping Breakers',
            'Sparks/Shocks',
            'Appliance Power Issues'
        ]
    },
    {
        id: 3,
        title: 'Home Electrical Inspections',
        description: 'Comprehensive electrical safety assessments',
        icon: Search,
        image: '/images/services/inspections.jpg',
        services: [
            'Electrical inspection for home buyers prior to purchase'
        ]
    },
    {
        id: 4,
        title: 'Upgrades',
        description: 'Modernize your electrical infrastructure',
        icon: TrendingUp,
        image: '/images/services/upgrades.jpg',
        services: [
            'LED Upgrades',
            'New Fixtures',
            'Update Receptacles & Switches',
            'GFCI (Ground Fault Circuit Interrupter) Install',
            'ARC Fault Breaker Install',
            'New Subpanels'
        ]
    },
    {
        id: 5,
        title: 'Installs',
        description: 'Professional installation services',
        icon: Plug,
        image: '/images/services/installs.jpg',
        services: [
            'Additional Lighting',
            'Additional Fixtures',
            'Charging Stations',
            'Appliance Plug-ins',
            'Subpanels'
        ]
    },
    {
        id: 6,
        title: 'More',
        description: 'Additional specialized services',
        icon: Plus,
        image: '/images/services/more.jpg',
        services: [
            'Circuit Mapping',
            'Panel Mapping & Labeling',
            'Coax & Ethernet'
        ]
    }
];

const Services = () => {
    const [selectedService, setSelectedService] = useState(null);

    return (
        <section className="services section" id="services">
            <div className="container">
                <motion.div
                    className="section-header"
                    initial={{ opacity: 0, y: 50, scale: 0.9 }}
                    whileInView={{ opacity: 1, y: 0, scale: 1 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                >
                    <h2 className="section-title">Our Services</h2>
                    <p className="section-subtitle">
                        Comprehensive electrical solutions for your home
                    </p>
                </motion.div>

                <motion.div
                    className="services-scroll-container"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                >
                    <div className="services-scroll">
                        {servicesData.map((service, index) => (
                            <motion.div
                                key={service.id}
                                className="service-card card"
                                initial={{ opacity: 0, x: -50, rotateY: -15 }}
                                whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                                viewport={{ once: true, margin: "-100px" }}
                                transition={{
                                    delay: index * 0.15,
                                    duration: 0.7,
                                    ease: [0.25, 0.46, 0.45, 0.94]
                                }}
                                whileHover={{
                                    y: -12,
                                    scale: 1.03,
                                    transition: { duration: 0.3 }
                                }}
                                onClick={() => setSelectedService(service)}
                            >
                                <div className="service-image" style={{ backgroundImage: `url(${service.image})` }}></div>
                                <div className="service-content">
                                    <div className="service-icon">
                                        <service.icon size={48} strokeWidth={2} />
                                    </div>
                                    <h3 className="service-title">{service.title}</h3>
                                    <p className="service-description">{service.description}</p>
                                    <div className="service-count">
                                        {service.services.length} service{service.services.length !== 1 ? 's' : ''}
                                    </div>
                                    <button className="service-btn">
                                        View Details →
                                    </button>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>

            <ServiceModal
                service={selectedService}
                onClose={() => setSelectedService(null)}
            />
        </section>
    );
};

export default Services;
