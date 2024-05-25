"use Client"

import Image from "next/image"
import Link from "next/link"

const CartModal = () => {
  const cartItems =true
  return (
    <div className="w-max absolute p-4 rounded-md shadow-[0_3px_10px_rgb(0,0,0,0.2)] bg-white top-12 right-0 flex flex-col gap-6 z-20">
      {!cartItems? (
        <div className="">Cart is empty</div>
      ):(
        <>
        <h2 className="text-xl font-bold text-center">Shopping Cart</h2>
        <div className="flex flex-col gap-8">
          {/* Item  */}
        <div className=" flex gap-4">
          <Image 
          src="https://images.pexels.com/photos/15911143/pexels-photo-15911143/free-photo-of-young-man-and-woman-looking-at-art-in-the-gallery.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Cart 1"
          width={72} 
          height={96} 
          className="object-cover rounded-md"/>
          <div className=" flex flex-col justify-between w-full">
            {/* Top  */}
            <div className="">
            {/* Title  */}
            <div className="flex items-center justify-between gap-8">
              <h3 className="font-semibold">Product Name</h3>
              <div className="p-1 bg-gray-100 rounded-sm">$49</div>
            </div>
            {/* Desc  */}
            <div className="text-sm text-gray-500">Available</div>
            </div>
            {/* Bottom  */}
            <div className="flex justify-between text-sm items-center">
              <span className="text-gray-500">Qty. 2</span>
              <span className="text-white bg-red-600 rounded-md p-1">Remove</span>
            </div>
          </div>
        </div>
        {/* Item 2  */}
        <div className=" flex gap-4">
          <Image 
          src="https://images.pexels.com/photos/164455/pexels-photo-164455.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
          alt="Cart 2"
          width={72} 
          height={96} 
          className="object-cover rounded-md"/>
          <div className=" flex flex-col justify-between w-full">
            {/* Top  */}
            <div className="">
            {/* Title  */}
            <div className="flex items-center justify-between gap-8">
              <h3 className="font-semibold">Product Name</h3>
              <div className="p-1 bg-gray-100 rounded-sm">$49</div>
            </div>
            {/* Desc  */}
            <div className="text-sm text-gray-500">Available</div>
            </div>
            {/* Bottom  */}
            <div className="flex justify-between text-sm items-center">
              <span className="text-gray-500">Qty. 2</span>
              <span className="text-white bg-red-600 rounded-md p-1">Remove</span>
            </div>
          </div>
        </div>
        </div>
         {/* Bottom section  */}
        <div className=" ">
          <div className="flex justify-between items-center font-semibold">
            <span className="">Sub Total:</span>
            <span className="">$90</span>
          </div>
          <p className="tex-gray-500 text-sm mt-2 mb-4">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
            </p>
            <div className="flex justify-between items-center font-semibold">
              <Link href="/checkout" className="rounded-md py-2 px-3 ring-1 ring-gray-300">View Cart</Link>
              <Link href="/checkout" className="rounded-md py-2 px-3 bg-black text-white">CheckOut</Link>
            </div>
        </div>
        </>
      )}
    </div>
  )
}

export default CartModal