import React from "react";
import "./productstyling.css";

const CartItem = ({ item, onRemove }) => {
	const totalPrice = (item.price * item.quantity).toFixed(2);

	return (
		<div className="cart-item">
			<img className="item-image" src={item.image} alt={item.name} />
			<p>{item.name}</p>
			<p>Price: ${item.price}</p>
			<p>Quantity: {item.quantity}</p>
			<p>Total: ${totalPrice}</p>
			<button className="remove-item" onClick={() => onRemove(item.id)}>
				Remove
			</button>
		</div>
	);
};
export default CartItem;
