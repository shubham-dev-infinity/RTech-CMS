'use client'
import Image from 'next/image'
import React from 'react'
import { cartStore } from '../../../../store/cart'

export default function Cart() {
    const { products } = cartStore()
    console.log(products, 'pds')
    return (
        <div className='flex justify-between gap-2 items-center'>
            <Image src='/addToCard/card.svg' alt="" width={24} height={24} /><span> {products.length}</span>
        </div>
    )
}
