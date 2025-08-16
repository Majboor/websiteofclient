import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white relative">
      {/* Background Image */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/background.jpg)",
        }}
      />

      {/* Background Mask */}
      <div className="fixed inset-0 bg-black/70 backdrop-blur-sm" />

      {/* Content */}
      <div className="relative z-10">
        {/* Header */}
        <header className="fixed top-0 left-0 right-0 z-50 bg-black/20 backdrop-blur-md border-b border-white/10">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Link href="/" className="flex items-center gap-3">
                <Image src="/logo.png" alt="Shahi Dera Restaurant" width={50} height={50} className="object-contain" />
                <div>
                  <h1 className="text-xl font-bold text-white">Shahi Dera</h1>
                  <p className="text-sm text-[#00A63E]">Authentic Pakistani Cuisine</p>
                </div>
              </Link>

              <nav className="hidden md:flex items-center gap-8">
                <Link href="/" className="text-white hover:text-[#00A63E] transition-colors">
                  Home
                </Link>
                <Link href="/about" className="text-[#00A63E] font-medium">
                  About
                </Link>
                <Link href="/menu" className="text-white hover:text-[#00A63E] transition-colors">
                  Menu
                </Link>
                <Link href="/contact" className="text-white hover:text-[#00A63E] transition-colors">
                  Contact
                </Link>
              </nav>

              <Button className="bg-[#00A63E] hover:bg-[#00A63E]/90 text-white px-6 py-2 rounded-lg font-medium">
                Order Now
              </Button>
            </div>
          </div>
        </header>

        {/* Main Content */}
        <main className="pt-32 pb-16">
          <div className="container mx-auto px-4">
            {/* Page Header */}
            <div className="text-center mb-16">
              <h1 className="text-5xl md:text-6xl font-bold mb-6">
                About <span className="text-[#00A63E]">Shahi Dera</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                Preserving and sharing the original taste of Pakistan in Australia through authentic cuisine and warm
                hospitality
              </p>
            </div>

            {/* Our Story Section */}
            <div className="mb-20">
              <div className="grid md:grid-cols-2 gap-12 items-center">
                <div className="relative">
                  <Image
                    src="/pakistani-restaurant-interior.png"
                    alt="Restaurant Interior"
                    width={600}
                    height={400}
                    className="rounded-lg object-cover"
                  />
                </div>
                <div>
                  <h2 className="text-3xl font-bold text-[#00A63E] mb-6">Our Story</h2>
                  <p className="text-gray-300 mb-4 leading-relaxed">
                    At Shahi Dera, our goal is simple yet powerful: to preserve and share the original taste of Pakistan
                    in Australia. We believe that food is more than just a meal – it's a story, an emotion, and a
                    connection to your roots.
                  </p>
                  <p className="text-gray-300 leading-relaxed">
                    Whether you grew up with the taste of rich Lahori spices or are exploring Pakistani cuisine for the
                    first time, we bring you the same authentic flavors you would find in the bustling streets of
                    Lahore, the traditional homes of Punjab.
                  </p>
                </div>
              </div>
            </div>

            {/* Features Grid */}
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
              <div className="bg-black/80 backdrop-blur-sm border border-[#00A63E]/30 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-[#00A63E]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#00A63E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#00A63E] mb-2">Authentic Recipes</h3>
                <p className="text-gray-400 text-sm">Traditional recipes passed down for generations</p>
              </div>

              <div className="bg-black/80 backdrop-blur-sm border border-[#00A63E]/30 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-[#00A63E]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#00A63E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#00A63E] mb-2">Premium Quality</h3>
                <p className="text-gray-400 text-sm">Fresh ingredients and premium spices</p>
              </div>

              <div className="bg-black/80 backdrop-blur-sm border border-[#00A63E]/30 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-[#00A63E]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#00A63E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#00A63E] mb-2">Family Atmosphere</h3>
                <p className="text-gray-400 text-sm">Warm, welcoming environment for all</p>
              </div>

              <div className="bg-black/80 backdrop-blur-sm border border-[#00A63E]/30 rounded-lg p-6 text-center">
                <div className="w-16 h-16 bg-[#00A63E]/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-[#00A63E]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-[#00A63E] mb-2">5 Star Experience</h3>
                <p className="text-gray-400 text-sm">Exceptional service and dining experience</p>
              </div>
            </div>

            {/* Mission and Promise */}
            <div className="grid md:grid-cols-2 gap-8 mb-20">
              <div className="bg-black/80 backdrop-blur-sm border border-[#00A63E]/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-[#00A63E] mb-4">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  To create a bridge between Pakistan and Australia through food, sharing the authentic flavors,
                  traditions, and hospitality of our homeland with the diverse Australian community. We believe that
                  every meal should tell the story of Pakistan – its rich culture, warm people, and incredible culinary
                  heritage.
                </p>
              </div>

              <div className="bg-black/80 backdrop-blur-sm border border-[#00A63E]/30 rounded-lg p-8">
                <h3 className="text-2xl font-bold text-[#00A63E] mb-4">Our Promise</h3>
                <p className="text-gray-300 leading-relaxed">
                  At Shahi Dera, we don't just serve food; we serve memories of Pakistan. We want every customer to
                  leave with a full heart and a satisfied soul, cherishing the flavors that remind them of home or
                  create new, lasting impressions of Pakistani cuisine.
                </p>
              </div>
            </div>

            {/* Meet Our Founders */}
            <div className="text-center">
              <div className="bg-black/80 backdrop-blur-sm border border-[#00A63E]/30 rounded-lg p-8 max-w-2xl mx-auto">
                <h3 className="text-2xl font-bold text-[#00A63E] mb-4">Meet Our Founders</h3>
                <h4 className="text-xl font-bold text-white mb-2">Ali Haider & Rana Medhi Hassan</h4>
                <p className="text-[#00A63E] mb-4">Founders & CEOs</p>
                <p className="text-gray-300 leading-relaxed">
                  Together, Ali and Rana are passionate food enthusiasts dedicated to bringing the best of Pakistan's
                  culinary traditions to the heart of Sydney. With a shared love for authentic flavors, exceptional
                  hospitality, and cultural heritage, they work hand in hand to deliver the true taste of Pakistan to
                  Australia.
                </p>
              </div>
            </div>
          </div>
        </main>

        {/* Footer */}
        <footer className="bg-black border-t border-gray-800">
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
    </div>
  )
}
