import Image from 'next/image'
import Link from 'next/link'

const ProductList = () => {
  return (
    <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/1812960/pexels-photo-1812960.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
            <Image
            src="https://images.pexels.com/photos/3832763/pexels-photo-3832763.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md"
            />
        </div>
        <div className="flex justify-between">
            <span className='font-semibold'>Product Name;</span>
            <span className='font-semibold'>$49</span>
        </div>
        <div className="text-sm text-gray-500">My Description</div>
        <button className="rounded-2xl ring-1 ring-ecom text-ecom w-max py-2 px-4 text-xs hover:bg-ecom hover:text-white">
            Add to Cart
          </button>
    
       </Link>
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/3062524/pexels-photo-3062524.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
            <Image
            src="https://images.pexels.com/photos/2983262/pexels-photo-2983262.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md"
            />
        </div>
        <div className="flex justify-between">
            <span className='font-semibold'>Product Name;</span>
            <span className='font-semibold'>$49</span>
        </div>
        <div className="text-sm text-gray-500">My Description</div>
        <button className="rounded-2xl ring-1 ring-ecom text-ecom w-max py-2 px-4 text-xs hover:bg-ecom hover:text-white">
            Add to Cart
          </button>
    
       </Link>
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/1416367/pexels-photo-1416367.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
            <Image
            src="https://images.pexels.com/photos/1570779/pexels-photo-1570779.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md"
            />
        </div>
        <div className="flex justify-between">
            <span className='font-semibold'>Product Name;</span>
            <span className='font-semibold'>$49</span>
        </div>
        <div className="text-sm text-gray-500">My Description</div>
        <button className="rounded-2xl ring-1 ring-ecom text-ecom w-max py-2 px-4 text-xs hover:bg-ecom hover:text-white">
            Add to Cart
          </button>
    
       </Link>
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/15484965/pexels-photo-15484965/free-photo-of-eroded-angel-statue.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
            <Image
            src="https://images.pexels.com/photos/794548/pexels-photo-794548.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md"
            />
        </div>
        <div className="flex justify-between">
            <span className='font-semibold'>Product Name;</span>
            <span className='font-semibold'>$49</span>
        </div>
        <div className="text-sm text-gray-500">My Description</div>
        <button className="rounded-2xl ring-1 ring-ecom text-ecom w-max py-2 px-4 text-xs hover:bg-ecom hover:text-white">
            Add to Cart
          </button>
    
       </Link>
      <Link
        href="/test"
        className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%]"
      >
        <div className="relative w-full h-80">
          <Image
            src="https://images.pexels.com/photos/3582425/pexels-photo-3582425.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill
            sizes="25vw"
            className="absolute object-cover rounded-md z-10 hover:opacity-0 transition-opacity easy duration-500"
          />
            <Image
            src="https://images.pexels.com/photos/3034731/pexels-photo-3034731.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load"
              alt=""
              fill
              sizes="25vw"
              className="absolute object-cover rounded-md"
            />
        </div>
        <div className="flex justify-between">
            <span className='font-semibold'>Product Name;</span>
            <span className='font-semibold'>$49</span>
        </div>
        <div className="text-sm text-gray-500">My Description</div>
        <button className="rounded-2xl ring-1 ring-ecom text-ecom w-max py-2 px-4 text-xs hover:bg-ecom hover:text-white">
            Add to Cart
          </button>
    
       </Link>
  </div>
);
};

export default ProductList