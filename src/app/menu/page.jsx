"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

export default function MenuPage() {
  return (
    <main className="min-h-screen bg-[#FFF8E7]">
      {/* Hero Section */}
      <section id="hero" className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/dosa.jpg"
            alt="Madhras Dosa Menu"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/70" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6"
        >
          <h1 className="font-baloo text-5xl md:text-7xl font-bold text-white mb-4">
            Our Menu
          </h1>
          <p className="font-poppins text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-8">
            Authentic South Indian flavours, crafted with care
          </p>
          
          <a href="https://www.order.store/store/madhras-dosa/25wGc-j_VOeZBQ3r_KRs6g" target="_blank" rel="noopener noreferrer">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-4 bg-[#febd01] text-[#1A1A1A] font-baloo text-lg font-bold rounded-full hover:bg-[#ffd700] transition-colors duration-300"
            >
              Order Online
            </motion.button>
          </a>
        </motion.div>
      </section>

      {/* Static Menu Section */}
      <section id="menu" className="py-20">
        <div className="w-full">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-baloo text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
              Static Menu
            </h2>
            <p className="font-poppins text-lg text-[#2D2D2D]">
              Browse our full menu below
            </p>
          </motion.div>

          {/* Menu Display Area - Placeholder for actual menu image/content */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-2xl shadow-lg overflow-hidden border-2 border-[#febd01]/20"
          >
            <div className="relative w-full transform scale-100 origin-top">
              <Image
                src="/Menu.png"
                alt="Madhras Dosa Menu"
                width={10000}
                height={13000}
                className="w-full h-auto"
              />
            </div>
            
            <div className="p-8 text-center">
              <motion.a
                href="/fullmenu"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block px-8 py-4 bg-[#febd01] text-[#1A1A1A] font-baloo text-lg font-bold rounded-full hover:bg-[#ffd700] transition-colors duration-300"
              >
                View Menu
              </motion.a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Quick Order CTA */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="font-baloo text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
              Ready to <span className="text-[#febd01]">Order?</span>
            </h2>
            
            <p className="font-poppins text-xl text-[#2D2D2D] mb-10 max-w-2xl mx-auto">
              Skip the wait and get your favourite dishes delivered straight to your door.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://www.order.store/store/madhras-dosa/25wGc-j_VOeZBQ3r_KRs6g" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-[#febd01] text-[#1A1A1A] font-baloo text-lg font-bold rounded-full hover:bg-[#ffd700] transition-colors duration-300"
                >
                  Order on Uber Eats
                </motion.button>
              </a>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-[#1A1A1A] text-[#1A1A1A] font-baloo text-lg font-bold rounded-full hover:bg-[#1A1A1A] hover:text-white transition-all duration-300"
              >
                Visit Us
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
