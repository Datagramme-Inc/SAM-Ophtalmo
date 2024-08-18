'use client'
import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
  } from "@/components/ui/sheet"
import React from 'react'
import Sidebar from "./sidebar"
import { HomeIcon, LogOut, UsersIcon } from "lucide-react"
import Link from "next/link"

function Sheetmenuadmin() {
  return (
    <Sheet>
  <SheetTrigger asChild>
  <span className="bloc md:hidden">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
      </svg>

      </span>
  </SheetTrigger>
  <SheetContent side="left" className="w-[340px]">
  <div className="-   flex flex-col justify-between bg-[#ecf2f3] dark:bg-gray-800">
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
          
          href="/dashboard/admin" className=" flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:text-gray-900"
        >
          <HomeIcon className="h-4 w-4" />
          Home
        </Link>
      
        <Link
        
          href="/dashboard/admin/auxiliaire" className=" flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:text-gray-900"
        >
          <UsersIcon className="h-4 w-4" />
          Auxiliaire
        </Link>
        <Link
        
        href="/dashboard/admin/medecin" className="flex items-center gap-3 rounded-lg px-3 py-2  transition-all hover:text-gray-900"
      >
        <UsersIcon className="h-4 w-4" />
        Medecin
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
  </SheetContent>
</Sheet>

  )
}

export default Sheetmenuadmin  