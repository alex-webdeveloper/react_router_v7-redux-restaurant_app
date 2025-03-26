import cartIcon from '/shopping-cart-solid.svg';
import { Link } from 'react-router';
import { useAppSelector } from '~/redux/hooks';
import type { RootState  } from '~/redux/store';
import style from './header.module.scss';

export default function Header() {
    const { totalPrice } = useAppSelector((state: RootState) => state.restaurant);

    return (
        <>
            <header className={style.header}>
                <Link to={'/'} className={style.header__link}>Home</Link>
                <Link to={'/menu'} className={style.header__link}>Menu</Link>
                <Link to={'/cart'} className={style.header__link}>
                    <img className={style.header__cart} src={cartIcon} alt="cart"></img>
                    Total: {totalPrice} $
                </Link>
            </header>
        </>
    )
};