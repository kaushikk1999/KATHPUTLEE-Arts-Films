import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import SectionIntro from '../components/SectionIntro';
import ServiceCard from '../components/ServiceCard';
import CTASection from '../components/CTASection';
import ScrollReveal from '../components/ScrollReveal';
import './BrandServices.css';

export default function BrandServices() {
  const steps = [
    { title: "Brief & Strategy", desc: "Understanding brand goals, audience, and the core message." },
    { title: "Concept & Development", desc: "Crafting narratives, treatments, and visual directions." },
    { title: "Production", desc: "Execution with elite directors, cinematographers, and crew." },
    { title: "Post & Delivery", desc: "Editing, color grading, sound design, and master delivery." }
  ];

  useEffect(() => {
    // Light Leak Effect specifically for Brand Services
    const lightLeak = document.getElementById('light-leak');
    let isMoving = false;
    let hideLeakTimeout;

    const handleMouseMove = (e) => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      
      if (lightLeak) {
        lightLeak.style.opacity = '1';
        lightLeak.style.setProperty('--mouse-x', `${e.clientX}px`);
        lightLeak.style.setProperty('--mouse-y', `${e.clientY}px`);
      }
      
      isMoving = true;
      
      // Hide effect when mouse stops moving for a while
      clearTimeout(hideLeakTimeout);
      hideLeakTimeout = setTimeout(() => {
        if (lightLeak) lightLeak.style.opacity = '0';
        isMoving = false;
      }, 2000);
    };

    const handleMouseLeave = () => {
      if (lightLeak) lightLeak.style.opacity = '0';
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(hideLeakTimeout);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Brand Services | Kathputlee Arts & Films</title>
        <meta name="description" content="We create premium branded content, advertorials, and campaign production capabilities." />
      </Helmet>
      
      <div className="page-brand fade-in">
        <div id="light-leak"></div>

        {/* Cinematic Hero Replacement */}
        <section className="relative flex items-center justify-center px-margin-mobile md:px-margin-desktop py-section-gap overflow-hidden" style={{ minHeight: '921px', borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
          <div className="absolute inset-0 z-0">
            <img 
              alt="Cinematic camera setup in a dark studio" 
              className="w-full h-full object-cover opacity-60 filter grayscale brightness-75 ken-burns-bg" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuCenu0RnCmlydvkJjXMKoJfbViVKFMG7p12dj32Cu59gUBrO857lMGSAZ2LfCF1DPrtHFlzCdyuN7G4ECVjvAgNGawfHCqdilrQcKs4SJTDuLQwQul3oYOWwMTCVonQVLF_sXrBgTOCfEPDJOA1ggqPkOPrunmoLoMx9rTCGj-JU9c6VD2XHf40mBYxZlUTDrY-QB3DOJidRjhn2HaRVSDI3lRgnrItD7JVTOQx7qsPkFvlKzpZLRdVWu9g2gEseHtXcPgDVcV4gKta"
            />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, transparent, rgba(10,10,10,0.5), #0A0A0A)' }}></div>
          </div>
          
          <div className="relative z-10 max-w-container-max mx-auto w-full grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
            <div className="md:col-span-8 md:col-start-1 text-left">
              <span className="block text-primary font-subheading text-subheading uppercase mb-6 hero-anim-1" style={{ letterSpacing: '0.3em', opacity: 0.8 }}>
                Brand Services
              </span>
              <h1 className="text-white mb-8 leading-tight hero-anim-2" style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', fontFamily: 'Playfair Display, serif', fontWeight: 700 }}>
                We don't just <br/><span className="text-stroke italic" style={{ opacity: 0.5 }}>produce videos</span>;<br/> we architect narratives.
              </h1>
              <p className="text-on-surface-variant max-w-2xl mb-12 hero-anim-3" style={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
                In an era of endless scrolling, true engagement demands more than just moving pictures. We craft premium, cinematic brand stories that cut through the noise, leaving a lasting psychological impact on your audience.
              </p>
              <Link to="/contact" className="btn btn-glow-primary font-label-caps uppercase hero-anim-4" style={{ display: 'inline-block', padding: '1rem 2rem' }}>
                Explore Our Capabilities
              </Link>
            </div>
          </div>
        </section>

        {/* Existing Sections that we preserve to not break the page */}
        <section className="section">
          <div className="container">
            <SectionIntro 
              subtitle="Our Capabilities" 
              title="From concept to final master." 
            />
            
            <div className="capabilities-grid">
              <ScrollReveal className="cinematic-card">
                <ServiceCard 
                  title="Branded Content"
                  description="Long-form and short-form storytelling that seamlessly integrates brand messaging with audience engagement."
                />
              </ScrollReveal>
              <ScrollReveal className="cinematic-card">
                <ServiceCard 
                  title="Commercials & TVCs"
                  description="High-end ad films for television and digital campaigns."
                />
              </ScrollReveal>
              <ScrollReveal className="cinematic-card">
                <ServiceCard 
                  title="Digital Promos"
                  description="Fast-paced, high-impact promotional content for social and OTT platforms."
                />
              </ScrollReveal>
            </div>
          </div>
        </section>

        <section className="section bg-surface">
          <div className="container">
            <SectionIntro 
              subtitle="The Process" 
              title="How we bring ideas to life." 
              centered={true}
            />
            
            <div className="process-timeline">
              {steps.map((step, index) => (
                <ScrollReveal key={index} className="process-step">
                  <div className="step-number">0{index + 1}</div>
                  <h3 className="step-title">{step.title}</h3>
                  <p className="step-desc text-muted">{step.desc}</p>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>

        <CTASection 
          title="Build a campaign with us"
          buttonText="Get in Touch"
          buttonLink="/contact"
        />
      </div>
    </>
  );
}
