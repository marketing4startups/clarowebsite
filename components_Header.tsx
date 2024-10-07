'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Brain } from 'lucide-react'

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center py-4 md:justify-start md:space-x-10">
          <div className="flex justify-start lg:w-0 lg:flex-1">
            <Link href="/">
              <span className="sr-only">Claro</span>
              <div className="flex items-center">
                <Brain className="h-8 w-auto sm:h-10 text-teal-600" />
                <span className="ml-2 text-2xl font-bold text-teal-600">Claro</span>
              </div>
            </Link>
          </div>
          <div className="-mr-2 -my-2 md:hidden">
            <button
              type="button"
              className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <span className="sr-only">Open menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <nav className="hidden md:flex space-x-10">
            <Link href="/" className="text-base font-medium text-gray-500 hover:text-teal-600">
              Home
            </Link>
            <Link href="/features" className="text-base font-medium text-gray-500 hover:text-teal-600">
              Features
            </Link>
            <Link href="/pricing" className="text-base font-medium text-gray-500 hover:text-teal-600">
              Pricing
            </Link>
            <Link href="/testimonials" className="text-base font-medium text-gray-500 hover:text-teal-600">
              Testimonials
            </Link>
            <Link href="/contact" className="text-base font-medium text-gray-500 hover:text-teal-600">
              Contact
            </Link>
          </nav>
        </div>
      </div>

      {isMenuOpen && (
        <div className="absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
          <div className="rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 bg-white divide-y-2 divide-gray-50">
            <div className="pt-5 pb-6 px-5">
              <div className="flex items-center justify-between">
                <div>
                  <Brain className="h-8 w-auto text-teal-600" />
                </div>
                <div className="-mr-2">
                  <button
                    type="button"
                    className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-teal-500"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <span className="sr-only">Close menu</span>
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="mt-6">
                <nav className="grid gap-y-8">
                  <Link href="/" className="text-base font-medium text-gray-900 hover:text-teal-600" onClick={() => setIsMenuOpen(false)}>
                    Home
                  </Link>
                  <Link href="/features" className="text-base font-medium text-gray-900 hover:text-teal-600" onClick={() => setIsMenuOpen(false)}>
                    Features
                  </Link>
                  <Link href="/pricing" className="text-base font-medium text-gray-900 hover:text-teal-600" onClick={() => setIsMenuOpen(false)}>
                    Pricing
                  </Link>
                  <Link href="/testimonials" className="text-base font-medium text-gray-900 hover:text-teal-600" onClick={() => setIsMenuOpen(false)}>
                    Testimonials
                  </Link>
                  <Link href="/contact" className="text-base font-medium text-gray-900 hover:text-teal-600" onClick={() => setIsMenuOpen(false)}>
                    Contact
                  </Link>
                </nav>
              </div>
            </div>
          </div>
        </div>
      )}
    </header>
  )
}