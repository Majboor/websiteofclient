import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { MapPin, Phone, Clock, Star } from "lucide-react"
import Image from "next/image"

export default function Home() {
  return (
    <div
      className="min-h-screen text-white"
      style={{
        backgroundImage: "url(/background.jpg)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundAttachment: "fixed",
      }}
    >
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-sm bg-black/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <Image src="/logo.png" alt="Shahi Dera Restaurant" width={80} height={80} className="h-12 w-auto" />
              <div>
                <h1 className="text-xl font-bold text-white">Shahi Dera</h1>
                <p className="text-sm text-[#00A63E]">Authentic Pakistani Cuisine</p>
              </div>
            </div>
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#home" className="text-[#00A63E] hover:text-[#00A63E] transition-colors font-medium">
                Home
              </a>
              <Link href="/about" className="text-white hover:text-[#00A63E] transition-colors">
                About
              </Link>
              <Link href="/menu" className="text-white hover:text-[#00A63E] transition-colors">
                Menu
              </Link>
              <Link href="/contact" className="text-white hover:text-[#00A63E] transition-colors">
                Contact
              </Link>
              <Button className="bg-[#00A63E] hover:bg-[#008A35] px-6">Order Now</Button>
            </nav>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="min-h-[70vh] relative flex items-center pt-32">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              <span className="text-white">Taste of</span>
              <br />
              <span className="text-[#00A63E]">Pakistan</span>
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Experience authentic Pakistani flavors crafted with traditional recipes and premium ingredients
            </p>

            <div className="flex items-center space-x-8 mb-8">
              <div className="flex items-center space-x-2">
                <div className="flex">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-[#00A63E] text-[#00A63E]" />
                  ))}
                </div>
                <span className="text-white font-medium">4.8/5 Rating</span>
              </div>
              <div className="text-white font-medium">10K+ Happy Customers</div>
            </div>

            <div className="flex space-x-4">
              <Link href="/menu">
                <Button className="bg-[#00A63E] hover:bg-[#008A35] px-8 py-3 text-lg">View Menu</Button>
              </Link>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-black px-8 py-3 text-lg bg-transparent"
              >
                Book Table
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Dishes */}
      <section id="menu" className="container mx-auto px-4 pb-16">
        <div className="bg-black/70 backdrop-blur-sm rounded-2xl p-8">
          <h2 className="text-4xl font-bold text-white mb-4 text-center">Signature Dishes</h2>
          <p className="text-lg text-gray-300 text-center mb-12 max-w-2xl mx-auto">
            Discover our most beloved traditional Pakistani dishes, prepared with authentic recipes
          </p>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <Card className="bg-black/80 border-[#00A63E] border-2 overflow-hidden backdrop-blur-sm">
              <div className="relative mx-0 my-[-25px]">
                <Image
                  src="/chicken-biryani.png"
                  alt="Chicken Biryani"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#00A63E] text-white px-3 py-1 rounded-full font-bold">
                  $18
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">Chicken Biryani</h3>
                <p className="text-gray-300 mb-6">Aromatic basmati rice with tender chicken and traditional spices</p>
                <Button className="w-full bg-[#00A63E] hover:bg-[#008A35]">Order Now</Button>
              </CardContent>
            </Card>

            <Card className="bg-black/80 border-[#00A63E] border-2 overflow-hidden backdrop-blur-sm">
              <div className="relative my-[-25px]">
                <Image
                  src="/lamb-karahi-copper-pot.png"
                  alt="Lamb Karahi"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#00A63E] text-white px-3 py-1 rounded-full font-bold">
                  $26
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">Lamb Karahi</h3>
                <p className="text-gray-300 mb-6">Slow-cooked lamb in traditional karahi with fresh herbs</p>
                <Button className="w-full bg-[#00A63E] hover:bg-[#008A35]">Order Now</Button>
              </CardContent>
            </Card>

            <Card className="bg-black/80 border-[#00A63E] border-2 overflow-hidden backdrop-blur-sm">
              <div className="relative my-[-25px]">
                <Image
                  src="/beef-nihari-stew.png"
                  alt="Beef Nihari"
                  width={400}
                  height={200}
                  className="w-full h-48 object-cover"
                />
                <div className="absolute top-4 right-4 bg-[#00A63E] text-white px-3 py-1 rounded-full font-bold">
                  $24
                </div>
              </div>
              <CardContent className="p-6">
                <h3 className="text-2xl font-bold text-white mb-3">Beef Nihari</h3>
                <p className="text-gray-300 mb-6">Traditional slow-cooked beef stew with authentic spices</p>
                <Button className="w-full bg-[#00A63E] hover:bg-[#008A35]">Order Now</Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-black border-t border-gray-800 mt-16">
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
                  <a href="#home" className="text-gray-300 hover:text-[#00A63E] transition-colors">
                    Home
                  </a>
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
