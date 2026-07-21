import Button from './Button';
import './ProductCard.css';

export default function ProductCard({ product, comingSoon = false }) {
  const { name, tagline, description, badge, color } = product;

  return (
    <div className={`product-card ${comingSoon ? 'product-card--coming-soon' : ''}`}>
      <div
        className="product-card__image"
        style={{ background: `linear-gradient(135deg, ${color}22, ${color}44)` }}
      >
        <div className="product-card__image-placeholder" style={{ color }}>
          🫧
        </div>
        {badge && (
          <span
            className={`product-card__badge ${badge === 'Discontinued' ? 'product-card__badge--muted' : ''}`}
          >
            {badge}
          </span>
        )}
        {comingSoon && <span className="product-card__badge product-card__badge--soon">Coming Soon</span>}
      </div>
      <div className="product-card__body">
        <h3 className="product-card__name">{name}</h3>
        {tagline && <p className="product-card__tagline">{tagline}</p>}
        {description && <p className="product-card__description">{description}</p>}
        {!comingSoon && badge !== 'Discontinued' && (
          <div className="product-card__actions">
            <Button
              variant="primary"
              size="sm"
              href="https://www.amazon.in"
              external
            >
              Buy on Amazon
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
