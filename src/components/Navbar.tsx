'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'
import { Menu, X, ChevronDown } from 'lucide-react'
import { useState } from 'react'
import { navLinks } from '@/lib/data'
import ThemeToggle from './ThemeToggle'

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const [openSubmenu, setOpenSubmenu] = useState<string | null>(null)

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-lg border-b border-medical-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-primary rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">КВ</span>
            </div>
            <div className="hidden sm:block">
              <h1 className="text-lg font-bold text-medical-text">КВМКо</h1>
              <p className="text-xs text-primary-600">Медицинский колледж</p>
            </div>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <div key={link.href} className="relative group">
                <Link
                  href={link.href}
                  className="px-3 py-2 rounded-md text-sm font-medium text-medical-text hover:text-primary-600 hover:bg-primary-50 transition-all flex items-center gap-1"
                >
                  {link.label}
                  {link.submenu && <ChevronDown size={16} />}
                </Link>
                {link.submenu && (
                  <div className="absolute left-0 mt-0 w-48 bg-white rounded-lg shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 py-2 border border-medical-border">
                    {link.submenu.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-4 py-2 text-sm text-medical-text hover:bg-primary-50 hover:text-primary-600"
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <ThemeToggle />
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2">
            <div className="hidden lg:block">
              <ThemeToggle />
            </div>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 rounded-lg hover:bg-primary-50"
              aria-label="Открыть меню"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: 'auto' }}
          exit={{ opacity: 0, height: 0 }}
          className="lg:hidden bg-white border-t border-medical-border"
        >
          <div className="px-4 py-4 space-y-2 max-h-96 overflow-y-auto">
            {navLinks.map((link) => (
              <div key={link.href}>
                <button
                  onClick={() => setOpenSubmenu(openSubmenu === link.label ? null : link.label)}
                  className="w-full text-left px-3 py-2 rounded-md text-sm font-medium text-medical-text hover:bg-primary-50 flex justify-between items-center"
                >
                  {link.label}
                  {link.submenu && (
                    <ChevronDown
                      size={16}
                      className={`transform transition-transform ${
                        openSubmenu === link.label ? 'rotate-180' : ''
                      }`}
                    />
                  )}
                </button>
                {link.submenu && openSubmenu === link.label && (
                  <div className="ml-4 space-y-2">
                    {link.submenu.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        className="block px-3 py-2 text-sm text-primary-600 hover:bg-primary-50 rounded-md"
                        onClick={() => setIsOpen(false)}
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </nav>
  )
}
