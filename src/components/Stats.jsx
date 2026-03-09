import { useRef, useState, useEffect } from 'react';
import { motion, useInView } from 'framer-motion';
import { FaTiktok, FaInstagram, FaFacebook } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const statsData = [
    {
        icon: <FaTiktok size={28} />,
        value: 1500000,
        display: '1.5M+',
        labelKey: 'tiktokFollowers',
        color: '#D4AF37',
        platform: 'TikTok',
    },
    {
        icon: <FaTiktok size={28} />,
        value: 52800000,
        display: '52.8M+',
        labelKey: 'tiktokLikes',
        color: '#E63946',
        platform: 'TikTok Likes',
    },
    {
        icon: <FaInstagram size={28} />,
        value: 707000,
        display: '707K+',
        labelKey: 'instaFollowers',
        color: '#D4AF37',
        platform: 'Instagram',
    },
    {
        icon: <FaFacebook size={28} />,
        value: 237000,
        display: '237K+',
        labelKey: 'fbLikes',
        color: '#D4AF37',
        platform: 'Facebook',
    },
];

function CountUp({ target, triggered }) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!triggered) return;
        let start = 0;
        const duration = 2000;
        const steps = 60;
        const increment = target / steps;
        const interval = duration / steps;

        const timer = setInterval(() => {
            start += increment;
            if (start >= target) {
                setCount(target);
                clearInterval(timer);
            } else {
                setCount(Math.floor(start));
            }
        }, interval);

        return () => clearInterval(timer);
    }, [triggered, target]);

    // Format the number
    const fmt = (n) => {
        if (n >= 1000000) return (n / 1000000).toFixed(1) + 'M+';
        if (n >= 1000) return Math.round(n / 1000) + 'K+';
        return n.toLocaleString();
    };

    return <span>{triggered ? fmt(count) : '0'}</span>;
}

export default function Stats() {
    const { t } = useLanguage();
    const { theme } = useTheme();
    const isLight = theme === 'light';
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: '-60px' });

    return (
        <section
            ref={ref}
            id="stats"
            className={`section-padding ${isLight ? 'bg-gray-100' : 'bg-[#0D0D15]'}`}
        >
            <div className="container-app">
                {/* Label */}
                <div className="text-center mb-12">
                    <span className="section-label">Social Presence</span>
                    <h2
                        className={`section-title mt-2 ${isLight ? 'text-gray-900' : 'text-white'}`}
                    >
                        By The Numbers
                    </h2>
                    <div className="gold-divider w-24 mx-auto mt-4" />
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                    {statsData.map((stat, i) => (
                        <motion.div
                            key={stat.labelKey}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: i * 0.12, ease: 'easeOut' }}
                            className={`stat-card glass-card`}
                            style={
                                isLight
                                    ? { background: 'rgba(255,255,255,0.85)', borderColor: 'rgba(212,175,55,0.35)' }
                                    : {}
                            }
                        >
                            {/* Icon */}
                            <div
                                className="mb-4 flex justify-center"
                                style={{ color: stat.color }}
                            >
                                {stat.icon}
                            </div>

                            {/* Number */}
                            <div
                                className="font-orbitron font-black text-2xl md:text-3xl mb-1"
                                style={{ color: stat.color }}
                            >
                                <CountUp target={stat.value} triggered={isInView} />
                            </div>

                            {/* Label */}
                            <div
                                className={`font-rajdhani font-600 text-sm uppercase tracking-wide ${isLight ? 'text-gray-600' : 'text-gray-400'
                                    }`}
                            >
                                {t.stats[stat.labelKey]}
                            </div>

                            {/* Platform tag */}
                            <div
                                className={`mt-2 text-xs font-rajdhani tracking-widest uppercase ${isLight ? 'text-gray-400' : 'text-gray-600'
                                    }`}
                            >
                                {stat.platform}
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
