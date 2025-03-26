
interface ButtonAddToCartProps {
	onAddToCart: () => void;
}

export default function ButtonAddToCart({ onAddToCart }: ButtonAddToCartProps) {
	return (
		<button className="menu__btn" onClick={() => onAddToCart()}>
			Add to cart
		</button>
	);
}
