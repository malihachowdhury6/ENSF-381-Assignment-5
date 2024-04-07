import React from "react";
import CartItem from "./CartItem";
import "./productstyling.css";

const Cart = ({
	itemsInCart,
	onRemove,
	decreaseQuantity,
	increaseQuantity,
}) => {
	const totalPrice = itemsInCart.reduce(
		(acc, item) => acc + item.price * item.quantity,
		0
	);

	return (
		<div className="cart">
			{itemsInCart.map((item) => (
				<CartItem
					key={item.id}
					item={item}
					onRemove={onRemove}
					decreaseQuantity={decreaseQuantity}
					increaseQuantity={increaseQuantity}
				/>
			))}

			<div>Total (in cart): ${totalPrice.toFixed(2)}</div>
		</div>
	);
};
export default Cart;
