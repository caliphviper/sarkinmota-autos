import { motion } from 'framer-motion';
import { FaWhatsapp } from 'react-icons/fa';

const WHATSAPP_NUMBER = '2347015136111';
const DEFAULT_MSG = "Hi Sarkin Mota, I'm interested in your cars. Please help me.";

export default function WhatsAppFloat() {
    const handleClick = () => {
        window.open(
            `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(DEFAULT_MSG)}`,
            '_blank'
        );
    };

    return (
        <motion.div
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 2, duration: 0.4, type: 'spring', stiffness: 200 }}
            className="whatsapp-float"
            onClick={handleClick}
            title="Chat with Sarkin Mota on WhatsApp"
            role="button"
            aria-label="Chat on WhatsApp"
        >
            <FaWhatsapp size={30} color="white" />

            {/* Ping ring */}
            <span
                className="absolute inset-0 rounded-full animate-ping"
                style={{ background: 'rgba(37, 211, 102, 0.25)' }}
            />
        </motion.div>
    );
}
