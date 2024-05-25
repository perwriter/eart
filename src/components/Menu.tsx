"use client"

import Image from "next/image"
import Link from "next/link";
import { useState } from "react"

const Menu = () => {

  const [open,setOpen]=useState(false);

  return (
    <div className="">
      <Image src="/menu.png" alt="Menu icon" width={28} height={28} className="cursor-pointer" onClick={()=>setOpen((prev)=>!prev)}/>
      {open && (
        <div className="absolute bg-black text-white flex flex-col w-full top-20 h-[calc(100vh-80px)] left-0 items-center justify-center gap-8 text-xl z-10">
          <Link href="/">Home</Link>
          <Link href="/list">Shop</Link>
          <Link href="/deal">Deal</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/login">Logout</Link>
          <Link href="/checkout">Cart(1)</Link>
        </div>
      )}
      </div>
  )
}

export default Menu