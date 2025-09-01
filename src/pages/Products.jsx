import React from 'react'
import { motion } from 'framer-motion'
import { 
  ShoppingCart, 
  Mic, 
  FileText, 
  Eye, 
  ArrowRight,
  CheckCircle,
  Star,
  Users,
  Download,
  Globe,
  Zap,
  Shield
} from 'lucide-react'

const Products = () => {
  const products = [
    {
      icon: <ShoppingCart className="w-8 h-8" />,
      title: 'Jianli E-commerce Platform',
      description: 'Comprehensive e-commerce solution with integrated payment, logistics, user management, and multi-vendor capabilities',
      features: [
        'Multi-vendor management system',
        'AI recommendation engine',
        'Mobile responsive design', 
        'Analytics dashboard',
        'Third-party payment integration'
      ],
      bgColor: 'bg-blue-600',
      status: 'live',
      users: '10,000+',
      rating: 4.8
    },
    {
      icon: <Mic className="w-8 h-8" />,
      title: 'AI Speech-to-Text Recognition',
      description: 'High-accuracy speech recognition technology with multi-language real-time transcription and voice command processing',
      features: [
        '99%+ recognition accuracy',
        '50+ languages supported',
        'Real-time transcription',
        'Noise filtering technology',
        'API integration ready'
      ],
      bgColor: 'bg-indigo-600',
      status: 'live',
      users: '50,000+',
      rating: 4.9
    },
    {
      icon: <FileText className="w-8 h-8" />,
      title: 'Intelligent OCR Recognition',
      description: 'Advanced optical character recognition technology for fast and accurate text extraction from images and documents',
      features: [
        'Multiple image format support',
        'Handwriting recognition',
        'Table structure recognition',
        'Batch processing capability',
        'Multi-language text recognition'
      ],
      bgColor: 'bg-blue-700',
      status: 'live',
      users: '25,000+',
      rating: 4.7
    },
    {
      icon: <Eye className="w-8 h-8" />,
      title: 'AI Image Recognition',
      description: 'Deep learning-based image recognition system for accurate identification and classification of objects, scenes, and people',
      features: [
        'Object detection & recognition',
        'Facial recognition technology',
        'Scene classification analysis',
        'Image quality assessment',
        'Custom model training'
      ],
      bgColor: 'bg-slate-600',
      status: 'live',
      users: '15,000+',
      rating: 4.6
    }
  ]

  const features = [
    {
      icon: <Zap className="w-6 h-6" />,
      title: 'High Performance',
      description: 'Optimized algorithms ensure fast response and processing capabilities'
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: 'Secure & Reliable',
      description: 'Enterprise-grade security with comprehensive data privacy protection'
    },
    {
      icon: <Globe className="w-6 h-6" />,
      title: 'Easy Integration',
      description: 'Complete API documentation and SDK support for seamless integration'
    },
    {
      icon: <Users className="w-6 h-6" />,
      title: 'Professional Support',
      description: '24/7 technical support and service guarantee for all customers'
    }
  ]

  return (
    <div>
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-blue-900 to-gray-900 text-white overflow-hidden">
        <div className="absolute inset-0 bg-black opacity-20"></div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">Our Products</h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto mb-4">
              Innovative AI Solutions & E-commerce Platforms
            </p>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Cutting-edge AI and e-commerce products designed to transform businesses 
              and enhance user experiences with intelligent automation.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Featured Products
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Experience the power of AI-driven solutions and advanced e-commerce platforms
            </p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {products.map((product, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition-all duration-300 group"
              >
                {/* Product Header */}
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-center space-x-4">
                    <div className={`w-16 h-16 ${product.bgColor} rounded-xl flex items-center justify-center text-white shadow-sm group-hover:scale-110 transition-transform`}>
                      {product.icon}
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-gray-900 mb-1">{product.title}</h3>
                    </div>
                  </div>
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-sm font-medium bg-green-100 text-green-800">
                    Live
                  </span>
                </div>

                {/* Product Description */}
                <div className="mb-6">
                  <p className="text-gray-700">{product.description}</p>
                </div>

                {/* Product Stats */}
                <div className="flex items-center space-x-6 mb-6">
                  <div className="flex items-center space-x-1">
                    <Users className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">{product.users} users</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-current" />
                    <span className="text-sm text-gray-600">{product.rating}/5.0</span>
                  </div>
                </div>

                {/* Features List */}
                <div className="mb-8">
                  <h4 className="text-lg font-semibold text-gray-900 mb-4">Key Features:</h4>
                  <div className="grid grid-cols-1 gap-3">
                    {product.features.map((feature, idx) => (
                      <div key={idx} className="flex items-start">
                        <CheckCircle className="w-5 h-5 text-green-500 mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-gray-700">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex flex-col sm:flex-row gap-3">
                  <button className="flex-1 inline-flex items-center justify-center px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-all transform hover:scale-105 shadow-sm">
                    <Download className="w-4 h-4 mr-2" />
                    Try Now
                  </button>
                  <button className="flex-1 inline-flex items-center justify-center px-6 py-3 border-2 border-gray-300 text-gray-700 rounded-lg font-semibold hover:border-blue-600 hover:text-blue-600 hover:bg-blue-50 transition-all">
                    Learn More
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </button>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Why Choose Our Products?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Built with cutting-edge technology and designed for enterprise-grade performance
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-gray-50 rounded-xl hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-blue-600 rounded-lg flex items-center justify-center text-white mx-auto mb-4 shadow-sm">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{feature.title}</h3>
                <p className="text-gray-600">{feature.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Experience the power of our AI solutions and e-commerce platforms. 
              Start your digital transformation journey today.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="inline-flex items-center px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-blue-50 transition-all transform hover:scale-105 shadow-lg">
                Get Started Free
                <ArrowRight className="ml-2 w-5 h-5" />
              </button>
              <button className="inline-flex items-center px-8 py-4 border-2 border-white/20 rounded-lg font-semibold hover:bg-white/5 hover:border-white/40 transition-all backdrop-blur-sm">
                Schedule Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default Products