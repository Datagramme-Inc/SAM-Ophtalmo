'use client'
import Link from "next/link"
import { usePathname } from 'next/navigation'
import { JSX, SVGProps } from "react"
import { BedDoubleIcon, Book, LogOut, Settings, UserRound } from "lucide-react"

export default  function Sidebar() {
  const pathname = usePathname()
  return (
    <div className="lg:w-72 hidden  md:flex md:flex-col md:justify-between bg-[#ecf2f3] dark:bg-gray-800">
    <div className="flex h-[59.5px] items-center  px-6 bg-white">
      <Link className="flex items-center gap-2 font-semibold" href="/dashboard/accueil">
        
      <h1 className="text-green-700 sm:text-lg text-lg uppercase font-bold mx-4">
        Sam-Ophtalmo
      </h1>
      </Link>
      
    </div>
    <div className="flex-1 h-full overflow-auto py-2">
      <nav className="grid items-start px-4 gap-y-6 text-sm font-normal">
        <Link
          
          href="/dashboard/medecin" className={`link ${pathname === '/dashboard/medecin' ? 'text-white bg-[#079a31]' : ''} flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:text-gray-900` }
        >
          <HomeIcon className="h-4 w-4" />
          Home
        </Link>
      
        <Link
        
          href="/dashboard/medecin/add_aux" className={`link ${pathname === '/dashboard/medecin/add_aux' ? 'text-white bg-[#079a31]' : ''} flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:text-gray-900` }
        >
          <UsersIcon className="h-4 w-4" />
          Auxiliaire
        </Link>
       
     
      </nav>
    </div>
    <div className="mt-auto p-4">
      <div className="flex space-x-2 items-center">
      <LogOut className="h-4 w-4 text-gray-600" />
      <p className="text-sm text-gray-600 ">Logout</p>
      </div>
    </div>
  </div>
  )
}


  
  function HomeIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
        <polyline points="9 22 9 12 15 12 15 22" />
      </svg>
    )
  }
  
  
  
  function UsersIcon(props: JSX.IntrinsicAttributes & SVGProps<SVGSVGElement>) {
    return (
      <svg
        {...props}
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
        <circle cx="9" cy="7" r="4" />
        <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
        <path d="M16 3.13a4 4 0 0 1 0 7.75" />
      </svg>
    )
  }