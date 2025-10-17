"use client"

import { useEffect, useState } from "react"

type MotivationalQuote = { text: string; author: string }
type QuranicVerse = { text: string; reference: string }

const quotes: MotivationalQuote[] = [
  {
    text: "The only way to do great work is to love what you do.",
    author: "Steve Jobs",
  },
  {
    text: "Code is poetry written for computers to execute and humans to understand.",
    author: "Unknown",
  },
  {
    text: "Every expert was once a beginner.",
    author: "Unknown",
  },
  {
    text: "The best time to plant a tree was 20 years ago. The second best time is now.",
    author: "Chinese Proverb",
  },
  {
    text: "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    author: "Winston Churchill",
  },
]

const quranicVerses: QuranicVerse[] = [
  {
    text: "اقْرَأْ بِاسْمِ رَبِّكَ الَّذِي خَلَقَ",
    reference: "Quran 96:1",
  },
  {
    text: "وَقُل رَّبِّ زِدْنِي عِلْمًا",
    reference: "Quran 20:114",
  },
  {
    text: "قُلْ هَلْ يَسْتَوِي الَّذِينَ يَعْلَمُونَ وَالَّذِينَ لَا يَعْلَمُونَ",
    reference: "Quran 39:9",
  },
]

export function MotivationalQuotes() {
  const [currentQuote, setCurrentQuote] = useState(0)
  const [isQuranic, setIsQuranic] = useState(false)

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentQuote((prev) => {
        const maxQuotes = isQuranic ? quranicVerses.length : quotes.length
        return (prev + 1) % maxQuotes
      })
    }, 6000)

    return () => clearInterval(interval)
  }, [isQuranic])

  const displayQuotes = isQuranic ? (quranicVerses as (MotivationalQuote | QuranicVerse)[]) : (quotes as (MotivationalQuote | QuranicVerse)[])
  const quote = displayQuotes[currentQuote]

  return (
    <div className="mb-16">
      <div className="bg-card border border-border rounded-lg p-8 sm:p-12 max-w-3xl mx-auto">
        <div className="min-h-32 flex flex-col justify-center items-center text-center">
          <p className="text-xl sm:text-2xl font-semibold text-foreground mb-4 animate-in fade-in duration-500">
            "{quote.text}"
          </p>
          <p className="text-muted-foreground">— {isQuranic ? (quote as QuranicVerse).reference : (quote as MotivationalQuote).author}</p>
        </div>

        {/* Toggle Button */}
        <div className="flex justify-center gap-4 mt-6">
          <button
            onClick={() => {
              setIsQuranic(false)
              setCurrentQuote(0)
            }}
            className={`px-4 py-2 rounded-lg transition-colors ${
              !isQuranic ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            Motivational
          </button>
          <button
            onClick={() => {
              setIsQuranic(true)
              setCurrentQuote(0)
            }}
            className={`px-4 py-2 rounded-lg transition-colors ${
              isQuranic ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            Quranic
          </button>
        </div>

        {/* Progress Dots */}
        <div className="flex justify-center gap-2 mt-6">
          {displayQuotes.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrentQuote(i)}
              className={`w-2 h-2 rounded-full transition-all ${i === currentQuote ? "bg-primary w-6" : "bg-muted"}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}
