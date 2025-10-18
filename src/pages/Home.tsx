import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

// Note: The "Created with Spline" watermark is added by Spline for free/public scenes and cannot be removed unless you have a paid Spline plan.

function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="min-h-screen w-full bg-space-blue flex flex-col">
      {/* Hero Section */}
      <section className="min-h-[80vh] w-full px-4 py-8 grid md:grid-cols-2 items-center justify-center gap-8 bg-space-blue">
        {/* Left: Hero Text */}
        <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-8 justify-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-6xl font-bold text-soft-white leading-tight"
          >
            Welcome to the Future of
            <span className="text-cyber-mint block mt-2">Robotics & AI</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="text-lg md:text-2xl text-gray-300 max-w-xl"
          >
            Discover cutting-edge AI companions and robotic solutions that transform the way you live and work.
          </motion.p>
          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto justify-center md:justify-start items-center">
            <Link to="/products">
              <button className="w-full sm:w-auto px-8 py-4 bg-electric-blue hover:bg-neon-aqua text-soft-white hover:text-black rounded-lg transition-colors duration-200 font-semibold text-lg backdrop-blur-md">
                Explore Products
              </button>
            </Link>
            <Link to="/about">
              <button className="w-full sm:w-auto px-8 py-4 border-2 border-electric-blue hover:border-cyber-mint text-soft-white rounded-lg transition-colors duration-200 font-semibold text-lg backdrop-blur-md">
                Learn More
              </button>
            </Link>
          </div>
        </div>

        {/* Right: Spline Robot */}
        <div className="flex justify-end items-center relative min-h-[700px] w-full overflow-visible">
          {/* @ts-ignore */}
          <spline-viewer
            url="https://prod.spline.design/F4oJyyk0auiasXai/scene.splinecode"
            style={{
              width: '100%',
              maxWidth: '1000px',
              minHeight: '700px',
              height: '600px',
              background: 'transparent',
              display: 'block',
              pointerEvents: 'none',
              overflow: 'visible',
            }}
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 px-4 bg-space-blue/90">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[{
            icon: '🤖',
            title: 'Advanced AI',
            desc: 'State-of-the-art artificial intelligence that learns and adapts to your needs.'
          }, {
            icon: '⚡',
            title: 'Smart Automation',
            desc: 'Seamless integration with your existing systems for enhanced productivity.'
          }, {
            icon: '🛡️',
            title: 'Secure & Reliable',
            desc: 'Built with enterprise-grade security and reliability in mind.'
          }].map((feature, idx) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              whileHover={{ scale: 1.07, y: -8 }}
              className="bg-space-blue/50 backdrop-blur-sm p-8 rounded-lg transition-transform duration-300 cursor-pointer"
            >
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-2xl font-bold text-soft-white mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-20 px-4 bg-space-blue/90">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-soft-white mb-4">Stay Updated</h2>
            <p className="text-gray-300 text-lg">Subscribe to our newsletter for the latest updates and exclusive offers.</p>
          </motion.div>
          <motion.form
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto"
          >
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-space-blue/50 border border-gray-700 rounded-lg text-soft-white focus:outline-none focus:border-electric-blue"
            />
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-electric-blue text-soft-white rounded-lg font-semibold hover:bg-cyber-mint transition-colors duration-200"
              type="submit"
            >
              Subscribe
            </motion.button>
          </motion.form>
        </div>
      </section>

    </div>
  );
}

export default Home; 