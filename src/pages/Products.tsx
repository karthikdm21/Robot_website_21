import { useState, useEffect } from 'react';
import { Link, useSearchParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { products } from '../data/products';

function Products() {
  const [searchParams] = useSearchParams();
  const category = searchParams.get('category');
  const [filteredProducts, setFilteredProducts] = useState(products);

  useEffect(() => {
    if (category === 'ai-assistance') {
      setFilteredProducts(products.filter(p => p.id === 1));
    } else if (category === 'ai-robots') {
      setFilteredProducts(products.filter(p => p.id !== 1));
    } else {
      setFilteredProducts(products);
    }
  }, [category]);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="space-y-8 pt-20"
    >
      <div className="flex justify-between items-center">
        <h1 className="text-3xl font-bold text-soft-white">
          {category ? category.split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ') : 'All Products'}
        </h1>
        <div className="flex gap-2">
          <Link
            to="/products"
            className={`px-4 py-2 rounded-lg ${
              !category
                ? 'bg-electric-blue text-soft-white'
                : 'bg-space-blue text-gray-300 hover:text-cyber-mint'
            } transition-colors duration-200`}
          >
            All
          </Link>
          <Link
            to="/products?category=ai-assistance"
            className={`px-4 py-2 rounded-lg ${
              category === 'ai-assistance'
                ? 'bg-electric-blue text-soft-white'
                : 'bg-space-blue text-gray-300 hover:text-cyber-mint'
            } transition-colors duration-200`}
          >
            AI Assistance
          </Link>
          <Link
            to="/products?category=ai-robots"
            className={`px-4 py-2 rounded-lg ${
              category === 'ai-robots'
                ? 'bg-electric-blue text-soft-white'
                : 'bg-space-blue text-gray-300 hover:text-cyber-mint'
            } transition-colors duration-200`}
          >
            AI Robots
          </Link>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {filteredProducts.map((product, idx) => (
          <Link
            key={product.id}
            to={`/products/${product.id}`}
            className="group"
          >
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ y: -10, scale: 1.03 }}
              className="bg-space-blue rounded-lg overflow-hidden hover:border hover:border-cyber-mint transition-colors duration-200 shadow-lg"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-bold text-soft-white mb-2 group-hover:text-cyber-mint transition-colors duration-200">
                  {product.name}
                </h3>
                <p className="text-gray-300 mb-4">
                  {product.description.substring(0, 100)}...
                </p>
                <p className="text-electric-blue font-bold">
                  ${product.price.toLocaleString()}
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </div>
    </motion.div>
  );
}

export default Products; 