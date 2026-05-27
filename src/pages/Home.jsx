import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import ScrollReveal from '../components/ScrollReveal';
import './Home.css';

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Kathputlee Arts & Films | Creative Production Studio</title>
        <meta name="description" content="Delhi-based creative production studio crafting cinema, branded content, and production services." />
      </Helmet>
      
      <div className="page-home">
        {/* 1. Hero Section */}
        <section className="home-hero">
          <div className="home-hero-bg">
            <img 
              alt="Cinematic Hero" 
              className="ken-burns" 
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDRoaNcvyPDr56TqAYfxsmXq_MjPYX0uDIyhbHu5oTWE4NQle4CQvrVZpgISbrpt1H2TDyLKmxr8C50TbqfJSTTqnW-mjWshz6dVqQAPzOJZq8MqitgNa9B2gG8SOZ-gquY6uJkm-fSvHs283n43sUU_uoXS3IgehjlyTkr4-UoqJO5tozXQljhYefx6G8B5Jq7X-1iblfCG5QtrfKl4VVGP_4NL3SOv3yOPdpOl1mLjZ5-iwcbG6bly2OkWumwB0uBk601LlPZWO3h"
            />
            <div className="home-hero-overlay"></div>
          </div>
          <div className="home-hero-content">
            <h1 className="home-hero-title hero-stagger">
              Stories Built for Screens, Brands, and Audiences.
            </h1>
            <p className="home-hero-desc hero-stagger">
              A Delhi-based creative production studio crafting cinema, branded content, and production services across India.
            </p>
            <div className="hero-buttons hero-stagger">
              <Link to="/originals" className="btn btn-light-leak btn-liquid-glow btn-primary">
                Explore Our Work
              </Link>
              <Link to="/contact" className="btn btn-outline btn-liquid-glow">
                Start a Project
              </Link>
            </div>
          </div>
        </section>

        {/* 2. Studio Introduction */}
        <ScrollReveal>
          <section className="section" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <div className="container studio-intro-grid">
              <div className="studio-intro-text">
                <span className="subheading">The Reveal</span>
                <h2 className="headline-lg">
                  We sculpt light and shadow to reveal the truth of a story.
                </h2>
                <p className="text-muted" style={{ fontSize: '1.125rem' }}>
                  Kathputlee Arts & Films is an independent production house born from a desire to elevate visual storytelling. We operate at the intersection of high-end commercial polish and raw, narrative authenticity, bringing a distinct cinematic eye to every frame we capture.
                </p>
              </div>
              <div className="studio-intro-image-wrapper">
                <div className="studio-intro-image-glow"></div>
                <img 
                  alt="Behind the scenes" 
                  className="studio-intro-image" 
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDA6v6NGKmEFPMRTj4ucVlBzze8dEPOPvk4JRhGusSIrwz1xS9mniNc3mH5dt9EOhMW7Bq5u9_Z9FTYKdaLu1CyX2SWdeOy4sgqvNu8sCVmN-K-G44gwOc5JoXbA6GbPNMXkcQLrN_r9uitCEcmEwB0sPrcMYFXtpfyKwt1kKISLzbq7iLRM139gGjb_Fuh_1xKCkCwEpso7mZRQlmYK9qzRs_Td4yeN_ITxMrlKin4Pl5LZmCQBOOYmdwgUgkkdXbydccTSRWzdHsL"
                />
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* 3. Service Verticals */}
        <ScrollReveal>
          <section className="section" style={{ borderBottom: '1px solid rgba(255, 255, 255, 0.1)' }}>
            <div className="container">
              <h2 className="headline-lg" style={{ marginBottom: '3rem' }}>Our Disciplines</h2>
              <div className="vertical-cards-container">
                {/* Vertical Card 1 */}
                <Link to="/brand-services" className="vertical-card">
                  <img 
                    alt="Brand Services" 
                    className="v-card-bg" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBMSLYpT_FR-ZLkmltaBgHxE2T8u2AZocrxXNf836l8XUyXJHoyncPMANeTlKP1Om5zT2jK5BR6UYqhrnBpXSoKyjfEfUmHdALLReBq7hwEfbs6YjSxYTrRw6xo2pULlPiSrqecnM9ij9JMm0oFwozGH078wFe299e0zDcnUfJCDs9KmS3opBALy49rnGx5_txPidcG9y2wUfSNda_ExS96libULmGIq4Dm9pBMqHRVGgrBcLKBrsVo95nhn_zoapJCv5WeiaD0UD3H"
                  />
                  <div className="v-card-overlay"></div>
                  <div className="v-card-content">
                    <h3 className="v-card-title">Brand Services</h3>
                    <ArrowRight className="v-card-icon" size={32} />
                  </div>
                </Link>

                {/* Vertical Card 2 */}
                <Link to="/originals" className="vertical-card">
                  <img 
                    alt="Originals" 
                    className="v-card-bg" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBNKCnHG7COstI_XaPGSNtsbZfcGVOCR95TjNnHKNOaYj7ctwqJHhyCDJVMaEL2wJ7KqDm3DS4_ZAOnQ3Tyj5ccXUGc_5GVtKVRMdn-9lUqd4RjwFzvCE0wNvY2SzGiih7AtojxjThPE3RER47ngZ-x2u-lqFg_6GXcGlOkJCadF27W-BBCXDycSKpc8SYYmRtyFzqBMq2B2nMWOnfLQ4w5BhLOB9WadcggxqguKVgzqzshurT7KG7yj2gndfRRvbfRPhoGQWzpcUOr"
                  />
                  <div className="v-card-overlay"></div>
                  <div className="v-card-content">
                    <h3 className="v-card-title">Originals</h3>
                    <ArrowRight className="v-card-icon" size={32} />
                  </div>
                </Link>

                {/* Vertical Card 3 */}
                <Link to="/production-services" className="vertical-card">
                  <img 
                    alt="Production Services" 
                    className="v-card-bg" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCyV9G1k-av7lyfYv5D5GcEUGKbFBN2iyg-gU9L0akk15oj2Wrv9hllY56wmA61749W6ELt8Kh8eWwrbPQCwO3h2KIr9MGCE1XDS7qz37NyslKei_-MvUc7MO7zG1ZNNag77OAZkO2N-XHkQWImSNuzKYi-Wk62YumXIahT8ciMx22RoKQz86i_2aaAhNqxvT_FSCSIkT7FyvSL3NkcOToeZnYDw4Y-DJXDibqzjH-oD7xytMBHduXxzVh8IO7-BaSyoEP0-KvT6ysu"
                  />
                  <div className="v-card-overlay"></div>
                  <div className="v-card-content">
                    <h3 className="v-card-title">Production Services</h3>
                    <ArrowRight className="v-card-icon" size={32} />
                  </div>
                </Link>
              </div>
            </div>
          </section>
        </ScrollReveal>

        {/* 4. Behind the Scenes */}
        <ScrollReveal>
          <section className="section">
            <div className="container">
              <div style={{ marginBottom: '3rem', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                <span className="subheading">Behind the Scenes</span>
                <h2 className="headline-lg">The Craft in Motion</h2>
              </div>
              
              <div className="bts-grid">
                {/* Large Landscape */}
                <div className="bts-item bts-large">
                  <img 
                    alt="Cinematic production in India" 
                    className="bts-image" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDn9bqxdwZXTRkZgi0WptSEseHkcVoXOiwc6pljPmT41qPFAtKVq3txKiSzFEogsgMezxpYgtXbyJnNTcQT4SFDqObiky1dnM5Ttv59zNOsX-LvBT8e0B3vHaE7px--fI7j6lnIvysAjxxQ7amUA2umbuT-CvI-lz3JHzPhmO9o_mLc6keweGjDWKXGTRQnZr4LP54iOsx6V77OFs2tMPUkO0ba4eU70LySRd3Dzx_iRZDB8NvvxUVMRiWRPwPZC_g44tAGT3zm9zm4"
                  />
                  <div className="bts-overlay">
                    <span className="bts-label">01 / PRODUCTION SCALE</span>
                  </div>
                </div>
                
                {/* Vertical Portrait */}
                <div className="bts-item bts-vertical">
                  <img 
                    alt="Director looking at monitor" 
                    className="bts-image" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAHhiYqcUseju9nCKQRfY3Om546WAAZwG7EoEXl311ZbnlPR25qMU4FeBigpGGTiTOBKSZiI6e3MdTFJjZSvnMQuYEVzQR22EO1bCO95Ygnh_qRKVSbGMrtnXUnrdiX_P86S50jam2qhO8FFckpatKePtTagR-xquAnV2cXmrrMKBvyAfA2OX_gYDXzjQo3hJx9sSvXsLTLrGVPaJuJ59uiNC7ibHKV-crGXX4uCScIoQ8qIG1-wWYfnCmfxgV2SKV7sRNzQ8PHs39h"
                  />
                  <div className="bts-overlay">
                    <span className="bts-label">02 / THE DIRECTOR'S EYE</span>
                  </div>
                </div>
                
                {/* Square/Compact */}
                <div className="bts-item bts-square">
                  <img 
                    alt="Kathputlee production slate" 
                    className="bts-image" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuBAizm5n6Q2cRHycDIgq5AauWfGuUzvPwCL1aqsOwvIaTMCRy3TcZw5eL8JnJBmNjGbADp6lOAhl5nB7b7G2rPLgbJqnR2xvpO8HOdDd3tM5Ds4Wr4NsmHFodx6jzWN5d0LYxhGPSB0JqfWduKPBt4jDTiAK0E9N5oX_f9MsWbJm--Uru6SfJ-nIwhpmgMjaIMJRkogLpjpgwUTzz10DZwqyqN4Ronuj3UN3Is4cb5sb9h04ZamM4o7zbU_2uiLx9JH7GZPc4zXOsPw"
                  />
                  <div className="bts-overlay">
                    <span className="bts-label">03 / THE SLATE</span>
                  </div>
                </div>
                
                {/* Wide Landscape */}
                <div className="bts-item bts-wide">
                  <img 
                    alt="Aerial shot of production camp" 
                    className="bts-image" 
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA7q8YRvlYohnQErAnHXSJoMRgmns4uKsNhsShO_u08rDdGyE8geUmHpR1zg21ZWaSP0yi11VQaQ0dz9iXbfSBCVh47w0L8h8iOo-K8T8O4ET8xtvg4rQrMxGHUbOkm4JT8UAiPatCyqgiR0c6VcRc5I7_HhHB-q8cWaiEAVzRxQtYegR3SFMkYTDgKI6opZD3TdPrsoXfBGixZlkTeaAgKWnpX-4TGWEDj5tiuzIL4PJVK5_RcxktczwIg9sye6k4lD1w2ofIz7x7S"
                  />
                  <div className="bts-overlay">
                    <span className="bts-label">04 / FIELD OPERATIONS</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </ScrollReveal>
      </div>
    </>
  );
}
