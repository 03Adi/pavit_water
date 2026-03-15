import { Mail, Phone, MapPin, Facebook, Instagram, Twitter, Linkedin } from 'lucide-react'

export default function Footer() {
  return (
    <footer className="bg-slate-950 text-gray-100 dark:bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-4 gap-12 py-16 border-b border-slate-800">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 bg-gradient-to-br from-primary to-accent rounded-lg flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-lg">P</span>
              </div>
              <span className="text-2xl font-bold text-white">Pavit</span>
            </div>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Your trusted source for pure, safe, and healthy drinking water. Experience excellence with every sip.
            </p>
            <div className="flex gap-3">
              <a href="#" className="bg-slate-800 p-2.5 rounded-full hover:bg-primary transition-all duration-300">
                <Facebook size={18} />
              </a>
              <a href="#" className="bg-slate-800 p-2.5 rounded-full hover:bg-primary transition-all duration-300">
                <Instagram size={18} />
              </a>
              <a href="#" className="bg-slate-800 p-2.5 rounded-full hover:bg-primary transition-all duration-300">
                <Twitter size={18} />
              </a>
              <a href="#" className="bg-slate-800 p-2.5 rounded-full hover:bg-primary transition-all duration-300">
                <Linkedin size={18} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg text-white mb-6">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#products" className="text-gray-400 hover:text-primary transition">
                  Products
                </a>
              </li>
              <li>
                <a href="#quality" className="text-gray-400 hover:text-primary transition">
                  Quality Standards
                </a>
              </li>
              <li>
                <a href="#stats" className="text-gray-400 hover:text-primary transition">
                  About Us
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-400 hover:text-primary transition">
                  Contact Us
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-bold text-lg text-white mb-6">Support</h4>
            <ul className="space-y-3">
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition">
                  Delivery Info
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition">
                  Order Tracking
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="font-bold text-lg text-white mb-6">Contact Us</h4>
            <div className="space-y-4">
              <div className="flex gap-3">
                <Phone size={20} className="text-primary flex-shrink-0 mt-1" />
                <div>
                  <p className="text-gray-300 font-medium">9429922024</p>
                  <p className="text-gray-400 text-sm">7984037960</p>
                </div>
              </div>
              <div className="flex gap-3">
                <Mail size={20} className="text-primary flex-shrink-0 mt-1" />
                <p className="text-gray-300 font-medium break-all">pavitwater@gmail.com</p>
              </div>
              <div className="flex gap-3">
                <MapPin size={20} className="text-primary flex-shrink-0 mt-1" />
                <p className="text-gray-400">100 Distribution Centers across India</p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="py-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm">
            &copy; Copyright by arevionx | All Rights Reserved
          </p>
          <div className="flex gap-6 flex-wrap justify-center">
            <a href="#" className="text-gray-400 hover:text-white text-sm transition">
              Terms of Service
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white text-sm transition">
              Sitemap
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
