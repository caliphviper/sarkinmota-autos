import { motion } from 'framer-motion';
import { FaWhatsapp, FaCheckCircle } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { cars } from '../data/cars';

const WHATSAPP_NUMBER = '2347015136111';

export default function CarShowcase() {
    const { t } = useLanguage();
    const { theme } = useTheme();
    const isLight = theme === 'light';

    const text = t.cars;

    const handleInquire = (car) => {
        const msg = encodeURIComponent(text.whatsappMsg(car.name));
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
    };

    return (
        <section
            id="cars"
            className={`section-padding relative overflow-hidden ${isLight ? 'bg-gray-50' : 'bg-[#0D0D15]'
                }`}
        >
            {/* Top border */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent" />

            {/* Background glow accents */}
            <div className="absolute top-20 left-1/4 w-64 h-64 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-20 right-1/4 w-64 h-64 bg-red-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container-app">
                {/* Header */}
                <div className="text-center mb-14">
                    <span className="section-label">{text.label}</span>
                    <h2 className={`section-title mt-2 ${isLight ? 'text-gray-900' : 'text-white'}`}>
                        {text.title}
                    </h2>
                    <div className="gold-divider w-24 mx-auto mt-4" />
                    <p
                        className={`font-rajdhani text-lg mt-4 ${isLight ? 'text-gray-600' : 'text-gray-400'
                            }`}
                    >
                        Premium vehicles available with 40% initial deposit
                    </p>
                </div>

                {/* Cars Grid */}
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {cars.map((car, i) => (
                        <motion.div
                            key={car.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: '-60px' }}
                            transition={{ duration: 0.55, delay: i * 0.1, ease: 'easeOut' }}
                            className={`car-card gold-glow-hover ${isLight ? 'bg-white' : 'bg-[#16161E]'
                                }`}
                        >
                            {/* Image container */}
                            <div className="relative">
                                {/* REPLACE WITH REAL IMAGE */}
                                <img
                                    src={car.image}
                                    alt={car.name}
                                    className="w-full h-48 object-cover"
                                />

                                {/* SOLD overlay */}
                                {car.sold && (
                                    <div className="sold-overlay">
                                        <span className="sold-badge">{text.sold}</span>
                                    </div>
                                )}

                                {/* Condition badge */}
                                <div className="absolute top-3 left-3">
                                    <span
                                        className={`inline-flex items-center gap-1 px-3 py-1 rounded text-xs font-rajdhani font-700 uppercase tracking-wide ${car.conditionKey === 'conditionNew'
                                            ? 'bg-green-500 text-white'
                                            : 'bg-yellow-600 text-black'
                                            }`}
                                    >
                                        {car.conditionKey === 'conditionNew' ? (
                                            <FaCheckCircle size={10} />
                                        ) : null}
                                        {text[car.conditionKey]}
                                    </span>
                                </div>

                                {/* Model badge */}
                                <div className="absolute top-3 right-3">
                                    <span
                                        className="px-2 py-1 rounded text-xs font-orbitron font-bold"
                                        style={{ background: 'rgba(212,175,55,0.9)', color: '#0A0A0F' }}
                                    >
                                        {car.badge}
                                    </span>
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-4">
                                <h3
                                    className={`font-orbitron font-bold text-lg mb-1 ${isLight ? 'text-gray-900' : 'text-white'
                                        }`}
                                >
                                    {car.name}
                                </h3>
                                <p
                                    className={`font-rajdhani text-sm mb-3 ${isLight ? 'text-gray-500' : 'text-gray-400'
                                        }`}
                                >
                                    {car.model}
                                </p>

                                {/* Price */}
                                <div className="gold-text font-orbitron font-black text-xl mb-4">
                                    {car.price}
                                </div>


                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* CTA bottom */}
                <div className="text-center mt-12">
                    <p
                        className={`font-rajdhani text-lg mb-4 ${isLight ? 'text-gray-600' : 'text-gray-400'
                            }`}
                    >
                        Looking for something specific? We source any car you want.
                    </p>

                </div>
            </div>
        </section>
    );
}
