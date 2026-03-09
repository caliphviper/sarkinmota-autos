import { motion } from 'framer-motion';
import {
    FaMapMarkerAlt,
    FaPhone,
    FaEnvelope,
    FaClock,
    FaTiktok,
    FaInstagram,
    FaFacebook,
    FaWhatsapp,
} from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const socialLinks = [
    {
        icon: <FaTiktok size={20} />,
        label: 'TikTok',
        handle: '@alamin_sarkinmota',
        url: 'https://www.tiktok.com/@alamin_sarkinmota',
        color: '#C9940C',
    },
    {
        icon: <FaInstagram size={20} />,
        label: 'Instagram',
        handle: '@sarkinmota_cars',
        url: 'https://www.instagram.com/sarkinmota_cars',
        color: '#E1306C',
    },
    {
        icon: <FaFacebook size={20} />,
        label: 'Facebook',
        handle: 'Sarkinmotacars',
        url: 'https://www.facebook.com/Sarkinmotacars',
        color: '#1877F2',
    },
    {
        icon: <FaWhatsapp size={20} />,
        label: 'WhatsApp',
        handle: '+234 701 513 6111',
        url: 'https://wa.me/2347015136111',
        color: '#25D366',
    },
];

export default function Contact() {
    const { t } = useLanguage();
    const { theme } = useTheme();
    const isLight = theme === 'light';

    const text = t.contact;

    return (
        <section
            id="contact"
            className={`section-padding relative overflow-hidden ${isLight ? 'bg-white' : 'bg-[#0A0A0F]'
                }`}
        >
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent" />
            <div className="absolute bottom-0 right-0 w-96 h-96 bg-yellow-500/4 rounded-full blur-3xl pointer-events-none" />

            <div className="container-app">
                {/* Header */}
                <div className="text-center mb-14">
                    <span className="section-label">{text.label}</span>
                    <h2 className={`section-title mt-2 ${isLight ? 'text-gray-900' : 'text-white'}`}>
                        {text.title}
                    </h2>
                    <div className="gold-divider w-24 mx-auto mt-4" />
                </div>

                <div className="flex flex-col lg:flex-row gap-8">
                    {/* Left — Map */}
                    <motion.div
                        className="flex-1"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                    >
                        <div
                            className={`rounded-2xl overflow-hidden border ${isLight ? 'border-yellow-200' : 'border-yellow-900/30'
                                }`}
                            style={{ height: '380px' }}
                        >
                            {/* Google Maps embed for Central Business District, Abuja */}
                            <iframe
                                title="Sarkinmota Autos Location"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.8437959726!2d7.489!3d9.057!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x104e0bb8b01a3f6b%3A0x71e8d7cb4c1e264a!2sCentral%20Business%20District%2C%20Abuja%2C%20Federal%20Capital%20Territory!5e0!3m2!1sen!2sng!4v1710000000000!5m2!1sen!2sng"
                                width="100%"
                                height="100%"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            />
                        </div>
                    </motion.div>

                    {/* Right — Contact Info */}
                    <motion.div
                        className="flex-1 flex flex-col gap-5"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                    >
                        {/* Address */}
                        <div
                            className={`flex items-start gap-4 p-4 rounded-xl border ${isLight
                                ? 'bg-yellow-50 border-yellow-100'
                                : 'bg-white/4 border-yellow-900/20'
                                }`}
                        >
                            <FaMapMarkerAlt
                                className="flex-shrink-0 mt-1"
                                style={{ color: '#D4AF37', fontSize: '1.3rem' }}
                            />
                            <div>
                                <div
                                    className={`font-orbitron font-bold text-xs mb-1 tracking-widest uppercase ${isLight ? 'text-yellow-700' : 'text-yellow-500'
                                        }`}
                                >
                                    Address
                                </div>
                                <p className={`font-rajdhani text-base ${isLight ? 'text-gray-700' : 'text-gray-300'}`}>
                                    {text.address}
                                </p>
                            </div>
                        </div>

                        {/* Phone */}
                        <a
                            href={`tel:+2347015136111`}
                            className={`flex items-start gap-4 p-4 rounded-xl border no-underline transition-all duration-200 hover:border-yellow-500/50 ${isLight
                                ? 'bg-yellow-50 border-yellow-100 hover:bg-yellow-100'
                                : 'bg-white/4 border-yellow-900/20 hover:bg-white/6'
                                }`}
                        >
                            <FaPhone
                                className="flex-shrink-0 mt-1"
                                style={{ color: '#D4AF37', fontSize: '1.1rem' }}
                            />
                            <div>
                                <div
                                    className={`font-orbitron font-bold text-xs mb-1 tracking-widest uppercase ${isLight ? 'text-yellow-700' : 'text-yellow-500'
                                        }`}
                                >
                                    Phone
                                </div>
                                <p className={`font-rajdhani text-base font-600 ${isLight ? 'text-gray-800' : 'text-gray-200'}`}>
                                    {text.phone}
                                </p>
                            </div>
                        </a>

                        {/* Email */}
                        <a
                            href={`mailto:${text.email}`}
                            className={`flex items-start gap-4 p-4 rounded-xl border no-underline transition-all duration-200 hover:border-yellow-500/50 ${isLight
                                ? 'bg-yellow-50 border-yellow-100 hover:bg-yellow-100'
                                : 'bg-white/4 border-yellow-900/20 hover:bg-white/6'
                                }`}
                        >
                            <FaEnvelope
                                className="flex-shrink-0 mt-1"
                                style={{ color: '#D4AF37', fontSize: '1.1rem' }}
                            />
                            <div>
                                <div
                                    className={`font-orbitron font-bold text-xs mb-1 tracking-widest uppercase ${isLight ? 'text-yellow-700' : 'text-yellow-500'
                                        }`}
                                >
                                    Email
                                </div>
                                <p className={`font-rajdhani text-base font-600 ${isLight ? 'text-gray-800' : 'text-gray-200'}`}>
                                    {text.email}
                                </p>
                            </div>
                        </a>

                        {/* Hours */}
                        <div
                            className={`flex items-start gap-4 p-4 rounded-xl border ${isLight
                                ? 'bg-green-50 border-green-100'
                                : 'bg-green-900/10 border-green-900/20'
                                }`}
                        >
                            <FaClock
                                className="flex-shrink-0 mt-1"
                                style={{ color: '#22c55e', fontSize: '1.1rem' }}
                            />
                            <div className="flex items-center gap-3">
                                <div>
                                    <div
                                        className={`font-orbitron font-bold text-xs mb-1 tracking-widest uppercase ${isLight ? 'text-green-700' : 'text-green-400'
                                            }`}
                                    >
                                        Hours
                                    </div>
                                    <p className={`font-rajdhani text-base font-600 ${isLight ? 'text-gray-800' : 'text-gray-200'}`}>
                                        {text.hours}
                                    </p>
                                </div>
                                <div className="flex items-center gap-2">
                                    <span className="pulse-dot" />
                                    <span
                                        className={`font-rajdhani text-sm font-700 ${isLight ? 'text-green-600' : 'text-green-400'
                                            }`}
                                    >
                                        {text.hoursStatus}
                                    </span>
                                </div>
                            </div>
                        </div>

                        {/* Social Links */}
                        <div>
                            <div
                                className={`font-orbitron font-bold text-xs mb-3 tracking-widest uppercase ${isLight ? 'text-yellow-700' : 'text-yellow-500'
                                    }`}
                            >
                                {text.social}
                            </div>
                            <div className="flex gap-3 flex-wrap">
                                {socialLinks.map((s) => (
                                    <a
                                        key={s.label}
                                        href={s.url}
                                        target="_blank"
                                        rel="noreferrer"
                                        title={`${s.label}: ${s.handle}`}
                                        className={`flex items-center gap-2 px-4 py-2.5 rounded-xl border font-rajdhani font-600 text-sm no-underline transition-all duration-200 hover:scale-105 hover:shadow-lg cursor-pointer ${isLight
                                            ? 'bg-white border-gray-200 text-gray-800 hover:border-yellow-300'
                                            : 'bg-white/6 border-white/10 text-gray-300 hover:border-white/20'
                                            }`}
                                        style={{ '--hover-shadow': `0 8px 20px ${s.color}33` }}
                                    >
                                        <span style={{ color: s.color }}>{s.icon}</span>
                                        <span className="hidden sm:inline">{s.handle}</span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
