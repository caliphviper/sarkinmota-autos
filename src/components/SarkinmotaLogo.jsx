/**
 * SarkinmotaLogo — SVG replica of the physical gold geometric logo.
 * The shape is a stylised crown / M-form:
 *   • Two large outward-pointing triangles (left & right peaks)
 *   • A small downward-pointing diamond notch in the centre
 * All rendered in a gold gradient matching the brand palette.
 */
export default function SarkinmotaLogo({ size = 48, className = '' }) {
    return (
        <svg
            width={size}
            height={size * 0.72}
            viewBox="0 0 100 72"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-label="Sarkinmota Autos logo"
        >
            <defs>
                <linearGradient id="goldGrad" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" stopColor="#F5D060" />
                    <stop offset="40%" stopColor="#E6A817" />
                    <stop offset="100%" stopColor="#B8860B" />
                </linearGradient>
                <linearGradient id="goldGrad2" x1="100%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#FFE066" />
                    <stop offset="100%" stopColor="#C9960C" />
                </linearGradient>
            </defs>

            {/*
        The crown / M shape is drawn as a single filled polygon.
        Points (x,y) — origin top-left, viewBox 100×72:
          Start bottom-left  → (0,72)
          Rise to left peak  → (0,0)
          Come down centre   → (50,40)   ← the inner notch tip
          Rise to right peak → (100,0)
          Down bottom-right  → (100,72)
          Close
      */}
            <polygon
                points="0,72 0,0 50,42 100,0 100,72"
                fill="url(#goldGrad)"
            />

            {/* Subtle highlight stripe across the face — mimics the studio light in the photo */}
            <polygon
                points="0,0 50,42 100,0 75,0 50,28 25,0"
                fill="url(#goldGrad2)"
                opacity="0.35"
            />
        </svg>
    );
}
