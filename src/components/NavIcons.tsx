"use Client"

import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import CartModal from "./CartModal"

const NavIcons = () => {
  const [isProfileOpen,setIsProfileOpen]= useState(false)
  const [isCartOpen,setIsCartOpen]= useState(false)
  const router =useRouter()
  // temporary 
  const isLoggedIn = false
  const handleProfile = ()=>{
    if(!isLoggedIn){
      router.push("/login");
    }
    setIsProfileOpen((prev)=>!prev);

  }
  return (
    <div className="flex items-center gap-4 xl:gap-6 relative">
      <Image src="/profile.png" alt=""width={23} height={22} className="cursor-pointer" onClick={handleProfile}/>
      {
        isProfileOpen&&(
          <div className="absolute p-4 rounded-sm top-10 left-0 test-sm shadow-[0_3px_10px_rgb(0,0,0,0.2)] z-20">
            <Link href="/">Profile</Link>
            <div className="mt-2 cursor-pointer">Logout</div>
          </div>
        )
      }
      

      <Image src="/notification.png" alt=""width={23} height={22} className="cursor-pointer"/>
      <div className="relative cursor-pointer">

      <Image src="/cart.png" alt=""width={23} height={22} className="cursor-pointer" onClick={()=>setIsCartOpen((prev)=>!prev)}/>
      <div className="absolute -top-4 -right-4 bg-ecom rounded-full text-white text-sm items-center px-2 justify-center">2</div>
      </div>
      {isCartOpen&&(<CartModal/>    )}
    </div>
  )
}

export default NavIcons