import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, Building2, Briefcase, Award, Users } from 'lucide-react';
import FadeIn from './animations/FadeIn';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'CTO',
    company: 'TechVision Corp',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&q=80',
    quote: 'Plexy transformed our digital infrastructure with their cloud solutions. Their expertise in AI integration helped us achieve 200% efficiency improvement.',
    icon: Building2,
    rating: 5,
    tags: ['Cloud Migration', 'AI Integration'],
    stats: { improvement: '200%', timeframe: '3 months' }
  },
  {
    name: 'Michael Chen',
    role: 'CEO',
    company: 'InnovatePro',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80',
    quote: 'The full-stack development team at Plexy delivered beyond our expectations. Their agile approach and technical excellence set them apart.',
    icon: Briefcase,
    rating: 5,
    tags: ['Full Stack', 'UI/UX'],
    stats: { improvement: '150%', timeframe: '4 months' }
  },
  {
    name: 'Emily Rodriguez',
    role: 'Marketing Director',
    company: 'GrowthScale',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&q=80',
    quote: 'Their digital marketing strategies revolutionized our online presence. The analytics-driven approach delivered remarkable ROI.',
    icon: Award,
    rating: 5,
    tags: ['Digital Marketing', 'Analytics'],
    stats: { improvement: '180%', timeframe: '6 months' }
  },
  {
    name: 'David Park',
    role: 'Product Manager',
    company: 'FutureFlow',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&q=80',
    quote: 'Plexy's cybersecurity solutions gave us peace of mind. Their proactive approach to security challenges is unmatched.',
    icon: Users,
    rating: 5,
    tags: ['Cybersecurity', 'Consulting'],
    stats: { improvement: '250%', timeframe: '2 months' }
  }
];

export default function Testimonials() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="testimonials" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 animate-gradient">
                  Client Success Stories
                </span>
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-xl text-gray-600 max-w-3xl mx-auto"
            >
              Discover how we've helped businesses achieve extraordinary results through innovative solutions
            </motion.p>
          </div>
        </FadeIn>

        <div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2">
          {testimonials.map((testimonial, index) => (
            <FadeIn key={index} delay={0.1 * index}>
              <motion.div
                className={`relative group bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow ${
                  expandedIndex === index ? 'ring-2 ring-indigo-600' : ''
                }`}
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.02 }}
                onHoverStart={() => {
                  setHoveredIndex(index);
                  setExpandedIndex(index);
                }}
                onHoverEnd={() => {
                  setHoveredIndex(null);
                  setExpandedIndex(null);
                }}
              >
                {/* Gradient Border Animation */}
                <motion.div
                  className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 blur"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                />

                <div className="relative bg-white p-6 rounded-xl">
                  <div className="flex items-center">
                    <motion.div
                      className="relative w-16 h-16 rounded-full overflow-hidden"
                      whileHover={{ scale: 1.1 }}
                    >
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</p>
                    </div>
                    <motion.div
                      className="ml-auto w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      animate={{ 
                        rotate: hoveredIndex === index ? 360 : 0,
                        y: hoveredIndex === index ? [-5, 0, -5] : 0
                      }}
                      transition={{ 
                        rotate: { duration: 0.5 },
                        y: { repeat: Infinity, duration: 1.5 }
                      }}
                    >
                      <testimonial.icon className="h-5 w-5" />
                    </motion.div>
                  </div>

                  <div className="mt-4">
                    <div className="flex items-center mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <motion.div
                          key={i}
                          animate={{
                            scale: hoveredIndex === index ? [1, 1.2, 1] : 1,
                          }}
                          transition={{
                            duration: 0.5,
                            delay: i * 0.1,
                            repeat: hoveredIndex === index ? Infinity : 0,
                          }}
                        >
                          <Star className="h-5 w-5 text-yellow-400 fill-current" />
                        </motion.div>
                      ))}
                    </div>
                    <div className="relative">
                      <Quote className="absolute -left-2 -top-2 h-8 w-8 text-indigo-100 transform -rotate-12" />
                      <p className="text-gray-600 italic relative z-10 pl-6">{testimonial.quote}</p>
                    </div>
                  </div>

                  <AnimatePresence>
                    {expandedIndex === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                        className="mt-4"
                      >
                        <div className="grid grid-cols-2 gap-4">
                          <div className="bg-indigo-50 rounded-lg p-4">
                            <p className="text-sm text-gray-600">Improvement</p>
                            <p className="text-2xl font-bold text-indigo-600">{testimonial.stats.improvement}</p>
                          </div>
                          <div className="bg-purple-50 rounded-lg p-4">
                            <p className="text-sm text-gray-600">Timeframe</p>
                            <p className="text-2xl font-bold text-purple-600">{testimonial.stats.timeframe}</p>
                          </div>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {testimonial.tags.map((tag, idx) => (
                            <motion.span
                              key={idx}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: idx * 0.1 }}
                              className="px-3 py-1 rounded-full text-sm bg-gray-100 text-gray-600"
                            >
                              {tag}
                            </motion.span>
                          ))}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}