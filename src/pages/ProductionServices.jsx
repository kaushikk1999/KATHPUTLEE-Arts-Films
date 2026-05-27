import { useEffect, useRef } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { FileText, Network, Clapperboard, Users, MapPin, Video, MonitorPlay, CheckCircle2 } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import './ProductionServices.css';

export default function ProductionServices() {
  const lineRef = useRef(null);

  useEffect(() => {
    // Ambient Light Tracking
    const ambientLight = document.getElementById('ambient-light');
    let mouseX = 0, mouseY = 0;
    let lightX = 0, lightY = 0;
    let animationFrameId;

    const handleMouseMove = (e) => {
      if (ambientLight) ambientLight.style.opacity = '1';
      mouseX = e.clientX;
      mouseY = e.clientY;
    };

    const handleMouseLeave = () => {
      if (ambientLight) ambientLight.style.opacity = '0';
    };

    const animateLight = () => {
      lightX += (mouseX - lightX) * 0.1;
      lightY += (mouseY - lightY) * 0.1;
      
      if (ambientLight) {
        ambientLight.style.left = `${lightX}px`;
        ambientLight.style.top = `${lightY}px`;
      }
      
      animationFrameId = requestAnimationFrame(animateLight);
    };
    
    animateLight();

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseleave', handleMouseLeave);

    // Observer for Workflow Line
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && lineRef.current) {
          lineRef.current.classList.add('is-visible');
        }
      },
      { threshold: 0.1 }
    );

    const workflowSection = document.querySelector('.workflow-container');
    if (workflowSection) observer.observe(workflowSection);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseleave', handleMouseLeave);
      cancelAnimationFrame(animationFrameId);
      if (workflowSection) observer.unobserve(workflowSection);
    };
  }, []);

  return (
    <>
      <Helmet>
        <title>Production Services | Kathputlee Arts & Films</title>
        <meta name="description" content="End-to-end production services for brands, agencies, OTT platforms, and corporate clients." />
      </Helmet>
      
      <div className="page-production">
        <div className="ambient-light" id="ambient-light"></div>

        {/* 1. Hero Section */}
        <section className="home-hero" style={{ minHeight: '819px', alignItems: 'flex-end', paddingBottom: 'var(--space-32)' }}>
          <div className="home-hero-bg" style={{ backgroundColor: 'var(--color-surface)' }}>
            <img 
              alt="Cinematic production" 
              className="animate-ken-burns-alt" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-0eVmzk43nF4e44SvVwRt93dM7IOESe1oDJcLGQdHQr2FemK4MrGta96nycIpaOsgbNKgqCD7V4zoywqJ1rAV5JiYlLKZ6fIRUcqOxeJt07iINvBWgGkmsZLmtib3cs7tEWn7_JPcP8daOO0-Vhqo0g9QJ8KI8h3NkjxDZvhundVHE0G1h6IP7Z6dIIDo98QSqkRIpmz1W2rVMdOBJkt4_d_7tiCBZt2srutg8U_sRiKq1boCkyusNlY-y9sVAd_VBYq-oIvJ_3LC"
              style={{ mixBlendMode: 'luminosity', opacity: 0.6 }}
            />
            <div className="home-hero-overlay" style={{ background: 'linear-gradient(to top, #1a1a1a, rgba(26,26,26,0.6), transparent)' }}></div>
          </div>
          
          <div className="home-hero-content" style={{ maxWidth: '800px', margin: '0 auto', width: '100%' }}>
            <span className="subheading text-primary animate-fade-up" style={{ marginBottom: '1.5rem', display: 'block' }}>
              Technical Fidelity
            </span>
            <h1 className="home-hero-title animate-fade-up delay-100" style={{ marginBottom: '2rem' }}>
              Production Services
            </h1>
            <p className="home-hero-desc animate-fade-up delay-200" style={{ maxWidth: '600px' }}>
              From conception to the final render, we provide end-to-end operational excellence and technical infrastructure for ambitious cinematic storytelling.
            </p>
          </div>
        </section>

        {/* 2. Expertise Grid (Bento Style) */}
        <section className="section">
          <div className="container">
            <ScrollReveal>
              <h2 className="headline-lg" style={{ marginBottom: '4rem' }}>Core Disciplines</h2>
            </ScrollReveal>
            
            <div className="bento-grid">
              {/* Pre-production */}
              <ScrollReveal className="bento-card bento-large delay-100">
                <FileText size={40} className="icon-float" strokeWidth={1.5} />
                <h3 className="bento-title">Pre-production</h3>
                <p className="text-muted" style={{ maxWidth: '500px' }}>
                  Meticulous planning, script breakdown, and visual boarding. We establish the architectural foundation of your narrative before a single frame is shot.
                </p>
              </ScrollReveal>

              {/* Line Production */}
              <ScrollReveal className="bento-card delay-200">
                <Network size={40} className="icon-float" strokeWidth={1.5} />
                <h3 className="bento-title">Line Production</h3>
                <p className="text-muted">Rigorous budget management and logistical orchestration across complex schedules.</p>
              </ScrollReveal>

              {/* Direction */}
              <ScrollReveal className="bento-card delay-100">
                <Clapperboard size={40} className="icon-float" strokeWidth={1.5} />
                <h3 className="bento-title">Direction</h3>
                <p className="text-muted">Visionary helming focusing on performance, pacing, and visual storytelling fidelity.</p>
              </ScrollReveal>

              {/* Crew Sourcing */}
              <ScrollReveal className="bento-card delay-200">
                <Users size={40} className="icon-float" strokeWidth={1.5} />
                <h3 className="bento-title">Crew Sourcing</h3>
                <p className="text-muted">Curated assembly of elite technical specialists and artisans tailored to your project's specific aesthetic needs.</p>
              </ScrollReveal>

              {/* Location Support */}
              <ScrollReveal className="bento-card delay-300">
                <MapPin size={40} className="icon-float" strokeWidth={1.5} />
                <h3 className="bento-title">Location Support</h3>
                <p className="text-muted">Scouting, securing, and managing complex physical environments globally.</p>
              </ScrollReveal>

              {/* Equipment */}
              <ScrollReveal className="bento-card delay-100">
                <Video size={40} className="icon-float" strokeWidth={1.5} />
                <h3 className="bento-title">Equipment</h3>
                <p className="text-muted">Access to industry-leading camera systems, lighting arrays, and grip infrastructure.</p>
              </ScrollReveal>

              {/* Post-production */}
              <ScrollReveal className="bento-card bento-large delay-200">
                <MonitorPlay size={40} className="icon-float" strokeWidth={1.5} />
                <h3 className="bento-title">Post-production</h3>
                <p className="text-muted" style={{ maxWidth: '500px' }}>
                  Editing, color grading, sound design, and VFX integration. Crafting the final sensory experience in our state-of-the-art darkrooms.
                </p>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* 3. Workflow Timeline */}
        <section className="section workflow-section">
          <div className="container">
            <ScrollReveal>
              <h2 className="headline-lg" style={{ marginBottom: '4rem' }}>Production Workflow</h2>
            </ScrollReveal>
            
            <div className="workflow-container">
              <div className="workflow-wrapper">
                <div className="workflow-line" ref={lineRef}></div>
                
                {/* Nodes */}
                {[
                  { num: "01", title: "Plan", desc: "Conceptualization, script breakdown, and initial resource allocation.", delay: 100 },
                  { num: "02", title: "Prepare", desc: "Location scouting, casting, crew assembly, and equipment lock-in.", delay: 200 },
                  { num: "03", title: "Shoot", desc: "Principal photography executed with surgical precision and artistic intent.", delay: 300, active: true },
                  { num: "04", title: "Edit", desc: "Assembly, pacing refinement, visual effects integration, and scoring.", delay: 400 },
                  { num: "05", title: "Deliver", desc: "Final color grade, mastering, and secure deployment across formats.", delay: 500 }
                ].map((step, idx) => (
                  <ScrollReveal key={idx} className={`workflow-node delay-${step.delay/100 * 100}`}>
                    <div className={`workflow-circle ${step.active ? 'active' : ''}`}>
                      <span className="subheading text-primary" style={{ margin: 0 }}>{step.num}</span>
                    </div>
                    <h4 className="subheading" style={{ color: '#fff' }}>{step.title}</h4>
                    <p className="text-muted">{step.desc}</p>
                  </ScrollReveal>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* 4. The Kathputlee Advantage */}
        <section className="section">
          <div className="container advantage-grid">
            <ScrollReveal>
              <h2 className="headline-lg" style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', marginBottom: '1.5rem', lineHeight: '1.1' }}>
                The<br/>Kathputlee<br/><span className="text-primary" style={{ fontStyle: 'italic' }}>Advantage.</span>
              </h2>
              <p className="text-muted" style={{ fontSize: '1.125rem', maxWidth: '400px' }}>
                We do not just facilitate production; we elevate it. Our infrastructure is built for those who demand absolute control over their creative vision.
              </p>
            </ScrollReveal>
            
            <div style={{ display: 'flex', flexDirection: 'column', width: '100%' }}>
              <ScrollReveal className="advantage-item delay-100">
                <CheckCircle2 size={28} className="advantage-icon" />
                <div>
                  <h4 className="subheading" style={{ color: '#fff', marginBottom: '0.5rem' }}>India-wide Network</h4>
                  <p className="text-muted">Unparalleled access to diverse landscapes and local logistical networks across the subcontinent.</p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal className="advantage-item delay-200">
                <CheckCircle2 size={28} className="advantage-icon" />
                <div>
                  <h4 className="subheading" style={{ color: '#fff', marginBottom: '0.5rem' }}>Operational Excellence</h4>
                  <p className="text-muted">Military-grade scheduling and budget oversight ensuring resources appear exactly when needed.</p>
                </div>
              </ScrollReveal>
              
              <ScrollReveal className="advantage-item delay-300">
                <CheckCircle2 size={28} className="advantage-icon" />
                <div>
                  <h4 className="subheading" style={{ color: '#fff', marginBottom: '0.5rem' }}>Technical Fidelity</h4>
                  <p className="text-muted">Maintaining strict quality control pipelines from data wrangling to final exhibition.</p>
                </div>
              </ScrollReveal>
            </div>
          </div>
        </section>

        {/* 5. CTA Section */}
        <section className="prod-cta">
          <div className="prod-cta-bg">
            <img 
              alt="Clapperboard background" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCs7VVxfjNjFAh4224TsWWvji2ktNZI5hPDaFf_WFsJP99IAYJ8MBXoVGP09PSvtcUghVulT6h7djNwfkNY_05T3AWcQhaoHTMOU6Pkbx_ikfj7Vs3e7ynesbip-Ve3JrzFOTkqhp1R4_l0OUwWFDCIqTIqEnxeZ_yiBq4yRZpEikOeXXVUu6RLDOUv5iwbPCIS01ambi0JCthBEGfcoGhtI3FdE72h18CzztLwL-DXMTaqaypMCumko7Q2YLPCx06ls-Txb8CwOUI"
            />
            <div className="prod-cta-overlay"></div>
          </div>
          
          <ScrollReveal style={{ position: 'relative', zIndex: 10, maxWidth: '600px', margin: '0 auto', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
            <h2 className="headline-lg" style={{ marginBottom: '1.5rem' }}>Ready to Shoot?</h2>
            <p className="text-muted" style={{ fontSize: '1.125rem', marginBottom: '3rem' }}>
              Engage our production services architecture for your next major narrative endeavor.
            </p>
            <Link to="/contact" className="btn btn-glow font-subheading text-subheading uppercase">
              Plan Your Next Production With Us
            </Link>
          </ScrollReveal>
        </section>
      </div>
    </>
  );
}
