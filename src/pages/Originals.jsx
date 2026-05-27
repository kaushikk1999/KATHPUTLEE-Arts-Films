import { useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight, Film } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import './Originals.css';

export default function Originals() {
  useEffect(() => {
    // Mouse Tracking Spotlight specifically for Originals
    const spotlight = document.getElementById('spotlight');
    let isMoving = false;
    let hideSpotlightTimeout;

    const handleMouseMove = (e) => {
      if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
      
      if (spotlight) {
        spotlight.style.opacity = '1';
        spotlight.style.setProperty('--x', `${e.clientX}px`);
        spotlight.style.setProperty('--y', `${e.clientY}px`);
      }
      
      isMoving = true;
      
      clearTimeout(hideSpotlightTimeout);
      hideSpotlightTimeout = setTimeout(() => {
        if (spotlight) spotlight.style.opacity = '0';
        isMoving = false;
      }, 2000);
    };

    const handleMouseLeave = () => {
      if (spotlight) spotlight.style.opacity = '0';
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      clearTimeout(hideSpotlightTimeout);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Originals | Kathputlee Arts & Films</title>
        <meta name="description" content="Explore our original IP, feature films, documentaries, and upcoming projects." />
      </Helmet>
      
      <div className="page-originals">
        <div id="spotlight"></div>

        {/* Hero Section */}
        <section className="relative w-full flex items-center justify-center overflow-hidden" style={{ height: '100vh', minHeight: '600px' }}>
          <div className="absolute inset-0 z-0 hero-img-container">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#1f0f0d]/30 to-[#1f0f0d]/80 z-10"></div>
            <img 
              alt="Cinematic Hero" 
              className="hero-img w-full h-full object-cover object-center opacity-80" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDjEb-fDbzHs34Pv5ue4TY_BCB3upIh2PFGRAROilcOzgepGRxEsLqflt7-9MQiPdOf9DNpu5ENRH-PS1QKYPeQ-Gsovtdwl_zF_Pr8yqQbym5ExTRZ5XvSTFoje0OBWmrikQatpT8ZEIlA5xLQiT1H4-NO3fRI-Tdd6_KN7XWrRHrm3_ReNAR2NYr31wByVU4eQp2D_u59gvfmRatcRREkjk2TLJuuCZcWXqdRlOgzaYAN5_AWWBUBMfBi0pTvIAL_MA2ikEA0HFuR"
            />
          </div>
          <div className="relative z-20 text-center px-margin-mobile md:px-margin-desktop w-full max-w-container-max mx-auto mt-20">
            <h1 className="hero-text-reveal delay-1" style={{ fontSize: 'clamp(3rem, 8vw, 4.5rem)', fontFamily: 'Playfair Display, serif', fontWeight: 700, marginBottom: '1.5rem', letterSpacing: '-0.02em' }}>
              Originals
            </h1>
            <p className="hero-text-reveal delay-2 text-primary uppercase mx-auto" style={{ fontFamily: 'Montserrat, sans-serif', letterSpacing: '0.2em', fontWeight: 600 }}>
              Stories That Demand To Be Told
            </p>
          </div>
        </section>

        {/* Studio Intro */}
        <ScrollReveal>
          <section className="py-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-center">
              <div className="col-span-1 md:col-span-4 hidden md:block">
                <div className="w-full h-full min-h-[400px] bg-surface-container relative overflow-hidden group">
                  <img 
                    alt="Camera Setup" 
                    className="w-full h-full object-cover absolute inset-0 opacity-40 mix-blend-luminosity group-hover:scale-105 transition-transform duration-700" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOHALQ58nY-NW32ts8CPk10mA3G9rkKYTomYdven5nlu74yO7UZQFvybIbBjw3g9BA76j3cxXIkseeu2THKDvbM1JoFryybEr-6dJlqBGkJuhX--fszmnbHo752J2LzlPmY_IPiYUmo07vt1LCb68AcgtwiP7rAr8fdDYUCwFYTBEmp2qm752s0_r2uG-sRHuu-yhFPVODZ4YVlmlRBAoD2DMHbpWzNfhG7RzTACsHiWtW5JbdXkcWT0YZ2WLpbNBvYQBhVVZDSR3l"
                  />
                </div>
              </div>
              <div className="col-span-1 md:col-span-8 md:pl-12">
                <h2 className="mb-8" style={{ fontSize: 'clamp(2rem, 5vw, 3rem)', fontFamily: 'Playfair Display, serif', fontWeight: 600, lineHeight: 1.2 }}>
                  Developing narratives that disrupt the quiet.
                </h2>
                <p className="text-muted max-w-3xl mb-8" style={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
                  Our Originals division is dedicated to the inception and realization of feature films and documentaries that challenge conventions. We don't just produce; we cultivate. From the first spark of a concept to the final frame in the grading suite, we invest deeply in character-driven narratives that resonate on a global scale.
                </p>
                <div style={{ width: '6rem', height: '1px', backgroundColor: 'rgba(255,255,255,0.1)' }}></div>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* Current Slate */}
        <section className="py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-lowest">
          <div className="max-w-container-max mx-auto">
            <ScrollReveal>
              <div className="mb-16 md:mb-24 flex justify-between items-end pb-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <h3 style={{ fontSize: '2rem', fontFamily: 'Playfair Display, serif', fontWeight: 500 }}>Current Slate</h3>
                <span className="text-primary" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.75rem', letterSpacing: '0.15em', fontWeight: 700 }}>01 / 03</span>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {/* Card 1 */}
              <ScrollReveal className="prod-card relative h-[600px] w-full overflow-hidden cursor-pointer group rounded-sm border border-white/10" style={{ transitionDelay: '100ms' }}>
                <img 
                  alt="Project Alpha" 
                  className="w-full h-full object-cover absolute inset-0" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuD61sipJ1oe0jaCKWfpfiTpmJaJJKRljRRPKmsmkTNMPtGFvN2FEq9nR0W5LkkTQftfGwGfydyFEPey0oz0NoTKbZtbs8qgyxDDnaUSGMPoyhBRd7t0jzzffFNyqfU4R7rYOsNizdYcNIMzZsqLaCFblb_EjruFi2MU7Q4m-M8NnmtAQbRZwqGdrsFVJS20bgrpK7wgMHi2U3at4eMjTrUaF67TLt7yevNcd71YEZGLvQwGDnjTargqK_-aDI5Rfob8NQEJX024MULH"
                />
                <div className="prod-card-content absolute inset-0 flex flex-col justify-end p-8">
                  <span className="text-primary mb-4 w-fit px-3 py-1 backdrop-blur-sm" style={{ border: '1px solid rgba(255, 180, 168, 0.3)', backgroundColor: 'rgba(45, 27, 24, 0.5)', fontFamily: 'Montserrat, sans-serif', fontSize: '0.75rem', letterSpacing: '0.15em', fontWeight: 700, textTransform: 'uppercase' }}>Released</span>
                  <h4 className="group-hover:text-primary transition-colors duration-300" style={{ fontSize: '2rem', fontFamily: 'Playfair Display, serif', fontWeight: 500 }}>Project Alpha</h4>
                  <p className="text-muted mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0" style={{ lineHeight: 1.6 }}>A gripping psychological thriller exploring the depths of obsession.</p>
                  <div className="view-project-indicator flex items-center mt-4 text-primary text-sm uppercase font-bold" style={{ letterSpacing: '0.15em' }}>
                    VIEW PROJECT <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
              </ScrollReveal>

              {/* Card 2 */}
              <ScrollReveal className="prod-card relative h-[600px] w-full overflow-hidden cursor-pointer group rounded-sm border border-white/10 md:mt-12" style={{ transitionDelay: '200ms' }}>
                <img 
                  alt="Project Beta" 
                  className="w-full h-full object-cover absolute inset-0 filter grayscale contrast-125" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCwYJNBKhJa2p3l_wbvtKqxJhHUhpRF_uqNxmdm7f1Nb8MpLlRQIt4034UrWgdCESkvexX7-JMUgGG0W9Mc9GgE3Jx5X_ADp9-9C8DbeQAtgmUdQr37hFALKuW_VMkrdglcmbQtPS6Zi2wgRpbRXEQimFDLw5d3o0BA7eXFUEaRHtIC_GbncXeNMOkkdVRIr-kqDoiIap_iu163nza461y4_AIJlHPy8_G9EFEZcGWXlnzZF5ptbZs-xg0RMBg0WKdrC_h8OARLdJxu"
                />
                <div className="prod-card-content absolute inset-0 flex flex-col justify-end p-8">
                  <span className="mb-4 w-fit px-3 py-1 backdrop-blur-sm group-hover:border-primary/50 group-hover:text-primary transition-colors" style={{ border: '1px solid rgba(255, 255, 255, 0.3)', backgroundColor: 'rgba(45, 27, 24, 0.5)', fontFamily: 'Montserrat, sans-serif', fontSize: '0.75rem', letterSpacing: '0.15em', fontWeight: 700, textTransform: 'uppercase', color: '#fff' }}>Digital Series</span>
                  <h4 className="group-hover:text-primary transition-colors duration-300" style={{ fontSize: '2rem', fontFamily: 'Playfair Display, serif', fontWeight: 500 }}>Project Beta</h4>
                  <p className="text-muted mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0" style={{ lineHeight: 1.6 }}>An immersive documentary series uncovering hidden urban subcultures.</p>
                  <div className="view-project-indicator flex items-center mt-4 text-primary text-sm uppercase font-bold" style={{ letterSpacing: '0.15em' }}>
                    VIEW PROJECT <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
              </ScrollReveal>

              {/* Card 3 */}
              <ScrollReveal className="prod-card relative h-[600px] w-full overflow-hidden cursor-pointer group rounded-sm border border-white/10 md:mt-24" style={{ transitionDelay: '300ms' }}>
                <img 
                  alt="Project Gamma" 
                  className="w-full h-full object-cover absolute inset-0" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCTczd3Z0RlJxIQAtwi56ap0tnpZ4uEo2NRrO4UfwPRi4AxB9DsLa_zwNZbEw50iQHUhkPotFFozFqmeBwSCsBp90pH7W79QPEdRvAVbIu6tRxiuQaafFmFjkBjK9Wo8kF2GkhhRGwdm_1qJNTAWnMglXcOXMjnK2B54IosIC9_mL1iV6SNuxh_zx5iVWXAHmijqEBo5nvFgOYXETydMNMPrGSdBCUrbNwrfNROZvv8Qms7nUWdI3JGAMr280JiKYxRBQrdhKFvK9lb"
                />
                <div className="prod-card-content absolute inset-0 flex flex-col justify-end p-8">
                  <span className="mb-4 w-fit px-3 py-1 backdrop-blur-sm group-hover:border-primary/50 group-hover:text-primary transition-colors" style={{ border: '1px solid rgba(255, 255, 255, 0.3)', backgroundColor: 'rgba(45, 27, 24, 0.5)', fontFamily: 'Montserrat, sans-serif', fontSize: '0.75rem', letterSpacing: '0.15em', fontWeight: 700, textTransform: 'uppercase', color: '#fff' }}>Post-Production</span>
                  <h4 className="group-hover:text-primary transition-colors duration-300" style={{ fontSize: '2rem', fontFamily: 'Playfair Display, serif', fontWeight: 500 }}>Project Gamma</h4>
                  <p className="text-muted mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0" style={{ lineHeight: 1.6 }}>A visually stunning sci-fi epic set against the backdrop of a dying star.</p>
                  <div className="view-project-indicator flex items-center mt-4 text-primary text-sm uppercase font-bold" style={{ letterSpacing: '0.15em' }}>
                    VIEW PROJECT <ArrowRight size={16} className="ml-2" />
                  </div>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* In Development */}
        <section className="py-section-gap px-margin-mobile md:px-margin-desktop">
          <div className="max-w-container-max mx-auto">
            <ScrollReveal>
              <div className="mb-16 md:mb-24 flex justify-between items-end pb-4" style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
                <h3 style={{ fontSize: '2rem', fontFamily: 'Playfair Display, serif', fontWeight: 500 }}>In Development</h3>
                <span className="text-primary" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.75rem', letterSpacing: '0.15em', fontWeight: 700 }}>02 / 03</span>
              </div>
            </ScrollReveal>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter md:gap-24">
              {/* Dev Card 1 */}
              <ScrollReveal className="group border p-8 md:p-12 bg-surface-container-low transition-colors duration-500 relative overflow-hidden" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-3xl transition-all duration-700" style={{ backgroundColor: 'rgba(255, 180, 168, 0.05)' }}></div>
                <span className="text-primary mb-6 block" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.875rem', letterSpacing: '0.2em', fontWeight: 600 }}>Feature Film</span>
                <h4 className="mb-6" style={{ fontSize: '2rem', fontFamily: 'Playfair Display, serif', fontWeight: 500 }}>Untitled Thriller</h4>
                <p className="text-muted mb-8" style={{ lineHeight: 1.6 }}>
                  Currently in active scripting. We are seeking co-production partners for this high-octane narrative set in the brutalist architecture of Eastern Europe.
                </p>
                <Link to="/contact" className="btn-secondary uppercase text-white px-6 py-3" style={{ border: '1px solid rgba(255,255,255,0.2)', fontFamily: 'Montserrat, sans-serif', fontSize: '0.75rem', letterSpacing: '0.15em', fontWeight: 700, display: 'inline-block' }}>
                  Request Deck
                </Link>
              </ScrollReveal>

              {/* Dev Card 2 */}
              <ScrollReveal className="group border p-8 md:p-12 bg-surface-container-low transition-colors duration-500 relative overflow-hidden mt-8 md:mt-32" style={{ borderColor: 'rgba(255,255,255,0.1)' }}>
                <div className="absolute bottom-0 left-0 w-40 h-40 rounded-full blur-3xl transition-all duration-700" style={{ backgroundColor: 'rgba(255, 180, 168, 0.05)' }}></div>
                <span className="text-primary mb-6 block" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.875rem', letterSpacing: '0.2em', fontWeight: 600 }}>Limited Series</span>
                <h4 className="mb-6" style={{ fontSize: '2rem', fontFamily: 'Playfair Display, serif', fontWeight: 500 }}>Historical Epic</h4>
                <p className="text-muted mb-8" style={{ lineHeight: 1.6 }}>
                  A sweeping multi-generational saga currently securing showrunners. Looking for strategic partnerships for international distribution rights.
                </p>
                <Link to="/contact" className="btn-secondary uppercase text-white px-6 py-3" style={{ border: '1px solid rgba(255,255,255,0.2)', fontFamily: 'Montserrat, sans-serif', fontSize: '0.75rem', letterSpacing: '0.15em', fontWeight: 700, display: 'inline-block' }}>
                  Request Deck
                </Link>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* Collaboration CTA */}
        <section className="py-section-gap px-margin-mobile md:px-margin-desktop text-center relative overflow-hidden" style={{ borderTop: '1px solid rgba(255,255,255,0.1)' }}>
          <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
            <div className="w-[800px] h-[800px] rounded-full blur-[120px]" style={{ backgroundColor: 'rgba(255, 180, 168, 0.05)' }}></div>
          </div>
          <ScrollReveal className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
            <Film size={48} className="text-primary mb-8" strokeWidth={1} />
            <h2 className="mb-8" style={{ fontSize: 'clamp(3rem, 8vw, 4.5rem)', fontFamily: 'Playfair Display, serif', fontWeight: 700, letterSpacing: '-0.02em', lineHeight: 1.1 }}>Partner With Us</h2>
            <p className="text-muted mb-12" style={{ fontSize: '1.125rem', lineHeight: 1.8 }}>
              We are always seeking visionary producers, investors, and collaborators to bring exceptional stories to the screen. If you share our commitment to cinematic excellence, the conversation starts here.
            </p>
            <Link to="/contact" className="btn-primary uppercase text-white px-8 py-4" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '0.75rem', letterSpacing: '0.15em', fontWeight: 700 }}>
              Initiate Contact
            </Link>
          </ScrollReveal>
        </section>
      </div>
    </>
  );
}
