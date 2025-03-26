import type { Route } from './+types/cart';
import CartPage from '~/pages/cart-page';

export function meta({}: Route.MetaArgs) {
    return [
        { title: 'Cart' },
        { name: 'description', content: 'Cart page' },
    ];
}

export default function Cart() {
    return <CartPage/>;
}