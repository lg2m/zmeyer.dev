"use client";

import { siteConfig } from "@/config/site-config";
import { SignedIn, UserButton } from "@clerk/nextjs";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-[#c0c0c0] border-b-2 border-[#808080]">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="font-bold text-xl font-['Times_New_Roman']">
            <span className="bg-[#000080] text-white px-2 py-1">zmeyer</span>
            <span className="text-[#000080]">.dev</span>
          </Link>

          <nav className="hidden md:flex items-center">
            {siteConfig.mainNav.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="px-3 py-1 mx-1 font-bold bg-[#c0c0c0] border border-t-white border-l-white border-b-[#808080] border-r-[#808080] hover:bg-[#d0d0d0]"
              >
                {item.label}
              </Link>
            ))}
            <SignedIn>
              <UserButton />
            </SignedIn>
          </nav>
          {/* Mobile Menu Button */}
          <button
            className="md:hidden bg-[#c0c0c0] p-2 border border-t-white border-l-white border-b-[#808080] border-r-[#808080]"
            type="button"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            <span className="sr-only">Toggle menu</span>
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-[#c0c0c0] border-t border-[#808080]">
          <div className="container mx-auto px-4 py-3">
            <nav className="flex flex-col space-y-2">
              {siteConfig.mainNav.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="px-3 py-2 font-bold bg-[#c0c0c0] border border-t-white border-l-white border-b-[#808080] border-r-[#808080] hover:bg-[#d0d0d0]"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      )}
    </header>
  );
}
