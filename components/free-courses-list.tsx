"use client"

import { useState } from "react"
import { CourseCard } from "@/components/course-card"

const freeCourses = [
  {
    id: 1,
    title: "JavaScript Fundamentals",
    category: "JavaScript",
    description: "Master the basics of JavaScript including variables, functions, and DOM manipulation.",
    lessons: 24,
    duration: "8 weeks",
    level: "Beginner",
    image: "/javascript-code.jpg",
  },
  {
    id: 2,
    title: "HTML & CSS Essentials",
    category: "Web Design",
    description: "Learn to build beautiful, responsive websites with HTML5 and modern CSS techniques.",
    lessons: 18,
    duration: "6 weeks",
    level: "Beginner",
    image: "/html-css-design.jpg",
  },
  {
    id: 3,
    title: "React Basics",
    category: "React",
    description: "Introduction to React components, hooks, and state management for building interactive UIs.",
    lessons: 20,
    duration: "7 weeks",
    level: "Intermediate",
    image: "/react-components.jpg",
  },
  {
    id: 4,
    title: "Git & Version Control",
    category: "Tools",
    description: "Learn Git fundamentals, branching strategies, and collaborative development workflows.",
    lessons: 12,
    duration: "4 weeks",
    level: "Beginner",
    image: "/git-version-control.jpg",
  },
  {
    id: 5,
    title: "TypeScript Essentials",
    category: "TypeScript",
    description: "Add type safety to your JavaScript projects with TypeScript. Learn interfaces, generics, and more.",
    lessons: 16,
    duration: "5 weeks",
    level: "Intermediate",
    image: "/typescript-code.jpg",
  },
  {
    id: 6,
    title: "Web APIs & Fetch",
    category: "JavaScript",
    description: "Master working with APIs, async/await, and building real-world applications with data.",
    lessons: 14,
    duration: "5 weeks",
    level: "Intermediate",
    image: "/web-api-development.jpg",
  },
]

const categories = ["All", "JavaScript", "React", "TypeScript", "Web Design", "Tools"]

export function FreeCoursesList() {
  const [selectedCategory, setSelectedCategory] = useState("All")

  const filteredCourses =
    selectedCategory === "All" ? freeCourses : freeCourses.filter((course) => course.category === selectedCategory)

  return (
    <div>
      {/* Category Filter */}
      <div className="flex flex-wrap gap-3 mb-12">
        {categories.map((category) => (
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
          <CourseCard key={course.id} course={course} isFree={true} />
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
