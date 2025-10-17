import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { AnimatedLogo } from "@/components/animated-logo"
import { DeveloperBio } from "@/components/developer-bio"
import { MotivationalQuotes } from "@/components/motivational-quotes"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col items-center justify-center text-center mb-16">
            <AnimatedLogo />
          </div>

          {/* Motivational Section */}
          <MotivationalQuotes />

          {/* Developer Bio */}
          <DeveloperBio />
        </div>
      </section>

      <Footer />
    </main>
  )
}
