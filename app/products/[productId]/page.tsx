import ProductDisclosures, { IProductDisclosure } from './_components/product-disclosures'
import { client } from '../../../tina/__generated__/databaseClient'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import ProductImageSlider from './_components/product-image-slider'
import Link from 'next/link'
import Button from '../../../components/button'

export default async function ProductDetails(props: { params: { productId: string } }) {
    const { params: { productId } } = props
    console.log(props,'props');
    //making request to product
    const res = await client.queries.product({ relativePath: `${productId}.md` });
    const product = res.data.product
    console.log(product,'product');
    const disclosures = product.disclosures?.reduce((acc: IProductDisclosure[], disclosure) => {
        if (disclosure?.title && disclosure.features && disclosure.features.length !== 0) {
            acc.push({ title: disclosure.title, features: disclosure.features });
        }
        return acc;
    }, []) || []
    const productImages = product.productImages?.map((image) => image || '') || []
    return (
            <div className="bg-white container mx-auto min-h-screen pt-32">
                <div className="max-w-2xl px-4  sm:px-6  lg:max-w-7xl lg:px-8">
                <div className="mb-8">
                <Link href='/products' className='block text-left text-sm text-brandSecondary'>
                    <Button className='p-2'>Back to Products</Button>
                </Link>
                </div>
                    <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                        {/* Image gallery */}
                        <ProductImageSlider images={productImages} />
    
                        {/* Product info */}
                        <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                            <h1 className="text-4xl font-bold tracking-tight ">{product.title}</h1>
    
                            <div className="mt-3">
                                <h2 className="sr-only">Product information</h2>
                            </div>
    
                            <div className="mt-6">
                                <h3 className="sr-only">Description</h3>
                                <TinaMarkdown content={product.description} />
                            </div>
                            
                            <section aria-labelledby="details-heading" className='mt-8' >
                                <h2 id="details-heading" className="sr-only">
                                    Additional details
                                </h2>
                                <ProductDisclosures disclosures={disclosures} />
                            </section>
                            <button type="submit" className='mt-8 border-solid border-2 border-brandSecondary text-brandSecondary bg-transparent py-3 w-full rounded-lg hover:bg-brandSecondary hover:text-white transition duration-700 ease-in-out'>Add to Cart</button>
                            <div className="mt-16 flex">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) 
}
