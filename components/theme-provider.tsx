"use client"

import type React from "react"
import { useEffect, useState } from "react"
import { usePathname } from "next/navigation"

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [mounted, setMounted] = useState(false)
  const pathname = usePathname() || "/"

  useEffect(() => {
    setMounted(true)

    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem("theme")
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches

    const isDark = savedTheme ? savedTheme === "dark" : prefersDark

    if (isDark) {
      document.documentElement.classList.add("dark")
    } else {
      document.documentElement.classList.remove("dark")
    }
  }, [])

  // While hydrating, render children as-is to avoid flicker
  if (!mounted) {
    return <>{children}</>
  }

  // Key by pathname so route changes remount this container and trigger the CSS animation
  return (
    <div key={pathname} className="min-h-screen animate-in fade-in slide-in-from-bottom-2 duration-300">
      {children}
    </div>
  )
}
