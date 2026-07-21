import { useRef } from 'react';
import ProductCard from './ProductCard';
import './ProductCarousel.css';

export default function ProductCarousel({ products }) {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (!scrollRef.current) return;
    const scrollAmount = 320;
    scrollRef.current.scrollBy({
      left: direction === 'left' ? -scrollAmount : scrollAmount,
      behavior: 'smooth',
    });
  };

  return (
    <div className="product-carousel">
      <button
        className="product-carousel__arrow product-carousel__arrow--left"
        onClick={() => scroll('left')}
        aria-label="Scroll left"
      >
        ‹
      </button>
      <div className="product-carousel__track" ref={scrollRef}>
        {products.map((product) => (
          <div className="product-carousel__slide" key={product.id}>
            <ProductCard product={product} />
          </div>
        ))}
      </div>
      <button
        className="product-carousel__arrow product-carousel__arrow--right"
        onClick={() => scroll('right')}
        aria-label="Scroll right"
      >
        ›
      </button>
    </div>
  );
}
