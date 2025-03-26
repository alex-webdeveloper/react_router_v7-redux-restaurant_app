import { createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';
import type { MenuItem, Order} from './types';

const API_BASE = 'http://localhost:3004';
// Асинхронный thunk для загрузки меню
export const fetchMenu = createAsyncThunk<MenuItem[], void>(
    'restaurant/fetchMenu',
    async (_, thunkAPI) => {
        try {
            const response = await axios.get<MenuItem[]>(`${API_BASE}/menu`);
            return response.data;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message || 'Failed to load menu');
        }
    }
);

// Асинхронный thunk для получения одного элемента меню по ID
export const fetchMenuItemById = createAsyncThunk<MenuItem | undefined, number>(
    'restaurant/fetchMenuItemById',
    async (id, thunkAPI) => {
        try {
            const response = await axios.get<MenuItem[]>(`${API_BASE}/menu`);
            const menuItems = response.data;
            const res = menuItems.find((item) => item.id === id);
            if (!res) return thunkAPI.rejectWithValue('This Product not found');
            return res;
        } catch (error: any) {
            return thunkAPI.rejectWithValue(error.message || 'Failed to fetch menu item');
        }
    }
);

// Асинхронный thunk для создания нового заказа
export const createOrder = createAsyncThunk<boolean, MenuItem[]>(
    'restaurant/createOrder',
    async (orderItems, thunkAPI) => {
        try {
            // Получение текущих заказов для расчета номера следующего заказа
            const ordersResponse = await axios.get<Order[]>(`${API_BASE}/orders`);
            const orders = ordersResponse.data;

            const newOrder: Order = {
                id: orders.length + 1,
                order: orderItems,
            };

            await axios.post(`${API_BASE}/orders`, newOrder);
            return true;
        } catch (error: any) {
            return thunkAPI.rejectWithValue('Failed to create order');
        }
    }
);