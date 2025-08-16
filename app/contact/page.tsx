import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock } from "lucide-react"
import { MobileNav } from "@/components/mobile-nav"

export default function ContactPage() {
  return (
    <div
      className="min-h-screen bg-black/50 backdrop-blur-sm"
      style={{
        backgroundImage: "url(/background.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center space-x-3">
            <Image src="/logo.png" alt="Shahi Dera Restaurant" width={60} height={60} />
            <div>
              <h1 className="text-xl font-bold text-white">Shahi Dera</h1>
              <p className="text-sm text-[#00A63E]">Authentic Pakistani Cuisine</p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center space-x-8">
            <Link href="/" className="text-white hover:text-[#00A63E] transition-colors">
              Home
            </Link>
            <Link href="/about" className="text-white hover:text-[#00A63E] transition-colors">
              About
            </Link>
            <Link href="/menu" className="text-white hover:text-[#00A63E] transition-colors">
              Menu
            </Link>
            <Link href="/contact" className="text-[#00A63E] font-semibold">
              Contact
            </Link>
          </nav>

          <div className="flex items-center gap-4">
            <Link
              href="/menu"
              className="hidden md:block bg-[#00A63E] text-white px-6 py-2 rounded-lg hover:bg-[#008a35] transition-all duration-200"
            >
              Order Now
            </Link>
            <MobileNav />
          </div>
        </div>
      </header>

      <main className="pt-32 pb-16">
        <div className="container mx-auto px-4">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Contact <span className="text-[#00A63E]">Us</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              We'd love to hear from you! Book a table, order online, or get in touch for events and inquiries
            </p>
          </div>

          {/* Contact Info Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {/* Phone */}
            <div className="bg-black/80 backdrop-blur-sm border border-[#00A63E] rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-[#00A63E] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Phone</h3>
              <p className="text-[#00A63E] text-lg font-semibold mb-2">+61 412 655 561</p>
              <p className="text-gray-400 mb-4">Call us to book or inquire</p>
              <a
                href="tel:+61412655561"
                className="bg-[#00A63E] text-white px-6 py-2 rounded-lg hover:bg-[#008a35] transition-colors"
              >
                Call Now
              </a>
            </div>

            {/* Location */}
            <div className="bg-black/80 backdrop-blur-sm border border-[#00A63E] rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-[#00A63E] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Location</h3>
              <p className="text-[#00A63E] text-lg font-semibold mb-1">969-971 Canterbury Road</p>
              <p className="text-gray-300 mb-1">Lakemba 2195, Sydney</p>
              <p className="text-gray-400 mb-4">Heart of Lakemba</p>
              <a
                href="https://maps.google.com/?q=969-971+Canterbury+Road+Lakemba+2195"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#00A63E] text-white px-6 py-2 rounded-lg hover:bg-[#008a35] transition-colors"
              >
                Get Directions
              </a>
            </div>

            {/* Hours */}
            <div className="bg-black/80 backdrop-blur-sm border border-[#00A63E] rounded-lg p-8 text-center">
              <div className="w-16 h-16 bg-[#00A63E] rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Hours</h3>
              <p className="text-[#00A63E] text-lg font-semibold mb-1">Mon-Fri: 8:00 AM – 11:00 PM</p>
              <p className="text-gray-300 mb-1">Sat-Sun: 8:00 AM – 12:00 AM</p>
              <p className="text-gray-400 mb-4">Open 7 days a week</p>
              <Link
                href="/menu"
                className="bg-[#00A63E] text-white px-6 py-2 rounded-lg hover:bg-[#008a35] transition-colors"
              >
                View Menu
              </Link>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-black/80 backdrop-blur-sm border border-[#00A63E] rounded-lg p-8 mb-16">
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-4">
                Send Us a <span className="text-[#00A63E]">Message</span>
              </h2>
              <p className="text-gray-300">Have questions or want to make a reservation? We're here to help!</p>
            </div>

            <form className="max-w-2xl mx-auto space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="fullName" className="block text-white font-semibold mb-2">
                    Full Name
                  </label>
                  <input
                    type="text"
                    id="fullName"
                    placeholder="Your full name"
                    className="w-full px-4 py-3 bg-black/50 border border-[#00A63E] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00A63E] focus:ring-1 focus:ring-[#00A63E]"
                  />
                </div>
                <div>
                  <label htmlFor="phoneNumber" className="block text-white font-semibold mb-2">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    id="phoneNumber"
                    placeholder="Your phone number"
                    className="w-full px-4 py-3 bg-black/50 border border-[#00A63E] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00A63E] focus:ring-1 focus:ring-[#00A63E]"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="email" className="block text-white font-semibold mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  placeholder="your.email@example.com"
                  className="w-full px-4 py-3 bg-black/50 border border-[#00A63E] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00A63E] focus:ring-1 focus:ring-[#00A63E]"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-white font-semibold mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  placeholder="What's this about?"
                  className="w-full px-4 py-3 bg-black/50 border border-[#00A63E] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00A63E] focus:ring-1 focus:ring-[#00A63E]"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-white font-semibold mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows={5}
                  placeholder="Tell us how we can help you..."
                  className="w-full px-4 py-3 bg-black/50 border border-[#00A63E] rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-[#00A63E] focus:ring-1 focus:ring-[#00A63E] resize-vertical"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-[#00A63E] text-white px-8 py-3 rounded-lg hover:bg-[#008a35] transition-colors font-semibold"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>

          {/* Find Us Here */}
          <div className="bg-black/80 backdrop-blur-sm border border-[#00A63E] rounded-lg p-8 text-center">
            <div className="w-16 h-16 bg-[#00A63E] rounded-full flex items-center justify-center mx-auto mb-4">
              <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                />
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white mb-4">
              Find Us <span className="text-[#00A63E]">Here</span>
            </h2>
            <p className="text-gray-300 mb-6">969-971 Canterbury Road, Lakemba 2195, Sydney</p>
            <a
              href="https://maps.google.com/?q=969-971+Canterbury+Road+Lakemba+2195"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#00A63E] text-white px-8 py-3 rounded-lg hover:bg-[#008a35] transition-colors font-semibold"
            >
              Open in Google Maps
            </a>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 relative z-10">
        <div className="bg-black/90 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-12">
            <div className="grid md:grid-cols-3 gap-8">
              {/* Visit Us */}
              <div>
                <h3 className="text-2xl font-bold text-[#00A63E] mb-4">Visit Us Today</h3>
                <div className="space-y-3 text-gray-300">
                  <div className="flex items-start">
                    <MapPin className="w-5 h-5 mr-2 text-[#00A63E] mt-1 flex-shrink-0" />
                    <div>
                      <p>969-971 Canterbury Road</p>
                      <p>Lakemba 2195, Sydney</p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Phone className="w-5 h-5 mr-2 text-[#00A63E]" />
                    <span>+61 412 655 561</span>
                  </div>
                </div>
              </div>

              {/* Opening Hours */}
              <div>
                <h3 className="text-2xl font-bold text-[#00A63E] mb-4">Opening Hours</h3>
                <div className="space-y-2 text-gray-300">
                  <div className="flex items-center">
                    <Clock className="w-5 h-5 mr-2 text-[#00A63E]" />
                    <div>
                      <p>Monday - Friday: 8:00 AM - 11:00 PM</p>
                      <p>Saturday - Sunday: 8:00 AM - 12:00 AM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Links */}
              <div>
                <h3 className="text-2xl font-bold text-[#00A63E] mb-4">Quick Links</h3>
                <div className="space-y-3">
                  <Button
                    variant="outline"
                    className="w-full border-[#00A63E] text-[#00A63E] hover:bg-[#00A63E] hover:text-white bg-transparent"
                  >
                    Get Directions
                  </Button>
                  <div className="flex items-center justify-center text-[#00A63E] font-semibold">
                    <Phone className="w-4 h-4 mr-2" />
                    +61 412 655 561
                  </div>
                  <p className="text-center text-gray-400 text-sm">969-971 Canterbury Road Lakemba 2195</p>
                </div>
              </div>
            </div>

            {/* Bottom Navigation */}
            <div className="border-t border-gray-800 mt-8 pt-8">
              <div className="flex flex-col md:flex-row justify-between items-center">
                <div className="flex space-x-6 mb-4 md:mb-0">
                  <Link href="/" className="text-gray-300 hover:text-[#00A63E] transition-colors">
                    Home
                  </Link>
                  <Link href="/about" className="text-gray-300 hover:text-[#00A63E] transition-colors">
                    About
                  </Link>
                  <Link href="/menu" className="text-gray-300 hover:text-[#00A63E] transition-colors">
                    Menu
                  </Link>
                  <Link href="/contact" className="text-gray-300 hover:text-[#00A63E] transition-colors">
                    Contact
                  </Link>
                  <Button className="bg-[#00A63E] hover:bg-[#008A35]">Order Now</Button>
                </div>
                <p className="text-gray-400 text-sm">© 2024 Shahi Dera Restaurant. All rights reserved.</p>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
