import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { products } from '../data/products';

function ProductDetail() {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  const product = products.find(p => p.id === Number(id));

  if (!product) {
    return (
      <div className="min-h-screen pt-20">
        <div className="text-center py-20">
          <h2 className="text-2xl font-bold text-soft-white">Product not found</h2>
        </div>
      </div>
    );
  }

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  return (
    <div className="min-h-screen pt-20">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-6xl mx-auto px-4"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Product Image */}
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            className="relative rounded-lg overflow-hidden bg-space-blue p-4"
          >
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-[400px] object-contain rounded-lg"
            />
          </motion.div>

          {/* Product Details */}
          <div className="space-y-6">
            <div>
              <h1 className="text-3xl font-bold text-soft-white mb-2">{product.name}</h1>
              <p className="text-2xl text-electric-blue font-bold">${product.price.toLocaleString()}</p>
            </div>

            <p className="text-gray-300 text-lg">{product.description}</p>

            {/* Features */}
            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-soft-white">Key Features</h2>
              <div className="grid grid-cols-1 gap-4">
                {product.features?.map((feature, index) => (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-space-blue p-4 rounded-lg"
                  >
                    <h3 className="text-electric-blue font-semibold mb-2">{feature.title}</h3>
                    <p className="text-gray-300">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Specifications */}
            {product.specs && (
              <div className="space-y-4">
                <h2 className="text-xl font-semibold text-soft-white">Specifications</h2>
                <div className="bg-space-blue p-4 rounded-lg">
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <p className="text-electric-blue font-semibold">Processor</p>
                      <p className="text-gray-300">{product.specs.processor}</p>
                    </div>
                    <div>
                      <p className="text-electric-blue font-semibold">Memory</p>
                      <p className="text-gray-300">{product.specs.memory}</p>
                    </div>
                    <div>
                      <p className="text-electric-blue font-semibold">Battery</p>
                      <p className="text-gray-300">{product.specs.battery}</p>
                    </div>
                    <div>
                      <p className="text-electric-blue font-semibold">Connectivity</p>
                      <p className="text-gray-300">{product.specs.connectivity}</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Add to Cart Section */}
            <div className="space-y-4">
              <div className="flex items-center space-x-4">
                <label htmlFor="quantity" className="text-soft-white">Quantity:</label>
                <input
                  type="number"
                  id="quantity"
                  min="1"
                  value={quantity}
                  onChange={(e) => setQuantity(Number(e.target.value))}
                  className="w-20 px-3 py-2 bg-charcoal border border-gray-700 rounded text-soft-white"
                />
              </div>
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                onClick={handleAddToCart}
                className="w-full px-6 py-3 bg-electric-blue hover:bg-cyber-mint text-soft-white rounded-lg 
                         transition-colors duration-200 font-semibold text-lg"
              >
                Add to Cart
              </motion.button>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

export default ProductDetail; 