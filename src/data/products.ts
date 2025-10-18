export interface Product {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  features?: {
    title: string;
    description: string;
  }[];
  specs?: {
    processor: string;
    memory: string;
    battery: string;
    connectivity: string;
  };
}

export const products: Product[] = [
  {
    id: 1,
    name: "NeoAssist Pro",
    description: "Experience the future of personal assistance with our most advanced AI companion. NeoAssist Pro combines cutting-edge artificial intelligence with intuitive design to create the perfect digital assistant for your daily life.",
    price: 999.99,
    image: "/001.jpg",
    features: [
      {
        title: "Voice Recognition",
        description: "Advanced neural networks provide human-like conversation and natural language understanding."
      },
      {
        title: "Task Automation",
        description: "Streamline your daily routines with intelligent task management and automation."
      },
      {
        title: "Emotional Intelligence",
        description: "Sophisticated emotion recognition and response system for more natural interactions."
      }
    ],
    specs: {
      processor: "Quantum Neural Core",
      memory: "32GB RAM",
      battery: "48 hours continuous operation",
      connectivity: "5G, Wi-Fi 6E, Bluetooth 5.2"
    }
  },
  {
    id: 2,
    name: "RoboChef Elite",
    description: "Transform your kitchen with the RoboChef Elite. This advanced culinary robot combines precision cooking techniques with AI-powered recipe creation to deliver restaurant-quality meals at home.",
    price: 1499.99,
    image: "/Cooking bot.jpg",
    features: [
      {
        title: "AI Recipe Generation",
        description: "Creates unique recipes based on available ingredients and dietary preferences."
      },
      {
        title: "Precision Cooking",
        description: "Multiple cooking modes with temperature and timing accuracy to 0.1 degrees."
      },
      {
        title: "Smart Inventory",
        description: "Tracks ingredients and suggests recipes based on what you have."
      }
    ],
    specs: {
      processor: "CulinaryCore X2",
      memory: "16GB RAM",
      battery: "8 hours continuous operation",
      connectivity: "Wi-Fi 6, Bluetooth 5.0"
    }
  },
  {
    id: 3,
    name: "GuardianBot Security",
    description: "Keep your home safe with the most advanced AI-powered security robot. GuardianBot combines 24/7 surveillance with intelligent threat detection and emergency response capabilities.",
    price: 1299.99,
    image: "/security_bot_2.jpg",
    features: [
      {
        title: "AI Surveillance",
        description: "Advanced computer vision for real-time threat detection and analysis."
      },
      {
        title: "Emergency Response",
        description: "Automatic alert system with direct connection to emergency services."
      },
      {
        title: "Patrol Mode",
        description: "Autonomous patrolling with customizable routes and schedules."
      }
    ],
    specs: {
      processor: "SecurityCore Pro",
      memory: "32GB RAM",
      battery: "24 hours continuous operation",
      connectivity: "5G, Wi-Fi 6, Bluetooth 5.2"
    }
  }
]; 