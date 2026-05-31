'use client'

import { useTheme } from 'next-themes'
import { Sun, Moon } from 'lucide-react'
import { useEffect, useState } from 'react'

export default function ThemeToggle() {
  const { theme, setTheme, systemTheme } = useTheme()
  const [mounted, setMounted] = useState(false)

  useEffect(() => setMounted(true), [])

  if (!mounted) return null

  const currentTheme = theme === 'system' ? systemTheme : theme

  return (
    <button
      aria-label="Toggle theme"
      onClick={() => setTheme(currentTheme === 'dark' ? 'light' : 'dark')}
      className="p-2 rounded-md hover:bg-primary-50 transition-colors"
    >
      {currentTheme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
    </button>
  )
}
