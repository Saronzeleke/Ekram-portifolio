import React from 'react';
import { Award, Target, Users, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';
import type { Variants } from 'framer-motion';
const About: React.FC = () => {
  const highlights = [
    {
      icon: <Target className="w-8 h-8" />,
      title: "Strategic Approach",
      description: "Data-driven strategies that deliver measurable results and ROI"
    },
    {
      icon: <Users className="w-8 h-8" />,
      title: "Client-Focused",
      description: "Building long-term partnerships through exceptional service"
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Growth Oriented",
      description: "Proven track record of scaling businesses and increasing revenue"
    },
    {
      icon: <Award className="w-8 h-8" />,
      title: "Certified Expert",
      description: "Multiple certifications "
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2
      }
    }
  };

  // const itemVariants = {
  //   hidden: { y: 20, opacity: 0 },
  //   visible: {
  //     y: 0,
  //     opacity: 1,
  //     transition: {
  //       duration: 0.5,
  //       ease: "easeOut"
  //     }
  //   }
  // };
// In About.tsx


const itemVariants: Variants = {
  hidden: { y: 50, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20
    }
  }
};
  return (
    <section id="about" className="py-20 bg-white dark:bg-gray-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          {/* <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            About Me
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate digital marketing professional with expertise in creating compelling brand identities 
            and driving business growth through strategic marketing campaigns.
          </p> */}
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Transforming Businesses Through Digital Excellence
            </h3>
            
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                With over 2 years of experience in digital marketing,Copywriting, Content Creation and Social Media mangement I've helped 
                businesses of all sizes achieve their goals through strategic marketing campaigns 
                and compelling visual identities.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                My expertise spans across social media marketing, 
                Copywriting and Content Creation. I believe in data-driven approaches that deliver measurable results 
                and sustainable growth for my clients.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                What sets me apart is my commitment to understanding each client's unique needs and 
                crafting customized solutions that not only meet but exceed expectations. Every project 
                is an opportunity to create something exceptional.
              </motion.p>
            </div>

            <motion.div 
              className="mt-8 grid grid-cols-2 gap-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Specializations</h4>
                <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Digital Marketing </li>
                  <li>• Copy Writing</li>
                  <li>• Social Media Marketing</li>
                  <li>•  Advertising</li>
                </ul>
              </div>
              
              <div>
                <h4 className="font-semibold text-gray-900 dark:text-white mb-2">Industries</h4>
                <ul className="text-gray-600 dark:text-gray-300 space-y-1">
                  <li>• Digital Marketing</li>
                  <li>• Abay Mart</li>
                  <li>• Content Creation</li>
                  <li>• Copy Writing</li>
                </ul>
              </div>
            </motion.div>
          </motion.div>

          {/* Image */}
          <motion.div 
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="relative">
              <motion.img
                src="C:\Users\admin\Ekram-portifolio\dist\a.jpg"
                alt="Working on projects"
                className="rounded-lg shadow-2xl w-full max-w-md"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gold-500/20 to-transparent rounded-lg"></div>
              
              {/* Floating logo */}
              <motion.div
                className="absolute top-4 right-4 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center"
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 5, -5, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
              >
                <div className="w-8 h-8 bg-gradient-to-r from-gold-500 to-gold-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs">DM</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Highlights */}
        <motion.div 
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
        >
          {highlights.map((highlight, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className="text-center p-6 bg-gray-50 dark:bg-gray-800 rounded-lg hover:shadow-lg transition-shadow duration-300"
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
              }}
            >
              <motion.div 
                className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-r from-gold-500 to-gold-600 text-white rounded-full mb-4"
                whileHover={{ rotate: 360 }}
                transition={{ duration: 0.6 }}
              >
                {highlight.icon}
              </motion.div>
              <h4 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                {highlight.title}
              </h4>
              <p className="text-gray-600 dark:text-gray-300">
                {highlight.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default About;