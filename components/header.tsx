'use client'

import { useState } from 'react'
import { Menu, X, Sun, Moon } from 'lucide-react'
import { useEffect } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [darkMode, setDarkMode] = useState(true)

  useEffect(() => {
    const stored = localStorage.getItem('darkMode')
    // default to dark if no preference saved yet
    const isDark = stored === null ? true : stored === 'true'
    setDarkMode(isDark)
    if (isDark) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }, [])

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode
    setDarkMode(newDarkMode)
    localStorage.setItem('darkMode', String(newDarkMode))
    if (newDarkMode) {
      document.documentElement.classList.add('dark')
    } else {
      document.documentElement.classList.remove('dark')
    }
  }

  return (
    <header className="sticky top-0 z-50 bg-white dark:bg-slate-950 border-b border-gray-200 dark:border-slate-800 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center shadow-md">
              <span className="text-white font-bold text-lg">P</span>
            </div>
            <span className="text-2xl font-bold text-primary dark:text-accent">Pavit</span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a href="#products" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition">
              Products
            </a>
            <a href="#quality" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition">
              Quality
            </a>
            <a href="#stats" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition">
              About Us
            </a>
            <a href="#contact" className="text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent transition">
              Contact
            </a>
          </nav>

          {/* Right Side - CTA & Theme Toggle */}
          <div className="hidden md:flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition"
            >
              {darkMode ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} className="text-slate-600" />}
            </button>
            <button className="px-6 py-2.5 bg-gradient-to-r from-primary to-accent text-white rounded-full text-sm font-semibold hover:shadow-lg transition transform hover:scale-105">
              Order Now
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-full bg-gray-100 dark:bg-slate-800 hover:bg-gray-200 dark:hover:bg-slate-700 transition"
            >
              {darkMode ? <Sun size={20} className="text-yellow-500" /> : <Moon size={20} className="text-slate-600" />}
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="text-gray-700 dark:text-gray-300"
            >
              {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <nav className="md:hidden pb-4 border-t border-gray-200 dark:border-slate-800">
            <a href="#products" className="block py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent">
              Products
            </a>
            <a href="#quality" className="block py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent">
              Quality
            </a>
            <a href="#stats" className="block py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent">
              About Us
            </a>
            <a href="#contact" className="block py-3 text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-primary dark:hover:text-accent">
              Contact
            </a>
            <button className="w-full mt-4 px-6 py-2.5 bg-gradient-to-r from-primary to-accent text-white rounded-full text-sm font-semibold">
              Order Now
            </button>
          </nav>
        )}
      </div>
    </header>
  )
}
