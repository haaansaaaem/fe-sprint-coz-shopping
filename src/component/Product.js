import './product.css';


export default function Product({ title, image_url }) {
  return (
    <div className="product-container">
      <img src={image_url} alt={title} className="product-image" />
      <h4 className="product-title">{title}</h4>
    </div>
  );
}
