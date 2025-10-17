"use client"

import { useEffect, useState } from "react"
import { Eye } from "lucide-react"

export function VisitorCounter() {
  const [visitors, setVisitors] = useState(0)
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    setMounted(true)

    // Get current visitor count from localStorage
    const storedVisitors = localStorage.getItem("mosha-visitors")
    const currentCount = storedVisitors ? Number.parseInt(storedVisitors) : 0

    // Increment and save
    const newCount = currentCount + 1
    setVisitors(newCount)
    localStorage.setItem("mosha-visitors", newCount.toString())
  }, [])

  if (!mounted) {
    return null
  }

  return (
    <div className="bg-card border border-border rounded-lg p-6">
      <div className="flex items-center gap-3 mb-4">
        <Eye className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-bold">Visitors</h3>
      </div>

      <div className="text-center">
        <p className="text-4xl font-bold text-primary mb-2">{visitors.toLocaleString()}</p>
        <p className="text-sm text-muted-foreground">people have visited this page</p>
      </div>

      {/* Animated counter background */}
      <div className="mt-4 h-1 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500"
          style={{ width: `${Math.min((visitors / 1000) * 100, 100)}%` }}
        />
      </div>
    </div>
  )
}
