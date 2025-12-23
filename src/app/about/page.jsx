"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle2, Eye, Heart, Sprout, Flame } from "lucide-react";

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

export default function AboutPage() {
  const whyChooseItems = [
    {
      icon: Eye,
      title: "A Fully Open Kitchen with Nothing to Hide",
      description: "Our kitchen is completely open, giving every guest a clear view of how their food is prepared. You can see the ingredients we use, the cleanliness we maintain, and the care that goes into every dosa and curry. Transparency is our everyday promise."
    },
    {
      icon: CheckCircle2,
      title: "Only Quality Ingredients, Always",
      description: "We never compromise on ingredients. From premium rice and lentils to fresh vegetables and carefully sourced spices, we choose only the best for our kitchen because our guests deserve nothing less."
    },
    {
      icon: Sprout,
      title: "Naturally Fermented Batter for Better Health",
      description: "Our rice and lentils are selected for both quality and nutrition. We rely on traditional fermentation methods that make our dosas and idlis lighter, healthier, and easier on the stomach. Good food should nourish, not just fill."
    },
    {
      icon: Flame,
      title: "Minimal Deep-Frying",
      description: "We keep deep-fried items to a minimum. Most of our menu is prepared on the tawa, steamed, or roasted, keeping flavours rich and meals wholesome."
    },
    {
      icon: Heart,
      title: "No Artificial Colours. No MSG. Ever.",
      description: "We believe that authentic flavour comes from real ingredients. That is why we stay committed to avoiding food colours, MSG, and artificial enhancers. What you get is pure, honest cooking inspired by the traditions of South India."
    }
  ];

  return (
    <main className="min-h-screen bg-[#FFF8E7]">
      {/* Hero Section */}
      <section id="hero" className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/dosa.jpg"
            alt="Madhras Dosa Restaurant"
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
            About Us
          </h1>
          <p className="font-poppins text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            More than food. More than flavour. This is our story.
          </p>
        </motion.div>
      </section>

      {/* Our Story Section */}
      <section id="story" className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <h2 className="font-baloo text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-8 text-center">
              Our Story
            </h2>
            
            <div className="space-y-6 font-poppins text-lg text-[#2D2D2D] leading-relaxed">
              <p>
                Madhras Dosa was never just about food. It's about the feeling that comes with the sizzle of a dosa, the comfort of sambhar, and the smell of home in a city far from it.
              </p>
              
              <p>
                It all began with two people from very different worlds.
              </p>
              
              <p>
                Satheesh, a chef with over a decade in Glasgow's top kitchens, knew how to make flavours speak. X, from the maritime industry, brought the grit and drive to turn that passion into something bigger.
              </p>
              
              <p>
                In late 2021, they opened Madhras Dosa with one promise: to serve honest, authentic South Indian food that makes people slow down, savour the moment, and smile.
              </p>
              
              <p>
                Since then, more than 50,000 guests have walked through our doors. Some curious, some homesick, all hungry.
              </p>
              
              <p className="font-semibold text-[#febd01] text-xl">
                And every one of them has left with a little piece of South India in their heart.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Vision & Mission Section */}
      <section id="vision-mission" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-12"
          >
            {/* Vision */}
            <motion.div
              variants={fadeIn}
              className="bg-[#FFF8E7] p-8 rounded-2xl border-2 border-[#febd01]/20 hover:border-[#febd01] transition-all duration-300"
            >
              <div className="w-16 h-16 bg-[#febd01] rounded-full flex items-center justify-center mb-6">
                <Eye className="w-8 h-8 text-white" />
              </div>
              
              <h2 className="font-baloo text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">
                Our Vision
              </h2>
              
              <p className="font-poppins text-lg text-[#2D2D2D] leading-relaxed">
                We believe that good food should also be good for you.
              </p>
              
              <p className="font-poppins text-lg text-[#2D2D2D] leading-relaxed mt-4">
                That's why we celebrate traditional South Indian cooking rooted in fermentation, freshness, and balance. When you dine with us, you trust us with your wellbeing, and we honour that trust with sincerity.
              </p>
            </motion.div>

            {/* Mission */}
            <motion.div
              variants={fadeIn}
              className="bg-[#FFF8E7] p-8 rounded-2xl border-2 border-[#febd01]/20 hover:border-[#febd01] transition-all duration-300"
            >
              <div className="w-16 h-16 bg-[#febd01] rounded-full flex items-center justify-center mb-6">
                <Heart className="w-8 h-8 text-white" />
              </div>
              
              <h2 className="font-baloo text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">
                Our Mission
              </h2>
              
              <p className="font-poppins text-lg text-[#2D2D2D] leading-relaxed">
                We prepare every dish with the mindset that our customer could be a nine-month pregnant mother, which means only the safest, cleanest, and highest-quality food leaves our kitchen.
              </p>
              
              <p className="font-poppins text-lg text-[#2D2D2D] leading-relaxed mt-4">
                Our mission is to serve honest, flavourful South Indian food made with integrity, freshness, and love.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-choose-us" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="font-baloo text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
              Why Choose Us
            </h2>
            <p className="font-poppins text-lg md:text-xl text-[#2D2D2D] max-w-3xl mx-auto leading-relaxed">
              At Madhras Dosa, we believe great food begins with honesty, quality, and genuine care. Here is what sets us apart and why our guests return to us meal after meal.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-8"
          >
            {whyChooseItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={index}
                  variants={fadeIn}
                  className="bg-white p-8 rounded-2xl border-2 border-gray-100 hover:border-[#febd01] transition-all duration-300 hover:shadow-lg"
                >
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 bg-[#febd01] rounded-full flex items-center justify-center">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                    </div>
                    
                    <div className="flex-1">
                      <h3 className="font-baloo text-2xl md:text-3xl font-bold text-[#1A1A1A] mb-4">
                        {item.title}
                      </h3>
                      <p className="font-poppins text-lg text-[#2D2D2D] leading-relaxed">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Meet Our Team Section */}
      <section id="team" className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center"
          >
            <h2 className="font-baloo text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
              Meet Our Team
            </h2>
            
            <div className="max-w-3xl mx-auto space-y-6 font-poppins text-lg text-[#2D2D2D] leading-relaxed">
              <p>
                Behind every dosa flipped and curry simmered is a team that loves what they do.
              </p>
              
              <p>
                Our chefs are storytellers, our servers are the heart of the house, and together, we create more than meals. We create moments.
              </p>
              
              <p className="font-semibold text-[#febd01] text-xl">
                Come say hello when you visit. We'd love to share our story (and maybe a dosa or two) with you.
              </p>
            </div>

            {/* Team Photo */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 relative w-full max-w-5xl mx-auto rounded-2xl overflow-hidden shadow-2xl border-4 border-[#febd01]"
            >
              <div className="relative w-full h-[500px] md:h-[600px]">
                <Image
                  src="/Staff1.jpg"
                  alt="Madhras Dosa Team"
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 1200px"
                />
              </div>
            </motion.div>
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
              Ready to Experience <span className="text-[#febd01]">Authentic South India?</span>
            </h2>
            
            <p className="font-poppins text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Visit us today and taste the difference that honesty, quality, and care make.
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
