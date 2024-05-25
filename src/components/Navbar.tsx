"use client"
import Link from 'next/link'
import Menu from './Menu'
import SearchhBar from './SearchhBar'
import NavIcons from './NavIcons'
import Image from 'next/image'

const Navbar = () => {
  return (
    <div className='h-20 px-4 md:px-8 lg:px-16 xl:px-32 2xl:px-64 relative'>
      {/* Mobile  */}
      <div className="h-full flex justify-between items-center md:hidden">
         <Link href={'/'}>
          <div className="text-2xl font-semibold tracking-wide">E-ART</div>
        </Link>
        <Menu/>
      </div>
       
        {/* Bigger Screens  */}
        <div className="hidden md:flex items-center justify-between gap-8 h-full">
          {/* Left  */}
          <div className="w-1/3 xl:w-1/2 flex items-center gap-12">
            <Link href="/" className='flex items-center gap-3'>
              <Image src="/logo.png" alt='Logo' width={24} height={24}/>
            <Link href="/"><div className="text-2xl font-semibold tracking-wide">E-ART</div></Link>
            </Link>
            <div className="hidden xl:flex gap-4 ">
            <Link href="/">Home</Link>
          <Link href="/list">Shop</Link>
          <Link href="/deal">Deal</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
            </div>
          </div>
          {/* Right  */}
          <div className="w-2/3 xl:w-1/2 flex items-center justify-between gap-8">
            <SearchhBar/>
            <NavIcons/>

          </div>
        </div>


    </div>
  )
}

export default Navbar