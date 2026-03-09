import { useState } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';
import { checklistItems } from '../data/checklist';

export default function InspectionChecklist() {
    const { lang, t } = useLanguage();
    const { theme } = useTheme();
    const isLight = theme === 'light';

    const text = t.checklist;

    const handleDownload = () => {
        const content = checklistItems.map((item) => {
            const d = item[lang] || item.en;
            return `${item.icon} ${d.title}\n   ${d.desc}\n`;
        }).join('\n');

        const html = `<!DOCTYPE html>
<html>
<head>
  <title>Sarkinmota Autos — Car Inspection Checklist</title>
  <style>
    body { font-family: Arial, sans-serif; max-width: 700px; margin: 40px auto; padding: 20px; color: #1a1a2e; }
    h1 { color: #D4AF37; border-bottom: 3px solid #D4AF37; padding-bottom: 10px; }
    .header { text-align: center; margin-bottom: 30px; }
    .subtitle { color: #666; font-size: 14px; }
    .item { display: flex; align-items: flex-start; gap: 16px; padding: 16px; border: 1px solid #e0e0d0; border-radius: 8px; margin-bottom: 12px; }
    .icon { font-size: 28px; flex-shrink: 0; }
    .title { font-weight: bold; font-size: 16px; color: #1a1a2e; margin-bottom: 6px; }
    .desc { font-size: 14px; color: #555; line-height: 1.5; }
    .footer { text-align: center; margin-top: 40px; color: #666; font-size: 12px; border-top: 1px solid #e0e0d0; padding-top: 16px; }
    .brand { color: #D4AF37; font-weight: bold; }
  </style>
</head>
<body>
  <div class="header">
    <h1>🏎️ Car Inspection Checklist</h1>
    <p class="subtitle">By <span class="brand">Sarkinmota Autos</span> — Nigeria's Leading Luxury Auto Dealership</p>
    <p class="subtitle">${text.subtitle}</p>
  </div>
  ${checklistItems.map((item, i) => {
            const d = item[lang] || item.en;
            return `<div class="item">
    <div class="icon">${item.icon}</div>
    <div>
      <div class="title">${i + 1}. ${d.title}</div>
      <div class="desc">${d.desc}</div>
    </div>
  </div>`;
        }).join('\n  ')}
  <div class="footer">
    <p><strong class="brand">Sarkinmota Autos</strong> | Plot 108B off Muhammadu Buhari Way, CBD, Abuja</p>
    <p>📞 070 1513 6111 | WhatsApp: +234 701 513 6111 | ✉️ alaminsarkinmota@gmail.com</p>
    <p>@alamin_sarkinmota (TikTok) | @sarkinmota_cars (Instagram)</p>
    <p style="color:#D4AF37; margin-top:12px;">"My bratha," — Sarkin Motochin Kasar Hausa</p>
  </div>
</body>
</html>`;

        const blob = new Blob([html], { type: 'text/html' });
        const url = URL.createObjectURL(blob);
        const a = document.createElement('a');
        a.href = url;
        a.download = 'sarkinmota-inspection-checklist.html';
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
        URL.revokeObjectURL(url);
    };

    return (
        <section
            id="checklist"
            className={`section-padding relative overflow-hidden ${isLight ? 'bg-gray-50' : 'bg-[#0D0D15]'
                }`}
        >
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-yellow-500/40 to-transparent" />
            <div className="absolute bottom-10 left-10 w-80 h-80 bg-yellow-500/4 rounded-full blur-3xl pointer-events-none" />

            <div className="container-app">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="section-label">{text.label}</span>
                    <h2 className={`section-title mt-2 ${isLight ? 'text-gray-900' : 'text-white'}`}>
                        {text.title}
                    </h2>
                    <div className="gold-divider w-24 mx-auto mt-4" />
                    <p
                        className={`font-rajdhani text-lg mt-4 max-w-xl mx-auto ${isLight ? 'text-gray-600' : 'text-gray-400'
                            }`}
                    >
                        {text.subtitle}
                    </p>
                </div>

                {/* Checklist Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
                    {checklistItems.map((item, i) => {
                        const d = item[lang] || item.en;
                        return (
                            <motion.div
                                key={item.id}
                                initial={{ opacity: 0, y: 30 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: '-40px' }}
                                transition={{ duration: 0.5, delay: i * 0.07, ease: 'easeOut' }}
                                className={`checklist-item ${isLight
                                        ? 'bg-white border-yellow-100'
                                        : 'bg-[#16161E]/60'
                                    }`}
                            >
                                {/* Number + Icon */}
                                <div className="flex-shrink-0 flex flex-col items-center">
                                    <span className="text-2xl">{item.icon}</span>
                                    <span
                                        className={`font-orbitron font-black text-xs mt-1 ${isLight ? 'text-yellow-600' : 'text-yellow-600'
                                            }`}
                                    >
                                        {String(i + 1).padStart(2, '0')}
                                    </span>
                                </div>

                                {/* Content */}
                                <div>
                                    <h4
                                        className={`font-rajdhani font-700 text-base mb-0.5 ${isLight ? 'text-gray-900' : 'text-white'
                                            }`}
                                    >
                                        {d.title}
                                    </h4>
                                    <p
                                        className={`font-rajdhani text-sm leading-relaxed ${isLight ? 'text-gray-600' : 'text-gray-400'
                                            }`}
                                    >
                                        {d.desc}
                                    </p>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>

                {/* Download Button */}
                <div className="text-center">
                    <motion.button
                        onClick={handleDownload}
                        whileHover={{ scale: 1.04, y: -2 }}
                        whileTap={{ scale: 0.97 }}
                        className="btn-gold inline-flex items-center gap-2"
                    >
                        ⬇️ {text.download}
                    </motion.button>
                    <p
                        className={`font-rajdhani text-sm mt-3 ${isLight ? 'text-gray-500' : 'text-gray-500'
                            }`}
                    >
                        Downloads as a printable HTML file
                    </p>
                </div>
            </div>
        </section>
    );
}
