"use client"

import { Github, Linkedin, Mail } from "lucide-react"

export function DeveloperBio() {
  return (
    <div className="max-w-3xl mx-auto">
      <div className="bg-card border border-border rounded-lg p-8 sm:p-12">
        <h2 className="text-3xl font-bold mb-6 text-center">About Me</h2>

        <div className="space-y-4 text-muted-foreground mb-8">
          <p>
            I'm Mohamed Saad Hamed, a passionate full-stack developer with a mission to make programming education
            accessible to everyone. With years of experience in web development, I've helped hundreds of students
            transition into tech careers.
          </p>
          <p>
            My teaching philosophy combines practical, real-world projects with solid theoretical foundations. Whether
            you're just starting your coding journey or looking to level up your skills, I'm here to guide you every
            step of the way.
          </p>
          <p>
            I specialize in modern web technologies including React, Next.js, TypeScript, and full-stack development. My
            courses are designed to be engaging, interactive, and immediately applicable to real projects.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex justify-center gap-6 mb-8">
          <a
            href="https://github.com/moHamedsaADHA"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110"
            aria-label="GitHub"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/mohamed-saad-b33767320/"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110"
            aria-label="LinkedIn"
          >
            <Linkedin className="w-6 h-6" />
          </a>
          <a
            href="https://wa.me/201092731005"
            target="_blank"
            rel="noopener noreferrer"
            className="p-3 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110"
            aria-label="WhatsApp"
          >
            {/* Inline WhatsApp icon */}
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-6 h-6" fill="currentColor" aria-hidden>
              <path d="M20.52 3.48A11.82 11.82 0 0012.01.25C6.02.25 1.25 5 1.25 11c0 1.95.51 3.86 1.47 5.55L.25 23l6.74-2.06A11.72 11.72 0 0012.01 22C17.99 22 22.75 17.25 22.75 11 22.75 9.03 22.33 7.12 21.36 5.43zM12.01 20.5c-1.5 0-2.96-.38-4.24-1.09l-.3-.16-4.01 1.22 1.22-3.92-.19-.31A8.98 8.98 0 013 11c0-5 4.02-9 9.01-9 2.41 0 4.7.94 6.41 2.65 1.72 1.71 2.66 4 2.66 6.35 0 5-4.02 9-9.01 9z" />
              <path d="M17.6 14.3c-.3-.1-1.76-.86-2.03-.96-.27-.11-.47-.16-.67.16s-.77.96-.95 1.16c-.17.21-.35.24-.65.08-.3-.17-1.12-.41-2.13-1.31-.79-.7-1.32-1.56-1.46-1.86-.13-.31-.01-.48.11-.62.12-.12.27-.32.4-.48.13-.16.17-.27.27-.45.1-.17.05-.33-.03-.46-.08-.13-.67-1.61-.92-2.21-.24-.57-.49-.49-.67-.5-.17-.01-.37-.01-.57-.01s-.46.07-.7.33c-.24.26-.95.93-.95 2.27s.98 2.63 1.12 2.82c.13.17 1.94 2.96 4.7 4.15 3.02 1.3 3.02 0 3.56-.92.35-.67.5-1.22.35-1.33-.15-.11-.55-.16-.85-.27z" />
            </svg>
          </a>
          <a
            href="#"
            className="p-3 bg-muted rounded-lg hover:bg-primary hover:text-primary-foreground transition-all duration-300 transform hover:scale-110"
            aria-label="Email"
          >
            <Mail className="w-6 h-6" />
          </a>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 pt-8 border-t border-border">
          <div className="text-center">
            <p className="text-2xl font-bold text-primary">500+</p>
            <p className="text-sm text-muted-foreground">Students</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-primary">50+</p>
            <p className="text-sm text-muted-foreground">Courses</p>
          </div>
          <div className="text-center">
            <p className="text-2xl font-bold text-primary">10+</p>
            <p className="text-sm text-muted-foreground">Years Experience</p>
          </div>
        </div>
      </div>
    </div>
  )
}
