"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Phone, Mail, MapPin, Instagram, Facebook, Youtube, MessageCircle } from "lucide-react";

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

export default function ContactUsPage() {
  const contactMethods = [
    {
      icon: MessageCircle,
      title: "WhatsApp",
      description: "Message us directly",
      link: "https://wa.me/message/L36RDJ2YXTTHF1",
      linkText: "Send a Message",
      color: "#25D366"
    },
    {
      icon: Phone,
      title: "Phone",
      description: "Give us a call",
      link: "tel:+0141 339 0080",
      linkText: "+0141 339 0080",
      color: "#FF4500"
    },
    {
      icon: Mail,
      title: "Email",
      description: "Drop us an email",
      link: "mailto:info@madhrasdosa.co.uk",
      linkText: "info@madhrasdosa.co.uk",
      color: "#FF4500"
    }
  ];

  const socialMedia = [
    {
      name: "TikTok",
      href: "https://www.tiktok.com/@madhrasdosa",
      icon: () => (
        <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
        </svg>
      ),
      color: "#000000"
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/madhrasdosa?igsh=bGlyZXo1MGhjYXRv",
      icon: Instagram,
      color: "#E1306C"
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/madhrasdosa",
      icon: Facebook,
      color: "#1877F2"
    },
    {
      name: "YouTube",
      href: "https://youtube.com/@madhrasdosa?si=AAGA3PnFMyvwvPtO",
      icon: Youtube,
      color: "#FF0000"
    }
  ];

  return (
    <main className="min-h-screen bg-[#FFF8E7]">
      {/* Hero Section */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/dosa.jpg"
            alt="Contact Madhras Dosa"
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
            Contact Us
          </h1>
          <p className="font-poppins text-xl md:text-2xl text-white/90 max-w-2xl mx-auto">
            We'd love to hear from you
          </p>
        </motion.div>
      </section>

      {/* Main Contact Section */}
      <section className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          {/* Introduction */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="font-baloo text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
              Get in Touch
            </h2>
            <p className="font-poppins text-lg md:text-xl text-[#2D2D2D] max-w-2xl mx-auto leading-relaxed">
              Have a question, feedback, or just want to say hello? Reach out to us through any of these channels.
            </p>
          </motion.div>

          {/* Contact Methods */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-3 gap-8 mb-20"
          >
            {contactMethods.map((method, index) => (
              <motion.a
                key={index}
                variants={fadeIn}
                href={method.link}
                target={method.icon === MessageCircle ? "_blank" : undefined}
                rel={method.icon === MessageCircle ? "noopener noreferrer" : undefined}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 border-2 border-transparent hover:border-[#FF4500]/20 group"
              >
                <div className="mb-6">
                  <div 
                    className="w-16 h-16 rounded-full flex items-center justify-center transition-all duration-300"
                    style={{ backgroundColor: `${method.color}15` }}
                  >
                    <method.icon 
                      className="w-8 h-8 transition-all duration-300"
                      style={{ color: method.color }}
                    />
                  </div>
                </div>
                <h3 className="font-baloo text-2xl font-bold text-[#1A1A1A] mb-3">
                  {method.title}
                </h3>
                <p className="font-poppins text-[#666] mb-4">
                  {method.description}
                </p>
                <div className="font-poppins font-semibold text-[#FF4500] group-hover:text-[#E94B3C] transition-colors duration-300 break-words">
                  {method.linkText}
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* WhatsApp QR Code Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="bg-white rounded-3xl p-12 shadow-xl mb-20 border-2 border-[#25D366]/20"
          >
            <div className="max-w-2xl mx-auto text-center">
              <h3 className="font-baloo text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
                Connect on WhatsApp
              </h3>
              <p className="font-poppins text-[#2D2D2D] text-lg mb-8">
                Scan the QR code below to start a conversation with us on WhatsApp
              </p>
              
              <div className="flex justify-center mb-8">
                <div className="w-72 h-72 bg-white border-8 border-[#FFF8E7] rounded-2xl shadow-lg flex items-center justify-center p-4">
                  <div className="relative w-full h-full">
                    <Image
                      src="/dosawhatsapp1.jpg"
                      alt="WhatsApp QR Code - Madhras Dosa"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>
              </div>
              
              <p className="font-poppins text-[#666] text-sm">
                Or click the WhatsApp button above to message us directly
              </p>
            </div>
          </motion.div>

          {/* Location Info */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="bg-[#febd02] rounded-3xl p-12 shadow-xl mb-20"
          >
            <div className="max-w-3xl mx-auto text-center">
              <div className="mb-6">
                <div className="inline-block w-16 h-16 bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <MapPin className="w-8 h-8 text-[#1A1A1A]" />
                </div>
              </div>
              <h3 className="font-baloo text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-4">
                Visit Us
              </h3>
              <p className="font-poppins text-[#2D2D2D] text-lg md:text-xl leading-relaxed">
                Experience our open kitchen and authentic South Indian flavours in person. We look forward to serving you.
              </p>
            </div>
          </motion.div>

          {/* Social Media Section */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h3 className="font-baloo text-3xl md:text-4xl font-bold text-[#1A1A1A] mb-6">
              Follow Our Journey
            </h3>
            <p className="font-poppins text-lg text-[#2D2D2D] mb-10 max-w-2xl mx-auto">
              Stay connected with us on social media for updates, behind-the-scenes content, and more.
            </p>
            
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={staggerContainer}
              className="flex justify-center gap-6 flex-wrap"
            >
              {socialMedia.map((platform, index) => (
                <motion.a
                  key={index}
                  variants={fadeIn}
                  href={platform.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group"
                >
                  <div 
                    className="w-20 h-20 rounded-full flex items-center justify-center transition-all duration-300 shadow-lg hover:shadow-xl hover:scale-110"
                    style={{ backgroundColor: `${platform.color}15` }}
                  >
                    <platform.icon 
                      className="w-10 h-10 transition-all duration-300"
                      style={{ color: platform.color }}
                    />
                  </div>
                  <p className="font-poppins text-sm text-[#2D2D2D] mt-3 group-hover:text-[#FF4500] transition-colors duration-300">
                    {platform.name}
                  </p>
                </motion.a>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Bottom CTA Section */}
      <section className="py-16 px-6 bg-[#1A1A1A]">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            transition={{ duration: 0.6 }}
          >
            <h3 className="font-baloo text-3xl md:text-4xl font-bold text-white mb-4">
              We're Here to Help
            </h3>
            <p className="font-poppins text-white/80 text-lg">
              Whether you have questions about our menu, want to provide feedback, or need assistance with anything else, we're just a message away.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
