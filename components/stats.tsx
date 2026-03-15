import { Clock, Users, TrendingUp, MapPin, Truck, Package } from 'lucide-react'

export default function Stats() {
  const mainStats = [
    {
      icon: Clock,
      number: '2+',
      label: 'Years of Excellence',
      color: 'from-primary to-blue-600',
    },
    {
      icon: Users,
      number: '100%',
      label: 'Happy Customers',
      color: 'from-accent to-cyan-600',
    },
    {
      icon: Package,
      number: '100',
      label: 'Distribution Centers',
      color: 'from-primary to-accent',
    },
  ]

  const secondaryStats = [
    { number: '20', label: 'Distribution Trucks' },
    { number: '10K+', label: 'Bottles Delivered' },
  ]

  const highlights = [
    { icon: MapPin, text: '100 Strategic Distribution Centers' },
    { icon: Truck, text: '20 Distribution Trucks' },
    { icon: Package, text: '10K+ Bottles Delivered' },
  ]

  return (
    <section id="stats" className="py-24 bg-gradient-to-b from-white to-gray-50 dark:from-slate-950 dark:to-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white text-balance mb-4">
            Our Growing Presence
          </h2>
          <p className="text-gray-600 dark:text-gray-400 text-lg max-w-2xl mx-auto">
            Trusted by thousands across the nation, committed to bringing pure water to every corner
          </p>
        </div>

        {/* Main Stats Grid */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {mainStats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="bg-white dark:bg-slate-800 rounded-2xl p-8 text-center hover:shadow-xl transition-all duration-300 border border-gray-100 dark:border-slate-700 group"
              >
                <div className={`inline-flex items-center justify-center w-20 h-20 bg-gradient-to-br ${stat.color} rounded-full mb-6 shadow-lg group-hover:scale-110 transition`}>
                  <Icon className="w-10 h-10 text-white" />
                </div>
                <p className="text-5xl md:text-6xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent mb-2">
                  {stat.number}
                </p>
                <p className="text-gray-700 dark:text-gray-300 font-semibold text-lg">{stat.label}</p>
              </div>
            )
          })}
        </div>

        {/* Secondary Stats */}
        <div className="grid md:grid-cols-2 gap-6 mb-16">
          {secondaryStats.map((stat, index) => (
            <div
              key={index}
              className="bg-gradient-to-br from-primary/10 to-accent/10 dark:from-primary/20 dark:to-accent/20 rounded-xl p-6 border border-primary/20 dark:border-primary/30"
            >
              <p className="text-3xl font-bold text-primary dark:text-accent mb-1">{stat.number}</p>
              <p className="text-gray-700 dark:text-gray-300 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Highlights Section */}
        <div className="bg-white dark:bg-slate-800 rounded-2xl p-12 mb-16 border border-gray-200 dark:border-slate-700">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-8 text-center">Our Network Strength</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {highlights.map((item, index) => {
              const Icon = item.icon
              return (
                <div key={index} className="flex flex-col items-center text-center">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 rounded-full flex items-center justify-center mb-4">
                    <Icon className="w-8 h-8 text-primary dark:text-accent" />
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 font-semibold text-lg">{item.text}</p>
                </div>
              )
            })}
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-gradient-to-r from-primary via-accent to-primary text-white rounded-3xl p-12 text-center shadow-2xl">
          <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready for Pure Water Delivery?</h3>
          <p className="text-lg mb-8 opacity-95 max-w-2xl mx-auto">
            Join thousands of happy customers and experience the purity and freshness in every sip. Fast delivery, guaranteed quality, and exceptional service.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <button className="px-8 py-3.5 bg-white text-primary rounded-full font-semibold hover:shadow-xl transition transform hover:scale-105 w-full sm:w-auto">
              Order Now
            </button>
            <a href="tel:9429922024" className="px-8 py-3.5 bg-white/20 text-white rounded-full font-semibold hover:bg-white/30 transition border border-white/30 w-full sm:w-auto text-center">
              Call Us: 9429922024
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
