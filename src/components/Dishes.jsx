'use client'

import { motion } from 'framer-motion'
import Image from 'next/image'

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

const dishesContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3
    }
  }
}

const dishCardVariants = {
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

const dishes = [
  {
    id: 1,
    name: "Chicken Dum Biryani",
    description: "Aromatic basmati rice layered with tender chicken, caramelized onions, and rich spices, slow-cooked to perfection.",
    image: "/chickenbiriyani.jpg",
    badge: "Signature"
  },
  {
    id: 2,
    name: "Chettinad Curry",
    description: "A fiery South Indian curry from Chettinad, bursting with aromatic spices and tender meat.",
    image: "/CC.jpg",
    badge: "Popular"
  },
  {
    id: 3,
    name: "Masala Dosa",
    description: "Classic potato-filled crispy dosa",
    image: "/m-dosa.jpg",
    badge: "Classic"
  },
  {
    id: 4,
    name: "Idli Sambar",
    description: "Soft steamed rice cakes with lentil stew",
    image: "/idli.jpg",
    badge: "Traditional"
  },
  {
    id: 5,
    name: "Kothu Parotta",
    description: "Chopped parotta stir-fried with vegetables, eggs, and spices",
    image: "/CK.jpg",
    badge: "Chef's Pick"
  },
  {
    id: 6,
    name: "Medu Vada",
    description: "Crispy golden-brown lentil donuts with a soft, fluffy interior.",
    image: "/Medu_Vada.jpg",
    badge: "Favorite"
  }
]



export default function Dishes() {
  return (
    <section 
      className="relative py-20 md:py-28 px-4 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #FFFCF5 0%, #FFF9EB 50%, #FFFCF5 100%)'
      }}
    >
      {/* Decorative Elements */}
      <div 
        className="absolute top-0 right-0 w-96 h-96 rounded-full opacity-20 blur-3xl pointer-events-none"
        style={{ background: '#febd01' }}
      />
      <div 
        className="absolute bottom-0 left-0 w-80 h-80 rounded-full opacity-15 blur-3xl pointer-events-none"
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
              Our
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
            Signature Dishes
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
            From buttery ghee roast to spicy Chettinad curry, every plate leads to home.
          </motion.p>

          <motion.p
            variants={headingVariants}
            style={{
              fontFamily: 'var(--font-baloo)',
              fontSize: 'clamp(1rem, 1.8vw, 1.125rem)',
              color: '#febd01',
              fontWeight: '600'
            }}
          >
            One bite and you'll taste the difference.
          </motion.p>
        </motion.div>

        {/* Dishes Grid */}
        <motion.div
          variants={dishesContainerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 mb-12"
        >
          {dishes.map((dish, index) => (
            <motion.div
              key={dish.id}
              variants={dishCardVariants}
              whileHover={{ y: -8, transition: { duration: 0.3 } }}
              className="group relative bg-white rounded-3xl overflow-hidden shadow-md hover:shadow-2xl transition-shadow duration-300"
            >
              {/* Badge */}
              <div 
                className="absolute top-4 right-4 z-20 px-4 py-1.5 rounded-full text-xs font-bold tracking-wide uppercase"
                style={{
                  backgroundColor: '#febd01',
                  color: '#1A1A1A',
                  fontFamily: 'var(--font-body)'
                }}
              >
                {dish.badge}
              </div>

              {/* Image Container */}
              <div className="relative h-64 md:h-72 overflow-hidden bg-gray-100">
                <Image
                  src={dish.image}
                  alt={dish.name}
                  fill
                  className="object-cover"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />

                {/* Hover Overlay */}
                <div 
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
                  style={{
                    background: 'linear-gradient(180deg, transparent 0%, rgba(254, 189, 1, 0.3) 100%)'
                  }}
                />
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 
                  style={{
                    fontFamily: 'var(--font-baloo)',
                    fontSize: 'clamp(1.25rem, 2vw, 1.5rem)',
                    color: '#1A1A1A',
                    fontWeight: '700'
                  }}
                  className="mb-2 group-hover:text-[#febd01] transition-colors duration-300"
                >
                  {dish.name}
                </h3>
                <p 
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: 'clamp(0.875rem, 1.5vw, 1rem)',
                    color: '#6B7280',
                    lineHeight: '1.6'
                  }}
                >
                  {dish.description}
                </p>

                {/* Decorative Accent Line */}
                <motion.div
                  initial={{ scaleX: 0 }}
                  whileInView={{ scaleX: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + (index * 0.1) }}
                  className="mt-4 h-1 rounded-full origin-left"
                  style={{ 
                    backgroundColor: '#febd01',
                    width: '40px'
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center"
        >
          <a href="https://www.order.store/store/madhras-dosa/25wGc-j_VOeZBQ3r_KRs6g" target="_blank" rel="noopener noreferrer">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group inline-flex items-center gap-3 px-10 py-5 rounded-full shadow-lg hover:shadow-2xl transition-all duration-300"
              style={{
                fontFamily: 'var(--font-baloo)',
                fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
                fontWeight: '700',
                backgroundColor: '#febd01',
                color: '#1A1A1A'
              }}
            >
              Order Now
              <motion.span
                animate={{ x: [0, 5, 0] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                className="text-2xl"
              >
                →
              </motion.span>
            </motion.button>
          </a>
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
