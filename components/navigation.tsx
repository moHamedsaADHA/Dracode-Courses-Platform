"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { usePathname } from "next/navigation"
import { Moon, Sun, Menu, X } from "lucide-react"

export function Navigation() {
  const [isDark, setIsDark] = useState(false)
  const [mounted, setMounted] = useState(false)
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const pathname = usePathname() || "/"

  const isActive = (path: string) => {
    if (path === "/") return pathname === "/"
    return pathname.startsWith(path)
  }

  useEffect(() => {
    setMounted(true)
    const isDarkMode = document.documentElement.classList.contains("dark")
    setIsDark(isDarkMode)
  }, [])

  const toggleDarkMode = () => {
    const html = document.documentElement
    html.classList.toggle("dark")
    const newIsDark = !isDark
    setIsDark(newIsDark)
    localStorage.setItem("theme", newIsDark ? "dark" : "light")
  }

  return (
    <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <div className="text-2xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
              Dracode Warrior
            </div>
          </Link>

          {/* Navigation Links - Desktop */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`text-foreground hover:text-primary transition-colors ${isActive("/") ? "border-b-2 border-primary pb-1" : ""}`}
            >
              Home
            </Link>
            <Link
              href="/for-free"
              className={`text-foreground hover:text-primary transition-colors ${isActive("/for-free") ? "border-b-2 border-primary pb-1" : ""}`}
            >
              For Free
            </Link>
            <Link
              href="/premium"
              className={`text-foreground hover:text-primary transition-colors ${isActive("/premium") ? "border-b-2 border-primary pb-1" : ""}`}
            >
              Premium
            </Link>
            <Link
              href="/private"
              className={`text-foreground hover:text-primary transition-colors ${isActive("/private") ? "border-b-2 border-primary pb-1" : ""}`}
            >
              Private
            </Link>
          </div>

          {/* Dark Mode Toggle & Mobile Menu */}
          <div className="flex items-center gap-4">
            <button
              onClick={toggleDarkMode}
              className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
              aria-label="Toggle dark mode"
            >
              {mounted &&
                (isDark ? <Sun className="w-5 h-5 text-yellow-500" /> : <Moon className="w-5 h-5 text-slate-700" />)}
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
              aria-label="Toggle menu"
            >
              {isMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-in fade-in slide-in-from-top-2 duration-200">
            <Link
              href="/"
              className={`block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors ${isActive("/") ? "border-b-2 border-primary" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              href="/for-free"
              className={`block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors ${isActive("/for-free") ? "border-b-2 border-primary" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              For Free
            </Link>
            <Link
              href="/premium"
              className={`block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors ${isActive("/premium") ? "border-b-2 border-primary" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Premium
            </Link>
            <Link
              href="/private"
              className={`block px-4 py-2 text-foreground hover:bg-muted rounded-lg transition-colors ${isActive("/private") ? "border-b-2 border-primary" : ""}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Private
            </Link>
          </div>
        )}
      </div>
    </nav>
  )
}
