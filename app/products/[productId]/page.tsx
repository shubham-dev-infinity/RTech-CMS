import ProductDisclosures, { IProductDisclosure } from './_components/product-disclosures'
import { client } from '../../../tina/__generated__/databaseClient'
import { TinaMarkdown } from 'tinacms/dist/rich-text'
import ProductImageSlider from './_components/product-image-slider'
import Link from 'next/link'
import Button from '../../../components/button'

export default async function ProductDetails(props: { params: { productId: string } }) {
    const { params: { productId } } = props
    //making request to product
    const res = await client.queries.product({ relativePath: `${productId}.md` });


    const product = res.data.product
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
                <div className="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                    {/* Image gallery */}
                    <ProductImageSlider images={productImages} />

                    {/* Product info */}
                    <div className="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
                        <h1 className="text-4xl font-bold tracking-tight text-gray-900">{product.title}</h1>

                        <div className="mt-3">
                            <h2 className="sr-only">Product information</h2>
                        </div>

                        <div className="mt-6">
                            <h3 className="sr-only">Description</h3>
                            <TinaMarkdown content={product.description} />
                        </div>
                        <div className="my-4 flex">
                        <Link href='/products' className='flex items-center w-[max-content] h-[-webkit-fill-available] justify-center '><p className=" transition duration-700 ease-in-out text-xl text-brandSecondary text-shadow-brandSecondary hover:text-brandPrimary pt-4">view more...</p></Link>
                            
                        </div>
                        <section aria-labelledby="details-heading" >
                            <h2 id="details-heading" className="sr-only">
                                Additional details
                            </h2>
                            <ProductDisclosures disclosures={disclosures} />
                        </section>
                        <div className="mt-16 flex">
                            <></>
                        <Button
                                type="submit"
                                className="flex max-w-xs flex-1 items-center justify-center rounded-md border border-transparent bg-brandSecondary px-8 py-3 text-base font-medium focus:outline-none sm:w-full"
                            >
                                Add to Cart
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
