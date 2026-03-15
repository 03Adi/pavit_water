'use client'

import Image from 'next/image'

export default function WhatsAppButton() {
  const message = `Hello Pavit Team 👋\nI would like to order drinking water.\nPlease share details about available water can sizes, pricing, and delivery availability in my area.\nThank you.`
  const url = `https://wa.me/917984037960?text=${encodeURIComponent(message)}`

  return (
    <a
      href={url}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-8 right-8 z-40 w-16 h-16 rounded-full shadow-lg shadow-green-500/50 hover:shadow-xl hover:shadow-green-500/70 transition-all duration-300 transform hover:scale-110 flex items-center justify-center bg-green-500 p-1"
      aria-label="Chat with us on WhatsApp"
      title="Chat with us on WhatsApp"
    >
      <Image
        src="/whatsapp_icon.png"
        alt="WhatsApp"
        width={56}
        height={56}
        className="rounded-full"
      />
      {/* Pulse animation ring */}
      <span className="absolute inset-0 rounded-full bg-green-500 opacity-40 animate-ping"></span>
    </a>
  )
}
