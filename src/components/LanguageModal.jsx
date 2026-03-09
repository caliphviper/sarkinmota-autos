import { motion, AnimatePresence } from 'framer-motion';
import { FaCrown } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

export default function LanguageModal() {
    const { selectLanguage, showModal } = useLanguage();
    const { theme } = useTheme();
    const isLight = theme === 'light';

    return (
        <AnimatePresence>
            {showModal && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
                >
                    <motion.div
                        initial={{ scale: 0.9, y: 20, opacity: 0 }}
                        animate={{ scale: 1, y: 0, opacity: 1 }}
                        transition={{ type: 'spring', damping: 25, stiffness: 300 }}
                        className={`w-full max-w-lg rounded-3xl overflow-hidden border border-yellow-500/30 shadow-2xl shadow-yellow-500/10 ${isLight ? 'bg-white' : 'bg-[#111118]'
                            }`}
                    >
                        {/* Header / Logo Section */}
                        <div className="relative h-48 flex flex-col items-center justify-center bg-gradient-to-b from-yellow-500/10 to-transparent">
                            <div className="absolute top-0 left-0 w-full h-full grid-bg opacity-20" />
                            <motion.div
                                initial={{ rotate: -10, scale: 0.8 }}
                                animate={{ rotate: 0, scale: 1 }}
                                transition={{ duration: 0.5, delay: 0.2 }}
                                className="text-yellow-400 text-5xl mb-4 relative z-10"
                            >
                                <FaCrown />
                            </motion.div>
                            <h1 className="font-orbitron font-900 text-2xl gold-text tracking-widest relative z-10">
                                SARKINMOTA
                            </h1>
                            <p className={`font-rajdhani text-sm font-600 tracking-[0.3em] uppercase ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>
                                AUTOS
                            </p>
                        </div>

                        {/* Content Section */}
                        <div className="p-8 text-center pt-2">
                            <h2 className={`font-orbitron text-lg font-bold mb-8 ${isLight ? 'text-gray-800' : 'text-gray-100'}`}>
                                SELECT PREFERRED LANGUAGE
                            </h2>

                            <div className="flex flex-col gap-4">
                                {/* English Button */}
                                <button
                                    onClick={() => selectLanguage('en')}
                                    className="group relative flex items-center justify-between p-5 rounded-2xl border border-yellow-500/20 bg-yellow-500/5 hover:bg-yellow-500/10 hover:border-yellow-500/40 transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    <div className="flex items-center gap-4">
                                        <span className="text-2xl">🇬🇧</span>
                                        <div className="text-left">
                                            <div className="font-orbitron font-bold text-base gold-text">ENGLISH</div>
                                            <div className={`font-rajdhani text-xs ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>Continue in English Language</div>
                                        </div>
                                    </div>
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-yellow-500 font-bold">➔</div>
                                </button>

                                {/* Hausa Button */}
                                <button
                                    onClick={() => selectLanguage('ha')}
                                    className="group relative flex items-center justify-between p-5 rounded-2xl border border-yellow-500/20 bg-yellow-500/5 hover:bg-yellow-500/10 hover:border-yellow-500/40 transition-all duration-300 transform hover:-translate-y-1"
                                >
                                    <div className="flex items-center gap-4">
                                        <span className="text-2xl">🇳🇬</span>
                                        <div className="text-left">
                                            <div className="font-orbitron font-bold text-base gold-text text-amber-500">HAUSA</div>
                                            <div className={`font-rajdhani text-xs ${isLight ? 'text-gray-500' : 'text-gray-400'}`}>Ci gaba da Yaren Hausa</div>
                                        </div>
                                    </div>
                                    <div className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 text-yellow-500 font-bold">➔</div>
                                </button>
                            </div>

                            <p className={`mt-10 font-rajdhani text-xs italic ${isLight ? 'text-gray-400' : 'text-gray-600'}`}>
                                “My bratha, welcome to the King of Cars”
                            </p>
                        </div>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
