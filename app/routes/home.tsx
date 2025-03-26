import type { Route } from './+types/home';
import HomePage  from '../pages/home-page';

export function meta({}: Route.MetaArgs) {
	return [
		{ title: 'New React Router App' },
		{ name: 'description', content: 'Welcome to React Router home page!' },
	];
}

export default function Home() {
	return <HomePage/>;
}
