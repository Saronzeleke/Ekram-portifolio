import React from 'react';
import { ArrowDown, Download, Sparkles } from 'lucide-react';
import { motion, easeOut } from 'framer-motion';

const Hero: React.FC = () => {
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

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        ease: easeOut // use the imported easing function
      }
    }
  };

  const floatingAnimation = {
    y: [-10, 10, -10],
    transition: {
      duration: 3,
      repeat: Infinity,
      ease: easeOut // use the imported easing function
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gradient-to-br from-white via-gold-50 to-gold-100 dark:from-black dark:via-gray-900 dark:to-gray-800 pt-16 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div 
          className="grid lg:grid-cols-2 gap-12 items-center"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Content */}
          <div className="text-center lg:text-left">
            <motion.div
              variants={itemVariants}
              className="inline-flex items-center px-4 py-2 bg-gold-100 dark:bg-gold-900/30 text-gold-700 dark:text-gold-300 rounded-full mb-6"
            >
              <Sparkles className="w-4 h-4 mr-2" />
              <span className="text-sm font-medium">Available for new projects</span>
            </motion.div>

            <motion.h1 
              variants={itemVariants}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
            >
              Hey, I'm{' '}
              <motion.span 
                className="bg-gradient-to-r from-gold-500 to-gold-600 bg-clip-text text-transparent"
                animate={{ 
                  backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
              <i>Ekram ALI</i> 
              </motion.span>
            </motion.h1>
            
            <motion.p 
              variants={itemVariants}
              className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed"
            >
              Skilled Digital Marketer & Social Media Manager with proven expertise in driving growth, 
              creating compelling identities, and delivering measurable results for clients worldwide.
            </motion.p>

            <motion.div 
              variants={itemVariants}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              {/* <motion.button 
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-gold-500 to-gold-600 text-white font-semibold rounded-lg shadow-lg"
                whileHover={{ 
                  scale: 1.05,
                  boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                <Mail className="mr-2" size={20} />
                Get In Touch
              </motion.button> */}
              
              <motion.a 
              href="cv.pdf"
              download
              className="inline-flex items-center px-8 py-4 border-2 border-gold-500 text-gold-600 dark:text-gold-400 font-semibold rounded-lg"
  whileHover={{ 
    scale: 1.05,
    backgroundColor: "rgb(245, 158, 11)",
    color: "white"
  }}
  whileTap={{ scale: 0.95 }}
  transition={{ type: "spring", stiffness: 400, damping: 10 }}
>
  <Download className="mr-2" size={20} />
  Download CV
</motion.a>

            </motion.div>

            {/* Stats */}
            <motion.div 
              variants={itemVariants}
              className="grid grid-cols-3 gap-8 text-center"
            >
              {[
                { number: "10+", label: "Happy Clients" },
                { number: "10+", label: "Projects Done" },
                { number: "2+", label: "Years Experience" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  whileHover={{ scale: 1.1 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  <motion.div 
                    className="text-3xl font-bold text-gold-600 dark:text-gold-400"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ delay: 1 + index * 0.2, type: "spring", stiffness: 200 }}
                  >
                    {stat.number}
                  </motion.div>
                  <div className="text-gray-600 dark:text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </motion.div>
          </div>

          {/* Profile Image */}
          <motion.div 
            className="flex justify-center lg:justify-end"
            variants={itemVariants}
          >
            <div className="relative">
              <motion.div 
                className="w-80 h-80 rounded-full overflow-hidden border-8 border-gold-200 dark:border-gold-800 shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ type: "spring", stiffness: 300, damping: 10 }}
              >
                <img
                  src="h.jpg"
                  alt="Professional Profile"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              
              {/* Floating elements */}
              <motion.div 
                className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-gold-400 to-gold-500 rounded-full flex items-center justify-center text-white font-bold text-lg shadow-lg"
                animate={floatingAnimation}
              >
                ✨
              </motion.div>
              
              <motion.div 
                className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-r from-gold-500 to-gold-600 rounded-full flex items-center justify-center text-white font-bold shadow-lg"
                animate={{
                  ...floatingAnimation,
                  transition: {
                    ...floatingAnimation.transition,
                    delay: 1
                  }
                }}
              >
                🎯
              </motion.div>

              {/* Orbiting logo */}
              <motion.div
                className="absolute top-1/2 left-1/2 w-12 h-12 bg-white dark:bg-gray-800 rounded-full shadow-lg flex items-center justify-center"
                animate={{
                  rotate: 360,
                }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear"
                }}
                style={{
                  transformOrigin: "-120px 0px"
                }}
              >
                <div className="w-8 h-8 bg-gradient-to-r from-gold-500 to-gold-600 rounded flex items-center justify-center">
                  <span className="text-white font-bold text-xs">DM</span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        <motion.div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <ArrowDown className="text-gold-600 dark:text-gold-400" size={24} />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;