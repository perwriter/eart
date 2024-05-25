"use Client"

import Image from "next/image"
import Link from "next/link"

const CategoryList = () => {
  return (
    <div className="px-4 overflow-x-scroll scrollbar-hide">
      <div className="flex gap-2 md:gap-6">
      <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
        <div className="relative bg-slate-100 w-full h-96 ">
            <Image 
            src="https://images.pexels.com/photos/2832382/pexels-photo-2832382.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="" fill sizes="20vw"
            className="object-cover rounded-md"/>
        </div>
        <h1 className="mt-8 font-light text-cl tracking-wide">Category Name</h1>

      </Link>
      {/* section2  */}
      <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
        <div className="relative bg-slate-100 w-full h-96 ">
            <Image 
            src="https://images.pexels.com/photos/1292241/pexels-photo-1292241.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="" fill sizes="20vw"
            className="object-cover rounded-md"/>
        </div>
        <h1 className="mt-8 font-light text-cl tracking-wide">Category Name</h1>

      </Link>
      {/* section2  */}
      <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
        <div className="relative bg-slate-100 w-full h-96">
            <Image 
            src="https://images.pexels.com/photos/1629236/pexels-photo-1629236.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=11"
            alt="" fill sizes="20vw"
            className="object-cover rounded-md"/>
        </div>
        <h1 className="mt-8 font-light text-cl tracking-wide">Category Name</h1>

      </Link>
      {/* section2  */}
      <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
        <div className="relative bg-slate-100 w-full h-96">
            <Image 
            src="https://images.pexels.com/photos/1266808/pexels-photo-1266808.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="" fill sizes="20vw"
            className="object-cover rounded-md"/>
        </div>
        <h1 className="mt-8 font-light text-cl tracking-wide">Category Name</h1>

      </Link>
      {/* section2  */}
      <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
        <div className="relative bg-slate-100 w-full h-96">
            <Image 
            src="https://images.pexels.com/photos/1109352/pexels-photo-1109352.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="" fill sizes="20vw"
            className="object-cover rounded-md"/>
        </div>
        <h1 className="mt-8 font-light text-cl tracking-wide">Category Name</h1>

      </Link>
      {/* section2  */}
      <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
        <div className="relative bg-slate-100 w-full h-96">
            <Image 
            src="https://images.pexels.com/photos/1269968/pexels-photo-1269968.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="" fill sizes="20vw"
            className="object-cover rounded-md"/>
        </div>
        <h1 className="mt-8 font-light text-cl tracking-wide">Category Name</h1>

      </Link>
      {/* section2  */}
      <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
        <div className="relative bg-slate-100 w-full h-96">
            <Image 
            src="https://images.pexels.com/photos/795693/pexels-photo-795693.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="" fill sizes="20vw"
            className="object-cover rounded-md"/>
        </div>
        <h1 className="mt-8 font-light text-cl tracking-wide">Category Name</h1>

      </Link>
      {/* section2  */}
      <Link href="/list?cat=test" className="flex-shrink-0 w-full sm:w-1/2 lg:w-1/4 xl:w-1/6">
        <div className="relative bg-slate-100 w-full h-96">
            <Image 
            src="https://images.pexels.com/photos/566641/pexels-photo-566641.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt="" fill sizes="20vw"
            className="object-cover rounded-md"/>
        </div>
        <h1 className="mt-8 font-light text-cl tracking-wide">Category Name</h1>

      </Link>
      </div>  
    </div>
  )
}

export default CategoryList