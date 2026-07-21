import Button from '../components/Button';
import StatCard from '../components/StatCard';
import PillarCard from '../components/PillarCard';
import ProductCarousel from '../components/ProductCarousel';
import SectionHeader from '../components/SectionHeader';
import CTABanner from '../components/CTABanner';
import { products, stats, pillars } from '../data/products';
import './Home.css';

const featuredProducts = products.filter((p) => p.badge !== 'Discontinued').slice(0, 5);

export default function Home() {
  return (
    <main className="home">
      {/* Hero */}
      <section className="hero">
        <div className="container hero__inner">
          <div className="hero__content">
            <span className="hero__badge">🌿 Healthy Cooking Revolution</span>
            <h1 className="hero__title">
              Cook with <span className="hero__title-highlight">Less Fat</span>,
              <br />
              Live with <span className="hero__title-highlight">More Flavor</span>
            </h1>
            <p className="hero__subtitle">
              Spray Lite uses advanced aerosol technology to replace traditional oils,
              butter, and ghee — reducing fat intake by over 98% per serving without
              compromising taste.
            </p>
            <div className="hero__actions">
              <Button variant="primary" size="lg" to="/products">
                Explore Products
              </Button>
              <Button variant="outline" size="lg" href="https://www.amazon.in" external>
                🛒 Buy on Amazon
              </Button>
            </div>
          </div>
          <div className="hero__visual">
            <div className="hero__visual-placeholder">
              <span>🫧</span>
            </div>
          </div>
        </div>
        <div className="hero__gradient"></div>
      </section>

      {/* Stats Bar */}
      <section className="stats-bar">
        <div className="container stats-bar__inner">
          {stats.map((stat, i) => (
            <StatCard key={i} {...stat} />
          ))}
        </div>
      </section>

      {/* Pillars */}
      <section className="pillars">
        <div className="container">
          <SectionHeader
            label="Why Spray Lite"
            title="Four Pillars of Better Cooking"
            subtitle="From health to efficiency, here's why thousands of kitchens trust Spray Lite."
          />
          <div className="pillars__grid">
            {pillars.map((pillar, i) => (
              <PillarCard key={i} {...pillar} />
            ))}
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="featured-products">
        <div className="container">
          <SectionHeader
            label="Our Products"
            title="Explore Our Range"
            subtitle="From everyday cooking to gourmet finishes — there's a Spray Lite for every dish."
          />
          <ProductCarousel products={featuredProducts} />
          <div className="featured-products__more">
            <Button variant="outline" size="md" to="/products">
              View All Products →
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <CTABanner />
    </main>
  );
}
