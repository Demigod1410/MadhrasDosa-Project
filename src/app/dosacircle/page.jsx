"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Users, Shield, Sparkles, ChefHat, Calendar, Gift, Lock, MessageCircle } from "lucide-react";

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

export default function DosaCirclePage() {
  const benefits = [
    {
      icon: Sparkles,
      title: "Secret and Limited-Time Menu Items",
      description: "Be the first to discover exclusive dishes crafted just for our inner circle."
    },
    {
      icon: Calendar,
      title: "Invitations to Tastings and Special Events",
      description: "Join intimate gatherings and experience new flavours before anyone else."
    },
    {
      icon: Gift,
      title: "Members-Only Privileges and Surprises",
      description: "Enjoy special perks and unexpected delights reserved for Dosa Circle members."
    },
    {
      icon: ChefHat,
      title: "Behind-the-Scenes Moments",
      description: "Get an exclusive look at what happens in our open kitchen and the stories behind our dishes."
    },
    {
      icon: Users,
      title: "Early Access to Selected Experiences",
      description: "Be among the first to know about and access new offerings before the general public."
    }
  ];

  const privacyPoints = [
    {
      icon: Lock,
      text: "Your phone number is not shared with other members"
    },
    {
      icon: Shield,
      text: "The community is managed only by Madhras Dosa admins"
    },
    {
      icon: MessageCircle,
      text: "Messages are sent only when there is genuine value"
    },
    {
      icon: Shield,
      text: "No spam. No constant promotions."
    }
  ];

  return (
    <main className="min-h-screen bg-[#FFF8E7]">
      {/* Hero Section */}
      <section className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/dosa.jpg"
            alt="Dosa Circle - Exclusive Community"
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
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mb-6"
          >
            <div className="inline-block p-4 bg-[#FF4500]/20 rounded-full backdrop-blur-sm">
              <Users className="w-16 h-16 text-[#febd02]" />
            </div>
          </motion.div>
          
          <h1 className="font-baloo text-6xl md:text-7xl font-bold text-white mb-6">
            Dosa Circle
          </h1>
          <p className="font-poppins text-xl md:text-2xl text-white/90 max-w-3xl mx-auto leading-relaxed">
            Our private WhatsApp community, created for guests who genuinely enjoy good Indian food, from dosas and more, and want a closer connection with Madhras Dosa.
          </p>
        </motion.div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="font-poppins text-xl md:text-2xl text-[#2D2D2D] leading-relaxed">
              It's not a promotional mailing list or a noisy chat group. Dosa Circle is <span className="font-semibold text-[#febd02]">intentionally small, curated, and value-driven.</span>
            </p>
          </motion.div>
        </div>
      </section>

      {/* Why Dosa Circle Exists */}
      <section className="py-20 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-baloo text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
              Why Dosa Circle Exists
            </h2>
            <p className="font-poppins text-lg md:text-xl text-[#2D2D2D] max-w-3xl mx-auto leading-relaxed">
              We wanted a simple way to stay connected with our most loyal guests and share things that don't belong on social media or delivery apps.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {benefits.map((benefit, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="bg-[#FFF8E7] p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border-2 border-transparent hover:border-[#febd02]/20"
              >
                <div className="mb-6">
                  <div className="w-14 h-14 bg-[#febd02]/10 rounded-full flex items-center justify-center">
                    <benefit.icon className="w-7 h-7 text-[#febd02]" />
                  </div>
                </div>
                <h3 className="font-poppins font-semibold text-xl text-[#1A1A1A] mb-4">
                  {benefit.title}
                </h3>
                <p className="font-poppins text-[#2D2D2D] leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Privacy Section */}
      <section className="py-20 px-6 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-baloo text-4xl md:text-5xl font-bold text-white mb-6">
              Your Privacy Comes First
            </h2>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 gap-6 mb-12"
          >
            {privacyPoints.map((point, index) => (
              <motion.div
                key={index}
                variants={fadeIn}
                className="flex items-start gap-4 bg-white/5 p-6 rounded-xl backdrop-blur-sm"
              >
                <div className="flex-shrink-0">
                  <div className="w-12 h-12 bg-[#febd02]/20 rounded-full flex items-center justify-center">
                    <point.icon className="w-6 h-6 text-[#febd02]" />
                  </div>
                </div>
                <p className="font-poppins text-white text-lg pt-2">
                  {point.text}
                </p>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center"
          >
            <p className="font-poppins text-white/80 text-lg">
              You're free to leave at any time.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Quality Over Quantity */}
      <section className="py-20 px-6 bg-[#FFF8E7]">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="font-baloo text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-8">
              Quality Over Quantity
            </h2>
            
            <div className="space-y-6 font-poppins text-lg md:text-xl text-[#2D2D2D] leading-relaxed">
              <p>
                Dosa Circle is built on the same principle as our food: <span className="font-semibold text-[#febd02]">doing fewer things, done properly.</span>
              </p>
              
              <p className="text-2xl font-medium text-[#1A1A1A] pt-4">
                We believe good food deserves thought, care, and respect.
              </p>
              
              <p className="text-2xl font-medium text-[#1A1A1A]">
                So does good communication.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Join Section with QR Code */}
      <section className="py-24 px-6 bg-[#febd02]">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="font-baloo text-5xl md:text-6xl font-bold text-[#1A1A1A] mb-6">
              How to Join
            </h2>
            <p className="font-poppins text-xl md:text-2xl text-[#2D2D2D] leading-relaxed max-w-2xl mx-auto">
              Joining Dosa Circle is simple. Click the link below or scan the QR code in-store to become part of our inner circle.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-3xl p-12 shadow-2xl max-w-2xl mx-auto"
          >
            {/* QR Code Container */}
            <div className="mb-10">
              <div className="w-64 h-64 mx-auto bg-white border-8 border-[#FFF8E7] rounded-2xl shadow-lg flex items-center justify-center p-4">
                <div className="relative w-full h-full">
                  <Image
                    src="/dosacircle.jpeg"
                    alt="Dosa Circle WhatsApp QR Code"
                    fill
                    className="object-contain"
                  />
                </div>
              </div>
              <p className="font-poppins text-center text-[#2D2D2D] mt-6 text-lg">
                Scan to join Dosa Circle
              </p>
            </div>

            {/* Join Button */}
            <div className="text-center">
              <a
                href="#"
                className="inline-block bg-[#febd02] hover:bg-[#ffd700] text-[#1A1A1A] font-poppins font-semibold text-lg px-12 py-5 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-105"
              >
                Join Dosa Circle on WhatsApp
              </a>
              <p className="font-poppins text-[#666] mt-6 text-sm">
                Click the button to join directly from your device
              </p>
            </div>
          </motion.div>

          {/* Final Message */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-center mt-16"
          >
            <p className="font-poppins text-[#1A1A1A] text-lg max-w-2xl mx-auto leading-relaxed">
              We look forward to welcoming you to our inner circle. Together, let's celebrate good food, thoughtful cooking, and meaningful connection.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
