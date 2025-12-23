"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Instagram, ArrowRight } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};

export default function GalleryPage() {
  // Sample gallery images - using existing images from public folder
  const galleryImages = [
    { src: "/GR-Dosa.jpg", alt: "Ghee Roast Dosa" },
    { src: "/CC.jpg", alt: "Chettinad Curry" },
    { src: "/m-dosa.jpg", alt: "Masala Dosa" },
    { src: "/idli.jpg", alt: "Idli Sambar" },
    { src: "/P-Dosa.png", alt: "Paneer Dosa" },
    { src: "/uttapam.png", alt: "Uttapam" },
    { src: "/dosa.jpg", alt: "Traditional Dosa" },
    { src: "/GR-Dosa.jpg", alt: "Restaurant Interior" },
  ];

  return (
    <main className="min-h-screen bg-[#FFF8E7]">
      {/* Hero Section */}
      <section id="hero" className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/dosa.jpg"
            alt="Madhras Dosa Gallery"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-black/80" />
        </div>
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-10 text-center px-6 max-w-4xl mx-auto"
        >
          <h1 className="font-baloo text-5xl md:text-7xl font-bold text-white mb-6">
            Gallery
          </h1>
          
          <p className="font-poppins text-2xl md:text-3xl text-white mb-4 leading-relaxed">
            Every frame tells a story of spice, colour, and connection.
          </p>
          
          <p className="font-poppins text-xl md:text-2xl text-[#febd01] font-semibold mb-10 leading-relaxed">
            Madhras Dosa isn't just food. It's home served hot.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-[#febd01] text-[#1A1A1A] font-baloo text-xl font-bold rounded-full hover:bg-[#ffd700] transition-colors duration-300 inline-flex items-center gap-3"
          >
            View Gallery
            <ArrowRight className="w-6 h-6" />
          </motion.button>
        </motion.div>
      </section>

      {/* Gallery Grid Section */}
      <section id="gallery-grid" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="font-baloo text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
              Our <span className="text-[#febd01]">Visual Story</span>
            </h2>
            <p className="font-poppins text-lg md:text-xl text-[#2D2D2D] max-w-3xl mx-auto">
              A glimpse into our kitchen, our dishes, and the moments that make Madhras Dosa special.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="group relative aspect-square rounded-2xl overflow-hidden cursor-pointer"
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute bottom-0 left-0 right-0 p-4 text-white transform translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <p className="font-poppins text-sm font-medium">{image.alt}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-6 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="font-baloo text-4xl md:text-5xl font-bold text-white mb-6">
              Share Your <span className="text-[#febd01]">Madhras Moment</span>
            </h2>
            
            <p className="font-poppins text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Tag us in your photos and become part of our visual story!
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="https://www.instagram.com/madhrasdosa?igsh=bGlyZXo1MGhjYXRv" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-[#febd01] text-[#1A1A1A] font-baloo text-lg font-bold rounded-full hover:bg-[#ffd700] transition-colors duration-300 inline-flex items-center justify-center gap-3"
                >
                  <Instagram className="w-5 h-5" />
                  Follow @MadhrasDosa
                </motion.button>
              </a>
              
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-transparent border-2 border-white text-white font-baloo text-lg font-bold rounded-full hover:bg-white hover:text-[#1A1A1A] transition-all duration-300"
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
