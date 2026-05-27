import { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import BrandServices from './pages/BrandServices';
import Originals from './pages/Originals';
import ProductionServices from './pages/ProductionServices';
import ContactUs from './pages/ContactUs';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    // Mouse Spotlight
    const handleMouseMove = (e) => {
      const x = (e.clientX / window.innerWidth) * 100;
      const y = (e.clientY / window.innerHeight) * 100;
      document.body.style.setProperty('--mouse-x', `${x}%`);
      document.body.style.setProperty('--mouse-y', `${y}%`);
    };

    // Scroll Progress
    const handleScroll = () => {
      const winScroll = document.documentElement.scrollTop;
      const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      setScrollProgress((winScroll / height) * 100);
    };

    document.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    // Add cinematic vignette class to body
    document.body.classList.add('cinematic-vignette', 'mouse-spotlight');

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
      document.body.classList.remove('cinematic-vignette', 'mouse-spotlight');
    };
  }, []);

  return (
    <Router>
      <div className="film-grain"></div>
      <div className="scroll-progress-bar" style={{ width: `${scrollProgress}%` }}></div>
      <div className="app-container">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/brand-services" element={<BrandServices />} />
            <Route path="/originals" element={<Originals />} />
            <Route path="/production-services" element={<ProductionServices />} />
            <Route path="/contact" element={<ContactUs />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
