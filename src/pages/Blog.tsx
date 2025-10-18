import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const blogPosts = [
  {
    id: 1,
    title: "The Future of AI Assistants: What to Expect in 2024",
    excerpt: "Discover how AI assistants are evolving and what new features we can expect in the coming year. From advanced neural networks to seamless integration with daily tasks, AI is transforming how we interact with technology.",
    date: "March 15, 2024",
    author: "Sarah Chen",
    image: "/AI-for-writing-blogs-1100x733.jpg",
    content: `
      The landscape of AI assistance is rapidly evolving, with neural networks becoming increasingly sophisticated and capable of handling complex tasks. The visualization above demonstrates how modern AI systems process and connect information across vast networks of data points, enabling more natural and intuitive interactions.

      Key developments we're expecting in 2024:
      • Enhanced natural language processing
      • More contextual understanding
      • Improved task automation
      • Better integration with existing systems
      • More personalized responses
    `,
    category: "AI Technology"
  },
  {
    id: 2,
    title: "Robotics in Healthcare: Supporting Elder Care with AI Companions",
    excerpt: "Explore how robotic assistants are revolutionizing elder care facilities, providing both practical assistance and companionship to seniors.",
    date: "March 10, 2024",
    author: "Michael Rodriguez",
    image: "/1721171946726.jpg",
    content: `
      The integration of AI-powered robots in healthcare settings, particularly in elder care facilities, represents a significant advancement in how we support our aging population. As shown in the image, modern care robots are designed to be approachable and helpful, capable of engaging with seniors in meaningful ways.

      Benefits of AI Companions in Elder Care:
      • 24/7 monitoring and assistance
      • Medication reminders
      • Social interaction and engagement
      • Emergency response capabilities
      • Support for daily activities
    `,
    category: "Healthcare Robotics"
  }
];

function Blog() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-screen pt-20"
    >
      <div className="max-w-4xl mx-auto px-4">
        <h1 className="text-4xl font-bold text-soft-white mb-8">Latest Blog Posts</h1>
        <div className="space-y-12">
          {blogPosts.map((post, idx) => (
            <motion.article
              key={post.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="bg-space-blue rounded-lg overflow-hidden hover:border hover:border-cyber-mint transition-all duration-200"
            >
              <div className="relative h-[400px] overflow-hidden">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-space-blue to-transparent" />
              </div>
              <div className="p-8">
                <div className="flex items-center space-x-4 mb-4">
                  <span className="text-electric-blue font-semibold">{post.category}</span>
                  <span className="text-gray-400">•</span>
                  <span className="text-gray-400">{post.date}</span>
                </div>
                <h2 className="text-2xl font-bold text-soft-white mb-4 hover:text-cyber-mint transition-colors duration-200">
                  {post.title}
                </h2>
                <p className="text-gray-300 mb-6 line-clamp-3">
                  {post.excerpt}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-gray-400">By {post.author}</span>
                  <Link
                    to={`/blog/${post.id}`}
                    className="inline-flex items-center space-x-2 text-electric-blue hover:text-cyber-mint transition-colors duration-200"
                  >
                    <span>Read More</span>
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      className="h-5 w-5" 
                      viewBox="0 0 20 20" 
                      fill="currentColor"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                  </Link>
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </motion.div>
  );
}

export default Blog; 