import cartIcon from '/shopping-cart-solid.svg';
import { Link  } from 'react-router';
import { useAppSelector } from '~/redux/hooks';
import type { RootState  } from '~/redux/store';
import style from './header.module.scss';
import { BASE_PATH } from '~/lib/constants';

export default function Header() {
    const { totalPrice } = useAppSelector((state: RootState) => state.restaurant); 

    return (
        <>
            <header className={style.header}>
                <Link to={`${BASE_PATH}/`} className={style.header__link}>Home</Link>
                <Link to={`${BASE_PATH}/menu`} className={style.header__link}>Menu</Link>
                <Link to={`${BASE_PATH}/cart`} className={style.header__link}>
                    <img className={style.header__cart} src={cartIcon} alt="cart"></img>
                    Total: {totalPrice} $
                </Link>
            </header>
        </>
    )
};