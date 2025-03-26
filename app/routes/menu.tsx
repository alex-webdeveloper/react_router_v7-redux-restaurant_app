import type { Route } from './+types/menu';
import MenuPage from '~/pages/menu-page';

export function meta({}: Route.MetaArgs) {
    return [
        { title: 'Menu' },
        { name: 'description', content: 'Menu page' },
    ];
}

export default function Menu() {
    return <MenuPage />;
}