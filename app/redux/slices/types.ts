export interface MenuItem {
    id: number;
    title: string;
    url: string;
    category: string;
    price: number;
}

export interface CartItem extends MenuItem {
    qtty: number;
}

export interface RestaurantState {
    menu: MenuItem[];
    loading: boolean;
    cart: CartItem[];
    totalPrice: number;
    error: string | null;
    orderSuccess: boolean;
}
export interface Order {
    id: number;
    order: MenuItem[];
}