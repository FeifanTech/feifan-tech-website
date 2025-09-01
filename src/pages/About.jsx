import React from 'react'
import { motion } from 'framer-motion'
import { Target, Eye, Heart, Award, Users, Lightbulb } from 'lucide-react'

const About = () => {
  const values = [
    {
      icon: <Lightbulb className="w-8 h-8" />,
      title: 'Innovation',
      description: 'We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions.'
    },
    {
      icon: <Heart className="w-8 h-8" />,
      title: 'Excellence',
      description: 'We are committed to delivering the highest quality in everything we do.'
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: 'Collaboration',
      description: 'We believe in the power of teamwork and building strong partnerships with our clients.'
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: 'Integrity',
      description: 'We conduct business with honesty, transparency, and ethical practices.'
    }
  ]

  const milestones = [
    {
      year: '2019',
      title: 'Company Founded',
      description: 'Feifan Tech was established with a vision to revolutionize technology solutions.'
    },
    {
      year: '2020',
      title: 'First Major Client',
      description: 'Successfully delivered our first enterprise-level digital transformation project.'
    },
    {
      year: '2021',
      title: 'Team Expansion',
      description: 'Grew our team of expert developers and technology consultants.'
    },
    {
      year: '2022',
      title: 'Innovation Awards',
      description: 'Recognized for outstanding innovation in enterprise technology solutions.'
    },
    {
      year: '2023',
      title: 'Global Reach',
      description: 'Expanded operations to serve clients across multiple regions.'
    },
    {
      year: '2024',
      title: 'AI Integration',
      description: 'Leading the integration of AI and machine learning in business solutions.'
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Feifan Tech</h1>
            <p className="text-xl md:text-2xl text-gray-200 max-w-4xl mx-auto">
              We are passionate technologists dedicated to creating extraordinary solutions 
              that drive digital transformation and business success.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <div className="mb-8">
                <div className="flex items-center mb-4">
                  <Target className="w-8 h-8 text-blue-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Mission</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To empower businesses with innovative technology solutions that drive growth, 
                  efficiency, and digital transformation. We believe technology should be accessible, 
                  powerful, and transformative for every organization.
                </p>
              </div>

              <div>
                <div className="flex items-center mb-4">
                  <Eye className="w-8 h-8 text-purple-600 mr-3" />
                  <h2 className="text-3xl font-bold text-gray-900">Our Vision</h2>
                </div>
                <p className="text-lg text-gray-700 leading-relaxed">
                  To be the leading technology partner that businesses trust for their digital 
                  transformation journey, creating a future where technology seamlessly enhances 
                  human potential and business success.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="bg-blue-600 rounded-2xl p-8 text-white shadow-lg">
                <h3 className="text-2xl font-bold mb-6">Leadership Excellence</h3>
                <div className="space-y-4">
                  <div className="flex items-start">
                    <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mr-4">
                      <span className="text-lg font-bold">XJ</span>
                    </div>
                    <div>
                      <h4 className="font-semibold">Xie Jinian (谢记年)</h4>
                      <p className="text-blue-100">Chief Technology Officer</p>
                      <p className="text-blue-100 text-sm mt-2">
                        Visionary technology leader with extensive experience in digital 
                        transformation and innovation strategy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              These core values guide every decision we make and every solution we deliver
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center p-6 bg-white rounded-xl shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center text-white mx-auto mb-4 shadow-sm">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Company Timeline */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Journey</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              A timeline of our growth, achievements, and milestones
            </p>
          </motion.div>

          <div className="relative">
            {/* Timeline line */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 bg-blue-600 h-full rounded-full"></div>
            
            <div className="space-y-12">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.8 }}
                  viewport={{ once: true }}
                  className={`flex items-center ${
                    index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'
                  }`}
                >
                  <div className="flex-1 px-8">
                    <div className={`p-6 bg-gradient-to-br ${
                      index % 2 === 0 
                        ? 'from-blue-50 to-purple-50' 
                        : 'from-purple-50 to-blue-50'
                    } rounded-xl shadow-sm`}>
                      <div className="text-2xl font-bold text-blue-600 mb-2">{milestone.year}</div>
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{milestone.title}</h3>
                      <p className="text-gray-600">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Timeline dot */}
                  <div className="w-4 h-4 bg-blue-600 rounded-full border-4 border-white shadow-md z-10"></div>
                  
                  <div className="flex-1 px-8"></div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Join Us on This Journey
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-3xl mx-auto">
              Be part of the digital transformation revolution. Let's create something extraordinary together.
            </p>
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default About