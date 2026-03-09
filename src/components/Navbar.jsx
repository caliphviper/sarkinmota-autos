import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaSun, FaMoon, FaBars, FaTimes } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import SarkinmotaLogo from './SarkinmotaLogo';

const navLinks = [
    { key: 'home', href: '#home' },
    { key: 'about', href: '#about' },
    { key: 'cars', href: '#cars' },
    { key: 'bookViewing', href: '#book' },
    { key: 'contact', href: '#contact' },
];

export default function Navbar() {
    const { lang, toggleLang, t } = useLanguage();
    const { theme, toggleTheme } = useTheme();
    const [scrolled, setScrolled] = useState(false);
    const [mobileOpen, setMobileOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 40);
        window.addEventListener('scroll', onScroll);
        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    const isLight = theme === 'light';

    const navBg = scrolled
        ? isLight
            ? 'bg-white/90 backdrop-blur-md shadow-md border-b border-amber-200'
            : 'bg-[#0A0A0F]/90 backdrop-blur-md shadow-lg border-b border-yellow-900/40'
        : 'bg-transparent';

    const textColor = isLight ? 'text-gray-800' : 'text-gray-100';

    return (
        <motion.nav
            initial={{ y: -80, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navBg}`}
        >
            <div className="container-app flex items-center justify-between py-4">
                {/* Logo */}
                <a href="#home" className="flex items-center gap-2 no-underline group">
                    <SarkinmotaLogo size={44} className="group-hover:scale-110 transition-transform duration-200" />
                    <div>
                        <div className="font-orbitron font-black text-base leading-tight gold-text tracking-wide">
                            SARKINMOTA
                        </div>
                        <div
                            className={`font-rajdhani text-xs font-600 tracking-widest uppercase ${isLight ? 'text-gray-500' : 'text-gray-400'}`}
                        >
                            AUTOS
                        </div>
                    </div>
                </a>

                {/* Desktop Links */}
                <div className={`hidden md:flex items-center gap-8 ${textColor}`}>
                    {navLinks.map((link) => (
                        <a key={link.key} href={link.href} className="nav-link">
                            {t.nav[link.key]}
                        </a>
                    ))}
                </div>

                {/* Controls */}
                <div className="flex items-center gap-3">
                    {/* Language Toggle - Desktop Only */}
                    <button
                        onClick={toggleLang}
                        className={`hidden md:flex font-orbitron text-xs font-bold px-3 py-1.5 rounded border transition-all duration-200 cursor-pointer
              ${isLight
                                ? 'border-yellow-600/50 text-yellow-700 hover:bg-yellow-50'
                                : 'border-yellow-600/40 text-yellow-400 hover:bg-yellow-900/20'
                            }`}
                    >
                        {lang === 'en' ? 'EN | HA' : 'HA | EN'}
                    </button>

                    {/* Theme Toggle */}
                    <button
                        onClick={toggleTheme}
                        aria-label="Toggle theme"
                        className={`w-9 h-9 rounded-full flex items-center justify-center cursor-pointer transition-all duration-200
              ${isLight
                                ? 'bg-gray-100 text-gray-700 hover:bg-yellow-50 hover:text-yellow-600'
                                : 'bg-white/10 text-yellow-300 hover:bg-white/20'
                            }`}
                    >
                        {isLight ? <FaMoon size={16} /> : <FaSun size={16} />}
                    </button>

                    {/* Mobile Hamburger */}
                    <button
                        onClick={() => setMobileOpen(!mobileOpen)}
                        className={`md:hidden w-9 h-9 rounded flex items-center justify-center cursor-pointer
              ${isLight ? 'text-gray-700' : 'text-gray-200'}`}
                    >
                        {mobileOpen ? <FaTimes size={18} /> : <FaBars size={18} />}
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {mobileOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.25 }}
                        className={`md:hidden overflow-hidden ${isLight ? 'bg-white border-t border-gray-100' : 'bg-[#0D0D15] border-t border-yellow-900/30'
                            }`}
                    >
                        <div className="container-app py-4 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <a
                                    key={link.key}
                                    href={link.href}
                                    onClick={() => setMobileOpen(false)}
                                    className={`nav-link text-lg ${isLight ? 'text-gray-800' : 'text-gray-100'}`}
                                >
                                    {t.nav[link.key]}
                                </a>
                            ))}

                            {/* Mobile Language Toggle */}
                            <div className="pt-4 mt-2 border-t border-yellow-900/20">
                                <button
                                    onClick={() => {
                                        toggleLang();
                                        setMobileOpen(false);
                                    }}
                                    className={`w-full flex items-center justify-between p-4 rounded-xl border font-orbitron text-sm font-bold
                    ${isLight
                                            ? 'bg-yellow-50 border-yellow-200 text-yellow-700'
                                            : 'bg-white/5 border-yellow-900/30 text-yellow-400'
                                        }`}
                                >
                                    <span>{lang === 'en' ? 'SWITCH TO HAUSA' : 'KOMA ZUWA TURANCI'}</span>
                                    <span className="text-xl">{lang === 'en' ? '🇳🇬' : '🇬🇧'}</span>
                                </button>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.nav>
    );
}
