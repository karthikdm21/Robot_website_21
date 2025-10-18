import { motion } from 'framer-motion';
import { useState } from 'react';

function About() {
  const [showContact, setShowContact] = useState(false);

  return (
    <div className="min-h-screen bg-space-blue text-soft-white">
      {/* Hero Section */}
      <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-space-blue/80 to-space-blue/40 z-10"></div>
        <div className="absolute inset-0 bg-[url('/images/about-hero.jpg')] bg-cover bg-center"></div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="relative z-20 text-center px-4"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About Us</h1>
          <p className="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto">
            Pioneering the future of robotics and automation
          </p>
        </motion.div>
      </section>

      {/* Mission Section */}
      <section className="py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Mission</h2>
            <p className="text-gray-300 text-lg leading-relaxed">
              At RobotShop, we're dedicated to revolutionizing the way businesses and individuals interact with technology. 
              Our mission is to create innovative, reliable, and accessible robotic solutions that enhance productivity and 
              improve lives across the globe.
            </p>
          </motion.div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {[
              {
                title: "Innovation",
                desc: "Pushing the boundaries of what's possible in robotics and automation"
              },
              {
                title: "Quality",
                desc: "Delivering products that exceed expectations in performance and reliability"
              },
              {
                title: "Accessibility",
                desc: "Making advanced technology available to businesses of all sizes"
              }
            ].map((value, idx) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: idx * 0.2 }}
                className="bg-space-blue/50 backdrop-blur-sm p-8 rounded-lg"
              >
                <h3 className="text-2xl font-bold text-electric-blue mb-4">{value.title}</h3>
                <p className="text-gray-300">{value.desc}</p>
              </motion.div>
            ))}
          </div>

          {/* Contact Button */}
          <div className="text-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setShowContact(true)}
              className="px-8 py-4 bg-electric-blue hover:bg-neon-aqua text-soft-white hover:text-black rounded-lg transition-colors duration-200 font-semibold text-lg backdrop-blur-md"
            >
              Contact Us
            </motion.button>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      {showContact && (
        <motion.section
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="py-20 px-4 bg-space-blue/90"
        >
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-soft-white mb-4">Get in Touch</h2>
              <p className="text-gray-300 text-lg">Have questions? We'd love to hear from you.</p>
            </motion.div>

            <motion.form
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="space-y-6"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-soft-white mb-2">Name</label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-3 bg-space-blue/50 border border-electric-blue/30 rounded-lg text-soft-white placeholder-gray-400 focus:outline-none focus:border-cyber-mint transition-colors duration-200"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-soft-white mb-2">Email</label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-3 bg-space-blue/50 border border-electric-blue/30 rounded-lg text-soft-white placeholder-gray-400 focus:outline-none focus:border-cyber-mint transition-colors duration-200"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="message" className="block text-soft-white mb-2">Message</label>
                <textarea
                  id="message"
                  rows={4}
                  className="w-full px-4 py-3 bg-space-blue/50 border border-electric-blue/30 rounded-lg text-soft-white placeholder-gray-400 focus:outline-none focus:border-cyber-mint transition-colors duration-200"
                  placeholder="Your message..."
                ></textarea>
              </div>
              <div className="flex justify-center gap-4">
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-4 bg-electric-blue hover:bg-neon-aqua text-soft-white hover:text-black rounded-lg transition-colors duration-200 font-semibold text-lg backdrop-blur-md"
                  type="submit"
                >
                  Send Message
                </motion.button>
                <motion.button
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setShowContact(false)}
                  className="px-8 py-4 bg-gray-600 hover:bg-gray-500 text-soft-white rounded-lg transition-colors duration-200 font-semibold text-lg backdrop-blur-md"
                  type="button"
                >
                  Cancel
                </motion.button>
              </div>
            </motion.form>
          </div>
        </motion.section>
      )}
    </div>
  );
}

export default About; 