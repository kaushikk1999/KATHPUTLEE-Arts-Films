import './SectionIntro.css';
import ScrollReveal from './ScrollReveal';

export default function SectionIntro({ title, subtitle, centered = false }) {
  return (
    <ScrollReveal className={`section-intro ${centered ? 'centered' : ''}`}>
      {subtitle && <h4 className="intro-subtitle text-primary">{subtitle}</h4>}
      <h2 className="intro-title">{title}</h2>
    </ScrollReveal>
  );
}
