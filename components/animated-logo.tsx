"use client"

import { useState } from "react"

export function AnimatedLogo() {
  const [isExpanded, setIsExpanded] = useState(false)

  const letters = [
    { char: "M", color: "from-blue-500" },
    { char: "o", color: "from-purple-500" },
    { char: "S", color: "from-pink-500" },
    { char: "H", color: "from-cyan-500" },
    { char: "a", color: "from-green-500" },
  ]

  return (
    <div className="flex flex-col items-center gap-8">
      {/* Animated Logo */}
      <button onClick={() => setIsExpanded(!isExpanded)} className="relative group cursor-pointer">
        <div className="flex gap-2 items-center justify-center">
          {isExpanded ? (
            <div className="flex gap-1 animate-in fade-in duration-500">
              {letters.map((letter, i) => (
                <div
                  key={i}
                  className={`text-4xl sm:text-5xl font-bold bg-gradient-to-r ${letter.color} to-transparent bg-clip-text text-transparent animate-in fade-in slide-in-from-bottom-2 duration-500`}
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  {letter.char}
                </div>
              ))}
            </div>
          ) : (
            <div className="text-5xl sm:text-6xl font-bold bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 bg-clip-text text-transparent">
                Dracode Warrior
            </div>
          )}
        </div>

        {/* Hover effect */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-500/20 to-pink-500/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
      </button>

      {/* Subtitle */}
      <div className="text-lg sm:text-xl text-muted-foreground max-w-2xl">
        <p className="mb-2">Mohamed Saad Hamed</p>
        <p className="text-sm">Full-Stack Developer & UI/UX Designer</p>
      </div>

      {/* CTA Button */}
      <button className="mt-4 px-8 py-3 bg-gradient-to-r from-blue-500 to-purple-500 text-white rounded-lg font-semibold hover:shadow-lg hover:shadow-purple-500/50 transition-all duration-300 transform hover:scale-105">
        Explore Courses
      </button>
    </div>
  )
}
