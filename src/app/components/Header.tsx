'use client'

import { Button } from '@/components/ui/button'
import { Menu } from 'lucide-react'
import Link from 'next/link'
import React, { useState } from 'react'
import Navlinks from './Navlinks'
import SearchBox from './SearchBox'
import TopNav from './TopNav'
import DarkModeBtn from './DarkModeBtn'
import SideNav from './SideNav'

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false)

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen)
  }

  const closeNav = () => {
    setIsNavOpen(false)
  }

  return (
    <>
    <TopNav />
      <header>
        <div className='grid grid-cols-3 p-8 items-center'>
        {/* Menu icon no longer controls the state, just triggers the SideNav */}
        <SideNav closeNav={toggleNav} />
          <Link href={"/"}>
            <h1 className='font-serif text-4xl text-center'>
              NUE{" "}
              <span className='underline decoration-6 decoration-orange-400'>
                MEDIA
              </span>
            </h1>
          </Link>

          <div className='flex items-center justify-end space-x-2'>
            {/* dark mode TODO */}
            <DarkModeBtn />

            <Button className='hidden md:inline bg-slate-900 text-white px-4 lg:px-8 py-2 
           rounded-full dark:bg-slate-800 '>
              Subscribe Now
            </Button>
          </div>
        </div>

        <Navlinks />

        <SearchBox />
      </header>
     
    </>
  )
}

export default Header