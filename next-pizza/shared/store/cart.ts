import { create } from "zustand";
import { Api } from "../services/api-client";
import { getCartDetails } from "../lib";
import { CartStateItem } from "../lib/get-cart-details";

export interface CartState {
    loading: boolean;
    error: boolean;
    totalAmount: number;
    items: CartStateItem[];

    /* Получение товаров из корзины */
    fetchCartItems: () => Promise<void>;

    /* Запрос на обновление количества товара */
    updateItemQuantity: (id: number, quantity: number) => Promise<void>;

    /* Запрос на добавление товара в корзину */
    addCartItem: (values: any) => Promise<void>;

    /* Запрос на удаление товара из корзины */
    removeCartItem: (id: number) => Promise<void>;
}

export const useCartStore = create<CartState>((set, get) => ({
    items: [],
    error: false,
    loading: false, // Изменено на false, чтобы не было ложного состояния загрузки
    // loading: true, 
    totalAmount: 0,

    fetchCartItems: async () => {
    // const currentItems = get().items;
    // if (currentItems.length > 0) return; // Предотвращаем повторный запрос

    try {
        set({ loading: true, error: false });
        const data = await Api.cart.getCart();
        set(getCartDetails(data));
    } catch (error) {
        console.log(error);
        set({ error: true });
    } finally {
        set({ loading: false });
    }
},
    
    updateItemQuantity: async (id: number, quantity: number) => { 
        try {
            set({ loading: true, error: false });
            const data = await Api.cart.updateItemQuantity(id, quantity);
            set(getCartDetails(data));
        } catch (error) {
            console.log(error)
            set({ error: true });
        } finally {
            set({ loading: false });
        }
    },

    removeCartItem: async (id: number) => { 
        try {
            set({ loading: true, error: false });
            const data = await Api.cart.removeCartItem(id);
            set(getCartDetails(data));
        } catch (error) {
            console.log(error)
            set({ error: true });
        } finally {
            set({ loading: false });
        }
    },
    addCartItem: async (values: any)=>{},
}))