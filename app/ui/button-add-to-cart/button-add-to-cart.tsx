
export default function ButtonAddToCart({ onAddToCart }) {
	return (
		<button
			className="menu__btn"
			onClick={() => onAddToCart()}>
			Add to cart
		</button>
	);
}
