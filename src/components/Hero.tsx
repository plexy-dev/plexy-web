import React from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, Code2, Cloud, Cpu } from 'lucide-react';
import FadeIn from './animations/FadeIn';

export default function Hero() {
  return (
    <div className="relative overflow-hidden pt-[72px]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 pb-16 text-center lg:pt-32">
        <FadeIn>
          <h1 className="mx-auto max-w-4xl font-display text-4xl font-medium tracking-tight text-slate-900 sm:text-5xl md:text-6xl lg:text-7xl">
            Transforming Ideas into
            <motion.span
              className="relative whitespace-nowrap text-indigo-600 block sm:inline-block"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.2 }}
            >
              <span className="relative"> Digital Reality</span>
            </motion.span>
          </h1>
        </FadeIn>
        
        <FadeIn delay={0.2}>
          <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg tracking-tight text-slate-700 px-4 sm:px-0">
            We craft innovative solutions combining cutting-edge technology with creative excellence. 
            From AI to cloud architecture, we're your partner in digital transformation.
          </p>
        </FadeIn>

        <FadeIn delay={0.4}>
          <div className="mt-8 sm:mt-10 flex flex-col sm:flex-row justify-center gap-4 sm:gap-x-6 px-4">
            <motion.a
              href="#contact"
              className="group inline-flex items-center justify-center rounded-full py-2.5 sm:py-3 px-4 sm:px-6 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-indigo-600 text-white hover:bg-indigo-700 active:bg-indigo-800 focus-visible:outline-indigo-600"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Get Started
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </motion.a>
            <motion.a
              href="#services"
              className="group inline-flex ring-1 ring-slate-200 items-center justify-center rounded-full py-2.5 sm:py-3 px-4 sm:px-6 text-sm font-semibold focus:outline-none hover:ring-slate-300 active:bg-slate-100 active:text-slate-600 focus-visible:outline-blue-600 focus-visible:ring-slate-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              Our Services
            </motion.a>
          </div>
        </FadeIn>

        <div className="mt-16 sm:mt-20 grid grid-cols-2 gap-4 sm:grid-cols-3 sm:gap-8 px-4 sm:px-0">
          {[
            { icon: <Cloud className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-600" />, title: 'Cloud Solutions' },
            { icon: <Code2 className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-600" />, title: 'Full Stack Dev' },
            { icon: <Cpu className="h-5 w-5 sm:h-6 sm:w-6 text-indigo-600" />, title: 'AI Solutions' },
          ].map((item, index) => (
            <FadeIn key={index} delay={0.6 + index * 0.1}>
              <motion.div
                className="flex flex-col items-center"
                whileHover={{ y: -5 }}
                transition={{ duration: 0.2 }}
              >
                <motion.div
                  className="rounded-full bg-indigo-100 p-2 sm:p-3"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                >
                  {item.icon}
                </motion.div>
                <h3 className="mt-2 text-sm sm:text-base font-semibold text-slate-700">{item.title}</h3>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}