"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Menu, X, MapPin, Phone, Clock } from "lucide-react"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function MobileNav() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetTrigger asChild>
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden text-white hover:text-[#00A63E] hover:bg-white/10 rounded-lg transition-all duration-200"
        >
          <Menu className="h-6 w-6" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </SheetTrigger>
      <SheetContent 
        side="right" 
        className="w-[320px] sm:w-[380px] bg-gradient-to-b from-black/98 to-black/95 backdrop-blur-xl border-l border-[#00A63E]/20 p-0 overflow-hidden"
      >
        <div className="flex flex-col h-full">
          {/* Header with Logo and Close Button */}
          <div className="flex items-center justify-between p-6 border-b border-[#00A63E]/20 bg-black/50">
            <div className="flex items-center space-x-3">
              <Image 
                src="/logo.png" 
                alt="Shahi Dera" 
                width={40} 
                height={40} 
                className="w-10 h-10 object-contain" 
              />
              <div>
                <h2 className="text-lg font-bold text-white">Shahi Dera</h2>
                <p className="text-xs text-[#00A63E]">Authentic Pakistani Cuisine</p>
              </div>
            </div>
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(false)}
              className="text-white hover:text-[#00A63E] hover:bg-white/10 rounded-lg transition-all duration-200"
            >
              <X className="h-5 w-5" />
            </Button>
          </div>
          
          {/* Navigation Links */}
          <div className="flex-1 px-6 py-8">
            <nav className="space-y-2">
              <Link
                href="/"
                className="flex items-center px-4 py-3 text-white hover:text-[#00A63E] hover:bg-[#00A63E]/10 rounded-lg transition-all duration-200 text-lg font-medium group"
                onClick={() => setIsOpen(false)}
              >
                <span className="w-2 h-2 bg-[#00A63E] rounded-full mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                Home
              </Link>
              <Link
                href="/about"
                className="flex items-center px-4 py-3 text-white hover:text-[#00A63E] hover:bg-[#00A63E]/10 rounded-lg transition-all duration-200 text-lg font-medium group"
                onClick={() => setIsOpen(false)}
              >
                <span className="w-2 h-2 bg-[#00A63E] rounded-full mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                About
              </Link>
              <Link
                href="/menu"
                className="flex items-center px-4 py-3 text-white hover:text-[#00A63E] hover:bg-[#00A63E]/10 rounded-lg transition-all duration-200 text-lg font-medium group"
                onClick={() => setIsOpen(false)}
              >
                <span className="w-2 h-2 bg-[#00A63E] rounded-full mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                Menu
              </Link>
              <Link
                href="/contact"
                className="flex items-center px-4 py-3 text-white hover:text-[#00A63E] hover:bg-[#00A63E]/10 rounded-lg transition-all duration-200 text-lg font-medium group"
                onClick={() => setIsOpen(false)}
              >
                <span className="w-2 h-2 bg-[#00A63E] rounded-full mr-4 opacity-0 group-hover:opacity-100 transition-opacity duration-200"></span>
                Contact
              </Link>
            </nav>
            
            {/* Order Now Button */}
            <div className="mt-8 px-4">
              <Button 
                className="w-full bg-gradient-to-r from-[#00A63E] to-[#008A35] hover:from-[#008A35] hover:to-[#00A63E] text-white text-lg py-4 rounded-lg font-semibold transition-all duration-200 shadow-lg hover:shadow-[#00A63E]/25"
                onClick={() => setIsOpen(false)}
              >
                Order Now
              </Button>
            </div>
          </div>
          
          {/* Contact Information */}
          <div className="px-6 py-6 border-t border-[#00A63E]/20 bg-black/30">
            <div className="space-y-4">
              {/* Address */}
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#00A63E] mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p className="font-medium">969-971 Canterbury Road</p>
                  <p>Lakemba 2195, Sydney</p>
                </div>
              </div>
              
              {/* Phone */}
              <div className="flex items-center space-x-3">
                <Phone className="w-5 h-5 text-[#00A63E] flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p className="font-medium text-[#00A63E]">+61 412 655 561</p>
                </div>
              </div>
              
              {/* Hours */}
              <div className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-[#00A63E] mt-1 flex-shrink-0" />
                <div className="text-gray-300 text-sm">
                  <p className="font-medium">Opening Hours</p>
                  <p>Mon-Fri: 8:00 AM - 11:00 PM</p>
                  <p>Sat-Sun: 8:00 AM - 12:00 AM</p>
                </div>
              </div>
            </div>
            
            {/* Quick Call Button */}
            <div className="mt-4">
              <a
                href="tel:+61412655561"
                className="flex items-center justify-center w-full bg-[#00A63E]/20 hover:bg-[#00A63E]/30 text-[#00A63E] py-3 rounded-lg transition-all duration-200 font-medium"
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </a>
            </div>
          </div>
        </div>
      </SheetContent>
    </Sheet>
  )
}
