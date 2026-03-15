import Header from '@/components/header'
import Hero from '@/components/hero'
import Products from '@/components/products'
import Quality from '@/components/quality'
import Stats from '@/components/stats'
import Footer from '@/components/footer'
import WhatsAppButton from '@/components/whatsapp-button'

export default function Home() {
  return (
    <main className="w-full">
      <Header />
      <Hero />
      <Products />
      <Quality />
      <Stats />
      <Footer />
      <WhatsAppButton />
    </main>
  )
}
