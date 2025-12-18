'use client'

import { motion } from 'framer-motion'
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion'

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

const questions = [
  {
    id: 'item-1',
    title: 'Do you offer vegan or gluten-free options?',
    content:
      "Yes! Many of our dishes are naturally vegan and gluten-free. Just ask our staff, and we'll guide you through the menu.",
  },
  {
    id: 'item-2',
    title: 'Do you provide catering?',
    content:
      'Absolutely. From small gatherings to large events, our catering brings authentic South Indian flavours to your special day.',
  },
  {
    id: 'item-3',
    title: 'Where can I order online?',
    content:
      'You can order directly through our Uber Eats page.',
  },
  {
    id: 'item-4',
    title: 'What about hygiene and sustainability?',
    content:
      'We maintain the highest hygiene standards and prioritise eco-friendly packaging and local sourcing.',
  },
  {
    id: 'item-5',
    title: 'How can I contact you for collaborations or feedback?',
    content:
      'Drop us a message through our Contact Page or DM us on Instagram. We love hearing from you.',
  },
]

export default function FAQ() {
  return (
    <section 
      className="relative py-20 md:py-28 px-4 overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, #FFFCF5 0%, #FFF9EB 50%, #FFFCF5 100%)'
      }}
    >
      {/* Decorative Elements */}
      <div 
        className="absolute top-0 left-0 w-96 h-96 rounded-full opacity-15 blur-3xl pointer-events-none"
        style={{ background: '#febd01' }}
      />
      <div 
        className="absolute bottom-0 right-0 w-80 h-80 rounded-full opacity-20 blur-3xl pointer-events-none"
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

      <div className="mx-auto w-full max-w-4xl relative z-10">
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
              FAQs
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
            Frequently Asked Questions
          </motion.h2>

          <motion.p
            variants={headingVariants}
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
              lineHeight: '1.75',
              color: '#4A4A4A'
            }}
            className="max-w-3xl mx-auto"
          >
            Got questions about vegan options or catering? We've got answers.
          </motion.p>
        </motion.div>

        {/* Accordion */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <Accordion
            type="single"
            collapsible
            className="w-full space-y-4"
            defaultValue="item-1"
          >
            {questions.map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + (index * 0.1) }}
              >
                <AccordionItem
                  value={item.id}
                  className="bg-white rounded-2xl border-none shadow-md hover:shadow-lg transition-shadow duration-300 overflow-hidden"
                >
                  <AccordionTrigger 
                    className="px-6 py-5 text-left no-underline hover:no-underline group"
                    style={{
                      fontFamily: 'var(--font-baloo)',
                      fontSize: 'clamp(1.125rem, 2vw, 1.25rem)',
                      color: '#1A1A1A',
                      fontWeight: '700'
                    }}
                  >
                    <span className="group-hover:text-[#febd01] transition-colors duration-300">
                      {item.title}
                    </span>
                  </AccordionTrigger>
                  <AccordionContent 
                    className="px-6 pb-5"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: 'clamp(1rem, 1.5vw, 1.0625rem)',
                      color: '#4A4A4A',
                      lineHeight: '1.7'
                    }}
                  >
                    {item.content}
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-12"
        >
          <p 
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: 'clamp(1rem, 1.5vw, 1.125rem)',
              color: '#4A4A4A'
            }}
          >
            Can't find what you're looking for?{' '}
            <a 
              href="#contact" 
              className="font-semibold transition-colors duration-300"
              style={{ color: '#febd01' }}
            >
              Contact our team →
            </a>
          </p>
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
