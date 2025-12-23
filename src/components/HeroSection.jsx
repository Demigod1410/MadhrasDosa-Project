'use client'

import { motion } from 'framer-motion'

const headlineVariants = {
  hidden: { 
    opacity: 0, 
    y: 50,
    scale: 0.95
  },
  visible: { 
    opacity: 1, 
    y: 0,
    scale: 1,
    transition: {
      duration: 0.8,
      ease: [0.25, 0.46, 0.45, 0.94]
    }
  }
}

const subtextVariants = {
  hidden: { 
    opacity: 0, 
    y: 30
  },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      delay: 0.3,
      ease: "easeOut"
    }
  }
}

const buttonContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      delayChildren: 0.6,
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
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3
    }
  },
  tap: {
    scale: 0.95
  }
}

export default function HeroSection() {
  return (
    <section 
      className="relative min-h-screen flex items-center justify-center px-4 overflow-hidden pt-20"
    >
      {/* Background Image */}
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/dosa.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat'
        }}
      />
      
      {/* Dark Overlay for text readability - Darker on mobile */}
      <div 
        className="absolute inset-0 z-0 md:opacity-100 opacity-100"
        style={{
          background: 'linear-gradient(135deg, rgba(0, 0, 0, 0.75) 0%, rgba(0, 0, 0, 0.7) 50%, rgba(0, 0, 0, 0.8) 100%)'
        }}
      />
      
      {/* Additional mobile overlay */}
      <div 
        className="absolute inset-0 z-0 md:hidden"
        style={{
          background: 'rgba(0, 0, 0, 0.2)'
        }}
      />
      
      <div className="max-w-7xl mx-auto text-center z-10 relative pt-12 md:pt-0">
        <motion.h1 
          variants={headlineVariants}
          initial="hidden"
          animate="visible"
          style={{
            fontFamily: 'var(--font-baloo)',
            fontSize: 'clamp(3rem, 8vw, 6rem)',
            lineHeight: '1.1',
            letterSpacing: '-0.02em'
          }}
          className="font-black mb-6"
        >
          <span style={{ color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            South India's Heartbeat,
          </span>
          <br />
          <span style={{ color: 'white', textShadow: '2px 2px 4px rgba(0, 0, 0, 0.5)' }}>
            Served Fresh in Glasgow
          </span>
        </motion.h1>
        
        <motion.p
          variants={subtextVariants}
          initial="hidden"
          animate="visible"
          style={{
            fontFamily: 'var(--font-body)',
            fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
            lineHeight: '1.75',
            color: 'white',
            textShadow: '1px 1px 3px rgba(0, 0, 0, 0.7)'
          }}
          className="max-w-2xl mx-auto mb-8 px-4"
        >
          Fresh, bold, and unapologetically South Indian. Our food brings the roots, warmth, and comfort of India straight to your table.
        </motion.p>
        
        <motion.div
          variants={buttonContainerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <a href="https://www.order.store/store/madhras-dosa/25wGc-j_VOeZBQ3r_KRs6g" target="_blank" rel="noopener noreferrer">
            <motion.button
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
              style={{
                fontFamily: 'var(--font-heading)',
                backgroundColor: '#febd01',
                color: '#1A1A1A'
              }}
              className="w-full sm:w-auto px-8 py-4 text-lg font-semibold rounded-full shadow-lg hover:shadow-xl transition-shadow focus:ring-2 focus:ring-offset-2"
              aria-label="Order food online"
            >
              Order Online
            </motion.button>
          </a>
          
          <motion.button
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
            style={{
              fontFamily: 'var(--font-heading)',
              borderColor: '#febd01',
              color: '#febd01',
              borderWidth: '2px',
              backgroundColor: 'transparent'
            }}
            className="w-full sm:w-auto px-8 py-4 text-lg font-semibold rounded-full transition-all duration-300 hover:bg-[#febd01] hover:text-[#1A1A1A] focus:ring-2 focus:ring-offset-2"
            aria-label="Book catering services"
          >
            Book Catering
          </motion.button>
        </motion.div>

        {/* Stats Boxes */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-16 md:mt-20 pb-12 md:pb-0"
        >
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 max-w-5xl mx-auto">
            {[
              { number: "4.6★", label: "Rating", sublabel: "1000+ Reviews" },
              { number: "6.5K+", label: "Followers", sublabel: "Social Media" },
              { number: "40+", label: "Dosa Combos", sublabel: "Menu Items" },
              { number: "50K+", label: "Happy Guests", sublabel: "Served" }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 1 + (index * 0.1) }}
                className="backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-4 md:p-6 hover:bg-[#febd01]/20 hover:border-[#febd01]/40 transition-all duration-300 group"
                style={{
                  boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)'
                }}
              >
                <div 
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: 'clamp(1.75rem, 3vw, 2.5rem)',
                    color: 'white',
                    textShadow: '0 2px 8px rgba(0, 0, 0, 0.3)'
                  }}
                  className="font-bold mb-1 group-hover:scale-110 transition-transform duration-300"
                >
                  {stat.number}
                </div>
                <div 
                  style={{
                    fontFamily: 'var(--font-heading)',
                    fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                    color: 'white',
                    textShadow: '0 1px 4px rgba(0, 0, 0, 0.4)'
                  }}
                  className="font-semibold mb-0.5"
                >
                  {stat.label}
                </div>
                <div 
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'clamp(0.75rem, 1.2vw, 0.875rem)',
                    color: 'rgba(255, 255, 255, 0.85)',
                    textShadow: '0 1px 3px rgba(0, 0, 0, 0.5)'
                  }}
                >
                  {stat.sublabel}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
