import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, Quote, Building2, Briefcase, Award, Users, Sparkles } from 'lucide-react';
import FadeIn from './animations/FadeIn';

const testimonials = [
  // ... testimonials array remains the same
];

export default function Testimonials() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  return (
    <section id="testimonials" className="py-12 sm:py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn>
          <div className="text-center space-y-4">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-block"
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600 animate-gradient">
                  Client Success Stories
                </span>
              </h2>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base sm:text-lg md:text-xl text-gray-600 max-w-3xl mx-auto px-4 sm:px-0"
            >
              Discover how we've helped businesses achieve extraordinary results through innovative solutions
            </motion.p>
          </div>
        </FadeIn>

        <div className="mt-12 sm:mt-20 grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-2">
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
                <motion.div
                  className="absolute -inset-0.5 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-xl opacity-0 group-hover:opacity-100 transition duration-300 blur"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: hoveredIndex === index ? 1 : 0 }}
                />

                <div className="relative bg-white p-4 sm:p-6 rounded-xl">
                  <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-0">
                    <motion.div
                      className="relative w-16 h-16 rounded-full overflow-hidden mx-auto sm:mx-0"
                      whileHover={{ scale: 1.1 }}
                    >
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </motion.div>
                    <div className="text-center sm:text-left sm:ml-4">
                      <h3 className="text-lg font-semibold text-gray-900">{testimonial.name}</h3>
                      <p className="text-sm text-gray-600">{testimonial.role} at {testimonial.company}</p>
                    </div>
                    <motion.div
                      className="w-10 h-10 rounded-lg bg-indigo-50 flex items-center justify-center text-indigo-600 mx-auto sm:ml-auto sm:mx-0"
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
                    <div className="flex items-center justify-center sm:justify-start mb-2">
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
                      <p className="text-gray-600 italic relative z-10 pl-6 text-sm sm:text-base">{testimonial.quote}</p>
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
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div className="bg-indigo-50 rounded-lg p-4">
                            <div className="flex items-center gap-2">
                              <Sparkles className="h-4 w-4 text-indigo-600" />
                              <p className="text-sm text-gray-600">Innovation Level</p>
                            </div>
                            <p className="text-lg sm:text-xl font-bold text-indigo-600 mt-1">{testimonial.stats.innovation}</p>
                          </div>
                          <div className="bg-purple-50 rounded-lg p-4">
                            <p className="text-sm text-gray-600">Timeframe</p>
                            <p className="text-lg sm:text-xl font-bold text-purple-600">{testimonial.stats.timeframe}</p>
                          </div>
                        </div>
                        <div className="mt-4 flex flex-wrap gap-2">
                          {testimonial.tags.map((tag, idx) => (
                            <motion.span
                              key={idx}
                              initial={{ opacity: 0, scale: 0.8 }}
                              animate={{ opacity: 1, scale: 1 }}
                              transition={{ delay: idx * 0.1 }}
                              className="px-3 py-1 rounded-full text-xs sm:text-sm bg-gray-100 text-gray-600"
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