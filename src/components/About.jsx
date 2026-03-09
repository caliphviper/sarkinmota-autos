import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import sarkinmotaSuite from '../assets/sarkinmotasuite.jpeg';


const slideLeft = {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

const slideRight = {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: 'easeOut' } },
};

export default function About() {
    const { t } = useLanguage();
    const { theme } = useTheme();
    const isLight = theme === 'light';

    const text = t.about;

    return (
        <section
            id="about"
            className={`section-padding relative overflow-hidden ${isLight ? 'bg-white' : 'bg-[#0A0A0F]'
                }`}
        >
            {/* Background accent */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-yellow-500/50 to-transparent" />
            <div className="absolute top-0 right-0 w-80 h-80 bg-yellow-500/5 rounded-full blur-3xl pointer-events-none" />

            <div className="container-app">
                {/* Section Header */}
                <div className="text-center mb-14">
                    <span className="section-label">{text.label}</span>
                    <h2 className={`section-title mt-2 ${isLight ? 'text-gray-900' : 'text-white'}`}>
                        {text.title}
                    </h2>
                    <div className="gold-divider w-24 mx-auto mt-4" />
                </div>

                <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
                    {/* Left — Photo with badge */}
                    <motion.div
                        className="flex-1 flex justify-center relative"
                        variants={slideLeft}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                    >
                        <div className="relative">
                            {/* Decorative gold border frame */}
                            <div
                                className="absolute -inset-3 rounded-2xl border border-yellow-500/20 z-0"
                                style={{ transform: 'rotate(3deg)' }}
                            />
                            <div
                                className="absolute -inset-6 rounded-2xl border border-red-500/10 z-0"
                                style={{ transform: 'rotate(-2deg)' }}
                            />

                            {/* Photo */}
                            <div className="relative z-10 rounded-2xl overflow-hidden border border-yellow-500/30 gold-glow">
                                <img
                                    src={sarkinmotaSuite}
                                    alt="Sarkin Mota — Aliyu Mohammad"
                                    className="w-72 md:w-80 h-auto object-cover"
                                />
                                <div className="absolute bottom-0 left-0 right-0 h-1/4 bg-gradient-to-t from-black/70 to-transparent" />
                            </div>

                            {/* Verified badge - overlaid */}
                            <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 z-20">
                                <span className="verified-badge text-xs shadow-lg">
                                    ✓ Verified Dealer
                                </span>
                            </div>

                            {/* Stats pills */}
                            <div className="absolute -right-4 top-8 z-20">
                                <div
                                    className={`rounded-xl px-3 py-2 text-center border shadow-lg ${isLight
                                        ? 'bg-white border-yellow-300'
                                        : 'bg-[#16161E] border-yellow-700/40'
                                        }`}
                                >
                                    <div className="gold-text font-orbitron font-bold text-lg">10+</div>
                                    <div
                                        className={`font-rajdhani text-xs uppercase ${isLight ? 'text-gray-500' : 'text-gray-400'
                                            }`}
                                    >
                                        {text.experience}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Right — Text */}
                    <motion.div
                        className="flex-1"
                        variants={slideRight}
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: '-80px' }}
                    >
                        <p
                            className={`font-rajdhani text-lg leading-relaxed mb-4 ${isLight ? 'text-gray-700' : 'text-gray-300'
                                }`}
                        >
                            {text.p1}
                        </p>
                        <p
                            className={`font-rajdhani text-lg leading-relaxed mb-4 ${isLight ? 'text-gray-700' : 'text-gray-300'
                                }`}
                        >
                            {text.p2}
                        </p>
                        <p
                            className={`font-rajdhani text-lg leading-relaxed mb-8 ${isLight ? 'text-gray-700' : 'text-gray-300'
                                }`}
                        >
                            {text.p3}
                        </p>

                        {/* Quote block */}
                        <blockquote
                            className={`relative pl-6 py-4 pr-4 rounded-r-xl border-l-4 border-yellow-500 mb-8 ${isLight
                                ? 'bg-yellow-50 text-gray-800'
                                : 'bg-yellow-900/10 text-gray-200'
                                }`}
                        >
                            <div className="text-yellow-400 text-4xl font-serif absolute -top-2 left-4 opacity-30">"</div>
                            <p className="font-rajdhani text-lg font-600 italic relative z-10">
                                {text.quote}
                            </p>
                            <div
                                className={`mt-2 font-orbitron text-xs font-bold tracking-widest uppercase ${isLight ? 'text-yellow-700' : 'text-yellow-500'
                                    }`}
                            >
                                — Aliyu Mohammad, Sarkin Mota
                            </div>
                        </blockquote>

                        {/* Achievement pills */}
                        <div className="flex flex-wrap gap-4">
                            {[
                                { val: '10+', label: text.experience },
                                { val: '500+', label: text.happyClients },
                                { val: '1000+', label: text.carsDelivered },
                            ].map((item) => (
                                <div
                                    key={item.label}
                                    className={`flex flex-col items-center px-5 py-3 rounded-xl border ${isLight
                                        ? 'bg-white border-yellow-200 shadow-sm'
                                        : 'bg-white/5 border-yellow-900/30'
                                        }`}
                                >
                                    <div className="gold-text font-orbitron font-black text-2xl">{item.val}</div>
                                    <div
                                        className={`font-rajdhani text-xs uppercase tracking-wide ${isLight ? 'text-gray-500' : 'text-gray-400'
                                            }`}
                                    >
                                        {item.label}
                                    </div>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
