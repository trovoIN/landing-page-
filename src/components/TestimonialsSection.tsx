import { useRef } from 'react'

const StarRow = () => (
  <div className="flex space-x-1 mb-4" aria-hidden="true">
    {Array.from({ length: 5 }).map((_, i) => (
      <svg key={i} className="w-4 h-4 text-yellow-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.802 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.802-2.034a1 1 0 00-1.175 0L6.706 16.28c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L3.07 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
      </svg>
    ))}
  </div>
)

const TestimonialsSection = () => {
  const ref = useRef(null)

  const testimonials = [
    {
      name: "Priya Sharma",
      role: "Software Engineer, Bangalore",
      text: "I had 45,000 unused credit card points worth ₹4,500 just sitting there! Can't wait for Trovo to help me convert them to actual cash.",
      highlight: "₹4,500 in unused points"
    },
    {
      name: "Rajesh Kumar", 
      role: "Marketing Manager, Mumbai",
      text: "UPI payments are so convenient but I get zero rewards. 1% guaranteed cashback on every transaction? This will save me thousands!",
      highlight: "Thousands in UPI rewards"
    },
    {
      name: "Anita Gupta",
      role: "Freelancer, Delhi",
      text: "My friends always ask to use my credit card for better rewards. Safe card sharing with auto-debit sounds perfect for our group!",
      highlight: "Safe card sharing solution"
    },
    {
      name: "Vikram Singh",
      role: "Startup Founder, Pune",
      text: "Entering UPI PIN 20+ times daily is annoying. Tap-to-pay up to ₹2000 without PIN will save me so much time!",
      highlight: "PIN-free payments"
    }
  ]

  return (
    <section className="relative py-20 overflow-hidden" ref={ref}>
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-white via-trovo-green-50/50 to-white" />
      <div className="absolute top-20 left-10 w-32 h-32 bg-trovo-green/5 rounded-full blur-2xl" />
      <div className="absolute bottom-20 right-10 w-40 h-40 bg-trovo-green/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gradient">People Get It</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Indians everywhere are tired of losing money. Here's what they told us about their current financial struggles
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="group relative bg-white/80 backdrop-blur-sm p-8 rounded-2xl border border-trovo-green/20"
            >
              {/* Rating */}
              <StarRow />

              {/* Text */}
              <p className="text-gray-700 mb-6 leading-relaxed text-sm">"{testimonial.text}"</p>

              {/* Highlight */}
              <div className="inline-block bg-gradient-to-r from-trovo-green/20 to-trovo-green/30 text-trovo-green text-xs font-semibold px-4 py-2 rounded-full mb-4">
                {testimonial.highlight}
              </div>

              {/* Author */}
              <div className="flex items-center space-x-3">
                <div className="w-12 h-12 bg-gradient-to-br from-trovo-green/20 to-trovo-green/30 rounded-full" aria-hidden="true" />
                <div>
                  <div className="font-semibold text-gray-900 text-sm">{testimonial.name}</div>
                  <div className="text-gray-500 text-xs">{testimonial.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Badges (no emojis) */}
        <div className="mt-16 text-center">
          <div className="inline-flex items-center justify-center space-x-8 text-gray-500 text-sm bg-white/60 backdrop-blur-sm px-8 py-4 rounded-full border border-trovo-green/20">
            <div className="flex items-center space-x-2">
              <span className="inline-block w-3 h-3 rounded-full bg-gray-400" aria-hidden="true" />
              <span>Bank-level Security</span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center space-x-2">
              <span className="inline-block w-3 h-3 rounded-full bg-gray-400" aria-hidden="true" />
              <span>Made for India</span>
            </div>
            <div className="w-px h-6 bg-gray-300"></div>
            <div className="flex items-center space-x-2">
              <span className="inline-block w-3 h-3 rounded-full bg-gray-400" aria-hidden="true" />
              <span>Instant Transactions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default TestimonialsSection
