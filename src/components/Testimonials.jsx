'use client'

import { motion } from 'framer-motion'
import { useState } from 'react'

const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: "easeOut"
    }
  }
}

const headingVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
}

const testimonialsContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
}

const testimonialCardVariants = {
  hidden: { 
    opacity: 0, 
    y: 40,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

const testimonials = [
  {
    id: 1,
    name: "Harsh Vardhan",
    review: "Really loved the food and vibe! Good made us feel closer to home and enjoy the subtle happiness. Highly recommend if you're down to get a taste of authentic south Indian cuisine.",
    rating: 5,
    platform: "Google Reviews"
  },
  {
    id: 2,
    name: "S Nuskys",
    review: "We had the ghee dosas and the chicken salna. It was delicious and authentic (coming from 3 South Indians)! The lamb biryani was amazing too. We will definitely be coming again :)",
    rating: 5,
    platform: "Google Reviews"
  },
  {
    id: 3,
    name: "Trofim Agarkov",
    review: "The best Indian restaurant in Glasgow, their masala dosa is a must try (with ghee or paneer, so good). The food is quite affordable. And lassi is quite nice but a bit pricey unless you get a jug, which I totally recommend if you're at least 3-4 people.",
    rating: 5,
    platform: "Google Reviews"
  },
  {
    id: 4,
    name: "Chris Sathesh",
    review: "Excellent food and service! The mix platter was amazing and affordable for single person. Quality and quantity of food were outstanding! Must try the kothu paratha. Madras dosa delivers perfect mixture of South Indian dishes",
    rating: 5,
    platform: "Google Reviews"
  },
  {
    id: 5,
    name: "Hilary Hao",
    review: "Tasty curries and generous portions! Went here for lunch and enjoyed the vibe and the meal. Would recommend!",
    rating: 5,
    platform: "Google Reviews"
  }
]

export default function Testimonials() {
  return (
    <section 
      className="relative py-20 md:py-28 px-4 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #FFFFFF 0%, #FFFCF5 50%, #FFFFFF 100%)'
      }}
    >
      {/* Decorative Elements */}
      <div 
        className="absolute top-20 left-0 w-96 h-96 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: '#febd01' }}
      />
      <div 
        className="absolute bottom-20 right-0 w-80 h-80 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: '#febd01' }}
      />

      {/* Accent Line */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-0 left-0 right-0 h-1 origin-left"
        style={{ background: 'linear-gradient(90deg, transparent 0%, #febd01 50%, transparent 100%)' }}
      />

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Section Header */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="text-center mb-16 md:mb-20"
        >
          {/* Decorative Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-6"
          >
            <span 
              className="px-6 py-2 rounded-full text-sm font-semibold tracking-wider uppercase"
              style={{
                fontFamily: 'var(--font-body)',
                backgroundColor: '#febd01',
                color: '#1A1A1A'
              }}
            >
              Testimonials
            </span>
          </motion.div>

          <motion.h2
            variants={headingVariants}
            style={{
              fontFamily: 'var(--font-baloo)',
              fontSize: 'clamp(2.5rem, 6vw, 4rem)',
              lineHeight: '1.2',
              color: '#1A1A1A'
            }}
            className="font-bold mb-6"
          >
            What Our Guests Say
          </motion.h2>

          <motion.p
            variants={headingVariants}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
              lineHeight: '1.75',
              color: '#4A4A4A'
            }}
            className="max-w-3xl mx-auto mb-4"
          >
            Don't just take our word for it - hear from our happy guests who've experienced authentic South Indian flavors.
          </motion.p>

          {/* Rating Summary */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center gap-2 mt-6"
          >
            <span 
              style={{
                fontFamily: 'var(--font-baloo)',
                fontSize: 'clamp(2rem, 3vw, 2.5rem)',
                color: '#febd01',
                fontWeight: '700'
              }}
            >
              4.6
            </span>
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-2xl" style={{ color: '#febd01' }}>★</span>
              ))}
            </div>
            <span 
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                color: '#6B7280'
              }}
            >
              (1000+ Reviews)
            </span>
          </motion.div>
        </motion.div>

        {/* Testimonials Grid */}
        <motion.div
          variants={testimonialsContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12"
        >
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.id}
              variants={testimonialCardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-white rounded-3xl p-8 shadow-md hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Quote Icon */}
              <div 
                className="absolute top-6 right-6 text-6xl opacity-10 pointer-events-none"
                style={{ color: '#febd01' }}
              >
                "
              </div>

              {/* Rating Stars */}
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <motion.span 
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: 0.5 + (i * 0.1) }}
                    className="text-xl" 
                    style={{ color: '#febd01' }}
                  >
                    ★
                  </motion.span>
                ))}
              </div>

              {/* Review Text */}
              <p 
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(0.9375rem, 1.5vw, 1.0625rem)',
                  color: '#4A4A4A',
                  lineHeight: '1.7'
                }}
                className="mb-6 relative z-10"
              >
                {testimonial.review}
              </p>

              {/* Reviewer Info */}
              <div className="flex items-center gap-4 pt-4 border-t border-gray-100">
                {/* Avatar Circle */}
                <div 
                  className="flex-shrink-0 w-12 h-12 rounded-full flex items-center justify-center text-lg font-bold"
                  style={{
                    backgroundColor: '#febd01',
                    color: '#1A1A1A',
                    fontFamily: 'var(--font-baloo)'
                  }}
                >
                  {testimonial.name.charAt(0)}
                </div>

                <div className="flex-1 min-w-0">
                  <h4 
                    style={{
                      fontFamily: 'var(--font-baloo)',
                      fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
                      color: '#1A1A1A',
                      fontWeight: '700'
                    }}
                    className="truncate"
                  >
                    {testimonial.name}
                  </h4>
                  <p 
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 'clamp(0.8125rem, 1.2vw, 0.875rem)',
                      color: '#9CA3AF'
                    }}
                  >
                    {testimonial.platform}
                  </p>
                </div>
              </div>

              {/* Decorative Accent */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.6 + (index * 0.1) }}
                className="mt-4 h-1 rounded-full origin-left"
                style={{ 
                  backgroundColor: '#febd01',
                  width: '60px'
                }}
              />
            </motion.div>
          ))}

          {/* Add More Reviews Card */}
          <motion.div
            variants={testimonialCardVariants}
            whileHover={{ y: -8, transition: { duration: 0.3 } }}
            className="group relative rounded-3xl p-8 shadow-md hover:shadow-2xl transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer"
            style={{
              background: 'linear-gradient(135deg, #febd01 0%, #ffd54f 100%)'
            }}
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
              className="text-6xl mb-4"
            >
              ⭐
            </motion.div>

            <h4 
              style={{
                fontFamily: 'var(--font-baloo)',
                fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
                color: '#1A1A1A',
                fontWeight: '700'
              }}
              className="mb-2"
            >
              Share Your Experience
            </h4>

            <p 
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.9375rem, 1.5vw, 1rem)',
                color: '#2C1810',
                lineHeight: '1.6'
              }}
              className="mb-4"
            >
              Loved our food? Leave us a review on Google!
            </p>

            <motion.span
              whileHover={{ scale: 1.1 }}
              className="inline-flex items-center gap-2 font-semibold"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(0.875rem, 1.3vw, 1rem)',
                color: '#1A1A1A'
              }}
            >
              Write a Review
              <span className="text-xl">→</span>
            </motion.span>
          </motion.div>
        </motion.div>

      </div>

      {/* Bottom Decorative Wave */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-2 opacity-30"
        style={{
          background: 'repeating-linear-gradient(90deg, #febd01 0px, #febd01 20px, transparent 20px, transparent 40px)'
        }}
      />
    </section>
  )
}
