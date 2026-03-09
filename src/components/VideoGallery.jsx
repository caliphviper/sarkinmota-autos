import { useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaPlay } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import { useTheme } from '../context/ThemeContext';

// Placeholder video data — INSERT REAL TIKTOK/INSTAGRAM EMBED URLS HERE
// Video data with proper embed detection logic
const videos = [
    {
        id: 1,
        title: 'Today, I took off my glasses for the first time .',
        platform: 'Instagram',
        url: 'https://www.instagram.com/reel/DVAOebWDOwy/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
        id: 2,
        title: 'All cars now available my brother come and buy',
        platform: 'Instagram',
        url: 'https://www.instagram.com/reel/DVVlF1bDW7Z/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
        id: 3,
        title: 'My sister tag your bestie, lets know the category you both are',
        platform: 'Instagram',
        url: 'https://www.instagram.com/reel/DVjrC8HDUyr/?igsh=dDNvbDUxMHpzdG0y',
    },
    {
        id: 4,
        title: 'My bratha they are super cool Toyotas like this and you definitely should own this one🚙',
        platform: 'Instagram',
        url: 'https://www.instagram.com/reel/DVmRFDwDQe1/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
    {
        id: 5,
        title: 'Please take note',
        platform: 'Instagram',
        url: 'https://www.instagram.com/reel/DVmOEFfDR1M/?igsh=cGR0b2E0cjB1ZXlw',
    },
    {
        id: 6,
        title: 'Up and grateful an ready to hustle',
        platform: 'Instagram',
        url: 'https://www.instagram.com/reel/DVlL-dlDWNK/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==',
    },
];

export default function VideoGallery() {
    const { t } = useLanguage();
    const { theme } = useTheme();
    const isLight = theme === 'light';

    const text = t.videos;

    // Load social media scripts for embeds
    useEffect(() => {
        // TikTok script
        const tiktokScript = document.createElement('script');
        tiktokScript.src = 'https://www.tiktok.com/embed.js';
        tiktokScript.async = true;
        document.body.appendChild(tiktokScript);

        // Instagram script
        const instaScript = document.createElement('script');
        instaScript.src = '//www.instagram.com/embed.js';
        instaScript.async = true;
        document.body.appendChild(instaScript);

        return () => {
            document.body.removeChild(tiktokScript);
            document.body.removeChild(instaScript);
        };
    }, []);

    return (
        <section
            id="videos"
            className={`section-padding relative overflow-hidden ${isLight ? 'bg-white' : 'bg-[#0A0A0F]'
                }`}
        >
            <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-red-500/40 to-transparent" />
            <div className="absolute top-0 left-0 w-full h-full grid-bg opacity-30" />

            <div className="container-app relative z-10">
                {/* Header */}
                <div className="text-center mb-12">
                    <span className="section-label">{text.label}</span>
                    <h2 className={`section-title mt-2 ${isLight ? 'text-gray-900' : 'text-white'}`}>
                        {text.title}
                    </h2>
                    <div className="gold-divider w-24 mx-auto mt-4" />
                    <p
                        className={`font-rajdhani text-base mt-4 ${isLight ? 'text-gray-600' : 'text-gray-400'
                            }`}
                    >
                        {text.subtitle}
                    </p>
                </div>

                {/* Video Grid — 3 columns of portrait videos */}
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {videos.map((video, i) => (
                        <motion.div
                            key={video.id}
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true, margin: '-40px' }}
                            transition={{ duration: 0.5, delay: i * 0.1, ease: 'easeOut' }}
                            className="video-card group"
                            onClick={() =>
                                window.open('https://www.tiktok.com/@alamin_sarkinmota', '_blank')
                            }
                        >
                            {/* Thumbnail */}
                            {/* INSERT REAL TIKTOK EMBED or INSTAGRAM EMBED below */}
                            <div className="w-full h-full overflow-hidden flex items-center justify-center bg-black/5">
                                {video.platform === 'TikTok' ? (
                                    <blockquote
                                        className="tiktok-embed"
                                        cite={video.url}
                                        data-video-id=""
                                        style={{ maxWidth: '605px', minWidth: '325px', height: '100%' }}
                                    >
                                        <section>
                                            <a target="_blank" title="@alamin_sarkinmota" href="https://www.tiktok.com/@alamin_sarkinmota?refer=embed">@alamin_sarkinmota</a>
                                        </section>
                                    </blockquote>
                                ) : (
                                    <blockquote
                                        className="instagram-media"
                                        data-instgrm-captioned
                                        data-instgrm-permalink={video.url}
                                        data-instgrm-version="14"
                                        style={{ background: '#FFF', border: '0', borderRadius: '3px', boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)', margin: '1px', maxWidth: '540px', minWidth: '326px', padding: '0', width: 'calc(100% - 2px)' }}
                                    >
                                    </blockquote>
                                )}
                            </div>

                            {/* Overlay (removed for embeds so user can interact, but kept some info) */}
                            <div className="absolute inset-x-0 bottom-0 p-3 bg-gradient-to-t from-black/90 to-transparent pointer-events-none">
                                <span
                                    className={`inline-block text-[10px] font-rajdhani font-700 px-2 py-0.5 rounded mb-1 ${video.platform === 'TikTok'
                                        ? 'bg-black text-white'
                                        : 'bg-gradient-to-r from-purple-600 to-pink-500 text-white'
                                        }`}
                                >
                                    {video.platform}
                                </span>
                                <p className="text-white font-rajdhani font-600 text-xs leading-tight line-clamp-2">
                                    {video.title}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

                {/* Social CTA */}
                <div className="text-center mt-10 flex flex-col sm:flex-row gap-4 justify-center">
                    <a
                        href="https://www.tiktok.com/@alamin_sarkinmota"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button className="btn-outline inline-flex items-center gap-2">
                            🎵 Follow on TikTok — 1.5M
                        </button>
                    </a>
                    <a
                        href="https://www.instagram.com/sarkinmota_cars"
                        target="_blank"
                        rel="noreferrer"
                    >
                        <button className="btn-red inline-flex items-center gap-2">
                            📸 Follow on Instagram — 707K
                        </button>
                    </a>
                </div>
            </div>
        </section>
    );
}
