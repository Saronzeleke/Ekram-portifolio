import React from 'react';
import { Heart, ArrowUp } from 'lucide-react';
import { motion } from 'framer-motion';

const Footer: React.FC = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="flex items-center mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-gold-500 to-gold-600 rounded-lg flex items-center justify-center mr-3 shadow-lg">
                <span className="text-white font-bold text-lg">DM</span>
              </div>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-gold-400 to-gold-500 bg-clip-text text-transparent">
                Digital Marketing Expert
              </h3>
            </div>
            <p className="text-gray-300 mb-4">
              Transforming businesses through strategic digital marketing . 
              Let's create something amazing together.
            </p>
            <div className="flex space-x-4">
              {['LinkedIn','Instagram','Twitter'].map((social, index) => {
                const urls: { [key: string]: string } = {
                  LinkedIn: "https://www.linkedin.com/in/ekram-ali-49aa852a5/   ",
                  Instagram: "https://www.instagram.com/ekram_alim?igsh=MTM5a3R3MGZ0bDBkZA==",
                  Twitter:"   https://x.com/ekramalimoh?t=TEZL9FkMJaiNvLRfIJi3sQ&s=09"
                };
                return (
                  <motion.a 
                    key={social}
                    href={urls[social]}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-gold-400 transition-colors duration-200"
                    whileHover={{ scale: 1.1, y: -2 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {social}
                  </motion.a>
                );
              })}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {['Home', 'About', 'Skills', 'My Work', 'Contact'].map((link, index) => (
                <motion.li key={link}>
                  <motion.a 
                    href={`#${link.toLowerCase().replace(' ', '')}`} 
                    className="text-gray-400 hover:text-gold-400 transition-colors duration-200"
                    whileHover={{ x: 5 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    {link}
                  </motion.a>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Services */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {[
                'Digital Marketing Strategy',
                'Content Creation',
                'Social Media Marketing',
                'Ads Management',
                'Copywriting'
              ].map((service, index) => (
                <motion.li 
                  key={service}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <span className="text-gray-400">{service}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Bottom Bar */}
        <motion.div 
          className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div className="text-gray-400 text-sm mb-4 md:mb-0">
            <p className="flex items-center">
              © 2024 Digital Marketing Portfolio. Made with{' '}
              <motion.span
                animate={{ scale: [1, 1.2, 1] }}
                transition={{ duration: 1, repeat: Infinity }}
              >
                <Heart className="inline w-4 h-4 text-red-500 mx-1" />
              </motion.span>
              for amazing clients.
            </p>
            
            <p className="mt-2">
             <a href="https://www.Sharonkuye369@gmail.com">Developed by <span className="text-gold-400 font-semibold">Saron Zeleke</span> </a>
            </p> 
            
          </div>
          
          <motion.button
            onClick={scrollToTop}
            className="flex items-center px-4 py-2 bg-gold-600 hover:bg-gold-700 text-white rounded-lg transition-colors duration-200"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
          >
            <ArrowUp size={16} className="mr-2" />
            Back to Top
          </motion.button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;