import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
    const [lang, setLang] = useState(() => {
        return localStorage.getItem('sarkin-lang') || 'en';
    });

    useEffect(() => {
        localStorage.setItem('sarkin-lang', lang);
    }, [lang]);

    const t = translations[lang];

    const toggleLang = () => {
        setLang((prev) => (prev === 'en' ? 'ha' : 'en'));
    };

    return (
        <LanguageContext.Provider value={{ lang, toggleLang, t }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error('useLanguage must be inside LanguageProvider');
    return ctx;
}
