// src/components/ProductCard.jsx
import "../styles/ProductCard.css";

function ProductCard({
  image,
  label,
  category,
  name,
  price,
  oldPrice,
  isNew,
  discount,
}) {
  return (
    <div className="product-card">
      <div
        className="product-image"
        style={{ backgroundImage: `url(${image})` }}
      >
        {isNew && <span className="new-label">NEW!</span>}
        {discount && <span className="discount">{discount}% OFF</span>}
      </div>
      <div className="product-info">
        <p className="category">{category}</p>
        <p className="name">{name}</p>
        <div className="price-block">
          {oldPrice && <span className="old-price">{oldPrice} PLN</span>}
          <span className="price">{price} PLN</span>
        </div>
      </div>
    </div>
  );
}

export default ProductCard;
