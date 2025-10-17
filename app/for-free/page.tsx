import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { FreeCoursesList } from "@/components/free-courses-list"

export default function ForFreePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Free Courses</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Start your programming journey with our comprehensive free courses. Learn at your own pace with
              high-quality content and practical projects.
            </p>
          </div>

          <FreeCoursesList />
        </div>
      </section>

      <Footer />
    </main>
  )
}
