import React, { useState, useEffect } from "react";
import Header from "./Header";
import ProductList from "./ProductList";
import Cart from "./Cart";
import Footer from "./Footer";
import "./productstyling.css";

const Productpage = () => {
	const [itemsInCart, setItemsInCart] = useState([]);
	const [reload, setReload] = useState(true);
	const [products, setProducts] = useState([]);

    useEffect(() => {
		fetchProducts();}, 
    []);

	const fetchProducts = async () => {
		try {
		  const response = await fetch('http://localhost:5001/products');
		  if (!response.ok) {
			throw new Error('Failed to fetch products');
		  }
		  const data = await response.json();
		  setProducts(data);
		} catch (error) {
		  console.error('Error fetching products:', error.message);
		}
	  };
	  
	useEffect(() => {
		const data = localStorage.getItem("itemsInCart");
		const storedCartItems = data ? JSON.parse(data) : [];
		setItemsInCart(storedCartItems);
		setReload(true);
	}, []);

	useEffect(() => {
		if (itemsInCart.length <= 0 && reload) {
			const data = localStorage.getItem("itemsInCart");
			const storedCartItems = data ? JSON.parse(data) : [];
			setReload(false);
			setItemsInCart(storedCartItems);
			return;
		}
		localStorage.setItem("itemsInCart", JSON.stringify(itemsInCart));
	}, [itemsInCart, reload]);

	const handleAddToCart = (product) => {
		const exist = itemsInCart.find((item) => item.id === product.id);
		if (exist) {
			setItemsInCart(
				itemsInCart.map((item) =>
					item.id === product.id
						? { ...exist, quantity: exist.quantity + 1 }
						: item
				)
			);
		} else {
			setItemsInCart([...itemsInCart, { ...product, quantity: 1 }]);
		}
	};

	const handleRemoveItem = (id) => {
		itemsInCart.forEach((item, index) => {
			if (item.id === id) {
				item.quantity--;
				if (item.quantity === 0) {
					itemsInCart.splice(index, 1);
				}
			}
		});
		setItemsInCart([...itemsInCart]);
	};

	
	return (
		<div className="product-page">
			<Header />
			<table>
				<tr>
					<td>
						<ProductList products={products} onAddToCart={handleAddToCart} />
					</td>
					<td className="cart" style={{ verticalAlign: "top" }}>
						<h2>Shopping Cart</h2>
						<Cart itemsInCart={itemsInCart} onRemove={handleRemoveItem} />
					</td>
				</tr>
			</table>
			<Footer />
		</div>
	);
};

export default Productpage;
