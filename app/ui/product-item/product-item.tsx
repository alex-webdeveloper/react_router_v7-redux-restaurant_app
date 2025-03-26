import { useEffect } from 'react';
import { useParams } from 'react-router';
import { useAppSelector, useAppDispatch } from '~/redux/hooks';
import type { RootState, AppDispatch } from '~/redux/store';
import { fetchMenuItemById } from '~/redux/slices/restaurantThunks';
import { addItemToCart } from '~/redux/slices/restaurantSlice';
import ButtonAddToCart from '../button-add-to-cart';
import styles from './product-item.module.scss';
import SpinnerItem from '../spinner-item';

export default function ProductItem() {
	const { id } = useParams<{ id: string }>();
	const dispatch: AppDispatch = useAppDispatch();
	const { menu, loading, error } = useAppSelector(
		(state: RootState) => state.restaurant
	);

	useEffect(() => {
		dispatch(fetchMenuItemById(Number(id)));
	}, [dispatch]);

	if (error) {
		return (
			<main className="pt-16 p-4 text-red-700 text-2xl text-center container mx-auto">
				<h1>{error}</h1>
			</main>
		);
	}

	return (
		<div className={styles.product_page}>
			<div className={`menu__item ${styles.product_block}`}>
				<div className="menu__title">{menu[0]?.title}</div>
				{loading ? (
					<SpinnerItem />
				) : (
					<img
						className="menu__img"
						src={menu[0]?.url}
						alt={menu[0]?.title}></img>
				)}
				<div className="menu__category">
					Category: <span>{menu[0]?.category}</span>
				</div>
				<div className="menu__price">
					Price: <span>{menu[0]?.price}$</span>
				</div>
				<ButtonAddToCart
					onAddToCart={() => dispatch(addItemToCart(menu[0]?.id))}
				/>
				<span
					className={`menu__category_Img ${menu[0]?.category}`}></span>
			</div>
		</div>
	);
}

// export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
// 	// const error = useRouteError();
// 	console.log(error, 'err');

// if (error?.status === 404) {
// 	return (
// 		<div className="pt-16 p-4 text-red-700 text-2xl text-center container mx-auto">
// 			<h2>{error.data?.message || 'Item not found'}</h2>
// 		</div>
// 	);
// }
// if (isRouteErrorResponse(error)) {
//     switch (error.status) {
//         case 400:
//             return (
//                 <div className="pt-16 p-4 text-red-700 text-2xl text-center container mx-auto">
//                     <h2>{error.message}</h2>
//                     {/* <p>{error.data}</p> */}
//                 </div>
//             );
//         case 404:
//             return (
//                 <div className="pt-16 p-4 text-red-700 text-2xl text-center container mx-auto">
//                     <h2>Not Found</h2>
//                     {/* <p>{error.data}</p> */}
//                 </div>
//             );
//     }
// }

// Пробрасываем ошибку выше для глобального обработчика
// throw error;
// }
