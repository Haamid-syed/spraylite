import Button from './Button';
import './CTABanner.css';

export default function CTABanner() {
  return (
    <section className="cta-banner">
      <div className="container cta-banner__inner">
        <div className="cta-banner__content">
          <h2 className="cta-banner__title">Ready to Cook Healthier?</h2>
          <p className="cta-banner__subtitle">
            Spray Lite is available on Amazon. Order now and revolutionize your kitchen.
          </p>
        </div>
        <div className="cta-banner__actions">
          <Button
            variant="secondary"
            size="lg"
            href="https://www.amazon.in"
            external
          >
            🛒 Shop on Amazon
          </Button>
        </div>
      </div>
    </section>
  );
}
