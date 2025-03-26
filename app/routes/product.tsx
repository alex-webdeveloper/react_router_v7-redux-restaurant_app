import type { Route } from './+types/product';
import ProductPage from '~/pages/product-page';

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'Product' },
		{ name: 'description', content: 'Product of menu' },
	];
}

export default function Product() {
	return <ProductPage />;
}
