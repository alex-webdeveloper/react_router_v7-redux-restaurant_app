export interface MenuItem {
    id: number;
    title: string;
    url: string;
    category: string;
    price: number;
}

export interface CartItem extends MenuItem {
    qtty: number; // Количество товара в корзине
}

export interface RestaurantState {
    menu: MenuItem[]; // Меню товаров
    loading: boolean; // Флаг загрузки
    cart: CartItem[]; // Корзина товаров
    totalPrice: number; // Общая стоимость товаров в корзине
    error: string | null; // Ошибка загрузки
    orderSuccess: boolean;
}
export interface Order {
    id: number;
    order: MenuItem[];
}