"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Calendar, Clock, ArrowRight, BookOpen } from "lucide-react";

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

export default function BlogPage() {
  const featuredPosts = [
    {
      image: "/GR-Dosa.webp",
      category: "Recipes",
      title: "The Perfect Chutney Combo: A Complete Guide",
      excerpt: "Discover the art of pairing chutneys with your favourite dosas. From coconut to tomato, learn which combinations bring out the best flavours.",
      date: "December 8, 2025",
      readTime: "5 min read"
    },
    {
      image: "/CC.jpg",
      category: "Culture",
      title: "The Story Behind Our Chettinad Curry",
      excerpt: "Travel through the rich culinary heritage of Chettinad cuisine and learn how we bring these authentic flavours to Glasgow.",
      date: "December 5, 2025",
      readTime: "7 min read"
    },
    {
      image: "/m-dosa.jpg",
      category: "Sustainability",
      title: "Inside Our Sustainable Kitchen",
      excerpt: "From sourcing local ingredients to minimizing waste, discover how we're building a more sustainable restaurant experience.",
      date: "December 1, 2025",
      readTime: "6 min read"
    },
    {
      image: "/idli.jpg",
      category: "Health",
      title: "The Health Benefits of Fermented Foods",
      excerpt: "Why our naturally fermented dosas and idlis are not just delicious, but also incredibly good for your gut health.",
      date: "November 28, 2025",
      readTime: "8 min read"
    },
    {
      image: "/P-Dosa.png",
      category: "Behind the Scenes",
      title: "A Day in the Life of Our Kitchen",
      excerpt: "Step behind the open kitchen and see what goes into preparing authentic South Indian food for over 50,000 guests.",
      date: "November 25, 2025",
      readTime: "10 min read"
    },
    {
      image: "/uttapam.png",
      category: "Tips & Tricks",
      title: "How to Order Like a South Indian Regular",
      excerpt: "Master the art of ordering at Madhras Dosa with insider tips from our team on the best combinations and hidden menu gems.",
      date: "November 20, 2025",
      readTime: "4 min read"
    }
  ];

  return (
    <main className="min-h-screen bg-[#FFF8E7]">
      {/* Hero Section */}
      <section id="hero" className="relative h-[70vh] min-h-[600px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/dosa.jpg"
            alt="The Madhras Journal"
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
          <div className="flex items-center justify-center gap-3 mb-6">
            <BookOpen className="w-12 h-12 text-[#febd01]" />
            <h1 className="font-baloo text-5xl md:text-7xl font-bold text-white">
              Blog
            </h1>
          </div>
          
          <p className="font-poppins text-xl md:text-2xl text-white leading-relaxed max-w-3xl mx-auto">
            Welcome to The Madhras Journal, where every story is seasoned with culture. From decoding the perfect chutney combo to exploring our sustainable kitchen, this is your inside look at everything Madhras Dosa.
          </p>
        </motion.div>
      </section>

      {/* Featured Posts Section */}
      <section id="featured-posts" className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            className="text-center mb-16"
          >
            <h2 className="font-baloo text-4xl md:text-5xl font-bold text-[#1A1A1A] mb-6">
              Featured Posts
            </h2>
            <p className="font-poppins text-lg md:text-xl text-[#2D2D2D] max-w-3xl mx-auto">
              Explore our latest stories, recipes, and insights from the heart of Madhras Dosa.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {featuredPosts.map((post, index) => (
              <motion.article
                key={index}
                variants={fadeIn}
                className="bg-white rounded-2xl overflow-hidden border-2 border-gray-100 hover:border-[#febd01] transition-all duration-300 hover:shadow-xl group"
              >
                {/* Post Image */}
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={post.image}
                    alt={post.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-4 py-2 bg-[#febd01] text-[#1A1A1A] font-baloo text-sm font-bold rounded-full">
                      {post.category}
                    </span>
                  </div>
                </div>

                {/* Post Content */}
                <div className="p-6">
                  <h3 className="font-baloo text-2xl font-bold text-[#1A1A1A] mb-3 group-hover:text-[#febd01] transition-colors">
                    {post.title}
                  </h3>
                  
                  <p className="font-poppins text-base text-[#2D2D2D] mb-4 leading-relaxed">
                    {post.excerpt}
                  </p>

                  {/* Meta Info */}
                  <div className="flex items-center gap-4 text-sm text-[#666] font-poppins mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{post.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Read More Button */}
                  <motion.button
                    whileHover={{ x: 5 }}
                    className="inline-flex items-center gap-2 text-[#febd01] font-baloo text-lg font-bold group-hover:gap-3 transition-all"
                  >
                    Read More
                    <ArrowRight className="w-5 h-5" />
                  </motion.button>
                </div>
              </motion.article>
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
              Hungry for More Than <span className="text-[#febd01]">Stories?</span>
            </h2>
            
            <p className="font-poppins text-xl text-white/90 mb-10 max-w-2xl mx-auto">
              Come taste the flavours we write about. Your table is waiting.
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
              
              <a href="https://www.instagram.com/madhrasdosa?igsh=bGlyZXo1MGhjYXRv" target="_blank" rel="noopener noreferrer">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-transparent border-2 border-white text-white font-baloo text-lg font-bold rounded-full hover:bg-white hover:text-[#1A1A1A] transition-all duration-300"
                >
                  Visit Us
                </motion.button>
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
