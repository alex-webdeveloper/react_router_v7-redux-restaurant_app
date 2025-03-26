import { useAppSelector } from '~/redux/hooks';
import type { RootState } from '~/redux/store';
import { useAppDispatch } from '~/redux/hooks';
import { deleteFromCart } from '~/redux/slices/restaurantSlice';
import type { AppDispatch } from '~/redux/store';
import { createOrder } from '~/redux/slices/restaurantThunks';
import styles from './cart-table.module.scss';

export default function CartTable() {
	const dispatch: AppDispatch = useAppDispatch();
	const { cart, orderSuccess, error } = useAppSelector(
		(state: RootState) => state.restaurant
	);
	if (cart.length === 0) {
		return <div className={styles.cart__title}> Ваша корзина пуста :(</div>;
	}
	if (error) {
		// setTimeout(() => navigate('/'), 2000);
		return (
			<main className="pt-16 p-4 text-red-700 text-2xl text-center container mx-auto">
				<h1>{error}</h1>
			</main>
		);
	}

	return (
		<div className="cart">
			<h2 className={styles.cart__title}>Ваш заказ:</h2>
			<div className={styles.cart__list}>
				{cart.map((item) => {
					const { title, price, url, id, qtty } = item;
					return (
						<div key={id} className={styles.cart__item}>
							<img
								src={url}
								className={styles.cart__item_img}
								alt={title}></img>
							<div className={styles.cart__item_title}>
								{title}
							</div>
							<div className={styles.cart__item_price}>
								{price}$ * {qtty} = {price * qtty}$
							</div>
							<div
								onClick={() => dispatch(deleteFromCart(id))}
								className={styles.cart__close}>
								&times;
							</div>
						</div>
					);
				})}
			</div>
			<button
				onClick={() => {
					dispatch(createOrder(cart));
				}}
				className={styles.order}>
				Оформить заказ
			</button>
		</div>
	);
}
