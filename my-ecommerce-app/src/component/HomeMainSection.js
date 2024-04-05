import React, { useEffect, useState } from "react";
import reviews from "../data/reviews.js";
import { Link } from "react-router-dom";
import "./homepagestyling.css";

function HomeMainSection() {
	const [randomReviews, setReviews] = useState([]);

	useEffect(() => {
		const shuffledReviews = reviews.sort(() => Math.random() - 0.5);
		const selectedReviews = shuffledReviews.slice(0, 2);
		setReviews(selectedReviews);
	}, []);

	return (
		<main className="main">
			<section className="about-us">
				<h1>About Us</h1>
				<p>
					Welcome to our online store! We are passionate about providing
					high-quality products and exceptional customer service. Learn more
					about our story and commitment to your satisfaction.
				</p>
			</section>

			<section className="shop-now">
				<Link to="/products">
					<button className="button">Shop Now</button>
				</Link>
			</section>

			<section className="customer-reviews">
				<h2>Customer Reviews</h2>
				{randomReviews.map((review, index) => (
					<div key={index} className="review">
						<p>{review.customerName}</p>
						<p>{review.reviewContent}</p>
						<p>Rating: {"★".repeat(review.stars)}</p>
					</div>
				))}
			</section>
		</main>
	);
}

export default HomeMainSection;
