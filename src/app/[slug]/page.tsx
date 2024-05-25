import Add from '@/components/Add'
import CustomizeProducts from '@/components/CustomizeProducts'
import ProductImages from '@/components/ProductImages'
import Reviews from '@/components/Reviews'
import React from 'react'

const SinglePage = () => {
  return (
    <div className="px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative flex flex-col lg:flex-row gap-16">
      {/* IMG */}
      <div className="w-full lg:w-1/2 lg:sticky top-20 h-max">
        {/* <ProductImages items={product.media?.items} /> */}
        <ProductImages />
      </div>
      {/* TEXTS */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6">
        <h1 className="text-4xl font-medium">Product Name</h1>
        <p className="text-gray-500">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
          Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="h-[2px] bg-gray-100" />

        <div className="flex items-center gap-4">
          <h3 className="text-xl text-gray-500 line-through"> $59</h3>
        <h2 className="font-medium text-2xl">$49</h2>
        </div>
        <CustomizeProducts/>
        <Add/>
        <div className="h-[2px] bg-gray-100" />
        
          <div className="text-sm">
            <h4 className="font-medium mb-4">Title</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consectetur nesciunt, iure aliquam architecto porro inventore laborum provident corrupti fugiat asperiores quod eligendi? Vitae accusamus nulla facere culpa, similique beatae.</p>
          </div>
          <div className="text-sm">
            <h4 className="font-medium mb-4">Title</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consectetur nesciunt, iure aliquam architecto porro inventore laborum provident corrupti fugiat asperiores quod eligendi? Vitae accusamus nulla facere culpa, similique beatae.</p>
          </div>
          <div className="text-sm">
            <h4 className="font-medium mb-4">Title</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consectetur nesciunt, iure aliquam architecto porro inventore laborum provident corrupti fugiat asperiores quod eligendi? Vitae accusamus nulla facere culpa, similique beatae.</p>
          </div>
          <div className="text-sm">
            <h4 className="font-medium mb-4">Title</h4>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem consectetur nesciunt, iure aliquam architecto porro inventore laborum provident corrupti fugiat asperiores quod eligendi? Vitae accusamus nulla facere culpa, similique beatae.</p>
          </div>
        {/* {product.price?.price === product.price?.discountedPrice ? (
          <h2 className="font-medium text-2xl">${product.price?.price}</h2>
        ) : (
          <div className="flex items-center gap-4">
            <h3 className="text-xl text-gray-500 line-through">
              ${product.price?.price}
            </h3>
            <h2 className="font-medium text-2xl">
              ${product.price?.discountedPrice}
            </h2>
          </div>
        )}
        <div className="h-[2px] bg-gray-100" />
        {product.variants && product.productOptions ? (
          <CustomizeProducts
            productId={product._id!}
            variants={product.variants}
            productOptions={product.productOptions}
          />
        ) : (
          <Add
            productId={product._id!}
            variantId="00000000-0000-0000-0000-000000000000"
            stockNumber={product.stock?.quantity || 0}
          />
        )}
        <div className="h-[2px] bg-gray-100" />
        {product.additionalInfoSections?.map((section: any) => (
          <div className="text-sm" key={section.title}>
            <h4 className="font-medium mb-4">{section.title}</h4>
            <p>{section.description}</p>
          </div>
        ))} */}
        <div className="h-[2px] bg-gray-100" />
        {/* REVIEWS */}
        <h1 className="text-2xl">User Reviews</h1>
        {/* <Suspense fallback="Loading..."> */}
          {/* <Reviews productId={product._id!} /> */}
          <Reviews />
        {/* </Suspense> */}
      </div>
    </div>
  )
}

export default SinglePage