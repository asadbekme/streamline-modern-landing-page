"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { Menu, X } from "lucide-react"

export function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon" className="md:hidden">
          <Menu className="h-5 w-5" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent side="right" className="w-[300px] sm:w-[400px]">
        <div className="flex flex-col gap-6 px-2 py-6">
          <div className="flex items-center justify-between">
            <span className="text-lg font-bold">Menu</span>
            <Button variant="ghost" size="icon" onClick={() => setOpen(false)}>
              <X className="h-5 w-5" />
              <span className="sr-only">Close menu</span>
            </Button>
          </div>
          <nav className="flex flex-col gap-4">
            <Link
              href="#features"
              className="text-lg font-medium hover:text-emerald-500 transition-colors"
              onClick={() => setOpen(false)}
            >
              Features
            </Link>
            <Link
              href="#testimonials"
              className="text-lg font-medium hover:text-emerald-500 transition-colors"
              onClick={() => setOpen(false)}
            >
              Testimonials
            </Link>
            <Link
              href="#pricing"
              className="text-lg font-medium hover:text-emerald-500 transition-colors"
              onClick={() => setOpen(false)}
            >
              Pricing
            </Link>
            <Link
              href="#contact"
              className="text-lg font-medium hover:text-emerald-500 transition-colors"
              onClick={() => setOpen(false)}
            >
              Contact
            </Link>
          </nav>
          <div className="mt-4">
            <Button className="w-full bg-emerald-500 hover:bg-emerald-600" onClick={() => setOpen(false)}>
              Get Started
            </Button>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
