"use client";
import { motion } from "framer-motion";
import Image from "next/image";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function Menu() {
  return (
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
  );
}
