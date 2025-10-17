"use client"

import Link from "next/link"
import { Github, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-card border-t border-border mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-bold mb-4">MoSHa</h3>
            <p className="text-muted-foreground text-sm">Modern course platform for learning programming</p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/" className="text-muted-foreground hover:text-foreground transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/for-free" className="text-muted-foreground hover:text-foreground transition-colors">
                  Free Courses
                </Link>
              </li>
              <li>
                <Link href="/baument" className="text-muted-foreground hover:text-foreground transition-colors">
                  Paid Courses
                </Link>
              </li>
              <li>
                <Link href="/private" className="text-muted-foreground hover:text-foreground transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold mb-4">Resources</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Documentation
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="text-muted-foreground hover:text-foreground transition-colors">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div>
            <h4 className="font-semibold mb-4">Follow</h4>
            <div className="flex gap-4">
              <a
                href="https://github.com/moHamedsaADHA"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://www.linkedin.com/in/mohamed-saad-b33767320/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://wa.me/201092731005"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-foreground transition-colors"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="w-5 h-5" fill="currentColor" aria-hidden>
                  <path d="M20.52 3.48A11.82 11.82 0 0012.01.25C6.02.25 1.25 5 1.25 11c0 1.95.51 3.86 1.47 5.55L.25 23l6.74-2.06A11.72 11.72 0 0012.01 22C17.99 22 22.75 17.25 22.75 11 22.75 9.03 22.33 7.12 21.36 5.43zM12.01 20.5c-1.5 0-2.96-.38-4.24-1.09l-.3-.16-4.01 1.22 1.22-3.92-.19-.31A8.98 8.98 0 013 11c0-5 4.02-9 9.01-9 2.41 0 4.7.94 6.41 2.65 1.72 1.71 2.66 4 2.66 6.35 0 5-4.02 9-9.01 9z" />
                  <path d="M17.6 14.3c-.3-.1-1.76-.86-2.03-.96-.27-.11-.47-.16-.67.16s-.77.96-.95 1.16c-.17.21-.35.24-.65.08-.3-.17-1.12-.41-2.13-1.31-.79-.7-1.32-1.56-1.46-1.86-.13-.31-.01-.48.11-.62.12-.12.27-.32.4-.48.13-.16.17-.27.27-.45.1-.17.05-.33-.03-.46-.08-.13-.67-1.61-.92-2.21-.24-.57-.49-.49-.67-.5-.17-.01-.37-.01-.57-.01s-.46.07-.7.33c-.24.26-.95.93-.95 2.27s.98 2.63 1.12 2.82c.13.17 1.94 2.96 4.7 4.15 3.02 1.3 3.02 0 3.56-.92.35-.67.5-1.22.35-1.33-.15-.11-.55-.16-.85-.27z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-border pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-muted-foreground">
          <p>&copy; 2025 MoSHa. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-foreground transition-colors">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
