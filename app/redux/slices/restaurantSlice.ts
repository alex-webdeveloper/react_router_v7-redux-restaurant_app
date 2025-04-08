import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import { fetchMenu, fetchMenuItemById, createOrder } from './restaurantThunks';
import type { MenuItem, RestaurantState } from './types';

const initialState: RestaurantState = {
	menu: [],
	loading: true,
    cart: [],
	totalPrice: 0,
    error: null,
    orderSuccess: false
};

const restaurantSlice = createSlice({
	name: 'restaurant',
	initialState,
	reducers: {
        addItemToCart(state, action: PayloadAction<number>) {
            const id = action.payload;
            const itemInCart = state.cart.find(item => item.id === id);

            if (itemInCart) {
                itemInCart.qtty += 1;
                state.totalPrice += itemInCart.price;
            } else {
                const menuItem = state.menu.find(item => item.id === id);
                if (menuItem) {
                    state.cart.push({ ...menuItem, qtty: 1 });
                    state.totalPrice += menuItem.price;
                }
            }
        },
		deleteFromCart(state, action: PayloadAction<number>) {
            const id = action.payload;
            const itemIndex = state.cart.findIndex(item => item.id === id);
            if (itemIndex >= 0) {
                const item = state.cart[itemIndex];
                state.totalPrice -= item.price * item.qtty;
                state.cart.splice(itemIndex, 1);
            }
        }
    },
    extraReducers: (builder) => {
        builder
            //fetchMenu
            .addCase(fetchMenu.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMenu.fulfilled, (state, action: PayloadAction<MenuItem[]>) => {
                state.menu = action.payload;
                state.loading = false;
                state.error = null;
            })
            .addCase(fetchMenu.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            // fetchMenuItemById
            .addCase(fetchMenuItemById.pending, (state) => {
                state.loading = true;
                state.error = null;
            })
            .addCase(fetchMenuItemById.fulfilled, (state, action) => {
                if (action.payload) {
                    state.menu = [action.payload]; // Обновляем меню только одним элементом
                    state.loading = false;
                }
            })
            .addCase(fetchMenuItemById.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
            })
            // createOrder
            .addCase(createOrder.pending, (state) => {
                state.loading = true;
                state.orderSuccess = false;
                state.error = null;
            })
            .addCase(createOrder.fulfilled, (state) => {
                state.loading = false;
                state.error = null;
                state.cart = [];
                state.orderSuccess = true;
            })
            .addCase(createOrder.rejected, (state, action) => {
                state.loading = false;
                state.error = action.payload as string;
                state.orderSuccess = false;
            });
            
    },
});

export const {
    addItemToCart,
    deleteFromCart
} = restaurantSlice.actions;
export default restaurantSlice.reducer;
