"use client"

import { useState } from "react"
import { CourseCard } from "@/components/course-card"

const paidCourses = [
  {
    id: 101,
    title: "Advanced React & Next.js Mastery",
    category: "Online",
    description:
      "Master modern React patterns, Next.js 15, server components, and build production-ready applications.",
    lessons: 48,
    duration: "12 weeks",
    level: "Advanced",
    price: 99,
    image: "/advanced-react-nextjs.jpg",
  },
  {
    id: 102,
    title: "Full-Stack Web Development",
    category: "Online",
    description: "Complete full-stack development course covering frontend, backend, databases, and deployment.",
    lessons: 60,
    duration: "16 weeks",
    level: "Advanced",
    price: 149,
    image: "/fullstack-development.jpg",
  },
  {
    id: 103,
    title: "TypeScript Advanced Patterns",
    category: "Online",
    description: "Deep dive into TypeScript with advanced patterns, decorators, and enterprise-level architecture.",
    lessons: 32,
    duration: "10 weeks",
    level: "Advanced",
    price: 79,
    image: "/typescript-advanced.jpg",
  },
  {
    id: 104,
    title: "Web Performance & Optimization",
    category: "Online",
    description: "Learn to optimize web applications for speed, SEO, and user experience with real-world techniques.",
    lessons: 28,
    duration: "8 weeks",
    level: "Intermediate",
    price: 89,
    image: "/web-performance.jpg",
  },
  {
    id: 105,
    title: "In-Person: React Bootcamp",
    category: "Offline",
    description: "Intensive 4-week in-person bootcamp with hands-on projects and direct mentorship.",
    lessons: 40,
    duration: "4 weeks",
    level: "Intermediate",
    price: 499,
    image: "/react-bootcamp.jpg",
  },
  {
    id: 106,
    title: "In-Person: Full-Stack Intensive",
    category: "Offline",
    description: "Comprehensive in-person program covering full-stack development with real-world projects.",
    lessons: 60,
    duration: "8 weeks",
    level: "Advanced",
    price: 799,
    image: "/fullstack-intensive.jpg",
  },
]

export function PaidCoursesList() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredCourses =
    selectedCategory === "All" ? paidCourses : paidCourses.filter((course) => course.category === selectedCategory)

  return (
    <div>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 mb-12">
        {["All", "Online", "Offline"].map((category) => (
          <button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`px-6 py-2 rounded-lg font-medium transition-all duration-300 ${
              selectedCategory === category
                ? "bg-primary text-primary-foreground shadow-lg shadow-primary/50"
                : "bg-muted text-muted-foreground hover:bg-muted/80"
            }`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Courses Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredCourses.map((course) => (
          <CourseCard key={course.id} course={course} isFree={false} />
        ))}
      </div>

      {filteredCourses.length === 0 && (
        <div className="text-center py-12">
          <p className="text-muted-foreground text-lg">No courses found in this category.</p>
        </div>
      )}
    </div>
  )
}
