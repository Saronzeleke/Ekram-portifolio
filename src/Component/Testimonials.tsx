import React from 'react';
import { Star, Quote } from 'lucide-react';
import { testimonials } from '../data/data';

const Testimonials: React.FC = () => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={`${
          index < rating
            ? 'text-gold-500 fill-current'
            : 'text-gray-300 dark:text-gray-600'
        }`}
      />
    ));
  };

  return (
    <section id="testimonials" className="py-20 bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Client Testimonials
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Don't just take my word for it. Here's what my clients have to say about 
            working with me and the results we've achieved together.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.id}
              className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg hover:shadow-xl transition-shadow duration-300"
            >
              <div className="flex items-start mb-6">
                <Quote className="text-gold-500 mr-4 flex-shrink-0" size={24} />
                <p className="text-gray-700 dark:text-gray-300 italic leading-relaxed">
                  "{testimonial.content}"
                </p>
              </div>

              <div className="flex items-center justify-between">
                <div className="flex items-center">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-12 h-12 rounded-full object-cover mr-4"
                  />
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      {testimonial.role} at {testimonial.company}
                    </p>
                  </div>
                </div>

                <div className="flex items-center space-x-1">
                  {renderStars(testimonial.rating)}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Indicators */}
        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-gray-900 rounded-lg p-8 shadow-lg">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-6">
              Trusted by Businesses Worldwide
            </h3>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 items-center">
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-600 dark:text-gold-400 mb-2">98%</div>
                <div className="text-gray-600 dark:text-gray-400">Client Satisfaction</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-600 dark:text-gold-400 mb-2">24h</div>
                <div className="text-gray-600 dark:text-gray-400">Response Time</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-600 dark:text-gold-400 mb-2">100%</div>
                <div className="text-gray-600 dark:text-gray-400">On-Time Delivery</div>
              </div>
              
              <div className="text-center">
                <div className="text-3xl font-bold text-gold-600 dark:text-gold-400 mb-2">85%</div>
                <div className="text-gray-600 dark:text-gray-400">Repeat Clients</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;