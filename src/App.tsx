import { useState, useEffect } from 'react';
import Header from './Component/Header';
import Hero from './Component/Hero';
import About from './Component/About';
import Skills from './Component/Skills';
import Work from './Component/Work';
import Testimonials from './Component/Testimonials';
import Certificates from './Component/Certificates';
import Contact from './Component/Contact';
import Footer from './Component/Footer';

function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'work', 'testimonials', 'certificates', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;

          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 transition-colors duration-300">
      <Header
        activeSection={activeSection}
        setActiveSection={setActiveSection}
        mobileMenuOpen={mobileMenuOpen}
        setMobileMenuOpen={setMobileMenuOpen}
      />
      
      <main>
        <Hero />
        <About />
        <Skills />
        <Work />
        <Testimonials />
        <Certificates />
        <Contact />
      </main>
      
      <Footer />
    </div>
  );
}

export default App;