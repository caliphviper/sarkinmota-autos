import sarkinMotoLogo from '../assets/sarkin-moto-logo.png';

/**
 * SarkinmotaLogo — Now using the official PNG logo image.
 * This component provides a consistent brand identity across the app.
 */
export default function SarkinmotaLogo({ size = 48, className = '' }) {
    return (
        <img
            src={sarkinMotoLogo}
            alt="Sarkinmota Autos logo"
            style={{ width: size, height: 'auto' }}
            className={`${className} object-contain inline-block`}
        />
    );
}
