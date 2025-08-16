import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { MapPin, Phone, Clock } from "lucide-react"

export default function MenuPage() {
  return (
    <div className="min-h-screen bg-black relative">
      {/* Background Image */}
      <div
        className="fixed inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: "url(/background.jpg)",
        }}
      />

      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md bg-black/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-3">
              <Image src="/logo.png" alt="Shahi Dera Restaurant" width={40} height={40} className="w-10 h-10" />
              <div>
                <h1 className="text-white font-bold text-lg">Shahi Dera</h1>
                <p className="text-[#00A63E] text-xs">Authentic Pakistani Cuisine</p>
              </div>
            </Link>

            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-white hover:text-[#00A63E] transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-white hover:text-[#00A63E] transition-colors">
                About
              </Link>
              <Link href="/menu" className="text-[#00A63E] font-semibold">
                Menu
              </Link>
              <Link href="/contact" className="text-white hover:text-[#00A63E] transition-colors">
                Contact
              </Link>
            </nav>

            <Link
              href="#order"
              className="bg-[#00A63E] text-white px-6 py-2 rounded-lg hover:bg-[#008a35] transition-colors"
            >
              Order Now
            </Link>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 pt-24 pb-16">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Page Header */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our <span className="text-[#00A63E]">Menu</span>
            </h1>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Discover authentic Pakistani flavors with our extensive menu of traditional dishes, prepared with premium
              ingredients and time-honored recipes
            </p>
          </div>

          {/* Breakfast Section */}
          <section className="mb-12">
            <div className="bg-black/70 backdrop-blur-sm border border-[#00A63E] rounded-lg p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-[#00A63E] mb-2">Breakfast</h2>
                <p className="text-gray-300">Saturday – Sunday, 10 AM – 4 PM</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex justify-between items-start border-b border-gray-700 pb-4">
                  <div>
                    <h3 className="text-white font-semibold text-lg">Halwa Puri</h3>
                    <p className="text-gray-400 text-sm">Chickpea curry with puris and halwa</p>
                  </div>
                  <span className="text-[#00A63E] font-bold text-lg">$18</span>
                </div>

                <div className="flex justify-between items-start border-b border-gray-700 pb-4">
                  <div>
                    <h3 className="text-white font-semibold text-lg">Mutton Paya</h3>
                    <p className="text-gray-400 text-sm">Slow‑cooked goat trotters</p>
                  </div>
                  <span className="text-[#00A63E] font-bold text-lg">$22</span>
                </div>

                <div className="flex justify-between items-start border-b border-gray-700 pb-4">
                  <div>
                    <h3 className="text-white font-semibold text-lg">Lamb Shank Nihari</h3>
                    <p className="text-gray-400 text-sm">With or without brain</p>
                  </div>
                  <span className="text-[#00A63E] font-bold text-lg">$24-26</span>
                </div>

                <div className="flex justify-between items-start border-b border-gray-700 pb-4">
                  <div>
                    <h3 className="text-white font-semibold text-lg">Beef Nihari</h3>
                    <p className="text-gray-400 text-sm">With or without brain</p>
                  </div>
                  <span className="text-[#00A63E] font-bold text-lg">$22-24</span>
                </div>

                <div className="flex justify-between items-start border-b border-gray-700 pb-4">
                  <div>
                    <h3 className="text-white font-semibold text-lg">Lahori Saag</h3>
                    <p className="text-gray-400 text-sm">Mustard-spinach dish</p>
                  </div>
                  <span className="text-[#00A63E] font-bold text-lg">$22</span>
                </div>

                <div className="flex justify-between items-start border-b border-gray-700 pb-4">
                  <div>
                    <h3 className="text-white font-semibold text-lg">Lahori Cholay</h3>
                    <p className="text-gray-400 text-sm">Chickpeas street‑style</p>
                  </div>
                  <span className="text-[#00A63E] font-bold text-lg">$17</span>
                </div>

                <div className="flex justify-between items-start border-b border-gray-700 pb-4">
                  <div>
                    <h3 className="text-white font-semibold text-lg">Murgh Cholay</h3>
                    <p className="text-gray-400 text-sm">Chicken with chickpeas</p>
                  </div>
                  <span className="text-[#00A63E] font-bold text-lg">$24</span>
                </div>

                <div className="flex justify-between items-start border-b border-gray-700 pb-4">
                  <div>
                    <h3 className="text-white font-semibold text-lg">Kuzi Haleem</h3>
                    <p className="text-gray-400 text-sm">Beef and lentils stew</p>
                  </div>
                  <span className="text-[#00A63E] font-bold text-lg">$24</span>
                </div>
              </div>
            </div>
          </section>

          {/* Main Curries Section */}
          <section className="mb-12">
            <div className="bg-black/70 backdrop-blur-sm border border-[#00A63E] rounded-lg p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-[#00A63E] mb-2">Main Curries</h2>
                <p className="text-gray-300">Traditional Pakistani & Indian Curries</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex justify-between items-start border-b border-gray-700 pb-4">
                  <div>
                    <h3 className="text-white font-semibold text-lg">Butter Chicken</h3>
                    <p className="text-gray-400 text-sm">Creamy tomato-based chicken curry</p>
                  </div>
                  <span className="text-[#00A63E] font-bold text-lg">$22</span>
                </div>

                <div className="flex justify-between items-start border-b border-gray-700 pb-4">
                  <div>
                    <h3 className="text-white font-semibold text-lg">Chicken Tikka Masala</h3>
                    <p className="text-gray-400 text-sm">Marinated chicken in spiced curry</p>
                  </div>
                  <span className="text-[#00A63E] font-bold text-lg">$22</span>
                </div>

                <div className="flex justify-between items-start border-b border-gray-700 pb-4">
                  <div>
                    <h3 className="text-white font-semibold text-lg">Chicken Vindaloo</h3>
                    <p className="text-gray-400 text-sm">Spicy Goan-style curry</p>
                  </div>
                  <span className="text-[#00A63E] font-bold text-lg">$22</span>
                </div>

                <div className="flex justify-between items-start border-b border-gray-700 pb-4">
                  <div>
                    <h3 className="text-white font-semibold text-lg">Palak Paneer</h3>
                    <p className="text-gray-400 text-sm">Cottage cheese in spinach gravy</p>
                  </div>
                  <span className="text-[#00A63E] font-bold text-lg">$22</span>
                </div>

                <div className="flex justify-between items-start border-b border-gray-700 pb-4">
                  <div>
                    <h3 className="text-white font-semibold text-lg">Daal Makhni</h3>
                    <p className="text-gray-400 text-sm">Creamy black lentils</p>
                  </div>
                  <span className="text-[#00A63E] font-bold text-lg">$22</span>
                </div>

                <div className="flex justify-between items-start border-b border-gray-700 pb-4">
                  <div>
                    <h3 className="text-white font-semibold text-lg">Chicken Korma</h3>
                    <p className="text-gray-400 text-sm">Mild yogurt-based curry</p>
                  </div>
                  <span className="text-[#00A63E] font-bold text-lg">$22</span>
                </div>

                <div className="flex justify-between items-start border-b border-gray-700 pb-4">
                  <div>
                    <h3 className="text-white font-semibold text-lg">Chicken Jalfreizi</h3>
                    <p className="text-gray-400 text-sm">Stir-fried with vegetables</p>
                  </div>
                  <span className="text-[#00A63E] font-bold text-lg">$22</span>
                </div>

                <div className="flex justify-between items-start border-b border-gray-700 pb-4">
                  <div>
                    <h3 className="text-white font-semibold text-lg">Mango Chicken</h3>
                    <p className="text-gray-400 text-sm">Sweet and tangy curry</p>
                  </div>
                  <span className="text-[#00A63E] font-bold text-lg">$22</span>
                </div>
              </div>
            </div>
          </section>

          {/* Traditional Classics Section */}
          <section className="mb-12">
            <div className="bg-black/70 backdrop-blur-sm border border-[#00A63E] rounded-lg p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-[#00A63E] mb-2">Traditional Classics</h2>
                <p className="text-gray-300">Authentic Pakistani Dishes</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex justify-between items-start border-b border-gray-700 pb-4">
                  <div>
                    <h3 className="text-white font-semibold text-lg">Lamb Karahi</h3>
                    <p className="text-gray-400 text-sm">Traditional wok-cooked lamb</p>
                  </div>
                  <span className="text-[#00A63E] font-bold text-lg">$24-26</span>
                </div>

                <div className="flex justify-between items-start border-b border-gray-700 pb-4">
                  <div>
                    <h3 className="text-white font-semibold text-lg">Chicken Karahi</h3>
                    <p className="text-gray-400 text-sm">Traditional wok-cooked chicken</p>
                  </div>
                  <span className="text-[#00A63E] font-bold text-lg">$24-26</span>
                </div>

                <div className="flex justify-between items-start border-b border-gray-700 pb-4">
                  <div>
                    <h3 className="text-white font-semibold text-lg">Fish Karahi</h3>
                    <p className="text-gray-400 text-sm">Traditional wok-cooked fish</p>
                  </div>
                  <span className="text-[#00A63E] font-bold text-lg">$24-26</span>
                </div>

                <div className="flex justify-between items-start border-b border-gray-700 pb-4">
                  <div>
                    <h3 className="text-white font-semibold text-lg">Goat Karahi</h3>
                    <p className="text-gray-400 text-sm">Traditional wok-cooked goat</p>
                  </div>
                  <span className="text-[#00A63E] font-bold text-lg">$26-28</span>
                </div>

                <div className="flex justify-between items-start border-b border-gray-700 pb-4">
                  <div>
                    <h3 className="text-white font-semibold text-lg">Chicken Handi</h3>
                    <p className="text-gray-400 text-sm">Clay pot chicken curry</p>
                  </div>
                  <span className="text-[#00A63E] font-bold text-lg">$24</span>
                </div>

                <div className="flex justify-between items-start border-b border-gray-700 pb-4">
                  <div>
                    <h3 className="text-white font-semibold text-lg">Lamb Handi</h3>
                    <p className="text-gray-400 text-sm">Clay pot lamb curry</p>
                  </div>
                  <span className="text-[#00A63E] font-bold text-lg">$26</span>
                </div>
              </div>
            </div>
          </section>

          {/* Rice & Biryani Section */}
          <section className="mb-12">
            <div className="bg-black/70 backdrop-blur-sm border border-[#00A63E] rounded-lg p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-[#00A63E] mb-2">Rice & Biryani</h2>
                <p className="text-gray-300">Aromatic Rice Dishes</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex justify-between items-start border-b border-gray-700 pb-4">
                  <div>
                    <h3 className="text-white font-semibold text-lg">Chicken Biryani</h3>
                    <p className="text-gray-400 text-sm">Aromatic basmati rice with tender chicken</p>
                  </div>
                  <span className="text-[#00A63E] font-bold text-lg">$18</span>
                </div>

                <div className="flex justify-between items-start border-b border-gray-700 pb-4">
                  <div>
                    <h3 className="text-white font-semibold text-lg">Lamb Biryani</h3>
                    <p className="text-gray-400 text-sm">Aromatic basmati rice with tender lamb</p>
                  </div>
                  <span className="text-[#00A63E] font-bold text-lg">$22</span>
                </div>

                <div className="flex justify-between items-start border-b border-gray-700 pb-4">
                  <div>
                    <h3 className="text-white font-semibold text-lg">Goat Biryani</h3>
                    <p className="text-gray-400 text-sm">Aromatic basmati rice with tender goat</p>
                  </div>
                  <span className="text-[#00A63E] font-bold text-lg">$24</span>
                </div>

                <div className="flex justify-between items-start border-b border-gray-700 pb-4">
                  <div>
                    <h3 className="text-white font-semibold text-lg">Vegetable Biryani</h3>
                    <p className="text-gray-400 text-sm">Aromatic basmati rice with mixed vegetables</p>
                  </div>
                  <span className="text-[#00A63E] font-bold text-lg">$16</span>
                </div>

                <div className="flex justify-between items-start border-b border-gray-700 pb-4">
                  <div>
                    <h3 className="text-white font-semibold text-lg">Plain Rice</h3>
                    <p className="text-gray-400 text-sm">Steamed basmati rice</p>
                  </div>
                  <span className="text-[#00A63E] font-bold text-lg">$6</span>
                </div>

                <div className="flex justify-between items-start border-b border-gray-700 pb-4">
                  <div>
                    <h3 className="text-white font-semibold text-lg">Pilau Rice</h3>
                    <p className="text-gray-400 text-sm">Spiced basmati rice</p>
                  </div>
                  <span className="text-[#00A63E] font-bold text-lg">$8</span>
                </div>
              </div>
            </div>
          </section>

          {/* Seafood Section */}
          <section className="mb-12">
            <div className="bg-black/70 backdrop-blur-sm border border-[#00A63E] rounded-lg p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-[#00A63E] mb-2">Seafood</h2>
                <p className="text-gray-300">Fresh Ocean Delights</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex justify-between items-start border-b border-gray-700 pb-4">
                  <div>
                    <h3 className="text-white font-semibold text-lg">Fish Curry</h3>
                    <p className="text-gray-400 text-sm">Traditional spiced fish curry</p>
                  </div>
                  <span className="text-[#00A63E] font-bold text-lg">$24</span>
                </div>

                <div className="flex justify-between items-start border-b border-gray-700 pb-4">
                  <div>
                    <h3 className="text-white font-semibold text-lg">Prawn Masala</h3>
                    <p className="text-gray-400 text-sm">Spiced prawns in rich gravy</p>
                  </div>
                  <span className="text-[#00A63E] font-bold text-lg">$26</span>
                </div>

                <div className="flex justify-between items-start border-b border-gray-700 pb-4">
                  <div>
                    <h3 className="text-white font-semibold text-lg">Fish Tikka</h3>
                    <p className="text-gray-400 text-sm">Grilled marinated fish</p>
                  </div>
                  <span className="text-[#00A63E] font-bold text-lg">$22</span>
                </div>

                <div className="flex justify-between items-start border-b border-gray-700 pb-4">
                  <div>
                    <h3 className="text-white font-semibold text-lg">Prawn Biryani</h3>
                    <p className="text-gray-400 text-sm">Aromatic rice with spiced prawns</p>
                  </div>
                  <span className="text-[#00A63E] font-bold text-lg">$24</span>
                </div>
              </div>
            </div>
          </section>

          {/* Pakistani-Chinese Section */}
          <section className="mb-12">
            <div className="bg-black/70 backdrop-blur-sm border border-[#00A63E] rounded-lg p-8">
              <div className="text-center mb-8">
                <h2 className="text-3xl font-bold text-[#00A63E] mb-2">Pakistani-Chinese</h2>
                <p className="text-gray-300">Fusion Street Food</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex justify-between items-start border-b border-gray-700 pb-4">
                  <div>
                    <h3 className="text-white font-semibold text-lg">Chicken Manchurian</h3>
                    <p className="text-gray-400 text-sm">Sweet and sour chicken balls</p>
                  </div>
                  <span className="text-[#00A63E] font-bold text-lg">$22</span>
                </div>

                <div className="flex justify-between items-start border-b border-gray-700 pb-4">
                  <div>
                    <h3 className="text-white font-semibold text-lg">Chicken Chow Mein</h3>
                    <p className="text-gray-400 text-sm">Stir-fried noodles with chicken</p>
                  </div>
                  <span className="text-[#00A63E] font-bold text-lg">$20</span>
                </div>

                <div className="flex justify-between items-start border-b border-gray-700 pb-4">
                  <div>
                    <h3 className="text-white font-semibold text-lg">Chicken Fried Rice</h3>
                    <p className="text-gray-400 text-sm">Wok-fried rice with chicken and vegetables</p>
                  </div>
                  <span className="text-[#00A63E] font-bold text-lg">$18</span>
                </div>

                <div className="flex justify-between items-start border-b border-gray-700 pb-4">
                  <div>
                    <h3 className="text-white font-semibold text-lg">Sweet & Sour Chicken</h3>
                    <p className="text-gray-400 text-sm">Crispy chicken in tangy sauce</p>
                  </div>
                  <span className="text-[#00A63E] font-bold text-lg">$22</span>
                </div>
              </div>
            </div>
          </section>

          {/* Ready to Order Section */}
          <section className="mb-12">
            <div className="bg-black/70 backdrop-blur-sm border border-[#00A63E] rounded-lg p-8 text-center">
              <h2 className="text-3xl font-bold text-[#00A63E] mb-4">Ready to Order?</h2>
              <p className="text-gray-300 text-lg mb-8">
                Call us or visit our restaurant to experience the authentic taste of Pakistan
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
                <Button className="bg-[#00A63E] hover:bg-[#008A35] px-8 py-3 text-lg">
                  Call to Order: +61 412 655 561
                </Button>
                <Button
                  variant="outline"
                  className="border-[#00A63E] text-[#00A63E] hover:bg-[#00A63E] hover:text-white bg-transparent px-8 py-3 text-lg"
                >
                  Book a Table
                </Button>
              </div>
            </div>
          </section>
        </div>
      </main>

      {/* Footer Section */}
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
