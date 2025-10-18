import { motion } from 'framer-motion';
import { useCart } from '../context/CartContext';
import { Link } from 'react-router-dom';

function Cart() {
  const { items, removeFromCart, updateQuantity, total } = useCart();

  if (items.length === 0) {
    return (
      <div className="min-h-screen pt-20">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-soft-white mb-4">Your Cart is Empty</h1>
          <p className="text-gray-300 mb-8">Looks like you haven't added any products yet.</p>
          <Link
            to="/products"
            className="inline-block px-6 py-3 bg-electric-blue hover:bg-cyber-mint 
                     text-soft-white rounded-lg transition-colors duration-200"
          >
            Continue Shopping
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-soft-white mb-8">Your Cart</h1>
        
        <div className="space-y-6">
          {items.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              className="flex items-center justify-between p-6 bg-space-blue rounded-lg"
            >
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-20 h-20 object-cover rounded"
                />
                <div>
                  <h3 className="text-xl font-bold text-soft-white">{item.name}</h3>
                  <p className="text-gray-300">${item.price.toLocaleString()}</p>
                </div>
              </div>

              <div className="flex items-center space-x-4">
                <div className="flex items-center space-x-2">
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity - 1)}
                    className="px-3 py-1 bg-charcoal text-soft-white rounded hover:bg-gray-800"
                  >
                    -
                  </button>
                  <span className="text-soft-white">{item.quantity}</span>
                  <button
                    onClick={() => updateQuantity(item.id, item.quantity + 1)}
                    className="px-3 py-1 bg-charcoal text-soft-white rounded hover:bg-gray-800"
                  >
                    +
                  </button>
                </div>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-400 hover:text-red-300"
                >
                  Remove
                </button>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-8 p-6 bg-space-blue rounded-lg">
          <div className="flex justify-between items-center">
            <span className="text-2xl font-bold text-soft-white">Total:</span>
            <span className="text-2xl font-bold text-electric-blue">
              ${total.toLocaleString()}
            </span>
          </div>
          <div className="mt-6 flex justify-end space-x-4">
            <Link
              to="/products"
              className="px-6 py-3 bg-charcoal text-soft-white rounded-lg hover:bg-gray-800"
            >
              Continue Shopping
            </Link>
            <button
              className="px-6 py-3 bg-electric-blue text-soft-white rounded-lg hover:bg-cyber-mint"
            >
              Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart; 