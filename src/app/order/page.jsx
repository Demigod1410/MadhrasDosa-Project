"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Clock, Truck, Shield, Star } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function OrderOnlinePage() {
  const benefits = [
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Hot, fresh food delivered to your doorstep"
    },
    {
      icon: Clock,
      title: "Track Your Order",
      description: "Real-time updates from kitchen to your door"
    },
    {
      icon: Shield,
      title: "Safe & Secure",
      description: "Contactless delivery options available"
    },
    {
      icon: Star,
      title: "Same Quality",
      description: "Restaurant-quality food, delivered"
    }
  ];

  return (
    <main className="min-h-screen bg-[#FFF8E7]">
      {/* Hero Section */}
      <section id="hero" className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/dosa.jpg"
            alt="Order Madhras Dosa Online"
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
            Order Online
          </h1>
          
          <p className="font-poppins text-2xl md:text-3xl text-white mb-4 leading-relaxed">
            Skip the wait. Get your favourite dish delivered straight to your door.
          </p>
          
          <p className="font-poppins text-xl md:text-2xl text-white/90 mb-10 leading-relaxed">
            We've partnered with Uber Eats so you can enjoy the Madhras Dosa experience from the comfort of your home.
          </p>
          
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 bg-[#febd01] text-[#1A1A1A] font-baloo text-xl font-bold rounded-full hover:bg-[#ffd700] transition-colors duration-300 inline-flex items-center gap-3"
          >
            Order Now on Uber Eats
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2.5} 
                d="M17 8l4 4m0 0l-4 4m4-4H3" 
              />
            </svg>
          </motion.button>
        </motion.div>
      </section>

      {/* Benefits Section */}
      <section id="benefits" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="font-baloo text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
              Why Order <span className="text-[#febd01]">With Us?</span>
            </h2>
            <p className="font-poppins text-lg md:text-xl text-[#2D2D2D] max-w-3xl mx-auto">
              Enjoy the same authentic South Indian flavours you love, delivered right to your door.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          >
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-[#FFF8E7] p-8 rounded-2xl border-2 border-[#febd01]/20 hover:border-[#febd01] transition-all duration-300 text-center"
                >
                  <div className="w-16 h-16 bg-[#febd01] rounded-full flex items-center justify-center mx-auto mb-6">
                    <Icon className="w-8 h-8 text-white" />
                  </div>
                  
                  <h3 className="font-baloo text-2xl font-bold text-[#1A1A1A] mb-3">
                    {benefit.title}
                  </h3>
                  
                  <p className="font-poppins text-base text-[#2D2D2D]">
                    {benefit.description}
                  </p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="py-20 px-6">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="font-baloo text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
              How It Works
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8"
          >
            {[
              {
                step: "01",
                title: "Browse Our Menu",
                description: "Explore our full range of authentic South Indian dishes on Uber Eats"
              },
              {
                step: "02",
                title: "Place Your Order",
                description: "Select your favourites and customize to your preference"
              },
              {
                step: "03",
                title: "Track Delivery",
                description: "Watch your order being prepared and delivered in real-time"
              },
              {
                step: "04",
                title: "Enjoy at Home",
                description: "Savour restaurant-quality food from the comfort of your home"
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-[#febd01] transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="w-20 h-20 bg-[#febd01] rounded-full flex items-center justify-center">
                      <span className="font-baloo text-3xl font-bold text-white">
                        {item.step}
                      </span>
                    </div>
                  </div>
                  
                  <div className="flex-1 text-center md:text-left">
                    <h3 className="font-baloo text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-3">
                      {item.title}
                    </h3>
                    <p className="font-poppins text-lg text-[#2D2D2D]">
                      {item.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 px-6 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <h2 className="font-baloo text-4xl md:text-5xl font-bold text-white mb-6">
              Craving <span className="text-[#febd01]">South Indian Food?</span>
            </h2>
            
            <p className="font-poppins text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Your favourite dosas, idlis, and curries are just a tap away.
            </p>
            
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-10 py-5 bg-[#febd01] text-[#1A1A1A] font-baloo text-xl font-bold rounded-full hover:bg-[#ffd700] transition-colors duration-300 inline-flex items-center gap-3"
            >
              Order Now on Uber Eats
              <svg 
                className="w-6 h-6" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2.5} 
                  d="M17 8l4 4m0 0l-4 4m4-4H3" 
                />
              </svg>
            </motion.button>

            {/* Trust Indicators */}
            <div className="mt-12 flex flex-wrap justify-center gap-8 text-white/80 font-poppins">
              <div className="flex items-center gap-2">
                <Star className="w-5 h-5 text-[#febd01]" fill="#febd01" />
                <span>4.6 Rating</span>
              </div>
              <div className="flex items-center gap-2">
                <Truck className="w-5 h-5 text-[#febd01]" />
                <span>Fast Delivery</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-[#febd01]" />
                <span>Safe & Fresh</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
