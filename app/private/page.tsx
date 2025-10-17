import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { ContactForm } from "@/components/contact-form"
import { VisitorCounter } from "@/components/visitor-counter"

export default function PrivatePage() {
  return (
    <main className="min-h-screen bg-background">
      <Navigation />

      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h1 className="text-4xl sm:text-5xl font-bold mb-4">Get In Touch</h1>
            <p className="text-lg text-muted-foreground max-w-2xl">
              Have questions about our courses? Want to collaborate? Reach out and let's connect!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Form */}
            <div className="lg:col-span-2">
              <ContactForm />
            </div>

            {/* Sidebar */}
            <div className="space-y-6">
              {/* Contact Info */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Contact Information</h3>
                <div className="space-y-4 text-sm text-muted-foreground">
                  <div>
                    <p className="font-semibold text-foreground mb-1">Email</p>
                    <a href="mailto:mohamed.saad2827822772@gmail.com" className="hover:text-primary transition-colors">
                      mohamed.saad2827822772@gmail.com
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Phone</p>
                    <a href="tel:+201092731005" className="hover:text-primary transition-colors">
                      +201092731005
                    </a>
                  </div>
                  <div>
                    <p className="font-semibold text-foreground mb-1">Location</p>
                    <p>Cairo, Egypt</p>
                  </div>
                </div>
              </div>

              {/* Visitor Counter */}
              <VisitorCounter />

              {/* Quick Links */}
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-xl font-bold mb-4">Quick Links</h3>
                <ul className="space-y-2 text-sm">
                  <li>
                    <a href="/" className="text-muted-foreground hover:text-primary transition-colors">
                      Home
                    </a>
                  </li>
                  <li>
                    <a href="/for-free" className="text-muted-foreground hover:text-primary transition-colors">
                      Free Courses
                    </a>
                  </li>
                  <li>
                    <a href="/Premium" className="text-muted-foreground hover:text-primary transition-colors">
                      Premium Courses
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  )
}
