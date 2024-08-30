'use client'
import React from 'react'
import Link from 'next/link'
import { Menu, X } from 'lucide-react'
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import NavlinksMobile from './NavlinksMobile'
import { Button } from '@/components/ui/button'

interface SideNavProps {
  closeNav: () => void
}

const SideNav: React.FC<SideNavProps> = ({ closeNav }) => {

  return (
    <Sheet>
      <SheetTrigger asChild>
        <button className='text-start'><Menu /></button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle><NavlinksMobile closeNav={function (): void {
            throw new Error('Function not implemented.')
          } } /></SheetTitle>
          <SheetDescription>
            <div className='grid grid-cols-2 gap-3'>
              <Button>Sign In</Button>
              <Button variant={'outline'}>Register</Button>
            </div>
          </SheetDescription>
          <button onClick={closeNav} aria-label="Close">
          </button>
        </SheetHeader>
        {/* Additional navigation links or content can go here */}
      </SheetContent>
    </Sheet>
  )
}

export default SideNav
