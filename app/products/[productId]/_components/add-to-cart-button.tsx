'use client'

import { cartStore } from "../../../../store/cart";
import { ProductQuery } from "../../../../tina/__generated__/types";

interface IAddToCartButton {
    product: ProductQuery['product']
}
export default function AddToCartButton({ product }: IAddToCartButton) {
    const { addToCart } = cartStore()

    const handleAddToCart = () => {
        addToCart(product)
    };

    return (
        <button onClick={handleAddToCart} type="submit" className='mt-8 border-solid border-2 border-brandSecondary text-brandSecondary bg-transparent py-3 w-full rounded-lg hover:bg-brandSecondary hover:text-white transition duration-700 ease-in-out'>Add to Cart</button>
    )
}
