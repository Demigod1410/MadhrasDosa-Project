'use client'

import { motion } from 'framer-motion'

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

const buttonContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.4,
      staggerChildren: 0.2
    }
  }
}

const buttonVariants = {
  hidden: { 
    opacity: 0, 
    y: 20,
    scale: 0.9
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
}

export default function CTA() {
  return (
    <section 
      className="relative py-24 md:py-32 px-4 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #fec314 0%, #ffd54f 50%, #fec314 100%)'
      }}
    >
      {/* Decorative Elements */}
      <div 
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: '#ffd54f' }}
      />

      {/* Accent Lines */}
      <motion.div
        initial={{ scaleX: 0 }}
        whileInView={{ scaleX: 1 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="absolute top-0 left-0 right-0 h-1 origin-left"
        style={{ background: 'linear-gradient(90deg, transparent 0%, #FFFFFF 50%, transparent 100%)' }}
      />

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        {/* Main Heading */}
        <motion.div
          variants={sectionVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          {/* Decorative Top Badge */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-block mb-8"
          >
            <div className="flex items-center gap-3">
              <div className="h-px w-12 bg-white" />
              <span 
                className="text-sm font-semibold tracking-wider uppercase"
                style={{
                  fontFamily: 'var(--font-body)',
                  color: '#FFFFFF',
                  textShadow: '0 1px 2px rgba(0,0,0,0.2)'
                }}
              >
                Ready to Order?
              </span>
              <div className="h-px w-12 bg-white" />
            </div>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{
              fontFamily: 'var(--font-baloo)',
              fontSize: 'clamp(2.5rem, 7vw, 5rem)',
              lineHeight: '1.1',
              color: '#1A1A1A',
              fontWeight: '800'
            }}
            className="mb-6"
          >
            Your South Indian Feast
            <br />
            <span style={{ color: '#FFFFFF', textShadow: '0 2px 4px rgba(0,0,0,0.2)' }}>is Waiting</span>
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
              lineHeight: '1.6',
              color: '#2C1810',
              textShadow: '0 1px 2px rgba(255,255,255,0.3)'
            }}
            className="max-w-2xl mx-auto mb-12"
          >
            Experience authentic flavors that bring you closer to home. 
            Order now or book our catering for your next event.
          </motion.p>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          variants={buttonContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row gap-5 justify-center items-center"
        >
          <a href="https://www.order.store/store/madhras-dosa/25wGc-j_VOeZBQ3r_KRs6g" target="_blank" rel="noopener noreferrer">
            <motion.button
              variants={buttonVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group w-full sm:w-auto px-10 py-5 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
              style={{
                fontFamily: 'var(--font-baloo)',
                fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                fontWeight: '700',
                backgroundColor: '#FFFFFF',
                color: '#1A1A1A'
              }}
            >
              <span className="flex items-center justify-center gap-3">
                Order Online
                <motion.span
                  animate={{ x: [0, 5, 0] }}
                  transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                  className="text-2xl"
                >
                  →
                </motion.span>
              </span>
            </motion.button>
          </a>

          <a href="https://forms.gle/enNS5z1wQYpTPgap7" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-block', textDecoration: 'none', color: 'unset' }}>
            <motion.button
              variants={buttonVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="group w-full sm:w-auto px-10 py-5 rounded-full transition-all duration-300 border-2"
              style={{
                fontFamily: 'var(--font-baloo)',
                fontSize: 'clamp(1.125rem, 2vw, 1.375rem)',
                fontWeight: '700',
                borderColor: '#FFFFFF',
                color: '#FFFFFF',
                backgroundColor: 'transparent',
                textShadow: '0 1px 2px rgba(0,0,0,0.2)'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = '#FFFFFF'
                e.currentTarget.style.color = '#1A1A1A'
                e.currentTarget.style.textShadow = 'none'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = 'transparent'
                e.currentTarget.style.color = '#FFFFFF'
                e.currentTarget.style.textShadow = '0 1px 2px rgba(0,0,0,0.2)'
              }}
            >
              Book Catering
            </motion.button>
          </a>
        </motion.div>

        {/* Trust Indicators */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="mt-16 flex flex-wrap items-center justify-center gap-6 md:gap-8"
        >
          {[
            { text: "4.6 Rating" },
            { text: "Fast Delivery" },
            { text: "Fresh Ingredients" },
            { text: "50K+ Happy Guests" }
          ].map((item, index, array) => (
            <motion.div
              key={`trust-${index}`}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.7 + (index * 0.1) }}
              className="flex items-center gap-2"
            >
              <span 
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: 'clamp(1rem, 1.8vw, 1.125rem)',
                  color: '#1A1A1A',
                  fontWeight: '600',
                  textShadow: '0 1px 2px rgba(255,255,255,0.3)'
                }}
              >
                {item.text}
              </span>
              {index < array.length - 1 && (
                <span
                  style={{
                    fontSize: 'clamp(1rem, 1.8vw, 1.125rem)',
                    color: '#1A1A1A',
                    opacity: '0.5'
                  }}
                >
                  |
                </span>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Bottom Decorative Wave */}
      <div 
        className="absolute bottom-0 left-0 right-0 h-2 opacity-30"
        style={{
          background: 'repeating-linear-gradient(90deg, #FFFFFF 0px, #FFFFFF 20px, transparent 20px, transparent 40px)'
        }}
      />
    </section>
  )
}
