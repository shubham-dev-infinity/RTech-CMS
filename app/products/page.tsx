import React from 'react'
import { client } from '../../tina/__generated__/databaseClient'
import Product from '../../components/features/product';

export default async function Products() {
    const productsConnection = await client.queries.productConnection()
    const products = productsConnection.data.productConnection.edges?.sort((product_1, product_2) => {
        return Number(product_1?.node?.index || 0) - Number(product_2?.node?.index || 0);
    });
    if (!products || products.length === 0) {
        return <div className='container mx-auto pt-32  min-h-screen '>
            No Product Founds
        </div>
    }
    return (
        <div className='container mx-auto pt-32  min-h-screen '>
            <h1 className='title'>Products</h1>
            <div className="grid grid-cols-12 gap-6">
                {
                    products?.map((product) => product?.node && <div key={product.node?.uniqueId} className="col-span-12 md:col-span-6">
                        <Product  {...product.node} />
                    </div>
                    )
                }
            </div>
        </div>
    )
}
