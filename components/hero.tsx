import Image from 'next/image'

export default function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-white via-blue-50 to-white dark:from-slate-950 dark:via-slate-900 dark:to-slate-950 pt-20 pb-32 overflow-hidden">

      {/* Animated background blobs */}
      <div className="absolute top-10 right-10 w-80 h-80 bg-primary/20 dark:bg-primary/10 rounded-full blur-3xl -z-10 hero-rotate" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent/20 dark:bg-accent/10 rounded-full blur-3xl -z-10" style={{ animation: 'rotateSlow 24s linear infinite reverse' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-300/10 dark:bg-blue-500/5 rounded-full blur-3xl -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          {/* Left Content */}
          <div className="space-y-8">
            <div className="space-y-4">
              <div className="hero-fade-right inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-primary/10 dark:bg-primary/20 text-primary dark:text-accent text-sm font-medium border border-primary/20">
                <span className="w-2 h-2 rounded-full bg-primary dark:bg-accent animate-pulse" />
                100% Pure &amp; Safe Drinking Water
              </div>

              <h1 className="hero-fade-up text-5xl md:text-6xl font-bold text-gray-900 dark:text-white leading-tight">
                Pure Water,<br />
                <span className="hero-shimmer-text">Trusted Choice</span>
              </h1>

              <p className="hero-fade-up-2 text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                Every drop of Pavit is crafted with care, purity, and your health in mind. Trusted by thousands, delivering excellence in every bottle.
              </p>
            </div>

            {/* Stats row */}
            <div className="hero-fade-up-2 flex gap-8">
              {[
                { value: '10K+', label: 'Happy Customers' },
                { value: '99.9%', label: 'Purity Rate' },
                { value: '24/7', label: 'Delivery' },
              ].map((s) => (
                <div key={s.label} className="text-center">
                  <div className="text-2xl font-bold text-primary dark:text-accent">{s.value}</div>
                  <div className="text-xs text-gray-500 dark:text-gray-400">{s.label}</div>
                </div>
              ))}
            </div>

            <div className="hero-fade-up-3 flex flex-col sm:flex-row gap-4">
              <button className="px-8 py-3.5 bg-gradient-to-r from-primary to-accent text-white rounded-full font-semibold shadow-lg hover:shadow-primary/40 transition-all duration-300 hover:scale-105 active:scale-95">
                Order Now
              </button>
              <button className="px-8 py-3.5 border-2 border-primary dark:border-accent text-primary dark:text-accent rounded-full font-semibold hover:bg-primary/10 dark:hover:bg-accent/10 transition-all duration-300 hover:scale-105 active:scale-95">
                Learn More
              </button>
            </div>
          </div>

          {/* Right Visual */}
          <div className="relative h-[420px] flex items-center justify-center">

            {/* Outer pulse ring */}
            <div className="absolute w-80 h-80 rounded-full border-2 border-primary/20 dark:border-accent/20 hero-pulse-ring" />
            {/* Inner decorative ring */}
            <div className="absolute w-64 h-64 rounded-full border border-dashed border-primary/30 dark:border-accent/30 hero-rotate" />

            {/* Glow behind image */}
            <div className="absolute w-72 h-72 rounded-full bg-gradient-to-br from-primary/30 to-accent/30 blur-2xl" />

            {/* Floating image — mix-blend removes white bg in dark, multiply in light */}
            <div className="hero-float relative w-80 h-80 z-10">
              <Image
                src="/icon_01.jpg"
                alt="Pavit Water Bottle"
                fill
                className="object-contain mix-blend-multiply dark:mix-blend-screen drop-shadow-2xl"
                priority
              />
            </div>

            {/* Floating badge — top right */}
            <div className="absolute top-6 right-4 z-20 hero-fade-up bg-white dark:bg-slate-800 rounded-2xl shadow-xl px-4 py-2 flex items-center gap-2 border border-primary/10"
              style={{ animation: 'fadeSlideUp 0.8s ease 0.6s both' }}>
              <span className="text-2xl">💧</span>
              <div>
                <div className="text-xs font-bold text-gray-800 dark:text-white">BIS Certified</div>
                <div className="text-[10px] text-gray-500">Quality Assured</div>
              </div>
            </div>

            {/* Floating badge — bottom left */}
            <div className="absolute bottom-8 left-4 z-20 bg-white dark:bg-slate-800 rounded-2xl shadow-xl px-4 py-2 flex items-center gap-2 border border-accent/10"
              style={{ animation: 'fadeSlideUp 0.8s ease 0.8s both' }}>
              <span className="text-2xl">🚚</span>
              <div>
                <div className="text-xs font-bold text-gray-800 dark:text-white">Free Delivery</div>
                <div className="text-[10px] text-gray-500">On first order</div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
