import { Shield, Zap, Award, Leaf } from 'lucide-react'

export default function Quality() {
  const features = [
    {
      icon: Shield,
      title: '10-Step Purification',
      description: 'Advanced filtration process ensuring safe and pure drinking water',
    },
    {
      icon: Award,
      title: '90 Quality Tests',
      description: 'Every batch undergoes rigorous testing for safety and consistency',
    },
    {
      icon: Zap,
      title: 'Mineral Balanced',
      description: 'Essential minerals preserved for your optimal health and taste',
    },
    {
      icon: Leaf,
      title: 'Eco-Friendly',
      description: 'Sustainable practices in production and recyclable packaging',
    },
  ]

  return (
    <section id="quality" className="py-24 bg-white dark:bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white text-balance mb-4">
            Quality You Can Trust
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Pavit is defined by its promise of purity, safety, and consistency. We go beyond industry standards to deliver the best.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div key={index} className="bg-gradient-to-br from-white to-gray-50 dark:from-slate-800 dark:to-slate-700 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 border border-gray-200 dark:border-slate-600 group hover:-translate-y-1">
                <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 dark:from-primary/30 dark:to-accent/30 rounded-full mb-6 group-hover:scale-110 transition">
                  <Icon className="w-8 h-8 text-primary dark:text-accent" />
                </div>
                <h3 className="font-bold text-lg text-gray-900 dark:text-white mb-2">{feature.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed">{feature.description}</p>
              </div>
            )
          })}
        </div>

        {/* Trust Section */}
        <div className="bg-gradient-to-r from-primary/5 via-accent/5 to-primary/5 dark:from-primary/10 dark:via-accent/10 dark:to-primary/10 rounded-3xl p-12 md:p-16 text-center border border-primary/20 dark:border-primary/30">
          <h3 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Why Choose Pavit?
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-lg mb-12 max-w-3xl mx-auto leading-relaxed">
            Pavit is synonymous with purity and reliability. Our commitment to excellence and customer satisfaction makes us the trusted choice for pure drinking water across India.
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 bg-white dark:bg-slate-800 rounded-xl">
              <p className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">2+</p>
              <p className="text-gray-700 dark:text-gray-300 font-semibold">Years of Excellence</p>
            </div>
            <div className="p-6 bg-white dark:bg-slate-800 rounded-xl">
              <p className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">100%</p>
              <p className="text-gray-700 dark:text-gray-300 font-semibold">Happy Customers</p>
            </div>
            <div className="p-6 bg-white dark:bg-slate-800 rounded-xl">
              <p className="text-5xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">100%</p>
              <p className="text-gray-700 dark:text-gray-300 font-semibold">Pure & Safe</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
