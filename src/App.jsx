import { LanguageProvider } from './context/LanguageContext';
import { ThemeProvider } from './context/ThemeContext';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stats from './components/Stats';
import About from './components/About';
import CarShowcase from './components/CarShowcase';
import BookViewing from './components/BookViewing';
import InspectionChecklist from './components/InspectionChecklist';
import VideoGallery from './components/VideoGallery';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import WhatsAppFloat from './components/WhatsAppFloat';
import LanguageModal from './components/LanguageModal';

function AppContent() {
  return (
    <div className="min-h-screen">
      <LanguageModal />
      <Navbar />
      <main>
        <Hero />
        <Stats />
        <About />
        <CarShowcase />
        <BookViewing />
        <VideoGallery />
        <InspectionChecklist />
        <Testimonials />
        <Contact />
      </main>
      <Footer />

    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <AppContent />
      </LanguageProvider>
    </ThemeProvider>
  );
}
