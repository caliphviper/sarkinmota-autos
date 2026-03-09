import { createContext, useContext, useState, useEffect } from 'react';
import { translations } from '../data/translations';

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
    const [lang, setLang] = useState(() => {
        return localStorage.getItem('sarkin-lang') || 'en';
    });

    const [showModal, setShowModal] = useState(() => {
        return !localStorage.getItem('sarkin-lang');
    });

    useEffect(() => {
        localStorage.setItem('sarkin-lang', lang);
    }, [lang]);

    const t = translations[lang];

    const selectLanguage = (selectedLang) => {
        setLang(selectedLang);
        setShowModal(false);
    };

    const toggleLang = () => {
        setLang((prev) => (prev === 'en' ? 'ha' : 'en'));
    };

    return (
        <LanguageContext.Provider value={{ lang, toggleLang, selectLanguage, t, showModal }}>
            {children}
        </LanguageContext.Provider>
    );
}

export function useLanguage() {
    const ctx = useContext(LanguageContext);
    if (!ctx) throw new Error('useLanguage must be inside LanguageProvider');
    return ctx;
}
