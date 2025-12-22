"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { Phone, Mail, MapPin, Clock, Facebook, Instagram, Youtube } from "lucide-react";

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

export default function Footer() {
  const quickLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/menu", label: "Menu" },
    { href: "/gallery", label: "Gallery" },
    { href: "/blog", label: "Blog" },
    { href: "/order", label: "Order Online" }
  ];

  const openingHours = [
    { days: "Monday - Tuesday", hours: "Closed" },
    { days: "Wednesday - Thursday", hours: "12PM - 9:30PM" },
    { days: "Friday - Saturday", hours: "12PM - 10PM" },
    { days: "Sunday", hours: "12PM - 9:30PM" }
  ];

  const socialLinks = [
    { 
      name: "TikTok", 
      href: "https://www.tiktok.com/@madhrasdosa", 
      icon: (
        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
          <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-5.2 1.74 2.89 2.89 0 012.31-4.64 2.93 2.93 0 01.88.13V9.4a6.84 6.84 0 00-1-.05A6.33 6.33 0 005 20.1a6.34 6.34 0 0010.86-4.43v-7a8.16 8.16 0 004.77 1.52v-3.4a4.85 4.85 0 01-1-.1z"/>
        </svg>
      )
    },
    { name: "Instagram", href: "https://www.instagram.com/madhrasdosa?igsh=bGlyZXo1MGhjYXRv", icon: <Instagram className="w-5 h-5" /> },
    { name: "Facebook", href: "https://www.facebook.com/madhrasdosa", icon: <Facebook className="w-5 h-5" /> },
    { name: "YouTube", href: "https://www.youtube.com/@madhrasdosa", icon: <Youtube className="w-5 h-5" /> }
  ];

  return (
    <footer className="bg-[#1A1A1A] text-white">
      {/* Main Footer Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12"
        >
          {/* Brand Section */}
          <motion.div variants={fadeIn}>
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12">
                <Image
                  src="/MD Logomark.png"
                  alt="Madhras Dosa"
                  fill
                  className="object-contain"
                />
              </div>
              <span className="font-baloo text-2xl font-bold text-white">
                Madhras Dosa
              </span>
            </Link>
            <p className="font-poppins text-white/80 leading-relaxed mb-6">
              Authentic South Indian cuisine in the heart of Glasgow. Fresh, bold, and unapologetically delicious.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 bg-white/10 hover:bg-[#febd01] rounded-full flex items-center justify-center transition-all duration-300 group"
                  aria-label={social.name}
                >
                  <span className="text-white group-hover:text-[#1A1A1A] transition-colors">
                    {social.icon}
                  </span>
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div variants={fadeIn}>
            <h3 className="font-baloo text-xl font-bold mb-6 text-[#febd01]">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-poppins text-white/80 hover:text-[#febd01] transition-colors duration-300 inline-block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Opening Hours */}
          <motion.div variants={fadeIn}>
            <h3 className="font-baloo text-xl font-bold mb-6 text-[#febd01] flex items-center gap-2">
              <Clock className="w-5 h-5" />
              Opening Hours
            </h3>
            <ul className="space-y-3">
              {openingHours.map((schedule, index) => (
                <li key={index} className="font-poppins text-sm">
                  <span className="text-white/90 font-medium block">
                    {schedule.days}
                  </span>
                  <span className={`${schedule.hours === "Closed" ? "text-red-400" : "text-white/70"}`}>
                    {schedule.hours}
                  </span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div variants={fadeIn}>
            <h3 className="font-baloo text-xl font-bold mb-6 text-[#febd01]">
              Contact Us
            </h3>
            <ul className="space-y-4">
              <li>
                <a
                  href="tel:+441414837919"
                  className="flex items-start gap-3 text-white/80 hover:text-[#febd01] transition-colors duration-300 group"
                >
                  <Phone className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="font-poppins text-sm">
                    +44 141 483 7919
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@madhrasdosa.co.uk"
                  className="flex items-start gap-3 text-white/80 hover:text-[#febd01] transition-colors duration-300 group"
                >
                  <Mail className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="font-poppins text-sm break-all">
                    info@madhrasdosa.co.uk
                  </span>
                </a>
              </li>
              <li>
                <a
                  href="https://maps.google.com/?q=76+Old+Dumbarton+Road,+Glasgow+G3+8RE"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start gap-3 text-white/80 hover:text-[#febd01] transition-colors duration-300 group"
                >
                  <MapPin className="w-5 h-5 mt-0.5 flex-shrink-0" />
                  <span className="font-poppins text-sm">
                    76 Old Dumbarton Road,<br />
                    Glasgow G3 8RE
                  </span>
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>

        {/* Quick CTAs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-12 pt-12 border-t border-white/10"
        >
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <a href="tel:+441414837919">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-[#febd01] text-[#1A1A1A] font-baloo text-base font-bold rounded-full hover:bg-[#ffd700] transition-colors duration-300 inline-flex items-center gap-2"
              >
                <Phone className="w-4 h-4" />
                Call Us
              </motion.button>
            </a>
            
            <a
              href="https://www.order.store/store/madhras-dosa/25wGc-j_VOeZBQ3r_KRs6g"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-transparent border-2 border-[#febd01] text-[#febd01] font-baloo text-base font-bold rounded-full hover:bg-[#febd01] hover:text-[#1A1A1A] transition-all duration-300"
              >
                Order Online
              </motion.button>
            </a>
            
            <a
              href="https://maps.app.goo.gl/6xkg5GQLaRpBPDe1A"
              target="_blank"
              rel="noopener noreferrer"
            >
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-3 bg-transparent border-2 border-white text-white font-baloo text-base font-bold rounded-full hover:bg-white hover:text-[#1A1A1A] transition-all duration-300 inline-flex items-center gap-2"
              >
                <MapPin className="w-4 h-4" />
                Find Us on Maps
              </motion.button>
            </a>
          </div>
        </motion.div>

        {/* Google Maps Embed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-12"
        >
          <div className="w-full h-[400px] rounded-2xl overflow-hidden border-2 border-white/10">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2238.7456789!2d-4.2876543!3d55.8697321!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x488845d05d8c1111%3A0x1234567890abcdef!2s76%20Old%20Dumbarton%20Rd%2C%20Glasgow%20G3%208RE!5e0!3m2!1sen!2suk!4v1234567890123!5m2!1sen!2suk"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Madhras Dosa Location"
            />
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="font-poppins text-sm text-white/60 text-center md:text-left">
              © {new Date().getFullYear()} Madhras Dosa. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link
                href="/privacy"
                className="font-poppins text-sm text-white/60 hover:text-[#febd01] transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="font-poppins text-sm text-white/60 hover:text-[#febd01] transition-colors"
              >
                Terms of Service
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
