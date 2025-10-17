"use client"

import { useState } from "react"
import { Play, Clock, BookOpen } from "lucide-react"

interface Course {
  id: number
  title: string
  category: string
  description: string
  lessons: number
  duration: string
  level: string
  image: string
  price?: number
}

interface CourseCardProps {
  course: Course
  isFree?: boolean
}

export function CourseCard({ course, isFree = false }: CourseCardProps) {
  const [isHovered, setIsHovered] = useState(false)

  return (
    <div
      className="group bg-card border border-border rounded-lg overflow-hidden hover:border-primary transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 transform hover:-translate-y-1"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative h-48 overflow-hidden bg-muted">
        <img
          src={course.image || "/placeholder.svg"}
          alt={course.title}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <button className="p-3 bg-primary rounded-full text-primary-foreground hover:scale-110 transition-transform">
            <Play className="w-6 h-6 fill-current" />
          </button>
        </div>

        {/* Badge */}
        <div className="absolute top-3 right-3">
          <span className="px-3 py-1 bg-primary text-primary-foreground text-xs font-semibold rounded-full">
            {course.level}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6">
        <p className="text-sm text-primary font-semibold mb-2">{course.category}</p>
        <h3 className="text-lg font-bold mb-2 line-clamp-2 group-hover:text-primary transition-colors">
          {course.title}
        </h3>
        <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{course.description}</p>

        {/* Course Info */}
        <div className="space-y-2 mb-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <BookOpen className="w-4 h-4" />
            <span>{course.lessons} lessons</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>{course.duration}</span>
          </div>
        </div>

        {/* Footer */}
        <div className="flex items-center justify-between pt-4 border-t border-border">
          <span className="font-semibold text-primary">{isFree ? "Free" : `$${course.price}`}</span>
          <button className="px-4 py-2 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-primary/90 transition-colors">
            {isFree ? "Enroll Now" : "View Course"}
          </button>
        </div>
      </div>
    </div>
  )
}
