import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaWhatsapp, FaCalendarAlt, FaClock } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const WHATSAPP_NUMBER = '2347015136111';

export default function BookViewing() {
    const { t } = useLanguage();
    const { theme } = useTheme();
    const isLight = theme === 'light';

    const text = t.book;

    const [form, setForm] = useState({
        name: '',
        car: '',
        date: '',
        time: '',
        budget: '',
        tradeIn: text.tradeInNo,
        discovery: 'tiktok',
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
        if (error) setError('');
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Validate all fields (budget is optional)
        if (!form.name || !form.car || !form.date || !form.time || !form.discovery) {
            setError(text.required);
            return;
        }

        const msg = text.whatsappMsg(
            form.name,
            form.car,
            form.date,
            form.time,
            form.budget,
            form.tradeIn,
            text.discoveryOptions[form.discovery]
        );
        window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`, '_blank');
    };

    return (
        <section
            id="book"
            className={`section-padding relative overflow-hidden ${isLight ? 'bg-white' : 'bg-[#0A0A0F]'
                }`}
        >
            {/* Background accent */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent" />
            <div className="absolute top-20 right-0 w-96 h-96 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container-app">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Left — Info Panel */}
                    <motion.div
                        className="flex-1"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                    >
                        <span className="section-label">{text.label}</span>
                        <h2 className={`section-title mt-2 mb-6 ${isLight ? 'text-gray-900' : 'text-white'}`}>
                            {text.title}
                        </h2>
                        <div className="gold-divider w-24 mb-8" />

                        <p className={`font-rajdhani text-lg leading-relaxed mb-6 ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>
                            Ready to see your dream car in person? Book a private viewing at our showroom in Abuja's Central Business District. We're open 24 hours, 7 days a week.
                        </p>

                        {/* Features */}
                        {[
                            '🏠 Private showroom experience',
                            '⏰ Open 24 hours, 7 days a week',
                            '💼 No pressure, no hidden fees',
                            '✅ 40% deposit to secure your car',
                            '🚗 Test drive available',
                        ].map((item) => (
                            <div key={item} className="flex items-center gap-3 mb-3">
                                <span className="text-lg">{item.split(' ')[0]}</span>
                                <span className={`font-rajdhani font-600 text-base ${isLight ? 'text-gray-700' : 'text-gray-300'}`}>
                                    {item.slice(item.indexOf(' ') + 1)}
                                </span>
                            </div>
                        ))}

                        {/* Contact info */}
                        <div
                            className={`mt-8 p-5 rounded-xl border ${isLight
                                ? 'bg-yellow-50 border-yellow-200'
                                : 'bg-yellow-900/10 border-yellow-900/30'
                                }`}
                        >
                            <div className={`font-orbitron text-sm font-bold mb-2 ${isLight ? 'text-yellow-700' : 'text-yellow-400'}`}>
                                📍 SHOWROOM ADDRESS
                            </div>
                            <p className={`font-rajdhani text-base ${isLight ? 'text-gray-700' : 'text-gray-300'}`}>
                                Plot 108B off Muhammadu Buhari Way,<br />
                                Central Business District, Abuja
                            </p>
                        </div>
                    </motion.div>

                    {/* Right — Form */}
                    <motion.div
                        className="flex-1 w-full"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: '-60px' }}
                        transition={{ duration: 0.7, ease: 'easeOut' }}
                    >
                        <div
                            className={`rounded-2xl p-6 md:p-8 border ${isLight
                                ? 'bg-gray-50 border-yellow-200'
                                : 'bg-[#16161E] border-yellow-900/30'
                                }`}
                        >
                            <form onSubmit={handleSubmit} className="flex flex-col gap-4" noValidate>
                                {/* Name */}
                                <div>
                                    <label
                                        className={`block font-rajdhani font-700 text-sm uppercase tracking-wide mb-1.5 ${isLight ? 'text-gray-700' : 'text-gray-300'
                                            }`}
                                    >
                                        {text.namePlaceholder} *
                                    </label>
                                    <input
                                        type="text"
                                        name="name"
                                        value={form.name}
                                        onChange={handleChange}
                                        placeholder={text.namePlaceholder}
                                        className={`form-input ${isLight ? 'light' : ''}`}
                                        style={isLight ? { background: 'white', color: '#1A1A2E' } : {}}
                                    />
                                </div>

                                {/* Car type */}
                                <div>
                                    <label
                                        className={`block font-rajdhani font-700 text-sm uppercase tracking-wide mb-1.5 ${isLight ? 'text-gray-700' : 'text-gray-300'
                                            }`}
                                    >
                                        {text.carPlaceholder} *
                                    </label>
                                    <input
                                        type="text"
                                        name="car"
                                        value={form.car}
                                        onChange={handleChange}
                                        placeholder={text.carPlaceholder}
                                        className={`form-input ${isLight ? 'light' : ''}`}
                                        style={isLight ? { background: 'white', color: '#1A1A2E' } : {}}
                                    />
                                </div>

                                {/* Budget (Optional) */}
                                <div>
                                    <label
                                        className={`block font-rajdhani font-700 text-sm uppercase tracking-wide mb-1.5 ${isLight ? 'text-gray-700' : 'text-gray-300'
                                            }`}
                                    >
                                        {text.budgetPlaceholder}
                                    </label>
                                    <input
                                        type="text"
                                        name="budget"
                                        value={form.budget}
                                        onChange={handleChange}
                                        placeholder="e.g. 50M - 100M"
                                        className={`form-input ${isLight ? 'light' : ''}`}
                                        style={isLight ? { background: 'white', color: '#1A1A2E' } : {}}
                                    />
                                </div>

                                {/* Date & Time row */}
                                <div className="flex gap-3">
                                    <div className="flex-1">
                                        <label
                                            className={`block font-rajdhani font-700 text-sm uppercase tracking-wide mb-1.5 ${isLight ? 'text-gray-700' : 'text-gray-300'
                                                }`}
                                        >
                                            <FaCalendarAlt className="inline mr-1" size={12} />
                                            {text.datePlaceholder} *
                                        </label>
                                        <input
                                            type="date"
                                            name="date"
                                            value={form.date}
                                            onChange={handleChange}
                                            className={`form-input ${isLight ? 'light' : ''}`}
                                            style={isLight ? { background: 'white', color: '#1A1A2E' } : { colorScheme: 'dark' }}
                                        />
                                    </div>
                                    <div className="flex-1">
                                        <label
                                            className={`block font-rajdhani font-700 text-sm uppercase tracking-wide mb-1.5 ${isLight ? 'text-gray-700' : 'text-gray-300'
                                                }`}
                                        >
                                            <FaClock className="inline mr-1" size={12} />
                                            {text.timePlaceholder} *
                                        </label>
                                        <input
                                            type="time"
                                            name="time"
                                            value={form.time}
                                            onChange={handleChange}
                                            className={`form-input ${isLight ? 'light' : ''}`}
                                            style={isLight ? { background: 'white', color: '#1A1A2E' } : { colorScheme: 'dark' }}
                                        />
                                    </div>
                                </div>

                                {/* Trade-in & Discovery Source */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-2">
                                    {/* Trade-in radio */}
                                    <div>
                                        <label className={`block font-rajdhani font-700 text-sm uppercase tracking-wide mb-2 ${isLight ? 'text-gray-700' : 'text-gray-300'}`}>
                                            {text.tradeInLabel}
                                        </label>
                                        <div className="flex gap-4">
                                            {[text.tradeInNo, text.tradeInYes].map((opt) => (
                                                <label key={opt} className="flex items-center gap-2 cursor-pointer">
                                                    <input
                                                        type="radio"
                                                        name="tradeIn"
                                                        value={opt}
                                                        checked={form.tradeIn === opt}
                                                        onChange={handleChange}
                                                        className="accent-yellow-500"
                                                    />
                                                    <span className={`font-rajdhani text-sm ${isLight ? 'text-gray-600' : 'text-gray-400'}`}>
                                                        {opt}
                                                    </span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Discovery select */}
                                    <div>
                                        <label className={`block font-rajdhani font-700 text-sm uppercase tracking-wide mb-1.5 ${isLight ? 'text-gray-700' : 'text-gray-300'}`}>
                                            {text.discoveryLabel} *
                                        </label>
                                        <select
                                            name="discovery"
                                            value={form.discovery}
                                            onChange={handleChange}
                                            className={`form-input ${isLight ? 'light' : ''}`}
                                            style={isLight ? { background: 'white', color: '#1A1A2E' } : { background: '#111118' }}
                                        >
                                            {Object.keys(text.discoveryOptions).map((key) => (
                                                <option key={key} value={key}>
                                                    {text.discoveryOptions[key]}
                                                </option>
                                            ))}
                                        </select>
                                    </div>
                                </div>

                                {/* Error Message */}
                                {error && (
                                    <div className="text-red-400 font-rajdhani text-sm bg-red-500/10 border border-red-500/30 rounded-lg px-4 py-3">
                                        ⚠️ {error}
                                    </div>
                                )}

                                {/* Submit */}
                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02, y: -2 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="btn-gold w-full flex items-center justify-center gap-2 mt-2 relative z-10 py-4"
                                >
                                    <FaWhatsapp size={18} />
                                    {text.submit}
                                </motion.button>
                            </form>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
