import React from "react";
import { Link } from "react-router-dom";

export default function Home(){
  return (
    <div className="home-container">

      {/* HERO SECTION */}
      <section className="hero-banner">
        <div className="hero-overlay">
          <h1 className="hero-title">🥃 Barrel & Bottle</h1>
          <p className="hero-subtitle">
            Premium Wine • Exclusive Whiskey • Crafted Beer
          </p>
          <Link to="/shop">
            <button className="hero-cta">Explore Collection</button>
          </Link>
        </div>
      </section>

      {/* BRAND STRIP */}
      <section className="brand-strip">
        <h2>Luxury Spirits for Elite Taste</h2>
      </section>

      {/* FEATURED CATEGORIES */}
      <section className="featured-categories">
        <h2>Featured Collections</h2>
        <div className="category-cards">
          <Link to="/shop">
            <div className="cat-card wine">
              <h3>🍷 Premium Wines</h3>
            </div>
          </Link>
          <Link to="/shop">
            <div className="cat-card whiskey">
              <h3>🥃 Rare Whiskeys</h3>
            </div>
          </Link>
          <Link to="/shop">
            <div className="cat-card beer">
              <h3>🍺 Craft Beers</h3>
            </div>
          </Link>
        </div>
      </section>

      {/* PARALLAX PROMO */}
      <section className="parallax-banner">
        <div className="parallax-content">
          <h2>Exclusive Reserve Collection</h2>
          <p>Handpicked premium bottles aged to perfection</p>
        </div>
      </section>

      {/* TESTIMONIALS */}
      <section className="testimonials">
        <h2>Customer Experience</h2>
        <div className="testimonial-grid">
          <div className="testimonial">
            “Absolutely premium experience. Best whiskey collection!”
          </div>
          <div className="testimonial">
            “Luxury design and smooth ordering process. Loved it.”
          </div>
          <div className="testimonial">
            “Feels like a high-end alcohol boutique online.”
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="luxury-footer">
        <h3>🥃 Barrel & Bottle</h3>
        <p>Delivering Luxury Spirits Experience</p>
      </footer>

    </div>
  );
}
