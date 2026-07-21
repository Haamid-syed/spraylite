import SectionHeader from '../components/SectionHeader';
import PillarCard from '../components/PillarCard';
import CTABanner from '../components/CTABanner';
import { pillars } from '../data/products';
import './About.css';

export default function About() {
  return (
    <main className="about">
      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <SectionHeader
            label="Our Story"
            title="Reinventing the Way You Cook"
            subtitle="Spray Lite is a culinary innovation brand designed to revolutionize healthy cooking through advanced aerosol technology."
          />
        </div>
      </section>

      {/* Brand Story */}
      <section className="about-story">
        <div className="container about-story__inner">
          <div className="about-story__content">
            <h2 className="about-story__title">The Spray Lite Story</h2>
            <p>
              Spray Lite bridges the gap between flavor and fitness. By utilizing an
              advanced American aerosol formulation, we offer a direct alternative to
              traditional oils, butter, and ghee.
            </p>
            <p>
              Unlike traditional pouring oils, Spray Lite focuses on <strong>portion
              control and calorie reduction</strong>. Through a precise mechanism combining
              oil, soy lecithin, water, and propellant, it ensures food doesn't stick while
              reducing fat intake by over 98% per serving.
            </p>
            <p>
              Designed for the modern health-conscious kitchen — catering to air-frying,
              baking, grilling, and everyday cooking.
            </p>
          </div>
          <div className="about-story__visual">
            <div className="about-story__visual-placeholder">🍳</div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="about-mechanism">
        <div className="container">
          <SectionHeader
            label="Technology"
            title="How Spray Lite Works"
            subtitle="A precise blend of ingredients delivered through a non-clogging precision nozzle."
          />
          <div className="about-mechanism__steps">
            {[
              { icon: '🫒', label: 'Oil', desc: 'Premium quality cooking oils — from sunflower to olive, avocado to sesame.' },
              { icon: '🧪', label: 'Emulsifier', desc: 'Soy lecithin creates a perfect emulsion for even, consistent coating.' },
              { icon: '💧', label: 'Water', desc: 'Blended with water to create the optimal spray consistency.' },
              { icon: '💨', label: 'Propellant', desc: 'Food-grade propellant delivers a fine, even mist through our precision nozzle.' },
            ].map((step, i) => (
              <div key={i} className="about-mechanism__step">
                <div className="about-mechanism__step-icon">{step.icon}</div>
                <h3>{step.label}</h3>
                <p>{step.desc}</p>
                {i < 3 && <span className="about-mechanism__step-arrow">→</span>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Calorie Comparison */}
      <section className="about-comparison">
        <div className="container">
          <SectionHeader
            label="The Difference"
            title="See the Calorie Impact"
            subtitle="A single comparison tells the whole story."
          />
          <div className="about-comparison__cards">
            <div className="about-comparison__card about-comparison__card--oil">
              <div className="about-comparison__card-icon">🥄</div>
              <h3>1 Spoon of Oil</h3>
              <div className="about-comparison__stat">~115 <span>calories</span></div>
              <div className="about-comparison__stat-sub">13.6g fat</div>
            </div>
            <div className="about-comparison__vs">VS</div>
            <div className="about-comparison__card about-comparison__card--spray">
              <div className="about-comparison__card-icon">🫧</div>
              <h3>1 Spray of Spray Lite</h3>
              <div className="about-comparison__stat">&lt;1.5 <span>calories</span></div>
              <div className="about-comparison__stat-sub">&lt;0.25g fat</div>
              <div className="about-comparison__badge">98% Less Fat</div>
            </div>
          </div>
        </div>
      </section>

      {/* Pillars */}
      <section className="about-pillars">
        <div className="container">
          <SectionHeader
            label="Why Choose Us"
            title="Built on Four Pillars"
          />
          <div className="about-pillars__grid">
            {pillars.map((pillar, i) => (
              <PillarCard key={i} {...pillar} />
            ))}
          </div>
        </div>
      </section>

      <CTABanner />
    </main>
  );
}
