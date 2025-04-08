
export interface MenuItem {
    id: number;
    name: string;
    price: number;
    url: string; // URL изображения
}

export interface Order {
    id: number;
    order: MenuItem[];
}

const API_BASE = 'http://localhost:3004';

async function getResource<T>(url: string): Promise<T> {
    const response = await fetch(`${API_BASE}${url}`);
    if (!response.ok) {
        throw new Error(`Could not fetch ${url}, received ${response.status}`);
    }
    return await response.json();
}

export async function getMenuItems(): Promise<MenuItem[]> {
    return await getResource<MenuItem[]>('/menu/');
}

// Получение одного элемента меню по ID
export async function getItem(id: number): Promise<MenuItem | undefined> {
    const menuItems = await getResource<MenuItem[]>('/menu/');
    return menuItems.find((item) => item.id === id);
}

async function getOrderNumber(): Promise<number> {
    const orders = await getResource<Order[]>('/orders/');
    return orders.length + 1;
}

export async function setOrder(order: MenuItem[]): Promise<boolean> {
    const orderNumber = await getOrderNumber();
    const newOrder: Order = {
        id: orderNumber,
        order: order,
    };

    const response = await fetch(`${API_BASE}/orders/`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        body: JSON.stringify(newOrder),
    });

    if (!response.ok) {
        throw new Error('Failed to create order');
    }
    return response.ok;
}