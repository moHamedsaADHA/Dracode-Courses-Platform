import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { PaidCoursesList } from "@/components/paid-courses-list"

export default function PremiumPage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Premium Courses</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Invest in your future with our comprehensive premium courses. Get access to advanced content, live
              sessions, and personalized support.
            </p>
          </div>

          <PaidCoursesList />
        </div>
      </section>

      <Footer />
    </main>
  )
}
