import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  return (
    <footer className="bg-space-blue/50 border-t border-neon-aqua/20 backdrop-blur-glass">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold text-neon-aqua">RoboTech</h3>
            <p className="text-soft-white/70">
              Pioneering the future of AI and robotics for a better tomorrow.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-neon-aqua">Quick Links</h3>
            <ul className="space-y-2">
              {['About Us', 'Products', 'Support', 'Blog'].map((item) => (
                <li key={item}>
                  <Link 
                    to="/" 
                    className="text-soft-white/70 hover:text-cyber-mint transition-colors duration-200"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-neon-aqua">Contact</h3>
            <ul className="space-y-2 text-soft-white/70">
              <li>contact@robotech.com</li>
              <li>+1 (888) ROBOTECH</li>
              <li>123 AI Boulevard</li>
              <li>Tech City, TC 12345</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-neon-aqua">Stay Updated</h3>
            <p className="text-soft-white/70">
              Subscribe to our newsletter for the latest in AI and robotics.
            </p>
            <div className="flex space-x-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-2 rounded-lg bg-space-blue/30 border border-neon-aqua/20 
                         text-soft-white placeholder-soft-white/50 focus:outline-none focus:border-neon-aqua"
              />
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-4 py-2 bg-electric-blue hover:bg-neon-aqua text-soft-white hover:text-black rounded-lg 
                         transition-colors duration-200"
              >
                Subscribe
              </motion.button>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="flex flex-wrap justify-center space-x-6 mb-8">
          {['Twitter', 'LinkedIn', 'Facebook', 'Instagram'].map((social) => (
            <motion.a
              key={social}
              href="#"
              whileHover={{ y: -2 }}
              className="text-soft-white/70 hover:text-cyber-mint transition-colors duration-200"
            >
              {social}
            </motion.a>
          ))}
        </div>

        {/* Copyright */}
        <div className="text-center text-soft-white/50 text-sm">
          <p>© 2024 RoboTech. All rights reserved.</p>
          <p className="mt-2">
            Designed with advanced AI for the future of technology.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 