// import { menuLoaded, menuRequested, menuError, addedToCart } from '../../actions';
// import { Spinner } from 'reactstrap';
// import Error from '../error';
import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from '../../redux/hooks';
import type { RootState, AppDispatch } from '../../redux/store';
import { fetchMenu } from '~/redux/slices/restaurantThunks';
import { addItemToCart } from '~/redux/slices/restaurantSlice';
import MenuListItem from '../menu-list-item';
import SpinnerItem from '../spinner-item';
import styles from './menu-list.module.scss';

export default function MenuList() {
	const dispatch: AppDispatch = useAppDispatch();
	const { menu, loading, error } = useAppSelector((state: RootState) => state.restaurant);

    useEffect(() => {
        if (menu.length < 2) dispatch(fetchMenu());
    }, [dispatch]);
 
    if (loading) return <SpinnerItem />;
    if (error) {
		return (
			<main className="pt-16 p-4 text-red-700 text-2xl text-center container mx-auto">
				<h1>{error}</h1>
			</main>
		);
	}

	return (
        <div>
            <ul className={styles.menu__list}>
                {menu.map(item => <MenuListItem key={item.id} item={item} onAddToCart={() => dispatch(addItemToCart(item.id)) } />)}
            </ul>

		</div>
	);
}


