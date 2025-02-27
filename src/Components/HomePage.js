import { Link } from "react-router-dom"
import { PhoneCall, Mail, MapPin, ArrowRight } from "lucide-react"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Welcome Section */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-red-600 to-red-700 text-white">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="flex flex-col items-center text-center space-y-4">
            <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">Welcome to the Blood Donation Platform</h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Join us in our mission to save lives through blood donation. Every donation counts!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mt-6">
              <button className="px-4 py-2 rounded-md bg-white text-red-600 hover:bg-gray-100 font-medium">
                Become a Donor
              </button>
              <button className="px-4 py-2 rounded-md border border-white text-white hover:bg-red-800 font-medium">
                Find Blood
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Feature Cards */}
      <section className="py-12 container px-4 md:px-6 mx-auto">
        <div className="grid md:grid-cols-2 gap-6">
          <FeatureCard
            title="Looking for Blood?"
            description="Search for blood donors in your area and get help quickly when you need it most."
            link="/search-blood"
          />
          <FeatureCard
            title="Want to Donate Blood?"
            description="Register as a donor and help save lives. Your contribution can make a significant difference."
            link="/donate-blood"
          />
        </div>
      </section>

      {/* Why Donate Blood? */}
      <section className="py-12 bg-white">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Why Donate Blood?</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-2">Save Lives</h3>
              <p className="text-gray-700">
                A single donation can save up to three lives. Your contribution directly helps patients in emergency
                situations.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-2">Health Benefits</h3>
              <p className="text-gray-700">
                Regular blood donation reduces the risk of heart disease and cancer. It also helps in maintaining good
                health.
              </p>
            </div>
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-2">Community Impact</h3>
              <p className="text-gray-700">
                By donating blood, you're strengthening your community and ensuring that blood is available when needed.
              </p>
            </div>
          </div>
          <div className="text-center mt-8">
            <button className="px-4 py-2 rounded-md bg-red-600 hover:bg-red-700 text-white font-medium flex items-center justify-center mx-auto">
              Learn More About Benefits
              <ArrowRight className="ml-2 h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

      {/* Blood Donation Photo Gallery */}
      <section className="py-12 bg-gray-50">
        <div className="container px-4 md:px-6 mx-auto">
          <h2 className="text-3xl font-bold text-center mb-8">Blood Donation Photo Gallery</h2>
          <p className="text-center text-gray-600 mb-8 max-w-2xl mx-auto">
            Take a look at our past blood donation events and the amazing donors who have contributed to saving lives.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <GalleryImage src="https://via.placeholder.com/400x300" alt="Blood donation event 1" />
            <GalleryImage src="https://via.placeholder.com/400x300" alt="Blood donation event 2" />
            <GalleryImage src="https://via.placeholder.com/400x300" alt="Blood donation event 3" />
            <GalleryImage src="https://via.placeholder.com/400x300" alt="Blood donation event 4" />
            <GalleryImage src="https://via.placeholder.com/400x300" alt="Blood donation event 5" />
            <GalleryImage src="https://via.placeholder.com/400x300" alt="Blood donation event 6" />
            <GalleryImage src="https://via.placeholder.com/400x300" alt="Blood donation event 7" />
            <GalleryImage src="https://via.placeholder.com/400x300" alt="Blood donation event 8" />
          </div>
          <div className="text-center mt-8">
            <button className="px-4 py-2 rounded-md border border-red-600 text-red-600 hover:bg-red-50 font-medium">
              View All Photos
            </button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container px-4 md:px-6 mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Blood Donation Platform</h3>
              <p className="text-gray-300">
                Connecting donors with those in need since 2020. Our mission is to ensure that blood is available to
                everyone who needs it.
              </p>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li>
                  <Link to="/" className="text-gray-300 hover:text-white">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about" className="text-gray-300 hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/donate" className="text-gray-300 hover:text-white">
                    Donate Blood
                  </Link>
                </li>
                <li>
                  <Link to="/find" className="text-gray-300 hover:text-white">
                    Find Blood
                  </Link>
                </li>
                <li>
                  <Link to="/contact" className="text-gray-300 hover:text-white">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-bold mb-4">Contact Information</h3>
              <address className="not-italic text-gray-300 space-y-2">
                <div className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2" />
                  <span>123 Blood Donation Street, City, Country</span>
                </div>
                <div className="flex items-center">
                  <PhoneCall className="h-5 w-5 mr-2" />
                  <span>+1 (123) 456-7890</span>
                </div>
                <div className="flex items-center">
                  <Mail className="h-5 w-5 mr-2" />
                  <span>contact@blooddonation.org</span>
                </div>
              </address>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>© {new Date().getFullYear()} Blood Donation Platform. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function FeatureCard({ title, description, link }) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden h-full flex flex-col">
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{title}</h3>
        <p className="text-gray-700 mb-4">{description}</p>
      </div>
      <div className="mt-auto p-6 pt-0">
        <Link to={link} className="block w-full">
          <button className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-md font-medium">
            Learn More
          </button>
        </Link>
      </div>
    </div>
  )
}

function GalleryImage({ src, alt }) {
  return (
    <div className="relative aspect-video overflow-hidden rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <img
        src={src || "/placeholder.svg"}
        alt={alt}
        className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
      />
    </div>
  )
}

