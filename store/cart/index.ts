import { create } from 'zustand'
import { ProductQuery } from '../../tina/__generated__/types';

type TProduct = ProductQuery['product']
interface ICartStore {
    products: TProduct[];
    addToCart: (product: TProduct) => void;
    removeFromCart: (productId: string) => void;
}

export const cartStore = create<ICartStore>()((set, get) => ({
    products: [],
    addToCart: (product) => { set({ products: [...get().products, product] }) },
    removeFromCart: (productId: string) => set({ 'products': get().products.filter((product) => product.uniqueId !== productId) })
}))
