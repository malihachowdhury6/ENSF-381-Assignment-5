import React, { useState } from "react";
import "./productstyling.css";

const ProductItem = ({ product, onAddToCart }) => {
	const [showDetails, setShowDetails] = useState(false);

	return (
		<div className="product-item">
			<img className="product-img" src={product.image} alt={product.name} />
			<p
				onMouseEnter={() => setShowDetails(true)}
				onMouseLeave={() => setShowDetails(false)}
			>
				{product.name}
			</p>
			<p>Price: ${product.price}</p>
			<button className="product-btn" onClick={() => onAddToCart(product)}>
				Add to Cart
			</button>
			{showDetails && <p>{product.description}</p>}
		</div>
	);
};

export default ProductItem;
