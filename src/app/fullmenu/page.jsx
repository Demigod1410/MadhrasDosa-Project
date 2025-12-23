"use client";
import Image from 'next/image';
import { motion } from "framer-motion";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function FullMenu() {
  const menuImages = [
    { id: 1, src: '/1.jpg', alt: 'Madhras Dosa Cover - Our Menu' },
    { id: 2, src: '/2.jpg', alt: 'Our Story' },
    { id: 3, src: '/3.jpg', alt: 'Sit-In Menu - Soups and Starters' },
    { id: 4, src: '/4.jpg', alt: 'Idli Lab and Extras' },
    { id: 5, src: '/5.jpg', alt: 'Dosa Lab' },
    { id: 6, src: '/6.jpg', alt: 'MD Special Parotta' },
    { id: 7, src: '/7.jpg', alt: 'Curries and Tapas' },
    { id: 8, src: '/8.jpg', alt: 'Dum Biryani and Biryani Platter' },
    { id: 9, src: '/9.jpg', alt: 'Set Meals, Sundries, Rice and Lunch Specials' },
    { id: 10, src: '/10.jpg', alt: 'Drinks and Desserts' }
  ];

  return (
    <div className="min-h-screen pt-20" style={{ backgroundColor: '#febd02' }}>
      <main>
        <div className="max-w-5xl mx-auto py-8 px-4">
          
          <div className="space-y-6">
            {menuImages.map((menu) => (
              <div key={menu.id} className="bg-white rounded-lg shadow-lg overflow-hidden">
                <Image
                  src={menu.src}
                  alt={menu.alt}
                  width={1200}
                  height={1600}
                  className="w-full h-auto"
                  priority={menu.id <= 3}
                />
              </div>
            ))}
          </div>
        </div>

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
                    Order Online
                  </motion.button>
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
