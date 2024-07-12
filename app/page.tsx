import { client } from "../tina/__generated__/databaseClient";
import Blog from "../components/features/blog";
import ContactForm from "../components/features/contact-form";
import Product from "../components/features/product";
import HeroBannerText from "./_components/hero-banner-text";
import TrustedPartner from "./_components/trusted-partner";
import Image from "next/image";
import Mission from "./_components/mission";
import Vision from "./_components/vision";
import Technology from "./_components/technology";

export default async function Home() {

  const homePageContent = await client.queries.home({ relativePath: 'home.md' })
  const { heroBanner, mission, partners, technology, vision } = homePageContent.data.home

  const partnersList = partners?.partnersInfo?.map((partner) => ({
    partnerName: partner?.partnerName || '',
    partnerImage: partner?.partnerImage || ''
  })) || []
  //products
  const productsConnection = await client.queries.productConnection({ first: 8 })
  const products = productsConnection.data.productConnection.edges;

  //blogs
  const blogsConnection = await client.queries.blogConnection({ first: 3 })
  const blogs = blogsConnection.data.blogConnection.edges || []
  return (
    <>
      {/* hero section */}
      <section className="w-full relative  md:min-h-[776px]">
        <Image src='https://industry.nikon.com/en-us/wp-content/uploads/sites/13/2023/12/Nikon-Metrology-Innovative-measurement-solutions-for-your-shop-floor.jpg' alt="RTech-banner" width={1024} height={1636} className="md:hidden" />
        <video autoPlay loop muted playsInline preload="auto" className="w-full hidden md:block min-h-[776px] object-cover"><source type="video/mp4" src="https://industry.nikon.com/en-us/wp-content/uploads/sites/13/2023/03/1131_NI_APDIS-website-header_19_CBR-2MB.mp4" /></video>
        <HeroBannerText description={heroBanner?.heroBannerDescription || ''} title={heroBanner?.heroBannerTitle || ''} />
      </section>


      {/* partner section */}
      <section className="container mx-auto  py-12 ">
        <h2 className="text-center text-lg font-semibold leading-8 text-gray-900">
          {partners?.title}
        </h2>
        <TrustedPartner partners={partnersList} />
      </section>

      {/* products section */}
      <section className="container mx-auto border-t py-20">
        <div className="flex flex-col text-center items-center">
          <h2 className="text-lg font-semibold leading-7 text-brandSecondary">Our Products</h2>
          <h2 className="title max-w-3xl tracking-tight leading-tight">Cutting-edge, Reliable, Affordable.</h2>
          <p className="max-w-3xl text-lg text-gray-600">
            Experience the future of Medical Device Manufacturing
          </p>
        </div>

        <div className="mt-20 grid grid-cols-12 gap-5">
          {
            products?.map((product) => product?.node && <div key={product.node?.uniqueId} className="col-span-12 md:col-span-6">
              <Product  {...product.node} />
            </div>
            )
          }
        </div>
      </section>

      {/* blog section */}
      <section className="bg-[#f6efdf] py-14">
        {/* <h2 className="title">Blogs</h2> */}
        <div>
          <h2 className="underline underline-offset-8 decoration-[#f7a81b] text-[#17458f] title">Latest News</h2>
        </div>
        <div className="grid grid-cols-12 gap-6  max-w-7xl  mx-auto lg:px-0 sm:px-8">
          {
            blogs.map((blog) => {
              const blogNode = blog?.node
              if (!blogNode || !blogNode.uniqueId) return null;
              return <div key={blogNode.uniqueId} className="col-span-12 md:col-span-6 lg:col-span-4" >
                <Blog
                  date={blogNode.date || blogNode.createdAt || null}
                  uniqueId={blogNode.uniqueId}
                  imageUrl={blogNode.overviewImage || ''}
                  title={blogNode.title || ''}
                />
              </div>
            }
            )
          }
        </div>
      </section>

      {/* vision-mission-technology */}
      <section className="container mx-auto section_Divider">
        <div className="flex flex-col gap-8 ">
          <Mission description={mission?.missionDescription} title={mission?.missionTitle || ''} />
          <Vision description={vision?.visionDescription} title={vision?.visionTitle || ''} />
          <Technology description={technology?.technologyDescription} title={technology?.technologyTitle || ''} />
        </div>
      </section>

      {/* contact section */}
      <section className="container mx-auto section_Divider">
        <ContactForm />
      </section>
    </>
  );
}
