import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import sarkinmotaPhoto from '../assets/sarkinmota.jpeg';

const containerVariants = {
    hidden: {},
    visible: {
        transition: { staggerChildren: 0.18, delayChildren: 0.2 },
    },
};

const itemVariants = {
    hidden: { opacity: 0, y: 40 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

const carVariants = {
    hidden: { opacity: 0, x: 120 },
    visible: { opacity: 1, x: 0, transition: { duration: 1, ease: 'easeOut', delay: 0.5 } },
};

export default function Hero() {
    const { t } = useLanguage();
    const { theme } = useTheme();
    const isLight = theme === 'light';

    return (
        <section
            id="home"
            className={`relative min-h-screen flex flex-col items-stretch lg:flex-row lg:items-center overflow-hidden ${isLight ? 'bg-gray-50' : 'bg-[#0A0A0F]'
                }`}
        >
            {/* Animated Grid Background */}
            <div className="grid-bg" />

            {/* Gradient overlay */}
            <div
                className={`absolute inset-0 ${isLight
                    ? 'bg-gradient-to-br from-amber-50/60 via-transparent to-red-50/30'
                    : 'bg-gradient-to-br from-yellow-900/10 via-transparent to-red-900/10'
                    }`}
            />

            {/* Red accent glow */}
            <div className="absolute top-1/3 right-0 w-64 h-64 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
            <div className="absolute bottom-1/4 left-0 w-48 h-48 bg-yellow-500/10 rounded-full blur-3xl pointer-events-none" />

            <div className="container-app relative z-10 pt-27 md:pt-52 lg:pt-24 pb-12">
                <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
                    {/* Left Content */}
                    <motion.div
                        className="flex-1 text-center lg:text-left"
                        variants={containerVariants}
                        initial="hidden"
                        animate="visible"
                    >
                        {/* Crown label */}
                        <motion.div variants={itemVariants} className="flex items-center gap-2 justify-center lg:justify-start mb-4">
                            <div
                                className={`h-px w-10 ${isLight ? 'bg-yellow-600' : 'bg-yellow-400'}`}
                            />
                            <span className="section-label">
                                Aliyu Mohammad
                            </span>
                            <div
                                className={`h-px w-10 ${isLight ? 'bg-yellow-600' : 'bg-yellow-400'}`}
                            />
                        </motion.div>

                        {/* Main Title */}
                        <motion.h1
                            variants={itemVariants}
                            className={`section-title mb-4 ${isLight ? 'text-gray-900' : 'text-white'}`}
                            style={{ fontSize: 'clamp(1.6rem, 4.5vw, 3.6rem)' }}
                        >
                            {t.hero.title}
                        </motion.h1>

                        {/* Tagline */}
                        <motion.p
                            variants={itemVariants}
                            className="gold-text font-orbitron text-2xl md:text-3xl font-bold mb-3"
                        >
                            {t.hero.tagline}
                        </motion.p>

                        {/* Subtitle */}
                        <motion.p
                            variants={itemVariants}
                            className={`font-rajdhani text-lg md:text-xl font-500 mb-8 max-w-lg mx-auto lg:mx-0 ${isLight ? 'text-gray-600' : 'text-gray-400'
                                }`}
                        >
                            {t.hero.subtitle}
                        </motion.p>

                        {/* CTA Buttons */}
                        <motion.div
                            variants={itemVariants}
                            className="flex flex-wrap gap-4 justify-center lg:justify-start"
                        >
                            <a href="#book">
                                <button className="btn-gold relative z-10">
                                    {t.hero.ctaBook}
                                </button>
                            </a>
                            <a href="#cars">
                                <button className="btn-outline">
                                    {t.hero.ctaView}
                                </button>
                            </a>
                        </motion.div>

                        {/* Mini stats */}
                        <motion.div
                            variants={itemVariants}
                            className="flex gap-8 mt-10 justify-center lg:justify-start"
                        >
                            {[
                                { val: '1.5M+', label: 'TikTok' },
                                { val: '707K+', label: 'Instagram' },
                                { val: '40%', label: 'Initial Deposit' },
                            ].map((s) => (
                                <div key={s.label} className="text-center">
                                    <div className="gold-text font-orbitron font-bold text-xl">{s.val}</div>
                                    <div
                                        className={`font-rajdhani text-sm uppercase tracking-wide ${isLight ? 'text-gray-500' : 'text-gray-400'
                                            }`}
                                    >
                                        {s.label}
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                    {/* Right — Photo & Car */}
                    <div className="flex-1 flex flex-col items-center gap-6 relative">
                        {/* His photo */}
                        <motion.div
                            initial={{ opacity: 0, scale: 0.85 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                            className="relative"
                        >
                            <div className="relative rounded-2xl overflow-hidden border-2 border-yellow-500/30 gold-glow">
                                <img
                                    src={sarkinmotaPhoto}
                                    alt="Aliyu Mohammad — Sarkin Mota"
                                    className="w-72 md:w-96 h-auto object-cover rounded-2xl"
                                />
                                {/* Gold overlay gradient */}
                                <div className="absolute bottom-0 left-0 right-0 h-1/3 bg-gradient-to-t from-black/60 to-transparent" />
                            </div>

                            {/* Verified badge */}
                            <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
                                <span className="verified-badge">✓ Verified Dealer</span>
                            </div>
                        </motion.div>

                        {/* Car image sliding in */}
                        <motion.div
                            variants={carVariants}
                            initial="hidden"
                            animate="visible"
                            className="w-full max-w-xs"
                        >
                            {/* REPLACE WITH REAL IMAGE */}

                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Scroll indicator */}
            <motion.div
                className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1"
                animate={{ y: [0, 8, 0] }}
                transition={{ repeat: Infinity, duration: 1.8 }}
            >
                <div className={`w-px h-10 ${isLight ? 'bg-yellow-600' : 'bg-yellow-500'}`} />
                <div
                    className={`text-xs font-rajdhani tracking-widest uppercase ${isLight ? 'text-gray-500' : 'text-gray-500'
                        }`}
                >
                    Scroll
                </div>
            </motion.div>
        </section>
    );
}
