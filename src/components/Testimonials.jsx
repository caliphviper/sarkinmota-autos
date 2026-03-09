import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

export default function Testimonials() {
    const { t } = useLanguage();
    const { theme } = useTheme();
    const isLight = theme === 'light';
    const trackRef = useRef(null);
    const animRef = useRef(null);
    const posRef = useRef(0);

    const text = t.testimonials;
    const items = text.items;

    // Auto-scroll animation
    useEffect(() => {
        const track = trackRef.current;
        if (!track) return;

        const scrollWidth = track.scrollWidth / 2;
        let speed = 0.5;
        let paused = false;

        const animate = () => {
            if (!paused) {
                posRef.current -= speed;
                if (Math.abs(posRef.current) >= scrollWidth) {
                    posRef.current = 0;
                }
                track.style.transform = `translateX(${posRef.current}px)`;
            }
            animRef.current = requestAnimationFrame(animate);
        };

        animRef.current = requestAnimationFrame(animate);

        const handleMouseEnter = () => { paused = true; };
        const handleMouseLeave = () => { paused = false; };

        track.addEventListener('mouseenter', handleMouseEnter);
        track.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            cancelAnimationFrame(animRef.current);
            track.removeEventListener('mouseenter', handleMouseEnter);
            track.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [items]);

    // Double the items for seamless loop
    const doubled = [...items, ...items];

    return (
        <section
            id="testimonials"
            className={`section-padding relative overflow-hidden ${isLight ? 'bg-gray-50' : 'bg-[#0D0D15]'
                }`}
        >
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent" />
            <div className="absolute top-0 left-0 right-0 bottom-0 grid-bg opacity-20" />

            <div className="relative z-10">
                {/* Header */}
                <div className="container-app text-center mb-12">
                    <span className="section-label">{text.label}</span>
                    <h2 className={`section-title mt-2 ${isLight ? 'text-gray-900' : 'text-white'}`}>
                        {text.title}
                    </h2>
                    <div className="gold-divider w-24 mx-auto mt-4" />
                </div>

                {/* Scrolling Carousel */}
                <div className="overflow-hidden">
                    <div
                        ref={trackRef}
                        className="flex gap-5 will-change-transform"
                        style={{ width: 'max-content' }}
                    >
                        {doubled.map((item, i) => (
                            <motion.div
                                key={i}
                                className={`testimonial-card ${isLight ? 'glass-card-light' : ''}`}
                                style={{ minWidth: '300px', maxWidth: '320px' }}
                            >
                                {/* Quote icon */}
                                <FaQuoteLeft
                                    className="mb-3 opacity-30"
                                    style={{ color: '#D4AF37', fontSize: '1.4rem' }}
                                />

                                {/* Stars */}
                                <div className="flex gap-1 mb-3">
                                    {[...Array(5)].map((_, idx) => (
                                        <FaStar key={idx} className="star-gold" size={14} />
                                    ))}
                                </div>

                                {/* Quote */}
                                <p
                                    className={`font-rajdhani text-base leading-relaxed mb-4 flex-1 ${isLight ? 'text-gray-700' : 'text-gray-300'
                                        }`}
                                >
                                    "{item.quote}"
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-3 mt-auto pt-3 border-t border-yellow-900/20">
                                    <div
                                        className="w-10 h-10 rounded-full flex items-center justify-center font-orbitron font-bold text-sm"
                                        style={{ background: 'linear-gradient(135deg, #D4AF37, #A88C20)', color: '#0A0A0F' }}
                                    >
                                        {item.name.charAt(0)}
                                    </div>
                                    <div>
                                        <div
                                            className={`font-rajdhani font-700 text-sm ${isLight ? 'text-gray-900' : 'text-white'
                                                }`}
                                        >
                                            {item.name}
                                        </div>
                                        <div
                                            className={`font-rajdhani text-xs ${isLight ? 'text-gray-500' : 'text-gray-500'
                                                }`}
                                        >
                                            📍 {item.location}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
