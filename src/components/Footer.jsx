import { FaTiktok, FaInstagram, FaFacebook, FaWhatsapp, FaEnvelope, FaPhone } from 'react-icons/fa';
import SarkinmotaLogo from './SarkinmotaLogo';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

const quickLinks = [
    { labelKey: 'home', href: '#home' },
    { labelKey: 'about', href: '#about' },
    { labelKey: 'cars', href: '#cars' },
    { labelKey: 'bookViewing', href: '#book' },
    { labelKey: 'contact', href: '#contact' },
];

const socials = [
    {
        icon: <FaTiktok size={18} />,
        url: 'https://www.tiktok.com/@alamin_sarkinmota',
        label: 'TikTok',
        color: '#D4AF37',
    },
    {
        icon: <FaInstagram size={18} />,
        url: 'https://www.instagram.com/sarkinmota_cars',
        label: 'Instagram',
        color: '#E1306C',
    },
    {
        icon: <FaFacebook size={18} />,
        url: 'https://www.facebook.com/Sarkinmotacars',
        label: 'Facebook',
        color: '#1877F2',
    },
    {
        icon: <FaWhatsapp size={18} />,
        url: 'https://wa.me/2347015136111',
        label: 'WhatsApp',
        color: '#25D366',
    },
];

export default function Footer() {
    const { t } = useLanguage();
    const { theme } = useTheme();
    const isLight = theme === 'light';

    const footerText = t.footer;
    const navText = t.nav;

    return (
        <footer
            className={`relative pt-16 pb-8 ${isLight ? 'bg-gray-100 border-t border-gray-200' : 'bg-[#080810] border-t border-yellow-900/20'
                }`}
        >
            {/* Top gold line */}
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/60 to-transparent" />

            <div className="container-app">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
                    {/* Brand Column */}
                    <div>
                        <div className="flex items-center gap-2 mb-4">
                            <SarkinmotaLogo size={48} />
                            <div>
                                <div className="font-orbitron font-black text-lg gold-text tracking-wide">SARKINMOTA</div>
                                <div
                                    className={`font-rajdhani text-xs tracking-widest uppercase ${isLight ? 'text-gray-500' : 'text-gray-500'
                                        }`}
                                >
                                    AUTOS
                                </div>
                            </div>
                        </div>
                        <p
                            className={`font-rajdhani text-sm leading-relaxed mb-4 ${isLight ? 'text-gray-600' : 'text-gray-400'
                                }`}
                        >
                            {footerText.disclaimer}.<br />
                            Based in Abuja, Nigeria.
                        </p>
                        <p className="gold-text font-orbitron font-bold text-sm">
                            "{footerText.tagline}"
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4
                            className={`font-orbitron font-bold text-sm uppercase tracking-widest mb-5 ${isLight ? 'text-gray-800' : 'text-white'
                                }`}
                        >
                            {footerText.quickLinks}
                        </h4>
                        <ul className="flex flex-col gap-2.5">
                            {quickLinks.map((link) => (
                                <li key={link.labelKey}>
                                    <a
                                        href={link.href}
                                        className={`font-rajdhani text-sm font-600 no-underline flex items-center gap-2 group transition-all duration-200 ${isLight ? 'text-gray-600 hover:text-yellow-600' : 'text-gray-400 hover:text-yellow-400'
                                            }`}
                                    >
                                        <span className="w-4 h-px bg-yellow-500 group-hover:w-6 transition-all duration-200" />
                                        {navText[link.labelKey]}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Quick */}
                    <div>
                        <h4
                            className={`font-orbitron font-bold text-sm uppercase tracking-widest mb-5 ${isLight ? 'text-gray-800' : 'text-white'
                                }`}
                        >
                            {footerText.contact}
                        </h4>
                        <div className="flex flex-col gap-3">
                            <a
                                href="tel:+2347015136111"
                                className={`flex items-center gap-2 font-rajdhani text-sm font-600 no-underline transition-colors duration-200 ${isLight ? 'text-gray-600 hover:text-yellow-600' : 'text-gray-400 hover:text-yellow-400'
                                    }`}
                            >
                                <FaPhone size={12} className="text-yellow-500" />
                                070 1513 6111
                            </a>
                            <a
                                href="mailto:alaminsarkinmota@gmail.com"
                                className={`flex items-center gap-2 font-rajdhani text-sm font-600 no-underline transition-colors duration-200 ${isLight ? 'text-gray-600 hover:text-yellow-600' : 'text-gray-400 hover:text-yellow-400'
                                    }`}
                            >
                                <FaEnvelope size={12} className="text-yellow-500" />
                                alaminsarkinmota@gmail.com
                            </a>
                        </div>

                        {/* Social icons */}
                        <div className="flex gap-3 mt-6">
                            {socials.map((s) => (
                                <a
                                    key={s.label}
                                    href={s.url}
                                    target="_blank"
                                    rel="noreferrer"
                                    aria-label={s.label}
                                    className={`w-9 h-9 rounded-lg flex items-center justify-center no-underline transition-all duration-200 hover:scale-110 ${isLight
                                        ? 'bg-white border border-gray-200 text-gray-600 hover:border-yellow-400'
                                        : 'bg-white/8 border border-white/10 text-gray-400 hover:border-yellow-600/40'
                                        }`}
                                    style={{ color: s.color }}
                                >
                                    {s.icon}
                                </a>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Divider */}
                <hr className={`border-0 h-px mb-6 ${isLight ? 'bg-gray-200' : 'bg-white/8'}`} />

                {/* Bottom bar */}
                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 text-center">
                    <p className={`font-rajdhani text-sm ${isLight ? 'text-gray-500' : 'text-gray-500'}`}>
                        {footerText.copy}
                    </p>
                    <p className={`font-rajdhani text-sm ${isLight ? 'text-gray-500' : 'text-gray-500'}`}>
                        Built by{' '}
                        <a
                            href="https://www.instagram.com/iam.caliph/"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="gold-text font-700 hover:underline transition-all"
                        >
                            Bakhrsweb
                        </a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
