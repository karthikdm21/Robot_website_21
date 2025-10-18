import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useCart } from '../context/CartContext';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
}

const Cart: React.FC<CartProps> = ({ isOpen, onClose }) => {
  const { items, removeFromCart, updateQuantity, totalItems, totalPrice } = useCart();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-charcoal z-10"
            onClick={onClose}
          />
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25 }}
            className="fixed right-0 top-0 w-full md:w-96 h-screen bg-space-blue/50 backdrop-blur-glass 
                     border-l border-neon-aqua/20 z-20 overflow-y-auto"
          >
            <div className="p-6">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-neon-aqua">Your Cart</h2>
                <button
                  onClick={onClose}
                  className="text-soft-white/70 hover:text-cyber-mint transition-colors duration-200"
                >
                  ✕
                </button>
              </div>

              {items.length === 0 ? (
                <div className="text-center py-8">
                  <p className="text-soft-white/70">Your cart is empty</p>
                </div>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <motion.div
                      key={item.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      className="flex items-center space-x-4 p-4 rounded-lg bg-space-blue/30 
                               border border-neon-aqua/20"
                    >
                      <div className="w-16 h-16 rounded-lg bg-gradient-to-br from-electric-blue/20 
                                    to-cyber-mint/20 flex items-center justify-center">
                        🤖
                      </div>
                      <div className="flex-1">
                        <h3 className="text-soft-white font-medium">{item.name}</h3>
                        <p className="text-cyber-mint">${item.price.toLocaleString()}</p>
                      </div>
                      <div className="flex items-center space-x-2">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-8 h-8 flex items-center justify-center rounded-lg 
                                   bg-electric-blue/20 hover:bg-electric-blue/30 text-soft-white"
                        >
                          -
                        </button>
                        <span className="text-soft-white">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-8 h-8 flex items-center justify-center rounded-lg 
                                   bg-electric-blue/20 hover:bg-electric-blue/30 text-soft-white"
                        >
                          +
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-soft-white/50 hover:text-cyber-mint transition-colors duration-200"
                      >
                        ✕
                      </button>
                    </motion.div>
                  ))}

                  <div className="border-t border-neon-aqua/20 pt-4 mt-4">
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-soft-white/70">Total Items:</span>
                      <span className="text-soft-white">{totalItems}</span>
                    </div>
                    <div className="flex justify-between items-center mb-6">
                      <span className="text-soft-white/70">Total Price:</span>
                      <span className="text-cyber-mint font-bold">
                        ${totalPrice.toLocaleString()}
                      </span>
                    </div>
                    <button
                      className="w-full py-3 bg-electric-blue hover:bg-cyber-mint rounded-lg 
                               transition-colors duration-200 text-soft-white font-semibold"
                    >
                      Proceed to Checkout
                    </button>
                  </div>
                </div>
              )}
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Cart; 