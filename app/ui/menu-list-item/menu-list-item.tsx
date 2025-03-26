import { Link } from 'react-router';
import ButtonAddToCart from '../button-add-to-cart/';
import type { MenuItem } from '~/redux/slices/types';
interface MenuListItemProps {
	item: MenuItem;
	onAddToCart: (id: number) => void;
}

export function MenuListItem({ item, onAddToCart }: MenuListItemProps) {
	const { title, price, url, category, id } = item;

	return (
		<li className="menu__item">
			<div className="menu__title">{title}</div>
			<Link to={`/menu/${id}`}>
				<img className="menu__img" src={url} alt={title}></img>
			</Link>
			<div className="menu__category">
				Category: <span>{category}</span>
			</div>
			<div className="menu__price">
				Price: <span>{price}$</span>
			</div>
			<ButtonAddToCart onAddToCart={() => onAddToCart(id)} />
			<span className={`menu__category_Img ${category}`}></span>
		</li>
	);
}

export default MenuListItem;
