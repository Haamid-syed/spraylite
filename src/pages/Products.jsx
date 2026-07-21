import SectionHeader from '../components/SectionHeader';
import ProductCard from '../components/ProductCard';
import CTABanner from '../components/CTABanner';
import { products, comingSoonProducts } from '../data/products';
import './Products.css';

const activeProducts = products.filter((p) => p.badge !== 'Discontinued');
const discontinuedProducts = products.filter((p) => p.badge === 'Discontinued');

export default function Products() {
  return (
    <main className="products-page">
      {/* Hero */}
      <section className="products-hero">
        <div className="container">
          <SectionHeader
            label="Our Range"
            title="Products for Every Kitchen"
            subtitle="From everyday cooking to gourmet finishes — find the perfect spray for your needs."
          />
        </div>
      </section>

      {/* Product Grid */}
      <section className="products-grid-section">
        <div className="container">
          <div className="products-grid">
            {activeProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </section>

      {/* Coming Soon */}
      <section className="products-coming-soon">
        <div className="container">
          <SectionHeader
            label="Coming Soon"
            title="New Flavors on the Way"
            subtitle="Exciting new additions are being prepared for your kitchen."
          />
          <div className="products-grid products-grid--coming-soon">
            {comingSoonProducts.map((product) => (
              <ProductCard key={product.id} product={product} comingSoon />
            ))}
          </div>
        </div>
      </section>

      {/* Discontinued */}
      {discontinuedProducts.length > 0 && (
        <section className="products-discontinued">
          <div className="container">
            <SectionHeader
              label="Archive"
              title="Discontinued Products"
            />
            <div className="products-grid products-grid--small">
              {discontinuedProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>
          </div>
        </section>
      )}

      <CTABanner />
    </main>
  );
}
