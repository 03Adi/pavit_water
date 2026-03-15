'use client'

import Image from 'next/image'
import { Droplet } from 'lucide-react'

const products = [
  {
    id: 1,
    size: '500ml',
    description: 'Perfectly purified drinking water for on-the-go hydration',
  },
  {
    id: 2,
    size: '1L',
    description: 'Ideal for your daily hydration needs at home or office',
  },
  {
    id: 3,
    size: '5L',
    description: 'Perfect for families, premium purity for your loved ones',
  },
  {
    id: 4,
    size: '20L',
    description: 'Bulk delivery for offices and large gatherings',
  },
]

export default function Products() {
  return (
    <section id="products" className="py-24 bg-gradient-to-b from-gray-50 to-white dark:from-slate-900 dark:to-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center gap-2 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-primary to-accent rounded-full flex items-center justify-center">
              <Droplet className="w-5 h-5 text-white" />
            </div>
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent font-semibold text-sm tracking-wider uppercase">
              Our Products
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Pavit for Every Need
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            From personal hydration to family needs, we have the perfect size for you
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="bg-white dark:bg-slate-800 rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 dark:border-slate-700 group cursor-pointer"
            >
              {/* Image container with hover swap */}
              <div className="relative h-56 mb-6 flex items-center justify-center">

                {/* Glow bg */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-blue-100 to-cyan-50 dark:from-slate-700 dark:to-slate-600 transition-all duration-500 group-hover:from-blue-200 group-hover:to-cyan-100 dark:group-hover:from-slate-600 dark:group-hover:to-slate-500" />

                {/* icon_04 — animates on hover */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="relative w-36 h-44 transition-all duration-500 ease-in-out group-hover:scale-110 group-hover:-translate-y-2 group-hover:drop-shadow-2xl">
                    <Image
                      src="/icon_04.jpg"
                      alt={`Pavit ${product.size}`}
                      fill
                      className="object-contain mix-blend-multiply dark:mix-blend-screen drop-shadow-lg"
                    />
                  </div>
                </div>



                {/* Size badge */}
                <div className="absolute top-3 left-3 z-10 bg-white dark:bg-slate-900 text-primary dark:text-accent text-xs font-bold px-3 py-1 rounded-full shadow border border-primary/20">
                  {product.size}
                </div>
              </div>

              {/* Info */}
              <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">
                Pavit Pure Water
              </h3>
              <p className="text-sm text-gray-500 dark:text-gray-400 mb-6 leading-relaxed">
                {product.description}
              </p>

              <button className="w-full py-3 bg-gradient-to-r from-primary to-accent text-white rounded-xl font-semibold hover:shadow-lg hover:shadow-primary/30 transition-all duration-300 hover:scale-105 active:scale-95 text-sm">
                Order Now
              </button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
